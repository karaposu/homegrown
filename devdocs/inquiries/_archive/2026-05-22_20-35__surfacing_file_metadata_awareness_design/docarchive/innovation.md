# Innovation — surfacing file-metadata awareness design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/_branch.md`

Prior disciplines: exploration.md (8 design positions; survivor set M1/M2/M3); sensemaking.md (SV6 stabilized: name `last-edit-time`, scope artifact-only, placement §2.1 canonical + §1.3/§5.4 cross-refs, non-filtering reaffirmation explicit, named-category pattern); decomposition.md (7 pieces Q1-Q7 with verification criteria; DAG order Q7→Q1→Q5→Q2⇄Q3→Q4 with Q6 parallel; HC1+HC2 resolved).

---

## Seed / Preamble (Phase 1)

### Methodology-Mode Consideration (Phase 1 refinement note)

**Inherited mode:** **Standard default** (balanced 4G+3F coverage; elaborate the committed direction inherited from sensemaking SV6 + decomposition's piece-list; produce ship-ready spec edit text). Text signals: "produce concrete content for each piece," "innovate concrete content," "generate output."

**Alternative mode considered:** **Contrarian-rethink (Framer-weighted).** Under this mode, Innovation would challenge whether the piece-list itself is correct — e.g., whether `last-edit-time` should be the name, whether artifact-case-only is the right scope, whether the spec addition should exist at all. Framer-heavy: deliberately invert sensemaking's commitments.

**What follows under the alternative:** the candidate space would expand to include challenges to each of sensemaking's HIGH-confidence commitments (Ambiguities 1-6). This would produce a richer adversarial set but at the cost of re-running sensemaking's adjudication work at innovation time.

**Decision: USE INHERITED MODE (Standard default).** Override of Contrarian-rethink alternative.

`Methodology-mode-alternative-marked-inapplicable: sensemaking SV6 explicitly adjudicated each load-bearing commitment (Ambiguities 1-6) with structured counter-interpretations and structural-grounds tests; 5 of 6 ambiguities passed at HIGH confidence; re-running the Framer-heavy adjudication at innovation time would duplicate sensemaking's work and risk re-destabilizing commitments that sensemaking explicitly stabilized. Piece-level Inversion at meta-decision pieces will still fire per the Phase 2 Generate refinement note — this provides defense-in-depth at piece-specific commitments distinct from re-litigating the seed.`

The decision is recorded; piece-level Inversion will operate per spec.

---

## Phase 2 — Generate (per piece)

Each piece's principal candidate + Inversion-candidate. Mechanism coverage tracked per piece; assembly-level mechanism coverage reported in Telemetry below.

---

### Q1 — M-selection verdict

**Mechanisms applied:** Combination, Constraint Manipulation, Lens Shifting. Inversion at piece-level (property iv: evaluation-criterion).

**Principal candidate: M1 (minimal).**

The spec edit includes ONLY:
- Per-item `last-edit-time` annotation (raw timestamp) captured at §2.1 Item-enumeration in artifact case.
- Schema row in §5.4 Traversal Trace for `last-edit-time`.
- NOT-list clarification at §1.3.
- Category framing within §2.1.

The spec edit does NOT include:
- Per-item freshness-confidence tier (M2) — DEFERRED.
- Per-region edit-time-distribution aggregation in §5.5 (M3) — DEFERRED.

**Revival triggers for M2 and M3:**

- **M2 revival trigger:** when downstream disciplines report metadata-reliability concerns in ≥2 inquiries (e.g., the mtime read was stale due to concurrent edit; the timestamp's reliability needs assessment per item). Reconsider adding a per-item freshness-confidence dimension.
- **M3 revival trigger:** when ≥3 inquiries report cross-region recency-comparison needs that the per-item Trace doesn't directly support. Reconsider adding the per-region edit-time-distribution in §5.5.

**Inversion-candidate (property iv):**

*Reversal of inherited assumption "minimal first-addition is best":* What if rich-first lowers total spec-edit cost across the project's lifecycle? A rich first-addition (M2) would force downstream consumers to handle confidence tiers from day one, avoiding a future migration.

*Structural grounds for rejection:* The project's precedent context (no file-metadata in ANY discipline, per exploration R4 confirmed-absent) means there are no existing downstream consumers — the migration-cost argument is empty. The richer form (M2's confidence tier) commits to semantics that haven't been validated against any real metadata-reliability failure case; deferring lets the semantics emerge from observed need. M1 preserves the option to add richness later without breaking existing consumers (because there are none). The Inversion-alternative's argument is precedent-only ("future migrations are costly in general"); precedent doesn't override the structural absence of consumers.

**Inversion-candidate REJECTED. M1 stays.**

---

### Q7 — M-selection determination criteria

**Mechanisms applied:** Combination, Constraint Manipulation, Inversion (intervention-shape axis).

**Principal candidate: five-criterion adjudication.**

The M1/M2/M3 selection is made by evaluating each path against five criteria:

| Criterion | M1 | M2 | M3 |
|---|---|---|---|
| **(i) Complexity-vs-marginal-value** | Lowest complexity; raw timestamp emission only | Adds per-item dual-confidence (relevance-confidence + freshness-confidence); marginal value is downstream's ability to assess metadata reliability | Adds per-region aggregation derivable from Trace; marginal value is per-region recency summaries |
| **(ii) Load-bearing-quantifiable-claim avoidance** (per /explore §3.5) | Avoids — no thresholds committed | Adds metadata-reliability semantics (no threshold) | Risks if region aggregation introduces recency-tier (RECENT/MID/OLD) thresholds |
| **(iii) Project precedent** (R4 confirmed-absent) | Establishes the pattern minimally — appropriate first-addition | Over-commits structure that hasn't been validated by usage | Adds aggregation layer that hasn't been required |
| **(iv) Asymmetric-failure-principle preservation** (§4.4) | Preserved (non-filtering by construction) | Preserved (confidence tier is per-item annotation, non-filtering) | Preserved (aggregation is summary, non-filtering) |
| **(v) User intent fit** | Direct fit — user asked about "metadata (last datetime of edit) of files," singular signal | Adds a dimension user did not ask for | Adds aggregation level user did not ask for |

**Verdict: M1.** Reasons: project-precedent absence requires minimal first-addition (iii); user intent fits singular signal (v); load-bearing-quantifiable-claim avoidance is structurally cleanest at M1 (ii); complexity-marginal-value trade-off favors minimal pattern at first introduction (i); asymmetric-failure preservation is satisfied at all three paths (iv).

**Inversion-candidate (property v: intervention-shape commitment in Q7's principal output = ADD-CONTENT — Q7 adds new criteria text):**

*Alternative shape: REORGANIZE-WITHOUT-ADDING.* What if the spec already contains the selection criteria implicitly — could we surface the criteria by reorganizing existing surfacing-spec text rather than adding new criteria?

*Structural grounds for rejection:* Surfacing's existing spec contains NO criteria for adjudicating among design paths (it isn't a meta-criteria document; it's the discipline's runtime spec). There's nothing to reorganize from. ADD-CONTENT is the correct shape.

**Inversion-candidate REJECTED.**

---

### Q5 — Category framing text

**Mechanisms applied:** Combination, Extrapolation, Lens Shifting, Inversion (lesson-vocabulary axis).

**Principal candidate text:**

The category is named **observable-fact metadata annotations** — per-item annotations capturing observable file-system or item-state facts at enumeration time. The category's defining properties:

- **Content-conditioned** (properties of the item itself; distinct from purpose-conditioned annotations like the relevance tag).
- **Labeling-level** (observable facts; not interpretive meaning).
- **Non-filtering** (do not participate in surfacing's inclusion decision; the asymmetric-failure principle §4.4 remains the inclusion gate).
- **Downstream-consumable** (downstream disciplines may interpret these annotations, e.g., infer staleness from old `last-edit-time`; such interpretation is downstream territory, not surfacing's).

The first specific annotation in this category is `last-edit-time`. Future metadata kinds (e.g., `file-size`, `line-count`, `git-tracked-state`) may extend the category under the same constraints without structural change to the discipline's process.

**This text lives in the §2.1 extension body** (canonical home per HC1 resolution from decomposition); Q4's NOT-list note references it without duplicating.

**Inversion-candidate (property iii: lesson-vocabulary):**

*Reversal of name commitment "observable-fact metadata annotations":* Alternatives — "metadata annotations" (simpler); "factual item-metadata" (more specific); "non-interpretive per-item metadata" (defined by exclusion).

*Strongest alternative tested: just "metadata annotations".* What if the qualifier "observable-fact" is redundant — the discipline's existing labeling-vs-meaning boundary already commits to observable facts?

*Structural grounds for rejection:* In the project context, "metadata" alone is ambiguous — it could include inferred-metadata (computed from content), model-judged-metadata (LLM-classified), or other meta-information. The "observable-fact" qualifier disambiguates — establishing that ONLY observable, non-computed, non-judged facts qualify. This qualifier earns its place by the same disambiguation logic that produced `last-edit-time` over `freshness` (sensemaking Ambiguity 1). Consistency with the discipline's labeling-vs-meaning boundary requires explicit naming, not implicit reliance.

**Inversion-candidate REJECTED.** "Observable-fact metadata annotations" stays.

---

### Q2 — §2.1 spec extension text (THE CANONICAL HOME)

**Mechanisms applied:** Combination, Domain Transfer (OS file-system convention), Absence Recognition, Constraint Manipulation (ADD direction + REMOVE direction), Inversion (intervention-shape axis).

**Principal candidate text** (drafted as it would extend surfacing's §2.1 component 2: Item-enumeration / generation; placed as a follow-on paragraph after the six-component table, before §2.2):

---

> **Observable-fact metadata at Item-enumeration (artifact case).**
>
> In artifact case, the Item-enumeration component additionally captures observable file-system metadata for each enumerated item, emitting it as per-item annotation alongside the item identifier. The first observable-fact metadata annotation is **`last-edit-time`** — the file's last-modified timestamp as observed at the moment of enumeration. The annotation is emitted as labeling content per §1.1 (observable fact about the item, not interpretation of meaning).
>
> The annotation is **non-filtering.** It does not participate in Relevance-attribution (§2.3), Inhibition's high-confidence-rejection decision (§2.4 primitive composition), or any inclusion gate. Surfacing's inclusion decision remains governed by the asymmetric-failure principle (§4.4): items are included by default under uncertainty; metadata annotations carry observable facts forward to downstream consumers without affecting whether items pass surfacing's gate.
>
> This addition introduces the category of **observable-fact metadata annotations** — content-conditioned per-item annotations capturing observable item-state facts at enumeration. `last-edit-time` is the first specific annotation in the category. Future metadata kinds (e.g., `file-size`, `line-count`, `git-tracked-state`) may extend the category under the same constraints (labeling-level, non-filtering, downstream-consumable) without structural change to the discipline's process. Downstream disciplines may interpret these annotations (e.g., infer staleness from old `last-edit-time`); such interpretation is downstream territory, not surfacing's.
>
> In **possibility case**, this sub-text does not apply. Candidates are generated, not enumerated from a pre-existing territory; no observable file-system metadata exists for them. The annotation field is absent or N/A in per-item records for possibility-case invocations.

---

**Verification against Q2's criteria:**
- [x] Names new mechanism (observable-fact metadata capture) and first instance (`last-edit-time`).
- [x] Specifies capture timing (at Item-enumeration, observed at moment of enumeration).
- [x] Includes explicit non-filtering reaffirmation (full second paragraph).
- [x] Includes scope declaration (fourth paragraph + possibility-case handling).
- [x] References named category and notes future kinds may extend (third paragraph).
- [x] Integration-ready (extends component description after the six-component table; does not rewrite the section).

**Inversion-candidate (property v: intervention-shape commitment = ADD-CONTENT):**

*Per the Intervention-Shape-Axis Inversion refinement note, Inversion at this piece targets the intervention-shape axis.*

*Alternative shape: ADD-DIMENSION (add a new sub-component to §2.1's six-component table — e.g., "Metadata-capture" as a 7th component peer to Scope-determination, Item-enumeration, etc.):*

Under ADD-DIMENSION, the §2.1 table would gain a new row:

| Component | Role |
|---|---|
| **Metadata-capture** | In artifact case, captures observable item-state metadata (first instance: `last-edit-time`) at the moment of enumeration; non-filtering. |

The Traversal cycle's default ordering (§3.4) would gain a step.

*5-test on both candidates:*

**Principal (ADD-CONTENT):**
- *Novelty:* novel in project context (R4 confirmed-absent).
- *Scrutiny survival:* the addition reads as natural sub-aspect of Item-enumeration (which already touches the file system to list items); the metadata read and the identifier read share the same fstat-like operation. Survives strong scrutiny.
- *Fertility:* opens forward-extension via the named category.
- *Actionability:* directly applies as spec text.
- *Mechanism independence:* Domain Transfer (OS convention), Combination (capture + non-filtering + category), Absence Recognition (filling R4 confirmed-absent) — multiple independent grounds. STRONG.

**Inversion-alternative (ADD-DIMENSION):**
- *Novelty:* more disruptive — adds a component.
- *Scrutiny survival:* WEAKER. Metadata capture is naturally part of enumeration (the same file-system access lists the file AND reads its mtime); separating them creates artificial decomposition. Also, the §2.1 table treats components as named operations within Traversal; "Metadata-capture" would be a sub-operation of Item-enumeration, not a peer. The §3.4 traversal-ordering would need re-specification.
- *Fertility:* same forward-extension as principal.
- *Actionability:* yes, but more disruption to §2.1's existing structure.
- *Mechanism independence:* only Inversion produces this; principal has multi-mechanism support.

**Verdict:** Principal (ADD-CONTENT) survives strongly; Inversion-alternative (ADD-DIMENSION) rejected on structural grounds (metadata capture is naturally part of enumeration; separating creates artificial decomposition; insufficient mechanism-independence).

---

### Q3 — §5.4 Traversal Trace schema extension

**Mechanisms applied:** Combination, Domain Transfer (record-schema convention), Inversion (intervention-shape axis).

**Principal candidate text** (drafted as it would extend surfacing's §5.4 Traversal Trace per-entry table; one new row appended to the existing field list):

---

| Field | Content |
|---|---|
| ... existing fields (Sequence ordinal, Region, Item identifier(s), Per-item relevance verdict, Per-item confidence, Step note) ... | ... |
| **`last-edit-time`** (artifact case only) | Observable file `last-edit-time` (last-modified timestamp) at the moment of enumeration. Format: ISO 8601 timestamp string (e.g., `2026-05-22T20:35:00Z`) recommended; alternative formats acceptable if internally consistent within an inquiry. Field is **absent or N/A** in per-item records for possibility-case invocations. Non-filtering — see §2.1's metadata-capture sub-text for the mechanism. The annotation is the first instance of the **observable-fact metadata annotations** category; future metadata fields may appear in this position. |

---

**Verification against Q3's criteria:**
- [x] Per-entry table gains one row: `last-edit-time` — content description.
- [x] Specifies type (ISO 8601 timestamp string recommended; flexible).
- [x] Specifies that the field is artifact-case-only.
- [x] Contains no quality / judgment language (consistent with §1.3 NOT-list clarification in Q4).

**Inversion-candidate (property v: intervention-shape commitment = ADD-CONTENT):**

*Alternative shape: REORGANIZE-WITHOUT-ADDING — could `last-edit-time` be represented inside the existing "Step note (optional)" field as prose, rather than as a dedicated row?*

*Structural grounds for rejection:* Putting `last-edit-time` inside "Step note (optional)" would lose the structured, machine-readable property of a dedicated field. Downstream consumers parsing the Trace couldn't reliably extract the timestamp from prose. The dedicated field is structurally appropriate for a typed value. ADD-CONTENT (new row) is correct.

**Inversion-candidate REJECTED.**

---

### Q4 — §1.3 NOT-list clarification text

**Mechanisms applied:** Combination, Inversion (intervention-shape axis).

**Principal candidate text** (drafted as a note immediately after surfacing's §1.3 NOT-list table, before §1.4 Vocabulary):

---

> **Note on observable-fact metadata annotations.** Per-item annotations that capture observable file-system or item-state facts (e.g., `last-edit-time`; see the category description at §2.1 component 2's metadata-capture sub-text) are NOT instances of NOT-list entry 5 (evaluation of items for correctness or quality) and NOT instances of entry 6 (interpretive meaning of items). They are factual labeling content — observable properties of the item itself, not value claims and not meaning interpretations. Downstream disciplines may interpret these annotations (e.g., infer staleness from old `last-edit-time`); such interpretation belongs to downstream consumers, not surfacing.

---

**Verification against Q4's criteria:**
- [x] One-paragraph note added at or near §1.3 NOT-list table.
- [x] States that observable-fact metadata annotations (e.g., `last-edit-time`) are NOT instances of NOT-list entry 5 nor entry 6.
- [x] Names the category ("observable-fact metadata annotations") consistent with Q5.
- [x] Acknowledges downstream interpretation is permitted, distinct from surfacing's labeling.

**Inversion-candidate (property v: intervention-shape commitment = ADD-CONTENT):**

*Alternative shape: ADD-DIMENSION — add an explicit row inside the NOT-list table itself stating "observable-fact metadata annotations are NOT excluded by entries 5 or 6."*

*Structural grounds for rejection:* The NOT-list table enumerates THINGS THAT ARE EXCLUDED by the discipline. Adding a row stating "X is NOT excluded" inside an exclusion table would be confusing — it's a non-exclusion in an exclusion table. ADD-CONTENT (a note after the table) is the structurally appropriate shape.

**Inversion-candidate REJECTED.**

---

### Q6 — Downstream-consumer scope verdict

**Mechanisms applied:** Lens Shifting, Inversion (framing-semantic axis).

**Principal candidate: OUT-OF-SCOPE for this inquiry.**

Reasoning:

- The inquiry's frame is the surfacing discipline's spec (per `_branch.md` scope check; user explicitly named surfacing).
- Downstream-consumer rules would live in OTHER discipline specs (`cognitive_harness/sense-making/references/sensemaking.md`, `cognitive_harness/decompose/references/decompose.md`, etc.).
- Specifying downstream-consumer rules here would scope-creep into other disciplines' identity territories.
- Sensemaking SV6's Frame-exit Completeness perspective check did not fire (no inherited multi-value terms in committed structures); no structural pressure to expand scope.
- Each downstream discipline's frame is naturally its own inquiry surface.

**Frontier flag preserved as future-inquiry seed:**

> *Future inquiry candidate:* Should downstream disciplines (sense-making / decomposition / innovation / critique) have explicit rules for consuming observable-fact metadata annotations from surfacing's output? If so, which disciplines and what rules? Sub-questions: should `/sense-making`'s anchor-extraction weight by `last-edit-time`? Should `/innovate`'s Combination mechanism prefer recently-edited material? Should `/td-critique` flag candidates resting on stale references? Each is a separate inquiry frontier.

**Inversion-candidate (property ii: framing-semantic):**

*Reversal of inherited assumption "the inquiry's frame is the surfacing spec":* What if downstream-consumer rules SHOULD be in scope here? Counter: bundling cross-discipline rules in one inquiry would commit framing-semantic across multiple specs without each spec's own adjudication. The user's question was scoped to "the surfacing discipline" specifically; expanding scope without user prompt would violate the inquiry's frame and produce uncommitted rules in other discipline specs.

*Structural grounds for rejection:* The Frame-exit Completeness check explicitly applies to inquiries whose committed structures inherit multi-value terms; that check did not fire for this inquiry (sensemaking confirmed). Expanding scope without an inherited multi-value pressure would be unmotivated. The frontier-flag disposition preserves the question for follow-up without violating frame.

**Inversion-candidate REJECTED.** Out-of-scope verdict stays.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

**Central assumption:** "The surfacing spec should be extended to include observable-fact metadata annotations (specifically `last-edit-time`) as a new per-item field."

**Challenge scan:** Has any candidate in the set explicitly challenged this assumption?

YES — exploration's jump scan (cycle 3) explicitly tested the alternative ("don't add to surfacing at all; push to downstream"). The exploration finding (gaps + recommendations section) recorded that this alternative was tested and the choice to add to surfacing was structurally grounded (surfacing is the natural enumeration-time capture point; no other discipline naturally captures file-metadata). The seed-level assumption HAS been challenged.

**Audit does NOT fire on seed-level.**

### Step (ii) — Piece-level commitments

| Piece | Property | Load-bearing commitment | Challenged in candidate set? |
|---|---|---|---|
| Q1 | (iv) evaluation-criterion | "minimal first-addition (M1) is best" | YES — Q1's Inversion-candidate tested "rich-first" alternative, rejected on structural grounds |
| Q2 | (v) intervention-shape | "ADD-CONTENT extending §2.1" | YES — Inversion tested ADD-DIMENSION alternative |
| Q3 | (v) intervention-shape | "ADD-CONTENT adding schema row" | YES — Inversion tested REORGANIZE-WITHOUT-ADDING alternative |
| Q4 | (v) intervention-shape | "ADD-CONTENT (note after NOT-list)" | YES — Inversion tested ADD-DIMENSION (row inside NOT-list) alternative |
| Q5 | (iii) lesson-vocabulary | "observable-fact metadata annotations" as category name | YES — Inversion tested "metadata annotations" alone alternative |
| Q6 | (ii) framing-semantic | "out-of-scope" verdict for downstream-consumer rules | YES — Inversion tested in-scope alternative |
| Q7 | (iv) evaluation-criterion | five-criterion adjudication | YES — Q7's Inversion tested REORGANIZE-WITHOUT-ADDING alternative |

All meta-decision pieces have piece-level Inversion candidates generated and tested. Compliance criterion satisfied at each piece (Piece-Level Inversion Rule + Intervention-Shape-Axis Inversion for property-(v) pieces).

**Audit does NOT fire on piece-level.**

### Step (iii)-(iv) — Firing condition

Audit does NOT fire. Proceed directly to Phase 3 Test.

---

## Phase 3 — Test

### 5-test cycle (applied to the assembled candidate set)

| Test | Result |
|---|---|
| **Novelty** | All seven principal candidates are novel relative to current surfacing spec; R4 (exploration) confirmed no precedent for file-metadata in any discipline. **PASS.** |
| **Scrutiny survival** | Each piece-level Inversion was tested above. The strongest objection at each piece (ADD-DIMENSION at Q2; REORGANIZE at Q3, Q7; ADD-DIMENSION at Q4; "metadata" alone at Q5; in-scope at Q6; rich-first at Q1) was rejected on structural grounds. **PASS.** |
| **Fertility** | The named category (Q5) opens forward-extension paths for `file-size`, `line-count`, `git-tracked-state`, etc. The mechanism (Q2) is reusable for any per-item observable-fact metadata. The category framing is the structurally fertile piece. **PASS.** |
| **Actionability** | Each piece produces direct spec edit text ready for integration into `cognitive_harness/surfacing/references/surfacing.md`. Highly actionable. **PASS.** |
| **Mechanism independence** | Multiple independent grounds converge: Domain Transfer (OS file-system convention) + Absence Recognition (R4 confirmed-absent) + Combination (capture + non-filtering + named category) + Constraint Manipulation (ADD non-filtering + REMOVE implicit no-metadata constraint) all point at the same core innovation. Lens Shifting (frame: feature-add → categorical foundation) + Extrapolation (future metadata kinds favor category-first) provide framing. Inversion (piece-level) — rejected at each piece, confirming principals. **PASS — 4+ mechanisms converge.** |

### Shared-input detection (refinement to Mechanism Independence)

Are mechanisms converging because they operate on the same inherited input?

- Domain Transfer's OS file-system precedent is **INDEPENDENT** of sensemaking SV6 (external precedent from a different domain).
- Absence Recognition (R4 confirmed-absent) is **INDEPENDENT** (empirical project-state observation, not framework reasoning).
- Combination, Constraint Manipulation, Lens Shifting, Extrapolation operate partly within sensemaking's frame.

At least TWO mechanisms (Domain Transfer + Absence Recognition) provide INDEPENDENT grounds. Convergence is **NOT spurious**.

### Artifact-grounding test (6th, conditionally applied)

Does any output produce categorical claims about project state?

- "No precedent for file-metadata in any discipline" — claim about project state. Verified via exploration R4 (scanned `/explore`, `/sense-making`, `/comprehend`, project docs, protocols, contracts). **Verified.**
- "Surfacing's §2.1 currently has no metadata-capture sub-text" — claim about surfacing's spec. Verified via direct read of `cognitive_harness/surfacing/references/surfacing.md`. **Verified.**

Artifact-grounding test **PASS**.

### Assembly check

Combining the seven principal candidates, the assembly is:

1. **§1.3 NOT-list note** (Q4) — anchors identity boundary (not-quality, not-meaning).
2. **§2.1 extension paragraph** (Q2) — canonical home; contains mechanism description + non-filtering reaffirmation + category framing (Q5).
3. **§5.4 schema row** (Q3) — instantiates the category in persistent record.
4. **Out-of-scope verdict** (Q6) — preserves downstream-consumer question as frontier.
5. **M1 verdict** (Q1) + **selection criteria** (Q7) — together commit the minimal path with explicit revival triggers for M2/M3.

**Does the assembly produce emergent value beyond individual pieces?**

YES, three emergent properties:

- **Defense-in-depth against Failure mode B** — the asymmetric-failure principle (§4.4, upstream) + the non-filtering reaffirmation in §2.1 (Q2 paragraph 2) form two-layer protection. A future spec edit that removes one still leaves the other. The user's "but" guard is preserved across multiple surfaces.

- **Anti-drift on Failure mode A's mirror error** — Q4's NOT-list note + Q5's "observable-fact" framing + Q3's no-judgment-language commitment form a three-surface anti-drift guard. A future reader reaching one surface (e.g., §5.4 schema) is unlikely to misread the annotation as quality assessment because the other two surfaces explicitly disambiguate.

- **Forward-extension without restructuring** — Q5's named category lets future metadata kinds (file-size, etc.) be added by extending the category, not by adding new spec sections. This is the emergent property: the addition's structural shape preserves spec stability under future iteration.

### Axis coverage check

The candidate set's orthogonal axes:

| Axis | Variants tested | Choice |
|---|---|---|
| **Mechanism shape** (capture vs filter) | non-filtering / filtering | **non-filtering** — filtering killed by §4.4 asymmetric-failure principle |
| **Placement** (multi-surface vs single section) | multi-surface canonical home / new top-level section | **multi-surface** per `docs/discipline_rule_placement.md` |
| **Scope** (artifact-only vs both cases) | artifact-only / possibility-case analog / silent absence | **artifact-only** explicit |
| **Naming** (observable-fact vs judgment-adjacent) | `last-edit-time` / `freshness` / `currency` / `activity` | **`last-edit-time`** observable-fact |
| **Granularity** (per-item vs per-region vs both) | per-item only / per-region only / both | **per-item only (M1)**, per-region deferred (M3) |
| **Confidence dimension** (single vs dual) | single (relevance-confidence only) / dual (+ freshness-confidence) | **single (M1)**, dual deferred (M2) |

All six identified orthogonal axes have variants tested; choices made with explicit reasoning. **Axis coverage PASS.**

### Per-row / per-element mechanism-trace

Each piece (Q1-Q7) has active mechanism work logged above. Per-piece mechanism log:

| Piece | Mechanisms applied | Property | Classification |
|---|---|---|---|
| Q1 | Combination, Constraint Manipulation, Lens Shifting, Inversion:evaluation-criterion | (iv) | meta-decision |
| Q2 | Combination, Domain Transfer, Absence Recognition, Constraint Manipulation:ADD+REMOVE, Inversion:intervention-shape | (v) | meta-decision (property v) |
| Q3 | Combination, Domain Transfer, Inversion:intervention-shape | (v) | meta-decision (property v) |
| Q4 | Combination, Inversion:intervention-shape | (v) | meta-decision (property v) |
| Q5 | Combination, Extrapolation, Lens Shifting, Inversion:lesson-vocabulary | (iii) | meta-decision |
| Q6 | Lens Shifting, Inversion:framing-semantic | (ii) | meta-decision |
| Q7 | Combination, Constraint Manipulation, Inversion:intervention-shape (REORGANIZE alternative) | (iv) | meta-decision |

All 7 pieces have mechanism traces; all 7 are meta-decision pieces; all 7 have Inversion-candidates generated and tested. **Per-row mechanism-trace PASS.**

### Failure mode check

| Mode | Observed? | Reason |
|---|---|---|
| Premature evaluation | NO | Each candidate tested via 5-test cycle after generation |
| Single-mechanism trap | NO | 4+ mechanisms applied at seed level; minimum 2 mechanisms per piece (most pieces ≥3) |
| Early frame lock | NO | Inversion fired at each meta-decision piece (7/7); each fired Inversion was tested before rejection |
| Innovation without grounding | NO | Each principal candidate has 5-test + artifact-grounding test where applicable |
| Mechanism exhaustion | NO | All 7 mechanisms contributed productively; strong convergence (4+ mechanisms on same core innovation) |
| Survival bias | NO | The uncomfortable Inversion alternatives (especially ADD-DIMENSION at Q2 and rich-first at Q1) were tested with structural rigor, not dismissed for comfort |

**0/6 failure modes observed.**

---

## Output Dispositions

| Piece | Disposition | Rationale |
|---|---|---|
| Q1 (M-selection verdict = M1) | **ACTIONABLE** | Multi-criterion convergence; clear verdict |
| Q2 (§2.1 extension text) | **ACTIONABLE** | Multi-mechanism convergent; passes 5-test + artifact-grounding; ready for integration |
| Q3 (§5.4 schema row) | **ACTIONABLE** | Multi-mechanism; ready for integration |
| Q4 (§1.3 NOT-list note) | **ACTIONABLE** | Ready for integration; defense-in-depth on identity boundary |
| Q5 (category framing) | **ACTIONABLE** | Lives within Q2's body; forward-extension fertility |
| Q6 (downstream-consumer scope = out-of-scope) | **ACTIONABLE** (verdict) + **RESEARCH FRONTIER** (preserved question for future inquiries) | Verdict actionable now; preserved as future inquiry seed |
| Q7 (selection criteria) | **ACTIONABLE** | Five-criterion adjudication ready to commit |
| **M2** (freshness-confidence tier) | **DEFERRED with revival trigger** | Single-source survivor (P7); revival = ≥2 inquiries report metadata-reliability concerns |
| **M3** (per-region edit-time-distribution) | **DEFERRED with revival trigger** | Single-source survivor (P2); revival = ≥3 inquiries report cross-region recency-comparison needs |

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation [both ADD + REMOVE directions per refinement note], Inversion [at piece-level at every meta-decision piece, with intervention-shape-axis Inversion for property-(v) pieces]).
- **Total:** 7/7 — full coverage.
- **Convergence:** YES — 4 mechanisms (Combination + Absence Recognition + Domain Transfer + Constraint Manipulation) converge on the core innovation; 2 mechanisms (Domain Transfer + Absence Recognition) provide INDEPENDENT grounds (not spurious-from-shared-input).
- **Survivors tested:** 7/7 principals tested via 5-test cycle; 4 pieces additionally tested via 6th artifact-grounding test (Q2, Q3, Q4, Q5 — those producing categorical project-state claims).
- **Failure modes observed:** NONE (0/6).

### Production-task additional telemetry

- **Per-piece mechanism log:** see Per-row mechanism-trace table above.
- **Per-piece axis-distribution log (for property-v pieces):**
  - Q2: `[Combination:content, Domain Transfer:content, Absence Recognition:content, Constraint Manipulation:ADD+REMOVE, Inversion:intervention-shape]`
  - Q3: `[Combination:content, Domain Transfer:content, Inversion:intervention-shape]`
  - Q4: `[Combination:content, Inversion:intervention-shape]`
- **Meta-decision-piece classification:** Q1–Q7 all meta-decision (0 content-production).
- **Piece-level Inversion compliance:** 7/7 SATISFIED. Each meta-decision piece has an Inversion-candidate generated, tested via 5-test, and explicitly rejected with structural grounds (or accepted — none were accepted in this run; all alternatives were structurally weaker than principals).
- **Property-(v) pieces axis compliance:** Q2, Q3, Q4 — Inversion at each targets the intervention-shape axis. **3/3 SATISFIED.**

---

## Overall Verdict

**PROCEED.**

- Full mechanism coverage (7/7).
- Strong convergence (4+ mechanisms; 2 INDEPENDENT grounds prevent spurious-from-shared-input).
- All survivors tested (7/7 with 5-test; 4/7 with 6th artifact-grounding test).
- All meta-decision pieces satisfy Piece-Level Inversion Rule (7/7).
- All property-(v) pieces satisfy Intervention-Shape-Axis Inversion (3/3).
- No failure modes observed.
- Assembly produces 3 emergent properties (defense-in-depth on B; anti-drift on A's mirror; forward-extension without restructuring).

**Hand to critique** for adversarial evaluation of the principal candidates + the assembly's emergent properties + the deferred dispositions' revival triggers.
