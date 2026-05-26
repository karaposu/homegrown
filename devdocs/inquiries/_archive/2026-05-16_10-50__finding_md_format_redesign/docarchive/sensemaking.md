# Sensemaking: finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Input: exploration.md (canonical template + 50-finding corpus quantitative analysis: median 288 lines, 4% concrete edit blocks, 22+ non-canonical sections per content-type, 7 redesign dimensions A-G). 6 cognitive anchors to extract: dominant frame / content-type taxonomy / edit-spec scope / Status Quo Bias / Phase-fit / load-bearing concept test. 9 perspectives; Frame-exit gating fires; Phase/Calibration-State required. User said "dive deep and think hard" — premature stabilization is the named risk.

---

## SV1 — Baseline Understanding

The user has used the current CONCLUDE template across 50 findings. The template specifies 5 universal sections + conditionals; corpus reality has 22+ non-canonical sections invented per content-type. Only 4% of findings use concrete before/after edit blocks despite many having spec-edit deliverables. The user's 5 named failure classes (materialization-unsuited / missing exact edits / misleading edit instructions / ambiguity / bullet-only Finding) are template-structure failures, not author-skill issues.

The redesign must commit: an architecture frame (single-template-with-gates / multiple-templates / composable-blocks), a content-type taxonomy at the right grain, an edit-specification schema, strengthened style rules, and a migration plan. The Sensemaking commit becomes the conceptual model Decomposition partitions.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** Must address all 5 user-named failure classes STRUCTURALLY, not via author-judgment. Style rules don't work without structural enforcement.
- **C2** Must work for the corpus's actual content variety (strategic decisions / spec edits / recommendations / loop diagnoses / definitional / materialization). The template can't pretend they're all one shape.
- **C3** Substrate-honest — structure enforced by template-text and CONCLUDE compile-time checks, not aspirational tooling.
- **C4** Must support migration: existing 50 findings stay as historical record; new template applies to future findings.
- **C5** Preserve what works: 100% adoption of Question / Finding Summary / Reasoning / Open Questions / Finding sections shows real value.
- **C6** Must compose with the broader CONCLUDE protocol; the procedure update is a follow-up but shouldn't require radical rewrite.
- **C7** Reduce per-finding authoring cost long-term; template complexity is its own burden.

### Key Insights

- **K1 The corpus has ALREADY adapted.** 22+ non-canonical sections invented bottom-up. A redesign should formalize what authors are doing; not impose top-down. The adaptations are evidence of true variety.

- **K2 96% concrete-edit-form failure rate is structural.** Style rules in `conclude.md` are documentation-layer (suggestion); the template doesn't ENFORCE concrete-edit-form. Enforcement must shift to structure (required schema fields when content includes spec edits).

- **K3 Materialization-record is a DIFFERENT ARTIFACT, not a finding variant.** The 2026-04-28 finding settled this: materialization gets its own `materialization_record.md` for Compact mode and separate `materialization_trace.md` for Standard/Full. Forcing materialization into finding.md template is the wrong shape. The new finding template should explicitly EXCLUDE materialization-record content, with a pointer to the separate artifact.

- **K4 loop_diagnose findings have a STABLE custom shape** across 3-5 instances: Correction Chain Summary / Failure Hypotheses / Failure Attribution Summary / Diagnostic Verdict / Maintenance Candidates. This is a true content-type variant, not noise. The canonical template should acknowledge it.

- **K5 "Dive deep and think hard" signals user expects thorough redesign**, not a patch. The corpus evidence supports thorough; the 96% failure rate isn't a fixable-with-rule-tweak problem.

- **K6 The 5 universal sections (Question/Finding Summary/Reasoning/Open Questions/Finding) have 100% adoption** — strong evidence they're load-bearing. Don't break them.

- **K7 Edit-specification is COMPOSABLE** — it's a sub-structure that ANY finding type with edit-content might need (Decision findings can recommend edits; Loop-diagnose findings produce maintenance-candidate edits; Spec-modification findings ARE edits). Not per-type concern; cross-cutting concern.

- **K8 Bullet-only Finding section is CONTENT-SHAPE FREEDOM that fails.** Authors default to bullets even when structured content (tables, code-fences, numbered sub-sections, edit blocks) fits better. Restricting structure PER content-type provides the right scaffolding.

- **K9 Frontmatter is the natural discriminator** for content-type. The canonical template already uses frontmatter for status/refines/corrects. Adding `type:` is a small extension; reuses existing mechanism.

### Structural Points

- **SP1** Canonical template = single-shape (with size-adaptive gating).
- **SP2** Corpus reality = adapted per content-type (22+ non-canonical sections).
- **SP3** Universal sections (5): Question, Finding Summary, Finding, Reasoning, Open Questions.
- **SP4** Conditional sections (3): Changes from Prior, Inherited Commitments Re-test, Source Input.
- **SP5** Custom sections (22+) per content-type.
- **SP6** Frontmatter: canonical (status/model/effort/refines/supersedes/corrects) + observed (related/diagnoses/verdict/continues_from/compares_with).
- **SP7** 8 content-type candidates from exploration: strategic-decision / spec-rewrite / spec-edit-REPAIR / recommendation / loop-diagnose / materialization-record / definitional / question-design.

### Foundational Principles

- **P1 Structure enforces what style rules only suggest.** Move enforcement to structure.
- **P2 Honor what authors already do.** The corpus is evidence; don't fight adaptations; codify them.
- **P3 Don't break the 100%-universal sections.** They're working.
- **P4 Materialization is a DIFFERENT ARTIFACT.** Separate concern; carve out.
- **P5 Edit-specification is composable.** Sub-form across types, not per-type.
- **P6 Reduce per-finding authoring cost long-term** by giving the right shape per content-type, not by requiring authors to invent it.

### Meaning-Nodes

- **MN1 "Finding"** — the canonical artifact at end of SIC/ESDIC. Stable identity.
- **MN2 "Content-type"** — the discriminator that shapes which sections apply. New concept (codifies what corpus shows).
- **MN3 "Edit-specification"** — composable sub-form for "this is exactly what changes." New concept (codifies what the 2026-05-14_15-00 finding did manually).
- **MN4 "Universal vs typed sections"** — base + type-specific extensions.
- **MN5 "Materialization-record"** — separate artifact, NOT a finding-variant.

---

## SV2 — Anchor-Informed Understanding

The redesign decomposes into 5 structural pieces:

1. **Universal base** — 5 universal sections + frontmatter (extended) + conditional sections (Changes from Prior / Inherited Commitments Re-test / Source Input / Next Actions).
2. **Content-type taxonomy** — the discriminator on the Finding body.
3. **Typed Finding-body variants** — one per content-type.
4. **Edit-specification sub-form** — composable schema for any "edit X" content.
5. **Strengthened style rules** — enforce concrete-edit-form / anchored-references / verb-specificity / scope-specificity.

Materialization-record is EXPLICITLY EXCLUDED — separate artifact.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Three candidate architectures from exploration:
- **(a) Adaptive single-template:** single template with content-type-conditional sections. Works if variations are small; fails when variations are large (loop-diagnose adds 4-5 stable custom sections — bolting them into a single template via if-gates makes it unreadable).
- **(b) Multiple templates:** one per content-type; CONCLUDE picks variant. Clean separation; more files to maintain.
- **(c) Composable building blocks:** primitives library; authors assemble. Most flexible; highest author cognitive load.

**Best workable model:** HYBRID — BASE + TYPED FINDING-BODY VARIANTS. The base has universal sections; each type has a Finding-body variant. Type goes in frontmatter; CONCLUDE picks Finding-body variant. Lower complexity than full multi-template; richer than pure single-template.

**T1 anchor:** Hybrid base+variants is simpler than multi-template AND richer than single-template; corpus reality fits.

### Human / User

- User said "dive deep and think hard" — wants thorough.
- User specifically named **materialization** as a category where current template fails. The 2026-04-28 prior already settled materialization-record as a separate artifact. Redesign should HONOR that — don't drag materialization back into finding.md.
- User vocabulary: "finding" + "format" + "different shape and length and complexity" — implies content-type without using the term. Acceptable to coin.

**U1 anchor:** Materialization is separable; redesign carves it out; doesn't re-litigate.

### Strategic / Long-term

- Project produces ~1 inquiry per few hours; finding.md is the primary deliverable.
- Type-discrimination value compounds: as more findings accumulate, typed authoring pays off.
- Future-only migration: simplest; existing 50 stay as historical record.

**S1 anchor:** Future-only migration; existing 50 stay as historical record.

### Risk / Failure

- **Over-engineering risk:** 8 types × custom sections × edit-schema → high author cognitive load. Template becomes a burden.
- **Under-engineering risk:** just adding edit-spec schema without addressing F1/F5 leaves the user's complaints partially unfixed.
- **Breaking-working risk:** changing universal sections breaks the 100%-adoption sections. Don't touch them.

**R1 anchor:** Preserve 5 universal sections; vary only the Finding-body; add edit-spec sub-form.

### Resource / Feasibility

- One-time cost: ~1 session to write new template spec + 1 follow-up to update CONCLUDE procedure.
- Ongoing cost: per-finding authoring slightly higher initially (type-pick + variant-aware authoring); amortizes with familiarity.

**F1 anchor:** Bounded one-time cost; ongoing cost amortizes.

### Ethical / Systemic

N/A. Systemic dimension covered under Strategic.

### Definitional / Internal Consistency

- "Finding" identity is stable — verdict-compilation at end of SIC/ESDIC. New types don't change WHAT a finding is; they vary HOW its Finding body is structured.
- "Edit specification" is a coined term but maps to existing pattern (2026-05-14_15-00's Current text / Repaired text blocks). Codifies what's already in the corpus.
- "Content-type" is a coined discriminator. The user's "different shape and length and complexity" phrasing implies it; user can adopt the term naturally.

**IC1 anchor:** Type discriminator + edit-spec are grounded; new coined terms map to existing patterns.

### Definitional / Frame-exit Completeness (gating fires)

**Gating predicate check:**
- (i) Inherited multi-value terms? — YES: "edit" (file-text vs section-reorg vs procedure vs add-new), "content-type" (8 candidates), "finding" (the artifact vs the analysis vs the verdict).
- (ii) Used across ≥2 distinct values within inquiry's committed structures? — YES: exploration's Dimension A 8-row table has different propositions per type; Dimension B 7-field edit-schema asserts multi-axis structure.

**Gating fires.** Applying 4 meta-categories:

**1. Existence Enumeration on "edit."** Project-wide referents:
- **TYPE axis:** file-text edit / section-reorganize / file-structure (add/remove/move file) / procedure-change (modify sequence of steps in a discipline) / add-new-file / frontmatter edit / cross-file edit.
- **SCALE axis:** line-level / section-level / file-level / cross-file.
- **REVERSIBILITY axis:** trivially-reversible / git-revertable / multi-step-reverse.

"Edit" has 3 axes (TYPE × SCALE × REVERSIBILITY). Dominant case across the corpus: file-text edit at line-section scale. Schema optimizes for this; provides extension points for minorities.

**2. Role Assessment.** What role does each TYPE play?
- File-text edits = dominant case (most spec changes); needs Current/New text blocks.
- Section-reorganize = restructures within a file; needs current-structure + new-structure description.
- Add-new-file = new artifact; needs full content + target path.
- Procedure-change = modifies sequence; needs current-sequence + new-sequence.
- Frontmatter edit = yaml-key changes; needs key + new-value.

Re-locate: a base schema with type-dispatched fields handles all. Most fields (target_path / target_anchor / operation / new_text or current_text / rationale) are common; type-specific fields are optional extras.

**3. Verdict Rigor on "single edit schema."**
Counter: each edit type needs different fields → multiple schemas.
Counter-counter: a base schema with type-dispatched fields handles all without duplication. Most edits ARE file-text at line-section scale; minority cases get optional extensions.
Verdict: ONE BASE SCHEMA + TYPE-DISPATCHED FIELDS. PASS.

**4. Residual / Coverage Justification.** Any edit-type not captured?
- Procedure-change could be handled by section-reorganize + file-text combined.
- Materialization edits are OUT-of-scope (handled by separate materialization-record artifact).
- Acceptable coverage.

**Frame-exit anchors:**
- **FE1** "Edit" has 3 axes; schema covers all via base + extensions.
- **FE2** Dominant case is file-text edit at line-section scale; schema optimizes for this.
- **FE3** Materialization edits are OUT-of-scope; live in materialization-record.

**Content-type Frame-exit (the 8 candidates):**

Pairwise coupling test on the 8:
- strategic-decision ↔ definitional: both commit a concept/decision; Finding body shape (Decision / Trade-off / Alternatives) is very similar. **MERGE candidate.**
- spec-rewrite ↔ spec-edit-REPAIR: both produce spec changes; share edit-specification schema; differ in scope (whole-section vs targeted-edit). Same Finding-body shape with edit-spec sub-form. **MERGE into "spec-modification".**
- question-design (3-5 findings): answers meta-questions about inquiry structure. Folds into "definitional" cleanly (both answer "what IS X"). **MERGE.**
- loop-diagnose: distinct stable shape across corpus instances. **KEEP.**
- materialization-record: SEPARATE ARTIFACT, not a finding-variant. **EXCLUDE.**
- recommendation: ranked list with conditional reasoning + user-decision. Distinct shape from decision (which is committed not ranked). **KEEP.**

**Consolidated taxonomy: 4 types.**
- **T1 Decision** (merges strategic-decision + definitional + question-design): settles a structural/process/concept choice; committed not ranked.
- **T2 Spec-modification** (merges spec-rewrite + spec-edit-REPAIR): modifies a discipline/protocol spec; uses edit-spec sub-form.
- **T3 Recommendation**: ranked list with conditional reasoning; expects user adjudication.
- **T4 Loop-diagnose**: failure attribution + maintenance candidates; correction-chain pattern.

Plus **materialization-record CARVED OUT** (separate artifact).

**FE4 anchor:** 4-type taxonomy.

### Phase / Calibration-State (required)

- **Calibration the project has:** 50 findings; 5 stable corpus adaptations; users familiar with canonical template.
- **Calibration NOT yet:** no automated tooling to detect content-type at compile time.
- **Early-stage default:** user-declared type via frontmatter `type:` key. CONCLUDE reads frontmatter and picks variant. Manual but reliable.

**PC1 anchor:** Frontmatter-declared `type:` key; manual; reliable at current dev phase.

**Migration scope:**
- All 50 existing findings stay as-is (historical record).
- New findings use new template from next inquiry forward.
- Template guidance includes: "Existing findings may not match this template; preserved as historical record."

**PC2 anchor:** Future-only migration.

### Self-Reference Blindness Check

External grounding sources:
- 50-finding corpus statistics (observable)
- User's testimony (5 named failures)
- Cross-domain analogues (ADR / RFC / code-review-patch / tech-spec / PR-template)
- Canonical template text (`conclude.md`)
- Existing-template adoption-rate data (96% lack concrete-edit-form)

Multi-source. Not pure self-reference. ✓

---

## SV3 — Multi-Perspective Understanding

Major shifts from SV2:

1. **Architecture model committed:** HYBRID base+variants (not pure single, not pure multi).
2. **Content-type taxonomy committed at 4 types:** Decision / Spec-modification / Recommendation / Loop-diagnose. Materialization-record CARVED OUT.
3. **Edit-spec schema:** one base + type-dispatched fields; not per-type schemas.
4. **Replacement is surgical:** preserve universal sections; replace only the Finding-body and add edit-spec sub-form.
5. **Migration is future-only:** existing 50 are historical record.
6. **Frontmatter `type:` is the discriminator;** CONCLUDE picks variant.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What is the dominant architectural frame?

**Strongest counter-interpretation A (adaptive single-template):** "One template with content-type gates. Authors fill conditional sections per type. Simpler than multi-template."

**Why A fails (structural grounds):** the loop-diagnose variant adds 4-5 stable custom sections (Correction Chain Summary / Failure Hypotheses / Failure Attribution Summary / Diagnostic Verdict / Maintenance Candidates). Bolting them into a single template via conditionals makes the template unreadable; authors face a forest of "if type=X then include this section" rules. Single-template-with-large-conditionals violates the readability principle the canonical template tries to preserve.

**Strongest counter-interpretation B (multiple-templates):** "One template file per type; CONCLUDE picks variant. Explicit; clean separation."

**Why B partially works but is more complex than needed:** requires more files; new types need new template files; refactoring shared content (universal sections) requires editing N templates. Most of the template is SHARED (frontmatter + 5 universal sections + style rules). Duplicating shared content across N variant files is overhead.

**Resolution:** Hybrid base+variants. UNIVERSAL BASE shared across all types; FINDING-BODY VARIANT per type. CONCLUDE picks Finding-body variant from frontmatter `type:`. The Edit-spec sub-form is composable across types.

This is between (a) and (b): the universal sections behave like (a) (one shared template), and the Finding-body variants behave like (b) (typed). Best of both.

**Confidence:** HIGH.

**Resolution:** Hybrid base+typed-Finding-body-variants + composable edit-spec sub-form.

**What is fixed:** the architecture model.
**What is no longer allowed:** pure-single-template; pure-multi-template-with-no-shared-base.

### Ambiguity 2: Content-type taxonomy granularity?

**Strongest counter-interpretation:** Keep 8 from exploration. Don't merge.

**Why counter fails (structural grounds):** Pairwise coupling test shows:
- strategic-decision and definitional have nearly-identical Finding-body shapes (Decision / Trade-off / Alternatives). Maintaining two types with identical structure is duplication without value.
- spec-rewrite and spec-edit-REPAIR share the edit-spec sub-form; differ only in scope-of-edit. Same Finding-body shape.
- question-design has only 3-5 corpus instances; its shape overlaps "definitional" (both answer "what IS X").

Merging reduces template count from 8 to 4 without losing per-type fit.

**Confidence:** HIGH.

**Resolution:** 4 types — Decision / Spec-modification / Recommendation / Loop-diagnose. Plus materialization-record CARVED OUT (separate artifact).

**What is fixed:** taxonomy at 4 types.
**What is no longer allowed:** 8-type granularity; treating materialization as a finding type.

### Ambiguity 3: Edit-specification schema scope?

**Strongest counter-interpretation:** Per-type schemas (one for file-text, one for cross-file, one for procedure, etc.).

**Why counter fails (structural grounds):** Frame-exit Completeness on "edit" surfaced 3 axes (TYPE × SCALE × REVERSIBILITY). The dominant case (file-text edit at line-section scale) accounts for >80% of corpus edits. A base schema with type-dispatched fields handles all without duplication.

**Confidence:** HIGH.

**Resolution:** One base edit-spec schema with required fields (target_path / target_anchor / operation / current_text or new_text / rationale / reversibility) + optional type-specific extensions (yaml-key for frontmatter edits; sequence for procedure edits). Schema is composable into any Finding body.

**What is fixed:** schema scope and structure.
**What is no longer allowed:** N-separate-schemas-with-no-shared-base.

### Ambiguity 4: Status Quo Bias on canonical template (tested both directions)

**Direction 1 — keep canonical:** 5 universal sections have 100% adoption (real value). Keeping costs nothing.

**Direction 2 — replace canonical:** corpus shows 96% concrete-edit-form failure rate. Template doesn't enforce. Style rules don't enforce. The TEMPLATE IS THE FAILURE.

**Status Quo Bias check:** Would the answer change if canonical template had no history? — Yes. The legitimate question is "what template best fits the corpus's actual content shapes and the user's stated needs?" Defending the canonical against evidence is the failure mode.

**Resolution:** PARTIAL replace, surgical. KEEP the 5 universal sections (they work). REPLACE the Finding-body section (typed variants). ADD edit-spec sub-form. ADD strengthened style rules. EXTEND frontmatter.

**Confidence:** HIGH.

**What is fixed:** surgical replacement (keep universal sections; replace Finding-body; add edit-spec).

### Ambiguity 5: Migration scope?

**Strongest counter-interpretation:** Re-format all 50 existing findings to match new template.

**Why counter fails (structural grounds):** Cost is enormous (would require ~50 mini-inquiries to re-author each one in the new format). The audit-trail value of preserving them as-is is high. Future-only migration is the right scope.

**Confidence:** HIGH.

**Resolution:** Future-only. Existing 50 stay as historical record. Template guidance notes "existing findings may not match; preserved as historical record."

**What is fixed:** future-only migration.

### Ambiguity 6 — Load-bearing concept test on key terms

- **"Finding":** user's actual language ✓
- **"Edit specification":** coined for this inquiry; maps to existing pattern (2026-05-14_15-00 "Current text / Repaired text" blocks). Acceptable codification.
- **"Content-type":** coined discriminator; user said "different shape and length and complexity" implying it. Acceptable.

**Confidence:** HIGH on user-language alignment.

**Resolution:** Terms are grounded; new coined terms map to existing corpus patterns and user vocabulary.

---

## SV4 — Clarified Understanding

After 6 ambiguity collapses, the structure stabilizes:

- **Architecture:** Hybrid base+typed-Finding-body-variants + composable edit-spec sub-form.
- **Content-type taxonomy:** 4 types (Decision / Spec-modification / Recommendation / Loop-diagnose) + materialization-record carved out.
- **Edit-spec schema:** one base with 5 required fields + type-specific extensions.
- **Replacement:** surgical (keep 5 universal sections; replace Finding-body; add edit-spec + strengthened style rules + frontmatter extension).
- **Migration:** future-only.
- **Terms:** grounded in user language or existing corpus patterns.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- **F1** 4-type taxonomy: Decision / Spec-modification / Recommendation / Loop-diagnose.
- **F2** Hybrid base+variants architecture.
- **F3** 5 universal sections preserved (Question / Finding Summary / Finding-body-variant / Reasoning / Open Questions).
- **F4** Composable edit-spec sub-form.
- **F5** Materialization-record carved out (separate artifact).
- **F6** Frontmatter `type:` key as discriminator.
- **F7** Future-only migration.
- **F8** Strengthened style rules at structural level.

### Eliminated

- 8-type granularity (over-fragmentation).
- Pure single-template-with-conditional-sections (corpus doesn't fit).
- Pure multi-template-with-no-shared-base (over-complex; duplicates universal).
- Including materialization-record in finding template (already separate artifact).
- Replacing universal sections (they have 100% adoption value).
- Re-formatting existing 50 findings (cost too high).

### Remaining viable (sub-questions for Innovation to settle)

- The exact section list per typed Finding-body variant.
- The edit-spec schema's exact fields (base + type-specific extensions).
- The strengthened style rules' exact wording.
- Frontmatter extension's exact keys + semantics.
- How CONCLUDE detects type at compile time (frontmatter `type:` key; default if missing?).

---

## Phase 5 — Conceptual Stabilization

### Three Core Commits

- **COMMIT 1 — Hybrid base+typed-variants architecture.** UNIVERSAL BASE preserved across all findings (frontmatter + 5 universal sections + conditional sections). Finding-body section becomes typed-variant by frontmatter `type:` key.

- **COMMIT 2 — 4-type taxonomy.** Decision / Spec-modification / Recommendation / Loop-diagnose. Each has a typed Finding-body shape. Materialization-record is OUT-of-scope (separate artifact per 2026-04-28 prior).

- **COMMIT 3 — Composable edit-specification sub-form.** Required structured schema (target_path / target_anchor / operation / current_text or new_text / rationale / reversibility) for any finding whose content includes spec edits. Applied within Finding body inline OR referenced from Next Actions. Sub-form is the structural enforcement of the user's "missing exact-line edits" complaint.

### Cross-cutting

- **X1** Universal sections preserved (Question / Finding Summary / Reasoning / Open Questions / + Finding-body-variant).
- **X2** Strengthened style rules at structural level: concrete-edit-form (any "edit X" item must reference an edit-spec block or include one inline); anchored-cross-reference (no orphan workspace labels like Q1.1-f); verb-specificity (no "update", "refine", "address" without exact what); scope-specificity (no "surrounding paragraphs", "various sections" without enumeration).
- **X3** Frontmatter extension: `type` (new; discriminator) + `related` (codify the 32/50 corpus usage) + `diagnoses` (loop-diagnose) + `verdict` (inquiry-level verdict) + `continues_from` + `compares_with` + canonical `refines/supersedes/corrects` preserved.
- **X4** Future-only migration; existing 50 are historical record.

### Decomposition Handoff

The conceptual model partitions naturally into 5 pieces:

- **P1 — Universal base structure.** The frontmatter (with extended keys) + 5 universal sections + conditional sections + their interaction.
- **P2 — Per-type Finding-body schemas.** 4 typed variants (Decision / Spec-modification / Recommendation / Loop-diagnose). Each schema names required sections + optional sub-sections.
- **P3 — Edit-specification sub-form schema.** Required fields + type-specific extensions + how the sub-form embeds into a Finding-body.
- **P4 — Strengthened style rules + frontmatter extension.** Structural enforcement rules for ambiguity reduction + new frontmatter keys with semantics.
- **P5 — Migration plan + CONCLUDE-protocol-update brief.** Future-only migration; what changes in `~/.claude/skills/protocols/conclude.md`; the brief for the follow-up procedure-update inquiry.

5 pieces. Tractable.

---

## SV6 — Stabilized Model

**The committed conceptual model:**

The new finding.md format is a **hybrid architecture**: a UNIVERSAL BASE (frontmatter + 5 universal sections + conditional sections) plus 4 TYPED FINDING-BODY VARIANTS picked by a new frontmatter `type:` key (Decision / Spec-modification / Recommendation / Loop-diagnose). A composable EDIT-SPECIFICATION sub-form (5 required fields + extensions) plugs into any Finding body when the content includes spec edits, providing structural enforcement of the user's "missing exact-line edits" complaint.

**Materialization-record is OUT-of-scope** — it's a separate artifact already settled in the 2026-04-28 finding. The new finding template explicitly excludes materialization-record content with a pointer to the separate artifact.

**Strengthened style rules** enforce concrete-edit-form (any "edit X" item must reference an edit-spec block), anchored-cross-reference (no orphan workspace labels), verb-specificity (no vague action verbs), and scope-specificity (no vague scope references) — moving enforcement from documentation-layer to template-structure-layer.

**Migration is future-only.** Existing 50 findings stay as historical record. The new template applies from the next inquiry forward. CONCLUDE's procedure update (selecting the right Finding-body variant, applying the edit-spec sub-form schema) is a follow-up inquiry.

### Difference from SV1

| Axis | SV1 | SV6 |
|---|---|---|
| Frame | "what format?" — open | Hybrid base+typed-variants architecture |
| Content-type | Implicit (corpus adapts ad-hoc) | Explicit 4-type taxonomy via frontmatter `type:` |
| Edit specification | Free-form prose | Required structured schema (5 fields + extensions) |
| Materialization | Maybe-in-finding | Carved out — separate artifact |
| Migration | Unclear | Future-only; existing 50 historical |
| Style rule enforcement | Documentation-layer | Structure-layer |

---

## Telemetry — Saturation Check

| Indicator | Status |
|---|---|
| Perspective saturation | ✓ — 9 perspectives applied; Frame-exit Completeness produced 4 meta-category findings on "edit" axes + content-type consolidation |
| Ambiguity resolution ratio | 6/6 resolved at HIGH confidence; 0 OPEN |
| SV delta | SV1 (open) → SV6 (4-type hybrid architecture with edit-spec sub-form + future-only migration) — clear structural shift |
| Anchor diversity | All 5 anchor types represented (constraints C1-C7 / insights K1-K9 / structural points SP1-SP7 / principles P1-P6 / meaning-nodes MN1-MN5); from 9 perspectives |

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| Status Quo Bias | ✗ avoided — tested both directions explicitly; surgical replacement preserves what works (5 universal sections) and replaces what doesn't (Finding-body single-shape) |
| Premature Stabilization | ✗ avoided — user said "dive deep and think hard" was an explicit anti-premature signal; 9 perspectives + 6 ambiguities produced distinct anchors; no clarity arrived before testing |
| Anchor Dominance | ✗ avoided — multi-criterion support; no single anchor collapses the model |
| Perspective Blindness | ✗ avoided — Frame-exit Completeness + Phase/Calibration + Internal Consistency + Risk all produced distinct uncomfortable findings (e.g., merge 8 types to 4; materialization out-of-scope; surgical-not-radical replacement) |
| Clean Resolution Trap | ✗ avoided — counter-arguments stated and rebutted on structural grounds |
| Self-Reference Blindness | ✗ avoided — external grounding via corpus statistics + user testimony + cross-domain analogues + canonical template text + observable adoption-rate data |

### Self-Assessment

**PROCEED.** Conceptual model committed; 5-piece decomposition handoff prepared. Frame-exit Completeness applied with all 4 meta-categories (on both "edit" axes and content-type taxonomy). Phase/Calibration-State applied as required (future-only migration). Status Quo Bias tested both directions; surgical replacement is the verdict. Load-bearing concept test on key terms (Finding / Edit specification / Content-type) passed at HIGH confidence — all grounded in user vocabulary or existing corpus patterns.
