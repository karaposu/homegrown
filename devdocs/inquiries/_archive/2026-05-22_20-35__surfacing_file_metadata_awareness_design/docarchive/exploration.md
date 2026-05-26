# Exploration — surfacing file-metadata awareness design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/_branch.md`

The inquiry asks: what addition to surfacing's spec at `cognitive_harness/surfacing/references/surfacing.md` would enable file-metadata-awareness (last-edit datetime) as a relevance signal — including where in the spec the addition lives and what mechanism it introduces — without making "old = idle/irrelevant" a default judgment that excludes relevant-but-idle items?

## Territory Overview

**Mode:** possibility-with-artifact-anchors. The territory is conceptual (the design space for adding a file-metadata mechanism), but the candidates live as additions to a concrete artifact (the surfacing spec). Item enumeration draws from concrete artifacts (the spec itself, adjacent discipline specs, project docs); candidate generation produces design positions in the possibility space.

**Entry point:** frontier-first. No specific hunch about which position to take; user's question is open-ended.

**Boundary check:** territory is explicit-bounded by `_branch.md` to the surfacing discipline at `cognitive_harness/surfacing/references/surfacing.md`. No boundary-discovery sub-phase fired.

**Regions identified:**

- **R1 — Surfacing's current structural shape** (where additions could live).
- **R2 — Operational design positions** (what a file-metadata mechanism could BE).
- **R3 — Constraint surface** (rules from surfacing's own spec that any addition must respect).
- **R4 — Adjacent precedents** (whether other disciplines or project artifacts already address this).
- **R5 — Failure-mode-A and failure-mode-B design-space positions** (which design positions avoid both).
- **R6 — Possibility-case handling** (what the mechanism means when the territory is conceptual, not file-based).

**Resolution:** R1, R3, R5, R6 explored at coarse-to-medium resolution. R2 enumerated at medium resolution (multiple candidate positions surfaced). R4 confirmed-absent at coarse resolution.

## Inventory

### R1 — Surfacing's current structural shape

| Item | Labeling (D3) |
|---|---|
| `§1.1 Verb-meaning` | Defines surfacing as "drawing items from latent context into present attention, tagged with relevance to the inquiry's purpose"; relevance is purpose-conditioned, NOT content-conditioned. |
| `§1.3 NOT-list (8 entries)` | Explicitly excludes "evaluation of items for correctness or quality" (entry 5). Anchor for the meaning-of-quality boundary. |
| `§1.4 Vocabulary — relevance tag` | Four levels: core / sub / side / umbrella. Per-item, purpose-conditioned. |
| `§1.4 Vocabulary — relevance confidence` | HIGH / MEDIUM / LOW; per-item confidence emitted alongside the tag. |
| `§2.1 Six Traversal components` | Scope-determination / Item-enumeration / Relevance-attribution / Coverage-tracking / Absence-detection / Output-shaping. The Item-enumeration component is the one that touches files first. |
| `§2.3 Relevance-attribution mechanism` | Five-step per-item operation. Step 5 ("Uncertainty handling") explicitly defaults to inclusion under low-confidence-match — the core asymmetric-failure mechanism. |
| `§2.4 Primitive composition` | Eight load-bearing primitives. **Salience** is for "bottom-up surprise/notable signal that pulls items into consideration." **Inhibition** suppresses items only at HIGH-confidence rejection. |
| `§3.4 Traversal default ordering` | Scope → Enumerate → Relevance-attribute → Coverage → Absence → Output-shape. Item-enumeration is step 2 — where file system reading happens in artifact case. |
| `§4.4 Asymmetric-failure principle` | The structural-load-bearing constraint: "Missing a relevant item is structurally worse than surfacing an irrelevant item." Operational form: lean toward INCLUSION under uncertainty. This is the protection against failure mode B. |
| `§5.4 Traversal Trace schema` | Per-entry fields: Sequence ordinal / Region / Item identifier(s) / Per-item relevance verdict / Per-item confidence / Step note (optional). The schema is extensible — additional per-item fields fit naturally. |
| `§5.5 State Summary schema — Coverage map` | Per-region: confirmed / scanned-but-shallow / inferred / unknown; aggregate relevance per region. The aggregate-per-region pattern is a potential parallel for a freshness-per-region summary. |
| `§5.5 State Summary — Concept-names list` | Per-entry: `{name, type, provenance: <trace-entry-id>, gloss}`. Already carries discovery-time metadata (provenance), confirming the artifact schema accepts metadata-shaped fields. |

### R2 — Operational design positions (candidate mechanisms)

Each position is a possibility-case candidate for "what the addition is operationally." The exploration enumerates them; critique will adjudicate among them (downstream-task).

| Position | What it is operationally (D2) |
|---|---|
| **P1 — Per-item annotation layer** | A new per-item annotation (e.g., `freshness` or `last-edit-datetime`) captured during Item-enumeration; persists in Traversal Trace alongside relevance + confidence. Parallel to `/explore`'s multi-layer annotation pattern (existence, confidence, relevance, adjacency, confirmed-absent). |
| **P2 — Per-region freshness summary in State Summary** | A region-level aggregate of freshness ("most items in region X edited within last N days"), parallel to State Summary's existing Coverage map. Lower granularity than P1. |
| **P3 — Salience signal for Scope-determination** | Recently-edited files get a Salience boost when the Scope-determination component decides which sub-region to operate on next. Influences traversal order, not the inclusion decision. |
| **P4 — Input to Relevance-attribution similarity computation** | Last-edit-datetime becomes one input to the Intuition-similarity primitive's purpose-template match. Risk: blurs relevance (purpose-conditioned) with currency (content-conditioned) — violates §1.1 by mixing axes. |
| **P5 — Enrichment sub-step after Item-enumeration** | A new sub-step that reads file metadata for enumerated items and attaches metadata to each item record. Conceptually identical to P1 but framed as a process step rather than an annotation type. The two are dual descriptions of the same mechanism. |
| **P6 — Downstream-consumable artifact field only** | Surfacing captures metadata at enumeration time and emits it in the artifact, but does NOT use it for its own decisions. Downstream disciplines (sensemaking, innovation) consume the field. Minimal change to surfacing's process; maximal forward-compatibility. |
| **P7 — Freshness as a separate confidence-like map** | A second confidence dimension: relevance-confidence + freshness-confidence. Per-item dual-confidence record. Tightly coupled to P1 in implementation but separates the cognitive axes more sharply. |
| **P8 — Gate / filter on enumeration** | Old files get excluded from Item-enumeration (or de-prioritized). **This is the failure-mode-B position** — the design the user explicitly does NOT want. Listed for completeness; will be killed in critique. |

### R3 — Constraint surface (rules any addition must respect)

| Constraint | Source | What it forbids |
|---|---|---|
| **Asymmetric-failure principle** | §4.4 | Any position that excludes items from surfacing on metadata grounds alone. Inclusion-under-uncertainty is non-negotiable. → kills P8. |
| **Relevance is purpose-conditioned, not content-conditioned** | §1.1 | Any position that confuses freshness (content-conditioned) with relevance (purpose-conditioned). → P4 risks this; P1/P2/P6 cleanly avoid it. |
| **NOT-list entry 5: no evaluation for correctness or quality** | §1.3 | Any position that frames freshness as a quality judgment. Freshness is observable fact (a timestamp), not value. → P1's framing matters: it must be "metadata annotation," not "quality assessment." |
| **NOT-list entry 6: no interpretive meaning** | §1.3 | Any position that interprets what staleness *means* (e.g., "this is abandoned" or "this is canonical"). → annotations stay at labeling level; meaning extraction is downstream. |
| **Possibility-case handling** | §1.1 + §3.1 (implicit) | Surfacing operates in both artifact and possibility cases. Any artifact-case-specific mechanism must explicitly scope itself to artifact-case (or define a possibility-case analog). |
| **"Thin" artifact criterion** | §5.3 | Per-item metadata (timestamp string) is fine; arbitrary file content is not. Stays within criterion. |
| **Idempotency within invocation** | §3.7 | Same input + same purpose → same output. File-mtime read at invocation time is fine (idempotent within the invocation; if user re-invokes later, value may differ — but that's cross-invocation, expected). |
| **Discipline workspace invariant from `/MVL+`/`/MVL2+`** | runner level, not discipline level | Surfacing must produce its file before sensemaking begins; any metadata-aware behavior must be self-contained within one invocation. → operational nuance, not constraint on positions. |

### R4 — Adjacent precedents (confirmed-absent region)

Scanned for "does any project artifact already use file-metadata as a discipline-level signal?":

- `/explore` spec — five annotation layers (existence, confidence, relevance, adjacency, confirmed-absent); **none metadata-based**. Annotations come from scan/probe behavior, not file properties.
- `/sense-making` spec — anchor extraction over surfaced items; no metadata input.
- `/comprehend` spec — builds models from code/text; reads files but doesn't track mtime.
- `docs/stability_preservation_via_git.md` — uses git SHAs for snapshots, not for runtime signals. Different operation (preservation, not surfacing).
- `docs/regression/desc.md` — symptom catalog includes "Shorter than before" (Type 5 — spec symptoms) which uses git diff to detect, but at audit time, not surfacing time.
- `cognitive_harness/protocols/conclude.md`, `branch_inquiry.md` — operate on inquiry-folder structure; no file-mtime use.

**Verdict for R4:** confirmed-absent. There is no existing project-level precedent for file-mtime use inside a discipline's runtime spec. The user's proposed addition is **new ground for the project**, not a port of an existing pattern. This means the design must justify itself from first principles — no precedent-by-citation is available.

### R5 — Failure-mode design-space positions

| Position × Failure mode | Failure A (idle-as-refined) avoided? | Failure B (relevant-but-idle dropped) avoided? |
|---|---|---|
| P1 (per-item annotation) | YES — downstream can read the freshness annotation and adjust its treatment | YES — annotation is non-filtering; item is surfaced regardless |
| P2 (per-region summary) | PARTIAL — region-level coarseness loses per-item info | YES — non-filtering |
| P3 (Salience boost) | NO — only influences order, not what downstream knows about staleness | YES — non-filtering (only reorders) |
| P4 (input to Relevance-attribution) | YES — relevance becomes freshness-aware | NO RISK — but also confuses axes (violates R3) |
| P5 (enrichment sub-step) | YES — same data attached as P1 | YES — non-filtering |
| P6 (downstream-consumable artifact field only) | YES — downstream gets the signal | YES — surfacing doesn't filter on metadata |
| P7 (separate confidence-like map) | YES — separate dimension visible to downstream | YES — non-filtering |
| P8 (gate/filter) | YES (over-aggressively) | **NO — this IS failure mode B** |

**Survivors (handle both failure modes):** P1, P5, P6, P7. P2 is partial (loses per-item resolution). P3 misses A. P4 fails axis-separation (R3 violation). P8 is the explicit anti-target.

### R6 — Possibility-case handling

In possibility case (territory is conceptual, items are candidate-generated), file-metadata does NOT exist for candidates. Three positions exist for handling this:

| Sub-position | What it commits to |
|---|---|
| **Q1 — Artifact-case-only scoping** | The metadata mechanism explicitly scopes itself to artifact case. In possibility case, the mechanism is dormant / absent. |
| **Q2 — Possibility-case analog** | Define an analog: e.g., "candidate's underlying concept's last-mention-in-corpus date" or "candidate's last-revisit timestamp." Adds complexity for marginal value at MVP. |
| **Q3 — Silent absence** | The mechanism applies whenever metadata IS available (artifact case) and is silently absent otherwise. Risk: spec is unclear; future readers may try to apply it in possibility case. |

**Q1 is the cleanest stance.** Q3 should be killed (silent absence is a doc-quality regression). Q2 is a future-frontier candidate but adds scope today.

## Signal Log

| Signal | Type | Cycle | Probed? | Outcome |
|---|---|---|---|---|
| `§4.4 asymmetric-failure principle is the load-bearing structural constraint` | Relevance + density | 1 | YES | Constraint applied to R5 evaluation; killed P8 cleanly. |
| `§1.3 NOT-list entry 5 (quality / correctness)` | Relevance | 1 | YES | Constraint applied to R3; constrains framing of P1 (must be metadata-annotation, not quality-assessment). |
| `Multiple existing schema fields accept extension` | Density | 1 | YES | P1 is structurally cheap to add; Traversal Trace + State Summary schemas already accommodate per-item metadata fields. |
| `No project precedent for file-mtime in a discipline` | Absence | 1 | YES | R4 confirmed-absent; design must justify from first principles. |
| `Tension between failure modes A and B` | Tension | 1 | YES | R5 matrix shows P1, P5, P6, P7 handle both; P3, P4, P8 fail at least one. |
| `Per-region aggregate parallel to coverage map` | Novelty | 2 | DEFERRED | P2 is structurally clean but loses per-item resolution. Note for innovation. |
| `Possibility-case handling unaddressed in user question` | Absence | 2 | YES | R6 enumerates Q1/Q2/Q3; Q1 is the clean default. |
| `Jump-scan: not adding to surfacing at all` | Tension (alternative path) | 3 | YES | Alternative pushes capability downstream but doesn't eliminate the design need. Surfacing is the natural enumeration-time capture point. |
| `Git as metadata source vs filesystem mtime` | Novelty | 2 | DEFERRED | Implementation detail; both produce a timestamp. Belongs to a downstream materialization, not the discipline spec. |
| `What "old" means quantitatively (threshold for "recent" vs "old")` | Tension | 2 | DEFERRED | Load-bearing quantifiable claim under §3.5 of `/explore` discipline. NOT yet committed; if any position uses a fixed threshold, it must be empirically probed. The spec should declare "no threshold; emit raw timestamp; downstream interprets." |

## Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| R1 — Surfacing's current structural shape | **confirmed** | Read the spec fully; sections + components are inventoried. |
| R2 — Operational design positions | **scanned** | 8 positions enumerated (P1–P8). High coverage; jump-scan did not produce new positions. May still have niche positions in edge regions (e.g., metadata-as-frontier-flag), but unlikely to overturn the survivor set. |
| R3 — Constraint surface | **confirmed** | All four load-bearing constraints traced to spec sections; surfacing's own NOT-list + asymmetric-failure principle exhaustively constrain the design space. |
| R4 — Adjacent precedents | **confirmed-absent** | Scanned `/explore`, `/sense-making`, `/comprehend`, project docs, protocols, contracts. No precedent. |
| R5 — Failure-mode positions | **confirmed** | Mechanically derived from R2 × failure-mode-A/B definitions. Result is deterministic given the failure-mode framings. |
| R6 — Possibility-case handling | **scanned** | Three sub-positions (Q1, Q2, Q3) enumerated. Q2 is forward-tied (could be expanded if needed), but Q1 is the obvious default. |

## Frontier State

**Stable.** Three convergence criteria checked:

- **Frontier stability** — additional scans did not reveal new regions. The structural shape of the design space (positions, constraints, failure-mode handling, possibility-case scope) is captured.
- **Declining discovery rate** — cycles 2 and 3 produced fewer new structural insights than cycle 1; jump scan (cycle 3) produced confirmation, not surprise.
- **Bounded gaps** — remaining unknowns (e.g., specific operational text for the spec edit; whether to use git vs filesystem mtime) are downstream-discipline territory (sensemaking → decomposition → innovation), not frontier voids.

Frontier state: **closed for /explore's purposes**; handoff to sensemaking.

## Gaps and Recommendations

### Frontier questions handed to downstream

For **sensemaking** (next discipline):

- The cognitive-anchors for "freshness" vs "relevance" vs "currency" vs "active-vs-idle" — these are near-synonyms in casual language but the spec edit needs precise vocabulary. Sensemaking should fix the load-bearing concept.
- The boundary between "freshness as labeling" and "staleness as judgment" — labeling stays inside surfacing's NOT-list; staleness judgment slides toward evaluation. Sensemaking should locate the boundary explicitly.
- Whether the user's "but" guard (old ≠ idle) requires explicit text in the spec, or is sufficiently protected by the asymmetric-failure principle (§4.4) being upstream.

For **decomposition**:

- The addition has at least two surfaces (a step-level rule at Item-enumeration; a schema extension at Traversal Trace + State Summary). These can be decomposed as separate pieces with explicit interfaces.
- The R6 possibility-case-handling question is a separate piece (clean scope: declare the mechanism artifact-case-only OR provide a possibility-case analog).
- The downstream-consumption question (do sensemaking/innovation/critique need to be told how to consume the new field?) is a separate piece.

For **innovation**:

- Among R2's survivors (P1, P5, P6, P7), which is the actual proposal? Or is the proposal a combination (P1 + P6, where P1 captures + P6 emphasizes the downstream-consumable framing)?
- What does the spec text actually say? (Concrete language.)
- Should the addition include a "freshness-confidence" tier (P7) or just a raw timestamp?
- Should the addition propose a downstream-consumer-side rule (e.g., a sensemaking refinement note about how to interpret the freshness annotation)?

For **critique**:

- Adversarial test: does the proposed addition open new failure modes (e.g., regression-rate failure if downstream over-trusts the freshness annotation)?
- Test against §4.3 LAYER 2 failure modes: does the proposal risk "Interpretive-overstep" if the annotation crosses into staleness-judgment? Does it risk "Self-coupling-to-downstream" if the annotation's value is calibrated against downstream verdicts?
- Test the boundary-keeping: would a future LLM reading the edited spec correctly distinguish freshness-annotation from quality-assessment?

### Recommendations

- **R2's survivor set (P1, P5, P6, P7) is the design space for innovation.** Critique should adjudicate among them (or a combination) for the final spec edit.
- **The placement question (R1) is partially answered:** the addition has two natural surfaces: (a) a step-level rule under §2.1 (Item-enumeration component) about capturing file metadata in artifact case, and (b) a schema extension to §5.4 (Traversal Trace per-entry fields) adding a metadata field. Possibly also (c) a paragraph in §1.3 (NOT-list) clarifying that freshness annotation is NOT a quality assessment.
- **The non-regression guard (failure mode B avoidance) is structurally cheap** — the asymmetric-failure principle is upstream of any new annotation; no design that treats metadata as non-filtering can re-introduce failure mode B. But the spec edit should make this explicit (a one-line reaffirmation that freshness annotation is non-filtering) to prevent future readers from mis-reading.

## Telemetry

- **Mode:** possibility-with-artifact-anchors. Hybrid; the dominant production is possibility-mode candidate enumeration (R2), but the candidate territory is anchored in artifact-mode reads (R1, R3, R4).
- **Entry point:** frontier-first.
- **Cycles run:** 3 (initial scan, signal-probe, jump-scan).
- **Candidates generated (possibility mode):** 8 design positions (P1–P8) in R2; 3 sub-positions (Q1–Q3) in R6.
- **Signals detected:** 10 (4 relevance, 2 density, 2 absence, 2 tension, 1 novelty). Probed: 6. Deferred: 4 (per Signal Log).
- **Resolution progression:** R1/R3/R4 at coarse-to-confirmed; R2 at medium (multiple candidates enumerated, not yet adjudicated); R5 mechanically derived; R6 at scanned.
- **Frontier state:** stable.
- **Discovery rate:** declining (cycle 1 surfaced most regions; cycles 2-3 produced refinement, not new regions).
- **Convergence criteria status:** Frontier stability ✓ — Declining discovery rate ✓ — Bounded gaps ✓.
- **Jump scan performed:** yes (cycle 3 — tested the "don't add to surfacing" alternative).
- **Failure modes checked (from `/explore`'s §4.1):**
  - Premature depth — avoided by surround-layer-first scan (read full surfacing spec, then enumerated design positions).
  - Surface-only scanning — probed key signals (asymmetric-failure principle, NOT-list constraint, R5 matrix).
  - False confidence — jump-scan performed; no surprises.
  - Premature termination — three criteria all met.
  - Re-exploration — frontier tracking explicit per region.
  - Completeness bias in possibility mode — included obvious P8 (gate/filter) explicitly as the anti-target before generating novel positions.
  - Open→closed drift — annotations stayed at labeling; no relational meaning extraction.
  - Silent boundary-discovery — N/A (territory was explicit-bounded).
  - Negative-space silent drop — R4 confirmed-absent surfaced explicitly.
  - Inadequate per-item content depth — D2 minimum maintained; most items at D3 (with structural-adjacency content).

## Self-Assessment Verdict

**PROCEED.**

- All convergence criteria met.
- No LAYER 1 failure modes (`/explore`'s §4.1) raised.
- The structural map is sufficient for sensemaking to anchor on.
- One **DEFERRED** quantifiable claim noted (R5 — "what 'old' means quantitatively"): the spec edit should declare "no threshold; emit raw timestamp; downstream interprets" to avoid committing a Surface-Only Scanning instance. This is the only load-bearing quantifiable claim and is handled by the no-threshold design choice rather than by empirical probing.
