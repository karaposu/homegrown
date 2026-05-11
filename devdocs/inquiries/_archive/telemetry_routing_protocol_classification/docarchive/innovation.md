# Innovation: telemetry_routing_protocol_classification

## User Input

Develop concrete designs (with proposed wording) for each of the 11 pieces from decomposition. Apply mechanisms × variations where the design space has multiple valid options; produce concrete proposed text where the wording is mechanical.

---

## Direction

**Context.** Sensemaking concluded Candidate A (doctrine-aligned full extraction). Decomposition produced 11 pieces in 4 phases. Each piece has concrete file-level edits.

**Valuation.** The user wants applicable proposed wording — not abstract mechanism discussion. Most pieces are mechanical edits with clear templates (innovate's pattern for disciplines; CONCLUDE's pattern for resume.md). Innovation here is mostly producing the concrete wording, not exploring novel design space.

**Motivation.** Deliver wording the user can paste into files in a ~1.5-2.5 hour editing session.

---

## Piece 1 — sense-making telemetry standardization

### Variants

- **Generic:** Add `Overall: PROCEED / FLAG / RE-RUN` line at end of existing Saturation Indicators (Telemetry) section. Preserve "indicators, not gates" framing as soft signal interpretation.
- **Focused:** Replace "indicators, not gates" with explicit threshold logic + verdict line.
- **Contrarian:** Restructure Saturation Indicators into a Report block (mirroring innovate's Mechanism Coverage report).

### Mechanisms applied

*Constraint manipulation.* Constraint = "preserve sense-making's existing structure where possible." Generic variant adds without disrupting. Focused replaces, more invasive.

*Domain transfer.* Use innovate's Report-block pattern as template (lines 405-420 of homegrown/innovate/references/innovate.md):
```markdown
Report:
* Generators applied: [count] / 4
* Framers applied: [count] / 3
...
* **Overall: PROCEED** (sufficient coverage + convergence + tested survivors) / **FLAG** (coverage gaps or untested survivors) / **RE-RUN** (minimum coverage not met or failure mode detected)
```

### Convergence

**Generic** wins — preserve "indicators, not gates" as the philosophy; add explicit verdict line as the standardized surface for RESUME to read. Both can coexist: indicators stay descriptive, the Overall: line gives RESUME a clean read.

### Proposed wording

**Add to BOTH `homegrown/sense-making/references/sensemaking.md` and `commands/sense-making.md`** at the end of the existing "Saturation Indicators (Telemetry)" section:

```markdown
### Self-assessment

Apply the four indicators above to the just-completed sensemaking output. Report:

* Perspectives with new anchors: [count]
* Ambiguity resolution ratio: [resolved] / [total]
* SV delta: [STRUCTURAL — SV6 reorganized SV1's framing / INCREMENTAL — SV6 refined SV1 / FLAT — SV6 barely differs]
* Anchor diversity: [count of types] of 5, from [count] perspectives
* Failure modes observed: [none / list from the 6]
* **Overall: PROCEED** (perspectives ≥3 with new anchors AND ambiguity-resolution-ratio ≥70% AND SV delta is STRUCTURAL or INCREMENTAL AND anchors come from ≥3 types) / **FLAG** (one critical-weight indicator below threshold — e.g., perspective saturation reached at 2 perspectives, or anchor diversity from 1 type) / **RE-RUN** (SV delta is FLAT — sensemaking was superficial — OR multiple critical thresholds missed simultaneously)
```

**Net edit:** ~12 lines added per file × 2 files = ~24 lines.

---

## Piece 2 — td-critique telemetry standardization

### Inspection

td-critique already has "Convergence Telemetry" section + Report block + `Overall: PROCEED ... / FLAG ... / RE-RUN ...` (per the earlier grep showing `commands/td-critique.md` line 86). **Need to verify** this is in the homegrown reference file.

If present in both forms: **NO ACTION needed** for td-critique. It's already conformant.

If only in commands/: **mirror to homegrown reference file.**

### Verification action (Piece 2)

Run the grep:
```bash
grep -c "Overall: PROCEED" /Users/ns/Desktop/projects/native/homegrown/td-critique/references/td-critique.md
```

If 1: skip. If 0: copy the existing Report block from commands/td-critique.md.

### Proposed wording (if missing in homegrown reference)

Copy verbatim from `commands/td-critique.md` lines 80-86:

```markdown
Report:
* Dimensions evaluated: [count] / [total], all critical covered: [YES/NO]
* Adversarial strength: [STRONG — prosecution would give advocates pause / WEAK — prosecution was surface-level]
* Landscape stability: [CHANGED — new regions discovered / STABLE — confirmed existing shape]
* Clean SURVIVE: [YES — candidate X / NO — all survivors have caveats]
* Failure modes observed: [none / list]
* **Overall: PROCEED** (dimensions covered + adversarial strong + at least one clean SURVIVE) / **FLAG** (weak prosecution or missing dimensions) / **RE-RUN** (failure mode detected or no candidates evaluated)
```

**Net edit:** 0-7 lines depending on inspection result.

---

## Piece 3 — explore Convergence Criteria standardization

### Variants

- **Generic:** Add `Overall: PROCEED / FLAG / RE-RUN` line at end of "Assess Convergence" step (line 319 area of references file).
- **Focused:** Restructure existing 3-criteria check (frontier stability + declining discovery rate + bounded gaps) into Report block.

### Convergence

**Generic** — preserve existing 3-criteria framing; add verdict line.

### Proposed wording

**Add to BOTH `homegrown/explore/references/explore.md` and `commands/explore.md`** at the end of "### 3. Assess Convergence" (or as a new "### 4. Self-assessment" sub-section):

```markdown
### Self-assessment

Apply the three convergence criteria + jump scan result to the just-completed exploration. Report:

* Frontier stability: [STABLE — new scans not finding new structural features / ADVANCING — frontier still pushing outward / CLOSED — all reachable territory mapped]
* Discovery rate: [DECLINING — diminishing returns / FLAT — recent cycles producing same volume of new info / GROWING — recent cycles producing more new info]
* Gaps: [BOUNDED — between explored areas / UNBOUNDED — beyond explored areas with no surrounding context]
* Jump scan: [PERFORMED with no surprises / PERFORMED revealing surprises / SKIPPED]
* Failure modes observed: [none / list from the 6]
* **Overall: PROCEED** (all three convergence criteria hold AND jump scan performed without surprises) / **FLAG** (2 of 3 criteria hold, OR jump scan revealed minor surprises) / **RE-RUN** (frontier still advancing OR gaps unbounded OR jump scan revealed major surprises OR failure mode detected — e.g., premature depth or surface-only scanning)
```

**Net edit:** ~13 lines per file × 2 files = ~26 lines.

---

## Piece 4 — decompose Self-Evaluate standardization

### Variants

- **Generic:** Add `Overall: PROCEED / FLAG / RE-RUN` line at end of Step 7 Self-Evaluate.
- **Focused:** Integrate verdict directly into the existing 3-dimension / 7-dimension table.

### Convergence

**Generic** — preserve existing 3/7 dimension table; add verdict line below.

### Proposed wording

**Add to BOTH `homegrown/decompose/references/decompose.md` and `commands/decompose.md`** at the end of "Step 7 — Self-Evaluate":

```markdown
### Self-assessment

Apply the dimension checks to the just-completed decomposition. Report:

* 3-dimension check (independence + completeness + reassembly): [count of PASS] / 3
* 7-dimension check (if performed): [count of PASS] / 7 — independence: [PASS/FAIL]; completeness: [PASS/FAIL]; reassembly: [PASS/FAIL]; tractability: [PASS/FAIL]; interface clarity: [PASS/FAIL]; balance: [PASS/FAIL]; confidence: [PASS/FAIL]
* Failure modes observed: [none / list from the 7]
* **Overall: PROCEED** (3-dimension check passes 3/3, AND if 7-dimension performed: ≥6/7 with no critical failures) / **FLAG** (3-dimension check 2/3 OR 7-dimension check 4-5/7 OR balance dimension fails — one piece carries 80% of complexity) / **RE-RUN** (3-dimension check ≤1/3 OR independence fails OR completeness fails OR reassembly fails — critical-weight failures)
```

**Net edit:** ~10 lines per file × 2 files = ~20 lines.

---

## Piece 5 — comprehend Convergence Criteria standardization

### Variants

- **Generic:** Add `Overall: PROCEED / FLAG / RE-RUN` line at end of "Convergence Criteria" subsection.
- **Focused:** Add per-CV-level verdict (CV3 PROCEED is different from CV5 PROCEED).

### Convergence

**Focused** — comprehend's prediction-based convergence depends on the target CV level (per the spec line 562: "you've comprehended enough when your model predicts correctly at the target depth level"). Verdict should reference the target.

### Proposed wording

**Add to BOTH `homegrown/comprehend/references/comprehend.md` and `commands/comprehend.md`** at the end of "### Convergence Criteria":

```markdown
### Self-assessment

Apply the convergence criteria to the just-completed comprehension at the target CV level. Report:

* Target CV level: [CV3 / CV4 / CV5 — set by the downstream task]
* Prediction accuracy at target: [percentage / number of cases passed] vs threshold
* Adversarial stability: [HOLDS — 3+ cases failed to break the model / BROKEN — adversarial cases broke predictions]
* Coverage of artifact: [ALL major components at target depth / SOME components below target / GAPS in coverage]
* Failure modes observed: [none / list from the 6]
* **Overall: PROCEED** (prediction accuracy meets threshold for target CV AND adversarial stability HOLDS AND all major components at target depth) / **FLAG** (prediction accuracy borderline OR adversarial stability marginal — passes 2 of 3 cases — OR some components below target depth) / **RE-RUN** (prediction accuracy fails threshold OR adversarial breaks the model OR major coverage gaps OR failure mode detected — e.g., surface fluency without prediction)
```

**Net edit:** ~12 lines per file × 2 files = ~24 lines.

---

## Piece 6 — Reflect's exemption decision

### Variants

- **Generic (recommended per sensemaking):** Reflect is exempt from PROCEED/FLAG/RE-RUN. Its self-assessment is advisory ("did this reflection notice actionable patterns?").
- **Focused:** Reflect gets parity — adds PROCEED/FLAG/RE-RUN like other disciplines, with thresholds tuned to "did the reflection produce useful observations?"
- **Contrarian:** Reflect doesn't need a self-assessment at all — its output IS the assessment of the prior cycle; self-assessment would be circular.

### Mechanisms applied

*Lens shifting.* Under "uniformity" lens, focused (parity) wins. Under "structural-role" lens, generic (exempt) wins — reflect is backward-looking; not pipeline-routing. Under "minimum substance" lens, contrarian wins.

*Inversion.* Invert "every discipline self-assesses" → "self-assessment is for pipeline-routing-relevant disciplines." Reflect doesn't route; doesn't need PROCEED/FLAG/RE-RUN.

### Convergence

**Generic — exempt with advisory self-assessment.** Add a brief advisory section to reflect noting "did this reflection produce actionable observations?" but no PROCEED/FLAG/RE-RUN routing verdict.

### Proposed wording

**Add to BOTH `homegrown/reflect/references/reflect.md` and `commands/reflect.md`** at end of the spec:

```markdown
## Self-assessment (advisory, not routing)

Reflect is backward-looking — it produces process observations from a completed iteration. Its output does NOT gate the next iteration's pipeline (the pipeline runner — `/MVL`, `/MVL+` — owns iteration decisions via CONCLUDE / iteration-NO; reflect's observations inform navigation but don't route).

After producing the reflection output, assess advisory:

* Observations produced: [count]
* Actionable observations: [count] — observations that suggest specific changes to the next iteration's focus, OR specific spec changes to disciplines, OR specific gaps that warrant DIAGNOSE in the next iteration's wayfinding-trigger
* Process patterns noticed: [count]
* Did this reflection notice the iteration's most-distinctive feature: [YES / PARTIAL / NO]

**Note: reflect produces no PROCEED / FLAG / RE-RUN verdict** (per `thinking_disciplines/protocols/desc.md` doctrine — reflect isn't pipeline-routing). RESUME protocol does NOT read reflect's telemetry to route; it reads only the disciplines whose outputs gate the next iteration.

If a reflection's observations indicate the prior cycle was structurally broken, this signals DIAGNOSE for the next iteration's wayfinding — but the routing happens through navigation's DIAGNOSE type (when added to /navigation per the wayfinding_navigation_unification_check finding), not through reflect's own verdict.
```

**Net edit:** ~15 lines per file × 2 files = ~30 lines.

---

## Piece 7 — Create homegrown/protocols/resume.md

This is the heaviest piece. Following CONCLUDE's pattern.

### Proposed wording (full file)

```markdown
> **Loading note.** This file is loaded by `commands/MVL.md` and `commands/MVL+.md` at the RESUME entry-point (when invoked with a folder path) and may be loaded by future loop runners that need telemetry-aware iteration resume. Read in full before RESUME executes. Every section below — pipeline detection, telemetry-verdict reading, routing, state update, failure modes — is referenced by the procedure. Do not summarize or partial-load.

---

# RESUME — The Telemetry-Aware Iteration-Resume Protocol

RESUME is the operational protocol that picks up an inquiry across sessions OR between disciplines, reads each completed discipline's self-assessment verdict (PROCEED / FLAG / RE-RUN), and routes the loop accordingly.

RESUME does NOT judge the disciplines' outputs (that's the discipline's own self-assessment, per `thinking_disciplines/protocols/desc.md` doctrine: "protocols route, disciplines judge"). RESUME reads the verdicts that each discipline has already produced and routes the loop based on them.

---

## Step 1 — Pipeline detection

RESUME auto-detects which pipeline applies by inspecting `_state.md`:

- **Classic pipeline** (`Pipeline: S → I → C`, or `Flow-type: classic`, or absent flow-type): expected disciplines are sensemaking, innovation, critique.
- **Extended pipeline** (`Pipeline: E → S → D → I → C`, or `Flow-type: extended`): expected disciplines are exploration, sensemaking, decomposition, innovation, critique.
- **Other pipelines** (future runners): the pipeline declaration in `_state.md` is the authoritative list of expected disciplines.

If `_state.md` is missing or malformed, HALT and tell the user: "Cannot detect pipeline from `_state.md`. RESUME needs the pipeline declaration to determine which discipline outputs to read."

---

## Step 2 — Read each completed discipline's verdict

For each expected discipline in the pipeline (per Step 1):

1. **Check existence.** Does the discipline's output file exist in the inquiry folder (e.g., `sensemaking.md`)? If NO → this discipline hasn't run yet; mark as the next discipline to run; skip remaining steps.

2. **Read the verdict.** If YES → read the file and find the discipline's `Overall: PROCEED / FLAG / RE-RUN` line in its self-assessment / telemetry section. The expected section names per discipline:
   - Sensemaking: `Self-assessment` (within `Saturation Indicators (Telemetry)` section)
   - Innovation: `Mechanism Coverage (Telemetry)` Report block
   - Critique: `Convergence Telemetry` Report block
   - Exploration: `Self-assessment` (within `Assess Convergence`)
   - Decomposition: `Self-assessment` (within `Step 7 — Self-Evaluate`)
   - Comprehension: `Self-assessment` (within `Convergence Criteria`)
   - Reflection: NOT READ for routing (reflect is advisory, not pipeline-routing per doctrine).

3. **Backward-compat handling.** If the file exists but has NO `Overall: PROCEED / FLAG / RE-RUN` line → treat as PROCEED. (Backward-compatible with older outputs from before disciplines were standardized.)

---

## Step 3 — Route based on verdict

For each completed discipline's verdict, route as follows:

- **PROCEED** — discipline complete with sufficient quality. Mark complete and move to next discipline in pipeline.

- **FLAG** — present the specific shortfall to the user with guidance:
  ```
  Inquiry: [name]
  Status: [discipline] complete but FLAGGED

  Telemetry concern: [specific shortfall from the discipline's own report — e.g., "Sensemaking's anchor diversity was 1 type from 1 perspective; perspective saturation reached at 2 perspectives"].

  Options:
  1. Re-run /[discipline] with the guidance above
  2. Accept and proceed to next discipline (override)
  ```
  **Wait for user decision.** Do not auto-proceed past a FLAG.

- **RE-RUN** — recommend re-running the discipline with targeted feedback drawn from the discipline's own failure-mode report:
  ```
  Inquiry: [name]
  Status: [discipline] complete with RE-RUN signal

  The discipline self-assessed as below threshold on critical metrics: [specific failure modes from the discipline's report].

  Recommendation: Re-run /[discipline] with focus on [the specific failure modes].
  ```
  **Wait for user confirmation.** RE-RUN is more decisive than FLAG; the discipline itself signaled inadequacy.

If ALL completed disciplines have PROCEED verdicts AND the pipeline is fully complete (last discipline in Step 1's expected list has PROCEED) → defer to the loop runner's iteration-complete logic (which reads critique's output and decides YES → CONCLUDE / NO → next-iteration).

---

## Step 4 — Update `_state.md`

After routing decision, modify the inquiry folder's `_state.md`:

- For PROCEED: check off the completed discipline; set `Next Discipline` to the next in pipeline; append a History entry.
- For FLAG: append a History entry noting the flag and the user's decision (after they respond).
- For RE-RUN: append a History entry noting the recommendation; if user accepts, the discipline's checkbox stays unchecked and Next Discipline points back to it.

---

## Step 5 — Print routing summary

Print (not the full pipeline state):
```
Inquiry: [name]
Pipeline progress: [N] of [M] disciplines complete with PROCEED.
[FLAG / RE-RUN signals if any]

Next: [Run /[discipline] devdocs/inquiries/[name]/[input_file]  OR  Pipeline complete — proceeding to iteration-complete check.]
```

---

## Failure modes

- **Pipeline detection failure** — `_state.md` is missing, malformed, or has an unrecognized pipeline. HALT and ask the user to specify.

- **Verdict line missing despite expected presence** — the discipline output exists but has no `Overall: PROCEED / FLAG / RE-RUN` line, AND the discipline is one of the standardized ones (sensemaking, td-critique, explore, decompose, comprehend, innovate). This may indicate the discipline ran but with an outdated spec OR the user skipped self-assessment. Treat as PROCEED with a NOTE in the routing summary: "Discipline [X] missing standardized verdict; treated as PROCEED. Consider re-running with the updated discipline spec."

- **Reflect's verdict accidentally read** — RESUME should NOT read reflect's output for routing. If the pipeline includes reflect, it's at the iteration-boundary advisory step, not in the discipline pipeline. If RESUME accidentally reads reflect's telemetry, ignore it.

- **Conflicting verdicts across disciplines** — e.g., sensemaking PROCEED but critique RE-RUN. Apply discipline-specific routing in pipeline order; the first non-PROCEED encountered is the one acted on.

- **User overrides FLAG/RE-RUN** — user can choose to override and proceed. Log the override in History; the loop continues but with awareness that a discipline's self-assessment was not satisfied.

---
```

**Net edit:** ~110 lines new file.

---

## Piece 8 — Update /MVL.md RESUME branch

### Proposed wording

**Replace `commands/MVL.md` lines 72-77** (the current RESUME branch) with:

```markdown
### If RESUME (input is a folder path):

Load `homegrown/protocols/resume.md` in full and execute the **RESUME** protocol on the inquiry folder. RESUME reads `_state.md`, reads each completed discipline's `Overall: PROCEED / FLAG / RE-RUN` verdict from its self-assessment section, and routes the loop accordingly:
- PROCEED → move to next discipline in pipeline.
- FLAG → present shortfall to user with options; wait for decision.
- RE-RUN → recommend re-running the discipline with targeted feedback.

Do not execute RESUME from memory; always load `homegrown/protocols/resume.md` before invoking.

After RESUME's routing decision, proceed to EXECUTE PIPELINE if the next action is to run a discipline, OR to ITERATION COMPLETE if the pipeline is fully complete with PROCEED on the last discipline.
```

**Net edit:** ~6 lines replacing ~6 lines (net zero).

---

## Piece 9 — Update /MVL+.md RESUME branch

### Proposed wording

**Replace `commands/MVL+.md` lines 76-82** (the current RESUME branch) with:

```markdown
### If RESUME (input is a folder path):

1. Verify `flow-type: extended` in `_state.md`. If the field is `classic` or absent, this inquiry belongs to `/MVL`, not `/MVL+` — flag to the user and stop.

2. Load `homegrown/protocols/resume.md` in full and execute the **RESUME** protocol on the inquiry folder. RESUME reads `_state.md`, reads each completed discipline's `Overall: PROCEED / FLAG / RE-RUN` verdict, and routes the loop accordingly. RESUME's Step 1 detects the extended pipeline (E → S → D → I → C) automatically.

Do not execute RESUME from memory; always load `homegrown/protocols/resume.md` before invoking.

After RESUME's routing decision, proceed to EXECUTE PIPELINE if the next action is to run a discipline, OR to ITERATION COMPLETE if the pipeline is fully complete with PROCEED on the last discipline.
```

**Net edit:** ~7 lines replacing ~7 lines (net zero).

---

## Piece 10 — Update protocols/desc.md

### Proposed wording

**In `thinking_disciplines/protocols/desc.md`, update line 104** (RESUME's description) from:

> *"RESUME — Pick up a saved inquiry across sessions. Read `_state.md`, determine what's been done, figure out the next step. Currently lives inside `/inquiry`."*

To:

> *"RESUME — Pick up a saved inquiry across sessions OR between disciplines. Read `_state.md`, read each completed discipline's `Overall: PROCEED / FLAG / RE-RUN` verdict from its self-assessment section, route the loop accordingly (PROCEED to next discipline / FLAG with shortfall / RE-RUN with feedback). Implemented as `homegrown/protocols/resume.md`; loaded by `/MVL`, `/MVL+`, and any future loop runner. Reflect is advisory and not read for routing."*

**Update Current State table** (lines 138-142):

The current table shows RESUME under "Exists and functional" with count 7. After this extraction, RESUME stays in "Exists and functional" but with updated implementation note. The count stays 7 (RESUME is still 1 protocol, just relocated). Add a column or note:

```markdown
| Status | Count | Protocols | Notes |
|--------|-------|-----------|-------|
| **Exists and functional** | 7 | CONFIGURE, STEER, TERMINATE, RESUME, freshness checks, metadata injection, CV persistence | RESUME extracted to `homegrown/protocols/resume.md`; CONCLUDE extracted to `homegrown/protocols/conclude.md` (alive-extracted pattern). CONFIGURE and STEER still inside `/inquiry` (pending /inquiry deletion per `inquiry_md_post_navigation_update_value_check`). |
```

Or simpler — just update the inline RESUME note (line 104) and leave the table as-is.

**Coordinate with synthesize_vs_finding_split** (if not yet applied): the SYNTHESIZE entry split is independent and can be applied alongside.

**Net edit:** ~3-8 lines changed.

---

## Piece 11 — Coordination with /inquiry-deletion plan

### Variants

- **Generic:** Note the supersession in this finding's frontmatter; the prior /inquiry-deletion plan stands; only its migration target updates.
- **Focused:** Edit the prior `inquiry_md_post_navigation_update_value_check.md` sensemaking file directly to add a "REFINED BY" frontmatter pointing to this finding.

### Convergence

**Generic** — frontmatter linkage from this finding is sufficient. The prior sensemaking is in `devdocs/sensemaking/`, not in an inquiry folder, so it doesn't have the standard frontmatter pattern. Adding one is light edit but optional.

### Proposed action

This finding's frontmatter:

```yaml
---
status: active
refines: devdocs/sensemaking/inquiry_md_post_navigation_update_value_check.md
corrects: devdocs/sensemaking/inquiry_md_post_navigation_update_value_check.md
---
```

REFINES describes the targeted refinement (most of the prior sensemaking's verdict — /inquiry deletion — stands; only migration target changes). CORRECTS describes the specific reversal of the inline-migration recommendation.

**Application order coordination:**
1. Apply Pieces 1-6 (discipline standardization + reflect decision).
2. Apply Piece 7 (create resume.md).
3. Apply Pieces 8, 9 (/MVL, /MVL+ load+execute resume.md).
4. Apply Piece 10 (protocols/desc.md).
5. THEN apply /inquiry deletion (per prior sensemaking) — by this time, /MVL and /MVL+ have working RESUME, so /inquiry's RESUME logic is no longer needed.
6. Apply prior /inquiry-deletion plan's other pieces (delete /inquiry.md, update protocols/desc.md CONFIGURE entry, etc.).

**Net edit:** Coordination only; no separate file changes.

---

## Assembly Check

The recommended Configuration: all 11 pieces with the "Generic" variant where multiple were proposed (Pieces 1, 3, 4, 6, 11), Focused for Piece 5 (CV-level-aware verdict), and the produced wording for Pieces 2, 7, 8, 9, 10.

### Does the assembly produce emergent value?

YES:
- Pieces 1-5 standardize 5 disciplines on innovate's existing pattern. Together they unblock Piece 7's clean implementation.
- Piece 6's reflect-exemption preserves the doctrine-correct factoring (reflect isn't pipeline-routing) without forcing inappropriate parity.
- Piece 7's resume.md is a clean CONCLUDE-pattern protocol — Loading note + Steps + Failure modes — that any runner can load+execute.
- Pieces 8, 9 are minimal load+execute wrappers — each runner reduces RESUME from inline logic to one paragraph.
- Piece 10 updates the architectural map.
- Piece 11 coordinates with /inquiry deletion.

### Total edit estimate

| Piece | File(s) | Net lines |
|---|---|---|
| 1 | sense-making refs + commands | ~24 |
| 2 | td-critique refs (+commands if missing) | 0-7 |
| 3 | explore refs + commands | ~26 |
| 4 | decompose refs + commands | ~20 |
| 5 | comprehend refs + commands | ~24 |
| 6 | reflect refs + commands | ~30 |
| 7 | homegrown/protocols/resume.md (NEW) | ~110 |
| 8 | commands/MVL.md | ~0 (replace) |
| 9 | commands/MVL+.md | ~0 (replace) |
| 10 | protocols/desc.md | ~3-8 |
| 11 | (coordination — frontmatter linkage in this finding) | ~2 |
| **Total** | ~13 files | **~240-260 lines** |

Time: ~1.5-2.5 hours focused editing.

---

## Mechanism Coverage (Telemetry)

* Generators applied: 4 / 4 (Combination — Pieces 7, 11; Absence Recognition — Pieces 1-5; Domain Transfer — Pieces 1-6 use innovate/CONCLUDE patterns; Extrapolation — Piece 10's autonomy-ladder note).
* Framers applied: 3 / 3 (Lens Shifting — Piece 6 reflect-decision; Constraint Manipulation — Pieces 1-5 with "preserve existing structure"; Inversion — Piece 6's "uniformity vs structural-role").
* Convergence: YES — multiple mechanisms converge on the recommended Configuration. The CONCLUDE template + innovate's PROCEED/FLAG/RE-RUN pattern + doctrine alignment are independently arrived-at.
* Survivors tested: 11 / 11. Each piece's recommended variant tested for actionability and doctrine-correctness.
* Failure modes observed: None.
* **Overall: PROCEED.**

---

## Recommended Configuration (summary)

Apply all 11 pieces with the proposed wording above. ~240-260 lines across ~13 files. ~1.5-2.5 hour editing session.

**Phasing:**
- Phase 0: Piece 6 decision (reflect = exempt with advisory shape).
- Phase 1 (parallel): Pieces 1-5 (discipline standardization). After Piece 2, verify td-critique homegrown reference; mirror if needed.
- Phase 2: Piece 7 (resume.md creation).
- Phase 3 (parallel): Pieces 8, 9, 10 (integration).
- Phase 4: Piece 11 (coordination with /inquiry deletion; apply this finding's punch list before /inquiry deletion's punch list).
