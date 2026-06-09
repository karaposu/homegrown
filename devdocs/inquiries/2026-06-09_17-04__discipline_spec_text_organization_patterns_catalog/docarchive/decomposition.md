# Decomposition — discipline_spec_text_organization_patterns_catalog

## User Input

```text
20 pieces pre-articulated. 6 runner-detail + 4 comparison-axes + 5 content-type mapping + 5 wrapping. Decomposition validates the piece-set, articulates verification + counter-question per piece, maps interfaces, orders dependencies, self-evaluates.
```

---

## Step 1 — Coupling Topology

Four clusters with low-cross-coupling:

**Cluster A — Runner-detail (6 pieces; high-internal-low-cross):**
P-RUNNER-1-LINEAR-TABLE; P-RUNNER-2-HOOK-TABLE; P-RUNNER-3-MINI-TABLES; P-RUNNER-4-HYBRID-OVERVIEW-DETAIL; P-RUNNER-5-PER-PHASE-PLACEMENT; P-RUNNER-6-HYBRID-PER-PHASE-GLOSSARY. Each piece is self-contained pattern detail.

**Cluster B — Comparison axes (4 pieces; depends on Cluster A):**
P-AXIS-1-LOCALITY; P-AXIS-2-SCALE; P-AXIS-3-DUAL-USE; P-AXIS-4-ADOPTION-COST. Each axis defines structurally + scores all 6 runners.

**Cluster C — Content-type mapping (5 pieces; depends on Clusters A + B):**
P-MAPPING-CATALOG; P-MAPPING-PROCESS; P-MAPPING-REFINEMENT-NOTES; P-MAPPING-VOCABULARY; P-MAPPING-LARGE-CATALOG. Each cites a runner + uses axis scores.

**Cluster D — Wrapping (5 pieces; depends on Clusters A + B + C):**
P-AVOID-LIST; P-CROSS-SPEC-RULE; P-RECOMMENDATION-SHAPE; P-PICKER; P-COST-ARTICULATION. Each synthesizes prior pieces.

Coupling map:
```
[A: Runner-detail × 6 ─────parallel────]
              ↓
[B: Axes × 4 ──parallel──]   (each axis scores all 6 runners)
              ↓
[C: Mappings × 5 ──parallel──]   (each mapping cites a runner + uses axis scores)
              ↓
[D: Wrapping × 5 ──parallel─]  (synthesis across all)
```

Total: 20 pieces.

---

## Step 2 — Boundaries

Natural cuts:
- **Within Cluster A:** cut on the per-pattern axis. Each runner is independently describable.
- **Within Cluster B:** cut on the per-axis axis. Each comparison axis is independently definable.
- **Within Cluster C:** cut on the per-content-type axis. Each mapping is one content-type.
- **Within Cluster D:** cut on the per-synthesis-concern axis. Each wrapping piece addresses a distinct meta-question.
- **Between clusters:** strict ordering A → B → C → D. Cross-cluster coupling is dependency-only, not content.

All boundaries pass low-traffic test.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atomic content per piece:
- P-RUNNER-1: linear flat table pattern detail — atomic.
- P-RUNNER-2: single hook-table pattern detail — atomic.
- P-RUNNER-3: mini-tables pattern detail — atomic.
- P-RUNNER-4: hybrid overview-detail pattern — atomic.
- P-RUNNER-5: per-phase placement pattern detail — atomic.
- P-RUNNER-6: hybrid per-phase + glossary pattern detail — atomic.
- P-AXIS-1: locality definition + measurement + scoring — atomic.
- P-AXIS-2: scale-handling definition + measurement + scoring — atomic.
- P-AXIS-3: dual-use definition + measurement + scoring — atomic.
- P-AXIS-4: adoption cost definition + measurement + scoring — atomic.
- P-MAPPING-CATALOG: pattern recommendation for enumerated catalog content — atomic.
- P-MAPPING-PROCESS: pattern recommendation for process content — atomic.
- P-MAPPING-REFINEMENT-NOTES: pattern recommendation for refinement notes + cluster-trigger — atomic.
- P-MAPPING-VOCABULARY: pattern recommendation for vocabulary — atomic.
- P-MAPPING-LARGE-CATALOG: pattern recommendation for large catalogs + threshold — atomic.
- P-AVOID-LIST: patterns to avoid + rationale — atomic.
- P-CROSS-SPEC-RULE: per-content-type consistency rule — atomic.
- P-RECOMMENDATION-SHAPE: overall recommendation shape — atomic.
- P-PICKER: edge-case picker — atomic.
- P-COST-ARTICULATION: per-recommendation cost — atomic.

20 atoms ↔ 20 pieces. **Confidence:** HIGH.

---

## Step 4 — Question Tree

Each piece expressed as question + verification + counter-question.

### Cluster A — Runner-detail

**P-RUNNER-1-LINEAR-TABLE.** *Q:* what is the linear flat table pattern's concrete shape + when to use + cost? *V:* [ ] structural sketch given; [ ] when-to-use named; [ ] cost articulated. *Counter:* what if linear flat table is structurally weaker than every other runner? (If so, this piece may be discarded.)

**P-RUNNER-2-HOOK-TABLE.** *Q:* single hook-table pattern detail + composability limit. *V:* [ ] sketch given; [ ] composability limit (3-coord cap) articulated; [ ] when applicable. *Counter:* what if the cap is too strict and 4-coord can work in some cases?

**P-RUNNER-3-MINI-TABLES.** *Q:* mini-tables pattern detail + when applicable (requires multi-coordinate content). *V:* [ ] sketch given; [ ] applicability condition named; [ ] cost articulated. *Counter:* what if mini-tables are over-fragmented for content that has cross-coordinate relationships?

**P-RUNNER-4-HYBRID-OVERVIEW-DETAIL.** *Q:* hybrid tabular-overview + per-entry-detail pattern detail. The strongest runner per sensemaking. *V:* [ ] sketch given; [ ] dual-use serving named; [ ] cost articulated; [ ] when NOT to use named (e.g., small catalogs ≤3 entries where overhead exceeds value). *Counter:* what if the dual-pattern adds enough complexity to negate the dual-use benefit?

**P-RUNNER-5-PER-PHASE-PLACEMENT.** *Q:* per-phase placement pattern detail. *V:* [ ] sketch given; [ ] content-type fit named; [ ] cost (loss of at-a-glance catalog) articulated. *Counter:* what if practitioners need a catalog view that per-phase placement breaks?

**P-RUNNER-6-HYBRID-PER-PHASE-GLOSSARY.** *Q:* hybrid per-phase + glossary pattern detail. *V:* [ ] sketch given; [ ] dual-locality served; [ ] cost (entries appear twice — inline + glossary) articulated. *Counter:* what if duplication produces maintenance burden?

### Cluster B — Comparison axes

**P-AXIS-1-LOCALITY.** *Q:* how is locality of related items defined structurally + measured + scored per runner? *V:* [ ] definition given; [ ] measurement rule (e.g., "average text-distance between related items"); [ ] score per runner. *Counter:* what if locality is the wrong axis primary — what if cross-references are an acceptable substitute for adjacency?

**P-AXIS-2-SCALE.** *Q:* entry-add + axis-add painlessness scoring per runner. *V:* [ ] definition; [ ] scoring; [ ] composability limit accounted for. *Counter:* what if "scale" matters less in practice than current axis-weighting assumes?

**P-AXIS-3-DUAL-USE.** *Q:* narrative + lookup support scoring per runner. *V:* [ ] definition; [ ] scoring; [ ] hybrid runners distinguished from single-mode runners. *Counter:* what if dual-use is a false-need — what if every spec is single-mode in practice?

**P-AXIS-4-ADOPTION-COST.** *Q:* cost to migrate current state to each runner. *V:* [ ] cost per runner from current cognitive-harness state; [ ] cost-rank per runner. *Counter:* what if adoption cost is dominated by one runner being current default — making the axis trivially favor status quo?

### Cluster C — Content-type mapping

**P-MAPPING-CATALOG.** *Q:* recommended pattern for enumerated catalog content (failure modes / mechanisms / hooks) + concrete spec-edit template. *V:* [ ] runner selected (sensemaking says: P-RUNNER-4 Hybrid); [ ] template given; [ ] cost named. *Counter:* what if a simpler runner suffices for small catalogs (≤5 entries) and the hybrid overhead isn't justified?

**P-MAPPING-PROCESS.** *Q:* recommended pattern for process content (phases / steps / procedures). *V:* [ ] runner selected (sensemaking says: linear deep sections, current pattern); [ ] guidance given. *Counter:* what if some processes benefit from tabular overviews too?

**P-MAPPING-REFINEMENT-NOTES.** *Q:* refinement-note pattern + cluster-trigger threshold. *V:* [ ] runner selected (sensemaking says: peer-stacked, cluster past 5); [ ] cluster-trigger rule given. *Counter:* what if 5 is the wrong threshold — what if Phase 0 with 4 notes (current `/td-critique` state) already needs clustering?

**P-MAPPING-VOCABULARY.** *Q:* recommended pattern for cross-cutting principles / vocabulary. *V:* [ ] runner selected (sensemaking says: glossary + inline references); [ ] structural rule. *Counter:* what if glossary + inline duplicates content; should it be glossary-only OR inline-only?

**P-MAPPING-LARGE-CATALOG.** *Q:* recommended pattern for large catalogs with mechanism-cluster structure (≥10 entries) + threshold rule. *V:* [ ] runner selected (sensemaking says: mini-tables grouped by sub-coordinate); [ ] threshold articulated. *Counter:* what if the threshold should depend on something other than entry count (e.g., natural sub-cluster presence)?

### Cluster D — Wrapping

**P-AVOID-LIST.** *Q:* patterns to AVOID + rationale per pattern. *V:* [ ] list given; [ ] rationale per item; [ ] LLM-consumption reason explicit where relevant. *Counter:* what if some "avoid" patterns are actually fine in specific contexts?

**P-CROSS-SPEC-RULE.** *Q:* per-content-type consistency rule across disciplines. *V:* [ ] rule articulated; [ ] application example across at least 3 disciplines; [ ] edge cases named. *Counter:* what if per-discipline variation is preferred for cognitive-coherence within a discipline?

**P-RECOMMENDATION-SHAPE.** *Q:* the overall recommendation's structural form. *V:* [ ] content-type → pattern table given; [ ] per-pattern detail format established; [ ] dual-use of recommendation itself (it's a spec for spec organization) addressed. *Counter:* what if the recommendation shape contradicts itself (it's about patterns and itself uses a pattern)?

**P-PICKER.** *Q:* edge-case picker — when to deviate from default mapping. *V:* [ ] edge cases enumerated (small catalogs; very large catalogs; non-cluster catalogs); [ ] picker rule per case. *Counter:* what if the edge cases are too vague to be practitioner-applicable?

**P-COST-ARTICULATION.** *Q:* per-recommendation honest cost. *V:* [ ] cost named per content-type mapping; [ ] cost named for cross-spec rule; [ ] cost of adopting the framework itself. *Counter:* what if naming costs paralyses adoption (the framework looks too expensive to adopt)?

---

## Step 5 — Interface Map

| From | To | What flows | Direction |
|---|---|---|---|
| Each P-RUNNER (×6) | Each P-AXIS (×4) | Pattern structure (input to axis scoring) | A → B |
| Each P-AXIS (×4) | Each P-MAPPING (×5) | Axis scores (input to mapping selection) | B → C |
| Each P-RUNNER (×6) | Each P-MAPPING (×5) | Pattern structure (input to mapping recommendation) | A → C |
| All Cluster A + B + C | P-AVOID-LIST | Pattern data + axis scores (for negative-recommendation extraction) | A+B+C → D |
| All Cluster A + B + C | P-CROSS-SPEC-RULE | Pattern data + content-type mappings | A+B+C → D |
| All Cluster A + B + C | P-RECOMMENDATION-SHAPE | All prior pieces (shape synthesis) | A+B+C → D |
| All Cluster C + P-RUNNER pieces | P-PICKER | Mappings + runner properties (for edge-case rule) | C+A → D |
| All Cluster C | P-COST-ARTICULATION | Per-mapping costs | C → D |

**Assumptions-not-data check:** the load-bearing hidden assumption is "all 6 runners get scored on all 4 axes by Cluster B." If a piece skips an axis-runner cell, downstream mappings (Cluster C) may lack the data to justify the selection. Backstop: Critique can flag missing cells.

---

## Step 6 — Dependency Order

**Tier 1 (parallel; no incoming):**
- P-RUNNER-1 through P-RUNNER-6 (six pieces, each independently describable).

**Tier 2 (depends on Tier 1):**
- P-AXIS-1 through P-AXIS-4 (four pieces; each scores all six runners).

**Tier 3 (depends on Tier 1 + Tier 2):**
- P-MAPPING-CATALOG; P-MAPPING-PROCESS; P-MAPPING-REFINEMENT-NOTES; P-MAPPING-VOCABULARY; P-MAPPING-LARGE-CATALOG (five pieces, each cites a runner + uses axis scores).

**Tier 4 (depends on Tier 1 + 2 + 3):**
- P-AVOID-LIST; P-CROSS-SPEC-RULE; P-RECOMMENDATION-SHAPE; P-PICKER; P-COST-ARTICULATION (five wrapping pieces).

No circular dependencies. Tier-parallel work possible at each tier.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

**Independence.** Each piece answerable without others (except via dependency edges). 6 runner pieces fully independent. 4 axes peer-independent within Cluster B. 5 mappings peer-independent within Cluster C. 5 wrapping pieces peer-independent within Cluster D. **PASS.**

**Completeness.** Do the pieces cover the whole framework from SV6?
- 6 runners ✓ (matches sensemaking SV6 6-runner narrowing)
- 4 axes ✓ (matches load-bearing comparison axes)
- 5 mappings ✓ (matches 5 content-types in SV6 mapping table)
- Wrapping covers: avoid (✓), cross-spec (✓), recommendation shape (✓), edge-case picker (✓), cost articulation (✓)
- **All structural requirements covered.** PASS.

**Reassembly.** Pieces + interfaces = the whole? Given all pieces answered + interfaces satisfied, do the assembled pieces reconstruct the framework?
- Cluster A details each runner.
- Cluster B compares runners across the 4 axes.
- Cluster C picks a runner per content-type given the axes.
- Cluster D wraps with avoid-list, cross-spec rule, recommendation shape, picker, cost articulation.
- Reassembly: the wrapping (Cluster D) IS the final framework deliverable; it cites and integrates A+B+C.
- **PASS.**

### Full 7-dimension evaluation

- **Tractability.** Each piece is a text-fragment producible in one Innovation cycle. PASS.
- **Interface clarity.** A → B → C → D dependency edges are explicit. PASS.
- **Balance.** Per-piece complexity reasonably proportional. Cluster A pieces (runner detail) are slightly heavier; Cluster D pieces (wrapping) are slightly lighter; acceptable gradient. PASS.
- **Confidence.** Top-down clusters and bottom-up atoms map 1:1. HIGH.

ALL 7/7 PASS.

### Failure-mode check

- Premature decomposition: NO (sensemaking SV6 stabilized).
- Wrong boundaries: NO (cuts align with cluster topology).
- Hidden coupling: NO (assumptions-not-data check identified the axis-scoring-completeness assumption; backstopped by Critique).
- Missing pieces: NO (5 content-types covered; 6 runners; 4 axes; 5 wrappers).
- Over-decomposition: BORDERLINE (20 pieces is high; each is a small text-fragment so tractability not compromised; acceptable).
- Ignoring dependencies: NO (4-tier order explicit).
- Imbalanced decomposition: NO (per-cluster complexity reasonable).

---

## Final Deliverable

### Question Tree (summary)

```
Tier 1 (parallel; no dependencies):
  P-RUNNER-1-LINEAR-TABLE
  P-RUNNER-2-HOOK-TABLE
  P-RUNNER-3-MINI-TABLES
  P-RUNNER-4-HYBRID-OVERVIEW-DETAIL
  P-RUNNER-5-PER-PHASE-PLACEMENT
  P-RUNNER-6-HYBRID-PER-PHASE-GLOSSARY

Tier 2 (depends on Tier 1):
  P-AXIS-1-LOCALITY
  P-AXIS-2-SCALE
  P-AXIS-3-DUAL-USE
  P-AXIS-4-ADOPTION-COST

Tier 3 (depends on Tier 1 + 2):
  P-MAPPING-CATALOG
  P-MAPPING-PROCESS
  P-MAPPING-REFINEMENT-NOTES
  P-MAPPING-VOCABULARY
  P-MAPPING-LARGE-CATALOG

Tier 4 (wrapping; depends on Tier 1 + 2 + 3):
  P-AVOID-LIST
  P-CROSS-SPEC-RULE
  P-RECOMMENDATION-SHAPE
  P-PICKER
  P-COST-ARTICULATION
```

### Verdict

**PROCEED.** 7/7 dimensions PASS; 0 active failure modes; 1 borderline (over-decomposition; acceptable given tractability of each piece).

### Open question for Innovation

- Per piece: generate one primary candidate + one Inversion-candidate (counter-question is the seed).
- For Cluster B (axes): ensure all 6 runners scored on each axis — fill the 24-cell scoring grid.
- For Cluster C (mappings): explicit citation of selected runner + axis-score rationale per mapping.
- For Cluster D (wrapping): synthesis must integrate A + B + C without re-citing every cell.
