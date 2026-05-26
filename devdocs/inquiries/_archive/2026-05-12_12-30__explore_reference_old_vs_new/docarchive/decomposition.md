# Decomposition — partitioning the Option C adoption package

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_12-30__explore_reference_old_vs_new/_branch.md`

Prior outputs: this inquiry's `exploration.md` + `sensemaking.md`. The whole being decomposed is SV6's adoption package: 3 refinements + 1 cascade + finding-level metadata.

---

## Step 1 — Perceive Coupling Topology

### Elements

| # | Element | Layer |
|---|---|---|
| E1 | G1 — terminal SOLID-INSTRUCTIONS block to add to explore_accurate.md (MUST) | spec edit |
| E2 | G1 source content (drawn from old's lines 290–331) | source |
| E3 | G1 placement (after §8 Summary) | spec edit |
| E4 | G2 — "Exploration is NOT" comparator paragraph (RECOMMENDED) | spec edit |
| E5 | G2 source content (drawn from old's lines 20–24) | source |
| E6 | G2 placement (in §1.1 Verb-meaning) | spec edit |
| E7 | G3 — per-mode worked examples expansion (RECOMMENDED) | spec edit |
| E8 | G3 source content (drawn from old's lines 30–54) | source |
| E9 | G3 placement (in §3.2 Two operational modes) | spec edit |
| E10 | SKILL.md Step 0 path cascade (1-line change) | cascade edit |
| E11 | Preservation of old `explore.md` (no-op; do not delete) | preservation |
| E12 | Option B fallback documentation in this finding's Next Actions | finding metadata |

12 elements.

### Coupling

Strong (within each refinement bundle):
- E1 ↔ E2 ↔ E3 (G1 bundle: edit + content + placement)
- E4 ↔ E5 ↔ E6 (G2 bundle)
- E7 ↔ E8 ↔ E9 (G3 bundle)

Cross-bundle:
- E1/E4/E7 → E10 (cascade conditional on at least one refinement being applied)
- E1/E4/E7 + E10 → E12 (finding documents which pieces were applied)
- E11 (preservation) is orthogonal — no edit, just don't delete

### Clusters

**α — G1 refinement** (E1, E2, E3): the MUST edit; terminal SOLID-INSTRUCTIONS block. Internally tightly coupled.

**β — G2 refinement** (E4, E5, E6): RECOMMENDED; conceptual comparator paragraph.

**γ — G3 refinement** (E7, E8, E9): RECOMMENDED; per-mode worked examples.

**δ — SKILL.md cascade** (E10): 1-line path update; conditional on at least one of α/β/γ.

**ε — Finding-level metadata** (E11, E12): preservation no-op + Option B fallback documentation.

5 clusters. α/β/γ are independent refinement bundles. δ is the cascade. ε is finding-level wrapper.

### Inter-cluster coupling

| Boundary | Coupling | Reason |
|---|---|---|
| α ↔ β | weak (independent) | different sections of new file |
| α ↔ γ | weak (independent) | different sections of new file |
| β ↔ γ | weak (independent) | different sections of new file |
| {α, β, γ} → δ | moderate (conditional cascade) | SKILL.md path update only meaningful if at least one refinement applied |
| {α, β, γ, δ} → ε | weak (documentation reflects actions) | finding records what was done |

α, β, γ are independent bundles; δ cascades; ε documents.

---

## Step 2 — Detect Boundaries (Top-Down)

| Boundary | Crosses | Traffic | Type |
|---|---|---|---|
| B1 (α↔β) | G1 ↔ G2 refinement bundles | none direct | independent |
| B2 (α↔γ) | G1 ↔ G3 refinement bundles | none direct | independent |
| B3 (β↔γ) | G2 ↔ G3 refinement bundles | none direct | independent |
| B4 ({α,β,γ}↔δ) | refinement bundles ↔ SKILL.md cascade | low (conditional trigger) | one-way (cascade fires on adoption) |
| B5 ({α,β,γ,δ}↔ε) | adoption actions ↔ finding metadata | low | one-way (documentation) |

All boundaries are clean. **Initial partition: 5 pieces.**

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- A1 Terminal SOLID-INSTRUCTIONS block (G1 content)
- A2 Conceptual comparator paragraph (G2 content)
- A3 Per-mode worked examples (G3 content)
- A4 SKILL.md Step 0 pre-read line (cascade target)
- A5 Old `explore.md` file (preservation target)
- A6 Option B fallback (recommendation alternative)

### Atom-to-cluster check

| Atom | Cluster | Top-down agreement |
|---|---|---|
| A1 | α | ✓ |
| A2 | β | ✓ |
| A3 | γ | ✓ |
| A4 | δ | ✓ |
| A5 | ε (preservation) | ✓ |
| A6 | ε (fallback documentation) | ✓ |

Clean atom-to-cluster mapping. **Boundary confidence: 5/5 HIGH.**

---

## Step 4 — Express as Question Tree

### P-α — G1: Terminal SOLID-INSTRUCTIONS block addition (MUST)

**Question:** *What is the content of the terminal "Execute the Exploration Process" block, and how does it slot into explore_accurate.md at terminal position?*

**Verification criteria:**

- [ ] Block content drafted, source-adapted from old's lines 290–331
- [ ] Project-convention marker present: `---- NOW SOLID INSTRUCTIONS START ----` (or equivalent)
- [ ] 4 numbered steps:
  - Step 1: State Mode + Entry Point (declarations parallel to §3.1 Step 0 fields)
  - Step 2: Run Exploration Cycles (referencing §3.4 canonical cycle)
  - Step 3: Assess Convergence (with Jump-scan refinement; referencing §4.2)
  - Step 4: Final Deliverable — The Structural Map (6-section template; referencing §5.1)
- [ ] Placement: after §8 Summary in explore_accurate.md (terminal position; project-convention pattern)
- [ ] No contradictions with §3 (Process) or §5 (Output) content
- [ ] Block is self-contained — readable without re-loading earlier sections

### P-β — G2: Conceptual comparator paragraph addition (RECOMMENDED)

**Question:** *What is the content of the "Exploration is NOT" comparator paragraph, and where in §1.1 does it sit?*

**Verification criteria:**

- [ ] Paragraph drafted, source-adapted from old's lines 20–24
- [ ] Names 4 comparators with 1–2 sentence contrasts each:
  - vs **Sensemaking** (Sensemaking converts ambiguity → understanding; exploration converts unknown → map of what exists. Exploration discovers WHAT/WHERE; sensemaking discovers WHY/HOW.)
  - vs **Innovation** (Innovation creates what doesn't exist; exploration maps what does exist or generates candidates for completeness. Innovation's success = novelty; exploration's success = completeness.)
  - vs **Research** (Research tests hypotheses; exploration precedes hypothesis formation. Research = closed-mode targeted interrogation; exploration = open-mode surfacing.)
  - vs **Browsing** (Browsing is undirected; exploration is purposive with coverage-awareness + frontier tracking.)
- [ ] Plain-language framing (pedagogical, not operational)
- [ ] Placement: in §1.1 Verb-meaning of explore_accurate.md, after the verb-meaning paragraph
- [ ] Preserves the discipline-NOT-list at §1.3 (both coexist; G2 is pedagogical contrast; §1.3 is operational boundary)

### P-γ — G3: Per-mode worked examples expansion (RECOMMENDED)

**Question:** *What examples expand §3.2's two-mode description, and how do they integrate?*

**Verification criteria:**

- [ ] Artifact-mode example block drafted, source-adapted from old's lines 32–42:
  - Examples: codebases (files, functions, patterns), existing literature, competitor products, market data, historical records
  - How scan works: read, list, index
  - How probe works: read deeper into a specific artifact; examine internals, trace connections
- [ ] Possibility-mode example block drafted, source-adapted from old's lines 44–54:
  - Examples: solution spaces, design options, strategic directions, research frontiers
  - How scan works: generate candidates at surface level; 1–2 sentence descriptions; aim for complete landscape including obvious + non-obvious
  - How probe works: take a candidate, examine more closely; what it enables/blocks; still mapping not developing
- [ ] "Key difference from innovation" note preserved (completeness vs novelty)
- [ ] Placement: integrated into §3.2 Two operational modes
- [ ] Existing completeness-before-novelty refinement in §3.2 preserved
- [ ] §3.2's existing brief content not deleted — examples expand, not replace

### P-δ — SKILL.md Step 0 path cascade

**Question:** *What is the exact 1-line edit to `homegrown/explore/SKILL.md`?*

**Verification criteria:**

- [ ] Locate Step 0 pre-read line: currently reads "**Before reading anything else in this file, read `references/explore.md` in full.**"
- [ ] Update to: "**Before reading anything else in this file, read `references/explore_accurate.md` in full.**"
- [ ] Cascade conditionality: this edit is applied only when at least one of P-α / P-β / P-γ has been applied. Otherwise the SKILL.md continues pointing at the old `explore.md`.
- [ ] No other SKILL.md changes (Step 0 line is the only path reference)

### P-ε — Finding-level metadata

**Question:** *What does the finding document about adoption options, fallback, and old-file preservation?*

**Verification criteria:**

- [ ] Next Actions section explicitly names:
  - **MUST:** G1 — restore terminal SOLID-INSTRUCTIONS block in explore_accurate.md (if Option C adopted)
  - **RECOMMENDED:** G2 + G3 — add comparator paragraph + per-mode examples (if Option C adopted)
  - **MUST CASCADE:** SKILL.md Step 0 path update (if Option C adopted)
- [ ] Option B (NEW as-is) named as user-preference fallback in COULD section; explicitly notes that G1 absence carries LLM-runtime-variance risk
- [ ] Option A (OLD) named as rejected; reasoning: unwinds 11 end-goal-required additions from the 4 findings
- [ ] Hybrid path named as rejected; reasoning: maintenance burden + confusion
- [ ] Preservation note: old `explore.md` kept on disk as historical reference; NOT deleted; NOT modified
- [ ] No new files created beyond the existing explore_accurate.md (just edits + cascade)

### Independence check

- P-α answerable independently — content + placement are self-contained.
- P-β answerable independently — different section of new file from α.
- P-γ answerable independently — different section.
- P-δ conditionally depends on at least one of α/β/γ — but answerable independently as a 1-line edit.
- P-ε reflects the others — answerable as a documentation task once α/β/γ/δ decisions are stable.

All pieces are independently answerable in focused passes given their predecessors.

---

## Step 5 — Map Interfaces

### Interface table

| From → To | What flows | Direction | Assumptions |
|---|---|---|---|
| **Old file → P-α** | Source content from old's lines 290–331 | One-way (content migration) | Content survives translation; placement is terminal |
| **Old file → P-β** | Source content from old's lines 20–24 | One-way (content migration) | Plain-language framing preserved |
| **Old file → P-γ** | Source content from old's lines 30–54 | One-way (content migration) | Per-mode examples preserved |
| **{P-α, P-β, P-γ} → P-δ** | Adoption triggers the SKILL.md cascade | Conditional one-way | Cascade only fires when at least one refinement is applied |
| **{P-α, P-β, P-γ, P-δ} → P-ε** | Adoption actions documented in finding | One-way (documentation) | Finding records what was applied |

### Assumptions-not-data check

- **Source-content translation** (Old → α/β/γ): the old file's content style is largely compatible with the new file's. Wording adjustments may be needed to match new's verb-meaning vocabulary (e.g., references to "Structural Exploration" → "/explore"; references to "the discipline" → "/explore as a specialization"). **Mitigation:** during innovation, adapt wording while preserving operational content.
- **Cascade conditionality** (α/β/γ → δ): SKILL.md change is only meaningful if at least one refinement is applied. **Mitigation:** explicit gate in finding's MUST CASCADE statement.
- **Section integration** (α/β/γ): each refinement must fit into the new file's section structure without breaking existing content. **Mitigation:** verification criteria require existing content preservation.

### Hidden coupling check

- **Verb-meaning vocabulary** (across α/β/γ): all three refinements draw from old's pre-iter-2 vocabulary ("Structural Exploration"). When adapting, ensure the new file's verb-meaning ("purposive open-mode surfacing") and discipline-named vocabulary (`/explore` rather than "Structural Exploration") are used. **Mitigation:** during innovation, adapt language consistently.
- **Section numbering** (P-α placement): adding a terminal block after §8 either creates a §9 OR appears as an unnumbered terminal block (project-convention precedent). **Mitigation:** during innovation, decide and apply consistently.

---

## Step 6 — Order by Dependency

```
{Old file source content}
    ↓
P-α (G1 MUST)  P-β (G2 RECOMMENDED)  P-γ (G3 RECOMMENDED)
                   ↓
                P-δ (SKILL.md cascade — conditional)
                   ↓
                P-ε (finding documentation)
```

**Dependency order:**

1. **Refinement bundles (parallel):** P-α (MUST), P-β (RECOMMENDED), P-γ (RECOMMENDED). Each is independent of the others; user can choose which to apply.
2. **Cascade:** P-δ — conditional on at least one of α/β/γ being applied.
3. **Documentation:** P-ε — last; records which actions were taken.

No circular dependencies.

**Per-tier guidance:**

- If user adopts Option C (recommended): apply α + δ + ε minimum; optionally add β + γ.
- If user adopts Option B (fallback): no edits; just document the choice in ε.
- If user adopts Option A (rejected): not recommended; but if pursued, no edits to new file; revert SKILL.md if previously changed.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable in focused pass? | **PASS** |
| **Completeness** | All 12 SV6 elements covered? | **PASS** — 5 clusters cover all elements |
| **Reassembly** | Pieces + cascade = Option C adoption package? | **PASS** |

### Full (additional dimensions)

| Dimension | Check | Score |
|---|---|---|
| Tractability | Each piece bounded? | PASS — each is a single-section edit or 1-line change |
| Interface clarity | Cross-piece flows explicit; assumptions-not-data check applied? | PASS — 5 interfaces named; 2 assumption surfaces examined |
| Balance | Complexity proportional? | PASS with note — α is heaviest (~30-line addition); β + γ smaller; δ + ε small |
| Confidence | Top-down + bottom-up agree? | PASS — 5/5 boundaries HIGH |

### Determination-mechanism check

Two runtime-determined concepts:

- **Whether to apply Option C vs Option B.** Determination: user choice. **Placement:** P-ε's documentation makes the choice explicit; user reads finding and decides.
- **Whether to apply G2/G3 alongside G1.** Determination: user preference (minimum-change vs pedagogical-completeness). **Placement:** P-ε's MUST/RECOMMENDED tiering frames the choice.

Both placed; no gap.

### Reassembly check

Given P-α + P-β + P-γ + P-δ + P-ε + 5 interfaces, can Option C adoption be reconstructed? Yes — apply at least P-α (MUST), optionally apply P-β/P-γ (RECOMMENDED), apply P-δ cascade, document via P-ε. Old file preserved via P-ε's preservation note. Reassembly: PASS.

### Failure-mode self-check

- Premature decomposition: NO — SV6 was stable.
- Wrong boundaries: NO — each refinement bundle has internal cohesion; cascade is cleanly separated.
- Hidden coupling: 2 risks identified (verb-meaning vocabulary translation; section-numbering convention); both mitigated by innovation-stage adaptation.
- Missing pieces: determination-mechanism check passed for adoption-choice and refinement-selection.
- Over-decomposition: 5 pieces is reasonable; could be 4 if ε collapsed into the others but separation aids clarity.
- Ignoring dependencies: explicit order; cascade conditionality named.
- Imbalanced: minor (α heaviest at ~30 lines); within range.

---

## Final Deliverable

### Coupling Map

5 clusters: α (G1 MUST), β (G2 RECOMMENDED), γ (G3 RECOMMENDED), δ (SKILL.md cascade), ε (finding metadata). α/β/γ are independent refinement bundles; δ cascades; ε documents.

### Question Tree

- **P-α** — *What is the terminal SOLID-INSTRUCTIONS block content + placement?*
- **P-β** — *What is the comparator paragraph content + placement?*
- **P-γ** — *What are the per-mode worked examples + placement?*
- **P-δ** — *What is the 1-line SKILL.md path edit?*
- **P-ε** — *What does the finding document about options, fallback, preservation?*

### Interface Map

5 interfaces; 2 assumption surfaces examined (vocabulary translation; cascade conditionality); 2 hidden-coupling risks mitigated.

### Dependency Order

{α ‖ β ‖ γ} → δ (conditional) → ε. Acyclic.

### Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full dimensions PASS (with acknowledged minor imbalance: α heavier). Determination-mechanism check PASS. 0 failure modes triggered.

---

## Frontier (for /innovate)

- *(P-α)* Generate concrete draft of the terminal SOLID-INSTRUCTIONS block. Adapt old's lines 290–331 to new file's vocabulary (`/explore` as the discipline name; verb-meaning grounding). Decide section number (`§9` vs unnumbered terminal block).
- *(P-β)* Generate concrete draft of the comparator paragraph. Adapt old's lines 20–24. Decide exact placement within §1.1 (after verb-meaning paragraph; before or after upstream-precondition statement).
- *(P-γ)* Generate concrete draft of per-mode worked examples. Adapt old's lines 30–54. Decide whether to add as subsections (Artifact / Possibility) or as inline examples within existing §3.2 paragraphs.
- *(P-δ)* Confirm exact 1-line edit phrasing for SKILL.md.
- *(P-ε)* Generate finding's Next Actions content with MUST / RECOMMENDED / DEFERRED tiering + Option B fallback documentation.

---

## Telemetry

- **Elements:** 12
- **Atoms:** 6
- **Boundary-confidence:** 5/5 HIGH
- **Pieces produced:** 5 (P-α / P-β / P-γ / P-δ / P-ε)
- **Interfaces:** 5 with assumptions check on 2 surfaces
- **Hidden coupling risks:** 2 (vocabulary translation; section numbering); both mitigated
- **Determination-mechanism check:** 2 concepts placed
- **Dependency order:** acyclic; conditional cascade
- **Self-evaluation:** 3/3 min PASS; 4/4 full PASS
- **Failure modes triggered:** 0

## Self-Assessment

**Overall: PROCEED**

SV6's adoption package partitions cleanly into 5 pieces. P-α is the MUST refinement (terminal block addition); P-β + P-γ are RECOMMENDED refinements; P-δ is the cascade; P-ε is finding metadata. Innovation should produce concrete content drafts for each. Critique should stress-test whether the MUST/RECOMMENDED tiering is correctly assigned.
