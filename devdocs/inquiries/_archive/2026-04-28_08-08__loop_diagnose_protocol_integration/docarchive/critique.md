# Critique: Loop Diagnose Protocol Integration

## User Input

`devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/_branch.md`

## A. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Atomic-loop preservation | Critical | MVL/MVL+ remains the reasoning engine; no premature new discipline. |
| Practical ergonomics | High | The user should not need to rewrite the long diagnostic prompt every time. |
| Input completeness | Critical | The design requires both inquiry paths, human correction, and archived discipline files. |
| Attribution humility | Critical | The output avoids fake exact root-cause claims. |
| Integration safety | High | The runner does not silently switch modes on vague wording. |
| Near-term feasibility | High | The first version can be implemented as Markdown protocol plus small hook. |
| Downstream usefulness | High | Diagnostic outputs can feed branch experiments and retrospective review. |

## B. Fitness Landscape

### Viable Region

`homegrown/protocols/loop_diagnose.md` as a lightweight protocol wrapper around MVL+, used manually first and later loaded by an explicit MVL+ hook.

### Dead Region

- Separate `loop-diagnose` discipline now.
- Silent automatic diagnosis-mode classification.
- Exact discipline failure attribution without evidence.
- Protocol-free repeated manual prompts as the long-term pattern.

### Boundary Region

- Classic MVL support: useful for simple cases, but MVL+ should be default.
- Diagnostics folder convention: likely useful, but not required before answering integration.
- Meta-loop-owned automation: aligned long-term, premature now.

### Unexplored Region

- Exact contents of `homegrown/protocols/loop_diagnose.md`.
- Whether diagnostic inquiry folders should live under `devdocs/inquiries/diagnostics/` or the normal timestamped flat inquiry store.

## C. Candidate Verdicts

### Candidate A - User Prompt Only

**Prosecution:** This repeats the current weakness. The user must manually remember the full diagnostic shape, and future agents will vary in what they read and output.

**Defense:** It is flexible and already works.

**Collision:** The defense wins only for the immediate moment. As a system mechanism, prompt-only diagnosis fails because it does not create a reusable input/output contract.

**Verdict: REFINE**

Constructive output: turn the user's prompt into the semantic core of `loop_diagnose.md`.

### Candidate B - Protocol File Only

**Prosecution:** Without a runner hook, it may become another unused protocol file.

**Defense:** It is the safest first step. It defines the contract before changing the runner.

**Collision:** Defense wins for phase 1. The file must be used manually on at least one real correction chain before runtime hooks matter.

**Verdict: SURVIVE**

Caveat: it should not stay unused; it should be tested quickly on a real correction chain.

### Candidate C - Protocol File Plus Explicit MVL+ Hook

**Prosecution:** Any hook adds complexity to MVL+. It could also create another mode inside a runner that is supposed to be simple.

**Defense:** The hook does not change the pipeline. It only loads a protocol before `_branch.md` creation when the user explicitly asks for a diagnostic mode.

**Collision:** Defense wins if the trigger is explicit and the pipeline remains unchanged.

**Verdict: SURVIVE**

Implementation constraint: the hook should say "load and use the protocol to frame the inquiry," not "run a different pipeline."

### Candidate D - Automatic Inference Hook

**Prosecution:** This causes silent mode switching. The runner may treat ordinary criticism as self-maintenance diagnosis, changing the inquiry shape without clear user intent.

**Defense:** Automation would feel smarter and reduce user ceremony.

**Collision:** Prosecution wins. The current system has no reliable intent classifier, and the cost of wrong framing is high.

**Verdict: KILL**

Constructive seed: revisit after there are at least 10 successful explicit diagnostic runs with stable trigger patterns.

### Candidate E - Separate `loop-diagnose` Skill

**Prosecution:** It violates the current atomic-loop principle and makes `loop_diagnose` look like a new cognitive discipline before enough examples exist.

**Defense:** It would be discoverable and easy to invoke.

**Collision:** Prosecution wins now. Discoverability can be solved by MVL+ hook text without creating a new primitive.

**Verdict: KILL for now**

Constructive seed: revisit only after 5-10 diagnostic MVL+ findings show a stable operation that cannot be explained as ordinary MVL+ on a diagnostic question.

### Candidate F - Meta-Loop Owns All Diagnosis

**Prosecution:** This delays the most useful current mechanism behind a larger future runner.

**Defense:** Meta-loop eventually should detect and traverse correction chains.

**Collision:** Defense is future-valid but not current-valid.

**Verdict: DEFER**

Revival condition: after meta-loop has real selection traces and can launch MVL+ inquiries reliably.

### Candidate G - Classic MVL Hook Equal To MVL+

**Prosecution:** Classic MVL lacks Exploration and Decomposition, which are useful for reading two inquiry folders and separating failure sources.

**Defense:** Some correction-chain diagnoses may be small enough for SIC.

**Collision:** Both are partly right. MVL can support small cases, but the recommended route should be MVL+.

**Verdict: REFINE**

Refinement: add a classic MVL note that correction-chain diagnosis usually belongs in MVL+.

## D. Assembly Check

Surviving assembly:

```text
Phase 1:
  Create homegrown/protocols/loop_diagnose.md.
  Use it manually with MVL+ on one real correction chain.

Phase 2:
  Add explicit MVL+ hook:
  if user explicitly says loop_diagnose / correction-chain diagnosis /
  self-maintenance diagnosis, load the protocol before _branch.md creation.

Phase 3:
  Add a small MVL note recommending MVL+ for correction-chain diagnosis.

Deferred:
  automatic inference, separate skill, meta-loop ownership.
```

Assembly verdict: **SURVIVE**

Why it survives:

- Preserves MVL+ as the reasoning engine.
- Turns the user's proposed prompt into a reusable protocol.
- Avoids silent automation.
- Keeps implementation small.
- Produces diagnostic findings that can feed self-maintenance and branch experiments.

## E. Coverage Map

| Concern | Covered? | Notes |
|---|---:|---|
| Is the user's interpretation right? | Yes | Yes, with added structure. |
| Is it a protocol or discipline? | Yes | Protocol wrapper, not discipline. |
| What input should it read? | Yes | Prior path, corrected path, correction text, docarchive files. |
| What should it output? | Yes | Evidence-backed hypotheses, confidence, maintenance candidates. |
| How should MVL/MVL+ load it? | Yes | Protocol first, explicit MVL+ hook second. |
| Should MVL also load it? | Yes | MVL+ recommended; MVL may note/redirect. |
| What should be deferred? | Yes | Automatic inference, separate skill, meta-loop ownership. |

## F. Signal

**TERMINATE with ranked survivors.**

Ranked survivors:

1. Protocol file first: `homegrown/protocols/loop_diagnose.md`.
2. Manual MVL+ use for the first real correction-chain diagnosis.
3. Explicit MVL+ hook after the protocol exists.
4. Classic MVL note recommending MVL+ for this use case.

Killed:

1. Separate `loop-diagnose` skill now.
2. Silent automatic inference hook now.
3. Prompt-only diagnosis as the long-term pattern.

Deferred:

1. Meta-loop-owned automatic diagnosis.
2. Promotion to full discipline.

## Convergence Telemetry

- **Dimension coverage:** Complete for this question.
- **Adversarial strength:** STRONG. Main risks tested were primitive multiplication, silent mode switching, incomplete evidence, and fake root-cause certainty.
- **Landscape stability:** STABLE. All phases converged on protocol wrapper plus explicit MVL+ hook.
- **Clean SURVIVE exists:** YES - protocol file first, explicit MVL+ hook second.
- **Failure modes observed:** Self-reference risk was present but contained by using correction-chain evidence and confidence-limited attribution.
- **Output: PROCEED**
