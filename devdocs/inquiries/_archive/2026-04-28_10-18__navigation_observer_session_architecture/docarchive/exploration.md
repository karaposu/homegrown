# Exploration: Navigation Observer Session Architecture

## User Input

`devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/_branch.md`

## 1. Mode and Entry Point

**Mode:** Mixed artifact and possibility exploration.

- Artifact territory: prior findings about advanced Navigation, meta-loop, Navigation's current role, and the existing meta-loop skill.
- Possibility territory: the proposed architecture where Navigation runs as a separate observer/supervisor AI session.

**Entry point:** Signal-first.

The user's proposal is a strong signal: a separate Navigation session may solve the exact problem identified in the previous finding, namely that deep movement-space understanding is needed but the main MVL session's context can be bloated by task details.

## 2. Exploration Cycles

### Cycle 1 - Scan Existing Architecture

**Scanned:**

- `devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/finding.md`
- `devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/finding.md`
- `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md`
- `homegrown/meta-loop/SKILL.md`
- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`

**Found:**

- Prior work already says current Navigation is not advanced enough.
- Prior work says Navigation is the meta-loop's eyes, not its will.
- The meta-loop spec is sequential and human-selected in v1.
- Current Navigation is a command/discipline, not a persistent observer role.
- Current Navigation reads artifacts and outputs a map, but it does not maintain a dedicated long-lived navigation context.

**Signals detected:**

- The proposed observer session fits the meta-loop idea better than plain `/navigation`.
- A separate observer context could reduce contamination from the main task session's local reasoning.
- A separate observer could maintain cross-run navigation memory.
- The proposal risks combining Navigation, selector, and meta-loop into one agent unless boundaries are explicit.

**Resolution decision:** Zoom in on what the observer session would solve.

**Probe:**

The observer session directly targets several missing pieces:

- deep movement-space understanding;
- graph awareness across multiple inquiry folders;
- selection/outcome tracking;
- context isolation from the main MVL worker;
- continuity across multiple MVL runs;
- ability to run its own MVL+ loop focused only on navigation decisions.

This is more than a syntax change. It is a role separation.

**Frontier state:** Advancing. The proposal is structurally plausible.

**Confidence update:** Medium-high confidence that this is a real architecture candidate.

### Cycle 2 - Scan Possible Observer Designs

**Scanned designs:**

1. Navigation remains a command inside the main session.
2. Navigation is a separate short-lived session per inquiry.
3. Navigation is a long-lived observer session with its own context and memory.
4. Navigation observer is also selector.
5. Navigation observer is full meta-loop runner.
6. Navigation observer recommends, human selects.
7. Navigation observer can request MVL+ sub-inquiries.

**Found:**

- Design 1 is current-ish and underpowered.
- Design 2 gives context isolation but little continuity.
- Design 3 is the strongest: persistent observer with artifact memory.
- Design 4 is risky because it hides selection values.
- Design 5 may be too broad. A full meta-loop runner needs execution control, stop logic, branch tracking, and selection.
- Design 6 is the safe v1: observer recommends movement options and maybe a preferred candidate, but human selects.
- Design 7 is useful as an escalation, but only after evidence.

**Signals detected:**

- The best concept is not "Navigation as a normal skill" and not "Navigation as full autonomous controller."
- The best concept is a **Navigation Observer**: persistent, artifact-native, context-isolated, map-focused, and selector-adjacent but not fully autonomous in v1.
- The observer can use MVL+ internally because it asks a navigation-specific question.

**Resolution decision:** Zoom in on role boundaries.

**Probe:**

A workable split:

```text
Worker MVL session: solves the current inquiry.
Navigation Observer: reads artifacts, maps movement-space, runs navigation-focused MVL+ when needed.
Human or explicit selector: chooses the next committed move.
Meta-loop runner: executes selected moves and records traversal state.
```

This split preserves the benefits of a separate session without hiding all control inside it.

**Frontier state:** Stabilizing around Navigation Observer as a role.

**Confidence update:** High confidence that observer role is a strong candidate if bounded.

### Cycle 3 - Probe Compute and Context Effects

**Scanned:**

- Context bloat problem.
- Compute limits from prior finding.
- N2/N3/N4 Navigation ladder.

**Found:**

Separate observer session helps with two costs:

- It keeps the main MVL worker focused on the current inquiry.
- It keeps Navigation focused on movement-space, not local task execution details.

But it adds new costs:

- extra session overhead;
- synchronization burden;
- stale artifact risk;
- possible duplicate reasoning;
- coordination protocol required.

The observer design fits the tier ladder:

- N2 deep map can run in observer context.
- N3 graph-native data can be the observer's durable memory.
- N4 sub-inquiry escalation can be requested by observer, not silently launched.

**Signals detected:**

- Separate session is not automatically more efficient. It is more efficient only if it reads summarized artifacts and structured state rather than raw everything.
- The observer should be artifact-first, not transcript-first.
- The observer needs an explicit observation protocol: what it watches, when it wakes, what it may read, and what it may write.

**Resolution decision:** Probe minimum implementation.

**Probe:**

Minimum viable observer does not need true parallel AI runtime yet.

It can start as a protocol:

```text
Run MVL+ worker -> finding.md
Run Navigation Observer on latest artifact set
Observer produces navigation_observer.md or navigation.md
Observer records recommended move candidates and rationale
Human selects one
Meta-loop state records selection
```

The later version can become a separate active session after the artifact protocol works.

**Frontier state:** Stable enough for sensemaking.

**Confidence update:** High confidence that protocol-first observer is the buildable path.

### Jump Scan - Opposite Direction

**Scanned contrary possibility:** Maybe the observer session is over-engineering and we should simply make Navigation N2 deeper inside the same session.

**Found:**

This objection is valid for the immediate patch. The simplest next step is still to patch Navigation N2 and dogfood it.

But the observer concept becomes stronger once Navigation must manage cross-run thinking-space, graph memory, and selected-move outcomes. Those are exactly the things a single MVL worker session should not carry while solving local inquiries.

The conclusion is not "observer now or nothing." It is:

- N2 spec patch first;
- observer protocol soon after;
- persistent separate session later if protocol proves useful.

**Frontier result:** Observer survives as a staged architecture, not as the very first implementation step.

## 3. Convergence Assessment

- **Frontier stability:** Stable. Main candidate and boundaries are clear.
- **Declining discovery rate:** Yes. Later scans refined staging rather than adding new viable architectures.
- **Bounded gaps:** Yes. Remaining gaps concern exact protocol and implementation mode.

Exploration is complete.

## 4. Structural Map

### Territory Overview

The territory has five regions:

1. **Current limitation:** Navigation in one session is too easy to run shallow and context-mixed.
2. **Observer role:** separate Navigation session focused on movement-space and artifacts.
3. **Boundary risk:** observer must not secretly become selector or full meta-loop too soon.
4. **Build path:** protocol-first observer before long-lived autonomous observer.
5. **Data substrate:** observer needs graph/state artifacts, not raw transcript dependence.

### Inventory

| Region | What was found | Confidence |
|---|---|---|
| Context isolation | Observer can reduce main-session bloat | Confirmed |
| Deep Navigation | Observer can run MVL+ focused only on movement decisions | Confirmed |
| Role boundary | Observer must not hide selection in v1 | Confirmed |
| Persistent session | Useful later, but requires synchronization and state | Scanned |
| Protocol-first path | Buildable before true parallel session | Confirmed |
| Full autonomy | Premature without outcome evidence | Confirmed |

### Signal Log

- **Strong signal:** The proposal addresses the exact missing Navigation depth problem.
- **Strong signal:** The observer should read artifacts, not the whole worker transcript.
- **Strong signal:** Boundary between observing/recommending and selecting/executing is load-bearing.
- **Medium signal:** A long-lived separate session may become a breakthrough after graph-native state exists.
- **Medium signal:** Protocol-first implementation can test the idea without overbuilding.

### Confidence Map

- **Confirmed:** Separate observer architecture is coherent.
- **Confirmed:** It should not immediately be a fully autonomous selector.
- **Confirmed:** It needs artifact/state protocol.
- **Scanned:** Long-lived observer session.
- **Inferred:** Observer can be the right owner of N2/N3 Navigation.
- **Unknown:** Whether a separate live session improves output enough to justify overhead.

### Frontier State

The main frontier is:

```text
How to design Navigation Observer so it gets deep movement-space focus
without prematurely becoming an unvalidated autonomous controller?
```

### Gaps and Recommendations

- Sensemaking should clarify the conceptual boundary: observer, selector, and meta-loop.
- Decomposition should split session roles and interfaces.
- Innovation should produce staged designs.
- Critique should test whether this is breakthrough or over-engineering.

## Exploration Telemetry

- **Mode:** Mixed artifact and possibility exploration.
- **Entry point:** Signal-first.
- **Cycles run:** 3 plus jump scan.
- **Convergence:** COMPLETE.
- **Primary failure avoided:** Premature depth. The analysis did not jump directly to full separate autonomous session; it scanned protocol-first staging.
- **Output: PROCEED**
