# Exploration: Comparative MVL Loop Diagnosis

## Mode and Entry Point

- **Mode:** Possibility exploration grounded in current Homegrown artifacts.
- **Entry point:** Signal-first.
- **Signal:** The strongest learning signal may not be reflection inside one run. It may be the delta between a bad MVL run, user correction, and a later better MVL run.

## Cycle 1: Scan Existing Territory

### Scanned

Current Homegrown has several relevant pieces:

1. **MVL / MVL+ as the current atomic operation**
   - The user runs a loop.
   - The loop produces a `finding.md`.
   - The user judges the finding.
   - If it is bad, the user gives comments and reruns a loop.
   - The later loop may produce a better finding.

2. **Existing Reflection**
   - Reads a completed SIC run.
   - Examines process rather than content.
   - Produces per-step observations, proposed memory cells, and process-frontier questions.
   - It is currently single-run oriented.

3. **Self-maintenance level ladder**
   - Homegrown is Level 0.5.
   - Level 1 requires an instrumented maintenance loop.
   - The proposed Level 1 artifact is a self-maintenance log with trigger, diagnosis, evidence, proposed change, evaluation plan, and retain/revert/refine decision.

4. **User correction as evidence**
   - A user saying "this finding is bad because X" is not just feedback on content.
   - It is evidence that some part of the loop failed to surface, value, or defend X.

### Signals Detected

- **Strong signal:** Comparative reruns produce more reliable failure evidence than a single run reflecting on itself.
- **Strong signal:** Existing Reflection can miss what went wrong because it only sees the run's own artifacts and maybe local interventions.
- **Absence signal:** There is no protocol that consumes multiple inquiry folders and compares failure -> correction -> improved answer.
- **Tension signal:** Calling this "Reflection" may blur two operations: single-run process reflection and cross-run failure diagnosis.

### Resolution Decision

Zoom in on a new protocol/discipline candidate: comparative loop diagnosis.

### Probe

The comparative diagnostic operation would read:

- original inquiry folder,
- later corrected inquiry folder or folders,
- user correction text,
- findings and archived discipline outputs,
- optionally git/file changes if a spec was edited.

It would produce:

- what changed between findings,
- what the user correction identified,
- which discipline likely failed,
- whether the failure was Sensemaking, Innovation, Critique, CONCLUDE, prompt framing, scope, or loop orchestration,
- proposed maintenance entries or spec-change candidates.

### Frontier State

The territory is stable enough to say this is distinct from existing Reflection.

### Confidence Map Update

- Single-run Reflection exists: **confirmed**.
- Comparative loop diagnosis does not exist: **confirmed absent**.
- User rerun deltas as learning data: **high confidence**.

## Cycle 2: Scan Candidate Roles

### Scanned

Possible roles for this capability:

1. **Replace Reflection**
   - Reflection becomes unnecessary.

2. **Extend Reflection**
   - Reflection gains multi-inquiry input mode.

3. **New protocol before Reflection**
   - A new diagnostic protocol creates an evidence pack.
   - Existing Reflection can then reflect on that pack.

4. **New discipline after MVL chains**
   - A named discipline, maybe `loop-diagnose`, reads multiple inquiry folders and outputs structured diagnosis.

5. **Self-maintenance data generator**
   - The protocol exists mainly to create maintenance log entries and training data for future autonomy.

### Signals Detected

- **Boundary signal:** Existing Reflection asks "how did this run perform?" Comparative diagnosis asks "why did the earlier run fail relative to a later correction?"
- **Practical signal:** New protocol before Reflection is likely cleaner than overloading Reflection.
- **Data signal:** This is probably the missing data-generation step for Level 1 self-maintenance.

### Resolution Decision

Treat this as a new protocol or discipline, not a replacement for Reflection.

### Probe

Reflection should remain useful for single completed runs. Comparative diagnosis should handle run pairs or run chains where a later outcome reveals what the earlier loop missed.

The relationship:

```
MVL run A -> finding A disliked
User feedback -> MVL run B -> finding B better
Comparative Diagnosis(A, feedback, B) -> failure attribution + maintenance candidates
Reflection or Self-Maintenance Log -> higher-level lessons and system changes
```

## Cycle 3: Probe Failure Attribution

### Scanned

The diagnostic protocol needs attribution categories:

- **Sensemaking failure:** wrong frame, missing anchor, missed perspective, poor ambiguity collapse.
- **Exploration failure:** territory not scanned, absent signal missed, premature depth.
- **Decomposition failure:** wrong boundaries, missing sub-question, hidden coupling.
- **Innovation failure:** candidate space too narrow, no contrarian mechanism, no useful alternative generated.
- **Critique failure:** wrong dimensions, weak prosecution, rubber-stamping, killed the wrong idea.
- **CONCLUDE failure:** good intermediate reasoning but poor final synthesis.
- **Loop framing failure:** original question/goal/scope was wrong or too narrow.
- **Orchestration failure:** wrong loop chosen, missing discipline, wrong sequencing.
- **Human-context failure:** important context was only available after the user supplied it, but the system should learn to elicit/check for that context earlier.

### Signals Detected

- Attribution must be evidence-based, not blame-based.
- A delta may implicate multiple stages.
- The user correction text is a high-value anchor because it identifies what mattered to the human.

### Resolution Decision

The protocol should output confidence-ranked attributions with evidence snippets and maintenance candidates.

### Probe

Minimum attribution entry:

```markdown
## Failure Attribution: [short name]
**Likely source:** Sensemaking / Innovation / Critique / CONCLUDE / Loop framing / Orchestration
**Evidence from bad run:** ...
**Evidence from user feedback:** ...
**Evidence from improved run:** ...
**Why this source, not another:** ...
**Confidence:** HIGH / MEDIUM / LOW
**Maintenance candidate:** ...
```

## Jump Scan: Avoiding Overbuilt Self-Maintenance

### Scanned

The user explicitly warned against one-shotting advanced self-maintenance. The alternative is to build a data generator that reveals what is missing through use.

### Signals Detected

- This is closer to Level 1 than advanced autonomy.
- It creates the empirical substrate for future self-maintenance.
- It supports rapid improvement of fundamentals without requiring a full autonomous maintenance runtime.

### Resolution Decision

The next build should be comparative diagnosis, not advanced self-maintenance.

## Convergence Assessment

- **Frontier stability:** The role and missing artifact are clear.
- **Declining discovery rate:** Later scans repeated the same result: a comparative diagnostic protocol is needed.
- **Bounded gaps:** Exact command name and file schema remain design choices, but the functional shape is stable.

Exploration is sufficient for sensemaking.

## Structural Map

### Territory Overview

Homegrown's current learning loop is informal: bad finding -> user comments -> rerun -> better finding. The missing system function is to mine this sequence for process failures.

### Inventory

- **Present:** MVL/MVL+ loops, findings, archived discipline outputs, user feedback, Reflection, self-maintenance level ladder.
- **Absent:** cross-inquiry diagnostic protocol, failure attribution schema, maintenance-candidate extraction from run deltas.
- **Potential:** Level 1 self-maintenance data generator.

### Signal Log

- Comparative diagnosis is not the same as Reflection.
- The output should feed Reflection or a self-maintenance ledger.
- The main value is not automation yet; it is systematic learning data.

### Confidence Map

- **Confirmed:** Current Reflection is single-run/process-oriented.
- **Confirmed absent:** Multi-inquiry comparative diagnosis.
- **High confidence:** This is a better next step than advanced autonomous self-maintenance.

### Frontier State

The next discipline should stabilize the conceptual distinction between Reflection, comparative diagnosis, and self-maintenance.

### Gaps and Recommendations

Sensemaking should define the new operation, decide whether it is a protocol or discipline, and specify how it plugs into the Level 1 self-maintenance ladder.
