---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---
# Finding: route taxonomy categorization

## Question

**From `_branch.md`:** What is the structural organization of routeman's 16-type movement-type taxonomy into NAMED CATEGORIES (umbrella big-categories + their members) that improves understanding, accepting the 16 types as content?

The user invoked this inquiry on Question 7 from the routeman frontier-questions finding with a re-framing: the original Q7 asked "is the 16-type taxonomy structurally complete?" — but the user explicitly accepted the 16 types as content ("i think these types are good") and asked instead for them to be ORGANIZED into named categories. The user's stated criterion: "such naming will make our understanding better." The user offered a "5-4-7 route dimensions" example but flagged it as dummy ("this is just an dummy exmaple btw"), inviting the inquiry to consider partitions other than 5-4-7.

For context: routeman's 16-type taxonomy (DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE, RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE, REVISIT with sub-actions, UNBLOCK, MERGE, TEST, CONSOLIDATE) was inherited verbatim from canonical /navigation. The design memo presents these types in a semicolon-separated 6-5-5 listing — an implicit grouping that this inquiry surfaces and names. Adjacent organizations exist: `docs/autonomy_ladder.md` Section 5 specifies a per-level Selector subset (a different implicit categorization by autonomy-readiness); the design memo also commits a 12-auto/4-judgment partition.

---

## Finding Summary

- **The chosen scheme is hybrid: one primary axis + six secondary attributes per type.** The primary axis is **Movement Family** with three named groups inherited from the design memo's implicit semicolon-separated 6-5-5 listing — **Progression Moves** (6 types; canonical alias *content-directed*), **Re-orientation Moves** (5 types; canonical alias *process-directed*), **Coordination Moves** (5 types; canonical alias *context-directed*). The names are action-nouns describing what each group's members do; the canonical aliases preserve continuity with canonical /navigation's existing 3-category framing (see §1 below + the alignment statement in §4). Each of the 16 types also carries six secondary attributes (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions) that capture multi-axis richness without forcing the primary axis to do all the categorization work.

- **The categorization is surfaced from existing implicit organizations, not invented.** Surfacing's central discovery was that the design memo's semicolon-separated 6-5-5 listing IS already an implicit categorization, and `docs/autonomy_ladder.md` Section 5's per-level Selector subset converges with it. The inquiry surfaces and names this implicit structure rather than imposing a new one. This honors the user's "16 types are good" commitment by preserving them unchanged and only adding category-level structure on top.

- **Existing implicit organizations are preserved as secondary attributes.** Three organizations from other priors are preserved without conflict: `autonomy_ladder.md` Section 5's per-level subset becomes the `autonomy_readiness_tier` attribute; the design memo's 12-auto/4-judgment partition becomes the `auto_class` attribute (membership deferred per design memo's original deferral); `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`'s per-movement-type Stage 1 mapping becomes re-presentable as per-family rules (a cleaner SKILL.md surface).

- **Action-noun naming was chosen over tier-numbers or generic labels.** "Progression Moves / Re-orientation Moves / Coordination Moves" describe what each family DOES, satisfying the user's "such naming will make our understanding better" criterion. Tier-1/Tier-2/Tier-3 was considered and killed because tier-numbers carry no semantic content. "Progression" was chosen over "Forward" because Progression covers both forward-direction members AND TERMINATE (which is forward progression's endpoint); "Forward" alone would mis-categorize TERMINATE.

- **The user's "movement direction / movement types / intent" framing was about AXIS names, not group names.** Surfacing made this distinction explicit. The user's named axes are preserved as SECONDARY ATTRIBUTES (`direction`, `intent`) rather than as the primary categorization axis — accommodating the multi-axis framing while keeping the primary axis aligned with the design memo's existing implicit structure.

- **REVISIT counts as 1 type with a `has_sub_actions: true` attribute.** The sub-actions (RESURRECT / INVALIDATE / REVERT) are operational refinements within REVISIT's runtime spec, not separate categorization-level types. This preserves the 16-count commitment.

- **TERMINATE belongs in Progression Moves family with `intent: closure`.** TERMINATE is the endpoint of forward progression (when no further forward movement is meaningful, terminate); a separate micro-category would over-categorize.

- **The per-type coordinate table maps each of the 16 types to its 7-tuple `{family + 6 secondary attributes}`.** The table is the deliverable's central content; SKILL.md authoring can present it as a single 16-row table OR as 3 grouped sub-tables (one per family) — both presentations are available; the choice is deferred to SKILL.md authoring (FF-1).

- **The design is derived from priors, not arbitrary.** The primary axis is DERIVED FROM design memo's implicit grouping. The `autonomy_readiness_tier` attribute is CONSTRAINED BY autonomy_ladder.md Section 5. The `auto_class` attribute is CONSTRAINED BY design memo's 12-auto/4-judgment commitment. User-language alignment in attribute naming (direction, intent) is DERIVED FROM the LLM-operational-design principle (now at N=5 evidence applications after this inquiry). Recording these derivations in the spec prevents future inquiries from treating the categorization as a free choice.

- **Q7 from the frontier-questions finding is PARTIALLY-RESOLVED.** This inquiry resolves the CATEGORIZATION sub-aspect; the ORIGINAL completeness question ("is the 16-type taxonomy structurally complete?") remains a Tier-2 watch-list question per the frontier-questions finding's original framing. The user accepted the 16 types as content for this inquiry; structural completeness can still be re-tested over time.

- **3 follow-ups remain open** for SKILL.md authoring or further design: FF-1 (SKILL.md presentation shape — single table vs 3 grouped sub-tables vs per-family sub-sections); FF-2 (auto-class exact membership — which 12 are auto, which 4 are judgment; design memo's original deferral); FF-3 (generalization research frontier — could the hybrid categorization approach generalize to other discipline taxonomies?).

---

## Finding

A short orientation before the design. The user re-framed Q7 from a completeness question into a categorization question. The user accepted the 16 types as content and asked for the structure to be made visible through named categories. Surfacing's central discovery was that the design memo ALREADY HAS the implicit categorization — the 6-5-5 listing visible in the semicolon-separated type ordering — and that this implicit grouping converges with autonomy_ladder.md Section 5's per-level Selector subset. The inquiry's work was to surface that implicit structure, name it well, and add a multi-axis secondary-attribute layer that preserves other existing organizations (12-auto/4-judgment partition; per-movement-type rules).

### 1. The primary axis: Movement Family

The primary categorization axis is **Movement Family**, with three groups:

**Progression Moves (6 types).** Canonical alias: **content-directed** (acting on what the cycle produced). These advance the work in some direction or end it. Members: DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE. The structural property they share: all are forward-direction; all are baseline-effort (autonomy_readiness_tier L2); all are within-thread scope.

**Re-orientation Moves (5 types).** Canonical alias: **process-directed** (acting on how the cycle ran). These adjust the scope, approach, or framing of ongoing work. Members: RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE. The structural property: all are sideways-direction; all are process-directed effort (autonomy_readiness_tier L4); all are within-thread scope.

**Coordination Moves (5 types).** Canonical alias: **context-directed** (acting on information outside this cycle). These coordinate across time, branches, or threads, or validate/consolidate. Members: REVISIT (with sub-actions), UNBLOCK, MERGE, TEST, CONSOLIDATE. The structural property is more varied: direction is backward or cross-branch; effort tier ranges L3-L5; scope is cross-cycle or cross-branch.

**Canonical aliases preserve continuity.** Canonical /navigation (`cognitive_harness/navigation/references/navigation.md`) already organizes the 16 types into three categories named *content-directed* / *process-directed* / *context-directed*. The Movement Family's action-noun names (Progression / Re-orientation / Coordination) are the user-language-aligned form chosen for this inquiry's "such naming will make our understanding better" criterion; the canonical labels are recognized aliases — referenced in /navigation-era documents and SKILL.md authoring may keep both forms visible. The 3-group structure is the same; only the naming choice differs.

**Why action-noun naming.** The user's stated criterion was "such naming will make our understanding better." Tier-numbers (Tier 1 / Tier 2 / Tier 3) carry no semantic content — they fail the understanding-aid test. Action-noun names describe what each group's members DO. "Progression Moves" was chosen over "Forward Moves" because Progression covers all six members including TERMINATE (which is the endpoint of forward progression, not a forward movement). "Forward Moves" alone would mis-categorize TERMINATE. The canonical aliases (*content-directed* / *process-directed* / *context-directed*) are more abstract — they describe what each move ACTS ON, not what it DOES; the action-noun form is more discoverable for readers unfamiliar with canonical /navigation's vocabulary while the canonical aliases preserve continuity with the source spec.

**Why "Movement Family" as the axis name.** The user's framing used "movement direction / movement types / intent" — Surfacing's finding (echoed in Sensemaking) was that these are AXIS-name candidates, not GROUP-name candidates. "Movement" preserves the user's vocabulary; "Family" is a natural taxonomic term that signals a grouping structure. The full axis label is `Movement Family`.

**Alternative names considered and deferred to SKILL.md authoring** (bikeshed-level decisions): "Advance / Adjust / Coordinate" (shorter); "Forward Moves / Re-orient Moves / Coordinate Moves" (medium); verb-form variants. These are interchangeable at the bikeshed level; SKILL.md authoring can finalize.

### 2. Secondary attributes per type

Each of the 16 types carries six secondary attributes that capture multi-axis richness:

| Attribute | Values | Purpose | Source preserved |
|---|---|---|---|
| `direction` | `forward`, `backward`, `sideways`, `cross-branch` | Spatial/temporal axis of the move | User's framing vocabulary |
| `intent` | `exploration`, `refinement`, `investigation`, `closure`, `coordination`, `pivot` | What the move's goal is | User's framing vocabulary |
| `autonomy_readiness_tier` | `L2-baseline`, `L3-cross-cycle`, `L4-process-directed`, `L5-coordination-endgame` | When the type becomes auto-emit-ready | `docs/autonomy_ladder.md` Section 5 per-level Selector subset |
| `auto_class` | `auto`, `judgment` | Whether routeman auto-emits or flags for human | Design memo's 12-auto/4-judgment partition (exact membership deferred per design memo) |
| `scope` | `within-thread`, `cross-cycle`, `cross-branch` | Spatial/temporal scope of the move | This inquiry's surfacing |
| `has_sub_actions` | `true`, `false` | Whether the type has operational sub-actions (currently true only for REVISIT) | REVISIT's structural uniqueness |

The user's "movement direction / movement types / intent" framing implied multi-axis categorization. The hybrid design honors that framing by making `direction` and `intent` first-class secondary attributes (not absorbing them into the primary axis), and by adding `autonomy_readiness_tier` + `auto_class` + `scope` + `has_sub_actions` to preserve other existing organizations and structural facts.

**Removing any attribute loses something.** `autonomy_readiness_tier` preserves autonomy_ladder.md Section 5's per-level subset commitment; without it, the autonomy-aware classification (a load-bearing routeman feature per the design memo) loses its categorization-side substrate. `auto_class` preserves design memo's 12-auto/4-judgment partition. `has_sub_actions` may currently apply only to REVISIT, but provides an extensibility hook if future types gain sub-actions. `direction` and `intent` honor the user's framing.

**Machine-parseability.** All attribute values are string enums; attribute names follow `snake_case`. This satisfies the design constraint that routeman's Stage 1 generation mechanism (per `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`) can read the per-type coordinate table and apply per-attribute rules without parsing prose.

### 3. The per-type coordinate table

Each of the 16 types has a 7-tuple `{family + 6 secondary attributes}`. The full table:

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

*Note: `auto_class` values marked with asterisk are illustrative best-guess. The design memo explicitly defers the exact 12-auto/4-judgment partition membership to SKILL.md authoring; this inquiry adopts the partition SHAPE (auto_class attribute exists; values are `auto` / `judgment`) without locking the membership.*

**REVISIT sub-actions** (operational refinement; not separate categorization rows):

| Sub-action | Description |
|---|---|
| RESURRECT | Bring back a prior-killed direction (now viable under new info). |
| INVALIDATE | Mark a prior-survived direction as no longer applicable. |
| REVERT | Undo a prior refinement (return to an earlier state). |

The sub-actions are documented in REVISIT's operational detail (when SKILL.md authoring writes the per-type runtime spec), not as separate categorization-level types.

**Per-family commonalities (visible when the table is grouped by family):**

- All **Progression Moves** share `direction: forward`, `autonomy_readiness_tier: L2-baseline`, `scope: within-thread`.
- All **Re-orientation Moves** share `direction: sideways`, `autonomy_readiness_tier: L4-process-directed`, `scope: within-thread`.
- **Coordination Moves** are more heterogeneous (direction varies; autonomy tier ranges L3-L5; scope is cross-cycle or cross-branch).

SKILL.md authoring (FF-1) may present the table as the single 16-row form above OR as three grouped sub-tables (one per family) to make the per-family commonalities visible. Both presentations are defensible; the choice is deferred.

### 4. Alignment with existing implicit organizations

The categorization preserves five existing organizations without conflict:

1. **Design memo's implicit 6-5-5 grouping** (from `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`'s semicolon-separated 16-type listing) → becomes the **primary axis** (Movement Family with 3 named groups). The grouping is surfaced and named, not invented.

2. **`docs/autonomy_ladder.md` Section 5's per-level Selector subset** → becomes the secondary attribute `autonomy_readiness_tier`. The per-level subsets (L2 baseline; L3 +REVISIT; L4 +process-directed; L5 +coordination-endgame) map to per-type attribute values without altering autonomy_ladder.md's commitments.

3. **Design memo's 12-auto/4-judgment partition** (the second endgame function) → becomes the secondary attribute `auto_class`. Exact membership remains deferred to SKILL.md authoring per the design memo's original deferral.

4. **`devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`'s per-movement-type Stage 1 mapping** → preserved AND re-presentable. Instead of 16 per-type rules in routeman SKILL.md, the mapping can become 3 per-family rules with per-type refinements (cleaner) when SKILL.md authoring takes this finding as input. This is a secondary benefit of the categorization, not a primary commitment.

5. **Canonical /navigation 16-type taxonomy** (`cognitive_harness/navigation/references/navigation.md`) → preserved unchanged. The categorization is a structural overlay; the types themselves are unaltered.

6. **Canonical /navigation's 3-category framing** (*content-directed* / *process-directed* / *context-directed*; visible in the design memo's lineage section as an inherited canonical commitment) → maps cleanly to Movement Family's 3 action-noun groups (content-directed → Progression Moves; process-directed → Re-orientation Moves; context-directed → Coordination Moves). The canonical labels are preserved as **recognized aliases** alongside the action-noun names; SKILL.md authoring may display both forms. The 3-group structure is the same in both; only the naming choice differs. *(Note: this canonical source was a missed source during this inquiry's Surfacing; acknowledged in the Inherited Commitments Re-test section below. The categorization scheme stands; the canonical 3-category framing strengthens — rather than contradicts — the central insight that the categorization is surfaced, not invented.)*

No conflict with existing structures. Each organization is preserved either as the primary axis (1), as a secondary attribute (2, 3), as re-presentable (4), or unchanged (5).

### 5. Why this design — derivation from priors

The categorization scheme isn't a free choice; it's heavily shaped by priors. The bidirectional check (does the adoption survive each prior?) reveals:

- The **primary axis** is DERIVED FROM the design memo's implicit 6-5-5 grouping. The grouping is visible in the design memo's own semicolon-separated 16-type listing; this inquiry surfaces and names it rather than invents a new partition.
- The **`autonomy_readiness_tier` attribute** is CONSTRAINED BY autonomy_ladder.md Section 5's per-level Selector subset. The attribute exists because the autonomy ladder already specifies this categorization axis.
- The **`auto_class` attribute** is CONSTRAINED BY the design memo's 12-auto/4-judgment partition commitment. The attribute exists to preserve the partition; membership is deferred per design memo's original deferral.
- The **user-language alignment** in attribute names (`direction`, `intent`) is DERIVED FROM the LLM-operational-design principle (originated in `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`; this inquiry's application is the 5th distinct evidence-case, after 24-00 hybrid naming, 24-40 register naming, and 24-01 pointer-style preservation).
- The **16-type preservation** is CONSTRAINED BY both canonical /navigation's taxonomy and the user's explicit "i think these types are good."

Recording these derivations in the finding prevents future inquiries from treating the categorization as an arbitrary preference open for revision. Each named attribute serves a specific prior; removing any loses a preserved commitment.

### 6. Q7's resolution status

The frontier-questions finding's Q7 (`devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`) asked whether the 16-type taxonomy is structurally complete. The user re-framed Q7 in the inquiry input — accepting the 16 types and asking for categorization+naming instead.

Q7 is therefore **PARTIALLY-RESOLVED**: this inquiry resolves the categorization sub-aspect; the original completeness question (is the 16-type set the right set?) remains as a Tier-2 watch-list item per the frontier-questions finding's original "longitudinal observation" disposition. If, over the next 20-30 inquiries, a real-world next-move appears that doesn't fit any of the 16 types, the original Q7 re-opens for taxonomy extension.

### 7. Frontier flags (residual opens)

Three follow-up flags from this inquiry:

- **FF-1 (SKILL.md presentation shape).** Single 16-row table vs grouped 3 sub-tables vs per-family sub-sections. Both single-table and grouped-3-sub-table presentations are documented in this finding's §3 as viable options. Downstream consumer: SKILL.md authoring. Revival trigger: when SKILL.md is being written.

- **FF-2 (auto-class exact membership).** Which 12 types are `auto` / which 4 are `judgment`. Inherited from the design memo's original deferral (the second endgame function's exact partition was deferred to SKILL.md authoring). This inquiry adopts the SHAPE of the partition (auto_class attribute) without locking membership. Downstream consumer: SKILL.md authoring. Revival trigger: same as FF-1.

- **FF-3 (generalization research frontier).** Could the hybrid primary-axis-plus-secondary-attributes approach generalize to other discipline taxonomies (e.g., /sense-making's anchor types; /critique's verdict types; /innovate's mechanism types)? Out-of-scope for routeman-specific design. Research frontier. Revival trigger: when a second discipline's taxonomy needs analogous categorization.

### 8. Deferred candidates and killed alternatives

Three alternatives were KILLED but their seeds are preserved:

- **P1-C REPAIR (change the design memo's 6-5-5 partition; e.g., move TERMINATE to Coordination Family because closure is coordination):** Killed because changing existing structure without strong reason adds churn. Seed: if a future inquiry surfaces that a type's placement is genuinely wrong, the REPAIR shape becomes valid.

- **P2-C REORGANIZE (describe types verbally per family without attributes):** Killed because it loses machine-parseability and multi-axis query ability. Seed: if SKILL.md authoring decides attributes are over-specification for the spec's audience, REORGANIZE may be revived.

- **P2-additional REMOVE `has_sub_actions`:** Killed because it loses extensibility hook for future sub-action-bearing types.

Three deferrals to SKILL.md authoring:
- P1-F alt naming candidates (Advance/Adjust/Coordinate; verb-forms).
- P2-F enrichment (additional intent values; `applies_to_stage` attribute).
- P3-C per-family sub-sections presentation.

One rejection:
- P1-C DO-NOTHING (skip categorization entirely; flat 16-type list). Rejected as failing the user's explicit ask.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 4 prior outputs + canonical /navigation + `docs/autonomy_ladder.md`. Each commitment is re-tested below.

### From `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (the design memo)

- **Commitment:** The 16-type taxonomy inherited verbatim from canonical /navigation; the implicit 6-5-5 grouping (visible in the semicolon-separated 16-type listing).
- **Re-test status:** RE-TESTED — PRESERVED + MADE-EXPLICIT.
- **Evidence:** The 16 types are preserved unchanged (no add/remove). The implicit 6-5-5 grouping IS surfaced as the primary axis (Movement Family) and given action-noun names (Progression / Re-orientation / Coordination). The categorization makes the design memo's implicit structure explicit.

- **Commitment:** The 12-auto/4-judgment partition (the second endgame function).
- **Re-test status:** RE-TESTED — PRESERVED.
- **Evidence:** The partition is preserved as the `auto_class` secondary attribute (values `auto` / `judgment`). Exact membership remains deferred to SKILL.md authoring per the design memo's original deferral; this inquiry adopts the SHAPE of the partition without locking membership.

- **Commitment:** Routeman's LAYER-2 failure framework.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The categorization is a structural overlay on the 16-type taxonomy; the LAYER-2 modes (Rename-Renders-Itself-Cosmetic; Prescriptive-Without-Cycle-Context; Auto-vs-Judgment Calibration Drift) operate on routeman's behavior, not on the categorization. No interaction; re-test deferred.

### From `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (the frontier-questions finding)

- **Commitment:** Q7 (16-type completeness, Tier-2 watch-list).
- **Re-test status:** RE-FRAMED + PARTIALLY-RESOLVED.
- **Evidence:** The user re-framed Q7 from completeness to categorization+naming for this inquiry. This inquiry resolves the categorization sub-aspect; the original completeness aspect remains as a Tier-2 watch-list per the frontier-questions finding's original "longitudinal observation" disposition. Q7's entry in the frontier-questions finding should be marked PARTIALLY-RESOLVED (with link to this finding) rather than fully resolved.

### From `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (the adaptive-guidance mechanism)

- **Commitment:** Per-movement-type Stage 1 mapping (16 per-type anchor-source rules).
- **Re-test status:** RE-TESTED — PRESERVED + RE-PRESENTABLE.
- **Evidence:** The mapping is preserved. The categorization enables RE-PRESENTATION: instead of 16 per-type rules in SKILL.md, the mapping can become 3 per-family rules with per-type refinements (e.g., "DEEPEN and REFINE both anchor to critique SURVIVE/REFINE verdicts; this is a Progression Moves pattern"). This is a secondary benefit; SKILL.md authoring decides whether to adopt the re-presentation or keep the per-type form.

### From `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` (the autonomy register)

- **Commitment:** The autonomy register provides routeman the current meta-loop level for graduated-autonomy classification.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The categorization's `autonomy_readiness_tier` attribute aligns with autonomy_ladder.md Section 5 (the per-level subset), which is the same source the autonomy register reads from. The categorization doesn't directly interact with the register at first ship; future integration (MS3 from 24-01's deferred mode-selection extension) would consume both, but that's downstream.

### From `cognitive_harness/navigation/references/navigation.md` (canonical /navigation)

- **Commitment:** The 16-type taxonomy.
- **Re-test status:** RE-TESTED — PRESERVED VERBATIM.
- **Evidence:** All 16 types preserved unchanged. Categorization is structural overlay; no type renamed or removed.

- **Commitment:** Canonical /navigation's 3-category framing of the 16 types — *content-directed* (acting on what the cycle produced) / *process-directed* (acting on how the cycle ran) / *context-directed* (acting on information outside this cycle). Visible in the design memo's lineage section as an inherited canonical commitment.
- **Re-test status:** RE-TESTED — PRESERVED + ALIASED + **SURFACING-MISSED-NOW-ACKNOWLEDGED**.
- **Evidence:** The 3-category framing maps cleanly to Movement Family's 3 action-noun groups (content-directed ≈ Progression Moves; process-directed ≈ Re-orientation Moves; context-directed ≈ Coordination Moves). The canonical labels are preserved as RECOGNIZED ALIASES alongside the action-noun names (see Finding §1's "Canonical aliases preserve continuity" paragraph + §4's alignment statement #6).
- **Surfacing miss acknowledged:** This inquiry's Surfacing identified the design memo's implicit 6-5-5 grouping and autonomy_ladder.md Section 5's per-level Selector subset as two converging existing organizations, but DID NOT surface canonical /navigation's 3-category framing as a third convergent source. The miss was caught during downstream impact-note authoring on the design memo (the line `The 16-type movement-type taxonomy organized into three categories (content-directed acting on what the cycle produced; process-directed acting on how the cycle ran; context-directed acting on information outside this cycle)` is in the design memo's lineage section, inherited from canonical). The post-hoc acknowledgment strengthens — rather than contradicts — the inquiry's central insight: the 3-group categorization was implicit in THREE existing sources (design memo grouping + autonomy_ladder.md Section 5 + canonical /navigation 3-category framing), not two. The Movement Family scheme is the made-explicit + action-noun-named form of this triple-convergent structure. **Decision: keep action-noun names as primary (per user's "better naming" criterion); canonical labels as recognized aliases (per project-vocabulary continuity).**

### From `docs/autonomy_ladder.md` (the meta-loop autonomy ladder)

- **Commitment:** Section 5's per-level Selector subset (L2 baseline = 5 types; L3 +REVISIT; L4 +process-directed; L5 +coordination/endgame).
- **Re-test status:** RE-TESTED — PRESERVED + MAPPED.
- **Evidence:** The per-level subset is preserved as the `autonomy_readiness_tier` attribute. Per-type assignments map to autonomy_ladder.md Section 5's lists (with TERMINATE implicit at L2-baseline as forward-progression endpoint).

---

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Question 7 as PARTIALLY-RESOLVED (categorization sub-aspect resolved; completeness sub-aspect remains Tier-2 watch-list), citing this finding.
  - **Who:** CONCLUDE-side (this finding's follow-up).
  - **Gate:** Observable — when this finding is committed.
  - **Why:** The frontier-questions finding still labels Q7 as Tier-2 unresolved; readers should know the categorization aspect has been resolved.

### COULD

- **What:** Open the SKILL.md authoring inquiry for routeman, taking this finding's categorization scheme as input for the Movement Type field's documentation. SKILL.md authoring decides FF-1 (presentation shape) + FF-2 (auto-class exact membership).
  - **Who:** Any runner spawning a new inquiry.
  - **Gate:** Condition-bound — when SKILL.md authoring is queued.
  - **Why:** Turns the categorization scheme into actual SKILL.md content; finalizes FF-1 and FF-2.

- **What:** Update other routeman-chain priors (the design memo at 14-39; the adaptive-guidance inquiry at 24-01) with impact notes that the 16-type taxonomy now has named Movement Family categorization, and that 24-01's per-movement-type Stage 1 mapping can be re-presented as per-family rules.
  - **Who:** CONCLUDE-side or follow-up edits.
  - **Gate:** Observable — when this finding is committed.
  - **Why:** Readers of those priors should know that the 16-type taxonomy now has a categorization structure they can reference.

### DEFERRED

- **What:** Open the generalization research-frontier inquiry (FF-3) on cross-discipline taxonomy categorization.
  - **Gate:** Observable — when a second discipline's taxonomy needs analogous categorization (e.g., /sense-making anchor types; /critique verdict types).
  - **Why (if revived):** If the hybrid primary-axis + secondary-attributes approach generalizes, a project-canonical categorization-design pattern is more efficient than per-discipline reinvention.

- **What:** Re-open the original Q7 completeness question if a real-world next-move appears that doesn't fit any of the 16 types.
  - **Gate:** Observable — over the next 20-30 inquiries, monitor whether any actual next-move falls outside the 16-type taxonomy (per the frontier-questions finding's original Tier-2 longitudinal observation disposition).
  - **Why (if revived):** Empirical taxonomy extension. The user accepted the 16 types as content for THIS inquiry; future empirical evidence may justify extension.

---

## Reasoning

### Why this finding over the alternatives

The inquiry started with a 17+ candidate option space (6 single-axis candidates + 4 multi-axis + 4 hierarchical + 3 hybrid). Sensemaking's central insight collapsed it: **the design memo already has the implicit categorization** visible in its semicolon-separated 16-type listing. Once that was recognized, the inquiry's work shifted from "invent a categorization" to "surface and name the implicit categorization, add secondary attributes that preserve other existing organizations."

The major design decisions and the considered-and-rejected alternatives:

**Primary axis choice.** Multiple single-axis candidates: design-memo-implicit 6-5-5 (adopted); autonomy_ladder.md Section 5 per-level subset (preserved as secondary attribute); intent-based (preserved as secondary attribute); direction-based (preserved as secondary attribute); functional-role; scope-based. Adopted design-memo-implicit because it's already in routeman's own spec; readers encounter it first; surfacing-not-inventing is the lowest-friction choice.

**Single-axis vs hybrid vs multi-axis.** Pure single-axis loses the multi-axis richness the user's framing implied. Pure multi-axis is harder to communicate. Hybrid (primary single-axis + 6 secondary attributes) wins; combines navigability with richness.

**Group naming.** Tier-numbers (Tier 1 / Tier 2 / Tier 3) considered and killed — they fail the user's "such naming will make our understanding better" criterion (no semantic content). Action-noun names (Progression / Re-orientation / Coordination) describe what each group's members do. "Progression Moves" chosen over "Forward Moves" because Progression covers TERMINATE (forward progression's endpoint); "Forward Moves" alone would mis-categorize.

**REVISIT structural handling.** Two shapes: REVISIT as separate meta-category (1 + 3 sub-actions = 4 entries) or REVISIT as 1 type with `has_sub_actions: true` attribute. Adopted second; preserves the 16-count commitment per user's framing; sub-actions are operational refinements within REVISIT's runtime spec.

**TERMINATE placement.** Considered as separate micro-category (endpoint is structurally unique) or as Progression Moves member (forward progression's endpoint). Adopted second; TERMINATE in Progression with `direction: forward` + `intent: closure` captures its endpoint nature without over-categorizing.

**Intervention-shape.** ADD-CONTENT (new spec section) considered and adopted; REORGANIZE-WITHOUT-ADDING (rename in design memo) and DO-NOTHING (no categorization) and REPAIR (change 6-5-5 partition) considered and killed/rejected.

### What the user's reframing of Q7 changed

The original Q7 in the frontier-questions finding asked about structural completeness (is the 16-type set the right set?). The user's re-framing accepted the 16 types as content and asked for categorization+naming. This is a Tier-1 question shift: a content-completeness question (Tier-2 watch-list) became a structural-organization question (Tier-1-equivalent because it gates SKILL.md authoring's Movement Type field documentation).

This finding resolves the structural-organization aspect. The content-completeness aspect remains as a Tier-2 watch-list item per the original Q7 framing; over the next 20-30 inquiries, the project monitors whether any real-world next-move falls outside the 16 types (longitudinal observation).

### How the design honors priors

The bidirectional re-test (does the adoption survive each prior?) reveals heavy derivation:
- Primary axis DERIVED FROM design-memo-implicit.
- `autonomy_readiness_tier` attribute CONSTRAINED BY autonomy_ladder.md Section 5.
- `auto_class` attribute CONSTRAINED BY design memo's 12-auto/4-judgment partition.
- User-language alignment in attribute naming DERIVED FROM LLM-operational-design principle (N=5 evidence after this inquiry).
- 16-type preservation CONSTRAINED BY canonical /navigation + user's explicit commitment.

The categorization isn't a free choice; it's the natural surfacing of what's already implicit, with secondary attributes preserving existing organizations. Recording these derivations prevents future inquiries from treating the design as an arbitrary preference.

### What was tested but did not become the verdict

- **Tier-number group names** (Tier 1/2/3) — killed for failing the understanding-aid criterion.
- **Single-axis pure schemes** (direction alone; intent alone; effort alone) — killed for losing multi-axis richness; alternatives preserved as secondary attributes.
- **Multi-axis pure schemes** (each type as coordinate in N-dimensional space, no primary axis) — killed for communication complexity; multi-axis-ness preserved via secondary attributes within hybrid scheme.
- **REVISIT as separate meta-category** — killed for violating the 16-count commitment.
- **TERMINATE as separate micro-category** — killed for over-categorizing.
- **REORGANIZE-WITHOUT-ADDING** (rename in design memo only) — killed for losing secondary-attribute richness.
- **REPAIR partition** (move TERMINATE to Coordination, etc.) — killed for changing existing structure without strong reason.
- **DO-NOTHING** (flat 16-type list) — rejected for failing the user's explicit ask.

---

## Open Questions

### Refinement Triggers

The 3 frontier flags in Finding §7 are refinement triggers — each is a condition under which a deferred decision re-opens:

- **FF-1 re-opens** when SKILL.md authoring needs to decide presentation shape (single 16-row table vs grouped 3 sub-tables vs per-family sub-sections).
- **FF-2 re-opens** when SKILL.md authoring needs the exact 12-auto/4-judgment membership; per design memo's original deferral.
- **FF-3 re-opens** when a second discipline's taxonomy needs analogous categorization (research frontier).

### Research Frontiers

- **Generalization of the hybrid primary-axis + secondary-attributes approach to other discipline taxonomies** (FF-3). If multiple disciplines emerge with taxonomies needing categorization, a project-canonical categorization-design pattern may be more efficient than per-discipline reinvention.

- **LLM-operational-design principle promotion to project-canonical principle.** N=5 evidence after this inquiry (18-58 origination + 24-00 hybrid-naming + 24-40 register-naming + 24-01 pointer-style preservation + this inquiry's attribute-naming preservation). Promotion to project-canonical is solidly justified for an appropriate future inquiry.

### Monitoring

- **Whether the original Q7 completeness question's Tier-2 watch-list disposition fires.** Over the next 20-30 inquiries, monitor whether any real-world next-move appears that doesn't fit any of the 16 types. If yes, re-open Q7 completeness with the new candidate type proposal.

- **Whether the SKILL.md authoring inquiry adopts the categorization in a usable form.** If SKILL.md authoring restructures the categorization (renames groups, drops attributes, re-partitions types), this finding's commitments are weakened.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
##### Question 7 — Is the 16-type movement-type taxonomy structurally complete, or should routeman accommodate type emergence?

The 16-type taxonomy (DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE; RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE; REVISIT with sub-actions RESURRECT/INVALIDATE/REVERT, UNBLOCK, MERGE, TEST, CONSOLIDATE) was inherited verbatim from canonical /avigation without empirical completeness testing. The design memo's lineage decision to inherit this taxonomy did not test the completeness assumption.


i think these types are good. but we should have big categories and smaller categories, like movement directions, movement types, intent ? or some better more fitting categories for these 16 type taxonomy , so we can name them better. for example we can call 5-4-7 rout dimensions. where 5 might be movement directiosn, 4 might be types, 7 might be something else. .. (this is just an dummy exmaple btw) 

i think such naming will make our understanding better. lets focus on this
```

</details>
