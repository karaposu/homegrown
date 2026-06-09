---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Discipline-Spec Text Organization — A Content-Type → Pattern Mapping Framework for the Cognitive-Harness

## Question

From `_branch.md` (`devdocs/inquiries/2026-06-09_17-04__discipline_spec_text_organization_patterns_catalog/_branch.md`):

The user asked, after a long conversation about Tier 3 alternatives for restructuring `/td-critique`'s §4 Failure Modes (linear list / cumulative hook-table / mini-tables): **what are ALL the plausible structural patterns for organizing enumerated discipline-spec content (failure modes, hooks, sub-mechanisms, refinement notes), how do they compare on tidiness + scalability + LLM-consumption friendliness (relevant-things-close-together), and which is the best version for the cognitive-harness use case where discipline specs are loaded as LLM-readable prompts?**

The inquiry is cross-cutting — it applies to every cognitive-harness discipline whose spec contains enumerated content (`/td-critique`, `/sense-making`, `/innovate`, `/surfacing`, `/decompose`, plus protocols and runners). The deliverable is a catalog of alternatives + comparison + recommendation that holds at the meta-pattern level, not per-discipline.

The user explicitly named **LLM-consumption** as a load-bearing criterion alongside tidiness and scalability: *"since these are prompts, relevant things being close to each other makes sense and make LLMs job easier."*

**Layer commitment.** STRUCTURAL primary. The inquiry is about what the spec ARTIFACT LOOKS LIKE (sections, organization, schema); meaning of failure modes / mechanisms / hooks is already settled in their respective specs.

## Finding Summary

- **The recommendation is a content-type → pattern mapping, not a single best pattern.** Different content-types within a discipline spec — enumerated catalogs of failure modes vs sequential process phases vs vocabulary terms vs refinement notes — have structurally different organization needs. A single-pattern-fits-all answer would be Procrustean. The framework recommends a specific pattern per content-type, applied consistently across disciplines.

- **Five content-types are recognized, each with its recommended pattern.** (1) **Enumerated catalog** (failure modes, mechanisms, hooks) → **Hybrid: tabular overview + per-entry detail sections** when ≥5 entries OR entries are structurally complex. (2) **Process content** (phases, steps, procedures) → **Linear deep sections with refinement notes inline** (current pattern; no change). (3) **Refinement notes at a phase** → **Peer-stacked notes** with cluster-trigger at 5 notes. (4) **Cross-cutting vocabulary** → **Inline definitions + end-of-spec glossary**. (5) **Large catalogs with natural sub-clusters** (≥10 entries) → **Mini-tables grouped by sub-coordinate**.

- **Per-content-type consistency across disciplines is the cross-spec rule.** All failure-mode catalogs across the cognitive-harness use the same pattern regardless of which discipline they live in. `/td-critique`'s 8 failure modes, `/sense-making`'s hooks, `/innovate`'s 7 mechanisms, and `/surfacing`'s 9 failure modes are all ENUMERATED CATALOGS for cross-spec consistency purposes — despite differing in surface shape. Pattern is tied to content-type, not to discipline identity.

- **LLM-consumption friendliness has been the load-bearing criterion throughout.** The framework recognizes that cognitive-harness specs are loaded as LLM prompts FIRST and read by humans SECOND. The recommendation prioritizes locality of related items (firing-locus relatedness primary; mechanism and inverse-pair relatedness surfaced via cross-references and category-clusters). Locality and structural delimiters (markdown headers; table syntax) cooperate to give LLM token-attention strong signals about which content is related.

- **The composability upper limit at ~3 coordinates is empirically grounded.** Single multi-part meta-questions degrade past 3 coordinates per the LTSU finding §8 + EGA confirmation — both empirically tested within the hook-table pattern family. The framework extrapolates the cap to other multi-coord structures as a precaution; whether the cap is universal or hook-table-family-specific is a future empirical question.

- **Patterns to AVOID with rationale.** (a) 4+ coord cumulative hook-tables — composability limit. (b) Pure graph / concept-map patterns — LLMs are locality-favoring; following cross-links is heavier than reading adjacent text. (c) Deep nesting beyond 3 levels — working-memory limit. (d) XML-tag delimited sections as primary — markdown delimiters suffice; XML adds syntax cost for marginal benefit. (e) Faceted classification as primary — facets work for interactive browse but don't render in linear LLM prompts; use facets as TAGS in overview tables, not as primary organization. (f) Forced single-pattern-per-spec — Procrustean. (g) Per-discipline pattern variation for the same content-type — exceeds cross-discipline cognitive switching cost.

- **The recommendation is meta-evidence for itself.** This finding is organized as **Hybrid: at-a-glance overview + per-section detail** (which the framework recommends for enumerated catalog content). The recommendation document demonstrates the pattern operationally. Critique adjudicated that this self-application is structural evidence rather than circular reasoning — a recommendation that violated its own pattern would be hypocritical.

- **Five honest refinements from Critique are folded in.** (1) LLM-consumption claim scoped as theoretical + canonical-precedent-grounded, not empirically validated. (2) Composability cap explicitly scoped to the hook-table pattern family (not yet tested elsewhere). (3) Content-type definitions made explicit to support the cross-spec consistency rule. (4) Picker rules supplemented with structural signals beyond entry counts. (5) Premise scopes flagged honestly throughout.

- **Adoption cost: ~150-300 lines of additions across cognitive-harness specs; trivially reversible.** The framework is presented as a reference document; adoption is per-spec, can be incremental, and can be reversed by deleting additions. The user may adopt this framework as the meta-guideline for any future Tier-3-style structural decisions across the cognitive-harness — replacing the case-by-case approach with a content-type-driven approach.

## Finding

### Why this inquiry exists, briefly

The cognitive-harness has accumulated a series of inquiries about restructuring discipline-spec content. The Axis Absence inquiry proposed Tier 3 as a single hook-table for `/td-critique` §4 Failure Modes. The Inherited-Frame Preservation inquiry extended that to a 2-coordinate meta-question. The Label-Tested-Substance-Untested inquiry extended to 3 coordinates and warned at §8 that the composability upper limit was approaching. The External-Grounding-Absence inquiry confirmed the limit was crossed at 4 coordinates and proposed Tier 3 REORG — split the cumulative hook-table into four mini-tables, one per coordinate, applied in sequence.

After explaining the mini-tables pattern to the user, they zoomed out: *what are ALL the plausible alternatives for organizing discipline-spec text, considering tidiness + scalability + LLM-friendliness?*

That zoom-out is this inquiry. It is not about `/td-critique` §4 specifically; it is about the META-PATTERN AXIS that applies to every cognitive-harness discipline-spec that contains enumerated content (failure modes; mechanisms; hooks; refinement notes; vocabulary). The deliverable is a framework that future structural decisions can reference rather than relitigating each time.

### 1. The candidate patterns — 27 surveyed, 6 runners selected

Surfacing surveyed 27 distinct patterns across four regions: 9 currently in use in the cognitive-harness codebase (linear lists, linear tables, single hook-table, linear deep sections, peer-stacked refinement notes, mixed-levels, tier-vocabulary, sub-bullet-list, thin-pointer-plus-reference), 2 proposed in prior sibling findings (cumulative multi-coord hook-table; mini-tables), and 16 candidate-generated from canonical conventions (matrix, concept-graph, faceted, nested-object schema, Q&A pairs, rule + worked-example, XML-tag delimited, layered cascade, per-phase placement, card-sort clusters, prevention-locus organization, mechanism-shared groups, glossary + inline, plus 3 hybrid combinations).

Sensemaking collapsed the 27 patterns into 5 structural families (linear/flat; hierarchical/nested; graph/cross-linked; distributed/inline; hybrid/compound) and selected **6 runner candidates** that genuinely span the design space:

1. **Linear flat table** — one row per entry, fixed columns. Strong for ≤8 entries that are genuinely flat.
2. **Single hook-table under one meta-question** — N hooks share one meta-question. Strong when a generative meta-question unifies entries; capped at single-coordinate per the empirical composability limit.
3. **Mini-tables, one per coordinate** — N mini-tables each with its own single-coord meta-question; applied in sequence. Strong for catalogs spanning multiple natural coordinates.
4. **Hybrid: tabular overview + per-entry detail sections** — at-a-glance table + per-entry deep section. Strong for catalogs ≥5 entries with content needing depth.
5. **Per-phase placement** — failure modes distributed inline at each phase where they apply; no central catalog. Strong for content with strong phase-affinity; loses catalog scan.
6. **Hybrid: per-phase + glossary** — per-phase placement plus a thin glossary at the end. Combines dual-locality.

The other 21 surfaced patterns are either variations on these (Q&A is a verbose variant of linear; faceted is a variant of mini-tables) or structurally weaker for the cognitive-harness use case (concept-graph for prompt-loaded specs; XML-tags when markdown delimiters suffice).

### 2. The four load-bearing comparison axes

Sensemaking pre-narrowed eight candidate comparison axes to four load-bearing ones:

- **Locality of related items** — average text-distance between items that share a relationship. Lower is better for LLM token-attention. The user's "relevant things being close to each other" criterion maps here.
- **Scale-handling** — both (a) linear entry-add is painless AND (b) qualitative axis-add (a new coordinate) is painless. The composability upper limit is the canonical case of (b) failing.
- **Dual-use support** — does the pattern serve both top-to-bottom narrative reading AND jump-to-entry lookup?
- **Adoption cost from current state** — migration cost from the cognitive-harness's current pattern landscape.

Each of the 6 runners scores differently on each axis. Innovation produced the complete 6 × 4 scoring grid (24 cells).

| Runner | Locality | Scale | Dual-use | Adoption cost |
|---|---|---|---|---|
| Linear flat table | MEDIUM | MEDIUM | MEDIUM | LOW |
| Single hook-table | STRONG | MEDIUM | MEDIUM-STRONG | LOW-MEDIUM |
| Mini-tables | STRONG | STRONG | MEDIUM-STRONG | MEDIUM-HIGH |
| **Hybrid overview+detail** | **STRONGEST** | MEDIUM | **STRONGEST** | MEDIUM |
| Per-phase placement | STRONG (firing-locus); WEAK (other) | MEDIUM-WEAK | MEDIUM-WEAK | HIGH |
| Hybrid per-phase+glossary | STRONG | MEDIUM-WEAK | STRONGEST | HIGHEST |

The hybrid overview+detail dominates on three axes (locality; dual-use; tied for strongest on dual-use); mini-tables dominate on scale; linear flat table dominates on adoption cost. No runner wins everything — recommendation must consider content-type fit.

### 3. The recommendation — content-type → pattern mapping

The load-bearing structural insight from sensemaking is that **pattern selection is per-content-type, not per-spec or per-discipline**. Different content-types within a spec have structurally different organization needs.

#### Recommendation at-a-glance

| Content-type | Recommended pattern | When to deviate |
|---|---|---|
| Enumerated catalog (≥5 entries) | **Hybrid: overview + per-entry detail** | If ≤4 entries: linear flat table. If entries are structurally simple (1-2 line cells): single hook-table if a meta-question unifies them. |
| Process content (phases, steps, procedures) | **Linear deep sections with refinement notes inline** (current pattern) | Augment with phase-level overview table if multiple parallel branches. |
| Refinement notes at a phase | **Peer-stacked notes**; **cluster-trigger at 5 notes** (group under sub-themes) | Lower the trigger to 4 if practice shows degradation. |
| Cross-cutting vocabulary | **Inline definitions (first-occurrence) + end-of-spec glossary** | Skip the glossary if ≤3 terms. |
| Large catalogs (≥10 entries) with natural sub-clusters | **Mini-tables grouped by sub-coordinate** | If ≥10 entries but flat (no natural sub-clusters), stay with hybrid overview+detail and accept the larger overview table. |

#### Per-content-type detail

##### Enumerated catalog → Hybrid overview + per-entry detail

The shape:

```
## §4. Failure Modes

At-a-glance:
| # | Name | Recognition | Fires at | Inverse-of |
|---|------|-------------|----------|------------|
| 1 | Wrong Dimensions | candidates pass but fail | Phase 0 step 2-3 | — |
| 2 | Rubber-Stamping | all SURVIVE; no KILL | Phase 2 prosecution | #3 |
| 3 | Nitpicking | all KILL; no SURVIVE | Phase 2 defense | #2 |
| ... | ... | ... | ... | ... |

Detail sections:

### 1. Wrong Dimensions
[Definition, sub-mechanisms, prevention, cross-references]

### 2. Rubber-Stamping
[Full body...]

### 3. Nitpicking
[Full body...]
```

**Why this serves LLM consumption.** The overview table gives the LLM cross-mode comparison columns (firing-locus; inverse pairs) that are TEXT-ADJACENT within each row. The detail sections give per-mode depth that is self-contained (locality within section). When an LLM applies critique and encounters a candidate failure, it can scan the table for context-of-mode, then read only the relevant detail section. Both granularities have strong locality for LLM token-attention.

**Cost.** Overview rows are short (1-2 lines each); maintenance is two-place per entry change (update overview row + update detail section). At 8-10 entries, the overview adds ~10-15 lines of table; per detail section is unchanged. Net ~30-50% more text than table-only OR sections-only; this is the structural cost of dual-locality.

**When NOT to use.** Catalogs ≤4 entries — hybrid overhead exceeds value; linear flat table suffices. Catalogs where entries are structurally simple (1-2 line cells with no need for narrative depth) — single hook-table with a meta-question is simpler.

##### Process content → Linear deep sections with refinement notes inline

The current cognitive-harness pattern. Phases are sequential; linear deep sections match the sequence. Refinement notes inline place LLM token-attention on the check at the moment the check applies.

**Why this serves LLM consumption.** Process is intrinsically sequential; the pattern matches the natural reading direction. No restructure needed.

**Cost.** No new cost (current pattern preserved).

##### Refinement notes at a phase → Peer-stacked with cluster-trigger at 5 notes

Currently `/td-critique` Phase 0 hosts four peer-stacked refinement notes (Project-specific risk; Frame-premise test; Purpose-fitness; Substance-vs-Label, after this session's edits). The cluster-trigger fires when a phase accumulates ≥5 refinement notes — group them under named sub-themes:

```
### Phase 0 — Dimension Construction
[Phase body]

**Dimension-completeness checks:**

*Refinement note 1...*
*Refinement note 2...*

**Severity-calibration checks:**

*Refinement note 3...*

**Frame-prosecution checks:**

*Refinement note 4...*
*Refinement note 5...*
```

**Why at 5.** Miller's 7±2 working-memory limit; 5 is the conservative trigger. Below 5, peer-stacking has full readability. If practice shows degradation at 4, the trigger can be lowered.

**Currently Phase 0 has 4 notes; just below the trigger.** No clustering needed yet, but the next addition would fire the trigger.

##### Cross-cutting vocabulary → Inline + glossary

- First occurrence of a vocabulary term in the body: **bold the term** + a 1-line parenthetical definition.
- Subsequent occurrences: just bold (no re-definition).
- End-of-spec glossary: alphabetized list of all terms with their 1-line definition + first-occurrence section reference.

**Why dual-locality.** Inline serves context-of-use; glossary serves end-of-spec lookup. LLMs that miss the first occurrence's definition (e.g., context-window truncation) can find it at the glossary.

##### Large catalogs (≥10 entries) with sub-clusters → Mini-tables grouped by sub-coordinate

When a catalog grows past ~10 entries AND entries cluster naturally into 2-4 sub-categories, split into mini-tables grouped by sub-coordinate:

```
## §4. Failure Modes — Mini-Tables (applied in sequence)

── Mini-Table 1 — Dimension Space ──
Meta-question: "Does the dimension space SPAN the failure space?"
| Hook | ... |

── Mini-Table 2 — Adversarial Strength ──
Meta-question: "Is adversarial strength balanced?"
| Hook | ... |

── Mini-Table 3 — Convergence ──
Meta-question: "Is convergence reached for the right reason?"
| Hook | ... |

── Mini-Table 4 — Self-Reference ──
Meta-question: "Is self-reference externally grounded?"
| Hook | ... |
```

**Why at ≥10 + clusters.** Below 10, hybrid overview+detail works. Past 10, the overview table grows too dense to scan quickly; mini-tables restore at-a-glance scanability per cluster. Without natural sub-clusters, stay with hybrid and accept the larger overview.

**Sub-cluster naturalness is the structural signal**, not just entry count. A 12-entry catalog with no natural sub-clusters is a flat-catalog; a 7-entry catalog with two strong sub-clusters might suit mini-tables.

### 4. Cross-spec consistency rule

**Per-content-type consistency** applies across the cognitive-harness: the SAME pattern applies to the SAME content-type regardless of discipline.

| Content-type | Examples across disciplines |
|---|---|
| Enumerated catalog | `/td-critique` failure modes (8); `/sense-making` hooks (9); `/innovate` mechanisms (7); `/surfacing` failure modes (9); `/decompose` failure modes |
| Process content | All disciplines' Phase 0 → Phase N process descriptions |
| Refinement notes | `/td-critique` Phase 0 refinement notes (4 currently); `/sense-making` refinement notes; `/innovate` refinement notes |
| Vocabulary | Each discipline's load-bearing terms |

The rule is **content-type-driven, not discipline-driven**. `/td-critique`'s failure modes and `/sense-making`'s hooks are both ENUMERATED CATALOGS for cross-spec consistency purposes — even though one is named "failure modes" and the other "hooks" and they have different surface shapes. The unifying content-type is "catalog of structural failure patterns" — once recognized, the same pattern applies.

**Why cross-spec consistency.** When practitioners or LLMs are invoked on multiple specs in sequence (cross-discipline pipeline), pattern consistency reduces context-switching overhead. The LLM internalizes ONE pattern per content-type and applies it everywhere.

**Honest cost.** Per-discipline autonomy is lost; some specs may feel "imposed-from-outside" by content-type rules. This is accepted for cross-spec cognitive coherence.

### 5. The avoid list — what NOT to do

| Avoid | Why |
|---|---|
| **4+ coord cumulative hook-tables** | Empirical composability upper limit per LTSU §8 + EGA confirmation (within the hook-table family). The meta-question stops being a single generative principle and becomes a checklist. Cognitive load HIGH. |
| **Pure graph / concept-map patterns** | LLMs token-attention is locality-favoring; following cross-links is heavier than reading adjacent text. Graph patterns work in interactive UIs; they don't render in linear LLM prompts. |
| **Deep nesting beyond 3 levels** | Working-memory limit; readers (and LLMs) lose track of which level they're at. |
| **XML-tag delimited sections as primary form** | Markdown headers + tables already provide LLMs sufficient structural delimiters. XML adds syntax cost for marginal token-attention benefit. Use markdown. |
| **Faceted classification as primary spec form** | Faceted browsing works for interactive search UIs; linear LLM prompts don't render faceted views. Use facets as TAGS (column in overview tables), not as primary organization. |
| **Forced single-pattern-per-spec** | Procrustean. Different content-types within a spec have structurally different organization needs. Multi-pattern-per-spec with per-content-type pattern selection is the right level. |
| **Per-discipline pattern variation for the same content-type** | Cognitive cost of pattern-switching across disciplines exceeds the autonomy benefit. Use per-content-type consistency. |

### 6. Picker rules — when to deviate from the default

The default mapping covers the dominant cases. Edge cases need picker rules:

| Edge case | Default | Picker rule |
|---|---|---|
| Catalog with ≤4 entries | Hybrid overview+detail | Use linear flat table — hybrid overhead exceeds value. |
| Catalog with 10+ entries AND no natural sub-clusters | Mini-tables | Stay with hybrid; accept the larger overview table; consider sub-headers within detail sections. |
| Catalog where one entry has 5+ sub-mechanisms (entries are structurally complex even at low count) | Linear flat table (if ≤4 entries) | Promote to hybrid — entry complexity is a structural signal beyond entry count. |
| Process content with multiple parallel branches | Linear deep sections | Augment with phase-level overview table at the top. |
| Refinement notes at a single phase reaching 8+ | Cluster at 5+ | Force clustering; consider promoting some notes to their own sub-section. |
| Vocabulary with ≤3 terms | Inline + glossary | Skip the glossary; inline only. |
| Cross-spec consistency conflict (one spec needs mini-tables; analogous content in another doesn't) | Per-content-type rule | Pick the larger spec's needs; the smaller spec gracefully degrades to the same pattern. |

**The picker is a structural signal, not just a count check.** Entry count is one signal; per-entry complexity (sub-mechanism count) is another; natural sub-cluster presence is another. Practitioners apply the picker by considering ALL signals, not just count.

### 7. LLM-friendliness — the load-bearing premise, honestly scoped

Throughout the framework, LLM-consumption is treated as a load-bearing criterion. This is grounded in:

- The user's explicit instruction: *"since these are prompts, relevant things being close to each other makes sense and make LLMs job easier."*
- Canonical principles: locality of reference (computing); chunking (cognitive science); co-located items have lower attention-switching cost.
- Cross-discipline patterns: technical docs (API references) use overview-plus-detail; library catalogs use facet-tagged tables; man pages use linear lists. The hybrid pattern is well-known for dual-locality.

**Honest scope.** The LLM-friendliness claim is **theoretical + canonical-precedent-grounded**, not **empirically validated** on real cognitive-harness invocations. The framework's correctness on LLM-friendliness rests on the analogy from canonical precedents; future empirical inquiries (running cognitive-harness disciplines under different organization patterns and measuring practitioner-LLM-interaction quality) would close this gap.

**Locality and structural delimiters cooperate.** Locality (related items text-adjacent) and structural delimiters (markdown headers; table syntax) are not in competition. Markdown delimiters give the LLM hierarchy signals; locality gives content-adjacency signals. Both are part of LLM-friendliness; framing locality as the SOLE criterion would be imprecise.

### 8. The composability upper limit — honestly scoped

The 3-coord cap on multi-part meta-questions is empirically supported within the **hook-table pattern family** (LTSU §8 + EGA confirmation, both tested with hook-table-based meta-questions). The framework extrapolates the cap to other multi-coord structures as a precautionary heuristic.

**Honest scope.** Whether the cap is **universal** (any 4+ coord multi-part organizing question degrades) OR **hook-table-family-specific** (the cap is an artifact of the hook-table's specific structure of "one question, many hooks") has not been directly tested elsewhere. The framework treats the cap as plausibly general but flags this as a known-residual claim.

If a future inquiry tests a 4-coord multi-part organizing question in a non-hook-table pattern and it works, the cap should be re-scoped.

### 9. Adoption cost — honest articulation

The framework's adoption cost from the current cognitive-harness state:

- **~150-300 lines of additions** across all cognitive-harness specs (overview-table addition to existing catalogs; glossary creation; cluster-trigger application where Phase 0 hosts 5+ refinement notes).
- **Two-place maintenance per catalog entry** in the hybrid overview+detail pattern (update overview row + detail section).
- **Cross-discipline cognitive coordination** when a content-type appears in multiple disciplines — the per-content-type consistency rule means changes propagate to multiple specs.
- **No restructuring required at adoption time** — the framework is presented as a reference document; specs can adopt incrementally per content-type.
- **Trivially reversible** — every addition is delete-to-undo.

### 10. Self-application — meta-evidence, not circularity

This finding is itself organized as **Hybrid: at-a-glance overview + per-section detail** (which the framework recommends for enumerated catalog content). The Finding Summary acts as the overview; sections 1-9 are the detail.

**Why this is structural evidence, not circular reasoning.** A recommendation that violated its own pattern would be hypocritical. The framework's self-application demonstrates the pattern operationally works for this specific case (a meta-pattern document). It doesn't prove the pattern works universally, but it provides EXISTENCE EVIDENCE that the pattern can serve a complex deliverable.

Critique adversarially tested this and verified: self-application here is consistency, not circularity. The framework is judged on whether the recommended pattern works for its content-type, not on whether the recommendation document chose its own pattern (which is a separate observation).

## Next Actions

### MUST

No MUST items. The framework articulation IS the deliverable.

### COULD

- **Adopt the framework as the meta-guideline for any future Tier-3-style structural decisions across the cognitive-harness.** Replace case-by-case structural reasoning with content-type-driven reasoning. Future inquiries proposing structural reorganizations of `/td-critique`, `/sense-making`, `/innovate`, etc. should consult this finding for the per-content-type recommendation rather than re-deriving the pattern choice from scratch.
  - **Gate:** condition-bound — at the next inquiry proposing a structural restructure.
  - **Why:** the framework standardizes per-content-type choices, reducing per-inquiry structural decision overhead.

- **Apply the hybrid overview+detail pattern to `/td-critique` §4 Failure Modes specifically.** This would be the FIRST concrete application of the framework's catalog recommendation. Add an at-a-glance overview table at the top of §4 with columns (# / Name / Recognition / Fires at / Inverse-of); detail sections (current §4 entries) remain as the per-entry detail.
  - **Gate:** condition-bound — when the user is ready to commit a §4 reorganization.
  - **Why:** demonstrates the framework operationally; provides a concrete cognitive-harness instance for empirical validation later.

- **Run an empirical validation inquiry** comparing practitioner-LLM-interaction quality under different organization patterns. Pick a representative content-type (e.g., `/td-critique` §4) and run actual critique invocations against (a) current linear-list, (b) hybrid overview+detail, (c) mini-tables. Measure: time-to-correct-mode-identification; cross-mode-comparison-quality; LLM-token-attention-on-relevant-content (if observable). The framework's LLM-friendliness claim would gain or lose empirical grounding from this inquiry.
  - **Gate:** condition-bound — after at least one cognitive-harness spec adopts a non-current pattern; ≥5-10 real invocations available for comparison.
  - **Depends-on:** COULD #2 ("Apply the hybrid pattern to `/td-critique` §4") if `/td-critique` is the representative. GATED.
  - **Why:** closes the framework's known empirical gap on LLM-friendliness.

### DEFERRED

- **Test whether the 3-coord composability cap is universal or hook-table-family-specific** by running an inquiry that proposes a non-hook-table 4-coord multi-part organizing question. The result would scope the cap honestly.
  - **Gate:** revival trigger — observable: if a future inquiry naturally surfaces a 4+ coord structure that's not a hook-table.
  - **Why (if revived):** improves the framework's claim scope.

- **Cross-discipline content-type catalog.** Currently the framework names 5 content-types informally. A future inquiry could produce a rigorous content-type taxonomy across the cognitive-harness, with explicit criteria for content-type identification.
  - **Gate:** revival trigger — observable: if practitioners disagree on content-type assignment for a specific piece of content.
  - **Why (if revived):** strengthens cross-spec consistency rule application.

## Reasoning

### Why content-type → pattern mapping over single-pattern-fits-all

Sensemaking adjudicated this in Phase 3 Ambiguity 4. The alternative was "force a single pattern across the spec." Innovation tested both. The single-pattern approach failed because different content-types have structurally different needs — process content is sequential (linear works); catalog content is reference (hybrid works); vocabulary is term-lookup (glossary works). Forcing one pattern degrades fit for the content-types it doesn't suit.

The content-type mapping was promoted as the load-bearing structural answer to the user's question. It honors the user's "best version" framing while honestly admitting that "best" depends on what you're organizing.

### Why per-content-type consistency over per-discipline pattern variation

Sensemaking Ambiguity 5. The alternative was per-discipline pattern variation (each discipline picks its own pattern). Tested and rejected because cross-discipline cognitive switching cost (LLMs and practitioners crossing discipline boundaries) exceeded the per-discipline autonomy benefit. The cross-spec rule is per-content-type consistency.

### Why the hybrid overview+detail dominates for catalogs

Innovation's per-axis scoring showed the hybrid pattern is STRONGEST on locality + STRONGEST on dual-use; STRONG on scale; MEDIUM on adoption cost. Multi-axis dominance across two of the load-bearing axes was the structural argument.

Critique adversarially tested whether the dominance is real or artifact-of-rhetoric. The dominance survived: locality at TWO granularities (table + section) is genuinely better than single-granularity patterns; dual-use is genuinely better than narrative-only or lookup-only.

### Why the composability cap is honestly scope-flagged

Critique's frame-premise prosecution premise (c) found PARTIAL — the 3-coord cap is empirically supported within the hook-table pattern family but extrapolating to all multi-coord structures isn't directly tested. The honest move is to scope-flag, not pretend universal. Framework accepts the precautionary heuristic but names the residual.

### Why the LLM-friendliness claim is honestly scope-flagged

Critique premise (b) found PARTIAL — locality is real but cooperates with structural delimiters; framing locality as PRIMARY was mildly imprecise. The honest move is to scope-flag — locality and delimiters cooperate; LLM-friendliness is theoretical + canonical-precedent grounded but not empirically validated. Framework acknowledges this; future empirical inquiries can close the gap.

### Self-reference handling

This inquiry IS critique applied to the design of critique-spec-organization (and other cognitive-harness specs). Self-reference risk was real. Mitigation:

- External canonical anchors (locality-of-reference; chunking; technical-docs precedents) ground the framework outside the cognitive-harness's own logic.
- Critique's dimension D7 explicitly tested self-application non-circularity.
- The framework's self-application is meta-evidence (the document operationally uses the pattern it recommends) rather than circular justification.

Acceptable residual.

## Open Questions

### Monitoring

- **Adoption pattern.** Which content-types does the user actually apply the framework to first? The choice signals which axes the user values most (catalog ergonomics vs vocabulary consistency vs refinement-note clustering).
- **Cluster-trigger threshold validity.** If `/td-critique` Phase 0 reaches 5 refinement notes and clustering is applied, does practitioner experience improve? If yes, the threshold is validated; if no, threshold may need adjustment.

### Blocked

- **Empirical LLM-friendliness validation.** Requires actual invocations with the recommended patterns adopted. Blocked until COULD #2 ships.

### Research Frontiers

- **Content-type taxonomy rigor.** The framework names 5 content-types informally. A formal content-type taxonomy across the cognitive-harness would strengthen the cross-spec consistency rule. Research frontier.
- **Composability cap generality.** Whether the 3-coord cap is universal or hook-table-family-specific. Research frontier; cannot be answered analytically.

### Refinement Triggers

- **If empirical validation (COULD #3) shows no measurable improvement under the recommended patterns**, investigate whether the framework's analytical reasoning was wrong OR whether the empirical setup didn't isolate organization-pattern effect. Triggers refinement of either the framework or the empirical methodology.
- **If a future inquiry surfaces a content-type that doesn't fit any of the 5 named** (e.g., a content-type that's not catalog/process/refinement-notes/vocabulary/large-catalog), add a new content-type + pattern recommendation; do NOT force the new content into an existing category.
- **If practitioner experience reports Phase 0 with 4 refinement notes feels overloaded** (per the just-applied edits to `/td-critique`), lower the cluster-trigger from 5 to 4.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
we were talking about these tables, mini tables,

i think we can dive deep into plausable alternatives and best version to handle discipline text structuring.

i want to know all alternative list.  which one is more tidy and more scalable and also consider since these are prompts, relevant things being close to each other makes sense and make LLMs job easier.
```

</details>
