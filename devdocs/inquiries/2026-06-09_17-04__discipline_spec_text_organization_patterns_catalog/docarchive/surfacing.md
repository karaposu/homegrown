# Surfacing — discipline_spec_text_organization_patterns_catalog

## User Input

```text
[branch from _branch.md — see file]

User: dive deep into plausable alternatives and best version to handle discipline text structuring. Want all alternative list. Which is more tidy and more scalable. LLM-consumption ("relevant things being close to each other makes sense and make LLMs job easier") is load-bearing criterion.
```

## Mode and entry point

- **Mode:** mixed — artifact (existing patterns extracted from codebase + proposed patterns from sibling findings) + possibility (candidate-generated alternatives from canonical external conventions).
- **Entry point:** signal-first (purpose given).
- **Territory specification:** explicit-bounded (paths + canonical concept domains enumerated).
- **Boundary-discovery sub-phase:** SKIPPED.

---

## Traversal Trace

### Region 1: Patterns currently in use in the cognitive-harness codebase

| # | Pattern name | Where found | Sketch | Relevance | Confidence | Locality property |
|---|---|---|---|---|---|---|
| 1 | **Linear numbered list with sub-sections per entry** | `td-critique.md` §4 (Failure Modes #1–#8); each entry has Mode + Recognition + Prevention sub-sections | `### 1. Wrong Dimensions` / `**How to recognize:** ...` / `**How to prevent:** ...` / `### 2. Rubber-Stamping` / ... | **CORE** | HIGH | RELATED-CLOSE (everything about #1 lives together; but cross-related items #1 and #4 are separated by #2, #3) |
| 2 | **Linear flat table** (4-column compact) | `surfacing.md` §4.2 (9 failure modes in `\| # \| Mode \| Recognition \| Corrective \|`) | one-row-per-entry table; each row ~1-2 lines of dense text per cell | **CORE** | HIGH | RELATED-CLOSE within row; SCATTERED across rows (a row only relates to its own cell-contents) |
| 3 | **Single hook-table under one meta-question** | `sensemaking.md` Meta-Inspection (H1–H9 under `"What am I treating as FIXED that might not be?"`) | one meta-question header + table with `\| Hook \| Inspection point \| Calibration \|` | **CORE** | HIGH | RELATED-CLOSE: all hooks share one meta-question explicitly, structurally co-located |
| 4 | **Linear deep sections per entry** | `innovate.md` 7 Mechanisms (each ~40-80 lines with What/Region/How/Example/What-misses sub-headers) | `### 1. Lens Shifting` / `**What it does:** ...` / `**Region it covers:** ...` / `**How to apply:** ...` / `**Example:** ...` / `**What it misses:** ...` | **CORE** | HIGH | RELATED-CLOSE within entry; SCATTERED across entries (cross-cutting concerns like "all generators" must be inferred) |
| 5 | **Peer-stacked refinement notes** | `td-critique.md` Phase 0 (now four notes peer-stacked: Project-specific risk / Frame-premise test / Purpose-fitness / Substance-vs-Label) | `*Refinement note (applies at X):*` / `**Check name.** ...body...` repeated 4× | **CORE** | HIGH | RELATED-CLOSE to the Phase 0 step they attach to; but the four notes are TOPICALLY scattered (different aspects of dimension construction) |
| 6 | **Sub-bullet list under a refinement-note header** | `td-critique.md` Phase 2 Multi-axis prosecution depth check (3-4 bullets: User-perspective / Failure-case scenario / Specification-gap probe / Substance-axis) | `**Multi-axis prosecution depth check.** ...intro...` / `- **User-perspective objection** — ...` / `- **Specific failure-case scenario** — ...` / ... | **CORE** | HIGH | RELATED-CLOSE; sub-bullets share the parent refinement-note's scope by structural adjacency |
| 7 | **Mixed-levels in one spec** | `conclude.md` (long-form sections + finding template as block + style rules as numbered list) | mixed: paragraphs, fenced-code templates, numbered rules, plus tables | **SUB** | HIGH | MIXED locality (depends on which level); supports "different shapes for different content-types" |
| 8 | **Tier vocabulary with sub-axes within each tier** | `docs/discipline_edit_tiers.md` (Tier 1 / Tier 2 / Tier 3, each with form template + properties; sub-axes like SS/CS, ADD/REPAIR applied within tiers) | `### Tier 1 — Surgical = refinement-note pattern` / form + properties / `### Tier 2 — ...` / ... + later section on sub-axes | **SUB** | HIGH | RELATED-CLOSE within tier; sub-axes section separated from tiers (cross-references required) |
| 9 | **Thin pointer + dense reference** (SKILL.md → references/) | `td-critique/SKILL.md` (~40 lines: description + Step 0 mandatory pre-read + Instructions) → `references/td-critique.md` (the dense reference) | one short prompt file points to one dense reference file | **SUB** | HIGH | RELATED-CLOSE within each file separately; CROSS-FILE separation by design (loading discipline) |

### Region 2: Patterns proposed in the 4 prior sibling findings (not yet adopted)

| # | Pattern name | Source | Sketch | Relevance | Confidence | Locality property |
|---|---|---|---|---|---|---|
| 10 | **Cumulative multi-coord hook-table under one multi-part meta-question** | AA Tier 3 + IFP Tier 3 + LTSU Tier 3 + EGA Tier 3 ADOPT (collectively, would produce a 4-coord cumulative table) | one big table; meta-question is `"Are A AND B AND C AND D all load-bearing and tested?"` | **CORE** | HIGH | RELATED-CLOSE in structure; cognitive load HIGH (4-part meta-question) — at composability upper limit per LTSU §8 + EGA confirmation |
| 11 | **Multiple mini-tables, each per-coordinate, with sequential single-coord meta-questions** | EGA Tier 3 REORG (recommended Tier 3) | 4 separate tables, one per coordinate; each table has its own single-coord meta-question; applied in sequence | **CORE** | HIGH | RELATED-CLOSE within each mini-table; SEPARATION between mini-tables intentional (coordinate boundaries) |

### Region 3: Candidate-generated alternatives from canonical external conventions

| # | Pattern name | Origin | Sketch | Relevance | Confidence | Locality property |
|---|---|---|---|---|---|---|
| 12 | **Matrix / decision table (rows × columns)** | Safety engineering decision-tables; risk matrices | rows = failure modes; columns = (Locus, Mechanism, Prevention, Scope, Sub-mechanisms); cell = content | **CORE** | HIGH | RELATED-CLOSE for the row (all attributes of one failure together); cross-mode comparison strong because columns align |
| 13 | **Concept-graph with cross-links (wiki-style)** | Wikipedia / Roam / Obsidian | each failure mode = node; cross-links to other nodes with typed edges (`inverse-of`, `precondition-violation-of`, `fires-at-same-locus`) | **SUB** | MEDIUM | RELATED-CLOSE via explicit links but text-LOCALITY scattered (LLM has to follow links rather than read sequentially) |
| 14 | **Faceted classification (multi-axis tagging)** | Library / e-commerce faceted search | each failure mode has multiple facet tags `[Locus=Phase0; Layer=construction; Inverse-of=#3]`; browsable by any facet | **SUB** | MEDIUM | RELATED-CLOSE per facet (filter view); scattered in text-narrative form unless the text is reorganized per facet view |
| 15 | **Nested object schema (YAML/JSON)** | OpenAPI; YAML config files | machine-readable structured form `failure_mode: id: 2, name: Rubber-Stamping, recognition: [...], prevention: [...]` | **SUB** | MEDIUM | RELATED-CLOSE within entry; not LLM-narrative-friendly (LLMs read structured text fine but reasoning over YAML is heavier) |
| 16 | **Q&A / FAQ-style pairs** | Knowledge-base / FAQ docs | `Q: When does Rubber-Stamping fire? A: ...` / `Q: How do you recognize it? A: ...` per failure mode | **SUB** | MEDIUM | RELATED-CLOSE within Q/A pair; pair-grouping makes one mode's content compact but doesn't surface cross-mode relationships |
| 17 | **Rule + worked-example interleaved** | Code documentation; legal codes with case-law | NORMATIVE rule (failure-mode definition) immediately followed by ONE OR MORE corpus-instance examples demonstrating it | **CORE** | HIGH | RELATED-CLOSE (rule and its instances together); strong for LLM-grounding because abstract + concrete are adjacent |
| 18 | **XML-tag delimited sections** | LLM-prompt structuring convention | `<failure_mode id="2" name="Rubber-Stamping">` / `<recognition>...</recognition>` / `<prevention>...</prevention>` / `</failure_mode>` | **SUB** | MEDIUM | RELATED-CLOSE (within each XML block); explicit boundaries help LLM token-attention; markdown-readable but heavier syntax |
| 19 | **Layered / cascade structure** | Outer-to-inner cascade reasoning (e.g., safety hazards by severity tier) | `## Layer 1 — Loose preconditions` / `## Layer 2 — Tightening conditions` / `## Layer 3 — Strict failure surface` (reader cascades through layers) | **SIDE** | MEDIUM | RELATED-CLOSE within layer; cascade order is itself an organizing principle |
| 20 | **Per-phase placement (no central failure-mode section)** | "Place rules where they apply" pattern | failure-mode entries DISTRIBUTED across the spec — at each Phase, the relevant failure modes appear inline next to the phase logic; no central §4 collection | **CORE** | HIGH | RELATED-CLOSE to the phase logic they constrain; SCATTERED if a reader wants the full failure-mode list at-a-glance |
| 21 | **Card-sort / category clusters** | Information architecture's card-sort taxonomy | failure modes GROUPED into clusters by underlying meta-pattern (frame-bounded; surface-vs-substance; no-anchor-outside-frame); within each cluster, a small linear list | **SUB** | HIGH | RELATED-CLOSE within cluster; cross-cluster relationships explicit via cluster names |
| 22 | **Prevention-locus organization** | "Organize by where the prevention is applied" | failure modes grouped by the phase / locus where their PREVENTION fires; structure mirrors the discipline's process model | **SUB** | HIGH | RELATED-CLOSE (failures preventable at same locus together); good locality for "I'm at Phase 0; which failures should I be preventing?" |
| 23 | **Mechanism-shared groups (under/over-coverage; etc.)** | Failure-pattern taxonomies | failures grouped by SHARED MECHANISM (all under-coverage failures together; all over-coverage failures together; all inheritance-failures together) | **SUB** | HIGH | RELATED-CLOSE within mechanism-group; inverse-companion pairs naturally adjacent |
| 24 | **Glossary + inline references** | Technical writing; legal codes | failure modes defined as TERMS in a glossary at the end; cross-referenced from inline text wherever they apply | **SUB** | MEDIUM | TWO localities: glossary (compact reference) AND inline-context (where the term matters); separation is intentional |
| 25 | **Hybrid: per-phase placement + condensed glossary** | Combination of #20 and #24 | inline failure-mode mentions at each phase (locality-where-it-matters) + condensed glossary as quick reference | **CORE** | MEDIUM | DUAL locality — strong for both phase-reading and at-a-glance reference. Compound pattern. |
| 26 | **Hybrid: mini-tables + per-mini-table worked example** | Combination of #11 and #17 | EGA's 4 mini-tables (one per coordinate) + one worked-example block per mini-table demonstrating a corpus instance under that coordinate's meta-question | **SUB** | MEDIUM | RELATED-CLOSE: mini-table groups + abstract rule + concrete grounding all adjacent. Heavier total page-count. |
| 27 | **Hybrid: hook-table + per-hook deep-dive section** | Combination of #3 and #4 | top-level hook-table for at-a-glance overview + per-hook deep section below the table with detailed prevention guidance | **SUB** | MEDIUM | DUAL locality — overview (table) + detail (sections). Common in technical docs. |

### Region 4: Side-relevant theoretical anchors

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 28 | Miller's 7±2 (working memory) | **SIDE** | HIGH | Caps any single grouping at ~7-9 items before cognitive load grows. Argues against single tables exceeding ~10 entries. |
| 29 | Chunking principle | **SIDE** | HIGH | Grouping related items reduces cognitive load. Argues for cluster-based organization over flat lists at scale. |
| 30 | Locality of reference (computing) | **SIDE** | HIGH | Frequently-co-accessed items should be physically adjacent. Direct analog: failure modes a critique-LLM uses together should be text-adjacent. |
| 31 | The composability upper limit warning (LTSU §8 + EGA confirmation) | **CORE** | HIGH | Single multi-part meta-questions fail past ~3-4 coordinates. Empirically grounded. Argues against single-table cumulative growth past 3 coordinates. |
| 32 | The "narrative vs lookup" tension | **SIDE** | HIGH | Specs serve BOTH narrative reading (linear, top-to-bottom) AND lookup (jump to specific entry). Different patterns optimize for different uses. |

---

## State Summary

### Territory-specification echo

Bounded territory:
- (a) Existing patterns in cognitive-harness codebase (Region 1; 9 items).
- (b) Patterns proposed in 4 prior sibling findings (Region 2; 2 items).
- (c) Candidate-generated alternatives from canonical external conventions (Region 3; 16 items: 12 simple patterns + 3 hybrid combinations + 1 layered variant).
- (d) Theoretical anchors for criteria justification (Region 4; 5 items).

### Purpose-specification echo

Enumerate ALL plausible discipline-spec organization patterns; flag for each: tidiness, scalability behavior, and LLM-consumption locality. Aim for 10-15+ distinct patterns.

### Coverage map

| Region | Coverage | Aggregate verdict |
|---|---|---|
| Codebase patterns currently in use | CONFIRMED via context + targeted recall | CORE (9 items: 7 CORE + 2 SUB) |
| Sibling-finding proposed patterns | CONFIRMED via prior surfacing in this session | CORE (2 items, both CORE) |
| Canonical external alternatives | EXHAUSTED at this resolution (~16 distinct + hybrid) | mixed CORE/SUB/SIDE |
| Theoretical anchors | CONFIRMED via known cognitive-science / IA literature | SIDE (5 items) |

**Total items surfaced: 32.** Distinct organization patterns: ~27 (after deduplication of theoretical anchors that don't directly map to patterns).

### Confirmed-absent regions

None confirmed-absent at this resolution. Further patterns may exist in domain-specific conventions (e.g., scientific paper structure; legal-code organization at multi-jurisdictional level); flagged as frontier.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **Linear numbered list with sub-sections** | structural-reference | item 1 | The dominant existing pattern in `/td-critique` §4. |
| **Linear flat table** | structural-reference | item 2 | The compact tabular form used in `/surfacing` §4.2. |
| **Single hook-table under meta-question** | structural-reference | item 3 | The /sensemaking Meta-Inspection precedent. |
| **Linear deep sections** | structural-reference | item 4 | The /innovate 7-mechanism precedent (each ~40-80 lines). |
| **Peer-stacked refinement notes** | structural-reference | item 5 | The Phase 0 pattern now hosting four notes. |
| **Mini-tables (one per coordinate)** | structural-reference | item 11 | The EGA Tier 3 REORG proposal. |
| **Matrix / decision table** | structural-reference (external) | item 12 | Safety-engineering decision-table style: rows × columns. |
| **Concept-graph with cross-links** | structural-reference (external) | item 13 | Wiki-style cross-linked nodes. |
| **Faceted classification** | structural-reference (external) | item 14 | Multi-axis tag-based browsing. |
| **Rule + worked-example interleaved** | structural-reference (external) | item 17 | Pairing abstract rule with concrete instance. |
| **XML-tag delimited sections** | structural-reference (external) | item 18 | LLM-prompt-structuring convention with explicit boundaries. |
| **Per-phase placement** | structural-reference (external) | item 20 | Distribute failure-modes inline at each Phase. |
| **Card-sort / category clusters** | structural-reference (external) | item 21 | Group by underlying meta-pattern. |
| **Prevention-locus organization** | structural-reference (external) | item 22 | Group by where prevention fires. |
| **Mechanism-shared groups** | structural-reference (external) | item 23 | Group by shared mechanism (inverse pairs together; etc.). |
| **Hybrid: per-phase + glossary** | coined-term | item 25 | Compound pattern: inline + condensed reference. |
| **Hybrid: mini-tables + worked-examples** | coined-term | item 26 | EGA REORG augmented with concrete examples per mini-table. |
| **Hybrid: hook-table + deep-dive sections** | coined-term | item 27 | Top-level table + per-hook detail. |
| **Composability upper limit** | vocabulary (from LTSU §8 + EGA) | item 31 | Empirical warning: multi-part meta-questions degrade past ~3 coordinates. |
| **Narrative-vs-lookup tension** | vocabulary | item 32 | Specs serve two read-modes; patterns trade-off between them. |

### Recency distribution

Not load-bearing for this inquiry (territory is documentation + theoretical patterns; recency annotation skipped as deviation).

### Frontier flags

1. **Domain-specific conventions not exhaustively surveyed.** Scientific paper structure (IMRaD), legal-code multi-jurisdictional organization, ISO standards organization, recipe-book conventions, RFC structure — any of these may surface patterns not captured here. Refined sub-purpose if needed: survey domain-specific conventions explicitly.

2. **Combinatorial space of hybrid patterns is large.** I surfaced 3 hybrid combinations (items 25, 26, 27) but combinations of any 2 of the 24 simple patterns produce ~300 hybrid candidates. Most are not structurally meaningful; the 3 surfaced are the ones with clear precedent or intuitive coherence. Frontier: explicit enumeration of hybrid patterns if sensemaking judges a hybrid is the right answer.

3. **LLM-consumption literature.** I drew on general principles (locality of reference; chunking; co-location) but didn't survey LLM-prompt-engineering literature specifically. Patterns from prompt-engineering best practices (chain-of-thought-friendly structures; in-context learning patterns; instruction-tuning conventions) may inform the decision. Refined sub-purpose if needed.

4. **Multi-pattern-per-spec considerations.** Item 7 (mixed-levels in one spec) flags that a spec can use DIFFERENT patterns at DIFFERENT levels. The catalog so far treats patterns as monolithic spec-wide choices, but real specs may benefit from heterogeneous patterns (e.g., §4 in linear list + Meta-Inspection in hook-table). Sensemaking should address whether the recommendation is single-pattern-per-spec or multi-pattern-per-spec.

5. **Cross-spec consistency concern.** If different disciplines use different patterns, practitioners reading multiple discipline specs face a cognitive switching cost. Frontier: should the recommendation enforce cross-discipline pattern consistency, or accept per-discipline pattern variation?

### Workspace-populated status

`{populated: true, populated-at: 2026-06-09_17-04, extent: "32 items / 4 regions; 27 distinct patterns including 3 hybrid combinations; 5 frontier flags; locality property flagged per pattern"}`

### Telemetry

- **Mode:** mixed artifact + possibility.
- **Entry point:** signal-first.
- **Cycles run:** 1 traversal across 4 regions.
- **Items enumerated:** 32 (27 distinct patterns + 5 theoretical anchors).
- **Items tagged at each relevance level:** CORE 13 / SUB 14 / SIDE 5 / UMBRELLA 0.
- **Sub-phase fired:** NO (territory was explicit-bounded).
- **Convergence criteria status:** territory traversed at appropriate resolution; uncertainty-includes filtering applied (5 items at MEDIUM confidence INCLUDED).
- **Workspace-overload trigger:** NOT FIRED.
- **LAYER 1 failure modes checked:** all NO (territory bounded; relevance tagged not interpreted; recency N/A).
- **LAYER 2 failure modes checked:** all NO (no interpretive overstep; purpose clear; no self-coupling).

### Self-Assessment

**PROCEED.** Territory traversed comprehensively at the catalog level. 27 distinct organization patterns surfaced, exceeding the user's ~10-15 target. Each pattern has a name, concrete sketch (or codebase pointer), relevance tag, and locality property flagged. 5 frontier flags name what was deliberately not exhausted (domain-specific conventions; combinatorial hybrid space; LLM-prompt-engineering literature; multi-pattern-per-spec; cross-spec consistency). Downstream Sensemaking can stabilize the design space from these items and surface the load-bearing comparison axes.
