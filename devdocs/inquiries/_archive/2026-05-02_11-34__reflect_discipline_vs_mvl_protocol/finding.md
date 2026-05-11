---
status: active
refines: devdocs/inquiries/2026-05-02_05-56__reflect_loop_diagnose_after_alignment_control/finding.md
---
# Finding: reflect_discipline_vs_mvl_protocol

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-02_05-56__reflect_loop_diagnose_after_alignment_control/finding.md`

**Revision trigger:** The user questioned whether `reflect` should really remain a discipline, or whether it should instead become a protocol that frames a normal MVL/MVL+ inquiry, similar to `homegrown/protocols/loop_diagnose.md`.

**What's preserved:** The prior finding was right that `reflect` should not be retired yet, should not auto-run after every MVL/MVL+ loop, and should be framed as process-alignment insurance.

**What's changed:** The discipline classification is now explicitly provisional. `reflect` should remain a boundary discipline only while a small trial proves that its lightweight method produces useful process-alignment observations.

**What's new:** A clear conversion gate now exists: if direct `reflect` repeatedly needs full E -> S -> D -> I -> C reasoning, or produces generic/noisy observations, it should be converted into a protocol-wrapped MVL+ process-review operation or retired.

**Migration:** Do not create `process_review.md` immediately. First patch and trial `reflect`. Revisit a protocol wrapper after real use evidence exists.

## Question

Should `reflect` remain a Homegrown discipline, or should it instead become a protocol-wrapped MVL/MVL+ operation for process-alignment review?

The goal is to produce a clear taxonomy decision the system can act on: what `reflect` should be now, what should trigger it, whether a separate protocol is needed, and what evidence would justify changing its type later.

## Finding Summary

- `reflect` should remain a discipline for now, but specifically as a **boundary discipline**. Boundary discipline means it runs around a completed loop; it is not a required stage inside every MVL/MVL+ pipeline.

- The reason is method-specific. `reflect` already has a bounded cognitive method: read completed loop artifacts, inspect human interventions, cross-step leaks, step quality, surprises, and answer-goal alignment, then produce process observations.

- `loop_diagnose` is different. `homegrown/protocols/loop_diagnose.md` is a protocol because it mostly frames a special MVL+ inquiry over a correction chain. It does not claim a stable internal diagnostic method separate from MVL+.

- A future `process_review.md` protocol may become useful, but it should not be created yet. The immediate missing evidence is not another file; it is 3 to 5 real `reflect` runs.

- MVL+ should be the escalation path when process review becomes open-ended diagnosis. If the question is "why did this loop fail, and what root cause or protocol change follows?", that is too deep for lightweight reflect and should route to MVL+ or `loop_diagnose`.

- The practical classification should be trial-gated: keep, wrap, convert, or retire `reflect` based on observed usefulness.

## Finding

### 1. The real distinction is operation type, not file type

The tempting comparison is:

```text
loop_diagnose = protocol wrapping MVL+
therefore reflect should also be protocol wrapping MVL+
```

That comparison is incomplete.

`loop_diagnose` exists because correction-chain diagnosis is open-ended. It must compare an earlier weak inquiry, a human correction, and a later improved inquiry. It then has to infer which stage, framing move, or protocol likely failed. That needs exploration, sensemaking, decomposition, innovation, and critique. So the protocol does not replace MVL+; it frames a special MVL+ run.

`reflect` is narrower. Its current reference document defines a specific process-review operation. It looks at a completed loop and asks whether the process stayed aligned: where the human had to compensate, whether a later step found something an earlier step should have found, whether a stage was thin, whether something surprising happened, and whether the answer matched the original goal.

That is a bounded operation. It can be a discipline.

### 2. Discipline does not mean default pipeline stage

The word "discipline" is dangerous if it suggests:

```text
MVL+ = Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique -> Reflect
```

That should not happen now.

`reflect` should be classified as a boundary discipline. It runs after a meaningful work unit when there is a process-alignment signal. It is closer to navigation as a between-loop operation than to sensemaking as a required in-loop stage.

This resolves the user's concern about complexity. Keeping `reflect` as a discipline does not mean adding it to every loop. It means preserving a lightweight process-observation operation when the evidence calls for it.

### 3. A protocol wrapper is plausible later, but premature now

A protocol is useful when the main problem is source authority, input normalization, target storage, routing, or trace shape.

That may become true for process review. A future `homegrown/protocols/process_review.md` could decide:

- whether to run direct `reflect`;
- whether to run full MVL+;
- where to store reflection records;
- how to emit `alignment_control.md` compatible records;
- when to route to `loop_diagnose`.

But creating that protocol now would be adding structure before evidence. The current problem is that `reflect` has not been tried enough. The missing artifact is not a protocol; it is a small trial set.

### 4. The safe design is trial-gated

The correct near-term state is:

```text
reflect = process-alignment insurance boundary discipline
auto-run = no
protocol wrapper = deferred
MVL+ = escalation path
classification = revisable after trials
```

Run `reflect` on 3 to 5 completed inquiries where process-alignment signals exist. Good triggers include:

- the human corrected the loop;
- critique caught something sensemaking or innovation should have caught;
- the final answer drifted from the original goal;
- an outcome review suggests the result failed because the process missed something;
- repeated stage weakness appears across inquiries.

If those runs produce crisp process observations, useful memory candidates, or good escalation routes, keep `reflect` as a discipline.

If those runs are useful but source authority, storage, or routing becomes messy, create `process_review.md` as a protocol wrapper that invokes `reflect`.

If direct `reflect` repeatedly needs full MVL+ depth to be useful, convert process review into a protocol-wrapped MVL+ operation.

If direct `reflect` mostly produces generic "the steps were fine" output, retire it or tighten its trigger rules.

### 5. The taxonomy should be explicit

The clean taxonomy is:

```text
homegrown/contracts/alignment_control.md
  shared alignment vocabulary and record contract

homegrown/protocols/outcome_review.md
  after-use outcome-alignment insurance

homegrown/protocols/loop_diagnose.md
  correction-chain protocol that frames MVL+

homegrown/reflect/
  boundary discipline for lightweight process-alignment observation

future homegrown/protocols/process_review.md
  optional wrapper if trigger, depth, storage, or routing complexity proves real
```

This keeps the shared alignment layer without merging all alignment operations into one oversized procedure.

## Next Actions

### MUST

- **What:** Patch `homegrown/reflect/SKILL.md` and `homegrown/reflect/references/reflect.md` to call `reflect` a process-alignment insurance boundary discipline, not a generic learning step.
  **Who:** Reflect discipline.
  **Gate:** Before running the first deliberate reflect trial.
  **Why:** The current wording still implies a broad learning identity. The new wording should narrow it and prevent automatic-run confusion.

- **What:** Add trigger rules and trial gates to the reflect documentation.
  **Who:** Reflect discipline.
  **Gate:** Same patch as the role change.
  **Why:** Without triggers, `reflect` will either remain unused or be overused.

- **What:** Run `reflect` on 3 to 5 completed inquiries that show process-alignment signals.
  **Who:** Human plus Homegrown operator.
  **Gate:** After the reflect patch.
  **Why:** Usage evidence should decide whether `reflect` stays a discipline, gets a protocol wrapper, converts to MVL+, or retires.

### COULD

- **What:** Add a non-blocking MVL/MVL+ post-completion suggestion when a loop contains visible process-alignment signals.
  **Who:** MVL/MVL+ runner specs.
  **Gate:** After at least 3 useful reflect runs.
  **Why:** This would make reflect discoverable without making it mandatory.

- **What:** Design `homegrown/protocols/process_review.md`.
  **Who:** Protocol layer.
  **Gate:** Only if reflect trials show that trigger, depth, storage, or routing rules are too large for the reflect discipline docs.
  **Why:** A protocol wrapper may be useful, but only if it solves observed governance complexity.

### DEFERRED

- **What:** Convert `reflect` into a protocol-wrapped MVL+ operation.
  **Gate:** Revive if 3 to 5 reflect trials show that direct reflection repeatedly needs full E -> S -> D -> I -> C reasoning to produce useful output.
  **Why (if revived):** At that point, reflect's direct method would be insufficient and MVL+ should become the reasoning engine.

- **What:** Retire `reflect`.
  **Gate:** Revive if 5 triggered reflect runs produce no useful process insight, memory candidate, escalation route, or alignment-control record.
  **Why (if revived):** A theoretical discipline that produces no useful evidence should not remain active.

- **What:** Auto-run `reflect` after every MVL/MVL+ loop.
  **Gate:** Revive only after at least 10 triggered reflect runs show a low noise rate and repeated value.
  **Why (if revived):** Automatic reflection may eventually help learning, but early automation would likely create record flood.

## Reasoning

Keeping `reflect` as a normal always-available discipline survived only after refinement. The original form, "reflect is the learning step," was too broad. The surviving form is "reflect is process-alignment insurance at the boundary after completed work."

Converting `reflect` immediately into a protocol-wrapped MVL+ operation was rejected for now. It respects primitive minimalism, but it pays full MVL+ cost for routine process observation and discards an existing bounded method before testing it.

Creating a split `process_review.md` protocol plus `reflect` discipline survived as a future design. It is not justified yet because the governance problem is predicted, not observed. The right gate is trial evidence.

Merging `reflect` with `loop_diagnose` was killed. Reflect observes a completed loop's process. Loop diagnose compares correction-chain evidence for causal attribution. They share alignment vocabulary, but they do not share trigger, evidence shape, or method.

Retiring `reflect` was killed for now. The fact that `reflect` has not been used is evidence of adoption weakness, not proof that the process-alignment boundary is unnecessary.

The final survivor is the trial-gated boundary discipline model. It gives `reflect` a real chance while preserving a hard path to convert or retire it if it does not work.

## Open Questions

### Monitoring

- After 3 triggered reflect runs, check whether the outputs contain non-obvious process insight or only generic summaries.

- After 5 triggered reflect runs, decide whether `reflect` should stay as a discipline, gain a `process_review.md` protocol wrapper, convert to MVL+, or retire.

### Blocked

- Final classification is blocked on real reflect outputs. Documentation alone cannot prove whether the discipline is useful in practice.

- Structural validation of this inquiry was not run because `tools/structural_check.sh` is unavailable in this repo.

### Refinement Triggers

- If users repeatedly ask whether `reflect` is a protocol, add a taxonomy note to the shared discipline/protocol documentation.

- If `outcome_review` often routes to `reflect` but reflect cannot act on those routes, revive `process_review.md`.

- If direct `reflect` starts producing source edits or causal diagnosis directly, narrow it again or route those cases to MVL+/`loop_diagnose`.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

you said this

Yes, still as a discipline.

  But its identity should narrow from:

  reflect = generic learning step

  to:

  reflect = process-alignment insurance discipline

  So the type stays:

  homegrown/reflect/...

  not:

  homegrown/protocols/reflect.md

  Reason: reflect performs a cognitive operation. It reads a completed loop and reasons about process quality: human
  interventions, cross-step leaks, step quality, surprises, answer-goal alignment. That is not just routing or contract
  enforcement. It needs judgment.

  Clean taxonomy:

  alignment_control.md     = contract
  outcome_review.md        = protocol
  loop_diagnose.md         = protocol wrapping MVL+
  reflect                  = discipline

  What should change is its framing and triggers:

  Reflect is the process-alignment insurance discipline.
  Use it when a completed loop shows process-alignment signals.
  Do not auto-run it by default yet.

  So: keep reflect as a discipline, patch its description and reference docs to align with alignment_control.md.

but maybe reflect should be another MVL operation with a protocol ? we had a talk abuot this ? or it should be a discipline indeed?
```

</details>
