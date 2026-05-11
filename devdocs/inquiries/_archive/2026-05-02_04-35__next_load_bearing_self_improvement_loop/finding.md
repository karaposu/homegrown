---
status: active
---
# Finding: next_load_bearing_self_improvement_loop

## Question

What is the most important next capability after navigation and synthesis/materialization protocol for making Homegrown improve itself over time without becoming too complex to carry or comprehend?

The goal is to identify the next load-bearing build step, compare multihead and isolated comprehension against that step, and produce a practical recommendation for what to build next.

## Finding Summary

- The next most important capability is a minimal builder-loop assembly centered on an after-use `outcome_review` protocol.

- The core missing operation is not more branching, more parallelism, or a larger controller. The core missing operation is turning real use outcomes into durable evidence that future loops can inspect.

- The minimal loop should be:

```text
inquiry or artifact is used
  -> outcome review records expected vs actual behavior
  -> maintenance candidate or explicit no-op is created
  -> maintenance/Baldwin log indexes the candidate
  -> navigation reads the log
  -> branch/materialization handles selected next work
  -> later outcome review checks whether that work actually helped
```

- Multihead should be deferred. It increases breadth and throughput, but without outcome comparison and merge discipline it multiplies the amount of work the system must digest.

- Isolated comprehension should be refined, not rejected. The useful version is a state-comprehension layer that reads outcome records, branch trees, materialization traces, and maintenance backlog items. It should not become an autonomous manager before those records exist.

- Evaluation harnesses are important for domains with exact scoring, such as ARC. They are not a substitute for the general Homegrown feedback loop because Homegrown also needs to learn from protocol edits, branch results, user corrections, validation misses, and materialized artifacts.

## Finding

### 1. The next piece is feedback-before-scale

Homegrown already has the beginnings of a thinking engine. `MVL+` runs exploration, sensemaking, decomposition, innovation, and critique. Navigation maps possible next directions. Branch protocol gives follow-up inquiries a lineage structure. Materialization lifecycle describes how decisions become concrete files.

Those pieces create reasoning, optionality, topology, and artifacts. They do not yet create enough learning pressure from downstream use.

The next load-bearing capability should therefore be an after-use outcome review protocol. Its job is to record what a finding, branch, protocol edit, or materialized artifact was expected to do, what actually happened after it was used, what mismatch appeared, and what future improvement should be created from that evidence.

This is load-bearing because every later build action can feed it. It turns human corrections, artifact failures, validation misses, repeated critique kills, and branch outcomes into reusable training data for the system.

### 2. The protocol should be operational, not a new grand discipline

The missing operation is mostly a protocol problem. It needs source authority, stable fields, target records, routing outputs, and storage conventions.

A thinking discipline can analyze those records later. But the first missing thing is the record itself and the contract that says when it is created and what downstream protocols may do with it.

The v1 artifact should probably be named `homegrown/protocols/outcome_review.md`. `Retrospective calibration` is a good architectural phrase, but `outcome_review` is clearer as an operational protocol name.

### 3. The smallest useful v1 is a record plus a backlog

The minimal implementation should define:

- source authority: which finding, branch, materialization trace, or user observation triggered the review;
- expected effect: what the artifact or decision was supposed to improve;
- validation before use: tests, checks, or manual review that passed or failed before downstream use;
- actual use outcome: what happened after the artifact or decision was used;
- mismatch or surprise: where expectation and outcome diverged;
- likely attribution: discipline, protocol, artifact, validation, context, or user-assumption source, marked uncertain when uncertain;
- maintenance candidate: what should be improved next, or explicit no-op if the outcome was acceptable;
- route: navigation, branch inquiry, loop diagnose, materialization, test, consolidate, defer, or no-op.

The records should feed a discoverable maintenance log or Baldwin log. The exact path can be decided during materialization, but the log must be easy for navigation and later comprehension to read.

### 4. Why not multihead next

Multihead is a scaling mechanism. It helps once the system can create comparable branch records, rank or group branch outcomes, and merge lessons back into shared state.

Right now, serious multihead would increase the number of inquiry outputs faster than the system can learn from them. That is the wrong direction for the user's stated risk: building something larger than can be carried.

Multihead should be revived after outcome review exists and at least a few branch or materialization outcomes have been recorded in a comparable form.

### 5. Why not isolated comprehend as the controller next

The user is right that Homegrown needs something like an externalized project-state model. The user should not have to hold the entire structure, all open branches, all known failure patterns, and all possible next moves in their head.

But comprehension without outcome records can only summarize claims and documents. It cannot reliably know what worked, what failed, or what repeatedly wasted effort.

The better sequence is:

```text
outcome records first
  -> maintenance backlog
  -> state comprehension over evidence-backed records
  -> navigation with better context
```

Comprehension can become a strong assistant to navigation later. It should not be the first autonomous manager.

### 6. Why this matches the neural-network analogy

The user compared this to training neural networks: you do not directly hand-write the weights; you train on data.

For Homegrown, the training data is not a dataset of grids or labels. It is the history of what the system predicted, decided, built, validated, used, and then discovered to be right or wrong.

Outcome review is the data-creation step. Protocol edits, materialization changes, and discipline refinements are the later "weight updates." Without outcome data, future self-improvement is mostly self-reference.

### 7. The practical architecture

The next practical architecture should be:

```text
MVL/MVL+ finding
  -> navigation map
  -> branch or materialization
  -> artifact or child finding is used
  -> outcome_review record
  -> maintenance/Baldwin log
  -> navigation reads evidence-backed candidates
  -> selected candidate becomes branch or materialization
```

This is the smallest closed builder loop. It does not make Homegrown autonomous yet. It makes Homegrown learnable.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/outcome_review.md`.
  **Who:** Homegrown protocol layer.
  **Gate:** Before serious multihead, autonomous state comprehension, or branch-set execution.
  **Why:** This creates the reusable after-use feedback contract that the rest of the builder loop can consume.

- **What:** Define a maintenance/Baldwin log convention.
  **Who:** Outcome review materialization.
  **Gate:** Same materialization run as `outcome_review.md`, or immediately after it.
  **Why:** Navigation and later comprehension need a discoverable index of evidence-backed improvement candidates.

- **What:** Add a follow-up outcome review gate to materialization protocol.
  **Who:** Materialization lifecycle/protocol.
  **Gate:** When `artifact_materialization.md` is created or when `enes/materialization_lifecycle.md` is operationalized under `homegrown/protocols/`.
  **Why:** Validation before use is not enough. The system needs to know whether the artifact solved the original problem after use.

### COULD

- **What:** Add a navigation input rule for maintenance candidates.
  **Who:** Navigation discipline/protocol integration.
  **Gate:** After at least one outcome review record exists.
  **Why:** This lets navigation map next directions from evidence-backed system-maintenance pressure, not only from a single finding.

- **What:** Create a lightweight state-comprehension report over outcome records and open branches.
  **Who:** Comprehension discipline or a future protocol.
  **Gate:** After 5-10 outcome review records exist.
  **Why:** This begins replacing the user's need to hold system state in memory.

### DEFERRED

- **What:** Multihead or branch-set execution.
  **Gate:** Revive after outcome review records exist for at least a few branch/materialization results and a branch comparison or merge policy is defined.
  **Why (if revived):** Multihead can then increase search breadth without overwhelming the system's ability to compare outcomes.

- **What:** Autonomous selector/controller.
  **Gate:** Revive only after outcome records show stable priority patterns and navigation has evidence-backed candidate inputs.
  **Why (if revived):** Selection should be calibrated by history, not invented from internal vocabulary.

- **What:** Full evaluation harness as the general next step.
  **Gate:** Revive for domains with exact scoring, such as ARC, or when a specific protocol claim needs controlled comparison.
  **Why (if revived):** Exact scoring is powerful, but it is domain-specific. Outcome review is the general substrate.

## Reasoning

Candidate A, multihead execution, was refined and deferred. Its defense is that parallel branches can scan the thinking space faster. Its prosecution won for the immediate sequence because more branches create more digestion and merge burden. Without comparable outcome records, multihead can amplify weak selection.

Candidate B, isolated comprehension as state manager, was refined. Its defense is that the user needs an externalized model of Homegrown's state. Its prosecution won against immediate controller status because a model without outcome evidence can summarize claims but cannot know what worked.

Candidate C, outcome review protocol, survived. Its prosecution was that it could become another Markdown ritual. That objection becomes a design constraint: the protocol must create routeable maintenance candidates and record explicit no-op outcomes, not just reflections.

Candidate D, full evaluation harness, was refined. It is important for domains where exact scoring exists, especially ARC-like tasks. It is not the general next substrate because Homegrown also needs to learn from protocol edits, branch outcomes, and materialized artifacts that may not have an external benchmark.

Candidate E, the minimal builder-loop assembly, survived and ranked first. It combines the outcome review protocol, maintenance/Baldwin log, materialization follow-up gate, and navigation/branch input convention. This is the first small architecture that closes the loop from use back to improvement.

The main contradiction across stages was whether the answer should be "more intelligence" through comprehension or "more scale" through multihead. Exploration and critique resolved this by showing that both require a prior evidence substrate. Outcome review is not bigger intelligence or bigger scale; it is the memory and calibration layer that makes later intelligence and scale safer.

## Open Questions

### Monitoring

- After 5 outcome review records, check whether the records produce maintenance candidates that navigation could not have inferred from findings alone.

- After 10 outcome review records, check whether recurring failures cluster by discipline, protocol, materialization step, validation gap, or branch source.

### Blocked

- Exact storage path and log format are blocked until `homegrown/protocols/outcome_review.md` is materialized.

- Structural validation of this inquiry was not run because `tools/structural_check.sh` is unavailable or not executable in this repo.

### Refinement Triggers

- If outcome review records are created but not used by navigation, branch, materialization, loop diagnose, or comprehension after 10 records, the protocol should be revised because it is becoming archive noise.

- If attribution fields repeatedly overclaim causes without evidence, the protocol should force weaker attribution categories and route more cases to loop diagnosis.

- If outcome review becomes too expensive for low-risk artifacts, define minimal and full review modes.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
there is a dilemma of building something bigger than you can carry and more complex than we can comprehend.   we have to do it in pieces. and gradually. and key thing is what we are building must be load bearerer of the building action itself. this is the key to feasibility. 

i can find missing parts, good enhancements etc, but my ability is limited. my brain cant comprehend at all once. 

so the main focus should be creating a loop which can run and find new breakthroughs over time. It is vital. 

it is as if traning neural networks, we cant teach their weigts but we teach them via data.  but in this case it is even more complex and at the same time more easy. with neural networks there should have been big breakthroughs for trianing to enable it. But what we are doing doesnt have such requirement.  we are trying to convert proto intellignece to sth else , something emergent intelligence which is able to manveur thinking space by itself while maintaining itself

latests enhancement was branch protocol. and if we combine it with navigation breakthrough we had,  our MVL loop can be triggered for different resolutions, as well as light ability to scan the thinking space. it is still primitive. but it should converge into something self sufficient at some point and even tho not with perfect efficiency, it should start doing my job,  i wonder what is the most important thing after navigation and synthesis/implementation protocol.  maybe multihead ? or something else? maybe just like navigation we need comprehend which is also isolated? and comprehend can be me and manage the navigation as well ?
```

</details>
