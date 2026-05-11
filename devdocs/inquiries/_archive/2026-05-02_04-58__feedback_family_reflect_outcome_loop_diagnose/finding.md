---
status: active
refines: devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md
---
# Finding: feedback_family_reflect_outcome_loop_diagnose

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md`

**Revision trigger:** The user noticed that `reflect`, `outcome_review`, and `loop_diagnose` are all feedback-like and may become unnecessary conceptual complexity if treated as unrelated mechanisms.

**What's preserved:** Homegrown still needs after-use outcome feedback before serious multihead or autonomous state management.

**What's changed:** `outcome_review` should not be materialized as an isolated new protocol first. A small parent feedback protocol should be defined first, then `outcome_review` should be created as the use-feedback mode under that parent.

**What's new:** The shared parent operation is feedback: compare expected behavior with observed behavior, record the delta and evidence, then route the result into memory, navigation, materialization, monitoring, or deeper diagnosis.

**Migration:** Treat the prior recommendation "`outcome_review.md` next" as refined to "`feedback.md` first, then `outcome_review.md` as a feedback mode."

## Question

Do `reflect`, `outcome_review`, and `loop_diagnose` share one underlying feedback operation, and if so how should Homegrown organize them without increasing conceptual complexity?

The goal is to clarify whether these should remain separate tools, merge into one mechanism, or become modes of a shared feedback architecture.

## Finding Summary

- The user is right: `reflect`, `outcome_review`, and `loop_diagnose` are all feedback mechanisms.

- The parent concept should be **feedback**, not `reflect`. Reflect is one feedback mode: process feedback after a completed cognitive loop.

- The shared feedback operation is:

```text
expected / intended / required
  vs
observed / actual / produced
  -> delta
  -> evidence
  -> confidence
  -> route
```

- The clean architecture is a feedback family:

```text
structural feedback = checkpoint / Primitive RC
process feedback    = reflect
use feedback        = outcome_review
causal feedback     = loop_diagnose
```

- Do not merge everything into `reflect`. That would overload reflect and break its identity as process reflection.

- Do not create one generic feedback command yet. That would likely become too abstract and weak.

- The next materialization should be `homegrown/protocols/feedback.md` first, then `homegrown/protocols/outcome_review.md` as the use-feedback mode.

## Finding

### 1. The underlying thing is feedback

The shared operation is not reflection. Reflection is narrower.

The shared operation is feedback: a boundary operation that compares what should have happened with what did happen, records evidence, and routes the result into future action.

This applies at several boundaries:

- after a discipline output is produced;
- after a loop completes;
- after a finding or artifact is used;
- after a correction chain reveals that an earlier loop likely failed.

The object being judged changes, but the operation shape stays stable.

### 2. Reflect is process feedback, not the parent category

`reflect` currently examines how a completed cognitive loop performed. It reads the loop outputs and asks where the process was strong, weak, corrected by the human, or misaligned with the original goal.

That is feedback, but it is feedback about process quality.

It should not directly absorb outcome review or loop diagnosis. Outcome review needs downstream-use evidence that may not exist when a loop completes. Loop diagnose needs correction-chain evidence: weak prior result, human correction, and later improved result.

If reflect owns all of that directly, it stops being a coherent process-reflection mechanism.

### 3. Outcome review is use feedback

`outcome_review` should observe whether a finding, branch, protocol edit, or materialized artifact worked after it was used.

Its question is not "did the reasoning process perform well?" Its question is:

```text
This was expected to produce X after use.
After use, did X happen?
If not, what mismatch appeared and what should we do next?
```

That is sibling feedback to reflect, not a subpart of reflect.

### 4. Loop diagnose is causal diagnostic feedback

`loop_diagnose` should remain an escalation mode.

It is needed when there is enough evidence to compare a weak prior loop, the user's correction, and a later improved inquiry. It asks which stage, protocol, framing step, or orchestration choice likely failed.

It should not run for every mismatch. It is deeper and more expensive than reflect or outcome review.

Outcome review can route to loop diagnose when attribution is unclear or when repeated feedback records show a pattern.

### 5. Checkpoint is structural feedback

The older `reflect_as_primitive_rc` finding already showed the same principle:

- checkpoint performs cheap structural checks;
- reflect integrates structural results later;
- ownership of quality awareness is different from execution of every check.

That pattern generalizes.

Checkpoint is structural feedback. Reflect is process feedback. Outcome review is use feedback. Loop diagnose is causal diagnostic feedback.

### 6. The simplification is shared contract, not merged execution

The right simplification is to define a small feedback parent protocol.

That parent protocol should define:

- the shared operation;
- shared fields;
- mode table;
- escalation rules;
- compatible record expectations.

It should not implement every feedback mode.

Each mode keeps its own procedure because each mode has different inputs, timing, cost, and evidence requirements.

### 7. Revised next step

The previous finding said the next load-bearing capability was `outcome_review`.

This finding refines that:

```text
1. Create homegrown/protocols/feedback.md
2. Create homegrown/protocols/outcome_review.md as the use-feedback mode
3. Later patch reflect and loop_diagnose to reference feedback.md vocabulary
```

This avoids adding `outcome_review` as a fourth isolated concept. It gives the user one parent mental model before adding the new child mode.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/feedback.md`.
  **Who:** Homegrown protocol layer.
  **Gate:** Before creating `homegrown/protocols/outcome_review.md`.
  **Why:** This prevents outcome review from becoming a standalone new concept and clarifies the shared feedback architecture.

- **What:** In `feedback.md`, define the v1 mode table.
  **Who:** Feedback protocol materialization.
  **Gate:** Same materialization as `feedback.md`.
  **Why:** The mode table lets the user see that checkpoint, reflect, outcome review, and loop diagnose are related but not identical.

- **What:** Create `homegrown/protocols/outcome_review.md` as the use-feedback mode.
  **Who:** Homegrown protocol layer.
  **Gate:** After `feedback.md` exists.
  **Why:** The system still needs after-use evidence, but it should inherit the feedback vocabulary.

### COULD

- **What:** Patch `homegrown/reflect/SKILL.md` and/or its reference file to mention that reflect is process-feedback mode.
  **Who:** Reflect materialization.
  **Gate:** After `feedback.md` exists and the wording is stable.
  **Why:** This reduces future confusion about whether reflect owns all feedback.

- **What:** Patch `homegrown/protocols/loop_diagnose.md` to mention that it is causal diagnostic feedback.
  **Who:** Loop diagnose materialization.
  **Gate:** After `feedback.md` exists.
  **Why:** This clarifies that loop diagnose is an escalation mode, not routine feedback.

### DEFERRED

- **What:** Build one generic feedback command or runner.
  **Gate:** Revive only after 10+ feedback records across at least two modes show stable trigger patterns.
  **Why (if revived):** A generic router may become useful later, but right now it would likely over-generalize.

- **What:** Merge outcome review or loop diagnose into reflect.
  **Gate:** Do not revive unless reflect's definition changes from process reflection to a broader feedback integrator and that change is explicitly accepted.
  **Why (if revived):** It would simplify invocation but risks breaking reflect's operational identity.

## Reasoning

Full separation was rejected because it duplicates concepts. Reflect, outcome review, and loop diagnose would each need their own vocabulary for evidence, mismatch, attribution, confidence, and maintenance candidates. That would increase the complexity the user is trying to reduce.

Merging everything into reflect was killed because reflect has a clear current object: the process of a completed cognitive loop. Outcome review and loop diagnose have different objects and different evidence requirements. Merging them into reflect would create a broad tool with a blurred identity.

Creating one generic feedback command was killed for v1 because it would likely become too abstract. The system does not yet have enough feedback records to know the right generic trigger and dispatch behavior.

The feedback family contract survived because it gives one parent mental model while keeping specialized execution. It matches the prior Primitive RC decision: quality signals can be unified at the conceptual and record layer without making one tool perform every check.

The refined sequence survived because it preserves the previous outcome-review insight while reducing conceptual sprawl. The system should create the parent `feedback.md` first, then implement `outcome_review.md` as one mode under that parent.

## Open Questions

### Monitoring

- After `feedback.md` and `outcome_review.md` exist, check whether users and future MVL+ runs stop confusing reflect, outcome review, and loop diagnose.

- After 5 use-feedback records, check whether the shared fields are sufficient for navigation and loop diagnose routing.

### Blocked

- Exact feedback record storage is blocked until `feedback.md` is materialized.

- Structural validation of this inquiry was not run because `tools/structural_check.sh` is unavailable or not executable in this repo.

### Refinement Triggers

- If `feedback.md` becomes long, abstract, or starts prescribing full procedures for every mode, split it back down to a minimal parent contract.

- If outcome review needs fields that do not fit the shared feedback kernel, update the kernel rather than forcing bad fit.

- If reflect users still expect reflect to own all feedback after `feedback.md` exists, reflect's description should be patched to say explicitly: "Reflect is process feedback, not the entire feedback layer."

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
| Thing | When it runs | What it judges |
  |---|---|---|
  | reflect | after a thinking loop completes | quality of the reasoning process |
  | outcome_review | after the output/artifact has been used | whether the result worked in reality |
  | loop_diagnose | when something went wrong and source is unclear | which discipline/protocol failed and why |

  Example:

  - MVL+ says: “branch protocol is good.”
  - reflect asks: “Did exploration/sensemaking/critique handle that inquiry well?”
  - We implement branch protocol.
  - Later we use branching and discover nested paths are confusing.
  - outcome_review asks: “The artifact was expected to make branching scalable; did it? What mismatch happened? What
    maintenance candidate follows?”

i feel like these 3 are related and maybe if we understand the underlying thing btween then we can re organize them in more clear way.  they are all feedbacks, and treating them as 3 seperate things causes increased complexity. might be correct way idk. But i would like to think deeper about this before proceeding further and adding more complexity to the system
```

</details>
