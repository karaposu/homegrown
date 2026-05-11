# Exploration: Discipline Space Invariant Refinement

## Mode And Entry Point

Artifact exploration with a signal-first entry point.

Signal: the proposed `Discipline Transaction Invariant` is too file-centered. The user's correction is that same-time writing is bad because it indicates the sequential logic may not have happened; the goal is to ensure each discipline takes its own space so its output is correct.

## Cycle 1: Scan Existing Findings

### Scanned

- `devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/finding.md`
- `devdocs/inquiries/2026-05-05_17-44__mvl_compact_prevention_without_core_changes/finding.md`

### Found

The first finding correctly diagnosed compact execution as a protocol collapse. It said the assistant treated MVL+ as an artifact-production template rather than a stateful protocol.

The second finding refined prevention into a `Discipline Transaction Invariant`. It correctly killed generic "do not batch" prompt text and recommended runner-level invariant hardening.

But the second finding framed the invariant mainly through file and state validity:

- output file written;
- structural check attempted;
- `_state.md` updated;
- invalid file patterns listed.

### Signals

- The file pattern is an observable trace, not the protected thing itself.
- The deeper protected thing is discipline execution quality.
- "Transaction" may be too storage-oriented if not paired with "discipline workspace" or "cognitive isolation."

### Resolution Decision

Zoom in on what "each discipline takes its own space" means operationally.

### Frontier State

Advancing. The existing findings are mapped; deeper purpose remains to be defined.

### Confidence Update

- Confirmed: previous invariant was file/state heavy.
- Confirmed: user wants the reason for file sequencing made explicit.
- Inferred: the invariant should be renamed or expanded around discipline workspace.

## Cycle 2: Probe MVL/MVL+ Discipline Semantics

### Scanned

- `homegrown/MVL+/SKILL.md`
- attached classic MVL content in the user message, with prior correction that Homegrown files are source of truth.

### Found

MVL/MVL+ are not just file pipelines. They are cognitive loops:

- MVL: Sensemaking -> Innovation -> Critique.
- MVL+: Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique.

Each discipline has a distinct cognitive job:

- Exploration maps territory before understanding.
- Sensemaking stabilizes meaning.
- Decomposition partitions complexity.
- Innovation generates candidate possibilities.
- Critique evaluates and contracts.

If these are written together from one mental pass, the outputs can look complete while skipping the actual feed-forward logic:

- Sensemaking may not truly consume Exploration.
- Decomposition may not truly consume Sensemaking.
- Innovation may not truly consume Decomposition.
- Critique may evaluate an imagined set rather than the prior discipline's actual output.

### Signals

- The core failure is not "files same timestamp." It is "S, D, I, C did not get their own focused run after receiving the prior artifact."
- The file/state invariants are evidence that the focused run occurred, but they are not the purpose.
- A better rule should require each discipline to start from the saved prior artifact, not from the runner's memory of a planned whole answer.

### Resolution Decision

Zoom out to map what can prove discipline space without pretending proof is perfect.

### Frontier State

Stable around discipline semantics. Need artifact proof model.

### Confidence Update

- Confirmed: each discipline has different purpose.
- Confirmed: compact writing threatens feed-forward logic.
- Inferred: saved prior artifact must be the input boundary for the next discipline.

## Cycle 3: Scan Observable Proofs Of Discipline Space

### Scanned

Possible observable traces:

- separate discipline spec loading;
- separate discipline output file;
- state update after each discipline;
- checkpoint summary between disciplines;
- structural check or fallback;
- time separation;
- root-before-archive lifecycle.

### Found

No artifact can perfectly prove an internal cognitive operation. But a set of artifacts can make bad compression harder and visible:

- A saved previous output gives the next discipline a concrete input object.
- A checkpoint forces the runner to summarize what survived from the previous discipline before starting the next.
- `_state.md` history makes the order durable.
- Structural checks ensure each discipline's required shape exists.
- Time separation is weak evidence alone but useful when combined with per-discipline output and state history.

### Signals

- The invariant should not say "files are the goal."
- It should say "files/state are the audit trail for separate discipline workspace."
- Invalid compact patterns are still valuable, but their explanation should be cognitive: they indicate that disciplines may have been collapsed into one pass.

### Resolution Decision

Proceed to final map. The relevant territory is sufficiently mapped.

### Frontier State

Stable.

### Confidence Update

- Confirmed: artifact traces are audit signals.
- Confirmed absent: perfect proof of internal reasoning.
- Inferred: the best prompt wording is "Discipline Workspace Invariant" or "Discipline Isolation Invariant," with file transaction as the audit layer.

## Jump Scan: Opposite Direction

### Scanned

Hypothesis: maybe file sequencing alone is enough; no need to mention discipline workspace.

### Found

File sequencing alone can become cargo-culted. A runner could write files one at a time but still mentally precompute all outputs in a single compact pass. That would satisfy some observable rules while still failing the reason for the rule.

### Signal

The prompt must state the deeper obligation: do not precompute or draft later discipline outputs before the current discipline has completed and been saved. Each discipline needs its own focused execution context.

## Structural Map

### Territory Overview

1. **Previous diagnosis:** compact execution was protocol collapse.
2. **Previous prevention:** file/state transaction invariant.
3. **User correction:** files matter because they evidence discipline separation; they are not the core purpose.
4. **Deeper target:** discipline workspace isolation and feed-forward execution.
5. **Observable proof:** output files, checkpoints, `_state.md`, checks, and CONCLUDE lifecycle.

### Inventory

- Existing "transaction" language: useful but too storage-oriented alone.
- Better framing: "Discipline Workspace Invariant."
- Core principle: a discipline must not be executed as part of a prewritten whole-loop answer.
- Audit principle: files and state prove order well enough to detect many failures, but are not the protected value.

### Signal Log

- Probed: prior findings' file focus.
- Probed: MVL/MVL+ discipline semantics.
- Probed: observable proof limits.
- Deferred: exact wording for the refined invariant until Innovation/Critique.

### Confidence Map

- Confirmed: same-time writing is a symptom.
- Confirmed: the actual risk is skipped feed-forward discipline reasoning.
- Confirmed: file/state traces remain necessary as audit evidence.
- Inferred: rule should be renamed/reframed around discipline workspace or isolation.
- Unknown: whether a future mechanical runner could verify "space" beyond artifact traces.

### Frontier State

Stable. The next discipline should turn this into a clarified model: protected thing first, observable traces second.

### Gaps And Recommendations

Sensemaking should collapse the ambiguity between "transaction" and "workspace."

Innovation should propose revised rule wording that says each discipline must consume the prior saved output and must not precompute later outputs.

Critique should test whether the new wording avoids both problems: too file-focused and too unobservable.
