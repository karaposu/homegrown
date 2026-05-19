---
status: active
---
# Step Refinement

A **Step Refinement** is a step-anchored rule that lives at a specific step, phase, or component within a thinking discipline's process model. The corpus has organically accreted ten such rules across six disciplines (`explore`, `sense-making`, `decompose`, `innovate`, `td-critique`, `comprehend`); they share a uniform shape that is now stable enough to name descriptively. This file is the canonical home for the primitive's definition, shape, subtypes, and visual marker.

The primitive was identified by the inquiry at `devdocs/inquiries/2026-05-08_18-56__discipline_corpus_emerging_pattern/finding.md`. The visual marker (italic prefix) was proposed by the prior inquiry at `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`.

---

## Scope

This document is **descriptive, not prescriptive**. It names what's already implicitly there in the corpus and establishes the going-forward expectation for new bolted-on rules. Specifically:

- **No mechanical enforcement.** No linters, no validators, no schema validation that rejects non-conforming content.
- **Existing non-conforming rules align organically when next touched.** A rule already in the corpus that doesn't quite match the 4-element shape is not retroactively edited solely for compliance; it aligns when its host discipline is next refactored for any reason.
- **The visual marker is recommended for new rules.** Existing rules adopt it as they're touched; rollout details are governed by the inquiry's Q3 strategy (see `devdocs/inquiries/2026-05-08_18-56__discipline_corpus_emerging_pattern/finding.md` § Next Actions).
- **The placement convention** at `docs/discipline_rule_placement.md` is the canonical authority for *where* a Step Refinement lives. This document specifies *what shape* it takes once placed.

### Phase-fit precision

The "descriptive only" framing in this spec applies at two scopes that are complementary, not interchangeable:

- **Corpus-machinery scope** — no linters, no validators, no schema-validation tooling that blocks non-conforming inputs. This stays deferred. Mechanical enforcement requires telemetry and calibration the corpus doesn't yet have.
- **Per-discipline maintenance scope** — active human-driven incremental tidying is the corpus's actual maintenance pattern. Lifting Form-2 instances to Form-1 (see the Lifting Recipes below); adding visual markers to catalogued Form-1 instances; restoring failure-mode cross-reference symmetry — these are routine maintenance work, not mechanical enforcement.

Both scopes are simultaneously correct: defer mechanical enforcement; embrace routine human-driven tidying.

---

## Definition

A **Step Refinement** is a structured rule with all four of the following elements:

1. **Name** — a bold prefix on the first line that identifies the rule.
2. **Trigger condition** — the condition under which the rule applies during the discipline's execution.
3. **Required action** — what the discipline must do when the trigger fires.
4. **Typed anchor-link** — a link to either (a) a named failure mode the rule prevents, or (b) a structural completeness concern the rule enforces.

The rule lives at its canonical step / phase / component per the placement convention. The 4-element shape is what makes the rule auditable, machine-traversable, and discoverable; the typed anchor-link is what makes it non-arbitrary.

---

## The 4-Element Shape

### 1. Name (bold prefix)

A bold-prefixed first line that names the rule unambiguously. Examples from the corpus:

- `**Type-Aware Probing.**`
- `**Load-bearing concept test.**`
- `**Determination-mechanism piece check.**`
- `**Multi-axis prosecution depth check.**`

The name should be short (3–6 words), descriptive, and unique within the discipline.

### 2. Trigger condition

A clear statement of when the rule applies. Format: "When [observable condition]…" or "If [observable condition]…" Examples:

- "When the coarse scan inventories a candidate that carries a load-bearing quantifiable claim…"
- "When load-bearing concepts have been stabilized in earlier output…"
- "When the candidate set being evaluated involves project artifacts, operations, or state…"

The trigger should be observable from the discipline's current state — not require external context the discipline doesn't have.

### 3. Required action

A clear statement of what the discipline must do when the trigger fires. Format: "…the discipline must [specific action]." Examples:

- "…at least one empirical probe of the quantifiable claim is required before the candidate can pass into the stabilized candidate set."
- "…generate at least one ambiguity-collapse pair testing each load-bearing concept."
- "…the dimension list must include at least one project-specific risk dimension."

The action should be concrete enough that a future LLM running the discipline can verify it has been done.

### 4. Typed anchor-link

A link from the rule to what justifies it. The link is one of two types (the subtypes below). The typed anchor-link is the element that connects the rule to a corpus-known failure pattern or structural concern, making the rule's purpose explicit.

---

## Two Subtypes

### Failure-anchored (dominant — 8 of 10 catalogued instances)

The anchor-link points to a named failure mode in the discipline's failure-mode catalog. The link sentence has the form: *"Failing this is an instance of [named failure mode]."* The link makes the rule's purpose explicit: it prevents a specific, named failure pattern.

**Corpus examples:**

- **`/explore` — Type-Aware Probing** (in the Probe component). Anchor: *"Dispatching a load-bearing quantifiable claim with qualitative reasoning … without an empirical probe is an instance of Surface-Only Scanning."*
- **`/sense-making` — Load-bearing concept test** (in Phase 3 Ambiguity Collapse). Anchor: *"Failing to generate at least one ambiguity-collapse pair per load-bearing concept is an instance of Premature Stabilization (failure mode #2)."*
- **`/decompose` — Determination-mechanism piece check** (in Step 7 Self-Evaluate). Anchor: *"Failing this check is an instance of Missing Pieces (failure mode #4)."*
- **`/td-critique` — Multi-axis prosecution depth check** (in Phase 2 Adversarial Evaluation). Anchor: *"Prosecution that constructs only dimension-level objections without considering relevant depth-axes is shallow."* (links to Rubber-Stamping, FM #2)

### Coverage-anchored (minority — 2 of 10 catalogued instances)

The anchor-link points to a structural completeness concern rather than a named failure mode. Coverage-anchored rules enforce a positive structural property: that the discipline's output covers the orthogonal axes the work varies along.

**Corpus examples:**

- **`/innovate` — Output disposition categories** (in Phase 3 Test). Coverage concern: ensures every passing survivor carries an explicit disposition (`ACTIONABLE` / `DEFERRED with revival trigger` / `RESEARCH FRONTIER`) rather than terminating without classification.
- **`/innovate` — Axis coverage check** (in Phase 3 Test). Coverage concern: ensures candidate sets vary along orthogonal axes; if the underlying problem has multiple orthogonal axes, each axis should have at least one candidate variant.

Coverage-anchored rules are accommodated as a legitimate variant. They share the same name / trigger / action structure as failure-anchored rules; they differ only in what the anchor-link points to.

### When to use which subtype

- If the rule prevents a specific, named failure pattern that already exists in the discipline's failure-mode catalog, use **failure-anchored**. The link sentence cites the failure mode by name.
- If the rule enforces structural completeness (multi-axis coverage, multi-direction validation, multi-stage disposition) without preventing a single named failure, use **coverage-anchored**. The link sentence describes the structural property.
- If a rule starts as coverage-anchored and a recurring failure pattern emerges in practice, the rule may evolve into failure-anchored once the failure mode is named in the catalog. Both forms are valid; the corpus accommodates both.

---

## Three Forms of Refinement Content

A Step Refinement appears in the corpus in one of three forms. All three share the 4-element shape; they differ in placement and integration with the surrounding spine procedure.

### Form 1 — Standalone bolted-on subsection

A separate subsection at its canonical step / phase / component, with bold-prefix name + body. The dominant form in the corpus today (8 of 10 catalogued instances at the time of writing). The visual marker (`*Refinement note (applies at [...]):*` italic prefix from the next section) is the recognizable surface for Form 1.

**Examples:**

- `/explore` — Type-Aware Probing at the Probe component
- `/sense-making` — Load-bearing concept test at Phase 3 Ambiguity Collapse

### Form 2 — Scattered / orphaned

A rule with the 4-element shape positioned ambiguously rather than as a standalone subsection. Form 2 has four observable sub-types:

- **FM-buried** — the rule lives inside a failure-mode's "How to prevent" / "Corrective" sentence rather than at the canonical step. Example: `/explore` — "jump scan," currently inside False Confidence's Corrective.
- **Inline bullet** — the rule lives as one item inside a list (perspective list, step list) where it's structurally a bullet but semantically a refinement. Example: `/sense-making` — "Phase / Calibration-State perspective."
- **Orphan** — the rule lives at a process-model level (between phases, in a general "process notes" section) rather than anchored to a specific phase. Example: `/sense-making` — "Accommodation trigger."
- **Embedded** — the rule lives inside another component's or mechanism's description rather than as a separate refinement. Example: `/innovate` — "Inversion depth check," inside the Inversion mechanism's description.

Form 2 is observable in the corpus but not desirable as canonical. The Lifting Recipes (sub-section below) describe how to migrate Form 2 instances to Form 1 during routine maintenance passes.

### Form 3 — Absorbed into spine template

A refinement whose content has been integrated into a canonical procedure template rather than placed as a separate subsection. The rule fires automatically as part of the procedure; its prevention role is implicit in the procedure's structure.

**Canonical example:** `/sense-making` — the structured ambiguity entry template at Phase 3 Ambiguity Collapse. The template's individual fields (Strongest counter-interpretation; Why-fails-on-structural-grounds; Confidence; Resolution; What-now-fixed) are the prevention rules for Clean Resolution Trap (failure mode #5) — but they have been integrated as the spine of how Ambiguity Collapse is performed, not left as a separate refinement.

**Form-3-fit criterion:** Form 3 fits when the rule's content can be integrated into the canonical procedure such that following the procedure naturally fires the rule, AND the rule's anchor-link is implicit in the procedure's structure rather than cited as a separate sentence.

Form 3 trade-offs: it is execution-hugging (the rule fires as part of the mandatory procedure) but loses the explicit "this prevents [failure mode]" cross-reference. The choice between Form 1 and Form 3 is a per-rule judgment by the spec author. This document acknowledges Form 3 as a legitimate alternative; it does not prescribe when to choose Form 3 over Form 1.

### Lifting Recipes (Form-2-to-Form-1)

Form-2-to-Form-1 lifting is the dominant tidying operation. Each Form-2 sub-type has a recognizable recipe:

| Sub-type | Recipe |
|---|---|
| **FM-buried** | Extract the rule from the failure-mode Corrective sentence. Reformat as standalone subsection at canonical step with bold-prefix name + body + visual marker. Add symmetric back-reference from the failure-mode's Corrective to the new standalone subsection. |
| **Inline bullet** | Split: keep a short bullet in the original list (just the perspective / step / item header — no detail). Lift the trigger / action / failure-mode-link content to a standalone refinement after the list with the visual marker. |
| **Orphan** | Assign canonical phase (where the rule actually fires). Lift to standalone refinement at that phase. Resolve implicit anchor-link by either citing an existing failure mode or proposing a new one. |
| **Embedded** | Decide whether the rule applies to the mechanism / component (then keep with visual marker added; this is Form-1-at-component-level rather than at-step-level) or to the post-mechanism step (then lift to the step). |

Lifting is descriptive maintenance work, not mechanical enforcement. See the Phase-fit precision in the Scope section for the two-scope distinction.

---

## Visual Marker

The prior inquiry at `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md` proposed an italic prefix as the typographic convention to distinguish a Step Refinement from the spine of its host process step. The convention is:

```markdown
*Refinement note (applies at [Step / Phase / Component]):*
```

The italic prefix sits on the first line of the refinement, before the bold-prefixed name, and identifies the canonical anchor (the step, phase, or component the rule applies at). For long refinements (over 20 lines of body content), an optional closing marker `*— end refinement note —*` may be added.

The visual marker is the recognizable surface where the primitive lives in rendered specs. Naming the primitive consistently with the marker (`Step Refinement` ↔ `Refinement note`) reinforces the connection: the primitive is what the marker visually identifies.

The visual marker is recommended for new Step Refinements. Existing instances adopt the marker as they're touched (per the rollout strategy in the source inquiry's Q3); they remain valid Step Refinements without the marker until then.

---

## Why "Step Refinement"

The name was selected over alternatives. "Step Rule" was rejected as too generic — it doesn't signal the failure-anchoring or refinement-accretion semantics. "Failure-Anchored Rule" was rejected as excluding the coverage-anchored subtype. "Anchor Rule" was rejected because the term *anchor* is already used in `cognitive_harness/sense-making/references/sensemaking.md` for "cognitive anchors" — name collision risk.

"Step Refinement" combines two semantically load-bearing components:

- **Step** — the canonical-home placement (these rules live at a specific step / phase / component per the placement convention at `docs/discipline_rule_placement.md`).
- **Refinement** — the accretion-pattern semantics (these rules are added over time to refine an existing process, often in response to observed failures).

The two-word name is distinctive, doesn't collide with existing corpus vocabulary, and connects to the prior inquiry's `*Refinement note:*` visual marker. It is project-coined and project-specific.

---

## Inverse Map (byproduct)

Once Step Refinements have a uniform 4-element shape with the typed anchor-link, the corpus becomes machine-traversable in two directions:

- **Forward:** rule → failure mode (or structural concern). This direction is already explicit in each rule's anchor-link sentence.
- **Inverse:** failure mode → rules that prevent it. This direction is currently navigable only by grep; it can be auto-generated by a future tool that collects all rules whose anchor-link names a given failure mode.

The inverse map answers questions like: *"Which Step Refinements across the corpus prevent Premature Stabilization?"* or *"Does every named failure mode have at least one Step Refinement that prevents it?"* These are useful audit and debugging questions.

The inverse map itself is **deferred** — it is not maintained by hand in this file because hand-maintained audit tables drift. When tooling exists to auto-generate the map (e.g., a script that greps for the failure-mode link sentence pattern across the corpus and emits a table), the table can be added to this file or to a separate audit artifact. See the source inquiry's DEFERRED actions for the revival trigger.

---

## Relationship to Other Corpus Concepts

- **Placement convention** (`docs/discipline_rule_placement.md`). The placement convention specifies *where* a refinement rule lives — operation-level scope → component subsection; step-level scope → process-model step; failure-only-form → failure-mode prevention subsection. This document specifies *what shape* a refinement rule takes once placed. The two are complementary: placement convention answers "where"; Step Refinement answers "what."

- **Discipline failure modes.** Each discipline's `references/X.md` has a `## Failure Modes` section listing recognized failure patterns (typically 6–8 per discipline). Failure-anchored Step Refinements link to entries in this catalog. When a new failure mode is added to a discipline, any Step Refinement that prevents it can be updated to cite the new failure mode by name.

- **Discipline Output Contract.** A separate corpus primitive specified at `cognitive_harness/contracts/discipline_output.md` (when shipped). The Output Contract governs what every discipline output exposes (verdict line + structural sections); Step Refinement governs what rules INSIDE a discipline spec look like. Different surfaces, different consumers.

- **Refinement Note (visual marker).** The italic-prefix convention proposed at `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md` (as actionable C3.4). The visual marker is the typographic application of this primitive.

---

## Adding a New Step Refinement

When adding a new bolted-on rule to a discipline spec:

1. **Identify the canonical home** per the placement convention (which step / phase / component does it belong to?).
2. **Write the four elements:** bold-prefixed name + trigger condition + required action + typed anchor-link.
3. **Apply the visual marker:** prefix the rule with `*Refinement note (applies at [home]):*`.
4. **Pick the subtype:**
   - If preventing a named failure mode: failure-anchored. End the rule with the link sentence: *"Failing this is an instance of [failure mode name] (failure mode #N)."*
   - If enforcing structural completeness: coverage-anchored. End the rule with a link sentence describing the structural property.
5. **Verify uniqueness:** the rule's name should not collide with another rule in the same discipline.

This procedure is descriptive guidance, not enforced. Existing rules in the corpus that don't follow it remain valid; new rules are encouraged to follow it for uniformity.
