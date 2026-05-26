# Innovation — route taxonomy categorization

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/_branch.md`

---

## Phase 1 — Seed

**Seed:** Decomposition's 6 pieces (P1 Primary axis; P2 Secondary attributes; P3 Per-type table; P4 Alignment; P5 FF list; P6 Re-test). Production-task mode.

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (balanced 4G+3F).
- **Alternative:** Contrarian-rethink — would re-litigate whether design-memo-implicit is the right primary axis. Sensemaking stabilized; per-piece Inversion covers the contrarian axis.
- **Decision:** DEFAULT.

### Meta-Decision-Piece Classification

| Piece | Properties fired | Meta-decision? |
|---|---|---|
| **P1** (Primary axis) | (b) framing-semantic = Movement Family categorization; (c) lesson-vocabulary = action-noun names; (d) understanding-aid criterion; (e) ADD-CONTENT | **YES** + property (v) fires |
| **P2** (Secondary attributes) | (d) 6-attribute set with enums; (e) ADD-CONTENT | **YES** + property (v) fires |
| **P3** (Per-type table) | (a) type-to-coordinate mapping; (d) per-row commitments | **YES** |
| **P4** (Alignment) | (a) preservation mapping | **YES** |
| **P5** (FF LIST) | none | content production |
| **P6** (Re-test) | (a) verdict labels; (d) verdict taxonomy | **YES** |

5 meta-decision pieces require Piece-Level Inversion. **P1 + P2 fire property (v) → Intervention-Shape-Axis Inversion required for both.**

---

## Phase 2 — Generate

### Coverage plan

| Piece | Generators | Framers | Inversion-candidate |
|---|---|---|---|
| P1 | Domain Transfer (native + cross-domain) | Lens Shifting | Inversion (intervention-shape: ADD-CONTENT vs REORGANIZE / DO-NOTHING / REPAIR) |
| P2 | Absence Recognition (patch + redesign) | Constraint Manipulation (ADD + REMOVE) | Inversion (intervention-shape: ADD-CONTENT vs REORGANIZE / REMOVE-ONE / DO-NOTHING) |
| P3 | Combination | — | Inversion (content-axis: single table vs per-family sub-sections) |
| P4 | Combination | — | Inversion (content-axis: prose vs table format) |
| P5 | (content production) | — | — |
| P6 | Combination, Extrapolation | — | Inversion (content-axis: direction-reversal) |

Mechanism totals: Generators 4/4 (Combination ×2, Absence Recognition, Domain Transfer, Extrapolation); Framers 3/3 (Lens Shifting, Constraint Manipulation both-directions, Inversion ×5). **Full coverage.**

---

### P1 — PRIMARY AXIS SPEC

#### P1-G (Generic — Sensemaking commitment)

> **Mechanism: Domain Transfer.** Native source: programming language type-systems (algebraic data types with named variants — `enum MovementFamily { Progression, ReOrientation, Coordination }`). Cross-domain source: biological taxonomy (Kingdom/Phylum/Class hierarchical naming pattern — but routeman is single-level not hierarchical).

```
PRIMARY AXIS: Movement Family

3 groups (action-noun names):
  - Progression Moves (6 types): advance the work in some direction or end it.
      Members: DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE.
      Structural property: forward-direction; baseline-effort; mostly within-thread.
  - Re-orientation Moves (5 types): adjust the scope, approach, or framing of ongoing work.
      Members: RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE.
      Structural property: sideways-direction; process-directed effort; within-thread.
  - Coordination Moves (5 types): coordinate across time/branches/threads, or validate/consolidate.
      Members: REVISIT (with sub-actions), UNBLOCK, MERGE, TEST, CONSOLIDATE.
      Structural property: cross-cycle or cross-branch scope; varying effort.

UNDERSTANDING-AID JUSTIFICATION:
  1. The 3-family structure surfaces design memo's already-implicit 6-5-5 grouping
     (visible in semicolon-separated listing). Surface-not-invent.
  2. Action-noun names describe what each family DOES — readers learn the structure
     from the names alone (vs tier-numbers which carry no semantic content).
  3. Hybrid scheme (primary + secondary attributes) accommodates multi-axis richness
     without coordinate-system complexity.
```

#### P1-F (Focused — alternative action-noun names considered)

> **Mechanism: Lens Shifting.** Under conditions where SKILL.md readers need terse references, shorter names ("Advance / Adjust / Coordinate") may aid scannability; under conditions where readers are encountering the categorization first time, longer descriptive names ("Progression Moves / Re-orientation Moves / Coordination Moves") aid initial understanding.

Alternative naming candidates (deferred to SKILL.md authoring as bikeshed-level decision):
- **Short**: Advance / Adjust / Coordinate
- **Verb-form**: Progressing / Re-orienting / Coordinating
- **Mid-length**: Forward Moves / Re-orient Moves / Coordinate Moves
- **Adopted (P1-G)**: Progression Moves / Re-orientation Moves / Coordination Moves

Naming bikeshed deferred to SKILL.md authoring; P1-G's adopted names are the first-ship default.

#### P1-C (Contrarian — Inversion intervention-shape REQUIRED per property-(v))

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (new categorization spec). Alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Just rename the design memo's implicit groups inline (add headers to the 6-5-5 listing); don't add secondary attributes or per-type table.
> Cons: loses the secondary-attribute richness; the user's "movement direction / intent" framing isn't accommodated; loses the per-type coordinate.

> **Alternative shape 2: DO-NOTHING.** Skip categorization entirely; keep the flat 16-type list.
> Cons: explicitly fails the user's ask ("we should have big categories and smaller categories... such naming will make our understanding better").

> **Alternative shape 3: REPAIR.** Change the design memo's 6-5-5 partition (e.g., move TERMINATE to Coordination Family because it's a "closure" coordination act).
> Cons: changes existing structure without strong reason; design memo's 6-5-5 has been in the spec since 14-39 and is already inherited downstream.

> **Comparison.**
>
> | Shape | Pro | Con |
> |---|---|---|
> | ADD-CONTENT (P1-G) | Honors user's ask; preserves existing structure; accommodates multi-axis | One more spec layer |
> | REORGANIZE | Smaller spec | Loses richness; fails user's framing |
> | DO-NOTHING | Smallest footprint | Fails user's ask |
> | REPAIR | Cleaner partition perhaps | Changes existing structure |

> **Verdict:** ADD-CONTENT (P1-G) survives all structural tests. Alternatives fail on user-ask or richness or stability.

---

### P2 — SECONDARY ATTRIBUTES SPEC

#### P2-G (Generic — 6 attributes per Sensemaking)

> **Mechanism: Absence Recognition (patch + redesign).** Patch-level absence: a Route may apply to "this inquiry" vs "any inquiry in the project" — `applies_to_stage` attribute (Stage 1 parent vs Stage 2 sub-route) might be useful for staged-mapping integration. Redesign-level: if designed from scratch, are all 6 attributes load-bearing? `has_sub_actions` is currently true only for REVISIT — might be considered "speculative for future" rather than load-bearing now.

```
SECONDARY ATTRIBUTES (6 attributes per type)

| Attribute | Values | Purpose | Source organization preserved |
|---|---|---|---|
| direction | forward, backward, sideways, cross-branch | Spatial/temporal axis of the move | User-language vocabulary |
| intent | exploration, refinement, investigation, closure, coordination, pivot | What the move's goal is | User-language vocabulary |
| autonomy_readiness_tier | L2-baseline, L3-cross-cycle, L4-process-directed, L5-coordination-endgame | When type becomes auto-emit-ready | docs/autonomy_ladder.md Section 5 |
| auto_class | auto, judgment | routeman auto-emit vs human-flag | design memo's 12-auto/4-judgment partition (exact membership deferred) |
| scope | within-thread, cross-cycle, cross-branch | Spatial/temporal scope | (this inquiry) |
| has_sub_actions | true, false | Whether type has operational sub-actions | Currently true only for REVISIT |
```

#### P2-F (Focused — patch-level absence enrichment)

> **Mechanism: Absence Recognition (patch level).** Considered additions:
> - `applies_to_stage` ∈ {stage1-parent, stage2-sub-route, both} — would tie categorization to staged-mapping (18-58). Not load-bearing for first ship; deferred to SKILL.md authoring if staged-mapping integration demands.
> - Enriched `intent` enum: add "diagnosis" (separate from "investigation"); add "validation" (separate from "investigation"). Disposition: enum values are calibratable per practice; SKILL.md authoring may refine.

Both are deferred to SKILL.md authoring (not first-ship commitments).

#### P2-additional (Constraint Manipulation — both directions required)

> **ADD constraint:** "must be machine-parseable for routeman's Stage 1 generation rule." Implication: enum values support this naturally (string enums); attribute names follow snake_case convention; structured for routeman's mechanism. **PASS — current design satisfies.**

> **REMOVE constraint:** "remove `has_sub_actions` since only REVISIT uses it." Implication: with only one type using it, the attribute may be over-specified. But: future types may gain sub-actions; the attribute provides extensibility hook. REMOVE costs more than it saves. **REMOVE FAILS — keep `has_sub_actions` as extensibility hook.**

#### P2-C (Contrarian — Inversion intervention-shape REQUIRED per property-(v))

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (6 new attributes). Alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Don't add attributes; describe types verbally within each family section (prose narrative).
> Cons: loses machine-parseability for Stage 1 rules; loses the multi-axis query ability.

> **Alternative shape 2: REMOVE-ONE.** Drop overlapping attributes (e.g., `scope` overlaps with `direction` for cross-branch types: cross-branch direction implies cross-branch scope).
> Cons: scope and direction aren't 1:1 (some within-thread types are sideways direction; some cross-branch types are coordination). Overlap is partial. Removing scope loses information.

> **Alternative shape 3: DO-NOTHING.** No secondary attributes; primary categorization alone.
> Cons: fails the user's multi-axis framing ("movement direction / movement types / intent" suggests multiple AXES, not just primary).

> **Verdict:** ADD-CONTENT (P2-G) survives. Alternatives lose information.

---

### P3 — PER-TYPE COORDINATE TABLE

#### P3-G (Generic — single 16-row table)

> **Mechanism: Combination.** Family assignment + 6 attribute values + REVISIT special handling → single 16-row table.

```
| Type | Family | Direction | Intent | Autonomy Tier | Auto-class | Scope | Sub-actions |
|---|---|---|---|---|---|---|---|
| DEEPEN | Progression | forward | refinement | L2-baseline | auto* | within-thread | false |
| REFINE | Progression | forward | refinement | L2-baseline | auto* | within-thread | false |
| PURSUE SEED | Progression | forward | exploration | L2-baseline | auto* | within-thread | false |
| INVESTIGATE FRONTIER | Progression | forward | exploration | L2-baseline | judgment* | within-thread | false |
| DEVELOP | Progression | forward | investigation | L2-baseline | auto* | within-thread | false |
| TERMINATE | Progression | forward | closure | L2-baseline | judgment* | within-thread | false |
| RE-RUN DEEPER | Re-orientation | sideways | refinement | L4-process-directed | auto* | within-thread | false |
| WIDEN | Re-orientation | sideways | exploration | L4-process-directed | auto* | within-thread | false |
| REFRAME | Re-orientation | sideways | pivot | L4-process-directed | judgment* | within-thread | false |
| DIFFERENT APPROACH | Re-orientation | sideways | pivot | L4-process-directed | judgment* | within-thread | false |
| DIAGNOSE | Re-orientation | sideways | investigation | L4-process-directed | auto* | within-thread | false |
| REVISIT | Coordination | backward | coordination | L3-cross-cycle | judgment* | cross-cycle | **true** |
| UNBLOCK | Coordination | backward | coordination | L5-coordination-endgame | judgment* | cross-branch | false |
| MERGE | Coordination | cross-branch | coordination | L4-process-directed | judgment* | cross-branch | false |
| TEST | Coordination | cross-branch | investigation | L5-coordination-endgame | auto* | cross-cycle | false |
| CONSOLIDATE | Coordination | cross-branch | closure | L5-coordination-endgame | judgment* | cross-branch | false |

*auto_class values are illustrative best-guess; design memo defers the exact 12-auto/4-judgment
 partition membership to SKILL.md authoring.

REVISIT sub-actions (operational refinement; not separate categorization rows):
  - RESURRECT — bring back a prior-killed direction
  - INVALIDATE — mark a prior-survived direction as no longer applicable
  - REVERT — undo a prior refinement
```

#### P3-F (Focused — grouped presentation: 3 family sub-tables)

> **Mechanism: Combination.** Group the table by family for easier within-family scanning.

```
PROGRESSION MOVES
| Type | Direction | Intent | Autonomy Tier | Auto-class | Scope |
|---|---|---|---|---|---|
| DEEPEN | forward | refinement | L2-baseline | auto* | within-thread |
| REFINE | forward | refinement | L2-baseline | auto* | within-thread |
| PURSUE SEED | forward | exploration | L2-baseline | auto* | within-thread |
| INVESTIGATE FRONTIER | forward | exploration | L2-baseline | judgment* | within-thread |
| DEVELOP | forward | investigation | L2-baseline | auto* | within-thread |
| TERMINATE | forward | closure | L2-baseline | judgment* | within-thread |

RE-ORIENTATION MOVES
| Type | Direction | Intent | Autonomy Tier | Auto-class | Scope |
|---|---|---|---|---|---|
| RE-RUN DEEPER | sideways | refinement | L4-process-directed | auto* | within-thread |
| WIDEN | sideways | exploration | L4-process-directed | auto* | within-thread |
| REFRAME | sideways | pivot | L4-process-directed | judgment* | within-thread |
| DIFFERENT APPROACH | sideways | pivot | L4-process-directed | judgment* | within-thread |
| DIAGNOSE | sideways | investigation | L4-process-directed | auto* | within-thread |

COORDINATION MOVES
| Type | Direction | Intent | Autonomy Tier | Auto-class | Scope | Sub-actions |
|---|---|---|---|---|---|---|
| REVISIT | backward | coordination | L3-cross-cycle | judgment* | cross-cycle | **true** |
| UNBLOCK | backward | coordination | L5-coordination-endgame | judgment* | cross-branch | false |
| MERGE | cross-branch | coordination | L4-process-directed | judgment* | cross-branch | false |
| TEST | cross-branch | investigation | L5-coordination-endgame | auto* | cross-cycle | false |
| CONSOLIDATE | cross-branch | closure | L5-coordination-endgame | judgment* | cross-branch | false |
```

Per-family commonalities (which P3-G's flat table hides):
- Progression Moves: ALL `direction: forward`; ALL `autonomy_readiness_tier: L2-baseline`; ALL `scope: within-thread`.
- Re-orientation Moves: ALL `direction: sideways`; ALL `autonomy_readiness_tier: L4-process-directed`; ALL `scope: within-thread`.
- Coordination Moves: varied direction; varied autonomy_tier; cross-cycle or cross-branch scope.

#### P3-C (Contrarian — Inversion content-axis)

> **Mechanism: Inversion.** Assumption reversed: "table format presentation." → Reversed: "per-family sub-sections with types as bullet points (not table rows)."

> **Alternative shape:** Each family is a sub-section with type-bullets:
>
> **Progression Moves**
> - DEEPEN: forward refinement, L2-baseline, auto*, within-thread.
> - REFINE: forward refinement, L2-baseline, auto*, within-thread.
> - (...etc)
>
> Cons: less compact than table; harder to query "which types have intent=refinement" across families.

> **Verdict:** DEFER to SKILL.md authoring (FF-1 deferred presentation shape). Either presentation works; the choice is at SKILL.md authoring stage.

---

### P4 — ALIGNMENT STATEMENT

#### P4-G (Generic — prose alignment)

> **Mechanism: Combination.** Standard prose alignment.

```
ALIGNMENT WITH EXISTING IMPLICIT ORGANIZATIONS

This categorization preserves existing implicit organizations without conflict:

1. **Design memo's implicit 6-5-5 grouping** (from devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md)
   becomes the PRIMARY axis (Movement Family). The semicolon-separated listing in the design memo IS the
   3-family structure made explicit and named.

2. **autonomy_ladder.md Section 5 per-level Selector subset** (from docs/autonomy_ladder.md) becomes
   the SECONDARY attribute `autonomy_readiness_tier`. The per-level subsets (L2-baseline, L3-cross-cycle,
   L4-process-directed, L5-coordination-endgame) map to per-type values without altering autonomy_ladder.md's commitments.

3. **Design memo's 12-auto/4-judgment partition** (the second endgame function) becomes the SECONDARY
   attribute `auto_class`. Exact membership (which 12 are auto, which 4 are judgment) remains deferred
   to SKILL.md authoring per design memo's original deferral.

4. **24-01's per-movement-type Stage 1 mapping** (from devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md)
   is preserved AND re-presentable: instead of 16 per-type rules in routeman SKILL.md, the mapping
   can become 3 per-family rules with per-type refinements (cleaner) when SKILL.md authoring takes
   this finding as input.

5. **Canonical /navigation 16-type taxonomy** (cognitive_harness/navigation/references/navigation.md)
   is preserved unchanged. The categorization is a structural overlay; types themselves are unaltered.

No conflict with existing structures.
```

#### P4-C (Contrarian — Inversion content-axis: tabular alignment)

> **Mechanism: Inversion.** Assumption reversed: "alignment is prose." → Reversed: "alignment is a table (source → mapping → preserved-form)."

```
ALIGNMENT TABLE

| Source organization | Source location | Categorization mapping | Preservation form |
|---|---|---|---|
| Design memo's 6-5-5 grouping | 14-39 design memo's semicolon-separated 16-type listing | → primary axis | Movement Family (3 groups: Progression / Re-orientation / Coordination) |
| autonomy_ladder.md Section 5 | docs/autonomy_ladder.md Section 5 (per-level Selector subset) | → secondary attribute | `autonomy_readiness_tier` (L2-baseline / L3-cross-cycle / L4-process-directed / L5-coordination-endgame) |
| 12-auto/4-judgment partition | 14-39 design memo (second endgame function) | → secondary attribute | `auto_class` (auto / judgment); exact membership deferred per design memo |
| 24-01 per-movement-type Stage 1 mapping | 24-01 adaptive-guidance inquiry | → re-presentable as per-family rules at SKILL.md authoring | Cleaner SKILL.md surface |
| Canonical 16-type taxonomy | cognitive_harness/navigation/references/navigation.md | → structural overlay (no change to types) | Types unchanged |
```

Verdict: companion to P4-G; both presentation options are useful.

---

### P5 — FF LIST

#### P5-G (Generic — content production)

```
RESIDUAL OPEN QUESTIONS (3 follow-ups)

FF-1 — SKILL.md presentation shape.
  Scope: single 16-row table vs grouped 3 sub-tables vs per-family sub-sections.
  Consumer: SKILL.md authoring inquiry.
  Revival: when SKILL.md is being written.

FF-2 — Auto-class exact membership.
  Scope: which 12 types are auto / which 4 are judgment (design memo's original deferral).
  Consumer: SKILL.md authoring inquiry.
  Revival: same.

FF-3 — Generalization to other discipline taxonomies (research frontier).
  Scope: could the hybrid primary-axis + secondary-attributes approach generalize to other
    discipline taxonomies (e.g., /sense-making's anchor types; /critique's verdict types)?
  Research frontier.
  Revival: when a second discipline's taxonomy needs analogous categorization.
```

---

### P6 — INHERITED COMMITMENTS RE-TEST

#### P6-G (Generic — verdict table)

> **Mechanism: Combination + Extrapolation.** Extrapolation: the user's re-framing of Q7 from "completeness" to "categorization" may be a pattern that other Q7-like frontier questions ("is X complete?") benefit from — surfaced as research frontier note. Combination: standard verdict table.

```
| Prior / Spec | Commitment | Verdict | Reason / Impact |
|---|---|---|---|
| 14-39 design memo | 16-type taxonomy + implicit 6-5-5 grouping | PRESERVED + MADE-EXPLICIT | Categorization surfaces and names the existing implicit grouping |
| 14-39 design memo | 12-auto/4-judgment partition | PRESERVED | Mapped to `auto_class` secondary attribute; membership deferred per design memo |
| 14-39 design memo | LAYER-2 framework (3 modes) | INHERITED-WITHOUT-RE-TEST | Categorization is structural overlay; LAYER-2 modes unaffected |
| 15-20 frontier-questions | Q7 (16-type completeness) | RE-FRAMED + PARTIALLY-RESOLVED | User re-framed Q7 from completeness to categorization; this inquiry resolves categorization sub-aspect. Completeness aspect REMAINS as Tier-2 watch-list (Q7 partially-resolved, not fully) |
| 24-01 adaptive-guidance | Per-movement-type Stage 1 mapping | PRESERVED + RE-PRESENTABLE | 16 per-type rules in SKILL.md can become 3 per-family rules with per-type refinements |
| 24-40 autonomy register | Register provides current meta-loop level | INHERITED-WITHOUT-RE-TEST | Categorization's `autonomy_readiness_tier` attribute aligns; no direct interaction at first ship |
| docs/autonomy_ladder.md | Section 5 per-level Selector subset | PRESERVED + MAPPED | Mapped to `autonomy_readiness_tier` attribute |
| cognitive_harness/navigation/references/navigation.md | 16-type taxonomy | PRESERVED VERBATIM | Categorization is structural overlay; types unchanged |
```

#### P6-C (Contrarian — Inversion direction-reversal: priors-shape-adoption)

> **Mechanism: Inversion.** Assumption reversed: "test priors against adoption." → Reversed: "test adoption against priors — does adoption SURVIVE each prior?"

```
COUNTER-DIRECTION: does the adoption SURVIVE each prior?

| Prior commitment | Does adoption SURVIVE? | Note |
|---|---|---|
| 14-39 implicit 6-5-5 grouping | DERIVED-FROM | The primary axis IS the grouping; adoption surfaces it |
| 14-39 12-auto/4-judgment | CONSTRAINED-BY | `auto_class` attribute exists because of this commitment |
| autonomy_ladder.md Section 5 | CONSTRAINED-BY | `autonomy_readiness_tier` attribute exists because of this organization |
| 15-20 Q7 framing | RE-FRAMED-BY-USER | User's reframe (completeness → categorization) is what made THIS inquiry distinct from a literal Q7 resolution |
| 24-01 per-movement-type mapping | INFORMED-BY | The per-type mapping suggests per-family rules; categorization enables this presentation |
| LLM-operational-design (18-58) | DERIVED-FROM | User-language alignment in attribute names ("direction", "intent", "movement"); now N=5 evidence after this inquiry |
| Canonical 16-type taxonomy | CONSTRAINED-BY | Categorization must preserve all 16 |
```

> **What this reveals:** the design is HEAVILY shaped by priors. The PRIMARY AXIS is DERIVED FROM design memo's implicit 6-5-5 (surface-not-invent); the SECONDARY ATTRIBUTES are mostly CONSTRAINED BY existing organizations (autonomy_ladder.md Section 5; design memo 12/4); the attribute NAMING is DERIVED FROM the LLM-operational-design principle. The categorization isn't a free choice — it's the natural surfacing of what's already implicit, with secondary attributes preserving existing organizations.

> **Disposition:** RE-TEST TRIGGER. P6-C's insight implies P1 + P2 + P4 should carry derivation notes. P1's primary axis cites design-memo-implicit explicitly; P2's attributes cite existing organizations; P4 IS the alignment statement. The derivation notes are ALREADY in the design — P6-C confirms they're correctly captured.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Seed-level central assumption

"Design-memo-implicit 6-5-5 grouping is the right primary axis; hybrid scheme (primary + secondary attributes) is the right shape; action-noun naming aids understanding."

**Challenge scan:**
- **P1-C** (REORGANIZE / DO-NOTHING / REPAIR): challenges primary axis choice + shape. ✓
- **P2-C** (REORGANIZE / REMOVE-ONE / DO-NOTHING): challenges secondary-attribute existence. ✓
- **P3-C** (per-family sub-sections): challenges presentation shape. ✓
- **P4-C** (tabular): challenges alignment-statement shape.
- **P6-C** (direction-reversal): reveals derivation.

**Verdict:** Central assumption challenged at multiple piece levels. **Audit does NOT fire.**

### Piece-level commitments

All meta-decision piece commitments explicitly challenged. **Audit does NOT fire at piece level.**

---

## Phase 3 — Test

### 5-test cycle per candidate

| Candidate | Novelty | Survival | Fertility | Action | Independence | Disposition |
|---|---|---|---|---|---|---|
| P1-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P1-F (alt naming candidates) | MED | HIGH | LOW | HIGH | YES | **DEFER to SKILL.md authoring** (bikeshed-level) |
| P1-C (REORGANIZE) | MED | LOW (loses richness) | LOW | LOW | NO | **KILL with seed** |
| P1-C (DO-NOTHING) | LOW | LOW (fails user-ask) | LOW | LOW | NO | **REJECTED** |
| P1-C (REPAIR partition) | MED | LOW (changes existing structure without strong reason) | LOW | LOW | NO | **KILL with seed** |
| P2-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P2-F (enriched intent / applies_to_stage) | LOW | HIGH (additive) | MED | HIGH | YES | **DEFER to SKILL.md authoring** (enum calibration) |
| P2-additional ADD (machine-parseable) | LOW | HIGH (current design satisfies) | LOW | HIGH | YES | **ACTIONABLE as verification note** |
| P2-additional REMOVE (drop has_sub_actions) | LOW | LOW (loses extensibility) | LOW | LOW | NO | **REJECTED** |
| P2-C (REORGANIZE / REMOVE-ONE / DO-NOTHING) | MED | LOW (loses information) | LOW | LOW | NO | **KILL with seed** |
| P3-G (single 16-row table) | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P3-F (grouped 3 sub-tables) | MED | HIGH | HIGH | HIGH | YES | **ACTIONABLE companion** |
| P3-C (per-family sub-sections) | MED | MED (less compact) | LOW | MED | NO | **DEFER to SKILL.md authoring** (FF-1 presentation shape) |
| P4-G (prose alignment) | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P4-C (tabular alignment) | LOW | HIGH | MED | HIGH | YES | **ACTIONABLE companion** |
| P5-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P6-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P6-C (direction-reversal) | HIGH | HIGH | HIGH | MED | NO | **RE-TEST TRIGGER** → confirms derivation notes are captured |

### Test summary

- 18 candidates produced.
- 9 ACTIONABLE / companion / verification note.
- 3 DEFER (to SKILL.md authoring or revival).
- 4 KILL with seeds.
- 2 REJECTED.

### Artifact-grounding (6th conditional test)

Categorical claims requiring artifact check:
- P3-G's claim "design memo lists types in 6-5-5 semicolon-separated order" — verified earlier in surfacing via grep.
- P4-G's claim "autonomy_ladder.md Section 5 commits per-level Selector subset" — verified earlier via Surfacing.
- P4-G's claim "24-01 has per-movement-type Stage 1 mapping" — verified earlier.

All categorical claims verified. **PASS.**

### Axis coverage check

Orthogonal axes addressed:
1. **Content axis:** P1-G/P2-G/P3-G/P4-G + companions.
2. **Shape axis (intervention-shape):** P1-C + P2-C alternatives (REORGANIZE etc.).
3. **Presentation axis:** P3-F grouped vs P3-G flat; P4-C tabular vs P4-G prose.
4. **Direction axis (re-test direction-reversal):** P6-C.
5. **Naming axis:** P1-F alt-naming candidates.

5 axes covered. **PASS.**

---

## Assembly Check

Combine ACTIONABLE candidates:

**Emergent finding-shape:**

```
1. Opening reframing — Q7 RE-FRAMED-AND-RESOLVED (categorization sub-aspect; completeness remains Tier-2).
   The design is DERIVED FROM design-memo-implicit (P6-C insight).

2. Primary axis spec (P1-G with adopted action-noun names; alternative naming candidates
   deferred to SKILL.md authoring) — Movement Family with Progression / Re-orientation /
   Coordination groups + per-group definitions + understanding-aid justification.

3. Secondary attributes spec (P2-G with 6 attributes + verification notes from P2-additional ADD) —
   6 attributes with enums + purposes + source-organization preservation.

4. Per-type coordinate table (P3-G default; P3-F grouped sub-tables as SKILL.md authoring option) —
   16 types × 7-tuple with TERMINATE + REVISIT special handling.

5. Alignment statement (P4-G prose + P4-C tabular as companion) — preservation mapping for
   5 existing organizations.

6. FF list (P5-G) — 3 follow-ups.

7. Inherited commitments re-test (P6-G + P6-C softened bidirectional note) — verdict table
   + priors-shape-adoption insight.

8. Deferred candidates section — P1-F alt naming; P2-F enriched intent / applies_to_stage;
   P3-C per-family sub-sections; P3-F as companion option for SKILL.md presentation choice.

9. Killed candidates with seeds — P1-C REPAIR partition (changes existing structure);
   P2-C REORGANIZE/REMOVE-ONE (loses information).
```

**Cross-piece coherence:** opening reframing coheres with derivation notes (P1 cites design memo; P2 cites existing organizations; P4 IS the alignment) and re-test (P6).

**Emergent insight:** the categorization isn't a free choice — it's the SURFACING of what's already implicit in the project (design memo's 6-5-5; autonomy_ladder.md's per-level subsets; 12/4 partition; 24-01's per-movement-type mapping). The inquiry's contribution is making the implicit explicit + adding action-noun naming for understanding.

---

## Telemetry

### Mechanism Coverage

- **Generators applied:** 4/4 (Combination ×2, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation both-directions, Inversion ×5).
- **Convergence:** YES — 3+ mechanisms converge on "surface design-memo-implicit 6-5-5 + hybrid secondary attributes" (Combination → spec; Domain Transfer → algebraic-data-type analogue; Extrapolation → research-frontier on generalization; KILL seeds confirm alternatives fail).
- **Survivors tested:** 18/18 (5-test cycle on all).
- **Failure modes observed:** none of the 6.
- **Inherited Frame Audit:** central assumption + piece-level commitments all challenged; audit does NOT fire.
- **RE-TEST TRIGGER:** 1 firing (P6-C → confirms derivation notes are captured in P1, P2, P4).

### Production-task additional telemetry

| Piece | Mechanism log | Meta-decision classification | Piece-level Inversion compliance |
|---|---|---|---|
| P1 | [Domain Transfer:native+cross, Lens Shifting, Inversion:intervention-shape] | meta-decision (b, c, d, e); property (v) fires | satisfied (P1-C names REORGANIZE/DO-NOTHING/REPAIR on intervention-shape axis) |
| P2 | [Absence Recognition:patch+redesign, Constraint Manipulation:ADD+REMOVE, Inversion:intervention-shape] | meta-decision (d, e); property (v) fires | satisfied (P2-C names REORGANIZE/REMOVE-ONE/DO-NOTHING on intervention-shape axis) |
| P3 | [Combination, Inversion:content-axis] | meta-decision (a, d) | satisfied (P3-C content-axis Inversion) |
| P4 | [Combination, Inversion:content-axis] | meta-decision (a) | satisfied (P4-C content-axis Inversion) |
| P5 | [content production] | content-production | n/a |
| P6 | [Combination, Extrapolation, Inversion:content-axis] | meta-decision (a, d) | satisfied (P6-C direction-reversal) |

**Verdict: PROCEED.**
- Sufficient coverage (4G + 3F).
- Convergence YES.
- All survivors tested.
- No failure modes.
- All 5 meta-decision pieces satisfy Piece-Level Inversion.
- P1 + P2 both satisfy Intervention-Shape-Axis Inversion (REORGANIZE alternatives explicitly named).

---

## Handoff to Critique

Critique's task: evaluate the assembled finding shape against:
1. Whether the action-noun naming (Progression / Re-orientation / Coordination) is correct vs the alt-naming candidates from P1-F (bikeshed-level decision; SKILL.md authoring may finalize).
2. Whether 6 secondary attributes is the right count (P2-C alternatives killed; P2-F enrichments deferred).
3. Whether the per-type coordinate table's auto_class illustrative values are correctly labeled.
4. Whether the P3-F grouped presentation should be PRIMARY at first ship or DEFERRED to SKILL.md authoring.
5. Whether the alignment statement (P4) sufficiently preserves all existing organizations.
6. Whether Q7 should be marked PARTIALLY-RESOLVED (categorization sub-aspect) or FULLY-RESOLVED (the original completeness aspect remains Tier-2 watch-list).
7. Whether the priors-shape-adoption insight (P6-C) is appropriately captured in derivation notes.
