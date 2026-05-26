---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md
---

# Finding: Type-Field Multi-Value Consideration — Clarify Reading, Defer Schema Change

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md`

**Revision trigger:** User correction — the user noticed that the prior finding treats the new `type:` frontmatter key as strict single-value (via its Step-1 HALT-and-ask rule when `type:` is missing) without arguing for or against the case where a single finding genuinely spans two of the four type variants (decision, spec-modification, recommendation, loop-diagnose). The user's question was whether the schema should allow multi-valued tagging.

**What's preserved:** The prior finding's full architecture — the universal-base + typed-variant Finding template, the 4 type variants, the strengthened style rules, the frontmatter schema (including `type:` as single-valued), and the follow-up spec-modification target on `~/.claude/skills/protocols/conclude.md`. The schema is not changed by this finding.

**What's changed:** A clarifying note is added to the prior finding's Variants section, stating explicitly which reading of "type" the schema commits to. The note resolves the silent assumption the user pointed at.

**What's new:** A corpus-audit MUST item is added to this finding's Next Actions. The audit produces empirical evidence to either confirm the single-value schema or trigger a revisit. Until the audit completes (within 2 weeks), the single-value schema stands as the default.

**Migration:** No existing finding's frontmatter needs editing. No CONCLUDE rule change. The migration footprint is the clarifying note in one section of the prior finding, plus the audit-MUST action item.

## Question

In `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md` (the prior finding that proposed a new template for the project's `finding.md` artifact, with 4 typed Finding-body variants discriminated by a new frontmatter `type:` key), should the `type:` field handle findings that genuinely span multiple types — for example, a finding that's both a decision (settles a structural/process/concept choice) and a spec-modification (modifies a specific protocol or spec file)?

Goal: a verdict that either (a) commits to single-valued `type:` with an explicit structural argument for why the apparently-multi-type cases collapse to one dominant type at the spec level, OR (b) revises the prior finding's `type:` schema to a multi-valued form with the specific shape named and the matching CONCLUDE behavior specified.

## Finding Summary

- **The verdict is (a): the prior finding's single-valued `type:` schema is structurally correct, and the appearance of multi-type findings collapses under the strict reading the prior finding's design implies but does not state.** The schema does not change. What changes is a small clarifying note added to the prior finding's Variants section to make the silent reading explicit.

- **The clarifying note states: `type:` denotes the BODY-SECTION-SHAPE of the finding's typed-variant body. Edit-Specifications in the universal MUST section are universal-base content (per the prior finding's universal-base + typed-variant architecture) and DO NOT make a decision-typed finding into a spec-modification-typed finding. A finding has exactly one `type:` value because its Finding-body section has exactly one variant shape.**

- **The user's question stemmed from a real silent gap, not a real schema deficiency.** Three findings produced in the past 24 hours (the sensemaking-spec-comparison comparison, the biggest-next-gain breakthrough analysis, and the navigation-discipline naming) each contain extensive spec-edit content in their MUST sections. Under a looser reading of "type" (content-mention anywhere in the finding), they appear to span two or three variants. Under the prior finding's strict reading (body-section-shape only), each is single-typed (decision, recommendation, decision respectively), and the spec-edit content lives in the universal MUST per the "concrete-edit-form" rule the prior finding already specified. The reading is what was ambiguous, not the schema.

- **A corpus audit MUST item ships with this verdict to produce empirical confirmation or counter-evidence.** Within two weeks, audit the roughly fifty findings under `devdocs/inquiries/**/finding.md`. For each one, identify its Finding-body section separately from the universal MUST section, and check whether the body contains variant-distinguishing sections from two or more of the four variants (decision, spec-modification, recommendation, loop-diagnose). If any finding has a hybrid body, the schema decision re-opens and the deferred list-valued alternative (`types: [primary, secondary]`) becomes the right answer.

- **One additional improvement is offered as a COULD action**: add an Anti-Ambiguity Discipline note for schema-defining findings in general, requiring future schema-defining findings to explicitly state which reading their fields use. This prevents the same silent-reading gap from appearing in other schema fields.

- **The earlier exploration claim that "three of three recent findings are multi-typed" was an artifact of using the looser reading.** Under the strict reading the prior finding's design implies, those three findings are single-typed. The empirical evidence supporting list-valued schemas is currently absent; the audit is the mechanism that produces or rules out evidence going forward.

## Finding

### Why this question matters

The prior finding (the format-redesign finding from 2026-05-16) introduced a new frontmatter key called `type:` whose role is to discriminate among four Finding-body variants: decision-variant, spec-modification-variant, recommendation-variant, and loop-diagnose-variant. The prior finding stated the four variants and gave each one a body shape. It also added a rule to CONCLUDE: if `type:` is missing on a template-version-2 finding, HALT and ask the user to specify — implying that `type:` is single-valued.

The user noticed something the prior finding doesn't address. In actual recent practice, findings often contain content that looks like more than one variant's shape — a decision finding's MUST section might list concrete file edits (which look like spec-modification content); a recommendation finding might have a clear top pick that looks like a decision. If the schema is strictly single-valued, where do these cross-variant findings fit?

The user's question presupposed that the cross-variant cases are real and that the schema needs to accommodate them. The inquiry's job was to test that presupposition.

### What was actually going on

The presupposition has TWO possible readings of what "type" means. The first reading is content-mention: a finding is "type X" if anywhere in its content it has X-shaped material. Under this reading, a decision finding whose MUST contains Edit-Specifications is type=decision AND type=spec-modification simultaneously. The second reading is body-section-shape: a finding's type is determined by the variant-distinguishing sections of its Finding-body, which sits between the universal-base sections (Question, Finding Summary, Next Actions, Reasoning, Open Questions) and is the only section whose shape varies by variant. Under this reading, the MUST section's content (including Edit-Specifications) is part of the universal-base and does NOT determine the finding's type.

The prior finding never states which reading is canonical. But its design — using `type:` to SELECT a single Finding-body template at compilation time — forces the body-section-shape reading. A single-tag-selects-single-template architecture cannot work with the content-mention reading because content-mention is ambiguous (a finding could have content from multiple variants).

So the prior finding silently uses the body-section-shape reading. The user (and the earlier exploration step of this inquiry) implicitly used the content-mention reading, which is why the multi-type claim seemed empirically strong (three of three recent findings appeared multi-typed). Under the body-section-shape reading, those same three findings are single-typed: their Finding-body sections fit one variant each; the spec-edit content lives in the universal MUST section per the prior finding's own "concrete-edit-form" rule, which applies to ALL findings regardless of type.

### Why the schema stays single-valued

Two structural reasons make single-valued `type:` correct under the body-section-shape reading.

First, the prior finding's architecture forces it. The Finding-body section is one slot whose shape is selected by `type:`. A single slot has one shape. A list-valued `type:` would have to either pick the first entry to select the body shape (which collapses to single-value functionally) or compose shapes from multiple variants (which would require defining the composition rule and possibly a new universal section for cross-variant content — a much larger architectural change).

Second, the universal-base architecture already handles cross-variant content. The MUST/COULD/DEFERRED sections in Next Actions are universal across all variants. The "concrete-edit-form" style rule (which says any "edit X" action must reference an Edit-Specification sub-form) applies to every finding that prescribes changes, regardless of type. So a decision-variant finding whose MUST contains detailed Edit-Specifications is doing exactly what the prior finding's rules say it should do — using the universal-MUST shape for action items, with the variant body retaining its decision-variant shape.

Once these two facts are stated, the multi-type appearance dissolves. The three recent findings examined for this inquiry — the sensemaking-spec-comparison, the biggest-next-gain analysis, the navigation-discipline naming — each have a Finding-body section in one variant's shape (decision-variant for the first and third; recommendation-variant for the second), with their MUST sections containing the Edit-Specifications that the universal-base architecture prescribes. They are single-typed under the right reading.

### Why the clarifying note is the right refinement

The prior finding's structural commitments are sound. What was missing was an explicit statement of which reading of "type" the schema uses. The clarifying note adds exactly that statement. It does not change the schema, the variant taxonomy, the universal-base architecture, or any CONCLUDE behavior. It pre-empts the reading ambiguity that the user (correctly) identified.

The note's location in the prior finding is its Variants section (the section that introduces the four variant Finding-body shapes). The note's wording is:

> `type:` denotes the BODY-SECTION-SHAPE of the finding's typed-variant body, not the content-mention of variant-related material anywhere in the finding. Edit-Specifications in the universal MUST section (per the "concrete-edit-form" style rule above) are universal-base content and do NOT make a decision-typed finding into a spec-modification-typed finding. A finding has exactly one `type:` value because its Finding-body section has exactly one variant shape. If a future finding genuinely has hybrid body content (variant-distinguishing sections from two or more variants in the same body), the schema decision re-opens — see the corpus-audit revival trigger in `devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/finding.md`.

### Why the corpus audit ships now

The verdict assumes no hybrid-body findings exist in the current corpus. The prior finding's analysis of the corpus identified the four variants by pattern-recognition over the body shapes; it did not specifically search for findings whose bodies contain sections from two variants. The audit closes this empirical gap. Three outcomes are possible:

- **No hybrid-body findings found.** The verdict stands; the schema is confirmed single-valued; the deferred list-valued alternative stays deferred.
- **One or two hybrid-body findings found.** Re-examine each: is the finding genuinely hybrid (two clean variant body shapes co-existing), or did the author miss the body-shape-vs-MUST distinction? If genuinely hybrid, the verdict re-opens and the list-valued schema becomes the right answer.
- **Many hybrid-body findings found.** The schema is empirically wrong; switch to the list-valued schema immediately and revise the prior finding more substantially.

The audit's time-bound gate is two weeks because the corpus is small (~50 findings) and the audit per finding is a quick body-section check (read the Finding-body section; identify its dominant variant shape; flag anomalies). At roughly two minutes per finding, the total audit is two-to-three hours of focused work.

### Why this verdict differs from the user's framing

The user's framing assumed multi-type findings are a real phenomenon and the schema needs to capture them. This verdict says: the empirical multi-type appearance is real, but it dissolves under the right reading of the schema, so the schema doesn't need to capture it. This is a more conservative verdict than the user's framing suggested. It is offered with the audit MUST item as the empirical safety net — if the audit produces evidence that the verdict is wrong, the deferred alternative ships.

The verdict is also explicit about the inquiry chain that produced it. The earlier exploration step claimed three of three recent findings were multi-typed. Sensemaking revised this claim by surfacing that the reading of "type" determines the answer. Under the body-section-shape reading the prior finding's design forces, those three findings are single-typed. The exploration step's claim was an artifact of the looser content-mention reading, not a fact about the corpus. Walking back an earlier step's claim is itself a result — it means the inquiry's structural argument prevailed over its initial empirical headline.

## Next Actions

### MUST

- **What:** Add a clarifying note to the prior finding (`devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md`) in its Variants section, stating that `type:` denotes body-section-shape, that Edit-Specifications in MUST are universal-base content, and that a finding has exactly one `type:` because its Finding-body has one variant shape.
  **Who:** User (single edit).
  **Gate:** Observable — the prior finding's Variants section contains the clarifying-note paragraph (see exact wording in the Finding body above).
  **Why:** Pre-empts the silent-reading ambiguity that the user (correctly) identified. Closes the gap without changing the schema. Multi-mechanism convergence (the structural-design argument plus the tagged-union domain transfer plus the strict-database-schema domain transfer all support single-valued `type:`).

- **What:** Audit the current corpus of findings under `devdocs/inquiries/**/finding.md` for hybrid-body findings. For each finding, identify its Finding-body section (separately from the universal-base sections) and check whether it contains variant-distinguishing sections from two or more of the four variants. Flag any hybrid-body finding identified.
  **Who:** User (a focused two-to-three-hour pass over the ~50 corpus findings).
  **Gate:** Time-bound — complete within two weeks of this finding's publication. Observable on completion: a one-page audit summary recording per-finding body-section shape and any hybrid-body flags.
  **Why:** Produces empirical evidence to validate or invalidate the verdict. If no hybrid-body findings are flagged, the single-valued schema stands. If one or more are flagged, the deferred list-valued alternative re-opens and the prior finding's schema is revised.

### COULD

- **What:** Add an Anti-Ambiguity Discipline note to `cognitive_harness/MVL+/SKILL.md`'s Rules section OR to the prior finding's spec-modification variant template, stating: "Schema-defining findings must explicitly state which reading their schema fields use (e.g., 'this field denotes body-shape, not content-mention'; or 'this field denotes author-intent, not the field's structural role'). Silent reading-assumptions create ambiguity that requires future refinement inquiries to resolve."
  **Who:** User (separable from the MUSTs; can ship later).
  **Gate:** Observable — the named location contains the discipline note.
  **Why:** Generalizes the lesson from this inquiry. Prevents the same silent-reading gap from appearing in other schema fields. Scope-creep concern was tested in Critique; the note is small enough that it does not expand this inquiry's primary verdict.

### DEFERRED

- **What:** Adopt the list-valued schema (`types: [primary, secondary]`) per Innovation candidate W3.
  **Gate:** Condition-bound — revival fires if the MUST audit identifies one or more hybrid-body findings AND the hybrid-body case turns out to be genuine (not author confusion about the body-shape vs MUST distinction).
  **Why (if revived):** Captures genuine multi-type membership in the schema. Cost is small if revived (key `type:` becomes `types:`; existing findings update their frontmatter from single to single-item list; CONCLUDE's HALT-and-ask rule revises to "HALT-and-ask if `types:` is missing or empty"). Revival is reversible.

- **What:** Add an `intent:` field separately from `type:` per Innovation candidate N2 (dual single-value fields capturing body-shape AND author-intent).
  **Gate:** Condition-bound — revival fires if a concrete inquiry surfaces a case where `type:` (body-shape) and the author's intent demonstrably disagree, AND the disagreement is itself useful information.
  **Why (if revived):** Captures the multi-role nature of typing without going list-value. Today the case for capturing author-intent separately from body-shape is not demonstrated.

- **What:** Rename `type:` to `body_variant:` per Innovation candidate N4 (self-documenting field name).
  **Gate:** Condition-bound — revival fires if the clarifying note (from this finding's MUST) proves insufficient (three or more future findings show the same misreading despite the note being in place).
  **Why (if revived):** Eliminates the ambiguity surface at the field-name level. Cost is the rename plus migration; revival makes that cost worth paying.

- **What:** Drop the `type:` field entirely and derive variant from body-section presence (Innovation candidate N5).
  **Gate:** Condition-bound — revival fires when a future spec-evolution inquiry on CONCLUDE's pipeline-detection mechanism opens the question of section-recognition logic.
  **Why (if revived):** Eliminates the `type:` field as an ambiguity surface entirely. Cost is significant (CONCLUDE rewrite with section-recognition); revival requires that cost to be justified by a broader spec evolution.

## Reasoning

### Why this verdict survives the user's anti-Status-Quo-Bias concern

The user pointed at a real gap in the prior finding. A verdict that says "the prior finding is fine; just add a note" could look like Status Quo Bias — defending the prior because it's there. Sensemaking explicitly tested this in its Phase 3 Ambiguity 2 and Critique's D7 dimension. The defense for the verdict is structural, not inertial: the prior finding's architecture (universal-base plus typed-variant; a single-tag-selects-single-template body) forces the body-section-shape reading. Adopting any other reading would require dismantling the architecture, not just the schema. Six independent mechanisms (the tagged-union domain transfer; the strict-database-schema domain transfer; the EX-1-month extrapolation; the IV-Level-1 inversion that schema's job is to force clarity not capture reality; the CB-Generic combination with the audit; and Sensemaking's reading-(b) commitment) converge on the same verdict. The convergence is not inertial.

### Why the earlier exploration claim was walked back

This inquiry's exploration step initially claimed three of three recent findings were multi-typed. Sensemaking surfaced that this claim used a content-mention reading of "type" that the prior finding's design does not support. Under the body-section-shape reading that the design forces, those same three findings are single-typed. The exploration's claim was an artifact of the wrong reading, not a fact about the corpus.

Walking back a discipline output's headline within the same inquiry is a feature of the loop, not a failure. The /MVL+ loop is supposed to produce structural correction; the earlier exploration's looser reading was caught and corrected by the later sensemaking step. The verdict that resulted is structurally sound; the inquiry produced its own correction.

### Why the audit ships now rather than later

The verdict assumes the corpus contains no hybrid-body findings. The prior finding's analysis did not specifically search for them. Without the audit, the verdict's empirical foundation is "no hybrid bodies in the three recent findings I examined" — which is too small a sample to confirm the assumption. The audit closes this empirical gap at low cost. Two to three hours of focused work produces a confirmed answer.

If the audit's outcome is "no hybrid bodies found," the verdict is empirically confirmed. If the audit finds hybrid bodies, the verdict re-opens with empirical evidence — the deferred list-valued alternative becomes the right answer. The audit's value comes from making the answer measurable, not from the answer itself.

### Why one alternative was killed outright

Innovation candidate N3 reframed the multi-type appearance as a SCOPE VIOLATION at the inquiry level — the suggestion was that findings appearing to span types are actually inquiries that had multiple primary questions and should have been split. Critique tested this against the empirical cases. The three recent findings each addressed a single primary question; their MUST sections contained Edit-Specifications because answering the primary question required spec edits, not because the inquiry had multiple primary questions. N3 mis-diagnoses the empirical cases. The diagnosis is conceptually elegant but wrong about the data. KILLed.

### Why several alternatives were deferred rather than promoted

The list-valued schema (W3), the dual-field schema (N2), the rename (N4), and the derive-from-sections approach (N5) are all internally coherent options. Each has a revival trigger named in DEFERRED. The reason they are not promoted today is empirical — no current evidence demands the additional complexity. The audit produces evidence; the revival triggers fire on evidence; the deferrals are not abandonment, they are conditional adoption.

## Open Questions

### Monitoring

- After the clarifying note ships, watch the next three to five findings produced via /MVL+. Do their authors (whether the user or a future AI session) correctly distinguish body-shape from MUST content when assigning `type:`? If misreading persists despite the note being in place, the note's wording is insufficient and N4 (field rename) becomes the right escalation.

- Watch the audit's outcome. The three possible results (no hybrid bodies / few hybrid bodies / many hybrid bodies) lead to three different verdict trajectories. Track which outcome occurred and which verdict became active.

### Blocked

- The list-valued schema's correctness depends on whether the audit identifies hybrid-body findings. Blocked on the audit's completion.

- The `intent:` field's value depends on whether a concrete inquiry surfaces a case where body-shape and author-intent disagree usefully. Blocked on that case arising.

### Research Frontiers

- The derive-from-sections approach (N5) eliminates the `type:` field entirely by detecting variant identity from the Finding-body's section names. This is an interesting long-term direction that could eliminate the ambiguity surface this inquiry addressed by adding a clarifying note. It requires significant CONCLUDE rewrite and section-recognition logic; preserved for a future spec-evolution inquiry.

- A broader meta-question: are there OTHER schema fields in the project that have the same silent-reading-ambiguity gap as `type:` had? The Anti-Ambiguity Discipline COULD action surfaces this question but does not survey it. A future inquiry could systematically audit all schema-defining findings for reading-commitment gaps.

### Refinement Triggers

- If the audit identifies hybrid-body findings, this verdict re-opens. The list-valued schema (W3) becomes the right answer; the prior finding's schema gets revised more substantially than this verdict's clarifying note.

- If three or more future findings show `type:` misreading despite the clarifying note being in place, this verdict re-opens with N4 (field rename to `body_variant:`) as the right escalation.

- If the project adopts the workshop pattern more widely and runs a spec-evolution inquiry on the CONCLUDE pipeline-detection mechanism, N5 (derive-from-sections) becomes a candidate for that inquiry's scope.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
in devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md
he finding treats type: as a strict single-value discriminator (per its Step-1 pipeline-detection rule that HALTs and asks the
   user if type: is missing rather than allowing multiple). The Reasoning section addresses adjacent concerns (5th-type emergence;
  default-when-missing) but does not consider the case where one finding genuinely spans two buckets — e.g., a decision that's also a
  spec-modification, or a recommendation that includes a loop-diagnose component. So your question is a real gap in that finding:


lets redo our analysis then
```

The "your question is a real gap in that finding" framing was a quote from the assistant's prior-turn response (which raised the multi-type question after the user noticed the single-value schema). The user's directive ("lets redo our analysis then") asked for a full /MVL+ pass on the multi-type question — which produced this finding, including the structurally-required walkback of the assistant's earlier claim under Sensemaking's reading commitment.

</details>
