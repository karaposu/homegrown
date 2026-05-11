# Critique: Materialization Record Location

## User Input

The user asked whether trace information can live in `task-desc` or `task-plan`, since those files already exist before artifact creation.

## Phase 0 - Evaluation Dimensions

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Plan-vs-actual learning | 5 | Preserves the ability to compare expected implementation against actual implementation. |
| Record clarity | 5 | A future reader can tell which fields are planned and which are actual. |
| Low overhead | 4 | Avoids unnecessary files for minimal artifacts. |
| Lifecycle fit | 5 | Fits desc -> plan -> critic -> repair -> implement -> validate -> trace. |
| Retrospective usefulness | 5 | Supports later diagnosis of plan, critic, and validation quality. |
| Adoption ergonomics | 4 | Does not feel bureaucratic for Compact mode. |
| Naming clarity | 3 | File names should not mislead about semantic role. |

Critical dimensions are plan-vs-actual learning, record clarity, lifecycle fit, and retrospective usefulness.

## Phase 1 - Fitness Landscape

### Viable Region

The viable region preserves semantic roles while reducing file overhead for Compact mode:

- `desc.md` holds intent/contract.
- `step_by_step_impl_plan.md` holds expected execution and Trace Expectations.
- `critic.md` holds predicted risks.
- Standard/Full `materialization_trace.md` holds actual execution evidence.
- Compact `materialization_record.md` combines pre/post sections in one append-only file.

### Boundary Region

Boundary candidates include using one file name everywhere or always creating separate traces. These are workable but less precise or less ergonomic.

### Dead Region

Dead candidates include putting all actual trace data into `desc.md`, overwriting `step_by_step_impl_plan.md` with results, or using one combined file for all modes.

## Phase 2 - Candidate Evaluation

### A. Put Everything in `desc.md`

**Prosecution:** `desc.md` is lightweight discovery and contract. Adding plan, execution results, validation, and outcome overloads it and destroys its clean role.

**Defense:** It reduces file count and keeps intent close to outcome.

**Collision:** File-count reduction does not justify semantic overload.

**Verdict:** KILL.

Constructive seed: desc can include source authority and artifact contract, but not actual execution trace.

### B. Put Actual Trace in `step_by_step_impl_plan.md`

**Prosecution:** The plan is a prediction. If actual execution results are appended or overwritten there, later review loses a clean plan-vs-actual comparison. Dynamic critic also becomes harder to interpret if the plan contains post-hoc edits.

**Defense:** The plan already names steps, expected outputs, write-set, and validation, so it is the closest existing artifact to trace.

**Collision:** The defense is valid only for planned trace fields, not actual results.

**Verdict:** REFINE.

Constructive output: add a `Trace Expectations` section to the plan, but keep actual trace evidence separate for Standard/Full modes.

### C. Separate Trace for Every Mode

**Prosecution:** This is clean but overkill for tiny low-risk artifacts. It works against the compact-mode goal.

**Defense:** It preserves semantic clarity and retrospective learning.

**Collision:** Strong for Standard/Full, too heavy for Compact.

**Verdict:** REFINE.

Constructive output: require separate `materialization_trace.md` for Standard/Full only.

### D. Compact `materialization_record.md`, Standard/Full `materialization_trace.md`

**Prosecution:** Two names add slight complexity. Agents must understand when to use record vs trace.

**Defense:** The names reflect real semantics. Compact record contains both pre- and post-implementation sections. Standard/Full trace is post-only evidence because desc/plan/critic are separate.

**Collision:** The slight naming complexity improves clarity rather than hurting it.

**Verdict:** SURVIVE.

Constructive output: adopt this as the main record model.

### E. One Name Everywhere: `materialization_record.md`

**Prosecution:** Consistent naming is simpler, but it loses useful precision in Standard/Full mode where the file is truly a post-implementation trace.

**Defense:** One name reduces cognitive load and avoids questions about record vs trace.

**Collision:** This is acceptable but less expressive than D.

**Verdict:** REFINE.

Constructive output: if one name is chosen later for tooling simplicity, enforce explicit sections: References, Actual Trace, Outcome, Follow-up.

### F. Plan With `Trace Expectations`

**Prosecution:** If misunderstood, this could tempt agents to put actual results in the plan.

**Defense:** It makes the plan more useful and sets up trace comparison without duplicating actual results.

**Collision:** The risk is handled by naming it expectations and placing actuals elsewhere.

**Verdict:** SURVIVE as part of D.

Constructive output: add `Trace Expectations` to Standard/Full plan template.

### G. Append-Only Combined File for All Modes

**Prosecution:** Works like a lab notebook, but for Standard/Full it makes dynamic critic, plan repair, and later review clumsier. The artifact becomes long and role boundaries blur.

**Defense:** Append-only chronology can preserve history.

**Collision:** Good seed for Compact, bad default for larger work.

**Verdict:** KILL for Standard/Full; preserve as Compact record model.

## Phase 3.5 - Assembly Check

Best final assembly:

1. `desc.md` owns intent and artifact contract.
2. `step_by_step_impl_plan.md` owns expected execution and includes:
   ```markdown
   ### Trace Expectations
   - Expected files changed:
   - Planned validation commands:
   - Expected validation evidence:
   - Expected follow-up gate:
   ```
3. `critic.md` owns predicted risk.
4. Standard/Full modes create separate `materialization_trace.md` for actual execution evidence.
5. Compact mode creates one `materialization_record.md` with:
   - Pre-Implementation Contract,
   - Tiny Plan,
   - Risk Scan,
   - Post-Implementation Trace,
   - Outcome,
   - Follow-up.
6. Do not duplicate entire desc/plan in the trace; reference paths and record actual deltas.
7. Do not overwrite pre-implementation plan with post-hoc evidence.

This assembly passes all critical dimensions.

## Phase 4 - Coverage and Convergence

All major layouts were evaluated. The landscape is stable: viable designs preserve semantic roles; dead designs blur prediction and evidence.

The original question is answered. No second iteration is needed.

## Convergence Telemetry

- Dimension coverage: all critical dimensions covered.
- Adversarial strength: STRONG. The strongest objection to separate trace, file overhead, is handled through Compact record.
- Landscape stability: STABLE.
- Clean survivor exists: yes, semantic ownership with Compact record and Standard/Full trace.
- Failure modes observed: none requiring rerun.

**Overall: PROCEED**

## Critique Verdict

**TERMINATE.**

Task description and task plan should hold planned materialization information, not actual trace evidence. For Standard/Full modes, keep a separate `materialization_trace.md`. For Compact mode, use a combined `materialization_record.md` with explicit pre-implementation and post-implementation sections.
