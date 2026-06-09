# Sensemaking — discipline_spec_text_organization_patterns_catalog

## User Input

```text
[branch from _branch.md + surfacing.md — 27 patterns surfaced; 5 ambiguities + 5 perspectives to apply; collapse to ~5-8 runners]
```

---

## SV1 — Baseline Understanding

The 27 surfaced patterns span 4-5 structural families. The user wants the best pattern considering tidiness + scalability + LLM-consumption. Most existing specs use linear patterns; sensemaking uses a single hook-table; the EGA REORG proposal recommends mini-tables. No single pattern wins on all axes; the recommendation will likely be content-type-specific rather than spec-wide.

---

## Phase 1 — Anchors

### Constraints

- **C1 — LLM-consumption is load-bearing.** The user explicitly named locality of related items as the third co-equal criterion. The recommendation must take this seriously, not subordinate it.
- **C2 — Cross-discipline applicability.** The recommendation should hold (with adjustment) across `/td-critique`, `/sense-making`, `/innovate`, `/surfacing`, etc.
- **C3 — Honest cost articulation.** The recommended pattern's cost must be named; pretending the best pattern is free is a defect.
- **C4 — The composability upper limit is empirical, not theoretical.** LTSU §8 + EGA confirmation: multi-part meta-questions degrade past ~3 coordinates. This caps any single-table cumulative pattern.
- **C5 — Specs are loaded as LLM prompts.** Token-attention behaviors matter. Specs are not just human documentation; they are operational instruction texts.

### Key Insights

- **K1 — Locality is the cross-cutting principle.** "Related-things-close-together" is what makes a pattern LLM-friendly AND tidy AND maintainable simultaneously. It connects all three named criteria.
- **K2 — There are three notions of "relatedness".** Related-by-firing-locus (which Phase the failure prevents at); Related-by-mechanism (shared underlying cause); Related-by-purpose (inverse pairs). A single pattern can prioritize ONE; the others must be surfaced via cross-references.
- **K3 — Most existing specs use linear patterns.** Out of 9 codebase precedents, 6 are linear (lists / tables / deep-sections). Only sensemaking's Meta-Inspection is non-linear (single hook-table). The cognitive-harness's current pattern-vocabulary is narrow.
- **K4 — Hybrids dual-localize.** A spec section can have a TABULAR overview (lookup mode) + PER-ENTRY detail sections (narrative mode) below it. This pattern serves both reading modes simultaneously.
- **K5 — Pattern fit depends on content-type.** Enumerated catalog content (failure modes; mechanisms) wants different organization than process content (phases; steps). Forcing a single pattern across content-types is structurally Procrustean.
- **K6 — The composability limit applies only to single-meta-question patterns.** Mini-tables avoid it by splitting; per-content-type patterns avoid it by not trying to unify everything under one meta-question.
- **K7 — XML-tag-delimited sections are LLM-token-friendly but markdown-redundant.** Markdown headers + tables already give LLMs structural delimiters. Adding XML tags adds syntax cost for marginal token-attention benefit. Pattern 18 is not the right primary choice for cognitive-harness specs.
- **K8 — Pure graph patterns degrade for prompt-loaded specs.** LLMs read linear text top-to-bottom; following cross-links is heavier than reading adjacent text. Pattern 13 (concept-graph) is wrong for prompt specs.

### Structural Points

- **S1 — 5 structural families.** Linear/flat; Hierarchical/nested; Graph/cross-linked; Distributed/inline; Hybrid/compound. Every pattern falls into one or more.
- **S2 — 4 load-bearing comparison axes** (collapsed from 8):
  - **Locality of related items** (the LLM/tidiness axis).
  - **Scale-handling** (entry-add behavior + category-add behavior).
  - **Dual-use support** (narrative + lookup).
  - **Adoption cost from current state**.
- **S3 — Pattern selection is per-content-type, not per-spec.** This is the structural answer to Ambiguity 4.
- **S4 — Per-content-type consistency is the cross-spec rule.** This is the structural answer to Ambiguity 5.

### Foundational Principles

- **F1 — Specs serve dual-use.** Narrative reading (top-to-bottom; learning) AND lookup (jump-to-entry; reference). Pattern selection must accommodate both.
- **F2 — Cognitive-harness specs are LLM-prompts first.** LLM consumption is the primary use; human readability is secondary (but not unimportant).
- **F3 — Locality > consolidation.** Putting related items adjacent matters more than putting all items of one type in one place.
- **F4 — Composability has empirical limits.** Don't push beyond what's been demonstrated to work.

### Meaning-Nodes

- **M1 — Locality:** related items text-adjacent in the spec.
- **M2 — Family:** structural type (linear / hierarchical / graph / distributed / hybrid).
- **M3 — Hybrid:** compound pattern combining elements of multiple families.
- **M4 — Dual-use:** narrative + lookup.
- **M5 — Content-type:** kind of content within a spec (catalog / process / refinement-note / definition).
- **M6 — Composability limit:** multi-part meta-questions fail past ~3 coords.

### SV2 — Anchor-Informed Understanding

The 27 patterns collapse to 5 structural families. The 8 candidate comparison axes collapse to 4 load-bearing ones. The recommendation will not be a single pattern but a CONTENT-TYPE → PATTERN MAPPING. The dominant principle is locality; the dominant constraint is the composability upper limit. Most existing specs are under-optimized: they use linear patterns reflexively rather than content-type-fit patterns.

---

## Phase 2 — Perspectives

### Practitioner-reading perspective

A practitioner invoking `/td-critique` reads the spec to apply the discipline. They want:
- Quick at-a-glance comprehension of what failure modes exist.
- Easy jump-to-detail when a specific mode fires.
- Awareness of inverse / paired modes when applying severity calibration.

The current LINEAR LIST forces top-to-bottom reading; the practitioner who wants only #3 Nitpicking must scroll past #1 and #2. A hybrid (tabular-overview + per-entry-detail) better fits this dual-use.

### LLM-consumption perspective

When the discipline-spec is loaded as a prompt:
- LLMs use markdown headers + table syntax as structural delimiters automatically. XML tags add syntax cost; not needed.
- Tables with consistent columns help LLMs apply the same operation per row.
- Cross-references that jump between distant parts of the prompt are HEAVIER than co-located text; LLMs token-attention is local-favoring.
- Long prose paragraphs without internal structure confuse where one concept ends and another begins.

So the LLM-friendliness pattern is: **structured table for at-a-glance scan + consistent sub-section schema for detail + minimal cross-references that, when used, are explicit by name.**

### Maintainer perspective

When a new failure mode is added:
- Linear list: append a new numbered entry. Easy. Linear cost.
- Single hook-table: add a row (cheap) OR add a column for a new meta-question coordinate (composability risk past 3).
- Mini-tables: add a row in the right mini-table (cheap) OR add a new mini-table (~30 lines but independent).
- Per-phase placement: decide which phase to inline at; may require multiple inline mentions if the failure mode crosses phases.

The "cheapest per-addition" patterns are: linear list (for simple growth) and mini-tables (for qualitative growth).

### Cross-discipline-comparison perspective

Does pattern X work for all of `/td-critique`, `/sense-making`, `/innovate`, `/surfacing`?

- Linear list: works for all (lowest common denominator).
- Single hook-table: works well for `/sense-making` (where it's used); awkward for `/innovate` mechanisms (which need deep explanation each).
- Mini-tables: requires natural multi-coordinate structure; works for `/td-critique` after Tier 3 adoption; less natural for `/innovate`.
- Per-phase placement: requires that failure modes have clear phase affinity. `/td-critique` failures partly do; `/innovate` mechanisms don't (they're per-mechanism, not per-phase).
- Hybrid: most flexible; can be adapted per discipline.

**The structurally honest answer:** different content-types in different disciplines suit different patterns. There is no one-pattern-fits-all.

### Frame-exit perspective

Does the inquiry's frame exclude project-wide referents?

The frame was "discipline-spec text organization." Frame-exit candidates:
- **Refinement notes** at a phase. Currently peer-stacked (item 5). Should this be addressed?
- **Phases** themselves. Currently linear deep sections (item 4). Should this pattern be reviewed?
- **Key Components** sections. Currently prose + tables mixed.
- **Cross-spec coordination** of patterns (the user mentioned this; surfacing flagged it).

**Verdict:** the inquiry frame should include enumerated-catalog content (failure modes; mechanisms; hooks; perspectives) as PRIMARY scope; refinement notes and other enumerated content as secondary scope. Phase structure is downstream — once enumerated content is settled, phase organization composes around it.

### Self-Reference Blindness check

This inquiry IS critique-of-critique-spec-organization. The inquiry's own outputs use:
- Surfacing: tabular pattern (item 2 + item 12 hybrid).
- Sensemaking (this file): linear deep sections (item 4) + sub-headers.
- Decomposition (next): piece-list pattern (linear deep sections per piece).
- Innovation: per-piece sections with sub-sections.
- Critique: dimensions + per-candidate sections.

The cognitive-harness's INQUIRY-LEVEL spec (the disciplines themselves) uses hybrid patterns implicitly. This is structural evidence that hybrid IS the right answer at the inquiry-organization level. ✓

### SV3 — Multi-Perspective Understanding

Five perspectives applied; all converge on:
- Hybrid (tabular overview + per-entry detail) is the strong candidate for enumerated catalog content.
- Per-content-type pattern selection (not per-spec) is the right level of choice.
- Linear deep sections work for non-catalog content (processes; deep explanations).
- Pure graph/concept-map patterns are LLM-disfavored for prompt loading.
- The empirical composability limit caps single-meta-question patterns.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "tidy" mean structurally?

**Counter-interpretation:** TIDY = visual compactness (less vertical space per entry).

**Why counter fails:** visual compactness can ALWAYS be achieved by dropping content; it's orthogonal to organization. The user's question is about ORGANIZATION, not amount.

**Confidence:** HIGH.

**Resolution:** TIDY = (a) **co-located related items** + (b) **predictable shape per entry**. Both structural properties; mutually reinforcing.

### Ambiguity 2: What does "scalable" mean structurally?

**Counter-interpretation:** SCALABLE = maintenance cost stays constant as the spec grows.

**Why counter fails:** maintenance cost is a derived property of how growth happens. The structurally load-bearing notions are (a) entry-add doesn't require restructuring and (b) axis-add doesn't require restructuring. The composability limit is the canonical case of (b) failing.

**Confidence:** HIGH.

**Resolution:** SCALABLE = both **linear-entry-growth-painless** AND **qualitative-growth-painless**. A pattern that fails one fails to be scalable in the user's sense.

### Ambiguity 3: What does "LLM-consumption friendly" mean structurally?

**Counter-interpretation:** all three relations of "relatedness" matter equally; the pattern must support all simultaneously.

**Why counter fails:** a pattern can't optimize for all three notions of relatedness simultaneously without becoming multi-pattern (different patterns at different levels) or graph-based (which is LLM-disfavored). The structurally load-bearing relation depends on USE CASE.

**Confidence:** MEDIUM-HIGH.

**Resolution:** **Prioritize firing-locus relatedness for in-spec text-organization** (because that's WHEN the spec is being applied — during invocation). Surface MECHANISM-relatedness via cross-references and category-clusters. Surface PURPOSE-relatedness via explicit pairing notes (e.g., "this is the inverse of #X").

### Ambiguity 4: Single-pattern-per-spec or multi-pattern?

**Counter-interpretation:** single-pattern is simpler; one organization principle per spec.

**Why counter fails:** real specs already use multi-pattern (conclude.md mixes patterns); forcing single-pattern degrades fit for content-types with different structural needs (catalog content vs process content vs refinement notes).

**Confidence:** HIGH.

**Resolution:** **Multi-pattern-per-spec, but with DELIBERATE pattern-selection per content-type.** Each content-type uses the pattern best for it; coherence comes from each pattern being consistent within its content-type.

### Ambiguity 5: Cross-spec consistency or per-discipline variation?

**Counter-interpretation:** consistency reduces cognitive switching cost.

**Why counter fails:** different disciplines have structurally different content. /surfacing's 4-relevance-levels is naturally tabular; /innovate's 7 mechanisms are naturally deep-section. Forcing same-pattern across structurally different content is Procrustean.

**Confidence:** HIGH.

**Resolution:** **Per-CONTENT-TYPE consistency** (not per-discipline). All failure-mode catalogs use the same pattern; all phase procedures use the same pattern. This is more principled than per-discipline consistency: pattern is tied to content-type, not to discipline identity.

---

### SV4 — Clarified Understanding

The 27 patterns and 5 ambiguities collapse to a clear framework:

**Recommendation shape:** a CONTENT-TYPE → PATTERN MAPPING, not a single best pattern.

**Content-type mapping:**
- **Enumerated catalog** (failure modes; mechanisms; hooks; perspectives): **hybrid pattern** combining tabular overview + per-entry detail sections. Item 27 generalized.
- **Process content** (phases; steps; procedures): linear deep sections with refinement-notes inline. Current pattern works.
- **Refinement notes at a phase**: peer-stacked notes (current pattern). Works at 1-4 notes; consider clustering past 5.
- **Cross-cutting principles / vocabulary**: glossary + inline references (item 24). Works.
- **Large catalogs with mechanism-cluster structure** (≥10 entries with natural sub-grouping): mini-tables grouped by mechanism cluster (item 26 generalized).

**Avoid:**
- Cumulative multi-coord hook-tables past 3 coords (composability limit).
- Pure graph / concept-map patterns (LLM-disfavored for prompt loading).
- Deep nested hierarchies beyond 3 levels.
- XML-tag delimited sections (markdown delimiters are sufficient; XML adds syntax cost).

**Comparison axes (load-bearing 4):**
- Locality of related items
- Scale-handling (entry-add + axis-add)
- Dual-use support (narrative + lookup)
- Adoption cost from current state

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed (no longer variable)

- Tidy = co-located + predictable shape
- Scalable = entry-add-painless + axis-add-painless
- LLM-friendly = firing-locus locality primary; mechanism via cross-refs
- Multi-pattern-per-spec is the right level
- Per-content-type consistency (not per-discipline) is the cross-spec rule
- 5 structural families capture the design space
- 4 load-bearing comparison axes (down from 8)

### Eliminated

- Single-pattern-for-everything (Procrustean).
- Pure graph/concept-graph patterns (LLM-disfavored).
- 4+ coord cumulative meta-questions (composability limit).
- XML-tag delimited sections as primary (markdown-redundant for the cognitive-harness use case).
- Visual compactness as primary "tidy" definition (orthogonal to organization).
- "All-relatedness-relations-served-by-one-pattern" (composability-equivalent).

### Viable runners (pre-narrowed to 6 from 27)

Innovation should generate concrete candidates around these 6 structural shapes (covering the structural families):

1. **Linear flat table** (family: linear/flat) — item 2 surfaced. Current `/surfacing` §4.2 precedent.
2. **Single hook-table under meta-question** (family: hierarchical/nested) — item 3 surfaced. Current `/sense-making` Meta-Inspection precedent. Capped at 3-coord meta-question.
3. **Mini-tables, one per coordinate** (family: hierarchical/nested with explicit splits) — item 11 surfaced. EGA Tier 3 REORG.
4. **Hybrid: tabular overview + per-entry detail sections** (family: hybrid) — item 27 generalized.
5. **Per-phase placement** (family: distributed/inline) — item 20.
6. **Hybrid: per-phase + glossary** (family: hybrid distributed + reference) — item 25.

These six span the 5 families (one or two from each) and represent the structural options worth comparing in the recommendation. The remaining 21 are either variations on these (Q&A style is variant of linear with prose-padding; faceted is variant of mini-tables with multi-axis tagging) or are structurally weaker for the cognitive-harness use case (graph; XML-tagged; nested object schema).

### SV5 — Constrained Understanding

The design space has converged. The 6 runner candidates plus the content-type → pattern mapping framework give Innovation a tractable design problem. Innovation will (a) detail each of the 6 runner patterns for cognitive-harness use; (b) propose the content-type → pattern mapping with specific recommendations; (c) handle cross-discipline applicability per content-type; (d) articulate honest cost per recommendation.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives keep destabilizing the model? Review:

SV1 → SV2 (anchors revealed locality as cross-cutting principle) → SV3 (perspectives converged; hybrid emerged as strong candidate) → SV4 (5 ambiguities resolved with HIGH confidence) → SV5 (6 runners identified).

The model SETTLED. No accommodation trigger fires.

### Self-Reference Blindness check

The inquiry itself uses hybrid patterns (table + sections + sub-bullets). This is consistent with the recommended framework — the inquiry's own structure validates the hybrid approach for inquiry-spec-style content. Acceptable residual.

### Status Quo Bias check

Did the analysis defend existing patterns because they're documented? Review:
- The analysis explicitly says most existing specs are under-optimized.
- The analysis recommends CHANGE (hybrid pattern + per-content-type selection) rather than preservation.
- The analysis names specific costs of the recommended approach.

Not status-quo-defensive.

### SV6 — Stabilized Model

**The framework:**

1. **Pattern selection is per-content-type, not per-spec or per-discipline.**

2. **The 4 load-bearing comparison axes are:**
   - Locality of related items (LLM-consumption + tidiness)
   - Scale-handling (linear + qualitative growth)
   - Dual-use support (narrative + lookup)
   - Adoption cost from current state

3. **The recommended pattern per content-type:**

| Content-type | Recommended pattern | Family |
|---|---|---|
| Enumerated catalog (failure modes; mechanisms; hooks) | **Hybrid: tabular overview + per-entry detail sections** | Hybrid |
| Process content (phases; steps; procedures) | Linear deep sections with refinement notes inline | Linear |
| Refinement notes at a phase | Peer-stacked notes (current); cluster past 5 notes | Linear with cluster-trigger |
| Cross-cutting principles / vocabulary | Glossary + inline references | Hybrid |
| Large catalogs with natural sub-grouping (≥10 entries) | Mini-tables grouped by sub-coordinate | Hierarchical/nested |

4. **Cross-spec rule:** per-content-type consistency. All failure-mode catalogs use the same pattern; the spec's identity doesn't change the pattern.

5. **Avoid:**
   - Cumulative multi-coord hook-tables past 3 coords.
   - Pure graph / concept-map patterns.
   - Deep nesting beyond 3 levels.
   - XML-tag delimited sections (markdown delimiters suffice).

6. **The 6 runner candidates for Innovation to detail:** linear flat table; single hook-table; mini-tables; hybrid tabular + per-entry detail; per-phase placement; hybrid per-phase + glossary.

### Differences from SV1

| | SV1 | SV6 |
|---|---|---|
| Question framing | "best pattern" | "best pattern per content-type" |
| Number of candidates | 27 | 6 runners |
| Comparison axes | 8 candidate | 4 load-bearing |
| Pattern-spec relation | implicit single-pattern | explicit multi-pattern-per-spec |
| Cross-spec rule | unclear | per-content-type consistency |
| LLM-friendliness | flagged | structurally specified (firing-locus locality primary; cross-refs for other relations) |
| Tidiness | undefined | co-located + predictable shape |
| Scalability | undefined | entry-add-painless + axis-add-painless |

### Telemetry

- **Perspective saturation:** 5 perspectives applied; all converged. PASSING.
- **Ambiguity resolution ratio:** 5/5 ambiguities resolved with HIGH or MEDIUM-HIGH confidence.
- **SV delta:** SUBSTANTIAL — the question reframes from "best pattern" to "best pattern per content-type"; recommendation surface changes from monolithic to mapping.
- **Anchor diversity:** 5 constraints + 8 key insights + 4 structural points + 4 principles + 6 meaning-nodes from 5 perspectives. Multi-type, multi-perspective.

### Self-Assessment

**PROCEED.** SV6 is stabilized; 5 ambiguities resolved; design space converged to 6 runner candidates + content-type → pattern mapping framework. Downstream Decomposition can partition the framework into pieces for Innovation to detail.
