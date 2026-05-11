# Decomposition: Loop Diagnose Protocol Integration

## User Input

`devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/_branch.md`

## 1. Coupling Map

### Cluster A - Diagnostic Concept

Elements:

- Weak prior inquiry.
- Human correction or dissatisfaction.
- Improved later inquiry.
- Comparative interpretation.

Coupling: high. These elements only become diagnostic when used together. A prior weak inquiry without a correction signal is just an old output. A correction without a prior path lacks target evidence. A later improved inquiry without the correction context may not reveal what changed.

### Cluster B - Protocol Contract

Elements:

- Required inputs.
- Required file reads.
- Required diagnostic question shape.
- Required output sections.
- Confidence and evidence rules.

Coupling: high. The protocol is valuable because it standardizes these elements together.

### Cluster C - MVL+ Execution

Elements:

- Exploration over both folders.
- Sensemaking over the correction signal.
- Decomposition of possible failure locations.
- Innovation over maintenance candidates.
- Critique over attribution strength and proposed changes.

Coupling: high. The whole MVL+ pipeline is useful here because diagnosis needs artifact mapping plus attribution plus candidate generation.

### Cluster D - Runner Integration

Elements:

- Explicit trigger.
- Loading `homegrown/protocols/loop_diagnose.md`.
- Creation of `_branch.md`.
- Normal MVL+ execution.
- Optional MVL note or redirect.

Coupling: medium. These are implementation details around the same integration surface.

### Cluster E - Downstream Maintenance

Elements:

- Diagnostic finding.
- Maintenance candidates.
- Branch experiment.
- Retrospective review.
- Telemetry calibration.

Coupling: medium-high. Diagnostic output must be shaped so downstream systems can use it.

## 2. Boundaries

Natural boundaries:

1. **What `loop_diagnose` is**
   - Conceptual definition.

2. **What inputs it needs**
   - Prior path, corrected path, human correction, optional context.

3. **What it instructs MVL+ to do**
   - Read files, compare artifacts, infer failure hypotheses.

4. **What output it should require**
   - Failure hypotheses, evidence, confidence, maintenance candidates.

5. **How MVL/MVL+ should load it**
   - Explicit hook after protocol exists.

6. **What not to do yet**
   - Separate discipline, silent automation, hard attribution.

## 3. Bottom-Up Validation

Obvious atoms:

- `path_A` and `path_B`.
- `docarchive/` discipline outputs.
- human guidance as correction signal.
- weak prior finding.
- improved later finding.
- failure attribution.
- discipline shortcoming type.
- protocol file.
- MVL/MVL+ hook.
- atomic loop preservation.

These atoms group cleanly into the boundaries above. No atom forces `loop_diagnose` to become a discipline. The main hidden coupling is that the input contract and output contract must be designed together: if inputs do not preserve the correction signal, outputs will overguess.

## 4. Question Tree

### Q1 - What is `loop_diagnose`?

Verification criteria:

- [ ] Defines it as a protocol/template around MVL+.
- [ ] Says it is not a new discipline now.
- [ ] Explains why the user's proposed message is basically the core.

### Q2 - What exact inputs should it accept?

Verification criteria:

- [ ] Names `prior_path`.
- [ ] Names `corrected_path`.
- [ ] Names `human_correction`.
- [ ] Requires reading `finding.md`, `_branch.md`, `_state.md`, and `docarchive/` when present.
- [ ] Allows optional context or prior relationship notes.

### Q3 - What should it ask MVL+ to infer?

Verification criteria:

- [ ] Compare prior and corrected inquiries.
- [ ] Identify what the prior failed to satisfy.
- [ ] Infer likely failure locations and types.
- [ ] Avoid exact attribution without evidence.
- [ ] Identify maintenance candidates.

### Q4 - What should the diagnostic output include?

Verification criteria:

- [ ] Failure hypotheses.
- [ ] Evidence quotes or path references.
- [ ] Confidence levels.
- [ ] Affected fundamentals or disciplines.
- [ ] Candidate changes.
- [ ] Evaluation gates.

### Q5 - How should it be integrated with MVL/MVL+?

Verification criteria:

- [ ] Create `homegrown/protocols/loop_diagnose.md` first.
- [ ] Use explicit invocation first.
- [ ] Add a small MVL+ hook later.
- [ ] Keep the pipeline unchanged.
- [ ] Avoid a separate skill for now.

### Q6 - What are the main risks?

Verification criteria:

- [ ] Overconfident attribution.
- [ ] Misclassification by automatic hook.
- [ ] Treating improved inquiry as ground truth.
- [ ] Premature discipline creation.

## 5. Interface Map

| Source Piece | Target Piece | Flow |
|---|---|---|
| Q1 Definition | Q5 Integration | If it is a wrapper, integration should load a protocol, not a discipline. |
| Q2 Inputs | Q3 Inference | Inference quality depends on complete correction-chain evidence. |
| Q3 Inference | Q4 Output | Failure hypotheses become structured diagnostic output. |
| Q4 Output | Downstream maintenance | Maintenance candidates feed branch experiments and retrospective review. |
| Q6 Risks | Q5 Integration | Risks constrain the hook to explicit invocation. |

## 6. Dependency Order

1. Define `loop_diagnose` as a protocol wrapper.
2. Define the input contract.
3. Define the diagnostic question MVL+ should run.
4. Define the output contract.
5. Create `homegrown/protocols/loop_diagnose.md`.
6. Use it manually on one real correction chain.
7. Add a small MVL+ hook only after the protocol has proven useful.
8. Add a classic MVL note or redirect only if users try to run correction-chain diagnosis through MVL.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Each question is independently answerable after Q1 defines the role. |
| Completeness | Pass | Covers concept, inputs, reasoning operation, output, integration, and risks. |
| Reassembly | Pass | Answering Q1-Q6 yields a complete recommendation. |
| Tractability | Pass | Each piece is small enough for direct implementation or finding text. |
| Interface clarity | Pass | Main hidden coupling, input completeness to output quality, is explicit. |
| Balance | Pass | No single piece carries the entire answer. |
| Confidence | High | Top-down boundaries match bottom-up atoms. |

## Decomposition Verdict

**Overall: PROCEED**

- **Evidence:** The decomposition separates protocol definition, input/output contract, MVL+ execution, runner integration, and risks.
- **Risk:** The final answer should not over-design the full `loop_diagnose.md` contents if the user only asked what the concept and integration mean.
- **Suggested routing:** Continue to Innovation and focus on candidate integration designs.
