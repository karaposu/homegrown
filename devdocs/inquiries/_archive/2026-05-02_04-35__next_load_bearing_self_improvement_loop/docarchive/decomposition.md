# Decomposition: Next Load-Bearing Self-Improvement Loop

## Input

Sensemaking stabilized the answer candidate: build an after-use outcome review / retrospective calibration protocol before serious multihead or autonomous comprehension.

## 1. Coupling Map

### Major Clusters

#### Cluster A - Outcome Evidence Capture

Strongly coupled elements:

- source inquiry, branch, or materialization;
- original intent and expected effect;
- validation result before use;
- actual downstream outcome after use;
- mismatch or surprise;
- confidence level and evidence.

Why tightly coupled:

- A review record without source, expectation, and actual outcome cannot calibrate anything.
- Mismatch has meaning only when compared against intent and validation.

#### Cluster B - Failure Attribution and Diagnosis

Strongly coupled elements:

- likely failing discipline, protocol, artifact, or user assumption;
- whether failure came from bad reasoning, bad materialization, bad validation, missing branch, or missing context;
- link to loop diagnose when deeper analysis is needed.

Why tightly coupled:

- Outcome evidence becomes actionable only when mapped to where the system should improve.

#### Cluster C - Maintenance Candidate Extraction

Strongly coupled elements:

- candidate improvement;
- evidence summary;
- priority/risk;
- proposed routing action: no-op, branch, diagnose, materialize, test, consolidate, defer.

Why tightly coupled:

- The output of outcome review must feed future work. A review without a candidate or explicit no-op is only commentary.

#### Cluster D - Integration Surfaces

Strongly coupled elements:

- Navigation reads candidates.
- Branch protocol creates child inquiries from candidates.
- Materialization lifecycle records follow-up review gate.
- Reflect reads patterns.
- Comprehension/state model eventually reads backlog/log.

Why tightly coupled:

- Outcome review is not valuable as an isolated archive. It is valuable because other protocols consume it.

#### Cluster E - Governance and Scale Control

Strongly coupled elements:

- when outcome review is required;
- when it may be skipped;
- minimal vs full review modes;
- storage path;
- append-only vs per-run records;
- avoiding uncontrolled self-modification.

Why tightly coupled:

- The user’s core risk is building more than the system can carry. The protocol must be small enough to run often.

### Natural Boundaries

- Outcome capture can be separated from deep loop diagnosis.
- Maintenance candidate extraction can be separated from candidate selection.
- Comprehension/state view can be separated from the outcome record schema.
- Multihead scheduling can be separated from branch creation and deferred.

## 2. Question Tree

### Q1 - What must an outcome review record contain?

Verification criteria:

- [ ] Records source authority.
- [ ] Records expected effect.
- [ ] Records validation before use.
- [ ] Records actual use outcome.
- [ ] Records mismatch/surprise.
- [ ] Records confidence and evidence.
- [ ] Records follow-up action.

### Q2 - When should outcome review run?

Verification criteria:

- [ ] Defines after-use timing.
- [ ] Distinguishes immediate validation from later outcome review.
- [ ] Supports inquiries, branches, materialized artifacts, and protocol edits.
- [ ] Defines skip/defer conditions for trivial artifacts.

### Q3 - How should outcome review attribute failures without overclaiming?

Verification criteria:

- [ ] Uses likely attribution, not final truth.
- [ ] Can route to loop diagnosis when attribution is uncertain.
- [ ] Distinguishes artifact failure, validation failure, reasoning failure, protocol failure, and context/user assumption failure.

### Q4 - How should outcome review create maintenance candidates?

Verification criteria:

- [ ] Produces named candidate improvements or explicit no-op.
- [ ] Assigns priority based on evidence, recurrence, load-bearing value, and risk.
- [ ] Records candidate routing: navigation, branch, materialization, test, diagnose, consolidate, defer.

### Q5 - Where should the records live?

Verification criteria:

- [ ] Works for both root inquiries and nested branches.
- [ ] Avoids path assumptions that break branch depth.
- [ ] Has a discoverable cross-run index or backlog.
- [ ] Does not require migrating existing inquiries.

### Q6 - How does this feed navigation and comprehension?

Verification criteria:

- [ ] Navigation can read maintenance candidates as context-directed/process-directed signals.
- [ ] Branch protocol can use a candidate as branch source.
- [ ] Later state comprehension can summarize outstanding evidence-backed work.

### Q7 - What is explicitly deferred?

Verification criteria:

- [ ] Defers autonomous selector.
- [ ] Defers multihead scheduler.
- [ ] Defers branch-set merge protocol.
- [ ] Defers full empirical harness unless the domain specifically requires it.

## 3. Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Materialization Trace | Outcome Review | source, files changed, validation, follow-up gate | one-way |
| MVL/MVL+ Finding | Outcome Review | original decision, expected effect, downstream use target | one-way |
| Branch Inquiry | Outcome Review | lineage, branch source, child question, branch result | one-way |
| Outcome Review | Maintenance Backlog | evidence-backed candidate, priority, route | one-way |
| Outcome Review | Loop Diagnose | uncertain attribution or repeated failure pattern | one-way |
| Outcome Review | Navigation | candidates and unresolved next actions | one-way |
| Outcome Review | Reflect | cross-run process quality patterns | one-way |
| Maintenance Backlog | Branch Inquiry | branch_source and child question | one-way |
| Maintenance Backlog | State Comprehension | project state and open improvement pressure | one-way |
| State Comprehension | Navigation | summarized current state and constraints | one-way |

## 4. Dependency Order

### First

1. Define minimal outcome review protocol.
2. Define minimal record fields.
3. Define a storage convention, probably both local record and cross-run index/backlog.

### Second

4. Patch materialization lifecycle/protocol to require a follow-up review gate.
5. Teach navigation to consider outcome-review candidates as first-class context/process inputs.
6. Use branch protocol to create child inquiries from evidence-backed candidates.

### Third

7. Add loop-diagnose integration for uncertain or repeated failures.
8. Add state comprehension over the backlog and active branch tree.

### Later / Parallel Only After Feedback Exists

9. Add branch-set/multihead execution.
10. Add merge/comparison protocol.
11. Add ARC/evaluation harness integration where the task domain demands concrete scoring.

## 5. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | The outcome review protocol can be designed independently of multihead and state comprehension. |
| Completeness | PASS | The decomposition covers record shape, timing, attribution, candidate extraction, storage, integration, and deferrals. |
| Reassembly | PASS | If the pieces are answered, Homegrown gains a closed use-to-improvement feedback loop. |
| Tractability | PASS | The first artifact can be a Markdown protocol and backlog schema. |
| Interface clarity | PASS with caveat | Interfaces are explicit, but exact file paths remain an implementation decision. |
| Balance | PASS | Q1-Q6 are roughly comparable; Q7 is intentionally a boundary guard. |
| Confidence | HIGH | Top-down architecture and bottom-up artifact needs agree. |

## Decomposition Result

The next build should be decomposed into a minimal operational protocol:

```text
Outcome Review Protocol
  -> outcome record schema
  -> maintenance candidate extraction
  -> storage/index convention
  -> routing hooks into navigation, branch, materialization, loop diagnose, reflect
```

The protocol should not include autonomous selection, multihead execution, or broad comprehension management in v1. Those depend on the records it creates.

Telemetry:

- Coupling clarity: high.
- Hidden coupling risk: medium around storage/index design.
- Dependency confidence: high.
- Overall: PROCEED.
