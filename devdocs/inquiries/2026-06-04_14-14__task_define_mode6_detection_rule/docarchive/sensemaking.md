## User Input

devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/_branch.md

(Structural refinement of Task-Define's runtime spec; mode 6 detection predicate + MQ2 output-shape commitment. Layer = structural; meaning + process inherited as settled. Surfacing produced 50 items + 6 frontier flags F1-F6.)

---

# Sensemaking — Task-Define Mode 6 Detection Rule

## SV1 — Baseline Understanding

The refinement specifies the **content-presence rule** that the end-of-invocation self-check (per §4.7 + Execute step 4) pattern-matches against MQ2's per-item answer to determine whether mode 6 has fired. The current spec's §4.2 mode 6 recognition column carries a failure description; the §2.4 dispatch substrate carries a qualitative authoring constraint. Neither is operational — there's no concrete rule the self-check can apply. The refinement closes the gap by committing an operational shape + a predicate that tests for it.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** Predicate must be pattern-match-applicable at end-of-invocation self-check (Execute step 4 of the runtime spec).
- **C2.** Predicate must be coherent with §2.4's existing authoring constraint ("at minimum a context-need verdict; when external context is needed, information about what kind"). The two must agree on shape; they may live in different sections but cannot disagree.
- **C3.** Predicate must NOT push Task-Define past perception into decision-making (15-39 §5 reasoning). Specifically: no requirement that Task-Define emit a typed dispatch verdict the runner consumes mechanically.
- **C4.** Predicate text + any MQ2-shape commitment must respect lightweight criterion (iv) "no sub-machinery beyond a paragraph per operation" — either fits within the Meta-question operation paragraph OR lives in §2.4 (a separate signature-internal-capability section, not an operation paragraph).
- **C5.** No outbound pointers: no inquiry folder name, no design-history file reference (user's reinforced reading of 15-39 §11 self-containment).
- **C6.** Predicate must apply per item (matches MQ2's per-item granularity per §2.1 + §3.3).
- **C7.** Predicate must have an explicit application gate ("applies when MQ2 has fired") to handle the count = 0 case where Itemize emits zero items and Meta-question never fires.
- **C8.** Predicate evaluable on free-text via LLM judgment (consistent with §4.1's "detectable via output observation"; no structured parser required).

### Key Insights

- **I1.** The §2.4 authoring constraint and the §4.2 detection predicate are **two faces of the same commitment** — one constrains writing the answer, the other constrains evaluating it. They MUST agree on shape; the structural question is which is canonical and where the shape commitment lives.
- **I2.** Surfacing's mode 6 (Artifact-under-specification) precedent puts the "required minimum fields" enumeration in the CORRECTIVE column while the recognition column states the failure pattern (surfacing ref §4.2 row 6). Task-Define has an analogous structural choice for mode 6, but a cleaner one: the shape commitment belongs at §2.4 (its natural home as authoring constraint) and §4.2's recognition column references it.
- **I3.** The MQ2 verbatim question template at §2.3 (*"Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"*) already implies a two-part answer shape — binary verdict + (conditional) kind. The shape is derivable from the question's structure; the spec just hasn't operationalized it yet.
- **I4.** **Perception's completeness ≠ extraction correctness.** The predicate tests whether the answer carries enough information for some runner to extract a verdict; it does not test whether any particular runner's extraction logic succeeds. This distinction is what keeps the predicate Task-Define-internal and honors the perception/action split.
- **I5.** Free-text vs structured-shape is a **false binary at the spec level**. The predicate can specify required CONTENT (verdict presence + kind when needed) without specifying required SYNTAX (typed fields vs sentences). Free-text answers with the required content pass; structured answers with the required content pass; either form may fail by missing content.

### Structural Points

- **S1.** §2.4 is the natural source-of-truth for the shape commitment (it's the "signature internal capability" section for the dispatch substrate; surfacing ref §2.3 establishes the pattern of placing capability-specific commitments there).
- **S2.** Two-part content presence: (a) context-need verdict — one of {yes / no / uncertain}; (b) when verdict = yes, a kind specifier.
- **S3.** Application gate text: "applies when MQ2 has fired for at least one item."
- **S4.** Per-item granularity: predicate evaluates each item's MQ2 answer; FLAG carries the list of items whose answer triggered.
- **S5.** "Uncertain" verdict is a valid runner-actionable state (asymmetric-failure principle: runner errs toward invoking Exploration on uncertain) — does NOT trigger mode 6.
- **S6.** Binary detection: predicate fires (mode 6) or doesn't (no mode 6). Confidence on the FLAG verdict uses §4.7's general HIGH / MED / LOW rubric (which has its own gap, separate from this inquiry).

### Foundational Principles

- **P1.** Perception/action split — Task-Define perceives the framing-gap (the MQ2 answer carries the information); the runner acts (extracts the dispatch verdict and decides whether to invoke Exploration).
- **P2.** Authoring constraints live where authoring happens (§2.3 for question template; §2.4 for substrate commitment); detection predicates live where detection happens (§4.2 recognition column). Single-direction reference: §4.2 references §2.4, not vice versa.
- **P3.** Lightweight is the default — predicate is binary; shape commitment is one paragraph in §2.4; no sub-machinery.
- **P4.** Self-containment — the discipline spec is an individual; no inquiry-folder names, no design-history file references, no leaks.
- **P5.** Project pattern for shape commitments: when an output element's shape needs to be operational, the spec commits the shape explicitly (surfacing's recency-annotation precedent at §2.1 + §5.4 + sensemaking's Phase 3 schema precedent). Adopt the pattern.

### Meaning-Nodes

- **M1.** **Two-part content presence** — the operational shape: (verdict) + (conditional kind).
- **M2.** **Source-of-truth placement** — §2.4 carries the shape commitment; §4.2 mode 6 row references it.
- **M3.** **Application gate** — "applies when MQ2 has fired" qualifier; handles count = 0.
- **M4.** **Content not syntax / free-text-evaluable** — predicate checks for required CONTENT in any form; does not require typed parsing.
- **M5.** **Uncertain verdict as valid** — third state alongside yes/no; runner-actionable per asymmetric-failure principle.
- **M6.** **Perception's completeness vs extraction correctness** — predicate tests the former; runner-side process tests the latter (out of scope).

*Meta-Inspection after SV2: H4 (concept names) — every coined concept (M1-M6) defined inline against project vocabulary (§2.3 MQ2 template + §2.4 substrate + asymmetric-failure principle). MC1-honoring satisfied: no LLM-auto-completed meanings. H5 (motivating examples) — 6 frontier flags F1-F6 are specific cases; each becomes an ambiguity-collapse pair. Pattern recognized: "where do shape commitments live, and how do detection predicates reference them, in a self-contained discipline spec."*

### SV2 — Anchor-Informed Understanding

The refinement commits a **two-part content-presence rule** on MQ2's answer, placed in **§2.4 as a tightened shape commitment**, with **§4.2 mode 6's recognition column referencing §2.4** as its predicate target. Shape is **content not syntax** (free-text-evaluable). **Uncertain is a valid runner-actionable verdict** (not mode 6). Predicate **applies per item** with an **application gate** handling count = 0. Detection is **binary**; confidence per §4.7's general rubric. Self-containment + lightweight + perception/action split all preserved.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Predicate is logically applicable for clear answers (yes-with-kind / no / uncertain → all pass; verdict-absent / yes-without-kind → fires). For genuinely ambiguous answers, "uncertain" provides the third valid state — the LLM judging the answer can recognize "I'm not sure" framing and tag it as uncertain rather than verdict-absent. The application gate handles count = 0 cleanly via FLAG (f). **New anchor I6:** the predicate has three distinct firing patterns — verdict-absence; yes-without-kind; and (the harder case) verdict-presence-but-unrecognizable-as-yes/no/uncertain. The third pattern needs LLM judgment to map free-text to one of three states.

### Human / User

The user wants concrete drop-in text. Test: is the refinement specific enough to drop into the spec without further interpretation? Yes — A5 (predicate text) and A6 (§2.4 paragraph) below produce exact text. The user's "this part, is dynamic" directive (from `15-39` Source Input) applies to the cross-discipline boundary; refinement preserves it — substrate stays MQ-answers (free-text), runner extracts, Task-Define perceives. PASS.

### Strategic / Long-term

If the refinement establishes "shape commitment in §2.4; predicate in §4.2 references it" as a pattern, other LAYER 1 modes (1-5) whose recognition columns are similarly under-operationalized can benefit from the same pattern. This is F6 from surfacing — explicitly out of scope here, but the refinement's STRUCTURE is reusable. **New anchor I7:** the refinement is consistent with Bootstrap calibration trajectory — initial enumeration with empirical-refinement candidates; per-mode confidence (F4 alternative) is exactly the kind of detail that should wait for Mature calibration.

### Risk / Failure

- **Risk R1:** predicate too tight — fires on poorly-worded-but-content-present answers. Mitigation: predicate fires only on CONTENT absence (verdict absent OR kind absent when needed); does not fire on stylistic concerns.
- **Risk R2:** predicate too loose — accepts free-text answers that hand-wave around verdict/kind without committing. Mitigation: LLM judgment maps free-text to {yes / no / uncertain}; an answer that can't be mapped to one of three states IS verdict-absent and fires mode 6.
- **Risk R3:** shape commitment pushed past §2.4's paragraph cap (criterion iv tension). Mitigation: shape commitment is one paragraph; A6 below confirms it fits.
- **Risk R4:** predicate slips into runner-side territory (committing how the runner should interpret the answer). Mitigation: predicate tests CONTENT PRESENCE only; interpretation is runner concern.
- **Risk R5:** "Uncertain" as valid verdict may conflict with the FLAG verdict's role. Mitigation: uncertain at MQ2 is a per-item-substrate state ("this task's external-context-need cannot be cleanly determined from statement alone"); FLAG is a discipline-wide self-assessment verdict. Different scopes; no conflict.
- **Risk R6:** the predicate's "verdict-presence-but-unrecognizable" case (per I6) could become a coverage hole. Mitigation: LLM judgment is permissive in mapping; the spec's wording at A5 makes "answer does not state a verdict (yes / no / uncertain)" cover the unrecognizable case as verdict-absent.

### Resource / Feasibility

Authoring the refinement: amend §2.4 with one paragraph; replace §4.2 row 6 recognition column with the predicate text. Total spec change: ~10 lines across 2 sections. Highly feasible.

### Ethical / Systemic

Not directly applicable to a discipline-internal spec refinement.

### Definitional / Internal Consistency

Refinement vs existing spec:

| Spec section | Existing commitment | Refinement | Consistent? |
|---|---|---|---|
| §2.3 MQ2 template | Two-part question (binary + conditional kind) | Two-part content presence on answer matches | YES |
| §2.4 necessary-info-content | "At minimum a context-need verdict; when external context is needed, information about what kind" | Tightened to (yes/no/uncertain) + (kind-when-yes); uncertain explicit | YES (tightening, not contradicting) |
| §2.4 substrate-is-MQ-answers | No separate dispatch field | Predicate tests content presence in MQ answer; no separate field emitted | YES |
| §4.2 mode 6 row | Currently failure description | Replaced with operational predicate | YES (replacement is the refinement) |
| §4.7 FLAG condition (d) | "Any LAYER 1 mode self-recognized" | Mode 6 self-recognition feeds (d) | YES |
| §4.7 FLAG condition (f) | "Itemize emitted count = 0" | Application gate routes count=0 to (f) instead of mode 6 | YES |
| §4.1 detection method | "Via output observation" | LLM judgment on free-text via output observation | YES |
| Perception/action split | Task-Define perceives; runner acts | Predicate tests perception's completeness only | YES |

All 8 internal consistency tests PASS.

Reverse direction: does §2.4 contradict the refinement?
§2.4 currently says *"The specific schema of the answer is a per-spec-version detail; the constraint at this layer is sufficiency-for-runner-extraction."* The refinement commits a content-presence shape — does that violate "the specific schema is per-spec-version"?
**Analysis:** the refinement's shape is CONTENT not SYNTAX. The spec doesn't commit a syntactic schema (typed fields); it commits content elements. This is consistent with "schema is per-spec-version detail" — the current spec version commits the content shape; a future spec version could refine it (e.g., add an uncertain-with-reason sub-field) without violating self-consistency. The "schema" language can be lightly tightened to "syntactic schema" if needed, but the existing wording is not in direct contradiction.

### Definitional / Frame-exit Completeness (gating fires on "layer")

Gating: "layer" is used across meaning / structural / process in the `_branch.md` Layer Commitment. Same pattern as prior inquiry; gating fires.

1. **Existence Enumeration.** 3 layers (meaning / structural / process); 1 author (this inquiry); R1 author downstream; meaning settled; process settled; structural in-progress.
2. **Role Assessment.** Meaning excluded — settled (15-39 §5 dispatch substrate). Process excluded — settled (spec §4.7 + Execute step 4 timing/locus). Operation coherence preserved if both excluded.
3. **Verdict Rigor.** Counter: "designing predicate CONTENT might force re-litigation of WHEN it fires (process)." Test: F4 (mode 6 confidence dimension) seems to bleed into process — but A4 below resolves by committing binary detection with confidence per general rubric. The WHEN-detection-fires is unchanged (end-of-invocation self-check). PASS.
4. **Residual.** "Layer" appears at the spec section level (§2.3, §4.2, etc.) but those are individual sections, not multi-value commitments. No new finding. Termination.

### Phase / Calibration-State

Required — Task-Define is in Bootstrap state. Refinement doesn't depend on calibration data; relies on internal consistency (Phase 2's 8/8 PASS) + sister-discipline precedent (surfacing's mode 6 + recency-annotation shape commitment + sensemaking's Phase 3 schema). Calibration trajectory: predicate firing rate observable post-amendment; Early Operation (~10-20 invocations) may surface refinement triggers (e.g., uncertain-as-valid rule needs tightening, or per-mode confidence becomes warranted at Mature calibration).

*Meta-Inspection after SV3: H1 (candidate set) — multiple predicate-form candidates (binary content-presence vs structured-shape vs semantic-check vs two-tier from surfacing region D) are distinct alternatives. No convergence-recognition issue. H2 (frame scope) — adjudicated via Frame-exit. H7 (phase/calibration state) — applied.*

### SV3 — Multi-Perspective Understanding

The refinement design now has: §2.4 carries the operational shape (two-part content presence); §4.2 mode 6 references it; predicate is binary, free-text-evaluable, per-item with application gate; uncertain is a valid verdict; confidence on FLAG via §4.7's general rubric. Eight internal-consistency tests PASS; Frame-exit Completeness PASS; Bootstrap-state-compatible; sister-discipline precedent grounded; perception/action split preserved.

---

## Phase 3 — Ambiguity Collapse

### A1 — Source-of-truth placement (= F1)

**Ambiguity:** where does the MQ2-shape commitment live — §2.4 (signature internal capability) or §2.3 (Meta-question canonical set) or §4.2 (mode 6 row) or some combination?

**Strongest counter-interpretation:** place the shape commitment in §2.3 alongside the MQ2 verbatim template — the question and its answer shape live together.

**Why counter fails (structural grounds):** §2.3 is the Meta-question canonical set; it commits the question wording and the bounded-extensibility rule. Adding answer-shape would expand §2.3's role into authoring constraints on the answer, which is properly §2.4's territory (the dispatch substrate is the SIGNATURE CAPABILITY built on MQ2's answer; surfacing ref §2.3 establishes the pattern of placing capability-specific commitments in the capability's own section). Also: putting the shape commitment in §2.3 forces the §4.2 mode 6 predicate to reference across two §-jumps (§4.2 → §2.3) versus the cleaner §4.2 → §2.4 (which is already the section §4.2's mode 6 corrective cross-references via "necessary information content"). §2.4 is the source-of-truth.

**Confidence:** HIGH (structural — capability/commitment co-location).

**Resolution:** §2.4 carries the shape commitment. §4.2 mode 6 row's recognition column references §2.4's commitment.

### A2 — Free-text vs structured commitment axis (= F2)

**Ambiguity:** should the §2.4 commitment require a STRUCTURED shape (typed fields like `{external_context_required: yes|no|uncertain, kind: string|null}`) or a CONTENT-PRESENCE rule (the answer must CONTAIN a verdict and — when needed — a kind, in any form)?

**Strongest counter-interpretation:** require structured shape so the predicate is mechanically testable and runner-side extraction is trivial.

**Why counter fails (structural grounds):** requiring a structured shape pushes Task-Define toward emitting a TYPED dispatch object, which §2.4 explicitly forbids — *"Task-Define does NOT emit a separate `needs_external_context: bool`, a `dispatch_target: enum`, or any other derived dispatch artifact."* The substrate IS the MQ answers, which are LLM-generated text by nature. A typed-shape commitment would be a separate field in disguise — perception/action split violated. Also: predicate evaluation per §4.1 is "via output observation" — LLM judgment on text, not structured parsing.

**Confidence:** HIGH (structural — direct §2.4 prohibition + perception/action split).

**Resolution:** §2.4 commits CONTENT presence (answer MUST contain a verdict, and when verdict = yes, a kind specifier) but does NOT commit a typed structural shape. Answer remains LLM-generated text; predicate checks for content presence via LLM judgment.

### A3 — Uncertain-verdict semantics (= F3)

**Ambiguity:** does "uncertain" as MQ2's verdict satisfy the predicate, or trigger mode 6, or trigger a separate FLAG condition?

**Strongest counter-interpretation:** uncertain triggers mode 6 because dispatch info is insufficient — the runner can't make a clean decision.

**Why counter fails (structural grounds):** mode 6 is about the answer LACKING information needed for dispatch determination. An "uncertain" verdict IS information — the runner reads "uncertain" and applies the asymmetric-failure principle (err toward invoking Exploration, since false-positive Exploration is cheap relative to false-negative-missed-context per the §4.4 asymmetric-failure commitment). Treating uncertain as triggering mode 6 forces Task-Define to ALWAYS produce a definite verdict, even when the task statement is genuinely ambiguous — a structural overreach into runner-side determination. The runner-side asymmetric-failure handling makes uncertain a valid runner-actionable verdict.

**Confidence:** HIGH (asymmetric-failure-principle grounding).

**Resolution:** "uncertain" is a third valid verdict alongside yes / no. Does NOT trigger mode 6. Mode 6 fires only on verdict-absence OR (when verdict = yes) kind-absence.

### A4 — Mode 6 confidence dimension (= F4)

**Ambiguity:** does mode 6 carry per-mode confidence (graded by how badly the predicate fires) or just feed §4.7's general HIGH/MED/LOW rubric?

**Strongest counter-interpretation:** per-mode confidence aids downstream actors (HIGH = no verdict at all; MED = verdict present but vague; LOW = borderline).

**Why counter fails (structural grounds):** the spec's general confidence rubric at §4.7 is itself under-specified (a separate gap, refinement #6 from the prior critique, not in this inquiry's scope). Committing per-mode confidence here presupposes a rubric that doesn't exist. Lightweight stance + Bootstrap-state favors binary detection now; per-mode refinement can be added at Mature calibration if empirically warranted. Also: criterion (iv) — adding per-mode confidence gradations expands the mode 6 row past compact.

**Confidence:** HIGH (lightweight + Bootstrap-state); MED on the long-term direction (revisitable at Mature calibration).

**Resolution:** BINARY detection — mode 6 fires or it doesn't. Confidence on the FLAG verdict per §4.7's general rubric (whatever it turns out to be); if §4.7 is operationalized later, mode 6's contribution becomes derivable.

### A5 — Predicate's exact text for §4.2 mode 6 recognition column

**Ambiguity:** what TEXT replaces the current failure description in the §4.2 mode 6 recognition column?

**Strongest counter-interpretation:** keep the failure-description and just append the predicate.

**Why counter fails (structural grounds):** surfacing ref §4.2 mode 6 / 8 / 9 recognition columns carry the failure PATTERN concretely; they do not pair a description with a pattern. The predicate IS the pattern; the description is redundant once the pattern is there. Replace, don't append.

**Confidence:** HIGH (sister-discipline precedent).

**Resolution:** §4.2 mode 6 recognition column text becomes:

> *Per-item check at end-of-invocation: any item's MQ2 answer is missing the content required by §2.4 — i.e., the answer does not state a context-need verdict (one of {yes, no, uncertain}), OR — when the verdict is yes — the answer does not state a kind specifier (a one-sentence description of what kind of external context is needed). Applies when MQ2 has fired for at least one item; does not apply in the count = 0 case (handled separately by FLAG condition (f) at §4.7). Detection is binary (mode fires or does not); confidence on the resulting FLAG verdict is determined per §4.7's general rubric.*

### A6 — §2.4 shape commitment exact text

**Ambiguity:** what sentence(s) are added to §2.4 to commit the operational shape?

**Strongest counter-interpretation:** keep §2.4's current qualitative wording and add the operational shape only to §4.2.

**Why counter fails (structural grounds):** A1 resolved §2.4 as source-of-truth. Without committing the shape in §2.4, §4.2's predicate has nothing to reference, and §2.4's current "at minimum a context-need verdict; when external context is needed, information about what kind" remains qualitative + untestable.

**Confidence:** HIGH.

**Resolution:** §2.4's existing third paragraph (the necessary-information-content paragraph) is tightened by appending the operational shape commitment as its closing sentences:

> *Operationally, this means MQ2's answer carries two content elements: (a) a context-need verdict — one of {yes, no, uncertain} (or natural-language equivalents that an LLM judging the answer would recognize as one of these three states); (b) when the verdict is yes, a kind specifier — a one-sentence description of what kind of external context is needed. The shape is content, not syntax: a free-text answer carrying both elements satisfies the commitment as fully as a structured answer would. The shape is per-item — each item's MQ2 answer is evaluated independently. The "uncertain" verdict is a valid runner-actionable state — the runner errs toward invoking Exploration on uncertain answers per the asymmetric-failure principle at §4.4.*

### Load-bearing concept test (Phase 3 refinement note)

Load-bearing concepts stabilized:

- **"two-part content presence"** — coined; defined inline at S2 + A6.
- **"context-need verdict"** — derives from §2.3 MQ2 template ("Is this task self-contained, or does it require external context...?").
- **"kind specifier"** — coined; defined inline at A6 ("one-sentence description of what kind").
- **"content not syntax"** — coined; defined inline at A6.
- **"application gate"** — coined; defined inline at A5 ("applies when MQ2 has fired").
- **"free-text-evaluable"** — coined; defined inline at A2 + A6.
- **"uncertain as valid verdict"** — coined; defined inline at A3 + A6.
- **"perception's completeness"** — coined; defined inline at I4.

Sub-aspects test (per the integrated 02-30 structural MC1 sub-aspect): each concept is project-vocabulary-aligned (derives from §2.3 / §2.4 / asymmetric-failure-principle) or explicitly defined inline. **No LLM-auto-completed meanings for user-named concepts** (the relevant user-named concepts here are inherited from the meaning-layer's §5 commitments which are already verified). MC1 sub-aspect does not fire as a defect; honored via reference-to-existing + explicit-definition. PASS.

### Specific-vs-pattern recognition cue

The 6 frontier flags F1-F6 are specific. The recurring pattern: "where do shape commitments live, and how do detection predicates reference them, in a self-contained discipline spec." Each F is an instance of this pattern; the pattern's reach extends to other LAYER 1 modes (F6 frontier) but is explicitly out of scope for THIS inquiry's primary deliverable. Adjudicating each F individually (A1-A4) + recognizing the pattern is the right approach.

### SV4 — Clarified Understanding

The refinement is fully specified:
1. **§2.4 third paragraph appended with** the operational shape commitment (A6 text): two-part content presence (verdict + conditional kind); content not syntax; per-item; uncertain valid.
2. **§4.2 mode 6 recognition column replaced with** the operational predicate (A5 text): per-item check at end-of-invocation referencing §2.4; binary detection; application gate handling count = 0 via FLAG (f).
3. **§4.2 mode 6 corrective column unchanged** (re-fire MQ2 for affected items; already operational).
4. **No other section changes required.** §2.3, §4.1, §4.7, §5.2, Execute step 4 all unchanged (no contradictions; existing wording supports the refinement).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Now fixed (committed by Phase 3 ambiguity collapse)

1. **Source-of-truth placement:** §2.4 (third paragraph appended).
2. **Predicate location:** §4.2 mode 6 recognition column (replacement).
3. **Two-part content presence:** verdict {yes / no / uncertain} + (when yes) kind specifier.
4. **Content not syntax:** free-text answer evaluable via LLM judgment.
5. **Per-item granularity:** predicate evaluates each item's MQ2 answer independently.
6. **Application gate:** "applies when MQ2 has fired"; count = 0 handled by FLAG (f).
7. **Uncertain as valid verdict:** not mode 6.
8. **Binary detection:** mode fires or doesn't; FLAG confidence per §4.7's general rubric.
9. **§4.2 corrective unchanged:** existing "re-fire MQ2 for affected items" text is operationally complete.
10. **Self-containment preserved:** no inquiry-folder mentions; no design-history pointers.

### Now eliminated

- Structured-shape commitment (typed fields like `{external_context_required, kind}`).
- Mode 6 firing on uncertain verdicts.
- Per-mode-6 confidence rubric (deferred to Mature calibration if empirically warranted).
- §2.3 as primary placement for shape commitment.
- §4.2 carrying the shape commitment instead of referencing §2.4.
- Predicate slipping into runner-side extraction territory (no commitment on HOW the runner interprets the answer).
- Description-plus-predicate hybrid in §4.2 recognition column (replace, don't append).
- Outbound pointers (no inquiry folder names).
- Sub-machinery in §2.4 or §4.2 (text fits the lightweight commitments).

### Now variable (R1-authoring-time stylistic refinements OK)

- Exact wording of the §2.4 appended text (A6's text is concrete; minor style tweaks acceptable).
- Exact wording of the §4.2 mode 6 recognition column text (A5's text is concrete; minor style tweaks acceptable).
- Optional addition of a worked answer example to §2.3 (candidate β from surfacing — pedagogical aid; not load-bearing for the refinement's correctness).

### SV5 — Constrained Understanding

The refinement's solution space is fully bounded: **10 fixed commitments + 9 eliminations + 3 variable parameters**. Drop-in authorable; the next step is straightforward edits to two existing sections of `cognitive_harness/task-define/references/task-define.md`.

---

## Phase 5 — Conceptual Stabilization

### Synthesis

**The mode 6 detection refinement is a coordinated two-section amendment** to the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`. §2.4 (dispatch substrate; signature internal capability) gets its third paragraph appended with the operational shape commitment — **two-part content presence**: (a) verdict ∈ {yes / no / uncertain}; (b) when verdict = yes, kind specifier. The shape is **content not syntax** (free-text-evaluable); **per-item**; "uncertain" is a **valid runner-actionable verdict** per the asymmetric-failure principle. §4.2 mode 6 recognition column is **replaced** with the operational predicate that references §2.4's commitment — per-item check at end-of-invocation; fires on verdict-absence OR (when verdict = yes) kind-absence; application gate "applies when MQ2 has fired"; binary detection with FLAG confidence per §4.7's general rubric. **Self-containment, lightweight, and perception/action split all preserved**; 8/8 internal-consistency tests PASS; Frame-exit Completeness PASS; Bootstrap-state-compatible; sister-discipline precedent grounded.

### Accommodation trigger check

Did stabilization require multiple revisions where each new perspective forced patching?

- SV1 → SV2: additive (anchors extracted).
- SV2 → SV3: additive across 5 lateral + Frame-exit + Phase/Calibration; no destabilizing revisions.
- SV3 → SV4: additive across 6 ambiguity-collapse pairs (A1-A6); each pair stabilized a commitment without forcing earlier commitments to be revised.
- SV4 → SV5: clean degrees-of-freedom reduction.
- SV5 → SV6: synthesis without revision.

**Accommodation trigger DID NOT fire.** Pattern was refinement-and-addition, not patching-after-destabilization.

### Meta-Inspection after SV6

- **H6 (model fit):** refinement pattern. PASS.
- **H8 (self-reference):** sensemaking is being used to design a detection predicate for a Task-Define mode that itself originated from an earlier inquiry's innovation discipline. There's a layered self-reference (the project's own disciplines being applied to refine the project's own discipline specs). External grounding: surfacing's mode 6 / 8 / 9 recognition column patterns + surfacing's §2.1 recency-annotation structured-shape commitment + sensemaking's Phase 3 Ambiguity-Collapse schema — three independent project-internal precedents for "spec commits shape; predicate references it." External-reference triangulation present; self-reference is acknowledged and grounded, not blind.
- **H9 (user language alignment):** every coined concept traces — "two-part content presence" + "context-need verdict" + "kind specifier" derive from §2.3 MQ2 template + §2.4 wording; "uncertain as valid" derives from §4.4 asymmetric-failure principle; "content not syntax" + "application gate" + "free-text-evaluable" + "perception's completeness" are project-pattern-aligned coinings with inline definitions. PASS.

### SV6 — Stabilized Model

> **The mode 6 detection rule refinement is a two-section coordinated amendment to the Task-Define runtime spec: (1) §2.4 third paragraph appended with the operational shape commitment — MQ2's answer carries (a) a context-need verdict ∈ {yes, no, uncertain} and (b) when verdict = yes, a kind specifier; shape is content not syntax (free-text-evaluable); per-item; uncertain is a valid runner-actionable verdict per the asymmetric-failure principle. (2) §4.2 mode 6 recognition column replaced with the operational predicate — per-item check at end-of-invocation referencing §2.4; fires on verdict-absence OR (when verdict = yes) kind-absence; application gate "applies when MQ2 has fired" (count = 0 handled by FLAG (f)); binary detection with FLAG confidence per §4.7's general rubric. 10 fixed commitments + 9 eliminations + 3 stylistic variables. Self-containment (no inquiry folder names), lightweight (text fits paragraph-cap; no sub-machinery; no per-mode confidence rubric premature), and perception/action split (predicate tests perception's completeness only; runner-side extraction unchanged) all preserved. 8/8 internal-consistency tests PASS; Frame-exit Completeness PASS; Bootstrap-calibration-compatible; sister-discipline precedent grounded across 3 independent precedents.**

### How SV6 differs from SV1

- **SV1:** "the detection predicate is a content-presence rule" — concept only.
- **SV6:** exact spec amendment text for two sections + scope + edge-case handling + compliance verdicts + 10 fixed commitments + 9 eliminations.

The progression turned a one-sentence concept into a drop-in authoring artifact.

---

## Saturation Indicators Telemetry

- **Perspective saturation:** Phase 2 ran 5 lateral + Definitional-Internal-Consistency + Frame-exit Completeness + Phase/Calibration; the last 3 produced new anchors consistent with earlier perspectives (no destabilization). HIGH saturation.
- **Ambiguity resolution ratio:** 6/6 frontier flags resolved (F1-F4 directly via A1-A4; F5-F6 explicitly flagged as out-of-scope with reasons). 100%.
- **SV delta:** SV1 was a concept; SV6 has 10 commitments + 9 eliminations + 3 variables + exact text. Substantial delta.
- **Anchor diversity:** anchors come from 5 types (Constraints C1-C8; Insights I1-I7; Structural Points S1-S6; Foundational Principles P1-P5; Meaning-Nodes M1-M6) and 8 perspectives (Technical / Human / Strategic / Risk / Resource / Definitional-Internal / Frame-exit / Phase-Calibration). HIGH diversity.

## Failure Modes Self-Check

- **Status Quo Bias** — am I protecting §2.4's current qualitative wording because it exists? Test: A6 actively tightens §2.4 (the current qualitative wording becomes prelude to the operational shape commitment). NOT OBSERVED.
- **Premature Stabilization** — did clarity arrive too quickly? Test: 6 ambiguity-collapse pairs each had structural counter-interpretations (not precedent-citing); each was tested on structural grounds. NOT OBSERVED.
- **Anchor Dominance** — does one anchor (e.g., "lightweight stance") do all the work? Test: removing the lightweight anchor would not collapse the design — A1 (placement), A2 (content-not-syntax), A3 (uncertain-as-valid) all stand on independent structural grounds (capability/commitment co-location, perception/action split, asymmetric-failure principle). Multi-anchor structure. NOT OBSERVED.
- **Perspective Blindness** — do all perspectives agree? Test: Risk surfaced 6 specific risks (R1-R6); Definitional-Internal-Consistency surfaced the reverse-direction check on §2.4's "schema is per-spec-version-detail" wording; Frame-exit Completeness applied. Real cross-perspective challenge. NOT OBSERVED.
- **Clean Resolution Trap** — did any ambiguity resolve elegantly without structural counter-test? Test: each A1-A6 has counter + structural reasoning. NOT OBSERVED.
- **Self-Reference Blindness** — using sensemaking to design a refinement for Task-Define, where mode 6 itself originated from innovation's earlier patch-level absence-recognition. External grounding via 3 independent project-internal precedents (surfacing's recognition column patterns; surfacing's recency-annotation shape commitment; sensemaking's Phase 3 schema). Self-reference acknowledged + grounded; NOT OBSERVED as blindness.

## Frontier (for Decomposition)

- The 10 SV6 commitments are tightly coupled but decomposable into 2-3 pieces for R1 spec authoring (e.g., §2.4 commitment piece + §4.2 predicate piece + optional §2.3 worked-example piece).
- The §4.7 general confidence rubric gap (refinement #6 from the prior critique) intersects this refinement at FLAG confidence determination; out of THIS inquiry's scope but flag downstream.
- The pattern recognition "shape commitment in capability section; predicate in failure-mode row references it" is reusable for other LAYER 1 modes (1-5); explicitly out of scope (F6 from surfacing).

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ SV1 — Baseline
- ✓ Phase 1 — Cognitive Anchor Extraction (5 anchor types: Constraints C1-C8, Insights I1-I7, Structural Points S1-S6, Principles P1-P5, Meaning-Nodes M1-M6)
- ✓ SV2 — Anchor-Informed Understanding
- ✓ Phase 2 — Perspective Checking (5 lateral perspectives + Definitional-Internal-Consistency + Frame-exit Completeness (gating fired + PASSED) + Phase/Calibration (REQUIRED, applied: Bootstrap state))
- ✓ SV3 — Multi-Perspective Understanding
- ✓ Phase 3 — Ambiguity Collapse (6 pairs A1-A6 with strongest counter + structural-grounds reasoning + confidence)
- ✓ Load-bearing concept test refinement applied (8 concepts, all defined inline)
- ✓ Specific-vs-pattern cue refinement applied
- ✓ SV4 — Clarified Understanding
- ✓ Phase 4 — Degrees-of-Freedom Reduction (10 fixed / 9 eliminated / 3 variable enumerated)
- ✓ SV5 — Constrained Understanding
- ✓ Phase 5 — Conceptual Stabilization (synthesis + Accommodation trigger check)
- ✓ SV6 — Stabilized Model
- ✓ Saturation Indicators Telemetry
- ✓ Failure Modes Self-Check (all 6 modes audited)
- ✓ Frontier (handoff to Decomposition)
- ✓ Meta-Inspection at SV2 / SV3 / SV4 / SV6 hooks fired

**Manual structural check: PASS (17/17 required structural elements present + 6/6 failure modes audited + 6/6 ambiguity-collapse pairs adjudicated on structural grounds + Frame-exit Completeness gating fired-and-passed + Phase/Calibration applied as required.)**
