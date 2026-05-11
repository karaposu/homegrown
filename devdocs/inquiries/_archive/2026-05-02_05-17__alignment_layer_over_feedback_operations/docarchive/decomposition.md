# Decomposition: Alignment Control and Insurance Layer

## Input

Sensemaking stabilized:

```text
Alignment = parent architecture
Feedback = control mechanism
Reflect / outcome_review / loop_diagnose = alignment-insurance operations
```

## 1. Coupling Map

### Cluster A - Alignment Architecture

Strongly coupled elements:

- L0 Workspace
- L1 Task intent/depth
- L2 Task scope
- L3 Action-space
- L4 Action-set
- L5 Coherence
- L6 Outcome
- mode: exploration, alignment, innovation, diagnostic, maintenance, recovery, reflection

Why tightly coupled:

- Layer identifies where alignment can fail.
- Mode identifies why the system is operating and what success means at that moment.
- A feedback record without layer and mode cannot localize failure or route correctly.

### Cluster B - Feedback Control Mechanism

Strongly coupled elements:

- expected state;
- observed state;
- delta;
- evidence;
- confidence;
- route.

Why tightly coupled:

- This is the operational form of the AlignStack pillars:
  - explicitness: expected state is stated;
  - visibility: observed state is available;
  - measurement: delta is assessed;
  - comparison: expected and observed are compared.

### Cluster C - Insurance Operations

Strongly coupled elements:

- checkpoint / Primitive RC;
- reflect;
- outcome_review;
- loop_diagnose.

Why tightly coupled:

- They prevent, detect, diagnose, or repair alignment drift.
- They should use compatible records but keep specialized trigger/evidence rules.

### Cluster D - Existing Artifacts

Strongly coupled elements:

- `_branch.md`;
- `_state.md`;
- discipline outputs;
- finding;
- materialization trace;
- reflection output;
- loop diagnose finding;
- maintenance/backlog records.

Why tightly coupled:

- The old alignment-in-SIC finding warned against duplicating alignment into a separate file. Alignment state should be embedded in existing artifacts where possible.

### Cluster E - Escalation and Routing

Strongly coupled elements:

- no-op;
- monitor;
- revise current artifact;
- branch inquiry;
- materialize fix;
- run loop diagnose;
- run recovery;
- update protocol/spec.

Why tightly coupled:

- Alignment insurance only matters if the system knows what to do when alignment drift is detected.

## 2. Question Tree

### Q1 - What is the parent concept?

Verification criteria:

- [ ] Names alignment as parent architecture.
- [ ] Places feedback as mechanism, not root.
- [ ] Preserves mode/layer framing.

### Q2 - What is the minimal shared record?

Verification criteria:

- [ ] Includes alignment layer.
- [ ] Includes mode.
- [ ] Includes expected, observed, delta, evidence, confidence, route.
- [ ] Allows no-op/confirmation, not only failure.

### Q3 - How do the insurance operations map?

Verification criteria:

- [ ] Checkpoint mapped as immediate structural alignment insurance.
- [ ] Reflect mapped as process alignment insurance.
- [ ] Outcome review mapped as use/outcome alignment insurance.
- [ ] Loop diagnose mapped as causal alignment diagnosis.

### Q4 - What stays distributed?

Verification criteria:

- [ ] `_branch.md` keeps task/scope/approach alignment.
- [ ] `_state.md` keeps process and mode/resume state.
- [ ] Materialization trace keeps implementation/action-set/outcome gates.
- [ ] Feedback records reference artifacts rather than duplicating them.

### Q5 - What is the escalation ladder?

Verification criteria:

- [ ] Low-cost check before high-cost diagnosis.
- [ ] Reflect can produce process maintenance candidates.
- [ ] Outcome review can route to loop diagnose on uncertain or repeated drift.
- [ ] Loop diagnose can propose source changes only with evidence.

### Q6 - What should be deferred?

Verification criteria:

- [ ] No six-agent runtime now.
- [ ] No universal alignment runner now.
- [ ] No per-layer numerical scores now.
- [ ] No forced `_alignment.md` sidecar file now.

## 3. Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| `_branch.md` | Alignment control record | L0-L3 context, intent, scope, approach | one-way reference |
| Checkpoint | Reflect | structural alignment failures/warnings | one-way |
| Reflect | Maintenance/backlog | process alignment observations and memory candidates | one-way |
| Materialization trace | Outcome review | expected effect, validation, files changed | one-way |
| Outcome review | Maintenance/backlog | outcome alignment delta and candidate route | one-way |
| Outcome review | Loop diagnose | uncertain/repeated alignment drift | conditional one-way |
| Loop diagnose | Protocol/spec updates | evidence-backed layer/mode failure hypotheses | one-way |
| Maintenance/backlog | Navigation | evidence-backed next directions | one-way |
| Maintenance/backlog | State comprehension | current alignment debt and learning state | one-way |

## 4. Dependency Order

### First

1. Define minimal alignment-control vocabulary:
   - layer;
   - mode;
   - expected;
   - observed;
   - delta;
   - evidence;
   - confidence;
   - route.
2. Decide whether this lives as `homegrown/protocols/alignment_control.md` or as `homegrown/protocols/feedback.md` reframed under alignment.

### Second

3. Create outcome review as outcome-alignment insurance.
4. Define maintenance/backlog records as alignment-delta records.

### Third

5. Patch reflect to say it is process alignment insurance.
6. Patch loop diagnose to say it is causal alignment diagnosis.
7. Add layer/mode fields where appropriate.

### Later

8. Add navigation reading alignment-delta records.
9. Add state comprehension over alignment debt.
10. Add continuous layer × mode monitoring.
11. Add multihead only after alignment-delta comparison exists.

## 5. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | The parent vocabulary can be defined before full runtime changes. |
| Completeness | PASS | Covers layers, modes, feedback mechanism, insurance operations, artifacts, routing, and deferrals. |
| Reassembly | PASS | The pieces reconstruct an alignment-shaped system without centralizing all alignment into one tool. |
| Tractability | PASS | V1 can be a thin protocol and one outcome-review mode. |
| Interface clarity | PASS | Existing artifacts remain sources; alignment records reference rather than duplicate them. |
| Balance | PASS | No single component absorbs the whole architecture. |
| Confidence | HIGH | AlignStack, old SIC alignment, native theory, and agent perspective converge. |

## Decomposition Result

The right architecture is:

```text
Alignment-shaped system
  -> layer/mode vocabulary
  -> feedback/control record
  -> specialized insurance operations
  -> distributed artifacts
  -> escalation/routing
```

The first materialization should be thin. It should not attempt to build the six-agent future architecture.

Telemetry:

- Coupling clarity: high.
- Hidden coupling risk: medium around naming.
- Dependency confidence: high.
- Overall: PROCEED.
