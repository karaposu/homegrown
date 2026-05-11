# Exploration: next_load_bearing_navigation_warmup_context_loading

## Mode and Entry Point

Mode: mixed artifact + possibility exploration.

Entry point: signal-first. The user already supplied a live hunch: Navigation may be the next load-bearing development, but Navigation may first require session warm-up and context-loading logic.

## Cycle 1 - Coarse Scan

### What Was Scanned

Scanned recent Homegrown artifacts and surrounding theory:

- `devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md`
- `devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md`
- `homegrown/protocols/artifact_materialization.md`
- `homegrown/protocols/branch_inquiry.md`
- `homegrown/protocols/outcome_review.md`
- `homegrown/contracts/alignment_control.md`
- `enes/alignment_dynamics.md`
- `thinking_disciplines/navigation.md`
- recent inquiry folder list under `devdocs/inquiries/`

### What Was Found

The current architecture already has several load-bearing pieces:

- Branching exists as `homegrown/protocols/branch_inquiry.md`.
- Artifact materialization now exists as `homegrown/protocols/artifact_materialization.md`.
- Outcome review exists as `homegrown/protocols/outcome_review.md`.
- Alignment control exists as `homegrown/contracts/alignment_control.md`.
- Navigation exists as a discipline in `thinking_disciplines/navigation.md`.
- A prior finding already selected "materialization-backed Navigation relief" as the next sequence.

The missing region is not "Navigation exists or not." Navigation exists. The missing region is the entry condition for Navigation: how a session gets the right current project state into context cheaply, safely, and repeatably.

### Signals Detected

1. **Navigation-readiness gap.** Navigation can map next directions, but independent project-level Navigation needs a curated read set. Without this, every Navigation run depends on the current assistant session remembering enough.

2. **Context-cost tension.** The user is explicitly worried about context. A useful Navigation step cannot read all docs every time, but reading only the latest finding can miss dependencies, corrections, and live protocols.

3. **Recency vs authority tension.** Recent files matter, but older finding chains and stabilized protocols are often more authoritative than the newest folder.

4. **Discipline vs protocol ambiguity.** Session warm-up sounds cognitive when it decides what matters, but it also sounds procedural when it defines a read-set contract.

5. **Artifact handoff dependency.** Because `artifact_materialization.md` now exists, any next durable artifact can be created under a contract. That makes a small Navigation-context artifact feasible now.

### Resolution Decision

Zoom in on the Navigation-readiness gap. It is the highest-signal region because it sits between the user's live burden and the existing Navigation discipline.

### Probe

Navigation's current contract says it reads completed cycle outputs, verdicts, telemetry, scope checks, frontier questions, and context-directed signals. It can also be run independently when the human asks "what should I work on?"

That independent mode is underspecified. It says Navigation reads "whatever context exists" but does not define:

- what to read first;
- how much to read;
- how to prioritize recent findings vs stable protocols;
- when `docarchive/` matters;
- when to include materialization traces and outcome reviews;
- how to record what was read so later results are auditable.

### Frontier State

Frontier advancing. The key unknown is now narrower: the missing piece is probably a context-intake/warm-up protocol for Navigation, not a new full Navigation runtime.

### Confidence Map Update

- Existing Navigation discipline: confirmed.
- Need for movement-space relief: confirmed by user burden and prior findings.
- Artifact materialization as bridge to files: confirmed.
- Session warm-up/context intake as missing entry layer: scanned + probed, high confidence but not yet critiqued.
- Separate context discipline: possible but lower confidence.

## Cycle 2 - Possibility Scan

### What Was Scanned

Scanned possible next artifacts/capabilities:

1. Build a full Navigation Observer protocol.
2. Build a small Navigation warm-up/context-loading protocol.
3. Build a generic Homegrown session warm-up protocol for all work.
4. Build a separate "context" or "comprehend current state" discipline.
5. Patch Navigation itself to include context intake.
6. Run Navigation directly over only recent `finding.md` files.
7. Build navigation memory first.
8. Build multihead next.

### Signals Detected

- Full Navigation Observer is known from prior finding, but may be too large for the immediate missing piece.
- Generic session warm-up would help many tasks, but may overgeneralize before Navigation's read needs are proven.
- A separate context discipline might become powerful later, but the immediate need may be simpler: define a read-set contract and a current-state brief.
- Reading only `finding.md` files saves context but risks losing why critique killed ideas, how protocols actually work, and what materialization/outcome traces recorded.
- Navigation memory is downstream of using Navigation and reviewing outcomes; it should not lead.
- Multihead still multiplies outputs before comparison and context intake are stable.

### Resolution Decision

Zoom in on a tiered read-set protocol. The likely useful shape is not "read everything" and not "read only finding.md." It is a staged context intake:

```text
base context
  -> recent movement context
  -> source-authority context
  -> targeted deep context
  -> current-state brief for Navigation
```

### Probe

A Navigation warm-up/context-loading protocol could define:

- base files always read for project-level Navigation;
- recent findings to scan;
- when to include branch records;
- when to include `docarchive/`;
- when to include materialization traces and outcome reviews;
- output: a compact current-state brief that Navigation consumes.

This would reduce user burden because the user currently performs this implicitly: remembering recent breakthroughs, deciding what matters, and telling the AI which files to read.

### Frontier State

Frontier stabilizing around one region: Navigation needs context intake before it can reliably become the user's "what next?" assistant.

### Confidence Map Update

- Navigation warm-up protocol: confirmed as a candidate.
- Full observer protocol: viable but likely second step.
- Generic context discipline: inferred future possibility.
- Finding-only read: scanned and flagged as insufficient alone.
- Multihead: confirmed deferred by prior findings and current dependency structure.

## Jump Scan - Different Direction

### Scan Target

Looked away from Navigation toward ARC/harness/code materialization and the newly created artifact materialization protocol.

### Result

ARC/harness work still matters, but it requires a selected implementation target and enough context to avoid building the wrong adapter or runner. Artifact materialization now makes file creation safer, but it does not choose what to build.

This strengthens the Navigation-context conclusion: before ARC or larger implementation, the system needs a reliable way to load current project state and map options.

## Convergence Assessment

- Frontier stability: yes. The same missing region appears from user prompt, prior findings, and Navigation spec.
- Declining discovery rate: yes. New scans keep returning to context intake as the entry gap.
- Bounded gaps: mostly. The unresolved questions are details of shape, not whether the region matters.

Exploration is sufficient for sensemaking.

## Structural Map

### Territory Overview

The territory has five regions:

1. Existing movement tools: Navigation discipline and prior Navigation Observer findings.
2. Existing execution bridge: artifact materialization protocol.
3. Existing feedback bridge: outcome review and alignment control.
4. Missing intake layer: session warm-up/context loading for Navigation.
5. Future scale layers: Navigation Observer, navigation memory, selector, multihead.

### Inventory

| Region | Status | Notes |
| --- | --- | --- |
| Navigation discipline | Confirmed | Enumerates next directions; independent mode exists but read-set is loose. |
| Navigation Observer | Confirmed candidate | Prior finding says protocol-first observer reports should precede live session. |
| Artifact materialization | Confirmed | Now available for creating the next protocol artifact. |
| Outcome review | Confirmed | Should review whether Navigation relief actually works after use. |
| Context warm-up | High-signal gap | Needed so Navigation starts from the right current-state model. |
| Finding-only context | Partial option | Efficient but incomplete if used alone. |
| Generic context discipline | Future possibility | May be overbuilt before Navigation-specific intake is proven. |
| Multihead | Deferred | Needs selection, comparison, merge, and outcome memory first. |

### Signal Log

- Probed: Navigation-readiness gap.
- Probed: context-cost tension.
- Probed: discipline vs protocol ambiguity.
- Deferred: full Navigation Observer runtime.
- Deferred: generic context discipline.
- Deferred: multihead.

### Confidence Map

| Item | Confidence |
| --- | --- |
| Need for Navigation relief | confirmed |
| Need for context intake before reliable project-level Navigation | confirmed |
| Best immediate form is a small protocol/report contract | scanned + high confidence |
| Context intake should read only `finding.md` files | low confidence |
| Context intake should sometimes read `docarchive/` | high confidence |
| Context intake should become a separate discipline immediately | low/medium confidence |
| Full observer session should be built now | low confidence |

### Frontier State

The frontier is now around protocol shape:

- Is the artifact `homegrown/protocols/navigation_warmup.md`, `homegrown/protocols/context_intake.md`, or a section inside Navigation?
- What are its modes?
- What exact read tiers should it define?
- What output should Navigation consume?

### Gaps and Recommendations

The next discipline should decide whether this is:

- a Navigation-specific protocol;
- a generic context-loading protocol;
- a new discipline;
- or a patch to the Navigation discipline itself.

Exploration recommendation: do not build full observer or multihead next. First build a small, materialized Navigation context-intake/warm-up protocol and dogfood it on one real Navigation run.
