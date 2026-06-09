---
status: active
diagnoses: devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md
compares_with: devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks/finding.md
---
# Finding: Loop Diagnose - Discipline Verdict Source

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Finding Summary

- The `08-27` inquiry did not fail completely. It correctly rejected authoritative discipline self-verdicts.

- The failure was narrower: `08-27` overfit to Critique-issued upstream marks as the alternative to discipline self-verdicts.

- The strongest diagnosis is a mixed framing-and-boundary failure. The branch question asked who should own verdict authority, not whether diagnosis should be embedded in the original loop or performed later from archived artifacts.

- The corrected `08-47` inquiry succeeded because it introduced the missing boundary: routine Critique records evaluation evidence, while `LOOP_DIAGNOSE` analyzes archived artifacts later when a correction chain exists.

- The strongest maintenance candidates are lightweight checks: use `LOOP_DIAGNOSE` explicitly for correction-chain work, check existing `docarchive/` evidence before proposing marks, expand user-proposed mechanisms into alternatives, and add base-loop burden plus artifact-reuse dimensions to relevant protocol-change critiques.

- Broad edits to core discipline specs and diagnostic indexes should be deferred until more diagnostic findings show the same pattern.

## Correction Chain Summary

**Prior inquiry:** `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority`

**Corrected inquiry:** `devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks`

**Human correction:** the user said the "Critique Should Produce Upstream Marks" section was not logical because each inquiry already has `docarchive/` folders containing Critique and other discipline outputs. Those artifacts can be analyzed later without adding marks. The user pointed to `homegrown/protocols/loop_diagnose.md` as the right kind of inner-loop diagnosis mechanism.

**What changed:** the prior inquiry framed the issue as verdict authority and selected Critique upstream marks. The corrected inquiry reframed the issue as diagnosis workflow design and selected archive-first, on-demand `LOOP_DIAGNOSE`.

## Finding

The prior loop likely missed the `08-47` conclusion because it asked a narrower question than the correction required.

The `08-27` branch asked where `PROCEED / FLAG / RE-RUN` authority should live. Inside that frame, Critique looked like a reasonable evaluator because Critique already sees downstream kill/refine evidence.

The `08-47` branch asked a different question: should upstream diagnosis live inside routine Critique output, or should it be a separate diagnostic protocol over archived artifacts? Inside that frame, `LOOP_DIAGNOSE` over `docarchive/` evidence became the better answer.

The failure therefore propagated through the loop. Exploration in `08-27` found Critique-derived upstream diagnosis as a signal. Sensemaking accepted it as a missing mechanism. Decomposition made it a component. Innovation selected a hybrid architecture that included it. Critique did not kill it because its dimensions underweighted archive reuse, base-loop burden, and non-discipline attribution. CONCLUDE then stated the surviving idea too strongly.

This is not a single-stage failure. It is a failure chain.

## Failure Hypotheses

### Hypothesis 1: Branch Frame Was Too Narrow

**Affected stage:** loop framing.

**Shortcoming type:** wrong design axis.

**Evidence from prior inquiry:** `08-27/_branch.md` asks where `PROCEED / FLAG / RE-RUN` authority should live.

**Evidence from human correction:** the user later shifted the issue to existing `docarchive/` artifacts and `LOOP_DIAGNOSE`.

**Evidence from corrected inquiry:** `08-47/_branch.md` asks whether upstream diagnosis belongs in Critique output or in a separate protocol.

**Confidence:** HIGH.

**Why not stronger:** the user had not yet made the archive-first correction when `08-27` was created.

**Maintenance candidate:** add a correction-chain framing check before branch creation.

**Evaluation gate:** in the next 3 correction-chain inquiries, verify that branch framing distinguishes routing, diagnosis, and evidence storage.

### Hypothesis 2: Sensemaking Over-Accepted The Critique-Marks Proposal

**Affected stage:** Sensemaking.

**Shortcoming type:** anchor dominance.

**Evidence from prior inquiry:** `08-27/docarchive/sensemaking.md` says the user's Critique proposal makes sense and treats it as a missing mechanism.

**Evidence from human correction:** the user rejected that mechanism because archived artifacts already exist.

**Evidence from corrected inquiry:** `08-47/docarchive/sensemaking.md` stabilized the archive-first, diagnose-on-demand model.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** the prior Sensemaking correctly separated telemetry, routing verdicts, and outcome verdicts.

**Maintenance candidate:** treat user-proposed mechanisms as candidates, not constraints.

**Evaluation gate:** in the next 3 maintenance inquiries with user-suggested mechanisms, verify that at least one embedded, one artifact-derived, and one protocol-wrapper alternative are considered.

### Hypothesis 3: Decomposition Cut The Wrong Boundary

**Affected stage:** Decomposition.

**Shortcoming type:** boundary error.

**Evidence from prior inquiry:** `08-27/docarchive/decomposition.md` made `Critique Upstream Diagnosis` a component and included a `Critique -> Upstream Diagnosis Store` interface.

**Evidence from human correction:** the user said the archive can be analyzed later without adding marks.

**Evidence from corrected inquiry:** `08-47/docarchive/decomposition.md` separated routine Critique, archive storage, diagnostic protocol, maintenance candidates, and future adoption criteria.

**Confidence:** HIGH.

**Why not stronger:** the prior Decomposition did mention storage as an open design decision, but did not use that signal to change the boundary.

**Maintenance candidate:** add an archive-use check for diagnostic or telemetry design work.

**Evaluation gate:** in the next 3 telemetry or diagnostic findings, check whether existing artifacts already answer the need before proposing new marks.

### Hypothesis 4: Innovation Omitted Archive-First Diagnosis

**Affected stage:** Innovation.

**Shortcoming type:** candidate omission.

**Evidence from prior inquiry:** `08-27/docarchive/innovation.md` generated several candidates but no explicit "diagnose later from archived artifacts" candidate.

**Evidence from human correction:** the user named exactly that missing alternative.

**Evidence from corrected inquiry:** `08-47/docarchive/innovation.md` generated "Explicit LOOP_DIAGNOSE Over Archives" and selected it as strongest.

**Confidence:** HIGH.

**Why not stronger:** the exact `LOOP_DIAGNOSE` protocol was introduced as salient context only later.

**Maintenance candidate:** add a mechanism-expansion habit for self-maintenance questions.

**Evaluation gate:** future self-maintenance inquiries should include at least one non-embedded or artifact-derived alternative before selecting architecture.

### Hypothesis 5: Critique Missed Key Dimensions

**Affected stage:** Critique.

**Shortcoming type:** dimension blindness.

**Evidence from prior inquiry:** `08-27/docarchive/critique.md` evaluated source-of-authority honesty, routability, automation safety, diagnostic value, feasibility, discipline purity, and calibration value. It did not separately weight base-loop burden, artifact reuse, or broader attribution scope.

**Evidence from human correction:** the correction emphasizes no extra processing or marks because archived outputs already exist.

**Evidence from corrected inquiry:** `08-47/docarchive/critique.md` includes evidence quality, base-loop weight, attribution humility, adoption safety, and compatibility with MVL+.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** the prior Critique did warn about over-attribution and advisory marks; it just did not make those concerns decisive.

**Maintenance candidate:** add base-loop burden and artifact-reuse dimensions to protocol-change critiques when proposed changes add routine fields, steps, or marks.

**Evaluation gate:** in the next 5 protocol-change critiques, verify that mandatory per-run cost and artifact reuse are explicitly assessed.

### Hypothesis 6: CONCLUDE Overstated A Survivor

**Affected stage:** CONCLUDE / synthesis.

**Shortcoming type:** recommendation overstatement.

**Evidence from prior inquiry:** `08-27/finding.md` says, "Let Critique produce upstream discipline marks from kill/refine patterns."

**Evidence from human correction:** the user directly challenged that section.

**Evidence from corrected inquiry:** `08-47/finding.md` treats that prior section as corrected and replaces it with archive-first, diagnose-on-demand wording.

**Confidence:** HIGH.

**Why not stronger:** CONCLUDE amplified the flaw but did not originate it.

**Maintenance candidate:** add a scoped overstatement check for correction findings.

**Evaluation gate:** apply to 3 future correction findings and check whether final recommendations preserve Critique caveats without weakening clear decisions.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| Loop framing | Wrong design axis | strong | high | Add correction-chain framing check |
| Sensemaking | Anchor dominance | medium | medium-high | Expand user-proposed mechanisms into alternatives |
| Decomposition | Boundary error | strong | high | Add archive-use check |
| Innovation | Candidate omission | strong | high | Require artifact-derived alternatives in maintenance design |
| Critique | Missing dimensions | medium | medium-high | Add base-loop burden and artifact-reuse dimensions where relevant |
| CONCLUDE | Overstatement | strong | high | Add scoped recommendation-strength check |

## Maintenance Candidates

### Candidate 1: Use `LOOP_DIAGNOSE` Explicitly For Correction Chains

**What should change:** when the user explicitly asks for correction-chain diagnosis, read `homegrown/protocols/loop_diagnose.md` before branch creation and frame the inquiry with its required fields.

**Affected file or protocol:** MVL+ runner behavior or future MVL+ hook.

**Risk class:** low if explicit-trigger only.

**Expected benefit:** prevents ordinary MVL+ framing from missing the prior/corrected/human-correction structure.

**Evaluation gate:** after 5 explicit `LOOP_DIAGNOSE` runs, review whether trigger language and output structure are stable enough for a narrow hook.

**Branch experiment:** yes, but only after the gate.

### Candidate 2: Add Archive-Use Check To Diagnostic Framing

**What should change:** diagnostic branch framing should ask which existing `docarchive/` artifacts can answer the question before proposing new marks or schema.

**Affected file or protocol:** `homegrown/protocols/loop_diagnose.md` or future diagnostic-framing guidance.

**Risk class:** low.

**Expected benefit:** directly prevents the archive blindness seen in `08-27`.

**Evaluation gate:** next 3 correction-chain inquiries should name the relevant archived artifacts before generating maintenance candidates.

**Branch experiment:** not yet; use as a practice first.

### Candidate 3: Add User-Proposed Mechanism Expansion

**What should change:** when a user proposes a mechanism during maintenance/design work, generate alternatives before adopting it.

**Affected file or protocol:** future MVL+/maintenance guidance; possibly `LOOP_DIAGNOSE` examples later.

**Risk class:** low to medium.

**Expected benefit:** prevents overfitting to the first mechanism suggested by the user or by the model.

**Evaluation gate:** in the next 3 relevant inquiries, verify that alternatives include embedded, artifact-derived, and protocol-wrapper options.

**Branch experiment:** not yet.

### Candidate 4: Add Relevant Critique Dimensions

**What should change:** protocol-change critiques should evaluate base-loop burden and artifact reuse when proposed changes add routine fields, steps, routing labels, or diagnostic marks.

**Affected file or protocol:** Critique practice for protocol-change inquiries.

**Risk class:** low if scoped to protocol changes.

**Expected benefit:** would likely have weakened or killed mandatory upstream Critique marks in `08-27`.

**Evaluation gate:** in the next 5 protocol-change critiques, check whether these dimensions changed candidate survival.

**Branch experiment:** possible after the gate.

### Candidate 5: Add CONCLUDE Overstatement Check

**What should change:** correction findings should check whether final recommendations make a surviving candidate sound stronger than the discipline outputs justify.

**Affected file or protocol:** CONCLUDE practice for correction findings.

**Risk class:** medium because it can cause excessive hedging if applied poorly.

**Expected benefit:** prevents caveated survivors from becoming overstrong implementation recommendations.

**Evaluation gate:** apply to 3 future correction findings and verify that it catches overstatement without weakening clear decisions.

**Branch experiment:** possible after the gate.

### Candidate 6: Defer Diagnostic Index And Broad Source Edits

**What should change:** do not create a cross-inquiry diagnostic index or edit all core discipline specs yet.

**Affected file or protocol:** none now.

**Risk class:** low.

**Expected benefit:** avoids overfitting from one correction chain.

**Evaluation gate:** revisit after at least 10 diagnostic findings show repeated patterns.

**Branch experiment:** no.

## Reasoning

Single-stage blame was rejected. Critique did fail to kill the upstream-mark design, but that design had already been shaped by the branch frame, Sensemaking, Decomposition, and Innovation.

The claim that `08-27` was completely wrong was rejected. Its anti-self-verdict conclusion remains sound and was preserved by `08-47`.

The claim that the only problem was missing `LOOP_DIAGNOSE` was rejected. The named protocol helps, but the deeper miss was failure to consider existing archived artifacts as diagnostic evidence.

Broad immediate source edits were killed. One correction chain supports lightweight checks and future gates, not a rewrite of core discipline specs.

The diagnostic index idea was deferred. It may become useful after repeated diagnostic findings, but it would be premature now.

## Open Questions

### Monitoring

- After 5 explicit `LOOP_DIAGNOSE` runs, check whether MVL+ should add a narrow explicit-trigger hook.

- After 10 diagnostic findings, check whether a cross-inquiry diagnostic index is justified.

### Refinement Triggers

- Reopen the Critique dimension recommendation if future protocol-change critiques continue to miss base-loop burden or artifact reuse.

- Reopen the CONCLUDE overstatement recommendation if future findings continue turning caveated survivors into overstrong recommendations.

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** mixed framing-and-boundary failure. The prior loop asked about verdict authority, then hardened Critique upstream diagnosis into a mechanism before considering archive-first diagnosis.

- **Strongest maintenance candidate:** add archive-use and user-mechanism expansion checks to correction-chain or self-maintenance framing.

- **Main uncertainty:** exact responsibility split between branch framing, Sensemaking, Decomposition, Innovation, and Critique. The evidence supports a chain, not a single isolated cause.

- **Recommended next step:** keep using `LOOP_DIAGNOSE` explicitly for correction-chain diagnoses and collect several more diagnostic findings before editing core discipline specs.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
use homegrown/protocols/loop_diagnose.md
to understand what went wrong in 
    devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md and it did not conclude similar things in devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks/docarchive
```

Pasted MVL procedural context omitted because the active MVL+ skill and LOOP_DIAGNOSE protocol were loaded from disk for this run.

</details>
