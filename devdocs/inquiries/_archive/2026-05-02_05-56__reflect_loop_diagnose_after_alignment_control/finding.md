---
status: active
---
# Finding: reflect_loop_diagnose_after_alignment_control

## Question

With `alignment_control.md` and `outcome_review.md` now created, what should happen to `reflect` and `loop_diagnose`, given that loop diagnose has worked well and reflect has not yet been used?

The goal is to decide whether to patch, leave alone, integrate, defer, or retire `reflect` and `loop_diagnose` while preserving the new alignment-insurance architecture.

## Finding Summary

- `loop_diagnose` should stay structurally intact. It is already working because it has a narrow trigger, strong evidence requirements, and uses MVL+ as its reasoning engine.

- `loop_diagnose` should receive only a light alignment-control patch:
  - role: causal alignment diagnosis;
  - contract: `homegrown/contracts/alignment_control.md`;
  - output fields: affected alignment layer, mode context, attribution confidence, route, and maintenance candidate.

- `reflect` should not be retired. It covers process-alignment insurance, which `outcome_review` and `loop_diagnose` do not replace.

- `reflect` should not be auto-run after every MVL/MVL+ yet. That would likely create over-reflection, record flood, and ignored artifacts before value is proven.

- `reflect` should get a role/trigger/adoption patch:
  - role: process-alignment insurance;
  - contract: `homegrown/contracts/alignment_control.md`;
  - trigger rules;
  - optional one alignment-control record per run;
  - trial gate before runner integration.

- `outcome_review` should become the practical router:
  - process issue -> `reflect`;
  - unclear causal attribution with correction-chain evidence -> `loop_diagnose`.

## Finding

### 1. Loop diagnose should be preserved, not redesigned

`loop_diagnose` is working because its design is narrow. It does not try to be a general feedback tool. It frames a specific kind of MVL+ inquiry: a weak prior result, a human correction, and a later improved result.

That narrowness is valuable. It gives loop diagnose strong evidence boundaries and prevents overconfident root-cause claims.

The new alignment-control contract does not require a rewrite. It only gives loop diagnose better language for its existing output. Instead of saying only "Sensemaking likely failed" or "framing likely failed," loop diagnose can also say:

```text
alignment_layer: L2
mode: diagnostic
confidence: medium
route: revise_protocol or monitor
```

That is an enrichment, not a redesign.

### 2. Reflect should stay, but it needs a real use path

`reflect` has not been used so far. That is real evidence, but it is not enough to retire it.

Reflect covers a boundary that the other operations do not cover directly: process alignment after a completed thinking loop. It asks whether the loop itself maintained alignment: whether the human had to compensate, whether later steps found things earlier steps should have found, whether a stage was thin, and whether the final answer drifted from the goal.

`outcome_review` checks downstream use after a result has been used. `loop_diagnose` localizes causal failure from correction-chain evidence. Neither replaces reflect's process-alignment role.

The problem with reflect is adoption. Its current trigger is broad: "after a completed SIC run." Broad optional triggers get skipped. Reflect needs concrete triggers and a trial period.

### 3. Do not auto-run reflect yet

Automatic reflection after every MVL/MVL+ run sounds attractive because every loop could learn from itself.

But reflect's own failure modes warn against over-reflection. If it runs after every inquiry before proving value, it may generate generic observations, extra files, and process noise.

The better rule is:

```text
Suggest or run reflect only when process-alignment signals exist.
```

Examples of process-alignment signals:

- human correction during the loop;
- answer-goal alignment concern;
- critique found something sensemaking or innovation should have caught;
- repeated weak stage pattern across inquiries;
- outcome review suggests the result failed because the process missed something;
- milestone or period review needs process learning.

### 4. Outcome review should route to the right insurance operation

`outcome_review` should not absorb reflect or loop diagnose.

It should route:

- to `reflect` when the observed outcome points to process weakness;
- to `loop_diagnose` when attribution is unclear and correction-chain evidence exists;
- to `navigation` when the review creates multiple possible next moves;
- to `materialize` when the review points to a concrete artifact or protocol change;
- to `monitor` or `no-op` when action is not justified.

This keeps each operation specialized.

### 5. The practical next edits

The next materialization should be small.

For `loop_diagnose.md`, add:

- a role statement: `LOOP_DIAGNOSE is causal alignment diagnosis`;
- a contract reference to `homegrown/contracts/alignment_control.md`;
- alignment-layer and mode fields in the required diagnostic output;
- a note that it should emit compatible alignment-control route/maintenance candidates when useful.

For `reflect`, add:

- a role statement: `reflect is process-alignment insurance`;
- a contract reference to `homegrown/contracts/alignment_control.md`;
- trigger rules;
- optional alignment-control record output;
- a usage gate: do not add mandatory runner integration until real reflect runs prove value.

## Next Actions

### MUST

- **What:** Patch `homegrown/protocols/loop_diagnose.md` lightly.
  **Who:** Homegrown protocol layer.
  **Gate:** Before using loop_diagnose as an alignment-control record source.
  **Why:** Keeps the working protocol intact while making its outputs compatible with the new alignment-control contract.

- **What:** Patch `homegrown/reflect/SKILL.md` and `homegrown/reflect/references/reflect.md` with role and trigger guidance.
  **Who:** Reflect discipline.
  **Gate:** Before trying reflect on selected inquiries.
  **Why:** Reflect needs a clear use path; otherwise it remains a theoretically good but unused tool.

- **What:** Trial reflect on 3-5 selected completed inquiries with process-alignment signals.
  **Who:** Human plus MVL/MVL+ operator.
  **Gate:** After the reflect patch.
  **Why:** Reflect should earn runner integration through observed usefulness.

### COULD

- **What:** Add a non-blocking MVL/MVL+ post-completion suggestion when process-alignment signals are visible.
  **Who:** MVL/MVL+ runner specs.
  **Gate:** After at least 3 useful reflect runs.
  **Why:** This would make reflect discoverable without making it mandatory.

- **What:** Use reflect periodically over batches of inquiries.
  **Who:** Human or future maintenance mode.
  **Gate:** After 5-10 inquiries accumulate.
  **Why:** Batch reflection may reveal patterns that single-inquiry reflection misses.

### DEFERRED

- **What:** Mandatory reflect after every MVL/MVL+.
  **Gate:** Revive only after at least 10 triggered reflect runs, at least 3 useful maintenance candidates, and low record-noise rate.
  **Why (if revived):** Automatic reflection may become valuable, but it must prove value first.

- **What:** Retire reflect.
  **Gate:** Revive only if 5 triggered reflect runs produce no useful process insight, maintenance candidate, or alignment-control record.
  **Why (if revived):** Unused tools should not remain forever, but reflect deserves a proper trial.

- **What:** Rewrite loop_diagnose around alignment-control vocabulary.
  **Gate:** Do not revive unless the current protocol fails to express alignment-layer/mode attribution after the light patch.
  **Why (if revived):** A rewrite is unnecessary while the current protocol works.

## Reasoning

Leaving both completely unchanged was rejected. It avoids churn, but it leaves both disconnected from the new alignment-control contract. That is acceptable for a few days, not as a design decision.

Lightly patching both survived, with refinement. Loop diagnose only needs light compatibility. Reflect needs more than a label change because its actual problem is missing triggers and missing adoption path.

Preserving loop diagnose while patching reflect with triggers survived first. This respects actual usage evidence: loop diagnose works; reflect is unproven in practice.

Auto-running reflect after every MVL/MVL+ was killed for now. It would add cost and likely produce over-reflection before reflect has proven value.

Retiring reflect was killed for now. Reflect covers process-alignment insurance, a boundary not covered by outcome review or loop diagnose. Non-use should trigger a trial, not immediate deletion.

Periodic reflect survived as a future secondary mode. It may be useful after a set of inquiries or a milestone, but it should not replace trigger-based single-inquiry reflection.

## Open Questions

### Monitoring

- After 3 triggered reflect runs, check whether reflect produced any non-obvious process insight or maintenance candidate.

- After 5 triggered reflect runs, decide whether reflect should stay opt-in, receive runner suggestions, or be retired.

- After the loop_diagnose patch, check whether alignment-layer/mode fields improve diagnostic clarity without making findings heavier.

### Blocked

- Reflect trial is blocked until reflect has a small alignment-control/trigger patch.

- Structural validation of this inquiry was not run because `tools/structural_check.sh` is unavailable or not executable in this repo.

### Refinement Triggers

- If reflect outputs mostly generic "S/I/C were fine" observations, tighten trigger criteria or retire it.

- If outcome_review repeatedly routes to reflect but reflect does not produce actionable process candidates, route process concerns to loop_diagnose or direct MVL+ inquiries instead.

- If loop_diagnose becomes heavier or less useful after alignment-control patching, revert to its narrower wording and keep alignment fields optional.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
witht these recent understandings, what should happend to reflect or loop_diagnose? loop diagnose was working fine, reflect was not used till now.
```

</details>
