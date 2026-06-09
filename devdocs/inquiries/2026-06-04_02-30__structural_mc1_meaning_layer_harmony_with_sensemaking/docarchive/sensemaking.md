## User Input

`devdocs/inquiries/2026-06-04_02-30__structural_mc1_meaning_layer_harmony_with_sensemaking/_branch.md` (prior: `surfacing.md` — 39 items across 7 regions; 9 frontier flags P1–P9; P1+P3+P4+P5 flagged load-bearing-first)

---

# Sensemaking — Structural MC1 (Meaning-Layer Design + Harmony with Sensemaking)

## SV1 — Baseline understanding
"Structural MC1 reframes A8's SV2+ predicate-selection: first identify which aspect is load-bearing (term / meaning / both), then run the appropriate test. The existing 2 sub-tests become the term-aspect instantiation; a new sub-test for the meaning-aspect instantiation is added. A8's identity is preserved; the reframe extends Phase 5's existing multi-sub-aspect pattern; uses the spec's own extensibility hook; honors sub-linear-growth + Accommodation-trigger warning."

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- **C1 — Layer = MEANING.** Structural and process out of scope (next-run).
- **C2 — A8's verb-meaning preserved verbatim** ("Load-bearing concept test").
- **C3 — A8's load-bearing-concept definition preserved verbatim** ("one whose presence materially affects downstream stages").
- **C4 — A8's by-location architecture preserved** ("test predicate appropriate to the concept's location" — line 420).
- **C5 — A8's failure-mode connection preserved** (Premature Stabilization #2).
- **C6 — A8's meta-inspection H4-hook relationship preserved** (per line 432 cross-reference).
- **C7 — Self-containment** (memory `feedback_disciplines_self_contained`) — structural MC1's text must ground intrinsically.
- **C8 — Sub-linear growth pattern** (per line 234) — sub-aspect additions are 5-10 lines; full new sections are 30 lines. Structural MC1 fits the 5-10-line budget.
- **C9 — Accommodation-trigger warning** (per line 466) — must NOT be exception-patching; must be coherent reframe.

**Key insights:**
- **K1 (the precise nature of the defect — resolves P5 + P9).** Translating the harmony_layer.md analog into sensemaking-native terms: **A8's SV2+ row has two sub-tests, BOTH testing the TERM-ASPECT of the concept (terminology-vs-default + user-language alignment). For concepts where the user supplied the term and the LLM auto-completed the meaning (a recognized subclass demonstrated at the 11-46 + 01-00 LOOP_DIAGNOSE chains), the LOAD-BEARING aspect is the MEANING — not the term. A8's SV2+ predicate ACTIVELY runs term-aspect tests (which pass trivially — the user supplied the term verbatim, and the term is in user's language by construction) while leaving the meaning-aspect untested.** This is in-spec internal inconsistency: A8's verb-meaning mandates testing the LOAD-BEARING aspect; the SV2+ row's predicate is locked to the term-aspect regardless of which aspect is actually load-bearing. Sharpened from "A8 missed a case" → "A8's SV2+ predicate runs the wrong test for this subclass; the wrongness was masked because the term-aspect test PASSed trivially."
- **K2 (the SHOULD form — resolves P1).** Structural MC1 reframes A8's SV2+ row in **two coordinated moves**:

  - **Move 1 — Reframe the predicate-selection statement.** Current SV2+ row: *"SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions → test domain-terminology-vs-external-default plus user-language alignment."* Reformulated: *"SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions → first identify which aspect of the concept is load-bearing (the TERM, the MEANING, or both); then run the test predicate appropriate to that aspect."*

  - **Move 2 — Relabel existing 2 sub-tests as the term-aspect instantiation; add a new sub-test for the meaning-aspect instantiation.** The existing two sub-tests (domain-terminology-vs-external-default + user-language alignment) become the test for **"concepts where the load-bearing aspect is the TERM"** — e.g., LLM-coined neologisms where what was created is the term itself. The new sub-test reads: *"for concepts where the load-bearing aspect is the MEANING (e.g., user-named operations whose mechanism description was LLM-authored — the user supplied the name; what was created is the meaning), test authored-meaning-vs-user-intent. Counter-interpretation: 'Is the LLM-authored mechanism description user-intended for the operation the user named, or is it an intuitive default that may misalign with user intent?'"* For some concepts both aspects may be load-bearing; both tests fire.

- **K3 (the SHOULDN'T list — resolves P2).** The form above avoids 8 failure modes named in _branch.md (grounded refutations below at A1–A6 + listed in the SHOULDN'T section of SV6).
- **K4 (the achievement mechanism — resolves P4).** Six specific moves: (1) preserve A8's verb-meaning verbatim; (2) preserve A8's definition verbatim; (3) extend A8's by-location architecture to by-location-AND-by-aspect within SV2+; (4) mirror Phase 5's existing multi-sub-aspect pattern (the strongest in-spec precedent — Phase 5 already uses "test multiple sub-aspects" with 3 sub-aspects); (5) use A8's explicit extensibility hook ("the illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates"); (6) make the load-bearing-aspect determination an **OPERATION of A8** (A8's first action at SV2+: "what's load-bearing here — term, meaning, both?") rather than a presupposition.
- **K5 (sensemaking-native naming of the defect — resolves P5 final).** *"A8's SV2+ row has by-location architecture but incomplete predicate-selection logic within the location: it implicitly treats the term-aspect as always load-bearing at SV2+, while A8's verb-meaning mandates testing the LOAD-BEARING aspect (whichever aspect that is). For concepts where the load-bearing aspect is the meaning (user-named-with-LLM-authored-meaning being the demonstrated subclass), the SV2+ predicate runs a test of the wrong aspect — an in-spec internal inconsistency with A8's own verb-meaning."* No harmony_layer.md vocabulary imported; sensemaking-native terms (by-location architecture; load-bearing aspect; SV2+; predicate; test predicate) used throughout.
- **K6 (Step 5 guardrail resolution — resolves P6).** Structural MC1 is **scope-bounded structural refinement, NOT broad fundamentals rewrite.** A8's verb-meaning, definition, by-location architecture, failure-mode connection, and meta-inspection hook are ALL PRESERVED. The reformulation extends A8's own anticipated growth path (the extensibility hook at A7). Total spec edit: ~8-10 lines (within sub-linear-growth budget). Implementation gate is **dual**: (a) same promotion criterion as 01-00 finding (3rd LOOP_DIAGNOSE chain with same shape via different subclass → HIGH confidence); OR (b) explicit user override authorizing implementation at MED confidence after seeing the design (this finding).
- **K7 (relationship to surgical MC1).** **NESTED, not alternatives.** Surgical MC1 = the minimum text addition (one new sub-aspect under SV2+). Structural MC1 INCLUDES surgical MC1's text PLUS the predicate-selection reframe (Move 1) + the relabeling-as-term-aspect of the existing 2 sub-tests. Implementing surgical-first-then-structural is sequentially valid; implementing structural directly is also valid.
- **K8 (H4 calibration column asymmetry — resolves P7).** H4's calibration column (line 226) lists Phase 5's 3 sub-aspects but NOT SV2+'s 2 sub-aspects. After structural MC1, SV2+ has 3 sub-aspects (2 term + 1 meaning). The H4 calibration column should be updated in parallel to reflect SV2+ sub-aspects. **Parallel structural-layer concern** — flagged for structural-layer authoring; not load-bearing for the meaning-layer design.
- **K9 (recursion-fitness preview).** Applied to THIS inquiry's Source Input — load-bearing concept is "structural MC1"; user supplied the term; LLM is articulating the meaning. The reformulated SV2+ correctly identifies the load-bearing aspect as MEANING and runs the meaning-aspect test. The user can verify at finding-review time. **Design fits when applied to itself.**

**Structural points:**
- **SP1** — the reformulated SV2+ row's predicate-selection becomes by-aspect within by-location.
- **SP2** — existing 2 sub-tests are preserved as the term-aspect instantiation (relabeled, not removed).
- **SP3** — new sub-test for meaning-aspect; the demonstrated subclass is user-named-operation-with-LLM-authored-meaning.
- **SP4** — A8's by-location architecture is augmented to by-location-AND-by-aspect, **only within the SV2+ location** in this inquiry's scope.
- **SP5** — the load-bearing-aspect determination is an OPERATION of A8 (first-order observation: what did the user supply vs what did the LLM create), not a presupposition.

**Foundational principles:**
- **FP1 (existing-pattern extension):** structural MC1 extends A8's existing principles + Phase 5's existing pattern; does NOT introduce new principles.
- **FP2 (preserve verb-meaning + definition):** A8's identity stays.
- **FP3 (sub-linear growth):** the reformulation fits the spec's own ~8-10-line budget.
- **FP4 (no exception-patching):** the reframe is structural; not a new exception added.
- **FP5 (self-containment):** intrinsic grounding; no outbound pointers.
- **FP6 (scope-bounded structural refinement ≠ broad rewrite):** Step 5 guardrail's spirit honored because nothing fundamental is rewritten.

**Meaning-nodes:** Structural MC1 · Reformulated SV2+ row (by-aspect predicate-selection) · Term-aspect instantiation (existing 2 sub-tests) · Meaning-aspect instantiation (new sub-test) · By-location AND by-aspect architecture · Determination-as-operation (not presupposition) · Scope-bounded structural refinement.

### SV2 — Anchor-informed understanding
Structural MC1 is a reformulation of A8's SV2+ row that adds an OPERATION (identify load-bearing aspect) before the test predicates, relabels the existing 2 sub-tests as the term-aspect instantiation, and adds a meaning-aspect instantiation. A8's verb-meaning, definition, by-location architecture, failure-mode connection, and meta-inspection hook are preserved. The reformulation extends Phase 5's multi-sub-aspect pattern + uses A8's extensibility hook + fits sub-linear-growth + avoids exception-patching. Scope: SV2+ only; Phase 1 + Phase 5 are research frontiers. Step 5 guardrail honored as scope-bounded structural refinement; implementation gate = promotion criterion OR explicit user override.

*Meta-inspection cross-reference (H4 + H5):* concept names verified (structural MC1, by-aspect logic, term-aspect/meaning-aspect instantiations — all sensemaking-native vocabulary grounded in spec patterns). Motivating examples (the 01-00 case at SV2+ specifically) treated as pattern (the by-aspect logic generalizes within SV2+; Phase 1+5 deferred as research frontier).

---

## Phase 2 — Perspective Checking

- **Technical/Logical.** The determination operation ("what's load-bearing — term, meaning, both?") is implementable — first-order observation of what the input contained vs what the LLM filled in. No new primitive needed.
- **Human/User.** The user explicitly asked for structural MC1 design with harmony to sensemaking. The design preserves A8's identity + extends existing patterns + uses spec's own extensibility hook. "Structural MC1" preserved verbatim. **New anchor:** the user's question is itself reflexive (sensemaking designing a sensemaking refinement); the recursion-fitness check (K9) confirms self-application works.
- **Strategic/Long-term.** Structural MC1 sets a reusable pattern. If implemented, future LOOP_DIAGNOSE findings on analogous-shape defects at Phase 1 or Phase 5 can apply the same reformulation logic (add by-aspect architecture within by-location). Not a one-off.
- **Risk/Failure.** Three risks:
  - (R1) Implementing at MED confidence might be premature — mitigated by dual gate.
  - (R2) Determination might miss-fire (LLM identifies wrong aspect) — mitigated by determination being first-order observation (what supplied vs what filled-in).
  - (R3) Existing 2 sub-tests might be hard to relabel without disrupting utility — mitigated by relabeling-not-removing (they accurately ARE the term-aspect instantiation).
- **Resource/Feasibility.** ~8-10 line spec edit; bounded cost; H4 parallel update is small parallel work.
- **Definitional/Internal Consistency** (does the design contradict any sensemaking principle?):
  - Sensemaking verb-meaning: structural MC1 operates within Ambiguity Collapse (Phase 3). ✓
  - Comprehending vs Stabilizing split: A8 is in Stabilizing; structural MC1 stays. ✓
  - 5 anchor types: not touched (A8 Phase 1 row out of scope). ✓
  - Phase 3 structured-entry format: new sub-test produces ambiguity-collapse pairs that fit the format. ✓
  - 6 failure modes: no new ones; design addresses Premature Stabilization (#2) more completely. ✓
  - META-INSPECTION hooks: H4 (concept names) is A8's hook; H4 calibration parallel-update flagged at K8. ✓
  - Accommodation trigger: reframe-not-patch (per FP4). ✓
- **Definitional/Frame-exit Completeness** *(gating check on multi-value terms):*
  - "Concept" — used at Phase 1 / SV2+ / Phase 5 (three locations); A8 already navigates this multi-value via by-location architecture. Within-frame.
  - "Aspect" — new term; values are TERM / MEANING / (potentially STRUCTURE). Aspect is what's added. Single-axis distinction within each location.
  - "Term" vs "name" — synonymous in SV2+ context.
  - Frame-exit check: Phase 1 + Phase 5 rows of A8 are OUT of scope for this inquiry (only SV2+ modified). This is scope-bounding, not frame-exit miss. Termination: no further substantive frame-exit concerns.
- **Phase/Calibration-State.** Structural MC1 is phase-independent.

*Meta-inspection cross-reference (after SV3 — H1 candidate set + H2 frame scope + H3 question framing + H7 phase/calibration):* H1 (candidates are 8 SHOULDN'T failure modes + 8 harmony anchors + 6 achievement moves + the defect naming + the Step 5 resolution — distinct, not convergence-collapsed). H2 (frame scope = SV2+ within A8 within sensemaking; Phase 1 + Phase 5 explicitly out-of-frame as research frontiers). H3 (user's verbatim "structural MC1 SHOULD/SHOULDN'T + harmony + how to achieve" preserved). H7 (phase-independent).

### SV3 — Multi-perspective understanding
Seven perspectives consulted; the design holds. Frame-exit on "concept" surfaces 3 locations (already navigated by A8's by-location architecture); "aspect" is single-axis within each location. Three risks named with mitigations. Resource-feasibility confirmed. Definitional consistency: all 7 sensemaking-principle checks pass. Phase-independent.

---

## Phase 3 — Ambiguity Collapse

#### A1 — Is structural MC1 a "broad fundamentals rewrite" per Step 5, or "scope-bounded structural refinement"?

- **Strongest counter:** any change to A8's predicate-selection logic IS a fundamentals change; the SV2+ row's logic is fundamental.
- **Why counter fails (structural):** A8's verb-meaning + definition + by-location architecture + failure-mode connection + meta-inspection hook are ALL PRESERVED. What's added is **by-aspect within SV2+** — using A8's own extensibility hook ("the illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates"). The reformulation is the spec's own anticipated growth path, not a fundamentals rewrite. ~8-10 lines (sub-linear-growth budget). Step 5 guardrail's spirit (don't pre-emptively rewrite fundamentals without sufficient evidence) is honored because nothing fundamental is rewritten.
- **Confidence:** HIGH.
- **Resolution:** **K6 — scope-bounded structural refinement; not broad rewrite per Step 5.**

#### A2 — Should structural MC1 be implemented at this inquiry's MED confidence, or held until promotion criterion fires?

- **Strongest counter (implement-now):** meaning-layer design is concrete enough; surgical version included as subset; reformulation is spec's own anticipated extensibility pattern.
- **Strongest counter (hold-until-promotion):** Step 5 guardrail's discipline maintains even for scope-bounded refinements when pattern-confidence is MED.
- **Resolution:** BOTH gates honored. Meaning-layer settles here. Implementation gate is dual:
  - (a) **Promotion criterion** (same as 01-00 finding) — 3rd LOOP_DIAGNOSE chain with same shape via different subclass raises pattern-confidence to HIGH;
  - (b) **Explicit user override** — having seen the design (this finding), the user may authorize implementation at MED confidence on the basis that the reformulation is scope-bounded.
- **Confidence:** HIGH for dual gate; LOW for which fires first.

#### A3 — Should the "what's load-bearing" determination be a PRESUPPOSITION or an OPERATION of A8?

- **Strongest counter (presupposition):** simplifies A8's flow; determination becomes input.
- **Why counter fails (structural):** presupposition creates the circularity the SHOULDN'T-list warned against. The LLM must somehow know the load-bearing aspect BEFORE A8 runs — but that presumes the very question A8 is supposed to ask. Operationally: when does the LLM identify the aspect? Earliest point is when A8 runs. Therefore: A8's first move at SV2+ is the determination; existing predicates are downstream of it.
- **Confidence:** HIGH.
- **Resolution:** **K2 Move 1 — the determination is an OPERATION of A8 at SV2+** (first action of the row).

#### A4 — Should the new sub-test be a separate sub-bullet, or should the SV2+ row be restructured to a 2-column layout (aspect / predicate)?

- **Strongest counter:** 2-column would surface by-aspect logic visually.
- **Why partially fails:** structural-layer concern (HOW the spec is laid out). Meaning layer commits TO the by-aspect logic; structural layer commits to layout.
- **Confidence:** HIGH for meaning-layer commitment; MED for layout choice.
- **Resolution:** meaning-layer commits to by-aspect logic; structural-layer adjudicates layout (sub-bullets vs 2-column).

#### A5 — Should A8's Phase 1 and Phase 5 rows ALSO be checked for analogous defects?

- **Strongest counter:** if SV2+ has the by-location-only-not-by-aspect defect, Phase 1 and Phase 5 might too.
- **Why counter is informative but out-of-scope:** yes, the reformulation logic might apply — Phase 1 tests Constraints+Foundational Principles via "domain-property-vs-external-default" but Constraints might have scope-aspect, criterion-aspect, etc. HOWEVER — prior LOOP_DIAGNOSE evidence (2 instances) is specifically at SV2+ (operation names; neighbor names; both SV2+ concepts). Extending to Phase 1 / Phase 5 without evidence there would be the broad-rewrite Step 5 warns against. **Restrict to SV2+ for this inquiry; flag Phase 1 + Phase 5 analogous reformulation as research frontier** for future LOOP_DIAGNOSE chains that surface analogous defects at those phases.
- **Confidence:** HIGH for SV2+ scope; HIGH for Phase 1+5 deferral.
- **Resolution:** scope is SV2+ only; Phase 1 + Phase 5 are research frontiers.

#### A6 — Is the "in-doc internal inconsistency" framing (D6) accurate, or overstated?

- **Strongest counter:** "internal inconsistency" is strong; maybe "incomplete coverage" is more accurate.
- **Why counter partially fails:** A8's verb-meaning IS "test the load-bearing aspect" (functionally — A8's purpose is the load-bearing concept test, and the load-bearing-concept definition is given). The SV2+ row's predicate treats the term-aspect as always load-bearing, which is inconsistent with A8's verb-meaning whenever the term-aspect is NOT load-bearing. So "inconsistency" is accurate for the demonstrated subclass — the SV2+ implicit assumption ("term is always load-bearing at SV2+") is inconsistent with A8's verb-meaning ("test the load-bearing aspect — whichever aspect that is").
- **Confidence:** HIGH for inconsistency framing; the sharpening is real.
- **Resolution:** **K5 — sensemaking-native naming uses "incomplete predicate-selection logic within SV2+ location"** + notes the inconsistency-with-A8's-verb-meaning underlying it.

#### A7 — Recursion / self-application

- "Structural MC1" — user-supplied name; LLM-articulated meaning. Load-bearing aspect = MEANING. The reformulated A8 SV2+ predicate applied to this concept would run the meaning-aspect test: *"is the LLM-articulated 'structural MC1' user-intended, or an intuitive default?"* — applied here, the user supplied the harmony_layer.md analog as a constraint on meaning; the precise SHOULD-form is being articulated; the user verifies at finding-review. PASS.
- "By-location AND by-aspect architecture" — sensemaking-coined; grounded in A8's own by-location + Phase 5's existing multi-sub-aspect pattern. Not neologism. PASS.

#### A8 — Load-bearing concept test (general application)

All load-bearing concepts in this inquiry's commitment-set PASS user-language alignment + meaning-alignment (grounded in spec-internal patterns).

#### A9 — Specific-vs-pattern recognition cue

The defect surfaced at SV2+ specifically (2 instances). The reformulation pattern generalizes (by-location → by-location-AND-by-aspect). The inquiry SCOPES to SV2+ (specific); the pattern is documented as generalization-target for future inquiries. Both honored.

#### A10 — Self-reference (H8 hook)

Sensemaking-on-sensemaking. External grounding: live A8 spec (line-cited) + 01-00 LOOP_DIAGNOSE finding + harmony_layer.md analog (cross-domain) + user's verbatim diagnostic framing. **External grounding adequate.**

### SV4 — Clarified understanding
Ten ambiguities resolved (8 HIGH, 2 MED — A2 implementation-gate-which-fires-first; A4 layout choice). The design is operationally concrete: 2 coordinated moves (predicate-selection reframe + relabel-existing+add-new); 8 failure modes avoided with grounded refutations; 8 harmony anchors specifically named; 6 achievement-mechanism moves enumerated; sensemaking-native defect naming used; Step 5 resolved as scope-bounded structural refinement with dual implementation gate.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Form: 2 coordinated moves (predicate-selection reframe + relabel-existing+add-new)
- SHOULDN'T list: 8 failure modes avoided
- Harmony parts: 8 load-bearing anchors (5 A8 elements preserved + Phase 5 precedent + sub-linear-growth + Accommodation-trigger warning)
- Achievement mechanism: 6 specific moves
- Defect naming: incomplete predicate-selection logic within SV2+ location (by-location-only instead of by-location-AND-by-aspect)
- Step 5 resolution: scope-bounded structural refinement; dual implementation gate (promotion criterion OR explicit user override)
- Scope: SV2+ only; Phase 1 + Phase 5 = research frontiers
- Determination = OPERATION (not presupposition)
- Relationship to surgical MC1: NESTED (not alternatives)
- H4 calibration column parallel-update flagged for structural-layer
- Recursion-fitness preview: design fits when applied to itself

**Eliminated:**
- Treating structural MC1 as broad fundamentals rewrite (A8's fundamentals preserved)
- Treating structural MC1 as alternative-to-surgical (it INCLUDES surgical's text)
- Making determination a presupposition (circularity)
- Importing harmony_layer.md vocabulary into the reformulated A8 text
- Extending to Phase 1 / Phase 5 within this inquiry's scope
- Replacing existing 2 sub-tests (they're relabeled-not-removed)
- Restructuring A8's by-location architecture (only by-aspect added within SV2+)

**Remaining viable (handed to structural / future):**
- Exact prose-vs-2-column layout for reformulated SV2+ row (structural-layer)
- Exact wording (structural-layer)
- Exact H4 calibration column parallel-update phrasing (structural-layer)
- Implementation gate's user-facing presentation (this inquiry's finding)
- Phase 1 + Phase 5 analogous reformulation (future LOOP_DIAGNOSE)

### SV5 — Constrained understanding
Design space is closed to: reformulate A8's SV2+ row with 2 coordinated moves; scope SV2+ only; preserve all A8 fundamentals + extend by-aspect logic within the location; dual implementation gate. Phase 1 + Phase 5 analogous reformulation is research-frontier (not implemented).

---

## Phase 5 — Conceptual Stabilization

**Accommodation trigger check:** are perspectives producing destabilizing anchors? **No.** Every perspective in Phase 2 reinforced the model. The model settled cleanly. Accommodation trigger does NOT fire.

*Meta-inspection cross-reference (H6 + H8 + H9):* H6 model fit — clean settlement, no patching. H8 self-reference — externally grounded (live spec + 01-00 + harmony analog + user). H9 user-language alignment — preserved.

### SV6 — Stabilized Model

**Structural MC1 — Meaning-Layer Design (Stabilized)**

1. **The SHOULD form** — two coordinated moves on A8's SV2+ row:
   - **Move 1 (predicate-selection reframe):** *"SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions → first identify which aspect of the concept is load-bearing (the TERM, the MEANING, or both); then run the test predicate appropriate to that aspect."*
   - **Move 2 (relabel existing 2 + add new):** existing 2 sub-tests (domain-terminology-vs-external-default + user-language alignment) become the TERM-ASPECT instantiation (for concepts where what was created is the term — e.g., LLM-coined neologisms); new sub-test for MEANING-ASPECT instantiation: *"for concepts where the load-bearing aspect is the MEANING (e.g., user-named operations whose mechanism description was LLM-authored — the user supplied the name; what was created is the meaning), test authored-meaning-vs-user-intent. Counter-interpretation: 'Is the LLM-authored mechanism description user-intended for the operation the user named, or is it an intuitive default that may misalign with user intent?'"* For concepts where both aspects are load-bearing, both tests fire.

2. **The SHOULDN'T list** — 8 failure modes the form avoids (each with grounded refutation):
   - Over-generalization — bounded to SV2+; choices are term/meaning/both (not arbitrary)
   - Under-generalization — reframing at predicate-selection level; future subclasses fit cleanly
   - Replacement — existing 2 sub-tests preserved as term-aspect instantiation
   - Disharmony — mirrors Phase 5's existing multi-sub-aspect pattern
   - Circularity — determination is OPERATION, not presupposition
   - Architectural disruption — verb-meaning + definition + by-location + failure-mode connection + meta-inspection hook all preserved
   - Vocabulary import — sensemaking-native vocabulary; no harmony_layer.md terms in reformulated A8 text
   - Accommodation-trigger exception-patching — reframe is structural, completing A8's own by-location logic

3. **Harmony with rest of sensemaking** — 8 load-bearing harmony anchors:
   - A8 verb-meaning preserved verbatim
   - A8 load-bearing-concept definition preserved verbatim
   - A8 by-location architecture preserved + extended to by-location-AND-by-aspect within SV2+
   - A8 failure-mode connection (Premature Stabilization #2) preserved
   - A8 meta-inspection H4-hook relationship preserved
   - Phase 5 multi-sub-aspect pattern extended to SV2+ (the strongest in-spec precedent)
   - Sub-linear-growth pattern (~8-10 lines edit) honored
   - Accommodation-trigger warning honored (reframe-not-exception)

4. **Achievement mechanism** — 6 specific moves:
   - Preserve A8's verb-meaning verbatim
   - Preserve A8's definition verbatim
   - EXTEND by-location architecture to by-location-AND-by-aspect (within SV2+ scope)
   - MIRROR Phase 5's multi-sub-aspect pattern
   - USE A8's explicit extensibility hook ("future sub-aspects may emerge")
   - Make determination an OPERATION (not presupposition) — A8 asks "what's load-bearing" before running predicate-tests

5. **Sensemaking-native naming of the defect:**
   *"A8's SV2+ row has by-location architecture but incomplete predicate-selection logic within the location: it implicitly treats the term-aspect as always load-bearing at SV2+, while A8's verb-meaning mandates testing the LOAD-BEARING aspect (whichever aspect that is). For concepts where the load-bearing aspect is the meaning (user-named-with-LLM-authored-meaning being the demonstrated subclass), the SV2+ predicate runs a test of the wrong aspect — an in-spec internal inconsistency with A8's own verb-meaning."*

6. **Step 5 guardrail resolution:** structural MC1 is **scope-bounded structural refinement** (preserves all A8 fundamentals; uses A8's own extensibility hook; ~8-10 lines edit). NOT broad fundamentals rewrite. Implementation gate is dual:
   - (a) **Promotion criterion** — same as 01-00 finding: a 3rd LOOP_DIAGNOSE chain producing the same shape via a different subclass raises confidence to HIGH and authorizes implementation; OR
   - (b) **Explicit user override** — the user, having seen the meaning-layer design (this finding), may authorize implementation at MED confidence on the basis that the reformulation is scope-bounded.

7. **Scope discipline:** only SV2+ is modified in this inquiry. Phase 1 + Phase 5 analogous reformulation potential is documented as **research frontier** for future LOOP_DIAGNOSE inquiries that surface analogous defects at those phases.

8. **Relationship to surgical MC1:** **NESTED, not alternatives.** Surgical MC1 = minimum (add a sub-aspect under SV2+). Structural MC1 INCLUDES surgical MC1 + the predicate-selection reframe + the relabeling. Implementing surgical-first-then-structural is sequentially valid; implementing structural directly is also valid.

9. **Parallel H4 calibration column update:** H4's calibration column (line 226) lists Phase 5's 3 sub-aspects but not SV2+'s. After structural MC1, SV2+ has 3 sub-aspects (2 term + 1 meaning). H4 calibration column should be updated in parallel. **Parallel structural-layer concern.**

10. **Recursion-fitness preview:** applied to THIS inquiry's Source Input ("structural MC1" as load-bearing concept), reformulated A8 SV2+ correctly identifies the load-bearing aspect as MEANING and runs the meaning-aspect test. The design fits when applied to itself.

**How SV6 differs from SV1:** SV1 was directionally correct; SV6 specifies: the 2 coordinated moves; the 8 failure modes with grounded refutations; the 8 specific harmony anchors; the 6 specific achievement moves; the sensemaking-native defect naming; the Step 5 resolution as scope-bounded structural refinement with dual implementation gate; the scope discipline (SV2+ only); the nesting-with-surgical relationship; the H4 parallel update; the recursion-fitness confirmation.

---

## Saturation Indicators

- **Perspective saturation:** 7 perspectives (Technical / Human / Strategic / Risk / Resource / Definitional-consistency / Frame-exit / Phase-calibration); last 2 (Frame-exit on "concept"+"aspect" + Phase-calibration) confirmed without new anchor types.
- **Ambiguity resolution:** 10/10 (8 HIGH, 2 MED).
- **SV delta:** SV1 (directional) → SV6 (10-item operational design with grounded refutations + scope + gate + recursion-fitness).
- **Anchor diversity:** 9 constraints + 9 key insights + 5 structural points + 6 foundational principles + 7 meaning-nodes.

---

## Frontier (to Decomposition / Innovation / Critique)

- **D1 Decomposition.** Partition the 10 SV6 commitments into authorable pieces (likely: P0 anchor + P1 SHOULD-form + P2 SHOULDN'T list + P3 harmony anchors + P4 achievement mechanism + P5 defect naming + P6 Step 5 resolution + P7 scope discipline + P8 surgical-relationship + P9 H4 parallel-update flag + P10 recursion-fitness preview).
- **D2 Innovation.** Produce concrete authorable text for each piece — especially the **exact reformulated SV2+ row prose** (the user-facing "this is what the spec edit looks like" section); the **dual implementation gate options** for the user; and the **research-frontier framing** for Phase 1 + Phase 5.
- **D3 Critique pressure-tests:**
  - (a) Does the reformulated SV2+ prose actually preserve A8's fundamentals line-by-line?
  - (b) Is "scope-bounded structural refinement" honest under Step 5 prosecution, or is it rebranding a broad rewrite?
  - (c) Does the by-aspect logic generalize cleanly to potential future subclasses (e.g., structure-aspect)?
  - (d) Does the H4 parallel-update remain a parallel structural-layer concern, or does it sneak into meaning-layer?
  - (e) Does the recursion-fitness check hold under literal application?
  - (f) Is the sensemaking-native defect naming (K5) genuinely free of harmony_layer.md vocabulary?
  - (g) Does the relationship-to-surgical-MC1 framing (nested-not-alternatives) hold structurally?
