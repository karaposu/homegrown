# Sensemaking: Feedback Family Across Reflect, Outcome Review, and Loop Diagnose

## User Input

The user feels that `reflect`, `outcome_review`, and `loop_diagnose` are related because they are all feedback. The concern is that adding `outcome_review` as a separate concept may increase complexity unless the underlying shared structure is understood first.

## SV1 - Baseline Understanding

The user is probably right: these mechanisms are related, and adding another named protocol without clarifying the shared structure risks conceptual sprawl. The question is whether the right simplification is to merge them, rename them, or define a parent feedback architecture.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Avoid unnecessary new concepts.
- Preserve operational fitness: different feedback moments may need different procedures.
- Do not overload `reflect` if it breaks its process-reflection identity.
- Do not make `loop_diagnose` run for every minor feedback event.
- Make the system easier to understand before materializing new protocol files.

### Key Insights

- The shared primitive is feedback, not reflection.
- Feedback is broader than reflect because it can judge structure, process, outcome, or failure attribution.
- The difference among the mechanisms is mostly boundary and depth:
  - boundary: stage, loop, use, correction chain;
  - depth: check, reflect, review, diagnose.
- A shared feedback contract can reduce complexity without merging all mechanisms into one oversized tool.

### Structural Points

All feedback modes have the same abstract shape:

```text
expected / intended / required
  vs
observed / actual / produced
  -> delta
  -> evidence
  -> attribution or uncertainty
  -> route
```

The modes differ by what fills those slots.

### Foundational Principles

- A single parent concept can simplify vocabulary, but only if it does not force one procedure to handle all cases.
- Modes should be separated by operation type, not by accidental historical naming.
- Feedback should produce records that can be routed, accumulated, and later analyzed.

### Meaning-Nodes

- Feedback primitive.
- Boundary-specific feedback.
- Feedback modes.
- Escalation path.
- Evidence record.
- Attribution uncertainty.
- Maintenance candidate.
- Reflect as process feedback.
- Outcome review as use feedback.
- Loop diagnose as causal diagnostic feedback.

## SV2 - Anchor-Informed Understanding

The likely answer is: yes, they are one family. But they should not collapse into one monolithic `reflect` or one giant `feedback` command. The cleaner model is a feedback architecture with shared vocabulary and records, plus specialized modes for different boundaries.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- A shared schema is possible:
  - source;
  - expected;
  - observed;
  - delta;
  - evidence;
  - attribution;
  - route;
  - follow-up.
- The schema can be reused without making all modes identical.
- Escalation can prevent overuse:
  - cheap structural check first;
  - reflect for process;
  - outcome review for downstream use;
  - loop diagnose only when attribution is unclear or correction-chain evidence exists.

### Human / User Perspective

New anchors:

- The user needs fewer mental categories, not more.
- The user can understand one parent idea: "feedback converts experience into future improvement."
- The user should not have to decide among three unrelated tools. They should decide what kind of feedback event happened.

### Strategic / Long-Term Perspective

New anchors:

- A feedback family is the substrate for long-term learning.
- It creates a path from local observations to cross-run patterns.
- It also supports future automation because routing can be based on mode and confidence.

### Risk / Failure Perspective

New anchors:

- If everything becomes reflect, reflect becomes incoherent.
- If everything stays separate, Homegrown accumulates duplicate records and unclear boundaries.
- If feedback becomes too generic, each mode loses procedural sharpness.
- The safest architecture is shared interface, specialized execution.

### Feasibility Perspective

New anchors:

- We do not need a large new implementation immediately.
- A first materialization could be a small `feedback.md` concept/protocol that defines the family.
- Then `reflect`, `loop_diagnose`, and future `outcome_review` can reference it.

### Definitional / Consistency Perspective

New anchors:

- Reflect's current definition is "second-order observation of a completed cognitive process."
- Outcome review's proposed definition is "after-use evidence about whether the output worked."
- Loop diagnose's current definition is "diagnostic MVL+ framing over correction chains."
- These are not synonyms. They are siblings under feedback.

## SV3 - Multi-Perspective Understanding

The user's discomfort is structurally valid. Treating `outcome_review` as an unrelated new thing would be a complexity regression. But merging it into `reflect` would also be wrong because reflect has a narrower object: process quality of a completed loop. The right simplification is a parent `feedback` architecture that defines shared concepts, records, and escalation paths.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is `reflect` the parent mechanism?

**Strongest counter-interpretation:**
Reflect already says it makes the loop learn. Therefore reflect could own all feedback, including outcome review and loop diagnose.

**Why the counter-interpretation fails (structural grounds):**
Reflect's spec defines its object as the process of a completed cognitive run. Outcome review judges downstream use after the output leaves the loop. Loop diagnose compares correction-chain evidence to infer failure causes. These need different inputs and different timing. If reflect owns all of them directly, its operational identity fragments.

**Confidence:** HIGH.

**Resolution:**
Reflect is not the parent mechanism. Feedback is the parent operation; reflect is the process-feedback mode.

**What is now fixed?**
Do not rename all feedback work as reflect.

**What is no longer allowed?**
Using "reflect" as a generic word for every learning event.

**What now depends on this choice?**
Protocol naming and whether outcome review is designed as sibling or subroutine.

**What changed in the conceptual model?**
Reflect moves from "the whole learning layer" to "one boundary-specific feedback mode."

### Ambiguity: Should these remain fully separate mechanisms?

**Strongest counter-interpretation:**
Separate tools are cleaner because each has a specific job.

**Why the counter-interpretation fails (structural grounds):**
If the mechanisms do not share vocabulary or record fields, they duplicate concepts such as evidence, mismatch, attribution, and maintenance candidate. That increases mental load and makes cross-run learning harder.

**Confidence:** HIGH.

**Resolution:**
Keep specialized execution, but unify the interface and conceptual family.

**What is now fixed?**
The system needs a shared feedback vocabulary/record shape.

**What is no longer allowed?**
Creating `outcome_review` as an isolated protocol with unrelated field names.

**What now depends on this choice?**
Materialization should likely define `feedback.md` or a feedback section before or inside `outcome_review.md`.

**What changed in the conceptual model?**
The problem becomes interface design, not tool multiplication.

### Ambiguity: Is loop diagnose a normal feedback mode or an escalation?

**Strongest counter-interpretation:**
Loop diagnose is just another feedback type and could run routinely after every weak result.

**Why the counter-interpretation fails (structural grounds):**
Loop diagnose requires a correction chain: weak prior, human correction, and later improved result. It is deeper and more expensive. Running it routinely would over-diagnose and increase complexity.

**Confidence:** HIGH.

**Resolution:**
Loop diagnose is an escalation mode used when attribution is unclear or correction-chain evidence exists.

**What is now fixed?**
Feedback records may route to loop diagnose, but loop diagnose is not the default feedback step.

**What is no longer allowed?**
Treating every mismatch as requiring full diagnostic MVL+.

**What now depends on this choice?**
Outcome review should include "route to loop_diagnose" only under specific conditions.

**What changed in the conceptual model?**
Feedback becomes tiered by depth.

## SV4 - Clarified Understanding

These mechanisms should be reorganized as a feedback family:

- checkpoint: structural feedback;
- reflect: process feedback;
- outcome review: use/outcome feedback;
- loop diagnose: causal diagnostic escalation.

The unification should happen through a shared contract, not by merging all procedures into reflect.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Parent concept: feedback.
- Shared operation: expected vs observed -> delta -> evidence -> attribution -> route.
- Reflect remains process-feedback.
- Outcome review becomes use/outcome feedback.
- Loop diagnose becomes diagnostic escalation.
- Checkpoint/Primitive RC remains structural feedback.

### Eliminated Options

- Make reflect do everything.
- Create outcome review as an unrelated new concept.
- Run loop diagnose routinely.
- Collapse all feedback into a generic command with no mode-specific procedure.

### Remaining Viable Paths

1. Create `homegrown/protocols/feedback.md` as a small parent protocol/concept.
2. Create `homegrown/protocols/outcome_review.md` as a mode that references the parent feedback contract.
3. Patch `reflect` and `loop_diagnose` later to reference the same feedback vocabulary.
4. Possibly create a `devdocs/feedback_log.md` or `devdocs/maintenance_backlog.md` that all modes can write to or index.

## SV5 - Constrained Understanding

The clean architecture is not three unrelated systems and not one overloaded system. It is a feedback stack:

```text
Feedback primitive
  -> structural feedback: checkpoint
  -> process feedback: reflect
  -> use feedback: outcome_review
  -> causal feedback: loop_diagnose
```

Each mode keeps its own trigger and procedure, but all produce compatible evidence records and routes.

## Phase 5 - Conceptual Stabilization

## SV6 - Stabilized Model

The underlying thing is feedback: a boundary operation that compares expected behavior with observed behavior and turns the delta into evidence for future action.

`reflect`, `outcome_review`, and `loop_diagnose` are not truly separate concepts. They are feedback modes at different boundaries and depths. Reflect observes the cognitive process after a loop. Outcome review observes downstream usefulness after a result is used. Loop diagnose investigates causal failure when a correction chain gives enough evidence. Checkpoint/Primitive RC is the cheapest structural feedback mode between stages.

The right reorganization is a shared feedback architecture with specialized modes. This reduces complexity because the user only needs one parent mental model while the system keeps procedures fit for their timing and evidence.

Telemetry:

- Perspective saturation: strong.
- Ambiguity resolution ratio: 3/3 resolved.
- SV delta: high.
- Anchor diversity: high.
- Overall: PROCEED.
