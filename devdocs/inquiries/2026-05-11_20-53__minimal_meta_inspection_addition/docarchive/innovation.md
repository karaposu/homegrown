# Innovation: Minimal Meta-Inspection Addition

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_20-53__minimal_meta_inspection_addition/_branch.md`

Draft per Decomposition's 2 pieces: P1 compact section text + insertion-point spec (target ≤30 lines, preserve load-bearing core value, no project-governance bloat); P2 future-additional observation.

---

## Seed and Direction

- **Seed: dissatisfaction.** The user found the 17-29 draft's ~100 lines "too much." Sensemaking adjudicated the compact form (C2 + runtime hint, no cross-references, 1-2 line intro). Innovation drafts the exact text.
- **Direction:** every line earns its place. Cut elaboration; preserve load-bearing.

---

## Phase 2 — Generate (mechanisms applied focused)

### Combination + Domain Transfer (Generators)

**Combination.** Combine the 17-29 draft's hooks-table structure with brevity-first principle: drop separate sections for runtime firing, self-applicability, scope, and three-pattern intro — merge their essential content into the table intro + the table's existing-instance column + brief opening/closing sentences.

**Domain Transfer.** Technical writing's "inverted pyramid" pattern (most important info first; minimal elaboration) maps to the compact section. The hooks table IS the load-bearing artifact; everything else is scaffolding around it.

### Absence Recognition (Generator)

What does the 17-29 draft contain that the compact form doesn't need?

- **A1.** Separate "How meta-question fires at runtime" section with phase-end mapping bullets — the hooks-table's existing-instance column already indicates phase.
- **A2.** Three-pattern (A/B/C) elaboration — readers know from the existing spec that failure modes and lateral perspectives exist.
- **A3.** Alternative-formulation list (M1/M3/M4 phrasings) — practitioners can rephrase themselves.
- **A4.** Self-applicability paragraph — compressed to one line.
- **A5.** Scope paragraph — section heading + spec context makes scope obvious.
- **A6.** Step 5 conformance note — already removed in the prior bloat cleanup; not re-added.
- **A7.** 4 distributed cross-references in existing phases — section placement provides discoverability.

Filling A1-A7 absences with the corresponding compact-form choices saves ~60 lines.

### Extrapolation (Generator)

At higher autonomy levels, AI agents reading the spec benefit from lean + load-bearing content. The compact precedent set by this section influences future additions (sub-linear growth realized).

### Lens Shifting (Framer)

Under "compact-spec" lens, every line earns its place. Under "comprehensive-explanation" lens, more elaboration helps but adds bloat risk. Sensemaking selected compact-spec lens; this drafting follows it.

### Constraint Manipulation (Framer)

- Add constraint: total ≤30 lines for the Meta-Inspection section (including section heading + closing divider).
- Add constraint: no project-governance references (universal-discipline test).
- Add constraint: 9 hooks preserved (the load-bearing inventory from 17-29).
- Remove constraint: explicit phase-end firing schedule.
- Remove constraint: 4 distributed cross-references.
- Remove constraint: three-pattern enumeration in intro.

### Inversion (Framer)

Don't include cross-references (counter to 17-29's design). Result: shorter section; trust section placement for discoverability. Sensemaking confirmed this choice.

**Result:** 7 mechanisms applied; converge on the compact form.

---

## P1 — Compact Section Text + Insertion-Point Spec (PRIMARY)

### Drafted compact Meta-Inspection section text

The following is the EXACT text to insert into `homegrown/sense-making/references/sensemaking.md`. Total: 25 lines (counting blank lines within; section heading through final paragraph).

```markdown
## Meta-Inspection — A Generative Pattern for Structural Checks

Several checks in this spec — Frame-exit Completeness; Phase / Calibration-State; the Phase 3 and Phase 5 refinement notes; and the Self-Reference Blindness corrective — are instances of one generative pattern: applying a meta-question to specific structural surfaces of the analysis.

**The meta-question: "What am I treating as FIXED that might not be?"**

Apply this question to the structure of the analysis, not its content. The hooks below list the surfaces where the question fires; each row names the existing check that calibrates the meta-question for that hook (and the phase where it currently appears).

| Hook | Surface inspected | Existing instance (phase) |
|---|---|---|
| H1 — Candidate set | Are candidates being adjudicated for relationships actually instances of one underlying operation? | (informal; no existing refinement note) |
| H2 — Frame scope | Does the inquiry's frame exclude referents that exist in the broader scope? | Frame-exit Completeness perspective (Phase 2) |
| H3 — Question framing | Does the question's wording pre-bias the candidate set toward a particular direction? | (informal; no existing refinement note) |
| H4 — Concept names | Does a concept's name represent its structure, or is it a proxy? | Load-bearing concept test (Phase 3) |
| H5 — Motivating examples | Are the specific examples the whole story, or a sample of a wider pattern? | Specific-vs-pattern recognition cue (Phase 3) |
| H6 — Model fit | Is the model not settling because of structural misfit, not unresolved ambiguity? | Accommodation trigger (Phase 5) |
| H7 — Phase / calibration state | Does this rule depend on calibration the current context has? | Phase / Calibration-State perspective (Phase 2) |
| H8 — Self-reference | Does the evaluation share its conceptual framework with the target? | Self-Reference Blindness corrective (failure mode 6) |
| H9 — User language alignment | Does the rephrased concept match the user's language, or is it a newly-coined term? | Sub-aspect of Load-bearing concept test (Phase 3) |

The hooks list extends as new specific checks emerge: apply the meta-question to candidate hooks; if an existing hook generates the new check, it becomes a sub-aspect; otherwise add a new hook.

The meta-question applies to Sensemaking itself — the discipline's own structure is inspectable by the same operation it provides for analyzing external content.
```

### Line-count check

Counted with blanks: 25 source lines for the section content (heading through final paragraph). Adding a closing `---` divider brings it to 26 lines. Well within the ≤30 target.

### Load-bearing content preserved

| Core value element | Where it appears in compact form |
|---|---|
| Meta-question stated | Bold line: **"What am I treating as FIXED that might not be?"** |
| 9 hooks | Hooks table, 9 rows |
| Existing-instance mapping (calibration) | Hooks table, 3rd column |
| Runtime firing hint | Hooks-table intro: "each row names ... the phase where it currently appears" |
| Extensibility | Paragraph after hooks table |
| Self-applicability | Final paragraph (1 sentence) |
| Brief context (one of multiple patterns) | Opening sentence |

All load-bearing elements present. No elaboration retained.

### Universal-discipline test pass

| Element | Universal? |
|---|---|
| "Sensemaking" | Discipline name; universal in this spec. |
| "Frame-exit Completeness," "Phase / Calibration-State," etc. | Internal spec cross-references; universal. |
| "the user's language" | Established universal idiom in the spec. |
| "(informal; no existing refinement note)" | Universal — describes the hook's current uncodified status without invoking project governance. |
| "failure mode 6" | Internal numbering; universal. |

No project-governance references (no Step 5, no instance thresholds, no specific inquiry IDs, no project-tool names, no corpus references, no failure-mode-promotion procedures). Passes universal-discipline test.

### Insertion-point specification

**File:** `homegrown/sense-making/references/sensemaking.md`

**Insertion point:** AFTER the existing `---` divider that follows the Self-Reference Blindness corrective in the Failure Modes section (line 193 in the current spec — same line whether or not other cleanup edits have been applied since the recent edits have been within-line modifications). BEFORE the `## Standard Analysis Protocol` heading (line 195).

**What to insert:** the compact section text above, followed by a blank line and a `---` divider, before the existing blank line that precedes `## Standard Analysis Protocol`.

**Net spec growth:** ~26 lines.

**Reversibility:** delete the inserted 26 lines to restore the prior state. Per-instance.

---

## P2 — Future-additional Observation

### Composite cross-reference (deferred)

If, after the compact section ships, practitioners report difficulty connecting the Meta-Inspection pattern to specific phase content during the Execute pipeline (i.e., the discoverability via section placement turns out to be insufficient), ONE composite cross-reference can be added as a focused follow-up edit:

```markdown
*Several refinement notes within the phases below are instances of the Meta-Inspection meta-question applied to specific hooks; see the "Meta-Inspection" section above for the unified pattern.*
```

**Where:** at the START of the "Execute the Following Process" section (or immediately after its heading), so readers who skip to Execute encounter the bridge immediately.

**Cost:** ~2 lines.

**Why not 4 distributed cross-references:** Sensemaking explicitly rejected the 4-distributed pattern (clutter; over-budget). A single composite cross-reference is the maximum that should be considered if discoverability proves insufficient.

**Status:** DEFERRED — conditional on observed need. Not part of this iteration's deliverable.

---

## Phase 3 — Test (5-test cycle)

| Test | Result |
|---|---|
| **Novelty** | The compact form is not novel as a method (compact-rewrite is a standard refactoring pattern). NOVEL only in producing the specific compact form that preserves the 17-29 core value in ~26 lines vs ~100. **NOVEL** at the artifact level. |
| **Scrutiny survival** | Sensemaking adjudicated form, cross-reference policy, intro compactness. The drafted text matches Sensemaking's SV6 specification. Critique will verify load-bearing preservation and universal-discipline test. **SURVIVED.** |
| **Fertility** | Sets compact precedent for future spec additions; demonstrates that load-bearing content can be expressed in ≤30 lines. **FERTILE.** |
| **Actionability** | Drafted text is exact; insertion point specified; reversibility documented. **ACTIONABLE.** |
| **Mechanism independence** | 7 mechanisms converged: Combination + Domain Transfer surfaced the inverted-pyramid structure; Absence Recognition identified the 7 cuttable elements; Extrapolation justified lean precedent; Lens Shifting selected compact-spec lens; Constraint Manipulation set the line budget; Inversion confirmed no-cross-references choice. **HIGH.** |

**Test cycle: SURVIVED.**

**Disposition: ACTIONABLE.**

---

## Assembly check + Axis coverage check

### Assembly emergence

P1 (compact section + insertion spec) and P2 (future-additional observation) compose into a complete minimal deliverable. The emergent property: the precedent that DISCIPLINE-SPEC ADDITIONS CAN BE COMPACT — this principle can apply to future additions to any discipline spec.

### Axis coverage

| Axis | Variant in this deliverable | Coverage |
|---|---|---|
| Form choice | C2 + one-line runtime hint (the merged form Sensemaking adjudicated) | ✓ |
| Cross-reference policy | Zero for this iteration; composite deferred | ✓ |
| Intro compactness | 1-line opening (within budget) | ✓ |
| Line budget | 26 lines (under 30 target) | ✓ |
| Universal-discipline test | Verified passing | ✓ |
| Load-bearing preservation | Table comparison shows all elements present | ✓ |

**Axis coverage: 6/6.**

---

## Mechanism Coverage Telemetry

- Generators applied: 4/4 (Combination + Domain Transfer + Absence Recognition + Extrapolation)
- Framers applied: 3/3 (Lens Shifting + Constraint Manipulation + Inversion)
- Convergence: YES — 7 mechanisms converge on the 26-line compact form.
- Survivors tested: 1/1 SURVIVED.
- Failure modes observed: None.
  - **Premature Evaluation** — generation separated from testing.
  - **Single-Mechanism Trap** — 7 mechanisms applied.
  - **Early Frame Lock** — alternative line budgets considered (15-line C1 rejected for context-loss; 35-40 line C3 rejected for cross-reference clutter); 26-line target locked.
  - **Innovation Without Grounding** — explicit 5-test cycle ran; line count + load-bearing + universal-discipline test all verified.
  - **Mechanism Exhaustion** — survivors produced.
  - **Survival Bias** — contrarian inversion (don't include cross-references; trust placement) was explicitly tested and selected.

**Overall: PROCEED.** Hand off to Critique.
