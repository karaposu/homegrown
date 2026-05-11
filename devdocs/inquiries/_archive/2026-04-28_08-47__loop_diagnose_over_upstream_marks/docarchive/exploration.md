# Exploration: Loop Diagnose Over Upstream Marks

## User Input

The user challenged `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md`, especially the section "Critique Should Produce Upstream Marks." The user argued that this is not logical because each inquiry already preserves Critique and other discipline outputs in `docarchive/`, and those artifacts can be analyzed later without adding extra marks or processing inside every Critique output. The user proposed `homegrown/protocols/loop_diagnose.md` as the better framing for inner-loop diagnosis.

## 1. Mode And Entry Point

**Mode:** artifact exploration.

**Entry point:** signal-first. The signal is the user's correction: upstream diagnosis may belong in a separate diagnostic protocol over archived artifacts, not inside routine Critique output.

## 2. Exploration Cycles

### Cycle 1 - Scan The Challenged Finding

**Scanned:**

- `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md`

**What was found:**

- The finding correctly rejects authoritative discipline self-verdicts.
- It keeps evaluator-issued marks as useful routing signals.
- It then recommends that Critique should produce upstream marks from downstream kill/refine/flag evidence.
- The section presents this as something Critique should include when useful, but the final recommendation says "Let Critique produce upstream discipline marks," which reads stronger than optional later diagnosis.

**Signals detected:**

- **Scope slippage:** the finding moved from "do not self-grade" to "Critique should produce upstream marks," which is a different design question.
- **Storage blind spot:** it did not account strongly enough for the existing `docarchive/` evidence trail.
- **Processing burden risk:** adding upstream marks to Critique creates a routine per-loop burden even when no diagnosis is needed.

**Resolution decision:** scan the archived discipline artifacts behind the finding to see whether they already carry diagnostic evidence.

**Frontier state:** advancing.

**Confidence map update:** challenged section confirmed as structurally vulnerable, not just a wording issue.

### Cycle 2 - Scan Prior Inquiry `docarchive/`

**Scanned:**

- `docarchive/exploration.md`
- `docarchive/sensemaking.md`
- `docarchive/decomposition.md`
- `docarchive/innovation.md`
- `docarchive/critique.md`

**What was found:**

- The previous inquiry's own Exploration says Critique-derived upstream diagnosis was a "missing mechanism," not that routine Critique must always annotate upstream stages.
- Sensemaking says Critique can infer upstream causes from kill/refine patterns, but still frames this as downstream stress evidence.
- Decomposition names "Critique Upstream Diagnosis" as a component and separately names calibration and storage as open design areas.
- Innovation chooses a hybrid architecture but hardens one part into "Critique gets an `Upstream Diagnosis` section."
- Critique then accepts that architecture and recommends "make Critique responsible for upstream diagnosis."

**Signals detected:**

- **Evidence is already available:** the archived discipline files contain the exact material a diagnostic run needs: branch question, state, finding, and discipline outputs.
- **Premature embedding:** the prior inquiry jumped from "this evidence can diagnose failures" to "Critique should emit marks."
- **Attribution risk remains:** the archived Critique itself warns about over-attribution but still centralizes diagnosis in Critique output.

**Resolution decision:** scan `loop_diagnose.md` as a possible better boundary.

**Frontier state:** advancing.

**Confidence map update:** medium-high confidence that the previous recommendation over-embedded diagnosis into normal loop output.

### Cycle 3 - Probe `homegrown/protocols/loop_diagnose.md`

**Scanned:**

- `homegrown/protocols/loop_diagnose.md`

**What was found:**

- `LOOP_DIAGNOSE` is not a new discipline and does not replace MVL+.
- It frames a special MVL+ run whose purpose is to compare a weak prior inquiry, a human correction, and a later improved inquiry.
- It explicitly requires reading both root outputs and archived `docarchive/` outputs.
- It warns not to diagnose from `finding.md` alone when archived discipline outputs exist.
- It avoids exact root-cause claims unless artifacts isolate them.
- It allows attribution to loop framing, orchestration, context elicitation, CONCLUDE, mixed, or unknown, not only to a discipline.
- It says not to promote `LOOP_DIAGNOSE` into a standalone skill or discipline until repeated real runs justify it.

**Signals detected:**

- **Better boundary:** `LOOP_DIAGNOSE` uses existing artifacts instead of requiring Critique to annotate every prior stage.
- **Better evidence model:** diagnosis is comparative and retrospective, not inferred from one Critique pass alone.
- **Better attribution model:** failure can belong to framing or orchestration, not only upstream disciplines.
- **Better maturity control:** it starts as a protocol wrapper around MVL+, not a new automatic mode.

**Resolution decision:** run a jump scan for cases where Critique-internal upstream marks are still useful.

**Frontier state:** locally stable, with one counter-region left.

**Confidence map update:** high confidence that `LOOP_DIAGNOSE` is structurally better for correction-chain diagnosis.

### Cycle 4 - Jump Scan: When Would Critique Marks Still Help?

**Jump direction:** situations where adding upstream notes to Critique might be justified.

**What was found:**

- During an active loop, Critique may notice that candidate failures point back to a prior stage. A short note such as "refinement likely needs constraints pinned from Sensemaking" can help the next iteration.
- For high-stakes or repeated failures, a Critique output can preserve a diagnostic seed.
- But these are not the same as a standardized upstream mark contract. They are local refinement guidance.
- Requiring `PROCEED / FLAG / RE-RUN` upstream marks in every Critique output would create schema weight, routability confusion, and over-attribution risk.

**Signal detected:**

- Critique should preserve diagnostic evidence when it naturally appears, but the system should not make routine upstream mark production the primary diagnosis mechanism.

**Convergence criteria:**

- **Frontier stability:** yes. The main regions are prior finding, archived evidence trail, `LOOP_DIAGNOSE`, and counterexample cases.
- **Declining discovery rate:** yes. Later scans refined the boundary rather than adding new major mechanisms.
- **Bounded gaps:** yes. Remaining work is selecting the corrected architecture and wording.

## 3. Structural Map

### Territory Overview

The territory contains three different mechanisms that the prior finding partly collapsed:

1. **Routine Critique:** evaluates current candidates and may produce refinement guidance.
2. **Archived evidence trail:** `docarchive/` preserves all discipline outputs for later analysis.
3. **Diagnostic MVL+ protocol:** `LOOP_DIAGNOSE` frames a later comparative inquiry over weak prior result, human correction, and corrected result.

### Inventory

| Region | Current state | Confidence |
|---|---|---|
| Prior finding's rejection of self-verdicts | Still sound | Confirmed |
| Prior finding's `Critique Should Produce Upstream Marks` section | Over-embedded and too strong | Confirmed |
| Existing `docarchive/` artifacts | Sufficient evidence substrate for later diagnosis | Confirmed |
| `LOOP_DIAGNOSE` protocol | Better boundary for correction-chain diagnosis | Confirmed |
| Optional Critique diagnostic notes | Useful as local refinement evidence, not as mandatory marks | Scanned |
| Exact future hook into MVL+ | Needs separate adoption after real runs | Scanned |

### Signal Log

- **Strong signal:** `loop_diagnose.md` explicitly requires reading `docarchive/`, which directly matches the user's correction.
- **Strong signal:** the prior inquiry's own artifacts show a jump from "diagnostic evidence exists" to "Critique should emit upstream marks."
- **Strong signal:** `LOOP_DIAGNOSE` can diagnose framing, orchestration, and CONCLUDE failures, whereas "upstream discipline marks" biases the system toward discipline-only attribution.
- **Moderate signal:** Critique can still include local refinement clues, but these should not be routable marks.

### Confidence Map

- **Confirmed:** the previous finding needs correction.
- **Confirmed:** upstream diagnosis should primarily be a later diagnostic inquiry over artifacts, not mandatory Critique output.
- **Scanned:** optional Critique notes for immediate next iteration.
- **Unknown:** whether `LOOP_DIAGNOSE` should be formally hooked into MVL+ now or only after repeated use.

### Frontier State

Exploration is sufficient. The remaining question is how to state the corrected architecture: what belongs in routine Critique, what belongs in `docarchive/`, and what belongs in `LOOP_DIAGNOSE`.

### Gaps And Recommendations

Run Sensemaking on the central ambiguity:

> Is "Critique should produce upstream marks" wrong, or should it be reframed as "Critique preserves diagnostic evidence, while `LOOP_DIAGNOSE` performs upstream failure attribution from archived artifacts when needed"?

## Exploration Telemetry

- **Cycles run:** 4.
- **Mode coverage:** artifact exploration over prior finding, prior docarchive, new `LOOP_DIAGNOSE` protocol, and counterexample cases.
- **Frontier stability:** stable.
- **Discovery rate:** declining by Cycle 4.
- **Bounded gaps:** yes.
- **Jump scan:** completed; found limited value for optional Critique refinement notes but not mandatory upstream marks.
- **Overall:** sufficient for downstream Sensemaking.
