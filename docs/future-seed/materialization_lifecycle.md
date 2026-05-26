# Materialization Lifecycle

## Core Claim

Homegrown should not jump directly from a finding to file edits.

The missing operation is **materialization**: turning an accepted decision into concrete files under an explicit contract. Materialization is different from theory accumulation. Theory work produces understanding, findings, protocols, and priorities. Materialization produces changed files, runnable artifacts, validation results, and traces.

The strongest lifecycle should reuse the proven AlignStack / vibe-driven-development sequence:

```text
artifact request
  -> task description
  -> implementation plan
  -> dynamic critic
  -> plan repair
  -> implementation
  -> validation
  -> materialization trace
  -> retrospective learning
```

This keeps the reasoning loop and the implementation loop connected without collapsing them into one thing.

---

## Why Materialization Needs Its Own Lifecycle

Homegrown's MVL/MVL+ loops are good at knowledge accumulation:

- explore the territory,
- understand the problem,
- decompose dependencies,
- generate options,
- critique candidates,
- conclude a finding.

That is not the same as implementation.

Implementation has different failure modes:

- the task may be underspecified,
- the plan may touch the wrong files,
- the plan may be too vague for risky code,
- the change may break existing behavior,
- validation may be missing,
- the artifact may not match the original finding,
- the repo may accumulate untraceable edits.

For this reason, materialization should be a post-finding lifecycle with its own artifacts, gates, and trace record.

---

## Inputs

A materialization run starts from one of these:

1. A `finding.md` that explicitly proposes an artifact.
2. A user request that asks to materialize an artifact.
3. A protocol or branch experiment that needs a concrete artifact to proceed.

Every run must identify:

- **Source:** the finding, request, or protocol that authorizes the work.
- **Artifact type:** protocol, skill file, config, code, test, trace schema, harness adapter, documentation, or other.
- **Target path or write-set:** files that may be created or edited.
- **Contract:** what the artifact must contain or do.
- **Validation plan:** commands, structural checks, manual review gates, or reason no automated check exists.
- **Risk class:** low, medium, or high.

If these fields are missing, the run should not proceed to implementation. It should first create a task description.

---

## Phase 1: Task Description

Purpose: convert the artifact request into a lightweight implementation brief.

This phase adapts `/task-desc` from the vibe-driven-development workflow. It should create a `desc.md` or equivalent description in the relevant materialization folder.

The description must answer:

### Problem Statement

What problem does this artifact solve? Name the current pain point, not just the desired file.

### User Value Proposition

Why does this matter? What changes once the artifact exists?

### Success Criteria

How will we know the materialized artifact works? Criteria should be observable and, where possible, checkable.

### Scope Boundaries

What will this artifact not do? This prevents implementation creep.

### Priority Level

Critical, High, Medium, or Low, with a short justification.

### Materialization Contract

The Homegrown-specific addition:

- source finding or request,
- artifact type,
- allowed write-set,
- validation plan,
- risk class,
- trace location.

**Gate:** Do not create an implementation plan until the task description is clear enough that another agent could understand the intended artifact without reading the full prior conversation.

---

## Phase 2: Implementation Plan

Purpose: transform the task description into a step-by-step plan grounded in the repo.

This phase adapts `/task-plan`. It should create `step_by_step_impl_plan.md` or an equivalent plan next to the task description.

The plan must include:

### What Is The Task

One paragraph explaining what is being built and why.

### How This Implementation Moves Toward Desired State

A bridge from current state to target state. This should explain how the steps change the system, not just list edits.

### High-Level Summary

A table with one row per step:

| Step | Description | Expected Output |
|---|---|---|
| 1 | ... | ... |

### Per-Step Details

Each step must include:

- proposed changes,
- concrete output,
- whether the step is safe in nature,
- peripheral concepts touched,
- hardness level from 1 to 5.

### Materialization Additions

Each step should also name:

- files it may touch,
- validation relevant to that step,
- rollback or repair path if the step fails.

**Gate:** Do not run the dynamic critic until the plan identifies the write-set and validation expectations for every non-trivial step.

---

## Phase 3: Dynamic Critic

Purpose: generate a task-specific critic instead of applying a generic checklist.

This phase adapts `/critic-d`. It has two subphases.

### Phase 3A: Generate Dynamic Critic Prompt

Create `dynamic_critic_prompt.md` beside the implementation plan.

The prompt must be customized to:

- the artifact type,
- the repo area being touched,
- the concepts involved,
- the expected validation path,
- the likely failure modes of this specific materialization run.

The critic prompt should ask about:

- breaking existing behavior,
- API or protocol contract changes,
- missing files,
- import or package discovery issues,
- circular dependencies,
- stale assumptions,
- phase ordering errors,
- security implications,
- performance implications,
- schema or persistence impacts,
- whether any plan step is too high-level for its hardness.

### Phase 3B: Execute Dynamic Critic

Run the generated critic prompt against the plan and codebase. Save the result as `critic.md`.

Each critic item should include:

- description,
- risk description,
- severity: Low, Medium, or High,
- impact,
- simple explanation,
- noob-engineer explanation,
- affected areas,
- mitigation for Medium and High items,
- category.

**Gate:** Do not implement while unresolved High risks remain. Medium risks require either plan repair or an explicit accepted-risk note.

---

## Phase 4: Plan Repair

Purpose: make the implementation plan stronger before touching files.

The critic is not only a warning document. It is an input to plan revision.

Plan repair must:

1. Read `critic.md`.
2. Identify all High and Medium risks.
3. Update the implementation plan to remove, reduce, or explicitly accept each risk.
4. Record what changed in the plan.
5. Re-run dynamic critic if the repair changed architecture, write-set, contracts, or validation.

The repaired plan should be saved as either:

- an updated `step_by_step_impl_plan.md`, or
- `step_by_step_impl_plan_revised.md` if preserving the original plan matters.

**Gate:** Implementation starts only after the plan has no unresolved High risks and no unexplained Medium risks.

---

## Phase 5: Implementation

Purpose: create or edit the artifact under the approved plan.

Implementation must stay inside the approved write-set unless the plan is amended first.

During implementation:

- follow the repaired plan,
- keep edits scoped,
- avoid unrelated refactors,
- do not erase user or parallel edits,
- update the plan or trace if reality differs from the plan,
- stop and re-plan if the implementation requires a new architecture.

Implementation is not allowed to use the original finding as a loose permission slip. The approved plan and write-set are the active contract.

**Gate:** If implementation needs files outside the approved write-set, pause materialization and repair the plan before continuing.

---

## Phase 6: Validation

Purpose: determine whether the artifact satisfies its contract.

Validation may include:

- tests,
- linters,
- type checks,
- schema checks,
- structural checks,
- dry runs,
- sample executions,
- manual review when no automated validation exists.

Validation must record:

- commands run,
- results,
- failures,
- fixes attempted,
- remaining gaps,
- reason if a check could not be run.

Possible validation outcomes:

- **PASS:** artifact satisfies the declared contract and checks passed.
- **PARTIAL:** artifact exists, but some validation is missing, failed, or manually deferred.
- **FAIL:** artifact does not satisfy the contract or cannot be safely used.

**Gate:** A materialized artifact cannot be treated as system capability evidence unless validation is PASS or the PARTIAL limitations are explicit.

---

## Phase 7: Materialization Trace

Purpose: make the run inspectable later.

Every materialization run should produce a trace, for example `materialization_trace.md`.

The trace must include:

- source finding or request,
- task description path,
- implementation plan path,
- dynamic critic prompt path,
- critic output path,
- repaired plan path,
- files changed,
- validation commands and results,
- deviations from plan,
- outcome: PASS, PARTIAL, or FAIL,
- follow-up review gate.

The trace is the bridge from implementation back into Homegrown's learning system. Without it, later loop diagnosis and retrospective review have to infer what happened from scattered files.

---

## Phase 8: Retrospective Learning

Purpose: convert implementation outcomes back into theory and protocol improvements.

Retrospective learning should happen after the artifact has been used, not immediately after it is written.

It should ask:

- Did the artifact solve the original problem?
- Did the task description capture the right success criteria?
- Did the plan miss important implementation realities?
- Did the dynamic critic catch the important risks?
- Did plan repair improve the outcome?
- Did validation predict real downstream behavior?
- Should a protocol, skill, or checker be updated?

This is where materialization feeds the Baldwin cycle. Repeated failures become protocol improvements. Repeated critic misses become critic-prompt improvements. Repeated validation gaps become structural-checker work.

---

## Risk Classes

### Low Risk

Examples:

- new documentation file,
- new protocol draft,
- trace schema stub,
- non-executed config example.

Requirements:

- task description,
- lightweight plan,
- validation or manual review note,
- trace.

Dynamic critic may be short, but should still exist if the artifact changes a protocol or skill.

### Medium Risk

Examples:

- editing an existing skill,
- editing an existing protocol,
- adding a config used by tooling,
- adding tests,
- adding a harness adapter stub.

Requirements:

- full task description,
- full implementation plan,
- dynamic critic,
- plan repair,
- validation,
- trace.

### High Risk

Examples:

- modifying runner behavior,
- changing discipline fundamentals,
- editing shared tooling,
- changing artifact schemas used across inquiries,
- implementing ARC execution or scoring paths.

Requirements:

- full lifecycle,
- no unresolved High critic risks,
- explicit Medium-risk acceptance,
- stronger validation,
- retrospective review gate.

High-risk materialization should usually happen through a branch experiment once that protocol exists.

---

## Relationship To MVL/MVL+

MVL/MVL+ answers what should be believed, changed, or tried.

Materialization answers how a selected change becomes a concrete artifact.

The clean boundary is:

```text
MVL/MVL+ finding
  -> optional Artifact Request
  -> Materialization Lifecycle
  -> materialized artifact + trace
  -> Retrospective RC / loop diagnose / branch experiment
```

This boundary matters because theory knowledge accumulation and implementation work optimize for different things.

Theory work optimizes for:

- insight quality,
- conceptual correctness,
- decision clarity,
- option selection,
- long-term knowledge accumulation.

Implementation work optimizes for:

- concrete file changes,
- compatibility,
- validation,
- rollback safety,
- traceability,
- empirical outcome.

The system needs both. It should not pretend one replaces the other.

---

## Minimal V1 Protocol

A minimal materialization run can use this folder structure:

```text
devdocs/materializations/<date>__<name>/
  desc.md
  step_by_step_impl_plan.md
  dynamic_critic_prompt.md
  critic.md
  step_by_step_impl_plan_revised.md
  materialization_trace.md
```

For very small low-risk artifacts, the plan, critic, and trace may be shorter, but the lifecycle order should remain visible.

---

## Non-Negotiables

- Do not materialize without a source finding, request, or protocol authorization.
- Do not implement before the task description and plan exist.
- Do not use a generic critic when the change touches real behavior.
- Do not implement unresolved High-risk plans.
- Do not expand the write-set silently.
- Do not count unvalidated artifacts as capability evidence.
- Do not let every skill freely write arbitrary artifacts.
- Do not treat Markdown findings as implementation results.

---

## The Short Version

The right materialization lifecycle is:

```text
decision -> desc -> plan -> dynamic critic -> repair -> implement -> validate -> trace -> retrospect
```

This preserves what already works in the AlignStack development flow while making it safe for Homegrown: decisions remain theory artifacts, implementation becomes a governed lifecycle, and every concrete artifact has a reason, scope, validation result, and learning trail.
