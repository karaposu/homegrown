# Innovation: Loop Diagnose — /navigate 4 additive operations error in iteration 1

## User Input

`devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/_branch.md`

Operating on: `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Decomposition produced 4 pieces: P-α (evidence + verdicts); P-β (recommendations); P-γ (deeper pattern flag); P-δ (scaffolding). Innovation generates variations on Candidate A's protocol-level implementation, on Candidate B's framing for the separate-inquiry trigger, on the deeper pattern's provisional name, and on the LOOP_DIAGNOSE finding's overall shape.

---

## Seed

**Seed type:** Question-collision. Iter-1 produced a wrong commitment; the user invoked LOOP_DIAGNOSE; the diagnostic identified root cause + cascade + maintenance candidates. The question: how to land the diagnostic as a complete artifact + commit Candidate A with a specific protocol-level implementation + flag Candidate B/deeper pattern appropriately?

**Seed:** Land Candidate A (protocol-level canonical-spec-loading) with a concrete implementation site, instruction text, and evaluation gate. Flag Candidate B (/explore claim-vs-fact) and the deeper pattern as research-frontier without overcommitting. Set precedent for future LOOP_DIAGNOSE runs.

**Intuition direction:**
- **Context.** Iter-1 + iter-2 archived outputs; user's diagnostic hypotheses; /MVL+ runner protocol; CONCLUDE protocol; /explore + /sense-making + /td-critique specs; LOOP_DIAGNOSE protocol.
- **Valuation.** Honest diagnostic; concrete actionable Candidate A; user-trust preserved (the loop is catching its own failures via this LOOP_DIAGNOSE precedent); protect against over-correction.
- **Motivation.** Make the loop self-correcting at the protocol level so future iterations catch the same class of error earlier.

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### M1 — Lens Shifting (Framer)

**Generic — User-corrected-loop-N-times lens.** The user has corrected the loop 4 times this session (16-59 finding → iter-1 of 19-43 → iter-2 of 19-43 → this LOOP_DIAGNOSE). View the diagnostic under this lens: each correction is data. The pattern of corrections shows the loop systematically over-commits when it lacks canonical anchors.

→ **Output:** "Frame the diagnostic as the 4th user-correction in a sequence; document the pattern across all 4 corrections; the loop has a systematic over-commitment failure mode when canonical anchors are absent. This justifies Candidate A as a protocol-level fix."

**Focused — Loop-self-improvement lens.** View the diagnostic as the loop's first attempt to learn from its own failures by name. The LOOP_DIAGNOSE protocol exists specifically for this; iter-1's failure is the first real test of the protocol.

→ **Output:** "The LOOP_DIAGNOSE protocol itself is being calibrated through this run; document what worked + what didn't in applying LOOP_DIAGNOSE so future diagnostic runs benefit."

**Contrarian — Loop-failure-is-feature lens.** Adversarial: what if iter-1's wrong commitment was VALUABLE because it triggered iter-2 + LOOP_DIAGNOSE? The wrong commitment is data that improves the protocol.

→ **Output:** Partially tested. Iter-1's wrong commitment did trigger valuable correction work. But "failure is feature" only holds if the cost of the wrong commitment is bounded; in this case the user caught it quickly. The general principle (the loop should fail gracefully) is real; the corollary (we should welcome failures) is risky. KILL the contrarian framing.

---

### M2 — Combination (Generator)

**Generic — Combine Candidate A with the user-correction pattern.** Combine the protocol-level canonical-spec-loading step with the observation that the user has corrected 4 times. Implication: Candidate A reduces user-correction burden by catching errors before they reach finding.md.

→ **Output:** "Candidate A's expected benefit is quantifiable: it would have prevented iter-1's specific error. Frame as: 'Candidate A would have caught the 4-operations error before iter-1's exploration cycle 9 elevated annotations to operations.'"

**Focused — Combine Candidate A's implementation with /MVL+'s existing Discipline Workspace Invariant.** /MVL+ already has a Workspace Invariant section that prescribes what each discipline must load. Add to this section: "When the inquiry's `_branch.md` mentions a discipline X (or analyzes X's structure), load `homegrown/X/references/X.md` in full into the working context before any discipline output is produced."

→ **Output:** "Candidate A's implementation site: amend /MVL+'s Discipline Workspace Invariant section. Specific instruction: '6. When the inquiry's _branch.md mentions a discipline X by name or otherwise analyzes X's structure, the canonical spec at homegrown/X/references/X.md MUST be loaded in full into the working context before the first discipline runs. The loaded content must be referenced (by section number or quoted) during any discipline output that makes structural claims about X.' Failure to reference: warn at structural check."

**Contrarian — Combine Candidate A with Candidate B (defense-in-depth).** Adopt both candidates simultaneously.

→ **Output:** Defense-in-depth has value. But B has medium-risk (definitional-consistency challenge); adopting both without first validating A would over-extend. A first; B separately. Keep B as research-frontier. KILL the contrarian.

---

### M3 — Inversion (Framer)

**Generic L1 — "Iter-1's failure was the loop's fault" → invert:** "Iter-1's failure was the user's fault for not loading the canonical." Tested: the user's role is goal-setter, not context-loader. The loop has the context-loading responsibility per the Workspace Invariant. Inversion REJECTED — loop is correctly the responsible party.

**Inversion L2 — System-level.** "The canonical spec was the missing anchor" → invert: "The canonical spec is always implicitly available; the loop just didn't check." Component-level. Invert to system-level: "The canonical spec must be EXPLICITLY in the working context; implicit availability is insufficient." Confirms Candidate A — explicit loading is required.

**Inversion L3 — Architectural.** "Load canonical spec per inquiry" → invert: "Always pre-load all canonical specs at /MVL+ startup; never make it inquiry-specific." Cost: bloats every inquiry's context with unrelated canonicals. KILL — inquiry-specific loading is more efficient.

---

### M4 — Constraint Manipulation (Framer)

**Generic — Add minimum-protocol-edit constraint.** ADD: "Candidate A's implementation must be a single-paragraph addition to an existing protocol section; no new files; no new protocols."

→ **Output:** "Candidate A as a single paragraph added to /MVL+'s existing Discipline Workspace Invariant section. Minimum-change adoption."

**Focused — Add observable-evaluation-gate constraint.** ADD: "Candidate A must have an observable evaluation gate — a runtime-detectable signal of whether the canonical was loaded."

→ **Output:** "Evaluation gate for Candidate A: after one or more inquiries adopting the new protocol step, grep their discipline outputs for canonical-spec content (line ranges from the canonical). Inquiries where the spec is referenced have applied the new step; inquiries where it isn't visible have a process gap. Re-test on a fresh 'analyze /X discipline' inquiry."

**Contrarian — Remove "load canonical" constraint.** REMOVE: what if the fix is something else, like prompting the user to confirm the loaded context before discipline runs?

→ **Output:** A user-prompt fix shifts responsibility from loop to user. The user's role is goal-setting; the loop's role is context-management. Prompting would work but shifts the burden. KILL the contrarian on user-burden grounds.

---

### M5 — Absence Recognition (Generator)

**Generic — Gap inventory.** What's missing if the diagnostic is just root-cause + maintenance-candidate-list?

1. A test of whether iter-1's pipeline COULD have caught the error if the canonical had been loaded (counterfactual analysis).
2. A specific implementation site for Candidate A within /MVL+'s text.
3. Concrete evaluation gates for each maintenance candidate.
4. An explicit acknowledgment that this LOOP_DIAGNOSE itself might have errors (parallel to iter-2's "iteration 2 might also be wrong" acknowledgment).

→ **Output:** "Four content additions: (i) counterfactual analysis showing canonical-loading would have caught iter-1 at stage X; (ii) specific implementation text for Candidate A; (iii) per-candidate evaluation gates; (iv) self-acknowledgment of LOOP_DIAGNOSE's potential errors."

**Focused — Redesign-level absence.** What SHOULD exist if the loop were designed for self-correction from scratch?

→ A "canonical anchor registry" — a project-wide doc listing every discipline + its canonical-spec path. Inquiries reference this registry when analyzing disciplines. Reduces the cognitive burden of knowing which canonicals to load.

→ **Output:** "Add a Research Frontier entry: a project-wide canonical anchor registry. Could be `homegrown/canonical_specs.md` listing each discipline + path. Activated when 3+ LOOP_DIAGNOSE runs reveal that knowing which canonical to load is itself a bottleneck."

**Contrarian — What's already there that we don't need to add?** /MVL+'s Workspace Invariant already says disciplines must load their own spec. The canonical-spec-of-analyzed-discipline is just one more spec to load.

→ **Output:** "Candidate A is a MINOR extension of an existing pattern, not a new pattern. Frame it as 'add canonical-of-analyzed-discipline to the existing per-discipline loading list.' This is the smallest-change framing."

---

### M6 — Domain Transfer (Generator)

**Generic — Test-driven development pattern.** TDD writes tests first; tests guide implementation. Project parallel: write the evaluation gate first; gate guides the maintenance candidate's implementation.

→ **Output:** "For each maintenance candidate, write the evaluation gate FIRST (what observable would confirm the fix). Then design the implementation to make the gate observable. Candidate A's gate: post-adoption inquiries should reference the canonical spec by line range or quoted content."

**Focused — Linter pattern from software engineering.** A linter checks code against rules; failures don't block; they alert. Project parallel: a structural-check step that warns if canonical-spec-content isn't referenced by inquiries analyzing the discipline.

→ **Output:** "Add a structural-check rule (in the tools/structural_check.sh script if revived, or as a manual check): when an inquiry's outputs analyze discipline X, search for references to X's canonical spec. If 0 references, warn 'canonical spec not referenced — possible context-elicitation gap.'"

**Contrarian — Code-generation pattern.** What if the protocol auto-generates the loading instructions from the inquiry's `_branch.md`? Implementation: the protocol parses `_branch.md` for discipline names; auto-loads matching canonicals.

→ **Output:** Code-generation is appealing but overshoots Candidate A's scope. The simpler fix (a Workspace Invariant addition) suffices. Defer to research-frontier. KILL for primary recommendation; flag for future.

---

### M7 — Extrapolation (Generator)

**Generic — Self-correction at scale.** Extrapolate: if the loop applies Candidate A consistently, how often does the context-elicitation failure mode fire? Currently 1 instance (iter-1). After Candidate A: estimate 0 instances per inquiry. Net: one less common failure mode.

→ **Output:** "Candidate A's expected impact: eliminates the context-elicitation-failure-mode class for discipline-analysis inquiries. Future LOOP_DIAGNOSE runs would not need to re-discover this failure mode."

**Focused — Pattern accumulation.** Extrapolate: 3 sibling patterns observed so far (territory-as-operation; annotation-as-operation; prior-finding-authority-as-canonical). If more accumulate, the family ("context-as-absolute category errors") becomes a project-wide named failure-mode catalog entry.

→ **Output:** "Open Questions / Research Frontiers: track when (and if) 2+ more sibling patterns at the same level emerge. Activates the project-wide naming."

**Contrarian — LOOP_DIAGNOSE itself extrapolation.** Extrapolate: if LOOP_DIAGNOSE finds 5+ user-correction patterns, what does this say about the loop overall? Maybe the loop's structural commitments need broader review.

→ **Output:** Speculative; defer to research-frontier. The 4 corrections in this session might be the inquiry-thread's specific dynamic, not a project-wide pattern. KILL as immediate action; flag for monitoring.

---

## Mechanism coverage telemetry

- Generators: 4/4 (Combination M2; Absence Recognition M5; Domain Transfer M6; Extrapolation M7).
- Framers: 3/3 (Lens Shifting M1; Inversion M3; Constraint Manipulation M4).
- Total: 7/7 FULL COVERAGE.

**Convergence signal:** YES. Multiple mechanisms converge:
- M1g + M7g: pattern of 4 corrections + self-correction-at-scale → Candidate A reduces user-correction burden.
- M2f + M4g: implementation site = single-paragraph addition to /MVL+'s existing Workspace Invariant section.
- M4f + M6f + M7g: evaluation gate is grep-detectable canonical-spec-reference; can be a structural-check rule.
- M5g + M2g: counterfactual analysis (canonical-loading would have caught iter-1 at stages 4+).
- M5f + M7f + M6contra: future-research-frontier items (canonical registry; deeper-pattern naming; auto-generation).

7 mechanisms converge on: **Candidate A as a single-paragraph Workspace Invariant addition with a grep-detectable evaluation gate; defense against 4-correction sequence pattern; flag research-frontier items for canonical registry + deeper-pattern naming + LOOP_DIAGNOSE itself.**

---

## Phase 3 — Test (5-test cycle)

### Test set (convergent outputs)

| # | Output | Novel? | Survives scrutiny? | Fertile? | Actionable? | Mech-independent? |
|---|---|---|---|---|---|---|
| M1g | Pattern of 4 user-corrections | Yes (the explicit pattern naming) | Yes (4 corrections are factual) | Yes (precedent for tracking) | Yes (Reasoning section) | Yes (M7g converges) |
| M1f | LOOP_DIAGNOSE self-calibration | Yes (the protocol is being calibrated) | Yes (LOOP_DIAGNOSE protocol notes this) | Yes (informs future runs) | Yes (Open Questions) | Yes (M5g converges) |
| M2g | "Would have caught iter-1's error" counterfactual | Yes (the specific counterfactual) | Yes (structurally verifiable) | Yes (justifies adoption) | Yes (Reasoning section) | Yes (M5g converges) |
| M2f | Workspace Invariant single-paragraph addition | Yes (specific implementation site + text) | Yes (matches existing pattern) | Yes (concrete) | Yes (Candidate A's What) | Yes (M4g converges) |
| M3 (all) | Inversions confirm Candidate A | Yes (defensive validation) | Yes | Yes | N/A | Yes (multiple framings) |
| M4g | Minimum-protocol-edit constraint | Yes (the constraint articulated) | Yes (matches operation-parsimony) | Yes (clean precedent) | Yes (constrains drafting) | Yes (M2f converges) |
| M4f | Observable evaluation gate (grep canonical references) | Yes (the specific gate) | Yes (grep is operational) | Yes (testable) | Yes (Candidate A's gate) | Yes (M6f converges) |
| M5g | 4 content additions | Yes (the specific four) | Yes (each grounded) | Yes (clean structure) | Yes (specific sub-sections) | Yes (M2g + M2f converge) |
| M5f | Canonical anchor registry (research-frontier) | Yes (the registry idea) | Yes (structurally sound) | Yes (future inquiry) | Yes (Research Frontier entry) | Yes (M6contra related) |
| M5contra | Candidate A as minor existing-pattern extension | Yes (the framing) | Yes (matches Workspace Invariant) | Yes (low-risk adoption) | Yes (constrains drafting) | Yes (M2f converges) |
| M6g | TDD pattern: gate-first design | Yes (the pattern) | Yes (TDD is well-established) | Yes (precedent) | Yes (each candidate gets a gate) | Yes (M4f converges) |
| M6f | Linter pattern: grep-detectable canonical references | Yes (the linter analogy) | Yes (matches existing structural_check.sh idea) | Yes (precedent) | Yes (operational rule) | Yes (M4f converges) |
| M7g | Self-correction at scale | Yes (the extrapolation) | Yes (1→0 failure-mode-instances) | Yes (autonomy path) | Yes (expected impact) | Yes (M1g converges) |
| M7f | Pattern accumulation Refinement Trigger | Yes (the threshold) | Yes (3 patterns observed; trigger at 2+ more) | Yes (research-frontier path) | Yes (Refinement Trigger entry) | Yes (M5f converges) |

**Test summary:** 14 outputs tested; 14 PASS as ACTIONABLE.

**Contrarian KILLED outputs:**
- M1contra (failure-is-feature framing) — risky.
- M2contra (adopt A+B together) — over-extends; B has higher risk.
- M3-L1 (user's fault) — wrong attribution.
- M3-L3 (pre-load all canonicals) — bloats context.
- M4contra (user-prompt fix) — shifts burden.
- M6contra (auto-generation from _branch.md) — overshoots scope.
- M7contra (LOOP_DIAGNOSE-itself extrapolation) — speculative.

---

## Per-piece variations (axis-coverage check)

### P-α (evidence + verdicts core): completeness

- **α-MIN:** Chain summary + 6 hypothesis verdicts as 1-paragraph each + Attribution table. ~50 lines.
- **α-STD (DEFAULT):** Chain summary + 6 structured hypothesis entries per LOOP_DIAGNOSE Step 4 template + 8-stage cascade documentation with artifact citations + Attribution table + H1-vs-H2 false-binary clarification. ~120 lines.
- **α-RICH:** α-STD + per-cascade-stage counterfactual analysis ("if canonical had been loaded, this stage would have caught/not-caught"). ~180 lines.

### P-β (recommendations core): depth

- **β-MIN:** 5 maintenance candidates as bullets + verdict as 1 paragraph. ~30 lines.
- **β-STD (DEFAULT):** 5 maintenance candidates per LOOP_DIAGNOSE template (what / file / risk / benefit / gate / branch-experiment-or-not) + 3-validity distinction + Diagnostic Verdict per LOOP_DIAGNOSE Step 4. ~80 lines.
- **β-RICH:** β-STD + per-candidate detailed implementation sketch + per-candidate failure-mode analysis. ~140 lines.

### P-γ (deeper pattern flag): explicitness

- **γ-MIN:** one-paragraph note. ~5 lines.
- **γ-STD (DEFAULT):** named pattern + 3 sibling instances + research-frontier reasoning + revival trigger. ~15 lines.
- **γ-RICH:** γ-STD + speculation on a 4th potential sibling + cross-reference to where each sibling instance was named. ~25 lines.

### P-δ (scaffolding): completeness

- **δ-MIN:** minimum LOOP_DIAGNOSE template.
- **δ-STD (DEFAULT):** full LOOP_DIAGNOSE template + CONCLUDE template integration.
- **δ-RICH:** full template + extended Reasoning + extended Open Questions.

---

## Assembly check

Combining survivors: ACTIONABLE assembly = **α-STD + β-STD + γ-STD + δ-STD + M1g/M2g/M5g/M5f/M7f content additions + M2f/M4f/M5contra Candidate-A specifics + M6f linter framing**.

Content commitments:

1. Counterfactual analysis showing canonical-loading would have caught iter-1 at multiple cascade stages (M2g + M5g).
2. Candidate A's specific implementation: single-paragraph addition to /MVL+'s Discipline Workspace Invariant section (M2f + M4g + M5contra).
3. Candidate A's evaluation gate: grep-detectable canonical-spec references in discipline outputs analyzing the discipline (M4f + M6f).
4. Pattern-of-4-corrections observation in Reasoning (M1g).
5. LOOP_DIAGNOSE self-calibration note in Open Questions (M1f).
6. Canonical anchor registry as Research Frontier (M5f).
7. Pattern-accumulation Refinement Trigger (M7f).
8. Self-acknowledgment that the diagnostic might also have errors (M5g).
9. Expected impact: eliminates context-elicitation-failure class (M7g).

**Emergent property of the assembly:** the LOOP_DIAGNOSE finding establishes a **diagnostic precedent**: a clear template for correction-chain diagnosis showing how to identify root cause, document cascade, prioritize candidates, set evaluation gates, and acknowledge own-fallibility. Future LOOP_DIAGNOSE runs can use this template.

### Axis coverage check

| Axis | Variations produced |
|---|---|
| P-α completeness | α-MIN / α-STD / α-RICH ✓ |
| P-β depth | β-MIN / β-STD / β-RICH ✓ |
| P-γ explicitness | γ-MIN / γ-STD / γ-RICH ✓ |
| P-δ completeness | δ-MIN / δ-STD / δ-RICH ✓ |

4 axes × 3 variations = 12 variant slots filled.

---

## Disposition

### ACTIONABLE

- **α-STD + M2g (counterfactual) + M5g (4 content additions)** — evidence + verdicts core.
- **β-STD + M2f (Candidate A implementation) + M4f (evaluation gate) + M6f (linter framing) + M5contra (minor existing-pattern extension)** — recommendations core.
- **γ-STD** — deeper pattern flag.
- **δ-STD** — scaffolding.

### DEFERRED with revival trigger

- MIN/RICH variants of pieces — user-preference fallback/extension.

### RESEARCH FRONTIER

- M5f canonical anchor registry — activate at 3+ LOOP_DIAGNOSE runs.
- M7f pattern accumulation - activate at 2+ more sibling-pattern instances.
- M6contra auto-generation from _branch.md - if Candidate A's manual loading becomes a friction.
- M7contra LOOP_DIAGNOSE extrapolation - monitor.

### KILLED

- M1contra (failure-is-feature framing).
- M2contra (adopt A+B together).
- M3-L1 + M3-L3 inversions.
- M4contra (user-prompt fix).
- M6contra (auto-generation primary).

---

## Telemetry

- Generators: 4/4; Framers: 3/3; coverage FULL.
- Convergence: YES — 7 mechanisms converge on Candidate A as Workspace Invariant addition + grep evaluation gate.
- Survivors tested: 14/14 ACTIONABLE.
- KILLED: 7 contrarian/inversion-level on structural grounds.
- Per-piece axis coverage: 4 axes × 3 variations.
- Assembly check: emergent property — diagnostic precedent for LOOP_DIAGNOSE.
- Failure modes observed: NONE.

**Overall: PROCEED to Critique.**
