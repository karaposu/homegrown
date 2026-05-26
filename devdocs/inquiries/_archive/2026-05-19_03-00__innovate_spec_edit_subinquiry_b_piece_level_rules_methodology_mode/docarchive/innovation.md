# Innovation — Sub-Inquiry B

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-19_03-00__innovate_spec_edit_subinquiry_b_piece_level_rules_methodology_mode/_branch.md`

Production-task: draft Q1-Q5 spec text + Q6 (authorization) + Q7 (forward-ref closing). Property (v) WILL fire at Q1-Q5. Aim for no-override per Sensemaking SV6 #5.

---

## Phase 1 — Seed

Production-task; methodology mode = STANDARD DEFAULT. Treat Pair 5/7/8 + sub-inquiry A + 01-00 as committed inputs to articulate. Convention rewriting per Sensemaking SV6 #3.

**Layer-3 §9 self-application — outcome will be verified at end of Innovation.**

---

## Phase 2 — Generate

### Q1 — Intervention-Shape and Methodology-Mode Vocabulary

**Mechanism: Combination + Lens Shifting.**

```markdown
*Refinement note (applies at Phase 2 Generate):*

**Intervention-Shape and Methodology-Mode Vocabulary.** Innovation operates at two named axes — per-piece intervention shapes and per-run methodology modes — that downstream refinement notes reference.

**Per-piece intervention shapes.** When Innovation generates a candidate (especially a maintenance candidate for a spec or a fix for an identified problem), the candidate has an **intervention shape** — the form of action it proposes. The shape is distinct from the candidate's content. Two candidates with the same content can have different shapes; two candidates with the same shape can have different content. Recognized shapes:

| Shape | Operation on the target | Cost / risk profile |
|---|---|---|
| **ADD-TEST** | Append a new test or check that runs alongside existing text | Low risk; no existing behavior changes |
| **ADD-DIMENSION** | Append a new evaluation dimension to existing evaluation framework | Low risk; expands evaluation surface |
| **ADD-CONTENT** | Append new content (text, section, sub-section) that isn't a test or dimension | Low-to-medium risk; extends the spec's coverage |
| **REPAIR** | Modify existing text that causes the failure; *changes semantics* while preserving the function the text was meant to provide | Medium risk; existing behavior changes structurally |
| **REVERT-REGRESSION** | Roll back current text to a prior version that did not exhibit the failure | Low-to-medium risk (depends on prior version's other properties) |
| **REMOVE** | Delete the failing text entirely without replacement | Medium risk; the function the text provided is also removed |
| **REFRAME-AS-BUG** | Reclassify the failure from a generic pattern to a localized bug; fix-and-move-on | Variable risk |
| **DO-NOTHING** | Accept the failure as out-of-scope or worth-the-cost | No risk; no change |
| **REORGANIZE-WITHOUT-ADDING** | Restructure existing sections; *preserves semantics* while changing form | Low risk; presentation-only |
| **CONTRARIAN-RETHINK** | Question the framing entirely; treat the prior conclusion as a candidate to invalidate | High risk if applied to load-bearing prior decisions |

The distinction between REPAIR and REORGANIZE-WITHOUT-ADDING is semantics-preserving (REORGANIZE preserves; REPAIR changes). The distinction between ADD-CONTENT and ADD-TEST / ADD-DIMENSION is content-type (a failure-mode entry is ADD-CONTENT, not ADD-TEST or ADD-DIMENSION).

**Per-run methodology modes.** When Innovation runs on a seed, the seed framing implies a **methodology mode** — the form of mechanism distribution and seed-purpose stance under which Innovation operates. Methodology mode is distinct from intervention shape: shapes are per-piece commitments; modes are per-run commitments inherited from the seed framing. Recognized modes:

| Mode | Mechanism distribution | Seed-purpose stance | Text signals in seed framing |
|---|---|---|---|
| **Standard default** | Balanced (4 Generators + 3 Framers; minimum 1G+1F per Coverage Strategy) | Elaborate the committed direction; produce confident ship-ready output | No specific weighting; "elaborate", "produce", "generate output" |
| **Contrarian-rethink (Framer-weighted)** | Framer-heavy (Framers carry the load; Generators light) | Challenge prior commitments; surface contrarian alternatives | "Framer-weighted", "contrarian", "rethink", "challenge", "deliberately invert" |
| **Generator-weighted exploration** | Generator-heavy | Maximize novel-candidate breadth | "Generate widely", "explore the space", "novelty-first" |
| **Depth-iteration mode** | One mechanism (often Inversion) iterated to system-level per the Inversion mechanism's depth-check refinement | Drive a single mechanism through repeated application until a system-level claim emerges | "Depth-iterate", "go deeper", "iterate until system-level" |
| **Minimum-mechanism mode** | 1G + 1F only (the Coverage Strategy's bare minimum) | Maximize parsimony; minimum cognitive load | "Minimum sufficient", "parsimonious", "just enough" |

**Primary mechanism if specified.** If the seed framing names a specific mechanism (e.g., "apply Lens Shifting deeply"), the mode is whichever names that mechanism plus the framing-given purpose. For example, "apply Inversion deeply to a single seed-belief" maps to Depth-iteration mode with Inversion as the primary mechanism.

**Extensibility.** Add new shapes or modes as evidence accumulates. Revival trigger: when 3+ inquiries surface a candidate or seed framing whose shape/mode doesn't fit one of the above, add the new entry with operational description.

**Cross-references.** The Meta-Decision-Piece Criterion (below) fires property (v) when a piece commits to a named intervention shape. The Methodology-Mode Consideration refinement note at Phase 1 Seed (above) requires Innovation to identify the inherited methodology mode from this vocabulary at seed time.
```

### Q2 — Meta-Decision-Piece Criterion

**Mechanism: Combination (4-property + 5th property).**

```markdown
*Refinement note (applies at Phase 2 Generate):*

**Meta-Decision-Piece Criterion.** A piece in the inquiry's piece-list is a **meta-decision piece** when at least one of the following observable properties holds at piece-output time:

1. **Relationship-label property:** the piece commits to a relationship between this finding and a prior — `refines:`, `corrects:`, `supersedes:`, `diagnoses:`, or equivalent body-text declaration.
2. **Framing-semantic property:** the piece commits to a frame the rest of the finding operates under — e.g., "this is a layer-shift situation," "this is a redo," "this is an audit."
3. **Lesson-vocabulary property:** the piece introduces new vocabulary (a named bias, named pattern, named failure mode, named procedure) that the same finding then applies to itself or to other cases.
4. **Evaluation-criterion property:** the piece commits to criteria by which downstream candidates will be judged.
5. **Intervention-shape commitment property:** the piece's principal candidate text contains an explicit intervention-shape commitment — names a shape from the Intervention-Shape Vocabulary (above) — AND the shape commitment is load-bearing for downstream pieces or downstream-discipline behavior.

A piece is **content-production** (not meta-decision) when none of these properties hold and the piece's role is to produce text instantiating a frame committed elsewhere in the artifact.

**Edge cases and retrospective audit.** For pieces where classification is judgment-dependent at piece-output time (the piece introduces vocabulary, but whether the same finding applies the vocabulary to itself is not yet determinable; OR a piece's shape-commitment is unclear at the moment but subsequent pieces operate under it), perform retrospective self-audit after the run: ask whether any piece committed a relationship, frame, semantic, vocabulary, or shape that subsequent pieces (intra-artifact) OR the next-discipline's behavior (inter-artifact) operated under. If yes, retrospectively classify that piece as meta-decision and apply the Piece-Level Inversion Rule (below) to it before publishing.

**Worked positive example.** The M1 piece in a maintenance-candidate-producing run commits to ADD-TEST shape; subsequent pieces operate under the ADD-TEST shape commitment → property (v) fires → meta-decision piece.

**Worked negative example.** A piece producing diversified examples for an M1 candidate (spanning algorithm spec / protocol spec / etc.) does NOT fire property (v) — the shape was chosen at the M1 piece; this piece elaborates within the chosen shape → content-production piece.
```

### Q3 — Piece-Level Inversion Rule

**Mechanism: Combination + Constraint Manipulation (compliance criterion + override).**

```markdown
*Refinement note (applies at Phase 2 Generate):*

**Piece-Level Inversion at Meta-Decision Pieces.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), the Coverage Strategy's per-seed gating is necessary but not sufficient. For each piece that meets the Meta-Decision-Piece Criterion (above), Innovation MUST additionally apply Inversion at piece-level, generating an Inversion-candidate that asks "what is the assumption this piece commits, and what if it's reversed?"

**Preconditions:** Production-task mode is operating; the piece meets at least one of the meta-decision-piece properties.

**Compliance criterion (observable at the saved Innovation output):** the piece's output contains both (a) the principal candidate text for the piece's committed direction, AND (b) an explicit Inversion-candidate paragraph naming the assumption being reversed and stating what follows from the reversal. Both candidates must be tested via the 5-test cycle. The Inversion-candidate may be selected, rejected, or refined; the rule does not mandate the Inversion-candidate's selection, only its generation and testing.

**Override path:** When the runner determines Inversion is genuinely inapplicable at a meta-decision piece (e.g., a synthesis of consistent priors where the relationship label is unambiguously REFINES with no plausible inversion-candidate), the override is recorded as `Inversion-marked-inapplicable: <specific reason>`. The reason must be specific (not "this just doesn't need it"); the override-recording overhead is intentional friction, not a loophole. Empty overrides, generic overrides, and single-component overrides are defects.

**Cross-references.** This rule operates alongside the Inversion mechanism's depth-check refinement note (above). For meta-decision pieces whose first Inversion produces a component-level statement, depth-iterate per the existing refinement. This rule does NOT replace the Coverage Strategy's per-seed minimum (1 Generator + 1 Framer); it adds a per-piece requirement specifically for meta-decision pieces.

**Scope bounded.** This rule does NOT apply to content-production pieces (those failing all meta-decision-piece properties). Over-application risk is bounded by the determination mechanism.
```

### Q4 — Intervention-Shape-Axis Inversion

**Mechanism: Combination + extension of Q3.**

```markdown
*Refinement note (applies at Phase 2 Generate):*

**Intervention-Shape-Axis Inversion at Property-(v) Pieces.** This is an additive extension to the Piece-Level Inversion Rule (above). For pieces firing property (v) of the Meta-Decision-Piece Criterion (intervention-shape commitment), the Inversion-candidate paragraph required by the Piece-Level Inversion Rule's compliance criterion MUST target the intervention-shape axis. The "assumption being reversed" must be the piece's intervention-shape commitment (named per the Intervention-Shape Vocabulary above), not a content-level assumption adjacent to the shape.

**Concretely**, when the piece commits to shape X (where X is one of the shapes from the Intervention-Shape Vocabulary), the Inversion-candidate paragraph must:

1. Name X explicitly as the assumption being reversed.
2. Name at least one alternative shape Y (also from the Vocabulary) that the reversal points to.
3. State what follows if Y were committed instead of X.
4. Test both X and Y via the 5-test cycle.

**Override path.** When the runner determines the framing-given or commitment shape is uniquely correct — no plausible alternative shape exists for this piece's specific case — record `Intervention-shape-Inversion-marked-inapplicable: <specific reason>`. The reason must be specific (not "no alternative comes to mind"). Example: "The piece commits to recording a historical observation; intervention-shape is not the piece's axis." Empty overrides are defects.

**Compliance criterion.** A meta-decision piece firing property (v) satisfies the rule when its Innovation output contains: (a) principal candidate text; (b) Inversion-candidate paragraph naming a shape from the Vocabulary as reversed assumption AND naming at least one alternative shape AND stating what follows; (c) 5-test cycle on both candidates; OR (d) `Intervention-shape-Inversion-marked-inapplicable` override with specific reason.

**Additive nature.** Pieces firing properties (i)-(iv) but NOT (v) continue under the Piece-Level Inversion Rule unchanged. Content-axis Inversion satisfies compliance for non-property-(v) pieces.
```

### Q5 — Methodology-Mode Consideration (at Phase 1 Seed)

**Mechanism: Combination + Constraint Manipulation (compliance + override).**

```markdown
*Refinement note (applies at Phase 1 Seed):*

**Methodology-Mode Consideration.** When Innovation receives a seed, the seed framing implies a methodology mode (per the Methodology Modes section of the Intervention-Shape and Methodology-Mode Vocabulary refinement note at Phase 2 Generate). The framing-implied mode is inherited from upstream disciplines (sensemaking + decomposition) and reflects their adjudication of how Innovation should run. Before running mechanisms on the seed, Innovation MUST:

1. **Identify the inherited mode.** Read the seed framing's text; classify per the methodology-modes vocabulary (use the "Text signals in seed framing" column). If the mode is ambiguous, default to Standard default unless the seed text explicitly names a non-default mode.

2. **Generate at least one alternative mode.** Name a different mode from the vocabulary that could be applied to this seed. Surface the alternative explicitly in the Innovation output's seed/preamble section.

3. **State what follows under the alternative.** In 1-3 sentences, describe what the candidate space would look like if the alternative mode were applied instead of the inherited mode. This is a brief structural-reasoning exercise, not a full mode-switch trial.

4. **Decide which mode to run with.**
   - *Default decision:* use the inherited mode. Innovation proceeds with the framing-implied mode and runs mechanisms accordingly.
   - *Mode-switch:* if the alternative is strongly preferable (the inherited mode would produce predictable / over-elaborate / under-coverage candidate spaces), switch to the alternative AND record: `Seed-time-methodology-mode-switch: <new-mode>; reason: <specific reason>`.
   - *Override (alternative inapplicable):* if the alternative is structurally inappropriate for this seed (upstream-discipline boundary already adjudicated the mode; specific calibration already conducted; etc.), record: `Methodology-mode-alternative-marked-inapplicable: <specific reason>`. Empty overrides are defects; the reason must be specific.

**Compliance criterion (artifact-observable).** The Innovation output's seed/preamble section contains: (a) the inherited mode named; (b) at least one alternative mode named; (c) the "what follows" description; (d) the decision (default OR mode-switch OR override-with-reason). Reading the artifact must be sufficient to verify compliance.

**Composition with piece-level rules.** This seed-time rule fires ONCE at the start of each Innovation run, BEFORE the piece-level rules at Phase 2 Generate (the Piece-Level Inversion Rule + the Intervention-Shape-Axis Inversion). The three rules form a vertical-layering architecture:

- **Seed time (this rule):** methodology-mode-alternative consideration → decides how mechanisms will apply across the run.
- **Piece time, generic (Piece-Level Inversion Rule):** for each meta-decision piece, generate piece-level Inversion-candidate.
- **Piece time, intervention-shape-axis (Intervention-Shape-Axis Inversion):** for each property-(v) piece, ensure the Inversion targets the intervention-shape axis.

Together with the Inherited Frame Audit (between Phase 2 and Phase 3), the methodology-mode consideration provides defense-in-depth across seed time and piece time.
```

### Q6 — Application Authority

The 5 spec edits (Q1-Q5) are PENDING user authorization. CONCLUDE does NOT apply them unilaterally.

**Authorization request:** User authorizes applying the patch by responding with "apply the patch" or equivalent. Application uses Edit tool:
1. Insert Q5 (Methodology-Mode Consideration refinement note) at Phase 1 Seed after the existing content (after line 252; before `### Phase 2: Generate` heading at line 254).
2. Insert Q1 (Vocabulary refinement note) at Phase 2 Generate after the "Combining mechanisms" paragraph (line 276) and before the augmented closing pointer (line 278).
3. Insert Q2 (Meta-Decision-Piece Criterion refinement note) after Q1.
4. Insert Q3 (Piece-Level Inversion Rule refinement note) after Q2.
5. Insert Q4 (Intervention-Shape-Axis Inversion refinement note) after Q3.

**Verification on application:** spec file contains 5 new refinement notes at the specified locations; no §-numbered references; cross-references descriptive; Phase 2 Generate's existing closing pointer at the END of all 4 new refinement notes (referring to Inherited Frame Audit as "next sub-section" — still accurate since Inherited Frame Audit follows after the closing pointer).

### Q7 — Forward-Reference Closing List

Sub-inquiry A's Q1.5 Integration Map referenced 5 forthcoming refinement notes. Status after sub-inquiry B is applied:

| Sub-inquiry A's forward-reference | Sub-inquiry B closes? | Spec location after B applies |
|---|---|---|
| "A forthcoming **Meta-Decision-Piece Criterion** refinement note at Phase 2 Generate" | **YES** — closes via Q2 | Phase 2 Generate refinement note "Meta-Decision-Piece Criterion" |
| "A forthcoming **Piece-Level Inversion Rule** refinement note at Phase 2 Generate" | **YES** — closes via Q3 | Phase 2 Generate refinement note "Piece-Level Inversion at Meta-Decision Pieces" |
| "A forthcoming **Intervention-Shape-Axis Inversion** refinement note at Phase 2 Generate" | **YES** — closes via Q4 | Phase 2 Generate refinement note "Intervention-Shape-Axis Inversion at Property-(v) Pieces" |
| "A forthcoming **Methodology-Mode Consideration** refinement note at Phase 1 Seed" | **YES** — closes via Q5 | Phase 1 Seed refinement note "Methodology-Mode Consideration" |
| "A forthcoming **Re-test trigger** disposition (a 4th category at Phase 3 Test's output-disposition refinement note)" | **NO** — sub-inquiry C will close | Sub-inquiry C item 1 |

**4 of 5 of A's forward-references close in B; 1 closes in C.**

Sub-inquiry A's Override Path cross-reference ("future refinement notes will use the same pattern") — B's Q3 + Q4 + Q5 all commit override patterns matching this pattern (`Inversion-marked-inapplicable`; `Intervention-shape-Inversion-marked-inapplicable`; `Methodology-mode-alternative-marked-inapplicable`). The override-pattern cross-reference is functionally closed by B.

---

## Phase 3 — Test

Per-piece 5-test cycle (compact):

| Piece | Novelty | Survival | Fertility | Actionability | Independence |
|---|---|---|---|---|---|
| Q1 | PASS (vocabulary unification) | PASS | PASS | PASS | PASS |
| Q2 | PASS (5th property added) | PASS | PASS | PASS | PASS |
| Q3 | PASS (piece-level rule) | PASS | PASS | PASS | PASS |
| Q4 | PASS (intervention-shape axis) | PASS | PASS | PASS | PASS |
| Q5 | PASS (methodology-mode at seed) | PASS | PASS | PASS | PASS |
| Q6 | PARTIAL Novelty (matches A pattern) | PASS | PASS | PASS | PASS |
| Q7 | PARTIAL Novelty (closes A's refs) | PASS | PASS | PASS | PASS |

**Assembly check:** Q1→Q2→Q3→Q4 at Phase 2 Generate + Q5 at Phase 1 Seed = vertical-layering architecture (seed-time + piece-time-generic + piece-time-shape-axis) complementing sub-inquiry A's Inherited Frame Audit. Coherent.

**Property (v) verification:** Q1-Q5 = direct /innovate spec edits (Property (v) FIRES); Q6+Q7 = documentation (does NOT fire).

**Layer-3 §9 self-application outcome:** During drafting of Q1-Q5, NO methodology-mode-alternative consideration arose. Each piece's articulation was mechanical convention application (verbatim content + §-marker drop + cross-reference rewriting). **NO OVERRIDE NEEDED.** Layer-3 count REMAINS at N=4 MONITORING. Does NOT advance to N=5 TRIGGER.

This matches sub-inquiry A's favorable outcome — second consecutive Production-task inquiry maintaining no-override discipline.

---

## Mechanism Coverage

- Generators: Combination (Q1, Q2, Q3, Q4, Q5, Q7) = 6 applications
- Framers: Lens Shifting (Q1), Constraint Manipulation (Q3, Q5) = 3 applications
- Total: 2 generators + 2 framers; minimum coverage MET; full coverage not pursued.

Convergence: Combination + Constraint Manipulation converge across spec-content pieces.

Failure modes: 0/6 observed.

---

## Reasoning

### Layer-3 NO OVERRIDE — second consecutive

Sub-inquiry A demonstrated that documentation-task inquiries don't fire Property (v). This sub-inquiry B is the FIRST Production-task post-audit; Property (v) FIRES at Q1-Q5. The Sensemaking SV6 #5 discipline (aim for no-override) shaped Innovation's drafting:
- Pair 5/7/8 + 02-00 + 01-00 + sub-inquiry A together fully specified the articulation.
- Convention rewriting (§-marker drop; cross-reference rewriting) was mechanical.
- No methodology-mode-alternative consideration arose — the §9 commit was articulation of the committed methodology-mode rule, not methodology-mode design.

**Result: NO OVERRIDE NEEDED. Layer-3 count REMAINS at N=4 MONITORING.**

The trigger remains armed; sub-inquiry C is the next opportunity for it to fire.

### Why the unified Vocabulary is structurally correct

Pair 8's diagnostic explicitly committed to vocabulary unification (§8.A intervention shapes + §8.B methodology modes in one section). The Q1 commit honors this by using one refinement note with two descriptive sub-headings. Splitting would have diverged from Pair 8's structural commitment + added unnecessary section count.

### Why cross-reference rewriting is mechanical

Each §-numbered reference maps to a fixed descriptive replacement. No interpretive judgment is required. The Sensemaking SV6 #3 commitment specifies the pattern.

---

## Verdict

**PROCEED to Critique.** 7 pieces drafted; Layer-3 NO OVERRIDE; all 5 HCR-equivalents (2 from Decomposition) mitigated; Mechanism Coverage met; 0/6 failure modes.

**Innovation outcome: Layer-3 count REMAINS at N=4 MONITORING.** Sub-inquiry B does NOT advance the trigger. Sub-inquiry C is the next opportunity.
