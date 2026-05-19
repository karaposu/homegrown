> **Loading note.** This file holds the cross-cutting governance rules that fire at content-decision points across the MVL+ runner, the CONCLUDE protocol, and any future spec-edit workflow. It is loaded when a trigger detected in a runner / protocol fires and the runner needs the full rule body. Read in full when you need the canonical rule text; runners may load only the relevant sub-section. Do not summarize on partial load — every rule's `Trigger / Required friction / Override path / Worked example` shape is load-bearing.

---

# Spec Governance — Cross-Cutting Rules at Content-Decision Points

## Purpose

This file is the canonical home for governance rules that prevent **silent absorption of content decisions**. Each rule names a specific moment in a workflow where a content decision is being made — and where the failure mode is for the decision to be absorbed without examination (default, inheritance, convention, permissive interpretation). The rule introduces small structural friction at that moment so the decision becomes explicit.

These rules are cross-cutting: they apply across all inquiries, all findings, and (eventually) all spec edits, regardless of which discipline is running. They live here as a sibling to `conclude.md`, `branch_inquiry.md`, `loop_diagnose.md` — same protocol layer; not a discipline.

## Shared shape

Every rule in this file follows the same four-part shape:

- **Trigger** — when the rule fires; what content-decision moment it governs.
- **Required friction** — what the author must explicitly produce when the trigger fires.
- **Override path** — how to skip the friction with explicit reasoning (silent skip is not allowed).
- **Worked example** — at least one concrete case applying the rule, including subtle / contested / false-negative variants where useful.

The shared shape is itself a commitment: rules are added by writing one new sub-section in this same shape. New rules must explain WHY their friction prevents silent absorption, not just specify the friction.

## Loading

This file is referenced by:

- `cognitive_harness/MVL+/SKILL.md` — at inquiry creation, runs `Pre-Template Checks` that detect triggers; for each fired trigger, the runner consults this file's relevant sub-section and obligates the resulting `_branch.md` content.
- `cognitive_harness/protocols/conclude.md` — at finding compilation, runs trigger detection on the finding's content + `_branch.md` declarations; for each fired trigger, the runner consults this file's relevant sub-section and obligates the finding to include the required friction.
- (Future) any spec-edit workflow that proposes changes to discipline / protocol / framework artifacts.

Where rules currently have inline copies in the runner / protocol files (for operational convenience while the migration to pointer-style is pending), this file is **canonical**. If the inline copy and this file diverge, this file wins; the inline copy is to be reconciled.

## Index

1. [Layer Commitment](#layer-commitment) — fires at MVL+ inquiry creation
2. [Synthesis Trigger](#synthesis-trigger) — fires at MVL+ inquiry creation
3. [User-words-as-constraint](#user-words-as-constraint) — fires at MVL+ inquiry creation
4. [COULD-vs-MUST dependency gating](#could-vs-must-dependency-gating) — fires at CONCLUDE finding compilation
5. [Synthesis re-test enforcement](#synthesis-re-test-enforcement) — fires at CONCLUDE finding compilation
6. [Deferral-binding (planned)](#deferral-binding-planned) — designed but not yet materialized; will fire at spec-edit time
7. [Anatomy-as-template + spec-edit checklist (planned)](#anatomy-as-template--spec-edit-checklist-planned) — designed but not yet materialized; will fire at spec-edit time

---

## Layer Commitment

### Trigger

Inquiry start, when the question targets a discipline / protocol / framework artifact for from-scratch redefinition, meta-restructure, or fundamental rewrite. Trigger phrases include: "redefine X from scratch", "what should X be", "rewrite the X spec/protocol", "X isn't doing the right thing — let's redo it", or any question whose answer would replace or restructure an existing discipline / protocol / framework artifact.

OMIT the rule entirely when the question is an ordinary problem-solving inquiry that does not target a discipline / protocol / framework artifact.

### Required friction

`_branch.md` includes a populated `## Layer Commitment` section that:

1. Declares ONE primary cognitive layer the inquiry operates at:
   - **Meaning** — what the thing IS as a cognitive operation; what concept it captures. Adjudicates name, definition, essence.
   - **Structural** — what the thing's spec LOOKS LIKE. Adjudicates sections, organization, schema, artifact shape.
   - **Process** — what STEPS the thing runs. Adjudicates procedure, mechanism, gates, loop.
2. Lists the other-layer alternatives that were considered and are explicitly out of scope for THIS run, with a one-line reason each (typically: depends on the chosen layer being settled first).

### Override path

If the inquiry intends to address multiple layers, declare a sequential plan: which layer first, what the next layer's inquiry will be, and why this order.

If the primary layer cannot be picked, that is itself a signal — STOP and present the layer ambiguity to the user before continuing. Do not silently default to the structural layer just because the discipline tooling reaches for sections-and-schema-shaped outputs.

### Worked example

Three contrasting question-shapes mapped to layers (X here can be any discipline, protocol, or framework artifact):

- *"Redefine X from scratch — I think it might mean Y"* → primary layer: **meaning**. The user is questioning what X IS as a concept or operation; structural and process choices are downstream of settling that.
- *"X's spec organization is wrong — let's restructure the sections"* → primary layer: **structural**. The user accepts what X is; the artifact's shape is the problem.
- *"X's procedure has a missing step"* or *"X runs in the wrong order"* → primary layer: **process**. The user accepts what X is and how it's organized; the steps are what need fixing.

### Inline copy location

`cognitive_harness/MVL+/SKILL.md` — step 1 trigger-check + `_branch.md` template `## Layer Commitment` section.

---

## Synthesis Trigger

### Trigger

Inquiry start, when the question consolidates / synthesizes / rolls up TWO OR MORE prior inquiry outputs (findings, specs, drafts) into a single output, OR when the question explicitly produces an "accurate version," "consolidated version," "merged version," or similar of prior outputs. Trigger phrases include: "synthesize X and Y," "consolidate the priors," "produce an accurate/canonical version of X," "roll up findings A through C."

OMIT the rule entirely when the inquiry does not consume prior inquiry outputs as inputs.

### Required friction

`_branch.md` includes a populated `## Synthesis Trigger` section that lists each prior output being synthesized with a short description of what it commits to:

- `[path to prior 1]` — short description of what it commits to.
- `[path to prior 2]` — short description of what it commits to.
- (...etc)

The inquiry's discipline work (especially Sensemaking and Critique) must do the re-testing of inherited commitments, not just record the inheritance. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section per the [Synthesis re-test enforcement](#synthesis-re-test-enforcement) rule below.

### Override path

None at trigger detection — if the synthesis happens, the obligation fires. The override is per-commitment at finding compilation: each inherited commitment may be flagged as `INHERITED-WITHOUT-RE-TEST` with a reason in the finding's re-test section.

### Worked example

- **Clear positive case.** *"Synthesize the May 12 priors (`end-goal-aware`, `surfacing-mechanism-depth`, `old-vs-new`) into a unified `explore_accurate.md`."* — three priors named, ~11 inherited commitments expected. `_branch.md` lists the three priors; finding's re-test section names each commitment with status.

- **False-negative case** (the trigger fires even without trigger-phrase exact match). *"Produce a definitive version of `/explore` based on what we've learned."* — language doesn't say "synthesize" but the answer would consume multiple prior inquiry outputs. The trigger fires regardless. The runner detects intent ("definitive version of X based on what we've learned" = synthesis) not just keyword.

### Inline copy location

`cognitive_harness/MVL+/SKILL.md` — step 1 trigger-check + `_branch.md` template `## Synthesis Trigger` section.

---

## User-words-as-constraint

### Trigger

Inquiry interprets permissive user phrasing — examples: *"we could do X,"* *"manual would be fine,"* *"I think we can defer Y,"* *"it's OK to skip Z,"* *"I'm fine with W"* — as a CONSTRAINT to satisfy via new tooling, building a new artifact / runner / mechanism in response. Trigger detection is at inquiry-start when the inquiry's proposed scope includes building tooling whose justification traces back to permissive user phrasing rather than an explicit user request.

OMIT the rule entirely when the inquiry's tooling proposals trace to explicit user requests (e.g., *"build me a /staged-explore runner"*).

### Required friction

Default rule: **permissive user phrasing is treated as DESCRIPTIVE OBSERVATION, not as a tooling constraint.** Tooling artifacts (new runners, new files, new mechanisms) are built only when the user explicitly REQUESTS them. The inquiry's `_branch.md` Source Input distinguishes between explicit requests and permissive observations when both appear in the user's input.

### Override path

The inquiry author may interpret permissive phrasing as a constraint with explicit reasoning recorded in `_branch.md` Source Input. The reason must:

1. Quote the specific permissive phrase verbatim.
2. Give the interpretive logic — why this phrase warrants tooling rather than observation (e.g., the phrase is part of a longer pattern of statements all pointing in the same direction; the phrase combined with a separate explicit request implies the tooling; the phrase is structural rather than personal).
3. State what tooling the override authorizes building.

A bare *"I interpret this as a constraint"* is a defect — the override requires the author to show their reasoning so a future reviewer can spot weak overrides.

### Worked example

- **Subtle / contested case.** User says: *"I think we can defer the typed input contract for now."*
  - Descriptive reading (default): user observes that deferring is acceptable; inquiry continues without typed contract.
  - Constraint reading (override): user implies "we should have a typed contract eventually but defer it to a triggered revival." Inquiry adds revival trigger to deferred-list.
  - The override reading requires explicit reasoning in Source Input — the author must state which interpretation is being used and why.

- **Clear case (no override needed).** User says: *"build me a /staged-explore runner."* — explicit request; tooling justified directly.

- **The fault avoided.** A previous inquiry treated *"we could stage exploration differently"* (permissive observation) as a request for `/staged-explore` runner (tooling proposal). The default rule prevents this: *"we could stage X differently"* is descriptive — staging differently is acceptable in the user's view, not a request for runner tooling. Building the runner requires either an explicit request from the user or an override with reasoning showing why this permissive phrase warrants the tooling.

### Inline copy location

Not yet inline. When materialized, expected to land in `cognitive_harness/MVL+/SKILL.md` step 1 trigger-check + `_branch.md` template note (likely as part of an extended Pre-Template Checks block).

---

## COULD-vs-MUST dependency gating

### Trigger

At CONCLUDE finding-compilation time, when a finding's `## Next Actions` section has both `### MUST` and `### COULD` subsections, and any COULD references / assumes the resolution of any MUST in the same finding.

### Required friction

For every COULD with a detected MUST-dependency, append a `Depends-on:` field to the COULD's body that names the specific MUST and marks the COULD as GATED — meaning a future actor (human or AI) should not act on the COULD until the MUST resolves.

Per-item shape with the gating field:

- **What:** [action]
- **Who:** [agent]
- **Gate:** [time-bound / condition-bound / observable]
- **Why:** [expected impact]
- **Depends-on:** MUST item "[short name of the MUST]". This COULD is GATED — do not act until the MUST resolves.

### Override path

When the COULD is genuinely adoption-ready independent of the MUST's eventual resolution (e.g., the MUST is a research-frontier item with no expected resolution timeline, but the COULD has standalone value), mark the dependency as overridden with explicit reason:

- **Depends-on:** MUST item "[short name]". OVERRIDE: COULD is adoption-ready despite open MUST. Reason: [specific reason — e.g., MUST resolution depends on long-horizon evidence accumulation; COULD's value is independent because (...)].

The override is intentional friction — it requires the author to explicitly justify the decoupling rather than silently dropping the dependency. A future reviewer can spot weak overrides.

Skip the gating field entirely when a COULD has no MUST-dependency. Most COULDs will not need it.

### Worked example

The May 12 iter-1 finding for `/explore`:

- **MUST:** *"Confirm whether the weak reading of 'relevance understanding' matches the user's intended hypothesis."*
- **COULD (without gating):** *"Replace `cognitive_harness/explore/SKILL.md` with the standard skeleton."*
- **COULD (with gating):** *"Replace `cognitive_harness/explore/SKILL.md` with the standard skeleton. Depends-on: MUST item 'Confirm weak-reading interpretation.' This COULD is GATED — do not act until the MUST resolves."*

Without the gate, the COULD got acted on; the MUST never resolved; the rewrite happened on a guessed interpretation; two months later a supplementary diagnostic identified the rewrite as a contributing factor to problematic MVL+ runs. ONE missing gate at ONE finding caused two months of downstream rework.

### Inline copy location

`cognitive_harness/protocols/conclude.md` — `### COULD-vs-MUST dependency gating` sub-section + `### COULD` template line referencing the gating sub-section.

---

## Synthesis re-test enforcement

### Trigger

At CONCLUDE finding-compilation time, when the inquiry's `_branch.md` declared a `## Synthesis Trigger` section (per the [Synthesis Trigger](#synthesis-trigger) rule above), OR when this finding's frontmatter declares `refines:` / `supersedes:` / `corrects:` of a prior finding from which N≥3 commitments are inherited.

### Required friction

The finding MUST include an `## Inherited Commitments Re-test` section. For each commitment inherited from a prior output, list:

- **Commitment:** verbatim or short paraphrase of the inherited commitment.
- **Source:** path to the prior finding/spec + section.
- **Re-test status:** RE-TESTED or INHERITED-WITHOUT-RE-TEST.
- **Evidence (if RE-TESTED):** what this inquiry observed; cited.
- **Reason (if INHERITED-WITHOUT-RE-TEST):** why the re-test was skipped — e.g., out of scope; trusted by independent priors; resource-constrained.

A commitment cannot be silently absorbed. It is either re-justified by this inquiry's own work, or it is explicitly flagged as carried-forward-without-re-test with a reason.

### Override path

The `INHERITED-WITHOUT-RE-TEST` flag is the per-commitment override. Each inherited commitment may be individually flagged with a reason; the override is per-commitment, not file-wide.

If the section is missing or commitments are listed without status, CONCLUDE HALTS and tells the user: *"This finding inherits commitments from [N] priors but the `## Inherited Commitments Re-test` section is missing or incomplete. The synthesis cannot be silently absorbed — re-test each inherited commitment or explicitly flag it with a reason."*

### Worked example

The May 12 old-vs-new finding synthesized 11 commitments from prior findings.

- **Without enforcement:** 11 commitments listed in the synthesis as adoption-ready; none individually re-tested. The synthesis read as validation but was actually accumulation.
- **With enforcement:** each of the 11 commitments listed in the new section. Some re-tested with cited evidence (e.g., *"Commitment: per-item depth D0–D4. RE-TESTED. Evidence: 3+ instances of inadequate-per-item-depth observed in inquiries X, Y, Z."*). Others flagged (e.g., *"Commitment: 4-runner taxonomy. INHERITED-WITHOUT-RE-TEST. Reason: out of scope for this synthesis; will be re-evaluated in a separate inquiry on runner architecture."*).

The friction surfaces the inheritance: the author cannot silently absorb 11 commitments. Either each is re-justified by this inquiry's own evidence, or each is explicitly flagged with a reason.

### Inline copy location

`cognitive_harness/protocols/conclude.md` — `### Synthesis re-test enforcement` sub-section + `## Inherited Commitments Re-test` finding-template optional section.

---

## Deferral-binding (planned)

### Status

DESIGNED, NOT YET MATERIALIZED. Detailed design lives in the prior loop_diagnose's finding at `devdocs/inquiries/2026-05-15_00-34__loop_diagnose__explore_from_scratch_faults/finding.md`. Multi-instance per-prior evidence (4 priors) supports this rule at HIGH confidence. Materialization deferred pending user direction.

### Sketch

- **Trigger:** at spec-edit time, any addition of a new structural commitment (new section, new failure mode, new typed schema, new annotation layer, new gate, new artifact) to a discipline spec, protocol, or framework artifact.
- **Required friction:** if the addition matches an item on the deferred-list (maintained in this file or a sibling), the author must write a migration entry (Deferred-item identifier / Revival trigger that fired / Evidence with citation / Activation date).
- **Override path:** explicit override entry with reason (used when the trigger hasn't fired but the author still wants to activate).
- **Worked example:** see prior loop_diagnose finding.

### Inline copy location

Not yet exists. When materialized, expected to land here as a full sub-section (the canonical home), with cross-references from `cognitive_harness/protocols/conclude.md` and `cognitive_harness/MVL+/SKILL.md` as needed.

---

## Anatomy-as-template + spec-edit checklist (planned)

### Status

DESIGNED, NOT YET MATERIALIZED. The anatomy amendment lives in `thinking_disciplines/anatomy_of_disciplines.md` (one permissive-amendment section). The companion spec-edit checklist's design lives in the new loop_diagnose's finding at `devdocs/inquiries/2026-05-15_02-05__loop_diagnose__three_explore_sources_faults/finding.md`. Multi-instance per-prior evidence (4 priors) supports this rule at HIGH confidence.

### Sketch

- **Anatomy amendment (separate target file).** One section in `thinking_disciplines/anatomy_of_disciplines.md`: *"This anatomy is a starting template, not an authority. Divergence permitted with rationale."*
- **Trigger (this rule):** at spec-edit time, any modification to a discipline spec, protocol, or framework artifact.
- **Required friction:** three-question checklist — (1) anatomy divergence justified or N/A?; (2) deferred items consulted?; (3) convention cited as default with explicit reasoning for distinguishing? (Sub-aspect: stare-decisis framing — citing convention is fine; substituting convention for evidence is not.)
- **Override path:** the rule has no skip — every spec edit answers the checklist. "N/A" is a valid answer for any question that doesn't apply to the current edit.
- **Worked example:** see new loop_diagnose finding.

### Inline copy location

Not yet exists. When materialized, expected to land here as a full sub-section.

---

## How to add a new rule

1. Identify the content-decision point (the moment of silent absorption the rule prevents).
2. Decide whether the rule fires at MVL+ inquiry creation, at CONCLUDE finding compilation, at spec-edit time, or at another lifecycle point.
3. Write a new sub-section here with the four-part shape (Trigger / Required friction / Override path / Worked example).
4. Add the rule to the Index above with its lifecycle annotation.
5. If the rule is operationally needed before pointer-style migration is complete, add an inline copy to the relevant runner / protocol file and note the location under the rule's `Inline copy location` heading. Mark this file as canonical for that rule.
6. If the rule is purely planned (designed but not materialized), use the `(planned)` suffix in the heading and the `Status` / `Sketch` shape per the Deferral-binding and Anatomy-checklist sub-sections above.

## How to retire a rule

If a rule's failure mode no longer occurs across N+ inquiries (suggested: 6 inquiries or 6 months without a single trigger fire), or if downstream evidence shows the friction produces ritual compliance rather than examination, mark the rule as `(retired)` and document the retirement reason in a `Retirement Note` sub-section. Do not delete — historical context is part of the file's value.
