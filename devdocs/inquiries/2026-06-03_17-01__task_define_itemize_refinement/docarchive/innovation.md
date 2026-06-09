## User Input

`devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/_branch.md` (priors consumed: surfacing / sensemaking / decomposition)

---

# Innovation — Itemize Refinement (Production Mode)

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed:** decomposition's piece-list — `P0` (cited shared anchor referencing the prior 15-39 finding's preserved commitments) + `R1` (refined §2 Itemize description replacing the prior wording) + `R2` (one-line disambiguation appended to §10 NOT-list category 4). Innovation's task: produce the concrete authorable text per piece.

**Inherited methodology mode:** **Standard default.** The seed framing implies elaborate-the-committed-direction; produce confident ship-ready output. The meaning-layer has settled at sensemaking SV6.

**Alternative mode named:** **Contrarian-rethink.** Under this alternative, innovation would re-open SV6's commitments — re-test the "default = ONE item" choice, the (subject, action, deliverable-shape) tuple grounding, the asymmetric-failure direction.

**What follows under the alternative:** the prior 15-39 finding's §2 Itemize wording would be retested as a candidate; the user's reframe would be retested with structural counter-arguments. Most likely outcome: SV6 holds (sensemaking already resolved 10/10 ambiguity-collapse pairs against the strongest counters at HIGH confidence).

**Decision: Standard default.** Reason: sensemaking SV6 is itself the resolution of the user-invoked frame challenge (the user's "lets refine this and check ... but maybe i am wrong" invitation IS the contrarian invocation); SV6's 10/10 ambiguity-collapse with 9 HIGH/1 MED confidence and 7 perspectives consulted is the resolution. Re-opening at innovation would re-litigate the user's empirical-test mandate without new evidence.

`Seed-time-methodology-mode-decision: Standard default (inherited).`

## Phase 2 — Generate

### Cross-piece mechanism applications

**Combination.** "The prior 15-39 finding's (subject, action, deliverable-shape) 5-meta-aspects framing" + "the user's 'completely different' verbatim qualifier" = R1's structural test for split-fire. Combination of existing project vocabulary + user verbatim; no new vocabulary invented.

**Absence Recognition.**
- **Patch-level:** is anything missing from R1's content per the decomposition's verification criteria? Verified: verb-meaning + structural rule + asymmetric-failure direction + load-bearing single-item + worked positive/negative examples — all listed. Coverage complete.
- **Redesign-level (what's missing):** at redesign from scratch, would R1 contain anything beyond SV6? No — SV6's 7 items cover the meaning-layer commitments exhaustively (verified at decomposition Step 7 Completeness).
- **Redesign-level (what's already present in different form):** the project's `_branch.md` template already structurally defines a "task" via 5 meta-aspects (subject, action, level, observation-targets, deliverable-shape). R1's structural test reuses 3 of these (subject + action + deliverable-shape) rather than inventing new task-vocabulary. The pattern is already-present-in-the-project; R1 surfaces it explicitly at Itemize's split-fire condition.

**Domain Transfer.**
- **Native (LLM/NLP):** sentence segmentation in linguistic parsing. The question "is this one sentence or multiple?" maps directly to Itemize's question "is this one task or multiple?" Default in linguistic parsing: one sentence unless explicit boundary markers (period, conjunction with semantically-distinct clauses). The refined Itemize follows the same default-one principle, with structural markers being distinct (subject, action, deliverable-shape) tuples rather than punctuation.
- **Cross-domain (deliberately different):** kitchen recipe interpretation. "Is this one recipe with multiple steps, or multiple recipes that happen to share ingredients?" A cook receiving "saute onions, then add garlic, then deglaze with wine" doesn't itemize into 3 recipes — it's ONE recipe with 3 steps. A cook receiving "make the appetizer and the dessert" itemizes into 2 recipes. The bias is the same: default-one unless clear distinct deliverables. The pattern crosses domains.

**Extrapolation.** As Task-Define gets adopted across many runners and many task statements, the refined Itemize's keep-together bias prevents accumulation of premature-split errors that would otherwise compound. A single premature-split error per inquiry × N inquiries = N inquiries operating on fragmented framings. Default-one is safer at scale.

**Lens Shifting.**
- **Spec-author lens:** R1 is transcribable as one paragraph + worked examples; R2 is one sentence. Both can be written directly into the structural-layer spec when authored.
- **LLM-implementing lens:** the (subject, action, deliverable-shape) tuple test is a clear cognitive operation. Implementable.
- **Future-task-statement lens:** does the refined Itemize handle realistic task statements correctly? Test cases below show: prior 15-39 Source Input → 1 item (correct); this inquiry's Source Input → 1 item (correct); a hypothetical multi-task statement → N items (correct).

**Constraint Manipulation (both directions mandatory).**
- **ADD constraint:** "Itemize MUST emit count = 1 always (no multi-fire ever permitted)." Result: Itemize cannot detect real multi-task statements; "fix the auth bug AND build the billing feature" would be treated as one task, forcing the runner to handle two distinct deliverables in one inquiry. Fails the worked positive case. **The default-one bias is correct; the never-multi extreme is wrong.**
- **REMOVE constraint:** "remove the asymmetric-failure bias entirely." Result: Itemize has no default; every invocation re-decides the boundary; risk of premature-split returns. **The bias is load-bearing; removing it unwinds the refinement.**

**Inversion (depth-iterate; multi-axis).**
- **Belief-axis Inversion:** invert "default = ONE item" → "default = N items." Level-1 (component): would split single-task statements into multiple items. Level-2 (system): destroys coherence in single-task cases; downstream operations operate on fragments; meaning-lock in wrong space. System-level statement: **the default direction IS the architecture of the operation; flipping it inverts the operation's purpose** (Itemize would become "fragment-by-default" rather than "perceive-then-fragment-if-warranted"). Confirmed structural; default-one is load-bearing.
- **Multi-axis check — identity-axis:** what does Itemize fundamentally consist of? Invert "Itemize perceives multi-task structure" → "Itemize creates multi-task structure" (Itemize imposes multi-task structure where there is none). Equivalent to default-N. Same failure as above.
- **Existence-axis:** could Itemize be ZERO (omitted entirely)? Then the runner has no signal to determine spawn-or-not. Task-Define would lose its multi-task-detection capability. Confirmed: Itemize is load-bearing in the discipline's identity.

### Inherited Frame Audit (between Phase 2 and Phase 3)

**Step (i) — Seed-level central assumption:** "the SV6 commitments correctly resolve the user's empirical-test mandate; innovation should elaborate them for transcription."

**Step (ii) — Piece-level meta-decision classification:**
- P0: properties (b) framing-semantic + (c) lesson-vocabulary + (d) evaluation-criterion
- R1: properties (b) + (c) + (d) + (e) intervention-shape (REPAIR — semantically changes existing §2 text)
- R2: properties (c) + (e) intervention-shape (ADD-CONTENT — appends clarifying line)

**Step (iii) — Challenge scan:** does any candidate in the candidate set explicitly challenge the seed-level assumption or any piece-level commitment?

The piece-level Inversion candidates below challenge the per-piece commitments (default-one; ADD-CONTENT vs REPAIR for R2; etc.) — explicit challenges in candidate form.

**Step (iv) — Firing condition:** the seed-level assumption has no in-candidate-set challenge (innovation's task is to elaborate, not to re-litigate). Audit fires at seed level.

**Orchestration:** the seed-level assumption is a Design-choice type (the seed framing commits to elaborating SV6). Per the dispatch table, invoke **Absence Recognition redesign-level**. Already applied above (in cross-piece mechanism applications): the redesign-level check confirmed SV6 covers exhaustively and reuses existing project vocabulary rather than inventing new. The frame-alternative is consistent with the seed framing.

**Override (recorded for completeness):**

`Inherited-Frame-Audit-marked-inapplicable: not invoked — the user's verbatim "lets refine this and check ... but maybe i am wrong" mandate is itself a frame-challenge directive; sensemaking SV6's 10/10 ambiguity-collapse (9 HIGH/1 MED) + 7 perspectives + Accommodation-trigger-did-not-fire constitutes the resolved frame-challenge outcome; decomposition's piece-list inherits SV6 as the settled model. Single Return-to-Phase-2 iteration would re-litigate without new evidence. Structural reason: prior-finding frame-challenge already resolved at sensemaking. Contextual reason: user's verbatim invitation + sensemaking SV6.`

### Per-piece concrete authorable content + Inversion candidates

#### P0 — Shared anchor preamble

**Principal candidate (authorable content):**

> *Preamble (before R1; cited, not re-stated):* This refinement preserves the rest of the prior 15-39 Task-Define meaning-layer finding. Specifically: the verb-meaning sentence ("Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing"); the perception/action split (Task-Define perceives + emits content + signals; downstream actors decide and act); the lightweight stance and all six enforcement criteria; the self-containment principle; the intra-discipline ordering (Itemize first; per-item operations operate per item); the NOT-list intrinsic-grounding pattern and the five exclusion categories (with one disambiguation appended per R2 below). Only §2 Itemize's description (R1) and the appended disambiguation to §10 NOT-list category 4 (R2) are touched by this refinement.

**Piece-Level Inversion candidate:**
- *Inverted assumption:* the shared anchor lives at a single preamble location.
- *What follows:* if each piece restated the preserved commitments inline, the spec would duplicate the prior finding's content; lightweight criterion (iv) would be violated; future divergence between pieces would be likely.
- *Verdict:* Inversion fails fertility + actionability. Principal SURVIVES.

#### R1 — Refined §2 Itemize description

**Principal candidate (authorable content — replaces the prior 15-39 finding's §2 Itemize description):**

> **Itemize** (statement-level) — input: the raw task statement. Mechanism: PERCEIVE whether the statement contains multiple **completely-different tasks** — tasks distinguished by distinct (subject, action, deliverable-shape) tuples — versus a single task with multiple specifications. Specifications of one task vary along properties (e.g., "lightweight," "from-scratch"), constraints, operation details, illustrative clauses, rationales, or invitations, but converge on the same (subject, action, deliverable-shape) tuple. Multiple tasks have N distinct tuples.
>
> The cost of premature-split (separating coherence in a single-task statement; downstream operations operate on fragments; meaning-lock in the wrong space) is structurally **irrecoverable**. The cost of late-split (a multi-task statement treated as one — downstream Meta-question's context-need answer and the user's reading of the framing artifact can catch and correct) is **recoverable**. The operation biases toward **keep-together**: default emit **one item** (the whole statement); emit N items only when clearly distinct (subject, action, deliverable-shape) tuples are established. When ambiguous between specifications-of-one-task and multiple-distinct-tasks, default to one item.
>
> The operation is load-bearing in both single-item and multi-item cases. When count = 1, the verdict itself is the signal to the runner — "process in place; do not spawn." When count > 1, the runner spawns N sibling inquiries (one per item). Without Itemize's perception, the runner has no signal to determine spawn-or-process-in-place.
>
> Output: a list of items with cardinality ≥ 1.
>
> *Worked positive example* (Itemize fires; count > 1): *"fix the auth bug AND build the billing feature."* Distinct subjects (auth vs billing), distinct actions (fix vs build), distinct deliverable-shapes (bug-fix vs feature-implementation). Itemize emits two items: item 1 = "fix the auth bug"; item 2 = "build the billing feature."
>
> *Worked negative example* (Itemize does not fire; count = 1): a statement that bundles multiple specifications of one task — for instance, "redefine the discipline with a different name, make it lightweight, use these operations, and apply this from-scratch stance." Single subject (the discipline being redefined), single action (redefine), single deliverable-shape (the redefined-discipline definition). The specifications (name, lightweight, operations, from-scratch) are facets of the one task. Itemize emits one item: the whole statement.

**Piece-Level Inversion candidate (content-axis):**
- *Inverted assumption:* default = ONE item.
- *What follows:* if default = N items, Itemize would split single-task statements into multiple items by default. The harm sensemaking K1 identified (current wording's default-split reading produces 11+ items where structural reality is 1 task + 11 specifications) would persist. Itemize would become "fragment-by-default" rather than "perceive-then-fragment-if-warranted" — inverting the operation's purpose.
- *Scrutiny:* already prosecuted at sensemaking A1; fails on structural grounds.
- *Principal SURVIVES content-axis Inversion.*

**Intervention-shape-axis Inversion (property (v) fires; intervention shape committed is REPAIR):**
- *Inverted assumption:* REPAIR (semantically changes existing §2 Itemize text) is the right intervention shape.
- *Alternative shapes from the Vocabulary:* REVERT-REGRESSION; REORGANIZE-WITHOUT-ADDING; REMOVE; DO-NOTHING; ADD-TEST.
- *What follows under each:*
  - **REVERT-REGRESSION:** N/A — there is no prior version of §2 Itemize to revert to (the prior 15-39 finding is the first authoring; "split into distinct atomic items" is its text).
  - **REORGANIZE-WITHOUT-ADDING:** preserves semantics; but semantics ARE what must change (the harm IS in the semantics). Fails.
  - **REMOVE:** deletes §2 entirely; leaves Itemize without a description. Fails.
  - **DO-NOTHING:** accepts the harmful wording. Fails the user's mandate.
  - **ADD-TEST:** appends a test alongside the existing wording (e.g., "and verify the split-fire condition before emitting items"). Doesn't replace the harmful default-split reading; the test would catch some cases but not the structural under-determination. Partial fix at best.
- *Override:* `Intervention-shape-Inversion-marked-inapplicable: REPAIR is structurally required because the harm (sensemaking K1) lives in the §2 text's semantics — the default-split reading of "split into distinct atomic items." Semantic change of the text is the only way to address the source. All alternative shapes either preserve the harmful semantics (REORGANIZE), have no source to revert to (REVERT-REGRESSION), leave the operation undescribed (REMOVE), accept the harm (DO-NOTHING), or fail to address the structural under-determination (ADD-TEST). Structural reason: the wording itself is the source of harm; only semantic change addresses it. Contextual reason: sensemaking K1 + the user's empirical-test mandate.`

#### R2 — NOT-list category 4 one-line disambiguation append

**Principal candidate (authorable content — appended after the existing §10 NOT-list category 4 entry):**

> *Note on Itemize's multi-detection vs cross-item interpretation:* Itemize's perception of WHETHER multiple distinct tasks exist (count-perception) is intrinsic to itemization and is NOT the cross-item interpretation excluded here. Cross-item interpretation is the operation of claiming relational meaning across items once separated (e.g., "item 1 enables item 2"; "items A and B share a common abstraction"); count-perception is the operation of perceiving cardinality. They are distinct cognitive operations; only the relational one is excluded by this category.

**Piece-Level Inversion candidate (content-axis):**
- *Inverted assumption:* the disambiguation is needed (the multi-detection-vs-cross-item-interpretation collapse risk is real).
- *What follows:* if the disambiguation is unnecessary, category 4's existing wording is sufficient. But sensemaking A3 already prosecuted this: the strongest counter ("multi-detection IS cross-item perception") was tested and found structurally distinct (count-perception ≠ relational interpretation). Without the disambiguation, a future reader could read category 4 as excluding Itemize's intrinsic perception — collapsing the load-bearing capability of the operation.
- *Verdict:* Inversion fails scrutiny. Principal SURVIVES.

**Intervention-shape-axis Inversion (property (v) fires; intervention shape committed is ADD-CONTENT):**
- *Inverted assumption:* ADD-CONTENT (append a clarifying line) is the right intervention shape.
- *Alternative shapes from the Vocabulary:* REPAIR (semantically change category 4's existing text to include the disambiguation inline); REVERT-REGRESSION; REORGANIZE-WITHOUT-ADDING; REMOVE; DO-NOTHING.
- *What follows under each:*
  - **REPAIR:** rewrites category 4 to include the disambiguation as part of its primary statement (e.g., "Cross-item INTERPRETATION (relational meaning across items once separated; distinct from Itemize's count-perception, which is intrinsic to itemization) is excluded..."). Viable; achieves the same goal as ADD-CONTENT but modifies the existing text rather than appending.
  - **REVERT-REGRESSION:** N/A.
  - **REORGANIZE-WITHOUT-ADDING:** preserves existing semantics; would not add the disambiguation. Fails.
  - **REMOVE:** deletes category 4's exclusion; removes a valid commitment. Fails.
  - **DO-NOTHING:** leaves the collapse risk. Fails sensemaking A3's verdict.
- *Comparison REPAIR vs ADD-CONTENT:* both achieve the disambiguation. ADD-CONTENT is more parsimonious (the existing category 4 text correctly states the exclusion; only the disambiguation needs adding; minimal text-touch). REPAIR risks introducing unrelated changes to category 4's existing text.
- *Override:* `Intervention-shape-Inversion-marked-inapplicable: ADD-CONTENT is preferred over REPAIR for parsimony — the existing category 4 text correctly states the cross-item-interpretation exclusion; modifying it would risk introducing unrelated changes. Appending a one-line disambiguation note achieves the disambiguation with minimal text-touch (lightweight criterion iv). Structural reason: parsimony (minimum-change principle). Contextual reason: sensemaking A3 confirmed the existing category 4 exclusion is structurally correct; only the disambiguation needs adding.`

## Phase 3 — Test (5-test cycle on principal candidates)

| Piece | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **P0** | low (cited prior commitments; no new content) | survives — without P0, downstream pieces would duplicate the prior commitments | yes — single source of truth for R1+R2 | yes — single paragraph reference | Combination converges (project-vocabulary reuse) | **ACTIONABLE** |
| **R1** | medium (refined verb-meaning + structural rule + asymmetric-failure direction + load-bearing single-item + worked examples; all newly-explicit at meaning layer) | survives content-axis Inversion (default-N fails); intervention-shape Inversion marked-inapplicable with structural reason | yes — directly transcribable into the structural-layer spec | yes | Combination + Domain Transfer (linguistic / kitchen / NLP) + Inversion (depth-iterated) + Constraint-ADD + Constraint-REMOVE all converge on default-one + structural-test pattern | **ACTIONABLE** |
| **R2** | low-medium (disambiguation makes an implicit distinction explicit) | survives content-axis Inversion (disambiguation IS needed); intervention-shape Inversion marked-inapplicable with parsimony reason | yes — directly transcribable as a single appended line | yes | Inversion + Constraint-ADD converge | **ACTIONABLE** |

### Re-test trigger check

Does any surviving output's content imply re-testing of already-committed claims in this same artifact?

- **Domain Transfer (linguistic sentence segmentation)** surfaces an observation: the default-one bias has a natural NLP analog. This reinforces R1; no committed claim contradicted.
- **Constraint-ADD ("Itemize MUST emit count = 1 always")** surfaces a boundary test: the never-multi extreme fails. This reinforces R1's bias-but-not-absolute commitment; no committed claim contradicted.
- **Inversion existence-axis ("Itemize = zero operations")** surfaces a boundary test: omitting Itemize entirely loses the multi-task-detection capability. This reinforces P0's "itemization still applies in the verb-meaning"; no committed claim contradicted.
- **No RE-TEST TRIGGER fires.** All committed claims survive the candidate set's content.

## Phase 3.5 — Assembly check

Do P0 + R1 + R2 compose into a coherent refinement applicable to the prior 15-39 finding?

**Yes.** Applying P0 (cite preserved commitments) + R1 (replace §2 Itemize text) + R2 (append to §10 NOT-list category 4) to the prior 15-39 finding's structural-layer instantiation produces the SV6 refinement.

**Emergent value over individual pieces:**

- The **linguistic sentence-segmentation Domain Transfer analog** + the **kitchen recipe interpretation analog** + the **NLP default-one principle** collectively confirm the default-one bias is non-arbitrary — it's the natural pattern across multiple unrelated domains where a single utterance can be parsed as one or multiple units. The refined Itemize aligns with this cross-domain pattern.
- The **(subject, action, deliverable-shape) tuple test** + the **project's existing 5-meta-aspects framing reuse** make the structural test grounded in project vocabulary rather than newly invented — minimal new vocabulary, maximum project-coherence.
- The **count = 1 as a load-bearing signal** insight (R1) + the **multi-detection vs cross-item interpretation disambiguation** (R2) jointly prevent the two distinct collapses Itemize is vulnerable to: collapse into no-op (the single-item case feeling pointless without the load-bearing argument) and collapse into NOT-list violation (the multi-detection feeling like cross-item interpretation without the disambiguation).

**Assembly SURVIVES.** Ready for Critique.

## Phase 3.6 — Axis coverage check

Multiple orthogonal axes in the refinement:

| Axis | Piece(s) | Variant present? |
|---|---|---|
| Verb-meaning axis (what Itemize IS) | R1 | YES |
| Default-direction axis (one vs N) | R1 | YES |
| Structural-test axis ((subject, action, deliverable-shape) tuple) | R1 | YES |
| Asymmetric-failure axis (cost direction) | R1 | YES |
| Load-bearing axis (single-item case) | R1 | YES |
| Multi-detection vs interpretation axis | R2 | YES |
| Anchor axis (preserved commitments) | P0 | YES |

Every axis has at least one piece with a variant. **PASS.**

## Telemetry

- **Generators applied:** 4/4 (Combination · Absence Recognition · Domain Transfer · Extrapolation)
- **Framers applied:** 3/3 (Lens Shifting · Constraint Manipulation [both directions] · Inversion [depth-iterated; multi-axis check])
- **Mechanism coverage:** **FULL** (7/7).
- **Convergence signal:** **YES** — multiple mechanisms converge:
  - Domain Transfer (linguistic sentence segmentation) + Domain Transfer (kitchen recipe) + Combination (project-vocabulary reuse) + Constraint-REMOVE (no-bias-fails) → confirm default-one bias as cross-domain pattern.
  - Inversion (belief-axis: default-N fails) + Inversion (identity-axis: create-multi-task-structure-where-none fails) + Constraint-ADD (never-multi-fails) → confirm bias-but-not-absolute structure.
  - Absence Recognition (R1 + R2 content complete per decomposition Step 7) + Lens Shifting (spec-author transcribability) → confirm authoring readiness.
- **Survivors tested:** 3/3 principal candidates passed the 5-test cycle; all dispositions ACTIONABLE.
- **Failure modes observed:** **none.**
  - Not Premature Evaluation.
  - Not Single-Mechanism Trap (7 mechanisms applied; convergence positive).
  - Not Early Frame Lock (Inversion-candidates generated at every meta-decision piece; intervention-shape-axis Inversion at both property-(v) pieces).
  - Not Innovation Without Grounding (every survivor tested).
  - Not Mechanism Exhaustion (3/3 survivors).
  - Not Survival Bias (Inversion-candidates were surfaced and tested for every meta-decision piece; the prior-step never-generate variant did not fire).

### Production-task additional telemetry

- **Per-piece mechanism log:**
  - `P0: [Combination:content, Inversion:content]`
  - `R1: [Combination:content, Domain Transfer:content (NLP), Domain Transfer:content (kitchen), Inversion:content (multi-axis: belief + identity + existence), Constraint-ADD:content, Constraint-REMOVE:content, Inversion:intervention-shape, Lens Shifting:content]`
  - `R2: [Inversion:content, Inversion:intervention-shape, Constraint-ADD:content]`
- **Meta-decision-piece classification:** P0/R1/R2 all META-DECISION.
- **Piece-level Inversion compliance:**
  - `P0: satisfied (content-axis Inversion generated, tested, principal SURVIVES)`
  - `R1: satisfied (content-axis Inversion tested + intervention-shape-axis Inversion marked-inapplicable with specific structural+contextual override)`
  - `R2: satisfied (content-axis Inversion tested + intervention-shape-axis Inversion marked-inapplicable with specific structural+contextual override)`
- **FLAG condition check:** zero violated; zero axis-misalignment violations.
- **Overall verdict: PROCEED.**

## RE-TEST trigger for Critique

Critique should pressure-test:

1. Does R1's worked positive/negative example pair (auth-bug+billing-feature / single-task-with-specs) genuinely bound the (subject, action, deliverable-shape) tuple test? Are there edge cases the examples don't cover?
2. Does R2's one-line disambiguation avoid neighbor-discipline references while still being clear? Does any phrasing accidentally name a neighbor?
3. Does the refinement's `refines:` against the prior finding's specific version handle future independent edits to the prior finding gracefully?
4. Self-reference: applied to THIS inquiry's Source Input, does refined Itemize fire 1 (correct) or N? Already confirmed at sensemaking; critique should re-verify.
5. Does the "user-language alignment" for R1 actually preserve user-verbatim "completely different tasks"?
6. Do the two intervention-shape-axis Inversion overrides (R1 REPAIR; R2 ADD-CONTENT) survive prosecution? Was the alternative shape genuinely inapplicable, or could it have been a viable design?
7. Does the count-perception terminology in R1 + R2 maintain consistency (the term used in R1 must match the term cited by R2's disambiguation)?
