# Decomposition: Append-Only Target Alignment Contributions

## Input

Inquiry root:

`devdocs/inquiries/2026-05-07_07-26__append_only_target_alignment_contributions/`

Inputs consumed:

- `_branch.md`
- `_state.md`
- `exploration.md`
- `sensemaking.md`

## 1. Coupling Map

### Major Elements

| Element | Role |
| --- | --- |
| Traceability requirement | Preserve which discipline changed target understanding, why, and with what confidence. |
| MVL+ cumulative context topology | Later disciplines can use all prior saved outputs, not only the immediately previous output. |
| Contribution layer | Append-only target-alignment evidence produced by disciplines. |
| Current view layer | Synthesized current target understanding derived from contribution history. |
| Contribution granularity | Whether entries are deltas, full snapshots, or both under conditions. |
| Final validation | Target Fit Check and possible Target Alignment Gate behavior. |
| Materialization choice | Future choice of exact file/section structure. |

### Coupling Topology

High-coupling cluster 1: **history and provenance**

- Traceability requirement
- Contribution layer
- Contribution granularity

These must stay together because the shape of a contribution determines whether the system can later diagnose which discipline introduced a wrong target claim.

High-coupling cluster 2: **current decision support**

- Current view layer
- Final validation

These must stay together because Target Fit Check needs a coherent current comparison object, not only raw historical entries.

High-coupling cluster 3: **flow model**

- MVL+ cumulative context topology
- Contribution layer
- Current view layer

These are coupled because the artifact model must respect that Exploration can still affect Innovation or Critique, and Sensemaking can still affect later boundary or validation decisions.

Lower-coupling region: **materialization**

- Exact storage location, filename, and syntax depend on implementation choices.
- The conceptual answer can be settled before deciding whether contributions live inside each discipline file, in an append-only inquiry-level ledger, or both.

### Boundary Set

| Boundary | Confidence | Reason |
| --- | --- | --- |
| History vs current view | High | Append-only trace and synthesized current state serve different needs. |
| Conceptual model vs materialization | High | User asked whether mutable/shared record is right, not yet for source-doc edits. |
| Contribution delta vs full snapshot policy | Medium-high | Strong enough to answer directionally, but exact thresholds need later design. |
| Final check/gate behavior vs contribution capture | High | Capture records evidence; checking decides whether the answer fits that evidence. |

## 2. Boundary Validation

### Bottom-Up Atoms

- A discipline may discover target-role evidence.
- That evidence needs a source discipline and reason.
- Earlier evidence may affect later non-adjacent disciplines.
- A current answer still needs one stabilized target view.
- Contradictory or superseded evidence should remain inspectable.
- Repeated full snapshots can create noise.
- A final check must compare the answer against both current view and important unresolved history.

### Validation Result

The atoms group naturally into the same major clusters:

- Evidence/source/reason/supersession group under contribution history.
- Stabilized target/comparison/checking group under current view and validation.
- Non-adjacent influence group under cumulative context topology.

No strong atom requires a single mutable shared record as canonical history.

## 3. Question Tree

### Q1. What should preserve target-alignment history?

Verification criteria:

- [ ] Names the history artifact/role without treating it as mutable current state.
- [ ] Preserves source discipline, claim, evidence, confidence, and effect.
- [ ] Allows later diagnostics to identify where a bad target understanding entered.

Answer direction:

Use append-only Target Alignment Contributions as the historical layer.

### Q2. What should represent the current target understanding?

Verification criteria:

- [ ] Provides a coherent comparison object for final validation.
- [ ] Is explicitly derived from contributions and prior discipline outputs.
- [ ] Does not erase contradictory or superseded contributions.

Answer direction:

Use a synthesized Live Target Alignment View as the current-view layer.

### Q3. Should each discipline append a full version or only its contribution?

Verification criteria:

- [ ] Avoids hidden mutation.
- [ ] Avoids mechanical repeated snapshots.
- [ ] Still allows material target-view changes to be reconstructed.

Answer direction:

Default to delta-style contributions. Permit a full snapshot only when a discipline materially changes the whole target view or when a final synthesis needs to show the full stabilized view.

### Q4. How should the model respect MVL+ flow?

Verification criteria:

- [ ] Does not model MVL+ as only one discipline feeding the next.
- [ ] Allows Exploration, Sensemaking, or Decomposition contributions to influence non-adjacent later disciplines.
- [ ] Keeps prior discipline outputs and contributions available as cumulative context.

Answer direction:

Treat MVL+ as sequential execution over cumulative context. Contributions should accumulate; synthesis should consider the whole contribution trail, not only the latest entry.

### Q5. Where does final validation belong?

Verification criteria:

- [ ] Explains what Target Fit Check compares.
- [ ] Explains when Target Alignment Gate has force.
- [ ] Separates validation from contribution capture.

Answer direction:

Critique and/or CONCLUDE should synthesize the Live Target Alignment View and run Target Fit Check against both that view and the contribution trail. Target Alignment Gate only has force when mismatch blocks or forces repair.

### Q6. What remains outside this inquiry?

Verification criteria:

- [ ] Avoids prematurely selecting exact filenames or source-doc patches.
- [ ] Identifies what a later materialization pass must decide.

Answer direction:

Exact storage can remain deferred. A later pass can decide whether contributions live as sections inside discipline outputs, in an append-only `target_alignment_contributions.md`, or in both a local section plus a generated index.

## 4. Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| Traceability requirement | Contribution layer | Need for source, reason, confidence, and status history | One-way constraint |
| MVL+ topology | Contribution layer | Requirement that entries remain available to all later disciplines | One-way constraint |
| Contribution layer | Current view layer | Claims, revisions, rejections, uncertainties, and evidence | Many-to-one synthesis |
| Contribution granularity | Traceability requirement | Signal/noise tradeoff for reconstructing target changes | Bidirectional constraint |
| Current view layer | Final validation | Coherent target comparison object | One-way input |
| Contribution layer | Final validation | Trail used to catch ignored contradictions or unsupported synthesis | One-way input |
| Final validation | Target Alignment Gate | Mismatch status and repair/block decision | One-way trigger |
| Conceptual model | Materialization choice | Required semantics for later file/section design | One-way constraint |

## 5. Dependency Order

1. Establish that target history and current target view are separate roles.
2. Define the history role as append-only Target Alignment Contributions.
3. Define MVL+ flow as cumulative context, so contributions are available beyond adjacent stages.
4. Decide contribution granularity: delta-first, full snapshot only when material.
5. Define synthesized Live Target Alignment View as the current comparison object.
6. Define Target Fit Check and Target Alignment Gate using both the synthesized view and the contribution trail.
7. Defer exact materialization until the conceptual semantics are stable.

Parallel-safe pieces:

- Contribution granularity and MVL+ flow can be examined in parallel after history/current-view separation is accepted.
- Materialization options can be explored later without reopening the conceptual split, unless implementation reveals hidden coupling.

## 6. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | Pass | Each question can be answered through explicit interfaces: history, current view, granularity, flow, validation, materialization. |
| Completeness | Pass | Covers the user's objections: mutable shared record, per-discipline append, traceability, and cumulative non-adjacent context use. |
| Reassembly | Pass | If the questions are answered and interfaces respected, the final answer can explain the corrected model and why it is cleaner. |
| Tractability | Pass | Each piece is small enough for the remaining Innovation and Critique stages. |
| Interface clarity | Pass | The main flows are explicit: contributions feed synthesis; synthesis and trail feed validation. |
| Balance | Pass | No piece dominates the whole. Materialization is intentionally bounded as future work. |
| Confidence | Pass | Top-down clusters and bottom-up atoms agree on the main boundary: append-only history vs synthesized current view. |

## Failure Mode Check

| Failure Mode | Status | Notes |
| --- | --- | --- |
| Premature decomposition | Avoided | Sensemaking established the two-layer model before decomposition. |
| Wrong boundaries | Low risk | History/current-view boundary is strongly supported by traceability and validation needs. |
| Hidden coupling | Medium risk | Materialization may reveal coupling between file placement and runner behavior; deferred explicitly. |
| Missing pieces | Low risk | User's direct concerns are covered. |
| Over-decomposition | Low risk | Six questions are justified by different interfaces. |
| Ignoring dependencies | Low risk | Dependency order is explicit. |
| Imbalanced decomposition | Low risk | Materialization is bounded so it does not absorb the conceptual answer. |
