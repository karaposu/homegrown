# Decomposition: finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Input: sensemaking.md (3 commits + 5-piece pre-sketched handoff with P1 frontmatter overlap noted) + exploration.md (50-finding corpus + 7 redesign dimensions). Test the cut: P4 (style rules + frontmatter) overlaps P1 (universal base + frontmatter). Determination-mechanism check on type-discriminator. Materialization-carve-out should be noted in P1, not own piece.

---

## Step 1 — Coupling Topology

### Work-elements

| # | Element |
|---|---|
| E1 | Universal base structure (frontmatter + 5 universal sections + conditional sections + out-of-scope statement) |
| E2 | Per-type Finding-body schemas (4 variants: Decision / Spec-modification / Recommendation / Loop-diagnose) |
| E3 | Edit-specification sub-form schema (required fields + type-specific extensions + embedding rules) |
| E4 | Strengthened style rules (concrete-edit-form / anchored-cross-reference / verb-specificity / scope-specificity) |
| E5 | Frontmatter extension (new `type:` key + observed keys to codify) |
| E6 | Migration plan + CONCLUDE-protocol-update brief |

### Pairwise coupling

| Pair | Coupling | Reasoning |
|---|---|---|
| E1 ↔ E2 | **Strong** | Universal base hosts the Finding-body section; variants fill the slot. Slot-definition coupling. |
| E1 ↔ E3 | Moderate | Edit-spec sub-form lives within Finding-body or Next Actions of universal base |
| E1 ↔ E4 | Strong | Style rules apply throughout universal-base sections |
| E1 ↔ E5 | **Strong (subsumes)** | Frontmatter IS part of universal base. E5 is properly inside E1. |
| E1 ↔ E6 | Moderate | Migration plan references universal base content |
| E2 ↔ E3 | **Strong** | Each typed variant embeds edit-spec sub-form when applicable (Spec-modification always; Loop-diagnose usually) |
| E2 ↔ E4 | Moderate | Style rules apply within typed variants too |
| E2 ↔ E5 | Weak | Variants are Finding-body shapes; frontmatter is separate concern |
| E2 ↔ E6 | Weak | Migration applies uniformly across types |
| E3 ↔ E4 | Moderate | Concrete-edit-form style rule cites sub-form as enforcement mechanism |
| E3 ↔ E5 | Weak | Sub-form fields are separate from frontmatter |
| E3 ↔ E6 | Weak | |
| E4 ↔ E5 | Weak | Style rules may mention frontmatter but mostly independent |
| E4 ↔ E6 | Weak | |
| E5 ↔ E6 | Moderate | Migration plan references new frontmatter (`type:` key for routing) |

### Coupling map and boundaries

```
HIGH-COUPLING CLUSTERS
  α: {E1, E5}  ─ universal base subsumes frontmatter (E5 merges into E1)
  β: {E2, E3}  ─ per-type variants + edit-spec sub-form (sub-form embeds in variants)
  γ: {E4}      ─ cross-cutting style rules
  δ: {E6}      ─ downstream migration plan

LOW-COUPLING VALLEYS
  α | β        ─ universal base vs per-type Finding-body content
  α/β | γ      ─ structural template vs cross-cutting rules
  α/β/γ | δ    ─ template content vs migration plan
```

### Tested alternate cuts

| Alternate | Verdict |
|---|---|
| Strict 5-piece per Sensemaking pre-sketch (E1+E5 split) | REJECTED — frontmatter appears in both P1 and P4 in sensemaking's pre-sketch; cleaner to merge E5 into E1 |
| Per-type-variant separate pieces (split E2 into 4) | REJECTED — over-decomposition; the 4 variants share structural design considerations (required vs optional sections; edit-spec sub-form embedding); keeping unified preserves analytic unity |
| Coarse merge (E3 sub-form into E2 variants) | REJECTED — sub-form is cross-type composable; merging loses its independence |

**Chosen cut:** 5 pieces with E5 merged into E1. Cleaner than sensemaking's pre-sketch.

---

## Step 2 — Boundaries Top-Down

- **B1: E1 | E2** — universal base vs per-type variants. Strong-coupling-at-interface but clean cut (slot-definition + slot-fill).
- **B2: E2 | E3** — per-type variants vs cross-type sub-form. Strong coupling (sub-form embeds) but clean conceptual distinction.
- **B3: (E1+E2+E3) | E4** — structural pieces vs cross-cutting style rules.
- **B4: (E1+E2+E3+E4) | E5(=E6 in renumbered)** — template content vs migration plan.

4 cuts → 5 pieces.

---

## Step 3 — Boundaries Bottom-Up (Validation)

### Atoms

| Atom | Belongs to |
|---|---|
| a1 — define frontmatter keys (canonical + extended) | P1 |
| a2 — define 5 universal sections + roles | P1 |
| a3 — define conditional sections (Changes from Prior / Inherited Commitments Re-test / Source Input / Next Actions) | P1 |
| a4 — state out-of-scope: materialization-record is a SEPARATE artifact | P1 |
| a5 — `type:` key semantics + default-when-missing behavior | P1 |
| a6 — Decision Finding-body schema | P2 |
| a7 — Spec-modification Finding-body schema | P2 |
| a8 — Recommendation Finding-body schema | P2 |
| a9 — Loop-diagnose Finding-body schema | P2 |
| a10 — edit-spec required base fields (target_path / target_anchor / operation / current_text or new_text / rationale / reversibility) | P3 |
| a11 — edit-spec type-specific extensions (yaml-key / sequence / etc.) | P3 |
| a12 — embedding rules (inline in Finding-body OR referenced from Next Actions) | P3 |
| a13 — example edit-spec block | P3 |
| a14 — concrete-edit-form style rule | P4 |
| a15 — anchored-cross-reference style rule | P4 |
| a16 — verb-specificity style rule | P4 |
| a17 — scope-specificity style rule | P4 |
| a18 — preserve canonical hedging/gate-specificity/one-decision-per-paragraph | P4 |
| a19 — future-only migration policy | P5 |
| a20 — CONCLUDE-procedure-update brief for the follow-up inquiry | P5 |

Atoms map cleanly. Confidence: HIGH — top-down and bottom-up agree.

---

## Step 4 — Question Tree

### P1 — Universal Base Structure (subsumes frontmatter)

**Question:** What sections does EVERY new-template finding have regardless of content-type, what's in the frontmatter, and what's explicitly out-of-scope?

**Verification criteria:**
- [ ] Frontmatter schema with canonical (status/model/effort/refines/supersedes/corrects) + extended (type/related/diagnoses/verdict/continues_from/compares_with) keys; each key's type + semantics specified
- [ ] `type:` key semantics: 4 values (decision / spec-modification / recommendation / loop-diagnose); default when missing (recommendation: "decision" as default; or HALT and ask user)
- [ ] 5 universal sections specified with role:
  - `## Question` (restates from `_branch.md`)
  - `## Finding Summary` (committed-summary; written before Finding-body)
  - `## Finding` (the Finding-body slot — typed variant fills this per P2)
  - `## Reasoning` (why this over alternatives)
  - `## Open Questions` (four subsections: Monitoring / Blocked / Research Frontiers / Refinement Triggers)
- [ ] Conditional sections specified:
  - `## Changes from Prior` (when frontmatter has refines/supersedes/corrects)
  - `## Inherited Commitments Re-test` (when Synthesis Trigger fires)
  - `## Next Actions` (when finding proposes changes; MUST/COULD/DEFERRED)
  - `## Source Input` (per canonical rules)
- [ ] Out-of-scope statement: materialization-record is a SEPARATE artifact per the 2026-04-28_14-13 prior finding; the new template does NOT include Pre-Implementation Contract / Tiny Plan / Risk Scan / Post-Implementation Trace / Outcome / Follow-up sections; pointer to `docs/materialization_lifecycle.md`
- [ ] Section ordering: frontmatter → title → Changes-from-Prior (conditional) → Question → Finding Summary → Finding-body-variant → Inherited Commitments Re-test (conditional) → Next Actions (conditional) → Reasoning → Open Questions → Source Input (conditional)

### P2 — Per-Type Finding-Body Schemas

**Question:** For each of the 4 content-types, what is the required and optional internal structure of the Finding section?

**Verification criteria:**

- [ ] **Decision variant**: required sections — Surrounding context (1-3 paragraphs) / Decision committed (what was decided) / Trade-offs / Alternatives killed. Optional: examples.
- [ ] **Spec-modification variant**: required sections — Target spec (file path + scope) / What changes (high-level summary) / Per-edit specs (uses P3 edit-spec sub-form, one per edit) / Migration notes (canonical + runtime locations if applicable). Optional: rationale paragraph per edit.
- [ ] **Recommendation variant**: required sections — Ranked top-N (primary + alternates) / Per-rank: operation-fit summary + conditional reasoning ("right pick when...") + tradeoff vs siblings + commitment scale / User-decision question (explicit). Optional: honorable mentions; pre-filtered candidates.
- [ ] **Loop-diagnose variant**: required sections — Correction Chain Summary (prior-path + corrected-path + human correction excerpt + what changed) / Failure Trail (what happened stage-by-stage) / Failure Hypotheses (with evidence + confidence per hypothesis) / Failure Attribution Summary (table) / Maintenance Candidates (uses P3 edit-spec sub-form when proposing spec changes) / Diagnostic Verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE). Optional: Self-reference acknowledgment.
- [ ] Each variant notes which sections are REQUIRED vs OPTIONAL with reasoning
- [ ] Each variant notes how the P3 edit-spec sub-form embeds (mandatory for Spec-modification's Per-edit specs; usually present in Loop-diagnose's Maintenance Candidates; optional in others)
- [ ] Each variant has an example mini-table-of-contents showing the expected structure

### P3 — Edit-Specification Sub-Form Schema

**Question:** What is the structured schema for any concrete edit-block within a finding, providing structural enforcement of the user's "missing exact-line edits" complaint?

**Verification criteria:**
- [ ] Required base fields (with type per field):
  - `target_path:` (string) — exact file path
  - `target_anchor:` (string) — section heading / line range / regex-anchor
  - `operation:` (enum) — ADD / REPLACE / DELETE / RESTRUCTURE
  - `current_text:` (verbatim block; required for REPLACE and DELETE; "—" for ADD)
  - `new_text:` (verbatim block; required for ADD, REPLACE, RESTRUCTURE; "—" for DELETE)
  - `rationale:` (one-line) — why this edit
  - `reversibility:` (one-line) — how to undo
- [ ] Optional type-specific extensions:
  - `yaml_key:` (for frontmatter edits) — key being modified
  - `sequence_position:` (for procedure edits) — where in step sequence
  - `precondition:` (for conditional edits) — when does this edit apply
- [ ] Embedding rules: sub-form appears in Finding-body inline (preferred) OR referenced from Next Actions with explicit anchor (e.g., "Apply the REPAIR specified in Per-edit specs §3.2"); never describe the edit only in prose
- [ ] Example block: a fully-filled example showing the sub-form rendered in markdown
- [ ] Required vs optional per finding type:
  - Spec-modification type: REQUIRED for every proposed edit
  - Loop-diagnose type: REQUIRED for every Maintenance Candidate that proposes a spec change
  - Decision type: OPTIONAL (decisions usually don't include edits)
  - Recommendation type: OPTIONAL (typically only when recommending a migration)

### P4 — Strengthened Style Rules

**Question:** What style rules enforce ambiguity reduction at the structural level (extending the canonical style rules)?

**Verification criteria:**
- [ ] **Concrete-edit-form rule:** any Next Actions "What:" item describing an edit (verbs: edit, update, modify, refine, repair, add-to, remove-from) must (a) reference a P3 edit-spec sub-form block elsewhere in the finding, OR (b) include the sub-form inline. Verb-only descriptions are defects.
- [ ] **Anchored-cross-reference rule:** any reference to a section/paragraph/label within the same finding must use the section heading OR a descriptive name introduced earlier. Workspace scaffolding labels (Q1.1-f, M1, H1, P3) are defects unless introduced as named anchors in an earlier section of the same finding.
- [ ] **Verb-specificity rule:** vague action verbs (update / refine / address / improve / handle) must be followed by exact what changes. "Update spec" is a defect; "Add a Trace Expectations subsection after line 35 with the content from §3" is correct.
- [ ] **Scope-specificity rule:** scope references (surrounding paragraphs / various sections / the existing pattern / related areas) must be enumerated or anchored. "The surrounding paragraphs" without anchor is a defect; "Paragraphs 2-5 of §1.4" is correct.
- [ ] Preserve canonical style rules: hedging-specificity (vague hedges = defects); gate-specificity (time-bound / condition-bound / observable); one-decision-per-paragraph; plain-language-first.
- [ ] State the enforcement model: rules apply at compile-time during CONCLUDE; rule violations flagged as FAIL during structural check

### P5 — Migration Plan + CONCLUDE-Procedure-Update Brief

**Question:** How does the project transition from canonical template to new template, and what's the brief for the follow-up procedure-update inquiry?

**Verification criteria:**
- [ ] Future-only migration policy: existing 50 findings stay as historical record; not re-formatted
- [ ] Template-version marker: new template applies starting from inquiry IDs created after the date this finding ships (or some explicit cut-over marker)
- [ ] Backward-compat note for downstream readers: agents reading old findings must NOT assume new-template sections exist; old findings are historical
- [ ] CONCLUDE-procedure-update brief (the follow-up inquiry's scope):
  - Layer commitment: PROCESS (the procedure inside conclude.md needs updating)
  - Required updates: section reading order, template-variant selection by `type:` key, structural-check rules for new style rules, default behavior when `type:` is missing
  - Recommended next-inquiry shape: structural-check rules; example structural-check failures; integration with existing CONCLUDE Step 2 (Compile the finding)
- [ ] Type-selection mechanism documented: frontmatter `type:` key; CONCLUDE reads at compile time; default behavior when missing (recommended: HALT and ask user; alternative: default to "decision")

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 → P2 | Universal base provides Finding-body slot definition; variants fill the slot | structural | one-way (slot defined) |
| P3 → P2 | Edit-spec sub-form embeds in typed variants (especially Spec-modification + Loop-diagnose) | dependency | one-way (variants depend on sub-form) |
| P3 → P4 | Sub-form is the enforcement mechanism that concrete-edit-form style rule cites | dependency | one-way |
| P4 → P1 | Style rules apply within universal-base sections | constraint | one-way |
| P4 → P2 | Style rules apply within typed variants | constraint | one-way |
| P5 → all | Migration plan references new template content; CONCLUDE-update is downstream | aggregation | one-way |
| P1 → P5 | Universal base's `type:` key requires CONCLUDE-procedure update to select variant | dependency | one-way |

### Assumptions-not-data check

| Piece | Assumption | Explicit? |
|---|---|---|
| P1 | Universal sections from canonical have value (corpus shows 100% adoption) | ✓ via verification criterion |
| P1 | Materialization-record is OUT-of-scope (per 2026-04-28 prior finding) | ✓ explicit out-of-scope statement |
| P2 | 4-type taxonomy is right grain (committed in Sensemaking SV6) | ✓ via Sensemaking handoff |
| P2 | Each variant has stable sections derivable from corpus patterns | ✓ verification criteria require corpus evidence |
| P3 | Edit-spec is composable across types | ✓ via P3 verification criteria |
| P4 | Style rules can be enforced via structural check (cross-referencing P3 sub-form) | ✓ via concrete-edit-form rule |
| P5 | Future-only migration is acceptable (committed in Sensemaking) | ✓ explicit policy |

No hidden assumptions.

---

## Step 6 — Dependency Order

### For Innovation phase (elaboration)

```
                      P5 (independent — can elaborate in parallel with all)

P3 ─────┬────► P2 (variants embed sub-form)
        │
        └────► P4 (concrete-edit-form rule cites sub-form)

P1 (independent at universal base; depends on P2 for slot-fill reference)

Recommended elaboration order: P3 → P1 → P2 → P4 → P5
```

P3 (edit-spec sub-form) is the foundational schema; it's referenced by P2 (variants embed it) and P4 (style rules cite it). Elaborate P3 first.

P1 (universal base) is mostly independent; can be elaborated after P3 since its description of conditional sections may reference sub-form embedding.

P2 (per-type variants) depends on both P3 (sub-form) and P1 (slot definition).

P4 (style rules) depends on P3 (concrete-edit-form rule cites sub-form).

P5 (migration plan) is downstream; references everything but doesn't constrain content.

### For Critique phase

All pieces tested independently against the 5 user-named failure classes (F1-F5) from exploration.

### For user execution (after the finding ships)

1. Read recommendation in finding
2. Follow-up inquiry: PROCESS-layer update of `~/.claude/skills/protocols/conclude.md` to adopt the new template (per P5's CONCLUDE-procedure-update brief)
3. New findings starting from after the procedure-update use the new template
4. Existing 50 findings stay as-is

---

## Step 7 — Self-Evaluate (Full 7 Dimensions)

| Dimension | Status | Notes |
|---|---|---|
| **Independence** | PASS | Each piece's question is answerable via declared interfaces |
| **Completeness** | PASS | Universal base (P1) + per-type variants (P2) + edit-spec sub-form (P3) + style rules (P4) + migration (P5) cover the whole template-redesign problem; materialization-carve-out and type-discriminator-mechanism both explicit |
| **Reassembly** | PASS | All 5 pieces answered → new template spec + CONCLUDE-update brief + migration policy = complete redesign |
| **Tractability** | PASS | P1 ~25-30 lines; P2 ~40-50 lines (4 variants × 10 lines each); P3 ~15-20 lines + example; P4 ~15-20 lines; P5 ~15-20 lines |
| **Interface clarity** | PASS | 7 interfaces all one-way; assumptions explicit; no hidden coupling |
| **Balance** | PASS | P2 is largest (4 variants) but proportional; others roughly equal |
| **Confidence** | PASS | Top-down (cluster analysis) + bottom-up (atom-cohesion) agree |

### Determination-Mechanism Check

Load-bearing concept with runtime determination: **content-type discriminator**. Determined by frontmatter `type:` key at CONCLUDE-compile time. P1 covers the discriminator definition (frontmatter schema + key semantics + default behavior); P2 covers what happens per-type; P5 covers the CONCLUDE-procedure-update needed to select variant. Mechanism is FULLY in the spec. ✓ — Missing Pieces (failure mode 4) avoided.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Decomposition | ✗ avoided — Sensemaking fully clarified before this step (3 commits, 6 ambiguities collapsed) |
| 2. Wrong Boundaries | ✗ avoided — alternates tested (strict-Sensemaking-pre-sketch / per-type-variant-split / coarse-merge); chose cut at low-coupling points |
| 3. Hidden Coupling | ✗ avoided — assumptions-not-data check applied per piece |
| 4. Missing Pieces | ✗ avoided — determination-mechanism (type-discriminator); materialization-carve-out; future-only migration policy all explicit |
| 5. Over-Decomposition | ✗ avoided — 5 pieces; each non-trivial; merged Sensemaking's E5 into E1 to prevent fragmentation |
| 6. Ignoring Dependencies | ✗ avoided — elaboration order specified (P3 → P1 → P2 → P4 → P5) |
| 7. Imbalanced Decomposition | ✗ avoided — proportional |

### Self-Assessment

**PROCEED.** 5 well-bounded pieces; clean interfaces; dependency order specified; all 7 self-evaluation dimensions PASS; determination-mechanism (type discriminator) explicit; materialization-carve-out explicit. Ready for Innovation to produce concrete content per piece (frontmatter schema; per-type variant section lists; edit-spec sub-form fields + example; strengthened style rule text; migration policy + CONCLUDE-update brief).
