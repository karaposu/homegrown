---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Per-Phase Placement is Structurally Correct for Failure Modes — A Refinement to the Prior Discipline-Spec Organization Framework, with Ready-to-Apply Spec Edit

## Question

The user, after reviewing the prior framework finding's recommendation that catalogs should use the Hybrid overview+detail pattern, challenged it for failure modes specifically. They argued: *"Per-phase placement — failure modes distributed inline at each phase where they apply; no central catalog. Strong for content with strong phase-affinity; loses catalog scan. I feel like this is correct way, but still we should distinguish them somehow? Maybe simple Failure Modes: like header under each phase? What do you think?"*

The question asks: **is per-phase placement structurally better than Hybrid overview+detail for `/td-critique`'s §4 Failure Modes specifically, and if yes, how should failure modes be visually distinguished from other phase content?** Plus the broader implication: does this require refining the prior framework's content-type → pattern mapping?

**Layer commitment.** STRUCTURAL primary.

## Finding Summary

- **The user's intuition was structurally correct.** Per-phase placement IS the right pattern for failure modes in `/td-critique` (and by extension, for phase-affined failure modes across the cognitive-harness). The prior framework's catalog → Hybrid recommendation mis-classified failure modes as pure catalog content; they are not pure catalog — they are **phase-affined operational guidance**.

- **The prior framework needs a refinement, not a contradiction.** Add a new content-type called **"phase-affined operational guidance"** to the prior framework. This carve-out includes both refinement notes (which the spec already places per-phase) and failure modes. The general catalog → Hybrid recommendation still holds for non-phase-affined catalogs (meta-pattern catalogs; glossaries; mechanism lists that aren't phase-tied).

- **The recommended pattern for phase-affined operational guidance is a refined hybrid:**
  - **Per-phase placement** of phase-affined modes using the italicized prefix pattern (`*Failure mode (recognizable at Phase X):*` + bold mode name + Recognition + Prevention). Mirrors the existing refinement-note pattern.
  - **Thin §4 overview table** preserving catalog-scan (# / Name / Fires at / Inverse-of columns; no per-entry detail).
  - **Separate `## Cross-cutting failure modes` end-section** for modes without single-phase affinity (e.g., #7 Self-Reference Collapse).

- **The user's "Failure Modes: header" intent is honored via a structurally cleaner mechanism.** The recommendation uses an italicized per-block prefix instead of a bold section header. Three reasons: (1) mirrors the existing refinement-note pattern in the spec (consistency); (2) per-block scope rather than per-section scope makes each failure mode self-contained; (3) LLM-friendlier (each block self-delimited for token-attention).

- **Concrete spec edit for `/td-critique`:** relocate the 8 §4 failure-mode entries to inline blocks at their respective phases. Distribution: Phase 0 hosts #1 Wrong Dimensions + #4 Dimension Blindness + #8 Axis Absence; Phase 2 hosts #2 Rubber-Stamping (at Prosecution step) + #3 Nitpicking (at Defense step); Phase 4 hosts #5 False Convergence + #6 Evaluation Drift; #7 Self-Reference Collapse goes in the new cross-cutting end-section. The existing §4 content is preserved 100% (only the "Phase 0 (Dimension Construction)" prefix-when-block-is-already-at-Phase-0 redundancy is removed). Net spec-length change: ~+12 lines.

- **Cross-spec extension:** the pattern generalizes to all sister disciplines. `/sense-making` (4 phase-affined + 2 cross-cutting), `/innovate` (6 phase-affined), `/decompose` (7 step-affined), `/surfacing` (LAYER 1 component-affined + LAYER 2 identity cross-cutting) all fit the same shape with appropriate cross-cutting carve-outs.

- **All existing cross-references continue to work.** §4 still exists (thinned to overview) so references like "see §4 #2 Rubber-Stamping" resolve at the overview which points to the per-phase location. Cross-references from Phase 0 / Frame-premise test and Phase 0 / Substance-vs-Label success criteria notes ("see §4 if a corresponding failure-mode entry has been adopted") resolve correctly because §4 retains the named entries in the overview.

- **Two refinements from Critique are folded in.** (1) Monitor Phase 0 density post-adoption — Phase 0 will host 4 refinement notes + 3 failure-mode blocks = 7 inline structural blocks (at Miller's 7±2 upper edge); cluster under sub-themes if practice shows overload. (2) Consider adding a one-line Recognition column to the §4 overview as an optional COULD if catalog-scan symptom-matching is operationally important.

## Finding

### Why this inquiry exists

The user's prior MVLw inquiry produced a framework finding (`devdocs/inquiries/2026-06-09_17-04__discipline_spec_text_organization_patterns_catalog/finding.md`) recommending a content-type → pattern mapping. The recommendation for "Enumerated catalog" content was Hybrid overview+detail.

After explaining the mini-tables Tier 3 REORG pattern from the External-Grounding-Absence finding, the user reviewed the prior framework's catalog scoring and pushed back: per-phase placement was scored as "STRONG (firing-locus); WEAK (other relations); HIGH adoption cost" — and ranked behind Hybrid for catalogs. But the user intuited per-phase was actually correct, asking how to visually distinguish failure modes if placed inline.

This inquiry adjudicates the user's challenge structurally, without rubber-stamping their preference or dismissing it.

### 1. The structural insight: failure modes are not pure catalog

The prior framework's catalog → Hybrid recommendation treated failure modes as content of the same type as a glossary of terms: items to be enumerated and looked up. But this mis-classifies them.

**Failure modes are phase-affined operational guidance.** Each failure mode fires at (and is prevented at) a specific phase of the discipline's process. The Recognition and Prevention text in each `/td-critique` §4 entry already names which phase — "Phase 0 (Dimension Construction). Validate dimensions..." for #1; "Phase 2 Adversarial Evaluation" implied for #2 and #3; "Phase 4 Coverage + Convergence Assessment" implied for #5 and #6.

**The `/td-critique` spec ALREADY places refinement notes at phases.** Phase 0 hosts four refinement notes (Project-specific risk; Frame-premise test; Purpose-fitness; Substance-vs-Label). Phase 2 hosts the Multi-axis prosecution depth check. Phase 3 hosts the constructive-output requirement. The phase-affined-placement pattern already exists; failure modes should follow it.

**The user's intuition is pattern-recognition.** They saw the existing refinement-note placement and inferred failure modes should be similar. That inference is structurally correct: refinement notes and failure modes share the property of being phase-affined operational guidance. They differ in operation mode (refinement notes are positive checks the practitioner runs; failure modes are patterns the practitioner watches for), but they share placement strategy.

### 2. The prior framework needs a refinement, not a contradiction

This inquiry is structurally honest: the prior framework was not wrong about catalogs in general. It was wrong about failure modes specifically because failure modes are not the catalog content-type. The fix is a content-type carve-out, not a wholesale rejection of the framework.

**Add a new content-type to the prior framework: "phase-affined operational guidance".** This includes:
- Refinement notes at a phase (the existing pattern, retroactively validated).
- Failure modes at a phase (the new application).

**Recommended pattern for phase-affined operational guidance:**

| Element | Specification |
|---|---|
| Per-phase placement | Each item inline at the phase where it applies. |
| Item format | Italicized prefix line + bold name + body. Mirrors the existing refinement-note pattern. |
| Distinguishing word in prefix | "Refinement note" for positive checks; "Failure mode" for pattern-watch items. |
| Catalog-scan substitute | Thin overview table at a central section (formerly the "catalog" section) with # / Name / Fires at / Inverse-of columns. |
| Cross-cutting carve-out | Separate end-section for items without single-phase affinity. |

**The general catalog → Hybrid recommendation still holds** for non-phase-affined catalogs. Examples: the prior framework finding's own content (meta-pattern catalog — patterns are independent of phases); `/innovate`'s 7 mechanisms (per-mechanism content, not phase-tied); a glossary of cross-cutting vocabulary.

### 3. The concrete spec edit for `/td-critique` §4

The recommendation is a coordinated edit that relocates the 8 failure-mode entries to inline blocks at their respective phases, replaces §4 with a thin overview table, and adds a cross-cutting end-section.

#### 3.1 Per-phase block format

Each per-phase failure-mode block uses this template:

```markdown
*Failure mode (recognizable at Phase [X]):*

**[Mode name].** [Mode definition.]

**How to recognize:** [Recognition text.]

**How to prevent:** [Prevention text.]
```

The italicized prefix mirrors the existing refinement-note prefix (`*Refinement note (applies at Phase X):*`). The word "Failure mode" + "recognizable at" distinguishes it from refinement notes ("Refinement note" + "applies at"). The structural shape — italic header + bold name + Recognition + Prevention — preserves the existing §4 entry shape minus the redundant phase prefix in Prevention.

#### 3.2 Per-phase distribution

| Phase | Failure modes placed inline |
|---|---|
| Phase 0 — Dimension Construction | #1 Wrong Dimensions; #4 Dimension Blindness; #8 Axis Absence at the Failure's Actual Plane |
| Phase 2 — Adversarial Evaluation | #2 Rubber-Stamping (at Prosecution sub-step); #3 Nitpicking (at Defense sub-step) |
| Phase 4 — Coverage + Convergence Assessment | #5 False Convergence; #6 Evaluation Drift |
| Cross-cutting (new end-section) | #7 Self-Reference Collapse |

Within each phase, failure-mode blocks go AFTER the existing refinement notes (which are positive checks — "do this") and BEFORE the phase's closing paragraph. This puts the "things to do" first, then the "things to watch for" — practitioner-mental-model-friendly.

#### 3.3 The thin §4 overview table

§4 is retained but THINNED to overview-only:

```markdown
## Failure Modes

Critique fails in predictable, structural ways. Each failure mode is placed at the phase where it fires and is prevented; the table below is a quick reference pointing to the per-phase location.

| # | Name | Fires at | Inverse-of |
|---|------|----------|------------|
| 1 | Wrong Dimensions | Phase 0 (Dimension Construction) | — |
| 2 | Rubber-Stamping | Phase 2 (Adversarial Evaluation — Prosecution) | #3 (severity-axis pair) |
| 3 | Nitpicking | Phase 2 (Adversarial Evaluation — Defense) | #2 (severity-axis pair) |
| 4 | Dimension Blindness | Phase 0 (Dimension Construction) | — |
| 5 | False Convergence | Phase 4 (Coverage + Convergence) | — |
| 6 | Evaluation Drift | Phase 4 (cross-iteration) | — |
| 7 | Self-Reference Collapse | Cross-cutting | — |
| 8 | Axis Absence at the Failure's Actual Plane | Phase 0 (validate-dimensions sub-step) | precondition-violation of #4 |
```

The overview serves two purposes: at-a-glance navigation (which phase to jump to for a specific mode) and inverse-pair surfacing (the Inverse-of column makes the #2↔#3 severity-axis relationship visible without scrolling).

#### 3.4 The cross-cutting end-section

A new section after Phase 4, before §6 Summary:

```markdown
---

## Cross-cutting failure modes

The failure modes below don't fire at a single phase — they apply across the discipline's process. They are placed here rather than at a specific phase to honestly signal their cross-cutting nature.

*Failure mode (cross-cutting; applies across phases):*

**Self-Reference Collapse.** When critique is used to evaluate critique itself (self-improvement, discipline development), the evaluation can become circular. The criteria for evaluating critique are produced by critique, leading to a system that validates itself regardless of quality.

**How to recognize:** The discipline "passes" its own evaluation trivially. Every self-critique produces minor refinements but no structural challenges. The feeling is "this is good because it says it's good."

**How to prevent:** When critiquing critique, bring in external reference points: empirical evidence (did the critique's verdicts predict real outcomes?), cross-discipline evaluation (does the critique discipline have the same structural rigor as sensemaking and innovation?), and human judgment (does the output of critique actually help a human make better decisions?). Self-reference is valuable but must be grounded in external validation.
```

### 4. Why italicized prefix beats bold header (the user's exact proposal)

The user proposed: `**Failure modes preventable at this phase:**` — a bold header introducing a section under each phase. The recommendation uses italicized prefix per block instead. Three structural reasons:

1. **Pattern consistency with refinement notes.** The spec already uses `*Refinement note (applies at Phase X):*` as the inline-at-phase pattern. Reusing the same italic+parenthetical structure (with different word "Failure mode") creates ONE visual language for phase-inline content with two sub-types. Introducing a bold header would create a competing pattern.

2. **Per-block scope vs per-section scope.** A bold section header groups all failure modes at a phase under one section. An italicized per-block prefix gives each failure mode its own marker. The per-block scope is operationally better because (a) each failure mode is self-contained for LLM token-attention; (b) blocks can be interleaved with other phase content without forcing all failure modes into one contiguous run.

3. **LLM-consumption friendliness.** Per the prior framework's load-bearing criterion: relevant items being text-adjacent helps LLM attention. A per-block prefix puts the structural delimiter immediately adjacent to each failure mode's content. A bold header is structurally further from the items it groups.

The user's INTENT — distinguish them somehow visually — is honored. The mechanism is structurally cleaner.

### 5. Cross-spec extension

The pattern generalizes across the cognitive-harness:

| Discipline | Failure modes | Phase-affined? | Cross-cutting carve-out? |
|---|---|---|---|
| `/td-critique` | 8 modes | 7 phase-affined; 1 cross-cutting (#7) | Yes (#7 → end-section) |
| `/sense-making` | 6 modes | All 6 phase-affined (each cites SV / perspective phase) | No |
| `/innovate` | 6 modes | All 6 phase-affined (Seed/Generate/Test) | No |
| `/decompose` | 7 modes | All 7 step-affined (Step 1-7) | No |
| `/surfacing` | 9 LAYER 1 + 3 LAYER 2 | LAYER 1 component-affined; LAYER 2 identity cross-cutting | Yes (LAYER 2 → "Identity failure modes" end-section, which already exists structurally) |

Each spec follows the same pattern: per-phase/step/component placement using italicized failure-mode prefix + thin overview table + cross-cutting end-section where applicable.

**Cross-spec adoption is optional per discipline.** The user can adopt for `/td-critique` first (the immediate question's scope) and decide later for others.

### 6. Cross-references continue to work

Existing cross-references in the current spec that point to §4 entries:

- Phase 0 Frame-premise test note: *"is an instance of Inherited-Frame Preservation (see §4 if a corresponding failure-mode entry has been adopted)"*
- Phase 0 Substance-vs-Label success-criteria note: *"is an instance of Label-Tested, Substance-Untested (see §4 if a corresponding failure-mode entry has been adopted)"*
- Purpose-fitness test note: cross-refs to "Failure Mode #2 Rubber-Stamping" and "Failure Mode #3 Nitpicking" by name and number.
- #2 Prevention text: back-reference to Purpose-fitness test.
- #3 Prevention text: back-reference to Purpose-fitness test.

All continue to resolve because:
- §4 retained (thinned to overview); references to "see §4" or "Failure Mode #N" still find the entries (in the overview pointing to per-phase locations).
- Specific named cross-refs to "Rubber-Stamping" or "Nitpicking" work because the names are preserved in both the overview AND the per-phase blocks.

**Optional tightening:** cross-references could be updated to point directly at per-phase locations (e.g., "see Phase 2 Adversarial Evaluation → Rubber-Stamping failure-mode block"). This is a COULD, not a MUST. The existing references work without tightening.

### 7. Critique-driven refinements

Two refinements emerged from Critique's adversarial evaluation:

**Refinement 1 — Monitor Phase 0 density post-adoption.** Phase 0 will host 4 refinement notes (Project-specific risk + Frame-premise test + Purpose-fitness + Substance-vs-Label) plus 3 failure-mode blocks (#1, #4, #8) = **7 inline structural blocks**. This is at Miller's 7±2 upper edge. The italicized prefix words (Refinement note vs Failure mode) help readers chunk by category, but practitioner experience may show overload. If overload is observed, cluster under sub-themes (e.g., "Dimension-completeness checks" / "Severity-calibration checks" / "Frame-prosecution checks" / "Failure-mode watch"). This is the prior framework's cluster-trigger pattern firing for the mixed phase-affined-guidance set.

**Refinement 2 — Optional Recognition column on the §4 overview.** The current 4-column overview supports navigation but is thin for symptom-matching ("I'm seeing X behavior; which failure mode is this?"). Adding a one-line Recognition column would help. Trade-off: overview grows to 5 columns and may approach the table-width readability limit. This is a COULD, not a MUST. Apply if catalog-scan symptom-matching is operationally important.

### 8. Honest cost

| Cost | Articulation |
|---|---|
| Edit footprint | ~7 per-phase blocks + 1 cross-cutting section + 1 thin overview table. Net spec-length change: ~+12 lines. Modest. |
| Two-place updates per future failure-mode addition | A new failure mode requires (a) a per-phase block AND (b) an overview row. Same two-place cost as the prior framework's Hybrid overview+detail. No new cost. |
| Backward compatibility | All existing cross-references resolve. §4 retained as overview. Trivially reversible (re-merge per-phase blocks back into §4 if needed). |
| Phase 0 information density | 7 inline blocks at Phase 0 hits Miller's 7±2 upper edge. Monitor; cluster if practice shows overload. |
| Framework refinement adoption | The prior framework finding needs an Update Note (~100-line addition) refining the catalog → Hybrid recommendation to carve out phase-affined operational guidance. |
| Cross-spec extension | Optional per sister discipline. Each adoption is similar shape and cost. |
| LLM-friendliness gain | Each phase now hosts its own failure modes inline — LLM iterating phase-by-phase encounters relevant guidance without jump. **The structural payoff.** |

## Next Actions

### MUST

No MUST items. The articulation is the deliverable; concrete spec-edit drafts are ready to apply on user authorization.

### COULD

- **Apply the integrated spec edit to `/td-critique`** — relocate 8 §4 entries to per-phase blocks + thin §4 overview + cross-cutting end-section. ~+12 net lines. Trivially reversible.
  - **Gate:** condition-bound — when user confirms readiness.
  - **Why:** the structural argument is settled (user's intuition vindicated; Critique adjudicated SURVIVE); the only barrier is committing the edit. Will resolve the inquiry's COULD #2 from the prior framework finding (apply hybrid to `/td-critique` §4) with the refined recommendation instead of pure hybrid.

- **Apply the framework refinement to the prior framework finding** — add Update Note + new content-type "phase-affined operational guidance" to `devdocs/inquiries/2026-06-09_17-04...finding.md`.
  - **Gate:** condition-bound — same as above; should ship coordinated with the `/td-critique` edit.
  - **Why:** documentation honesty; the framework's catalog → Hybrid recommendation needs the carve-out so future inquiries don't repeat the mis-classification.

- **Apply Refinement 2 — add Recognition column to the §4 overview** — optional 5th column with one-line Recognition summary per row.
  - **Gate:** condition-bound — when symptom-matching is operationally important AND table-width readability acceptable.
  - **Why:** stronger catalog-scan support; small marginal improvement.

- **Cross-spec extension to sister disciplines** (`/sense-making`, `/innovate`, `/decompose`, `/surfacing`).
  - **Gate:** condition-bound — per discipline; can be adopted incrementally.
  - **Why:** cross-spec consistency per the framework's per-content-type rule; LLM-friendliness gains per sister discipline.
  - **Depends-on:** the `/td-critique` adoption (COULD #1) is the precedent. GATED.

### DEFERRED

- **Cluster Phase 0 into sub-themed groups** if practitioner experience shows overload at 7 inline blocks.
  - **Gate:** revival trigger — observable: if practitioners report Phase 0 feels overloaded after ≥5 real `/td-critique` invocations under the new structure.
  - **Why (if revived):** reduces cognitive load via sub-theme chunking.

## Reasoning

### Why per-phase placement won over Hybrid for failure modes

The prior framework's Hybrid recommendation was correct for its premise (catalog content) but the premise was incorrect for failure modes. Sensemaking surfaced the key insight: the `/td-critique` spec ALREADY uses per-phase placement for refinement notes. The user's intuition was structural pattern-recognition — failure modes and refinement notes are both phase-affined operational guidance and should share placement strategy.

The structural argument: 7 of 8 failure modes have clear phase-affinity (concrete data); the 1 cross-cutting exception (#7) has explicit end-section carve-out; cross-discipline generalization confirms 4 of 5 sister disciplines have predominantly phase-affined failure modes too. Per-phase placement is the structurally-honest choice; the framework's catalog → Hybrid was a content-type mis-classification.

### Why italicized prefix won over bold header

The user proposed a bold section header. The recommendation uses italicized per-block prefix. Three structural reasons — pattern consistency with existing refinement-note placement; per-block vs per-section scope; LLM-friendliness — converge on italicized prefix. The user's intent ("distinguish them somehow") is honored; the mechanism is structurally cleaner.

### Why the framework gets refined (not contradicted)

The prior framework's recommendation for ENUMERATED CATALOG content remains valid for content that is actually pure catalog (independent items; no phase-affinity). Adding a new content-type "phase-affined operational guidance" is a precision improvement, not a rejection. The framework's own self-application (using Hybrid for its meta-pattern-catalog content) remains valid because meta-pattern catalogs ARE pure catalog.

### Why content preservation is structurally honest

Innovation's per-phase blocks use existing §4 Recognition + Prevention text. The only modification is dropping the "Phase 0 (Dimension Construction)" prefix from #1's Prevention when the block IS at Phase 0 — this is redundancy elimination, not content loss. Substance is preserved 100%; the integrated edit is structurally honest about what changes (placement and visual markers) and what doesn't (the actual operational guidance).

### Critique's REFINEs are scope-honest

Critique produced two REFINEs (monitor Phase 0 density; optional Recognition column) — both are operational-monitoring suggestions, not substance corrections. The frame-premise prosecution found 2 PASS + 1 PARTIAL; the PARTIAL (overview thinness) is addressed by the optional Recognition column. None of the REFINEs are gating; the recommendation is adoptable as-is.

## Open Questions

### Monitoring

- **Phase 0 information density post-adoption.** 7 inline blocks at Phase 0 hits Miller's 7±2 upper edge. Monitor; cluster if overload observed.
- **§4 overview symptom-matching adequacy.** If practitioners frequently jump from the overview to per-phase blocks just to read Recognition text, the optional Recognition column may become a COULD-to-adopt.
- **Cross-spec adoption pattern.** Which sister discipline adopts per-phase placement next (if any) is information about which discipline's failure modes feel most phase-affined to practitioners.

### Blocked

- **Empirical LLM-friendliness validation** (carried forward from the prior framework finding). Adoption + ≥5 real invocations available for comparison.

### Research Frontiers

- **Content-type rigor.** The prior framework named 5 content-types informally; this inquiry adds "phase-affined operational guidance" as a 6th. A rigorous content-type taxonomy across the cognitive-harness remains a research frontier.

### Refinement Triggers

- **If the §4 overview overview proves insufficient for symptom-matching**, adopt the optional Recognition column (Refinement 2).
- **If Phase 0 density practically feels overloaded**, apply the cluster-trigger and group blocks under sub-themes.
- **If a new failure mode emerges that's genuinely cross-cutting**, place it in the cross-cutting end-section alongside #7.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Per-phase placement — failure modes distributed inline at each phase where they apply; no central catalog. Strong for content with strong phase-affinity; loses catalog scan.

i feel like this is correct way, but still we should distingusih them somehow? maybe simple Failure Modes: like header under each phase? 

what do you think?
```

</details>
