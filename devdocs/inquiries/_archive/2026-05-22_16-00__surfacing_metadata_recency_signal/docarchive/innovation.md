# Innovation — Metadata-Recency Addition to /surfacing

## User Input

(from `_branch.md`) What addition to surfacing.md — at what exact location — would let surfacing use mtime as a signal during traversal, while protecting against (a) old-as-idle AND (b) silent down-weighting, such that existing behavior is enriched not regressed?

Seed (from sensemaking + decomposition): a multi-surface spec edit at six locations of `cognitive_harness/surfacing/references/surfacing.md`, decomposed into three pieces P1 (Schema + reporting), P2 (Capture rule + Principle), P3 (Failure modes). The committed names: field = `recency annotation`; failure modes = `Recency-Equates-Idleness` and `Recency-Bias-Filter`; principle = `metadata-as-signal-not-verdict`. Four wording sub-choices remain open: W1 value-shape of the annotation; W2 State Summary derivation form; W3 Telemetry form; W4 Principle placement.

---

## Phase 1 — Seed (with Methodology-Mode Consideration)

**Inherited methodology mode:** Standard default. The seed framing asks for a concrete deliverable across three multi-surface pieces with anchor-links; ship-ready output is expected; balanced 4G+3F coverage is appropriate.

**Alternative mode considered:** Minimum-mechanism mode (1G+1F only). What would follow: the design space is heavily constrained by Sensemaking SV6 + Decomposition's 7-dim self-eval all-pass; a single Generator + single Framer would suffice for parsimonious output but risks under-coverage of the four open wording sub-choices.

**Decision:** Standard default (inherited; default). Reason: multi-piece-with-anchor-links output benefits from cross-mechanism convergence on the four sub-choices; the moderate cost of full coverage is justified.

**Methodology-mode-alternative-marked-inapplicable:** not invoked (the alternative was applicable as a discussion; the default is genuinely preferred over it).

---

## Phase 2 — Generate

### P1 — Schema and reporting additions (sub-choices W1, W2, W3)

#### Mechanism applications (Generators)

**Combination.** Combine the existing per-entry schema (ordinal + region + identifier + tag + confidence + step note) with the new annotation. The combination produces a 7-field schema; the new field naturally sits between confidence and step note (descriptive-of-item) or after step note (auxiliary). Result: place the field as a NEW COLUMN at the trace schema after `confidence`.

**Absence Recognition (patch-level).** What's missing from surfacing's current schema is any signal that distinguishes a freshly-written file from a months-old one — content-relevance reports nothing about edit history. The redesign-level: if the spec were designed from scratch knowing metadata signals are valuable, the per-item schema would include a metadata-bag from the start. The redesign-level absence is "first-class metadata channel that supplements the existing tag." **Bidirectional check:** what's already present in different form? Yes — the State Summary's `populated-at` timestamp records WHEN the workspace was populated, not when each item was last edited; partial proxy, doesn't cover the case.

**Domain Transfer.** Transfer from databases / observability tooling: log records carry both a primary value AND a timestamp. The pattern "row = value + when-was-it-last-touched" is universal in log-style storage. Apply: per-item record carries both `tag` (the analog of "value") and `recency annotation` (the analog of "timestamp"). **Native-domain source guard:** computing-native source is filesystem `stat()` — already incorporated; the analog cross-domain is the database log-row pattern. Both sources surface the same shape: dual-field-per-record, neither dominating the other.

**Extrapolation.** Extend the trend: surfacing currently captures content + relevance; the trend in cognitive disciplines is toward more captured metadata (e.g., the inquiry-folder convention captures timestamps for inquiries themselves). Extrapolating: per-item metadata capture will become standard. Adding it now is on-trend.

#### Mechanism applications (Framers)

**Lens Shifting.** Under what conditions does the recency annotation become VERDICT-shaped instead of SIGNAL-shaped? Under any condition where the consumer interprets it categorically without checking content. Lens-shift: the annotation must be raw enough that ANY categorical reading requires explicit interpretation by the consumer — preventing the verdict-drift.

**Constraint Manipulation (both directions).**
- **ADD constraint:** annotation must include a source declaration (`source: filesystem` vs `source: none`). Adding this constraint forces the annotation schema to handle missingness as first-class, which is what FP2 (sensemaking) requires.
- **REMOVE constraint:** remove the constraint that the value is a fixed format. Without that constraint, value can vary by source (ISO datetime for filesystem; null for none; could be a coarse band if a downstream consumer needs one). REMOVE produces flexibility but creates schema inconsistency — keep the ADD direction; reject the REMOVE direction.

**Inversion.** Invert "the field carries useful information about ALL items" → "the field carries useful information about SOME items, and explicitly carries 'I don't know' about the rest." This inversion lands at the same place as the ADD-constraint above — the `no-mtime-available` value MUST be first-class. **Inversion depth check:** invert again → "the field's value space is split into INFORMATIVE and NOT-INFORMATIVE values, with parity"; system-level statement. Stable.

#### Per-sub-choice candidates

**W1 (annotation value-shape):**
- **W1a (raw ISO datetime, signal-source-aware):** `{source: "filesystem"|"none", value: ISO8601|null}` per item. Status: ACTIONABLE candidate.
- **W1b (banded with numeric thresholds):** `recent`/`aged`/`ancient`. KILLED at sensemaking Ambiguity #4 / Phase/Calibration-State perspective — commits calibration-dependent rule at spec time.
- **W1c (duration-since-invocation):** `<duration in days>` from invocation time. Loses absolute time; loses information when re-invoked later. WEAK.
- **W1d (filesystem-only, no source declaration):** ISO datetime or omitted. Violates Ambiguity #4 resolution (mandatory per-item). KILLED.

**Survives W1:** W1a.

**W2 (State Summary derivation):**
- **W2a (count distribution at coarse bands):** "items at < 7 days: N1, 7–30 days: N2, 30–90 days: N3, > 90 days: N4, no-mtime: N5" — commits bands at spec time (calibration-dependent). KILLED.
- **W2b (raw distribution, no bands):** report a list of `(item-count, region, oldest-mtime, newest-mtime)` per region; consumers band as they see fit. Status: ACTIONABLE candidate.
- **W2c (per-region recency stats):** `recency_distribution_per_region: {region_id: {newest: <ISO>, oldest: <ISO>, no-mtime-count: N, total-items: N}}`. Equivalent information to W2b but better-organized. Status: ACTIONABLE candidate; preferred over W2b for usability.
- **W2d (per-item list reproduction):** literally listing every item's mtime. Reproduces the Trace; redundant. KILLED.

**Survives W2:** W2c (preferred), W2b (fallback).

**W3 (Telemetry form):**
- **W3a (raw counts, no bands):** report `items_with_mtime: N, items_without_mtime: M`. Status: ACTIONABLE candidate.
- **W3b (banded counts at coarse bands):** banding at spec time → calibration-dependent. KILLED.
- **W3c (both raw + per-region summary echo):** report `items_with_mtime: N, items_without_mtime: M, per_region: {...}` — overlaps with State Summary. Redundant unless telemetry is the authoritative reporting surface (it isn't; State Summary is). KILLED.

**Survives W3:** W3a.

#### P1 candidate assembly

The principal P1 candidate set:
- Vocabulary §1.4: add row `recency annotation | per-item annotation carrying mtime (or "no-mtime-available") at moment of Item-enumeration; not a verdict; never used to filter or down-weight.`
- Trace field §5.4: add column `Per-item recency annotation | {source: filesystem | none, value: ISO8601 | null}; mandatory per item.`
- State Summary §5.5 (W2c): add row `Recency distribution | per-region: {newest-mtime, oldest-mtime, no-mtime-count, total-items}; descriptive, never normative.`
- Telemetry §5.6 (W3a): add bullet `items_with_mtime / items_without_mtime` alongside the existing tag-level counts.

#### Intervention-Shape-Axis Inversion at P1

P1 fires property (c) (introduces lesson-vocabulary: `recency annotation`) and property (e) (intervention-shape commitment: ADD-CONTENT to vocabulary + ADD-DIMENSION to schemas).

**Principal shape:** ADD-CONTENT + ADD-DIMENSION (mixed; the additions are content-level for vocabulary and dimension-level for schemas).

**Inversion-candidate (alternative shape):** REORGANIZE-WITHOUT-ADDING — restructure existing surfacing.md schemas to make `recency annotation` not a new field but a reinterpretation of `step note` (use the free-form note column to carry mtime). What follows under the alternative: zero new schema fields; one new convention ("if step note contains an ISO datetime, that's the mtime"). Risk: silent overload of a free-form field; downstream consumers can't depend on the format; loses the mandatory-per-item property. KILLED on structural grounds (violates schema additivity and mandatory-per-item).

**Result:** principal (ADD-CONTENT + ADD-DIMENSION) survives; Inversion-candidate KILLED with reason.

---

### P2 — Capture-rule Step Refinement + Principle (sub-choice W4)

#### Mechanism applications

**Combination.** Combine the Step Refinement primitive (`docs/step_refinement.md` — Name + Trigger + Action + Anchor-link, with italic prefix) with the §2.1 Item-enumeration component. The combination produces a refinement note inside §2.1's body, anchored to the two failure modes by name.

**Domain Transfer.** Transfer from logging/instrumentation: "capture metadata at the moment of read; don't reconstruct later." Applied to surfacing: capture mtime when Item-enumeration first touches the file; don't recompute at Output-shaping.

**Lens Shifting.** Under what frame does the principle "metadata-as-signal-not-verdict" become load-bearing? Under the frame "downstream consumers might misuse the annotation as a filter." The principle, stated explicitly in the rule body, addresses that frame.

**Inversion.** Invert "the rule applies always" → "the rule applies when mtime is available; emits no-mtime-available when not." Lands at the same place as Ambiguity #4's resolution. Depth-check: invert again — "applicability is universal; the field is universal; only the VALUE varies." System-level. Stable.

#### Principal candidate (W4: principle placement)

**Refinement-note text** (italic-prefix marker; goes in §2.1 body):

> *Refinement note (applies at §2.1 Item-enumeration / generation):*
>
> **Recency annotation capture.** When Item-enumeration encounters a candidate item, capture its filesystem last-modified time (mtime) alongside the item identifier; emit it as the `recency annotation` field at Output-shaping. For items without filesystem backing (possibility-mode candidates, externally-referenced items), emit `{source: none, value: null}` as a first-class value — mandatory per item, never omitted.
>
> **The annotation is a signal, not a verdict.** The relevance tag (§2.3) is content-driven; the recency annotation supplements it, never replaces or filters it. The annotation enables downstream consumers (sensemaking, decomposition, or the inquiry author) to spot the active task or to question idle artifacts, but the annotation alone does not determine relevance. Failing to keep this separation is an instance of Recency-Equates-Idleness (§4.2 LAYER 1) when relevance is judged from mtime alone, and an instance of Recency-Bias-Filter (§4.2 LAYER 1) when mtime is used to filter or down-weight items.

#### Principle placement (W4)

Three placements considered:
- **W4a (stated in §2.1 only).** Concise; one canonical home. The two failure modes anchor to it. Status: ACTIONABLE.
- **W4b (stated in §2.1 + repeated at §4.2 LAYER 1 prelude).** Duplication; goes against `docs/discipline_rule_placement.md`'s "one canonical home" convention; mismatches the anti-duplication principle of the project. KILLED.
- **W4c (stated in §2.1 + one-line cross-reference at §1.3 NOT-list).** §1.3 NOT-list explicitly excludes "Evaluation of items for correctness or quality"; adding a NEW exclusion ("Verdict-shaped use of metadata") with a one-line pointer to §2.1's principle would strengthen the orthogonality framing without duplicating the principle. Status: ACTIONABLE; complementary to W4a, not competing.

**Survives W4:** W4a (primary placement) + W4c (one-line NOT-list addition). Both ACTIONABLE; W4c is additive enrichment, not duplication.

#### Intervention-Shape-Axis Inversion at P2

P2 fires property (c) (introduces named principle) and property (e) (intervention-shape commitment: ADD-CONTENT — adds a Step Refinement note).

**Principal shape:** ADD-CONTENT (new refinement note inside existing §2.1).

**Inversion-candidate (alternative shape):**
- **Alternative shape REORGANIZE-WITHOUT-ADDING:** refactor §2.1's existing six-component prose to incorporate the mtime capture inline rather than as a refinement note. What follows: the spec's prose becomes longer; the rule is not visible as a discrete Step Refinement; consumers searching for the principle by name can't find it as a named entity. Weaker than principal.
- **Alternative shape REPAIR:** modify §2.3's relevance-attribution mechanism to emit mtime as part of its 5 per-item steps. Violates KI5 (sensemaking) — mtime is captured at Item-enumeration, not at Relevance-attribution. KILLED.

**Result:** principal (ADD-CONTENT) survives; alternative (REORGANIZE) WEAK and rejected; alternative (REPAIR) KILLED.

---

### P3 — Two LAYER 1 failure-mode entries

#### Mechanism applications

**Combination.** Combine the failure mode primitive (per §4.2: # + Mode + Recognition + Corrective columns) with the two named failure modes from sensemaking Ambiguity #2.

**Absence Recognition.** What's missing from §4.2's LAYER 1 list: any failure mode addressing metadata misuse. Currently 7 modes; mtime regression risks would be silently subsumed by FM#2 (Surfaced-irrelevance) or FM#5 (Workspace overload). The redesign-level absence: a dedicated entry for each of the two recency-axis regressions.

**Domain Transfer.** Transfer from regression-detection / safety conventions: when adding a new signal channel, add a corresponding failure mode for misuse of that channel. Applied: two new modes for two distinct misuses.

**Lens Shifting.** Under what conditions are the new failure modes detectable from output observation? Under the LAYER 1 condition: detectable via the artifact. The Recognition columns must point to detectable signatures in the Trace or workspace.

**Inversion.** Invert "two separate failure modes" → "one combined failure mode `Recency-Bias`." What follows under the inversion: simpler list (8 modes instead of 9), but the two mechanisms are different — conflation (treating mtime as relevance) vs filtering (using mtime to gate). The Corrective for each is also different (separate two-axis vs verify-no-gate). The two-mode shape preserves mechanism distinction; one-mode shape conflates the two mechanisms.

**Inversion depth check:** invert again — "the failure modes ARE one mechanism (excess-faith-in-metadata)." System-level statement. But this loses the actionability: when Recognition fires, the Corrective for "old=idle" is different from the Corrective for "drop items by age." Two modes serve the Corrective surfaces. **One-mode candidate REJECTED on structural grounds.**

#### Principal candidates

**FM#8 — Recency-Equates-Idleness:**

> | 8 | Recency-Equates-Idleness | A consumer of surfacing's output (or surfacing itself in a hypothetical lapse) treats `recency annotation` values as a proxy for relevance — items with old mtime are inferred to be irrelevant without independent content evidence | Restore the metadata-as-signal-not-verdict separation (per §2.1 Recency annotation capture refinement note): relevance is determined by content-vs-purpose at §2.3, not by mtime. Re-test the items judged irrelevant against the content-driven relevance tag. Anchored to the asymmetric-failure principle (§4.4): if relevance was judged from mtime alone, false-negatives may have been introduced — re-include the items at uncertain-relevance level (umbrella tag) and proceed. |

**FM#9 — Recency-Bias-Filter:**

> | 9 | Recency-Bias-Filter | Surfacing's output (or downstream consumption of it) shows items filtered or down-weighted by mtime — e.g., older items absent from the workspace, omitted from the Traversal Trace, or systematically tagged at a lower level than content-matching would warrant | Re-traverse the affected region with mtime-blindness restored: capture all items per §2.1 Item-enumeration; emit the `recency annotation` field but do not gate or weight on it. Anchored to the asymmetric-failure principle (§4.4): mtime-based filtering creates false-negatives (information-loss-in-the-dark), the failure mode that §4.4 explicitly classifies as the worse failure. |

#### Intervention-Shape-Axis Inversion at P3

P3 fires property (c) (introduces lesson-vocabulary: two failure mode names) and property (e) (intervention-shape commitment: ADD-CONTENT — adds two new entries to §4.2).

**Principal shape:** ADD-CONTENT.

**Inversion-candidate (alternative shape):**
- **Alternative shape ADD-DIMENSION:** rather than adding two failure modes, add a new DIMENSION to the existing §4.2 entries — a "metadata-axis applicability" column on each existing mode. What follows: every existing mode would get a recency-axis annotation. Heavy retrofit; doesn't surface the new mechanisms as discrete; doesn't anchor to §4.4 cleanly. KILLED.
- **Alternative shape REORGANIZE-WITHOUT-ADDING:** extend existing FM#2 (Surfaced-irrelevance) and FM#5 (Workspace overload) Recognition columns to mention mtime regression cases. What follows: the new mechanisms get partial coverage; consumers can't search §4.2 for the named mode; the asymmetric-failure-principle anchor-link is diluted across two existing entries. WEAK.

**Result:** principal (ADD-CONTENT) survives; alternatives KILLED or WEAK.

---

## Inherited Frame Audit

**Step (i) — Seed central assumption:** "The addition is multi-surface, not single-section" (committed at sensemaking SV5 + decomposition).

**Challenge scan:** Yes — the P3 REORGANIZE-WITHOUT-ADDING alternative (above) implicitly challenges by proposing single-section retrofit. The challenge exists; reasoned rejection on structural grounds is recorded. PASS.

**Step (ii) — Piece-level commitments:**

- **P1 commitment:** field name `recency annotation`. Challenge: Ambiguity #1's MEDIUM-confidence resolution; alternative "mtime annotation" was tested and rejected on signal-vs-source structural grounds. PASS.
- **P1 commitment:** value-shape `{source, value}` per W1a. Challenge: W1c (duration-since-invocation), W1d (filesystem-only), W1b (banded) — all tested and rejected with structural grounds. PASS.
- **P2 commitment:** principle stated at §2.1 (W4a). Challenge: W4b (duplicated at §4.2) and W4c (additional at §1.3 NOT-list); W4b KILLED (anti-duplication) and W4c PROMOTED as additive. PASS.
- **P2 commitment:** intervention shape ADD-CONTENT. Challenge: REORGANIZE and REPAIR alternatives explicitly tested. PASS.
- **P3 commitment:** two separate failure modes (count = 2). Challenge: one-mode Inversion-candidate generated AND tested at system-level depth; rejected because the two-mode shape preserves Corrective-distinction. PASS.

**Step (iv) — Firing condition:** the audit does NOT fire. Every load-bearing commitment has at least one explicit challenge in the candidate set with reasoned outcome.

**Inherited-Frame-Audit fires:** NO.

---

## Phase 3 — Test

### 5-test cycle applied to surviving candidates

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **P1 / W1a** (signal-source-aware annotation) | YES — no comparable field in surfacing | YES — survives "what if source = filesystem and value missing?" → first-class `null`; survives "what about candidate items?" → `source: none` | YES — opens downstream stats, per-region recency comparison | YES — directly translates to schema column text | YES — Combination + Absence Recognition + Domain Transfer converge on same shape from different upstream grounds | ACTIONABLE |
| **P1 / W2c** (per-region State Summary derivation) | MEDIUM — derived from W1a; novelty inherited | YES — survives "what if a region has all-no-mtime?" → reports cleanly | YES — per-region comparison enables boundary-discovery enrichment | YES — schema row | YES — Combination + Lens Shifting converge | ACTIONABLE |
| **P1 / W3a** (raw Telemetry counts) | LOW — straightforward counts | YES — survives "what if all items have mtime?" → still useful | LOW — limited downstream use beyond reporting | YES — bullet text | YES — multiple mechanisms produce the same count form | ACTIONABLE |
| **P2 / W4a** (principle at §2.1 only) | MEDIUM — new explicit principle | YES — survives "what if reader misses it?" → cross-references from §4.2 catch them | YES — principle becomes anchor for future metadata-related additions | YES — refinement note text | YES — Lens Shifting + Inversion converge | ACTIONABLE |
| **P2 / W4c** (one-line NOT-list addition at §1.3) | MEDIUM — adds an exclusion entry | YES — survives "is this duplication?" → no, it's a cross-reference, not the principle | MEDIUM — strengthens framing | YES — one-line text | YES — Lens Shifting | ACTIONABLE (additive to W4a) |
| **P2** Step Refinement entry | YES — new Step Refinement | YES — survives anchor-link test (cites two named failure modes by full name) | YES — sets pattern for future metadata captures | YES — full text drafted | YES — Combination + Lens Shifting converge | ACTIONABLE |
| **P3** FM#8 Recency-Equates-Idleness | YES — no existing FM addresses this | YES — survives "is this subsumed by FM#2?" → no, FM#2 is about content-quality irrelevance; this is about metadata-driven misjudgment | YES — opens calibration tracking | YES — full table-row text drafted | YES — Absence Recognition + Domain Transfer converge | ACTIONABLE |
| **P3** FM#9 Recency-Bias-Filter | YES — no existing FM addresses this | YES — survives "is this subsumed by FM#5?" → no, FM#5 is about context-window overload; this is about mtime-as-filter | YES — opens calibration tracking | YES — full table-row text drafted | YES — Absence Recognition + Inversion converge | ACTIONABLE |

### Artifact-grounding 6th-conditional test

Several candidates make categorical claims about project state (where the principle lives; what surfacing.md sections look like; what the §4.2 LAYER 1 list contains).

- Cross-check: surfacing.md §1.3 NOT-list currently has 8 entries (verified at trace #2 in surfacing.md). Adding a 9th is structurally consistent. PASS.
- Cross-check: surfacing.md §4.2 LAYER 1 list currently has 7 modes (verified at trace #10). Adding FM#8 and FM#9 makes 9. Consistent with the numbering convention. PASS.
- Cross-check: §2.1 has 6 components; the Step Refinement note attaches to the Item-enumeration component, no new component count. PASS.
- Cross-check: §5.4 Trace schema currently has 6 fields. Adding a 7th is additive. PASS.

Artifact-grounding PASSES across the board.

### Axis coverage check

The candidate set varies along multiple orthogonal axes:

- **Value-shape axis** (W1a vs W1b vs W1c vs W1d): covered with 4 candidates.
- **Aggregation-form axis** (W2a vs W2b vs W2c vs W2d): covered with 4 candidates.
- **Reporting-form axis** (W3a vs W3b vs W3c): covered with 3 candidates.
- **Placement axis** (W4a vs W4b vs W4c): covered with 3 candidates.
- **Intervention-shape axis** (ADD-CONTENT vs REORGANIZE vs REPAIR vs ADD-DIMENSION): covered with explicit Inversion-candidates per piece.
- **Failure-mode-count axis** (2 modes vs 1 mode): covered with explicit Inversion.

Axis coverage PASS.

### Mechanism-independence / shared-input detection

Each surviving candidate was reached by ≥2 mechanisms from different upstream grounds. Specifically:
- W1a: Combination (from existing schema) + Absence Recognition (from redesign-level) + Domain Transfer (from log-row pattern). Three independent grounds.
- W4a + W4c: Lens Shifting (placement under the "consumer might misuse" frame) + Constraint Manipulation (one canonical home convention).
- FM#8 and FM#9: Absence Recognition (from §4.2 LAYER 1 gap) + Domain Transfer (from regression-detection convention) + Inversion (from "filtering creates false-negatives" anchored at §4.4).

No spurious-from-shared-input convergence detected. The candidates are robust.

---

## Assembly Check

What architecture emerges when the survivors combine?

The assembled addition is a **layered metadata-signal pattern** within an existing discipline:

1. **At input/capture** (§2.1 Step Refinement) — mtime is captured alongside identifier, with source declared.
2. **At schema** (§1.4 vocab + §5.4 Trace field + §5.5 State Summary derivation) — the captured signal is persisted and reportable, with a per-region aggregation form.
3. **At telemetry** (§5.6) — aggregate counts give a fast pulse-check.
4. **At guard** (§4.2 FM#8 + FM#9) — two named failure modes anchored to the existing asymmetric-failure principle protect the two regression risks.
5. **At framing** (§1.3 NOT-list one-line addition) — the orthogonality of metadata-vs-relevance is named explicitly, reinforcing the principle stated at §2.1.

The layered pattern is more valuable than any individual piece: the principle (stated at §2.1) is enforced via failure modes (§4.2), reported via schema (§5.4), and framed via NOT-list (§1.3) — four mutually-reinforcing surfaces. Removing any one weakens the others. This is the emergent value: defense-in-depth across spec surfaces.

The pattern is also **generalizable** as a frontier note (research frontier — not committed at spec time): future metadata channels (file size, git-blame, edit-count) could follow the same layered structure (capture rule + schema field + State Summary derivation + telemetry + failure modes anchored to §4.4).

---

## Output Dispositions

- **ACTIONABLE:** P1 W1a + W2c + W3a; P2 Step Refinement + W4a + W4c; P3 FM#8 + FM#9. These are the ship-ready candidates for the finding's MUST list.
- **DEFERRED with revival trigger:**
  - Numeric recency bands (W1b / W2a / W3b): KILLED at spec time, but the BAND VOCABULARY (recent / aged / ancient) may revive if downstream consumers consistently re-derive the same bands across ≥5 invocations. Revival trigger: 5+ downstream consumers settling on the same band thresholds → commit the bands at spec time.
- **RESEARCH FRONTIER:**
  - The layered metadata-signal pattern as a template for OTHER metadata channels (file size, git-blame, edit-count). Not committed; emerges from the assembly.
- **RE-TEST TRIGGER:** none — no committed claims contradicted.

---

## Self-Assessment

PROCEED to Critique. The 8 ACTIONABLE candidates form a coherent, multi-surface, mutually-reinforcing edit to surfacing.md. The Inherited Frame Audit did not fire; the axis coverage check passed; mechanism independence verified; artifact-grounding passed. The KILLED alternatives are explicit with structural grounds, preventing later regret. Two DEFERRED items have explicit revival triggers; one RESEARCH FRONTIER is preserved.
