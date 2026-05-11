# Sensemaking: Loop Diagnose Protocol Integration

## User Input

`devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/_branch.md`

## SV1 - Baseline Understanding

The user's interpretation is mostly right: `loop_diagnose` is a way to compare a bad or weak MVL/MVL+ inquiry against a later corrected inquiry, using the user's correction as evidence for what the earlier loop missed.

The remaining ambiguity is architectural. Is this just a reusable prompt, a protocol file, a new discipline, or a conditional branch inside MVL/MVL+?

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- MVL/MVL+ should remain the atomic cognitive operation.
- Recent findings explicitly say `loop_diagnose` should not be promoted to a full discipline yet.
- A useful diagnosis must read both inquiry roots and `docarchive/` files, because CONCLUDE archives discipline outputs.
- The user's correction is not background context; it is evidence that points to the earlier loop's failure.
- The improved later inquiry is not automatically correct; it is comparative evidence.
- `homegrown/protocols/loop_diagnose.md` does not exist yet.
- MVL/MVL+ can load protocol files; CONCLUDE is the precedent.

### Key Insights

- The protocol is not the thing that thinks. MVL+ does the diagnosis.
- The protocol should standardize the diagnostic input and final diagnostic output.
- The user's sample prompt is a strong first draft of the protocol's operational intent.
- The first integration should be explicit, not automatic.
- The runner hook should frame the inquiry; it should not change the E -> S -> D -> I -> C pipeline.

### Structural Points

The correct structure has three layers:

1. **`loop_diagnose.md` protocol**
   - Defines correction-chain inputs and required outputs.

2. **MVL+ run**
   - Performs Exploration, Sensemaking, Decomposition, Innovation, and Critique over the correction chain.

3. **Diagnostic finding**
   - Stores failure attribution, evidence, confidence, and maintenance candidates.

### Foundational Principles

- Do not multiply primitives unless repeated evidence proves a new primitive is necessary.
- A protocol can shape an MVL+ run without becoming a discipline.
- Failure attribution should be evidence-backed and confidence-limited.
- Integration should preserve existing MVL/MVL+ behavior for ordinary inquiries.

### Meaning-Nodes

- Correction chain
- Diagnostic wrapper
- Input contract
- Output contract
- Self-maintenance entry
- Runner hook
- Atomic loop preservation

## SV2 - Anchor-Informed Understanding

`loop_diagnose` should be understood as a diagnostic protocol around MVL+, not as an independent analysis engine. It takes a specific evidence pattern:

```text
prior weak inquiry
+ human correction/direction
+ later improved inquiry
```

and turns that evidence pattern into an MVL+ question:

```text
What did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?
```

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- A protocol file can be loaded before a run to shape `_branch.md`.
- A conditional hook can be added to MVL/MVL+ without changing the pipeline.
- The hook needs explicit trigger conditions to avoid misclassification.
- The protocol should require both path roles to be named clearly: `prior_path` and `corrected_path`.

Technical interpretation: create `homegrown/protocols/loop_diagnose.md`, then add a small explicit loading rule in MVL/MVL+.

### Human / User Perspective

New anchors:

- The user should not have to rewrite a long diagnostic prompt every time.
- The protocol should preserve the user's correction text exactly enough that future readers can see the correction signal.
- The output should say what likely went wrong without pretending to know exact internal causality.

Human interpretation: the protocol should reduce repeat typing while preserving user guidance as evidence.

### Strategic / Long-Term Perspective

New anchors:

- Correction-chain diagnosis is the first realistic Level 1 self-maintenance evidence generator.
- Diagnostic findings can motivate branch experiments.
- Meta-loop automation can later discover and run these diagnoses, but that is not the first implementation.

Strategic interpretation: `loop_diagnose` should produce durable evidence records that later systems consume.

### Risk / Failure Perspective

New anchors:

- Automatic detection could misclassify ordinary critical questions as self-maintenance diagnostics.
- Overconfident discipline attribution can become fake precision.
- A new skill could make `loop_diagnose` look like a new cognitive discipline too early.
- The later improved inquiry may itself contain mistakes.

Risk interpretation: require explicit inputs, evidence-backed attributions, and confidence labels.

### Resource / Feasibility Perspective

New anchors:

- Writing a protocol file is low-cost.
- Adding a one-paragraph hook to MVL/MVL+ is small, but should wait until the protocol file exists.
- Building a separate runner or skill is heavier and premature.

Feasibility interpretation: first version can be Markdown-native and simple.

### Definitional / Consistency Perspective

New anchors:

- Prior findings repeatedly preserve MVL/MVL+ as the atomic loop.
- CONCLUDE shows that a protocol can be loaded by a runner without being a discipline.
- `loop_diagnose` should be closer to CONCLUDE in role than to Sensemaking or Critique.

Consistency interpretation: protocol wrapper is consistent; new discipline is inconsistent for now.

## SV3 - Multi-Perspective Understanding

The stable concept is:

```text
loop_diagnose = a protocol for constructing a diagnostic MVL+ inquiry
from a correction chain.
```

It should not replace MVL+. It should not become a new discipline yet. It should not be invisible automation.

The best hook is explicit:

```text
If the user explicitly asks for loop_diagnose / self-maintenance diagnosis /
correction-chain diagnosis, load homegrown/protocols/loop_diagnose.md
before creating _branch.md.
```

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is `loop_diagnose` basically the user's proposed message?

**Strongest counter-interpretation:**
No. A protocol should be much more formal than a user message and should define a separate analysis method.

**Why the counter-interpretation fails (structural grounds):**
The project has already decided MVL+ is the reasoning engine. A separate analysis method would multiply primitives before there are enough examples. The user's message already contains the key operation: compare prior and corrected inquiries using the human correction as evidence.

**Confidence:** HIGH

**Resolution:**
Yes, the user's message is basically the operational core of `loop_diagnose`, but the protocol should formalize it into fields, required reads, output sections, and confidence rules.

**What is now fixed?**
The protocol's job is input/output shaping, not independent reasoning.

**What is no longer allowed?**
Treating `loop_diagnose` as a new discipline just because it has a named protocol.

**What now depends on this choice?**
The protocol file design and MVL/MVL+ hook design.

**What changed in the conceptual model?**
The protocol becomes a reusable diagnostic prompt contract.

### Ambiguity: Should MVL/MVL+ automatically load `loop_diagnose`?

**Strongest counter-interpretation:**
Yes. If the runner can infer self-maintenance intent, automatic loading would make the system smarter.

**Why the counter-interpretation fails (structural grounds):**
The system has no reliable classifier yet. Misclassification would change inquiry framing without explicit user consent. Also, the protocol does not exist yet, so there is nothing stable to load.

**Confidence:** HIGH

**Resolution:**
Add an explicit or conservatively conditional hook after the protocol file exists. The hook should require clear user intent, such as "loop_diagnose", "correction-chain diagnosis", or "self-maintenance diagnosis".

**What is now fixed?**
Automatic inference should not be the first integration.

**What is no longer allowed?**
Silent diagnosis-mode switching on vague language.

**What now depends on this choice?**
MVL/MVL+ edits should be tiny and transparent.

**What changed in the conceptual model?**
The runner hook is a mode-selection convenience, not autonomous interpretation.

### Ambiguity: Should this be available in MVL or only MVL+?

**Strongest counter-interpretation:**
Only MVL+ should support it because the prior findings say diagnostic runs should use MVL+.

**Why the counter-interpretation fails (structural grounds):**
The core diagnostic task benefits from MVL+ because it needs artifact exploration and decomposition. But users may invoke `$MVL` with self-maintenance wording. The classic runner should either redirect to MVL+ or load the same protocol and state that MVL+ is recommended.

**Confidence:** MEDIUM-HIGH

**Resolution:**
Primary integration belongs in MVL+. MVL can include a small note: for correction-chain diagnosis, prefer MVL+ because Exploration and Decomposition are important.

**What is now fixed?**
MVL+ is the default diagnostic engine.

**What is no longer allowed?**
Treating classic MVL as equally good for complex correction-chain diagnosis without caveat.

**What now depends on this choice?**
Runner hook wording and user-facing usage examples.

**What changed in the conceptual model?**
`loop_diagnose` is MVL+-first, MVL-compatible only for simple cases.

### Ambiguity: What should the output be?

**Strongest counter-interpretation:**
The output should identify exactly which discipline failed.

**Why the counter-interpretation fails (structural grounds):**
Exact discipline failure attribution is often not observable. The evidence can show likely failure locations and failure types, but the same bad result may come from framing, missing context, weak critique, or CONCLUDE synthesis. Overclaiming exact causality would damage the value of the diagnostic.

**Confidence:** HIGH

**Resolution:**
The output should provide evidence-backed failure hypotheses with confidence, not pretend exact root cause.

**What is now fixed?**
Attributions should be probabilistic and evidence-linked.

**What is no longer allowed?**
Unqualified statements like "Sensemaking failed" unless the evidence directly supports it.

**What now depends on this choice?**
The output contract should include confidence and evidence.

**What changed in the conceptual model?**
Diagnosis becomes a differential diagnosis, not a verdict court.

## SV4 - Clarified Understanding

`loop_diagnose` should be a protocol file that turns a correction chain into a diagnostic MVL+ run.

The user's proposed message is a good seed, but the final protocol should ask for explicit fields:

```text
prior_path:
corrected_path:
human_correction:
optional context:
diagnostic goal:
```

It should instruct the agent to read both inquiry roots and `docarchive/`, preserve the correction signal, compare the prior and corrected outputs, and produce evidence-backed failure hypotheses plus maintenance candidates.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- `loop_diagnose` is a protocol/template, not a new discipline.
- MVL+ is the default engine for correction-chain diagnosis.
- The protocol file should exist before runner hooks are added.
- The hook should be explicit or conservatively conditional.
- The output should be confidence-limited and evidence-backed.

### Eliminated

- Separate `homegrown/loop-diagnose/SKILL.md` now.
- Silent automatic mode switching.
- Exact discipline attribution without evidence.
- Using only the final `finding.md` while ignoring archived discipline files.

### Viable Paths

1. Create `homegrown/protocols/loop_diagnose.md`.
2. Use it manually first with MVL+.
3. After it works once or twice, add an MVL+ hook:

```text
If the user explicitly asks for loop_diagnose, correction-chain diagnosis,
or self-maintenance diagnosis, read homegrown/protocols/loop_diagnose.md
before creating _branch.md and use it to frame the inquiry.
```

4. Add a lighter MVL note that recommends MVL+ for this use case.

## SV5 - Constrained Understanding

The first implementation should be small:

```text
User asks for loop_diagnose
-> MVL+ loads homegrown/protocols/loop_diagnose.md
-> protocol shapes _branch.md around prior_path, corrected_path, and human correction
-> MVL+ runs normally
-> CONCLUDE produces diagnostic finding
-> later branch experiment may consume that finding
```

This preserves MVL+ as the atomic loop while removing the need for the user to write the whole diagnostic prompt every time.

## Phase 5 - Conceptual Stabilization

`loop_diagnose` is best understood as an input/output contract for a special class of MVL+ inquiry: the correction-chain diagnostic.

It is not just "compare two folders." The human correction is the key evidence because it tells the system what the older run failed to satisfy.

It is not a new discipline. It is closer to CONCLUDE than to Sensemaking: a protocol file that tells the runner how to handle a special phase or special input shape.

## SV6 - Stabilized Model

The clean rephrase is:

```text
loop_diagnose is a lightweight protocol for turning a correction chain
into a diagnostic MVL+ inquiry.

It reads the weak prior inquiry, the human correction, and the improved
later inquiry. It asks MVL+ to infer evidence-backed failure hypotheses,
confidence levels, and maintenance candidates. It does not replace MVL+,
and it should not be promoted to a full discipline until repeated examples
show a distinct method that MVL+ cannot already cover.
```

The integration should be:

```text
1. Create homegrown/protocols/loop_diagnose.md.
2. Use it explicitly with MVL+ first.
3. Add a small MVL+ hook after the protocol exists.
4. Keep classic MVL unchanged except for optionally pointing complex
   diagnostic requests to MVL+.
```

## Sensemaking Telemetry

- **Perspective saturation:** High. Technical, human, strategic, risk, feasibility, and consistency perspectives converged.
- **Ambiguity resolution ratio:** 4/4 central ambiguities resolved.
- **SV delta:** Strong. SV1 asked whether the protocol is basically the user's message; SV6 defines the protocol as a diagnostic MVL+ input/output contract with explicit integration sequence.
- **Anchor diversity:** High. Anchors include constraints, structural points, principles, and meaning-nodes.
