# Exploration: finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Mode: blended (artifact for corpus + canonical template; possibility for redesign dimensions). Entry: signal-first (seed = user's 5 named failure observations). Corpus target: 20+ finding.md files plus the canonical template at `/Users/ns/.claude/skills/protocols/conclude.md`.

---

## Territory Overview

Four coupled regions:

1. **The canonical template** — defined in `/Users/ns/.claude/skills/protocols/conclude.md` ("Finding template" + "Style rules" + "Size-adaptive application" sections). Single-shape with size-adaptive guidance only; no content-type discriminator.
2. **The corpus of produced findings** — 50 finding.md files across `devdocs/inquiries/`. Length 157–15,686 lines, median ~288, mean ~615 (skewed by one mega-outlier).
3. **The 5 named failure classes** from the user: materialization-unsuited; missing exact-line edit specifics; misleading "what to edit" instructions; persistent ambiguity; bullet-only Finding section despite varied content.
4. **The redesign-dimension space** — possibility-mode territory: content-type taxonomy, per-type section schemas, edit-specification contract, style rules to reduce ambiguity, structural-vs-prose content typing.

Cycles run: 2 + jump-scan (quantitative corpus pattern grep).

---

## Region 1 — The canonical template (current state)

Source: `/Users/ns/.claude/skills/protocols/conclude.md`.

### Specified sections (in order)

| # | Section | Required? | Notes |
|---|---|---|---|
| 1 | Frontmatter | yes | `status`, `model`, `effort`, `refines/supersedes/corrects` (optional) |
| 2 | `# Finding: [title]` | yes | H1 with inquiry name |
| 3 | `## Changes from Prior` | conditional | when frontmatter has refines/supersedes/corrects |
| 4 | `## Question` | yes | restates from `_branch.md` |
| 5 | `## Finding Summary` | yes | bullet points; "write BEFORE the Finding body" |
| 6 | `## Finding` | yes | "the full answer"; "numbered subsections when length > ~100 lines"; otherwise prose |
| 7 | `## Inherited Commitments Re-test` | conditional | when Synthesis Trigger fires |
| 8 | `## Next Actions` | conditional | MUST / COULD / DEFERRED, each with What/Who/Gate/Why |
| 9 | `## Reasoning` | yes | why this over alternatives; kills with reasoning |
| 10 | `## Open Questions` | yes | Monitoring / Blocked / Research Frontiers / Refinement Triggers |
| 11 | `## Source Input` | conditional | required for correction/refinement; optional otherwise |

### Specified style rules

- **Hedging specificity** — vague hedges are defects.
- **Cross-reference format** — full path on first reference; bare name on subsequent.
- **Gate specificity** — triggers must be time-bound / condition-bound / observable.
- **One decision per paragraph** — split if multiple decisions in one paragraph.
- **Anchored references** — workspace scaffolding labels (P1, M1, Q1) must be dropped OR introduced; descriptive name on each subsequent reference.

### Size-adaptive guidance

- Short findings (≤100 lines): may skip optional sections.
- Long findings (>100 lines): must include applicable optional sections.

### What the template DOES NOT specify (load-bearing gaps)

- **No content-type discriminator.** The template is single-shape regardless of whether the finding's deliverable is a spec edit, a strategic decision, a diagnosis of a prior failure, a recommendation packet, or a materialization record.
- **No schema for edit specifications.** "What:" entries in Next Actions are free-form — no required structure (file:line / before/after / scope-anchor / exact-content).
- **No structure inside the Finding section.** Description says "numbered subsections when length > 100 lines"; otherwise prose-or-bullets at author's discretion. The size-trigger doesn't address content-shape variation.
- **No materialization-record sections.** The materialization domain has its own shape (Pre-Implementation Contract / Tiny Plan / Risk Scan / Post-Implementation Trace / Outcome / Follow-up) that's nowhere in the canonical template.
- **No diagnostic-finding sections.** loop_diagnose findings consistently add Correction Chain Summary / Failure Hypotheses / Failure Attribution Summary / Diagnostic Verdict / Maintenance Candidates — none in the canonical template.

**Confidence:** confirmed (direct reading of conclude.md).

---

## Region 2 — Corpus analysis (50 findings)

### Length distribution

- Count: 50
- Min: 157 lines
- Median: ~288 lines
- Mean: ~615 lines (skewed by one 15,686-line outlier)
- Max: 15,686 lines (mega-outlier; out of normal scope)
- Most findings: 200-500 lines (the actual working range)

### Section frequency (top 25 across 50 findings)

| Section | Count | Notes |
|---|---|---|
| `## Question` | 50 | 100% — universal |
| `## Reasoning` | 50 | 100% — universal |
| `## Open Questions` | 50 | 100% — universal |
| `## Finding Summary` | 50 | 100% — universal |
| `## Source Input` | 49 | 98% |
| `## Finding` | 48 | 96% — **2 findings have no Finding section** (anomaly) |
| `## Next Actions` | 47 | 94% |
| `## Changes from Prior` | 12 | 24% — used when refining priors |
| `## Diagnostic Verdict` | 5 | 10% — loop_diagnose pattern (custom) |
| `## Relationships` | 4 | 8% — for finding's place in inquiry network |
| `## Goal` | 3 | 6% |
| `## Correction Chain Summary` | 3 | 6% — loop_diagnose-only |
| `## Vocabulary stack` | 2 | 4% — for terminology-heavy findings |
| `## Maintenance Candidates` | 2 | 4% — loop_diagnose-only |
| `## Failure Hypotheses` | 2 | 4% — loop_diagnose-only |
| `## Failure Attribution Summary` | 2 | 4% — loop_diagnose-only |

### Non-canonical sections observed (22+ distinct)

Beyond the canonical template, the corpus has invented sections to fit content-type needs:

- **Diagnostic-finding shape** (loop_diagnose): Correction Chain Summary / Failure Hypotheses / Failure Attribution Summary / Diagnostic Verdict / Maintenance Candidates.
- **Materialization-record shape** (per `materialization_record.md` template in the 2026-04-28_14-13 finding): Pre-Implementation Contract / Tiny Plan / Risk Scan / Post-Implementation Trace / Outcome / Follow-up.
- **Other one-offs**: Surrounding context (multiple variants), Spawned Children, Self-reference acknowledgment, Selections / Selection, Runs, Vocabulary stack, "This Diagnostic Itself Might Be Wrong."

**This is direct evidence the single-shape template is being adapted ad-hoc per content-type.** Authors invent the right sections for their content; the template doesn't acknowledge or codify those adaptations.

### Frontmatter key variety

Beyond the canonical `status / model / effort / refines / supersedes / corrects`:

| Key | Count | Notes |
|---|---|---|
| `status` | 50 | universal |
| `related` | 32 | very common — relationship to sibling findings |
| `refines` | 8 | canonical |
| `corrects` | 6 | canonical |
| `diagnoses` | 4 | loop_diagnose marker (not in canonical list) |
| `verdict` | 2 | inquiry-verdict at frontmatter level |
| `continues_from` | 2 | branch lineage |
| `compares_with` | 2 | A/B-comparison findings |
| `from_nav_direction`, `depends_on`, `confirms`, `compares` | 1 each | one-offs |

`related` is the most common non-canonical key (32/50) — relational metadata is a real need not captured by the canonical refines/supersedes/corrects triad.

**Confidence:** confirmed (direct grep across all 50 findings).

### Edit-specificity check (the user's main complaint)

How many findings include concrete edit blocks (before/after, current/repaired, explicit "replace X with Y")?

- **2/50 findings (~4%) use explicit before/after edit blocks.** The 2026-05-14_15-00 finding's REPAIR of /innovate is the cleanest exemplar — has "Current text:" / "Repaired text:" blocks for each spec-edit.
- **The other 48 findings describe edits in prose** in the Finding body, then reference them abstractly from Next Actions ("Apply the REPAIR above", "Refine the X spec per Part one").
- **Workspace labels in Next Actions (Q1/M1/H1 etc.)** — 3/50 findings cite them; the labels are not anchored back to introducing sections in the same finding, requiring readers to trace.

This is the user's complaint validated quantitatively. The canonical template doesn't REQUIRE concrete-edit-form, so 96% of findings use abstract references. When the deliverable is "edit X spec," the user must reconstruct the change manually.

### Findings that handle edits well (the 4%)

- `2026-05-14_15-00__find_innovate_spec_regression`: explicit "Current text" / "Repaired text" blocks for each of B3/B4/B5. Sections numbered. Diff shown in code-fence. Migration paragraph in Changes from Prior. Reads as if it were already executable.
- `2026-04-28_14-13__materialization_trace_record_location`: shows the EXACT proposed Trace Expectations markdown content in a code-fence inside Finding body. Next Actions reference it.

### Findings that handle edits poorly (the 96%)

- `2026-05-13_07-16__is_mapping_required_core_of_explore`: Next Actions say "Refine the /explore reference per Part one above" — reader must flip back to find Part one's prose description of the new opening; no explicit before/after.
- `2026-05-09_11-54__decomposition_value_audit`: Next Actions cite "(Q1.1-f)" / "(Q1.3-a)" — workspace labels not introduced as named anchors anywhere; reader must trace the alphanumeric label back to its origin.

**Confidence:** scanned (5 deep reads + grep across all 50).

---

## Region 3 — The 5 named failure classes (corpus-grounded)

| # | User complaint | Corpus evidence | Frequency |
|---|---|---|---|
| **F1** | **Not suitable for materialization-type things** | Materialization-record findings invented their own non-canonical sections (Pre-Implementation Contract / Tiny Plan / Trace / Outcome / Follow-up); the canonical template has no place for them | corpus shows the adaptation; template doesn't acknowledge it |
| **F2** | **Missing exact-line edit specifics** (full prompt change lines) | Only 2/50 findings use explicit before/after blocks; the other 48 use prose descriptions | 96% of findings exhibit this |
| **F3** | **Misleading "what to edit" instructions** | Common pattern: Next Actions reference Finding-body content abstractly ("Apply the REPAIR above") OR cite undefined workspace labels (Q1.1-f, M1) without anchored intro | systemic |
| **F4** | **Persistent ambiguity** | Hedges like "future X protocol," "various sections," "the surrounding paragraphs" appear without specificity; CONCLUDE's existing style-rules try to prevent this but rules apply post-hoc to author judgment | the rules exist; the structure doesn't enforce them |
| **F5** | **Bullet-only Finding section despite varied content** | Finding section gets bullets, tables, paragraphs, code-blocks, numbered subsections all at author's discretion; no content-shape commitment | template description is "prose or numbered subsections at length"; doesn't address shape diversity |

All 5 user complaints are evidenced by the corpus. The failures are not author-skill failures — they are TEMPLATE failures (the template doesn't enforce the structure that would prevent them).

---

## Region 4 — Candidate redesign dimensions (possibility mode)

Completeness-first: enumerate dimensions before novel ones.

### Dimension A — Content-type taxonomy

The corpus shows authors adapting per content-type. A taxonomy would acknowledge this and codify the variants:

Possible content-types (from corpus evidence):

1. **Strategic decision** — settles a structural/process choice (e.g., decomposition_value_audit, decompose_pipeline_position). Bulk of corpus.
2. **Spec rewrite** — rewrites or restructures a discipline / protocol spec (e.g., explore_what_does_it_actually_need_bloat_reframe, is_mapping_required_core_of_explore).
3. **Spec edit / REPAIR** — concrete edits to spec text with before/after (e.g., find_innovate_spec_regression).
4. **Recommendation / ranked-list** — produces a ranked recommendation with conditional reasoning (e.g., rename_td_critique, next_discipline_candidate).
5. **Loop diagnose / correction** — diagnoses a prior failure; has Failure Hypotheses / Maintenance Candidates / Diagnostic Verdict (e.g., loop_diagnose__memory_ambiguity_in_metaloop_ladder).
6. **Materialization record** — pre-implementation contract + tiny plan + trace + outcome (e.g., materialization_trace_record_location).
7. **Definitional / identity** — settles what a thing IS (e.g., is_mapping_required_core_of_explore, project_identity_and_milestone_ordering).
8. **Question-design / inquiry-shape** — answers a meta-question about how to structure inquiries (e.g., meta_state_artifact_purpose_and_alternatives, ab_test_inquiry_protocol).

A content-type discriminator would let the template specify per-type sections.

### Dimension B — Edit specification schema (for any "edit X" content)

Schema-grade requirements for any finding whose deliverable includes spec edits:

```
For each proposed edit:
  - target_path: <exact file path>
  - target_anchor: <section heading / line range / regex search-anchor>
  - operation: ADD | REPLACE | DELETE | RESTRUCTURE
  - current_text: <verbatim block, or "(no existing text — new insertion)">
  - new_text: <verbatim block, or "(deletion)">
  - rationale: <one-line why>
  - reversibility: <how to undo>
```

Optional: diff format (unified-diff syntax) for complex multi-location edits.

### Dimension C — Structured Finding section (content-type-aware)

Instead of "prose or numbered subsections at author's discretion," the Finding section could have content-type-specific structure:

- For Strategic decision: Decision / Trade-off / Alternatives killed
- For Spec rewrite: New shape / What changes / Migration notes / Per-edit specs (Dimension B)
- For Spec edit / REPAIR: Per-edit specs (Dimension B) only
- For Recommendation: Ranked top-N / Per-rank conditional reasoning / User-decision question
- For Loop diagnose: Failure trail / Hypotheses / Attribution / Maintenance Candidates / Diagnostic Verdict
- For Materialization record: Pre-impl Contract / Tiny Plan / Risk Scan / Post-impl Trace / Outcome / Follow-up
- For Definitional: Concept definition / Boundary / Examples
- For Question-design: Question shape / Constraints / Recommendation

### Dimension D — Strengthened style rules

Extend or replace current style rules to address F3 and F4 specifically:

- **Concrete-edit form rule.** Any Next Actions item describing "edit X" must reference an edit-specification block (per Dimension B) elsewhere in the finding, OR include the before/after inline.
- **Anchored-cross-reference rule.** Any reference to a section/paragraph/label in the SAME finding must use the section's heading, not a workspace label. "Per the Maintenance Candidates section below" not "Per (Q1.1-f)".
- **Verb-specificity rule.** Vague action verbs ("update", "refine", "address") must be followed by what specifically changes. "Update spec" is a defect; "Add a Trace Expectations subsection after line 35 with the content from §3" is not.
- **Scope-specificity rule.** "The surrounding paragraphs" / "various sections" / "the existing pattern" are defects unless followed by an explicit enumeration or anchor.

### Dimension E — Frontmatter schema extension

Current canonical frontmatter: `status / model / effort / refines / supersedes / corrects`. Corpus shows additional needed keys:

- `related` (32/50 findings use it) — non-load-bearing siblings
- `diagnoses` (4/50) — for loop_diagnose findings
- `continues_from` (2/50) — branch lineage
- `compares_with` (2/50) — A/B comparisons
- `verdict` (2/50) — inquiry-level verdict at frontmatter
- `type` (proposed) — content-type discriminator per Dimension A

A frontmatter `type:` key would let CONCLUDE pick the right template variant. Values from Dimension A taxonomy.

### Dimension F — Adaptive size-vs-shape gating

Current template gates only on size (≤100 lines vs >100). Reality has more axes:

- **Size axis**: short / medium / long.
- **Edit-content axis**: no-edits vs has-edits (triggers Dimension B schema).
- **Diagnostic axis**: standard vs loop_diagnose (triggers Failure Hypotheses / Diagnostic Verdict).
- **Materialization axis**: theory-loop vs materialization-record (triggers Pre-Impl Contract / etc.).

A multi-axis gating model would replace the single size-axis.

### Dimension G — Cross-domain analogues

Adjacent frameworks for inspiration:

- **ADR (Architecture Decision Record)** — Context / Decision / Consequences. Concise; deliberate single-shape; clear ownership of each section.
- **RFC (Request For Comments / IETF style)** — Abstract / Introduction / Requirements / Implementation / Security Considerations / Appendices. Modular; each section has a job.
- **Code-review patch** — File-by-file diff with @@ markers; explicit before/after; no ambiguity about scope.
- **Technical spec (Google design doc style)** — Goals / Non-goals / Design / Trade-offs / Open Questions. Goal/non-goal pairing is useful for scope discipline.
- **Pull request template (GitHub-style)** — What changed / Why / Tests / Checklist. Standardized; enforces accountability.

These are reference patterns for the per-content-type variants.

---

## Signal Log

| # | Signal | Type | Probed? |
|---|---|---|---|
| **S1** | Only 2/50 findings (4%) use concrete before/after edit blocks despite many being spec-edit type | Density/Tension | ✓ |
| **S2** | 22+ distinct non-canonical sections in the corpus — authors invent shape per content-type | Density | ✓ (via grep) |
| **S3** | loop_diagnose findings consistently add Correction Chain Summary / Failure Hypotheses / etc. — a stable variant pattern | Density | ✓ |
| **S4** | Materialization records have their own shape (Pre-Impl Contract / Tiny Plan / etc.) entirely outside the canonical template | Tension | ✓ |
| **S5** | Frontmatter shows variety beyond canonical (`related` 32/50; `diagnoses` 4/50; `verdict` 2/50) | Density | ✓ |
| **S6** | Length distribution: median ~288, mean ~615, max 15,686 — extreme variation | Density | ✓ |
| **S7** | The user's 5 failure complaints are corpus-grounded; not author-skill issues but TEMPLATE-structure issues | Tension | ✓ |
| **S8** | Existing style rules in CONCLUDE (anchored-refs, gate-specificity, hedging-specificity) target the right failures but aren't structurally enforced | Absence | ✓ |
| **S9** | No prior inquiry has tackled finding-template redesign — fresh territory | Absence | ✓ (grep) |

No deferred signals; saturation reached on these axes.

---

## Confidence Map

| Region | Confidence | Justification |
|---|---|---|
| Canonical template contents | **confirmed** | Direct reading of conclude.md |
| Corpus section frequencies | **confirmed** | grep across all 50 findings |
| Corpus length distribution | **confirmed** | wc -l + awk |
| Frontmatter key variety | **confirmed** | grep across frontmatter blocks |
| The 5 user-named failure classes are corpus-grounded | **confirmed** | Cross-referenced against sample reads + grep |
| Edit-specificity gap (96% of findings lack before/after blocks) | **confirmed** | Direct grep |
| Content-type taxonomy (8 candidates surfaced) | **scanned** | From corpus pattern recognition; further refinement possible in sensemaking |
| Edit-specification schema (Dimension B) | **scanned** | Design-level proposal; concretized in innovation |
| Cross-domain analogues (Dimension G) | **scanned** | Common patterns from outside the project |
| Whether one template-with-variants OR multiple templates (per type) is the right resolution | **unknown** | Sensemaking territory |
| Whether the redesign should be incremental (extend canonical) or rewrite (new template) | **unknown** | Sensemaking territory; depends on user's risk appetite |

---

## Frontier State

**Stable.** Jump-scan was the quantitative corpus grep — added confidence to dimensions and exposed the 22+ non-canonical sections that confirm the F1 / F5 complaints. Discovery rate declining.

Bounded gaps:
- The right granularity of the content-type taxonomy (8 candidates surfaced; some may merge or split during sensemaking).
- The right resolution model (one template with variant gates? multiple templates? a meta-shape with required-section list per content-type?).
- The migration path from current findings (do existing findings get re-formatted? or only future findings use the new template?).

---

## Gaps and Recommendations — Frontier Questions for Downstream

**To Sensemaking:**

1. **Anchor the dominant frame for the redesign.** Three plausible frames:
   - **Adaptive single-template:** keep one template; add content-type gates that activate per-type sections (similar to current size-adaptive gating but multi-axis per Dimension F)
   - **Multiple templates:** define one canonical template per content-type; CONCLUDE picks variant by frontmatter `type:`
   - **Composable building blocks:** a library of typed section primitives; each finding picks the primitives that fit (with required minimums per type)
   Which frame minimizes complexity while addressing the 5 failure classes?

2. **Test the content-type taxonomy at granularity.** 8 candidates may be too many. Coupling check: do "spec rewrite" and "spec edit" share enough section needs to merge? Do "strategic decision" and "definitional" share enough? Sensemaking commits the right grain.

3. **Frame-exit Completeness on "edit specification."** When a finding's "What:" item says "edit X spec," does it mean spec-file-text-edit, spec-folder-structure-edit, spec-section-reorganize, or spec-procedure-change? Each implies different schema fields. Apply Frame-exit Completeness to disambiguate "edit."

4. **Status Quo Bias on the canonical template.** The template IS the status quo. Test in both directions: keeping it (extend with rules) vs. replacing it (new template). The 4% concrete-edit-form rate is structural evidence the template doesn't work; the 100% adoption of Question/Reasoning/Open Questions shows it has real value.

5. **Phase/Calibration-State.** The project is in active development; many findings are still being produced. A template change applies to all FUTURE findings; existing findings stay as-is unless explicitly re-formatted. Migration scope must be settled.

**To Decomposition:**

- Natural partition: (a) content-type taxonomy commitment; (b) per-type section schema; (c) edit-specification contract; (d) extended style rules; (e) frontmatter extension; (f) migration plan; (g) CONCLUDE protocol update path.
- The Determination-mechanism check: when CONCLUDE compiles a finding, HOW does it pick the type? Frontmatter `type:` key? Inferred from `_branch.md`'s Layer Commitment? User-specified at CONCLUDE invocation? Determination mechanism must be in the spec.

**To Innovation:**

- Produce the concrete per-type section schemas (the right answer here is likely templates with required + optional sections per type).
- Produce the edit-specification schema (Dimension B fields) as concrete YAML or markdown structure.
- Produce concrete examples: take 1 existing finding and re-write it in the new template, to validate the design.
- Apply Domain-Transfer (ADR / RFC / code-review-patch / tech-spec) to inform per-type variants.

**To Critique:**

- Adversarially test the new template against the corpus: pick 5 findings of different types; would the new template have prevented their observed failures? Would it have introduced new ones?
- Test honesty-about-tradeoffs: more structure per type increases the template's complexity. Does the user accept that complexity?
- Test the materialization-finding case specifically — does the new template handle it cleanly, or does materialization still need its own artifact (the 2026-04-28 finding settled materialization-record as a distinct file)?

---

## Telemetry

- **Mode:** blended (artifact for template + corpus; possibility for redesign dimensions)
- **Entry point:** signal-first (user's 5 named failure observations)
- **Cycles run:** 2 + jump-scan (quantitative grep)
- **Candidates surfaced (possibility mode):**
  - 8 content-type taxonomy candidates (Dimension A)
  - Edit-specification schema (Dimension B; 7 fields)
  - Per-type Finding-section structures (Dimension C; 7 variants sketched)
  - 4 extended style rules (Dimension D)
  - Frontmatter extension (Dimension E; 5 additional keys observed)
  - Multi-axis size-vs-shape gating (Dimension F; 4 axes)
  - Cross-domain analogues (Dimension G; 5 patterns)
- **Signals detected:** 9 (S1–S9); probed: 9; deferred: 0
- **Frontier state:** stable
- **Discovery rate trend:** declining (cycle 1 surfaced template + corpus pattern; cycle 2 added quantitative grep; jump-scan added cross-domain analogues but no new dimension category)
- **Convergence criteria:** frontier stability ✓; declining discovery rate ✓; bounded gaps ✓
- **Jump-scan performed:** ✓ (quantitative corpus grep — section frequencies, frontmatter keys, edit-block count)
- **Failure modes checked:** Premature depth / Surface-only / False confidence / Premature termination / Re-exploration / Completeness bias / Open→closed drift / Silent boundary-discovery / Negative-space silent drop / Inadequate per-item depth — all ✓ avoided

## Self-Assessment

**PROCEED.** Territory mapped: canonical template + corpus quantitative analysis + 5 failure classes corpus-grounded + 7 redesign dimensions surfaced. The redesign will likely commit to: (a) content-type taxonomy (probably consolidated to 4-6 types); (b) edit-specification schema; (c) per-type section variants; (d) extended style rules. Remaining work — committing the resolution model (single-template-with-variants vs multiple-templates vs composable-blocks), settling the taxonomy granularity, and producing concrete new-template content — is Sensemaking + Decomposition + Innovation territory.
