---
status: active
model: claude-opus-4-7[1m]
effort: high
---
# Finding: finding.md Format Redesign — New Template Specification

## Question

The user observed structural failures across the existing finding.md corpus and asked for a redesign. The five named failure classes are:

1. **Materialization-unsuited** — the canonical template doesn't fit materialization-style content (concrete file edits with traces).
2. **Missing exact-line edit specifics** — findings describe edits in prose without showing what exactly to change.
3. **Misleading "what to edit" instructions** — references to changes without anchoring or specificity.
4. **Persistent ambiguity** — vague hedges, scope references, and verb choices that resist clarification.
5. **Bullet-only Finding section** — the Finding section uses bullets even when content variety (tables, code-fences, numbered structures) would fit better.

The inquiry's question: what new finding.md template structure addresses these failures? The framing was set at the **structural** layer — the meaning of "finding" is settled; the procedural CONCLUDE update is downstream. The corpus of 50 existing findings serves as evidence for pattern extraction.

The goal: a concrete new template specification — section list, schemas, content-type variants, style rules — that a follow-up CONCLUDE-procedure-update inquiry can adopt directly. After adoption, findings produced by the new template should let the user execute recommended actions without re-reading prior discipline outputs and without ambiguity about WHERE the edit goes or WHAT exactly to change.

## Finding Summary

- **The new template is a hybrid architecture: a UNIVERSAL BASE preserved across all findings, plus 4 TYPED FINDING-BODY VARIANTS selected by a new frontmatter `type:` key.** The universal base keeps what works (Question, Finding Summary, Finding, Reasoning, Open Questions — all at 100% corpus adoption); the typed variants fill the Finding-body section with content-type-appropriate structure.

- **The 4 content types are Decision, Spec-modification, Recommendation, and Loop-diagnose.** Consolidated from 8 candidates via pairwise coupling analysis. Each has a stable mini-TOC of required and optional sub-sections. The 50-finding corpus check confirmed 5/5 representative findings fit cleanly into one type.

- **A composable Edit-Specification sub-form provides structural enforcement of "exactly what to change."** Seven required base fields (`target_path`, `target_anchor`, `operation`, `current_text`, `new_text`, `rationale`, `reversibility`) plus four optional type-specific extensions (`yaml_key`, `sequence_position`, `precondition`, `target_paths`). The sub-form is REQUIRED for Spec-modification type and for Loop-diagnose maintenance candidates that propose spec changes; OPTIONAL for Decision and Recommendation. This is the structural fix for the user's #1 complaint — the corpus's 96% concrete-edit-form failure rate.

- **Materialization-record artifacts are explicitly CARVED OUT of the finding template.** They are a separate artifact per the prior `2026-04-28_14-13` finding. The new template's universal base includes an out-of-scope statement pointing to the materialization-record artifact (`materialization_record.md` for Compact mode; separate `desc.md` + `step_by_step_impl_plan.md` + `critic.md` + `materialization_trace.md` for Standard/Full modes). Materialization is real capability; it just doesn't belong inside finding.md.

- **Four new strengthened style rules apply at the template's structural level**, enforced by CONCLUDE compile-time checks: (a) Concrete-edit-form — any "edit X" action item must reference or include an Edit-Specification sub-form; (b) Anchored-cross-reference — workspace scaffolding labels (Q1.1-f, M1, H1) are defects unless explicitly introduced as named anchors in the same finding; (c) Verb-specificity — vague action verbs (update, refine, address) must be followed by exactly what changes; (d) Scope-specificity — scope references like "surrounding paragraphs" or "various sections" must be enumerated or anchored. The canonical style rules (hedging-specificity, gate-specificity, one-decision-per-paragraph, plain-language) are preserved.

- **The frontmatter is extended to formalize what the corpus already shows.** New required key: `template_version: 2` (auto-stamped by CONCLUDE) and `type:` (the variant discriminator). New optional keys codifying observed corpus usage: `related` (used in 32 of 50 corpus findings), `diagnoses` (4 of 50), `verdict` (2 of 50), `continues_from`, `compares_with`. Canonical keys preserved: `status`, `model`, `effort`, `refines`, `supersedes`, `corrects`.

- **Migration is future-only.** Existing 50 findings stay as historical record without the new marker; they're authored under canonical v1 and preserved as-is. The new template applies starting from the first inquiry compiled after the follow-up CONCLUDE-procedure-update inquiry ships. Backward-compat: agents reading findings should branch on `template_version` to know which structure to expect.

- **The next step is a single follow-up inquiry** — type `spec-modification`, target `~/.claude/skills/protocols/conclude.md`, with concrete per-edit specs covering Step 1 (Pipeline detection) + Step 2 (Compile the finding) + new structural-check rules + default-when-`type:`-missing behavior + backward-compat handling. The inquiry brief is in Next Actions § MUST below.

- **Two non-critical caveats are carried as Open Questions.** A 5th content-type could emerge in future corpus growth that doesn't fit Decision/Spec-modification/Recommendation/Loop-diagnose — refinement trigger documented. And until the follow-up CONCLUDE-update ships, findings authored under the new template must manually set `template_version: 2` since CONCLUDE doesn't auto-stamp yet.

## Finding

The user has been authoring findings under the canonical CONCLUDE template (defined in `/Users/ns/.claude/skills/protocols/conclude.md`) for ~50 inquiries. The canonical template specifies a single-shape structure: 5 universal sections + frontmatter + 3 conditional sections, with size-adaptive guidance for shorter/longer findings. The corpus shows authors have adapted it ad-hoc — 22+ non-canonical sections invented per content-type — and the adaptations reveal that the single-shape template doesn't fit the corpus's actual content variety.

The redesign is structural. The meaning of "finding" — the verdict-compilation artifact at the end of a SIC/ESDIC loop — is stable and not in question. The procedural update to CONCLUDE that adopts the new template is a downstream concern handled by a follow-up inquiry. This finding commits the template's structure.

### 1. Why the canonical template fails for several content types

The 50-finding corpus shows four distinct content shapes, each adapting the canonical template differently:

- **Decision findings** (the bulk of the corpus): commit a structural / process / concept choice. Universal sections fit well; minimal customization needed.
- **Spec-modification findings**: propose concrete edits to a discipline / protocol spec. The canonical template doesn't enforce a schema for "this is exactly what to change," so 96% of findings describe edits in prose. Only 2 of 50 (`2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause` and `2026-04-28_14-13__materialization_trace_record_location`) include explicit before/after edit blocks.
- **Recommendation findings**: produce a ranked list with conditional reasoning and a user-decision question. The canonical "bullets" guidance doesn't capture the ranked-with-conditions shape; authors invent it bottom-up (the recent rename_td_critique and next_discipline_candidate findings show this pattern emerging).
- **Loop-diagnose findings**: diagnose a failure in a prior SIC/ESDIC loop. The canonical template lacks Correction Chain Summary, Failure Hypotheses, Failure Attribution Summary, Maintenance Candidates, and Diagnostic Verdict sections that authors consistently add (4 of 4 loop-diagnose findings in the corpus invent these).

The canonical template provides no content-type discriminator. The size-adaptive guidance (≤100 lines vs >100) is the only built-in variation, and it doesn't address content-shape variation. Authors compensate by inventing sections, but the corpus-wide failure rate on concrete-edit-form (96%) shows that documentation-layer style rules don't enforce what the structure doesn't require.

### 2. The hybrid architecture: universal base + typed variants

The new template preserves what works (the 5 universal sections at 100% adoption) and adds typed variation where the corpus shows it's needed (the Finding-body section).

**Universal base** (preserved across all 4 types):

```text
frontmatter (YAML; extended schema below)
# Finding: [name]

## Changes from Prior            (CONDITIONAL — when refines/supersedes/corrects in frontmatter)
## Question
## Finding Summary
## Finding                       (TYPED VARIANT — selected by frontmatter `type:` key)
## Inherited Commitments Re-test (CONDITIONAL — when Synthesis Trigger fires)
## Next Actions                  (CONDITIONAL — when finding proposes changes)
## Reasoning
## Open Questions
## Source Input                  (CONDITIONAL — required for correction/refinement)
```

**Frontmatter schema** (extended):

```yaml
---
# REQUIRED
status: active                   # active | superseded | retracted
template_version: 2              # the new-template marker (canonical pre-redesign is v1; absent = v1)
type: decision                   # decision | spec-modification | recommendation | loop-diagnose

# RECOMMENDED
model: claude-opus-4-7[1m]       # model id used to author
effort: high                     # session-level effort

# CONDITIONAL
refines: <path>                  # path to prior finding being refined
supersedes: <path>               # path to prior finding being replaced
corrects: <path or list>         # path(s) being corrected
diagnoses: <path>                # path to inquiry being diagnosed (REQUIRED when type: loop-diagnose)

# OPTIONAL — relationship metadata codifying observed corpus usage
related: [<path>, <path>]        # sibling findings; non-load-bearing
continues_from: <path>           # branch lineage
compares_with: <path or list>    # A/B comparison targets
verdict: ACTIONABLE              # inquiry-level verdict (conventional for diagnostic findings)
---
```

**Materialization carve-out** (statement in the universal base spec):

> Materialization-record artifacts are OUT of scope for this template. They are a SEPARATE artifact per `devdocs/inquiries/2026-04-28_14-13__materialization_trace_record_location/finding.md`:
> - For Compact mode: `materialization_record.md` with Pre-Implementation Contract / Tiny Plan / Risk Scan / Post-Implementation Trace / Outcome / Follow-up sections.
> - For Standard/Full modes: separate `desc.md` + `step_by_step_impl_plan.md` + `critic.md` + `materialization_trace.md`.
>
> See `docs/materialization_lifecycle.md`. Findings that propose materialization should reference the materialization-record path, not embed materialization content.

### 3. The 4 typed Finding-body variants

Each type has a stable mini-TOC of required + optional sub-sections within the Finding section.

**Decision variant** — settles a structural / process / concept choice. Used for definitional findings, strategic decisions, question-design choices, taxonomy commitments.

```text
## Finding

### Surrounding context              (1-3 paragraphs)
### Decision committed
### Trade-offs
### Alternatives killed
### Examples                         (OPTIONAL)
### Self-reference acknowledgment    (OPTIONAL)
```

**Spec-modification variant** — modifies a discipline or protocol spec. Requires the Edit-Specification sub-form for every proposed edit.

```text
## Finding

### Surrounding context              (1-3 paragraphs)
### Target spec                      (canonical + runtime paths; scope of change)
### What changes (high-level)
### Per-edit specs                   (one Edit-Spec sub-form block per edit)
### Migration notes
```

**Recommendation variant** — produces a ranked list with conditional reasoning, expects user adjudication.

```text
## Finding

### Surrounding context              (1-3 paragraphs)
### Ranked recommendations
  Rank 1 (recommended primary): ...
    - Operation-fit summary
    - Right pick when
    - Tradeoff vs alternatives
    - Commitment scale
  Rank 2 (conditional alternate): ...
  Rank 3 (conditional alternate): ...
### Honorable mentions               (OPTIONAL)
### Pre-filtered candidates          (OPTIONAL)
### User-decision question           (with explicit checklist)
```

**Loop-diagnose variant** — diagnoses a failure in a prior SIC/ESDIC loop.

```text
## Finding

### Correction Chain Summary         (table: prior-path / corrected-path / human correction excerpt / what changed)
### Failure Trail                    (stage-by-stage account of what happened)
### Failure Hypotheses               (per hypothesis: affected stage / shortcoming / evidence / confidence / maintenance candidate / gate)
### Failure Attribution Summary      (table)
### Maintenance Candidates           (using Edit-Spec sub-form for spec changes)
### Diagnostic Verdict               (ACTIONABLE / PARTIAL / INCONCLUSIVE)
### Self-reference acknowledgment    (OPTIONAL)
```

### 4. The Edit-Specification sub-form

The sub-form is the structural fix for the user's #1 complaint. It plugs into the Finding-body of any type when the content includes spec edits.

**Required base fields:**

| Field | Type | Required when | Notes |
|---|---|---|---|
| `target_path` | string | always | Exact file path from repo root |
| `target_anchor` | string | always | Section heading, line range, regex, `file-end`, or `frontmatter` |
| `operation` | enum | always | ADD / REPLACE / DELETE / RESTRUCTURE |
| `current_text` | verbatim block | REPLACE, DELETE, RESTRUCTURE | "(no existing text — new insertion)" for ADD |
| `new_text` | verbatim block | ADD, REPLACE, RESTRUCTURE | "(deletion — remove existing block)" for DELETE |
| `rationale` | one-line | always | WHY this edit |
| `reversibility` | one-line | always | How to undo (typically: `git revert <commit>` or "reverse the mv + sed") |

**Optional type-specific extensions:**

| Extension | Applies when | Notes |
|---|---|---|
| `yaml_key` | Operation is a frontmatter edit | Pair with `target_anchor: frontmatter` |
| `sequence_position` | Operation is a procedure-step edit | E.g., `step 3` or `between step 2 and step 3` |
| `precondition` | Edit is conditional | E.g., `applies only when /intuit Phase B+ ships` |
| `target_paths` | Edit is identical across multiple files | List form; for canonical+runtime sync cases |

**Required vs optional per finding type:**

| Finding type | Edit-spec sub-form requirement |
|---|---|
| Spec-modification | REQUIRED for every proposed edit |
| Loop-diagnose | REQUIRED for every Maintenance Candidate proposing a spec change |
| Decision | OPTIONAL |
| Recommendation | OPTIONAL (typically only when recommending a migration) |

**Example block** (markdown rendering as it would appear in a Per-edit specs section):

```markdown
#### Edit 1 — Add scope-fidelity caveat to Combination mechanism

**Target:**
- `target_path:` `cognitive_harness/innovate/references/innovate.md`
- `target_anchor:` §2.2 "What's already nearby" — line 126
- `operation:` REPLACE

**Current text** (verbatim, lines 126-128):

> *"What's already nearby — concepts in the current context (conversation, project, problem space) that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work."*

**New text** (verbatim, to apply at lines 126-128):

> *"What's already nearby — concepts in the current context that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work.*
>
> ***Scope-fidelity caveat.** When the inquiry's framing claims generic scope, treat the current context as ONE inspiration anchor among many."*

**Rationale:** Removes "(conversation, project, problem space)" enumeration that biases the mechanism toward project-specific sources; adds scope-fidelity conditional.

**Reversibility:** `git revert <commit>` or restore the original parenthetical and delete the new caveat paragraph.
```

### 5. The four new strengthened style rules

These move enforcement from documentation-layer to template-structure-layer, applied by CONCLUDE compile-time checks. Each rule has positive and negative examples.

**Rule 1: Concrete-edit-form.**

> Any "What:" item in `## Next Actions` describing an edit (verbs: edit, update, modify, refine, repair, repair-to, add-to, remove-from, replace, restructure) MUST either (a) reference an Edit-Specification sub-form block elsewhere in the finding (e.g., "Apply Edit 1 from §Per-edit specs"); OR (b) include the sub-form inline. Verb-only descriptions of edits are defects.

- ✅ "Apply Edit 1 (Per-edit specs §3.1): replace lines 126-128 of `cognitive_harness/innovate/references/innovate.md` with the new B3 text."
- ❌ "Update `/innovate`'s spec to add a scope-fidelity caveat." — no anchor; no exact text; no target_path.

**Rule 2: Anchored-cross-reference.**

> Any reference to a section/paragraph/label within the same finding MUST use the section heading OR a descriptive name introduced earlier in the same section. Workspace scaffolding labels (`Q1.1-f`, `M1`, `H1`, `P3`, `T1`, `SV6`) are defects unless (i) introduced as named anchors in an earlier section of the SAME finding; OR (ii) followed by the descriptive name on every use.

- ✅ "Per the Decision committed section above..."
- ✅ "Apply M1 (the pre-CONCLUDE term-ambiguity checklist) refinement..."
- ❌ "Apply Q1.1-f to the spec." — Q1.1-f never introduced; reader has to trace.

**Rule 3: Verb-specificity.**

> Vague action verbs (update / refine / address / improve / handle / ensure / consider) MUST be followed by exactly what changes — concrete content, target location, or operation.

- ✅ "Add a 2-line example to step 7 of `cognitive_harness/decompose/references/decompose.md` showing when the Determination-mechanism check fires (PASS) and when it doesn't (FAIL)."
- ❌ "Refine the Determination-mechanism check." — "Refine" without exact what changes.

**Rule 4: Scope-specificity.**

> Scope references ("surrounding paragraphs" / "various sections" / "the existing pattern" / "related areas" / "the standard form") MUST be enumerated or anchored.

- ✅ "Verify paragraphs 2-5 of §1.4 of the spec read coherently under the new framing."
- ❌ "Run a consistency check across the surrounding paragraphs." — "Surrounding paragraphs" without enumeration.

**Preserved canonical rules** (carried forward from CONCLUDE):

- **Hedging-specificity** — any hedge must name WHAT is uncertain and WHY.
- **Gate-specificity** — triggers must be time-bound, condition-bound, or observable.
- **One-decision-per-paragraph** — multiple decisions in one paragraph is a defect.
- **Plain-language preference** — simplest accurate phrasing.

**Edit-type edge cases** captured via Absence-Recognition:

| Edge case | Schema handling |
|---|---|
| Multi-file edits with identical content | Use `target_paths:` list extension; one sub-form covers all |
| Multi-file edits with different content | One sub-form per file; cite each separately |
| Add-new-file edits | `target_anchor: "file does not exist"`; `current_text: "—"`; `new_text` contains full file content |
| Frontmatter edits | Use `yaml_key:` extension; `target_anchor: frontmatter` |
| Procedure-step edits | Use `sequence_position:` extension |
| Conditional edits | Use `precondition:` extension |

### 6. Migration: future-only

The new template applies to findings produced AFTER the CONCLUDE-procedure-update inquiry ships. Existing 50 findings stay as-is — they are historical record. The new template's structure is NOT retroactively imposed.

Re-formatting 50 findings would cost ~50 mini-inquiries (each requiring re-reading archived discipline outputs to produce the new structure). The audit-trail value of preserving findings as authored — showing what the project knew at the time, in the template-of-the-time — exceeds the consistency value of uniform structure.

Each new-template finding declares `template_version: 2` in frontmatter. Canonical (pre-redesign) findings have no marker (= v1). CONCLUDE stamps the version automatically at compile time after the procedure-update ships; until then, manual stamping is required (see Open Question 2).

Agents reading findings should branch on `template_version` to know which structure to expect. When citing findings, prefer citing by section heading (Question / Finding / Next Actions — universal across versions) rather than by per-type structure (Per-edit specs / Failure Hypotheses — only on v2).

## Next Actions

### MUST

- **What:** Open a follow-up inquiry to update CONCLUDE's procedure to adopt the new template.
  - **Inquiry shape:** `type: spec-modification`; target `~/.claude/skills/protocols/conclude.md` (canonical at `cognitive_harness/protocols/conclude.md`); layer commitment PROCESS.
  - **Who:** the user (next inquiry); typical `/MVL+` invocation.
  - **Gate:** before any new finding is authored under the new template (the procedure-update is the gate that activates the new template).
  - **Why:** without the procedure-update, CONCLUDE will continue producing canonical-v1 findings even when authors intend v2.

  **Concrete per-edit specs for the follow-up inquiry** (the follow-up will refine these into the spec-modification finding's Per-edit specs section):

  - **Edit A — Pipeline detection (Step 1).** Add reading of `frontmatter.template_version` and `frontmatter.type`. If `template_version: 2` is set, the new template's per-type Finding-body variant must be selected by `type:`. If `type:` is missing on a v2 finding, HALT and ask the user to specify.

  - **Edit B — Compile the finding (Step 2).** Branch on `type` to select per-type Finding-body schema; apply universal base; apply Edit-Specification sub-form schema for any edits; apply strengthened style rules throughout.

  - **Edit C — Structural-check rules (new).** Add compile-time rules that flag violations of: section presence (universal sections + conditional sections firing correctly); section ordering; type-key presence on v2; Edit-Spec sub-form presence for Spec-modification edits; per-type required sections (e.g., Correction Chain Summary for Loop-diagnose); concrete-edit-form rule; anchored-cross-reference rule; verb-specificity rule; scope-specificity rule; preserved canonical rules.

  - **Edit D — Default-when-`type:`-missing.** For v2 findings: HALT and ask user. For v1 findings (absent `template_version`): treat as canonical; apply only old structural-check rules.

  - **Edit E — Backward-compat handling.** Old findings without `template_version: 2` are NOT subject to new structural-check rules. Citation conventions favor section headings universal across versions.

  - **Edit F — Materialization carve-out statement.** Add to CONCLUDE's "What's out of scope" subsection: materialization-record is a separate artifact; pointer to `materialization_record.md` / `materialization_trace.md` / etc.

### COULD

- **What:** Until the CONCLUDE-procedure-update follow-up inquiry ships, manually stamp `template_version: 2` in the frontmatter of any finding authored under the new template.
  - **Who:** the author (or agent) of new-template findings, including the follow-up inquiry's own finding.
  - **Gate:** time-bound — until the procedure-update lands.
  - **Why:** the auto-stamping mechanism is specified for the procedure-update but doesn't exist yet; manual stamping makes the version explicit.

- **What:** Re-format priority findings if they are heavily-cited by future work and the v1-vs-v2 inconsistency becomes a friction point.
  - **Who:** the user, opportunistically.
  - **Gate:** condition-bound — when a v1 finding's structural mismatch with new conventions causes confusion or wasted effort.
  - **Why:** keeps the most-referenced corpus consistent with current conventions; cost stays proportional to value.

### DEFERRED

- **What:** Re-format all 50 existing findings to v2 structure.
  - **Gate:** condition-bound — only if future tooling depends on uniform-structure (e.g., automated cross-finding analysis) AND the audit-trail value of as-authored preservation no longer outweighs the consistency value.
  - **Why (if revived):** uniform structure across the corpus; but the cost (~50 mini-inquiries to re-author) is high and the current value of as-authored preservation is real (the corpus IS the history).

## Reasoning

### Why this approach over alternatives

The Sensemaking phase tested three architectural framings:

- **Pure adaptive single-template** (one canonical with content-type-conditional sections) — rejected because the loop-diagnose variant adds 4-5 stable custom sections; bolting them into one template via conditionals makes it unreadable, violating the readability principle the canonical tried to preserve.

- **Pure multiple templates** (one file per content type) — rejected because most of the template (frontmatter + 5 universal sections + style rules) is SHARED; duplicating shared content across N variant files is overhead, and refactoring requires editing N files.

- **Composable building blocks** (primitives library; authors assemble per finding) — rejected because it imposes the highest author cognitive load (primitives + assembly mechanism + required-minimum-per-type) and the current calibration state doesn't justify the complexity.

The hybrid base+variants architecture is between the first two: universal base shared (like single-template), Finding-body typed (like multi-template). Lower complexity than full multi-template; richer than pure single-template. Corpus reality fits.

### Why 4 types, not 8

Exploration surfaced 8 candidate types. Pairwise coupling analysis in Sensemaking consolidated to 4:

- `strategic-decision` + `definitional` + `question-design` → **Decision** (all commit a concept/decision; Finding-body shapes are nearly-identical).
- `spec-rewrite` + `spec-edit-REPAIR` → **Spec-modification** (both produce spec changes; share the Edit-Spec sub-form; differ only in scope-of-edit).
- `recommendation` → **Recommendation** (distinct ranked-with-conditions shape).
- `loop-diagnose` → **Loop-diagnose** (distinct 5-section stable pattern across corpus instances).
- `materialization-record` → CARVED OUT (separate artifact per 2026-04-28 prior).

Corpus test: 5 representative findings from different domains each fit one of the 4 types cleanly. Taxonomy is exhaustive at current corpus.

### Why composable sub-form rather than per-type schemas

The Edit-Specification sub-form is composable across types because edits cross type boundaries. Decision findings can recommend edits; Loop-diagnose findings produce maintenance-candidate edits; Spec-modification findings ARE edits. A per-type schema would duplicate edit-field definitions across N types; the cross-cutting sub-form has one definition with type-dispatched extensions.

### Why future-only migration

Re-formatting 50 findings would take ~50 mini-inquiries. The audit-trail value (findings show what the project knew at the time, in the conventions-of-the-time) exceeds the consistency value of uniform structure. The user's pattern across recent inquiries (`structural_check_tool_remove_or_keep`, `preventing_replacement_design_context_blur`) is to preserve historical artifacts rather than retroactively impose new structure. Future-only honors this pattern.

### Why materialization is carved out

The 2026-04-28_14-13 prior finding settled materialization-record as a separate artifact (Compact `materialization_record.md` vs Standard/Full's separate files). Forcing materialization back into finding.md would re-litigate that decision. The materialization domain is structurally different — lifecycle (9 steps from artifact request to retrospective learning) rather than the verdict-compilation shape of findings — and would distort either artifact's structure. Honoring the prior is the right move.

### Why structural enforcement, not documentation-only

The canonical template's style rules (hedging-specificity, gate-specificity, etc.) live in CONCLUDE's documentation. The corpus's 96% concrete-edit-form failure rate shows documentation-only rules don't bind authors when the structure doesn't require them. Moving enforcement to structure — the Edit-Specification sub-form REQUIRED for Spec-modification, the structural-check rules applied at CONCLUDE compile-time — is the design intervention that converts documentation aspirations into compliance. The recent `structural_check_tool_remove_or_keep` inquiry settled that LLM-self-check is the substrate-honest enforcement mechanism; CONCLUDE's structural check is exactly that.

### What was killed (and why)

- **Pure single-template-with-conditional-sections** — corpus doesn't fit; loop-diagnose adds 5 stable custom sections that don't bolt cleanly into a conditional.
- **Pure multi-template-with-no-shared-base** — duplicates the universal sections; refactoring overhead.
- **Composable building blocks** — over-engineered for current calibration state; author cognitive load too high.
- **8-type granularity** — pairwise coupling analysis consolidated to 4; 8 over-fragments without per-type-shape distinctions.
- **Including materialization-record in finding template** — re-litigates the 2026-04-28 prior decision; materialization is structurally different (lifecycle vs verdict).
- **Per-type-separate edit schemas** — duplicates edit-field definitions; cross-cutting sub-form is cleaner.
- **Re-formatting all 50 existing findings** — cost ~50 mini-inquiries; audit-trail value of as-authored exceeds consistency value.
- **Default-to-decision when `type:` is missing** — silent default to the wrong type is the failure the discriminator exists to prevent; HALT-and-ask is honest.

### Honest tradeoffs

- **Author cognitive load is higher** than canonical. The 4 typed variants + Edit-Spec sub-form + 4 new style rules represent real burden. Mitigation: only Spec-modification REQUIRES the sub-form (the burden falls where the value lives); other types use it optionally. Examples + structural-check feedback shorten the learning curve.

- **Template complexity is higher** than canonical. The new template is harder to read in spec form. Mitigation: per-type mini-TOCs make each variant self-contained; authors only need to learn the variant for their content-type.

- **Forward-vulnerability on 5th-type emergence** — a content-type that doesn't fit Decision / Spec-modification / Recommendation / Loop-diagnose could emerge. Mitigation: the `type:` enum is extensible; refinement trigger documented (Open Question 1).

- **Inconsistency with existing 50 findings** — v1 and v2 coexist in the corpus. Mitigation: backward-compat note; section headings universal across versions; template_version marker enables agents to branch.

## Open Questions

### Blocked

(No blocking questions for this finding's commit. The MUST item — open the follow-up inquiry — is not blocked.)

### Refinement Triggers

**OQ-1 — 5th content-type emergence.** A future finding may not fit any of the 4 types (Decision / Spec-modification / Recommendation / Loop-diagnose). When this happens, open a taxonomy-revision inquiry to extend the enum. Refinement trigger: condition-bound — when an author cannot honestly assign one of the current types to a finding-in-progress.

**OQ-2 — template_version auto-stamping mechanism.** The mechanism is specified in this finding's Next Actions § MUST § Edit B (the CONCLUDE Step 2 update) but doesn't exist until the follow-up inquiry ships. Until then, findings authored under the new template must manually set `template_version: 2` in frontmatter. Refinement trigger: time-bound — until the follow-up CONCLUDE-procedure-update lands.

**OQ-3 — Author-cognitive-load monitoring.** After the follow-up procedure-update ships and 5-10 new-template findings have been authored, observe whether the per-finding authoring time increases materially. If it does, simplify (e.g., make the Edit-Spec sub-form's optional fields fewer; consolidate edge-case extensions). Refinement trigger: observable — after N ≥ 5 new-template findings, compare authoring time against canonical baseline.

### Research Frontiers

**OQ-4 — Cross-finding tooling.** With uniform structure across v2 findings, automated cross-finding analysis becomes feasible (e.g., extract all Per-edit-specs from Spec-modification findings to produce a project-wide pending-edits queue). This is out-of-scope for this inquiry but enabled by the structural enforcement.

**OQ-5 — Bidirectional version-marker compatibility.** When a v2 finding refines a v1 finding (or vice versa), the cross-reference needs to honor both structures. Specifically: how does v2's Changes-from-Prior cite v1's section structure when v1 may not have the new sub-sections? Likely handled by section-heading-only citation, but worth confirming.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

i think next thing we should focus on finding.md format.  /Users/ns/Desktop/projects/native/devdocs/inquiries go there and check at least 20 finding.md file and try to understand their common features so we can create a new structure 

some shortcomings of this version, not suitable for materilization type things, 
many times there was missing thigns like full prompt change lines, and many times there were misleading text regarding what should be edited
ambiguity is still there... and it is really annoying. this shows us maybe we need a better approach to create finding.md 

finding section uses bullet points. but there is no other structure in these finding sections. becasue output cna be in different shape and lenght and complexity etc.  

lets dive deep and think hard to see what is better format
```

</details>
