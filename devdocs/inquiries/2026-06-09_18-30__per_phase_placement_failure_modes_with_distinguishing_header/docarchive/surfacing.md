# Surfacing — per_phase_placement_failure_modes_with_distinguishing_header

## User Input

```text
[branch from _branch.md]

User: "Per-phase placement is the correct way; we should distinguish them somehow — maybe simple Failure Modes: like header under each phase. What do you think?"
```

## Mode and entry point

- **Mode:** mixed — artifact (prior framework + current spec state + cross-spec failure-mode structures) + possibility (per-phase placement variants + distinguishing-header variants).
- **Entry point:** signal-first.
- **Territory:** explicit-bounded.
- **Boundary-discovery sub-phase:** SKIPPED.

---

## Traversal Trace

### Region 1: The prior framework's case for Hybrid overview+detail

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 1 | Prior finding §3 catalog recommendation: Hybrid overview+detail wins on locality (STRONGEST), dual-use (STRONGEST), scale (MEDIUM), adoption cost (MEDIUM) | **CORE** | HIGH | The case to be re-tested by this inquiry. |
| 2 | Prior finding's Runner #5 Per-phase placement scoring: Locality STRONG for firing-locus; WEAK for mechanism/inverse; Scale MEDIUM-WEAK; Dual-use MEDIUM-WEAK (lookup lost); Adoption cost HIGH | **CORE** | HIGH | The framework's relative ranking against the user's intuition. |
| 3 | Prior finding §6 Picker rule: "Catalog with ≤4 entries → Linear flat table; Process content with multiple parallel branches → augment with phase-level overview" | **CORE** | HIGH | The framework's edge-case handling — the user's case may invoke an unsurfaced picker rule. |
| 4 | Prior finding's defense of Hybrid: "An LLM can scan the table for context, then read only the relevant section for action. Both granularities have strong locality" | **CORE** | HIGH | The dual-locality argument. The user's challenge: ONE granularity (per-phase) might be sufficient if the practitioner is at the phase. |
| 5 | Prior finding's argument against per-phase: "Catalog view lost (practitioner can't scan 'all failure modes' in one place)" + "#7 Self-Reference Collapse fires across phases" + "Cross-phase comparisons require navigation" | **CORE** | HIGH | The framework's three concrete objections to per-phase. Each must be addressed by the user's proposal. |

### Region 2: The user's intuition's structural grounding

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 6 | The `/td-critique` spec ALREADY has refinement notes placed inline at the phase they apply to: Project-specific risk + Frame-premise test + Purpose-fitness + Substance-vs-Label all at Phase 0; Multi-axis prosecution depth check at Phase 2; Constructive-output at Phase 3. The user's intuition aligns with this existing pattern. | **CORE** | HIGH | The spec already uses per-phase placement for REFINEMENT NOTES; the user's argument is "do the same for failure modes." |
| 7 | Per-phase failure-mode mappings in `/td-critique` (8 entries):<br>• Phase 0: #1 Wrong Dim, #4 Dim Blindness, #8 Axis Absence<br>• Phase 2: #2 Rubber-Stamping, #3 Nitpicking<br>• Phase 4: #5 False Convergence, #6 Evaluation Drift<br>• Cross-cutting: #7 Self-Reference Collapse | **CORE** | HIGH | Concrete distribution. 7 of 8 failure modes have clear phase-affinity. Only #7 is cross-cutting. |
| 8 | Each existing §4 entry already names its phase in the Prevention field (e.g., #1's prevention is "Phase 0 Dimension Construction. Validate dimensions..."). The phase-affinity is ALREADY EXPLICIT in the spec text; per-phase placement just relocates content to where the phase-affinity points. | **CORE** | HIGH | The relocation is structurally light — content already says "see Phase X"; relocating means "be at Phase X." |
| 9 | The refinement-note pattern (italicized `*Refinement note (applies at Phase X):*` + bold name + body + closing cross-reference) is a precedent for "inline check at a phase." A failure-mode block could use the SAME pattern (italicized prefix + bold name + body + closing cross-reference). | **CORE** | HIGH | Visual + structural consistency with existing convention. |
| 10 | The new Purpose-fitness refinement note at Phase 0 explicitly mentions BOTH #2 Rubber-Stamping AND #3 Nitpicking by name (the unification framing). If those were placed at Phase 2 inline, the refinement-note's cross-reference would be more local. | **SUB** | HIGH | Forward consistency: future refinement notes that name failure modes by # would have shorter cross-references under per-phase. |

### Region 3: Per-phase placement variants (possibility mode)

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 11 | **V1 Pure per-phase, no §4** — failure modes inline at each phase as refinement-note-style blocks; §4 deleted entirely. | **CORE** | HIGH | Maximum locality; loses catalog scan completely. |
| 12 | **V2 Per-phase + distinguishing header (user's proposal)** — each phase has a `**Failure modes preventable at this phase:**` sub-header followed by the failure-mode blocks. §4 may be deleted or thinned. | **CORE** | HIGH | The user's explicit proposal. Distinguishing header solves "what's a failure mode vs what's a refinement note vs what's process body content?" |
| 13 | **V3 Per-phase + thin §4 catalog overview** — failure modes inline at each phase; §4 becomes a thin overview table (just # / Name / Fires at) pointing to per-phase locations. | **CORE** | HIGH | Locality + catalog scan preserved. Higher edit cost (two-place updates). |
| 14 | **V4 Per-phase + end-of-spec glossary** — failure modes inline at each phase; end-of-spec glossary serves catalog scan with one-line definitions + section references. | **SUB** | MEDIUM | Similar to V3 but glossary at end rather than §4. Different visual rhythm. |
| 15 | **V5 Per-phase using refinement-note pattern verbatim** — each per-phase failure-mode block uses italicized `*Refinement note (recognizing Failure Mode #N at Phase X):*` + bold name + body. Maximum structural consistency with existing refinement-note convention. | **CORE** | HIGH | Zero new pattern introduced. Failure modes become a special-purpose refinement-note category. |

### Region 4: Distinguishing-header variants (possibility mode)

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 16 | **H1: `**Failure modes preventable at this phase:**`** (user's proposal) | **CORE** | HIGH | Bold; direct; clear. Sits between phase body and refinement notes. |
| 17 | **H2: `### Failure modes`** (markdown sub-header at h3 level within the phase) | **SUB** | MEDIUM | Stronger visual separation than H1; introduces another header level. |
| 18 | **H3: Italicized prefix per block: `*Failure mode (recognized at Phase X):*`** | **CORE** | HIGH | Analog of existing refinement-note pattern. No grouping header; each failure mode self-identifies. |
| 19 | **H4: No special header; bold mode name suffices** | **SUB** | LOW | Less visual distinction; risks failure modes being mistaken for ordinary phase body. |
| 20 | **H5 (new): `*Failure mode (applies at Phase X — prevention recipe inline):*`** + bold mode name + body | **CORE** | HIGH | Combines H3 italic-prefix style with explicit phase-attribution; closest analog to existing refinement notes. |

### Region 5: Cross-spec generalization signals

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 21 | `/sensemaking` failure modes (6) — each cites WHEN it fires (e.g., "Premature Stabilization" → at SV3/SV4 forced stabilization; "Perspective Blindness" → during Phase 2 perspective checking). Phase-affined. | **SUB** | HIGH | Same pattern as `/td-critique`: phase-affined failure modes currently in central §4. |
| 22 | `/innovate` failure modes (6) — each cites which phase (Premature Evaluation → during Test; Single-Mechanism Trap → during Generate; Early Frame Lock → after first successful mechanism). Phase-affined. | **SUB** | HIGH | Same pattern. |
| 23 | `/decompose` failure modes (7) — each cites step (Premature Decomposition → before Step 1; Wrong Boundaries → at Step 2; Hidden Coupling → at Step 5 interfaces). Step-affined (analogous to phase-affined). | **SUB** | HIGH | Same pattern. |
| 24 | `/surfacing` failure modes (9 LAYER 1 operational + 3 LAYER 2 identity). LAYER 1 are per-component; LAYER 2 are cross-cutting (identity-eroding). Mixed affinity. | **SUB** | HIGH | Partial fit; LAYER 2 cross-cutting modes would resist per-phase placement. |
| 25 | Cross-spec generalization signal: ~4 of 5 disciplines have failure modes with clear phase/step/component affinity. The cross-cutting ones (`#7 Self-Reference Collapse` in `/td-critique`; LAYER 2 in `/surfacing`) are the exceptions. | **CORE** | HIGH | Per-phase placement could generalize but needs explicit handling of cross-cutting modes. |

### Region 6: Refinement-note pattern as structural model

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 26 | Existing refinement-note pattern: italicized `*Refinement note (applies at Phase X):*` line + blank + bold `**Check name.**` + body paragraphs + closing cross-reference paragraph. | **CORE** | HIGH | Already used 5+ times in current `/td-critique`. Practitioners recognize the shape. |
| 27 | Reusing refinement-note pattern for failure modes (V5) creates **one consistent pattern** for "inline checks at a phase" with TWO categories: (a) refinement-notes = positive checks (do this); (b) failure modes = negative checks (avoid this). Pattern is unified; check-type is a sub-distinction. | **CORE** | HIGH | Big-picture coherence: failure modes are "negative refinement notes." Worth considering. |
| 28 | Drawback of V5: the word "Refinement note" might mislead practitioners — a failure-mode entry isn't a refinement of an existing rule. Alternative: introduce a parallel `*Failure mode (applies at Phase X):*` prefix that visually mirrors but textually differs. This is H5 from Region 4. | **SUB** | HIGH | Pattern reuse vs term-accuracy trade-off. |

### Region 7: Concerns the user must address (from prior framework's objections)

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 29 | **Concern 1: Cross-cutting failure modes (#7 Self-Reference Collapse).** Per-phase placement requires placing it at some specific phase OR cross-cutting it. Solutions: (a) place at end of spec under "Cross-cutting" sub-section; (b) place at Phase 0 (where dimension construction occurs) with note "applies across phases"; (c) inline at every phase (duplication, bad). | **CORE** | HIGH | Must be resolved. |
| 30 | **Concern 2: Catalog scan loss.** Practitioner who wants "list of all failure modes" has nowhere to look. Solutions: V3 (thin §4 overview), V4 (end-glossary), or accept the loss. | **CORE** | HIGH | Must be resolved. |
| 31 | **Concern 3: Cross-mode comparison.** Per-phase placement scatters inverse pairs (#2 ↔ #3 — both at Phase 2, so OK for this pair; but #2/#3 ↔ #5/#6 cross-phase comparison is harder). Solutions: explicit cross-references in each failure mode's body; thin overview table with "Inverse-of" column. | **SUB** | HIGH | Less critical because most pairs are within-phase or cross-cutting. |

### Region 8: Concrete shape sketches for `/td-critique` §4 if per-phase wins

| # | Item | Relevance | Confidence | Note |
|---|---|---|---|---|
| 32 | **Sketch A (V2 + H1):** Each phase gains a `**Failure modes preventable at this phase:**` sub-section with full per-mode entries. §4 deleted entirely. | **CORE** | HIGH | User's proposal. Simplest. Loses catalog scan + cross-cutting placement issue. |
| 33 | **Sketch B (V3 + H1):** Per-phase placement with thin §4 overview table. Each phase has `**Failure modes preventable at this phase:**` sub-section; §4 is a 3-column table (# / Name / Fires at) with links to per-phase sections. | **CORE** | HIGH | Locality + catalog scan. The hybrid the prior framework would endorse — but in the OPPOSITE direction: detail inline at phase, overview at §4 (instead of overview at §4 + detail in §4). |
| 34 | **Sketch C (V5 + H5):** Per-phase placement using refinement-note pattern. Each failure mode is `*Failure mode (applies at Phase X):*` + bold name + body + closing cross-ref. §4 deleted or replaced with a thin "Failure modes catalog" pointer block. | **CORE** | HIGH | Maximum existing-pattern reuse. Failure modes become "negative refinement notes." |
| 35 | **Sketch D (Sketch B's overview lives elsewhere):** Same as B but the overview table is added to §6 Summary table instead of §4. §4 is deleted. The Summary table grows. | **SUB** | MEDIUM | Reduces section count. Risks Summary table bloat. |

---

## State Summary

### Territory-specification echo

Bounded territory:
- (a) Prior framework's case for Hybrid (Region 1; 5 items).
- (b) User's intuition's structural grounding (Region 2; 5 items).
- (c) Per-phase placement variants V1-V5 (Region 3; 5 items).
- (d) Distinguishing-header variants H1-H5 (Region 4; 5 items).
- (e) Cross-spec generalization signals (Region 5; 5 items).
- (f) Refinement-note pattern as structural model (Region 6; 3 items).
- (g) Concerns from prior framework's objections (Region 7; 3 items).
- (h) Concrete shape sketches for `/td-critique` §4 (Region 8; 4 items).

**Total items surfaced: 35.**

### Purpose-specification echo

Gather adjudication material: prior framework's case + user's intuition's case + concrete variants + cross-spec signals + concerns to address + sketches for downstream Sensemaking.

### Coverage map

| Region | Coverage | Aggregate verdict |
|---|---|---|
| Prior framework's case | CONFIRMED via in-context recall | CORE (5 items) |
| User's intuition's grounding | CONFIRMED via spec inspection | CORE (5 items) |
| Per-phase variants | EXHAUSTED at this resolution | CORE (5 items) |
| Distinguishing-header variants | EXHAUSTED at this resolution | CORE (5 items) |
| Cross-spec signals | CONFIRMED via grep + in-context spec knowledge | SUB (4 items) + CORE (1 conclusion) |
| Refinement-note pattern model | CONFIRMED | CORE (3 items) |
| Concerns to address | NAMED | CORE (3 items) |
| Concrete sketches | EXHAUSTED at this resolution | CORE (3 items) + SUB (1 item) |

### Confirmed-absent regions

None confirmed-absent. Could surface specific corpus instances of confusion under current pattern (e.g., a practitioner who looked at §4 and missed a phase-relevant failure mode) — but no such corpus exists.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **Per-phase placement** | structural-reference (from prior framework Runner #5) | items 11-15 | Failure modes inline at the phase they prevent. |
| **Distinguishing header** | coined-term (user) | items 16-20 | Visual separator distinguishing failure modes from other phase content. |
| **Phase-affinity** | coined-term | items 7, 25 | Property of a failure mode having a clear phase where it fires/is prevented. |
| **Catalog scan** | vocabulary (from prior framework) | item 30 | The lookup mode where practitioner wants "all failure modes at-a-glance." |
| **Cross-cutting mode** | vocabulary | item 29 | A failure mode without clear single-phase affinity (e.g., #7 Self-Reference Collapse). |
| **Negative refinement note** | coined-term | item 27 | Re-framing: failure modes as a sub-type of refinement notes (the "avoid this" sub-type). |
| **Two-granularity locality** | vocabulary (from prior framework) | item 4 | The Hybrid's defense: locality at TABLE-row level + locality at SECTION level. |
| **Single-granularity locality** | coined-term | item 4 inversion | Per-phase: ONE granularity (at-phase) sufficient if practitioner is at the phase. |

### Recency distribution

Not load-bearing.

### Frontier flags

1. **Practitioner-experience data is unavailable.** The prior framework's catalog recommendation was theoretical; the per-phase challenge is intuition-based. Neither side has empirical data on actual `/td-critique` use. Frontier: an empirical inquiry comparing practitioner experience under each pattern.

2. **Cross-spec consistency concern.** If per-phase placement wins for `/td-critique` failure modes, does the recommendation generalize? Cross-spec signals (Region 5) suggest YES for most sister disciplines but `/surfacing`'s LAYER 2 modes complicate. Sensemaking should adjudicate.

3. **The framework's catalog → Hybrid recommendation was generic.** The user's challenge raises whether "phase-affined catalog" is a distinct content-type that needs a different recommendation. Sensemaking should consider whether to refine the prior framework.

4. **The relationship to refinement notes.** If failure modes go inline at phases using the refinement-note pattern (V5), the spec has TWO categories of inline-at-phase content (positive checks = refinement notes; negative checks = failure modes). Is this a unified pattern with sub-categories or two distinct patterns? Sensemaking should clarify.

5. **What happens to §6 Summary table.** Currently lists failure mode count + names. Under per-phase placement, this stays as the catalog-scan substitute OR gets updated. Innovation should specify.

### Workspace-populated status

`{populated: true, populated-at: 2026-06-09_18-30, extent: "35 items / 8 regions; 25 CORE + 9 SUB + 1 LOW-confidence-SUB. 5 frontier flags. Prior framework + user's intuition both surfaced fairly."}`

### Telemetry

- **Mode:** mixed artifact + possibility.
- **Entry:** signal-first.
- **Cycles:** 1.
- **Items:** 35.
- **Tags:** CORE 22 / SUB 12 / SIDE 0 / UMBRELLA 0; (LOW-confidence 1).
- **Sub-phase fired:** NO.
- **Convergence:** territory traversed; uncertainty-includes filtering applied.
- **Workspace-overload trigger:** NOT FIRED.
- **LAYER 1 modes:** all NO.
- **LAYER 2 modes:** all NO.

### Self-Assessment

**PROCEED.** Both sides surfaced fairly (prior framework's case in Region 1; user's intuition's grounding in Region 2). 5 per-phase variants + 5 distinguishing-header variants enumerated. Cross-spec signals gathered. Three concerns from prior framework named for adjudication. Four concrete sketches ready for downstream Sensemaking to evaluate.
