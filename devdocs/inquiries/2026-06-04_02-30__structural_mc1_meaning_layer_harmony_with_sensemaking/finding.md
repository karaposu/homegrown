---
status: active
model: claude-opus-4-7[1m]
effort: unknown
refines: devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md
---

# Finding: Structural MC1 — Meaning-Layer Design + Harmony with Sensemaking

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md` (the LOOP_DIAGNOSE that diagnosed name-vs-meaning conflation in sensemaking's A8 Load-bearing concept test refinement and surfaced two MC1 candidates — surgical and structural).

**Revision trigger:** User-initiated discussion of structural MC1's meaning-layer form. The user wrote: *"lets discuss further structural MC1, how it should be how it shouldnt be etc. and make sure it is in harmony with rest of sensemaking and how to achieve that."* This is elaboration of the prior finding's structural-version candidate, not a re-opening of the LOOP_DIAGNOSE diagnosis.

**What's preserved:** every commitment of the 01-00 finding stands. H1-H4 attribution; the LOOP_DIAGNOSE Step 5 guardrail framing; MC2 (td-critique spec extension) and MC3 (surfacing spec refinement note) entirely untouched; surgical MC1's text preserved (and demonstrated to be a literal subset of structural MC1's text — see §7 below).

**What's changed:** the structural-version sketch of MC1 from the 01-00 finding (which was flagged as a promotion-candidate but not specified as authorable content) is fully detailed as a meaning-layer design here, with: the SHOULD form (the exact reformulated SV2+ row text), the SHOULDN'T list (8 failure modes with grounded refutations), the harmony anchors (8) and achievement moves (6), the sensemaking-native defect naming (without importing the harmony_layer.md analog's vocabulary the user used as a structural pattern reference), the Step 5 guardrail resolution, and the dual implementation gate.

**What's new:**
- A precise sensemaking-native naming for the defect structural MC1 addresses: *"A8's SV2+ row has by-location architecture but incomplete predicate-selection logic within the location."*
- A scope-bounded structural refinement framing that distinguishes this design from LOOP_DIAGNOSE Step 5's prohibited "broad fundamentals rewrites."
- A dual implementation gate (promotion criterion OR explicit user override at MED confidence) as a user-facing decision.
- The recursion-fitness preview confirming the reformulated A8 SV2+ correctly identifies "structural MC1" itself as meaning-aspect-load-bearing when applied to this inquiry's own Source Input.

**Migration:** the 01-00 finding's MC1 candidate is split structurally into two implementation choices (surgical / structural), with this finding providing the meaning-layer specification for the structural version. Implementation cadence is the user's choice: surgical-first-then-structural, or structural directly. Both lead to the same end state.

## Question

From `_branch.md`:

**Question.** Is structural MC1 a "surgical edit which does not change harmony of sensemaking" or "bigger than that" — and what is the right meaning-layer form of structural MC1 such that it (a) closes the underlying defect (A8's SV2+ predicate verifies the term-aspect when the load-bearing aspect of a user-named-with-LLM-authored-meaning concept is the meaning) by reformulating the predicate-selection logic without over-generalizing into vagueness or under-generalizing into a one-subclass fix; (b) preserves A8's verb-meaning + definition + by-location architecture + failure-mode connection + meta-inspection hook; (c) harmonizes with sensemaking's purposive character, illustrative-not-exhaustive principle, meta-inspection hook architecture, Phase 5 multi-sub-aspect precedent, sub-linear-growth pattern, and Accommodation-trigger warning; (d) names the defect in sensemaking-native vocabulary (without importing the harmony_layer.md analog's terms); (e) honors the LOOP_DIAGNOSE Step 5 guardrail (broad protocol rewrites deferred until ≥5-10 instances) by committing the meaning-layer design without committing implementation until promotion criteria fire OR the user explicitly authorizes?

**Goal.** Concrete enough to read as a meaning-layer settlement that a structural-layer authoring inquiry can transcribe; honest about the Step 5 tension; presents the user's implementation choice neutrally; preserves every A8 fundamental that the 01-00 finding's diagnosis depends on.

**What would fail:** vague restatement of "make A8 better"; over-generalizing to "test all aspects of all concepts"; under-generalizing to a one-subclass fix indistinguishable from surgical MC1; ignoring the Step 5 guardrail; creating disharmony with another sensemaking principle (Phase 5's multi-sub-aspect pattern, the meta-inspection hooks, the failure-mode framework, the illustrative-not-exhaustive rule); circularity in the test predicate; silently importing the harmony_layer.md framework's vocabulary; rewriting Phase 3 or any other sensemaking section unnecessarily.

## Finding Summary

- **Structural MC1 is a scope-bounded structural refinement, not a broad fundamentals rewrite.** It preserves every A8 fundamental that the 01-00 finding's diagnosis identifies (verb-meaning; load-bearing-concept definition; by-location architecture; Premature Stabilization #2 failure-mode connection; H4 meta-inspection hook) and adds by-aspect logic within only the SV2+ row of A8 — using A8's own explicit extensibility hook (the *"illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates"* sentence at line 424 of the live spec).

- **The right meaning-layer form is two coordinated moves on A8's SV2+ row:**
  - **Move 1 (predicate-selection reframe):** before running the test predicates, the LLM running A8 at SV2+ first identifies *which aspect* of the concept is load-bearing — the TERM, the MEANING, or both — based on first-order observation of what the user supplied vs what the loop created.
  - **Move 2 (relabel existing 2 + add new):** the existing two sub-tests (domain-terminology-vs-external-default + user-language alignment) are preserved as the **term-aspect instantiation** (for concepts where the loop coined the term — e.g., LLM-coined neologisms); a new sub-test is added as the **meaning-aspect instantiation** (for concepts where the loop auto-completed the mechanism description — e.g., user-named operations with LLM-authored mechanism). For concepts where both aspects are load-bearing, both tests fire.

- **The defect, named in sensemaking-native vocabulary:** *"A8's SV2+ row has by-location architecture but incomplete predicate-selection logic within the location: it implicitly treats the term-aspect as always load-bearing at SV2+, while A8's verb-meaning mandates testing the LOAD-BEARING aspect (whichever aspect that is). For concepts where the load-bearing aspect is the meaning, the SV2+ predicate runs a test of the wrong aspect — an in-spec internal inconsistency with A8's own verb-meaning."* The harmony_layer.md analog (from a separate translation framework) was the user's shape-source for naming this defect; sensemaking-native translation reuses A8's own vocabulary throughout (no Tier 3 / audit / register terms in the load-bearing text).

- **Harmony with the rest of sensemaking** is achieved via eight specific anchor preservations:
  1. A8 verb-meaning preserved verbatim
  2. A8 load-bearing-concept definition preserved verbatim
  3. A8 by-location architecture preserved (only extended to by-location-AND-by-aspect within SV2+)
  4. A8 Premature Stabilization #2 failure-mode connection preserved
  5. A8 H4 meta-inspection hook relationship preserved
  6. Phase 5's existing multi-sub-aspect pattern (the strongest in-spec precedent) mirrored at SV2+
  7. Sub-linear-growth pattern (~8-10 lines edit, within budget per line 234) honored
  8. Accommodation-trigger warning honored (the reframe completes A8's own by-location logic; it is not an exception added to handle one observed case)

  Six achievement moves accomplish these: preserve verb-meaning verbatim; preserve definition verbatim; extend by-location to by-location-AND-by-aspect within SV2+; mirror Phase 5's multi-sub-aspect pattern; use A8's explicit extensibility hook; make the load-bearing-aspect determination an OPERATION (first action of A8 at SV2+, asking "what did the user supply vs what did the loop create?") rather than a presupposition.

- **The Step 5 guardrail is honored** because structural MC1 is **scope-bounded**: it preserves all A8 fundamentals; it uses A8's own anticipated extensibility hook; the total edit is approximately 8-10 lines (within the spec's own sub-linear-growth budget). LOOP_DIAGNOSE Step 5's prohibition on "broad fundamentals rewrites" addresses changes that rewrite a discipline's identity or architecture — structural MC1 changes neither.

- **The dual implementation gate** (a) wait for promotion criterion to fire (3rd LOOP_DIAGNOSE chain producing the same shape via a different subclass — pattern-confidence rises to HIGH); OR (b) the user, having seen this design, may authorize implementation directly at MED confidence. **This is a user decision** — the finding presents both options with their bases and does not privilege either. Implementation cadence is also user choice: surgical-MC1-first-then-structural-later, or structural-MC1 directly. Both reach the same end state.

- **Scope discipline:** only A8's SV2+ row is modified. Phase 1 and Phase 5 rows of A8 are explicitly out of scope — the same reformulation logic might apply if future LOOP_DIAGNOSE inquiries surface analogous defects there, but that's flagged as research frontier, not authorized for this inquiry.

- **A small parallel structural-layer update is flagged:** H4's calibration column (line 226 of the sensemaking spec) currently lists Phase 5's three sub-aspects but not SV2+'s; after structural MC1 lands, SV2+ has three sub-aspects (two term + one meaning) and the H4 calibration column should be updated to enumerate them. Minor; flagged for the structural-layer authoring step.

- **Recursion-fitness preview:** applied to this inquiry's own Source Input, the reformulated A8 SV2+ correctly identifies "structural MC1" itself as meaning-aspect-load-bearing (the user supplied the term in the prior conversation turn; the LLM has been articulating the meaning across this inquiry). The design fits when applied to itself.

## Finding

The user's prior turn surfaced two MC1 candidates from the 2026-06-04_01-00 LOOP_DIAGNOSE finding: a *surgical* version that adds one new sub-aspect under A8's SV2+ row for the user-named-operations subclass, and a *structural* version that reframes A8's underlying predicate-selection logic. The 01-00 finding chose the surgical version per LOOP_DIAGNOSE's Step 5 guardrail (don't propose broad fundamentals rewrites from 2 instances of MED-confidence pattern claim). The user then asked the question this finding answers: is structural MC1 surgical or bigger than that, and what is the right meaning-layer form that harmonizes with sensemaking?

The honest answer requires looking at the live A8 spec text. At `cognitive_harness/sense-making/references/sensemaking.md` lines 418-432, A8 has a verb-meaning ("Load-bearing concept test"), a definition of load-bearing concept, a by-location architecture (test predicates are appropriate to where the concept appears), three location-specific predicate rows (Phase 1 / SV2+ / Phase 5), a failure-mode connection (Premature Stabilization #2), a META-INSPECTION cross-reference (A8 is the H4 hook check), and — at the end of the Phase 5 row — an explicit extensibility clause: *"The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates."* The defect the 01-00 LOOP_DIAGNOSE diagnosed lives at the SV2+ row.

The SV2+ row currently reads: *"SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions → test domain-terminology-vs-external-default plus user-language alignment. Counter-interpretation: 'Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?'"* Note the structure: the row tests *two* things, both on the term-aspect of the concept (terminology-vs-default + user-language alignment). Both pass trivially for concepts the user named directly: the user supplied the term, so the term is in the user's vocabulary by construction.

When the user names an operation (e.g., "Itemize") without supplying a mechanism description, what was created by the loop is the *meaning* (the mechanism description), not the term. A8's verb-meaning mandates testing the *load-bearing aspect* of the concept — and for this subclass, the load-bearing aspect is the meaning. But the SV2+ row's predicate runs term-aspect tests regardless. That is the defect the 01-00 LOOP_DIAGNOSE identified, and it is the defect structural MC1 addresses.

The user provided a precise shape for naming this defect — an analog from a separate translation framework (the harmony_layer.md document, which classifies "register consistency" as Tier 3 when the source text uses register-alternation as a structural device, in which case it should be Tier 1). The analog's shape: *"active misclassification of a feature's tier when the source uses the feature structurally; audit instrument inherits the misclassification's blindness."* Translated to sensemaking-native vocabulary: A8's SV2+ row has by-location architecture but incomplete predicate-selection logic within the location — it locks the predicate to the term-aspect when the load-bearing aspect is whichever-aspect-is-load-bearing-for-this-concept. The defect is not absence of guidance; it is the SV2+ row's predicate actively running a test of the wrong aspect for the demonstrated subclass.

That sharpens the question of what structural MC1's right form is. Surgical MC1 (adding a third sub-test under SV2+ for the meaning-aspect case) catches the demonstrated subclass but doesn't fix the underlying logic — the SV2+ row still presents term-aspect testing as its primary stance, with the meaning-aspect as an exception. Structural MC1 fixes the underlying logic by reframing what the SV2+ row's predicate-selection does.

### 1. The SHOULD form — the exact reformulated SV2+ row

The structural-layer authoring inquiry that eventually amends A8's spec at line 423 transcribes the following block in place of the current SV2+ bullet:

> *— SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions. **First identify which aspect of the concept is load-bearing — the TERM, the MEANING, or both** — based on what the loop CREATED versus what the user SUPPLIED. Then run the test predicate appropriate to that aspect:*
>
> > *(i) **For concepts where the load-bearing aspect is the TERM** (the loop coined the term itself; the user did not name it): test domain-terminology-vs-external-default plus user-language alignment. Counter-interpretation: "Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?"*
> >
> > *(ii) **For concepts where the load-bearing aspect is the MEANING** (the user supplied the term — typically by naming an operation or concept — and the loop auto-completed the mechanism description or interpretive content): test authored-meaning-vs-user-intent. Counter-interpretation: "Is the LLM-authored mechanism description user-intended for the operation the user named, or is it an intuitive default that may misalign with user intent?" Confidence is determined by direct user empirical test when possible; fallback test = apply the authored mechanism literally to the inquiry's own Source Input; if literal application diverges from intuitive expectations, the authored meaning may misalign.*
> >
> > *(iii) **For concepts where BOTH aspects are load-bearing** (the loop coined the term AND the loop auto-completed the meaning): both tests fire.*

The load-bearing-aspect determination is an OPERATION of A8 at SV2+ (its first action), not a presupposition. The LLM running A8 asks "what did the user supply for this concept vs what did the loop fill in?" — a first-order observation of the inquiry's Source Input vs the loop's downstream-generated content — before selecting which test predicate to run.

### 2. What structural MC1 should NOT be — 8 failure modes avoided

1. **Over-generalization** — bounded to A8's SV2+ row; the aspect choices are TERM / MEANING / both (a small enumerable set), not arbitrary. The reformulation does not propose "test everything about every concept everywhere."

2. **Under-generalization** — the reframing operates at the predicate-selection level (Move 1), not the patch level. Future SV2+ subclasses with different load-bearing-aspect compositions (e.g., concepts where structure is the load-bearing aspect — concept-positions in a taxonomy) fit cleanly under the same reframe.

3. **Replacement of existing tests** — A8's existing two sub-tests (domain-terminology-vs-external-default + user-language alignment) are preserved as the term-aspect instantiation. Same work done for LLM-coined neologisms.

4. **Disharmony with existing patterns** — the reframe mirrors A8's Phase 5 row, which already uses the multi-sub-aspect pattern (*"test multiple sub-aspects: proxy-vs-structural ... discoverability ... user-language alignment"*). SV2+ adopts the same pattern Phase 5 already exhibits.

5. **Circularity** — the load-bearing-aspect determination is an OPERATION (first-order observation of what supplied vs what filled-in), not a presupposition that secretly assumes the question's answer.

6. **Architectural disruption** — A8's verb-meaning, definition, by-location architecture, failure-mode connection, and meta-inspection hook are all literally preserved. Only the SV2+ row's predicate-selection statement is amended.

7. **Vocabulary import** — no harmony_layer.md terms (Tier 3 / audit instrument / register / active misclassification) appear in the reformulated A8 text. The translation to sensemaking-native vocabulary (by-location architecture, load-bearing aspect, term-aspect / meaning-aspect, predicate-selection) is what lands in the spec.

8. **Accommodation-trigger exception-patching** — the new sub-test is part of a coherent by-aspect logic, not an exception added to handle one observed case. The reframe completes A8's own by-location logic with by-aspect logic; the Accommodation trigger warns against patches, and this is reframe-not-patch.

### 3. How it harmonizes — 8 anchor preservations + 6 achievement moves

| # | Harmony anchor | Achievement move(s) |
|---|---|---|
| 1 | A8 verb-meaning ("Load-bearing concept test") | Preserve verbatim. The reformulated SV2+ row is a more faithful instantiation of the verb-meaning (test the load-bearing aspect, whichever it is), not a deviation. |
| 2 | A8 load-bearing-concept definition ("one whose presence materially affects downstream stages") | Preserve verbatim. Unchanged. |
| 3 | A8 by-location architecture ("test predicate appropriate to the concept's location") | EXTEND within SV2+ to by-location-AND-by-aspect. The architecture is generalized at SV2+; not replaced. |
| 4 | A8 failure-mode connection (Premature Stabilization #2) | Preserve. The reformulation strengthens this connection — it closes a Premature Stabilization sub-mode (LLM-auto-completed meaning carried forward without test). |
| 5 | A8 meta-inspection H4-hook relationship | Preserve. A8 remains the H4-hook check at Phase 3 close. (Parallel structural-layer concern: H4's calibration column should also enumerate SV2+ sub-aspects — see §8.) |
| 6 | Phase 5 multi-sub-aspect pattern | MIRROR at SV2+. The strongest in-spec precedent; Phase 5 already exhibits the pattern. |
| 7 | Sub-linear growth pattern (~5-10 lines for sub-aspects per the spec's own line 234) | Total edit is approximately 8-10 lines (within budget). The reformulation uses A8's own explicit extensibility hook. |
| 8 | Accommodation-trigger warning (don't add exceptions; reframe instead) | Make the load-bearing-aspect determination an OPERATION (not a presupposition); the reframe is structural-completion-of-A8's-own-logic. |

The six achievement moves cross-cutting the table: preserve verb-meaning verbatim; preserve definition verbatim; extend by-location to by-location-AND-by-aspect within SV2+; mirror Phase 5's multi-sub-aspect pattern; use A8's extensibility hook; make the load-bearing-aspect determination an OPERATION.

### 4. The defect named in sensemaking-native vocabulary

*"A8's SV2+ row has by-location architecture but incomplete predicate-selection logic within the location: it implicitly treats the term-aspect as always load-bearing at SV2+, while A8's verb-meaning mandates testing the LOAD-BEARING aspect (whichever aspect that is). For concepts where the load-bearing aspect is the meaning (user-named-with-LLM-authored-meaning being the demonstrated subclass), the SV2+ predicate runs a test of the wrong aspect — an in-spec internal inconsistency with A8's own verb-meaning."*

*Footnote on the analog.* The shape of this defect was named by the user via an analog from a separate translation framework (the harmony_layer.md document referenced in the prior conversation: "active misclassification of a feature's tier when source text uses the feature structurally; audit instrument inherits the misclassification's blindness"). Translation to sensemaking-native vocabulary is given in the paragraph above; the harmony_layer.md framework's specific terms (Tier 3 / audit / register-as-alternation / etc.) are not imported into the reformulated A8 text or into the sensemaking spec.

### 5. Step 5 guardrail resolution — scope-bounded structural refinement

The LOOP_DIAGNOSE protocol's Step 5 guardrail states: *"Do not propose broad fundamentals rewrites from one weak correction chain. Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVLw findings show a stable internal method."* The current pattern-claim (per the 2026-06-04_01-00 finding) is MED confidence based on 2 instances (11-46 + 01-00); broad rewrites are deferred until ≥5-10 instances accumulate.

Structural MC1 is **scope-bounded structural refinement** — not broad fundamentals rewrite. Specifically:
- A8's verb-meaning is preserved verbatim
- A8's load-bearing-concept definition is preserved verbatim
- A8's by-location architecture is preserved (only extended to by-location-AND-by-aspect within SV2+)
- A8's Premature Stabilization #2 failure-mode connection is preserved
- A8's H4 meta-inspection hook relationship is preserved
- Total spec edit is approximately 8-10 lines (within the sub-linear-growth budget per line 234)
- The reformulation uses A8's own explicit extensibility hook (line 424: *"the illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates"*)

None of A8's fundamentals are rewritten. The reformulation IS the spec's own anticipated extensibility pattern applied to SV2+.

### 6. The dual implementation gate — the user's choice

Even as scope-bounded structural refinement, structural MC1's implementation requires the user's decision because the pattern-confidence is MED (2 instances). Two gate options:

- **(a) Promotion-criterion gate** — same as the 2026-06-04_01-00 finding's MC1 gate. Implement structural MC1 when a 3rd LOOP_DIAGNOSE chain produces the same shape via a different subclass; pattern-confidence rises to HIGH, broader confidence justifies implementation. Until then, surgical MC1 (adding only the meaning-aspect sub-test under SV2+ without reframing predicate-selection) is sufficient as the narrow refinement.

- **(b) Explicit user override at MED confidence** — the user, having seen this meaning-layer design, may authorize implementation of structural MC1 directly on the basis that the reformulation is scope-bounded — it preserves all A8 fundamentals (verified line-by-line at critique D1), uses A8's own extensibility hook, and is approximately 8-10 lines edit.

Both options are valid. The user chooses based on appetite for implementing at MED confidence vs preferring to accumulate more evidence first. **This is a user decision; not a recommendation.** The finding presents the choice without privileging either option.

### 7. Relationship to surgical MC1 — nested, not alternatives

Surgical MC1 (from the 2026-06-04_01-00 finding) adds one new sub-aspect under A8's SV2+ row for *"user-named operations whose mechanism description is LLM-authored"* with the predicate *"is the authored mechanism description user-intended for this operation name, or is it an LLM intuitive default?"* Minimum text addition.

Structural MC1 (this finding) INCLUDES surgical MC1's sub-test text verbatim as sub-test (ii) of §1 above, PLUS Move 1 (predicate-selection reframe) PLUS sub-test (i) (relabeling the existing two sub-tests as the term-aspect instantiation) PLUS sub-test (iii) (the both-aspects branch).

**Implementation cadence options:**
- **Surgical-first-then-structural:** implement surgical MC1's sub-test alone now; later (when the promotion criterion fires or the user authorizes structural directly) add the predicate-selection reframe + relabeling. Same end state.
- **Structural directly:** implement all of structural MC1's moves at once.

The user's choice between these is implementation-cadence, not design-direction — both reach the same end state.

### 8. Scope discipline — SV2+ only; Phase 1 + Phase 5 = research frontiers

Structural MC1 modifies **only the SV2+ row** of A8's Load-bearing concept test refinement. Phase 1 (which tests Constraints + Foundational Principles via "domain-property-vs-external-default") and Phase 5 (which already uses multi-sub-aspect pattern with proxy-vs-structural / discoverability / user-language alignment) are explicitly **out of scope** for this inquiry.

The same reformulation logic (by-location → by-location-AND-by-aspect within each location) might apply to Phase 1 — Constraints might have scope-aspect, criterion-aspect, etc. — or to Phase 5 — committed concepts might have aspects beyond the already-listed three. However, the prior LOOP_DIAGNOSE evidence (11-46 + 01-00, 2 instances) is both at SV2+ (operation names; neighbor names). Extending the reformulation to Phase 1 + Phase 5 without LOOP_DIAGNOSE evidence at those phases would be the broad-rewrite Step 5 warns against. Phase 1 + Phase 5 are flagged as **research frontiers**: future LOOP_DIAGNOSE inquiries that surface analogous defects at those phases would authorize parallel reformulation.

### 9. Parallel structural-layer update at H4

The META-INSPECTION section's H4 hook (concept names) has a calibration column at line 226 listing Phase 5's three sub-aspects (*"proxy-vs-structural, discoverability, user-language alignment"*) but not SV2+'s. After structural MC1, SV2+ has three sub-aspects (two term + one meaning). H4's calibration column should be updated in parallel at the time of the A8 amendment to enumerate SV2+ sub-aspects too. **Small structural-layer parallel-update; not load-bearing for the meaning-layer design.**

### 10. Recursion-fitness preview — the design fits when applied to itself

Apply the reformulated A8 SV2+ to this inquiry's own Source Input: the load-bearing concept is "structural MC1" itself; the user supplied the term *"structural MC1"* in the prior conversation turn (when the user named the candidate they wanted to discuss); the LLM has been articulating the meaning across this inquiry. Determination operation: TERM was user-supplied; MEANING is what the loop is filling in. Load-bearing aspect = MEANING. Apply sub-test (ii): *"is the LLM-articulated 'structural MC1' user-intended, or an intuitive default?"* The user provided constraint on meaning via the harmony_layer.md analog (the shape of the defect); SV6 of this inquiry articulated the precise meaning; the user verifies at finding-review time whether the articulated meaning matches their intent. The reformulated SV2+ correctly identifies the load-bearing aspect and runs the appropriate test. **Design fits when applied to itself.**

## Next Actions

### MUST

- **What:** The user makes the dual-gate choice. Either:
  - **(a)** Continue with surgical MC1 as the narrow refinement; wait for the promotion criterion (3rd LOOP_DIAGNOSE chain producing the same shape via a different subclass) to authorize structural MC1 implementation; OR
  - **(b)** Authorize structural MC1 implementation directly at MED confidence on the basis that the reformulation is scope-bounded per §5 above.
  - **Who:** the user.
  - **Gate:** condition-bound — the user reads this finding and makes the choice.
  - **Why:** the meaning-layer design is settled; implementation depends on the user's explicit decision per the LOOP_DIAGNOSE Step 5 framework + the user's authority to override at MED confidence after seeing the design.

### COULD

- **What:** If gate (b) is chosen, author the structural-layer amendment to `cognitive_harness/sense-making/references/sensemaking.md` — replace the existing SV2+ bullet at line 423 with the reformulated text from §1 of this finding; update H4's calibration column at line 226 in parallel to enumerate SV2+ sub-aspects (2 term + 1 meaning).
  - **Who:** spec editor.
  - **Gate:** condition-bound — gate (b) authorized.
  - **Why:** implements the meaning-layer design as a sensemaking spec edit.
  - **Depends-on:** MUST item "gate choice." GATED.

- **What:** If gate (a) is chosen, surgical MC1 is implemented per the 2026-06-04_01-00 finding's MC1 — add the meaning-aspect sub-test under A8's SV2+ row without reframing predicate-selection. Structural MC1 is held until the promotion criterion fires.
  - **Who:** spec editor.
  - **Gate:** condition-bound — gate (a) authorized.
  - **Why:** narrow refinement honoring Step 5 guardrail at 2-instance MED confidence; the predicate-selection reframe can be added later when evidence accumulates.
  - **Depends-on:** MUST item "gate choice." GATED.

### DEFERRED

- **What:** Phase 1 + Phase 5 analogous reformulation — extending the by-location-AND-by-aspect logic to A8's Phase 1 and Phase 5 rows.
  - **Gate:** condition-bound — a future LOOP_DIAGNOSE inquiry surfaces an analogous defect at Phase 1 or Phase 5.
  - **Why (if revived):** completes the by-aspect logic across A8's three location rows; until then, applying the reformulation without LOOP_DIAGNOSE evidence would be the broad-rewrite Step 5 warns against.

- **What:** Investigation of whether the structural-gap pattern (incomplete predicate-selection within a location) generalizes beyond A8 to other sensemaking refinement notes (e.g., the Specific-vs-pattern recognition cue refinement at line 430, or the Accommodation trigger refinement at line 466).
  - **Gate:** condition-bound — observable when ≥1 LOOP_DIAGNOSE chain produces a similar pattern at a different sensemaking refinement note.
  - **Why (if revived):** would suggest a broader pattern (incomplete-test-target-within-location-architecture) potentially warranting cross-refinement-note attention.

## Reasoning

### Why scope-bounded structural refinement is honest framing

The LOOP_DIAGNOSE Step 5 guardrail's specific text warns against "broad fundamentals rewrites from one weak correction chain." What counts as a fundamentals rewrite? The test is preservation of the discipline's identity, definition, architecture, and load-bearing connections. For A8 specifically: verb-meaning preserved (verbatim); definition preserved (verbatim); by-location architecture preserved (extended within SV2+ only); failure-mode connection preserved; meta-inspection hook preserved; existing two SV2+ sub-tests preserved (relabeled); total edit within sub-linear-growth budget; uses the spec's own anticipated extensibility hook. The reformulation does not rewrite A8's fundamentals; it completes A8's own by-location logic with by-aspect logic at one location.

This is a substantive structural claim, not a rhetorical one. Critique's D1 dimension at this inquiry verified the preservation line-by-line against the live spec; D4 verified the framing under adversarial prosecution; D8 verified each of the 8 harmony anchors literally rather than relying on claimed preservation. The scope-bounded framing held under all three.

### Why the user's harmony_layer.md analog is the right shape but the wrong vocabulary

The user named the defect's shape via an analog from a separate translation framework. The analog has two parts: active misclassification of a feature within a tier system when the source uses the feature structurally; audit instrument inheriting the misclassification's blindness. Both parts apply to A8 + critique's dimension-extraction:

- A8's SV2+ row actively tests two name-aspect sub-tests; for concepts where the load-bearing aspect is the meaning, this is testing the wrong aspect (active misclassification).
- Critique's Phase 0 Dimension Construction extracts dimensions from sensemaking's commitments; if sensemaking's commitments are name-aspect-shaped at SV2+, critique inherits the blindness (audit instrument inheriting).

The analog correctly names the structural shape. But importing the analog's vocabulary into the A8 spec (Tier 3 / audit instrument / register) would violate the sensemaking spec's self-containment + create vocabulary inconsistency with the rest of the spec. The right move is to translate the shape into sensemaking-native vocabulary that uses A8's own terms: by-location architecture, load-bearing aspect, predicate-selection logic, in-spec internal inconsistency. The footnote acknowledges the analog as inspiration without importing its terms.

### Why the dual implementation gate is honest rather than dodging the decision

A simpler finding could pick one gate and recommend it. Why offer two?

Because the choice depends on user appetite that I cannot judge. Option (a) (wait for promotion criterion) honors the LOOP_DIAGNOSE Step 5 guardrail strictly — wait for evidence to accumulate before structural changes. Option (b) (explicit user override at MED confidence) treats the design's scope-bounded nature as sufficient basis for implementation given the design's preservation of A8 fundamentals — but this is a judgment call the user is better positioned to make than I am.

Critique D6 at this inquiry caught a subtle advocacy reading in the prior draft of (b)'s description (a sentence about the Step 5 guardrail's "spirit" being about broad rewrites not scope-bounded ones — which would have biased the presentation toward (b)). The R-1 refinement applied at compile-time removed that sentence; the (b) option now states its factual basis without interpretation. The neutrality is genuine.

### Why preserving A8's existing 2 sub-tests as the term-aspect instantiation matters

A8's existing two sub-tests (domain-terminology-vs-external-default + user-language alignment) genuinely test something useful for a subclass of load-bearing concepts: LLM-coined neologisms (where the loop created the term, not the user). For these concepts, the term IS the load-bearing aspect — the LLM coined a term, and the test asks whether the coining produced a term aligned with project vocabulary and user language. The 01-00 LOOP_DIAGNOSE didn't argue these tests were wrong; it argued they were applied to the wrong concept-subclass at SV2+. Preserving them as the term-aspect instantiation accomplishes both: keeps the existing utility for LLM-coined neologisms; clarifies that they were never meant for the user-named-with-LLM-meaning subclass.

This is also what avoids the Accommodation-trigger warning's failure mode. If structural MC1 just added a third sub-test as an "exception" while leaving the SV2+ row's implicit assumption (term-aspect-always-load-bearing) intact, that would be exception-patching — the design pattern Accommodation-trigger explicitly warns against. The reframe-relabel-add approach makes the by-aspect logic coherent rather than exception-driven.

### Why "load-bearing-aspect determination as OPERATION" is first-order observation, not circular

A natural worry about Move 1 (the predicate-selection reframe): doesn't the LLM need to know in advance which aspect is load-bearing in order to "identify" it? Wouldn't that presume the question the test is supposed to ask?

The determination's question is operational: *"what did the user supply vs what did the loop create for this concept?"* That's first-order observation. The user's input is preserved verbatim in `_branch.md`'s Source Input section; the loop's output is generated downstream and observable. Comparing what's in Source Input (term? meaning? both?) to what's auto-completed (term? meaning? both?) is direct observation, not presupposition of which aspect is load-bearing.

For concepts where the user supplied just a term and the loop filled in the meaning, the loop-supplied content IS the meaning — and whether that loop-supplied meaning is user-intended IS the load-bearing question. So the determination's "what was created" answer correctly directs the test to the meaning-aspect. The framing is grounded; not circular.

### Why the recursion-fitness preview matters

A meaning-layer design about sensemaking that doesn't fit when applied to its own design process would be structurally suspect. The recursion-fitness preview applied the reformulated A8 SV2+ to this inquiry's own Source Input and confirmed: the load-bearing concept "structural MC1" was identified as meaning-aspect-load-bearing (the user supplied the term; the LLM articulated the meaning); the meaning-aspect test would interrogate whether the LLM-articulated meaning is user-intended. The user can verify at finding-review whether the SV6 articulation matches their intent.

This isn't a proof that the design is correct — only the user's verdict at finding-review will settle that — but it confirms the design doesn't fail at its own self-application, which is a structural minimum for meaning-layer designs about sensemaking processes.

## Open Questions

### Monitoring

- **Observable after the user makes the gate choice.** If (b), observe whether the reformulated A8 SV2+ correctly handles the next ≥2 multi-operation discipline-design inquiries. If (a), observe whether a 3rd LOOP_DIAGNOSE chain with the same shape arrives via a different subclass.
- **Observable after structural MC1 is implemented (if gate (b))** — does Critique's Phase 0 Dimension Construction independently surface the per-operation-verb-meaning probe as a project-specific risk axis (per MC2 from the 01-00 finding) on the next multi-operation discipline-design inquiry?

### Refinement Triggers

- **If a structural-layer author applies P1's text to the live spec and discovers the layout doesn't fit cleanly** (e.g., the sub-bullets format clashes with the existing spec's prose style), the meaning-layer design is preserved; the structural-layer author adjudicates layout (prose-with-sub-bullets vs 2-column table vs other).
- **If H4's calibration column update is missed at structural-layer authoring time** — flag for parallel-update follow-up; doesn't block the SV2+ amendment but should land before the next inquiry that uses H4.
- **If the reformulated SV2+ predicate misfires on an edge case** (e.g., the LLM determines the wrong aspect as load-bearing for some concept), the structural-layer spec may need to add concrete worked examples disambiguating the determination operation. Trigger: 2+ observed misfires.

### Research Frontiers

- **Whether by-aspect logic generalizes beyond term/meaning** to structure-aspect (concept-positions in a taxonomy), relational-aspect (concept-roles in a network), or other aspect-axes. The current design enumerates two aspects (term, meaning) plus a both branch; future evidence may surface a third or fourth aspect-axis warranting an additional sub-test.
- **Whether the same reformulation logic applies to Phase 1 or Phase 5 rows of A8** — these are flagged as research frontiers in §8; investigation gated by future LOOP_DIAGNOSE evidence.
- **Whether the structural-gap pattern (incomplete predicate-selection within a location) generalizes to other sensemaking refinement notes** — Specific-vs-pattern recognition cue, Accommodation trigger, etc. could in principle have analogous defects; flagged as deferred per the Next Actions DEFERRED list.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets discuss further structural MC1 , how it should be how it shouldnt be etc. and make sure it is in harmony with rest of sensemaking and how to achieve that.
```

</details>
