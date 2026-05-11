# Exploration: Artifact Materialization Protocol Shape

## Mode and Entry Point

- Mode: mixed artifact and possibility exploration.
- Entry point: signal-first. The user gave a strong design signal: the proven task-desc -> task-plan -> dynamic critic -> repair -> implement lifecycle should become the materialization lifecycle, but small artifacts should not waste compute or time.

## Cycle 1: Existing Artifact Scan

### Scan

Scanned:

- `enes/materialization_lifecycle.md`
- `devdocs/inquiries/2026-04-28_10-28__artifact_generation_readiness/finding.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/task-desc.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/task-plan.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/critic-d.md`
- `homegrown/protocols/`

### Found

The concept layer already contains the full lifecycle:

```text
decision -> desc -> plan -> dynamic critic -> repair -> implement -> validate -> trace -> retrospect
```

The previous finding establishes the boundary:

- MVL/MVL+ produces decisions and findings.
- Materialization turns decisions into concrete files.
- Skills should not freely write arbitrary artifacts.
- Validation and traceability are required before artifact output becomes capability evidence.

The external command docs provide proven subroutines:

- `/task-desc` creates a lightweight feature/task description with problem, value, success criteria, scope, and priority.
- `/task-plan` creates a step-by-step implementation plan with outputs, safety, peripheral concepts, and hardness.
- `/critic-d` generates a task-specific critic prompt, executes it, writes `critic.md`, and forces risk-aware plan improvement.

Existing `homegrown/protocols/` has no `artifact_materialization.md`.

### Signals

- The protocol should not invent a new lifecycle; it should operationalize the existing one.
- The protocol should not be a replacement for `/task-desc`, `/task-plan`, or `/critic-d`; it should compose their logic into one Homegrown materialization boundary.
- The compression question is real: requiring all files for a one-line doc artifact would create enough friction that the protocol will be bypassed.

### Resolution Decision

Zoom into what must be invariant across all artifact sizes.

### Frontier State

The artifact terrain is mapped at high level. Need a risk-tier map.

### Confidence Update

High confidence that the operational protocol should be lifecycle orchestration, not another cognitive discipline.

## Cycle 2: Invariant Probe

### Probe

Asked what every materialization run must preserve even when compressed.

### Found

Minimum invariants:

- a source of authority,
- an artifact target,
- a bounded write-set,
- a contract or success criterion,
- a validation/review statement,
- a traceable outcome.

These are not optional because they prevent the old failure mode: "a finding says something and the agent edits files without a stable bridge."

### Signals

- The full lifecycle can be compressed only if the invariants remain.
- "Small lifecycle" should mean fewer documents and shorter sections, not skipping source, scope, validation, or trace.
- The protocol should define a compact mode that can fit brief, plan, critic, and trace into one `materialization_trace.md` for low-risk artifacts.

### Resolution Decision

Zoom out to map artifact tiers.

### Frontier State

Core invariants are confirmed. Tier boundaries remain open.

### Confidence Update

High confidence that compression is feasible if it compresses representation, not accountability.

## Cycle 3: Risk Tier Scan

### Scan

Mapped possible artifact classes by blast radius.

### Found

Low-risk examples:

- new standalone Markdown concept doc,
- new protocol draft that is not yet loaded by a runner,
- trace schema sketch,
- non-executed config example.

Medium-risk examples:

- editing an existing protocol,
- editing a skill or reference file,
- adding a config used by a tool,
- adding a test,
- adding a harness adapter stub.

High-risk examples:

- changing runner behavior,
- changing discipline fundamentals,
- editing shared tooling,
- changing schemas used across inquiries,
- implementing ARC execution/scoring paths.

### Signals

- Risk tier should drive lifecycle weight.
- Artifact type alone is insufficient. Editing an existing protocol is riskier than creating a new standalone draft.
- Validation availability should affect tiering. A low-risk-looking artifact with no review path may need escalation.

### Resolution Decision

Probe minimal-path design.

### Frontier State

Risk classes are mapped enough for Sensemaking.

### Confidence Update

Medium-high confidence that three tiers are enough for v1.

## Cycle 4: Minimal Path Probe

### Probe

Asked how minimal artifacts can avoid wasting compute/time without bypassing the materialization boundary.

### Found

Possible compact-mode shape:

```text
source/request
  -> inline brief
  -> tiny plan
  -> lightweight risk scan
  -> implement
  -> simple validation/manual review note
  -> trace
```

This could be recorded in one file:

```text
devdocs/materializations/<date>__<name>/materialization_trace.md
```

or, for very small in-inquiry artifacts, as a section in the source inquiry's trace.

### Signals

- The dynamic critic does not need to become a full separate file for every low-risk artifact.
- The critic function still must exist: even compact mode needs a risk scan.
- The protocol should define escalation triggers that force full lifecycle if the compact risk scan finds Medium/High risk.

### Resolution Decision

Jump scan: look for what the protocol should explicitly not include.

### Frontier State

Compact lifecycle seems viable. Exclusions need mapping.

### Confidence Update

High confidence that minimal lifecycle is not hard if the protocol defines escalation triggers.

## Jump Scan: Exclusion Territory

### Scan

Mapped what `artifact_materialization.md` should not do.

### Found

The protocol should not:

- decide whether a finding is true,
- replace MVL/MVL+,
- replace CONCLUDE,
- let skills bypass the write-set,
- embed detailed instructions for every artifact type,
- require branch experiments for every change,
- require full dynamic critic files for trivial low-risk artifacts,
- treat validation failure as success,
- silently expand scope during implementation,
- encode ARC-specific behavior as the general protocol.

### Signal

The protocol should be a boundary and lifecycle controller. It should not become a universal build system or another reasoning discipline.

## Convergence Assessment

- Frontier stability: yes. Major regions are mapped: lifecycle source, invariants, risk tiers, compact path, exclusions.
- Declining discovery rate: yes. Later probes refined tiering rather than finding new regions.
- Bounded gaps: yes. Remaining details are exact wording and thresholds, suitable for Sensemaking/Decomposition.

## Structural Map

### Territory Overview

| Region | Status | Notes |
|---|---|---|
| Concept lifecycle | Confirmed | `enes/materialization_lifecycle.md` supplies the full sequence. |
| Prior authorization finding | Confirmed | The readiness finding established the need for post-CONCLUDE materialization. |
| Proven subcommands | Confirmed | `task-desc`, `task-plan`, and `critic-d` provide reusable lifecycle pieces. |
| Current protocol inventory | Confirmed | No artifact materialization protocol exists yet. |
| Minimal artifact path | Scanned/probed | Compact mode is feasible if invariants stay intact. |
| Exclusions | Scanned/probed | Protocol should not replace reasoning, conclusion, branch experiment, or build systems. |

### Inventory

Possible protocol sections:

- purpose and boundary,
- when to use,
- input contract,
- risk classification,
- lifecycle modes,
- compact mode,
- standard mode,
- full mode,
- escalation triggers,
- implementation rules,
- validation outcomes,
- trace schema,
- retrospective hook,
- non-goals.

### Signal Log

- Strong signal: full lifecycle is valuable but too expensive for minimal artifacts.
- Strong signal: invariants must not be optional.
- Strong signal: dynamic critic is a function; for low-risk artifacts it can be a short risk scan instead of a separate file.
- Strong signal: artifact type plus write-set plus behavior impact should determine risk tier.

### Confidence Map

| Claim | Confidence |
|---|---|
| Protocol should operationalize `enes/materialization_lifecycle.md` | confirmed |
| Compact mode is needed | confirmed |
| Compact mode must keep source/write-set/contract/validation/trace | confirmed |
| Three risk tiers are enough for v1 | high |
| Exact trace location should be flexible | medium |
| ARC should be a downstream use case, not protocol core | confirmed |

## Gaps and Recommendations for Sensemaking

Sensemaking should collapse the central ambiguity: how to make the protocol lightweight without making it toothless. The likely answer is a tiered lifecycle:

- **Compact mode** for low-risk artifacts.
- **Standard mode** for medium-risk artifacts.
- **Full mode** for high-risk or behavior-changing artifacts.

The key is that mode changes document count and depth, not the core invariants.
