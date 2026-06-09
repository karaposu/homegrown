# Sensemaking: Loop Diagnose - Past Navigation Memory Index Before Search

## User Input

Given the weak prior inquiry at `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`, what did the prior loop likely miss when it recommended a maintained `PastNavigationMemoryFile Index` before validating deterministic active-tree search?

## SV1 - Baseline Understanding

The prior loop appears to have over-selected a maintained Markdown index because Homegrown values explicit durable artifacts. The later loop corrected that by showing that a documented search contract can be explicit without creating a mutable global registry.

That baseline is too simple. The prior loop did not ignore search; it included active-tree scan/backfill. The diagnostic must explain why search remained fallback instead of becoming the primary v1 mechanism.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- LOOP_DIAGNOSE requires comparing weak prior inquiry, human correction, and corrected inquiry.
- The corrected inquiry is comparative evidence, not ground truth.
- Exact root cause cannot be claimed unless artifacts isolate it.
- Prior and corrected discipline outputs are available and were read fully.
- The prior inquiry correctly narrowed scope away from all Navigation-related files.
- The prior inquiry correctly protected authority separation: index should not become current route truth.
- The corrected inquiry directly declares that it corrects the prior index recommendation.
- Current active candidate discovery is cheap and path/name searchable.
- Homegrown values explicitness, but explicitness can live in a protocol operation as well as in a Markdown registry.

### Key Insights

- The failure is not "search was absent." Search was present as validation/backfill.
- The failure is that search was not given its strongest form: a protocolized discovery contract with scopes, patterns, exclusions, statuses, and optional report.
- The prior loop evaluated a weak no-index alternative: "scan each time," which sounded ad hoc and memory-dependent.
- The corrected loop evaluated a stronger alternative: `PastNavigationMemoryFile Discovery Search`, which is explicit and repeatable.
- The prior loop's own fallback created a contradiction: if active-tree scan is required for safety, a maintained manual index is less foundational than the scan.
- The likely failure spans multiple stages because early framing shaped later candidate generation and critique.

### Structural Points

- Search can find candidate files.
- Search cannot interpret route memory.
- Route Memory Review interprets route memory for a current Navigation question.
- A maintained index duplicates derivable path/kind state unless it stores non-derivable metadata.
- If it stores non-derivable semantic state, it risks becoming secondary authority.
- A run-local candidate report records one search result without becoming a global mutable catalog.

### Foundational Principles

- Do not maintain duplicate state when it can be derived cheaply and reliably.
- Do not treat "no global file" as "no explicitness."
- Explicitness means future runners can inspect and repeat the mechanism.
- Historical evidence, candidate discovery, and current interpretation are separate layers.
- A weak candidate should not be killed before its strongest protocolized form has been considered.

### Meaning-Nodes

- maintained index
- deterministic search
- explicitness
- duplicate mutable state
- fallback becoming primary
- candidate discovery
- run-local report
- mixed attribution

## SV2 - Anchor-Informed Understanding

The prior loop likely missed a category boundary:

```text
maintained artifact
  != explicit mechanism
```

It treated the index as the explicit answer and search as safety fallback. The corrected inquiry shows a third category: a protocol-owned derived search, with a durable report only when the search result needs handoff or audit.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- Current active route-memory candidate is found by path/name search.
- A manual index of paths/kinds is mostly cached filesystem state.
- Mandatory scan/backfill means search is already the safety foundation.
- A maintained index creates write obligations across all route-memory-producing operations.

Technical reading:

The prior technical model was internally safe but heavier than necessary. It made the safer mechanism, scan/backfill, subordinate to the more failure-prone mechanism, manual registration.

### Human / User Perspective

New anchors:

- The user noticed the simpler question: "why index if we can search?"
- The prior answer may have sounded like Homegrown explicitness automatically means "create a maintained file."
- The corrected answer is easier to understand because it names the operation by what it does: Discovery Search.

Human reading:

The prior loop likely did not test the user's likely skepticism hard enough: if the data already exists in predictable files, a second list feels like ceremony unless it adds non-derivable value.

### Strategic / Long-Term Perspective

New anchors:

- Early-stage robustness matters, but robustness is not always more maintained files.
- Search-first keeps future generated index options open.
- Index revival triggers are a better strategic hedge than immediate manual registry creation.

Strategic reading:

The prior loop optimized for future growth too early. It assumed artifact count and naming complexity would make a registry worthwhile before evidence showed that search was inadequate.

### Risk / Failure Perspective

New anchors:

- Search can fail by under-matching or over-matching.
- Index can fail by silent omission and false absence.
- Silent index drift is dangerous at the moment Navigation decides whether old route memory exists.
- Loose search false positives are visible and controllable by scope/exclusion rules.

Risk reading:

The prior critique saw stale-index risk, but its chosen mitigation was scan/backfill. It did not fully prosecute that mitigation as evidence that search should be primary.

### Resource / Feasibility Perspective

New anchors:

- Prior active-tree scan found only one active map and no active review/frontier/sync artifacts.
- Maintaining the index would require creation-time registration across multiple future writer protocols.
- The corrected mechanism can be documented now and automated later.

Resource reading:

The prior loop's "cheap to backfill now" argument supported feasibility, but not necessity. A low backfill cost is not the same as a strong reason to create a permanent registry.

### Definitional / Consistency Perspective

New anchors:

- `PastNavigationMemoryFile` is a semantic category, not a filename.
- Discovery search produces candidates, not semantic truth.
- Route Memory Review provides semantic interpretation.
- A protocolized search can be an explicit Homegrown operation even if it does not always write a global file.

Definitional reading:

The corrected inquiry better preserves the category boundaries:

```text
Discovery Search -> candidate set
Route Memory Review -> current interpretation
Navigation -> current route map
```

The prior inquiry preserved the review boundary but put a mutable registry between filesystem evidence and review without proving that the registry added enough value.

### Self-Reference Check

New anchors:

- This diagnosis uses MVL+ to evaluate an MVL+ result.
- Self-reference risk is controlled by external anchors: the human correction, the corrected finding's direct `corrects:` relation, full archived outputs, and reproduced active-tree search.

Self-reference reading:

The diagnosis should remain hypothesis-based. It can identify likely failure surfaces, but should avoid pretending that the prior discipline internally experienced one exact failure mode.

## SV3 - Multi-Perspective Understanding

The strongest interpretation is mixed-stage failure:

- Exploration found search but did not develop it as a first-class mechanism.
- Sensemaking over-stabilized on "explicit durable artifact" and "one known place."
- Innovation killed a weak scan-only candidate instead of generating the stronger protocolized-search candidate.
- Critique accepted scan/backfill as mitigation instead of asking whether it should replace the index default.

The common mechanism underneath those stages is a category error: explicitness was mapped to maintained registry before "documented derivation + optional durable report" was tested.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Did the prior loop simply fail to search?

**Strongest counter-interpretation:**
Yes. The later inquiry physically tested active-tree search; the prior inquiry did not validate search deeply enough, so this is an Exploration failure.

**Why the counter-interpretation fails (structural grounds):**
The prior exploration did scan active artifacts and recorded the active Navigation map plus confirmed absence of active `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, and inquiry-local `navigation.md`. Prior finding also required scan/backfill. Search existed in the prior loop's evidence, but its role was fallback.

**Confidence:** HIGH.

**Resolution:**
The prior loop did not fail by omitting search entirely. It failed by under-modeling search as an explicit primary design.

**What is now fixed?**
The diagnosis must target search-role framing, not mere absence of search.

**What is no longer allowed?**
Saying "Exploration forgot to search" as the main diagnosis.

**What now depends on this choice?**
Failure hypotheses and maintenance candidates.

**What changed in the conceptual model?**
The failure becomes a framing/candidate-strength issue, not a simple missing-read issue.

### Ambiguity: Was Homegrown explicitness the root problem?

**Strongest counter-interpretation:**
Yes. The prior loop over-applied "Homegrown writes Markdown files" and therefore created an unnecessary artifact.

**Why the counter-interpretation fails (structural grounds):**
The corrected inquiry still preserves explicitness: it names `PastNavigationMemoryFile Discovery Search`, defines patterns/exclusions/statuses, and allows `past_navigation_memory_candidates.md` when handoff or audit requires durability. The problem was not explicitness itself. The problem was equating explicitness with a maintained global registry.

**Confidence:** HIGH.

**Resolution:**
The failure was an explicitness-shape error, not an explicitness-value error.

**What is now fixed?**
Maintenance candidates should teach the loop to distinguish maintained artifacts from explicit repeatable operations.

**What is no longer allowed?**
Treating this as evidence that Homegrown should stop creating explicit Markdown artifacts in general.

**What now depends on this choice?**
Any protocol patch wording.

**What changed in the conceptual model?**
Explicitness becomes a family of mechanisms: protocol contract, telemetry, run-local report, maintained index.

### Ambiguity: Is this mainly an Innovation failure?

**Strongest counter-interpretation:**
Yes. Innovation should have generated `PastNavigationMemoryFile Discovery Search` as a candidate, and because it did not, the wrong survivor won.

**Why the counter-interpretation fails (structural grounds):**
Innovation did generate related pieces: no-index scan, per-file metadata, generated search/index ideas, and hybrid registry plus scan refresh. But the prior sensemaking/decomposition had already stabilized the problem around index feasibility, scope, and ownership. Innovation inherited an index-centered frame and represented no-index as "scan each time," not as a named explicit protocol operation.

**Confidence:** LOW for single-stage attribution; MEDIUM for Innovation as a major contributing stage.

**Resolution:**
Innovation contributed by not strengthening the search alternative, but attribution is mixed.

**What is now fixed?**
The final diagnosis should not blame only Innovation.

**What is no longer allowed?**
Claiming one discipline alone caused the result.

**What now depends on this choice?**
Maintenance candidates should target both candidate generation and critique checks.

**What changed in the conceptual model?**
The failure is a pipeline framing cascade.

### Ambiguity: Did Critique fail despite being adversarial?

**Strongest counter-interpretation:**
No. Prior critique did its job: it identified stale-index risk, duplicate authority risk, killed broad indexing, and required scan/backfill.

**Why the counter-interpretation fails (structural grounds):**
Those checks are real, but critique stopped after making the index safer. It did not ask the stronger prosecution question: if scan/backfill is required to prevent false absence, why should the maintained manual index be the v1 default rather than a documented search contract? The corrected critique asks that question and kills the maintained global index as v1.

**Confidence:** HIGH that Critique missed this prosecution; LOW that Critique was the only failure surface.

**Resolution:**
Critique had strong adversarial work but missed the "fallback should become primary" attack.

**What is now fixed?**
Critique maintenance candidate can be narrowly scoped: when a survivor needs a fallback to be safe, test whether the fallback is the real primitive.

**What is no longer allowed?**
Treating "risk mitigated by fallback" as automatically enough.

**What now depends on this choice?**
Candidate critique check design.

**What changed in the conceptual model?**
Fallbacks can expose the actual mechanism, not merely patch the chosen mechanism.

### Ambiguity: Does the corrected inquiry prove search-first forever?

**Strongest counter-interpretation:**
Yes. If files are searchable, indexes should never be used.

**Why the counter-interpretation fails (structural grounds):**
The corrected inquiry itself names index revival triggers: missed files, naming drift, external consumers unable to search, browseable cross-run catalog need, or material search cost after enough artifacts exist. It defers generated/global index rather than killing it forever.

**Confidence:** HIGH.

**Resolution:**
Search-first is the v1 policy for current evidence. Maintained/generated index remains a future escalation.

**What is now fixed?**
Maintenance candidates should include evaluation gates, not permanent anti-index rules.

**What is no longer allowed?**
Overcorrecting into "never index."

**What now depends on this choice?**
Diagnostic verdict and maintenance risk class.

**What changed in the conceptual model?**
The index is an optimization/escalation behind evidence, not a default.

## SV4 - Clarified Understanding

The prior loop likely missed a stronger alternative, not a data source.

It saw:

```text
maintained index
scan fallback
```

It did not stabilize:

```text
protocolized Discovery Search
optional run-local candidate report
index revival triggers
```

The clearest failure shape is "fallback demotion": the mechanism needed to make the index safe was treated as secondary support instead of being evaluated as the main primitive.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Prior inquiry recommended a maintained global index as v1.
- Corrected inquiry replaced it with a named Discovery Search contract.
- The prior loop did consider active-tree scanning.
- The prior loop did not promote scanning into an explicit search contract.
- The corrected inquiry should be treated as comparative evidence, not absolute truth.
- Exact discipline attribution is mixed.

### Eliminated Options

- Diagnose from `finding.md` only.
- Say prior Exploration never searched.
- Say explicitness itself was wrong.
- Say indexes should never exist.
- Propose a broad MVL+ rewrite from this single chain.

### Viable Paths

- Hypothesis: Exploration under-probed search as primary. Confidence: MEDIUM-HIGH.
- Hypothesis: Sensemaking over-weighted maintained artifact explicitness. Confidence: MEDIUM-HIGH.
- Hypothesis: Innovation failed to generate the strongest search-contract candidate. Confidence: HIGH.
- Hypothesis: Critique missed fallback-as-primary prosecution. Confidence: HIGH.
- Maintenance candidate: add a narrow registry-vs-derivation check to relevant protocols. Confidence: MEDIUM-HIGH.

## SV5 - Constrained Understanding

The stable diagnostic frame:

```text
The prior loop correctly identified a discovery problem and correctly protected route-memory authority.
It failed in mechanism selection.
It selected a maintained registry before testing whether the registry was only a cache of a cheap deterministic search.
The corrected loop shows the missing mechanism: explicit Discovery Search plus optional run-local report.
```

This is not a total prior-loop failure. It is a mechanism-selection failure inside an otherwise reasonable safety model.

## Phase 5 - Conceptual Stabilization

The coherent model:

- Discovery needs explicitness.
- Explicitness has multiple implementation forms.
- A maintained index is justified when it adds value that cannot be cheaply derived, or when browseability/external consumption/search cost creates evidence-backed need.
- A protocolized search is better when path/name patterns are stable and candidate discovery can be derived from active files.
- A run-local report is the bridge when one search needs durable handoff.

The prior loop collapsed too early from "explicit discovery needed" to "maintained global index needed."

## SV6 - Stabilized Model

The prior loop likely missed that `PastNavigationMemoryFile` discovery could be explicit without being a maintained global registry.

It treated active-tree search as fallback/backfill and selected the index as the primary mechanism. The corrected inquiry shows the stronger architecture: use deterministic active-tree search as a named protocol operation, save a per-run candidate report only when handoff/audit needs it, and revive a global index only if search begins to fail or browseability becomes a real need.

Compared to SV1, the diagnosis is narrower and more cautious. This was not simply "Homegrown explicitness caused unnecessary file creation." It was a mixed-stage mechanism-selection failure: Exploration, Sensemaking, Innovation, and Critique all let the weaker "scan each time" framing stand, so the stronger "explicit Discovery Search contract" was not tested before the maintained index survived.

## Sensemaking Telemetry

Perspective saturation: sufficient. Technical, human, strategic, risk, resource, definitional, and self-reference perspectives produced converging but distinct anchors.

Ambiguity resolution ratio: 5 / 5 resolved with one low-confidence single-stage attribution rejected.

SV delta: strong. SV1 blamed broad explicitness; SV6 isolates maintained-registry-vs-derived-search mechanism selection.

Anchor diversity: sufficient. Constraints, key insights, structural points, principles, and meaning-nodes all contributed.
