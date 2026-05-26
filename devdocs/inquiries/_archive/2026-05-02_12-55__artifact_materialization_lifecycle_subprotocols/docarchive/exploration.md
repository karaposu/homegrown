# Exploration: Artifact Materialization Lifecycle Subprotocols

## Mode and Entry Point

- **Mode:** Mixed artifact + possibility exploration.
- **Primary mode:** Artifact exploration, because prior notes and workflow files exist.
- **Secondary mode:** Possibility exploration, because the protocol shape is not yet implemented.
- **Entry point:** Signal-first. The user's signal is that code artifacts and Markdown/protocol artifacts should not use the same lifecycle depth.

## Exploration Cycles

### Cycle 1 - Coarse Artifact Scan

Scanned:

- `enes/materialization_lifecycle.md`
- `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`
- `devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/task-desc.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/task-plan.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/critic-d.md`

Findings:

- `enes/materialization_lifecycle.md` defines the full lifecycle:

```text
artifact request
  -> task description
  -> implementation plan
  -> dynamic critic
  -> plan repair
  -> implementation
  -> validation
  -> materialization trace
  -> retrospective learning
```

- The prior artifact-materialization finding defines Compact, Standard, and Full modes.
- `homegrown/protocols/artifact_materialization.md` does not exist yet.
- `task-desc`, `task-plan`, and `critic-d` are strongest for implementation work where code behavior, file coupling, or existing system contracts can break.
- For low-risk Markdown creation, the full lifecycle would be too heavy unless compressed into one trace.

### Cycle 1 Signals

- **Artifact-type signal:** Code, tests, configs, docs, protocols, skills, schemas, and harness adapters have different failure modes.
- **Operation-intent signal:** Create, edit, rewrite, and refactor are not the same operation even when the artifact type is the same.
- **Risk-mode signal:** Compact/Standard/Full already solves lifecycle depth, but it does not fully name operation intent.
- **Subprotocol signal:** Separate subprotocols might help later, but may over-fragment v1.

Resolution decision: probe the distinction between artifact type, operation intent, and lifecycle depth.

### Cycle 2 - Probe Artifact Type

Artifact types found or implied:

| Artifact Type | Typical Risk | Lifecycle Implication |
| --- | --- | --- |
| New Markdown concept note | Low | Compact usually enough. |
| New protocol draft not wired into runner | Low-to-medium | Compact or Standard depending on authority and future use. |
| Existing protocol edit | Medium | Standard by default. |
| Skill edit | Medium-to-high | Standard or Full because future runs may depend on it. |
| Runner behavior edit | High | Full. |
| Code feature | Medium-to-high | Standard or Full with task-desc/task-plan/critic-d. |
| Test/config/harness adapter | Medium-to-high | Standard or Full depending on execution impact. |
| ARC execution/scoring | High | Full by default. |

Probe result: artifact type is useful for risk assessment, but not enough. A new protocol file and a rewrite of an existing protocol file are both Markdown, but their risks differ sharply.

### Cycle 3 - Probe Operation Intent

Possible operation intents:

| Operation | Meaning | Distinct Risk |
| --- | --- | --- |
| `create` | Add a new artifact. | Missing scope/authority; future discoverability. |
| `edit` | Small bounded change to an existing artifact. | Local inconsistency; touching loaded behavior. |
| `rewrite` | Replace substantial content while preserving purpose. | Losing load-bearing content; changing meaning silently. |
| `refactor` | Preserve behavior/meaning while changing structure. | Semantic drift despite "no behavior change" claim. |
| `extend` | Add new capability/sections without replacing old ones. | Scope creep; duplicated concepts. |
| `extract` | Move content into a separate artifact. | Broken references; orphaned context. |
| `delete/deprecate` | Remove or mark artifact obsolete. | Loss of history; broken navigation. |

Probe result: operation intent should be captured explicitly. It is not enough to say "artifact type: Markdown." The protocol must ask "what are we doing to it?"

### Cycle 4 - Probe Lifecycle Depth

The existing Compact/Standard/Full model still works if it is understood as lifecycle depth:

| Mode | Lifecycle Depth | Good Fit |
| --- | --- | --- |
| Compact | One trace with inline brief, plan, risk scan, validation, outcome. | New low-risk docs, small notes, standalone draft artifacts. |
| Standard | Separate desc, plan, dynamic critic, critic, repaired plan if needed, trace. | Existing protocols, skills, non-core code/config/test artifacts. |
| Full | Standard plus stricter gates and retrospective review. | Runner behavior, discipline fundamentals, schemas, ARC execution/scoring. |

Probe result: Compact/Standard/Full should remain the main mode selector. Artifact type and operation intent should feed mode selection, not replace it.

### Cycle 5 - Jump Scan

Jump-scanned a different shape: separate subprotocol files for each operation:

```text
artifact_create.md
artifact_edit.md
artifact_rewrite.md
artifact_refactor.md
```

Potential benefit:

- Each operation could have tailored rules.
- Future automation could dispatch to operation-specific templates.

Risks:

- Too many protocols before one base protocol has been used.
- Shared invariants would be duplicated or drift.
- Users and agents may choose the wrong subprotocol.
- V1 complexity increases before real materialization traces reveal stable patterns.

Jump-scan result: subprotocols are not right for v1 as separate files. They are right as **operation profiles** inside `artifact_materialization.md`, with promotion gates for future extraction.

## Convergence Assessment

- **Frontier stability:** Stable. The major dimensions are artifact type, operation intent, lifecycle depth, and risk.
- **Declining discovery rate:** Later probes refined the same structure rather than finding new primary dimensions.
- **Bounded gaps:** Remaining unknowns are implementation details for the future `artifact_materialization.md` file, not conceptual blockers.

## Territory Overview

The territory has three axes:

```text
artifact_type      = what kind of thing is being changed?
operation_intent   = create/edit/rewrite/refactor/extend/extract/delete?
lifecycle_mode     = Compact/Standard/Full?
```

Risk mode should be selected from the intersection:

```text
risk = artifact_type + operation_intent + write_set + behavior impact + validation clarity
```

## Inventory

### Existing Strong Material

- The full AlignStack-like implementation lifecycle is proven for code and behavior-changing artifacts.
- Compact/Standard/Full already gives lifecycle depth.
- Outcome review now gives after-use calibration.

### Missing Material

- No operational `artifact_materialization.md`.
- No explicit operation-intent axis.
- No Markdown/content-specific compact lifecycle.
- No rules for when operation profiles become separate subprotocols.

## Signal Log

| Signal | Interpretation |
| --- | --- |
| Code needs task-plan and dynamic critic | Full lifecycle matters for behavior and coupling. |
| Simple Markdown should not use full lifecycle | Compact mode must be real, not a loophole. |
| Existing protocol edits are riskier than new notes | Operation intent matters as much as artifact type. |
| Rewrite/refactor can silently lose meaning | They need preservation checks. |
| Many subprotocols are tempting | Better as operation profiles until repeated traces justify extraction. |

## Confidence Map

- **Confirmed:** Full lifecycle is appropriate for code/behavior-changing artifacts.
- **Confirmed:** Compact mode is appropriate for low-risk standalone Markdown artifacts if it preserves source, contract, plan, validation, and trace.
- **Confirmed:** Separate subprotocol files are premature for v1.
- **Inferred:** `artifact_materialization.md` should contain operation profiles.
- **Unknown:** Which operation profiles will deserve extraction after real use.
- **Confirmed absent:** No `homegrown/protocols/artifact_materialization.md` file exists yet.

## Frontier State

The frontier is no longer whether materialization should be tiered. That is settled. The frontier is how to combine the axes without creating too many protocols:

```text
one controller protocol
  -> shared invariants
  -> mode selection
  -> operation profiles
  -> artifact-type guidance
  -> future extraction gates
```

## Gaps and Recommendations For Sensemaking

- Sensemaking should test whether `create/edit/rewrite/refactor` are subprotocols or operation profiles.
- Sensemaking should decide what "minimal Markdown materialization" must include.
- Sensemaking should decide when code artifacts must use task-desc/task-plan/critic-d.
- Sensemaking should prevent "Markdown = low risk" from becoming a false shortcut.

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
