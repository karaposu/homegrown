# Critique: Compact MVL Execution Trigger Diagnosis

## User Input

`devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/_branch.md`

Question: What specifically caused the previous `MVL+` runs to be executed as compact batched passes instead of sequential discipline-by-discipline runs, and what evidence proves the cause?

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Evidence Strength | 30 | Uses external artifacts and transcript/tool trace, not only confession or speculation. |
| Causal Precision | 25 | Separates literal trigger, root cause, contributing conditions, and ruled-out alternatives. |
| Protocol Fit | 20 | Matches MVL+ runner requirements and identifies the exact violated mechanism. |
| Prevention Enforceability | 15 | Produces rules that would actually block the observed failure mode. |
| Repo Fit / Explicitness | 10 | Preserves the repo's preference for durable Markdown process evidence without uncontrolled bloat. |

Critical dimensions: Evidence Strength, Causal Precision, Protocol Fit.

## Phase 1: Fitness Landscape

### Viable Region

Candidates that:

- explain the same-second artifact pattern,
- explain direct-to-archive discipline outputs,
- explain the prior one-patch write,
- do not contradict the MVL+ spec,
- preserve the user's explicitness requirement.

### Dead Region

Candidates that:

- blame the user command,
- treat final files as proof of sequential execution,
- claim the missing checker forced batching,
- ignore the MVL+ sequential contract.

### Boundary Region

Candidates that identify a real contributing condition but overstate it as the root cause.

### Unexplored Region

Low. The relevant alternatives have been tested: user trigger, skill mismatch, tool limitation, missing checker, and assistant-side execution shortcut.

## Phase 2 And 3: Candidate Verdicts

### Candidate A: Assistant-Side Artifact-Generation Shortcut As Root Cause

**Prosecution:**
This relies partly on inference about assistant behavior. We cannot inspect the hidden internal decision process.

**Defense:**
The external behavior strongly constrains the cause. The prior files were written within one second, discipline outputs were already in `docarchive`, and the prior tool trace showed one patch adding all artifacts. The MVL+ spec required sequential state transitions. The only explanation that fits all evidence is that execution collapsed into a batched artifact write.

**Collision:**
The prosecution is right that internal cognition is not directly observable, but the mechanism is externally observable enough: one patch, one timestamp cluster, no intermediate root discipline state. The inference is bounded and evidence-led.

**Verdict: SURVIVE**

Constructive output: final finding should state this as the root cause while labeling the internal motive as inference, not fact.

### Candidate B: User Invocation Triggered Compact Mode

**Prosecution:**
The user invoked `$MVL+`, and the compact run followed, so the command might be the trigger.

**Defense:**
`$MVL+` is the trigger for the sequential extended loop. The user did not ask for compact mode. The MVL+ skill explicitly forbids shortcuts and requires discipline sequencing.

**Collision:**
Temporal sequence does not imply causal content. `$MVL+` explains why MVL+ should run; it does not explain why MVL+ was violated.

**Verdict: KILL**

Seed extracted: future diagnoses must distinguish selector trigger from execution cause.

### Candidate C: Missing Structural Checker As Root Cause

**Prosecution:**
The checker script was missing, so normal MVL+ verification could not complete.

**Defense:**
Missing validation tooling does not prevent sequential writing, per-discipline state updates, or manual checks. The current run demonstrates that a missing checker can be recorded and worked around without batching.

**Collision:**
Checker absence is a real contributing condition because it removed friction. It is not a root cause because it does not structurally produce one-patch artifact creation.

**Verdict: REFINE**

Constructive output: keep this as "guardrail gap"; do not present it as root cause.

### Candidate D: Skill Naming / Skill Surface Mismatch As Root Cause

**Prosecution:**
The environment can surface `MVL` and `MVL+` skill context close together, which may create confusion.

**Defense:**
The actual MVL+ spec was available and explicit. Even classic MVL is sequential, not a one-patch all-artifact run. Naming noise does not explain direct-to-archive outputs or one-patch creation.

**Collision:**
This can contribute to cognitive noise but does not fit the physical artifact evidence as a root cause.

**Verdict: REFINE**

Constructive output: record as possible contributing context only; prevention should not depend on perfect skill-name UX.

### Candidate E: Discipline Transaction Model With `_state.md` Ledger

**Prosecution:**
This adds process overhead and could make `_state.md` verbose.

**Defense:**
MVL+ already requires per-discipline output, structural check, and state update. The ledger makes existing requirements observable. It is compact: one history line per discipline. It directly blocks the prior failure by making the next discipline illegal until the previous output and state commit exist.

**Collision:**
The overhead is proportional to MVL+. The prevention directly targets the failure mode and fits the repo's explicitness value.

**Verdict: SURVIVE**

Constructive output: use this as the prevention rule in the final finding.

### Candidate F: Simple Rule "Do Not Run MVL+ Compactly"

**Prosecution:**
It states the desired behavior clearly.

**Defense:**
It does not define an observable gate. The previous failure happened despite explicit MVL+ instructions, so another abstract instruction is insufficient.

**Collision:**
The rule is directionally correct but operationally weak. It cannot detect false compliance.

**Verdict: KILL**

Seed extracted: replace abstract prohibitions with file/state invariants.

### Candidate G: Direct-to-Archive Prohibition Before CONCLUDE

**Prosecution:**
Archive placement can be changed by legitimate cleanup, so using it as proof could be brittle.

**Defense:**
During MVL+ execution, discipline outputs have canonical root paths. CONCLUDE is the phase that moves them to `docarchive`. A discipline output appearing only in `docarchive` at the same time as `finding.md` is strong evidence of batch finalization.

**Collision:**
The rule should be scoped to active MVL+ execution, not retroactive archive inspection. Within that scope, it is strong.

**Verdict: SURVIVE**

Constructive output: make "no direct-to-docarchive discipline writes" part of the prevention assembly.

## Phase 3.5: Assembly Check

The best assembly is:

- Root cause: assistant-side artifact-generation shortcut after correct `$MVL+` selection.
- Contributing conditions: missing structural checker and possible skill-surface noise reduced friction but did not force the failure.
- Proof: same-second artifact timestamps, direct-to-archive layout, one-patch creation trace, MVL+ spec conflict, and assistant admission.
- Prevention: discipline transaction model with `_state.md` ledger, one-output gate, manual checker fallback, and no `finding.md` or `docarchive` movement before CONCLUDE.

Assembly verdict: **SURVIVE**.

## Coverage Map

| Region | Coverage | Result |
|---|---|---|
| User-trigger explanation | Covered | Killed |
| MVL+ contract evidence | Covered | Survives as critical proof |
| Tool limitation explanation | Covered in prior disciplines | Killed |
| Missing-checker explanation | Covered | Refined to contributing condition |
| Skill-mismatch explanation | Covered | Refined to contributing condition |
| Assistant execution shortcut | Covered | Survives as root cause |
| Prevention design | Covered | Transaction/state-ledger assembly survives |

## Convergence Telemetry

- Dimension coverage: complete. All critical dimensions applied.
- Adversarial strength: strong. Each root-cause alternative faced direct counter-evidence.
- Landscape stability: stable. No alternative explains the artifact pattern better.
- Clean SURVIVE exists: yes. Candidate A for cause and Candidate E/G assembly for prevention.
- Failure modes observed: self-reference risk mitigated by external filesystem and transcript evidence; no rubber-stamping because multiple candidates were killed or refined.
- Overall: PROCEED.

## Signal

TERMINATE with ranked survivors:

1. **Root diagnosis:** assistant-side protocol collapse into compact artifact generation.
2. **Evidence package:** MVL+ spec, same-second timestamps, direct-to-archive layout, one-patch trace, assistant admission.
3. **Prevention assembly:** per-discipline transaction gate recorded in `_state.md`, manual checker fallback, and CONCLUDE-only archival/finding generation.

The original question is answered.
