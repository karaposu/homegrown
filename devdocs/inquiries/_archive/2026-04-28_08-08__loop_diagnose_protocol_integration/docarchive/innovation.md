# Innovation: Loop Diagnose Protocol Integration

## User Input

`devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/_branch.md`

## Seed

The user wants to know whether `loop_diagnose` is basically a structured version of their proposed comparative prompt, and how it should be loaded by MVL/MVL+ without making a new discipline or breaking the atomic-loop model.

Direction: find the simplest integration that preserves MVL+ as the reasoning engine while making correction-chain diagnosis reusable.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** View `loop_diagnose` as a prompt library entry.

- Test: partially survives. The user's message is prompt-like, but a prompt library entry alone would not define durable inputs, outputs, or file-reading rules.

**Focused:** View `loop_diagnose` as a protocol wrapper for MVL+.

- Test: survives strongly. This matches prior findings and keeps the atomic loop intact.

**Contrarian:** View `loop_diagnose` as an audit mode, not a diagnosis mode.

- Test: useful refinement. "Audit" reduces overclaiming, but "diagnose" is still acceptable if confidence-limited.

### 2. Combination

**Generic:** Combine user prompt + protocol file.

- Test: survives. The user's message becomes the natural-language core; the protocol file adds fields and safeguards.

**Focused:** Combine protocol file + explicit MVL+ hook.

- Test: strongest candidate. The hook makes usage ergonomic without making the protocol a new primitive.

**Contrarian:** Combine protocol file + diagnostics folder convention.

- Test: useful. It helps keep diagnostic findings discoverable, but should not be required to answer the current integration question.

### 3. Inversion

**Generic:** What if `loop_diagnose` is not loaded by MVL/MVL+?

- Result: the user keeps writing long prompts manually. The concept remains informal.
- Test: weak long-term.

**Focused:** What if `loop_diagnose` is loaded before `_branch.md` creation rather than during disciplines?

- Result: strong. It frames the inquiry question and required context before the pipeline begins.
- Test: survives.

**Contrarian:** What if MVL/MVL+ should not detect it automatically?

- Result: the first hook should require explicit trigger language.
- Test: survives because misclassification risk is real.

### 4. Constraint Manipulation

**Generic:** Add constraint: no new discipline.

- Test: aligns with prior findings.

**Focused:** Add constraint: no runner behavior change until `loop_diagnose.md` exists.

- Test: strong. Prevents hooking an undefined protocol.

**Contrarian:** Add constraint: output must include "what evidence would disconfirm this diagnosis."

- Test: strong but perhaps belongs inside protocol content, not runner integration.

### 5. Absence Recognition

**Generic:** Missing: `homegrown/protocols/loop_diagnose.md`.

- Test: confirmed absent.

**Focused:** Missing: a standard input schema for correction-chain diagnosis.

- Test: critical. Without schema, each run invents its own evidence shape.

**Contrarian:** Missing: a safe downgrade path for classic MVL.

- Test: useful. Classic MVL can say "prefer MVL+ for this," rather than silently doing a weaker diagnostic.

### 6. Domain Transfer

**Generic:** Transfer from bug-report templates.

- Test: useful. Good bug reports separate observed failure, reproduction, expected result, actual result, and environment.

**Focused:** Transfer from incident postmortems.

- Test: strong. Postmortems separate trigger, impact, contributing factors, evidence, corrective actions, and follow-up owners.

**Contrarian:** Transfer from differential diagnosis.

- Test: strongest conceptual guardrail. It avoids pretending there is one exact cause and instead ranks hypotheses by evidence.

### 7. Extrapolation

**Generic:** If correction chains grow, manual prompts become inconsistent.

- Test: high confidence.

**Focused:** If branch experiments begin, each branch will need a diagnostic source.

- Test: high confidence. `loop_diagnose` findings become branch motivation artifacts.

**Contrarian:** If hooks are too automatic, future runs may enter diagnostic mode accidentally.

- Test: high confidence. Supports explicit trigger first.

## Candidate Designs

### Candidate A - User Prompt Only

The user continues to write a long prompt that names both inquiry paths and describes the diagnostic task.

Verdict: REFINE.

Why: this works once, but it does not create reusable protocol structure.

### Candidate B - `homegrown/protocols/loop_diagnose.md` Only

Create the protocol file, but do not modify MVL/MVL+.

Verdict: SURVIVE as first implementation.

Why: it is safe, low-cost, and enough for manual use. The user can say "run MVL+ using `homegrown/protocols/loop_diagnose.md` on these paths."

### Candidate C - Protocol File Plus Explicit MVL+ Hook

Add a small section to MVL+:

```text
If the user explicitly asks for `loop_diagnose`, correction-chain diagnosis,
or self-maintenance diagnosis, read `homegrown/protocols/loop_diagnose.md`
before creating `_branch.md`. Use it to frame the inquiry, then run the
normal E -> S -> D -> I -> C pipeline.
```

Verdict: SURVIVE as second implementation.

Why: this is ergonomic and preserves the pipeline.

### Candidate D - Automatic Inference Hook

MVL/MVL+ detects self-maintenance intent broadly from the user's wording and loads the protocol automatically.

Verdict: KILL for now.

Why: it risks silent mode switching and misclassification.

### Candidate E - Separate `loop-diagnose` Skill

Create `homegrown/loop-diagnose/SKILL.md`.

Verdict: KILL for now.

Why: it implies a new discipline or primitive before enough diagnostic examples exist.

### Candidate F - Meta-Loop Owns All Diagnosis

Do not hook MVL/MVL+; let future meta-loop discover correction chains and run diagnostics.

Verdict: DEFER.

Why: future-compatible, but too late for current rapid fundamentals improvement.

### Candidate G - Classic MVL Hook Equal To MVL+

Add the same hook to MVL and MVL+.

Verdict: REFINE.

Why: MVL can support simple cases, but complex correction-chain diagnosis benefits from Exploration and Decomposition. Classic MVL should point users to MVL+ by default.

## Assembly Check

Strongest assembly:

```text
1. Create `homegrown/protocols/loop_diagnose.md`.
2. Use it manually with MVL+ for the first real correction-chain diagnosis.
3. Then add an explicit MVL+ hook.
4. Add only a small MVL note: for correction-chain diagnosis, prefer MVL+.
5. Defer separate skill and automatic inference.
```

This assembly works because each piece limits the others:

- Protocol file prevents repeated ad hoc prompts.
- MVL+ preserves the atomic loop.
- Explicit hook improves ergonomics without hidden classification.
- MVL note prevents using a weaker pipeline accidentally.
- Deferring the skill prevents premature primitive multiplication.

## Survivors

1. `loop_diagnose` as a protocol wrapper around MVL+.
2. User's prompt as the semantic core of the protocol.
3. Required input schema: prior path, corrected path, human correction, optional context.
4. Required full reads: root files and `docarchive/` for both inquiries.
5. Evidence-backed, confidence-limited failure hypotheses.
6. Manual protocol use first.
7. Explicit MVL+ hook second.
8. No separate skill now.

## Innovation Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES - lens shifting, combination, inversion, absence recognition, and extrapolation converge on protocol wrapper plus explicit MVL+ hook.
- **Survivors tested:** 7 / 7 candidate designs tested.
- **Failure modes observed:** None. Premature discipline creation and automatic hook risk were tested and rejected.
- **Overall: PROCEED**
