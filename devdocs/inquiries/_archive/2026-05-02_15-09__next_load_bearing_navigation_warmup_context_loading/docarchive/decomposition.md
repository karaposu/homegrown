# Decomposition: next_load_bearing_navigation_warmup_context_loading

## 1. Coupling Map

### Major Elements

The whole problem contains these elements:

1. Project state on disk.
2. Context intake / warm-up.
3. Current-state brief.
4. Navigation map.
5. Human or selector commitment.
6. Branch or materialization execution.
7. Outcome review and learning.
8. Future Navigation Observer / multihead scale.

### Coupling Topology

```text
project state
  -> context intake
  -> current-state brief
  -> Navigation
  -> selection
  -> branch or materialization
  -> outcome review
  -> future routing calibration
```

### Coupling Strengths

| Pair | Coupling | Reason |
| --- | --- | --- |
| Project state <-> context intake | strong | Intake exists to choose and summarize repo state. |
| Context intake <-> current-state brief | strong | The brief is the output contract of intake. |
| Current-state brief <-> Navigation | moderate/strong | Navigation needs the brief, but can still read extra source anchors if needed. |
| Navigation <-> selection | moderate | Navigation enumerates; selection commits. They must interface but stay separate. |
| Selection <-> materialization/branch | strong | The chosen move authorizes concrete action. |
| Materialization/branch <-> outcome review | moderate | Outcome review happens after use, not during creation. |
| Context intake <-> outcome review | weak/moderate | Intake should read outcome reviews when they affect current state. |
| Context intake <-> future observer | moderate | Observer likely uses the intake protocol, but observer is not needed for v1. |

### Natural Boundaries

1. **Context Intake boundary:** Chooses and summarizes source context.
2. **Navigation boundary:** Enumerates next moves from the current-state brief.
3. **Selection boundary:** Commits one or more moves.
4. **Execution boundary:** Branch/materialization carries out selected move.
5. **Learning boundary:** Outcome review checks after-use value.

The weakest useful cut is between Context Intake and Navigation. Keeping them separate lets the system test whether bad Navigation came from poor context or poor movement enumeration.

## 2. Boundary Validation

### Top-Down Boundaries

Top-down analysis says the first artifact should isolate context intake because it is upstream of Navigation and downstream of repo state.

### Bottom-Up Sanity Check

Atomic operations:

- Identify stable base files.
- Identify recent inquiry findings.
- Identify relevant prior finding chains.
- Decide when to include `docarchive/`.
- Decide when to include materialization traces and outcome reviews.
- Produce a compact current-state brief.
- Run Navigation over that brief.

The first six atoms cluster together. They are not Navigation enumeration; they are input preparation. The boundary is valid.

### Boundary Confidence

| Boundary | Confidence |
| --- | --- |
| Context intake vs Navigation | high |
| Navigation vs selection | high |
| Selection vs materialization/branch | high |
| Outcome review vs validation/materialization | high |
| Context intake vs generic session warm-up | medium |
| Context intake vs future context discipline | medium |

## 3. Question Tree

### Q1 - What should the Navigation context-intake protocol read?

Verification criteria:

- [ ] Defines stable base context.
- [ ] Defines recent context.
- [ ] Defines source-authority context.
- [ ] Defines targeted deep context.
- [ ] Names when `docarchive/` is required.
- [ ] Names when traces and outcome reviews are required.

### Q2 - What should the protocol output?

Verification criteria:

- [ ] Defines a compact current-state brief.
- [ ] Records exact read set.
- [ ] Separates confirmed state, recent changes, open questions, blockers, and candidate movement signals.
- [ ] Preserves missing-context warnings.
- [ ] Produces an input that Navigation can consume without rereading everything.

### Q3 - How should the protocol control context cost?

Verification criteria:

- [ ] Uses tiered loading.
- [ ] Defines escalation triggers.
- [ ] Avoids reading all Markdown by default.
- [ ] Avoids finding-only false completeness.
- [ ] Gives recency a role without making recency the authority rule.

### Q4 - How should it connect to Navigation, selection, materialization, branch, and outcome review?

Verification criteria:

- [ ] States that Navigation consumes the current-state brief.
- [ ] States that Navigation enumerates but does not commit.
- [ ] States that selected moves route to branch or materialization.
- [ ] States that after-use evidence routes to outcome review.
- [ ] Records enough trace to diagnose bad Navigation later.

### Q5 - What is the promotion path?

Verification criteria:

- [ ] Defines when this remains a protocol.
- [ ] Defines when to generalize into broader context loading.
- [ ] Defines when to promote toward a discipline.
- [ ] Defines when a full Navigation Observer report becomes the next artifact.

## 4. Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Project state | Context intake | Files, findings, protocols, traces, branches, outcomes | one-way |
| Context intake | Current-state brief | Curated state summary + read-set record | one-way |
| Current-state brief | Navigation | Position, movement signals, blockers, context limits | one-way |
| Navigation | Selection | Enumerated moves, confidence, guidelines, exclusions | one-way |
| Selection | Branch inquiry | Source-anchored child question | one-way |
| Selection | Artifact materialization | Materialization request and source authority | one-way |
| Branch/materialization | Outcome review | Expected effect and observed downstream use | one-way after use |
| Outcome review | Future context intake | Outcome evidence and calibration signals | one-way |

## 5. Dependency Order

### First

Define the Navigation context-intake protocol.

Reason: every later option depends on a reliable read-set/current-state input.

### Second

Dogfood it on one current-state Navigation run.

Reason: the protocol must prove it reduces prompting burden before it becomes part of standard operation.

### Third

Use Navigation output to select one move.

Reason: selection remains human/explicit in v1.

### Fourth

Materialize or branch the selected move.

Reason: artifact creation and child inquiry creation are already governed by protocols.

### Fifth

Run outcome review after the selected move is used.

Reason: the system needs evidence that the context-intake protocol actually improved Navigation or reduced user burden.

### Later / Parallel Only After Evidence

- Generalize into broader session warm-up after 3+ traces show repeated non-Navigation use.
- Build Navigation Observer report after context-intake dogfood shows the read set is useful.
- Consider discipline promotion only if protocol rules repeatedly require substantial relevance judgment.

## 6. Reassembly Test

If Q1 through Q5 are answered:

```text
Homegrown can load current project state
  -> produce a Navigation-ready brief
  -> run Navigation with less user prompting
  -> select a move
  -> materialize or branch safely
  -> review whether this reduced burden
```

This reconstructs the original goal: the user gets a practical next development that relaxes their burden while keeping the system buildable in pieces.

## 7. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | Context intake can be designed without changing Navigation internals. |
| Completeness | PASS | The pieces cover input loading, movement enumeration, commitment, execution, and learning. |
| Reassembly | PASS | The sequence produces a full path from repo state to reviewed action. |
| Tractability | PASS | The first artifact is one protocol, not a runtime or new discipline. |
| Interface clarity | PASS | Each boundary has a clear output/input contract. |
| Balance | PASS | The first piece is intentionally small; later pieces are deferred. |
| Confidence | PASS/MEDIUM | Main boundaries are high confidence; promotion/generalization triggers require real traces. |

## Decomposition Verdict

Proceed with Innovation over candidate shapes for the first artifact.

The decomposition favors:

```text
homegrown/protocols/navigation_context_intake.md
```

as the immediate artifact, with `navigation warm-up` as its plain-language alias.
