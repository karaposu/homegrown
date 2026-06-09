---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Loop Diagnose — What Went Wrong in 20-29 Inquiry

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-06-06_20-29__meta_ambiguity_vs_meta_question/`, the human correction (substrate-bounded + downstream-safety argument), and the later corrected inquiry at `devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

**Goal**: evidence-backed failure hypotheses with confidence calibration; maintenance candidates with evaluation gates; honest mixed-attribution where evidence does not isolate one stage; per LOOP_DIAGNOSE protocol guardrails (no overclaim; no broad fundamentals rewrite from one chain).

## Finding Summary

- **Mixed attribution across 4 stages**: branch-framing + sensemaking + innovation + critique all contributed to 20-29's miss. The strongest LOAD-BEARING CONTRIBUTING stage is **sensemaking** (had the opportunity to extract §1 substrate-bounded as a hard constraint regardless of branch framing — and didn't); the strongest BACKSTOP failure is **critique** (dimension-set lacked SAFETY / SUBSTRATE-COMPLIANCE). Branch-framing is the UPSTREAM contributing stage (scope-setting did not surface the safety axis).

- **Five failure hypotheses identified, each with evidence triplet** (evidence from prior + correction + corrected): H1 branch-framing miss; H2 sensemaking anchor-extraction miss (§1 not extracted as hard constraint); H3 sensemaking perspective-blindness (no downstream-consumer perspective in Phase 2); H4 innovation Inherited Frame Audit miss (audit accepted assumptions without safety-axis challenge); H5 critique dimension-blindness (no SAFETY dimension among 8). All five have HIGH or MED-HIGH confidence individually; mixed attribution composite is HIGH.

- **Three maintenance candidates**, each with bounded scope + evaluation gate: (1) sensemaking spec — add "Downstream-Consumer-Behavior" perspective to Phase 2 perspective checklist when candidates touch a discipline output that's read by other disciplines; (2) critique spec — add "Substrate-Compliance" as default dimension when candidates touch upstream-discipline outputs; (3) LOOP_DIAGNOSE protocol — flag pattern "user-intuition-without-rationale" (e.g., *"feels like a better fit"*) as a branch-framing-suspect surface to monitor.

- **One new reusable meta-pattern**: **pipeline-prone-to-safety-miss-without-user-signal**. The 20-29 pipeline's miss was triggered by USER SURFACING, not pipeline self-detection. The 21-52 sensemaking derived the K2 insight FROM the user's correction, not from first principles. This suggests the pipeline as currently configured systematically misses safety failures in the absence of user signals. The maintenance candidates above address this; the pattern itself is reusable for future correction-chain diagnoses.

- **Diagnostic verdict: ACTIONABLE** — three maintenance candidates each have evidence + evaluation gates per LOOP_DIAGNOSE Step 4 requirements.

## Finding

A small piece of context for the reader: this finding diagnoses the prior 20-29 inquiry (which committed F3 Hybrid Q-of-ambiguities with a 4-shape MQ permissive answer-range INCLUDING confident and hedged commitments — a verdict the user then corrected at 21-52 by surfacing substrate-bounded + downstream-safety reasoning). The diagnostic question is: what in the 20-29 pipeline (which disciplines, branch-framing, or orchestration mechanisms) allowed the dangerous 4-shape commitment to ship?

This finding follows the LOOP_DIAGNOSE protocol at `cognitive_harness/protocols/loop_diagnose.md`, which frames a special MVLw inquiry on the correction chain itself.

### Correction Chain Summary

- **Prior path**: `devdocs/inquiries/2026-06-06_20-29__meta_ambiguity_vs_meta_question/finding.md`
- **Corrected path**: `devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md`
- **Human correction**: the user's *"this is dangerous for downstream operations. because without surfacing we don't have correct delicate context. so even if MQs are okay, there should be no answers... i am certain of this."*
- **What changed**: MQ permissive answer-range narrowed from 4-shape {identified-ambiguity / confident commitment / hedged commitment / explicit-empty} to 2-shape {identified-ambiguity / explicit-empty}; confident + hedged commitments REMOVED at articulate_simple stage; three cascades (MultiDepth + Rephrase + §9 two-pass) named honestly with specific resolutions deferred; two new meta-patterns surfaced (substrate-contamination-vs-downstream-bias + cascade-acknowledgment-without-pre-decision).

### Failure Hypotheses

#### Hypothesis 1: Branch-framing miss

**Affected stage**: branch-framing (upstream scope-setting)

**Shortcoming type**: scope-setting failure — user's "feels like a better fit" intuition preserved in Source Input verbatim but NOT INTERROGATED at branch time to surface the underlying substrate-bounded + downstream-safety rationale.

**Evidence from prior inquiry**: 20-29 _branch.md framed the Question as Meta-question vs Meta-ambiguity (rename/reframe). Observation targets enumerated three claims (reframe + better-fit + dive deep). No observation target asked "is allowing commitments structurally safe given §1 substrate-bounded constraint?"

**Evidence from human correction**: the user's 21-52 correction was specifically about safety/danger — *"this is dangerous"* — surfacing a rationale that was implicit but not made explicit at 20-29 branch time.

**Evidence from corrected inquiry**: 21-52 _branch.md DID frame the question around substrate-bounded + downstream-safety explicitly (this happened only because the user surfaced it; the pipeline didn't self-detect).

**Confidence**: MEDIUM-HIGH. The miss is clearly present; whether interrogation at branch time would have surfaced the rationale is plausible but not isolated.

**Why not stronger**: branch-framing is one stage; sensemaking could have caught the constraint regardless. Not solely load-bearing.

**Maintenance candidate**: LOOP_DIAGNOSE protocol enrichment — flag patterns like *"feels like" / "better fit"* in Source Input as user-intuition-without-rationale; recommend branch-time interrogation step.

**Evaluation gate**: when 2+ future correction-chain diagnoses surface the same pattern, propose a protocol-level update (no immediate source edit from 1 chain per LOOP_DIAGNOSE guardrails).

---

#### Hypothesis 2: Sensemaking anchor-extraction miss

**Affected stage**: Sensemaking — Phase 1 (Cognitive Anchor Extraction)

**Shortcoming type**: incomplete hard-constraint extraction — §1 substrate-bounded was not extracted as a HARD CONSTRAINT for the answer-range candidates; was treated as background context, not as discriminator.

**Evidence from prior inquiry**: 20-29 sensemaking's Constraints section listed C1-C8 including §5 lightweight stance, 19-06 Q-mandatory, 11-16 PERMISSION — but did NOT list §1 substrate-bounded as a CRITICAL constraint on the answer's CONTENT shape. KI2 said "operation's actual cognitive work is BOTH ambiguity-noticing AND commitment-making" — asserted without testing whether commitment-making PRE-SURFACING is SAFE given substrate-bounded.

**Evidence from human correction**: user's correction made §1 substrate-bounded the LOAD-BEARING ground for the verdict — exactly the constraint sensemaking missed extracting.

**Evidence from corrected inquiry**: 21-52 sensemaking's Constraints section explicitly listed C1 §1 substrate-bounded as a tight structural constraint; KI2 explicitly chained substrate-bounded → guess → downstream-bias.

**Confidence**: HIGH. The contrast between 20-29 anchor set (missing §1 as hard constraint) and 21-52 anchor set (§1 central) is direct evidence.

**Maintenance candidate**: Sensemaking spec — add an explicit anchor-extraction check for upstream-discipline-output candidates: "Have you extracted the discipline's substrate-boundary commitments as HARD constraints on the candidate's content shape?"

**Evaluation gate**: run on 3 future inquiries that touch articulate_simple's output OR another upstream-discipline output; check whether explicit substrate-boundary anchor extraction surfaces safety concerns the prior anchor set missed.

---

#### Hypothesis 3: Sensemaking perspective-blindness

**Affected stage**: Sensemaking — Phase 2 (Perspective Checking)

**Shortcoming type**: perspective-set incomplete — Risk + Definitional perspectives at 20-29 did NOT include "downstream-consumer-behavior" as a perspective. The pipeline's consumer-layer dynamics (what Rephrase does with MQ commitments; what MultiDepth does; what the runner does) were not perspective-checked.

**Evidence from prior inquiry**: 20-29 sensemaking's Phase 2 perspectives included Technical / Human / Strategic / Risk / Resource / Definitional / Frame-exit / Phase-Calibration. Risk perspective enumerated 5 risks; none was "downstream consumers act on contaminated commitments." Definitional perspective tested 5 commitments; none was "does §1 substrate-bounded forbid commitments in MQ answer?"

**Evidence from human correction**: user explicitly identified downstream as the danger surface — exactly the perspective sensemaking missed.

**Evidence from corrected inquiry**: 21-52 sensemaking's KI1 named the SCOPE-MISMATCH crux at the consumer-layer; this perspective was applied directly.

**Confidence**: HIGH.

**Maintenance candidate**: Sensemaking spec — add a "Downstream-Consumer-Behavior" perspective to Phase 2 perspective checklist, fired when candidates touch a discipline output that's read by other disciplines.

**Evaluation gate**: run on 3 future inquiries that touch a discipline-output (e.g., sense-making's anchors, surfacing's relevance tags, articulate_simple's bundle); check whether downstream-consumer-behavior perspective surfaces concerns the prior set missed.

---

#### Hypothesis 4: Innovation Inherited Frame Audit miss

**Affected stage**: Innovation (Inherited Frame Audit — between Phase 2 and Phase 3)

**Shortcoming type**: audit completeness — Inherited Frame Audit's Step (iii) Challenge scan accepted "all assumptions challenged" but the challenges were about shape/naming/uniformity, NOT about safety. The audit's predicate (challenge inherited frame) was satisfied procedurally but the challenge set was scope-incomplete.

**Evidence from prior inquiry**: 20-29 innovation.md Inherited Frame Audit Step (iii) said "all seed + 9 piece-level assumptions explicitly challenged in candidate set; audit did NOT fire." The challenges were Lens Shifting / Inversion / Piece-Level Inversion at meta-decision pieces — none included a substrate-bounded-safety challenge.

**Evidence from human correction**: user surfaced the safety challenge that audit missed.

**Evidence from corrected inquiry**: 21-52's audit at Phase 2 of innovation included the substrate-bounded chain as a challenge — but 21-52 had the benefit of user signal; the audit didn't generate the challenge independently.

**Confidence**: MEDIUM. The audit was procedurally correct; the scope-incompleteness is real but harder to isolate as audit-specific.

**Why not stronger**: Inherited Frame Audit's "challenge each meta-decision assumption" predicate is generic; the safety challenge may be more properly a sensemaking/critique concern.

**Maintenance candidate**: None proposed at audit-spec level from this chain (per LOOP_DIAGNOSE C6 — don't propose broad fundamentals rewrites). Defer to monitoring whether sensemaking + critique candidates address the underlying gap.

**Evaluation gate**: if H2/H3/H5 maintenance candidates are adopted and the gap persists, revisit Inherited Frame Audit.

---

#### Hypothesis 5: Critique dimension-blindness

**Affected stage**: Critique — Phase 0 (Dimension Construction)

**Shortcoming type**: dimension-set incomplete — 20-29 critique's 8 dimensions included USER-CLAIM-FIDELITY + INHERITANCE-COHERENCE (project-specific risk dimensions) but did NOT include SAFETY or SUBSTRATE-COMPLIANCE. Even with weak upstream framing, a safety dimension at critique-stage would have flagged the 4-shape answer-range as failing.

**Evidence from prior inquiry**: 20-29 critique.md Phase 0 dimensions: Correctness / Coherence / Feasibility / Completeness / Robustness / Elegance / USER-CLAIM-FIDELITY / INHERITANCE-COHERENCE. The project-specific risk dimension check noted candidate set involves project artifacts but added inheritance-coherence, not safety.

**Evidence from human correction**: user identified safety as the central concern — critique missed it.

**Evidence from corrected inquiry**: 21-52 critique.md did not yet add SAFETY as a default dimension (this finding is proposing it); but the verdict accepted at sensemaking-stage made critique's redundancy of safety-check unnecessary at 21-52.

**Confidence**: HIGH. Critique's role as backstop makes its dimension-blindness directly load-bearing for the miss surviving.

**Maintenance candidate**: Critique spec — add "Substrate-Compliance" as a default dimension when candidates touch upstream-discipline outputs (especially articulate_simple's output read by /surfacing or analogous cross-discipline outputs).

**Evaluation gate**: run on 3 future critique passes on candidates that touch upstream-discipline outputs; check whether substrate-compliance dimension flags substrate-bounded violations the prior dimension set missed.

---

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---|---|
| **Branch-framing** | scope-setting failure (user intuition not interrogated) | medium | MEDIUM-HIGH | LOOP_DIAGNOSE protocol monitoring (when 2+ chains share pattern, propose protocol update) |
| **Sensemaking — Phase 1** | hard-constraint anchor-extraction miss (§1 substrate-bounded) | **strong** | **HIGH** | Sensemaking spec: explicit anchor-extraction check for upstream-output candidates |
| **Sensemaking — Phase 2** | perspective-blindness (no downstream-consumer perspective) | **strong** | **HIGH** | Sensemaking spec: add Downstream-Consumer-Behavior perspective to Phase 2 checklist |
| Innovation — Inherited Frame Audit | scope-incomplete challenge set (procedurally satisfied but safety absent) | medium | MEDIUM | None at audit-spec level; defer to sensemaking + critique candidates |
| **Critique — Phase 0** | dimension-blindness (no SAFETY / SUBSTRATE-COMPLIANCE) | **strong** | **HIGH** | Critique spec: add Substrate-Compliance as default dimension for upstream-output candidates |

**Composite verdict**: mixed attribution; sensemaking (Phases 1 + 2) is the LOAD-BEARING CONTRIBUTING surface; critique is the BACKSTOP failure surface; branch-framing is the UPSTREAM SCOPE-SETTING contributing surface.

### Maintenance Candidates

**Candidate 1: Sensemaking spec — add "Downstream-Consumer-Behavior" perspective**

- **What changes**: add a new perspective to Phase 2 perspective checklist: *"Downstream-Consumer-Behavior — when candidates touch a discipline output that's read by other disciplines, ask what each consumer does when it reads the candidate's content. Does the consumer have a protocol to discount uncertainty markers? Does the consumer act on the content as actionable regardless?"*
- **File**: `cognitive_harness/sense-making/references/sensemaking.md` — Phase 2 perspective list
- **Risk class**: **LOW** — additive perspective; doesn't change existing perspective semantics
- **Expected benefit**: catches consumer-layer mismatches like K2 (PERMISSION-not-CONSTRAINT scope vs downstream-bias) at sensemaking-stage rather than relying on user surfacing
- **Evaluation gate**: run on 3 future inquiries that touch a discipline output (e.g., sense-making's anchor list; surfacing's relevance tags; articulate_simple's bundle); compare whether this perspective surfaces consumer-layer concerns the prior set missed
- **Branch experiment**: YES — propose as a CANDIDATE source edit; defer commit until evaluation gate confirms across 3 inquiries

**Candidate 2: Critique spec — add "Substrate-Compliance" as default dimension**

- **What changes**: add a project-specific risk dimension to the default critique dimension set: *"Substrate-Compliance — when candidates touch a discipline output read by other disciplines, ask whether the candidate's content shape complies with the originating discipline's substrate boundary. Does the candidate allow content that requires substrate the discipline doesn't have access to?"*
- **File**: `cognitive_harness/td-critique/references/td-critique.md` — Phase 0 dimension list + project-specific risk dimension check refinement note
- **Risk class**: **LOW-MEDIUM** — additive default dimension; may surface false-positives requiring per-inquiry calibration
- **Expected benefit**: provides backstop catch for substrate-bounded violations the upstream stages miss
- **Evaluation gate**: run on 3 future critique passes; check substrate-compliance dimension's flag rate and false-positive rate
- **Branch experiment**: YES — propose as CANDIDATE; defer commit until evaluation gate confirms

**Candidate 3: LOOP_DIAGNOSE protocol — monitoring trigger for "user-intuition-without-rationale" pattern**

- **What changes**: add to LOOP_DIAGNOSE failure modes a note: *"User-intuition-without-rationale — when a prior inquiry's Source Input contains phrases like 'feels like a better fit' / 'better fit' / 'feels right' without explicit rationale, the branch-framing stage may have missed an opportunity to interrogate the underlying reason. Note this as a CONTRIBUTING factor; propose branch-framing interrogation step only when 2+ chains exhibit the same pattern."*
- **File**: `cognitive_harness/protocols/loop_diagnose.md` — Failure modes section
- **Risk class**: **LOW** — monitoring note; not a behavior change
- **Expected benefit**: accumulates evidence for whether branch-framing interrogation should become a protocol step
- **Evaluation gate**: monitor 2+ correction-chain diagnoses; if pattern recurs, propose protocol step
- **Branch experiment**: NO — monitoring only; no source edit at this stage

### Diagnostic Verdict

**Overall: ACTIONABLE**

- **Best-supported diagnosis**: mixed attribution across 4 stages of 20-29 pipeline; sensemaking (anchor-extraction + perspective-blindness) is the LOAD-BEARING CONTRIBUTING surface; critique (dimension-blindness) is the BACKSTOP failure surface; branch-framing is the UPSTREAM SCOPE-SETTING contributing surface; innovation (Inherited Frame Audit) is procedurally correct but scope-incomplete.

- **Strongest maintenance candidate**: Candidate 1 (Sensemaking — add Downstream-Consumer-Behavior perspective) — directly addresses the load-bearing miss; bounded scope; clear evaluation gate.

- **Main uncertainty**: whether sensemaking maintenance alone is sufficient, or whether critique's backstop addition (Candidate 2) is also necessary. The evaluation gate (3 inquiries) will help discriminate.

- **Recommended next step**: propose Candidates 1 + 2 as branch experiments; wait on evaluation-gate evidence before committing source edits. Candidate 3 (LOOP_DIAGNOSE monitoring note) is low-risk and can be added immediately as a monitoring note without source-behavior change.

## Open Questions

### Monitoring

- Whether the maintenance candidates' evaluation gates (3 future inquiries) produce signal that justifies committing source edits.
- Whether other correction chains in the project history show the same pipeline-prone-to-safety-miss pattern, which would strengthen the case for the candidates.

### Blocked

- Source edits to sensemaking + critique specs wait on evaluation-gate confirmation per LOOP_DIAGNOSE C5.

### Research Frontiers

- Whether the **pipeline-prone-to-safety-miss-without-user-signal** meta-pattern (named in this finding) generalizes beyond articulate_simple's MQ-operation case to other cognitive-discipline outputs.

### Refinement Triggers

- If 2+ correction chains show user-surfacing as the sole detection mechanism for safety failures, propose the maintenance candidates as committed source edits (escalate from CANDIDATE to ACTIVE).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

Per-item bundle:

Item text — "Refactor the authentication module"
MQ1 (Structural / scope)
Question: What's the scope of "refactor the authentication module" — time-horizon, conceptual, project, feature, cross-cutting, or other?
Answer: Feature-level scope; the auth module is a feature subsystem within a larger codebase. Not time-horizon, not cross-cutting.

and in devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md 
it is fixed..

use cognitive_harness/protocols/loop_diagnose.md and try to understand what discipline or brach creation mechanism was at fault
```

</details>
