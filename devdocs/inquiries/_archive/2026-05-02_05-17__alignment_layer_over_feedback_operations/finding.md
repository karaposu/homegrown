---
status: active
refines: devdocs/inquiries/2026-05-02_04-58__feedback_family_reflect_outcome_loop_diagnose/finding.md
---
# Finding: alignment_layer_over_feedback_operations

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-02_04-58__feedback_family_reflect_outcome_loop_diagnose/finding.md`

**Revision trigger:** The user noticed that the deeper common structure between `reflect`, `outcome_review`, and `loop_diagnose` is not only feedback. It is alignment.

**What's preserved:** The previous feedback-family finding was right that `reflect`, `outcome_review`, `loop_diagnose`, and checkpoint should not be treated as unrelated tools.

**What's changed:** Feedback should not be the top-level parent concept. Alignment is the top-level architecture; feedback is the control mechanism inside it.

**What's new:** `reflect`, `outcome_review`, and `loop_diagnose` should be framed as alignment-insurance operations. They protect, inspect, or restore alignment at different boundaries.

**Migration:** Replace the earlier next step "`feedback.md` first, then `outcome_review.md`" with "`alignment_control.md` first, then `outcome_review.md` as outcome-alignment insurance."

## Question

Are `reflect`, `outcome_review`, and `loop_diagnose` best understood as alignment insurance operations, and how should that refine the feedback-family architecture?

The goal is to use AlignStack's alignment layers and the older alignment-in-SIC discussion to decide whether feedback is the parent concept, alignment is the parent concept, or the two should be organized differently.

## Finding Summary

- The user is right: the deeper parent concept is **alignment**, not feedback.

- Feedback remains important, but it is the control mechanism inside alignment: make the desired state explicit, make the current state visible, measure the difference, compare, then route correction.

- `reflect`, `outcome_review`, and `loop_diagnose` are best understood as **alignment-insurance operations**:
  - `reflect` is process-alignment insurance;
  - `outcome_review` is outcome/use-alignment insurance;
  - `loop_diagnose` is causal alignment diagnosis;
  - checkpoint / Primitive RC is immediate structural alignment insurance.

- Alignment should not be implemented as one centralized checkpoint, one sidecar `_alignment.md`, or one universal runner. It should be distributed through the whole system.

- The next materialization should be a thin `homegrown/protocols/alignment_control.md`, followed by `homegrown/protocols/outcome_review.md` as the first new insurance mode.

## Finding

### 1. Alignment is the architecture; feedback is the control loop

AlignStack's six layers define where work can lose alignment:

```text
L0 Workspace
L1 Task intent/depth
L2 Task scope
L3 Action-space
L4 Action-set
L5 Coherence
L6 Outcome
```

AlignStack's four pillars define what alignment needs:

```text
explicitness -> visibility -> measurement -> comparison
```

Feedback is the operational loop produced by those pillars. It compares desired state and observed state, detects a delta, and routes correction.

So the previous feedback-family model was useful, but one level too low. Feedback is not the parent of alignment. Alignment is the parent; feedback is how alignment becomes observable and correctable.

### 2. SIC is already an alignment-establishment chain

The older alignment-in-SIC finding already made the critical point: the SIC loop is the alignment chain from another angle.

Sensemaking establishes workspace, task, and scope alignment. Innovation establishes action-space and action-set alignment. Critique establishes coherence and outcome alignment.

This means alignment is not an add-on after the loop. The loop itself builds alignment.

The insurance operations come in because alignment can drift, fail, or be insufficiently measured.

### 3. Reflect, outcome review, and loop diagnose insure different alignment boundaries

`reflect` runs after a thinking loop and asks whether the reasoning process maintained alignment. It can notice cross-step leaks, human corrections, weak process, and answer-goal drift. That is process-alignment insurance.

`outcome_review` should run after a finding, branch, protocol edit, or materialized artifact has been used. It asks whether the result stayed aligned with the original intent in downstream reality. That is outcome/use-alignment insurance.

`loop_diagnose` should run when there is enough evidence to localize an alignment failure. It compares a weak prior result, a human correction, and a later improved result. That is causal alignment diagnosis.

Checkpoint / Primitive RC is cheaper and earlier. It checks whether a discipline output matches structural requirements before the next stage builds on it. That is immediate structural alignment insurance.

### 4. Alignment must be distributed

The user is right that alignment cannot live in one point. If it does, it becomes a late gate that notices failures after misalignment has already propagated.

The long-term shape should be system-wide:

```text
alignment layers everywhere
  + mode awareness
  + feedback/control records
  + insurance operations at boundaries
  + escalation when drift is unclear or severe
```

Early implementation can be small, but it must preserve this shape.

That means no centralized `_alignment.md` sidecar file for every inquiry. The old alignment-in-SIC finding already killed that as bureaucracy. Alignment state should be embedded into existing artifacts and referenced by alignment-control records.

### 5. The revised next step

The prior plan was:

```text
feedback.md -> outcome_review.md
```

The revised plan should be:

```text
alignment_control.md -> outcome_review.md
```

`alignment_control.md` should be a thin parent contract. It should define:

- the six alignment layers;
- mode metadata;
- the feedback/control record fields;
- the insurance operation table;
- escalation routes.

It should explicitly say that it is not the whole alignment system and not a universal runner.

`outcome_review.md` should then implement the first new mode: outcome-alignment insurance.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/alignment_control.md`.
  **Who:** Homegrown protocol layer.
  **Gate:** Before creating `homegrown/protocols/outcome_review.md`.
  **Why:** This prevents feedback from becoming the wrong parent abstraction and gives outcome review the correct layer/mode vocabulary.

- **What:** In `alignment_control.md`, define the minimal alignment-control record.
  **Who:** Alignment-control materialization.
  **Gate:** Same materialization as `alignment_control.md`.
  **Why:** Records need at least `alignment_layer`, `mode`, `expected`, `observed`, `delta`, `evidence`, `confidence`, and `route`.

- **What:** Create `homegrown/protocols/outcome_review.md` as outcome-alignment insurance.
  **Who:** Homegrown protocol layer.
  **Gate:** After `alignment_control.md` exists.
  **Why:** The system still needs after-use outcome checks, but they should be framed as L6 outcome alignment, not generic feedback.

### COULD

- **What:** Later patch `reflect` to call itself process-alignment insurance.
  **Who:** Reflect spec.
  **Gate:** After `alignment_control.md` exists.
  **Why:** This clarifies reflect's role without making reflect own all alignment.

- **What:** Later patch `loop_diagnose` to call itself causal alignment diagnosis.
  **Who:** Loop diagnose protocol.
  **Gate:** After `alignment_control.md` exists.
  **Why:** This clarifies that loop diagnose is escalation, not routine review.

- **What:** Let navigation read alignment-delta records as process/context signals.
  **Who:** Navigation integration.
  **Gate:** After 3-5 alignment-control records exist.
  **Why:** Navigation should eventually choose next directions from observed alignment debt.

### DEFERRED

- **What:** Build the full layer × mode alignment runtime or six-agent architecture.
  **Gate:** Revive after manual alignment-control records prove useful across at least 10 real inquiries or materializations.
  **Why (if revived):** Continuous alignment monitoring is the long-term shape, but building it now would be too large.

- **What:** Add per-layer numerical alignment scores.
  **Gate:** Revive after 30+ records exist with comparable layer/mode outcomes.
  **Why (if revived):** Scores need calibration data; otherwise they create false precision.

- **What:** Create a per-inquiry `_alignment.md` sidecar file.
  **Gate:** Do not revive unless existing artifacts cannot carry alignment metadata without duplication.
  **Why (if revived):** The old alignment-in-SIC finding already showed this is likely bureaucracy.

## Reasoning

Keeping the prior `feedback.md` plan was refined, not killed. It correctly identified the shared expected-vs-observed control kernel. It failed only as hierarchy: feedback is not the top-level parent.

Creating a full alignment runtime now was killed for v1. The HomeGrown Agent alignment perspective is likely the long-term shape, but six-layer continuous monitoring, mode state, and autonomy policy are too large before manual records prove value.

Patching existing tools without a parent contract was refined. It avoids adding a file, but it risks inconsistent vocabulary across reflect, outcome review, and loop diagnose.

Creating `alignment_control.md` survived because it names the deeper root while keeping the artifact thin. The key condition is that it must define a contract, not a centralized runner.

Creating `outcome_review.md` after `alignment_control.md` survived as the first concrete insurance mode. It preserves the previous breakthrough while anchoring it correctly in alignment.

## Open Questions

### Monitoring

- After `alignment_control.md` exists, check whether future inquiries stop treating feedback, reflection, outcome review, and diagnosis as unrelated concepts.

- After 3-5 outcome-review records, check whether `alignment_layer` and `mode` fields make routing clearer than generic feedback fields alone.

### Blocked

- Exact record storage is blocked until `alignment_control.md` is materialized.

- Structural validation of this inquiry was not run because `tools/structural_check.sh` is unavailable or not executable in this repo.

### Refinement Triggers

- If `alignment_control.md` grows into a broad theory document instead of a thin operational contract, split theory from protocol.

- If outcome review needs fields that do not fit the alignment-control record, update the parent record rather than forcing bad fit.

- If users still reach for `feedback` as the parent term after this change, add an explicit note: feedback is the control loop of alignment, not the parent architecture.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i also notice the commmon thing between these 3 feedback related operations. it is alignment . go and read /Users/ns/Desktop/projects/vibe-driven-development/src/README.md it mentions 

1. **Workspace Alignment** — The environment and context aren't set up correctly
2. **Task Alignment** — The task is not understood well in terms of intent, depth and scope. 
3. **Action-Space Alignment** — AI doesn't know what action space should be used
4. **Action-Set Alignment** — AI doesn't understand what set of actions is preferable and feasible
5. **Coherence Alignment** — AI doesn't understand how the actions taken disturb existing alignments
6. **Outcome Alignment** — AI doesn't understand how actions taken and expected results are in mismatch

and i think this is the key underlying thing. reflect, outcome, loop diagnosis are all aligment insurance operations. 

i think we should analyze them in this way and make another conclusion.  

and i think, alignment is not something partial or part but a layer which touches every where and always active. and if we try to make it only one point in whole system this is not so good. At first we might have to but in the long run it should be something with the shape of the whole system we are buiidlign. 

u should also read /Users/ns/Desktop/projects/vibe-driven-development/devdocs/inquiries/alignment_in_sic_loop/finding.md 

it is an old version discussion but might contain some insights as well 

take your time and run this loop sequentially without subagents.  This is important inquiry
```

</details>
