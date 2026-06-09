# Decomposition — per_phase_placement_failure_modes_with_distinguishing_header

## User Input

```text
12 pieces pre-articulated. Decompose into clusters; validate; map interfaces; order dependencies; self-evaluate.
```

---

## Step 1 — Coupling Topology

Four clusters:

**Cluster A — Block template + per-phase block drafts (4 pieces):**
- P-BLOCK-TEMPLATE (foundational; all block pieces depend on it)
- P-PHASE-0-BLOCKS (3 blocks: #1, #4, #8)
- P-PHASE-2-BLOCKS (2 blocks: #2, #3)
- P-PHASE-4-BLOCKS (2 blocks: #5, #6)
- P-CROSS-CUTTING-SECTION (1 block: #7 + the end-section)

**Cluster B — Spec-edit details (3 pieces):**
- P-THIN-OVERVIEW-TABLE (the §4 thin overview)
- P-INSERTION-POINTS (where each block goes)
- P-FROM-LINEAR-TO-OVERVIEW (the DIFF: delete current §4 detail; add overview + per-phase blocks)

**Cluster C — Compatibility (1 piece):**
- P-CROSS-REFERENCES-UPDATE (existing cross-refs continue to work)

**Cluster D — Framework + cross-spec (3 pieces):**
- P-FRAMEWORK-REFINEMENT-DRAFT (update text for the prior framework finding)
- P-CROSS-SPEC-EXTENSION-PLAN (how to apply to other disciplines)
- P-COST-ARTICULATION (honest cost summary)

Total: 12 pieces.

**Coupling map:**

```
[P-BLOCK-TEMPLATE] (foundational)
        ↓
[Cluster A: block-drafts × 4 (parallel)] → [P-INSERTION-POINTS]
[Phase 0, Phase 2, Phase 4, Cross-cutting]    ↓
        ↓                                  [P-THIN-OVERVIEW-TABLE]
[P-FROM-LINEAR-TO-OVERVIEW]                   ↓
        ↓                                  [Assembled edit]
[P-CROSS-REFERENCES-UPDATE] ←────────────────────┘

(independent track:)
[P-FRAMEWORK-REFINEMENT-DRAFT]
[P-CROSS-SPEC-EXTENSION-PLAN]
[P-COST-ARTICULATION] (depends on all)
```

---

## Step 2 — Boundaries

Natural cuts:
- **Per-block boundary:** each failure-mode block is independent text.
- **Per-phase boundary:** Phase 0 blocks together, Phase 2 blocks together, etc.
- **Template/instance boundary:** template is meta-form; instances are text.
- **Spec-edit/framework-update boundary:** local spec edit vs prior-finding update.
- **Cross-spec extension boundary:** other disciplines decoupled from the immediate edit.

All boundaries pass low-traffic test.

---

## Step 3 — Validate (Bottom-Up)

Atomic content per piece:
- P-BLOCK-TEMPLATE: italicized prefix + bold name + body structure — atomic.
- P-PHASE-0-BLOCKS: 3 concrete block texts (Wrong Dim, Dim Blindness, Axis Absence) — composite but tractable.
- P-PHASE-2-BLOCKS: 2 concrete blocks (Rubber-Stamping, Nitpicking) — composite, tractable.
- P-PHASE-4-BLOCKS: 2 concrete blocks (False Convergence, Eval Drift) — composite, tractable.
- P-CROSS-CUTTING-SECTION: section template + #7 block — atomic.
- P-THIN-OVERVIEW-TABLE: 4-column table with 8 rows + 1 cross-cutting row — atomic.
- P-INSERTION-POINTS: list of insertion coordinates — atomic.
- P-FROM-LINEAR-TO-OVERVIEW: DIFF — atomic.
- P-CROSS-REFERENCES-UPDATE: list of existing cross-refs + new resolution paths — atomic.
- P-FRAMEWORK-REFINEMENT-DRAFT: update text — atomic.
- P-CROSS-SPEC-EXTENSION-PLAN: per-sister-discipline mapping — atomic.
- P-COST-ARTICULATION: cost summary — atomic.

12 atoms / 12 pieces. **Confidence:** HIGH.

---

## Step 4 — Question Tree (compact)

### Cluster A — Template + blocks

**P-BLOCK-TEMPLATE.** *Q:* what is the per-phase failure-mode block template? *V:* matches refinement-note style + distinguishing wording. *Counter:* what if mirroring refinement-note pattern misleads (failure modes aren't "refinements")?

**P-PHASE-0-BLOCKS.** *Q:* concrete text for #1 / #4 / #8 at Phase 0? *V:* each block preserves current §4 entry's content; uses template; sits at the right step within Phase 0. *Counter:* what if Phase 0's existing 4 refinement notes + 3 failure modes feels overloaded?

**P-PHASE-2-BLOCKS.** *Q:* concrete text for #2 / #3 at Phase 2? *V:* preserve content; at the right point (#2 in Prosecution; #3 in Defense). *Counter:* what if the inverse-pair (#2 ↔ #3) loses visual proximity if split across sub-sections?

**P-PHASE-4-BLOCKS.** *Q:* concrete text for #5 / #6 at Phase 4? *V:* preserve content. *Counter:* none significant.

**P-CROSS-CUTTING-SECTION.** *Q:* end-section header + #7 block text? *V:* section before §6 Summary; uses template with "cross-cutting" prefix. *Counter:* what if cross-cutting is too generic — what if other modes are also partially cross-cutting?

### Cluster B — Spec edit details

**P-THIN-OVERVIEW-TABLE.** *Q:* 4-column table contents (# / Name / Fires at / Inverse-of)? *V:* 8 rows + 1 cross-cutting row; "Fires at" column links to per-phase locations. *Counter:* what if Inverse-of column is empty for most rows (only #2/#3 form a pair)?

**P-INSERTION-POINTS.** *Q:* exact insertion coordinates for each block? *V:* each per-phase block inserted AFTER existing refinement notes at the phase, BEFORE the phase's closing text. *Counter:* what if interleaving with refinement notes creates ordering ambiguity?

**P-FROM-LINEAR-TO-OVERVIEW.** *Q:* concrete DIFF — what's deleted from current §4 and what's added? *V:* current §4 entries deleted; thin overview table added; per-phase blocks moved to per-phase locations; cross-cutting section added before §6. *Counter:* what if the bulk-edit risks accidental content loss?

### Cluster C — Compatibility

**P-CROSS-REFERENCES-UPDATE.** *Q:* how do existing "see §4 #N" references continue to work? *V:* each existing cross-reference can be left as-is — §4 still exists (thinned to overview) and points to per-phase location. No cross-reference update needed at minimum; optional tightening to point directly at per-phase location. *Counter:* what if optional tightening introduces new cross-reference complexity?

### Cluster D — Framework + cross-spec

**P-FRAMEWORK-REFINEMENT-DRAFT.** *Q:* concrete update text for the prior framework finding adding "phase-affined operational guidance" content-type? *V:* update marked as 2026-06-09 addition; preserves original content; refines the mapping. *Counter:* what if the framework refinement contradicts the prior finding's self-application claim (the framework finding uses Hybrid in its own structure)?

**P-CROSS-SPEC-EXTENSION-PLAN.** *Q:* which failure modes in each sister discipline are phase-affined; how the pattern applies? *V:* per-discipline mapping with cross-cutting carve-outs identified. *Counter:* what if some sister disciplines don't have clear phase boundaries (e.g., `/innovate`'s 7 mechanisms are not phases)?

**P-COST-ARTICULATION.** *Q:* honest cost summary? *V:* edit footprint named; backward compatibility flagged; per-phase information density acknowledged. *Counter:* what if costs are higher than estimated?

---

## Step 5 — Interface Map

| From | To | What flows |
|---|---|---|
| P-BLOCK-TEMPLATE | All block-draft pieces | Template structure |
| All block-draft pieces | P-INSERTION-POINTS | Block content + phase locus |
| All block-draft pieces | P-THIN-OVERVIEW-TABLE | Per-phase distribution → "Fires at" column |
| P-THIN-OVERVIEW-TABLE + All block-drafts + P-CROSS-CUTTING-SECTION | P-FROM-LINEAR-TO-OVERVIEW | Full edit shape |
| P-FROM-LINEAR-TO-OVERVIEW | P-CROSS-REFERENCES-UPDATE | What's relocated → which cross-refs need check |
| The recommended pattern | P-FRAMEWORK-REFINEMENT-DRAFT | Content-type addition |
| The pattern | P-CROSS-SPEC-EXTENSION-PLAN | Cross-spec mapping |
| All Cluster A + B + C + D | P-COST-ARTICULATION | Per-piece cost data |

**Assumptions-not-data check.** Load-bearing hidden assumption: existing §4 entry content is unchanged — only relocated. If the relocation accidentally drops content, cross-references break. Backstop: Critique should verify P-FROM-LINEAR-TO-OVERVIEW preserves all content.

---

## Step 6 — Dependency Order

**Tier 1 (foundational):**
- P-BLOCK-TEMPLATE
- P-FRAMEWORK-REFINEMENT-DRAFT (independent)
- P-CROSS-SPEC-EXTENSION-PLAN (independent)

**Tier 2 (depends on Tier 1):**
- P-PHASE-0-BLOCKS
- P-PHASE-2-BLOCKS
- P-PHASE-4-BLOCKS
- P-CROSS-CUTTING-SECTION
(all four can run in parallel)

**Tier 3 (depends on Tier 2):**
- P-THIN-OVERVIEW-TABLE (knows per-phase distribution)
- P-INSERTION-POINTS (knows block content)

**Tier 4 (depends on Tier 2 + 3):**
- P-FROM-LINEAR-TO-OVERVIEW (the assembled DIFF)
- P-CROSS-REFERENCES-UPDATE

**Tier 5 (wrapping):**
- P-COST-ARTICULATION (depends on all)

No circular dependencies.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

**Independence.** Each piece answerable per its dependency edges. PASS.

**Completeness.** Coverage of the recommendation:
- Block template ✓
- Per-phase blocks ✓
- Cross-cutting section ✓
- Thin overview ✓
- Insertion points ✓
- DIFF ✓
- Cross-references ✓
- Framework refinement ✓
- Cross-spec extension ✓
- Cost articulation ✓

PASS.

**Reassembly.** Pieces + interfaces = the whole spec-edit recommendation + framework refinement + cross-spec plan? YES. PASS.

### Full 7-dimension

- Tractability: each piece text-fragment producible in one cycle. PASS.
- Interface clarity: dependencies explicit; assumptions-not-data check noted. PASS.
- Balance: per-piece complexity reasonable. PASS.
- Confidence: top-down and bottom-up agree 1:1. HIGH.

7/7 PASS.

### Failure-mode check

- Premature decomposition: NO (sensemaking SV6 stabilized).
- Wrong boundaries: NO.
- Hidden coupling: ONE flagged assumption (content preservation in P-FROM-LINEAR-TO-OVERVIEW); backstopped by Critique.
- Missing pieces: NO.
- Over-decomposition: BORDERLINE (12 pieces is moderate; each is small text; acceptable).
- Ignoring dependencies: NO.
- Imbalanced: NO.

---

## Final Deliverable

### Question Tree (summary)

```
Tier 1: P-BLOCK-TEMPLATE; P-FRAMEWORK-REFINEMENT-DRAFT; P-CROSS-SPEC-EXTENSION-PLAN
Tier 2: P-PHASE-0-BLOCKS; P-PHASE-2-BLOCKS; P-PHASE-4-BLOCKS; P-CROSS-CUTTING-SECTION
Tier 3: P-THIN-OVERVIEW-TABLE; P-INSERTION-POINTS
Tier 4: P-FROM-LINEAR-TO-OVERVIEW; P-CROSS-REFERENCES-UPDATE
Tier 5: P-COST-ARTICULATION
```

### Verdict

**PROCEED.** 7/7 PASS. 0 active failures. 1 borderline (over-decomposition; acceptable). 1 monitoring flag (content preservation in DIFF).

### Open question for Innovation

- Per piece: primary + Inversion-candidate.
- All Cluster A blocks must preserve current §4 entry's content — Innovation must use the current spec text as the substrate, not re-author from scratch.
- P-INSERTION-POINTS must specify line-precision insertion coordinates for the Edit tool to apply.
