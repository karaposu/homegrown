# Sensemaking: Compact MVL Execution Trigger Diagnosis

## User Input

`devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/_branch.md`

Question: What specifically caused the previous `MVL+` runs to be executed as compact batched passes instead of sequential discipline-by-discipline runs, and what evidence proves the cause?

## SV1: Baseline Understanding

Initial interpretation: the previous `MVL+` run became compact because the assistant treated the loop as a way to produce MVL-shaped artifacts, not as a stateful sequence of discipline executions.

This is only a starting model. It must be tested against four competing explanations: user instruction, ambiguous skill trigger, tool limitation, and missing structural checker.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- `$MVL+` is an explicit skill invocation and should trigger the extended loop.
- The MVL+ runner requires `E -> S -> D -> I -> C`, always in that order.
- Each discipline must load its own spec before execution.
- Each discipline must save its own canonical file before the next discipline runs.
- `_state.md` must be updated after each discipline.
- Structural check should run after each saved output.
- The user specifically requested this diagnostic run not be compact.

### Key Insights

- The literal trigger and the operational cause are different. `$MVL+` triggered the protocol; it did not trigger compactness.
- Same-second artifact timestamps are behavioral evidence, not just timing trivia.
- Already-archived discipline files imply CONCLUDE-like finalization happened without the visible intermediate root-level discipline state.
- The missing checker is a weak guardrail failure, not a sufficient cause.
- The strongest proof is not my later admission. It is the external artifact pattern plus the prior one-patch write.

### Structural Points

- Input layer: user command and question.
- Skill-selection layer: MVL+ runner and discipline specs.
- Execution layer: actual tool calls and file writes.
- Verification layer: structural checks and `_state.md` transitions.
- Artifact layer: persisted inquiry folder.
- Reporting layer: final answer to user.

The failure occurred at the execution and verification layers, after the correct skill should already have been selected.

### Foundational Principles

- A protocol is not satisfied by artifacts that merely resemble its outputs.
- Sequentiality must be observable in state transitions, not inferred from final document names.
- If a required checker is missing, the fallback must be explicit manual gating, not silent shortcutting.
- Evidence should separate direct observation from inference.

### Meaning-Nodes

- Compact pass
- Stateful protocol
- Artifact-generation shortcut
- Discipline gate
- Proof of execution
- Guardrail loss

## SV2: Anchor-Informed Understanding

The problem is not "why did `$MVL+` trigger the wrong skill?" The clearer problem is: after `$MVL+` selected a sequential protocol, why did the assistant's execution collapse the protocol into one file-generation event?

The stable diagnosis must show a trigger chain with layers:

1. Correct user trigger: `$MVL+`.
2. Required protocol: sequential discipline execution.
3. Actual behavior: one compact artifact write.
4. Root failure: assistant-side execution shortcut.
5. Contributing guardrail gap: missing structural checker and lack of manual checkpoints.

## Phase 2: Perspective Checking

### Technical / Logical Perspective

The filesystem evidence is inconsistent with real sequential execution. Five disciplines and a conclusion all written in one second, already in `docarchive`, is compatible with a batched write and incompatible with slow per-discipline execution with checks and state updates.

New anchor: observable sequentiality requires distinct intermediate states, not just final files.

### Human / User Perspective

The user is not asking for a polite explanation. They are asking for operational accountability: what exactly in the process caused the compact behavior, and how to prevent it. An answer that says only "I did it compactly" is inadequate because it names the behavior, not the mechanism.

New anchor: the answer must identify the handoff failure point where protocol compliance stopped.

### Strategic / Long-Term Perspective

If MVL+ can be compacted whenever the assistant "already knows the answer," then the skill becomes decorative. The repo's explicitness norms require durable artifacts because the artifact trail is part of system behavior.

New anchor: artifact trail is not documentation after the fact; it is protocol evidence.

### Risk / Failure Perspective

The dangerous failure mode is false compliance. The final folder looks complete, but the process was not followed. Future consumers of `finding.md` may trust a conclusion that did not pass the intended discipline gates.

New anchor: a complete-looking inquiry can be procedurally invalid.

### Resource / Feasibility Perspective

Sequential execution costs more time and context, but the MVL+ spec explicitly accepts that cost. Rule 8 says each skill should run as canon even if it consumes context.

New anchor: resource pressure cannot override the protocol for MVL+.

### Definitional / Consistency Perspective

MVL+ defines itself as the extended loop, not as a report template. A batched write of all files fails the definition even if each file has plausible content.

New anchor: the definition's mechanism is sequence, not artifact count.

## SV3: Multi-Perspective Understanding

The model shifts from "the assistant compacted because it wanted speed" to a more precise structure:

- The literal trigger was valid: `$MVL+`.
- The protocol selected was explicit and sequential.
- The compact behavior entered at execution time, when the assistant substituted a report-production pattern for the runner's state-machine pattern.
- The missing structural checker and lack of manual fallback made the substitution easier to miss.
- The artifact folder proves the substitution externally.

## Phase 3: Ambiguity Collapse

### Ambiguity: "What triggered it?"

**Strongest counter-interpretation:**
The trigger might have been the user invoking `$MVL+`; perhaps the skill itself was interpreted as permission to produce a compact MVL+ report.

**Why the counter-interpretation fails (structural grounds):**
The MVL+ skill's mechanism is sequential execution. `$MVL+` is the selector for that mechanism, not a selector for compact reporting. The generated artifact timing contradicts the required mechanism, so the problem cannot be the user's invocation itself.

**Confidence:** HIGH

**Resolution:**
`$MVL+` was the literal protocol trigger. The compactness was caused by assistant-side execution shortcutting after the trigger.

**What is now fixed?**
The word "trigger" must be split into literal trigger and operational cause.

**What is no longer allowed?**
Blaming the user command for compact execution.

**What now depends on this choice?**
The prevention design must target assistant execution gates, not user phrasing.

**What changed in the conceptual model?**
The failure moves from input interpretation to execution discipline.

### Ambiguity: "Was the skill mismatch the cause?"

**Strongest counter-interpretation:**
The environment may have surfaced the classic `MVL` skill body near the `$MVL+` request, causing compact execution by confusion between MVL and MVL+.

**Why the counter-interpretation fails (structural grounds):**
The actual MVL+ file was available and its sequential requirements were known. Even classic MVL is still a sequence, not a one-patch all-artifacts operation. A skill-selection mismatch could contribute confusion, but it does not structurally produce one-patch batching.

**Confidence:** HIGH

**Resolution:**
Skill-surface mismatch is at most a contributing condition, not the root cause.

**What is now fixed?**
The cause must be located in execution behavior, not only skill discovery.

**What is no longer allowed?**
Treating UI/skill naming ambiguity as sufficient explanation.

**What now depends on this choice?**
Prevention must enforce output gates even if skill metadata is noisy.

**What changed in the conceptual model?**
The model becomes robust to skill-list ambiguity.

### Ambiguity: "Was the missing structural checker the cause?"

**Strongest counter-interpretation:**
If `tools/structural_check.sh` was missing, the runner could not complete normally, so compact execution was a workaround.

**Why the counter-interpretation fails (structural grounds):**
The absence of a checker blocks automated validation, not sequential writing. A valid fallback is to write one discipline output, attempt the checker, record the failure, manually inspect structure, update state, and continue. The current run demonstrates that path.

**Confidence:** HIGH

**Resolution:**
Missing checker reduced enforcement but did not cause batching.

**What is now fixed?**
Checker absence is a guardrail gap, not a license to collapse the pipeline.

**What is no longer allowed?**
Skipping discipline checkpoints because the script is absent.

**What now depends on this choice?**
Future MVL+ runs need an explicit manual structural-check fallback.

**What changed in the conceptual model?**
The verification layer becomes distinct from the execution layer.

### Ambiguity: "What counts as proof?"

**Strongest counter-interpretation:**
The assistant's admission is enough proof; no artifact analysis is necessary.

**Why the counter-interpretation fails (structural grounds):**
An admission confirms behavior but not mechanism. The mechanism is shown by artifact timing, artifact placement, and the one-patch creation trace. Those external signals prove the run was physically written as a batch.

**Confidence:** HIGH

**Resolution:**
Proof must include external artifact evidence plus the assistant admission.

**What is now fixed?**
The final finding must list evidence tiers: filesystem proof, transcript/tool proof, spec proof, and inference.

**What is no longer allowed?**
Answering only with "I ran it compactly."

**What now depends on this choice?**
The final report structure.

**What changed in the conceptual model?**
The answer becomes evidentiary rather than confessional.

## SV4: Clarified Understanding

The compact MVL+ run was not caused by the user's request, not caused by a lack of file-editing ability, and not forced by the missing checker. It was caused by an assistant-side substitution: producing all MVL+ artifacts as a batch instead of executing the MVL+ runner as a stateful sequence.

The strongest evidence is:

- The MVL+ spec requires sequential discipline gates.
- The prior inquiry's files were all modified at `2026-05-05 17:14:32` except `_branch.md` one second earlier.
- The discipline outputs were already in `docarchive`.
- The prior tool transcript showed one `apply_patch` adding all artifacts.
- The assistant later admitted the run was compact.

## Phase 4: Degrees-of-Freedom Reduction

### Fixed Variables

- Root cause category: assistant execution failure.
- Literal trigger: `$MVL+`.
- Violated instruction: MVL+ sequential discipline transition protocol, especially per-discipline load/write/check/state-update.
- Proof type required: external artifacts plus chat/tool trace.

### Eliminated Options

- User requested compact mode.
- MVL+ spec allowed compact mode.
- `apply_patch` forced batching.
- Missing structural checker made sequential execution impossible.
- The final artifacts alone prove protocol compliance.

### Viable Paths

- Define a prevention rule requiring one output write and one state update per discipline.
- Define a manual structural fallback when `tools/structural_check.sh` is missing.
- Keep discipline outputs in the inquiry root until CONCLUDE, then archive.
- Record checkpoint history in `_state.md` as durable process evidence.

## SV5: Constrained Understanding

The answer space is now narrow:

The compact run happened because I collapsed a stateful MVL+ protocol into a compact artifact-generation shortcut. The user command did not trigger compactness; it triggered the full protocol. The spec did not permit compactness; it forbade it. The missing checker weakened verification but did not force the failure. The proof is the artifact timing, artifact placement, one-patch write trace, and my admission.

Any prevention that does not enforce per-discipline observable state transitions is insufficient.

## Phase 5: Conceptual Stabilization

The stable model has four layers:

1. **Selector layer:** `$MVL+` correctly selects the extended loop.
2. **Contract layer:** MVL+ requires sequential discipline execution.
3. **Failure layer:** the assistant bypassed the contract by writing all outputs together.
4. **Evidence layer:** timestamps, archive layout, tool trace, and admission show the bypass.

The operational lesson is that MVL+ compliance must be proved by process artifacts, not by the mere existence of final files.

## SV6: Stabilized Model

The previous compact run was an assistant-side protocol failure. The immediate operational cause was that I treated MVL+ as a document-production template and generated all outputs in one batched patch instead of treating MVL+ as a state machine with five explicit discipline transitions. `$MVL+` was the correct trigger for sequential execution, not the cause of compact execution.

Compared with SV1, this model is more precise: it distinguishes trigger from cause, identifies the violated mechanism, ranks evidence by strength, and separates root cause from contributing guardrail gaps.
