# Exploration: Loop Diagnose Protocol Integration

## User Input

`devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Mixed artifact and possibility exploration.
- **Entry point:** Signal-first. The user proposed a concrete interpretation of `loop_diagnose` and a possible MVL/MVL+ loading hook.

## 2. Exploration Cycles

### Cycle 1 - Existing Findings

#### Scan

Scanned:

- `devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md`
- `devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/finding.md`
- `devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md`

Findings:

- `protocol_priority_top_5` says `loop_diagnose` should be the highest-priority next protocol.
- It explicitly says `loop_diagnose` should not be a new cognitive discipline. MVL+ remains the reasoning engine.
- `loop_diagnose_git_self_maintenance` says `loop-diagnose` should mean "run MVL+ on a correction chain."
- The same finding says the protocol should define input contract, output sections, where to save the result, and what evidence/confidence should be included.
- `discipline_verdict_telemetry_value_risk` adds that verdicts can later support diagnostics, but should not be hard routing yet.

#### Signals Detected

1. The user's interpretation is substantially correct.
2. The protocol should be an operational wrapper/template, not a sixth discipline.
3. The important missing detail is integration: how does a user or runner cause MVL/MVL+ to load the diagnostic protocol?

#### Resolution Decision

Zoom in on runner integration because that is the user's unresolved question.

#### Frontier State

The conceptual role of `loop_diagnose` is confirmed. The loading mechanics remain open.

#### Confidence Update

- Confirmed: `loop_diagnose` is MVL+/MVL applied to correction chains.
- Confirmed: it is not a new discipline.
- Scanned: possible MVL/MVL+ integration points.

### Cycle 2 - Current Runner Shape

#### Scan

Scanned:

- `homegrown/MVL/SKILL.md`
- `homegrown/MVL+/SKILL.md`
- active installed `/Users/ns/.codex/skills/MVL+/SKILL.md`
- `homegrown/protocols/`

Findings:

- `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` now use timestamped inquiry folders.
- Both runner files have a NEW path and a RESUME path.
- Both runners already load `homegrown/protocols/conclude.md` at completion.
- `homegrown/protocols/loop_diagnose.md` does not exist yet.
- `homegrown/protocols/` currently contains only `conclude.md`, `resume.md`, and `unknown.md`.
- The installed `.codex` MVL+ skill still has the older untimestamped path rule, so homegrown source edits have not yet been installed.

#### Signals Detected

1. Protocol loading already has precedent: CONCLUDE is loaded by the runner when the loop reaches completion.
2. Adding a hook for `loop_diagnose` is plausible, but should be lighter than CONCLUDE because `loop_diagnose` is an entry-framing protocol, not a terminal compilation protocol.
3. If the hook is too automatic, it may classify ordinary questions incorrectly as self-maintenance tasks.

#### Resolution Decision

Probe possible integration choices:

- A manual command/prompt pattern.
- A conditional hook inside MVL/MVL+.
- A separate skill.
- A meta-loop/self-maintenance runner.

#### Frontier State

The implementation space is bounded.

#### Confidence Update

- Confirmed: no `loop_diagnose.md` exists yet.
- Confirmed: MVL/MVL+ can load protocols when explicitly instructed.
- Inferred: the first integration should be explicit rather than automatic.

### Cycle 3 - Candidate Integration Shapes

#### Scan

Candidate shapes:

1. **Manual MVL+ prompt only**
   - User writes the full diagnostic prompt every time.

2. **Protocol file loaded explicitly by user**
   - User says: run MVL+ with `homegrown/protocols/loop_diagnose.md` on these paths.

3. **Conditional hook in MVL/MVL+**
   - Runner detects phrases such as "self-maintenance", "loop_diagnose", "correction chain", "what went wrong between these inquiries", then loads the protocol.

4. **Separate `loop-diagnose` skill**
   - A new skill appears as if it were a full discipline/command.

5. **Meta-loop runner**
   - Larger runner detects correction chains and launches diagnostic MVL+ automatically.

#### Signals Detected

- Manual prompt only is usable but wastes the value of a protocol.
- Explicit protocol loading is safe and simple.
- Conditional hook is useful if conservative and transparent.
- Separate skill is premature because it looks like a new primitive.
- Meta-loop automation is future-facing and depends on traces.

#### Resolution Decision

The best near-term shape appears to be:

```text
homegrown/protocols/loop_diagnose.md
  = input/output contract and framing protocol

MVL/MVL+ hook
  = if the user explicitly asks for loop_diagnose or self-maintenance diagnosis,
    load the protocol and use it to create the inquiry question/branch context

MVL+
  = still runs E -> S -> D -> I -> C
```

#### Frontier State

Integration candidates are sufficiently mapped for sensemaking.

#### Confidence Update

- Confirmed: protocol file is useful.
- Confirmed: separate discipline should be deferred.
- Inferred: conditional hook should require explicit trigger words or paths.

### Jump Scan - Adjacent Systems

#### Scan

Scanned adjacent ideas:

- Resume protocol: telemetry-aware continuation waits on standardized verdicts.
- Meta-loop: can accept correction chain as input, but should not be first implementation.
- Git self-maintenance: branch experiments should follow diagnostic findings, not replace them.

#### Signal Detected

`loop_diagnose` belongs before branch experiments, Resume gating, and meta-loop autonomy. It produces evidence those later systems consume.

## 3. Convergence Assessment

- **Frontier stability:** Stable. Repeated scans converge on protocol-wrapper-over-MVL+.
- **Declining discovery rate:** Declining. Later scans mostly clarified integration sequencing.
- **Bounded gaps:** Bounded. Remaining gaps are exact protocol file content and exact runner hook wording.

## 4. Structural Map

### Territory Overview

Major regions:

1. **Diagnostic meaning**
   - Compare weak prior inquiry, human correction, and improved later inquiry.

2. **Protocol role**
   - Define input contract, diagnostic framing, output sections, evidence/confidence requirements.

3. **Reasoning engine**
   - MVL+ remains the engine; `loop_diagnose` is not a new discipline.

4. **Integration**
   - First version should be explicit or conservatively conditional.

5. **Downstream consumers**
   - Maintenance branch experiments, retrospective review, telemetry calibration, future meta-loop.

### Inventory

| Region | Status | Notes |
|---|---|---|
| Prior concept | Confirmed | Existing findings already define correction-chain diagnosis. |
| Protocol file | Confirmed absent | `homegrown/protocols/loop_diagnose.md` does not exist. |
| MVL/MVL+ hook | Possible | Needs explicit trigger design. |
| Separate discipline | Deferred | Premature and violates current atomic-loop principle. |
| Meta-loop automation | Future | Needs traces and outcomes first. |

### Signal Log

| Signal | Source | Confidence | Meaning |
|---|---|---:|---|
| User interpretation matches prior findings | Current prompt + prior findings | High | Yes, this is basically the intended shape. |
| Protocol should not think | Prior findings | High | It frames MVL+, not replaces it. |
| Integration should be explicit first | Runner scan | High | Avoid automatic misclassification. |
| Protocol loading precedent exists | CONCLUDE | Medium-high | Runners can load protocol files for special phases. |
| Separate skill is premature | Prior critique | High | Wait for 5-10 examples showing a distinct method. |

### Confidence Map

- **Confirmed:** `loop_diagnose` is a correction-chain diagnostic protocol/template.
- **Confirmed:** MVL+ should remain the cognitive engine.
- **Confirmed:** `homegrown/protocols/loop_diagnose.md` is missing.
- **Scanned:** conditional MVL/MVL+ loading hook.
- **Inferred:** first hook should require explicit user intent.
- **Unknown:** exact final protocol schema.

## 5. Gaps and Recommendations for Sensemaking

- Clarify that the user's proposed prompt is basically the seed of `loop_diagnose`, but the protocol should be more structured.
- Separate three layers:
  - input contract;
  - MVL+ diagnostic run;
  - output contract.
- Recommend creating `homegrown/protocols/loop_diagnose.md` before editing MVL/MVL+.
- Recommend adding a small explicit hook to MVL/MVL+ after the protocol exists.
- Avoid a separate `loop-diagnose` skill for now.
