# Innovation: finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Input: decomposition.md (5 pieces with dependency order P3 → P1 → P2 → P4 → P5) + sensemaking.md (3 commits) + exploration.md (50-finding corpus). Mode: elaboration; produce SHIP-READY content per piece. Apply Combination + Absence-Recognition + Domain-Transfer (generators); Lens-Shifting + Constraint-Manipulation + Inversion (framers).

---

## Seed and Direction

**Seed:** Sensemaking committed hybrid base+typed-variants architecture + 4-type taxonomy + composable edit-spec sub-form + future-only migration. Decomposition partitioned into 5 pieces with explicit dependency order. Innovation produces concrete artifacts — frontmatter schema, per-type Finding-body schemas, edit-spec markdown pattern, style-rule text with examples, migration policy + CONCLUDE-update brief. The output should be directly usable by the follow-up CONCLUDE-procedure-update inquiry.

**Direction (intuition):** The load-bearing piece is P3 (edit-spec sub-form) because it's the structural enforcement mechanism for the user's #1 complaint (missing exact-line edits). Get P3 right; the rest cascades.

---

## P3 — Edit-Specification Sub-Form Schema

**Domain-Transfer signals**: ADR (target / decision / consequences); unified diff (@@ line markers; before/after); GitHub patch (file-by-file); YAML schema (typed fields with required/optional); markdown code-fence (verbatim text capture). Synthesis: a markdown-rendered, YAML-flavored block that captures target + operation + verbatim before/after + rationale + reversibility.

### Required base fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `target_path` | string | always | Exact file path from repo root (e.g., `cognitive_harness/innovate/references/innovate.md`) |
| `target_anchor` | string | always | One of: section heading (`§3.2 Combination`), line range (`L126-L128`), regex (`re:^## Identity$`), `file-end`, or `frontmatter` |
| `operation` | enum | always | `ADD` / `REPLACE` / `DELETE` / `RESTRUCTURE` |
| `current_text` | verbatim block | conditional | Required for REPLACE, DELETE, RESTRUCTURE; `(no existing text — new insertion)` for ADD |
| `new_text` | verbatim block | conditional | Required for ADD, REPLACE, RESTRUCTURE; `(deletion — remove existing block)` for DELETE |
| `rationale` | one-line | always | WHY this edit |
| `reversibility` | one-line | always | How to undo (typically: "git revert" or "reverse the mv + sed") |

### Optional type-specific extensions

| Extension | Applies when | Notes |
|---|---|---|
| `yaml_key` | Operation is frontmatter edit | Names the key being modified; pair with `target_anchor: frontmatter` |
| `sequence_position` | Operation is procedure-step edit | E.g., `step 3` or `between step 2 and step 3` |
| `precondition` | Edit is conditional | E.g., `applies only when /intuit Phase B+ ships` |
| `target_paths` | Edit is identical across multiple files | List form; for canonical+runtime sync cases |

### Markdown rendering pattern

```markdown
#### Edit [N] — [short label]

**Target:**
- `target_path:` `cognitive_harness/innovate/references/innovate.md`
- `target_anchor:` §2.2 "What's already nearby" — line 126
- `operation:` REPLACE

**Current text** (verbatim, lines 126-128):

> *"What's already nearby — concepts in the current context (conversation, project, problem space) that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work."*

**New text** (verbatim, to apply at lines 126-128):

> *"What's already nearby — concepts in the current context that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work.*
>
> ***Scope-fidelity caveat.** When the inquiry's framing claims generic scope (e.g., "applies to a class of cases"), treat the current context as ONE inspiration anchor among many — do not let it become the scope-defining source."*

**Rationale:** Removes "(conversation, project, problem space)" enumeration that biases the mechanism toward project-specific sources; adds scope-fidelity conditional.

**Reversibility:** `git revert <commit>` or restore the original parenthetical and delete the new caveat paragraph.
```

### Embedding rules

- **Inline in Finding body** (preferred for Spec-modification type): each edit gets its own `#### Edit [N] — ...` subsection under `### Per-edit specs`.
- **Referenced from Next Actions** (when the edit is the load-bearing action): a `What:` item must say "Apply Edit [N] (Per-edit specs §[N])" rather than describing the edit in prose.
- **Never describe an edit only in prose** — the structural requirement is the sub-form block.

### Required vs optional per finding type

| Finding type | Edit-spec requirement |
|---|---|
| **Spec-modification** | REQUIRED for every proposed edit in Per-edit specs |
| **Loop-diagnose** | REQUIRED for every Maintenance Candidate proposing a spec change |
| **Decision** | OPTIONAL — decisions typically don't include edits; if they do, sub-form recommended |
| **Recommendation** | OPTIONAL — recommendations may include migration commands (use sub-form if proposing edits) |

### 5-test cycle

- **Novelty:** codifies an existing corpus pattern (2026-05-14_15-00 "Current text/Repaired text"); novel in its required-field structure with type-dispatched extensions.
- **Scrutiny:** strongest objection — "bureaucratic; not every edit needs 7 fields." Defense: only Spec-modification REQUIRES it; other types OPTIONAL; the 7 fields capture exactly what makes an edit unambiguous (target / scope / operation / current / new / why / reverse). Survives.
- **Fertility:** enables structural-check + future tooling (apply-finding-as-patch script).
- **Actionability:** yes; markdown-renderable; example provided.
- **Mechanism independence:** Domain-Transfer (ADR / unified-diff / YAML schema) + corpus pattern (2026-05-14_15-00) + Absence-Recognition (edge cases: multi-file / add-new-file / frontmatter / procedure) all converge.

**Disposition: ACTIONABLE.**

---

## P1 — Universal Base Structure

**Combination:** canonical template + corpus-observed frontmatter variety + sensemaking commits → unified schema.

### Frontmatter schema

```yaml
---
# REQUIRED for new-template findings
status: active                   # active | superseded | retracted
template_version: 2              # marker; "1" was canonical pre-redesign
type: decision                   # decision | spec-modification | recommendation | loop-diagnose

# RECOMMENDED (carried from canonical)
model: claude-opus-4-7[1m]       # model id used to author
effort: high                     # effort setting

# CONDITIONAL — depends on inquiry context
refines: <path>                  # path to prior finding being refined
supersedes: <path>               # path to prior finding being replaced
corrects: <path or list>         # path(s) being corrected
diagnoses: <path>                # path to inquiry being diagnosed (REQUIRED when type: loop-diagnose)

# OPTIONAL — relationship metadata
related: [<path>, <path>]        # sibling findings; non-load-bearing
continues_from: <path>           # branch lineage
compares_with: <path or list>    # A/B comparison targets
verdict: ACTIONABLE              # inquiry-level verdict (conventional for diagnostic: ACTIONABLE/PARTIAL/INCONCLUSIVE)
---
```

### `type:` key semantics

| Value | When to use |
|---|---|
| `decision` | The finding commits a structural / process / concept choice. Default for definitional, strategic-decision, question-design content. |
| `spec-modification` | The finding proposes concrete edits to a discipline / protocol spec. Per-edit specs (P3 sub-form) REQUIRED. |
| `recommendation` | The finding produces a ranked list with conditional reasoning and a user-decision question. |
| `loop-diagnose` | The finding diagnoses a failure in a prior SIC/ESDIC loop. Correction Chain Summary, Failure Hypotheses, Diagnostic Verdict all REQUIRED. |

**Default when `type:` is missing:** HALT and ask the user. (Considered alternative: default to `decision`. Rejected: silent default to the wrong type is the failure mode the discriminator exists to prevent.)

### Universal sections (in order)

| # | Section | Role |
|---|---|---|
| 1 | `## Question` | Restates from `_branch.md`. States what the inquiry asked + what success looks like. Comes first so the reader has context before the answer. |
| 2 | `## Finding Summary` | Committed-summary in bullet points. Each bullet digestible in one read; plain language first. Written BEFORE the Finding-body; revised if body diverges. |
| 3 | `## Finding` | The Finding-body slot. Filled by typed variant per the `type:` key (see P2). |
| 4 | `## Reasoning` | Why this finding over alternatives. Significant kills with prosecution reasoning. Contradictions reconciled. Honest tradeoff statements. |
| 5 | `## Open Questions` | Four sub-sections — Monitoring / Blocked / Research Frontiers / Refinement Triggers. Populate the ones that apply; omit the rest. |

### Conditional sections

| Section | When required | Position |
|---|---|---|
| `## Changes from Prior` | Frontmatter has `refines` / `supersedes` / `corrects` | After title; before Question |
| `## Inherited Commitments Re-test` | Synthesis Trigger fires per `_branch.md` | After Finding-body; before Next Actions |
| `## Next Actions` | Finding proposes changes (MUST/COULD/DEFERRED items) | After Finding-body or Inherited Commitments Re-test |
| `## Source Input` | Required for correction/refinement (Status SUPERSEDED/CORRECTS); optional otherwise | After Open Questions |

### Out-of-scope statement (REQUIRED in universal base)

> **Materialization-record artifacts are OUT of scope for this template.** They are a SEPARATE artifact per `devdocs/inquiries/2026-04-28_14-13__materialization_trace_record_location/finding.md`:
> - For **Compact mode**: `materialization_record.md` with Pre-Implementation Contract / Tiny Plan / Risk Scan / Post-Implementation Trace / Outcome / Follow-up sections.
> - For **Standard/Full modes**: separate `desc.md` / `step_by_step_impl_plan.md` / `critic.md` / `materialization_trace.md`.
>
> See `docs/materialization_lifecycle.md`. Findings that propose materialization should reference the materialization-record path, not embed materialization content.

### Section ordering (full template, conditional gating noted)

```text
frontmatter (YAML between --- markers)
# Finding: [name]

## Changes from Prior            (CONDITIONAL — when refines/supersedes/corrects in frontmatter)
## Question
## Finding Summary
## Finding                       (TYPED VARIANT per `type:` key — see P2)
## Inherited Commitments Re-test (CONDITIONAL — when Synthesis Trigger fires)
## Next Actions                  (CONDITIONAL — when finding proposes changes)
## Reasoning
## Open Questions
## Source Input                  (CONDITIONAL — required for correction/refinement)
```

### 5-test cycle

- **Novelty:** preserves canonical universal sections (100% adoption); extends frontmatter to codify observed variety; carves out materialization explicitly.
- **Scrutiny:** strongest objection — "the frontmatter has too many optional keys." Defense: each key has documented semantics + corpus usage evidence (`related` 32/50; `diagnoses` 4/50; `verdict` 2/50); they're optional. Survives.
- **Fertility:** the `type:` discriminator enables per-type Finding-body variants (P2).
- **Actionability:** yes — frontmatter is YAML; sections are markdown.
- **Mechanism independence:** Combination (canonical + corpus) and Sensemaking commits converge.

**Disposition: ACTIONABLE.**

---

## P2 — Per-Type Finding-Body Schemas

Each variant has REQUIRED sections (must be present) and OPTIONAL sections (used when content warrants). All variants embed P3 edit-spec sub-form per the rules in P3.

### Variant 1: Decision

**Mini-TOC:** Surrounding context → Decision committed → Trade-offs → Alternatives killed → (optional: Examples / Self-reference)

```markdown
## Finding

### Surrounding context
[1-3 paragraphs. Why this decision matters; what state of the project led to it. Helpful for readers who didn't witness the inquiry.]

### Decision committed
[The decided concept / process / structural choice. Be specific. Use sub-headings if multiple decisions; otherwise a single committed-statement.]

### Trade-offs
[The trade-offs the decision accepts. Honest about what's lost; not just what's gained.]

### Alternatives killed
[Each alternative tested and rejected, with prosecution reasoning per alternative. Format:
- **Alternative N — [name]:** [rejection reasoning on structural grounds]
- ...]

### Examples (OPTIONAL)
[Concrete instantiation when the decision is abstract.]

### Self-reference acknowledgment (OPTIONAL)
[When the decision applies to the inquiry's own process; honest acknowledgment.]
```

**Used for:** definitional findings, strategic decisions, question-design choices, taxonomy commitments.

### Variant 2: Spec-modification

**Mini-TOC:** Surrounding context → Target spec → What changes → Per-edit specs (P3 sub-form per edit) → Migration notes

```markdown
## Finding

### Surrounding context
[1-3 paragraphs. Why the spec needs modification; what triggered the change (corpus pattern / user complaint / prior inquiry).]

### Target spec
- **Canonical path:** `cognitive_harness/<discipline>/references/<discipline>.md`
- **Runtime path:** `~/.claude/skills/<discipline>/references/<discipline>.md` (if applicable; sync required)
- **Scope of change:** [section IDs being touched; e.g., "§2.2 Combination mechanism + §3.1 Test cycle"]

### What changes (high-level)
[Summary of modifications. Which sections; scope of change; what's preserved. 1-2 paragraphs.]

### Per-edit specs

#### Edit 1 — [short label]
**Target:** ...
**Current text:** ...
**New text:** ...
**Rationale:** ...
**Reversibility:** ...

#### Edit 2 — [short label]
...

### Migration notes
[How edits should be applied: canonical first, then runtime; sync requirements; any pre-edit safety check (e.g., git status check); reversibility check protocol.]
```

**Used for:** spec rewrites, REPAIR-style edits, protocol modifications.

### Variant 3: Recommendation

**Mini-TOC:** Surrounding context → Ranked recommendations (primary + alt-1 + alt-2) → (optional: Honorable mentions / Pre-filtered) → User-decision question

```markdown
## Finding

### Surrounding context
[1-3 paragraphs. Why the recommendation is needed; what state motivates the question.]

### Ranked recommendations

#### Rank 1 (recommended primary): [name]
- **Operation-fit summary:** [one-line what it does at the operation level]
- **Right pick when:** [conditional reasoning — what user priority weighting favors this]
- **Tradeoff vs alternatives:** [what's gained / what's lost compared to the alternates]
- **Commitment scale:** [effort estimate; follow-up inquiries; timeline if relevant]

#### Rank 2 (conditional alternate): [name]
[Same structure.]

#### Rank 3 (conditional alternate): [name]
[Same structure.]

### Honorable mentions (OPTIONAL)
[Candidates that didn't make top-3 but are worth surfacing for completeness.]

### Pre-filtered candidates (OPTIONAL)
[Candidates rejected before the finalist stage; with one-line rejection rationale per.]

### User-decision question
**Which path do you commit to?**

- [ ] [Rank 1 name] (recommended primary)
- [ ] [Rank 2 name] ([condition])
- [ ] [Rank 3 name] ([condition])
- [ ] Other (please specify)

This is BLOCKED — no follow-up should run until you respond.
```

**Used for:** recommendation packets, naming choices, "what's next?" inquiries, multi-option commitments.

### Variant 4: Loop-diagnose

**Mini-TOC:** Correction Chain Summary → Failure Trail → Failure Hypotheses → Failure Attribution Summary → Maintenance Candidates (P3 sub-form for spec changes) → Diagnostic Verdict → (optional: Self-reference / This Diagnostic Itself Might Be Wrong)

```markdown
## Finding

### Correction Chain Summary

| Field | Value |
|---|---|
| **Prior inquiry path** | `devdocs/inquiries/<prior>/finding.md` |
| **Corrected inquiry path** | (this finding's path OR prior's path with in-place correction) |
| **Human correction (raw excerpt)** | *"[user's exact words]"* |
| **What changed prior → corrected** | [one paragraph summarizing the correction] |

### Failure Trail
[Stage-by-stage account of what happened through the prior SIC/ESDIC loop. Where the error entered; where it propagated; where it should have been caught.]

### Failure Hypotheses

#### Hypothesis H1 — [name] ([confidence level: HIGH / MEDIUM / LOW]; [PRIMARY / CONTRIBUTING / EXPLORATORY])

**Affected stage:** [discipline / runner step]
**Shortcoming type:** [bias-inducing instruction / missing check / wrong-level abstraction / etc.]
**Evidence:**
- [Citation 1]
- [Citation 2]

**Confidence:** [level with justification]
**Why not stronger:** [what would need to be true for higher confidence]
**Maintenance candidate:** [proposed fix; references Maintenance Candidates section]
**Evaluation gate:** [how to verify the fix works]

#### Hypothesis H2 — ...

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---:|---|
| ... | ... | ... | HIGH | ... |

### Maintenance Candidates

[For each candidate that proposes a spec edit: use P3 edit-spec sub-form. Format:]

#### Maintenance M1 — [name]
**What changes:** [high-level]
**Per-edit specs:**
- Edit 1: [P3 sub-form block]
- Edit 2: [P3 sub-form block]
**Risk class:** [LOW / MED / HIGH]
**Expected benefit:** [one-line]
**Evaluation gate:** [observable verification]

### Diagnostic Verdict
**Overall:** ACTIONABLE / PARTIAL / INCONCLUSIVE.

[Load-bearing reasoning for the verdict. Best-supported hypothesis; strongest maintenance candidate; main uncertainty; recommended next step.]

### Self-reference acknowledgment (OPTIONAL)
[When the diagnosis applies to the inquiry's own process — honest acknowledgment + scope-fidelity check on the diagnosis's own claims.]
```

**Used for:** all `/MVL+ loop_diagnose` inquiries; post-mortems on weak prior findings.

### 5-test cycle on P2

- **Novelty:** each variant codifies the corpus's observed adaptations (loop-diagnose has 5 stable custom sections per corpus; spec-modification's "Current text / Repaired text" pattern is in 2026-05-14_15-00; recommendation's "Right pick when" framing is in the recent rename + next-discipline inquiries).
- **Scrutiny:** strongest objection — "4 variants is too rigid; some findings cross types (e.g., a Decision finding that also proposes edits)." Defense: the primary type still applies; sub-form embeds are OPTIONAL for non-spec-modification types. Cross-type content stays valid; type names the dominant shape.
- **Fertility:** structural-check rules can verify required sections per type; tooling can route findings by type.
- **Actionability:** yes; each variant has a mini-TOC + section list + role descriptions.
- **Mechanism independence:** Combination (canonical + corpus adaptations) + per-type Domain-Transfer (ADR for Decision; unified-diff for Spec-modification; tech-spec/recommendation pattern; loop_diagnose protocol).

**Disposition: ACTIONABLE.**

---

## P4 — Strengthened Style Rules

**Absence-Recognition** surfaced edge cases below; **Constraint-Manipulation** ("rule must be enforceable at compile time") shaped the wording.

### Rule 1: Concrete-edit-form

> **Any "What:" item in `## Next Actions` describing an edit (action verbs: edit, update, modify, refine, repair, repair-to, add-to, remove-from, replace, restructure) MUST either:**
> **(a) reference an edit-spec sub-form block (P3) elsewhere in the finding — using an explicit anchor like "Apply Edit 1 from §Per-edit specs"; OR**
> **(b) include the P3 sub-form inline with all required fields.**
>
> **Verb-only descriptions of edits are defects.**

✅ POSITIVE: "Apply Edit 1 (Per-edit specs §3.1): replace lines 126-128 of `cognitive_harness/innovate/references/innovate.md` with the REPAIRED B3 text."

❌ NEGATIVE: "Update `/innovate`'s spec to add a scope-fidelity caveat." → no anchor; no exact text; no target_path.

### Rule 2: Anchored-cross-reference

> **Any reference to a section/paragraph/label within the same finding MUST use the section heading OR a descriptive name introduced earlier in the same section.**
> **Workspace scaffolding labels (`Q1.1-f`, `M1`, `H1`, `P3`, `T1`, `SV6`, etc.) are defects UNLESS:**
> **(i) introduced as named anchors in an earlier section of the same finding; OR**
> **(ii) followed by the descriptive name on every use.**

✅ POSITIVE: "Per the Decision committed section above..."
✅ POSITIVE: "Apply M1 (the pre-CONCLUDE term-ambiguity checklist) refinement..."

❌ NEGATIVE: "Apply Q1.1-f to the spec." → Q1.1-f never introduced; reader has to trace.

### Rule 3: Verb-specificity

> **Vague action verbs (update / refine / address / improve / handle / ensure / consider) MUST be followed by exactly what changes — concrete content, target location, or operation.**

✅ POSITIVE: "Add a 2-line example to step 7 of `cognitive_harness/decompose/references/decompose.md` showing when the Determination-mechanism check fires (PASS) and when it doesn't (FAIL)."

❌ NEGATIVE: "Refine the Determination-mechanism check." → "Refine" without exact what changes.

### Rule 4: Scope-specificity

> **Scope references ("surrounding paragraphs" / "various sections" / "the existing pattern" / "related areas" / "the standard form") MUST be enumerated or anchored.**

✅ POSITIVE: "Verify paragraphs 2-5 of §1.4 of the spec read coherently under the new framing."

❌ NEGATIVE: "Run a consistency check across the surrounding paragraphs." → "Surrounding paragraphs" without enumeration.

### Preserved from canonical (style rules carried forward)

- **Hedging-specificity:** Any hedge ("mostly", "generally", "with caveats") must name WHAT is uncertain and WHY. Vague hedges are defects.
- **Gate-specificity:** Triggers must be time-bound ("after 30 inquiries"), condition-bound ("when /intuit Phase β ships"), or observable ("if calibration N ≥ 30"). "Eventually," "when appropriate," "as needed" are defects.
- **One-decision-per-paragraph:** A paragraph with multiple decisions = defect; split or list.
- **Plain-language preference:** Simplest accurate phrasing. Technical terms only when plain version would be imprecise.

### Edit-type edge cases (Absence-Recognition surfaced)

| Edge case | How the schema handles it |
|---|---|
| **Multi-file edits with identical content** | Use `target_paths:` list extension; one sub-form covers all files |
| **Multi-file edits with different content** | One sub-form per file; cite each separately |
| **Add-new-file edits** | `target_anchor: "file does not exist"`; `current_text: "—"`; `new_text` contains full file content; `rationale` includes why the new file is needed |
| **Frontmatter edits** | Use `yaml_key:` extension; `target_anchor: frontmatter`; `current_text` and `new_text` show key+value before/after |
| **Procedure-step edits** | Use `sequence_position:` extension; describe where in the procedure the change applies |
| **Conditional edits** | Use `precondition:` extension; describe the activation condition |

### 5-test cycle on P4

- **Novelty:** 4 new rules (concrete-edit-form / anchored-cross-reference / verb-specificity / scope-specificity); extends canonical rules at structural-enforcement level.
- **Scrutiny:** strongest objection — "rules are documentation; they don't structurally enforce without runtime tooling." Defense: the rules apply at CONCLUDE compile-time structural check; violations flag the finding for revision. Structural enforcement IS achievable via a compile-time check (the existing structural_check protocol).
- **Fertility:** rules apply across all 4 variants and to the universal base.
- **Actionability:** yes; positive + negative examples per rule.
- **Mechanism independence:** Absence-Recognition (edge cases) + Constraint-Manipulation (enforceable wording) + canonical preservation.

**Disposition: ACTIONABLE.**

---

## P5 — Migration Plan + CONCLUDE-Procedure-Update Brief

**Lens-Shifting:** under what conditions is future-only migration right vs re-formatting? Future-only is right when (a) re-format cost > re-format value, (b) historical findings have audit-trail value, (c) the new template's structural-check would mostly pass on old findings anyway (it doesn't — most fail). Re-format becomes right ONLY if downstream agents start citing structural-check pass-rates as evidence; currently they don't.

### Future-only migration policy

> The new template applies to findings produced AFTER the CONCLUDE-procedure-update inquiry ships. Existing 50 findings stay as-is — they are historical record. The new template's structure is NOT retroactively imposed.
>
> Rationale: re-formatting 50 findings would cost ~50 mini-inquiries (each requiring re-reading discipline outputs to produce the new structure). The audit-trail value of preserving findings as authored (showing what the project knew at the time, in the template-of-the-time) exceeds the consistency value of uniform structure.

### Template-version marker

> Each new-template finding declares `template_version: 2` in frontmatter (canonical pre-redesign is implicit "v1"; absence of the key means v1). When CONCLUDE compiles a finding, it stamps the current `template_version` automatically based on which template it applied.
>
> Agents reading findings can check `template_version` to know which structure to expect. Tooling can branch on the version for compatibility.

### Backward-compat note for downstream agents

> Agents reading or referencing findings MUST NOT assume new-template sections exist on findings without `template_version: 2`. Findings without the marker follow the canonical template's looser structure.
>
> When citing findings, agents should not anchor on structural details that only exist in one template version. Prefer citing by section heading (Question / Finding / Next Actions) rather than by per-type structure (Per-edit specs / Failure Hypotheses).

### CONCLUDE-procedure-update brief (the follow-up inquiry)

**Recommended inquiry shape:**
- **Type:** `spec-modification`
- **Target spec:** `~/.claude/skills/protocols/conclude.md` (canonical at `cognitive_harness/protocols/conclude.md` per project-canonical-protocol-location memory)
- **Layer commitment:** PROCESS (the procedure inside CONCLUDE needs updating)
- **Per-edit specs (one per required change):**

  1. **Step 1 (Pipeline detection) update.** Add reading of `frontmatter.type` to determine Finding-body variant. If `type` is missing on a `template_version: 2` finding: HALT with explicit user-prompt.

  2. **Step 2 (Compile the finding) update.** Branch on `type` to select per-type Finding-body schema from P2; apply universal base from P1; apply edit-spec sub-form schema from P3 for any edits; apply strengthened style rules from P4 throughout.

  3. **Structural-check rules** (new — must be enforced at compile-time):
     - Universal sections present (Question / Finding Summary / Finding / Reasoning / Open Questions)
     - Section ordering matches the canonical order
     - Conditional sections fire correctly:
       - Changes from Prior present iff frontmatter has refines/supersedes/corrects
       - Inherited Commitments Re-test present iff Synthesis Trigger fired
       - Next Actions present iff finding proposes changes (heuristic: contains action-verb in body)
       - Source Input present for correction findings
     - `template_version` and `type` keys present in frontmatter on `template_version: 2` findings
     - For `type: spec-modification` findings: at least one P3 edit-spec block per "edit" verb in Next Actions
     - For `type: loop-diagnose` findings: Correction Chain Summary + Failure Hypotheses + Failure Attribution Summary + Maintenance Candidates + Diagnostic Verdict all present
     - For `type: recommendation` findings: Ranked recommendations + User-decision question present
     - Concrete-edit-form rule violations flagged (Next Actions edit verbs without sub-form references)
     - Anchored-cross-reference rule violations flagged (orphan workspace labels)
     - Verb-specificity / Scope-specificity / Hedging-specificity / Gate-specificity violations flagged

  4. **Default-when-`type:`-missing behavior:**
     - On `template_version: 2` findings: HALT and ask user to specify.
     - On `template_version: 1` (or absent template_version key): treat as canonical v1; apply old structural-check rules only.

  5. **Backward-compat handling:** when CONCLUDE encounters a finding without `template_version: 2`, apply only the canonical v1 structural-check rules. New rules apply only to v2 findings.

**Expected migration timeline:**
- Inquiry: PROCESS-layer update of CONCLUDE; ~1 follow-up session.
- New template applies starting from the inquiry created after the procedure-update ships.
- Existing 50 findings unchanged.

### 5-test cycle on P5

- **Novelty:** future-only + version-marker is a clean approach; backward-compat note prevents future agents from misreading.
- **Scrutiny:** strongest objection — "what if the user re-runs an old inquiry; does it produce v2?" Defense: new compilations produce v2; old compilations are frozen artifacts. Consistent.
- **Fertility:** enables incremental migration; tooling can detect version per-finding.
- **Actionability:** yes; CONCLUDE-update brief is concrete enough for the follow-up.
- **Mechanism independence:** Lens-Shifting (when future-only vs reformat is right) + Phase/Calibration-State (dev-phase appropriate).

**Disposition: ACTIONABLE.**

---

## Assembly Check

### Self-applicability test (Constraint-Manipulation)

Does the new template self-apply cleanly to THIS finding (the format-redesign finding)?

**Type assignment for this finding:** `decision` — settles WHAT the new template's structure is. (Alternative: `spec-modification` — but THIS finding doesn't directly modify `conclude.md`; the follow-up inquiry does that.)

**Decision variant check on THIS finding's body:**
- Surrounding context ✓ — corpus analysis + user complaints + canonical template state
- Decision committed ✓ — the 4-type taxonomy + universal base + sub-form schema + style rules + migration policy
- Trade-offs ✓ — more template complexity vs structural enforcement of clarity
- Alternatives killed ✓ — pure single-template / pure multi-template / composable-blocks / re-format-existing / 8-type granularity
- Self-reference acknowledgment ✓ — the finding's own type-assignment becomes the test case for the schema

**Result:** self-applies cleanly. ✓

### Composability across pieces

| Composition | Result |
|---|---|
| P1 + P2 | Universal base hosts Finding-body slot; variants fill the slot per `type:`. ✓ |
| P2 + P3 | Each variant embeds sub-form per the embedding rules. ✓ |
| P3 + P4 | Concrete-edit-form rule cites sub-form as enforcement. ✓ |
| P4 + P1+P2 | Style rules apply throughout. ✓ |
| P5 + all | Migration policy + CONCLUDE-update brief uses all of P1-P4 as content. ✓ |

No contradictions across pieces.

### Emergent property: the recommendation packet shape

The Recommendation variant (P2 Variant 3) generalizes a pattern this very inquiry's recent siblings (rename_td_critique, next_discipline_candidate, finding-format-redesign-if-recommendation-typed) all naturally use. Codifying it makes the pattern transferable.

### Axis coverage check

| Axis | Coverage |
|---|---|
| Universal structure (frontmatter + 5 sections) | P1 ✓ |
| Per-type variation | P2 ✓ (4 variants) |
| Edit specification | P3 ✓ |
| Style enforcement | P4 ✓ |
| Migration + tooling update | P5 ✓ |
| Materialization carve-out | P1's out-of-scope statement ✓ |
| Type-discriminator mechanism | P1's `type:` semantics + P5's default-when-missing handling ✓ |

All axes covered.

---

## Mechanism Coverage (Telemetry)

| Mechanism | Applied to | Output |
|---|---|---|
| **Combination** (G) | P1 frontmatter, P2 per-type schemas | Canonical + corpus + sensemaking commits unified into schemas |
| **Absence Recognition** (G) | P4 edge cases | Multi-file / add-new / frontmatter / procedure / conditional edge cases surfaced |
| **Domain Transfer** (G) | P3 sub-form | ADR / unified-diff / YAML / patch / GitHub-review patterns synthesized into the sub-form |
| Extrapolation (G) | P5 (light — calibration scenarios) | Future-only vs reformat-trigger framing |
| **Lens Shifting** (F) | P5 | Conditions under which future-only is right vs becomes wrong |
| **Constraint Manipulation** (F) | All pieces (self-applicability test) | "Template must self-apply" constraint → THIS finding becomes the validation case |
| **Inversion** (F) | P4 | What makes an edit-instruction WRONG → defines the rule via its violation pattern |

**Generators applied:** 4/4 (Extrapolation light) ✓
**Framers applied:** 3/3 ✓

**Convergence:** STRONG. Multiple mechanisms converge on the 4-type + sub-form + strengthened-rules design. No diverging candidate emerged.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature evaluation | ✗ avoided — pieces tested after elaboration; user's "dive deep" carried through |
| 2. Single-mechanism trap | ✗ avoided — 4G + 3F applied |
| 3. Early frame lock | ✗ avoided — sensemaking commits held; per-piece elaborations adversarially tested |
| 4. Innovation without grounding | ✗ avoided — 5-test cycle per piece + corpus grounding |
| 5. Mechanism exhaustion | ✗ avoided — all applicable mechanisms produced |
| 6. Survival bias | ✗ avoided — uncomfortable cases (multi-file edits, add-new-file, frontmatter edits, procedure edits) all surfaced via Absence-Recognition |

### Self-Assessment

**PROCEED.** 5 ship-ready piece-level schemas produced; all 5 piece-level 5-test cycles passed; self-applicability test passed; assembly check passed; axis coverage complete. Ready for Critique to adversarially test against the corpus's 5 user-named failure classes (F1 materialization / F2 missing-exact-edits / F3 misleading-edits / F4 ambiguity / F5 bullet-only-Finding).
