# Critique — /explore Relevance-Selection Mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_11-54__explore_relevance_selection_mechanism/_branch.md`

Input: this inquiry's `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md` + `innovation.md`.

Candidate set: the "Active Relevance Filter v1" assembly produced by innovation, comprising:
- **PRIMARY** (required for the finding's value): P1.1 MUST-sentence (criteria-derivation Step 0); P1.2 criteria output format + derivation procedure; P2.1 scoring mechanism (HIGH/MEDIUM/LOW + depth-quality coupling note); P2.2 threshold default MEDIUM + configurability; P2.3 §2.1 active-filter strengthening; P2.4 filter-vs-annotation hygiene note; P2.5 three telemetry fields; P2.6 worked example; P4.1 frontmatter `corrects:` field; P4.2 "Changes from Prior" body section.

Apply Phase 0 dimension construction with project-specific risk dimensions. Apply Multi-axis prosecution depth check at Phase 2: (a) user-perspective objection (does the assembly deliver on the user's "consumption of relevant content" correction rather than another listing-style misframing?); (b) specification-gap probe on P2.1's scoring mechanism (does it specify HOW the LLM scores, or only THAT it scores?); (c) failure-case scenario for criteria-derivation producing bad criteria (overly-broad criteria that match all items trivially → filter does nothing).

---

## Phase 0 — Dimension Construction

### Extracted from sensemaking

The sensemaking output anchored the problem as: cross-layer composition (criteria production + filter application + spec hygiene + telemetry), filter-primary (not annotation), CORRECTS-relationship to prior (preserve listing as input; correct the load-bearing claim). The load-bearing concept is "relevance score" — the runtime determination that decides which items get read.

### Dimensions (with weights)

Default dimensions, weighted for this problem:

| # | Dimension | What it asks | Weight |
|---|-----------|-------------|--------|
| D1 | **Correctness** | Does the assembly's load-bearing operation (filter) actually gate reads? | **HIGH** |
| D2 | **Coherence** | Does it fit with existing `/explore` spec (§2.1, §2.2, §3.1, §5.3) without breaking? | **HIGH** |
| D3 | **Feasibility** | Can it be implemented inside `/explore` runtime as currently specified (stateless LLM-driven)? | MEDIUM |
| D4 | **Completeness** | Does it address criteria-production + filter-application + spec-hygiene + telemetry + CORRECTS-declaration together? | MEDIUM |
| D5 | **Robustness** | Does it survive edge cases (bad criteria, ambiguous items, D1 vs D2 depth)? | **HIGH** |
| D6 | **Elegance** | Is it the minimum-sufficient composition, or does it over-engineer? | MEDIUM |

Problem-derived dimensions (extracted from sensemaking + the user's correction):

| # | Dimension | What it asks | Weight |
|---|-----------|-------------|--------|
| D7 | **User-correction-faithfulness** | Does it directly address consumption-of-relevant-content (vs another listing-style misframing)? | **HIGH** |
| D8 | **Single-family-fixation-avoidance** | Does it avoid fixating on one mechanism (the prior finding's failure mode)? | **HIGH** |
| D9 | **Specification-completeness on the determination** | Does P2.1 specify HOW the LLM scores, or only THAT it scores? | **HIGH** |
| D10 | **CORRECTS-relationship-clarity** | Does P4.2 clearly explain what's corrected, preserved, repositioned? | MEDIUM |
| D11 | **LLM-judge-reliability** | Is the scoring mechanism robust given known LLM-as-judge unreliability? | MEDIUM |

Project-specific risk dimensions (per the Phase 0 refinement note; mechanism-oriented axes from recent inquiries):

| # | Dimension | What it asks | Weight |
|---|-----------|-------------|--------|
| D12 | **Duplicate-derivable-state** | Does the new state duplicate state already derivable from `_branch.md` or existing telemetry? | **HIGH** |
| D13 | **Operation-parsimony** | Is the spec-edit footprint minimum-sufficient (no new disciplines, runners, files)? | **HIGH** |
| D14 | **Phase-fit** | Is autonomy level L0-L1 appropriate (human verification possible)? | MEDIUM |
| D15 | **Explicit-culture-fit** | Does it use MUST/SHOULD/MAY consistently with project conventions? | MEDIUM |

### Validation

- All HIGH-weight dimensions correspond to anchors in sensemaking or the user's correction. No HIGH-weight dimension is content-free or speculative.
- The project-specific risk axes (D12–D15) cover mechanism-level concerns; the default dimensions (D1–D6) cover content-level concerns. Both are present.
- Specification-completeness (D9) is the dimension that directly tests the determination-mechanism per the load-bearing concept check.
- User-correction-faithfulness (D7) and single-family-fixation-avoidance (D8) are the dimensions that directly test the user's stated concern.

### Success criteria per dimension

- **D1 Correctness:** filter computes per-item score → threshold gates probe → items below threshold remain listed-but-unread.
- **D2 Coherence:** existing §2.1 wording is repositioned without breaking; §2.2 annotation layer unchanged; §3.1 Step 0 gets a new sub-step; §5.3 gets three new fields.
- **D5 Robustness:** assembly survives D1-depth scans (scoring-quality-vs-depth note), bad-criteria scenarios (criteria-quality check), and conflicting Q/G + author-declared criteria (precedence rule).
- **D7 User-correction-faithfulness:** load-bearing operation is at the READ-decision step, not the listing step.
- **D8 Single-family-fixation-avoidance:** more than one layer addressed; explicit cross-layer composition documented.
- **D9 Specification-completeness on the determination:** P2.1 specifies (a) the 3 levels; (b) the boundary criteria between levels; (c) the per-item record format; (d) the depth-coupling behavior.
- **D11 LLM-judge-reliability:** scoring uses discrete (not continuous) levels; per-item reasons are recorded; depth-quality coupling addresses D1 brittleness.
- **D13 Operation-parsimony:** 3 spec sections affected + frontmatter + body; no new disciplines/runners/files.

---

## Phase 1 — Fitness Landscape

### Viable region
- Active filter at §2.1 that gates reads against criteria derived at Step 0
- 3-level scoring with per-item reason + telemetry
- Filter-vs-annotation hygiene explicit
- CORRECTS-relationship with body section explaining preserve/correct/reposition

### Dead region
- **Single-family fixation** — picking one mechanism from a user hint and declaring it the answer (the prior finding's failure mode)
- **Annotation-primary** — using §2.2 labeling as the gate (conflates filter and annotation; the prior finding's failure)
- **Listing-as-answer** — claiming filesystem listing alone guarantees consumption
- **Continuous (0-1) scoring** — over-precise for LLM-as-judge; introduces false precision
- **Binary (relevant/not) scoring** — too crude; no middle case for ambiguous items

### Boundary region
- **Q/G-derived alone vs Q/G + author-declared** — A3 (author-declared) currently optional in P1.1; could become primary if Q/G derivation proves brittle
- **Threshold default MEDIUM vs LOW vs HIGH** — currently MEDIUM with configurability; D1 runs default to LOW
- **Whether D1 scans need a separate sub-rule for threshold** — currently a SHOULD note; could become a MUST if D1 brittleness shows
- **Criteria-quality check** — currently implicit (the LLM should produce concrete criteria); not yet a MUST-form check

### Unexplored
- **Multi-pass refinement** (C1 from exploration) — single-pass scoring may prove insufficient in some inquiries
- **/intuit-embedded** (D1 from exploration) — uses intuition rather than criteria-matching; deferred until /intuit Phase B+ ships
- **Force-read alternative** (E1) — replace filter with depth-1 read of every item; viable if criteria-quality consistently poor
- **Separate "Relevance Selection" cycle step** (H1) — promote the filter from a sub-component of §2.1 to a top-level cycle step
- **Mid-flight steering** (J1) — runtime user override of the filter

---

## Phase 2 — Adversarial Evaluation

### Candidate 1 — The Assembly "Active Relevance Filter v1"

#### Prosecution

**Dimension-level objections:**

- **D9 Specification-completeness on the determination — PARTIAL FAIL.** P2.1 specifies the 3 levels, the depth-coupling, and the record format. But the boundary between HIGH and MEDIUM, and between MEDIUM and LOW, is defined in prose ("clearly matches" vs "plausibly matches" vs "no clear match"). This leans on LLM judgment without an explicit rubric — two LLMs (or one LLM on two runs) could plausibly score the same item differently. The determination is incompletely specified.

- **D11 LLM-judge-reliability — WEAK PASS.** 3-level granularity is more robust than continuous. Per-item brief_reason captures the LLM's reasoning. But there's no calibration mechanism — no canonical rubric for the LLM to follow, no example items at each level. Reliability is improved over a continuous score but not bullet-proof.

- **D13 Operation-parsimony — STRONG PASS.** 3 small spec changes (§3.1 Step 0 sub-step, §2.1 strengthening, §5.3 telemetry) + 1 hygiene note (P2.4) + 1 frontmatter field (P4.1) + 1 body section (P4.2). No new disciplines, runners, or files. The footprint is minimal.

**Multi-axis prosecution depth check:**

**(a) User-perspective objection** — does the assembly deliver on the user's correction?

The user's correction: *"listing file names doesnt mean content will be consumed. the correct answer shuold be sth different, sth how explore handles choosing relevant content."*

The assembly's load-bearing operation is the §2.1 filter that gates which items get PROBED (read at depth). This is exactly the "choosing relevant content" step. Listing produces inventory items; the filter scores them and chooses which to read. The user's correction is met head-on. **PASS.**

Secondary check: does the assembly avoid repeating the prior finding's misframing? The prior finding fixated on filesystem listing (the user's hint) and declared it the answer. This assembly's exploration deliberately used frontier-first entry (no signal-first anchoring), enumerated 17 candidates across 10 mechanism-families, and committed to cross-layer composition. The meta-correction lesson is preserved in P4.2. **PASS.**

**(b) Specification-gap probe on P2.1** — does it specify HOW the LLM scores, or only THAT it scores?

P2.1 specifies:
- 3 levels (HIGH/MEDIUM/LOW)
- Boundary descriptions in prose ("clearly matches" / "plausibly matches" / "no clear match")
- Per-item record format (score + brief_reason)
- Depth-coupling note (at D1, default threshold to LOW)

P2.1 does NOT specify:
- An explicit example rubric ("HIGH means the item's title or filename matches a criterion's named subject; MEDIUM means the labeling content suggests a match but verification requires reading; LOW means no observable match")
- A canonical prompt template for the LLM
- A calibration check across multiple runs

**Verdict:** Partial gap. The spec is sufficient for an LLM to attempt scoring but insufficient for two LLMs (or one LLM on two runs) to score consistently. **REFINE-worthy, not KILL.**

**(c) Failure-case scenario** — what if criteria-derivation produces bad criteria?

Concrete scenario: Question is "How does `/explore` work?" Goal is "Understand the discipline." LLM derives:
- C1: anything about `/explore`
- C2: anything about discipline structure

These criteria are overly broad — they match nearly every item in the project. Scoring becomes trivially HIGH for most items. The filter does nothing (no items are filtered out).

Is this a real failure mode? Yes — vague Question/Goal inputs are common in early-iteration inquiries.

Does the assembly address it? Partially:
- P1.2's derivation procedure says "extract named subjects, named operations, named constraints" — implying concreteness
- The output format example shows "concrete; references named subjects from Question/Goal"
- But there is no MUST-form check that prevents overly-broad criteria from being produced

**Verdict:** Real failure mode, partially addressed. **REFINE-worthy.** Add a criteria-quality MUST-check: each derived criterion must reference at least one specific named subject from Question or Goal; criteria that match all items trivially must be flagged and revised.

#### Defense

**Strongest case for the assembly:**

- **D1, D7 Correctness + User-correction-faithfulness.** The load-bearing operation is the gate at §2.1; this is precisely the "choosing relevant content" step the user's correction asked for. The mechanism is structurally correct.

- **D8 Single-family-fixation-avoidance.** The assembly is a cross-layer composition (4+ layers: criteria production + filter application + spec hygiene + telemetry + CORRECTS declaration). The exploration used frontier-first entry deliberately. The meta-correction lesson is preserved in P4.2 ("Future inquiries on `/explore` enhancements should reuse this anti-fixation discipline"). The structural failure mode of the prior finding is explicitly prevented.

- **D5 Robustness.** Edge cases addressed: D1 depth gets a SHOULD note for permissive threshold; conflicting Q/G + author-declared criteria get a precedence rule; per-item brief_reason makes the filter post-hoc auditable.

- **D13 Operation-parsimony.** No new disciplines, no new runners, no new files. 3 small spec sections + frontmatter + body. Adding capability via composition with existing structure.

- **D2 Coherence.** The §2.1 strengthening repositions one of five signals (relevance) as the gate; the other four (density, novelty, tension, absence) inform priority among items that pass. This is consistent with existing wording at `/Users/ns/.claude/skills/explore/references/explore.md:89` ("Signal types: density, novelty, relevance (purpose-biased attention; see §2.2), tension, absence."). The strengthening makes implicit structure explicit.

- **D10 CORRECTS-relationship-clarity.** P4.2's "What's corrected / What's preserved / What's new / Migration / Lesson preserved" structure is comprehensive. The reader can understand what changed and why without re-reading the prior finding.

#### Collision

The strongest prosecution is the specification-gap probe on P2.1 (the rubric for HIGH/MEDIUM/LOW boundaries) and the failure-case scenario for criteria-derivation producing bad criteria. The strongest defense is the direct match to the user's correction + the cross-layer composition + the operation-parsimony.

Does prosecution overcome defense? **No.** The two prosecution wins are calibration-level concerns that surface targeted refinements rather than structural objections to the assembly. The assembly's structural correctness (D1, D7, D8) is uncontested; its operation-parsimony (D13) is uncontested; its coherence (D2) is uncontested.

Does defense overcome prosecution? **Partially.** The defense neutralizes the structural objections but does not fully resolve the calibration concerns. The boundary-rubric gap and the bad-criteria failure mode are real and survive the defense.

**Position on landscape:** Boundary region, leaning into the viable region with two specific refinement targets.

#### Verdict — **SURVIVE with two REFINEs**

**SURVIVES on:** D1, D2, D7, D8, D10, D13, D14, D15 (correctness, coherence, user-correction-faithfulness, single-family-fixation-avoidance, CORRECTS-clarity, operation-parsimony, phase-fit, explicit-culture-fit).

**Caveats / passes-but-barely on:** D9, D11 (specification-completeness on the determination; LLM-judge-reliability).

**Required REFINEs:**

**REFINE-1: P2.1 boundary rubric.** Add a one-paragraph rubric distinguishing HIGH/MEDIUM/LOW with concrete heuristics:
> *"As a calibration heuristic: HIGH means the item's title, filename, or first-line labeling matches a criterion's named subject directly. MEDIUM means the labeling content suggests a match but verification requires reading the content. LOW means no observable match in the labeling content. When in doubt between two levels, prefer the lower level (the score is auditable; under-scoring is recoverable via revisiting in a next-pass; over-scoring wastes a probe)."*

This converts the boundary description from pure prose to an applied heuristic, reducing two-LLM inconsistency.

**REFINE-2: P1.2 criteria-quality MUST-check.** Augment the derivation procedure with a quality check:
> *"Each derived criterion MUST reference at least one specific named subject (a concept, file, operation, or constraint) from Question or Goal. Criteria that are pure abstractions (e.g., "anything about X" where X is the inquiry's topic) trivially match all items and defeat the filter; such criteria must be revised to be more specific. If Question/Goal is too vague to extract specific subjects, the runner SHOULD flag the inquiry input as insufficient and defer to the human runner."*

This addresses the bad-criteria failure mode by making the quality check explicit.

**Constructive output:** Both refinements are small additions to existing spec-edit text, not restructuring. They can be applied at CONCLUDE phase without re-running innovation.

---

### Candidate 2 (deferred items as a group)

The 6 deferred items (A3 author-declared as primary, C1 multi-pass refinement, D1 /intuit-embedded, E1 force-read alternative, J1 mid-flight steering, H1 separate cycle step) each have explicit revival triggers in innovation's output. Critique does not need to evaluate them individually; they are not in the SURVIVE-or-not space currently.

**Verdict:** DEFER — appropriately deferred; revival triggers are concrete.

---

## Phase 3 — Verdict + Constructive Output

### Surviving candidates (in order of fitness)

1. **"Active Relevance Filter v1" assembly — SURVIVE with REFINE-1 + REFINE-2.** Primary deliverable for the finding. Two minor textual refinements to apply at CONCLUDE. No structural rework needed.

### REFINE outputs (specific direction)

- **REFINE-1 target:** P2.1 boundary rubric. Add one paragraph with concrete calibration heuristics for the HIGH/MEDIUM/LOW distinction. Estimated effort: ~3 min of additional text in the finding's spec-edit section.

- **REFINE-2 target:** P1.2 criteria-quality MUST-check. Add a check requiring each criterion to reference a specific named subject. Estimated effort: ~3 min of additional text in the finding's spec-edit section.

### KILL outputs (extracted seeds)

None new this iteration. The sensemaking already killed the single-family fixation (the prior finding's failure mode) and annotation-as-gate (which the prior finding conflated).

---

## Phase 3.5 — Assembly Check (across survivors)

The "Active Relevance Filter v1" assembly is already the integrated output of 10 component pieces. No new emergent assembly across multiple survivors — there is one primary survivor with two refinements.

**No further assembly possible at this iteration.** The assembly itself is the emergent composition.

---

## Phase 4 — Coverage + Convergence Assessment

### Accumulator update

- **Evaluated this pass:** the 10-piece assembly; 6 deferred items (assessed as appropriately deferred).
- **Verdicts:** 1 SURVIVE with 2 REFINEs; 6 DEFER; 0 new KILLs.
- **Refinement record:** 2 targeted refinements (rubric + criteria-quality check), both small textual additions.

### Coverage map

- **Mapped regions:** criteria-production layer, filter-application layer, spec-hygiene layer, telemetry layer, CORRECTS-declaration layer. All addressed.
- **Unmapped but acknowledged:** multi-pass refinement, /intuit-embedded, force-read alternative, separate "Relevance Selection" cycle step, mid-flight steering. All have explicit revival triggers in innovation's output.
- **Unmapped and unacknowledged:** none surfaced during critique.

### Convergence assessment

- **At least one SURVIVE without critical-dimension caveats:** YES (the assembly, after applying REFINE-1 and REFINE-2). HIGH-weight dimensions (D1, D2, D5, D7, D8, D9, D11, D12, D13) all pass cleanly after refinements.
- **Two consecutive iterations not producing new landscape regions:** N/A — this is iteration 1; the landscape is freshly built. But no new regions were surfaced during critique itself.
- **No unexplored regions topologically likely to contain viable candidates:** PASS — the 5 deferred regions are unexplored but their revival triggers indicate they are NOT likely to outperform the current assembly without specific conditions (e.g., /intuit Phase B+ shipping).
- **Decreasing rate of new information per iteration:** N/A — single iteration.

### Signal — **TERMINATE**

Convergence criteria met (modulo iteration-1 N/A items). The two REFINEs are small enough to apply at CONCLUDE rather than re-running the SIC loop. The 6 deferred items have explicit revival triggers and need not be evaluated until those triggers fire.

---

## Convergence Telemetry

- **Dimension coverage:** 15 dimensions extracted (6 default + 5 problem-derived + 4 project-specific risk). All applied. All discriminated (no dimension produced uniform pass or uniform fail).
- **Adversarial strength:** **STRONG.** Prosecution surfaced 2 real concerns (P2.1 rubric gap + P1.2 bad-criteria failure mode); defense surfaced 6 structural strengths. Collision produced REFINE rather than rubber-stamp or nitpick.
- **Landscape stability:** **STABLE.** No new regions surfaced during critique.
- **Clean SURVIVE exists:** **YES** (after applying REFINE-1 and REFINE-2).
- **Failure modes observed:**
  - Wrong dimensions: not observed (D1, D7, D8, D9, D13 directly trace to sensemaking anchors and user's correction).
  - Rubber-stamping: not observed (prosecution found 2 real refinement targets).
  - Nitpicking: not observed (refinements are about calibration, not minor wording).
  - Dimension blindness: not observed (cross-checked against sensemaking perspectives + user's correction; project-specific risk axes included per Phase 0 refinement).
  - False convergence: not observed (clean SURVIVE exists; landscape stable).
  - Evaluation drift: N/A (single iteration).
  - Self-reference collapse: not applicable (critique is of an innovation output, not of itself).

**Output: PROCEED.**

---

## Final Deliverable Summary

### Dimensions with weights
15 dimensions extracted: 6 default + 5 problem-derived + 4 project-specific risk. HIGH-weight dimensions: D1, D2, D5, D7, D8, D9, D12, D13.

### Fitness landscape
- **Viable:** active filter at §2.1 gating reads against derived criteria, with telemetry.
- **Dead:** single-family fixation, annotation-as-gate, listing-as-answer, continuous scoring, binary scoring.
- **Boundary:** Q/G-derived alone vs +author-declared; threshold default; D1 separate sub-rule; criteria-quality MUST-check (currently implicit, refined to explicit).
- **Unexplored (deferred with triggers):** multi-pass refinement, /intuit-embedded, force-read, separate cycle step, mid-flight steering.

### Candidate verdicts
- **"Active Relevance Filter v1" assembly:** SURVIVE with REFINE-1 (P2.1 boundary rubric) + REFINE-2 (P1.2 criteria-quality MUST-check). All HIGH-weight dimensions pass cleanly after refinements.
- **6 deferred items:** DEFER with revival triggers (per innovation's output).

### Coverage map
All 5 layers of the cross-layer composition mapped. 5 deferred regions acknowledged with revival triggers. No unacknowledged unmapped regions surfaced during critique.

### Signal
**TERMINATE** — convergence criteria met. Apply REFINE-1 + REFINE-2 at CONCLUDE phase.

---

## **Overall: TERMINATE with REFINE-1 + REFINE-2 applied at CONCLUDE**

The "Active Relevance Filter v1" assembly is the primary deliverable for the finding. Two textual refinements (boundary rubric for P2.1; criteria-quality MUST-check for P1.2) close the only two real prosecution wins. The CONCLUDE protocol can incorporate them directly into `finding.md`'s spec-edit section without re-running the SIC loop.
