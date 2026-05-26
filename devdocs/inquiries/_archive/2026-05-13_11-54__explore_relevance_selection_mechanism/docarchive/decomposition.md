# Decomposition — /explore Relevance-Selection Mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_11-54__explore_relevance_selection_mechanism/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md`. Sensemaking resolved a cross-layer composition (A1 criteria-production + G1 active filter + I1 spec hygiene + telemetry). Apply Determination-mechanism piece check at Phase 7. Specifically address: (a) A1 + G1 = one or two pieces; (b) where A3 sits relative to A1; (c) how CORRECTS is declared; (d) does I1 need its own piece.

---

## Step 1 — Coupling Topology

### Elements

- **E1** — Step 0 sub-step: derive criteria from Question + Goal (A1)
- **E2** — Optional merge of author-declared criteria from `_branch.md` (A3)
- **E3** — §2.1 active relevance filter — strengthen the existing "relevance" signal type to actively compute per-item scores
- **E4** — Per-item scoring mechanism (the determination mechanism — how the LLM computes a score against the criteria)
- **E5** — Filter threshold + filter-decision wording
- **E6** — Spec hygiene note in §2.1/§2.2 clarifying Filter vs Annotation (I1)
- **E7** — Telemetry: 3 new fields in §5.3 (`relevance_criteria`, `per_item_relevance_scores`, `filter_threshold`)
- **E8** — Frontmatter `corrects:` field pointing at the prior cheap-coverage-boost finding
- **E9** — Body section "Changes from Prior" explaining what's corrected, preserved, repositioned
- **E10** — Cross-reference noting that the prior finding's filesystem-listing mechanism is repositioned as supporting input (produces the inventory that this finding's filter operates on)

### Coupling

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | Strong | Same operation, two input sources (Q/G-derived + optional author-declared); E2 merges into E1's output |
| E1/E2 ↔ E3 | Strong | The criteria are E3's input; without criteria, the filter has nothing to score against |
| E3 ↔ E4 ↔ E5 | Strong | Filter application = scoring (E4) + threshold (E5); they're three views of the same operation |
| E6 ↔ E3 | Weak-Moderate | Spec hygiene clarifies what E3 does; could ride along with E3's wording rather than be a separate edit |
| E7 ↔ E3/E4/E5 | Strong | Telemetry records the operation |
| E8 ↔ E9 | Strong | Two sides of the CORRECTS declaration (machine-readable + human-readable) |
| E10 ↔ E9 | Strong | E10 is part of E9's "what's preserved/repositioned" content |

### Clusters

- **Cluster I — Criteria production** {E1, E2} — Step 0 sub-step with optional merge
- **Cluster II — Filter application** {E3, E4, E5, E6, E7} — strongly coupled, all in §2.1 + §5.3
- **Cluster III — CORRECTS declaration** {E8, E9, E10} — finding-level

### Answers to the user's questions (a)-(d)

- **(a) A1 + G1:** TWO pieces. They ARE strongly coupled but live in different spec sections (§3.1 vs §2.1). Drafted as separate spec edits with an explicit interface (the criteria statement passes from §3.1 to §2.1).
- **(b) A3 placement:** Sub-piece within Cluster I (Criteria production). It's an optional input-source merge, not a separate operation.
- **(c) CORRECTS declaration:** BOTH frontmatter AND body section needed. Frontmatter is machine-readable cross-reference; body explains what's corrected, preserved, and repositioned. Sub-pieces P4.1 and P4.2.
- **(d) Spec hygiene (I1):** RIDES ALONG with G1's §2.1 wording. It's a clarifying note within the same section, not a separate spec edit. Reduces piece count without losing clarity.

---

## Step 2 — Detect Boundaries (Top-Down)

Three top-level boundaries:

- **Cluster I | Cluster II** (criteria production | filter application): different spec sections (§3.1 vs §2.1); sequencing dependency only.
- **Cluster I/II | Cluster III** (spec edits | finding-level relationship declarations): different artifacts.

Internal boundaries within Cluster II are weaker (the elements all live in §2.1 + §5.3 and form one logical operation); they don't separate cleanly.

---

## Step 3 — Validate Bottom-Up

### Atoms

- The new Step 0 sub-step paragraph (Q/G-derived criteria)
- The optional author-declared merge wording
- The §2.1 active-filter strengthening paragraph
- The scoring mechanism specification
- The threshold default + tuning note
- The filter-vs-annotation hygiene note (rides along)
- Three telemetry fields with their value enums
- `corrects:` frontmatter field
- "Changes from Prior" body section
- The cross-reference to the prior finding's filesystem-listing role

### Atom-to-cluster mapping

| Atoms | Cluster |
|---|---|
| New Step 0 sub-step + author-declared merge | I (Criteria production) |
| §2.1 strengthening + scoring + threshold + hygiene + 3 telemetry fields | II (Filter application) |
| Frontmatter + Changes-from-Prior + cross-reference | III (CORRECTS declaration) |

Top-down clusters and bottom-up atoms agree. **Boundary confidence: HIGH.**

---

## Step 4 — Question Tree

### P1 — How is the Step 0 criteria-derivation sub-step specified?

**Verification:**
- [ ] A new sub-step appears in §3.1 Step 0 declarations
- [ ] The sub-step uses MUST-language (the criteria-derivation is mandatory)
- [ ] The sub-step specifies: read Question + Goal; produce a one-paragraph "relevance criteria" statement; record the statement in the output
- [ ] An optional merge clause handles `_branch.md`-declared criteria when present (composes with the prior canonical-coverage finding's registry)
- [ ] A worked example shows what a derived criteria-statement looks like

**Sub-pieces:**
- **P1.1** — The MUST-sentence for criteria-derivation
- **P1.2** — The Q/G-derived prompt specification (what the LLM is asked to produce)
- **P1.3** — The optional author-declared merge clause (A3)
- **P1.4** — Worked example of a criteria-statement

---

### P2 — How is the §2.1 active relevance filter specified?

**Verification:**
- [ ] §2.1's "relevance" signal type is strengthened from passive label to active computation
- [ ] Per-item scoring is specified (HIGH/MEDIUM/LOW or 0-1)
- [ ] Filter threshold is specified with a conservative default (more reads than skips)
- [ ] The ride-along filter-vs-annotation hygiene note clarifies that §2.1 filter is different from §2.2 annotation
- [ ] Three telemetry fields are added to §5.3 (`relevance_criteria`, `per_item_relevance_scores`, `filter_threshold`)
- [ ] A worked example shows scoring in action

**Sub-pieces:**
- **P2.1 — The determination mechanism for "how to score" (load-bearing per Phase 7 check).** Specify the scoring procedure: for each item, the LLM asks "does this item bear on the criteria?" and assigns HIGH / MEDIUM / LOW based on whether the item's labeling content (per §2.3 depth levels) matches one or more criterion points. The criterion-match can be: lexical (item label mentions a criterion keyword), structural (item position matches a criterion's structural hint), or semantic (item's functional one-line satisfies a criterion's purpose statement). The score is the LLM's judgment, recorded explicitly per item.
- **P2.2 — Threshold default and tuning.** Default: MEDIUM is the read-cutoff (HIGH and MEDIUM items get probed; LOW items get listed-but-unread). The user can configure via `relevance-threshold` flag in `_branch.md` Step 0 declarations.
- **P2.3 — §2.1 strengthening paragraph (the active-filter MUST-sentence).** "Each item surfaced during Scan MUST receive a relevance score against the Step-0-derived criteria. The filter passes items at or above the threshold to Probe; items below are recorded in the inventory but not probed at this resolution."
- **P2.4 — Filter-vs-annotation hygiene note (ride-along I1).** "Note: relevance appears in two distinct roles. As a filter at Signal Detection (§2.1) it gates reading. As an annotation in the output (§2.2) it labels items. Same word; different operations; do not conflate."
- **P2.5 — Telemetry fields (3 new in §5.3).**
- **P2.6 — Worked example.**

---

### P3 — Telemetry placement

**Verification:**
- [ ] The three new fields land in §5.3 base metrics with their value enums + brief explanations.

(P3 is rolled into P2 since the telemetry fields are part of the filter-application operation. Separate verification just to ensure they get placed in §5.3 not §2.1.)

---

### P4 — CORRECTS relationship declaration

**Verification:**
- [ ] Frontmatter has `corrects:` field pointing at the prior cheap-coverage-boost finding's path
- [ ] Body has a "Changes from Prior" section explaining: what's corrected (the load-bearing claim "listing is the answer to coverage"); what's preserved (the filesystem-listing mechanism itself); what's repositioned (listing is INPUT to relevance-selection, not the primary mechanism); what's new (this finding's relevance-selection composition)
- [ ] The body section mentions the migration path: the prior finding's Pre-Scan Mandate v1 architecture still ships if not already shipped, but now feeds into this finding's filter step rather than standing alone

**Sub-pieces:**
- **P4.1** — Frontmatter `corrects:` field
- **P4.2** — "Changes from Prior" body section content

---

## Step 5 — Interface Map

| From | To | Direction | Flow | Notes |
|---|---|---|---|---|
| P1 (criteria) | P2 (filter) | Sequencing | Criteria statement is filter's input | Without P1, P2 has nothing to score against |
| P2 internal: P2.1 (scoring) → P2.2 (threshold) → P2.3 (filter mandate) | within-piece | Logical sequence | Define how scoring works, then how threshold uses scores, then mandate the filter |
| P2.5 (telemetry) ↔ P2.1/P2.2/P2.3 | bundles within P2 | All record the same operation |
| P4 ← {P1, P2} | Information | "Changes from Prior" describes what these pieces produce in contrast to the prior finding |
| P4 → prior cheap-coverage-boost finding | Cross-reference | The frontmatter `corrects:` field plus body explanation |

### Assumptions-not-data check

**One hidden assumption to address:** P2.1 (scoring mechanism) presupposes that the LLM can produce a meaningful HIGH/MEDIUM/LOW score given a criteria statement and an item's labeling content. This is true for items with D2+ labeling depth (functional one-line per §2.3), but for items at D1 (just surface form) the score may be unreliable. **Resolution:** P2.1 should note that scoring quality depends on the item's labeling depth; if the depth-level for the run is D1 or less, the score is provisional and the filter should default to "pass through" (less aggressive filtering) to avoid excluding items that may be relevant but couldn't be properly scored.

No other hidden assumptions detected.

---

## Step 6 — Dependency Order

### Phase 1 — Parallel (independent within their own sections)

- **P1** (Step 0 criteria-derivation) — independent draft, but P2 reads its output
- **P4** (CORRECTS declaration) — finding-level; can be drafted independently

### Phase 2 — Depends on P1's settled wording

- **P2** (§2.1 active filter + telemetry) — needs to reference the criteria-statement shape that P1 produces

### Within-piece

**P2:** P2.1 (scoring) → P2.2 (threshold) → P2.3 (filter mandate) → P2.4 (hygiene note) → P2.5 (telemetry) → P2.6 (example)

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Determination-mechanism piece check

The load-bearing concept whose use depends on a runtime determination is **"relevance score"** — how does the LLM compute a HIGH/MEDIUM/LOW score per item against the criteria statement?

Has the Q-tree included a piece addressing the determination mechanism?

**YES — P2.1 IS the determination mechanism.** It specifies the scoring procedure (lexical / structural / semantic criterion-match) and how the LLM produces the score. The hidden-assumption surfaced in Step 5 (scoring quality depends on labeling depth) is also addressed in P2.1's wording.

**Determination-mechanism check: PASS.**

### Minimum self-evaluation (3 dimensions)

| Dimension | Verdict |
|---|---|
| Independence | PASS — P1 and P4 are independent; P2 depends on P1 only via sequencing |
| Completeness | PASS — all sensemaking outputs covered (criteria + filter + telemetry + hygiene + CORRECTS) |
| Reassembly | PASS — completing P1 + P2 + P4 produces the updated `/explore` spec + this finding |

### Full 7-dim

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS (with determination-mechanism check) |
| Tractability | PASS — each piece is small; total ~45-60 minutes spec work |
| Interface clarity | PASS-with-flag — one hidden assumption surfaced (scoring-quality-vs-depth-level) and converted to explicit P2.1 wording |
| Balance | PASS — P2 is largest because it's the load-bearing piece; appropriate |
| Confidence | HIGH — top-down and bottom-up agree |

### Failure modes

| Mode | Observed? |
|---|---|
| Premature decomposition | NO — sensemaking resolved the whole before decomposition |
| Wrong boundaries | NO — the three clusters reflect real coupling differences |
| Hidden coupling | ONE FOUND, addressed (scoring-quality-vs-depth-level → P2.1 wording) |
| Missing pieces | NO — determination-mechanism check passed |
| Over-decomposition | NO — 3 pieces; sub-pieces within P2 are distinct concerns |
| Ignoring dependencies | NO — explicit Phase 1 vs Phase 2 sequencing |
| Imbalanced | NO — P2 is largest by design (the load-bearing piece) |

---

## Final Deliverable

### Coupling Map (summary)

Three clusters:
- I: Criteria production (P1) — §3.1 Step 0
- II: Filter application (P2) — §2.1 + §5.3
- III: CORRECTS declaration (P4) — finding-level

Cross-cluster coupling is weak (just sequencing P1→P2 and information P{1,2}→P4).

### Question Tree (summary)

- **P1** — Step 0 criteria-derivation sub-step (4 sub-pieces; ≈15 min)
- **P2** — §2.1 active filter + scoring + threshold + hygiene + telemetry + example (6 sub-pieces; ≈25-30 min — load-bearing piece)
- **P4** — CORRECTS declaration (2 sub-pieces; ≈10 min)

Total: ~50-55 min of spec-edit work.

### Interface Map (summary)

- P1 → P2 (sequencing: criteria-statement passes from §3.1 to §2.1)
- {P1, P2} → P4 (information: relationships summarize what spec edits produce)
- P4 → prior finding (cross-reference: frontmatter + body explanation)

### Dependency Order (summary)

- **Phase 1 (parallel):** P1, P4 (P4 can be drafted from sensemaking output directly)
- **Phase 2 (depends on P1):** P2

### Self-Evaluation (summary)

All 7 dimensions PASS. Determination-mechanism check PASS (P2.1 is the locus). One hidden coupling surfaced and addressed. No failure modes fired.

**Overall: PROCEED.** Ready for innovation to materialize the concrete spec-edit text.
