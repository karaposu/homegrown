# Exploration: Navigation MVL Integration

## User Input

`devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/_branch.md`

## Mode And Entry Point

- **Mode:** Mixed artifact + possibility exploration.
- **Entry point:** Signal-first. The user has a concrete hunch: Navigation may belong in a larger loop around MVL, not inside MVL itself.
- **Artifacts scanned:** `homegrown/navigation/SKILL.md`, `homegrown/navigation/references/navigation.md`, `enes/desc.md`, `enes/what_is_meaningful_traversal.md`, and archived findings about navigation, wayfinding, next-step taxonomy, and continuous-loop priorities.

## Cycle 1: Navigation Spec Territory

### Scan

Scanned:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`

Found:

- Navigation is explicitly defined as a **boundary discipline**.
- It operates **between cognitive cycles**, not within the core S/I/C or E/S/D/I/C sequence.
- Its transform is: completed cognitive-cycle output -> full enumeration of possible next directions.
- It is not decision-making, planning, routing, reflection, or wayfinding.
- Its output is a navigation map with typed directions and guidelines.
- Its primary input is a completed SIC cycle's output: critique verdicts, frontier questions, telemetry, scope check, and optionally reflection.

### Signals Detected

1. **Boundary placement is explicit.** The reference says: "Navigation and the Core Cycle (S -> I -> C): Navigation is a BOUNDARY discipline."
2. **Navigation is enumeration, not selection.** It maps all possible next moves; selection is separate.
3. **Navigation already contains multi-head language.** It says wayfinding's pick-one framing is a single-head artifact; under multi-head, each head consumes enumeration and picks its own direction.
4. **The spec names three use cases:** after a SIC cycle, independently from project state, and between branches during multi-headed execution.

### Resolution Decision

Zoom in on the relationship-to-other-disciplines section because it directly addresses whether Navigation belongs inside MVL or outside it.

### Probe

Probe result:

```text
SIC -> R (backward) -> N (forward, reads R) -> Select -> next SIC
```

The reference model places Navigation after the core loop and after optional Reflection. This is strong evidence against inserting Navigation as another in-loop discipline like S -> I -> C -> N.

### Frontier State

Navigation's intended role is confirmed at spec level.

### Confidence Map Update

- Navigation-as-boundary: confirmed.
- Navigation-as-in-loop-step: confirmed absent in the spec.
- Navigation-as-meta-loop input: scanned and strongly supported.

## Cycle 2: End-Goal And Multi-Head Territory

### Scan

Scanned:

- `enes/desc.md`
- `enes/what_is_meaningful_traversal.md`

Found:

- `enes/desc.md` defines an end-goal involving fully autonomous problem solving, parallel MVL loops, and cross-comparison.
- The end-goal treats loops as medium primitives and orchestration of many loops as the larger system.
- `enes/what_is_meaningful_traversal.md` explicitly says the end goal is a self-improving cognitive system that runs many `/MVL+` loops in parallel and compares across them.
- It also says continuous loops are many `/MVL+` runs threaded through `/navigate`, possibly in multi-head form.

### Signals Detected

1. **MVL is atomic at the larger scale.** Disciplines are small primitives, loops are medium primitives, orchestration is the system.
2. **Navigation is part of traversal, not answering.** It connects loop outputs to next loop inputs.
3. **Meaningful traversal is missing.** The larger loop needs signals for coverage, convergence, productivity, directedness, and depth.
4. **Autonomy depends on navigation-like direction choice.** Without a way to decide next movement, the system still depends on the human for continuous self-direction.

### Resolution Decision

Zoom out from "should MVL include Navigation?" to "what layer owns next-step selection and traversal quality?"

### Probe

Probe result:

The end-goal does not imply "put Navigation inside MVL." It implies a higher orchestration layer that repeatedly runs MVL+ and uses Navigation maps to decide what to run next, when to branch, and when to stop.

### Frontier State

The bigger-loop interpretation is strongly supported.

### Confidence Map Update

- Multi-head MVL+ + Navigation architecture: confirmed as end-goal trajectory.
- Meaningful traversal as required substrate: confirmed as concept, not fully specified.
- Current implementation of that meta-loop: absent.

## Cycle 3: Prior Inquiry Territory

### Scan

Scanned:

- `devdocs/inquiries/_archive/post_completion_navigation/finding.md`
- `devdocs/inquiries/_archive/wayfinding_navigation_unification_check/finding.md`
- `devdocs/inquiries/_archive/next_step_taxonomy/`
- `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md`

Found:

- `post_completion_navigation` says TERMINATE should print lightweight upstream pointers from `_state.md` relationships. It calls this a shortcut, not full Navigation.
- `wayfinding_navigation_unification_check` says Navigation replaces Wayfinding and becomes the canonical iteration-boundary discipline.
- `next_step_taxonomy` says the taxonomy is the autonomous loop's action vocabulary, and each type is a question-framing template for SIC.
- `continuous_loop_priorities` proposes a concrete roadmap: conditional `/navigate` invocation in `/MVL+`, then continuous-loop runner v1, then meaningful-traversal criteria and testing.

### Signals Detected

1. **Prior art already rejects unconditional in-loop Navigation.** The stable direction is boundary invocation.
2. **A conditional invocation step was already recommended.** Continuous-loop priorities names "conditional `/navigate` invocation in `/MVL+`" as Item 2.
3. **A larger runner was already named as the load-bearing future artifact.** Continuous-loop runner v1 is Item 3.
4. **Navigation taxonomy is an action vocabulary for future loops.** Navigation items are not just suggestions; they can become typed prompts for new MVL runs.

### Resolution Decision

Probe the contradiction between "conditional `/navigate` in `/MVL+`" and "Navigation belongs to a larger meta-loop."

### Probe

Probe result:

These are not contradictory. Conditional `/navigate` inside `/MVL+` is an incremental bridge. The larger continuous-loop runner is the real architecture. The bridge can be implemented first so existing MVL+ produces maps when it hits open-frontier or non-convergence conditions. The meta-loop later consumes those maps automatically.

### Frontier State

Prior findings converge strongly on a staged architecture:

```text
Now:      MVL+ ends with CONCLUDE; Navigation manual/rare.
Bridge:   MVL+ invokes Navigation conditionally at boundary.
Later:    Continuous-loop runner runs MVL+ -> Navigation -> Select/Branch -> MVL+.
Future:   Multi-head runner dispatches multiple MVL+ heads from Navigation map and merges them.
```

### Confidence Map Update

- Conditional Navigation bridge: confirmed prior recommendation.
- Continuous-loop runner as larger architecture: confirmed prior recommendation.
- Navigation inside core discipline sequence: weak and mostly contradicted.

## Jump Scan: Opposite Direction

### Scan

Deliberately checked whether any source supports making Navigation a normal in-loop discipline.

### Result

No strong source supports `E -> S -> D -> I -> C -> N` as the new default core pipeline. The closest sources mention `/navigate` after iteration completion, after partial findings, or as a continuous-loop component. Navigation is repeatedly described as boundary-level, not answer-production-level.

### Confidence

Confirmed absent at the scanned resolution.

## Territory Overview

Major regions:

1. **Navigation spec:** confirmed boundary discipline, enumeration, not selection.
2. **End-goal docs:** confirmed multi-head MVL+ orchestration and continuous traversal need.
3. **Prior findings:** confirmed bridge path from manual Navigation to conditional invocation to continuous-loop runner.
4. **Implementation gap:** current system has Navigation but no routine invocation or selector.

## Inventory

### Existing Navigation Capabilities

- Reads completed inquiry outputs.
- Enumerates possible next directions.
- Uses 16-type taxonomy across content/process/context.
- Includes confidence symbols.
- Includes guidelines with WHY.
- Includes excluded-type reasoning.
- Supports post-SIC, standalone, and between-branch uses.

### Existing Architectural Claims

- Navigation is boundary discipline.
- Reflection is backward; Navigation is forward.
- Wayfinding was absorbed into Navigation.
- Navigation map is the action vocabulary for autonomous loops.
- Multi-head architecture requires enumeration, not a single global pick-one move.

### Existing Gaps

- MVL+ currently references Navigation only as a suggestion when multiple directions emerge.
- Navigation output is not routinely produced after partial/open findings.
- There is no selector that consumes Navigation maps.
- There is no continuous-loop runner that turns Navigation items into new MVL+ branches.
- Meaningful traversal criteria are still fuzzy or roadmap-level.

## Signal Log

| Signal | Source | Probed? | Confidence | Meaning |
|---|---|---:|---:|---|
| Navigation is boundary discipline | `homegrown/navigation/references/navigation.md` | Yes | Confirmed | Do not make it a normal in-loop discipline. |
| Navigation enumerates, selection separate | Navigation reference | Yes | Confirmed | A selector or human must choose after map generation. |
| Multi-head needs enumeration | Navigation reference + `enes/desc.md` | Yes | Confirmed | Navigation fits larger orchestration. |
| Continuous loops are MVL+ threaded through `/navigate` | `enes/what_is_meaningful_traversal.md` | Yes | Confirmed | Bigger loop framing is correct. |
| Conditional `/navigate` in `/MVL+` already recommended | `continuous_loop_priorities` | Yes | Confirmed | Practical bridge exists. |
| Navigation inside core MVL sequence | Jump scan | Yes | Confirmed absent | Not supported by current architecture. |

## Confidence Map

- **Confirmed:** Navigation is boundary-level enumeration.
- **Confirmed:** Navigation should not replace CONCLUDE or become part of the answer-producing discipline sequence.
- **Confirmed:** A larger meta-loop using MVL+ and Navigation matches the end-goal.
- **Scanned:** Conditional Navigation invocation inside MVL+ as a bridge.
- **Scanned:** Meaningful traversal as required but not fully operationalized.
- **Unknown:** Exact selector implementation for first runnable meta-loop.
- **Unknown:** Whether Navigation should run after every completed finding or only under triggers.

## Frontier State

The territory is stable enough for sensemaking. Remaining gaps are design choices, not discovery gaps:

- exact trigger policy;
- selector shape;
- whether to modify MVL+ now or first use Navigation manually;
- what a minimal meta-loop should own.

## Gaps And Recommendations

Recommendations for Sensemaking:

1. Treat MVL/MVL+ as atomic answer-producing loops.
2. Treat Navigation as boundary enumeration.
3. Distinguish three integration levels:
   - manual Navigation after findings;
   - conditional Navigation inside MVL+ termination logic;
   - continuous-loop runner that consumes Navigation maps and launches new MVL+ inquiries.
4. Do not choose "Navigation inside MVL" unless "inside" means boundary hook after CONCLUDE/partial termination, not a new discipline between Critique and CONCLUDE.
