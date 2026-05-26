# Sensemaking — route taxonomy categorization

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/_branch.md`

---

## SV1 — Baseline Understanding (pre-analysis)

The inquiry is choosing among multiple categorization schemes for the 16-type taxonomy: 6 single-axis candidates (direction; intent; effort; scope; functional role; design-memo-implicit), 4 multi-axis candidates, 4 hierarchical candidates, 3 hybrid candidates. Naive framing: 17+ candidate schemes to evaluate.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — The 16 types are FIXED CONTENT (user explicit: "i think these types are good"); categorization must preserve all 16; no add/remove.
- **C2** — Primary layer STRUCTURAL; the inquiry organizes existing items into named groups; doesn't re-define what types ARE.
- **C3** — User's framing: "5-4-7 route dimensions" is EXPLICITLY DUMMY; "movement direction / movement types / intent" are AXIS NAMES (categorization axes), not group names.
- **C4** — Improvement-of-understanding criterion: "such naming will make our understanding better" — subjective but real. The deliverable must justify WHY chosen scheme aids understanding.
- **C5** — Must align with existing per-type structures: 24-01's Stage 1 per-movement-type mapping; autonomy_ladder.md Section 5's per-level Selector subset; design memo's 12-auto/4-judgment partition.
- **C6** — REVISIT is 1 type with sub-actions (RESURRECT/INVALIDATE/REVERT); not 4 types.

### Key Insights

- **KI1** — **Two existing implicit categorizations of the same 16 types CONVERGE.** The design memo's listing visibly groups the types by semicolons (6+5+5=16): {DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE} | {RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE} | {REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE}. The autonomy_ladder.md Section 5 lists per-level Selector subsets that roughly track the same partition (L2 baseline ≈ Group 1 minus TERMINATE; L4 process-directed ≈ Group 2 + MERGE; L3+L5 cross-cycle/coordination ≈ Group 3). The convergence is imperfect (TERMINATE and MERGE placement differ between the two views) but strong. **The project already has implicit categorization; the inquiry surfaces and names it.**

- **KI2** — **The user's "movement direction / intent" framing is about AXIS NAMES, not GROUP names.** The user is saying "let's use [direction] as the primary categorization axis; let's name the categories that result." Common categorization-design confusion — must distinguish.

- **KI3** — **The design memo's 6-5-5 is already in routeman's own spec.** The inquiry doesn't invent the grouping; it makes the implicit explicit and names it. Adopting design-memo-implicit as the primary axis is the lowest-friction choice that aligns with where readers already encounter the types.

- **KI4** — **Hybrid schemes (primary single-axis + secondary multi-axis attributes) dominate pure single-axis and pure multi-axis.** Single-axis loses richness (the user's "movement direction / intent" framing suggests they want MULTIPLE descriptive views). Pure multi-axis is hard to communicate (each type is a coordinate; harder to "see" the categorization). Hybrid combines the two: navigability via primary axis + richness via secondary attributes.

- **KI5** — **REVISIT's meta-type structure is a SECONDARY ATTRIBUTE, not a categorization decision.** REVISIT counts as 1 type (preserving 16-count); the sub-actions are operational refinements visible via a `has_sub_actions` secondary attribute.

- **KI6** — **Action-noun naming (Progression / Re-orientation / Coordination) aids understanding more than tier-numbers (Tier 1/2/3) or generic labels (Group A/B/C).** Per user's "such naming will make our understanding better" criterion + per LLM-operational-design principle (now N=4 evidence).

### Structural Points

- **SP1** — Primary categorization axis = design memo's implicit 6-5-5 grouping (made explicit + named with action-nouns).
- **SP2** — Secondary attributes give multi-axis richness: direction, intent, autonomy-readiness tier, auto-class, scope, has_sub_actions.
- **SP3** — Each type has a coordinate: `{primary_family, direction, intent, autonomy_readiness, auto_class, scope, has_sub_actions}`.
- **SP4** — SKILL.md presentation shape (table; nested list; coordinate-system) deferred to SKILL.md authoring; not load-bearing for this inquiry's commit.
- **SP5** — TERMINATE belongs in the Progression Family (endpoint of forward progression).
- **SP6** — The 3-family primary categorization naturally subsumes the 12-auto/4-judgment partition (auto-class becomes a secondary attribute; the partition is preserved without conflict).

### Foundational Principles

- **FP1** — Don't reinvent. The design memo's 6-5-5 grouping is already implicit in the spec; surface and name it rather than invent a new partition.
- **FP2** — User-language alignment (LLM-operational-design principle, N=4+). Use user's vocabulary where possible — "movement" (as in "Movement Family"), "direction", "intent" become secondary attribute names.
- **FP3** — Categorization should aid understanding. Action-noun group names (Progression / Re-orientation / Coordination) describe what the move DOES; tier-numbers don't.
- **FP4** — Hybrid schemes preserve flexibility (multi-axis richness) without losing simplicity (single-axis navigability).

### Meaning-Nodes

- **MN1** — **Movement Family** — the primary categorization axis; 3 named groups (Progression, Re-orientation, Coordination) over the 16 types. Inherited from design memo's implicit 6-5-5; made explicit.
- **MN2** — **Secondary attributes** — per-type descriptive attributes (direction, intent, autonomy-readiness tier, auto-class, scope, has_sub_actions) giving multi-axis richness.
- **MN3** — **Type coordinate** — each of the 16 types has a coordinate in the {family, direction, intent, autonomy-readiness, auto-class, scope, has_sub_actions} space.
- **MN4** — **Convergence of existing implicit categorizations** — design memo's 6-5-5 ≈ autonomy_ladder.md Section 5's per-level subset; the convergence justifies the chosen axis.
- **MN5** — **Axis vs group naming distinction** — the user's "movement direction / intent" was AXIS naming, not group naming. The inquiry distinguishes.

### Meta-Inspection — H4 (concept names) + H5 (motivating examples)

- **H4 — concept names.** Load-bearing: "Movement Family", "Progression / Re-orientation / Coordination", "secondary attributes", "type coordinate". User-language check: "Movement" is user's word; "Family" is a natural categorization term (used in taxonomies). "Progression / Re-orientation / Coordination" are action-nouns describing what each group does. **PASS.**
- **H5 — motivating examples.** Design memo's example: the 6-5-5 implicit grouping IS the design memo's own presentation choice. autonomy_ladder.md's example: Section 5's per-level Selector subset. Both are real, in-codebase, structurally grounded. **PASS.**

### SV2 — Anchor-Informed Understanding

The inquiry's central insight: **the design memo already has an implicit categorization** (the 6-5-5 grouping visible in its semicolon-separated listing). The user is asking for this to be made explicit and named — not for a new categorization to be invented. The autonomy_ladder.md Section 5 provides a converging (though imperfect) cross-reference. The chosen scheme should: (a) adopt design-memo-implicit 6-5-5 as primary; (b) name the groups with action-nouns describing what each group does; (c) add secondary attributes for multi-axis richness (so the user's "direction / intent" framing is honored via attributes rather than primary axis).

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **P-TECH-1** — Design-memo-implicit 6-5-5 grouping is the strongest single-axis candidate because it's ALREADY in the spec readers encounter. Adopting it preserves alignment.
- **P-TECH-2** — Hybrid (primary single-axis + secondary attributes) cleanly accommodates the user's multi-axis framing without requiring a coordinate-system presentation.
- **P-TECH-3** — Action-noun group names (Progression / Re-orientation / Coordination) are technically clear; each name describes a structural property of the group's members.

### Human / User

- **P-HUMAN-1** — User said "5-4-7" is dummy → don't anchor to it.
- **P-HUMAN-2** — User said "movement direction / movement types / intent" → these are AXIS candidates the user names. Of these, "intent" is most informative; "direction" is partial (Coordination Moves aren't directional); "movement types" is the LEAF level.
- **P-HUMAN-3** — User said "such naming will make our understanding better" → the test is understanding-aid. Tier-numbers don't aid; action-nouns do.
- **P-HUMAN-4** — User accepts the 16 types as content → no negotiation on what types exist.

### Strategic / Long-term

- **P-STRAT-1** — Future inquiries reference movement types frequently; named categories will spread through SKILL.md + downstream findings. Choosing action-noun group names (Progression / Re-orientation / Coordination) seeds the project's vocabulary.
- **P-STRAT-2** — Hybrid scheme accommodates future axis additions (e.g., if /reflect's process-quality observations become a 7th attribute) without restructuring the primary categorization.

### Risk / Failure

- **R1** — Over-categorization (multi-axis pure scheme). Mitigated by hybrid (primary single-axis).
- **R2** — Generic naming (Group A/B/C). Mitigated by action-noun naming.
- **R3** — Forcing 5-4-7 dummy. Mitigated by explicit rejection.
- **R4** — Categorization conflict with autonomy_ladder.md Section 5 (which uses a DIFFERENT implicit categorization). Mitigated by including autonomy-readiness as a secondary attribute (preserves both views without conflict).

### Resource / Feasibility

- **P-RES-1** — Hybrid scheme: ~3 family names + 16 per-type coordinate records. Minimal SKILL.md surface; tractable.

### Definitional / Internal Consistency

- The "Movement Family" axis adopts design memo's implicit grouping. The design memo's listing IS the convention; this inquiry surfaces it. Internal consistency: aligned with existing implicit organization.
- TERMINATE placement: Progression Family (endpoint of forward progression). Consistent with design memo's listing (TERMINATE is in Group 1).

### Definitional / Frame-exit Completeness

**Gating predicate.** Inquiry inherits multi-value term ("movement type") across 16 values; distinct propositions per cell (each type has different role). **Gate fires.**

1. **Existence Enumeration.** What does "movement type categorization" refer to project-wide?
   - **TYPE axis:** routeman's 16-type taxonomy (this inquiry's focus); autonomy_ladder.md's per-level Selector subset (a categorization); design memo's 12-auto/4-judgment partition (another categorization); 24-01's per-movement-type Stage 1 mapping (yet another).
   - **LAYER axis:** routeman's spec layer; cognitive harness's protocol layer; per-inquiry routeman invocation.
   - **PHASE axis:** routeman's first ship (current); SKILL.md authoring (next); future autonomy levels (L2-L5).
   - **AGENT axis:** routeman (this inquiry's primary consumer); future autonomy-aware disciplines.

2. **Role Assessment.**
   - autonomy_ladder.md Section 5 categorization → role: defines which types the SYSTEM SELECTOR can pick at each autonomy level. Re-located as a SECONDARY ATTRIBUTE on each type (autonomy_readiness_tier: L2 / L3 / L4 / L5). Preserved, not conflicted.
   - 12-auto/4-judgment partition → role: defines which types routeman emits autonomously vs flags for human. Re-located as a SECONDARY ATTRIBUTE (auto_class: auto / judgment). Preserved.
   - 24-01's per-movement-type Stage 1 mapping → role: defines per-type WHY-anchor source priority. Compatible with categorization (the mapping can be re-presented as per-family rules + per-type refinements).

3. **Verdict Rigor.** Verdict "design memo's 6-5-5 IS the natural primary categorization" — strongest counter: maybe autonomy_ladder.md Section 5's per-level partition is more natural (it's structurally precise; design memo's grouping is informal semicolon-separation). Test: are the two partitions structurally equivalent? Cross-mapping shows they're CLOSE but not identical (TERMINATE in Group 1 but unplaced in autonomy_ladder.md; MERGE in Group 3 in design memo but in L4 process-directed in autonomy_ladder.md). The design memo's grouping is the routeman-NATIVE structure; autonomy_ladder.md's is the meta-loop-axis structure. The routeman-native takes precedence for routeman's own SKILL.md.

4. **Residual / Coverage Justification.** Frame-exit concern not yet captured? The 24-01 per-movement-type Stage 1 mapping is per-type-detail; could be re-presented as per-family rules with per-type refinements — captured as a SECONDARY benefit of the categorization, not a residual concern.

### Phase / Calibration-State perspective

- Does this inquiry involve phase-dependent rules? Partially — the autonomy_readiness_tier secondary attribute IS phase-dependent (different tiers become emit-ready at different autonomy levels). The primary Movement Family categorization is calibration-agnostic (works at L0+).
- Calibration check: the primary categorization is appropriate for L0 (current state); the secondary autonomy_readiness_tier attribute becomes load-bearing at L2+ when autonomy-aware mode-selection ships.

### Meta-Inspection — H1 + H2 + H3 + H7

- **H1 — candidate set.** Surfacing enumerated ~17 schemes. Cross-Candidate Unity: the schemes cluster — design-memo-implicit (B6) and effort-based (B3) converge as the most-supported single-axis options; hybrid schemes (E1/E2/E3) all share the primary+secondary pattern. The space reduces to: (1) which primary axis; (2) which secondary attributes; (3) what names.
- **H2 — frame scope.** Frame-exit completeness above addressed it.
- **H3 — question framing.** Question is well-formed.
- **H7 — phase/calibration.** Addressed.

### SV3 — Multi-Perspective Understanding

The chosen design is HYBRID: primary axis = design memo's implicit 6-5-5 with action-noun names (Progression / Re-orientation / Coordination); secondary attributes = direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions. Each of the 16 types has a coordinate in this space. The categorization aligns with (rather than replaces) autonomy_ladder.md Section 5's per-level subset (preserved as autonomy_readiness_tier attribute) and the 12-auto/4-judgment partition (preserved as auto_class attribute).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Which primary categorization axis — design-memo-implicit 6-5-5 vs autonomy-readiness vs direction vs intent?

**Strongest counter-interpretation:** autonomy-readiness (per autonomy_ladder.md Section 5) is more structurally precise than design memo's informal semicolon-separation.

**Why the counter is partial:** autonomy-readiness IS more precise as an axis, but it's the META-LOOP'S axis (about Selector subset at each level), not routeman-native. For routeman's own SKILL.md, the routeman-native categorization (design memo's 6-5-5) is more appropriate because readers of routeman's spec encounter the design memo's grouping first.

**Counter-counter (defense of design-memo-implicit):** the design memo's 6-5-5 is ALREADY in the project's routeman material — readers see it when they read the design memo. Adopting it preserves continuity. The autonomy_readiness_tier attribute (per autonomy_ladder.md) is preserved as a SECONDARY attribute, so neither view is lost.

**Confidence:** HIGH for design-memo-implicit as primary; autonomy-readiness as secondary attribute.

**Resolution:** **Primary categorization axis = design memo's implicit 6-5-5 grouping**, made explicit and named with action-nouns. The autonomy_ladder.md Section 5 axis is preserved as a secondary attribute (`autonomy_readiness_tier`).

**What is now fixed:** primary axis = 3-family Movement Family from design memo's implicit grouping.
**What is no longer allowed:** primary axis = autonomy-readiness alone (it's secondary); primary axis = direction alone (loses Coordination Family); primary axis = intent alone (less aligned with design memo).
**What now depends:** the group names (Ambiguity 2); the secondary attributes list (Ambiguity 3); TERMINATE placement (Ambiguity 4).

---

### Ambiguity 2: What names for the 3 primary-axis groups?

**Strongest counter-interpretation:** tier-numbers (Tier 1 / Tier 2 / Tier 3) are minimal and unambiguous.

**Why the counter fails (structural grounds):** tier-numbers don't aid understanding (violates the user's "such naming will make our understanding better" criterion). Tier-1 etc. tell the reader nothing about WHAT each group does.

**Counter-counter (defense of action-nouns):** Action-noun naming describes the structural property of each group's members:
- Group 1 members (DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE) all ADVANCE the work in some direction (or end it). Name: **Progression Moves**.
- Group 2 members (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE) all ADJUST the scope, approach, or framing. Name: **Re-orientation Moves**.
- Group 3 members (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE) all COORDINATE across time/branches/threads or validate/consolidate. Name: **Coordination Moves**.

**Confidence:** HIGH for action-noun naming.

**Resolution:** Group names = **Progression Moves** (6), **Re-orientation Moves** (5), **Coordination Moves** (5). The axis name = **Movement Family**.

**What is now fixed:** the 3 group names + axis name.
**What is no longer allowed:** tier-number naming; generic "Group A/B/C" naming; "Family 1 / Family 2 / Family 3" naming.

---

### Ambiguity 3: Which secondary attributes per type?

**Strongest counter-interpretation:** minimal attributes (just direction) is enough; multi-attribute schemes risk over-specification.

**Why the counter is partial:** the user's framing names MULTIPLE candidate axes ("movement direction / movement types / intent"). Multiple attributes preserve their framing. Multi-attribute also accommodates existing implicit organizations (autonomy_ladder.md Section 5; 12/4 partition) without conflict.

**Counter-counter (defense of multi-attribute):** the attributes are DESCRIPTIVE not CATEGORICAL — they describe a type's properties without forcing a fixed taxonomy. Multi-attribute supports richer queries ("which types are forward + auto-class?") without restructuring the primary categorization.

**Confidence:** HIGH for multi-attribute.

**Resolution:** Secondary attributes per type:
- **`direction`** — `forward` | `backward` | `sideways` | `cross-branch` (mostly aligns with B1 from Surfacing).
- **`intent`** — `exploration` | `refinement` | `investigation` | `closure` | `coordination` | `pivot` (aligns with B2; user-language).
- **`autonomy_readiness_tier`** — `L2-baseline` | `L3-cross-cycle` | `L4-process-directed` | `L5-coordination-endgame` (aligns with autonomy_ladder.md Section 5).
- **`auto_class`** — `auto` | `judgment` (the design memo's 12-auto/4-judgment partition; exact membership deferred to SKILL.md authoring per design memo).
- **`scope`** — `within-thread` | `cross-cycle` | `cross-branch`.
- **`has_sub_actions`** — boolean; currently TRUE only for REVISIT (with sub-actions RESURRECT / INVALIDATE / REVERT).

**What is now fixed:** 6 secondary attributes.
**What is no longer allowed:** multi-axis PRIMARY schemes (the multi-axis-ness is via secondary attributes only).

---

### Ambiguity 4: TERMINATE's placement?

**Strongest counter-interpretation:** TERMINATE is structurally unique (endpoint with no continuation); deserves its own micro-category.

**Why the counter fails:** the design memo's listing places TERMINATE in Group 1 (alongside forward-progression types). TERMINATE IS a forward-progression endpoint (when no further forward is meaningful). A separate micro-category over-categorizes.

**Counter-counter:** TERMINATE in Progression Family with `direction: forward` and `intent: closure` secondary attributes captures its uniqueness without inflating the primary categorization.

**Confidence:** HIGH.

**Resolution:** TERMINATE in **Progression Moves** family; secondary attributes `direction: forward`, `intent: closure`, `autonomy_readiness_tier: L2-baseline` (it's an endpoint always available), `auto_class: judgment` (terminating typically requires judgment), `scope: within-thread`.

---

### Ambiguity 5: REVISIT's structural handling — separate meta-category or single type with sub-action attribute?

**Strongest counter-interpretation:** REVISIT-as-meta-category recognizes its structural uniqueness (3 sub-actions vs the other 15 types' atomicity).

**Why the counter fails:** the user's framing counted REVISIT as 1 type in the 16; expanding to a meta-category violates the 16-count commitment. The sub-actions are operational refinements (operational details that matter at execution time), not separate categorization candidates.

**Counter-counter:** REVISIT in Coordination Family with `has_sub_actions: true` attribute; the sub-actions (RESURRECT/INVALIDATE/REVERT) are documented in the type's procedural detail, not as separate categorization-level types.

**Confidence:** HIGH.

**Resolution:** REVISIT counts as 1 type in the primary categorization (Coordination Family). The `has_sub_actions` boolean secondary attribute captures the meta-type structural fact; sub-action specifics live in the type's operational documentation.

---

### Ambiguity 6: Per-type coordinate for each of the 16 types?

**Strongest counter-interpretation:** detailed per-type coordinates risk over-spec; descriptive at most.

**Why the counter is partial:** the per-type coordinate IS the deliverable's central content; without it the categorization is incomplete.

**Counter-counter (defense of full per-type coordinates):** the coordinate per type is the integration of primary family + 6 secondary attributes; without it, future readers can't navigate the scheme.

**Confidence:** HIGH for per-type coordinates.

**Resolution:** Full per-type coordinate table specified (see SV6 below).

---

### Load-bearing concept tests

- **"Movement Family"** — proxy-vs-structural: real structural commitment (3-group primary axis). User-language alignment: "Movement" is user's word; "Family" is natural taxonomic term. **PASS.**
- **"Progression / Re-orientation / Coordination" group names** — action-noun naming; describes group properties; aids understanding. **PASS.**
- **"Type coordinate"** — coined; each type has its coordinate. Discoverable via the per-type table. **PASS.**

### Specific-vs-pattern recognition cue

The user's framing is about routeman's 16-type taxonomy specifically. Wider pattern: could other discipline taxonomies use the same hybrid-categorization approach? Out of scope; flagged as research frontier.

### SV4 — Clarified Understanding

The design crystallizes:

1. **Primary categorization axis = Movement Family** (3 groups; from design memo's implicit 6-5-5).
2. **Group names = Progression Moves, Re-orientation Moves, Coordination Moves** (action-noun naming).
3. **Per-type secondary attributes** = direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions.
4. **TERMINATE** in Progression Family.
5. **REVISIT** in Coordination Family with `has_sub_actions: true`.
6. **Per-type coordinate table** (the deliverable's central content).
7. **Existing implicit organizations preserved** as secondary attributes (autonomy_readiness_tier from autonomy_ladder.md Section 5; auto_class from design memo's 12/4 partition).

Open follow-ups:
- SKILL.md presentation shape (table vs nested list vs coordinate-system) — DEFERRED.
- Auto-class membership (which 12 are auto, which 4 are judgment) — DEFERRED per design memo.
- Generalization research frontier (do other discipline taxonomies need analogous categorization?) — DEFERRED.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Primary categorization axis: Movement Family (3 groups).
- Group names: Progression Moves, Re-orientation Moves, Coordination Moves.
- Secondary attributes: 6 (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions).
- Per-type coordinate: each of the 16 types has its 7-tuple (family + 6 attributes).
- TERMINATE placement: Progression Family.
- REVISIT structural handling: 1 type with sub-actions attribute.

### Options eliminated

- Primary axis = autonomy-readiness alone (re-located to secondary).
- Primary axis = direction alone (loses Coordination Family).
- Primary axis = intent alone (less aligned with design memo).
- Multi-axis PRIMARY (over-complex; preserved via secondary attributes).
- Tier-number group naming.
- Generic "Group A/B/C" naming.
- 5-4-7 dummy partition.
- REVISIT as separate meta-category.
- TERMINATE as separate micro-category.

### Paths still viable

- SKILL.md presentation shape (table vs nested list vs coordinate-system) — to be decided at SKILL.md authoring.
- Auto-class membership (which 12 / 4) — to be decided at SKILL.md authoring per design memo's existing deferral.
- Per-attribute extension if practice surfaces new useful attributes (e.g., /reflect process-quality attribute when /reflect coupling lands).
- Generalization research frontier.

### SV5 — Constrained Understanding

The problem reduces to seven concrete deliverable shapes for Decomposition/Innovation:

1. The primary axis specification (Movement Family with 3 groups + names + group definitions).
2. The secondary attributes specification (6 attributes with value enumerations + per-attribute purpose).
3. The per-type coordinate table (16 types × 7-tuple).
4. The TERMINATE + REVISIT special-handling notes.
5. The categorization's alignment statement (how it preserves existing implicit organizations — design memo's 6-5-5 as primary; autonomy_ladder.md Section 5 as autonomy_readiness_tier; 12-auto/4-judgment as auto_class).
6. The understanding-aid justification (why this scheme aids understanding).
7. The residual open questions (SKILL.md presentation; auto-class membership; generalization research frontier).

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did multiple perspectives produce destabilizing anchors? Looking back:
- Multiple primary-axis candidates (B1/B3/B6) → resolved cleanly via "design-memo-implicit is routeman-native; others as secondary."
- Single vs multi-axis → resolved via hybrid (primary single + secondary multi).
- Group naming → resolved via action-noun names.
- TERMINATE + REVISIT special cases → resolved via secondary attributes.

Model didn't require multiple patches. **Central insight:** the design memo already has the implicit categorization; the inquiry surfaces and names it rather than invents a new one.

Self-applicability check: target is the 16-type taxonomy + categorization. Sensemaking is the tool. Low self-reference.

### Meta-Inspection — H6 (model fit) + H8 (self-reference)

- **H6 — model fit.** Has the model required multiple patches? No. The design-memo-implicit-as-primary insight + hybrid structure + action-noun naming + secondary attributes preserving existing organizations all fit cleanly. PASS.
- **H8 — self-reference.** Sensemaking evaluating routeman's type categorization — different target framework. Low risk. PASS.

### SV6 — Stabilized Model

**The model.**

Routeman's 16-type movement-type taxonomy gains a categorization scheme:

**Primary axis — Movement Family (3 groups):**

- **Progression Moves (6 types):** DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE. These ADVANCE the work in some direction (or end it). All forward-direction; baseline-effort; mostly within-thread.

- **Re-orientation Moves (5 types):** RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE. These ADJUST the scope, approach, or framing. Mostly sideways-direction; process-directed effort.

- **Coordination Moves (5 types):** REVISIT (with sub-actions), UNBLOCK, MERGE, TEST, CONSOLIDATE. These COORDINATE across time/branches/threads OR validate/consolidate. Mostly cross-cycle or cross-branch; varying effort.

**Secondary attributes per type (6 attributes; each type has a coordinate):**

| Attribute | Values | Purpose |
|---|---|---|
| `direction` | forward, backward, sideways, cross-branch | Spatial/temporal axis of the move |
| `intent` | exploration, refinement, investigation, closure, coordination, pivot | What the move's goal is |
| `autonomy_readiness_tier` | L2-baseline, L3-cross-cycle, L4-process-directed, L5-coordination-endgame | When the type becomes auto-emit-ready (per autonomy_ladder.md Section 5) |
| `auto_class` | auto, judgment | Whether routeman auto-emits or flags for human (per design memo's 12-auto/4-judgment) |
| `scope` | within-thread, cross-cycle, cross-branch | Spatial/temporal scope of the move |
| `has_sub_actions` | true, false | Whether the type has operational sub-actions (currently only REVISIT = true) |

**Per-type coordinate table** (the central deliverable; Decomposition/Innovation will produce the full 16-row table):

| Type | Family | Direction | Intent | Autonomy Tier | Auto-class | Scope | Sub-actions |
|---|---|---|---|---|---|---|---|
| DEEPEN | Progression | forward | refinement | L2-baseline | auto | within-thread | false |
| REFINE | Progression | forward | refinement | L2-baseline | auto | within-thread | false |
| PURSUE SEED | Progression | forward | exploration | L2-baseline | auto | within-thread | false |
| INVESTIGATE FRONTIER | Progression | forward | exploration | L2-baseline | judgment | within-thread | false |
| DEVELOP | Progression | forward | investigation | L2-baseline | auto | within-thread | false |
| TERMINATE | Progression | forward | closure | L2-baseline | judgment | within-thread | false |
| RE-RUN DEEPER | Re-orientation | sideways | refinement | L4-process-directed | auto | within-thread | false |
| WIDEN | Re-orientation | sideways | exploration | L4-process-directed | auto | within-thread | false |
| REFRAME | Re-orientation | sideways | pivot | L4-process-directed | judgment | within-thread | false |
| DIFFERENT APPROACH | Re-orientation | sideways | pivot | L4-process-directed | judgment | within-thread | false |
| DIAGNOSE | Re-orientation | sideways | investigation | L4-process-directed | auto | within-thread | false |
| REVISIT | Coordination | backward | coordination | L3-cross-cycle | judgment | cross-cycle | **true** (RESURRECT/INVALIDATE/REVERT) |
| UNBLOCK | Coordination | backward | coordination | L5-coordination-endgame | judgment | cross-branch | false |
| MERGE | Coordination | cross-branch | coordination | L4-process-directed | judgment | cross-branch | false |
| TEST | Coordination | cross-branch | investigation | L5-coordination-endgame | auto | cross-cycle | false |
| CONSOLIDATE | Coordination | cross-branch | closure | L5-coordination-endgame | judgment | cross-branch | false |

**(Note:** the per-type `auto_class` assignments above are illustrative best-guesses; design memo explicitly defers the 12/4 partition's exact membership to SKILL.md authoring; this inquiry adopts the partition as a SECONDARY ATTRIBUTE shape but doesn't lock the membership.)**

**Existing implicit organizations preserved as secondary attributes:**
- Design memo's 6-5-5 grouping → primary axis (Movement Family).
- autonomy_ladder.md Section 5's per-level Selector subset → `autonomy_readiness_tier` attribute.
- Design memo's 12-auto/4-judgment partition → `auto_class` attribute.
- 24-01's per-movement-type Stage 1 mapping → can be re-presented as per-family rules (cleaner) when SKILL.md authoring takes this finding as input.

**Understanding-aid justification:**
The categorization aids understanding because:
1. The primary 3-family structure is what readers ALREADY see in the design memo's semicolon-separated listing — surfacing and naming it makes implicit explicit.
2. Action-noun names (Progression / Re-orientation / Coordination) describe what each family DOES, so readers learn the structure from the names alone.
3. Secondary attributes give multi-axis richness without complicating the primary view — readers can navigate the 3 families at high-level OR query specific attributes for detailed analysis.
4. Existing implicit organizations (autonomy_ladder.md Section 5; 12/4 partition; 24-01 per-type mapping) are PRESERVED as attributes, so no project knowledge is lost.

**How SV6 differs from SV1.**

| Axis | SV1 (pre-analysis) | SV6 (stabilized) |
|---|---|---|
| Problem framing | Choose among 17+ candidate schemes | Hybrid: design-memo-implicit primary + 6 secondary attributes |
| Primary axis | Open (6 single-axis candidates) | Movement Family (design-memo-implicit; action-noun named) |
| Naming | Open | Progression / Re-orientation / Coordination |
| REVISIT handling | Open | 1 type with has_sub_actions attribute |
| TERMINATE handling | Open | Progression Family endpoint |
| Existing implicit organizations | Compete (design memo vs autonomy_ladder.md vs 24-01) | Aligned (primary = design memo; secondary attributes = others) |
| Open questions | Implicit | SKILL.md presentation; auto-class membership; generalization research frontier |

---

## Telemetry

- **Perspective saturation:** 8 perspectives applied (Technical, Human, Strategic, Risk, Resource, Definitional, Frame-exit, Phase/Calibration). 3 produced new anchors. Converging.
- **Ambiguity resolution ratio:** 6 ambiguities raised; 6 resolved (5 HIGH; 1 HIGH).
- **SV delta:** SV1 → SV6 shows MAJOR structural shift (17+ candidate schemes → one coherent hybrid design).
- **Anchor diversity:** 5 anchor types (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes). 8 perspectives.
- **Failure modes checked:** Status Quo Bias (none — design-memo-implicit is preserved not because it's status quo but because it's structurally most aligned; tested against autonomy_ladder.md alternative); Premature Stabilization (verified — 3 perspectives produced new anchors; central insight grounded in design memo's actual listing); Anchor Dominance (the design-memo-implicit insight is dominant; checked by listing 4 other distinct decisions — secondary attributes, REVISIT handling, TERMINATE handling, naming — that don't all collapse to it); Perspective Blindness (most uncomfortable perspective = "maybe categorization itself is over-engineering; flat list is fine" — addressed via user's explicit ask + understanding-aid criterion); Clean Resolution Trap (model is clean; tested via autonomy-readiness primary alternative which would also be clean but conflicts with routeman-native principle); Self-Reference Blindness (target is taxonomy + categorization, not sensemaking).
- **Convergence verdict:** STABILIZED.

---

## Output handoff to Decomposition

Decomposition's task: take the 7 commitments + 3 open follow-ups + the per-type coordinate table and produce a clean coupling map + question tree.

Key load-bearing concepts handed off:
- **Movement Family** as primary categorization axis (3 groups: Progression / Re-orientation / Coordination).
- **6 secondary attributes** per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions).
- **Per-type coordinate table** (16 types × 7-tuple).
- **Existing implicit organizations preserved** as secondary attributes (alignment statement).
- **Understanding-aid justification** as the rationale anchor.
