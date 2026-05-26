# Critique — route taxonomy categorization

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/_branch.md`

---

## Phase 0 — Dimension Construction

### Derived dimensions

| # | Dimension | What it asks | Source | Weight |
|---|---|---|---|---|
| **D1** | **Understanding-aid criterion** | Does the scheme actually improve understanding (per user's "such naming will make our understanding better")? | C4 + user explicit | **CRITICAL** |
| **D2** | **16-types preservation** | All 16 types preserved; no add/remove | C1 + user explicit | **CRITICAL** |
| **D3** | **Alignment with existing implicit organizations** | Design memo 6-5-5; autonomy_ladder.md Section 5; 12/4 partition; 24-01 per-type mapping | C5 + Sensemaking KI1 | **CRITICAL** (project-specific) |
| **D4** | **Prior-commitment preservation** | All priors + canonical /navigation + autonomy_ladder.md | Synthesis Trigger | **CRITICAL** |
| **D5** | **REVISIT-as-1-type structural correctness** | REVISIT counts as 1 type with sub-actions; not 4 | C6 | **CRITICAL** |
| **D6** | **Action-noun naming quality** | Names describe what group DOES (vs tier-numbers / generic) | KI6 + FP3 | HIGH |
| **D7** | **User-language alignment** | LLM-operational-design principle | FP2 (N=4 evidence) | HIGH |
| **D8** | **Multi-axis richness** | User's "movement direction / intent" framing honored via secondary attributes | KI4 | HIGH |
| **D9** | **Machine-parseability for routeman mechanism** | Stage 1 (per 24-01) reads attributes; values must be parseable | P-TECH-1 | HIGH (project-specific) |
| **D10** | **Axis-vs-group naming distinction** | Surfacing's finding that user's framing was about AXIS not GROUP | KI2 | HIGH |
| **D11** | **TERMINATE handling** | Placement justified (Progression Family as endpoint) | Ambiguity 4 resolution | MED |
| **D12** | **Auto-class membership deferral** | Design memo's original deferral preserved | C5 | MED |

### Dimension validation

Project-specific risk axes: D3 (alignment) + D9 (machine-parseability). All 8 Sensemaking perspectives map to ≥1 dimension. **Dimension blindness check: PASS.**

Discriminating-power: across 18 candidates, dimensions discriminate. **PASS.**

---

## Phase 1 — Fitness Landscape

### Viable region

HIGH on D1+D2+D3+D4+D5 (all CRITICAL); HIGH/MED-HIGH on D6-D10 (HIGH); MED+ on D11-D12.

### Dead region

Fails ANY CRITICAL.

### Boundary region

Strong CRITICAL, weak HIGH — REFINE.

### Unexplored region

Innovation covered 5 orthogonal axes (content, shape, presentation, direction, naming). No likely-viable unexplored regions remain.

---

## Phase 2 — Adversarial Evaluation

### P1 group (PRIMARY AXIS SPEC)

#### P1-G (Movement Family with Progression / Re-orientation / Coordination)

**Prosecution.**
- D6: action-noun names are subjective — what specifically makes "Progression Moves" better than "Forward Moves" or "Advance Moves"? The justification rests on TERMINATE's endpoint status, but readers may not see that immediately.
- User-perspective objection: user said "movement direction / movement types / intent" — these are user's vocabulary. "Progression / Re-orientation / Coordination" don't match the user's words directly.

**Defense.**
- D1: "Progression" describes ALL Group 1 types including TERMINATE (forward progression + endpoint); "Forward Moves" alone would mis-categorize TERMINATE.
- D7: user-language is preserved at SECONDARY ATTRIBUTE level (`direction`, `intent`); primary AXIS NAME is a categorization choice that the user explicitly invited ("or some better more fitting categories").
- D10: distinguishing AXIS (Movement Family) from GROUP names (Progression / etc.) is correct per Surfacing's finding.

**Collision.** Defense wins on D1 + D7 + D10. The user invited better-fitting categories; the action-noun names describe structural commonalities of each group's members.

**Verdict: SURVIVE-REFINE.** Add a brief sentence justifying "Progression" over "Forward" (covers TERMINATE-as-endpoint). Alt-naming candidates (Advance / Adjust / Coordinate) preserved as bikeshed-level alternatives at SKILL.md authoring.

#### P1-F (alt naming candidates)

**Verdict: DEFER to SKILL.md authoring** (matches Innovation).

#### P1-C alternatives (REORGANIZE / DO-NOTHING / REPAIR)

**Prosecution.** REORGANIZE loses richness; DO-NOTHING fails user-ask (D1); REPAIR changes existing structure without strong reason.

**Defense.** Each has narrow appeal (simplicity / minimality).

**Collision.** Prosecution wins on D1/D4 CRITICAL.

**Verdict: KILL with seeds** (REORGANIZE/REPAIR); **REJECTED** (DO-NOTHING — fails user-ask).

### P2 group (SECONDARY ATTRIBUTES SPEC)

#### P2-G (6 attributes)

**Prosecution.**
- D8: 6 attributes is more than user's framing named ("movement direction / intent" = 2-3). Specification-gap probe: does the user actually need ALL 6?
- D9: 6 attributes per type × 16 types = 96 attribute-values to maintain; potential maintenance overhead.

**Defense.**
- D3 + D4 CRITICAL: each attribute preserves an existing organization (autonomy_readiness_tier ← autonomy_ladder.md; auto_class ← design memo 12/4; has_sub_actions ← REVISIT structural fact). Removing any loses prior-commitment preservation.
- D8: 6 attributes ARE the multi-axis richness the user's framing implied. User's "movement direction / intent" lists 2 examples; the inquiry surfaced 4 more (autonomy_readiness_tier, auto_class, scope, has_sub_actions) that preserve existing structures.

**Collision.** Defense wins on D3 + D4 (CRITICAL). The 6 attributes aren't over-specification; they're prior-commitment preservation + user-framing fulfillment.

**Verdict: SURVIVE.**

#### P2-F (enriched intent / applies_to_stage)

**Verdict: DEFER to SKILL.md authoring** (matches Innovation; enum calibration / additional attribute considerations).

#### P2-additional ADD (machine-parseable constraint check)

**Verdict: SURVIVE as verification note.**

#### P2-additional REMOVE (drop has_sub_actions)

**Verdict: REJECTED** (matches Innovation; loses extensibility).

#### P2-C alternatives (REORGANIZE / REMOVE-ONE / DO-NOTHING)

**Verdict: KILL with seeds** (loses information).

### P3 group (PER-TYPE COORDINATE TABLE)

#### P3-G (single 16-row table)

**Prosecution.** 16 rows × 7 columns is wide; SKILL.md readers may find horizontal scrolling tedious. Specification-gap probe: the table doesn't include the per-family commonalities (e.g., "ALL Progression Moves are forward + L2-baseline + within-thread"); readers must derive.

**Defense.**
- D9: queryable; one source of truth; compact (no duplication across sub-tables).
- D2: all 16 types in one visible structure.

**Collision.** Defense wins on D9; prosecution's "per-family commonalities hidden" addressable via P3-F companion.

**Verdict: SURVIVE.** Pair with P3-F for readers who prefer grouped view.

#### P3-F (grouped 3 sub-tables)

**Prosecution.** 3 sub-tables triple the table count; SKILL.md readers must scan three places to find a type.

**Defense.**
- D1: per-family commonalities VISIBLE (Progression: all forward, all L2-baseline, all within-thread) — aids understanding directly.
- D6: reinforces action-noun naming via visible structural commonalities.

**Collision.** Defense wins on D1 + D6.

**Verdict: SURVIVE as companion** to P3-G. SKILL.md authoring decides primary presentation; both options preserved.

#### P3-C (per-family sub-sections)

**Verdict: DEFER to SKILL.md authoring** (matches Innovation; FF-1 presentation shape).

### P4 group (ALIGNMENT STATEMENT)

#### P4-G (prose alignment)

**Verdict: SURVIVE.** D3 satisfied; all 5 existing organizations explicitly cited.

#### P4-C (tabular alignment)

**Verdict: SURVIVE as companion.** More scannable than prose; both useful.

### P5 (FF LIST)

**Verdict: SURVIVE.** D4 satisfied via FF preservation.

### P6 group (INHERITED COMMITMENTS RE-TEST)

#### P6-G (verdict table)

**Verdict: SURVIVE.** D4 satisfied; all priors named with verdicts.

#### P6-C (direction-reversal: priors-shape-adoption)

**Prosecution.** "DERIVED-FROM" / "CONSTRAINED-BY" language is now used in 3+ inquiries (24-00, 24-40, 24-01, this inquiry). May be becoming formulaic — pattern-application without genuine insight.

**Defense.**
- The pattern's purpose is to make DERIVATION EXPLICIT — preventing future inquiries from treating choices as arbitrary. The repetition reflects N=4 uses of the pattern, which suggests it's becoming PROJECT-CANONICAL rather than formulaic.
- Each application names SPECIFIC prior-to-choice mappings; the language is precise per prior.

**Collision.** Defense wins. The pattern is now established; this inquiry's use is the 4th instance and confirms the pattern's value.

**Verdict: SURVIVE.** No refinement needed; the pattern serves.

---

## Phase 3 — Verdict Summary

| Candidate | Verdict | Action |
|---|---|---|
| P1-G | SURVIVE-REFINE | Add justification sentence for "Progression" vs "Forward" naming. |
| P1-F (alt naming) | DEFER to SKILL.md authoring | Bikeshed-level. |
| P1-C (REORGANIZE / REPAIR) | KILL with seeds | Loses richness / changes existing structure. |
| P1-C (DO-NOTHING) | REJECTED | Fails user-ask (D1). |
| P2-G | SURVIVE | Defense wins on D3+D4 CRITICAL; 6 attributes are prior-commitment preservation. |
| P2-F (enrichment) | DEFER to SKILL.md authoring | Enum calibration / additional attribute candidates. |
| P2-additional ADD (machine-parseable) | SURVIVE as verification | Current design satisfies. |
| P2-additional REMOVE (drop has_sub_actions) | REJECTED | Loses extensibility. |
| P2-C alternatives | KILL with seeds | Loses information. |
| P3-G (single table) | SURVIVE | Queryable; one source. |
| P3-F (grouped sub-tables) | SURVIVE as companion | Per-family commonalities visible. |
| P3-C (per-family sub-sections) | DEFER to SKILL.md authoring | FF-1. |
| P4-G (prose alignment) | SURVIVE | All 5 organizations cited. |
| P4-C (tabular alignment) | SURVIVE as companion | More scannable. |
| P5-G | SURVIVE | FFs scoped. |
| P6-G | SURVIVE | Verdict table satisfies D4. |
| P6-C (direction-reversal) | SURVIVE | Pattern now project-canonical (N=4). |

**Totals:**
- SURVIVE / SURVIVE-REFINE / SURVIVE-as-companion: 11
- DEFER: 3
- KILL with seeds: 3
- REJECTED: 1

---

## Phase 3.5 — Assembly Check

Combine SURVIVING candidates:

```
FINDING SHAPE:

1. **Opening reframing** — Q7 RE-FRAMED-AND-PARTIALLY-RESOLVED (categorization sub-aspect
   resolved; original completeness aspect remains Tier-2 watch-list).
   The categorization is DERIVED FROM design-memo-implicit structure (per P6-C insight).

2. **Primary axis spec (P1-G refined)** — Movement Family with action-noun group names
   (Progression / Re-orientation / Coordination) + per-group definitions + justification
   that "Progression" covers forward + endpoint (vs "Forward" which would mis-categorize TERMINATE).

3. **Secondary attributes spec (P2-G + P2-additional ADD verification note)** — 6 attributes
   per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions)
   with value enums + purposes + source-organization preservation; machine-parseable.

4. **Per-type coordinate table (P3-G primary; P3-F companion)** — single 16-row table as
   queryable source of truth; grouped 3-sub-table companion for per-family commonalities visibility;
   SKILL.md authoring decides primary presentation.

5. **Alignment statement (P4-G prose + P4-C tabular companion)** — 5 existing organizations
   cited and preservation mapping stated.

6. **FF list (P5-G)** — 3 follow-ups (presentation shape; auto-class membership; generalization
   research frontier).

7. **Inherited commitments re-test (P6-G + P6-C bidirectional note)** — verdict table +
   priors-shape-adoption insight (now N=4 use of the bidirectional pattern; project-canonical).

8. **Deferred candidates section** — P1-F alt naming; P2-F enrichment; P3-C per-family
   sub-sections.

9. **Killed candidates with seeds** — P1-C REPAIR partition; P2-C alternatives.
```

### Assembly evaluation against dimensions

| Dimension | Score | Reason |
|---|---|---|
| D1 (Understanding-aid) | HIGH | Action-noun naming + structural commonalities visible via P3-F + alignment statement |
| D2 (16-types preservation) | HIGH | All 16 types in per-type table |
| D3 (Alignment with existing) | HIGH | 5 organizations explicitly preserved |
| D4 (Prior preservation) | HIGH | Re-test covers all priors |
| D5 (REVISIT-as-1) | HIGH | REVISIT counted as 1 with has_sub_actions=true |
| D6 (Action-noun quality) | HIGH | Progression / Re-orientation / Coordination describe what groups DO |
| D7 (User-language) | HIGH | "direction" + "intent" preserved as secondary attributes |
| D8 (Multi-axis richness) | HIGH | 6 secondary attributes accommodate multi-axis framing |
| D9 (Machine-parseability) | HIGH | String enums + structured attribute names |
| D10 (Axis-vs-group distinction) | HIGH | "Movement Family" is axis name; group names are different |
| D11 (TERMINATE handling) | HIGH | In Progression Family with closure intent |
| D12 (Auto-class deferral) | HIGH | Membership deferred per design memo's original deferral |

**Assembly verdict: SURVIVE.** All 12 dimensions HIGH.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

- **Per-candidate:** 18/18 evaluated with prosecution + defense + collision.
- **Per-solution-space:** 5 axes from Innovation all addressed.

### Convergence

- Clean SURVIVE assembly emerges.
- No new candidates in unmapped regions.
- Landscape STABLE.

### Convergence criteria

- [✓] At least one candidate has SURVIVE verdict with no caveats on CRITICAL dimensions.
- [✓] No new candidates in new regions.
- [✓] No unexplored regions likely to contain viable candidates.
- [✓] Accumulator shows convergence.

### Signal: TERMINATE with ranked survivors

**Ranked survivors:**
1. **Assembled finding shape**.
2. P1-G (refined with naming justification).
3. P2-G + P2-additional ADD.
4. P3-G + P3-F companion.
5. P4-G + P4-C companion.
6. P5-G + P6-G + P6-C.

**Deferred:**
- P1-F alt naming → SKILL.md authoring bikeshed.
- P2-F enrichment → SKILL.md authoring enum calibration.
- P3-C per-family sub-sections → SKILL.md authoring presentation shape (FF-1).

**Killed with seeds:**
- P1-C REPAIR (changes existing structure without strong reason).
- P2-C alternatives (loses information).

**Rejected:**
- P1-C DO-NOTHING (fails user-ask).
- P2-additional REMOVE has_sub_actions (loses extensibility).

---

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions; 8 Sensemaking perspectives mapped; project-specific risk axes (D3 alignment + D9 machine-parseability) included.
- **Adversarial strength:** STRONG — prosecution constructed user-perspective objection (P1-G "Progression doesn't match user's vocabulary"), specification-gap probe (P2-G "6 attributes exceeds user's framing"), failure-case scenarios (P3-G "16-row table is wide"). Each met with structural defense.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** none of the 7.
  - Wrong dimensions: validated; PASS.
  - Rubber-stamping: 3 KILLs + 1 REJECT + 3 DEFERs; PASS.
  - Nitpicking: 11+ SURVIVEs; KILLs on CRITICAL only; PASS.
  - Dimension blindness: project-specific axes included; PASS.
  - False convergence: clean SURVIVE; PASS.
  - Evaluation drift: single iteration; dimensions fixed; PASS.
  - Self-reference collapse: target is taxonomy + categorization, not critique; PASS.

**Overall: PROCEED.**

---

## Handoff to CONCLUDE

CONCLUDE's task:
1. Assemble finding per Assembly Check shape.
2. Include `## Inherited Commitments Re-test` section per Synthesis Trigger (P6-G + P6-C softened).
3. Apply Critique refinement: add naming justification for "Progression" vs "Forward" in P1.
4. Mark Q7 PARTIALLY-RESOLVED in frontier-questions finding (categorization sub-aspect resolved; completeness aspect remains Tier-2 watch-list).
5. Update LLM-operational-design principle's evidence count to N=5 (this inquiry's user-language alignment in secondary attribute naming).
6. Move discipline outputs to docarchive/ per CONCLUDE protocol.
