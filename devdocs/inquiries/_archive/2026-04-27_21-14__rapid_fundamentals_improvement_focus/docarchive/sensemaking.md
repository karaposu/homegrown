# Sensemaking: Rapid Fundamentals Improvement Focus

## User Input

`devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/_branch.md`

## SV1 - Baseline Understanding

Initial answer: the biggest current focus should be learning from real MVL/MVL+ failures and corrections, because that is the fastest way to improve the core discipline and protocol fundamentals.

This competes with other plausible priorities: build the meta-loop, build `/intuit`, run external validation, implement structural checks, or consolidate backlog. The sensemaking task is to decide which one is the true bottleneck for **rapid fundamentals improvement**.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- The user asks for rapid improvement of fundamentals, not the long-term autonomy critical path.
- Homegrown fundamentals are the discipline specs, loop runners, protocols, finding template, Navigation, Reflection, and maintenance rules.
- Recent architecture has moved fast: Navigation placement, meta-loop concept, `meta-loop/SKILL.md`, timestamped folders, installer updates.
- There is no visible self-maintenance ledger yet.
- There is no visible `loop-diagnose` protocol yet.
- `tools/structural_check.sh` is still missing locally, despite being referenced by loop runners.
- Full autonomy, multi-head traversal, and automated selectors are explicitly deferred in recent findings.

### Key Insights

- The fastest way to improve fundamentals is not more architecture. It is better feedback about where current fundamentals fail.
- User corrections are unusually high-quality labels. They say what the system missed, why a finding was unsatisfactory, or how a better loop should be guided.
- A correction chain gives three aligned artifacts: bad output, human correction, improved output.
- Comparative diagnosis is stronger than single-run reflection because the later improved run reveals what the earlier run lacked.
- A maintenance ledger converts diagnoses into tracked changes instead of ad hoc edits.
- Structural checks are necessary support, but structural correctness is narrower than fundamentals quality.

### Structural Points

- **Input signal:** correction chain.
- **Analysis operation:** loop diagnosis.
- **Memory artifact:** self-maintenance ledger.
- **Action:** small fundamental patch.
- **Evaluation:** future use and retain/revert/refine decision.
- **Supporting tooling:** structural checks and telemetry consistency.

### Foundational Principles

- Evidence before autonomy.
- Diagnosis before patching.
- Small patches before broad refactors.
- Retain/revert/refine closure before claiming improvement.
- Navigation and meta-loop should consume better evidence; they should not substitute for evidence.

### Meaning-Nodes

- Rapid fundamentals improvement
- Correction chain
- Loop diagnosis
- Self-maintenance ledger
- Evidence flywheel
- Structural check
- External validation
- Meta-loop
- `/intuit`

## SV2 - Anchor-Informed Understanding

The strongest frame is:

```text
bad MVL output
-> user correction
-> improved MVL output
-> comparative diagnosis
-> maintenance ledger entry
-> small fundamentals patch
-> later retain/revert/refine
```

This is a faster and more direct improvement loop than building a more powerful runner or another discipline. A meta-loop can move through artifacts, but it still needs evidence about which artifacts are good. `/intuit` can surface prior patterns, but it still needs calibration. External validation can reveal weaknesses, but without a maintenance mechanism it does not automatically improve the fundamentals.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The most direct causal path from current work to better fundamentals is correction-chain diagnosis. It maps observed failures to specific parts of the system: Sensemaking, Exploration, Decomposition, Innovation, Critique, CONCLUDE, loop framing, orchestration, or context elicitation.

New anchor: fundamentals improve fastest when failure localization improves.

### Human / User Perspective

The user already supplies rich correction signals in conversation. If those signals are not captured, they disappear into chat history or remain implicit in new findings. The user should not need to invent a better self-maintenance system manually each time.

New anchor: capture the work the user is already doing.

### Strategic / Long-Term Perspective

Level 1 self-maintenance requires instrumentation, not autonomy. The correction-chain loop is the bridge from Level 0.5 to Level 1. It also creates data that future meta-loop, `/intuit`, and selector work can consume.

New anchor: self-maintenance evidence is upstream of later autonomy.

### Risk / Failure Perspective

The main risk of choosing meta-loop or `/intuit` now is architectural drift: adding new moving parts before the system can tell which current parts failed. The main risk of choosing pure external validation now is finding failures but lacking a standard way to convert them into spec changes.

New anchor: do not gather failures without a conversion path.

### Resource / Feasibility Perspective

The smallest useful implementation is cheap:

- create a maintenance ledger;
- create a lightweight loop-diagnosis template/protocol;
- run it on three real correction chains;
- apply one or two small patches;
- set evaluation gates.

This is lower cost than robust meta-loop or `/intuit` work.

New anchor: the focus is implementable immediately.

### Definitional / Consistency Perspective

"Fundamentals improvement" means improving the rules that govern future cognition. That is different from producing more findings, adding runners, or creating new concepts. A fundamental has improved only if later runs are better because the governing rule changed and the change was retained after evaluation.

New anchor: improvement requires observed downstream effect, not just a patch.

## SV3 - Multi-Perspective Understanding

All perspectives converge on the same answer:

> The biggest current focus should be building a correction-chain-driven self-maintenance loop.

The focus is not only `loop-diagnose`. It is the whole small loop:

```text
loop-diagnose + self-maintenance ledger + bounded fundamental patch + evaluation closure
```

This is the missing mechanism that turns Homegrown's natural human-guided iteration into rapid improvement of the fundamentals.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does "biggest focus" mean long-term strategic critical path?

**Strongest counter-interpretation:** The biggest focus should be `/intuit`, because prior work identified `/intuit` Phase A as critical path for the long-term Baldwin cycle and autonomy ladder.

**Why the counter-interpretation fails (structural grounds):** `/intuit` is strategic, but the user's current question asks for rapid fundamentals improvement. `/intuit` adds a new hunch layer. It does not directly localize why current MVL findings fail unless a diagnosis and maintenance loop exists to interpret its outcomes. Building `/intuit` before maintenance closure risks creating more signals without a conversion path.

**Confidence:** HIGH.

**Resolution:** `/intuit` remains important, but not the biggest current focus for this narrower goal.

**What is now fixed?** The answer is scoped to rapid improvement of existing fundamentals.

**What is no longer allowed?** Selecting a long-term autonomy dependency just because it is strategically important.

**What now depends on this choice?** Near-term implementation sequence.

**What changed in the conceptual model?** The current bottleneck becomes evidence conversion, not capability addition.

### Ambiguity: Should external validation be first?

**Strongest counter-interpretation:** The scientific summary says the project needs validation most. Therefore the biggest focus should be testing Homegrown on external tasks.

**Why the counter-interpretation partly holds:** External validation is essential for scientific credibility and for escaping self-reference blindness.

**Why the counter-interpretation fails for this exact question:** External validation reveals whether the system works, but it does not by itself improve fundamentals. To improve rapidly, failures must be diagnosed and converted into maintenance entries and patches. External validation should feed the correction-chain loop, not replace it.

**Confidence:** HIGH.

**Resolution:** Build the correction-chain maintenance loop first or alongside the first validation cases, so every external failure becomes actionable evidence.

**What is now fixed?** Validation without maintenance conversion is insufficient.

**What is no longer allowed?** Treating "test more" as enough to improve fundamentals.

**What now depends on this choice?** External validation design should include loop diagnosis and ledger entries.

**What changed in the conceptual model?** Validation becomes an input to self-maintenance, not the whole priority.

### Ambiguity: Is structural check the biggest focus?

**Strongest counter-interpretation:** The loop runners reference `tools/structural_check.sh`, and it is missing. A missing validator is a concrete defect, so fixing it should be first.

**Why the counter-interpretation partly holds:** This is a real defect. A referenced missing tool weakens protocol enforcement and should be fixed or removed.

**Why the counter-interpretation fails as biggest focus:** Structural checks catch format and section-level problems. They do not diagnose whether Sensemaking framed the question badly, Innovation under-explored, Critique rubber-stamped, or CONCLUDE compressed away the insight. Structural check is support infrastructure for the bigger evidence loop.

**Confidence:** HIGH.

**Resolution:** Fix structural check as a supporting action, not the central focus.

**What is now fixed?** Structural validation is necessary but not sufficient.

**What is no longer allowed?** Equating structural validity with fundamentals quality.

**What now depends on this choice?** The implementation plan should include structural check, but rank it below loop diagnosis + ledger.

**What changed in the conceptual model?** Tooling is a guardrail, not the engine of improvement.

### Ambiguity: Should meta-loop be the focus because it can traverse all artifacts?

**Strongest counter-interpretation:** The new meta-loop can move through artifact terrain and use Navigation as eyes, so it should be the focus for rapid improvement.

**Why the counter-interpretation fails (structural grounds):** The meta-loop is an orchestration layer. It can traverse, but it does not inherently know which fundamentals are weak or whether a change improved future runs. Without maintenance evidence, it may just move faster through under-calibrated artifacts.

**Confidence:** HIGH.

**Resolution:** Meta-loop should later consume maintenance evidence. It should not be the immediate fundamentals-improvement focus.

**What is now fixed?** Evidence loop before stronger traversal.

**What is no longer allowed?** Treating orchestration speed as improvement quality.

**What now depends on this choice?** Meta-loop work should be paused or kept narrow until the maintenance evidence loop exists.

**What changed in the conceptual model?** Traversal becomes downstream of calibration.

## SV4 - Clarified Understanding

The biggest current focus should be:

> Build a correction-chain-driven fundamentals improvement loop.

This means creating a small mechanism that reads bad MVL/MVL+ outputs, user corrections, and improved reruns; diagnoses where the original loop failed; records a maintenance candidate; applies small changes only with evidence; and later decides retain, revert, or refine.

This focus beats meta-loop, `/intuit`, external validation, and structural check because it directly improves the current fundamentals from existing high-signal evidence.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Primary focus: correction-chain-driven fundamentals improvement.
- Core mechanism: `loop-diagnose` + self-maintenance ledger + evaluation closure.
- First evidence source: real correction chains already present in recent inquiry history.
- First patch style: small, targeted changes to fundamentals, not broad rewrites.
- Supporting action: implement or remove missing structural check reference.

### Eliminated

- Meta-loop as biggest current focus.
- `/intuit` as biggest current focus.
- External validation alone as biggest current focus.
- Structural check alone as biggest current focus.
- Any direct autonomous self-editing.

### Still Viable

- External validation after/with maintenance capture.
- Meta-loop after evidence loop exists.
- `/intuit` after maintenance capture or when strategic autonomy work resumes.
- Structural check as immediate support work.
- Telemetry standardization as support work.

## SV5 - Constrained Understanding

The answer is now constrained to one near-term program:

1. Create `devdocs/self_maintenance.md`.
2. Create a lightweight `loop-diagnose` protocol or template.
3. Run it on 3 real correction chains.
4. Produce maintenance entries with risk class, affected files, and evaluation gate.
5. Apply at most 1-2 small fundamentals patches.
6. After their evaluation windows, retain, revert, or refine.

This is the fastest path because it uses already available human feedback as labeled training/evaluation data for the system's own fundamentals.

## Phase 5 - Conceptual Stabilization

The fundamental improvement problem is not primarily a design problem now. It is a learning-loop problem.

Homegrown already has many design ideas. What it lacks is a disciplined way to learn from its own mistakes. The fastest improvement will come from turning user corrections into structured maintenance evidence and closing the loop on whether resulting spec changes actually help.

## SV6 - Stabilized Model

Homegrown's biggest current focus for rapid fundamentals improvement should be **instrumented correction-chain learning**.

In plain terms:

```text
When an MVL/MVL+ result is bad and a later run is better,
capture that chain,
diagnose what failed,
record a maintenance candidate,
patch the smallest relevant fundamental,
then later decide retain / revert / refine.
```

This differs from SV1 by making the answer more exact. It is not just "learn from failures." It is a specific Level 1 self-maintenance mechanism: `loop-diagnose` plus maintenance ledger plus closure.

