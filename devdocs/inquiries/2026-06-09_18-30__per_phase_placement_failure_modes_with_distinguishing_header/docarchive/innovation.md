# Innovation — per_phase_placement_failure_modes_with_distinguishing_header

## User Input

```text
12 pieces. Per-phase block content drafted using current §4 substrate. Be specific; don't abbreviate.
```

---

## Seed-time methodology-mode consideration

Standard default. Per-piece concrete text. **Recording:** default decision used.

---

## Tier 1

### P-BLOCK-TEMPLATE

**Primary candidate:** the per-phase failure-mode block template (mirrors refinement-note pattern):

```
*Failure mode (recognizable at Phase [X]):*

**[Mode name].** [Mode definition — 1-2 sentences explaining what the failure is, taken from existing §4 entry's opening paragraph.]

**How to recognize:** [Recognition text — taken verbatim from existing §4 entry.]

**How to prevent:** [Prevention text — taken verbatim from existing §4 entry; preserves all existing cross-references intact.]
```

**Properties:** italicized prefix mirrors `*Refinement note (applies at Phase X):*` exactly; word "Failure mode" distinguishes from "Refinement note"; word "recognizable" emphasizes the monitoring-rather-than-action nature; bold name + Recognition + Prevention preserves existing §4 entry shape.

**Inversion:** could mirror the refinement-note pattern even MORE closely by saying "Refinement note (failure-mode watch at Phase X)" — single category, sub-typed. **Rejected:** mis-frames failure modes as a sub-type of refinement notes; the structural distinction (positive check vs pattern watch) deserves a distinct prefix word.

**5-test:** Novelty MEDIUM; Scrutiny STRONG; Fertility STRONG (template applies uniformly); Actionability STRONG; Mechanism Independence STRONG.

**Disposition: ACTIONABLE.**

### P-FRAMEWORK-REFINEMENT-DRAFT

**Primary candidate:** Update Note to add to the prior framework finding:

```
## Update Note (added 2026-06-09)

A follow-up structural inquiry tested the framework's catalog → Hybrid recommendation against phase-affined failure modes and surfaced a refinement.

The original framework treated failure modes as pure ENUMERATED CATALOG content. This is structurally incomplete: failure modes in cognitive-harness disciplines are predominantly PHASE-AFFINED — each mode fires at (and is prevented at) a specific phase of the discipline's process. Treating them as pure catalog mis-locates them away from the phase locus where the practitioner needs them.

**Refinement:** introduce a new content-type **"phase-affined operational guidance"** alongside the original 5 content-types. Failure modes (and the existing refinement-notes pattern, retroactively) belong here.

**Recommended pattern for phase-affined operational guidance:**

- **Per-phase placement** using the refinement-note prefix pattern (italicized `*Failure mode (recognizable at Phase X):*` + bold name + Recognition + Prevention).
- **Thin overview table** at the central section (formerly the "catalog" section) preserving catalog-scan — # / Name / Fires at / Inverse-of columns; no per-entry detail.
- **Separate `## Cross-cutting failure modes` end-section** for modes without single-phase affinity (e.g., #7 Self-Reference Collapse in `/td-critique`; LAYER 2 modes in `/surfacing`).

**The framework's general catalog → Hybrid recommendation still holds** for pure-catalog content not phase-affined (e.g., a glossary of cross-cutting terms; mechanisms in `/innovate` which are independent of phases). Refinement is a content-type carve-out, not a contradiction.

**The user's intuition that "per-phase placement is the correct way" for failure modes was structurally correct.** The original framework's catalog → Hybrid was the right answer to the wrong content-type classification.
```

**Inversion:** the framework finding's self-application claim said "this finding uses Hybrid in its own structure as meta-evidence." If failure modes are not catalog content, the framework's own structure remains valid for ITS content-type (which is meta-pattern catalog, not phase-affined operational guidance) — no contradiction.

**5-test:** Novelty STRONG (new content-type); Scrutiny STRONG (re-tests catalog classification honestly); Fertility STRONG (enables future spec edits); Actionability STRONG; Mechanism Independence STRONG.

**Disposition: ACTIONABLE.**

### P-CROSS-SPEC-EXTENSION-PLAN

**Primary candidate:**

| Discipline | Failure modes | Phase-affined? | Cross-cutting carve-out? |
|---|---|---|---|
| `/td-critique` | 8 modes | 7 phase-affined; 1 cross-cutting (#7) | Yes (#7 → end-section) |
| `/sense-making` | 6 modes | All 6 phase-affined (each cites SV/perspective phase) | No standalone carve-out needed |
| `/innovate` | 6 modes | All 6 phase-affined (Seed/Generate/Test phases) | No standalone carve-out needed |
| `/decompose` | 7 modes | All 7 step-affined (Step 1-7) | No standalone carve-out needed |
| `/surfacing` | 9 LAYER 1 + 3 LAYER 2 | LAYER 1 per-component-affined; LAYER 2 cross-cutting | Yes (LAYER 2 → "Identity failure modes" end-section, which already exists structurally) |

**Each spec follows the same pattern:** per-phase/step/component placement using italicized failure-mode prefix + thin overview table at the formerly-catalog section + cross-cutting end-section where applicable.

**Inversion:** maybe `/innovate`'s mechanisms (7) aren't phase-affined; they're per-mechanism. Counter: failure modes in `/innovate` ARE phase-affined (e.g., Premature Evaluation fires at Phase 3 Test); the 7 mechanisms are different content (they're not failure modes; they're the discipline's content-creators).

**Disposition: ACTIONABLE** (cross-spec mapping is concrete and applicable).

---

## Tier 2 — Per-phase block drafts

### P-PHASE-0-BLOCKS

**Primary candidate:** three blocks for Phase 0:

**Block 1 — #1 Wrong Dimensions:**

```
*Failure mode (recognizable at Phase 0 Dimension Construction):*

**Wrong Dimensions.** Evaluation dimensions don't match the actual problem. The critique runs rigorously but against criteria that don't matter, producing false confidence.

**How to recognize:** Candidates "pass" critique but fail in practice. The critique document looks thorough but somehow the real risks were missed. Retrospectively, the risks that materialized were on dimensions that weren't checked.

**How to prevent:** Validate dimensions against the sensemaking output before evaluating anything. Ask: "If a candidate passed all these dimensions perfectly, would it actually solve the problem?"
```

**Block 2 — #4 Dimension Blindness:**

```
*Failure mode (recognizable at Phase 0 Dimension Construction):*

**Dimension Blindness.** A critical dimension is missing entirely. The critique evaluates thoroughly on the dimensions it has, but a category of risk is completely invisible because no dimension covers it.

**How to recognize:** Hard to recognize during critique (by definition, you don't check what you don't check). Recognized retrospectively when a failure occurs on an axis that critique never considered. In the accumulator, recognized when the landscape has a region that feels "thin" — coverage is technically complete but something seems unexamined.

**How to prevent:** Cross-reference dimensions against the sensemaking perspectives: if sensemaking checked a technical perspective, a human perspective, and a risk perspective, critique dimensions should cover all three. If a sensemaking perspective has no corresponding critique dimension, something is missing. For project-specific risk axis coverage when the candidate set involves project artifacts/operations/state, see Project-specific risk dimension check refinement note above.
```

**Block 3 — #8 Axis Absence at the Failure's Actual Plane:**

```
*Failure mode (recognizable at Phase 0 Dimension Construction's validate-dimensions sub-step):*

**Axis Absence at the Failure's Actual Plane.** A construction-stage failure: the dimension space's CONSTRUCTION fails to span the failure space. The right axis for the actual failure was reachable from inside the inquiry but was not in the dimension list. Distinct from Dimension Blindness — Axis Absence fires when Dimension Blindness's preventive mechanism's precondition (upstream output covered the territory at the relevant axis) silently fails.

**Sub-recognitions (three distinct sub-mechanisms with one shared symptom):**

- **(i) Upstream-inheritance** — upstream output under-covered the relevant axis; critique inherited the gap as the dimension space.
- **(ii) Narrowest-reading** — a project-canonical principle was applied at its narrowest scope; the failure rode on the broader scope.
- **(iii) Self-defeating-wording** — a dimension's check wording forces performing the property it's meant to test for; the dimension performs the violation while testing it.

**How to recognize:** Post-hoc, a later evaluation surfaces that the prior critique passed without testing on the axis where the failure actually rode. The harm evidence is in the prior critique's own artifact (or in a project-internal source the prior could have consulted). The cluster property is **missed-not-didn't-know** — the right axis was reachable; it just wasn't constructed into the dimension space.

**How to prevent:** Active prevention belongs at the validate-dimensions sub-step (step 3) — explicitly interrogate whether the dimension space spans the failure space across the three sub-mechanisms above. Without a dedicated refinement note that operationalizes these sub-checks, this entry alone provides diagnostic vocabulary for retroactive labeling but doesn't actively prevent construction-time recurrence — practitioner judgment at the validate-dimensions sub-step is the prevention surface.

**Relationship to other modes:** Axis Absence fires when Dimension Blindness's preventive mechanism ("cross-reference dimensions against the sensemaking perspectives") silently fails because the precondition (sensemaking covered the territory at the relevant axis) was not verified. The two modes are vocabulary-distinct but mechanically related at the precondition layer.
```

**Inversion:** could collapse Wrong Dimensions + Dimension Blindness + Axis Absence into one Phase-0 block since all three are about dimension-space coverage. **Rejected:** they're structurally distinct (matching vs missing vs construction); merging loses precision.

**Disposition: ACTIONABLE** for all three Phase 0 blocks.

### P-PHASE-2-BLOCKS

**Primary candidate:** two blocks for Phase 2:

**Block 1 — #2 Rubber-Stamping (at Phase 2 Prosecution step):**

```
*Failure mode (recognizable at Phase 2 Adversarial Evaluation, Prosecution step):*

**Rubber-Stamping.** Prosecution is too weak. Everything passes because the adversarial testing wasn't genuinely adversarial. The critic finds only minor issues and declares success.

**How to recognize:** Every candidate gets a SURVIVE verdict. No kills, no refinements. The critique reads like a review, not an adversarial test. The feeling is "this all looks fine."

**How to prevent:** Require prosecution to construct the *strongest possible* objection, not just any objection. If prosecution can't find a killer objection, that's meaningful — but only if prosecution genuinely tried. Quality check: is the prosecution argument something that would make the candidate's strongest advocate pause? For multi-axis prosecution depth, see the Multi-axis prosecution depth check refinement note above. For the underlying severity-calibration that makes prosecution-strength meaningful, see Phase 0 / Dimension Construction → Purpose-fitness test refinement note — Rubber-Stamping is the opposite-direction violation of Nitpicking (below) under the same principle.
```

**Block 2 — #3 Nitpicking (at Phase 2 Defense step):**

```
*Failure mode (recognizable at Phase 2 Adversarial Evaluation, Defense step):*

**Nitpicking.** Every candidate gets killed on minor issues. Defense is absent or too weak. The critique produces an impressive list of problems, but none are evaluated for actual severity. The forest is missed for the trees.

**How to recognize:** Many KILLs, no SURVIVEs. Every risk is treated as critical. The critique document is long and detailed but doesn't distinguish between "this will cause a data breach" and "this variable name is unclear."

**How to prevent:** Require defense for every candidate. Require severity-weighted dimensions. A candidate should only be KILLed if prosecution wins on a *critical-weight* dimension, not just any dimension. For the underlying severity-calibration that makes critical-weight meaningful (and prevents nitpicking-creep at construction time), see Phase 0 / Dimension Construction → Purpose-fitness test refinement note — Nitpicking is the opposite-direction violation of Rubber-Stamping (above) under the same principle.
```

**Inversion:** the inverse-pair (#2 ↔ #3) might benefit from being placed in a single combined "Adversarial balance failure modes" block. **Rejected:** they fire at different sub-steps (prosecution vs defense); placing each at its sub-step preserves locality-where-it-matters.

**Disposition: ACTIONABLE** for both Phase 2 blocks.

### P-PHASE-4-BLOCKS

**Primary candidate:** two blocks for Phase 4:

**Block 1 — #5 False Convergence:**

```
*Failure mode (recognizable at Phase 4 Coverage + Convergence Assessment):*

**False Convergence.** The loop terminates too early. Convergence is declared because recent iterations didn't produce new information — but the real reason is that innovation exhausted its mechanisms too early, not that the solution space was actually explored.

**How to recognize:** Convergence criteria are technically met, but the surviving candidate feels unsatisfying. The coverage map shows "explored" regions that were only lightly tested. The accumulator shows few total iterations.

**How to prevent:** Convergence requires both stabilization (no new landscape changes) AND sufficiency (at least one SURVIVE with no critical-dimension caveats). If stabilization is reached but no clean SURVIVE exists, the signal is not "terminate" but "the current candidates are exhausted — generate new ones from a different seed."
```

**Block 2 — #6 Evaluation Drift:**

```
*Failure mode (recognizable at Phase 4 Coverage + Convergence Assessment, cross-iteration check):*

**Evaluation Drift.** Dimensions or weights shift silently between iterations. What counted as a KILL in iteration 1 would pass in iteration 3 because the evaluator's standards relaxed. Or the opposite — standards tighten as fatigue sets in, killing candidates that would have survived earlier.

**How to recognize:** Comparing accumulator records across iterations reveals inconsistent verdicts on similar candidates. A candidate refined and resubmitted gets a different verdict than expected based on the refinement changes.

**How to prevent:** Dimension definitions and weights are fixed in Phase 0 and persist across iterations via the accumulator. If dimensions need to change (because sensemaking updated the problem understanding), this is an explicit Phase 0 re-run, not a silent drift.
```

**Disposition: ACTIONABLE.**

### P-CROSS-CUTTING-SECTION

**Primary candidate:** new end-section after Phase 4, before §6 Summary:

```
---

## Cross-cutting failure modes

The failure modes below don't fire at a single phase — they apply across the discipline's process. They are placed here rather than at a specific phase to honestly signal their cross-cutting nature.

*Failure mode (cross-cutting; applies across phases):*

**Self-Reference Collapse.** When critique is used to evaluate critique itself (self-improvement, discipline development), the evaluation can become circular. The criteria for evaluating critique are produced by critique, leading to a system that validates itself regardless of quality.

**How to recognize:** The discipline "passes" its own evaluation trivially. Every self-critique produces minor refinements but no structural challenges. The feeling is "this is good because it says it's good."

**How to prevent:** When critiquing critique, bring in external reference points: empirical evidence (did the critique's verdicts predict real outcomes?), cross-discipline evaluation (does the critique discipline have the same structural rigor as sensemaking and innovation?), and human judgment (does the output of critique actually help a human make better decisions?). Self-reference is valuable but must be grounded in external validation.
```

**Inversion:** what if Self-Reference Collapse really fires most strongly at Phase 4 convergence (where self-validation can declare success)? **Counter:** it fires at every phase where critique-on-critique occurs (Phase 0 dimension validation; Phase 2 prosecution; Phase 4 convergence). Cross-cutting placement is honest.

**Disposition: ACTIONABLE.**

---

## Tier 3

### P-THIN-OVERVIEW-TABLE

**Primary candidate:** the new §4 contents (replacing the linear list):

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
| 8 | Axis Absence at the Failure's Actual Plane | Phase 0 (Dimension Construction — validate-dimensions sub-step) | precondition-violation of #4 |
```

**Inversion:** add a "Recognition (1-line)" column for at-a-glance scan. **Rejected:** would bloat the overview; recognition belongs at the per-phase block.

**Disposition: ACTIONABLE.**

### P-INSERTION-POINTS

**Primary candidate:**

| Block | Insertion point in `td-critique.md` |
|---|---|
| Phase 0 — #1 Wrong Dimensions | After existing Phase 0 refinement notes (after Substance-vs-Label success-criteria), before Phase 0 closing paragraph "Phase 0 is the meta-critique component..." |
| Phase 0 — #4 Dimension Blindness | After #1 block |
| Phase 0 — #8 Axis Absence | After #4 block |
| Phase 2 — #2 Rubber-Stamping | After existing Multi-axis prosecution depth check, before Phase 2 closing |
| Phase 2 — #3 Nitpicking | After #2 block |
| Phase 4 — #5 False Convergence | After Phase 4 process body, before Phase 4 closing |
| Phase 4 — #6 Evaluation Drift | After #5 block |
| Cross-cutting section | After all Phase 4 content, before §6 Summary |
| §4 Thin overview table | Replaces current §4 content (which had 8 detailed entries) |

**Order within each phase:** failure modes go AFTER existing refinement notes (which are positive checks) and BEFORE the phase's closing paragraph. This puts the "things to do" first, then the "things to watch for" — practitioner-mental-model-friendly.

**Disposition: ACTIONABLE.**

---

## Tier 4

### P-FROM-LINEAR-TO-OVERVIEW

**Primary candidate:** the DIFF:

**Delete from current §4:**
- All 8 entries' detail bodies (#1 through #8 with their Mode + Recognition + Prevention text).
- The current §4 section header text intro.

**Add to §4:**
- The new thin overview table (P-THIN-OVERVIEW-TABLE).
- A brief 1-sentence intro pointing readers to per-phase locations for detail.

**Add inline at phases (using P-PHASE-X-BLOCKS):**
- 3 blocks at Phase 0.
- 2 blocks at Phase 2.
- 2 blocks at Phase 4.

**Add cross-cutting section (P-CROSS-CUTTING-SECTION):**
- 1 block for #7 in a new "## Cross-cutting failure modes" section before §6.

**Content preservation verification:** each per-phase block uses the existing §4 entry text VERBATIM (Recognition + Prevention copied). The only NEW text is the italicized prefix line. Total content preserved 100%.

**Net effect on spec length:**
- Removed from §4: ~250 lines (8 entries × ~30 lines avg).
- Added to §4: ~15 lines (thin overview table).
- Added at phases: ~250 lines (same content, relocated).
- Added cross-cutting section: ~12 lines (#7 + section header).
- **Net change: +12 lines** (the cross-cutting section header).

**Disposition: ACTIONABLE.**

### P-CROSS-REFERENCES-UPDATE

**Primary candidate:**

**Existing cross-references to §4 #N** (from refinement notes elsewhere in the spec):
- Phase 0 Frame-premise test cross-reference: "see §4 if a corresponding failure-mode entry has been adopted" (Inherited-Frame Preservation reference).
- Phase 0 Substance-vs-Label cross-reference: "see §4 if a corresponding failure-mode entry has been adopted" (Label-Tested reference).
- Phase 2 Multi-axis prosecution depth check: "see Phase 2 / Adversarial Evaluation → Prosecution → Multi-axis prosecution depth check" (cross-refs to itself, no §4 reference).
- Purpose-fitness test refinement note: cross-refs to "Failure Mode #2 Rubber-Stamping" and "Failure Mode #3 Nitpicking" by name.
- #2 Prevention has back-reference to Purpose-fitness test.
- #3 Prevention has back-reference to Purpose-fitness test.

**Resolution:** all existing cross-references CONTINUE TO WORK because:
- §4 still exists (thinned to overview table); references to "see §4" or "Failure Mode #N" resolve at the overview table which lists the entry name + points to the per-phase location.
- References to specific failure-mode names (#2 Rubber-Stamping; #3 Nitpicking) work because the names are preserved in both the overview AND the per-phase blocks.

**Optional tightening:** cross-references could be updated to point directly at per-phase locations (e.g., "see Phase 2 / Adversarial Evaluation → Rubber-Stamping failure-mode block"). This is a COULD, not a MUST. The existing references resolve correctly without tightening.

**Disposition: ACTIONABLE** — no required updates; optional tightening as a follow-up.

---

## Tier 5

### P-COST-ARTICULATION

**Primary candidate:**

| Cost | Honest articulation |
|---|---|
| Edit footprint | ~7 blocks added at phases + 1 cross-cutting section + 1 thin overview table; ~+12 net lines after content relocation. Moderate edit, not large. |
| Two-place updates per future failure-mode addition | A new failure mode requires (a) a per-phase block AND (b) a row in the thin §4 overview. Two-place edit per addition. The hybrid overview+detail pattern from the prior framework also has two-place updates. No new cost. |
| Backward compatibility | All existing cross-references continue to work. §4 retained as thin overview. Trivially reversible (re-merge per-phase blocks back into §4 if needed). |
| Phase information density | Phase 0 will host: 4 refinement notes + 3 failure-mode blocks = 7 inline structural blocks. Approaching practitioner reading-load limits per Miller's 7±2. Worth monitoring; consider clustering under sub-themes if Phase 0 grows further. |
| Framework refinement adoption | The prior framework finding needs an Update Note (P-FRAMEWORK-REFINEMENT-DRAFT). Required for documentation honesty; ~100-line addition to the prior finding. |
| Cross-spec extension | Sister disciplines (`/sense-making`, `/innovate`, `/decompose`, `/surfacing`) all have phase-affined failure modes that could adopt the same pattern. Each would require its own edit (similar shape; similar cost per spec). Cross-spec adoption is optional per discipline. |
| LLM-friendliness gain | Each phase now hosts its own failure modes inline — LLM iterating phase-by-phase encounters relevant guidance without jump. **The user's intuition's structural payoff.** |

**Disposition: ACTIONABLE.**

---

## Assembly Check

The 12 piece outputs compose into the complete spec-edit + framework-refinement deliverable:

- Cluster A blocks (Tier 2) provide the per-phase content (with substrate preservation).
- Cluster B pieces (Tier 3) provide insertion coordinates + overview table.
- Cluster C piece (Tier 4) provides cross-reference compatibility.
- Cluster D pieces (Tier 1 + 5) provide framework refinement + cross-spec plan + cost.

The integrated edit is structurally coherent and backward-compatible. Adoption can proceed in one coordinated edit OR incrementally per phase.

**Assembly verdict: SURVIVES.**

---

## Mechanism Coverage Telemetry

- Generators 4/4 applied (Combination across blocks; Absence Recognition of content-type carve-out; Domain Transfer from refinement-note pattern; Extrapolation to cross-spec).
- Framers 3/3 applied (Inversion per piece; Lens Shifting practitioner-at-phase vs catalog-scan; Constraint Manipulation length + backward compatibility).
- 7/7 full coverage.
- Convergence: multi-mechanism on per-phase placement HIGH.
- 0 failure modes observed.
- 12/12 piece-level Inversion compliance.

**Verdict: PROCEED.**

---

## Disposition summary

All 12 pieces ACTIONABLE. Assembly SURVIVES. Ready for Critique.
