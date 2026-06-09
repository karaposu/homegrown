## User Input

devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/_branch.md

(Structural refinement to Task-Define runtime spec; inheriting Decomposition's 2 pieces P1 + P2 with 21 verification criteria + sensemaking's exact text amendments A5 + A6. Innovation operates in **Production-task mode**: seed = piece-list inherited from upstream; Innovation elaborates per piece.)

---

# Innovation — Task-Define Mode 6 Detection Rule

## Phase 1: Seed

### Seed

**Seed type:** Production-task mode — seed is the piece-list inherited from upstream sensemaking + decomposition. P1 (§2.4 Shape Commitment) and P2 (§4.2 Detection Predicate) are the units of innovation; each piece's verification criteria + the sensemaking-produced exact text (A6 for P1; A5 for P2) are the elaboration substrate.

### Methodology-Mode Consideration (Phase 1 refinement note)

- **Inherited mode (from seed framing):** **Standard default** — the `_branch.md` Goal states *"concrete drop-in spec content, ready to amend the runtime spec"* and *"a refinement the user can either approve as drop-in or push back on specific points"* — both are "elaborate the committed direction; produce confident ship-ready output" signals.
- **Alternative mode named:** **Contrarian-rethink (Framer-weighted)** — could surface alternative placements (§4.2 instead of §2.4; or both), alternative detection modes (graded instead of binary), alternative shape commitments (structured instead of content-presence).
- **What follows under Contrarian-rethink:** the candidate space would re-litigate sensemaking's A1 (§2.4 source-of-truth, HIGH confidence), A2 (content-not-syntax, HIGH confidence), A3 (uncertain-as-valid, HIGH confidence), A4 (binary detection, HIGH confidence). All four were structurally tested at sensemaking time with explicit counter-interpretations + structural-grounds rejection.
- **Decision:** **Methodology-mode-alternative-marked-inapplicable.** **Structural reason:** the four candidate inversions Contrarian-rethink would generate are exactly the alternatives sensemaking already tested and rejected on structural grounds (capability/commitment co-location for A1; perception/action split + §2.4-prohibition for A2; asymmetric-failure principle for A3; lightweight + Bootstrap-state for A4). Mode-switch would re-litigate upstream commitments that are committed at HIGH confidence. **Contextual reason:** sensemaking.md A1-A4 named each strongest counter-interpretation by name and rejected it; the upstream test results are committed; the Layer Commitment in `_branch.md` declares meaning + process layers settled and inherited. Mode-switch would invert the inquiry's frame.

### Meta-decision-piece classification

Per the 4+1 Meta-Decision-Piece Criterion:

| Piece | Property fires | Classification |
|---|---|---|
| **P1** | (b) Framing-semantic — commits the shape that P2 references; (c) Lesson-vocabulary — coins "two-part content presence" as the operational shape rule; **(v) Intervention-shape commitment** — ADD-CONTENT (append to §2.4's existing third paragraph) | **Meta-decision (property v fires)** |
| **P2** | (d) Evaluation-criterion — the predicate IS the criterion the self-check pattern-matches; **(v) Intervention-shape commitment** — REPAIR (replace existing recognition-column text with operational predicate; semantics change) | **Meta-decision (property v fires)** |

Both pieces are meta-decision **and** fire property (v); both require piece-level Inversion + intervention-shape-axis Inversion.

---

## Phase 2: Generate

### P1 — §2.4 Shape Commitment

**Principal candidate (from sensemaking A6):**

> *Operationally, this means MQ2's answer carries two content elements: (a) a context-need verdict — one of {yes, no, uncertain} (or natural-language equivalents that an LLM judging the answer would recognize as one of these three states); (b) when the verdict is yes, a kind specifier — a one-sentence description of what kind of external context is needed. The shape is content, not syntax: a free-text answer carrying both elements satisfies the commitment as fully as a structured answer would. The shape is per-item — each item's MQ2 answer is evaluated independently. The "uncertain" verdict is a valid runner-actionable state — the runner errs toward invoking Exploration on uncertain answers per the asymmetric-failure principle at §4.4.*

Appended to §2.4's existing third paragraph (the necessary-information-content commitment).

#### Mechanism 1 — Domain Transfer (Generator)

Source domain: sister-discipline runtime specs in this project.

- **Generic variation:** Surfacing's recency-annotation shape commitment at §2.1 + §5.4: *"The annotation's value shape is `{source: filesystem | none, value: ISO8601 | null}`. ... This is a first-class value, mandatory per item, never omitted."* This is the direct project precedent for "commit content elements without typed runtime syntax." Task-Define mode 6 inherits the pattern but applies it to free-text content rather than typed value.
- **Focused variation:** Sensemaking's Phase 3 Ambiguity Collapse schema commits multiple named fields (Ambiguity / Counter / Why-counter-fails / Confidence / Resolution / etc.) as the structural shape for ambiguity-collapse output. Pattern: structured commitment for an output element when operational reasoning depends on its parts. Mode 6's shape commitment uses the same pattern at a smaller scale (2 content elements instead of 6 fields).
- **Contrarian variation:** Importing a typed-schema language (e.g., JSON Schema) from a different domain entirely (software API specifications). **Rejected:** typed-schema syntax pushes Task-Define toward emitting a typed dispatch object — violates §2.4's separate-field prohibition; violates the lightweight stance (criterion iv); not project-rooted.

Source-domain selection guard: at least one source domain is **native** — surfacing is a sibling Core discipline in the same project family. PASS.

#### Mechanism 2 — Combination (Generator)

- **Generic variation:** Two-part shape (verdict + conditional kind) + asymmetric-failure principle (uncertain runner-actionable) — combining yields the three-valued verdict set {yes, no, uncertain} as a natural state, not an exception. Neither concept alone produces this; combining them does.
- **Focused variation:** Two-part shape + §2.3 MQ2 verbatim question structure (binary question + conditional follow-up "If external, what kind?") — combining yields a shape commitment that mirrors the question's structure, making the authoring guidance for MQ2 self-documenting (the answer's shape echoes the question's shape).
- **Contrarian variation:** Two-part shape + Itemize cardinality (count = N items each with its own MQ2 answer) — combining could yield a CROSS-ITEM dispatch summary (e.g., "M of N items need external context"). **Rejected:** cross-item summarization violates NOT-list category 4 (cross-item interpretation); also out of scope (per-item granularity committed at C5).

#### Mechanism 3 — Absence Recognition (Generator)

**Both-levels-mandatory and bidirectional refinement applied:**

- **Patch-level (gaps in current P1 verification criteria):**
  - **Generic:** P1 doesn't explicitly handle empty-string MQ2 answer (vs. genuinely-incomplete answer). **Patch:** empty string is verdict-absent; mode 6 fires. Implicit in current wording; could be tightened but lightweight stance favors not enumerating.
  - **Focused:** P1 doesn't address the edge case where verdict = uncertain BUT the answer also includes a kind specifier ("if external context were needed, it would be X"). **Patch:** uncertain-with-kind is acceptable (kind is required only when verdict = yes; uncertain doesn't require kind, but its presence isn't excluded). Implicit; could be tightened in a future refinement.
  - **Contrarian:** P1 doesn't address what happens when MQ2's answer is in a language other than English. **Rejected:** out of scope; LLM judgment on multi-language answers is downstream of the spec's content commitment.
- **Redesign-level (bidirectional):**
  - **What's missing direction (generic):** if redesigned from scratch, would mode 6 have a §2.3 worked-example for MQ2's answer? **Candidate β** (from surfacing trace #38): a one-line example like *"Example MQ2 answer: `context-need = yes; kind = the team's preferred error-handling conventions for this service area`."* Optional pedagogical aid; not load-bearing for the refinement's correctness; could be added to §2.3 in a future stylistic pass.
  - **What's already present in different form direction (focused):** the "natural-language equivalents" tolerance in P1's verdict mapping is already present in different form in surfacing's relevance-attribution mechanism (per surfacing ref §2.3, LLM judgment on similarity). Project-pattern-rooted; not invented here. The shape commitment doesn't introduce a new mechanism, just specifies the content target.

#### Mechanism 4 — Piece-Level Inversion at intervention-shape axis (compliance: property v fires)

- **X (committed intervention shape):** **ADD-CONTENT** (append to §2.4's existing third paragraph; the existing necessary-information-content commitment remains as the paragraph's first part).
- **Y (alternative shape from Vocabulary):** **REPAIR** — modify the existing third paragraph in place, replacing the qualitative "at minimum a context-need verdict; when external context is needed, information about what kind" with the operational shape commitment as the sole statement.
- **What follows under Y:** the qualitative anchor (the original 07-48-process-layer-introduced "necessary information content" framing) is replaced by the operational rule. Trade-offs: (i) the qualitative high-level commitment is lost as a separately-readable layer; (ii) the link to 07-48 process-layer reasoning becomes implicit-only; (iii) the appended-vs-replaced distinction is subtle but matters for traceability — appended preserves the chain of reasoning while replaced overwrites it.
- **Verdict:** **X (ADD-CONTENT, appending) preferred** with HIGH confidence — preserves the qualitative anchor (necessary-information-content commitment) as the high-level layer; adds the operational shape as the implementation layer; the two-layer structure mirrors the meaning-layer-to-process-layer-to-structural-layer ordering this whole project respects. Y would flatten the two layers, losing the high-level commitment's separability.

### P2 — §4.2 Detection Predicate

**Principal candidate (from sensemaking A5):**

> *Per-item check at end-of-invocation: any item's MQ2 answer is missing the content required by §2.4 — i.e., the answer does not state a context-need verdict (one of {yes, no, uncertain}), OR — when the verdict is yes — the answer does not state a kind specifier (a one-sentence description of what kind of external context is needed). Applies when MQ2 has fired for at least one item; does not apply in the count = 0 case (handled separately by FLAG condition (f) at §4.7). Detection is binary (mode fires or does not); confidence on the resulting FLAG verdict is determined per §4.7's general rubric.*

Replaces §4.2 mode 6 recognition column's current failure-description text.

#### Mechanism 1 — Constraint Manipulation (Framer)

**Both-direction-mandatory refinement applied:**

- **ADD-direction (generic):** ADD constraint "predicate must reference §2.4 by section pointer, not by inlining the shape commitment." → Single source of truth maintained; no duplication; if §2.4's shape commitment is refined in a future pass, §4.2's predicate inherits the change automatically.
- **ADD-direction (focused):** ADD constraint "predicate must explicitly name the application gate (when it applies AND when it doesn't)." → Closes ambiguity for the count = 0 case; routes degenerate input to FLAG (f) not mode 6.
- **ADD-direction (contrarian):** ADD constraint "predicate must include an example failing answer." **Rejected:** examples bloat the recognition column; surfacing's mode 6 / 8 / 9 precedent doesn't include examples in the recognition column; criterion (iv) tension.
- **REMOVE-direction (generic):** REMOVE the explicit "Detection is binary (mode fires or does not)" statement — leave detection mode implicit. **Rejected:** binary vs graded is an architectural decision (sensemaking A4 HIGH confidence); making it explicit prevents drift to graded detection at future refinements.
- **REMOVE-direction (focused):** REMOVE the "confidence on the resulting FLAG verdict is determined per §4.7's general rubric" sentence — leave FLAG confidence routing implicit. **Rejected:** the §4.7 general rubric is itself under-specified (separate gap); the explicit routing acknowledges the deferral and makes the dependency visible. Removing would hide the dependency.
- **REMOVE-direction (contrarian):** REMOVE the §4.7 cross-reference for FLAG (f) — let the count = 0 case fall through. **Rejected:** would create an unhandled case; FLAG (f) is the explicit handler for count = 0; cross-reference is load-bearing.

#### Mechanism 2 — Lens Shifting (Framer)

- **Generic variation:** Under conditions where FLAG verdicts cascade (multiple LAYER 1 modes fire simultaneously — e.g., mode 6 + mode 4 + mode 5), the binary detection per mode contributes a single bit to the FLAG verdict's conditions list. §4.7 aggregates per-mode bits into the FLAG verdict; mode 6's binary contribution is correct independently of how aggregation handles cascades.
- **Focused variation:** Under Bootstrap calibration state, binary detection is structurally correct (no observed-performance data to justify graded confidence per-mode). Under Mature calibration (~30+ invocations), per-mode confidence may become operationally warranted — but committing graded detection at Bootstrap presupposes Mature-state evidence not yet available; refinement-trigger noted.
- **Contrarian variation:** Under conditions where ONLY ONE runner ever invokes Task-Define and that runner's extraction is the ground-truth verdict for "was the answer adequate," mode 6 detection could be coupled to runner-side feedback. **Rejected:** violates Task-Define-internal scope (per A10 from process-layer inquiry); perception/action split violation; runner-feedback coupling is LAYER 2 self-coupling-to-downstream pattern.

#### Mechanism 3 — Extrapolation (Generator)

- **Generic variation (1-year horizon):** Bootstrap state; few invocations; binary detection is the only practical option. Pattern-claim establishment requires data Task-Define hasn't accumulated yet.
- **Focused variation (5-year horizon, Mature operation):** §4.7's general confidence rubric becomes operational (refinement #6 from prior critique resolved); per-mode confidence becomes derivable; mode 6's binary detection contributes a confidence input to the FLAG aggregation. The binary commitment ages well — it doesn't constrain future refinement of confidence at the FLAG layer.
- **Contrarian variation (10-year horizon, post-Mature with hypothetical Task-Define-of-Task-Define meta-discipline):** mode 6 detection could become introspective (Task-Define inspects its own past invocations' MQ2 answer patterns). **Rejected:** speculative; out of current scope; would violate substrate boundary (NOT-list category 2 — Task-Define's substrate excludes external state including its own history at this layer of recursion).

#### Mechanism 4 — Piece-Level Inversion at intervention-shape axis (compliance: property v fires)

- **X (committed intervention shape):** **REPAIR** (replace the existing recognition column's failure-description with the operational predicate; semantics change — from "describing what failure looks like" to "specifying when the failure has occurred").
- **Y (alternative shape from Vocabulary):** **ADD-CONTENT** — keep the existing failure description AND append the predicate, so the recognition column carries both a description and a pattern.
- **What follows under Y:** redundancy in the recognition column. Trade-offs: (i) the description provides a high-level summary that may aid readability; (ii) but the predicate IS the pattern — having both is over-specification; (iii) sister-discipline precedent (surfacing's mode 6 / 8 / 9 recognition columns) carries only the pattern, not pattern-plus-description; (iv) criterion (iv) compactness — the row stays one paragraph; appending two clauses doubles the content without doubling the information.
- **Verdict:** **X (REPAIR, replacing) preferred** with HIGH confidence — matches sister-discipline pattern + lightweight stance + the predicate carries the description's semantic content (a reader of the predicate understands what the failure is). Y would introduce redundancy that surfaces during downstream LOOP_DIAGNOSE reviews as criterion (iv) tension.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

The seed framing presupposes: **"the refinement is two amendments to two specific sections (§2.4 and §4.2 mode 6 row), with §2.4 as source-of-truth and §4.2 referencing it."**

### Step (ii) — Per-piece load-bearing commitments

- **P1:** Framing-semantic — "ADD-CONTENT (appending) to §2.4 is the intervention shape"; Lesson-vocabulary — "two-part content presence" as operational rule.
- **P2:** Evaluation-criterion — "the predicate IS the recognition-column pattern"; intervention-shape — REPAIR.

### Step (iii) — Challenge scan

| Assumption / commitment | Challenged in candidate set? | By which mechanism |
|---|---|---|
| Seed: §2.4 is the source-of-truth | NO direct challenge at innovation (sensemaking A1 already adjudicated at HIGH confidence; re-litigating would violate inquiry frame) | (override applies — see Step iv) |
| Seed: two amendments only | NO direct challenge (decomposition's coverage check confirmed all 10 SV6 commitments + cross-cutting covered by 2 pieces) | N/A |
| P1: ADD-CONTENT (appending) intervention shape | YES | P1 Intervention-Shape-Axis Inversion (REPAIR-in-place as Y; tested, rejected on loss-of-qualitative-anchor) |
| P1: two-part content presence | YES (implicitly) | P1 Combination contrarian (cross-item summarization); rejected on NOT-list violation. Also Domain Transfer contrarian (typed-schema); rejected on perception/action split |
| P2: REPAIR (replacing) intervention shape | YES | P2 Intervention-Shape-Axis Inversion (ADD-CONTENT keep-description as Y; tested, rejected on redundancy + sister-discipline pattern) |
| P2: binary detection | YES | P2 Constraint Manipulation REMOVE-direction generic (REMOVE binary-explicit statement); rejected on architectural-decision visibility |

### Step (iv) — Firing condition

Seed-level assumption "§2.4 is the source-of-truth" has no direct challenge in the innovation candidate set. Step (iii) verdict: NO. **The Inherited Frame Audit FIRES at seed level.**

Per the Orchestration Procedure (or Override Path), classify the un-challenged assumption: this is a **Design choice** (a structural commitment about how the sections are organized). The frame-escape feature would be **Absence Recognition redesign-level**.

But Absence Recognition WAS applied to P1 (Mechanism 3 above). The redesign-level question was asked. The "what's missing" direction surfaced the worked-example candidate (β); the "what's already present in different form" direction surfaced the natural-language-equivalents pattern. **Neither surfaced a frame-alternative for the §2.4-source-of-truth choice**, because §2.4 source-of-truth was already adjudicated upstream at sensemaking A1.

### Override Path

**`Inherited-Frame-Audit-marked-inapplicable: §2.4 source-of-truth placement was adjudicated at sensemaking discipline's Phase 3 Ambiguity Collapse A1 with HIGH confidence on structural grounds (capability/commitment co-location pattern from surfacing ref §2.3 establishing capability-specific commitments belong in the capability's own section; the §2.3 alternative was named as strongest counter-interpretation and rejected; the §4.2 alternative would force the predicate to carry the shape commitment, violating single-source-of-truth + the perception/action split). Re-litigating at innovation would invert the sensemaking discipline's explicit adjudication, which the Layer Commitment in `_branch.md` declares is the upstream frame this inquiry operates within. Structural reason: capability/commitment co-location is a project pattern observed at surfacing's §2.3 + sensemaking's Phase 3 schema location; the pattern is project-rooted and not at issue here. Contextual reason: sensemaking.md A1's structural-grounds reasoning explicitly named and rejected the §2.3 alternative (the counter-interpretation closest to the un-challenged assumption); the upstream test result is committed.`**

Compliance criterion check: the override's structural reason names the specific project pattern (capability/commitment co-location at surfacing §2.3 + sensemaking Phase 3); the contextual reason references the specific upstream work (sensemaking.md A1's structural-grounds reasoning naming the §2.3 alternative). Both components are specific; neither is generic. Override passes compliance.

---

## Phase 3: Test (5-test cycle per candidate)

### P1 — Principal candidate (ADD-CONTENT to §2.4 with two-part content presence + uncertain valid)

| Test | Verdict | Reasoning |
|---|---|---|
| **Novelty** | MED | Sister-discipline precedent (surfacing recency-annotation + sensemaking Phase 3 schema) provides the shape-commitment pattern; novel application to mode 6 |
| **Scrutiny survival** | PASS | Y (REPAIR-in-place) fails on loss-of-qualitative-anchor; cross-item summarization fails on NOT-list violation; typed-schema fails on perception/action split |
| **Fertility** | HIGH | Provides P2's reference target; provides authoring constraint for MQ2 going forward; establishes a reusable pattern for other LAYER 1 modes |
| **Actionability** | HIGH | Exact text (from sensemaking A6) is drop-in for §2.4 third paragraph append |
| **Mechanism independence** | HIGH | Domain Transfer (surfacing precedent) + Combination (asymmetric-failure + two-part shape) + Absence Recognition (project-pattern continuity) + Intervention-Shape-Axis Inversion (REPAIR test) all converge from different upstream grounds |

**Disposition:** ACTIONABLE.

### P1 — Intervention-Shape-Axis Inversion candidate (REPAIR-in-place)

| Test | Verdict |
|---|---|
| Novelty | LOW (just rephrasing) |
| Scrutiny survival | FAIL (loses qualitative anchor; flattens two-layer structure that mirrors meaning→process→structural ordering) |
| Fertility | LOW |
| Actionability | LOW |
| Mechanism independence | N/A |

**Disposition:** Failed → not a survivor.

### P2 — Principal candidate (REPAIR §4.2 mode 6 recognition column with operational predicate)

| Test | Verdict | Reasoning |
|---|---|---|
| **Novelty** | MED | Sister-discipline precedent (surfacing modes 6 / 8 / 9 recognition columns); novel application |
| **Scrutiny survival** | PASS | Y (ADD-CONTENT keep-description) fails on redundancy + sister-discipline pattern + criterion (iv); REMOVE-binary-explicit fails on architectural-decision visibility; REMOVE-§4.7-cross-reference fails on creating unhandled case |
| **Fertility** | HIGH | Closes the gap that triggered this inquiry; establishes a reusable pattern (shape commitment in capability + predicate in failure-mode row references it) for other LAYER 1 modes |
| **Actionability** | HIGH | Exact text (from sensemaking A5) is drop-in for §4.2 mode 6 recognition column replacement |
| **Mechanism independence** | HIGH | Constraint Manipulation (ADD-direction + REMOVE-direction) + Lens Shifting (calibration-state) + Extrapolation (Bootstrap → Mature) + Intervention-Shape-Axis Inversion (ADD-CONTENT test) all converge from different upstream grounds |

**Disposition:** ACTIONABLE.

### P2 — Intervention-Shape-Axis Inversion candidate (ADD-CONTENT keep-description)

| Test | Verdict |
|---|---|
| Novelty | LOW |
| Scrutiny survival | FAIL (redundancy; criterion iv tension; sister-discipline pattern violation) |
| Fertility | LOW |
| Actionability | LOW |
| Mechanism independence | N/A |

**Disposition:** Failed → not a survivor.

### Per-row / per-element mechanism-trace check (Phase 3 refinement note)

| Piece | Mechanisms applied | Trace present | Verdict |
|---|---|---|---|
| P1 | Domain Transfer + Combination + Absence Recognition (bidirectional both-levels) + Intervention-Shape-Axis Inversion | ✓ | PASS |
| P2 | Constraint Manipulation (both-direction) + Lens Shifting + Extrapolation + Intervention-Shape-Axis Inversion | ✓ | PASS |

Both pieces received active mechanism work. PASS.

### Axis coverage check (Phase 3 refinement note)

Underlying orthogonal axes in the problem:
- **Axis 1: source-of-truth placement** (§2.4 vs §2.3 vs §4.2) — adjudicated at sensemaking A1; P1's location commits.
- **Axis 2: shape commitment content** (two-part vs structured vs semantic) — adjudicated at sensemaking A2; P1 covers via Combination + Domain Transfer.
- **Axis 3: detection mode** (binary vs graded) — adjudicated at sensemaking A4; P2 covers via Constraint Manipulation + Extrapolation.
- **Axis 4: intervention shape** (ADD-CONTENT vs REPAIR vs others) — P1's ADD-CONTENT + P2's REPAIR + their respective Intervention-Shape-Axis Inversions cover this axis explicitly.
- **Axis 5: uncertain handling** (mode 6 trigger vs valid verdict vs separate FLAG) — adjudicated at sensemaking A3; P1 covers via Combination (asymmetric-failure principle).
- **Axis 6: count = 0 routing** (mode 6 vs FLAG f vs unhandled) — adjudicated at sensemaking application-gate commitment; P2 covers via Constraint Manipulation ADD-direction focused.

All 6 axes have variants in the candidate set. PASS.

### Mechanism Independence shared-input-detection (Phase 3 refinement note)

P1's converging mechanisms (Domain Transfer + Combination + Absence Recognition + Inversion) — do they share upstream input?
- Domain Transfer: surfacing's §2.1 recency-annotation precedent (external project precedent).
- Combination: §2.3 MQ2 verbatim template + §4.4 asymmetric-failure principle (existing spec commitments, but different sections).
- Absence Recognition: project-pattern continuity (sister-discipline natural-language-equivalents tolerance) + worked-example surfacing precedent.
- Inversion: first-principles intervention-shape analysis (REPAIR vs ADD-CONTENT trade-offs).

Four DIFFERENT upstream grounds. NOT spurious. INDEPENDENT convergence confirmed.

P2's converging mechanisms (Constraint Manipulation + Lens Shifting + Extrapolation + Inversion) — similarly DIFFERENT upstream grounds: criterion (iv) compactness + cascade-aggregation reasoning + calibration trajectory + intervention-shape trade-offs. INDEPENDENT.

### Artifact-grounding (6th conditional test)

Categorical claims about project state in the candidate output:
- "Surfacing ref §2.3 establishes the pattern of placing capability-specific commitments in the capability's own section" — verified by reading surfacing.md §2.3 earlier in this conversation. PASS.
- "Surfacing's recency-annotation at §2.1 + §5.4 commits `{source: filesystem | none, value: ISO8601 | null}`" — verified by reading surfacing.md §2.1 + §5.4 earlier. PASS.
- "Surfacing modes 6 / 8 / 9 recognition columns carry the failure PATTERN concretely, not pattern-plus-description" — verified by reading surfacing.md §4.2 mode 6 / 8 / 9 in this conversation. PASS.
- "Sensemaking's Phase 3 Ambiguity Collapse schema commits multiple named fields" — verified by reading sensemaking.md Phase 3 in earlier conversation. PASS.
- "§4.7's general confidence rubric is itself under-specified" — verified by reading task-define.md §4.7 in earlier turn. PASS.

All artifact-grounded claims verified.

### Assembly check

Combining P1's shape commitment and P2's predicate produces a complete refinement that:
- Closes the LAYER 1 mode 6 detection gap identified in the prior critique (refinement #2).
- Honors meaning-layer (15-39 §5 dispatch substrate) + process-layer (07-48 §5 necessary-information-content commitment) inheritance.
- Honors the lightweight stance (criterion iv — both amendments fit within paragraph cap), self-containment (no inquiry-folder mentions in any committed text), and perception/action split (predicate tests perception's completeness; runner-side extraction remains out of scope).
- Establishes a **reusable pattern** for other LAYER 1 modes (F6 frontier from surfacing): shape commitment in capability section + predicate in failure-mode row references it. Modes 1-5 could be similarly refined when their detection-rule gaps come into scope.

Emergent value (assembly-only): the **pattern reusability** for other LAYER 1 modes is not visible in either piece alone — it emerges from observing that P1 and P2 together form a template that can be applied to mode N for any operation with a capability-specific output. This is fertility that no individual piece carries.

---

## Mechanism Coverage Telemetry

### Standard telemetry

- **Generators applied:** 3 / 4 (Combination at P1; Absence Recognition at P1; Domain Transfer at P1; Extrapolation at P2). Inversion is a Framer (not a Generator) — clarification.
- **Framers applied:** 3 / 3 (Constraint Manipulation at P2; Lens Shifting at P2; Inversion at both P1 and P2).
- **Total mechanism coverage:** 6 of 7 mechanisms (Combination, Absence Recognition, Domain Transfer, Extrapolation, Lens Shifting, Constraint Manipulation, Inversion all applied; the only mechanism not separately enumerated as a stand-alone variation set above is — checking — all 7 ARE covered: the inventory above shows Combination + Absence + Domain Transfer + Extrapolation (4 Generators) + Lens Shifting + Constraint Manipulation + Inversion (3 Framers) = 7. FULL COVERAGE.
- **Convergence:** YES — 3+ mechanisms converge on each piece's principal candidate (mechanism independence confirmed; 4 different upstream grounds per piece).
- **Survivors tested:** 2 / 2 principal candidates + 2 intervention-shape Inversion candidates all tested via 5-test cycle (4 outputs, 4 testing rounds, 2 ACTIONABLE survivors + 2 failed-to-survive).
- **Failure modes observed:**
  - (1) Premature Evaluation: NO (testing only after mechanisms applied; piece-level Inversion candidates generated and tested independently of principal candidates).
  - (2) Single-Mechanism Trap: NO (4 mechanisms per piece).
  - (3) Early Frame Lock: NO (piece-level Inversion compliance satisfied for both pieces; intervention-shape-axis-Inversion specifically tested via X-vs-Y from Vocabulary).
  - (4) Innovation Without Grounding: NO (every output 5-test-cycled).
  - (5) Mechanism Exhaustion: NO (all 7 mechanisms produced viable outputs).
  - (6) Survival Bias: NO (Survival-Bias's prior-step-never-generate variant addressed via Piece-Level Inversion compliance at both meta-decision pieces; uncomfortable alternatives WERE generated, not silently absent).
- **Overall:** **PROCEED** (full coverage + convergence + all tested survivors + 0 failure modes).

### Production-task additional telemetry

- **Per-piece mechanism log:**
  - `P1: [Domain Transfer, Combination, Absence Recognition (bidirectional both-levels), Inversion:intervention-shape]`
  - `P2: [Constraint Manipulation (both-direction), Lens Shifting, Extrapolation, Inversion:intervention-shape]`
- **Per-piece axis-distribution log (property-v pieces):**
  - `P1: [Inversion:intervention-shape] — axis target = intervention-shape (X=ADD-CONTENT-appending vs Y=REPAIR-in-place)`
  - `P2: [Inversion:intervention-shape] — axis target = intervention-shape (X=REPAIR-replace vs Y=ADD-CONTENT-keep-description)`
- **Meta-decision-piece classification:**
  - `P1: meta-decision (b + c + v)`
  - `P2: meta-decision (d + v)`
- **Piece-level Inversion compliance:**
  - `P1: satisfied (Intervention-Shape-Axis Inversion generated, tested, X selected, Y rejected on loss-of-qualitative-anchor)`
  - `P2: satisfied (Intervention-Shape-Axis Inversion generated, tested, X selected, Y rejected on redundancy)`
  - **0 violations; 0 overrides; FLAG / RE-RUN conditions NOT triggered.**
- **Inherited Frame Audit:** FIRED at seed-level for "§2.4 is the source-of-truth"; OVERRIDDEN with structural + contextual reasons naming surfacing §2.3 capability/commitment co-location pattern + sensemaking.md A1 explicit adjudication; per-piece commitments challenged via Intervention-Shape-Axis Inversion.

### Final innovation output → Critique handoff

**2 ACTIONABLE principal candidates** + **2 Inversion-candidates tested and rejected**. Both pieces have full mechanism trace + axis coverage + independent convergence. Ready for Critique evaluation against the meaning-layer + process-layer + lightweight + self-containment + perception/action split commitments.

---

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ User Input at top
- ✓ Phase 1 — Seed with Methodology-Mode Consideration (inherited mode named + alternative named + what-follows + decision with structural+contextual override per compliance criterion)
- ✓ Meta-decision-piece classification at seed time (2/2 pieces classified; property-v firing flagged for both)
- ✓ Phase 2 — Generate (per piece: principal candidate + multiple mechanisms with generic + focused + contrarian variations + piece-level Intervention-Shape-Axis Inversion compliant)
- ✓ Both-direction-mandatory refinement applied for Constraint Manipulation (P2)
- ✓ Both-levels-mandatory and bidirectional refinement applied for Absence Recognition (P1)
- ✓ Source-domain selection guard applied for Domain Transfer (P1; surfacing native-domain confirmed)
- ✓ Intervention-Shape-Axis Inversion applied for both property-v pieces (P1 + P2; both with X-vs-Y alternative shape from Vocabulary + 5-test on both)
- ✓ Inherited Frame Audit between Phase 2 and Phase 3 (predicate + Step i + Step ii + Step iii + Step iv); audit FIRED at seed level; OVERRIDDEN via compliant override path with structural + contextual reasons
- ✓ Phase 3 — Test (5-test cycle per candidate; output dispositions)
- ✓ Per-row / per-element mechanism-trace check (both pieces PASS)
- ✓ Axis coverage check (6 axes; all addressed)
- ✓ Mechanism Independence shared-input detection (4 different upstream grounds per piece — INDEPENDENT)
- ✓ Artifact-grounding (6th conditional test) — 5 categorical claims about project state all verified
- ✓ Assembly check (emergent value identified: pattern reusability for other LAYER 1 modes)
- ✓ Mechanism Coverage Telemetry (standard + Production-task additional)
- ✓ 0 failure modes observed; 0 piece-level Inversion violations; PROCEED verdict

**Manual structural check: PASS (17/17 required structural elements present + all refinement notes applied + 0 failure modes + 2/2 piece-level Inversion compliance satisfied + Inherited Frame Audit override compliant + PROCEED).**
