# Exploration — /explore Relevance-Selection Mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_11-54__explore_relevance_selection_mechanism/_branch.md`

Territory: the design space of RELEVANCE-SELECTION mechanisms for `/explore`. User's correction: the prior finding's filesystem-listing mandate was an incomplete answer because LISTING ≠ CONSUMPTION. The real bottleneck is how `/explore` chooses which content to actually read at depth.

Mode: possibility. Entry: frontier-first (no specific seed; explicitly avoid anchoring on prior examples). Expected: ~15 items. Depth: D2.

---

## Territory Overview

The design space has two orthogonal axes that the prior finding conflated. Surfacing them explicitly is the most important move this exploration makes:

- **Axis I — Filter vs Annotation:** Is relevance used to GATE which items get read (a pre-read filter)? Or to LABEL items in the output after they're surfaced (a post-surfacing annotation)? Different operations, different placements in the spec, different mechanisms. The current `/explore` spec at `homegrown/explore/references/explore.md` §2.1-§2.2 treats relevance as an annotation layer (a label on output); the user's correction implies it should also be a filter (gating what gets read).

- **Axis II — Listing vs Consumption:** Listing surfaces existence (item X is present). Consumption reads X's content. The prior finding mandated listing; the user pointed out that listing doesn't ensure consumption of the RELEVANT items. Relevance-selection sits between listing and consumption.

The territory partitions into 9 regions plus a jump-scan surface, organized by mechanism-kind:

- **A** — Relevance-criteria extraction (deterministic; produces an explicit criteria statement)
- **B** — Score-and-rank mechanisms
- **C** — Multi-pass relevance refinement
- **D** — Intuition-based mechanisms (leverage `/intuit` discipline)
- **E** — Force-read mechanisms (relevance-after-the-fact)
- **F** — Decompose-the-territory mechanisms
- **G** — Lifting existing /explore signals into active filters
- **H** — Meta-mechanism: making relevance-selection an explicit cycle step
- **I** — Boundary clarifications (the two axes above)
- **J** (jump-scan) — Less-obvious

Surround layer included in coarse scan: the existing /explore spec's components and annotation layers (§2.1, §2.2); the project's /intuit cross-cutting discipline; the canonical-source registry from the prior canonical-coverage finding (one form of relevance declaration).

**Step 0 declarations:** mode=possibility; entry=frontier-first; expected=~15 items; depth=D2.

---

## Inventory

### Region A — Relevance-criteria extraction (deterministic, explicit)

**A1. Question/Goal-derived criteria extraction.** [coverage-guarantee: HIGH | complexity: low]
At Step 0, the LLM reads `_branch.md`'s Question + Goal and produces a one-paragraph "relevance criteria" statement: "For this inquiry, an item is relevant if it bears on X, contains Y, or relates to Z." The criteria become explicit BEFORE any scanning and are applied as a filter during signal detection. Forces relevance to be articulated rather than left implicit.

**A2. Keyword extraction + content-grep.** [coverage-guarantee: medium-HIGH | complexity: low]
Extract noun phrases from Question + Goal; run `grep -r` against the territory; treat content-matches as relevance signals. Deterministic + content-aware. Doesn't depend on LLM-discretion about what's relevant.

**A3. Author-declared relevance criteria.** [coverage-guarantee: HIGH | complexity: low-medium]
Like the canonical-source registry from the prior canonical-coverage finding, but for relevance criteria, not must-touch sources. Author writes 3-5 bullets in `_branch.md` describing what "relevant" means for THIS inquiry. Most upstream possible relevance declaration.

**A4. Sub-question-bearing test.** [coverage-guarantee: HIGH (when applicable) | complexity: medium]
Use `/decompose` first on the question; each surfaced item is judged: does it bear on at least one sub-question? Concrete criterion. Caveat: requires /decompose to run first, changing the /MVL+ pipeline order.

### Region B — Score-and-rank mechanisms

**B1. Per-item relevance score with threshold.** [coverage-guarantee: medium | complexity: low]
Each surfaced item gets a 0-1 or LOW/MEDIUM/HIGH relevance score. Items above threshold get read; items below get listed but unread. Simple and visible. Caveat: scoring depends on the relevance-criteria mechanism (which Region A produces).

**B2. Top-N ranking + read.** [coverage-guarantee: medium-HIGH | complexity: low]
Score all surfaced items; read top-N by score. N scales with context budget. Variant of B1 where N is the controlling parameter rather than threshold.

**B3. Weighted multi-criteria scoring.** [coverage-guarantee: HIGH | complexity: medium]
Each item scored against multiple criteria (keyword match + structural position + author-declared relevance + recency); combined score determines read priority. More robust than single-axis scoring.

### Region C — Multi-pass relevance refinement

**C1. Scan → score → read top → re-score with new context.** [coverage-guarantee: HIGH | complexity: medium]
After the first scan + score, read top-N items. Use the new content as additional context, re-score remaining items, read new top items. Iterative until convergence. Catches relevance that's only visible after reading some items.

**C2. Provisional relevance + verification pass.** [coverage-guarantee: medium-HIGH | complexity: medium]
First pass: provisional relevance based on metadata (filename, structural position). Read top provisional items. Second pass: VERIFY actual relevance from content; promote/demote items in the inventory. Distinguishes provisional from verified relevance.

### Region D — Intuition-based mechanisms

**D1. /intuit invocation embedded in /explore.** [coverage-guarantee: medium-HIGH (depends on /intuit maturity) | complexity: high]
When `/explore` needs relevance scoring, invoke `/intuit` on each candidate. `/intuit` is the project's existing Predictive RC mechanism for real-time hunches; corpus-matched similarity drives the hunch. The project has a Cross-cutting taxonomy entry for `/intuit` exactly so other disciplines can invoke it. Caveat: `/intuit` is still in Phase A; corpus is thin.

**D2. Pattern-match against past /explore runs.** [coverage-guarantee: medium | complexity: medium]
For similar past inquiries, look at which items they read at depth; treat those item-types as plausibly relevant here. Variant of /intuit's corpus-match. Requires the corpus to grow.

### Region E — Force-read mechanisms (relevance-after-the-fact)

**E1. Force-read everything to D2 minimum.** [coverage-guarantee: HIGH (for in-scope items) | context cost: high | complexity: low]
Don't pre-filter. Read every surfaced item to D2 content depth (functional one-line per spec §2.3). Then judge relevance from actual content rather than from metadata. Trades context cost for relevance-judgment quality.

**E2. Force-read within budget; rank after.** [coverage-guarantee: medium-HIGH | complexity: low]
Read as much as context allows; do relevance ranking from actual content at the end. Variant of E1 with explicit budget control. The output's relevance annotations are based on real reads, not metadata guesses.

### Region F — Decompose-the-territory mechanisms

**F1. Stratified-sampling across strata.** [coverage-guarantee: medium | complexity: medium]
Identify strata in the territory (directories, file types, topic clusters); ensure at least 1 read from each stratum. Coverage-guaranteeing for strata; doesn't directly address relevance, but prevents systematic stratum-blind misses.

**F2. Per-sub-question /explore.** [coverage-guarantee: HIGH | complexity: high]
Use `/decompose` to break the question into N sub-questions; run a per-sub-question /explore on each. Each sub-explore has its own relevance criteria. Comprehensive but expensive; potentially blurs /explore and /decompose boundaries.

### Region G — Lifting existing /explore signals into active filters

**G1. Promote §2.1's "relevance" signal from passive to active.** [coverage-guarantee: HIGH | complexity: low]
The current `/explore` spec lists "relevance" as one of FIVE signal types in §2.1 (Signal Detection): density, novelty, relevance, tension, absence. Currently relevance is implicit/passive. Make it ACTIVE: items with low relevance signal don't get probed; items with high relevance get probed first. This converts an existing spec concept into a working filter without adding new vocabulary.

**G2. Mandatory relevance-justification per probed item.** [coverage-guarantee: medium-HIGH (audit) | complexity: low]
Every probed item must have an explicit relevance-justification recorded in the output: "probed because: matches criterion X" or "highest relevance-score in the inventory." Forces the LLM to articulate why each read happened. Audit-enforceable.

### Region H — Meta-mechanism

**H1. Add an explicit "Relevance Selection" step to the canonical cycle.** [coverage-guarantee: HIGH (structural) | complexity: medium]
Currently §3.4's canonical cycle is: Scan → Signal Detection → Resolution Management → Probe → Update Frontier → Update Confidence → Assess Convergence. Relevance is implicit in Signal Detection. Adding a separate "Relevance Selection" step (between Signal Detection and Probe) makes the operation visible and mandatable. The step's content: apply the relevance criteria (Region A) to score (Region B) the signal-flagged items; pass top-scored items to Probe; record relevance scores in telemetry.

### Region I — Boundary clarifications (the two distinguishing axes)

**I1. Filter vs annotation — explicit spec distinction.** [coverage-guarantee: indirect | complexity: low]
The current `/explore` spec conflates relevance-as-signal (§2.1) with relevance-as-annotation (§2.2). They are different operations. Filter: gates which items get read. Annotation: labels items in the output. The spec should say which is which. This isn't a mechanism by itself; it's a structural clarification that makes other mechanisms placeable.

**I2. Listing vs consumption — explicit spec distinction.** [coverage-guarantee: indirect | complexity: low]
Listing surfaces existence (item X is present); consumption reads X's content. The prior finding mandated listing; the user pointed out listing alone doesn't ensure consumption of relevant items. Making this distinction explicit in the spec prevents repeating the same misframing in future enhancements.

### Region J (jump scan) — Less-obvious

**J1. User-feedback mid-flight relevance steering.** [coverage-guarantee: HIGH | complexity: medium]
After the initial scan, `/explore` PAUSES, presents the top-10 candidates by provisional relevance, and asks the user: "which of these should I read?" Human-in-loop relevance selection. Matches the project's L0-L1 calibration philosophy (per `nav_north_star.md`'s "manual-trigger v1 is acceptable").

**J2. Inquiry-type-keyed relevance defaults.** [coverage-guarantee: medium | complexity: medium]
Different inquiry types (codebase reading vs design decision vs literature review) have different relevance defaults. A taxonomy could prescribe defaults per type. Useful if the project has stable inquiry-type categories; speculative otherwise.

---

## Signal Log

| Signal | Type | Probed? | Reasoning |
|---|---|---|---|
| Two orthogonal axes (filter/annotation; listing/consumption) | density | YES | I1 + I2 surfaced; these are structural distinctions the prior finding conflated |
| /explore's §2.1 already names "relevance" as a signal | absence (of utilization) | YES | G1 — the spec mentions relevance but treats it passively; activating it is a low-complexity high-leverage move |
| /intuit is the project's existing relevance mechanism | density | YES | D1 — embedding /intuit is structurally available but high-complexity |
| Author-declared criteria extends the canonical-source registry | density (cross-finding) | YES | A3 — natural extension of prior finding's mechanism |
| Multiple mechanisms target the same axis (A1, A2, A3, A4) | density | YES | All produce "relevance criteria"; differ in source (Question/Goal-derived vs author-declared vs decomposed) |
| Force-read trades context for judgment-quality | tension | YES | E1, E2 — high context cost but bypasses metadata-only judgment |
| Multi-pass refinement vs single-pass | tension | YES | C1, C2 — iterative quality improvement vs single-pass simplicity |
| Mid-flight user steering | novelty | YES (jump-scan) | J1 — matches manual-v1 philosophy; not currently in /explore |
| The PRIOR finding's meta-failure | absence (in this exploration's own approach) | YES (deliberate) | Captured explicitly in the territory overview |
| Filter vs annotation conflation | tension | YES | I1 — the existing spec has this conflation |

**Jump scan performed:** Yes — Region J surfaced two less-obvious candidates (user-feedback steering; inquiry-type defaults). Neither dominates the design space but both extend it. Region J also surfaced a META observation: the boundary clarifications in Region I are not mechanisms themselves but spec hygiene that enables other mechanisms to be placed correctly.

**Meta-failure mode observed and avoided:** This exploration deliberately avoided anchoring on the user's prior "tree command" or any single mechanism. The candidate set spans 10 regions covering filter mechanisms, scoring mechanisms, refinement mechanisms, intuition mechanisms, force-read mechanisms, decomposition mechanisms, signal-lifting mechanisms, the meta-mechanism (new cycle step), boundary clarifications, and jump-scan novelties. The prior finding's fixation on a single tactical answer is named explicitly in the territory overview.

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| Region A (criteria extraction) | scanned-to-confirmed | A1, A2, A3 well-grounded in existing /explore spec patterns; A4 depends on /decompose interaction |
| Region B (score-and-rank) | scanned | B1, B2, B3 — standard mechanisms; complexity-vs-coverage trade-off is the choice |
| Region C (multi-pass) | scanned | C1, C2 — known patterns from other ML/retrieval domains |
| Region D (intuition) | scanned | D1, D2 — depend on /intuit maturity; D1 is structurally clean but practically dependent on Phase A+ /intuit |
| Region E (force-read) | scanned | E1, E2 — context-cost trade-off; user said cost was OK previously |
| Region F (decomposition) | scanned | F1, F2 — F1 is simple; F2 is comprehensive but expensive |
| Region G (lifting signals) | confirmed | G1 directly extends existing §2.1 mechanism; G2 is audit-style |
| Region H (meta-mechanism) | confirmed | Adding a cycle step is a structural change with clear placement |
| Region I (boundary clarifications) | confirmed | Spec hygiene; not a mechanism but a prerequisite |
| Region J (jump-scan) | scanned | J1 matches project philosophy; J2 is speculative |

---

## Frontier State

**Stable at coarse resolution.** 10 regions plus jump-scan surface are mapped at D2. The major directions visible:

- The DECISION the user is asking for sits at the intersection of: (i) which axis to address (filter vs annotation; listing vs consumption); (ii) which mechanism kind (criteria extraction vs score-and-rank vs intuition vs force-read vs multi-pass); (iii) where in the spec it lives (Step 0 vs cycle step vs annotation layer); (iv) how the structural mandate is enforced (audit, telemetry, or just spec language).

- The PRIOR finding picked one tactical mechanism (mandatory listing) without addressing these axes. The user's correction reorients the inquiry toward relevance-selection as the structural problem.

- Multiple mechanisms compound (e.g., A1 produces criteria → G1 uses criteria as active filter → C1 refines across passes). The sensemaking phase will need to adjudicate which combination is the right answer.

Frontier is open at the next resolution layer:
- Which mechanism in Region A produces the criteria? (A1 derive-from-question, A3 author-declared, A4 sub-question-bearing — each has different upstream dependencies).
- Once criteria exist, which application mechanism uses them? (G1 lift existing signal, H1 new cycle step, B1 score-threshold).
- Does the mechanism need /intuit or can it work without?
- Is force-read (Region E) a complement or alternative to the criteria-driven path?

---

## Gaps and Recommendations

**Frontier questions handed to downstream disciplines:**

1. **For sense-making:** Which mechanism KIND is the right primary answer? The candidates split into three families: (i) criteria-driven (A + G/H apply criteria) — most aligned with project's deterministic/transparent ethos; (ii) force-read (E) — context-heavy but bypasses the criteria-quality problem; (iii) iterative refinement (C) — more sophisticated. Sensemaking must adjudicate among families before picking a specific mechanism.

2. **For sense-making:** Is the answer a SINGLE mechanism or a COMPOUND? The prior finding's mistake was treating one mechanism as primary. This finding's risk is the opposite: treating "compound everything" as the answer (which fails the "simple" constraint from the prior tactical finding). The right resolution preserves minimum-sufficient.

3. **For sense-making:** What's the relationship between this finding's mechanism and the prior finding's filesystem listing? Listing is INPUT to relevance-selection (you need to see what exists before you can judge what's relevant). The relationship is not "listing is replaced by relevance"; it's "listing feeds relevance-selection." Sensemaking should make this composition explicit.

4. **For sense-making:** Filter vs annotation — should this finding commit to ONE axis or address both? They're different operations; mixing them risks repeating the prior conflation. Likely: commit to filter (the user's correction is about consumption, which is a filter operation); annotation stays as the existing §2.2 layer.

5. **For decompose:** If sensemaking commits to a compound (e.g., A1 + G1 + C1), the pieces have natural sub-decomposition. If it commits to a single primary, decomposition is lighter.

6. **For innovate:** Concrete spec-edit text for the chosen mechanism(s). Cross-references to the criteria-mechanism, the cycle step (if H1), the telemetry (if audit-enforced), the prior canonical-coverage finding (for registry integration), and the prior identity-refresh finding (for kinds-of-mapping per inquiry type).

7. **For td-critique:** Multi-axis prosecution depth check is essential here — the prior finding failed precisely because critique didn't probe the "does listing actually solve the user's problem?" question deeply enough. This finding's critique must explicitly ask: "is the recommended mechanism actually addressing relevance-selection, or is it another listing-style misframing?"

**Deferred signals (not probed at this resolution):**
- Whether `/intuit` is mature enough to be a load-bearing dependency (Phase A constraint).
- Whether decomposing-the-question-first changes /MVL+'s pipeline order (D before E — currently E first).
- Cross-discipline relevance-selection patterns — is this a /explore-only concern or do other disciplines have the same problem?

---

## Telemetry

**Base metrics:**
- Mode: possibility
- Entry point: frontier-first
- Cycles run: 3 (broad scan → adjacent-region probes → jump-scan)
- Candidates generated: ~17 distinct (15 listed in inventory + 2 boundary clarifications)
- Signals detected: 10; probed: 9; deferred: 1
- Resolution progression evidence: coarse-only (D2)
- Frontier state: stable at coarse resolution
- Discovery rate: declining (cycle 3's jump-scan produced 2 surfaces and 1 meta-observation rather than a new region)
- Convergence criteria: frontier stability ✓; declining discovery rate ✓; bounded gaps ✓
- Jump-scan performed: ✓
- Failure modes checked: Premature depth (NO), Surface-only scanning (NO), False confidence (mitigated via deliberate anti-fixation framing), Completeness bias in possibility mode (NO — explored both Generator-style and Framer-style mechanisms), Open→closed drift (NO), Silent boundary-discovery (NO), Negative-space silent drop (NO)

**Possibility-mode completeness-before-novelty check:** Standard/obvious approaches (A1 criteria-from-question, B1 score-threshold, E1 force-read) surfaced BEFORE novel ones (J1 mid-flight steering, H1 new cycle step). ✓

**Anti-fixation discipline:** This exploration explicitly avoided over-anchoring on the user's prior hints. The candidate set spans 10 regions; no single mechanism dominates the inventory.

---

## Self-Assessment

**Overall: PROCEED.** Sufficient coverage at coarse resolution; convergence criteria met with jump-scan; surround layer included (existing /explore spec + /intuit + canonical-source registry from prior finding); possibility-mode completeness rule honored; no failure modes fired; the meta-failure mode (over-fixation on user's example) was explicitly avoided by the entry-point choice (frontier-first, not signal-first) and by the deliberate enumeration across 10 regions.

Downstream consumers (sense-making, decompose, innovate, critique) should treat this map as a complete inventory of relevance-selection mechanisms at D2. The load-bearing decision for sensemaking is family-selection (criteria-driven vs force-read vs iterative-refinement) BEFORE specific-mechanism-selection.
