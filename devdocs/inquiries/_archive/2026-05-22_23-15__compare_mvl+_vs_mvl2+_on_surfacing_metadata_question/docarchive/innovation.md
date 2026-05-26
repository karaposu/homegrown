# Innovation — Compare MVL+ vs MVL2+ on the surfacing-metadata question

## User Input

(from `_branch.md`) Compare two findings and verdict which did a better job, with reasoning that distinguishes runner-attributable differences from other-variable differences.

Seed: 9 tiered dimensions (3 HIGH + 3 MEDIUM + 3 LOWER) from Sensemaking + decomposition into 4 pieces (3 scoring pieces + 1 synthesis piece). Generate per-dimension verdict candidates with reasoning and aggregate into a synthesis.

## Phase 1 — Seed (with Methodology-Mode Consideration)

**Inherited methodology mode:** Standard default (balanced 4G + 3F). The seed is "produce per-dimension verdicts with reasoning"; production-task mode where each dimension benefits from at least one Generator (find candidate verdict shape) + one Framer (test under alternative framings).

**Alternative mode considered:** Minimum-mechanism mode (1G+1F). For per-dimension verdicts where evidence is clear from the surfaced items, a single mechanism per dimension might suffice. What follows: terser per-dimension verdicts; risks under-coverage of edge cases.

**Decision:** Standard default. The "and why?" clause from the user demands rich per-dimension reasoning; Minimum-mechanism mode would compress the reasoning below the level the question deserves.

---

## Phase 2 — Generate (per-piece, per-dimension)

### Piece HIGH-weight scoring

#### Dimension 1 — Fidelity to user's named regression risks

**Evidence:**
- MVL2+ (16-00 finding §4 "Exact spec text"): adds two LAYER 1 failure modes at §4.2 — `Recency-Equates-Idleness` and `Recency-Bias-Filter` — with Recognition + Corrective columns; both Correctives anchor to §4.4 asymmetric-failure principle.
- MVL+ (20-35 finding Summary + §3): protects against both regression risks via the existing §4.4 asymmetric-failure principle + an §2.1 explicit non-filtering reaffirmation. Does NOT add named failure modes.

**Mechanism applications:**
- *Domain Transfer:* safety-engineering convention is to NAME failure modes when adding new signal channels. MVL2+ follows this convention; MVL+ does not.
- *Inversion:* "what if the regressions were unnamed?" → that's MVL+'s state. The risks are protected by general principle but not visible as named items in the failure-mode catalog. A future contributor reading §4.2 finds no entry for either of the user's named worries.
- *Lens shifting:* under the "future contributor discoverability" frame, named failure modes are findable by grep + cross-reference; principle-anchored protections require following the principle to its application points.

**Verdict candidate:** **MVL2+ wins decisively.** MVL2+ honors the user's framing by giving each of the two named regression risks a named, observable, recoverable failure mode. MVL+'s protection is structurally sound but doesn't surface the user's worries as findable items.

#### Dimension 2 — Structural defense-in-depth

**Evidence:**
- MVL+ (20-35 finding Summary): "defense-in-depth across two surfaces. Layer 1: §4.4 asymmetric-failure principle. Layer 2: explicit non-filtering reaffirmation at §2.1." Two anchor points for the principle (the existing §4.4 + the new §2.1 reaffirmation).
- MVL2+ (16-00 finding §2 "principle stated at four anchored mentions"): principle stated at §2.1 (Step Refinement body), §1.3 NOT-list (exclusion row), §4.2 Failure mode 8 (Corrective), §4.2 Failure mode 9 (Corrective). Four anchor points.

**Mechanism applications:**
- *Combination:* 4 anchors vs 2 → MVL2+ has stronger defense-in-depth.
- *Extrapolation:* if a future spec edit accidentally removes one anchor, MVL+ retains 50% protection coverage; MVL2+ retains 75%. MVL2+ more robust against spec drift.

**Verdict candidate:** **MVL2+ wins decisively.** Both findings exhibit defense-in-depth; MVL2+'s 4-anchor structure is more robust against future spec drift.

#### Dimension 3 — Convention conformance

**Evidence:**
- MVL+ (20-35 finding §2 Location 1-3): §2.1 sub-paragraph is added immediately after the six-component table (in the body, not as a separate refinement note); §1.3 NOT-list addition is a paragraph after the NOT-list table (not a row in the table); §5.4 row added to the schema table.
- MVL2+ (16-00 finding §4 "Exact spec text"): §2.1 addition is an explicit Step Refinement note with italic prefix per `docs/step_refinement.md` (`*Refinement note (applies at ...):*`); §1.3 NOT-list addition is a 9th ROW in the existing table (not a paragraph); §4.2 failure-mode entries match the existing table's Mode/Recognition/Corrective shape.

**Mechanism applications:**
- *Lens shifting:* under "is this addition recognizable as the project's standard form?" frame, MVL2+ is more visibly conformant — italic prefix is the recognized visual marker.
- *Domain transfer:* documentation conventions favor "add a row to the existing table" over "add a paragraph after the table." MVL2+ matches.
- *Absence Recognition:* MVL+'s NOT-list addition as a paragraph (rather than a row) misses the project's preference for table-shape conformance.

**Verdict candidate:** **MVL2+ wins, with caveat.** Both conform to the placement convention; MVL2+ conforms more visibly to the Step Refinement primitive's typographic convention and the table-shape preference. The MVL+ choice (NOT-list paragraph after table; §2.1 sub-paragraph in body) is also a valid placement under the convention, but is less visibly standard.

---

### Piece MEDIUM-weight scoring

#### Dimension 4 — User-language alignment

**Evidence:**
- MVL+ (20-35 finding §4 Why naming matters): commits `last-edit-time` because "the user's own phrasing ('metadata (last datetime of edit)') matches the observable-fact level; the spec follows the user's language."
- MVL2+ (16-00 finding Sensemaking Ambiguity #1, MEDIUM-confidence resolution): commits `recency annotation` because the field carries a signal, not a source; the implementation (filesystem mtime) is one of several possible recency-signal sources.

**Mechanism applications:**
- *Lens shifting:* under "user reads the spec edit and recognizes their question's phrasing" frame, MVL+'s `last-edit-time` is immediately recognizable.
- *Inversion:* MVL2+'s argument is "name the signal, not the implementation." Inverting: "name the implementation, not the signal" → that's MVL+'s `last-edit-time`. Both are defensible at different layers.
- *Domain transfer:* product-design convention is to use user-language unless precision demands abstraction. MVL2+'s precision argument has structural grounds; the trade-off is real.

**Verdict candidate:** **MVL+ wins, with structural caveat.** User-language alignment is HIGH for MVL+ and LOWER for MVL2+. MVL2+'s structural argument for signal-not-source has merit but operates at a layer the user did not explicitly request alignment with.

#### Dimension 5 — Missingness handling

**Evidence:**
- MVL+ (20-35 finding Summary + §2): "In possibility case, this sub-text does not apply. Candidates are generated, not enumerated from a pre-existing territory; no observable file-system metadata exists for them. The annotation field is absent or N/A in per-item records for possibility-case invocations."
- MVL2+ (16-00 finding §4 + Sensemaking Ambiguity #4 HIGH-confidence resolution): "For items without filesystem backing (possibility-mode candidates, externally-referenced items), emit `{source: none, value: null}` as a first-class value — mandatory per item, never omitted."

**Mechanism applications:**
- *Inversion:* MVL+'s "absent field in possibility-case" produces schema heterogeneity (some entries have the field; some don't). Downstream consumers can't depend on field presence. MVL2+'s mandatory-with-first-class-null produces schema homogeneity.
- *Domain transfer:* database schema design treats "null is information" as a load-bearing pattern. MVL2+ matches; MVL+ does not.
- *Absence Recognition:* what's missing from MVL+ is a positive treatment of possibility-mode items; missingness is silently scoped out rather than reported.

**Verdict candidate:** **MVL2+ wins decisively.** Schema completeness is structurally preferred over schema heterogeneity. The user's question did not name possibility-mode specifically, but the discipline's existing identity (§1.1 verb-meaning includes possibility case) makes possibility-mode handling part of the design contract.

#### Dimension 6 — Reporting completeness

**Evidence:**
- MVL+ (20-35 finding Summary + Next Actions DEFERRED M3): adds §5.4 Trace schema row only. State Summary aggregation (M3) deferred. No Telemetry addition.
- MVL2+ (16-00 finding §4): adds §5.4 Trace schema column + §5.5 State Summary derived row (per-region recency distribution) + §5.6 Telemetry counts. All committed.

**Mechanism applications:**
- *Combination:* MVL2+'s 3 reporting surfaces give fuller downstream pulse-check.
- *Lens shifting:* under "downstream wants a fast aggregate" frame, MVL2+ provides this directly via Telemetry; MVL+ requires the downstream consumer to aggregate the Trace.
- *Inversion:* MVL+'s deferral is a phase-discipline choice (deferred with revival trigger). Is deferral better than commitment? In general, yes — phase-discipline avoids premature commitment. But the State Summary aggregation is mechanical (derived from the Trace), not calibration-dependent; deferring it costs little and gains little.

**Verdict candidate:** **MVL2+ wins, with caveat.** Reporting layer more complete for MVL2+. MVL+'s deferral is structurally defensible (phase-discipline) but the deferred items (M3 = mechanical aggregation) are not calibration-dependent, so the deferral is cautious rather than necessary.

---

### Piece LOWER-weight scoring

#### Dimension 7 — Forward-extension

**Evidence:**
- MVL+ (20-35 finding Summary + §6 "Introduce a named category"): introduces the named category "observable-fact metadata annotations" with 4 defining properties (content-conditioned, labeling-level, non-filtering, downstream-consumable). Future metadata kinds (file-size, line-count, git-tracked-state) extend the category. Multi-surface placement pattern (§2.1 + §5.4 + §1.3) is reusable.
- MVL2+ (16-00 finding Open Questions Research Frontiers): preserves "layered metadata-signal pattern as a template for OTHER metadata channels" as a Research Frontier; does not commit a category at spec time. Justification: single-instance evidence (mtime alone) is insufficient to commit a template.

**Mechanism applications:**
- *Extrapolation:* when the project adds a second metadata channel, MVL+'s named category is reusable as-is. MVL2+'s pattern needs re-derivation (or a follow-up inquiry to commit the template).
- *Absence Recognition:* what's missing from MVL2+ is a structural commitment to forward-extension. MVL+ has this commitment.
- *Inversion:* "what if forward-extension is premature?" MVL2+'s justification (single-instance evidence) has structural merit — committing a category based on one case risks committing the wrong category. Both findings have defensible positions.

**Verdict candidate:** **MVL+ wins decisively.** The named category is a real structural value-add beyond the immediate addition. MVL2+'s phase-discipline is defensible but loses the forward-extension property.

#### Dimension 8 — Decomposition granularity

**Evidence:**
- MVL+ (20-35 state-file Decomposition entry): "5 clusters … 7 pieces (Q1-Q7) with verification criteria. 6 interfaces (I1-I6). DAG dependency order Q7→Q1→Q5→Q2⇄Q3→Q4 (Q6 parallel)."
- MVL2+ (16-00 decomposition.md): 3 pieces (P1 Schema, P2 Rule+Principle, P3 Failure modes); all parallel-feasible.

**Mechanism applications:**
- *Lens shifting:* under "verification criteria density" frame, MVL+'s 7 pieces give more verification anchors per dimension.
- *Inversion:* "what if MVL+ is over-decomposed?" Each piece has independent verification criteria, so the granularity is load-bearing for the verification phase, not arbitrary.
- *Combination:* finer decomposition combines with the more thorough Innovation pass (7 piece-level Inversion-candidates in MVL+); the granularity feeds the methodological rigor.

**Verdict candidate:** **MVL+ wins, slightly.** MVL2+'s 3-piece decomposition is sufficient for the question's scope. MVL+'s 7 pieces are richer but not strictly necessary; the marginal value of the finer granularity is small for a question this size.

#### Dimension 9 — Methodology rigor in pass

**Evidence:**
- MVL+ (20-35 state-file Critique entry): "8 dimensions extracted (D1-D6 default + D7 Identity preservation + D8 Spec evolvability project-specific per Phase 0 refinement). Stake level HIGH; guilty-until-proven-innocent. 16 candidates evaluated (7 principals + 3 innovation-emergent + 2 newly-surfaced emergent + 2 DEFERRED + 1 RESEARCH FRONTIER + Assembly)." Also: "Production-task mode; Standard-default methodology-mode (Contrarian-rethink alternative overridden with structural reason). 7 principal candidates + 7 Inversion-candidates generated for Q1-Q7. Inherited Frame Audit: does not fire."
- MVL2+ (16-00 state-file Critique entry): "7 SURVIVE (3 with minor refinements), 0 KILL; 12 dimensions applied; signal TERMINATE with ranked survivors." Critique extracted 6 default + 6 project-specific risk dimensions = 12 total. Stake level not explicitly committed.

**Mechanism applications:**
- *Combination:* methodology rigor combines stake-level, candidate count, Inversion candidates, audit checks. MVL+'s combination is more rigorous; MVL2+'s combination has more dimension breadth.
- *Lens shifting:* under "process audit" frame, MVL+'s state file shows more explicit process commitments (stake level, methodology-mode override reasoning, Inversion-candidate count per piece).
- *Inversion:* "what if MVL+'s rigor doesn't translate to output quality?" The output comparison (D1-D6) suggests MVL+'s pass rigor does NOT translate proportionally to output quality on the user's specific concerns. Rigor and output-quality are partially decoupled.

**Verdict candidate:** **MVL+ wins, slightly.** MVL+ shows more pass-rigor in the discipline outputs (more candidates, explicit stake level, methodology-mode reasoning). MVL2+ has more dimension breadth at the same critique surface. The user's question is about the FINDING, not the PASS — so this dimension is LOWER weight.

---

### Piece Synthesis

#### Aggregation rule

Apply user-concern-weighted scoring per Sensemaking Ambiguity #3:

- HIGH-weight dimensions (D1, D2, D3): each verdict counts as 3 points.
- MEDIUM-weight dimensions (D4, D5, D6): each verdict counts as 2 points.
- LOWER-weight dimensions (D7, D8, D9): each verdict counts as 1 point.

Tally per finding:

| Dimension | Weight | Winner | Points to winner |
|---|---|---|---|
| D1 Fidelity to named risks | HIGH | MVL2+ | 3 |
| D2 Defense-in-depth | HIGH | MVL2+ | 3 |
| D3 Convention conformance | HIGH | MVL2+ | 3 |
| D4 User-language alignment | MEDIUM | MVL+ | 2 |
| D5 Missingness handling | MEDIUM | MVL2+ | 2 |
| D6 Reporting completeness | MEDIUM | MVL2+ | 2 |
| D7 Forward-extension | LOWER | MVL+ | 1 |
| D8 Decomposition granularity | LOWER | MVL+ | 1 |
| D9 Methodology rigor in pass | LOWER | MVL+ | 1 |

**Totals:**
- MVL2+: 3 + 3 + 3 + 2 + 2 = **13 points**
- MVL+: 2 + 1 + 1 + 1 = **5 points**

#### Sensitivity check (equal weighting)

Under equal weighting (each dimension × 1):
- MVL2+: 5 wins (D1, D2, D3, D5, D6)
- MVL+: 4 wins (D4, D7, D8, D9)

MVL2+ still wins; margin narrows from 13-5 to 5-4.

#### Overall verdict candidate

**MVL2+ wins the comparison overall.**

Under user-concern-weighted scoring: 13-5 (decisive).
Under equal weighting: 5-4 (narrow but still MVL2+).
Under no defensible weighting does MVL+ win overall — even if forward-extension and user-language alignment were promoted to HIGH weight (which would be a weighting choice the user didn't signal), MVL+'s 4 wins still face MVL2+'s 5 wins.

#### Runner-attribution hypothesis

The /MVL+ runner uses /explore as its upstream discipline; /MVL2+ uses /surfacing. The two upstream disciplines have different orientations:

- **/explore** maps unknown territory through scan-signal-probe cycles, tracking the frontier between known and unknown. Output: a confidence-tagged structural map. Bias: empirical verification of what exists vs what doesn't (e.g., the MVL+ pass explicitly verified "no precedent for file-metadata in any other discipline spec" by scanning the corpus).
- **/surfacing** draws items from a bounded territory with relevance tags. Output: workspace + thin artifact. Bias: enumeration of items in the bounded territory + per-item relevance attribution.

For this specific question (a spec edit to surfacing.md), the territory was bounded (the surfacing spec + adjacent conventions). Both runners could map it.

**Plausible runner contribution: ~30–50%.**

The /explore upstream's empirical-precedent verification plausibly biased MVL+ toward minimal-first scope (M1 only; M2 and M3 deferred). The /surfacing upstream's relevance-tagged item enumeration plausibly biased MVL2+ toward identifying more surfaces where the addition could land (7 surfaces with failure modes vs MVL+'s 3 surfaces without).

**Other variable contributions:**
- LLM run-to-run variance: ~20–30%.
- Per-discipline framing choices (sensemaking's naming decision; innovation's failure-mode-count decision): ~20–30%.

Runner choice is one of several variables; not the sole cause. A controlled A/B (same query × multiple runs × each runner) would be needed to attribute precisely.

#### Confidence calibration

**Overall verdict confidence: MEDIUM-HIGH.**

- Robust under user-concern-weighted scoring (13-5).
- Robust under equal weighting (5-4).
- Sensitive to weighting only insofar as the *margin* changes; the *winner* is invariant across defensible weightings.

The MEDIUM-HIGH tier (rather than HIGH) reflects: (1) runner-attribution is partial, not full; (2) the LOWER-weight dimensions (where MVL+ wins) are real structural values that future re-weightings could promote.

#### Actionability for the user

The user's implicit broader question is: "Should I prefer /MVL2+ for spec-edit questions going forward?" The verdict on this specific pair does NOT directly answer that broader question, because:

1. One comparison is one data point, not a calibration.
2. The runner contribution is plausible but partial; the LLM-variance contribution is real.
3. The dimensions where MVL+ wins (forward-extension, user-language alignment) are real structural values that future questions might weight higher.

The actionable verdict is: **for THIS specific pair, MVL2+ did a better job for the user's question.** The user should NOT yet generalize to "always prefer /MVL2+ for spec edits"; that requires accumulated A/B data (2+ matched-pair comparisons minimum).

---

## Inherited Frame Audit

**Seed central assumption:** "The verdict must address both 'which one did better' AND 'why.'" Audit fires if no candidate explicitly challenges this.

Challenge scan: the Ambiguity #1 resolution in Sensemaking explicitly tested the alternative (bare verdict without per-dimension support) and rejected on structural grounds. The composite verdict shape was committed. Audit does not fire on the seed.

**Piece-level commitments:**

- Per-dimension verdict for D1: MVL2+ wins decisively. Challenge scan: was the alternative (MVL+ wins; or tie) tested? Yes — the alternative was implicit in MVL+'s "principle + reaffirmation" approach. Tested and rejected because the user's question explicitly NAMED the regressions; MVL2+'s named failure modes match the user's framing more directly. PASS.
- Per-dimension verdict for D2: MVL2+ wins decisively. Challenge: was the alternative (MVL+'s 2-layer defense is sufficient) tested? Yes — extrapolation showed 4 anchors > 2 anchors against spec drift. PASS.
- Per-dimension verdict for D3: MVL2+ wins slightly. Challenge: was MVL+'s placement (paragraph after table; sub-paragraph in §2.1 body) tested? Yes — both placements are defensible; MVL2+ is more visibly conformant. PASS.
- Per-dimension verdict for D4: MVL+ wins with caveat. Challenge: was MVL2+'s structural argument tested? Yes — signal-not-source is a valid structural argument; the verdict acknowledges the trade-off explicitly. PASS.
- Per-dimension verdict for D5: MVL2+ wins decisively. Challenge: MVL+'s scoping-out is defensible (possibility-case has no mtime). Tested — schema heterogeneity is the structural cost; MVL2+'s `source: none` is the cleaner shape. PASS.
- Per-dimension verdict for D6: MVL2+ wins with caveat. Challenge: MVL+'s deferral is phase-discipline. Tested — the deferral is structurally defensible but the deferred items (M3) are not calibration-dependent, so deferral is cautious. PASS.
- Per-dimension verdict for D7: MVL+ wins decisively. Challenge: MVL2+'s Research-Frontier preservation is phase-discipline. Tested — single-instance evidence argument has merit, but a named category is reusable without commitment to thresholds. MVL+ commits the category at single-instance evidence; MVL2+ doesn't. The verdict stands. PASS.
- Per-dimension verdict for D8: MVL+ wins slightly. Challenge: MVL2+'s 3-piece decomposition is sufficient. Acknowledged — MVL+'s 7 pieces are richer but the marginal value is small. PASS.
- Per-dimension verdict for D9: MVL+ wins slightly. Challenge: MVL2+'s dimension breadth (12 dimensions) might match or exceed MVL+'s candidate count rigor (16 candidates). Tested — MVL+'s explicit stake-level + methodology-mode reasoning + Inversion-candidate count edge out MVL2+'s dimension breadth on the pass-rigor dimension. PASS.

Synthesis-level commitments:

- User-concern-weighted scoring: challenged in Sensemaking Ambiguity #3 (equal weighting alternative). Tested and rejected. PASS.
- Runner-attribution as HYPOTHESIS: challenged in Sensemaking Ambiguity #2 (runner-causation alternative). Tested and rejected. PASS.
- MEDIUM-HIGH overall confidence: challenged in Sensemaking Ambiguity #4 (HIGH alternative). Tested and rejected. PASS.

**Audit firing:** NO. Every load-bearing commitment was explicitly challenged in the candidate set.

---

## Phase 3 — Test

### 5-test cycle (applied to the composite verdict)

| Test | Question | Verdict |
|---|---|---|
| Novelty | Is this a genuinely new comparison verdict, or a repackaging of an obvious answer? | YES — the 9-dimension tiered comparison + per-dimension reasoning + sensitivity check + runner-attribution hypothesis is structurally new for this project. Surface readings of the two findings (e.g., "MVL2+ added more sections, so MVL2+ is better") would be shallower. |
| Scrutiny survival | Does the verdict hold up under prosecution? | YES — multi-axis prosecution applied across all 9 dimensions; specification-gap probes filled (e.g., epoch handling, source-none determination); user-perspective probes match the user's explicit framing. |
| Fertility | Does the verdict open new territory? | YES — the verdict surfaces a follow-up open question (controlled A/B for runner calibration); it also surfaces the methodology-rigor-vs-output-quality decoupling as an observation worth tracking. |
| Actionability | Can the user do something with this? | YES — the user can apply the verdict to choose MVL2+ for THIS spec-edit question; the verdict explicitly warns against premature generalization. |
| Mechanism independence | Would multiple mechanisms produce the same verdict? | YES — Combination + Domain Transfer + Lens Shifting + Inversion converged on the same per-dimension verdicts across the HIGH-weight dimensions. |

### Artifact-grounding (6th, conditionally applied)

The verdict makes categorical claims about both findings and their state files. Cross-check:

- Claim: "/MVL2+ adds two LAYER 1 failure modes at §4.2." Verified by reading 16-00 finding §4 (Additions 4 — entries 8 and 9 at §4.2). PASS.
- Claim: "/MVL+ does not add new failure modes." Verified by reading 20-35 finding Summary + §2 (only three locations: §2.1, §5.4, §1.3; no §4.2 addition). PASS.
- Claim: "/MVL+ committed stake-level HIGH; /MVL2+ did not." Verified by reading 20-35 state-file Critique entry ("Stake level HIGH; guilty-until-proven-innocent") and 16-00 state-file Critique entry (no stake-level commitment). PASS.

Artifact-grounding PASSES.

### Axis coverage check

The candidate set varies along multiple orthogonal axes:

- **Output-quality axis** (D1, D2, D5, D6, D7): covered.
- **Convention/naming axis** (D3, D4): covered.
- **Process-quality axis** (D8, D9): covered.
- **Aggregation axis** (synthesis: per-dimension → overall): covered.
- **Attribution axis** (runner contribution): covered.
- **Confidence axis** (verdict sensitivity to weighting): covered.

Axis coverage PASS.

---

## Output Dispositions

- **ACTIONABLE:** the composite verdict (9 per-dimension verdicts + aggregation + runner-attribution hypothesis + MEDIUM-HIGH confidence + actionability statement).
- **DEFERRED with revival trigger:** the broader question "should the user prefer /MVL2+ for spec-edit questions in general?" — defer until 2+ controlled A/B comparisons accumulate.
- **RESEARCH FRONTIER:** the decoupling between methodology-rigor-in-pass and output-quality observed in this comparison (MVL+ shows more pass-rigor; MVL2+ has more output-quality on user's named concerns). Generalizable observation worth tracking across future MVL+ / MVL2+ runs.

## Self-Assessment

PROCEED to Critique. The composite verdict survived the 5-test cycle and the Inherited Frame Audit did not fire. All 9 per-dimension verdicts have explicit evidence + reasoning; the synthesis aggregates with stated weighting; the runner-attribution hypothesis is bounded.
