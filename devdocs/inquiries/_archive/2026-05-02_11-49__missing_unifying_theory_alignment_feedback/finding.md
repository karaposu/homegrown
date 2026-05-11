---
status: active
refines: devdocs/inquiries/2026-05-02_05-17__alignment_layer_over_feedback_operations/finding.md
---
# Finding: missing_unifying_theory_alignment_feedback

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-02_05-17__alignment_layer_over_feedback_operations/finding.md`

**Revision trigger:** The user noticed that even after reframing feedback operations as alignment-insurance operations, the theory still feels scattered.

**What's preserved:** The prior finding was right that alignment is the parent architecture and feedback/control is the mechanism that makes alignment drift visible.

**What's changed:** Static alignment vocabulary is not enough. The missing layer is dynamic: how alignment state changes over time, how signals mature, which control action follows, and how outcomes calibrate future judgment.

**What's new:** The best name for the missing layer is **alignment dynamics**. It can also be described as a cognitive-control theory for Homegrown's self-maintenance loop.

**Migration:** Do not create another sibling feedback protocol yet. Do not expand `homegrown/contracts/alignment_control.md` into a broad theory document yet. First create a small theory note at `enes/alignment_dynamics.md`.

## Question

What kind of missing core understanding could explain why Homegrown's alignment and feedback logic still feels scattered, even after creating `alignment_control.md`, `outcome_review.md`, `loop_diagnose.md`, and the trial-gated `reflect` framing?

The goal is to identify the likely category of missing abstraction or theory, even if the exact theory cannot be fully built yet, so the next inquiry or materialization can target the right layer instead of adding more scattered protocols.

## Finding Summary

- The missing thing is probably not another protocol. It is a **theory of alignment dynamics**: how alignment state changes over time through signals, evidence maturity, control actions, outcomes, and calibration.

- `homegrown/contracts/alignment_control.md` gives a shared record shape, but it does not yet explain the lifecycle of records. It can say "route to loop_diagnose," but it does not explain how weak signals accumulate, when monitoring should escalate, or how a route outcome changes future routing.

- The feedback tools feel scattered because each owns a local boundary: checkpoint, reflect, outcome review, loop diagnose, navigation, materialization, and meta-loop each see a different moment. The missing theory should explain the sequence across those moments.

- The useful lifecycle is:

```text
alignment state -> signal -> evidence maturity -> control action -> outcome -> calibration -> updated state
```

- The first artifact should be `enes/alignment_dynamics.md`. It should be a theory note, not a protocol, not a runner, and not a contract.

- Later, stable pieces from `alignment_dynamics.md` can flow into `homegrown/contracts/alignment_control.md`, `outcome_review.md`, navigation, materialization, and a future selector/control policy.

## Finding

### 1. The current architecture has categories, but not motion

The recent work created useful categories.

`homegrown/contracts/alignment_control.md` defines alignment layers, modes, record fields, route names, and insurance operations. That gives the system a shared vocabulary.

The recent reflect finding at `devdocs/inquiries/2026-05-02_11-34__reflect_discipline_vs_mvl_protocol/finding.md` also clarified that reflect is a boundary discipline for process-alignment observation, not a generic learning tool and not a default MVL/MVL+ stage.

Those decisions are locally sound. The remaining problem is that the system still does not have a theory of motion.

It can record:

```text
expected -> observed -> delta -> evidence -> confidence -> route
```

But it does not yet explain:

- how several weak signals become one strong signal;
- when `monitor` should become `reflect`;
- when `reflect` should become `loop_diagnose`;
- when an outcome mismatch should become a materialization task;
- when navigation should enumerate options versus when a selector should choose;
- how the result of a chosen route updates future route choice.

That is why the logic still feels scattered.

### 2. The missing layer is alignment dynamics

Alignment is the condition the system tries to preserve.

Feedback is the mechanism that detects drift or confirmation.

Insurance operations are local procedures that inspect or repair particular boundaries.

What is missing is the layer that explains how these local signals change system trajectory over time.

The concise model is:

```text
alignment state
  -> signal
  -> evidence maturity
  -> control action
  -> outcome
  -> calibration
  -> updated alignment state
```

This is **alignment dynamics**.

It is also a form of cognitive control: the system senses its state, interprets signals, selects a response, observes the result, and updates future response tendencies.

### 3. This explains why the current tools are siblings without merging them

Each current tool occupies a different point in the lifecycle:

- **Checkpoint / Primitive RC** detects immediate structural signals before the next discipline consumes an output.
- **Reflect** observes process signals after a completed loop or meaningful work unit.
- **Outcome review** observes delayed after-use signals from findings, branches, protocol edits, or materialized artifacts.
- **Loop diagnose** handles mature causal evidence, especially a correction chain: weak prior result, human correction, later improved result.
- **Navigation** enumerates possible next moves from a completed cycle or signal set.
- **Materialization** executes a concrete control action by turning a decision into files under a contract.
- **Meta-loop** preserves traversal state across many inquiries, but in v1 it leaves selection to the human.

The missing theory should not merge these tools. It should explain their positions in one control lifecycle.

### 4. Evidence maturity is the central missing concept

The most load-bearing sub-concept is evidence maturity.

A signal can begin weak:

```text
one odd critique observation
one user discomfort signal
one after-use mismatch
one repeated confusion
```

At that point, the right control action may be `monitor`.

The same signal can become stronger through:

- repetition across inquiries;
- downstream use;
- correction-chain evidence;
- prediction-vs-outcome comparison;
- materialization validation failure;
- branch results that converge on the same weakness.

At higher maturity, the right control action may become `reflect`, `outcome_review`, `loop_diagnose`, `navigation`, `branch`, `materialize`, `revise_protocol`, or `recover`.

Without evidence maturity, routing stays manual and local. With evidence maturity, feedback operations can remain separate while still belonging to one theory.

### 5. This connects to Predictive RC, Retrospective RC, and Baldwin cycles

`enes/thinking_space_dynamics.md` already contains a temporal pattern:

```text
Primitive RC at T0
Predictive RC at T0
Retrospective RC at T2+
prediction vs outcome -> calibration data
calibrated pattern -> Baldwin-cycle seed
```

Alignment dynamics should import this shape.

The system should eventually treat an alignment-control record not only as a note, but as a calibration object:

- What did we expect?
- What did we observe?
- What route did we choose?
- Did that route work?
- What should that teach future routing?

That is how scattered feedback becomes self-improvement instead of bookkeeping.

### 6. The next artifact should be a theory note, not automation

The immediate next step should be:

```text
enes/alignment_dynamics.md
```

It should define:

- alignment state;
- alignment signal;
- signal lifecycle;
- evidence maturity;
- control action;
- control outcome;
- calibration;
- how existing operations map into the lifecycle;
- what remains deferred.

It should explicitly not define:

- a generic runner;
- automatic route selection;
- numerical alignment scores;
- autonomy permission rules;
- a full self-maintenance architecture;
- a replacement for `alignment_control.md`.

The reason is practical. A runner or selector would need this theory first. Without it, automation would freeze arbitrary routing choices.

## Next Actions

### MUST

- **What:** Create `enes/alignment_dynamics.md` as a theory note.
  **Who:** Theory layer.
  **Gate:** Before adding another feedback-related protocol or automatic selector.
  **Why:** This gives the system a dynamic parent model before it accumulates more local feedback tools.

- **What:** In `enes/alignment_dynamics.md`, define the lifecycle `state -> signal -> evidence maturity -> control action -> outcome -> calibration -> updated state`.
  **Who:** Theory layer.
  **Gate:** Same artifact.
  **Why:** This lifecycle is the missing bridge between static alignment records and future control policy.

- **What:** Include a section mapping existing operations into the lifecycle.
  **Who:** Theory layer.
  **Gate:** Same artifact.
  **Why:** The user needs to see why checkpoint, reflect, outcome review, loop diagnose, navigation, materialization, and meta-loop are not random separate concepts.

### COULD

- **What:** After `enes/alignment_dynamics.md` exists, run one MVL+ inquiry on whether stable parts should be promoted into `homegrown/contracts/alignment_control.md`.
  **Who:** Contract layer.
  **Gate:** After the theory note is created and reviewed.
  **Why:** The contract should import only stable vocabulary, not the whole theory.

- **What:** Use `alignment_dynamics.md` to review `outcome_review.md`.
  **Who:** Protocol layer.
  **Gate:** After at least one real outcome-review use or a concrete simulated example.
  **Why:** Outcome review is the easiest place to test evidence maturity and route calibration.

### DEFERRED

- **What:** Build a generic alignment runner or automatic route selector.
  **Gate:** Revive after at least 10 alignment-control records across at least three operation types show stable route patterns.
  **Why (if revived):** At that point the system may have enough evidence to automate simple routing without arbitrary control logic.

- **What:** Create `self_maintenance.md` as a broad parent architecture.
  **Gate:** Revive after `alignment_dynamics.md` has been used to interpret at least 5 real alignment-control or outcome-review records.
  **Why (if revived):** Self-maintenance is the larger program, but it should not swallow the first dynamics artifact.

- **What:** Create `selector.md`.
  **Gate:** Revive after navigation maps and alignment-control records both exist for at least 5 completed inquiries.
  **Why (if revived):** Selection needs signal maturity and route outcome evidence; otherwise it becomes hidden human judgment in protocol form.

## Reasoning

The "feedback is the parent" model was refined, not killed. It correctly named expected-vs-observed comparison as a shared mechanism, but it did not explain alignment as the deeper condition or time as the source of evidence maturity.

The "alignment is the parent" model survived but needed refinement. It correctly placed feedback inside alignment, but the current contract is mostly static. It gives vocabulary for records, not a theory of signal movement.

Creating another sibling protocol was killed. A `process_review.md`, `signal_lifecycle.md`, or `selector.md` may become useful later, but another local artifact would not solve the theoretical scattering.

Expanding `alignment_control.md` immediately was killed. That file is useful because it is a thin shared contract. Turning it into a broad theory document would make it harder to use.

Building a generic runner or selector was killed for now. The selector is real future work, but selection needs control theory first.

`alignment_dynamics.md` survived because it names the exact missing level: the dynamic control layer between static records and future automation.

`cognitive_control.md` survived as a framing term but was not selected as the first artifact name. It is accurate, but broader and easier to overexpand.

`signal_lifecycle.md` survived as a section inside `alignment_dynamics.md`. It is too narrow to carry the whole theory.

`self_maintenance.md` survived as the larger long-term program, but it is too broad for the current next step.

## Open Questions

### Monitoring

- After `enes/alignment_dynamics.md` is created, check whether future discussions about reflect, outcome review, loop diagnose, navigation, and materialization become easier to place in one model.

- After 5 real alignment-control or outcome-review records, check whether "evidence maturity" is actually useful for deciding routes.

### Blocked

- Automatic route selection is blocked until real records show stable signal-to-action patterns.

- Structural validation of this inquiry was not run because `tools/structural_check.sh` is unavailable in this repo.

### Research Frontiers

- The exact control policy for future autonomous selection remains open.

- The relation between alignment dynamics and `enes/thinking_space_dynamics.md` needs careful integration so the system does not duplicate Predictive/Retrospective RC concepts under different names.

### Refinement Triggers

- If `enes/alignment_dynamics.md` becomes too broad, split it into a smaller signal lifecycle note and a deferred self-maintenance note.

- If `alignment_dynamics.md` produces no new clarity after 3 concrete uses, treat it as explanatory but not operational and do not promote it into `homegrown/contracts/`.

- If evidence maturity cannot be applied cleanly to outcome review and loop diagnose, rerun MVL+ on whether the missing concept is actually selector policy rather than dynamics.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Ran the full MVL+ loop sequentially.

  Answer: reflect should stay a discipline for now, but as a trial-gated boundary discipline, not a default MVL/MVL+ stage.
  It has its own bounded method: process-alignment observation over completed loop artifacts. loop_diagnose is different
  because it is mostly a protocol that frames a full MVL+ diagnostic inquiry over a correction chain.

  The protocol idea is valid, but deferred. Create process_review.md only if real reflect runs show trigger/storage/routing
  complexity, or if direct reflection keeps needing full E -> S -> D -> I -> C depth.

  Finding: devdocs/inquiries/2026-05-02_11-34__reflect_discipline_vs_mvl_protocol/finding.md

okay i understand but i feel like we are missing some core understanding, might be regarding alignment and feedback that creates this scattered feedback logic, and they are not unifying in theory too?

now i want to focus on what kind of thing we might be missing , even tho we cant find what we are missing we might know what kind of thing (unifying theory, etc) it is and it is a good start
```

</details>
