# Decomposition — route taxonomy categorization

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/_branch.md`

---

## Step 1 — Coupling Topology

### Elements of the whole

Sensemaking's SV6 stabilized model produces these elements:

- **E1** — Primary axis "Movement Family" (3 groups from design memo's implicit 6-5-5).
- **E2** — Group names: Progression Moves / Re-orientation Moves / Coordination Moves (action-noun).
- **E3** — 6 secondary attributes (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions) with value enumerations.
- **E4** — Per-type coordinate table (16 types × 7-tuple of {family + 6 attributes}).
- **E5** — TERMINATE placement (Progression Family endpoint).
- **E6** — REVISIT structural handling (has_sub_actions: true; 1 type count preserved; sub-actions are operational refinements).
- **E7** — Alignment statement (existing implicit organizations preserved as secondary attributes: design memo 6-5-5 → primary; autonomy_ladder.md Section 5 → autonomy_readiness_tier; design memo 12/4 → auto_class; 24-01 per-movement-type mapping → re-presentable as per-family rules).
- **E8** — Understanding-aid justification (why the chosen scheme aids understanding).
- **E9-E11** — 3 open follow-ups (SKILL.md presentation shape; auto-class exact membership; generalization research frontier).
- **E12** — Inherited Commitments Re-test (per Synthesis Trigger: 4 priors + canonical /navigation + docs/autonomy_ladder.md).
- **E13** — Cross-document impact notes (CONCLUDE-handled; out of scope).

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **STRONG** | Axis + names; one without the other is incomplete. |
| E1 ↔ E4 | **STRONG** | Axis defines the family column of the per-type table. |
| E2 ↔ E4 | **STRONG** | Group names appear in each row of the table. |
| E3 ↔ E4 | **STRONG** | Attribute definitions + value enumerations → per-type table's columns. |
| E5 ↔ E4 | **STRONG** | TERMINATE's row in the table. |
| E6 ↔ E4 | **STRONG** | REVISIT's row + has_sub_actions=true entry. |
| E7 ↔ E3 | **MODERATE** | Alignment explains where secondary attributes come from. |
| E7 ↔ E1 | **MODERATE** | Alignment explains why primary axis = design memo 6-5-5. |
| E8 ↔ E1+E2 | **MODERATE** | Justification explains why these names + grouping aid understanding. |
| E9-E11 (FFs) ↔ E1-E8 | **WEAK** | Open follow-ups; informational. |
| E12 (re-test) ↔ E1-E8 | **STRONG** | Validates all commitments against priors. |
| E13 ↔ everything | **WEAK** | CONCLUDE-handled; out of scope. |

### Cluster identification

- **Cluster A — CATEGORIZATION SCHEME:** E1 + E2 + E3 + E4 + E5 + E6 + E7 + E8. Tightly coupled around the categorization design.
- **Satellite — FF LIST:** E9-E11. Open follow-ups.
- **Satellite — RE-TEST:** E12. Synthesis-trigger obligation.
- **Out-of-scope:** E13 (CONCLUDE).

Within Cluster A, sub-clusters with looser internal coupling:
- **A1 — Primary axis** (E1 + E2 + E8 justification subset): the family structure + names + why-it-aids-understanding.
- **A2 — Secondary attributes** (E3): the 6 attributes' definitions + value enumerations.
- **A3 — Per-type coordinate table** (E4 + E5 + E6): the 16-row table + special handling for TERMINATE + REVISIT.
- **A4 — Alignment statement** (E7): how the scheme preserves existing implicit organizations.

### Coupling-map summary

```
            [Cluster A: CATEGORIZATION SCHEME]
            
              ┌─────────────────────┐
              │ A1: Primary axis    │  (E1+E2+E8)
              │ (Movement Family +  │
              │  3 group names +    │
              │  justification)     │
              └──────┬──────────────┘
                     │ (defines family column)
                     │
                     v
              ┌─────────────────────┐
              │ A3: Per-type table  │  (E4+E5+E6)
              │ (16 rows × 7-tuple) │
              └──────┬──────────────┘
                     ^
                     │ (defines attribute columns)
                     │
              ┌──────┴──────────────┐
              │ A2: Secondary       │  (E3)
              │ attributes spec     │
              └─────────────────────┘
              
              ┌─────────────────────┐
              │ A4: Alignment       │  (E7)
              │ statement           │
              │ (references A1+A2)  │
              └─────────────────────┘
            
            [Satellite: RE-TEST]
              E12 (validates all)
            
            [Satellite: FF LIST]
              E9-E11
            
            [Out-of-scope]
              E13 (CONCLUDE)
```

---

## Step 2 — Detect Boundaries (Top-Down)

Four natural boundaries emerge:

- **B1** — Between A1 (Primary axis) and A2 (Secondary attributes). Low-crossing: both feed A3 (the per-type table) but don't reference each other directly.
- **B2** — Between A1+A2 and A3 (Per-type table). Low-crossing: A3 consumes A1's family name + A2's attribute definitions; one-way flow.
- **B3** — Between A1+A2 and A4 (Alignment statement). Low-crossing: A4 cites both for context; one-way reference.
- **B4** — Between (A1+A2+A3+A4) and the FF LIST + RE-TEST satellites.

Each boundary creates internally cohesive, externally sparse pieces.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms:

- **Atom-a** — A single group definition (e.g., "Progression Moves = types that advance the work").
- **Atom-b** — A single attribute definition (e.g., "direction enum: forward/backward/sideways/cross-branch").
- **Atom-c** — A single per-type coordinate row (e.g., "DEEPEN | Progression | forward | refinement | L2-baseline | auto | within-thread | false").
- **Atom-d** — A single alignment claim (e.g., "autonomy_ladder.md Section 5 → autonomy_readiness_tier attribute").
- **Atom-e** — A single FF entry.
- **Atom-f** — A single prior-commitment verdict.

Clustering check:
- Atoms-a → A1 (Primary axis). ✓
- Atoms-b → A2 (Secondary attributes). ✓
- Atoms-c → A3 (Per-type table). ✓
- Atoms-d → A4 (Alignment statement). ✓
- Atoms-e → FF LIST. ✓
- Atoms-f → RE-TEST. ✓

**No atoms split across boundaries. Boundaries CONFIRMED.**

**Confidence:** HIGH — top-down + bottom-up agree.

---

## Step 4 — Question Tree

### P1 — PRIMARY AXIS SPEC (Movement Family + names + justification)

**Question:** "What is the primary categorization axis (Movement Family with 3 groups: Progression / Re-orientation / Coordination), the per-group definitions, and the justification that the chosen scheme aids understanding per the user's stated criterion?"

**Verification criteria:**
- [ ] Axis name committed: **Movement Family**.
- [ ] 3 group names committed with action-noun pattern:
  - **Progression Moves** — types that advance the work in some direction or end it (6 members).
  - **Re-orientation Moves** — types that adjust the scope, approach, or framing of ongoing work (5 members).
  - **Coordination Moves** — types that coordinate across time/branches/threads or validate/consolidate (5 members).
- [ ] Per-group definition stated explicitly (what each group's members share structurally).
- [ ] Understanding-aid justification stated, citing: (a) design memo's implicit 6-5-5 grouping is already in the project's spec (surface-not-invent); (b) action-noun names describe what each group DOES (not what tier-number it is); (c) hybrid scheme (primary axis + secondary attributes) accommodates multi-axis richness without forcing coordinate-system presentation.

### P2 — SECONDARY ATTRIBUTES SPEC (6 attributes with enumerations + purposes)

**Question:** "What are the 6 secondary attributes per type, their value enumerations, and the per-attribute purpose statement (explaining what each attribute captures and which existing implicit organization it preserves)?"

**Verification criteria:**
- [ ] 6 attributes named: `direction`, `intent`, `autonomy_readiness_tier`, `auto_class`, `scope`, `has_sub_actions`.
- [ ] Each attribute's value enum committed:
  - `direction` ∈ {forward, backward, sideways, cross-branch}.
  - `intent` ∈ {exploration, refinement, investigation, closure, coordination, pivot}.
  - `autonomy_readiness_tier` ∈ {L2-baseline, L3-cross-cycle, L4-process-directed, L5-coordination-endgame}.
  - `auto_class` ∈ {auto, judgment}.
  - `scope` ∈ {within-thread, cross-cycle, cross-branch}.
  - `has_sub_actions` ∈ {true, false}.
- [ ] Each attribute's purpose stated.
- [ ] Attributes preserving existing organizations explicitly cited:
  - `autonomy_readiness_tier` ← `docs/autonomy_ladder.md` Section 5's per-level Selector subset.
  - `auto_class` ← design memo's 12-auto/4-judgment partition (the second endgame function).
  - `direction` + `intent` + `scope` ← user-language vocabulary from this inquiry's source-question.
  - `has_sub_actions` ← REVISIT's structural uniqueness (currently true only for REVISIT).

### P3 — PER-TYPE COORDINATE TABLE (16 types × 7-tuple + special handling)

**Question:** "What is the per-type coordinate table mapping each of the 16 types to its 7-tuple of `{family + 6 attributes}`, including TERMINATE's placement in Progression Family and REVISIT's `has_sub_actions: true` handling?"

**Verification criteria:**
- [ ] All 16 types have rows (no type missing): DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE, RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE, REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE.
- [ ] Each row has family + 6 attribute values populated.
- [ ] **TERMINATE** in Progression Family with `direction: forward`, `intent: closure`, `autonomy_readiness_tier: L2-baseline`, `auto_class: judgment`, `scope: within-thread`, `has_sub_actions: false`.
- [ ] **REVISIT** in Coordination Family with `direction: backward`, `intent: coordination`, `autonomy_readiness_tier: L3-cross-cycle`, `auto_class: judgment`, `scope: cross-cycle`, **`has_sub_actions: true`** (RESURRECT/INVALIDATE/REVERT documented in REVISIT's operational detail, not as separate categorization rows).
- [ ] `auto_class` values labeled "illustrative best-guess; design memo defers exact 12-auto/4-judgment partition membership to SKILL.md authoring."
- [ ] Sub-action sub-table for REVISIT (RESURRECT/INVALIDATE/REVERT) noted as operational refinement; not a separate type-level row.

### P4 — ALIGNMENT STATEMENT (existing implicit organizations preserved)

**Question:** "How does the chosen categorization preserve existing implicit organizations without conflict — design memo's 6-5-5 (primary), autonomy_ladder.md Section 5 (secondary autonomy_readiness_tier), design memo's 12-auto/4-judgment partition (secondary auto_class), 24-01's per-movement-type Stage 1 mapping (re-presentable as per-family rules)?"

**Verification criteria:**
- [ ] Design memo's implicit 6-5-5 grouping cited as the SOURCE of the primary axis (Movement Family); the grouping is surfaced + named, not invented.
- [ ] `docs/autonomy_ladder.md` Section 5's per-level Selector subset cited as preserved via the `autonomy_readiness_tier` attribute; per-level subset mappings explicitly noted (L2-baseline = 5 types; L3 +REVISIT; L4 +process-directed 6; L5 +coordination/endgame 3; TERMINATE placement in L2-baseline).
- [ ] Design memo's 12-auto/4-judgment partition cited as preserved via the `auto_class` attribute; exact membership deferred to SKILL.md authoring per the design memo's original deferral.
- [ ] 24-01's per-movement-type Stage 1 mapping cited as RE-PRESENTABLE via per-family rules: instead of 16 per-type rules in SKILL.md, the mapping can become 3 per-family rules with per-type refinements when SKILL.md authoring takes this finding as input. This is a SECONDARY benefit of the categorization, not a primary commitment.
- [ ] Canonical /navigation cited as preserved (16-type taxonomy unchanged; categorization is structural overlay).
- [ ] No claimed conflict with existing structures.

### P5 — RESIDUAL OPEN QUESTIONS (FF LIST)

**Question:** "Which 3 open follow-ups remain, with scope + downstream consumer + revival trigger?"

**Verification criteria:**
- [ ] **FF-1 (SKILL.md presentation shape):** table vs nested list vs coordinate-system. Consumer = SKILL.md authoring inquiry. Revival trigger = when SKILL.md is being written.
- [ ] **FF-2 (auto-class exact membership):** which 12 types are auto / which 4 are judgment. Consumer = SKILL.md authoring inquiry (per design memo's original deferral). Revival trigger = same as FF-1.
- [ ] **FF-3 (generalization research frontier):** could the hybrid-categorization approach generalize to other discipline taxonomies? Research frontier; revival = when a second discipline's taxonomy needs analogous categorization.

### P6 — INHERITED COMMITMENTS RE-TEST

**Question:** "Does each commitment from the 4 priors + canonical /navigation + `docs/autonomy_ladder.md` survive this inquiry's categorization scheme?"

**Verification criteria:**
- [ ] Each prior + spec enumerated with its load-bearing commitments.
- [ ] Each commitment marked PRESERVED / EXTENDED / MADE-EXPLICIT / INHERITED-WITHOUT-RE-TEST with reason.
- [ ] Design memo's 6-5-5 implicit grouping: PRESERVED + MADE-EXPLICIT (surfaced + named).
- [ ] Design memo's 12-auto/4-judgment partition: PRESERVED (as `auto_class` secondary attribute; exact membership deferred per design memo's original deferral).
- [ ] `docs/autonomy_ladder.md` Section 5 per-level Selector subset: PRESERVED (as `autonomy_readiness_tier` secondary attribute).
- [ ] 24-01's per-movement-type Stage 1 mapping: PRESERVED + RE-PRESENTABLE (can be re-presented as per-family rules at SKILL.md authoring).
- [ ] Canonical /navigation 16-type taxonomy: PRESERVED unchanged (categorization is overlay).
- [ ] Frontier-questions finding's Q7: RE-FRAMED-AND-PARTIALLY-RESOLVED (the original completeness question remains as Tier-2 watch-list; this inquiry resolves the categorization+naming sub-aspect).
- [ ] No commitment silently dropped.

### Question-tree stopping criteria check

- P1: tractable (axis name + 3 group names + per-group definitions + justification).
- P2: tractable (6 attribute definitions + value enums + purposes).
- P3: tractable (16-row table + 2 special-handling notes).
- P4: tractable (5 alignment claims).
- P5: tractable (3 FFs).
- P6: tractable (6 priors × verdicts).

No piece requires sub-decomposition. **Stopping criteria met: TRACTABLE for all six.**

---

## Step 5 — Interfaces

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P1 (Primary axis) | P3 (Per-type table) | Family names + per-group definitions flow to table's family column | one-way | P3 references P1's group names per row. |
| P2 (Secondary attributes) | P3 (Per-type table) | Attribute definitions + value enums flow to table's columns | one-way | P3 references P2's enum values per row. |
| P1 (Primary axis) | P4 (Alignment statement) | Axis name (Movement Family) cited in alignment | one-way | P4 explains why primary axis = design memo 6-5-5. |
| P2 (Secondary attributes) | P4 (Alignment statement) | Attribute names cited (autonomy_readiness_tier, auto_class) | one-way | P4 explains attribute-source-mapping. |
| P3 (Per-type table) | P4 (Alignment statement) | Per-type coordinates demonstrate the alignment | one-way | P4 may reference specific rows from P3 as evidence. |
| P6 (Re-test) | P1 + P2 + P3 + P4 + P5 | Validation against priors | one-way (read-only) | Re-test reads all commitments + priors. |
| Sensemaking SV6 | All pieces | Stabilized model | one-way | All pieces build on SV6. |
| External (priors + canonical + autonomy_ladder.md) | P6 | Prior commitments | one-way (read-only) | Re-test inputs. |

### Assumptions-not-data check

- **P1 → P3 interface:** P1's group names are stable assumed. Hidden coupling: if P1 renames a group (e.g., "Progression" → "Forward"), P3 must update. Mitigation: name commitments are explicit in P1's verification criteria.
- **P2 → P3 interface:** P2's attribute value enums are stable assumed. Hidden coupling: if P2 changes an enum value (e.g., autonomy_readiness_tier values), P3 must update. Mitigation: enum commitments are explicit in P2's verification criteria.
- **P3 → P4 interface:** P4 may reference P3's specific rows; if P3's rows change, P4's evidence may need to update. Mitigation: alignment claims are stated at axis/attribute level, not per-row; specific-row references are illustrative.
- **P6 → all interfaces:** re-test assumes priors' commitments correctly inventoried. Mitigation: rely on Sensemaking's anchor extraction + Surfacing's prior listing.

---

## Step 6 — Dependency Order

```
┌─────────────────────────────────────────┐
│  Sensemaking SV6 (input to all pieces)  │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        v                 v
┌──────────────┐   ┌────────────────────┐
│ P1 (PRIMARY  │   │ P2 (SECONDARY      │   ← P1 + P2 drafted in parallel
│   AXIS)      │   │   ATTRIBUTES)      │     (both independently define
│              │   │                    │      what P3 needs)
└──────┬───────┘   └──────────┬─────────┘
       │                      │
       │ (family names        │ (attribute definitions
       │  flow to table)      │  + enums flow to table)
       │                      │
       └──────┬───────────────┘
              v
       ┌────────────────────┐
       │ P3 (PER-TYPE       │   ← P3 after P1 + P2 (consumes both)
       │   COORDINATE TABLE)│
       └──────────┬─────────┘
                  │
                  │ (specific rows may be cited as alignment evidence)
                  v
       ┌────────────────────┐
       │ P4 (ALIGNMENT      │   ← P4 after P1 + P2 (can run in parallel with P3
       │   STATEMENT)       │     if alignment cites axis/attribute level only;
       └────────────────────┘     after P3 if per-row evidence is used)

       ┌────────────────────┐
       │ P5 (FF LIST)       │  ← Independent throughout
       └────────────────────┘

       After P1+P2+P3+P4+P5 committed:

       ┌────────────────────┐
       │ P6 (RE-TEST)       │  ← Last; validates all
       └────────────────────┘
```

- **P1 + P2:** drafted in PARALLEL. Both feed P3 but don't depend on each other.
- **P3:** drafted AFTER P1 + P2 (consumes their outputs).
- **P4:** drafted AFTER P1 + P2; can run in PARALLEL with P3 if alignment cites only axis/attribute level; sequenced after P3 if alignment uses per-row evidence.
- **P5 (FF LIST):** INDEPENDENT throughout.
- **P6 (RE-TEST):** LAST. Consumes P1-P5 + priors.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS-WITH-NOTE — P3 cites P1 + P2 (defined interfaces); P4 cites P1 + P2 (defined interfaces); citations are interfaces, not hidden coupling. |
| **Completeness** | Do the pieces cover the inquiry's whole? | PASS — 8 Sensemaking commitments covered: E1+E2+E8 → P1; E3 → P2; E4+E5+E6 → P3; E7 → P4. 3 FFs → P5. Re-test → P6. Cross-doc impact (E13) explicitly CONCLUDE-handled. |
| **Reassembly** | Pieces + interfaces = whole? | PASS — given P1-P6 + the defined interfaces, the finding assembles: P1+P2 commitments → P3 per-type table → P4 alignment explanation; P5 + P6 provide follow-ups + validation. |

### Determination-mechanism piece check (refinement)

The Q-tree includes a load-bearing concept whose use depends on runtime determination: REVISIT's sub-action choice (RESURRECT vs INVALIDATE vs REVERT) is determined at REVISIT-invocation time. The categorization commits the `has_sub_actions: true` marker (P3); the specific sub-action determination is an OPERATIONAL concern within REVISIT's runtime spec, not a categorization-level concern.

Auto-class membership (which 12 types are auto, which 4 are judgment) is a per-type commitment that the design memo explicitly defers; P5's FF-2 captures this deferral. The categorization commits the SHAPE (auto_class attribute exists; values are auto / judgment) without committing membership.

**All runtime determinations are addressed (or appropriately deferred). PASS.**

### Full (additional 4 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for single focused pass? | PASS — All six pieces tractable; no sub-decomposition needed. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies absent? | PASS — 8 interfaces explicit (5 internal + 3 external); assumptions-not-data check applied at 4 internal interfaces. |
| **Balance** | Complexity roughly proportional? | PASS-WITH-NOTE — P3 (per-type table, 16 rows) is the largest; P1, P2, P4 are medium; P5, P6 smaller. The size of P3 is appropriate to its role (the central deliverable); other pieces are sized appropriately to their roles. |
| **Confidence** | Top-down + bottom-up agree? | HIGH — both passes identified the same four boundaries; no atoms split or forcibly grouped. |

### Failure-modes review

- **Premature decomposition:** No — Sensemaking SV6 is stable.
- **Wrong boundaries:** No — boundaries cut at moderate-or-weak coupling regions.
- **Hidden coupling:** Checked via assumptions-not-data; 4 identified + mitigated.
- **Missing pieces:** Determination-mechanism check PASS (REVISIT sub-action determination is operational; auto-class membership is appropriately deferred via P5/FF-2).
- **Over-decomposition:** No — 6 pieces appropriate for 8 commitments + 3 FFs + re-test.
- **Ignoring dependencies:** No — dependency order specified (P1 || P2 → P3 || P4 → P6; P5 independent).
- **Imbalanced decomposition:** No — balance check passed.

---

## Handoff to Innovation

Innovation's task: generate candidate variations for each piece's deliverable shape.

For **P1 (PRIMARY AXIS SPEC):**
- Vary group naming (alternative action-nouns like "Advance / Adjust / Coordinate" vs "Progression / Re-orientation / Coordination").
- Vary axis name ("Movement Family" vs "Move Family" vs "Movement Category").
- Vary the justification format (compact paragraph vs longer reasoning).

For **P2 (SECONDARY ATTRIBUTES SPEC):**
- Vary attribute enum values (e.g., richer `intent` values vs minimal).
- Vary how attribute-to-existing-organization mapping is presented.
- Vary whether `has_sub_actions` is a separate attribute or implicit-via-REVISIT-row.

For **P3 (PER-TYPE COORDINATE TABLE):**
- Vary table presentation (single 16-row table vs grouped by family with 3 sub-tables).
- Vary how illustrative auto_class is labeled (footnote vs inline marker).
- Vary REVISIT's sub-action documentation placement.

For **P4 (ALIGNMENT STATEMENT):**
- Vary prose vs table form.
- Vary depth (compact citations vs longer alignment explanations).

For **P5 (FF LIST):** mostly compositional; vary grouping.

For **P6 (RE-TEST):** vary verdict taxonomy granularity.

Innovation should aim for at least one variation per piece across (generic / focused / contrarian) and run Assembly Check across surviving candidates for cross-piece coherence.
