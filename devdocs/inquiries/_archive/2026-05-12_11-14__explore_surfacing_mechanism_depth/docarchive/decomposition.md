# Decomposition — partitioning the per-item content depth additions

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/_branch.md`

Prior outputs consumed: this inquiry's `exploration.md` and `sensemaking.md`. The whole being decomposed is SV6's design: per-item content depth taxonomy + Step 0 field + heuristic + NOT-list clarification.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

| # | Element | Layer |
|---|---|---|
| E1 | Per-item content table (D0–D4 with descriptions) | Components / Output |
| E2 | D2 default + D1 opt-in + D0 unacceptable rules | Quality / Components |
| E3 | D5+ exclusion rule | Quality |
| E4 | Inter-rater agreement heuristic (NAIVE scanners) | Quality |
| E5 | Depth-level Step 0 declaration field | Process (Step 0) |
| E6 | Orthogonality statement (depth-level ⊥ resolution-level) | Process |
| E7 | Default coupling table (resolution ↔ depth) | Process |
| E8 | Per-invocation uniformity rule | Components |
| E9 | D4 optional + forward-tied | Components (note in table row) |
| E10 | NOT-list clarification (meaning = conceptual-structure meaning) | Identity / Quality |
| E11 | Labeling vs anchor distinction | Identity |
| E12 | 3 calibration-state items | Spec-wide metadata |

### Pairwise coupling

- **E1 ↔ E2 (strong):** table needs the default-acceptance rules
- **E1 ↔ E3 (strong):** table draws the D4/D5 line which E3 enforces
- **E1 ↔ E9 (strong):** D4 row is the forward-tied row
- **E4 ↔ E11 (strong):** heuristic applies the labeling-vs-anchor distinction operationally
- **E5 ↔ E6 (strong):** depth-level field lives alongside resolution-level (orthogonality)
- **E5 ↔ E7 (moderate):** depth-level uses the default coupling
- **E5 ↔ E8 (strong):** per-invocation uniformity = whatever Step 0 declared
- **E10 ↔ E3 (strong):** NOT-list clarification IS the D5+ exclusion boundary at a different level
- **E10 ↔ E11 (moderate):** clarification of "meaning" is paired with labeling/anchor distinction
- **E12 ↔ E4, E7, E9 (weak, multi-ref):** calibration notes annotate specific elements

### Clusters

**α — Per-item content table & rules (E1, E2, E3, E8, E9):** the table + accept/reject rules + uniformity + D4 forward-tie. Internally tightly coupled.

**β — Depth-level Step 0 field & coupling (E5, E6, E7):** the field + orthogonality + default coupling. Internally tightly coupled.

**γ — Boundary heuristic & terminology (E4, E10, E11):** the inter-rater-among-naive heuristic + NOT-list clarification + labeling/anchor distinction. Three load-bearing operational pieces.

**δ — Calibration notes (E12):** the 3 calibration-state-flagged items. Annotation cluster.

### Inter-cluster coupling

| Boundary | Coupling | Reason |
|---|---|---|
| α ↔ β | **strong (paired)** | Table specifies the field's value domain; field specifies which row of the table is in force |
| α ↔ γ | **moderate** | Heuristic operationalizes the table's D4↔D5 line; clarification of "meaning" aligns with D5+ exclusion |
| β ↔ γ | **moderate** | Terminology (labeling vs anchor) clarifies what depth-level means |
| δ ↔ {α, β, γ} | **weak** | Notes annotate specific elements without modifying them |

α and β are PAIRED (must be designed together). γ supports both. δ is closing metadata.

---

## Step 2 — Detect Boundaries (Top-Down)

Cutting at the four cluster boundaries:

| Boundary | Crosses | Traffic | Type |
|---|---|---|---|
| B1 (α↔β) | Content table ↔ Step 0 field | mutual reference | bidirectional (paired) |
| B2 (α↔γ) | Content table ↔ heuristic + terminology | moderate | one-way (γ operationalizes α's lines) |
| B3 (β↔γ) | Step 0 field ↔ heuristic + terminology | low-moderate | one-way (γ clarifies β's meaning) |
| B4–B6 (δ↔others) | Calibration notes ↔ each cluster | low | one-way annotation |

α↔β is the only paired boundary; everything else is asymmetric. **Initial partition: 4 pieces (P-α / P-β / P-γ / P-δ).**

I considered splitting α further (E1 table vs E2-3 rules vs E8 uniformity vs E9 D4-tie) but each is too small to be a standalone piece. Kept together as the "content-and-rules package."

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Irreducible atoms

- A1 Depth level (D0, D1, D2, D3, D4)
- A2 Surfaced item (carries content; iter-2's unit)
- A3 Functional one-line (the labeling at inter-rater-agreement level)
- A4 Structural adjacency (co-location facts)
- A5 Relevance verdict (D4; forward-tied)
- A6 Inter-rater agreement (the test)
- A7 Naive scanner (the test's subject)
- A8 Step 0 declaration block
- A9 Default coupling entry
- A10 NOT-list entry
- A11 Anchor (sense-making's unit; distinguished from labeling)

### Atom-to-cluster mapping

| Atom | Cluster | Top-down agreement |
|---|---|---|
| A1 Depth level | α (table rows) + β (field values) | Multi-cluster — explicit paired interface |
| A2 Surfaced item | α (each row applies to one item) | ✓ |
| A3 Functional one-line | α (D2 row content) | ✓ |
| A4 Structural adjacency | α (D3 row content) | ✓ |
| A5 Relevance verdict | α (D4 row; forward-tied) | ✓ |
| A6 Inter-rater agreement | γ | ✓ |
| A7 Naive scanner | γ (heuristic subject) | ✓ |
| A8 Step 0 declaration block | β | ✓ |
| A9 Default coupling entry | β | ✓ |
| A10 NOT-list entry | γ (clarification) | ✓ |
| A11 Anchor | γ (terminology distinction) | ✓ |

All atoms map to designated clusters. A1 (depth level) is the only multi-cluster atom — handled via the paired α↔β interface.

**Boundary confidence:**
- B1 (α↔β paired): HIGH — pairing is explicit; atoms shared via interface
- B2 (α↔γ): HIGH — γ's heuristic and clarification serve α's table
- B3 (β↔γ): HIGH — γ's terminology clarifies β's field
- B4–B6 (δ): HIGH — annotation only

All boundaries pass bottom-up sanity check.

---

## Step 4 — Express as Question Tree

### P-α — Per-item content table & rules

**Question:** *What labeling content does each surfaced item carry, what depth levels are acceptable, and how does the table express the per-invocation commitment?*

**Verification criteria:**
- [ ] Table with 5 rows (D0–D4) showing the labeling content at each level
- [ ] Each row gives a concrete example from at least one domain (codebase / research / problem-domain)
- [ ] D2 stated as default minimum
- [ ] D1 stated as opt-in for coarse-resolution scans
- [ ] D0 stated as NOT acceptable as final output (with reason: the user's "would have to guess" concern)
- [ ] D5+ stated as excluded (reference to sense-making's territory)
- [ ] Per-invocation uniformity rule stated (depth is per-call commitment; items with low confidence may have partial content but the level is per-call)
- [ ] D4 row marked as **optional + forward-tied** with explicit pointer to the open verification-probe question
- [ ] Form note: prose by default; typed records when SK-STD+ Schema (deferred) activates

### P-β — Depth-level Step 0 field & coupling

**Question:** *How is depth-level declared at Step 0, and how does it relate to the existing resolution-level field?*

**Verification criteria:**
- [ ] Step 0 declaration block updated to include `depth-level` alongside existing fields:
  - `cognitive-commitment-mode: open` (from iter-2)
  - `territory-type-mode: artifact | possibility` (from iter-2)
  - `entry-point: frontier-first | signal-first` (from iter-2)
  - `expected: ~N items` or `~N items per parent` (from just-finished inquiry — resolution-level)
  - **`depth-level: D1 | D2 (default) | D3 | D4`** (new this inquiry)
- [ ] Orthogonality statement: depth-level ⊥ resolution-level (orthogonal dimensions of the input contract)
- [ ] Default coupling table (recommended; not enforced):
  - resolution ~10 items → depth-level D1-D2 (typical)
  - resolution ~50 items → depth-level D2-D3 (typical)
  - resolution ~200 items → depth-level D3-D4 (typical)
- [ ] Override note: user can decouple (e.g., coarse-breadth with rich-depth requires more budget but is structurally allowed)

### P-γ — Boundary heuristic & terminology

**Question:** *How does a scanner apply the labeling-vs-meaning boundary in practice, what terminology distinguishes labeling from anchor, and how does the NOT-list refine?*

**Verification criteria:**
- [ ] Heuristic stated clearly: **inter-rater agreement among NAIVE scanners** — "would a scanner who reads the item but has NOT yet built a conceptual-structure model produce roughly the same description?"
- [ ] Definition of "naive scanner" (scanner who has not done sense-making's anchor-extraction work on this territory)
- [ ] Edge-case handling: domain jargon and contested terminology treated as **labeling at low confidence**, not as meaning-extraction
- [ ] Distinction stated: **labeling** is per-item identifying content (surface granularity, sense-makable); **anchor** is sense-making's conceptual-structure unit (extracted via sense-making's Phase 1)
- [ ] NOT-list clarification added: "no meaning extraction" means **no conceptual-structure meaning** (anchor extraction, relational claims, interpretive role assignment); identifying labels at the inter-rater-agreement level are NOT meaning-extraction
- [ ] Cross-reference: the labeling-vs-anchor distinction is the operational test for the D4↔D5 boundary in the per-item content table

### P-δ — Calibration notes

**Question:** *Which spec entries are calibration-state-flagged and what are their refinement triggers?*

**Verification criteria:**
- [ ] Three calibration-state items flagged:
  1. **Inter-rater heuristic edge cases** — refinement trigger: 3+ observed runs report ambiguity; refine via empirical edge-case examples
  2. **Default depth-by-resolution coupling** — refinement trigger: context-budget observations across staged runs; refine the coupling table
  3. **D4 (relevance verdict)** — refinement trigger: the planned verification-probe inquiry produces its finding; D4's specification will be detailed there
- [ ] Each calibration note references the specific element it annotates
- [ ] Notes placed where the elements live (no separate calibration section; inline notes)

### Independence check

- **P-α** answerable independently; the table + rules are self-contained.
- **P-β** answerable given P-α's table rows as the field's value domain.
- **P-γ** depends on P-α (heuristic operationalizes its lines) but designable in parallel with P-α + P-β (the operational machinery doesn't need the table to be finalized).
- **P-δ** depends on P-α + P-β + P-γ; designed last.

The α↔β pairing is the only blocking dependency; γ can be designed alongside.

---

## Step 5 — Map Interfaces

### Interface table (with assumptions-not-data check)

| From → To | What flows | Direction | Assumptions |
|---|---|---|---|
| **P-α → P-β** | The table's row labels (D0–D4) become the field's value domain | One-way | β assumes α's labels are stable; α assumes β honors the value domain |
| **P-β → P-α** | The Step 0 declaration's depth-level selects which row of α's table applies | One-way | α assumes the field's value selects exactly one row; per-invocation commitment is uniform |
| **P-γ → P-α** | Heuristic operationalizes the D4↔D5 boundary in α's table | One-way | α assumes γ's heuristic is applied at scan/probe time when populating fields |
| **P-γ → P-β** | Terminology (labeling vs anchor) clarifies what depth-level means | One-way | β assumes γ's distinction is read alongside the Step 0 field |
| **P-δ → P-α + P-β + P-γ** | Calibration notes annotate specific elements without modifying behavior | One-way | All clusters assume δ's notes are non-blocking |

### Assumptions-not-data check

- **Table-field stability** (α ↔ β paired): if α's table row labels change later (e.g., from D0–D4 to L0–L4 or to typed enum names), β's field value domain breaks. **Mitigation:** label them as a single shared atom (the depth level enumeration), maintained in one place (α's table) and referenced by β.
- **Heuristic at runtime** (γ → α): γ's heuristic must be applicable at scan/probe time, by the LLM running the discipline. The "naive scanner" framing is itself an instruction to the LLM. **Mitigation:** γ's wording is explicit and brief, fits in /explore's spec without bloating.
- **Forward-tie on D4** (P-α): the D4 row depends on the verification-probe inquiry. **Mitigation:** mark explicitly; verification-probe inquiry is a planned follow-up.

### Hidden coupling check

- **A1 Depth level** spans α and β (multi-cluster atom). Risk: schema drift between table and field. Mitigation: single-source in α; β references.
- **A11 Anchor** spans γ (where it's introduced as comparator to "labeling") AND sense-making's existing spec (where anchors are the unit). Risk: the spec might cross-reference sense-making's anchor definition. Mitigation: γ's spec entry uses "anchor" with a brief in-line description; cross-references sense-making's spec for fuller definition.

---

## Step 6 — Order by Dependency

```
P-α (table & rules)  ⇄  P-β (Step 0 field & coupling)     [paired; design together]
        ↓                       ↓
        P-γ (heuristic & terminology)                     [operational machinery]
                ↓
        P-δ (calibration notes)                           [annotations]
```

**Dependency order:**

1. **P-α + P-β paired** — design as a unit (table specifies field's domain; field selects table's row).
2. **P-γ** — depends on P-α (heuristic operationalizes the table's lines); designable in parallel with α+β.
3. **P-δ** — last; annotates the others.

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable in a focused pass? | **PASS** (α and β paired; γ designable alongside; δ last) |
| **Completeness** | All 12 elements (E1–E12) covered? | **PASS** — all mapped to a cluster |
| **Reassembly** | Pieces + interfaces = SV6 design? | **PASS** |

### Full (additional dimensions)

| Dimension | Check | Score |
|---|---|---|
| Tractability | Each piece a focused pass? | PASS — α is the heaviest (table + 5 rules) but bounded |
| Interface clarity | All cross-piece flows explicit; assumptions-not-data check applied? | PASS — 5 interfaces named; 3 assumption surfaces examined |
| Balance | Complexity proportional? | PASS with note — α heaviest, β + γ moderate, δ lightest. Within range. |
| Confidence | Top-down + bottom-up agree? | PASS — 6 of 6 boundaries HIGH |

### Determination-mechanism check

Two runtime-determined concepts:

- **The depth-level value at invocation start.** Determination mechanism: the inquiry's `_branch.md` Step 0 declaration sets it; if absent, default to D2. **Placement:** P-β (Step 0 field). ✓
- **The heuristic application at scan/probe time.** Determination mechanism: the LLM running /explore applies the "would a naive scanner produce roughly the same description?" test for each potentially-borderline labeling decision. **Placement:** P-γ. ✓

Both placed; no gap.

### Reassembly check

Given P-α + P-β + P-γ + P-δ + 5 interfaces, can SV6 be reconstructed? Walk-through: /explore's spec gains a per-item content table (α) with D0–D4 levels, default and excluded rules, per-invocation uniformity, D4-forward-tie. Step 0 declarations gain a depth-level field (β) with orthogonality and default-coupling notes. Quality section gains the labeling-vs-meaning heuristic + terminology + NOT-list clarification (γ). Three calibration notes annotate specific elements (δ).

**Reassembly: PASS.**

### Failure-mode self-check

- Premature decomposition: NO — sensemaking SV6 clarified the whole.
- Wrong boundaries: NO.
- Hidden coupling: A1 (depth level) and A11 (anchor) surfaced; both mitigated.
- Missing pieces: determination-mechanism check passed.
- Over-decomposition: NO — 4 pieces appropriate; α not split further (would produce fragments).
- Ignoring dependencies: NO — paired α↔β explicit; γ supports both; δ last.
- Imbalanced: minor — α heaviest, within range.

---

## Final Deliverable

### Coupling Map

4 clusters: per-item content table & rules (α); depth-level Step 0 field & coupling (β); boundary heuristic & terminology (γ); calibration notes (δ). α↔β paired; γ supports both; δ annotates.

### Question Tree

- **P-α** — *What labeling content does each surfaced item carry, what levels are acceptable, and how is per-invocation commitment expressed?*
- **P-β** — *How is depth-level declared at Step 0, and how does it relate to resolution-level?*
- **P-γ** — *How does a scanner apply the labeling-vs-meaning boundary, and how do labeling and anchor differ?*
- **P-δ** — *Which spec entries are calibration-state-flagged and what are their refinement triggers?*

### Interface Map

5 interfaces named; 3 assumption surfaces examined; 2 multi-cluster atoms (depth level, anchor) handled via single-source.

### Dependency Order

P-α ⇄ P-β (paired) → P-γ → P-δ.

### Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full dimensions PASS. Determination-mechanism check PASS. 0 failure modes triggered.

---

## Frontier (for /innovate)

- *(P-α)* Generate shape variants for the per-item content table:
  - **Minimum:** 5-row table with one-line descriptions; D2-default note; no examples
  - **Standard:** 5-row table with example per row + per-invocation uniformity note + D4-forward-tie pointer
  - **Maximal:** 5-row table + multi-domain examples + edge-case examples + form note (prose vs typed)
- *(P-β)* Generate phrasings for the Step 0 declaration block. Minimum (one-line); standard (block with default note); maximal (block + coupling table inline).
- *(P-γ)* Generate phrasings for the heuristic and terminology. The "naive scanner" definition is the most novel piece — needs careful wording.
- *(P-δ)* Format choices: footnote-style; inline-comment-style; collected-at-bottom.

---

## Telemetry

- **Elements identified:** 12 (E1–E12)
- **Atoms:** 11 (A1–A11); 11/11 agree with top-down
- **Boundary-confidence scores:** 6/6 HIGH
- **Pieces produced:** 4 (P-α / P-β / P-γ / P-δ)
- **Interfaces:** 5 with assumptions check on 3 surfaces
- **Hidden coupling risks:** 2 identified, both mitigated
- **Determination-mechanism check:** 2 runtime concepts placed
- **Dependency order:** acyclic
- **Self-evaluation:** 3/3 min PASS; 4/4 full PASS
- **Failure modes triggered:** 0

## Self-Assessment

**Overall: PROCEED**

SV6 partitions cleanly into 4 pieces with explicit paired α↔β and supporting γ + δ. All 12 elements covered. Innovation should now generate shape variants for the table (P-α), the Step 0 block (P-β), the heuristic phrasing (P-γ), and the calibration-note format (P-δ).
