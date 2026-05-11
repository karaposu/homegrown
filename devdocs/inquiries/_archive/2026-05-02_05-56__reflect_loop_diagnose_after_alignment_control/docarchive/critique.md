# Critique: Reflect and Loop Diagnose After Alignment Control

## User Input

Evaluate what should happen to `reflect` and `loop_diagnose` now that alignment control and outcome review exist, given that loop diagnose has worked and reflect has not been used.

## Phase 0 - Dimension Construction

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Preserve working behavior | Critical | Does not break or overcomplicate loop_diagnose. |
| Reduce unused complexity | Critical | Reflect either gets a real use path or is explicitly deferred/monitored. |
| Alignment-control coherence | High | Tools use layer/mode vocabulary without merging execution. |
| Cost control | High | Avoids mandatory extra steps until value is proven. |
| Learning value | High | Keeps mechanisms that can produce useful maintenance candidates. |
| Trigger clarity | High | Each operation has clear conditions for use. |
| Incremental feasibility | Medium | Changes are small and materializable. |

## Phase 1 - Fitness Landscape

### Viable Region

A viable plan:

- preserves loop_diagnose behavior;
- gives reflect a trigger-based adoption path;
- connects both to alignment_control vocabulary;
- avoids mandatory reflect;
- avoids deletion before trial.

### Dead Region

Dead or premature:

- auto-run reflect after every loop;
- retire reflect without testing;
- rewrite loop_diagnose because new vocabulary exists;
- leave reflect unpatched and unused indefinitely.

### Boundary Region

- leaving both unchanged is acceptable only as short-term deferral, not as a real plan.
- periodic reflect may be useful after trigger trials.

## Phase 2 and 3 - Candidate Verdicts

## Candidate A - Leave Both Completely Unchanged

### Prosecution

The killer objection is drift from the new architecture. `alignment_control.md` now defines roles for both tools. If neither references it, future protocols will understand them through old vocabulary and integration will remain ad hoc.

### Defense

Doing nothing avoids unnecessary churn, especially because loop_diagnose already works and reflect has not proven value.

### Collision

The defense wins against heavy edits, not against light clarification. Full no-op leaves reflect dead and loop_diagnose disconnected from alignment-control records.

### Verdict

REFINE.

Constructive output:

- Do not rewrite.
- Do add light role/contract references.

## Candidate B - Patch Both Lightly for Alignment Control

### Prosecution

The main objection is that patching reflect without solving its adoption problem may produce a prettier unused file.

### Defense

Light patches are low-risk and create vocabulary compatibility.

### Collision

The defense survives, but only if reflect also gets trigger rules and a usage gate.

### Verdict

SURVIVE with refinement.

Constructive output:

- Patch loop_diagnose lightly.
- Patch reflect lightly plus trigger/adoption section.

## Candidate C - Preserve Loop Diagnose; Patch Reflect More Heavily

### Prosecution

The main objection is imbalance. Reflect has not been used; heavier patching may overinvest in an unproven tool.

### Defense

Reflect needs more than a label change. Its problem is not identity but trigger absence.

### Collision

The defense wins if "more heavily" means trigger and adoption guidance, not procedural expansion.

### Verdict

SURVIVE - ranked first.

Constructive output:

- Loop diagnose: minimal compatibility patch.
- Reflect: role statement, contract reference, trigger rules, optional alignment-control record, monitoring gate.

## Candidate D - Auto-Run Reflect After Every MVL/MVL+

### Prosecution

The killer objection is record flood and unproven value. Reflect explicitly warns against over-reflection. Mandatory post-loop reflection can create generic observations, extra cost, and ignored files.

### Defense

Every loop could learn from itself if reflection were automatic.

### Collision

The defense is aspirational. It requires evidence from manual or triggered runs first.

### Verdict

KILL for now.

Seed extracted:

- Add optional suggestions when process-alignment signals exist, not automatic execution.

## Candidate E - Retire Reflect

### Prosecution

The killer objection is coverage loss. Reflect is the only current operation whose primary object is process alignment of a completed loop. Outcome review and loop diagnose do not replace that boundary.

### Defense

Unused tools increase cognitive load.

### Collision

The defense is real but premature. Reflect has not been tested under proper triggers. Defer retirement until a trial fails.

### Verdict

KILL for now / monitor.

Seed extracted:

- Retire only if 5 triggered reflect runs produce no useful maintenance candidates or process insights.

## Candidate F - Use Reflect Periodically Rather Than Per Inquiry

### Prosecution

The main objection is that periodic batch reflection may miss specific per-run evidence.

### Defense

Periodic reflection fits reflect's learning role and avoids per-inquiry overhead.

### Collision

The defense survives as a secondary use mode. It should not replace trigger-based single-inquiry reflection, but it may be valuable after several inquiries accumulate.

### Verdict

REFINE / COULD.

Constructive output:

- Use after 5-10 inquiries or after a milestone to detect patterns.

## Phase 3.5 - Assembly Check

Best assembly:

```text
1. Patch loop_diagnose minimally:
   - role: causal alignment diagnosis
   - contract: homegrown/contracts/alignment_control.md
   - output fields: alignment_layer, mode, route/confidence compatible with contract

2. Patch reflect moderately:
   - role: process-alignment insurance
   - contract: homegrown/contracts/alignment_control.md
   - trigger rules
   - optional one alignment-control record per run
   - usage gate before runner integration

3. Do not auto-run reflect.

4. Use outcome_review routing:
   - process issue -> reflect
   - unclear causal attribution with correction-chain evidence -> loop_diagnose
```

## Phase 4 - Coverage and Convergence Assessment

### Coverage Map

- Leave both unchanged: evaluated, refined.
- Light patch both: evaluated, survived with reflect adoption refinement.
- Preserve loop diagnose, patch reflect triggers: evaluated, survived first.
- Auto-run reflect: killed.
- Retire reflect: killed for now.
- Periodic reflect: refined into secondary possible use.

### Signal

TERMINATE.

Ranked survivors:

1. Candidate C - preserve loop diagnose; patch reflect with triggers/adoption.
2. Candidate B - light alignment-control patch for both.
3. Candidate F - periodic reflect as future secondary mode.

## Convergence Telemetry

- Dimension coverage: all dimensions applied.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: YES.
- Failure modes observed: no rubber-stamping; no false symmetry between loop_diagnose and reflect.
- Overall: PROCEED.
