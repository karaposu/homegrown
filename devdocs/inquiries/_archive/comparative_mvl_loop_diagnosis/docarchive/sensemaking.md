# Sensemaking: Comparative MVL Loop Diagnosis

## User Input

`devdocs/inquiries/comparative_mvl_loop_diagnosis/_branch.md`

Question: Should Homegrown's next self-maintenance step be a comparative diagnostic protocol that analyzes failed and improved MVL inquiry runs, rather than trying to build advanced autonomous self-maintenance directly?

## SV1: Baseline Understanding

The user is identifying a more practical self-maintenance path. Instead of building advanced autonomous maintenance, Homegrown should first mine its natural correction loop: run MVL, dislike the finding, give corrective feedback, rerun MVL, and compare the bad and better runs to learn what failed.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- MVL/MVL+ now functions as the core atomic operation for many project decisions.
- The human already provides correction signals after reading findings.
- Existing Reflection examines a completed run's process.
- Existing Reflection does not explicitly compare a failed inquiry to a later corrected inquiry.
- The project does not yet know enough to design advanced self-maintenance in one step.
- A useful next step should generate data for improving loop fundamentals.

### Key Insights

- User correction after a bad finding is high-quality failure evidence.
- A better later finding is not just a better answer; it is a contrast case that reveals what the first loop missed.
- Comparative diagnosis can attribute failure to Sensemaking, Innovation, Critique, CONCLUDE, framing, or orchestration.
- This is more grounded than asking a single run to introspect itself.
- The output can feed the self-maintenance ledger proposed in the Level 1 finding.

### Structural Points

- The unit of analysis shifts from one discipline to one MVL run or run chain.
- The evidence object shifts from "single run's artifacts" to "delta between runs plus user feedback."
- The target output shifts from general reflection observations to failure attribution and maintenance candidates.
- The improvement loop becomes data-first rather than autonomy-first.

### Foundational Principles

- Failures are easier to diagnose when a later correction exists.
- Self-maintenance should grow from observed repair traces, not speculative architecture.
- A protocol should not claim to fix fundamentals; it should produce evidence that helps decide which fundamentals to change.

### Meaning-Nodes

- Comparative diagnosis
- Bad run / better run delta
- User correction as failure signal
- Failure attribution
- Maintenance candidate
- Loop-chain improvement
- Reflection vs diagnosis
- Level 1 self-maintenance data

## SV2: Anchor-Informed Understanding

The right concept is a new diagnostic operation that compares multiple inquiry folders and user feedback to identify where the original MVL loop failed. It is not simply Reflection, because it has an external correction signal and a contrast case.

## Phase 2: Perspective Checking

### Technical / Logical

The protocol should accept at least:

- a source inquiry folder,
- one or more revision inquiry folders,
- user correction text or a reference to where the correction was recorded.

It should read findings and, when present, archived discipline outputs. It should compare what changed and attribute those changes to process failures.

### Human / User

This matches how the user actually works. The human often knows a finding is wrong or shallow after reading it, then provides additional guidance. That guidance should not disappear into the conversation. It should become system improvement data.

### Strategic / Long-Term

This is a better Level 1 self-maintenance step than building autonomous maintenance. It creates the dataset needed to later automate diagnosis and maintenance recommendation.

### Risk / Failure

The main risk is false attribution. A later finding may be better because it received more context, not because the original Sensemaking or Critique was bad. The protocol must separate system failure from newly supplied information.

### Resource / Feasibility

This is feasible now. It can be Markdown-native. It does not require a new runtime, scheduler, or autonomous editor.

### Ethical / Systemic

The protocol should not blame the user for missing context. It should ask whether the system could have elicited or checked for that context earlier.

### Definitional / Consistency

Reflection and comparative diagnosis are different:

- **Reflection:** examines one run's process.
- **Comparative diagnosis:** compares a bad run, user feedback, and improved run to infer why the earlier loop failed.
- **Self-maintenance:** uses repeated diagnoses to change system fundamentals.

## SV3: Multi-Perspective Understanding

The stable model is a three-step learning chain:

1. **MVL produces a finding.**
2. **Comparative diagnosis learns from failed/improved MVL run pairs.**
3. **Self-maintenance uses accumulated diagnoses to improve disciplines, protocols, and loop behavior.**

Reflection remains useful, but it should no longer be the only learning mechanism.

## Phase 3: Ambiguity Collapse

### Ambiguity: Is this just Reflection?

**Strongest counter-interpretation:**
Yes. Reflection already examines process, notes human interventions, and proposes memory cells. It could just be expanded.

**Why the counter-interpretation fails on structural grounds:**
Reflection's current input shape is a completed run. Comparative diagnosis has a different input shape: multiple inquiry folders plus a correction signal. It answers a different question: not "how did this run perform?" but "why did the earlier run fail relative to the correction and later run?"

**Confidence:** HIGH

**Resolution:**
This should be a distinct protocol or discipline, not merely ordinary Reflection.

**What is now fixed?**
Use a new name such as `loop-diagnose`, `delta-diagnose`, or `comparative-diagnosis`.

**What is no longer allowed?**
Assuming single-run Reflection is sufficient for cross-run learning.

**What now depends on this choice?**
The output format can be specialized for failure attribution and maintenance candidates.

**What changed in the conceptual model?**
Reflection becomes one learning operation among several, not the sole self-maintenance mechanism.

### Ambiguity: Should this replace Reflection?

**Strongest counter-interpretation:**
Yes. If MVL loop is the atomic unit, Reflection between disciplines is less important and can be removed.

**Why the counter-interpretation fails on structural grounds:**
Single-run Reflection and comparative diagnosis catch different signals. Reflection can still detect process issues when no later revision exists. Comparative diagnosis is stronger when a correction chain exists. Replacing one with the other would lose coverage.

**Confidence:** MEDIUM-HIGH

**Resolution:**
Do not replace Reflection now. Add comparative diagnosis as a new operation that can feed Reflection or the self-maintenance ledger.

**What is now fixed?**
The first build is additive.

**What is no longer allowed?**
Deleting Reflection before comparative diagnosis has produced evidence.

**What now depends on this choice?**
Future maintenance can decide whether Reflection should shrink, change role, or remain separate after evidence accumulates.

**What changed in the conceptual model?**
The system gains a learning pipeline rather than a single reflection step.

### Ambiguity: What should the protocol output?

**Strongest counter-interpretation:**
It should output direct spec changes.

**Why the counter-interpretation fails on structural grounds:**
Direct spec changes skip Level 1 instrumentation. The immediate output should be diagnosis and maintenance candidates, not automatic changes to fundamentals.

**Confidence:** HIGH

**Resolution:**
Output an evidence pack: delta summary, failure attributions, maintenance candidates, and recommended self-maintenance entries.

**What is now fixed?**
The protocol produces data for maintenance, not maintenance itself.

**What is no longer allowed?**
Using one bad/good pair as automatic authority to change discipline fundamentals.

**What now depends on this choice?**
The output should include confidence and evidence for each attribution.

**What changed in the conceptual model?**
The first goal is data generation for rapid learning.

### Ambiguity: Where does this fit in the self-maintenance ladder?

**Strongest counter-interpretation:**
This is already Level 2 or Level 3 because it systematizes maintenance.

**Why the counter-interpretation fails on structural grounds:**
The protocol can be manually invoked and can still require human approval. It mainly creates structured evidence. That is Level 1 instrumentation, not autonomous maintenance.

**Confidence:** HIGH

**Resolution:**
Comparative diagnosis is a Level 1 data generator and a prerequisite for Level 2 recommendations.

**What is now fixed?**
Treat it as the practical first Level 1 build.

**What is no longer allowed?**
Calling it autonomous self-maintenance.

**What now depends on this choice?**
It should integrate with `devdocs/self_maintenance.md` once that exists.

**What changed in the conceptual model?**
Level 1 becomes less abstract: it has a concrete diagnostic operation.

## SV4: Clarified Understanding

The proposed comparative diagnostic protocol is the right near-term direction. It uses real correction traces to learn what went wrong in earlier MVL runs. It should be separate from ordinary Reflection, additive rather than replacing Reflection, and focused on evidence generation for Level 1 self-maintenance.

## Phase 4: Degrees-of-Freedom Reduction

### Fixed

- The new operation should compare multiple inquiry folders.
- It should use user correction as a central evidence source.
- It should attribute failures to loop components.
- It should produce maintenance candidates, not direct autonomous edits.
- It should be Level 1, not advanced self-maintenance.

### Eliminated

- Building advanced self-maintenance first.
- Treating Reflection as the only learning mechanism.
- Replacing Reflection immediately.
- Letting comparative diagnosis auto-edit fundamentals.
- Ignoring user feedback after reruns.

### Viable Paths

- Create a new `loop-diagnose` protocol/discipline.
- Define a diagnosis output folder for each comparison.
- Feed diagnosis outputs into Reflection or the self-maintenance ledger.
- After enough diagnoses accumulate, run MVL+ on them to improve discipline specs.

## SV5: Constrained Understanding

The best next move is a comparative loop-diagnosis protocol. It should be small, manual-first, and evidence-producing. It lets the project rapidly improve MVL fundamentals by analyzing real bad-to-better correction chains, without pretending to have advanced autonomous self-maintenance.

## Phase 5: Conceptual Stabilization

## SV6: Stabilized Model

Homegrown should add a new operation: **Comparative Loop Diagnosis**.

Its job is to read a bad MVL inquiry, the user's correction, and one or more later improved inquiries. It then extracts what changed, why the first loop likely failed, which component failed, and what maintenance candidate should be recorded.

This is not ordinary Reflection. Reflection is single-run process review. Comparative Loop Diagnosis is cross-run failure attribution using external correction evidence.

This is also not advanced self-maintenance. It is the data-generating layer that makes Level 1 self-maintenance real and prepares Level 2 later. The project should build this before attempting autonomous self-maintenance logic.

SV6 differs from SV1 by making the proposal concrete: create a new cross-inquiry diagnostic operation that turns human correction and rerun deltas into structured improvement data.
