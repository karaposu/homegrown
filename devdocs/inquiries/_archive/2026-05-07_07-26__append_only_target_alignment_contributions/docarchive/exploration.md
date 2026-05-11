# Exploration: Append-Only Target Alignment Contributions

## Mode And Entry Point

Mode: artifact exploration with a small possibility scan.

Entry point: signal-first. The signal is the user's correction: editing the same Live Target Alignment Record may be bad for traceability, and MVL+ context flow is cumulative rather than a tight one-step input/output chain.

Territory:

- `devdocs/inquiries/2026-05-07_07-06__target_fields_mvl_essence/finding.md`
- archived discipline files from that inquiry;
- `homegrown/MVL+/SKILL.md`;
- `homegrown/MVL/SKILL.md`;
- `homegrown/contracts/alignment_control.md`;
- `homegrown/protocols/conclude.md`;
- local search results for append/ledger/snapshot/source-of-truth patterns.

## Exploration Cycle 1 - Prior Finding And Runner Scan

### Scan

Scanned the prior Live Target Alignment Record finding and the MVL/MVL+ runner specs.

### Signals Detected

The prior finding says:

```text
Live Target Alignment Record = the loop's current target-role understanding.
```

It also says disciplines can update the record when target-role understanding changes.

The user's correction challenges that "update" verb. If multiple disciplines edit the same current record in place, the record may hide how target understanding changed over time.

The MVL+ runner says each discipline uses `_branch.md`, `_state.md`, and already-saved prior discipline outputs as input. This means later disciplines do not consume only the immediately previous output. They can consume the accumulated inquiry folder context.

### Resolution Decision

Zoom in on traceability and flow topology.

### Probe

The prior model conflated two different things:

1. **Historical contributions**
   - what each discipline observed or changed about target roles.

2. **Current synthesized target view**
   - what the loop currently believes after considering contributions.

Editing one mutable record tries to make one artifact serve both roles. That is the traceability problem.

### Frontier State

Advancing. The prior finding needs refinement from "live mutable record" to "append-only contributions plus synthesized current view."

### Confidence Map Update

- Confirmed: MVL+ preserves discipline files as canonical outputs.
- Confirmed: MVL+ says prior saved discipline outputs are inputs to later disciplines.
- Confirmed: prior finding already recognized provenance as useful but deferred it.
- Strong signal: mutable in-place target state is weak for Homegrown traceability.

## Exploration Cycle 2 - Homegrown Record Pattern Scan

### Scan

Scanned alignment and conclusion protocols plus search hits for record/ledger/snapshot/source-of-truth patterns.

### Signals Detected

`ALIGNMENT_CONTROL` says alignment state should stay close to the artifact or operation that produced it, then reference a shared contract for compatible fields and routing semantics.

This is strongly compatible with per-discipline target-alignment contributions:

```text
Each discipline's target-alignment signal stays close to that discipline output.
```

`CONCLUDE` reads all discipline outputs and compiles the finding. That suggests synthesis naturally belongs near Critique/CONCLUDE rather than in each discipline overwriting shared state.

Navigation and multi-resolution protocols have ledger patterns, but those are not direct MVL rules. They are still useful evidence that Homegrown values historical route/frontier records when traceability matters.

### Resolution Decision

Zoom in on candidate artifact shapes:

- mutable current record;
- append-only ledger;
- per-discipline snapshots;
- synthesized current view.

### Probe

Possible shapes:

1. **Mutable record only**
   - simplest current view;
   - weakest traceability.

2. **Append-only ledger only**
   - strongest traceability;
   - may require readers to synthesize current state every time.

3. **Per-discipline snapshots only**
   - traceable but may duplicate full field blocks.

4. **Append-only contributions + synthesized view**
   - preserves history and gives current state;
   - likely best fit.

### Frontier State

Advancing but converging. The most promising structure is a two-layer artifact model.

### Confidence Map Update

- Confirmed: Homegrown has patterns where historical artifacts are not overwritten and synthesis happens later.
- Inferred: target-alignment state should be append-only at contribution layer.
- Inferred: a derived current view is still useful, but it should be explicitly synthesized from contributions.

## Exploration Cycle 3 - Flow Topology Probe

### Scan

Scanned the user's claim against the MVL+ runner:

```text
Exploration affects Innovation too.
Sensemaking can affect Decomposition.
They generate context and files.
Next and later disciplines use them.
```

### Signals Detected

The user's claim is structurally right.

MVL+ is sequential in execution order, but not a narrow pipeline where each stage only passes one output to the next stage. Each discipline saves a file; later disciplines can use the accumulated folder context.

That matters for target alignment:

- Exploration's contribution may matter again at Innovation.
- Sensemaking's contribution may matter again at Critique.
- Decomposition's boundary contribution may constrain Innovation and CONCLUDE.

So target alignment contributions should not be treated as a single baton passed from E to S to D to I to C. They are cumulative context.

### Resolution Decision

Treat the model as **append-only multi-source context with late synthesis**, not chained state mutation.

### Probe

A better wording:

```text
Target Alignment Contributions are append-only discipline records.
The Live Target Alignment View is a synthesized current view derived from those contributions.
Target Fit Check validates the answer against the synthesized view and the contribution trail.
```

This keeps the word "live" but moves liveness from mutable editing to cumulative synthesis.

### Frontier State

Stable.

### Confidence Map Update

- Confirmed: MVL+ execution is sequential, but context accumulation is many-to-later, not only one-to-next.
- Strong inference: append-only contribution trail fits this topology better than a single mutable record.
- Open: exact file location and syntax.

## Jump Scan - Opposite Direction

### Scan

Jump-scanned for evidence that a mutable single current record is required by MVL/MVL+.

### Signals Detected

No such requirement was found.

The closest counter-signal is `_state.md` as source of truth for progress. But `_state.md` is progress/iteration/next-command state, not target-understanding evidence. It is mutable because progress state is supposed to be current.

Target understanding is different. Its history matters because later diagnostics may need to know which discipline introduced or changed a target claim.

### Resolution Decision

Do not model target-alignment contributions like `_state.md` progress.

### Frontier State

Closed for this question.

## Convergence Check

Frontier stability: yes. Scans repeatedly support append-only contribution history plus synthesis.

Declining discovery rate: yes. Later scans refined the topology but did not produce a stronger competing model.

Bounded gaps: yes. Exact syntax and file placement remain open, but the conceptual question can be answered.

Jump scan: complete. No evidence requires a mutable single target record.

## Territory Overview

The territory has four regions:

1. **Traceability**
   - mutable current records obscure how understanding changed;
   - append-only contributions preserve discipline-specific reasoning.

2. **MVL+ context topology**
   - execution order is sequential;
   - context use is cumulative;
   - later disciplines can use all prior discipline outputs.

3. **Artifact shape**
   - contribution trail should be append-only;
   - current target view should be synthesized;
   - final finding can summarize the synthesized view.

4. **Open materialization**
   - exact file placement remains undecided;
   - candidate surfaces include per-discipline sections, an append-only `target_alignment_contributions.md`, or a CONCLUDE-synthesized section.

## Inventory

| Region | Finding |
| --- | --- |
| Prior Live Target Alignment finding | Correct lifecycle idea, weak mutability wording. |
| MVL+ runner | Sequential execution; each discipline uses prior saved outputs as input. |
| Alignment control contract | Alignment state should stay close to the artifact/operation that produced it. |
| CONCLUDE | Natural late synthesis point over all discipline outputs. |
| User correction | Strong traceability and topology signal. |

## Signal Log

| Signal | Status | Notes |
| --- | --- | --- |
| Editing same record hurts traceability | strong | Mutable state can hide who changed what and why. |
| Per-discipline append versions may be better | strong | Fits discipline files and provenance. |
| MVL+ is not only one-output-feeds-next | confirmed | Runner consumes already-saved prior discipline outputs. |
| Need synthesized current view | strong | Append-only trail alone may be hard to use for final validation. |
| Mutable `_state.md` pattern should be copied | rejected | Progress state differs from target-understanding evidence. |

## Confidence Map

| Claim | Confidence | Reason |
| --- | --- | --- |
| Single mutable target record is a poor traceability model | high | User correction + Homegrown artifact preservation pattern. |
| Append-only target contributions fit MVL+ better | high | Matches cumulative context and discipline output preservation. |
| A synthesized current view is still needed | high | Final validation needs a coherent target view, not only raw history. |
| The synthesized view should be authoritative over the contribution trail | medium | Needs Sensemaking/Critique; "authoritative" may be too strong if trail contradicts it. |
| Exact storage location should remain deferred | high | Current question is conceptual, not materialization. |

## Frontier State

Closed enough for Sensemaking.

## Gaps And Recommendations

Sensemaking should resolve the key ambiguity:

```text
Is the correct model a live mutable record, an append-only ledger, or append-only contributions with a synthesized view?
```

Exploration points to:

```text
Append-only Target Alignment Contributions + synthesized Live Target Alignment View.
```

Sensemaking should also decide whether each discipline appends a full snapshot or a delta/contribution. The exploration evidence suggests:

```text
Prefer contribution/delta by default; full snapshot only when the discipline changes the overall target view materially.
```
