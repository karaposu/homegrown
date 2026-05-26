---
status: active
corrects: devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md
related:
  - devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md
  - devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md
---

# Finding: /explore Relevance-Selection Mechanism

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md` — the "Pre-Scan Mandate v1" finding which proposed that `/explore` (the Structural Exploration discipline at `homegrown/explore/references/explore.md`) should be required to run a filesystem listing (via `tree`, `git ls-files`, etc.) as a coverage-boost mechanism.

**Revision trigger:** User correction. The prior finding's load-bearing claim — that "mandatory filesystem listing is the answer to more coverage for sure" — was incomplete. The user said: *"listing file names doesnt mean content will be consumed. the correct answer shuold be sth different, sth how explore handles choosing relevant content."* The prior finding addressed how items get LISTED into the inventory; it did not address how items get CHOSEN to actually be read from the inventory. That choice is the actual bottleneck.

**What's corrected.** The load-bearing claim. Filesystem listing alone does not guarantee that relevant content is consumed. Listing produces an inventory of item names; without an explicit relevance-judgment step, `/explore` still has to choose which items to read at depth, and the prior finding did not specify that choice mechanism. The gap left implicit was the answer.

**What's preserved.** The filesystem-listing mechanism itself — the prior Pre-Scan Mandate v1's five-entry tool-fallback chain (`tree` → `git ls-files` → `find` → `ls -R`), the `skip-listing: true` opt-out, and the boundary-listing telemetry fields. The mechanism remains useful. Its role is repositioned: it is one source that produces inventory items, which this finding's relevance filter then scores. The two mechanisms compose; neither replaces the other.

**What's new.** A cross-layer relevance-selection composition added to the `/explore` discipline spec at `homegrown/explore/references/explore.md` in three small spec changes plus a hygiene note and telemetry:

1. **Step 0 (§3.1) — relevance-criteria derivation sub-step.** Before the first scan-signal-probe cycle, `/explore` derives an explicit "relevance criteria" statement from the inquiry's Question and Goal.
2. **§2.1 — active relevance filter.** Scores each inventory item against the criteria on a HIGH / MEDIUM / LOW scale; items at or above the threshold get probed (read at depth); items below remain listed but unread.
3. **§5.3 — three telemetry fields** to make the filter auditable.
4. **§2.1/§2.2 hygiene note** — explicit distinction between Filter (gating reads) and Annotation (labeling output).

Plus a frontmatter `corrects:` declaration and this Changes-from-Prior body section.

**Migration.** None required. If the prior Pre-Scan Mandate v1 has shipped, it continues to work — its filesystem listing produces inventory items that this finding's filter then scores. If the prior finding hasn't shipped yet, both can ship together. They compose either way; there is no runtime ordering dependency, only the logical dependency that the filter operates on an inventory.

**Meta-lesson preserved.** The prior finding made a single-family fixation error — it picked one mechanism (filesystem listing) from the user's specific hint and treated it as the answer. The exploration phase of this inquiry deliberately used a frontier-first entry (no signal-first anchoring on any user hint) and enumerated about 17 candidate mechanisms across 10 mechanism families before adjudicating. The adjudication committed to a cross-layer composition, not a single-mechanism selection. Future inquiries on `/explore` enhancements should reuse this anti-fixation discipline.

---

## Question

How does `/explore` (the Structural Exploration discipline) reliably identify and CONSUME relevant content — not merely list territory boundaries — and what is the simplest concrete mechanism to make `/explore` choose RELEVANT items to actually read, rather than randomly sampling? Listing filenames does not mean their content gets consumed; the prior "tree command" hint was just one example of a broader relevance-selection problem.

**Goal.** A grounded design plus a concrete shippable mechanism for relevance-selection inside `/explore`: what determines which items get probed (read at depth) versus only surfaced (mentioned in the inventory). The answer should be shippable as a concrete spec edit to `homegrown/explore/references/explore.md` (and possibly `homegrown/explore/SKILL.md`); honest about the user's correction (listing ≠ consumption); and compatible with the prior canonical-coverage architecture and the prior identity-refresh spec language.

---

## Finding Summary

- **Mechanism.** `/explore` derives an explicit relevance criteria statement from the inquiry's Question and Goal at Step 0, then computes a 3-level relevance score (HIGH / MEDIUM / LOW) for each surfaced item against those criteria during Signal Detection (§2.1), and probes only items at or above a configurable threshold (default MEDIUM). The active filter at §2.1 is the load-bearing operation; everything else supports it.

- **Three small spec changes** to `homegrown/explore/references/explore.md`. Step 0 gets a criteria-derivation sub-step. §2.1 (Signal Detection) gets an active-filter strengthening that promotes the already-mentioned "relevance" signal from a passive surfacing-bias to an explicit gate on probing. §5.3 (telemetry) gets three new fields (the criteria statement, per-item scores with brief reasons, and the threshold used).

- **One hygiene note** to prevent the conflation that caused the prior finding's failure. The word "relevance" appears in two roles in the spec — an active filter at §2.1 (required; gates which items get read) and an annotation layer at §2.2 (optional; labels items for downstream consumers). These are different operations. The hygiene note makes the distinction explicit.

- **CORRECTS relationship to the prior cheap-coverage-boost finding.** The prior finding's filesystem-listing mechanism is preserved as one source of inventory items; its load-bearing claim is corrected (listing alone does not guarantee consumption). Both findings compose; the listing produces inventory, the filter scores it.

- **Two calibration safeguards** baked in (added during critique). The scoring mechanism includes a boundary rubric (concrete heuristics for HIGH / MEDIUM / LOW distinctions) and the criteria-derivation step includes a quality check (each criterion must reference a specific named subject from Question or Goal) to prevent the failure mode where vague Question / Goal inputs produce overly broad criteria that match everything trivially.

- **Six items deferred with revival triggers.** Multi-pass refinement; embedding the `/intuit` discipline (intuition-based relevance judgment); force-read-every-item as an alternative to filtering; promoting the filter from a sub-component of Signal Detection to a separate top-level cycle step; mid-flight user steering; making author-declared criteria the primary source instead of Question / Goal-derived ones. All have explicit revival triggers.

---

## Finding

### Surrounding context (why this matters)

`/explore` (the Structural Exploration discipline at `homegrown/explore/references/explore.md`) is the project's mechanism for mapping unknown territory — codebases, design spaces, conceptual landscapes. The bottleneck this finding addresses is structural: once `/explore` has SURFACED a set of candidate items in an inventory, how does it decide which items to actually READ at depth versus which to leave as mere mentions?

The prior cheap-coverage-boost finding tried to answer "how do we get more coverage" by mandating a filesystem listing at the start of `/explore` runs. But listing surfaces the existence of items; it does not consume their content. Without an explicit relevance-judgment step, the discipline still chooses what to read implicitly, often by lexical adjacency or LLM happenstance. The user's correction made this gap visible: the listing-mechanism was one input to the broader selection problem, not the answer to it.

This finding fills the gap by specifying the relevance-selection mechanism itself.

### The mechanism

#### 1. Step 0 — relevance criteria derivation

Add a sub-step to Step 0 (§3.1) of the `/explore` spec:

> *"**Relevance criteria derivation (Step 0).** Before the first scan-signal-probe cycle, `/explore` MUST derive an explicit relevance criteria statement from the inquiry's Question and Goal (read from `_branch.md`). The statement is recorded in the output and is the basis for the active relevance filter at Signal Detection (§2.1). If `_branch.md` includes author-declared relevance criteria, the runner MUST merge them into the derived statement; author-declared criteria take precedence on conflicts. This mandate fires in both artifact mode and possibility mode."*

The criteria statement is produced in this format (the LLM emits this as part of the run's output):

```markdown
**Relevance Criteria (derived from Question + Goal):**
For this inquiry, an item is RELEVANT if it bears on one or more of the following:
- First criterion — concrete; references named subjects from Question/Goal
- Second criterion — concrete
- Third criterion — concrete
(2-5 criteria total; concrete enough that a reader can apply them to inventory items)

Items that bear on these criteria get scored at MEDIUM or HIGH and get probed. Items
that don't bear on these criteria get scored LOW and remain listed but unread at this
resolution.
```

The derivation procedure for the LLM:

1. Read the Question and Goal from `_branch.md`.
2. Extract named subjects, named operations, named constraints, named "must-do" or "must-cover" items.
3. Produce 2 to 5 criterion bullets, each concrete enough to be applied to inventory items by inspection.
4. If `_branch.md` includes author-declared relevance criteria, merge them; author-declared takes precedence on conflicts.

**Quality check (added during critique).** Each derived criterion MUST reference at least one specific named subject (a concept, file, operation, or constraint) from Question or Goal. Criteria that are pure abstractions ("anything about X" where X is the inquiry's topic) trivially match all items and defeat the filter; such criteria must be revised to be more specific. If Question or Goal is too vague to extract specific subjects, the runner SHOULD flag the inquiry input as insufficient and defer to the human runner rather than emit overly-broad criteria.

#### 2. §2.1 — active relevance filter

Add a strengthening paragraph to §2.1 (Signal Detection) of the `/explore` spec:

> *"**Active relevance filter (strengthening of §2.1's relevance signal).** Of the five signal types named in this section (density, novelty, relevance, tension, absence), relevance drives the probe-or-not decision. After Scan surfaces items, the runner MUST compute a relevance score (per the scoring mechanism below) for each item against the relevance criteria derived at Step 0. Items at or above the threshold (default MEDIUM) get passed to Probe. Items below threshold remain in the inventory listed-but-unread at this resolution.*
>
> *This is an active filter: the score is computed and acts as a gate. The other four signal types (density, novelty, tension, absence) remain as in the existing text — they inform PRIORITY among items that pass the relevance filter, not whether items get read at all."*

#### 3. §2.1 — scoring mechanism (the determination)

Add the scoring mechanism to §2.1:

> *"**Scoring mechanism.** For each item surfaced during Scan (at the declared depth-level), the runner computes a relevance score against the relevance criteria statement on a 3-level scale:*
>
> *— **HIGH** — the item's labeling content clearly matches at least one criterion. Specifically: the item explicitly names a concept the criteria call out, OR the item's structural position makes it the obvious source for a criterion, OR the item's labeling content substantively addresses a criterion.*
>
> *— **MEDIUM** — the item's labeling content plausibly matches a criterion but the match is inferential. The item COULD be relevant but verification requires reading.*
>
> *— **LOW** — the item's labeling content shows no clear match to any criterion. Likely surfaced for completeness rather than purpose-bias.*
>
> *The score is the LLM's judgment per item, recorded explicitly with a brief reason.*
>
> ***Calibration heuristic (added during critique).*** *As a working rule for distinguishing levels: HIGH means the item's title, filename, or first-line labeling matches a criterion's named subject directly. MEDIUM means the labeling content suggests a match but verification requires reading the content. LOW means no observable match in the labeling content. When in doubt between two levels, prefer the lower level — the score is auditable; under-scoring is recoverable in a next-pass run; over-scoring wastes a probe.*
>
> ***Scoring quality scales with labeling depth.*** *At depth-level D2 (the default minimum per §2.3) scoring is reliable for direct matches; MEDIUM is the appropriate default when content is ambiguous. At depth-level D1 (coarse-resolution scans) the LLM has less labeling content to score against; the filter SHOULD default to a more permissive threshold (e.g., treat LOW as the cutoff rather than MEDIUM) to avoid excluding items that couldn't be properly scored at that depth."*

#### 4. §2.1 — threshold default

> *"**Threshold default: MEDIUM.** Items at MEDIUM or HIGH get probed (read at depth per the Probe component). Items at LOW get recorded in the inventory but not probed at this resolution. The user can configure via the `relevance-threshold` field in `_branch.md` Step 0 declarations (values: `LOW` = read more aggressively; `MEDIUM` = default; `HIGH` = read only the strongest matches). When the declared depth-level is D1, the threshold SHOULD default to LOW per the scoring-quality note above."*

#### 5. §2.1 / §2.2 hygiene note — Filter vs Annotation

> *"**Hygiene note: Filter vs Annotation.** The word "relevance" appears in two distinct roles in this spec:*
>
> *| Role | Where | What it does |*
> *|---|---|---|*
> *| **Active filter** | §2.1 Signal Detection | Gates which items get probed (read at depth). Required (MUST). |*
> *| **Annotation layer** | §2.2 (optional, low-commitment) | Labels items in the output for downstream consumers. Optional. |*
>
> *These are different operations. The filter serves /explore's own probe decisions; the annotation serves downstream consumers (other disciplines, human readers). Both may carry the same per-item relevance score, but they serve different purposes. Do not conflate them.*
>
> *(Historical context: the prior cheap-coverage-boost finding at `devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md` did not surface this distinction. The fix here is to make the active filter explicit and to make the distinction permanent in the spec.)"*

#### 6. §5.3 — telemetry fields

Add three telemetry fields to §5.3 (the base metrics list):

> *— `relevance_criteria` — the criteria statement (markdown text) derived at Step 0.*
> *— `per_item_relevance_scores` — an array of `{item_id, score: HIGH | MEDIUM | LOW, brief_reason}` records, one per surfaced inventory item.*
> *— `relevance_threshold` — the threshold used for the run (default MEDIUM; configurable).*
>
> *Together these make the filter operation fully auditable: a reader of `exploration.md` can verify what criteria the run used, how each item scored, and which items were filtered out versus probed."*

#### 7. Worked example

> *"**Worked example.** An inquiry asks: 'How does `/explore` handle the relevance-judgment step?' with Goal: 'Identify the mechanism, where it lives in the spec, and produce concrete shippable text.'*
>
> *At Step 0, the runner derives:*
>
> *Relevance Criteria (derived from Question + Goal):*
> *— Item names or describes the relevance-judgment mechanism in `/explore`.*
> *— Item names or describes where in the `/explore` spec the mechanism lives.*
> *— Item provides concrete spec-edit text or pseudocode for the mechanism.*
>
> *Scan surfaces 12 items. Scoring:*
> *— `homegrown/explore/references/explore.md` — HIGH (matches the first two criteria directly).*
> *— `homegrown/explore/SKILL.md` — MEDIUM (matches the location criterion partially).*
> *— `enes/intuit.md` — MEDIUM (matches the mechanism criterion inferentially; intuition is one form of relevance-judgment).*
> *— A related prior finding — MEDIUM (related context).*
> *— `homegrown/sense-making/references/sensemaking.md` — LOW (different discipline).*
> *— 7 other items — LOW (no match).*
>
> *With threshold MEDIUM, the runner probes 4 items (HIGH plus MEDIUM). The 8 LOW items are recorded in the inventory but unread. Telemetry records the criteria statement, all 12 per-item scores with reasons, and the threshold used."*

### Why this composition over the alternatives

The exploration phase enumerated about 17 candidate mechanisms across 10 mechanism families. Many were viable individually but each was incomplete:

- **Criteria-extraction alone** (without an active gate at Signal Detection) leaves the filter implicit — the LLM might compute criteria and then not apply them.
- **Score-and-rank alone** (without explicit criteria) makes the score arbitrary — what is being scored against?
- **Multi-pass refinement alone** is heavier than needed for single-pass cases; deferred.
- **Intuition-based selection** (via the `/intuit` discipline) is promising but `/intuit` is not yet shipped at Phase B+; deferred.
- **Force-read-every-item-to-minimum-depth** wastes probes on uniformly irrelevant items; deferred as a fallback.
- **Decompose-the-question-first** (use `/decompose` to break the question into sub-questions, then test relevance per sub-question) is a stronger but heavier mechanism; deferred until the simpler criteria-derivation proves insufficient.

The composition this finding ships is the minimum-sufficient cross-layer set: a criteria-derivation step (the input layer), an active filter at Signal Detection (the gating layer), a hygiene note (the disambiguation layer), telemetry (the audit layer), and a `corrects:` relationship to the prior finding (the lineage layer). Each layer addresses a specific aspect of the relevance-selection problem; none of them alone is sufficient.

The single-family fixation failure mode (picking one mechanism and declaring it the answer) is structurally prevented by the cross-layer design.

---

## Next Actions

### MUST

- **What:** Apply the four spec edits to `homegrown/explore/references/explore.md` — the Step 0 criteria-derivation sub-step, the §2.1 active-filter strengthening (which includes the scoring mechanism, the threshold default, and the calibration heuristic), the Filter-vs-Annotation hygiene note bridging §2.1 and §2.2, and the three telemetry fields in §5.3.
  - **Who:** human author (or `/edit-mvl` if/when implemented).
  - **Gate:** condition-bound — when the user is ready to update the `/explore` spec.
  - **Why:** ships the relevance-selection mechanism. Without these edits, the finding remains a design document and `/explore` continues to choose items implicitly.

- **What:** Sync the canonical version at `homegrown/protocols/`-adjacent locations and the installed copy at `~/.claude/skills/explore/references/explore.md`. The project memory notes that the canonical version lives in `homegrown/` and should be edited first.
  - **Who:** human author.
  - **Gate:** condition-bound — at spec-edit time.
  - **Why:** keeps the installed runtime spec consistent with the project's canonical version.

### COULD

- **What:** Extend the canonical-source registry from the prior canonical-coverage finding at `devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md` to feed author-declared relevance criteria automatically (registry items default to HIGH-relevance for inquiries that reference them).
  - **Who:** human author + future `/staged-explore` runner.
  - **Gate:** condition-bound — when the registry is shipped and stable.
  - **Why:** composes the two findings; reduces the need for inquiry authors to repeat criteria the registry already encodes.

- **What:** Add inquiry-type-keyed criteria hints (e.g., for "concept-mapping" inquiries, prefer items whose labels name concepts; for "layout-mapping" inquiries, prefer files and folders). The kinds-of-mapping typology from the prior identity-refresh finding at `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md` provides the typology.
  - **Who:** human author.
  - **Gate:** condition-bound — after 5 inquiries have run with the active filter and patterns are observable.
  - **Why:** makes criteria-derivation faster and more reliable when the inquiry type signals what "relevant" means.

### DEFERRED

- **What:** Multi-pass refinement of relevance scores — scan → score → read top → re-score with new context → repeat.
  - **Gate:** condition-bound — revive if single-pass scoring proves insufficient in 3 or more inquiries (observable: the run's filter excluded items that subsequent disciplines needed).
  - **Why (if revived):** captures relevance information that only becomes visible after some items have been read.

- **What:** Embed the `/intuit` discipline (intuition-based relevance judgment via the Predictive-RC mechanism described at `enes/intuit.md`) as an alternative or supplement to criteria-matching.
  - **Gate:** condition-bound — revive when `/intuit` Phase B or later ships and the corpus is rich enough for intuition to be reliable.
  - **Why (if revived):** intuition captures relevance signals that explicit criteria miss.

- **What:** Force-read-every-item-to-minimum-depth as a fallback that bypasses the filter entirely.
  - **Gate:** condition-bound — revive if criteria-driven filtering proves too brittle (observable: across 3 or more inquiries, the criteria-derivation step produces criteria that exclude items the human runner judges relevant in retrospect).
  - **Why (if revived):** trades extra probes for reduced risk of missed-relevance.

- **What:** Mid-flight user steering — allow the human runner to override scores or criteria during a run, not only at Step 0.
  - **Gate:** condition-bound — revive as the project moves to higher-autonomy modes (L2 or above) where the runner operates with less initial supervision.
  - **Why (if revived):** keeps human-in-loop while raising autonomy.

- **What:** Promote the active filter from a sub-component of Signal Detection (§2.1) to a separate top-level cycle step called "Relevance Selection" in §3.4 (the canonical cycle).
  - **Gate:** condition-bound — revive if the §2.1 strengthening proves insufficient (observable: readers of the `/explore` spec consistently miss the filter operation despite the hygiene note).
  - **Why (if revived):** makes the filter more discoverable structurally; trade-off is spec-bloat.

- **What:** Make author-declared relevance criteria the primary source (instead of Question / Goal-derived criteria), with derivation as a fallback.
  - **Gate:** condition-bound — revive if Question / Goal-derivation reliably misses author intent across 3 or more inquiries (observable: human runners override the derived criteria immediately after Step 0).
  - **Why (if revived):** the author often knows what's relevant before the LLM does; making author-declared primary captures that knowledge directly.

---

## Reasoning

### Why a cross-layer composition rather than a single mechanism

The prior cheap-coverage-boost finding's failure was a single-family fixation — it picked the filesystem-listing mechanism (which was the user's hint, not the user's adjudicated answer) and treated it as the answer. The user's correction made it clear that the listing-mechanism addressed inventory production but not item consumption.

The sensemaking phase of this inquiry adjudicated three questions: (1) which mechanism family is the right primary answer; (2) what is the relationship to the prior finding; (3) is the answer about filtering reads or annotating outputs. The resolution was that no single family is sufficient — the answer operates across at least three layers (criteria production, filter application, spec hygiene) plus telemetry plus a CORRECTS declaration. The cross-layer composition was the structural fix to the prior finding's structural failure.

### What was considered and rejected

- **"Listing is the answer"** (the prior finding's claim). KILLED in sensemaking: listing produces inventory items; consumption is a downstream operation that the prior finding did not specify. The mechanism is preserved as input but the claim is corrected.

- **Annotation-primary** (use §2.2's annotation layer as the gate). KILLED in sensemaking: annotation labels items for downstream consumers; it does not gate `/explore`'s own read decisions. Conflating filter and annotation was a contributor to the prior finding's failure; the hygiene note in this finding makes the distinction permanent.

- **Continuous (0-1) scoring**. KILLED in innovation: over-precise for LLM-as-judge; introduces false precision; harder to audit. 3-level scoring is more robust.

- **Binary (relevant / not) scoring**. KILLED in innovation: too crude; no middle case for items where the LLM cannot tell without reading. 3-level scoring keeps the MEDIUM bucket for the inferential cases.

- **Force-read-every-item as the primary mechanism**. KILLED in sensemaking: wastes probes on items that are uniformly irrelevant; the filter is the more parsimonious mechanism. Deferred as a fallback if filtering proves too brittle.

### What survived and why

The "Active Relevance Filter" composition survived critique with two small textual refinements baked in (the calibration heuristic in the scoring mechanism, and the criteria-quality check in the derivation procedure). Critique's adversarial testing across 15 dimensions found:

- All HIGH-weight content dimensions pass: correctness (the filter gates reads), coherence (the §2.1 strengthening composes with existing wording), user-correction-faithfulness (the load-bearing operation is at the read step), single-family-fixation-avoidance (cross-layer composition is explicit), specification-completeness on the determination (the scoring mechanism is specified, with the calibration heuristic added during critique).

- All HIGH-weight project-specific risk dimensions pass: duplicate-derivable-state (no duplication), operation-parsimony (three small spec edits plus a hygiene note plus telemetry plus a body section; no new disciplines, runners, or files).

- Two prosecution wins surfaced (the boundary rubric gap and the bad-criteria failure mode) — both closed by the two refinements applied at this finding's spec-edit level (the calibration heuristic and the criteria-quality MUST-check).

### Contradictions reconciled across the pipeline

- **Exploration vs prior finding.** Exploration surfaced 17 candidates across 10 families; the prior finding had committed to one. Reconciliation: the prior finding's mechanism is one input among many; this finding's filter operates on whatever inventory the listing mechanism (or any other source) produces.

- **Sensemaking's filter-vs-annotation axis.** The prior finding implicitly conflated these. Sensemaking explicitly split them; the hygiene note in this finding makes the split permanent in the spec.

- **Decomposition's hidden coupling.** Scoring quality depends on item labeling depth — at depth D1 (coarse scans), the LLM has less to score against. This was a hidden coupling that decomposition surfaced; it is addressed explicitly in the scoring mechanism's depth-quality note (at D1, default the threshold to LOW).

---

## Open Questions

### Monitoring

- **Calibration of the 3-level rubric.** After about 10 runs with the active filter, observe whether two LLMs (or one LLM on the same items twice) score the same items consistently. The calibration heuristic added during critique is a starting point; the actual reliability is empirical and will only be known after a corpus of runs accumulates.

- **Criteria-derivation quality across inquiries.** Observe how often human runners override the LLM-derived criteria. High override rates would indicate the derivation step is unreliable and suggest revival of the deferred item that makes author-declared criteria primary.

### Blocked

- **`/intuit` integration.** Embedding intuition-based relevance judgment cannot proceed until `/intuit` Phase B+ ships and the corpus is rich enough. The mechanism is enumerated in the deferred list with a revival trigger.

- **Registry integration.** Auto-feeding author-declared criteria from the canonical-source registry requires the registry from the prior canonical-coverage finding to ship first.

### Refinement Triggers

- **If single-pass scoring proves insufficient in 3 or more inquiries** (observable: filter excludes items that subsequent disciplines needed) — revive the deferred multi-pass refinement item.

- **If criteria-derivation reliably misses author intent in 3 or more inquiries** (observable: human runners override derived criteria immediately) — revive the deferred author-declared-primary item.

- **If the §2.1 strengthening proves insufficient** (observable: readers of the spec consistently miss the filter operation despite the hygiene note) — revive the deferred separate-cycle-step item that promotes the filter to a top-level step in the canonical cycle.

- **If criteria-driven filtering proves too brittle** (observable: in 3 or more inquiries, the criteria exclude items the human judges relevant in retrospect) — revive the deferred force-read fallback.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md is bad.


that was just one example.  listing file names doesnt mean content will be consumed. the correct answer shuold be sth different , sth how explore handles choosing relevant content
```

</details>
