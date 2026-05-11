# Exploration: Meta Loop Whirl Navigation

## User Input

`devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Mixed artifact + possibility exploration.
- **Entry point:** Signal-first. The user introduced a strong metaphor: the meta-loop is like a whirl that consumes artifacts, moves in any direction, and traverses thinking space; Navigation may be its eyes.

Artifacts scanned:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- `devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md`
- `enes/desc.md`
- `enes/what_is_meaningful_traversal.md`
- `enes/enumerated_goals.md`
- `enes/discipline_taxonomy.md`
- `devdocs/scientific_summary.md`

## 2. Exploration Cycles

### Cycle 1: User Metaphor Territory

#### Scan

The user's concept contains several claims:

- The meta-loop is not merely "repeat MVL+."
- It can move backward, forward, sideways, branch, merge, or stop.
- It consumes artifacts and creates new artifacts.
- It traverses thinking space.
- Navigation acts as its eyes.

#### Signals Detected

1. **Dynamic movement signal:** "Loop backwards" implies the meta-loop can revisit prior findings, resurrect killed paths, invalidate survivors, and repair earlier framing.
2. **Consumption signal:** The meta-loop takes artifacts as input, not only user prompts.
3. **Traversal signal:** The meta-loop should be understood spatially/topologically, not only temporally.
4. **Perception signal:** Calling Navigation its eyes is probably accurate if Navigation maps options but does not choose.

#### Resolution Decision

Zoom into current Navigation to check whether it already supports backward and branch-aware movement.

#### Probe

The Navigation taxonomy already includes context-directed movement:

- `REVISIT` can resurrect killed ideas, invalidate survivors, or revert degraded refinements.
- `MERGE` combines multiple branches.
- `CONSOLIDATE` integrates multiple inquiries.
- `UNBLOCK` resolves dependencies outside the current loop.
- "Between branches" is an explicit Navigation use case.

This means Navigation already has some of the visual vocabulary needed for a whirl-like meta-loop.

#### Frontier State

The metaphor is structurally plausible. It needs boundary discipline: if the whirl consumes everything forever, it becomes uncontrolled drift.

#### Confidence Map Update

- Meta-loop as traversal process: scanned, strong signal.
- Navigation as eyes: scanned, strong but incomplete.
- Full discovery of thinking space: scanned, weak and probably overclaimed.

### Cycle 2: Navigation Spec Territory

#### Scan

Navigation is defined as boundary-level enumeration. It transforms completed cycle outputs into a full map of typed next directions.

Key constraints:

- Navigation is not decision-making.
- Navigation is not planning.
- Navigation is not routing.
- Selection is separate.
- Sequencing is separate.
- Cross-run state is separate.

#### Signals Detected

1. **Eyes fit:** Navigation sees the possible next moves.
2. **Hands missing:** Navigation does not act on what it sees.
3. **Memory missing:** Navigation can read context, but it does not own durable cross-run state.
4. **Valuation missing:** Navigation confidence is rough prioritization, not a full value function.

#### Resolution Decision

Zoom out from Navigation to the larger runner that would need eyes, memory, action, and stopping criteria.

#### Probe

The prior Navigation/MVL integration finding separated five layers:

```text
atomic MVL/MVL+ loop
-> boundary trigger
-> Navigation map
-> selector
-> meta-loop runner
```

That split is compatible with the user's metaphor if the meta-loop is the moving body, Navigation is perception, and MVL+ is the work unit used to probe regions of thinking space.

#### Frontier State

Navigation fits perception, not agency. The meta-loop must own the missing agency components.

#### Confidence Map Update

- Navigation as perception layer: confirmed.
- Navigation as whole meta-loop: confirmed false.
- Need for selector and meta-state: confirmed.

### Cycle 3: Long-Term Autonomy and Traversal Territory

#### Scan

`enes/desc.md` defines a long-term goal involving autonomous cognition, decreasing human role, parallel MVL loops, cross-comparison, and self-improvement.

`enes/what_is_meaningful_traversal.md` says the orchestration of many loops is the system. It also says meaningful traversal distinguishes productive thinking from spinning.

`enes/enumerated_goals.md` explicitly names a possible top-level skill such as `/continuous`, `/loop`, or `/meta-mvl` that orchestrates multiple `/MVL+` runs through `/navigate`, with `_meta_state.md` and meaningful-traversal criteria.

#### Signals Detected

1. **The meta-loop already has a roadmap footprint.** It is not an alien concept.
2. **Meaningful traversal is load-bearing.** Without it, the whirl has no way to tell movement from spinning.
3. **Parallel heads require comparison.** The meta-loop eventually needs branch valuation and merge logic.
4. **Self-improvement needs traversal history.** Baldwin cycles need records of what runs improved the system and what did not.

#### Resolution Decision

Probe whether "discover the thinking space fully" is a valid target.

#### Probe

Thinking space appears open-ended. Every new finding can create new concepts, new questions, new branches, and new revisits. A finite system cannot promise total discovery of that space.

A better target is **bounded meaningful traversal**: from a seed, traverse until the current goal has enough coverage, convergence, depth, directedness, and productivity to justify stopping or returning control.

#### Frontier State

The meta-loop can aspire to thorough traversal of a bounded inquiry region, not complete discovery of all thinking space.

#### Confidence Map Update

- Meaningful traversal as constraint: confirmed.
- Full thinking-space discovery: rejected as literal claim.
- "Whirl" as controlled traversal metaphor: scanned, viable if bounded.

### Jump Scan: Opposite Direction

#### Scan

Consider the opposite: maybe the meta-loop should just be a simple loop runner with fixed linear recurrence:

```text
MVL+ -> Navigation -> select -> MVL+ -> Navigation -> select
```

#### Result

This is useful as v1 implementation, but it is conceptually too narrow. It cannot express backward movement, branch merge, revisits, consolidation, or dynamic stopping unless those are added as explicit capabilities. The user's whirl framing captures the richer long-term topology better than a fixed linear loop.

#### Confidence

Simple sequential runner is a good first implementation. It is not the full concept.

## 3. Territory Overview

Major regions:

1. **Meta-loop as traversal:** plausible and already aligned with meaningful-traversal docs.
2. **Meta-loop input:** not only prompts; any artifact or state that can seed inquiry movement.
3. **Navigation as eyes:** strong fit for map-making, weak fit for selection, memory, and action.
4. **Thinking-space coverage:** should be bounded and goal-relative, not total.
5. **Implementation staging:** sequential runner first; dynamic whirl later.

## 4. Inventory

### Candidate Inputs for the Meta-Loop

- Raw user question or goal.
- Completed inquiry folder.
- Finding chain.
- Navigation map.
- Reflection output.
- Correction chain where a later MVL+ fixed an earlier bad finding.
- Set of related inquiry folders.
- Project-level state such as `devdocs/inquiries/`.
- External task or problem specification.
- Human interruption or mid-run redirect.

### Candidate Movements

- Forward: run a new MVL+ from a frontier question.
- Backward: revisit, invalidate, resurrect, or revert prior findings.
- Sideways: try a different framing or approach.
- Downward: deepen one survivor or sub-question.
- Upward: consolidate several findings into a higher-level model.
- Branching: launch several MVL+ heads from one Navigation map.
- Merging: compare and integrate branch outputs.
- Stopping: terminate when meaningful traversal is sufficient.

### Candidate State Fields

- Seed artifact.
- Current active frontier.
- Visited inquiry folders.
- Open questions.
- Selected Navigation directions.
- Branch graph.
- Blockers and gates.
- Traversal-quality signals.
- Stop/continue rationale.
- Human overrides.

## 5. Signal Log

| Signal | Source | Probed? | Confidence | Meaning |
|---|---|---:|---:|---|
| Navigation is boundary enumeration | Navigation reference | Yes | Confirmed | It can be eyes, not whole agent. |
| Navigation includes REVISIT/MERGE/CONSOLIDATE | Navigation taxonomy | Yes | Confirmed | It already supports backward and cross-branch movement vocabulary. |
| Meta-loop needs `_meta_state.md` | `enes/enumerated_goals.md` | Yes | Confirmed | Cross-run state is expected in roadmap. |
| Meaningful traversal distinguishes thinking from spinning | `enes/what_is_meaningful_traversal.md` | Yes | Confirmed | The whirl needs a quality signal. |
| Complete discovery of thinking space | User phrasing/probe | Yes | Weak | Better reframed as bounded traversal. |
| Simple sequential runner as full concept | Jump scan | Yes | Weak | Good v1, not conceptually complete. |

## 6. Confidence Map

- **Confirmed:** Navigation suits the "eyes" role if eyes means possibility perception.
- **Confirmed:** Navigation does not supply selection, execution, memory, or stopping.
- **Confirmed:** A meta-loop needs cross-run state.
- **Confirmed:** The meta-loop can move backward through REVISIT-like operations.
- **Scanned:** The whirl metaphor is useful if constrained by meaningful traversal.
- **Rejected literal claim:** The meta-loop discovers thinking space fully.
- **Unknown:** The exact first `_meta_state.md` schema.
- **Unknown:** The exact selection heuristic after human choice.

## 7. Frontier State

The territory is sufficiently mapped for sensemaking. Remaining questions are conceptual stabilization and design boundaries:

- What is the clean rephrase?
- What exactly is the input?
- What does "fully discover thinking space" become when made honest?
- What must Navigation gain, if anything, to serve the meta-loop?

## 8. Gaps and Recommendations

Recommendations for Sensemaking:

- Treat the meta-loop as a traversal engine, not only a loop runner.
- Preserve the "whirl" intuition but add constraints: seed, state, Navigation, selector, meaningful traversal, stop condition.
- Do not let the metaphor smuggle in full autonomy. The current Navigation can see options, but a meta-loop still needs memory and valuation.

