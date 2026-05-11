# Critique: Rapid Fundamentals Improvement Focus

## User Input

`devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/_branch.md`

## 1. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Direct fundamentals impact | 5 | Improves the rules, protocols, disciplines, or loop behavior that govern future runs. |
| Evidence quality | 5 | Uses real failures/corrections and preserves enough evidence to justify changes. |
| Speed to useful improvement | 5 | Can start immediately and produce useful learning in days, not after a large system build. |
| Feasibility | 4 | Fits the current Homegrown stage and available artifacts. |
| Overbuild resistance | 4 | Avoids premature autonomy, excessive architecture, and broad rewrites. |
| Closure/evaluation | 4 | Includes a way to decide whether a change should be retained, reverted, or refined. |
| Downstream leverage | 3 | Produces artifacts later useful to meta-loop, Navigation, `/intuit`, or external validation. |
| User workload fit | 3 | Captures correction work the user is already doing rather than adding heavy ceremony. |

Critical dimensions: direct fundamentals impact, evidence quality, speed, feasibility, overbuild resistance, closure/evaluation.

## 2. Fitness Landscape

### Viable Region

The viable region contains approaches that:

- learn from real MVL/MVL+ failures;
- produce durable maintenance memory;
- apply small fundamentals patches;
- evaluate later outcomes;
- can begin without building full autonomy.

### Dead Region

The dead region contains approaches that:

- add large orchestration before evidence calibration;
- rely on self-reference without external/user correction signals;
- produce findings or architecture without a conversion path into fundamentals changes;
- require autonomous self-editing before the system has Level 1 maintenance evidence.

### Boundary Region

Boundary candidates are useful but insufficient alone:

- structural check;
- external validation;
- maintenance ledger only;
- loop diagnosis only;
- meta-loop as later consumer.

### Unexplored Region

The main unexplored region is a future automated selector that decides when to diagnose and when to patch. It is intentionally out of scope because it depends on the first manual evidence loop.

## 3. Candidate Verdicts

### A. Meta-Loop First

**Prosecution:** A meta-loop can traverse faster without knowing whether the artifacts it traverses are reliable. It risks scaling weak fundamentals.

**Defense:** The meta-loop is a real future need and fits the Navigation-as-eyes concept.

**Collision:** Defense wins for long-term orchestration, but prosecution wins on the current question. It does not directly improve fundamentals without evidence calibration.

**Verdict:** REFINE.

Constructive output: keep meta-loop narrow and make it consume maintenance evidence after the correction-chain trial.

### B. `/intuit` First

**Prosecution:** `/intuit` adds a hunch layer before the system has a good mechanism for judging whether hunches improved later runs.

**Defense:** It is strategically important for long-term autonomy and pattern recall.

**Collision:** The current priority is rapid fundamentals improvement, not long-term capability addition. The defense is real but mistimed.

**Verdict:** REFINE.

Constructive output: revisit `/intuit` after the maintenance ledger can record whether intuition-derived interventions improve outcomes.

### C. External Validation First

**Prosecution:** Validation can reveal failures without converting them into system improvements.

**Defense:** It is essential for escaping self-reference blindness and strengthening scientific credibility.

**Collision:** Both are true. External validation should feed the maintenance loop, not replace it.

**Verdict:** REFINE.

Constructive output: run external validation only with loop-diagnosis and ledger capture attached.

### D. Structural Check First

**Prosecution:** Structural check only detects artifact-shape failures. It will not detect bad framing, weak critique, or shallow innovation.

**Defense:** The missing script is a concrete defect in the current protocol stack and should be fixed.

**Collision:** Defense wins as support work; prosecution wins against making it the biggest focus.

**Verdict:** REFINE.

Constructive output: fix `tools/structural_check.sh` as hygiene inside the broader improvement sprint.

### E. Full Autonomous Self-Maintenance First

**Prosecution:** Too much too soon. The project does not yet have enough evidence, failure taxonomy stability, or evaluation closure to safely automate self-editing.

**Defense:** It is aligned with the long-term ambition of a cognitive operating system.

**Collision:** The ambition is coherent, but current evidence does not justify this implementation leap.

**Verdict:** KILL for the current stage.

Extracted seed: build Level 1 human-guided self-maintenance first, then use its records to design later autonomy levels.

### F. Minimal Correction-Chain Learning Loop

**Prosecution:** If it only diagnoses correction chains and does not store outcomes, it becomes another report generator.

**Defense:** It attacks the right evidence source and can start immediately.

**Collision:** The core survives, but it needs ledger and closure to become fundamentals improvement.

**Verdict:** REFINE into Candidate I.

Constructive output: make correction-chain diagnosis one component of a full maintenance loop.

### G. Maintenance Ledger Only

**Prosecution:** A ledger without diagnosis becomes a manually curated backlog of opinions.

**Defense:** The project does need durable memory for maintenance candidates.

**Collision:** Useful but incomplete. It needs structured evidence generation.

**Verdict:** REFINE into Candidate I.

Constructive output: create the ledger, but populate it through loop diagnosis over real correction chains.

### H. Loop-Diagnose Only

**Prosecution:** Diagnosis without closure creates insight but no retained improvement.

**Defense:** Comparative diagnosis is the strongest immediate way to learn from bad-to-better MVL runs.

**Collision:** Useful but incomplete. It needs ledger entries, patches, and future outcome decisions.

**Verdict:** REFINE into Candidate I.

Constructive output: keep loop-diagnose lightweight and require each useful diagnosis to produce maintenance candidates.

### I. Fundamentals Improvement Sprint

**Prosecution:** The sprint could become bureaucracy if every inquiry needs diagnosis, or could overfit to a few user corrections.

**Defense:** It is small, immediate, evidence-based, and directly aimed at fundamentals. It captures correction work already happening and creates closure.

**Collision:** Defense survives. The prosecution is handled by limiting the first trial to three chains and one or two low-risk patches.

**Verdict:** SURVIVE.

Constructive output: implement as the primary near-term focus, with a strict first-trial scope.

## 4. Assembly Check

The strongest assembly is Candidate I:

```text
self-maintenance ledger
+ lightweight loop-diagnose
+ three correction-chain diagnoses
+ one or two low-risk patches
+ retain/revert/refine evaluation
+ structural check repair as support
```

This assembly survives because each piece covers another piece's weakness:

- loop-diagnose provides evidence;
- ledger provides durable memory;
- patch policy prevents churn;
- evaluation closure prevents unverified self-congratulation;
- structural check provides basic artifact hygiene;
- real correction chains reduce self-reference collapse.

## 5. Coverage Map

| Region | Candidates Covered | Result |
|---|---|---|
| Orchestration-first | A | Boundary; defer as central focus. |
| New capability-first | B | Boundary; strategically important but mistimed. |
| Validation-first | C | Boundary; useful if attached to maintenance capture. |
| Tooling-first | D | Boundary; concrete support work, not central. |
| Autonomy-first | E | Dead for current stage. |
| Evidence-loop components | F, G, H | Useful but incomplete alone. |
| Evidence-loop assembly | I | Viable. |

No large unexplored adjacent region appears more promising than Candidate I for the user's exact question.

## 6. Signal

**TERMINATE with ranked survivor.**

Ranked result:

1. **SURVIVE:** Candidate I, fundamentals improvement sprint.
2. **REFINE into I:** Candidates F, G, H.
3. **SUPPORT I:** Candidate D.
4. **FEED I LATER:** Candidate C.
5. **DEFER UNTIL EVIDENCE LOOP EXISTS:** Candidates A, B.
6. **KILL FOR NOW:** Candidate E.

## 7. Final Critical Judgment

The biggest current focus should be a correction-chain-driven fundamentals improvement loop.

This is not just "make loop-diagnose." It is:

```text
diagnose real correction chains
-> record maintenance candidates
-> patch fundamentals narrowly
-> evaluate later behavior
-> retain/revert/refine
```

The recommendation is strong because it improves the project's weakest shared dependency: its ability to learn from its own failures in a way that changes future governing rules.

## 8. Convergence Telemetry

- Dimension coverage: complete for the current candidates.
- Adversarial strength: STRONG. The leading candidate was challenged for bureaucracy, overfitting, and self-reference risk.
- Landscape stability: STABLE. All major alternatives land in known regions.
- Clean SURVIVE exists: YES, Candidate I.
- Failure modes observed: none. Self-reference collapse was specifically checked and mitigated by requiring real correction chains and later external validation as input.
- Overall: PROCEED.
