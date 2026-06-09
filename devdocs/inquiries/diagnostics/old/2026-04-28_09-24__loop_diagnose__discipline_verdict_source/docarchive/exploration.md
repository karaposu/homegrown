# Exploration: Loop Diagnose - Discipline Verdict Source

## User Input

Use `homegrown/protocols/loop_diagnose.md` to understand what went wrong in `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md` and why it did not conclude the archive-first diagnosis model later found in `devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks/docarchive`.

## 1. Mode And Entry Point

**Mode:** artifact exploration.

**Entry point:** signal-first. The signal is a correction chain: the `08-27` inquiry produced an unsatisfactory section, the user corrected it, and the `08-47` inquiry produced an improved archive-first model.

## 2. Exploration Cycles

### Cycle 1 - Verify LOOP_DIAGNOSE Contract

**Scanned:**

- `homegrown/protocols/loop_diagnose.md`
- `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/`
- `devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks/`

**What was found:**

- `LOOP_DIAGNOSE` requires a weak prior inquiry, human correction, and later improved inquiry.
- The weak prior is the `08-27` inquiry.
- The later improved inquiry is the `08-47` inquiry.
- The human correction explicitly says archived Critique and other discipline outputs already exist and can be analyzed later without adding marks.
- Both inquiries have `_branch.md`, `_state.md`, `finding.md`, and full `docarchive/` outputs.

**Signals detected:**

- **Contract satisfied:** this is a valid correction-chain diagnosis, not an ordinary comparison.
- **Important normalization:** the user mentioned the corrected inquiry's `docarchive/`, but the corrected semantic role is the whole `08-47` inquiry folder, with `docarchive/` as required evidence.

**Resolution decision:** scan the prior inquiry's frame and output trail first.

**Frontier state:** advancing.

**Confidence map update:** prior/corrected roles confirmed.

### Cycle 2 - Scan The Weak Prior Inquiry

**Scanned:**

- `08-27/_branch.md`
- `08-27/_state.md`
- `08-27/finding.md`
- `08-27/docarchive/exploration.md`
- `08-27/docarchive/sensemaking.md`
- `08-27/docarchive/decomposition.md`
- `08-27/docarchive/innovation.md`
- `08-27/docarchive/critique.md`

**What was found:**

- The `08-27` branch question centered on where `PROCEED / FLAG / RE-RUN` authority should live.
- The branch context included a user proposal: Critique may produce upstream marks by analyzing what gets killed and refined.
- Exploration identified "Critique-derived upstream diagnosis" as one of four signal sources.
- Sensemaking accepted the user's Critique proposal as structurally sound and treated it as a "missing high-value mechanism."
- Decomposition made `Critique Upstream Diagnosis` a component and placed it beside telemetry, evaluator marks, outcome marks, and calibration.
- Innovation selected a hybrid architecture that explicitly said Critique gets an `Upstream Diagnosis` section.
- Critique killed discipline self-verdicts but let `Critique Upstream Diagnosis` survive.
- The final finding said Critique should produce upstream marks from kill/refine/flag evidence.

**Signals detected:**

- **Frame narrowing:** the prior branch framed the new issue as "source of verdict authority" and accepted "Critique upstream marks" as an option inside that frame.
- **Missing artifact-system perspective:** the prior inquiry did not treat `docarchive/` as an active diagnostic substrate.
- **Premature component hardening:** "Critique can infer upstream causes" became "Critique should produce upstream marks."
- **Routability gravity:** the prior inquiry kept the routability goal central, which made marks look more attractive than a later full-artifact diagnosis.

**Resolution decision:** scan the corrected inquiry's trail to identify what changed.

**Frontier state:** advancing.

**Confidence map update:** strong evidence that the prior loop's main miss happened in framing plus Decomposition/Innovation hardening.

### Cycle 3 - Scan The Corrected Inquiry

**Scanned:**

- `08-47/_branch.md`
- `08-47/_state.md`
- `08-47/finding.md`
- `08-47/docarchive/exploration.md`
- `08-47/docarchive/sensemaking.md`
- `08-47/docarchive/decomposition.md`
- `08-47/docarchive/innovation.md`
- `08-47/docarchive/critique.md`

**What was found:**

- The `08-47` branch question directly targeted whether upstream diagnosis belongs inside Critique outputs or in a separate `LOOP_DIAGNOSE` protocol.
- Exploration named "storage blind spot" and "processing burden risk" as signals.
- Exploration compared the prior artifacts and found a jump from "diagnostic evidence exists" to "Critique should emit marks."
- Sensemaking stabilized "archive first, diagnose on demand."
- Decomposition separated routine Critique, archive storage, diagnostic protocol, maintenance candidates, and future adoption criteria.
- Innovation tested mandatory Critique upstream marks against `LOOP_DIAGNOSE` over archives.
- Critique killed mandatory upstream marks and selected explicit `LOOP_DIAGNOSE` as the clean survivor.
- The final finding corrected the prior finding.

**Signals detected:**

- **New anchor:** existing `docarchive/` artifacts are the evidence substrate.
- **New boundary:** routine candidate evaluation and retrospective correction-chain diagnosis are separate operations.
- **New risk dimension:** base-loop weight and per-run schema burden.
- **New attribution scope:** failure may belong to framing, orchestration, context, or CONCLUDE, not only upstream disciplines.

**Resolution decision:** compare the two inquiry structures directly.

**Frontier state:** advancing.

**Confidence map update:** high confidence that the corrected inquiry succeeded by widening the frame from "verdict source" to "diagnosis workflow boundary."

### Cycle 4 - Comparative Probe

**Probe target:** what changed between `08-27` and `08-47`.

**Comparison findings:**

| Area | `08-27` prior inquiry | `08-47` corrected inquiry |
|---|---|---|
| Branch frame | Source of `PROCEED / FLAG / RE-RUN` authority | Whether upstream diagnosis belongs in Critique or `LOOP_DIAGNOSE` |
| User proposal interpreted as | Critique can produce upstream marks | Existing artifacts can be diagnosed later |
| Central goal pressure | Preserve routability | Avoid unnecessary mark processing and use archive evidence |
| Key artifact considered | Critique kill/refine evidence | Full `docarchive/` trail plus correction chain |
| Failure surface | Mostly upstream disciplines | Disciplines plus framing, orchestration, context, CONCLUDE |
| Winning architecture | Evidence-first evaluator marks plus Critique upstream diagnosis | Archive-first, on-demand diagnosis |

**Signals detected:**

- **Primary gap:** the prior loop did not ask "does diagnosis need to be embedded in the original loop at all?"
- **Secondary gap:** the prior loop treated the user's Critique proposal as a solution candidate, not as a signal pointing to a broader diagnostic workflow.
- **Tertiary gap:** the prior loop did not apply `LOOP_DIAGNOSE`-like artifact reading because the protocol was not yet part of its frame and may not have existed in that form.

**Resolution decision:** run a jump scan for alternative explanations.

**Frontier state:** locally stable.

**Confidence map update:** likely affected stage is mixed: loop framing, Sensemaking, Decomposition, and Innovation. Critique compounded the issue by accepting the wrong candidate, but it did not create the frame.

### Cycle 5 - Jump Scan For Counter-Explanations

**Jump direction:** could the prior loop have been reasonable given its branch question?

**What was found:**

- The prior question asked where verdict authority should live. Within that frame, "Critique as evaluator" is a plausible answer.
- The user had explicitly proposed Critique marks as one possible quality-improvement path. The prior loop did not invent that possibility from nowhere.
- The later `LOOP_DIAGNOSE` protocol and the user's archive-first correction provided stronger evidence after the fact.
- Therefore, the prior loop should not be diagnosed as a simple logic failure. It is more accurately a boundary and framing failure under incomplete context.

**Signal detected:**

- The prior loop's mistake was not that every component failed. It preserved the anti-self-verdict conclusion correctly. The failure is narrower: it overfit to the user-provided "Critique marks" hypothesis and failed to search for a non-embedded diagnostic workflow.

**Convergence criteria:**

- **Frontier stability:** yes. The relevant artifacts and alternative explanations have been scanned.
- **Declining discovery rate:** yes. Later cycles refined attribution rather than finding new major evidence.
- **Bounded gaps:** yes. Remaining uncertainty is confidence weighting across affected stages.

## 3. Structural Map

### Territory Overview

The correction chain contains four major regions:

1. The prior inquiry's verdict-authority frame.
2. The prior inquiry's hardening of Critique upstream diagnosis into marks.
3. The human correction that introduced the archive-first diagnosis argument.
4. The corrected inquiry's `LOOP_DIAGNOSE`-style boundary model.

### Inventory

| Region | What was found | Confidence |
|---|---|---|
| Prior branch framing | Too narrow for archive-first diagnosis | Confirmed |
| Prior Exploration | Mapped signal sources but not artifact archive as diagnostic substrate | Confirmed |
| Prior Sensemaking | Accepted Critique upstream diagnosis as missing mechanism | Confirmed |
| Prior Decomposition | Made Critique upstream diagnosis a component | Confirmed |
| Prior Innovation | Chose hybrid with Critique upstream diagnosis | Confirmed |
| Prior Critique | Did not kill over-embedded diagnosis | Confirmed |
| Corrected inquiry | Reframed around archive-first, on-demand diagnosis | Confirmed |
| `LOOP_DIAGNOSE` protocol | Provides the diagnostic boundary the prior inquiry lacked | Confirmed |
| Exact root cause | Mixed, not isolated to one stage | Scanned |

### Signal Log

- **Strong signal:** prior branch question was about verdict authority, not diagnosis workflow boundaries.
- **Strong signal:** prior artifacts repeatedly say Critique can/should produce upstream diagnosis, showing hardening across stages.
- **Strong signal:** corrected artifacts explicitly introduce `docarchive/` as active evidence and `LOOP_DIAGNOSE` as the right boundary.
- **Moderate signal:** the prior loop was influenced by the user's earlier proposal that Critique might produce marks.
- **Moderate signal:** Critique failed to test "mandatory marks are unnecessary because archives already exist," but that candidate was not strongly generated upstream.

### Confidence Map

- **High confidence:** prior loop missed the archive-first diagnostic workflow because the branch frame centered verdict authority and routability.
- **High confidence:** Decomposition and Innovation hardened a tentative diagnostic idea into a default architecture.
- **Medium confidence:** Sensemaking over-accepted the user's Critique-marks proposal without enough uncomfortable perspectives.
- **Medium confidence:** Critique under-tested base-loop weight and artifact-reuse alternatives.
- **Low confidence:** exact distribution of responsibility between runner framing and discipline execution.

### Frontier State

Exploration is sufficient for Sensemaking. The diagnostic frontier is stable: the next step is to convert this comparative map into failure hypotheses with confidence.

### Gaps And Recommendations

Sensemaking should distinguish:

- branch framing failure;
- Sensemaking anchor dominance around routability and Critique marks;
- Decomposition boundary error between routine Critique and diagnostic protocol;
- Innovation candidate omission;
- Critique dimension blindness around archive reuse and base-loop burden;
- CONCLUDE overstatement in the final wording.

## Exploration Telemetry

- **Cycles run:** 5.
- **Mode coverage:** artifact exploration over LOOP_DIAGNOSE, prior inquiry, corrected inquiry, comparative structure, and counter-explanation jump scan.
- **Frontier stability:** stable by Cycle 5.
- **Discovery rate:** declining.
- **Bounded gaps:** yes; remaining uncertainty concerns attribution weights, not missing artifact regions.
- **Jump scan:** completed; prior loop is better described as a boundary/framing failure under incomplete context than as a total reasoning failure.
- **Overall:** sufficient for Sensemaking.
