# Critique: Navigation Correction Chain Failure Inventory

## User Input

`devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/_branch.md`

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Evidence Fidelity | Critical | Failure claims are grounded in inspected inquiry artifacts and distinguish artifact evidence from chat-context evidence. |
| Diagnostic Usefulness | Critical | Output gives the user ready-to-run `loop_diagnose.md` prompts with proper prior/corrected roles. |
| Caution / No Overclaim | Critical | Does not assert exact root cause, failed discipline, or source edits before diagnostic runs. |
| Failure Classification Quality | High | Separates confirmed failures, policy refinements, near-failures, and recurring risks. |
| Completeness | High | Covers naming, file necessity, trigger boundaries, preflight wording, phase policy, index reversal, and authority risk. |
| Practical Readability | Medium | User can scan failures and copy prompts without wading through the full evidence corpus. |
| Protocol Fit | High | Prompt format follows `homegrown/protocols/loop_diagnose.md`. |

Critical dimensions:

- Evidence Fidelity.
- Diagnostic Usefulness.
- Caution / No Overclaim.

## Phase 1 - Fitness Landscape

### Viable Region

Outputs that:

- state evidence coverage;
- provide a typed failure inventory;
- attach each failure to a correction edge or cross-chain theme;
- include confidence labels;
- provide pairwise `loop_diagnose.md` prompts;
- defer exact stage attribution to diagnostics.

### Dead Region

Outputs that:

- list failures without evidence;
- claim exact discipline failure directly;
- provide only prompts and no failure list;
- use one huge aggregate prompt as the main diagnostic;
- propose maintenance edits before diagnosis.

### Boundary Region

Outputs that:

- include a cross-chain prompt after pairwise prompts;
- include priority ordering;
- include naming failures partly based on chat context.

These can survive if their confidence limits are explicit.

### Unexplored Region

- Exact future maintenance candidates after diagnostics.
- Whether prompts should be branches of this inquiry or root inquiries.
- Whether a later automation helper should generate loop-diagnose `_branch.md` files.

These are outside the current request.

## Phase 2 - Candidate Evaluation

### Candidate A - Flat Failure List

Prosecution:

It would satisfy "list them to me" but fail the later diagnostic use. Without chain roles, confidence, and evidence, the user would still need to reconstruct `loop_diagnose.md` inputs manually.

Defense:

It is easy to read and avoids long output.

Collision:

Defense loses on critical dimensions. Readability without diagnostic structure is not enough.

Verdict: KILL.

Constructive seed:

Use a failure table, but keep labels plain.

### Candidate B - Typed Failure Inventory

Prosecution:

It can become too formal and may bury the actual failures under metadata.

Defense:

The metadata is exactly what prevents overclaiming. Type and confidence let the user see which items are confirmed failures and which are diagnostic hypotheses.

Collision:

Defense wins if the final finding keeps the table compact and uses plain labels.

Verdict: SURVIVE.

Conditions:

- Include evidence path or correction edge.
- Include confidence.
- Do not add exact failed discipline.

### Candidate C - Prompt Set Only

Prosecution:

It skips the requested failure list. It also hides why each prompt is worth running.

Defense:

The user explicitly asked for prompts, so a prompt-only answer is actionable.

Collision:

Defense wins only as a component. It fails as the whole answer.

Verdict: KILL as standalone; PRESERVE as required section.

### Candidate D - One Aggregate Loop Diagnose Prompt

Prosecution:

`loop_diagnose.md` expects a correction chain with prior path, corrected path, and human correction. All seven inquiries at once blurs roles and makes attribution weak.

Defense:

Some failures are recurring patterns, especially naming and boundary confusion. Pairwise prompts might miss the meta-pattern.

Collision:

Both are true. Aggregate prompt is useful only as secondary cross-chain diagnostic.

Verdict: REFINE.

Constructive output:

Provide one optional aggregate naming/boundary prompt after pairwise prompts, with explicit note that it is lower priority.

### Candidate E - Pairwise Prompt Set

Prosecution:

Multiple prompts increase output length and require the user to choose where to start.

Defense:

Pairwise prompts match `loop_diagnose.md`, preserve weak-prior versus corrected roles, and keep diagnostic scope tractable.

Collision:

Defense wins. The length is justified because the user asked for ready-to-run prompts.

Verdict: SURVIVE.

Conditions:

- Include correction signal.
- Include optional context.
- Include diagnostic goal.
- Instruct full artifact reads and no finding-only diagnosis.

### Candidate F - Immediate Maintenance Candidate List

Prosecution:

This would preempt the very diagnostics the user wants to run later. It risks broad protocol edits from one inventory.

Defense:

The user ultimately wants to improve the system; maintenance candidates are the endpoint.

Collision:

Prosecution wins for now. Maintenance candidates belong after loop diagnosis.

Verdict: KILL for this finding.

Constructive seed:

Prompts should ask diagnostics to produce maintenance candidates and evaluation gates.

### Candidate G - Priority-Ordered Diagnostic Backlog

Prosecution:

Priority order can imply the lower-ranked failures are less real.

Defense:

The user needs a practical starting point. Priority can be based on isolation and evidence strength, not severity.

Collision:

Defense wins if priority labels explain why.

Verdict: SURVIVE.

Condition:

Say "recommended run order," not absolute severity ranking.

## Phase 3.5 - Assembly Check

### Assembly Candidate - Evidence-Backed Diagnostic Backlog

Components:

- Evidence coverage note.
- Typed failure inventory.
- Recommended run order.
- Pairwise prompt set.
- Optional aggregate naming/boundary prompt.
- Guardrails.

Prosecution:

The assembly may still be long, and prompt blocks may duplicate information already in the failure inventory.

Defense:

The user needs reusable prompts. Duplication is acceptable when it prevents malformed `loop_diagnose.md` runs. The output can still be readable if failure inventory comes first and prompts are grouped by priority.

Collision:

Defense wins. The assembly passes all critical dimensions.

Verdict: SURVIVE.

Rank: 1.

## Phase 3 - Ranked Verdicts

1. **SURVIVE: Evidence-Backed Diagnostic Backlog**
   - Use as final finding structure.

2. **SURVIVE: Typed Failure Inventory**
   - Required first content section.

3. **SURVIVE: Pairwise Prompt Set**
   - Required second content section.

4. **SURVIVE: Priority-Ordered Diagnostic Backlog**
   - Use recommended run order based on evidence isolation.

5. **REFINE: One Aggregate Prompt**
   - Include only for cross-chain naming/boundary pattern.

6. **KILL: Flat Failure List**
   - Too weak for diagnostics.

7. **KILL: Prompt Set Only**
   - Does not answer the failure-list request.

8. **KILL for now: Immediate Maintenance Candidate List**
   - Defer to actual loop-diagnose findings.

## Coverage Map

Evaluated:

- flat failure list;
- typed failure inventory;
- prompt-only output;
- one aggregate prompt;
- pairwise prompt set;
- immediate maintenance candidates;
- priority-ordered diagnostic backlog;
- assembled diagnostic backlog.

Unexplored but not blocking:

- future automation for prompt generation;
- source patches after diagnostics;
- branch-versus-root inquiry strategy for prompt execution.

Coverage judgment:

Sufficient. A clean survivor exists and covers the user request.

## Signal

TERMINATE.

Final answer should use:

```text
Evidence coverage
Typed failure inventory
Recommended loop_diagnose run order
Ready-to-run prompts
Guardrails / confidence limits
```

Do not run `loop_diagnose.md` yet. The user asked for prompts to run later.

## Convergence Telemetry

Dimension coverage: complete. Critical dimensions were tested.

Adversarial strength: strong. The survivor was tested against overlength, overclaiming, and protocol mismatch.

Landscape stability: stable. No new candidate region appeared during assembly.

Clean SURVIVE exists: yes.

Failure modes observed: none. No rubber-stamping; several candidates were killed or refined.

Overall: PROCEED.
