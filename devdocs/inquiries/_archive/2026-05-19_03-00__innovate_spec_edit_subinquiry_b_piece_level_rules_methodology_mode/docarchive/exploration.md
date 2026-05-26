# Exploration — Sub-Inquiry B: /innovate Spec Edit: Piece-Level Rules + Intervention-Shape Vocabulary + Methodology-Mode Consideration

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-19_03-00__innovate_spec_edit_subinquiry_b_piece_level_rules_methodology_mode/_branch.md`

Extract operative content from Pair 5 + Pair 7 + Pair 8 + map insertion locations in the current (post-sub-inquiry-A) /innovate spec for B's 5 refinement notes.

---

## Mode + Entry Point

- **Mode:** artifact (concrete diagnostic findings + concrete current spec).
- **Entry point:** signal-first (5 items pre-specified per 02-00 finding's Sub-Inquiry B forward-reference scope).
- **Depth commitment:** D3 on (1) Pair 5 Q2-Q3, Pair 7 §8 + Q-extensions, Pair 8 §8.B + §9 operative content + (2) Phase 1 Seed + Phase 2 Generate insertion locations + sequencing of 4 Phase-2-Generate refinement notes.
- **Boundary:** bounded — 3 originating diagnostics + sub-inquiry A finding + 01-00 audit + current spec.

---

## Territory Overview

5 regions corresponding to B's 5 items + 1 region for sequencing/insertion:

| Region | Focus |
|---|---|
| R1 | Item 1 — Meta-Decision-Piece Criterion: Pair 5 Q2 + Pair 7 Q2 5th property |
| R2 | Item 2 — Piece-Level Inversion Rule: Pair 5 Q3 |
| R3 | Item 3 — Intervention-Shape-Axis Inversion: Pair 7 Q3-extension |
| R4 | Item 4 — Intervention-Shape Vocabulary: Pair 7 §8 + Pair 8 §8.B (combined into one refinement note per Pair 8's vocabulary-unification) |
| R5 | Item 5 — Methodology-Mode Consideration: Pair 8 §9 |
| R6 | Sequencing + insertion locations in current spec |

---

## (1) R1 — Meta-Decision-Piece Criterion (Pair 5 Q2 + Pair 7 5th property)

**Pair 5 Q2 base text** (verbatim from `2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` lines 132-145):

A piece is a *meta-decision piece* when at least one of the following observable properties holds at piece-output time:

1. **Relationship-label property:** the piece commits to a relationship between this finding and a prior — `refines:`, `corrects:`, `supersedes:`, `diagnoses:`, or equivalent body-text declaration.
2. **Framing-semantic property:** the piece commits to a frame the rest of the finding operates under — e.g., "this is a layer-shift situation," "this is a redo," "this is an audit."
3. **Lesson-vocabulary property:** the piece introduces new vocabulary (a named bias, named pattern, named failure mode, named procedure) that the same finding then applies to itself or to other cases.
4. **Evaluation-criterion property:** the piece commits to criteria by which downstream candidates will be judged.

Content-production pieces (NOT meta-decision) fail all properties.

Edge case retrospective audit: when classification is judgment-dependent at piece-output time, after the run perform retrospective self-audit; if any piece committed a relationship, frame, semantic, or vocabulary that subsequent pieces operated under, retrospectively classify as meta-decision.

**Pair 7 Q2 fifth property** (verbatim from `2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md` lines 159-167):

(v) **Intervention-shape commitment property** [NEW]: P's principal candidate text contains an explicit intervention-shape commitment — names a shape from the Intervention-Shape Vocabulary — AND the shape commitment is load-bearing for downstream pieces or downstream-discipline behavior. Retrospective fallback applies (subsequent pieces or next-discipline behavior under the shape).

**B's Item 1 commit:** combined 4+1 property criterion as one refinement note titled "Meta-Decision-Piece Criterion" at Phase 2 Generate.

---

## (2) R2 — Piece-Level Inversion Rule (Pair 5 Q3)

**Pair 5 Q3 base text** (verbatim from lines 153-167):

**Piece-level Inversion at meta-decision pieces.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), the mechanism-coverage rule's per-seed gating is necessary but not sufficient. For each piece that meets the meta-decision-piece criterion above, Innovation MUST additionally apply Inversion at piece-level.

Preconditions: Production-task mode operating; piece meets at least one meta-decision-piece property.

Compliance criterion: piece's output contains (a) principal candidate text AND (b) explicit Inversion-candidate paragraph naming reversed assumption + stating what follows; both tested via 5-test cycle.

Override path: `Inversion-marked-inapplicable: <specific reason>`. Reason must be specific; empty/generic overrides are defects.

Cross-references: operates alongside Inversion mechanism's depth-check refinement note. Does NOT replace Coverage Strategy's per-seed minimum (1G + 1F); adds per-piece requirement.

Scope bounded: does NOT apply to content-production pieces. Over-application risk bounded by determination mechanism.

**B's Item 2 commit:** one refinement note at Phase 2 Generate titled "Piece-Level Inversion Rule."

---

## (3) R3 — Intervention-Shape-Axis Inversion (Pair 7 Q3-extension)

**Pair 7 Q3-extension text** (verbatim from lines 175-191):

When the piece fires property (v) of the meta-decision-piece criterion (intervention-shape commitment), the Inversion-candidate paragraph MUST target the intervention-shape axis. The "assumption being reversed" must be the piece's intervention-shape commitment, not a content-level assumption.

Concretely:
1. Name X (the shape committed) explicitly as the reversed assumption.
2. Name at least one alternative shape Y from the Intervention-Shape Vocabulary that the reversal points to.
3. State what follows if Y were committed instead of X.
4. Test both X and Y via the 5-test cycle.

Override path: `Intervention-shape-Inversion-marked-inapplicable: <specific reason>`. Specific; empty/generic = defect.

Compliance criterion: property-(v) piece's output contains (a) principal text; (b) Inversion-candidate naming shape from vocabulary as reversed assumption + naming at least one alternative shape + stating what follows; (c) 5-test cycle on both; OR (d) override with specific reason.

Additive: pieces firing (i)-(iv) without (v) continue under generic Piece-Level Inversion Rule unchanged.

**B's Item 3 commit:** one refinement note at Phase 2 Generate titled "Intervention-Shape-Axis Inversion."

---

## (4) R4 — Intervention-Shape Vocabulary (Pair 7 §8 + Pair 8 §8.B)

**Pair 7 §8 text** (verbatim from lines 132-151):

When Innovation generates a candidate (especially a maintenance candidate for a spec or a fix for an identified problem), the candidate has an intervention shape — the form of action it proposes. The shape is distinct from the candidate's content. Recognized shapes:

| Shape | Operation on the target | Cost / risk profile |
|---|---|---|
| **ADD-TEST** | Append a new test or check that runs alongside existing text | Low risk; no existing behavior changes |
| **ADD-DIMENSION** | Append a new evaluation dimension to existing evaluation framework | Low risk; expands evaluation surface |
| **ADD-CONTENT** | Append new content (text, section, sub-section) that isn't a test or dimension | Low-to-medium risk; extends the spec's coverage |
| **REPAIR** | Modify existing text that causes the failure; **changes semantics** while preserving the function the text was meant to provide | Medium risk; existing behavior changes structurally |
| **REVERT-REGRESSION** | Roll back current text to a prior version that did not exhibit the failure | Low-to-medium risk |
| **REMOVE** | Delete the failing text entirely without replacement | Medium risk; function is also removed |
| **REFRAME-AS-BUG** | Reclassify the failure from a generic pattern to a localized bug; fix-and-move-on | Variable risk |
| **DO-NOTHING** | Accept the failure as out-of-scope or worth-the-cost | No risk; no change |
| **REORGANIZE-WITHOUT-ADDING** | Restructure existing sections; **preserves semantics** | Low risk; presentation-only |
| **CONTRARIAN-RETHINK** | Question the framing entirely; treat the prior conclusion as a candidate to invalidate | High risk if applied to load-bearing prior decisions |

REPAIR vs REORGANIZE-WITHOUT-ADDING: semantics-preserving distinction. ADD-CONTENT vs ADD-TEST/ADD-DIMENSION: content-type distinction.

Extensibility: add new shapes as evidence accumulates; revival trigger 3+ inquiries with non-fitting shapes.

**Pair 8 §8.B text** (verbatim from lines 141-157):

Methodology Modes — When Innovation runs on a seed, the seed framing implies a methodology mode — the form of mechanism distribution and seed-purpose stance under which Innovation operates. Methodology mode is distinct from intervention shape: shapes are per-piece; modes are per-run. Recognized methodology modes:

| Mode | Mechanism distribution | Seed-purpose stance | Text signals in seed framing |
|---|---|---|---|
| **Standard default** | Balanced (4G + 3F; min 1G+1F) | Elaborate the committed direction; ship-ready | No specific weighting; "elaborate", "produce", "generate" |
| **Contrarian-rethink (Framer-weighted)** | Framer-heavy | Challenge prior commitments | "Framer-weighted", "contrarian", "rethink", "challenge", "deliberately invert" |
| **Generator-weighted exploration** | Generator-heavy | Maximize novel-candidate breadth | "Generate widely", "explore the space", "novelty-first" |
| **Depth-iteration mode** | One mechanism iterated to system-level | Drive a single mechanism deep | "Depth-iterate", "go deeper", "iterate until system-level" |
| **Minimum-mechanism mode** | 1G + 1F only | Maximize parsimony | "Minimum sufficient", "parsimonious", "just enough" |

Distinction from intervention shapes: shapes per-piece; modes per-run.

Primary mechanism if specified: if seed names a specific mechanism, mode is whichever names that mechanism + framing-given purpose.

Extensibility: revival trigger 3+ non-fitting framings.

**B's Item 4 commit:** ONE refinement note at Phase 2 Generate titled "Intervention-Shape and Methodology-Mode Vocabulary." Combines Pair 7 §8 + Pair 8 §8.B in one refinement note per Pair 8's vocabulary-unification framing (vocabulary lives in one location). The distinction between per-piece shapes and per-run modes is explicit in the body text.

**Convention note:** the vocabulary refinement note must use descriptive cross-reference names per 01-00 §-marker drop convention (e.g., "Piece-Level Inversion Rule (above)" not "§Q3 (above)").

---

## (5) R5 — Methodology-Mode Consideration (Pair 8 §9)

**Pair 8 §9 text** (verbatim from lines 165-188):

When Innovation receives a seed, the seed framing implies a methodology mode (per the Methodology Modes vocabulary). The framing-implied mode is inherited from upstream disciplines (sensemaking + decomposition). Before running mechanisms on the seed, Innovation MUST:

1. **Identify the inherited mode.** Read seed framing's text; classify per the vocabulary's text signals. If ambiguous, default to "Standard default" unless seed text explicitly names a non-default mode.

2. **Generate at least one alternative mode.** Name a different mode from the vocabulary; surface in the innovation.md output's seed/preamble section.

3. **State what follows under the alternative.** 1-3 sentences describing what the candidate space would look like.

4. **Decide which mode to run with:**
   - *Default decision:* use inherited mode.
   - *Mode-switch:* if alternative is strongly preferable, switch + record `Seed-time-methodology-mode-switch: <new-mode>; reason: <specific reason>`.
   - *Override (alternative inapplicable):* if alternative is structurally inappropriate, record `Methodology-mode-alternative-marked-inapplicable: <specific reason>`. Empty overrides are defects.

Compliance criterion (artifact-observable): innovation.md output's seed/preamble contains (a) inherited mode named; (b) at least one alternative mode named; (c) "what follows" description; (d) decision (default / mode-switch / override-with-reason).

Composition with piece-level rules: this seed-time rule fires ONCE at the start of each Innovation run, BEFORE piece-level rules. Defense-in-depth: seed-time mode consideration (this rule) + piece-time generic Inversion + piece-time intervention-shape-axis Inversion together cover three orthogonal failure paths.

**B's Item 5 commit:** ONE refinement note at Phase 1 Seed titled "Methodology-Mode Consideration." Uses STANDARD compliance criterion per 01-00 audit Commitment 4 (no preemptive strengthening).

---

## (6) R6 — Sequencing + Insertion Locations

### Phase 1 Seed insertion (Item 5)

Current Phase 1 Seed (lines 250-252):
```
### Phase 1: Seed

Start with something. A gap, a question, a dissatisfaction, a collision of ideas, a signal. It doesn't need to be clear. Write it down as-is.
```

**Item 5 insertion:** Methodology-Mode Consideration refinement note inserted AFTER line 252's existing content, BEFORE line 254 (`### Phase 2: Generate`). Adds a refinement note + brief preamble before the phase-transition.

### Phase 2 Generate insertion (Items 1-4)

Current Phase 2 Generate ends with content on line 276 (Combining mechanisms paragraph) and the augmented closing pointer at line 278. The Inherited Frame Audit follows.

**Insertion sequence (after line 276 Combining mechanisms, before line 278 closing pointer):**

1. **Refinement note: Intervention-Shape and Methodology-Mode Vocabulary (Item 4)** — placed first because (i) the 5th property in Item 1 references the Intervention-Shape Vocabulary; (ii) Item 5's Phase 1 Seed Methodology-Mode Consideration also references it; locating vocabulary first makes downstream references operational.

2. **Refinement note: Meta-Decision-Piece Criterion (Item 1)** — defines the 4+1 properties; uses Vocabulary in 5th property.

3. **Refinement note: Piece-Level Inversion Rule (Item 2)** — uses Meta-Decision-Piece Criterion ("for each meta-decision piece, ...").

4. **Refinement note: Intervention-Shape-Axis Inversion (Item 3)** — extends Piece-Level Inversion Rule for property-(v) pieces; references Vocabulary.

Then closing pointer (line 278; unchanged from sub-inquiry A's augmentation).

### Total insertion size estimate

- Item 1 (Meta-Decision-Piece Criterion): ~25-30 lines
- Item 2 (Piece-Level Inversion Rule): ~25-30 lines
- Item 3 (Intervention-Shape-Axis Inversion): ~25-30 lines
- Item 4 (Intervention-Shape + Methodology-Mode Vocabulary): ~40-50 lines (two tables + connective prose)
- Item 5 (Methodology-Mode Consideration at Phase 1 Seed): ~25-30 lines

Total: ~140-170 lines new content. Similar scale to sub-inquiry A (~150-180).

---

## (7) Forward-References Sub-Inquiry A's Q1.5 Will Close

Sub-inquiry A's Q1.5 Integration Map referenced 5 forthcoming refinement notes that B's commits close:

1. "A forthcoming **Meta-Decision-Piece Criterion** refinement note at Phase 2 Generate will provide the canonical home for the 4+1-property criterion currently restated inline in this sub-section's Predicate Step (ii)." → B's Item 1 ✓
2. "A forthcoming **Piece-Level Inversion Rule** refinement note at Phase 2 Generate may be invoked by the audit when a meta-decision piece's load-bearing commitment is un-challenged" → B's Item 2 ✓
3. "A forthcoming **Intervention-Shape-Axis Inversion** refinement note at Phase 2 Generate may be invoked by the audit when an intervention-shape commitment is un-challenged" → B's Item 3 ✓
4. "A forthcoming **Methodology-Mode Consideration** refinement note at Phase 1 Seed will fire earlier than this audit" → B's Item 5 ✓
5. "A forthcoming **Re-test trigger** disposition (a 4th category at Phase 3 Test's output-disposition refinement note) will fire later than this audit" → Sub-inquiry C item 1, NOT B's scope.

Plus Sub-inquiry A's Override Path cross-reference: "future refinement notes... will use the same `<rule-name>-marked-inapplicable: <specific reason>` pattern" — B's Items 2, 3, 5 all commit override patterns matching this.

**4 of 5 of A's forthcoming refs close in B; 1 closes in C.**

---

## Signal Log

| Cycle | Signal | Type | Disposition |
|---|---|---|---|
| 1 | Pair 5 Q1-Q5 + Pair 7 §8/Q-extensions + Pair 8 §8.B/§9 — all operative content extracted | density | Probed (R1-R5) |
| 2 | B's scope is 5 items per 02-00 finding; Pair 5 Q1 + Q4 + Q5 base NOT in B's scope (Q1 stays PENDING; Q5 base goes to C alongside Q5 axis-distribution; Q4 PENDING) | structural distinction | Noted |
| 2 | Sequencing of 4 Phase-2-Generate refinement notes: Vocabulary first (referenced by others), then Criterion, then Inversion Rule, then Intervention-Shape-Axis Inversion | resolution | Probed (R6) |
| 3 | Item 4 combines Pair 7 §8 + Pair 8 §8.B per Pair 8's vocabulary-unification framing — ONE refinement note housing both vocabularies | density | Probed (R4) |
| 3 | Item 5 at Phase 1 Seed is independent of Phase 2 Generate refinement notes (different phase; cross-references but not co-located) | distinctness | Probed (R5+R6) |
| 4 (jump) | Property (v) WILL fire at Innovation; this inquiry is the next opportunity for Layer-3 N=5 TRIGGER per Pair 12's note | confirmation | Probed |
| 4 (jump) | The 4+1 property criterion is currently INLINED in sub-inquiry A's Predicate Step (ii); when Item 1 commits the canonical home, A's inline restatement becomes redundant but not wrong (graceful coexistence) | relevance | Noted |

---

## Confidence Map

| Region | Confidence |
|---|---|
| R1 (Item 1 content) | **CONFIRMED** — verbatim from Pair 5 + Pair 7 |
| R2 (Item 2 content) | **CONFIRMED** — verbatim from Pair 5 |
| R3 (Item 3 content) | **CONFIRMED** — verbatim from Pair 7 |
| R4 (Item 4 content) | **CONFIRMED** — verbatim from Pair 7 + Pair 8 |
| R5 (Item 5 content) | **CONFIRMED** — verbatim from Pair 8 |
| R6 (Sequencing + insertion locations) | **CONFIRMED** — direct spec read |
| Forward-references coverage | **CONFIRMED** — 4 of 5 close in B |

---

## Frontier State

**Status: STABLE.** All 5 items have verbatim operative content + insertion locations + sequencing. The cross-reference structure (Item 4 first; then Items 1→2→3) is structurally clean.

Frontier questions for Sensemaking:

1. **Pair 5 Q1 (Definitional clarification at Inversion) treatment.** NOT in B's scope per 02-00; should it be added for completeness, or genuinely deferred?
2. **Pair 5 Q4 (Failure-mode prevention) treatment.** NOT in B's scope or C's scope per 02-00; defer to follow-on?
3. **Convention for sub-section labels in committed Item 4.** Pair 7's text uses "§8" / "§8.A"; Pair 8's text uses "§8.B" — these MUST be dropped per 01-00 audit + Sensemaking A's SV6 #3 commitment. Item 4 should use descriptive sub-headings instead (e.g., "**Per-piece intervention shapes.**" / "**Per-run methodology modes.**").
4. **Cross-reference rewriting within Items 1-5.** Pair 5/7/8's texts contain references to "§2 Phase 2 Generate", "§3 Inversion", "§8.A", etc. — all these need descriptive name rewrites.
5. **Property (v) discipline.** AIM for NO-OVERRIDE per Sensemaking A's SV6 #7. If structural ambiguity surfaces, record override with specific reason; that becomes the 5th consecutive → TRIGGER.

---

## Telemetry

- Mode: artifact; Entry: signal-first; Cycles run: 4 (3 normal + 1 jump-scan).
- Signals detected: 7; Probed: 7; Deferred: 0.
- Resolution: D3 on R1-R5 content + R6 sequencing/locations.
- Frontier: stable. Discovery rate declining.
- Convergence: YES on all 3 criteria.
- Jump-scan performed: YES.
- Failure modes checked: all 10; none observed.

---

## Self-Assessment Verdict

**PROCEED.**

All 5 items' operative content extracted verbatim; insertion locations confirmed; sequencing structurally clean. Pair 5 Q1 + Q4 deferred (not in B's scope per 02-00); Pair 5 Q5 base goes to sub-inquiry C alongside Pair 7 Q4 (axis-distribution extension); B does not commit Q5 base.

5 frontier questions handed to Sensemaking + 4 of A's 5 forthcoming refs close in B (1 in C).

Total edit size estimate: ~140-170 lines new content + integration into Phase 1 Seed (after line 252) + Phase 2 Generate (between lines 276 and 278).
