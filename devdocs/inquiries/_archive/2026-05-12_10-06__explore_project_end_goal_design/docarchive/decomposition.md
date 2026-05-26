# Decomposition — partitioning the end-goal-aware additions

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/_branch.md`

Prior outputs consumed: this inquiry's `exploration.md` and `sensemaking.md`. The whole being decomposed is SV6's design: 4 /explore spec refinements + 1 new runner artifact + 1 meta-vocabulary reconciliation + finding-level metadata.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

| # | Element | Layer |
|---|---|---|
| E1 | Resolution-level field (Step 0 input-contract declaration) | /explore spec |
| E2 | Staging-aware telemetry fields | /explore spec (Telemetry section) |
| E3 | Staging-boundary regression failure mode | /explore spec (Quality section) |
| E4 | Merge Contract subsection (SK-MAX-4 spec-level activation) | /explore spec (Output section) |
| E5 | Node-identity contract (sequential ID + LLM label) | /explore spec (sub-aspect of E4) |
| E6 | /staged-explore runner-pattern doc | New artifact |
| E7 | Runner taxonomy clarification (4-entry table) | Inside new runner doc |
| E8 | /staged-explore vs /meta-loop boundary statement | Inside new runner doc |
| E9 | nav_north_star.md vocabulary reconciliation | Meta-decision affecting that document |
| E10 | Finding-level metadata (REFINES iter-2; iter-2's `refined-by:` pointer) | Finding bookkeeping |

### Pairwise coupling (load-bearing pairs)

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **Strong** | Resolution-level is what staging telemetry reports against; same staging concern |
| E1 ↔ E6 | **Strong (asymmetric: runner consumes)** | The runner uses resolution-level to vary across stages |
| E2 ↔ E6 | **Strong (asymmetric)** | The runner reads staging telemetry to drive next-pass decisions |
| E3 ↔ E2 | **Moderate** | Regression telemetry signals the regression failure mode |
| E3 ↔ E6 | **Moderate (asymmetric: runner detects, /explore names)** | Failure mode named in /explore; detection happens at runner level |
| E4 ↔ E5 | **Strong** | Node-identity is part of the merge contract |
| E4 ↔ E6 | **Strong (asymmetric: runner uses)** | The runner uses the merge contract for cross-invocation referencing |
| E6 ↔ E7 | **Strong** | The runner doc states its position in the taxonomy |
| E6 ↔ E8 | **Strong** | The runner doc states its boundary vs /meta-loop |
| E7 ↔ E8 | **Strong** | Taxonomy and boundary are paired meta-content |
| E9 ↔ E6 | **Moderate** | The runner doc may reference nav_north_star.md (operational source) |
| E9 ↔ E1–E4 | **Weak/Moderate (asymmetric: migration source)** | Operational content from nav_north_star.md migrates into /explore additions |
| E10 ↔ E1–E5 | **Weak** | The frontmatter REFINES pointer is metadata for the additions |

### Clusters

**α — /explore spec additions package:** E1, E2, E3, E4, E5 — five additions to the existing /explore two-file pair. Internally tightly coupled (all serve staged execution; live in the same artifact pair).

**β — Staged-explore runner artifact:** E6, E7, E8 — new artifact containing the runner pattern, the taxonomy clarification, and the /meta-loop boundary. E7 and E8 are meta-content that lives INSIDE E6's doc; tight coupling.

**δ — Nav-document meta-decision:** E9 — single decision about nav_north_star.md (preserve + vocabulary-note + migrate operational content elsewhere).

**ε — Finding metadata:** E10 — frontmatter declarations for relationship to iter-2.

**Topology:** α and β are the load-bearing implementation work; δ is an orthogonal meta-decision; ε is bookkeeping. α→β is asymmetric (β consumes α's additions); δ→α and δ→β are asymmetric (migration source); ε is downstream of α and β decisions.

---

## Step 2 — Detect Boundaries (Top-Down)

Cutting at the four cluster boundaries:

| Boundary | Crosses | Traffic | Type |
|---|---|---|---|
| B1 (α↔β) | /explore spec ↔ runner artifact | moderate | one-way asymmetric (β consumes α) |
| B2 (α↔δ) | /explore spec ↔ nav-doc decision | low | one-way (migration source) |
| B3 (β↔δ) | runner artifact ↔ nav-doc decision | low | one-way (migration source) |
| B4 (α↔ε) | /explore spec ↔ metadata | low | one-way (metadata reflects α) |
| B5 (β↔ε) | runner artifact ↔ metadata | low | one-way |

All boundaries at low or asymmetric-moderate coupling. No high-coupling cut.

**Initial partition: 4 pieces (P-α / P-β / P-δ / P-ε).**

Note: I considered sub-decomposing α into 5 pieces (one per element E1–E5). Decision against: each is a 1-paragraph or 1-line addition to a different existing section; further sub-decomposition produces fragments. Over-decomposition risk; kept as one package.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Irreducible atoms

- A1 Surfaced item (iter-2's user-facing unit; "node" in nav vocabulary)
- A2 Resolution-level (quantitative anchor)
- A3 Staging telemetry field (specific named field)
- A4 Failure-mode entry
- A5 Merge contract (specification)
- A6 Node-identity (ID + label scheme)
- A7 For-loop pattern (runner orchestration logic)
- A8 Runner-taxonomy entry
- A9 Boundary statement (between two runners)
- A10 Document (markdown artifact)

### Atom-to-cluster mapping check

| Atom | Cluster | Top-down agreement |
|---|---|---|
| A1 Surfaced item / Node | α (referenced) + β (orchestrated over) | Multi-cluster — explicit interface via merge contract |
| A2 Resolution-level | α (defined in Step 0) + β (consumed by runner) | ✓ single-source in α |
| A3 Staging telemetry field | α (defined) + β (consumed) | ✓ single-source in α |
| A4 Failure-mode entry | α (named) + β (detection logic) | Multi-cluster — explicit determination-mechanism split (see below) |
| A5 Merge contract | α (specified) + β (used) | ✓ single-source in α |
| A6 Node-identity | α (specified within merge contract) | ✓ contained in α |
| A7 For-loop pattern | β | ✓ |
| A8 Runner-taxonomy entry | β | ✓ |
| A9 Boundary statement | β | ✓ |
| A10 Document (nav_north_star.md) | δ | ✓ |

**Boundary confidence:**

- B1 (α↔β): HIGH — asymmetric flow; multi-cluster atoms (A1, A4) explicitly handled via interfaces.
- B2 (α↔δ): HIGH — migration flow; one-way.
- B3 (β↔δ): HIGH — migration flow; one-way.
- B4, B5 (ε): HIGH — metadata flow.

All boundaries pass bottom-up sanity check.

---

## Step 4 — Express as Question Tree

### P-α — /explore spec additions package (Cluster α)

**Question:** *What are the four spec-level additions to `references/explore.md` (and one Step 0 field to `SKILL.md`) that absorb the end-goal-relevant attributes the inquiry surfaced, and how do they integrate with the existing iter-2-refined spec?*

**Verification criteria:**
- [ ] Resolution-level field added to Step 0 declarations in `SKILL.md` (quantitative anchor format: "expected ~N surfaced items" or "expected ~N items per parent" or similar)
- [ ] Staging-aware telemetry fields added to Telemetry section of `references/explore.md` (≥3 specific fields: first-pass node count; second-pass branching factor per parent; resolution-progression evidence)
- [ ] Staging-boundary regression failure mode added to Quality section of `references/explore.md` (with explicit speculative flag; corrective action: re-classify prior-pass item as "atomic-at-this-resolution")
- [ ] Merge Contract subsection added to Output section of `references/explore.md` (spec-level activation; describes the cross-invocation merge operation's shape)
- [ ] Node-identity contract specified within Merge Contract subsection (sequential ID format like `N1`, `N1.3`; LLM-generated label for human readability)
- [ ] Cross-references from each addition to the new staged-explore runner doc (so the additions read as connected to the runner pattern)

### P-β — /staged-explore runner-pattern doc (Cluster β)

**Question:** *What does the new runner-pattern doc look like — what sections does it have, where does it live, what is its v1 form, and how does it relate to the other runners?*

**Verification criteria:**
- [ ] Doc location specified (proposed: `homegrown/runners/staged_explore.md` or similar; must be separate from `homegrown/explore/`)
- [ ] Doc form specified: **documentation-only for v1** (no skill); user invokes /explore manually following the doc's pattern
- [ ] For-loop pattern documented:
  - [ ] First-pass invocation parameters (resolution-level: ~10 items; frontier-first entry; coarse scan)
  - [ ] Iteration logic (for each item from prior pass: re-invoke /explore signal-first at finer resolution)
  - [ ] How node-identity is preserved across passes (using the merge contract from P-α)
- [ ] Resolution-progression strategy stated (how the runner picks each next round's resolution; expected branching factor)
- [ ] Termination criteria for staging (when to stop deepening: user signal; staging-boundary regression rate > threshold; overall node count > budget)
- [ ] Manual-trigger v1 acceptance note (with explicit cite of `nav_north_star.md`'s "manual-trigger v1 is acceptable")
- [ ] Runner taxonomy section (4 entries: /MVL, /MVL+, /meta-loop, /staged-explore; one-line role for each)
- [ ] /staged-explore vs /meta-loop boundary statement (discipline-orchestration vs inquiry-orchestration; named explicitly with examples)
- [ ] Skill-ification revival trigger (proposed: "manual orchestration becomes unsustainable, OR autonomous mode-selection ships at Level 3+")
- [ ] Optional worked example following `nav_north_star.md`'s codebase-mapping scenario (10 → ~50–100 → ~200 nodes)
- [ ] Staging-boundary regression detection logic (runner-side; complements P-α's failure-mode naming)

### P-δ — nav_north_star.md vocabulary reconciliation (Cluster δ)

**Question:** *What happens to `nav_north_star.md` given that its content is `/explore` territory under a `/navigation` label?*

**Verification criteria:**
- [ ] Decision recorded: **preserve document** (do not rename, do not delete)
- [ ] Vocabulary note added to top of `nav_north_star.md`: "The 'navigation' vocabulary in this document refers to `/explore` operations (mapping a territory). See `homegrown/explore/references/explore.md` for the canonical discipline definition and `homegrown/runners/staged_explore.md` for the runner pattern."
- [ ] Operational content migration confirmed:
  - The for-loop pattern → migrates into P-β (staged-explore runner doc)
  - Whole-codebase vs directional modes → migrates into P-α (resolution-level field handles whole-codebase; signal-first entry handles directional)
  - Composability of local artifacts → migrates into P-α (Merge Contract subsection)
- [ ] Cross-references from `nav_north_star.md` to /explore and /staged-explore runner doc

### P-ε — Finding-level metadata (Cluster ε)

**Question:** *How does this inquiry's finding relate to the iter-2 finding, and what bookkeeping accompanies the relationship?*

**Verification criteria:**
- [ ] This finding's frontmatter: `refines: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md`
- [ ] Iter-2 finding's frontmatter: add `refined-by: devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md` pointer (action item for the user when adopting)
- [ ] Changes from Prior section in this finding documents:
  - What's preserved from iter-2 (verb-meaning, 5-section skeleton, NOT-list, tiered evolution path)
  - What's promoted in iter-2's deferred items (SK-MAX-4 → spec-level ACTIONABLE; SK-STD+ Input Contract → partial-promoted, resolution-level field only)
  - What's newly added (4 spec refinements + 1 runner doc + 1 meta-decision)

### Independence check

- **P-α** standalone — answerable given the inquiry's reasoning.
- **P-β** depends on P-α (the runner consumes /explore's added fields), but P-β's *design questions* (location, form, sections) are answerable without waiting for P-α to be implemented; the dependency is logical-reference, not blocking.
- **P-δ** orthogonal — answerable independently; informs migration content into α and β but does not gate them.
- **P-ε** depends on P-α and P-β (metadata reflects α and β decisions).

Each piece's question is answerable in one focused pass given its predecessors.

---

## Step 5 — Map Interfaces

### Interface table (with assumptions-not-data check)

| From → To | What flows | Direction | Assumptions |
|---|---|---|---|
| **P-α → P-β** | Resolution-level format (so runner can pass values); staging telemetry field names (so runner can read); merge contract shape (so runner can reference); node-identity format (so runner can construct IDs) | One-way (β consumes α) | β assumes α's fields are stable; α assumes β will respect the contract |
| **P-α ↔ P-β** | Cross-references (each artifact references the other) | Bidirectional | Both assume the cross-reference target exists at publication time |
| **P-δ → P-α** | Operational content from `nav_north_star.md` (whole-codebase vs directional → resolution-level + entry-point; composability → merge contract) | One-way (α receives migrated content) | α assumes migrated content is operationally equivalent to /explore's existing framework |
| **P-δ → P-β** | The for-loop pattern from `nav_north_star.md` as seed content for the runner doc | One-way (β receives) | β assumes the for-loop pattern is operationally sound (validated by exploration cycle 1) |
| **P-α + P-β → P-ε** | Final design decisions feed metadata | One-way (ε reflects) | ε assumes α and β are stable before metadata is written |
| **P-β ↔ P-α (regression detection split)** | Failure-mode named in α; detection logic in β. Both reference the same failure-mode concept; the *responsibility* is split between defining (α) and detecting (β). | Bidirectional (responsibility split) | α assumes β implements detection; β assumes α defines what to detect |

### Assumptions-not-data check (specific surfaces)

- **Resolution-level field shape stability** (α → β): if α changes the format later (e.g., from "expected ~N items" to a typed enum), β's runner doc breaks. Mitigation: α specifies the format with explicit "this is the format the runner consumes" note.

- **Merge contract operational equivalence** (δ → α): the nav_north_star.md's "local artifacts may later be merged into the whole-codebase map — that is a separate process" implies merging is opportunistic. P-α's spec-level activation should preserve this opportunistic property (the merge contract specifies the shape but doesn't mandate merging).

- **Regression detection responsibility split** (α ↔ β): the failure-mode in α names "what could go wrong"; the detection in β specifies "how the runner notices." Hidden coupling risk: if β's detection logic is too tied to a specific runner implementation, the failure mode becomes runner-specific. Mitigation: the detection logic is described in terms the runner pattern can implement abstractly (e.g., "second-pass /explore on a prior-pass item returns 0 or near-0 surfaced sub-items").

### Hidden coupling check

- **A1 Surfaced item / Node** spans α (referenced) and β (orchestrated over). Single-source in α (the unit is /explore's own; β just orchestrates over instances of it).
- **A4 Failure-mode entry (staging-boundary regression)** spans α (named) and β (detected). Determination-mechanism split is explicit; documentation in both pieces references the same concept.
- **A5 Merge contract** spans α (defined) and β (used). Single-source in α.

All hidden-coupling risks addressed.

### Determination-mechanism piece check

Two runtime-determined concepts in the design:

- **Staging-boundary regression detection.** Runtime determination: "did the next-pass /explore find sub-structure under this prior-pass item?" Detection mechanism: runner observes the next-pass output size; if 0 or near-0, regression occurred. **Placement:** failure mode named in P-α; detection logic in P-β. **Determination-mechanism split is explicit** — the failure exists at the discipline level; the runner detects it at the orchestration level.
- **Staging termination.** Runtime determination: "should the runner stop deepening?" Detection mechanism: user signal OR regression rate > threshold OR budget exceeded. **Placement:** P-β (runner doc). No /explore-side counterpart needed.

Both determination mechanisms are placed; no gap.

---

## Step 6 — Order by Dependency

```
P-δ (meta-decision)           P-α (spec additions)
  ↓ (migration source)         ↓
                          P-β (runner doc)
                              ↓
                          P-ε (metadata)
```

**Dependency order:**

1. **P-δ** (nav_north_star.md decision): orthogonal; can be decided in parallel with α and β. Informs content that migrates into both.
2. **P-α** (/explore spec additions): main implementation work; designable independently.
3. **P-β** (staged-explore runner doc): depends on P-α's fields (resolution-level format, telemetry field names, merge contract shape, node-identity format); can be designed in parallel but published after α stabilizes.
4. **P-ε** (finding metadata): last; reflects α and β decisions.

In practice, P-α and P-β can be designed in parallel (both have their own design space); P-α should be published first (β references α); P-δ can happen alongside; P-ε is the closing step.

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable in one focused pass given its predecessors? | **PASS** |
| **Completeness** | All 10 elements (E1–E10) mapped to a piece? | **PASS** |
| **Reassembly** | Pieces + interfaces = the SV6 design? | **PASS** |

### Full (additional dimensions)

| Dimension | Check | Score |
|---|---|---|
| Tractability | Each piece bounded to a focused pass? | PASS — P-α is a coordinated multi-section spec edit; P-β is a new mid-size doc; P-δ is a small meta-edit; P-ε is metadata |
| Interface clarity | All cross-piece flows explicit; assumptions-not-data check applied? | PASS — 6 interfaces named with direction, content, assumptions; 3 hidden-coupling surfaces examined |
| Balance | Complexity proportional? | PASS with note — P-α is heaviest (5 sub-additions); P-β substantial (new doc); P-δ and P-ε lighter (single edits/metadata). Within acceptable range. |
| Confidence | Top-down + bottom-up agree? | PASS — 5 of 5 boundaries HIGH confidence; all 10 atoms map to designated clusters |

### Determination-mechanism piece check

Already detailed in Step 5. **PASS.**

### Reassembly check

Given P-α + P-β + P-δ + P-ε + the 6 interfaces, can SV6's design be reconstructed? Walk-through: the /explore spec gets four refinements (P-α: resolution-level field; staging telemetry; staging-boundary regression failure mode; merge contract with node-identity). A new runner doc (P-β) describes the for-loop pattern, the runner taxonomy, the /meta-loop boundary, with skill-ification deferred. The nav-document decision (P-δ) preserves the doc + adds a vocabulary note + confirms migration of operational content to α and β. The finding metadata (P-ε) declares REFINES iter-2 + records the changes. **Reassembly: PASS.** All SV6 elements reconstructible.

### Failure-mode self-check

- Premature decomposition: NO — sensemaking SV6 clarified the whole.
- Wrong boundaries: NO — all cuts at low or asymmetric-moderate coupling.
- Hidden coupling: 3 risks examined, all mitigated.
- Missing pieces: NO — determination-mechanism check passed for two runtime-determined concepts.
- Over-decomposition: NO — α not split into 5 trivial sub-pieces (would produce fragments).
- Ignoring dependencies: NO — explicit order produced; cycles checked.
- Imbalanced decomposition: NO — minor imbalance (α heavier) within range.

---

## Final Deliverable

### Coupling Map

4 clusters: /explore spec additions (α), staged-explore runner doc (β), nav-document meta-decision (δ), finding metadata (ε). Internal cohesion is high; inter-cluster flows are low or asymmetric-moderate.

### Question Tree

- **P-α — /explore spec additions package.** *What are the four spec-level additions absorbing the end-goal-relevant attributes?*
- **P-β — /staged-explore runner-pattern doc.** *What does the new runner doc look like — sections, location, v1 form, relationship to other runners?*
- **P-δ — nav_north_star.md vocabulary reconciliation.** *What happens to nav_north_star.md given operational content is /explore territory?*
- **P-ε — Finding-level metadata.** *How does this finding relate to the iter-2 finding, and what bookkeeping accompanies the relationship?*

### Interface Map

6 interfaces named; 3 hidden-coupling risks examined with mitigations.

### Dependency Order

P-δ (orthogonal) ‖ P-α → P-β → P-ε. Acyclic.

### Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full dimensions PASS. Determination-mechanism check PASS (2 runtime-determined concepts placed). 0 failure modes triggered.

---

## Frontier (for /innovate)

- *(per piece)* Generate shape variants:
  - P-α: minimum (single-paragraph additions) vs standard (sub-sectioned additions) vs maximal (each addition becomes its own subsection with examples)
  - P-β: minimum (single-page doc) vs standard (5-section spec) vs maximal (SKILL.md-style paired with reference file)
  - P-δ: minimum (one-line vocabulary note) vs standard (preface paragraph) vs maximal (full migration log)
- *(specific phrasings)* Generate candidate wordings for:
  - The resolution-level field's quantitative-anchor format
  - The staging-aware telemetry field names
  - The staging-boundary regression failure mode's recognition signal
  - The merge contract's specification shape

---

## Telemetry

- **Elements identified:** 10 (E1–E10)
- **Atoms for bottom-up validation:** 10 (A1–A10); 10/10 agree with top-down
- **Boundary-confidence scores:** 5/5 HIGH
- **Pieces produced:** 4 (P-α / P-β / P-δ / P-ε)
- **Interfaces named:** 6 with assumptions-not-data check on 3 surfaces
- **Hidden coupling risks:** 3 identified, all mitigated
- **Determination-mechanism check:** 2 runtime concepts placed (regression detection split between α and β; staging termination in β)
- **Dependency order:** acyclic
- **Self-evaluation:** 3/3 min PASS; 4/4 full PASS
- **Failure modes triggered:** 0

## Self-Assessment

**Overall: PROCEED**

SV6's design partitions cleanly into 4 pieces with explicit interfaces and assumptions-not-data checks. The /explore spec additions package (α) and the new runner doc (β) are the load-bearing pieces; the nav-document meta-decision (δ) is orthogonal; the finding metadata (ε) is closing bookkeeping. Innovation should now generate shape variants per piece and candidate phrasings for the specific spec entries. Critique should stress-test the doc-vs-skill v1 decision (P-β's form) and the spec-level-only SK-MAX-4 activation (P-α's merge contract).
