# Exploration — Discipline-corpus tidying application

## User Input

```
For each of the 5 MVL+ disciplines: audit Step Refinement candidates (catalogued +
missed + borderline); audit Discipline Output Contract compliance; flag where the
prior inquiry's audit was incomplete; surface whether "descriptive only; align when
touched" reading was too conservative.
```

## Mode and Entry

- **Mode:** hybrid (artifact — concrete spec files; possibility — what tidying could mean for each scattered instance is conceptual).
- **Entry point:** signal-first. Two prior-named patterns; 5 disciplines to audit; explicit hunt for missed scatter.

---

## 1. Territory Overview

The territory is the 5 MVL+ pipeline discipline specs (`homegrown/<discipline>/references/X.md` for explore, sense-making, decompose, innovate, td-critique), their failure-mode catalogs, their cross-reference symmetry with bolted-on rules, and their output-format compliance with the proposed Discipline Output Contract.

**Two structural observations up front:**

1. **The prior inquiry's audit caught ~62% of the actual scatter.** Prior counted 10 bolted-on rules. This audit finds **10 catalogued + 6 clearly-missed + 7 borderline = 23 candidates**. The miss rate is high enough that the prior inquiry's "align organically when next touched" reading would leave most of the scatter untidy indefinitely — the user's pushback was correct.

2. **Refinement content takes three forms in the corpus, not one.** This audit reveals: (a) **standalone bolted-on subsections** with bold prefixes (the prior inquiry's primary pattern), (b) **scattered/orphaned rules** that have the shape but are positioned ambiguously (inline bullets; process-model-level rather than phase-level; embedded in failure-mode corrective sentences), (c) **absorbed refinements** that have been integrated into a spine template (the structured ambiguity entry template in sense-making is the clearest example). The first two should be tidied to a uniform form; the third is a legitimate alternative that should be acknowledged in the Step Refinement spec.

---

## 2. Per-Discipline Audit

### 2.1 `explore` (`homegrown/explore/references/explore.md`)

**Catalogued bolted-on rules (prior inquiry):**

| Rule | Where | Form | Anchor-link |
|---|---|---|---|
| Type-Aware Probing | Probe component | Standalone bold | Surface-Only Scanning (FM #2) — failure-anchored |
| Coarse Scan in Layered Territories | Resolution Progression | Standalone bold | Premature Depth (FM #1) — failure-anchored |

**Missed candidates (this audit):**

| Candidate | Where | Form status | Anchor-link |
|---|---|---|---|
| **Jump scan** | Currently inside False Confidence's "How to prevent" sentence + briefly mentioned in "Execute the Exploration Process" Step 3 | Has shape (name "jump scan", trigger "before declaring convergence", action "scan in different direction", anchor to False Confidence FM #3) but **lives inside a failure-mode corrective sentence** rather than as a standalone refinement at the relevant Process step | False Confidence (FM #3) — failure-anchored |
| **Completeness before novelty** (in Possibility mode) | Completeness Bias's "How to prevent" sentence | Has shape ("In possibility mode, explicitly scan for: (a) the obvious standard approach, (b) what most practitioners would do, (c) what exists in adjacent domains. THEN scan for novel and creative possibilities.") but **lives inside a failure-mode corrective** rather than at the Scan component | Completeness Bias in Possibility Mode (FM #6) — failure-anchored |

**Borderlines:**

| Candidate | Reason borderline |
|---|---|
| Per-cycle coverage minimum ("each cycle must advance the frontier or increase confidence in at least one region; a cycle producing no new info is a signal to change resolution") | Has trigger + action but no name; embedded in Coverage Strategy section as part of spine-guidance |
| Resolution Management zoom-in/zoom-out rules | Component-internal logic, not failure-anchored; probably part of spine |

**Failure-mode cross-reference symmetry:**
- ✓ Premature Depth has cross-reference to Coarse Scan in Layered Territories
- ✓ Surface-Only Scanning has cross-reference to Type-Aware Probing
- ✗ False Confidence's "jump scan" rule is buried in the corrective; would need a new Process-step anchor + symmetric cross-reference if lifted
- ✗ Completeness Bias's "completeness before novelty" rule is buried in the corrective; same structural issue

**Pattern B status:** **NO verdict line.** Closest analog: Convergence Criteria (3 conditions, qualitative). Coverage Strategy section ends with "Stop scanning when... / Stop probing when... / Stop exploring when..." — these are termination guidance, not a verdict line. Closest structured form is the "Final Deliverable — The Structural Map" section with 6 numbered output sections, but no PROCEED/FLAG/RE-RUN line.

**Tally for explore:** 2 catalogued + 2 clearly missed + 2 borderline = 6 candidates total. Prior caught 33%.

---

### 2.2 `sense-making` (`homegrown/sense-making/references/sensemaking.md`)

**Catalogued bolted-on rules (prior inquiry):**

| Rule | Where | Form | Anchor-link |
|---|---|---|---|
| Phase / Calibration-State perspective | Phase 2 Perspective Checking | **Inline bullet inside the perspective list** — scattered form | Perspective Blindness (FM #4) — failure-anchored |
| Load-bearing concept test | Phase 3 Ambiguity Collapse | Standalone bold | Premature Stabilization (FM #2) — failure-anchored |
| Specific-vs-pattern recognition cue | Phase 3 Ambiguity Collapse | Standalone bold | Premature Stabilization (FM #2) — failure-anchored |

**Missed candidates (this audit):**

| Candidate | Where | Form status | Anchor-link |
|---|---|---|---|
| **Accommodation trigger** | Process Model section, **between the phase list and Saturation Indicators** — orphaned at process-model level rather than phase-anchored | Has name + trigger ("when new perspectives keep producing destabilizing anchors") + action ("drop back to Phase 2 and re-extract anchors using the destabilizing perspectives as primary sources") + **implicit anchor-link** (no named failure mode cited; closest match would be a structural-modeling failure that doesn't currently exist in the catalog by name) | implicit-needs-naming |

**Borderlines:**

| Candidate | Reason borderline |
|---|---|
| **Structured ambiguity entry template** (Phase 3 Execute section: Counter-interpretation + Why-fails-on-structural-grounds + Confidence + Resolution + What-now-fixed/not-allowed/depends/changed) | Has all the shape characteristics of a refinement (specifically targets Clean Resolution Trap FM #5) BUT is presented as the canonical template for ambiguity collapse rather than as a refinement — this is the **absorbed-into-spine** form. Either (a) acknowledge it as an absorbed refinement (legitimate alternative form per the new Step Refinement spec); or (b) lift it to a refinement (would require restructuring Phase 3). Recommend acknowledging absorption. |

**Failure-mode cross-reference symmetry:**
- ✓ Premature Stabilization has cross-reference to Load-bearing concept test
- ✓ Perspective Blindness has cross-reference to Phase / Calibration-State
- ✗ **Specific-vs-pattern recognition cue** has NO backward cross-reference from Premature Stabilization (the cross-reference points only to Load-bearing concept test, ignoring the second sister rule at the same step)
- ✗ If Accommodation trigger is lifted with a new failure-mode link (perhaps a new "Model Misfit" failure mode or anchored to existing Anchor Dominance), a symmetric cross-reference would need to be added

**Pattern B status:** **NO verdict line.** Closest analog: Saturation Indicators (4 qualitative indicators, explicitly "not gates"). Sense-making is the canonical example of qualitative-self-assessment that the hedging-allowed format was designed for — the pilot rationale from the prior inquiry stands.

**Tally for sense-making:** 3 catalogued + 1 clearly missed + 1 borderline = 5 candidates total. Prior caught 60%. (Prior caught the perspective-list scatter as one instance but didn't catch Accommodation trigger.)

---

### 2.3 `decompose` (`homegrown/decompose/references/decompose.md`)

**Catalogued bolted-on rules (prior inquiry):**

| Rule | Where | Form | Anchor-link |
|---|---|---|---|
| Determination-mechanism piece check | Step 7 Self-Evaluate | Standalone bold | Missing Pieces (FM #4) — failure-anchored |

**Missed candidates (this audit):**

| Candidate | Where | Form status | Anchor-link |
|---|---|---|---|
| **Assumptions-not-data interface check** ("Hidden coupling hides in assumptions, not in data") | Currently inside Hidden Coupling's "How to prevent" sentence — buried in the failure-mode corrective | Has shape (trigger "during Step 5 interface mapping", action "ask not just 'what data flows?' but 'what assumptions does each piece make about what the other provides?'", anchor to Hidden Coupling FM #3) but **lives inside the failure-mode corrective** rather than at Step 5 | Hidden Coupling (FM #3) — failure-anchored |

**Borderlines:**

| Candidate | Reason borderline |
|---|---|
| Confidence scoring at Step 3 ("Boundaries where top-down and bottom-up agree = high confidence (proceed). Boundaries where they disagree = low confidence (investigate further before committing)") | Has structure (trigger + action) but no name and no failure-mode anchor; could be coverage-anchored. Borderline whether it's a Step Refinement or part of Step 3's spine. |

**Failure-mode cross-reference symmetry:**
- ✓ Missing Pieces has cross-reference to Determination-mechanism piece check
- ✗ Hidden Coupling's "assumptions-not-data" rule is buried in the corrective; would need lifting + symmetric cross-reference

**Pattern B status:** **NO verdict line.** Closest analog: Self-Evaluation with PASS/FAIL per dimension (3 minimum or 7 full dimensions) — structured but no overall PROCEED/FLAG/RE-RUN. Could be lifted to: "Self-Evaluation Verdict: PROCEED if all 3 minimum dimensions PASS; FLAG if any dimension marginal; RE-RUN if any minimum dimension FAILS."

**Tally for decompose:** 1 catalogued + 1 clearly missed + 1 borderline = 3 candidates total. Prior caught 33%.

---

### 2.4 `innovate` (`homegrown/innovate/references/innovate.md`)

**Catalogued bolted-on rules (prior inquiry):**

| Rule | Where | Form | Anchor-link |
|---|---|---|---|
| Output disposition categories | Phase 3 Test | Standalone bold | (no explicit FM link) — coverage-anchored |
| Axis coverage check | Phase 3 Test | Standalone bold | (no explicit FM link) — coverage-anchored |

**Missed candidates (this audit):**

| Candidate | Where | Form status | Anchor-link |
|---|---|---|---|
| **Inversion depth check** ("After each inversion, ask 'Can I invert AGAIN?'... Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT") | Inside the Inversion mechanism's description (one of the 7 mechanisms) — embedded in mechanism spec | Has bold name + trigger + action + implicit anchor (preventing shallow component-level inversions) but **lives inside the Inversion mechanism subsection** rather than as a standalone refinement at the Apply-mechanisms step | implicit-needs-naming (closest existing FM is Survival Bias, but the link isn't currently explicit) |

**Borderlines:**

| Candidate | Reason borderline |
|---|---|
| Mechanism Exhaustion's structured 3-step recovery ("Before declaring exhaustion: (a) try combining mechanisms, (b) try chaining mechanisms, (c) reconsider whether the seed itself needs reformulating") | Has structure but lives inside the failure-mode corrective; could be lifted to a refinement at the post-Phase-3 check. Borderline. |

**Failure-mode cross-reference symmetry:** N/A within catalogued (the catalogued rules are coverage-anchored without FM links). 0 within-catalogued asymmetries; new asymmetries would emerge if missed candidates are lifted with FM links.

**Pattern B status:** **YES verdict line** ("Mechanism Coverage Telemetry" section ends with `**Overall: PROCEED** (sufficient coverage + convergence + tested survivors) / **FLAG** (coverage gaps or untested survivors) / **RE-RUN** (minimum coverage not met or failure mode detected)"). Already mostly compliant. Minor rollout note: prefix is `**Overall:**` not `**Verdict:**` — backward-compat handled per prior inquiry's contract spec.

**Tally for innovate:** 2 catalogued + 1 clearly missed + 1 borderline = 4 candidates total. Prior caught 50%.

---

### 2.5 `td-critique` (`homegrown/td-critique/references/td-critique.md`)

**Catalogued bolted-on rules (prior inquiry):**

| Rule | Where | Form | Anchor-link |
|---|---|---|---|
| Project-specific risk dimension check | Phase 0 Dimension Construction | Standalone bold | Dimension Blindness (FM #4) — failure-anchored |
| Multi-axis prosecution depth check | Phase 2 Adversarial Evaluation | Standalone bold | Rubber-Stamping (FM #2) — failure-anchored |

**Missed candidates (this audit):**

| Candidate | Where | Form status | Anchor-link |
|---|---|---|---|
| **Constructive requirement** ("Every KILL and REFINE verdict must include constructive output. A KILL must extract a seed... A REFINE must specify what needs to change and in what direction") | Phase 3 Verdict + Constructive Output — has bold prefix `**Constructive requirement:**` but is presented as a requirement embedded in the Phase description, not as a standalone refinement section | Has all 4 elements with trigger ("every KILL or REFINE verdict") + action (must include constructive output) + anchor to a coverage concern (incomplete-verdict-output) | coverage-anchored |

**Borderlines:**

| Candidate | Reason borderline |
|---|---|
| Burden-of-proof shift by stake level ("Low stakes... innocent until proven guilty... High stakes... guilty until proven innocent") | Two parallel rules with triggers (stake level) and actions (default-pass vs. default-block); part of the Adversarial Structure section. Could be lifted to a refinement at Phase 2 prosecution. Borderline. |
| Severity-weighted KILL gate (from Nitpicking corrective: "A candidate should only be KILLed if prosecution wins on a *critical-weight* dimension, not just any dimension") | Buried in failure-mode corrective; has shape; could be lifted to Phase 3 verdict step. Borderline. |

**Failure-mode cross-reference symmetry:**
- ✓ Dimension Blindness has cross-reference to Project-specific risk dimension check
- ✓ Rubber-Stamping has cross-reference to Multi-axis prosecution depth check
- ✗ If "Constructive requirement" is recognized as a Step Refinement, no FM cross-reference exists yet (it's coverage-anchored)
- ✗ Nitpicking's "severity-weighted KILL gate" rule is buried; would need cross-reference if lifted

**Pattern B status:** **YES verdict line** ("Convergence Telemetry" section ends with `**Overall: PROCEED** (sufficient coverage + convergence + tested survivors)`). Same as innovate — mostly compliant; backward-compat with `**Overall:**` prefix.

**Tally for td-critique:** 2 catalogued + 1 clearly missed + 2 borderline = 5 candidates total. Prior caught 40%.

---

## 3. Cross-Discipline Tally

| Discipline | Catalogued | Clearly Missed | Borderline | Total | Prior Caught |
|---|---|---|---|---|---|
| explore | 2 | 2 | 2 | 6 | 33% |
| sense-making | 3 | 1 | 1 | 5 | 60% |
| decompose | 1 | 1 | 1 | 3 | 33% |
| innovate | 2 | 1 | 1 | 4 | 50% |
| td-critique | 2 | 1 | 2 | 5 | 40% |
| **Total** | **10** | **6** | **7** | **23** | **~43% (clear-only basis)** |

The prior inquiry's audit was substantially incomplete. **6 missed candidates** are clear lifts (have all 4 elements; just live in the wrong place — usually buried in failure-mode correctives). **7 borderlines** need per-case judgment. **The "align when next touched" reading would leave at least 6 clear lifts untidy indefinitely** unless someone touches each discipline for an unrelated reason.

### Pattern B (Discipline Output Contract) state

| Discipline | Verdict line? | Closest analog |
|---|---|---|
| explore | NO | Convergence Criteria (3 qualitative conditions) |
| sense-making | NO | Saturation Indicators (4 qualitative indicators, "not gates") |
| decompose | NO | Self-Evaluation (per-dimension PASS/FAIL, no overall verdict) |
| innovate | YES (but `**Overall:**` not `**Verdict:**`) | Mechanism Coverage Telemetry |
| td-critique | YES (but `**Overall:**` not `**Verdict:**`) | Convergence Telemetry |

3 of 5 disciplines lack verdict lines entirely; 2 have them in a non-canonical prefix form. The verdict-line gap is corpus-wide.

### Failure-mode cross-reference asymmetries (within catalogued + obvious-from-missed)

- sense-making: Specific-vs-pattern recognition cue lacks back-reference from Premature Stabilization (1 asymmetry within catalogued)
- explore: 2 new asymmetries if jump scan + completeness-before-novelty are lifted
- decompose: 1 new asymmetry if assumptions-not-data is lifted
- td-critique: 1 new asymmetry if severity-weighted KILL gate is lifted

---

## 4. Three Forms of Refinement Content (new observation)

This audit reveals refinement content takes three forms in the corpus:

### Form 1 — Standalone bolted-on subsection

The prior inquiry's primary pattern. Bold-prefix name + trigger + action + anchor-link, in its own subsection at the canonical step. **8 of 10 catalogued instances are this form.** The Step Refinement spec at `enes/step_refinement.md` describes this form.

### Form 2 — Scattered/orphaned

Has all 4 elements but is positioned ambiguously:
- **Inline bullet** inside a list (sense-making's Phase / Calibration-State perspective)
- **Process-model-level orphan** rather than phase-anchored (sense-making's Accommodation trigger)
- **Embedded in a failure-mode corrective sentence** rather than at the Process step (explore's jump scan; explore's completeness-before-novelty; decompose's assumptions-not-data; td-critique's severity-weighted KILL gate)
- **Embedded inside a mechanism subsection** rather than at the post-mechanism check (innovate's Inversion depth check)

This form is the bulk of the missed scatter (6 clear missed candidates fall into this form).

### Form 3 — Absorbed into spine template

Refinement content that has been integrated into a canonical procedure template. The clearest example: sense-making's structured ambiguity entry template in Phase 3 Execute (Counter-interpretation + Why-fails-on-structural-grounds + Confidence + Resolution + ...). The template's individual fields are clearly anchored to Clean Resolution Trap (FM #5) — they ARE the prevention rules — but they have been integrated as the spine of how Ambiguity Collapse is performed, not left as a separate refinement.

**This is a legitimate alternative form.** It has trade-offs: the absorbed form is execution-hugging (refinement runs as part of the mandatory procedure) but loses the explicit "this is a refinement against [failure mode]" cross-reference. The Step Refinement spec at `enes/step_refinement.md` does not currently acknowledge this form; that's a gap.

### What the three forms imply for tidying

- Form 1 instances: just need visual marker (italic prefix). Surgical.
- Form 2 instances: need lifting — extract from current location (failure-mode corrective; inline bullet; mechanism subsection; orphan position); reformat as standalone bolted-on subsection at canonical step; add visual marker; ensure FM cross-reference symmetry.
- Form 3 instances: leave alone (absorbed forms are valid); document the absorbed-form pattern in the Step Refinement spec.

---

## 5. Signal Log

| Signal | Region | Probed? | Strength |
|---|---|---|---|
| Prior audit caught ~43% of clear refinements | Cross-discipline | YES | STRONG — direct count |
| Missed instances are usually Form 2 (buried in failure-mode correctives) | Cross-discipline | YES | STRONG — pattern observed across 4 of 5 disciplines |
| Three forms of refinement content (standalone/scattered/absorbed) | Cross-discipline | YES | STRONG — observable structure; novel framing |
| Form 3 (absorbed) requires acknowledgment in Step Refinement spec | sense-making (clearest) | YES | STRONG — concrete instance forces the recognition |
| 3/5 disciplines lack verdict line; 2/5 use non-canonical `**Overall:**` prefix | Cross-discipline | YES | STRONG — direct count |
| 1 within-catalogued FM cross-reference asymmetry (sense-making) | sense-making | YES | NOTED |
| Multiple new asymmetries would emerge from lifting missed candidates | Cross-discipline | YES | NOTED |
| The borderlines need per-case judgment, not pattern-level rules | Cross-discipline | PARTIAL | MEDIUM — not all borderlines mapped to clear criteria |

---

## 6. Confidence Map

| Region | What's known | Confidence |
|---|---|---|
| 6 clear missed Step Refinements | Catalogued in §2 with locations | HIGH |
| 7 borderlines | Catalogued with reason for borderline-status | HIGH (that they're borderline; MEDIUM on resolution) |
| Form 2 (scattered) is the dominant missed form | 6 of 6 missed are Form 2 instances | HIGH |
| Form 3 (absorbed) is real and warrants spec acknowledgment | sense-making's structured template | HIGH |
| The "align when touched" reading is too conservative for current state | 6 clear lifts wouldn't get touched soon under that reading | HIGH |
| Per-discipline tidy plans need per-discipline scope | Per-discipline counts vary 3–6; per-discipline FM asymmetries vary | HIGH |
| Borderline judgments will require human input | Not pattern-level resolvable | HIGH (the uncertainty itself is HIGH-confidence) |
| Pattern reframing: descriptive-only with active-tidy is the right reading | Confirmed by user pushback + audit findings | HIGH |

**Confirmed absences (jump-scan):**

- I performed a jump scan on the boundary disciplines (reflect, navigation) to check whether the Form-2 scatter pattern extends there. **Reflect:** no bolted-on rules with the 4-element shape; the discipline is structured around 5 examination dimensions and 4 failure modes with simpler corrective sentences. **Navigation:** has rich procedural structure but its bolted-on additions (auto-derivable vs human-judgment types; freshness preflight) are integrated into the spine rather than scattered. Boundary disciplines have less scatter; the MVL+ disciplines are the high-density region. The jump scan corroborates that focusing on the 5 MVL+ disciplines is the right scope.

- I performed a jump scan on `homegrown/comprehend/references/comprehend.md` (situational discipline). It has 8 failure modes and the catalogued rules from the prior inquiry's exploration noted "Paradigm Projection (FM #8) was accreted later" — a failure-mode-level accretion rather than a Step Refinement accretion. No new clear scattered candidates beyond what was already noted. Comprehend may need its own audit eventually but is out of scope for this MVL+-relevant inquiry.

---

## 7. Frontier State

**Stable.** Each of the 5 MVL+ disciplines is mapped at sufficient resolution for sense-making to converge on:
- Per-discipline scope of tidying work
- Whether each missed candidate is lift-now / lift-later / leave-as-spine
- Borderline judgment criteria
- Pattern-level reframings (the three forms; the descriptive-only correction)

**Discovery rate:** declining. Late cycles (re-reading the failure-modes sections of all 5 specs) confirmed the Form-2 pattern (rules buried in correctives) as the dominant missed form. No new structural surprises in the last cycle.

**Bounded gaps:** remaining uncertainty is about *judgment calls* (which borderlines to lift; which absorbed-form pattern to acknowledge how) — that's sense-making + innovation's job. The factual map is complete.

---

## 8. Gaps and Recommendations

### Five primary handoff seeds for sense-making

1. **The prior inquiry's audit was ~43% complete** (10 caught vs. 16 clear instances). Sense-making should test whether the prior inquiry's "descriptive only; align organically when next touched" reading was correct. The user's pushback + this audit's miss rate strongly suggest it was too conservative.

2. **Form 2 (scattered/orphaned) is the dominant missed form.** 6 of 6 missed candidates are Form 2. Sense-making should anchor the "what does tidying mean" question around lifting Form-2 instances to Form 1.

3. **Form 3 (absorbed into spine) is a real legitimate alternative.** Sense-making and innovation should propose acknowledging Form 3 in the Step Refinement spec at `enes/step_refinement.md` so future contributors know it's a valid form.

4. **Per-discipline scope varies meaningfully.** explore needs the most lifting (4 work items: 2 lifts + 2 visual markers + symmetry); td-critique needs least (3-ish). Decomposition should produce per-discipline pieces, not a uniform pass.

5. **The user's "brushing teeth" framing applies to active tidying, not passive descriptive-only.** Sense-making should reframe phase-fit conservatism as: "no mechanical enforcement at the corpus-machinery level; active tidying at the per-discipline maintenance level."

### Frontier observations (out of primary scope)

- **The structured ambiguity entry template in sense-making is a Form 3 example worth promoting to a corpus-pattern.** Could the corpus deliberately move SOME refinements toward Form 3 (absorbed) where appropriate? Currently the corpus moved organically; an explicit choice would be a frontier inquiry.
- **The boundary disciplines (reflect, navigation) and situational discipline (comprehend) likely have their own scatter at lower density.** Out of MVL+ scope but worth tracking.
- **The verdict-line backward-compat with `**Overall:**` prefix** (already used by innovate and td-critique) needs to be specified in `homegrown/contracts/discipline_output.md` (the prior inquiry's deferred Pattern B artifact) as the migration approach.

### Honest limits

- This audit is corpus-internal: every claim about "missed" rests on the spec corpus's own framing. If the corpus changes underneath, the audit drifts.
- The 6 clear missed candidates are clearly missed by my judgment; a different reader might split or merge differently. Sense-making should test the most controversial calls.
- The borderlines (7) are genuinely uncertain; sense-making's job includes resolving the ones that matter for the per-discipline tidy plans.

---

## Final Note

The exploration's most important findings:

1. **The prior inquiry's audit was substantially incomplete** (~43% coverage). The user's pushback was correct: there's much more scatter than was catalogued.
2. **Form 2 (scattered/orphaned) is the dominant missed form** — usually rules buried in failure-mode correctives. Lifting these is the bulk of the tidying work.
3. **Form 3 (absorbed into spine) is a legitimate third form** that the Step Refinement spec doesn't currently acknowledge. The spec needs an addendum.
4. **The phase-fit reading from the prior inquiry was too conservative.** "Descriptive only" applies to corpus-machinery (no linters); "active tidying" applies to per-discipline maintenance (the user's brushing-teeth framing).
5. **Per-discipline tidy scopes differ meaningfully.** Decomposition should partition per-discipline; innovation should generate per-discipline plans; critique should evaluate per-discipline.

Sense-making should converge on these five framings + per-discipline scope; decomposition partitions into 5 per-discipline pieces (plus possibly 1 cross-cutting piece for the spec-level reframing); innovation generates per-discipline tidy plans; critique evaluates.
