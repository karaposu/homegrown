# Sensemaking: Multi-Resolution Navigation Budget Vs Coverage

## User Input

```text
$MVL+

u said 

This command is unsafe:

/multi-navigation --depth 2 <source>
The problem is breadth. If the parent map has 12 expandable routes, depth: 2 can still create too many child maps. If each child has more expandable routes, the artifact count grows quickly.

The minimum safe control surface is:

depth
max_expansions
expansion_policy
output_root
composition_output
no_selection
depth controls vertical traversal.

max_expansions controls horizontal budget.

expansion_policy controls which routes are eligible for child maps.

output_root controls where files go.

composition_output makes the result readable.

no_selection preserves Navigation's boundary: the runner maps route space but does not choose the final route.

lets reconsider it , i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want... if you limit it with these other params then we are limiting the navigation no?

i can accept max_expansions, which would mean AI would pick top N paths and follow them. 
but how it is designed should allow running unrun ones too ... 
actually others parms are also okay...
```

## SV1: Baseline Understanding

The user is right to challenge the prior framing. Multi-resolution Navigation exists to uncover many directions, so treating breadth itself as the problem risks weakening the core purpose of Navigation.

The likely correction is not to remove all controls, but to redefine controls as execution and continuation mechanics rather than coverage limits.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- Navigation must enumerate route space; it must not silently filter routes.
- Navigation must not select the final route for the user.
- Multi-resolution Navigation can create many child maps.
- The user wants broad coverage, not artificial narrowing.
- The user can accept `max_expansions` only if unrun paths remain visible and runnable.
- Future output must be readable and resumable.

### Key Insights

- Breadth is the desired discovery output, not the enemy.
- The real risk is untracked expansion execution, not broad route enumeration.
- `max_expansions` is dangerous if interpreted as "only these routes exist."
- `max_expansions` is useful if interpreted as "only these queued routes are expanded in this run."
- AI choosing "top N" can be acceptable as scheduling, but not as final route selection.

### Structural Points

- `depth` controls vertical levels.
- The expansion frontier is the set of all expandable candidates.
- A batch budget controls how many frontier candidates are executed now.
- A pending queue preserves unrun candidates.
- A composition output makes the whole run readable.
- A resume rule lets later runs continue coverage.

### Foundational Principles

- Enumeration and selection are separate operations.
- Budgeting compute is not the same as limiting truth or possibility space.
- Unrun does not mean rejected.
- Out-of-policy does not mean nonexistent.
- A route hidden from the map is effectively lost to future warm-up.

### Meaning-Nodes

- Coverage.
- Frontier.
- Batch.
- Scheduling.
- Resume.
- Composition.
- No final selection.

## SV2: Anchor-Informed Understanding

The question is not whether multi-resolution Navigation should reveal many directions. It should.

The question is how the runner avoids confusing three things:

```text
all directions discovered
directions expanded in this run
directions eventually selected for action
```

The prior finding protected against runaway execution, but its language made it sound like broad discovery itself was the danger.

## Phase 2: Perspective Checking

### Technical / Logical

`depth` only bounds vertical traversal. It says nothing about the number of siblings at each level.

But sibling count is not automatically bad. It becomes bad only when the runner must materialize every sibling immediately and has no queue, no composition, and no resume state.

New anchor: horizontal control should operate at the execution layer, not the discovery layer.

### Human / User

The user needs Navigation because manually holding the whole route space is too hard. A runner that drops unexpanded routes reintroduces the same burden: the user must remember what was not run.

New anchor: unrun routes must be visible enough that the user does not carry them mentally.

### Strategic / Long-Term

Homegrown is trying to become self-maintaining. A multi-resolution runner can become a major load-bearing mechanism only if it accumulates durable map state across sessions.

New anchor: the runner should produce continuation memory, not just child files.

### Risk / Failure

The largest risk is hidden selection. If "top N" routes get expanded and the rest vanish, the expanded routes gain artificial importance.

New anchor: top-N ordering must be auditable scheduling, and non-expanded routes must remain pending.

### Resource / Feasibility

Exhaustive traversal can be valid and sometimes desired, but it may be expensive in tokens, files, and reading time.

New anchor: support both exhaustive and budgeted modes rather than pretending one mode fits all.

### Definitional / Consistency

Navigation's reference says Navigation enumerates all possible next moves and does not select. A permanent expansion cap contradicts that if the cap hides or discards routes.

New anchor: any budget term must be compatible with enumeration completeness.

## SV3: Multi-Perspective Understanding

The stable distinction is:

```text
coverage frontier = all candidates Navigation discovered
execution batch = candidates expanded during this run
selection = later commitment to a route
```

`max_expansions` is acceptable only in the second layer. It should not touch the first layer, and it must not simulate the third layer.

## Phase 3: Ambiguity Collapse

### Ambiguity: Is breadth the problem?

**Strongest counter-interpretation:** Breadth is a real problem because too many child maps can overwhelm the system.

**Why the counter-interpretation fails:** Too many child maps are an execution and composition problem, not an enumeration problem. Navigation can record many candidates without immediately expanding all of them. The mechanism that creates overload is materialization of every child map without a queue, not the existence of many directions.

**Confidence:** HIGH.

**Resolution:** Breadth is desired at the coverage layer. Unbounded expansion is the risk at the execution layer.

**What is now fixed?** Do not frame many discovered directions as bad.

**What is no longer allowed?** A protocol that reduces coverage because broad discovery is inconvenient.

**What now depends on this choice?** Multi-resolution Navigation must preserve all discovered expansion candidates.

**What changed in the conceptual model?** The model splits coverage from execution.

### Ambiguity: What should `max_expansions` mean?

**Strongest counter-interpretation:** `max_expansions` should mean the maximum number of expansions the runner is allowed to consider, because otherwise output can still grow.

**Why the counter-interpretation fails:** If the runner only considers N expansions and discards or hides the rest, it violates Navigation's enumeration boundary. The safer mechanism is to consider all eligible candidates, execute N of them, and leave the rest in pending state.

**Confidence:** HIGH.

**Resolution:** `max_expansions` should mean current-run batch size only. A clearer name is `batch_size` or `max_batch_expansions`.

**What is now fixed?** Budget controls execution, not discovered coverage.

**What is no longer allowed?** Treating non-expanded routes as rejected or nonexistent.

**What now depends on this choice?** The runner needs a frontier ledger and resume operation.

**What changed in the conceptual model?** Budget becomes a continuation mechanism, not a narrowing mechanism.

### Ambiguity: Is AI top-N selection acceptable?

**Strongest counter-interpretation:** AI top-N expansion is selection by another name and should be forbidden.

**Why the counter-interpretation fails:** There is a real difference between scheduling which candidates to expand first and deciding which route should be pursued. Scheduling is operational ordering; selection is commitment. Scheduling is acceptable if it is explicit, auditable, and leaves every unrun candidate visible.

**Confidence:** HIGH.

**Resolution:** AI may pick top N for the current expansion batch under a declared scheduling policy. It must not declare the other paths dead, inferior, or absent.

**What is now fixed?** Top N is scheduling, not final selection.

**What is no longer allowed?** A top-N batch that hides the remaining frontier.

**What now depends on this choice?** Composition output must show expanded and pending routes separately.

**What changed in the conceptual model?** The no-selection boundary is preserved while allowing operational prioritization.

### Ambiguity: Should exhaustive traversal exist?

**Strongest counter-interpretation:** Exhaustive traversal should be avoided because it can create too many files.

**Why the counter-interpretation fails:** The user sometimes wants maximum coverage, and Navigation's purpose supports that. The issue is not exhaustive mode itself; the issue is making exhaustive mode implicit, unreadable, or impossible to stop/resume.

**Confidence:** HIGH.

**Resolution:** Support explicit `coverage_mode: exhaustive` for running all eligible expansions up to depth, with trace and composition.

**What is now fixed?** Budgeted traversal is not the only valid mode.

**What is no longer allowed?** A design where the only way to run multi-resolution Navigation is budgeted narrowing.

**What now depends on this choice?** The protocol should define at least exhaustive and budgeted modes.

**What changed in the conceptual model?** Controls become mode-specific rather than universal caps.

### Ambiguity: What should `expansion_policy` do?

**Strongest counter-interpretation:** `expansion_policy` should filter route candidates so the runner only sees eligible routes.

**Why the counter-interpretation fails:** Hidden filtering produces the same loss as a hard cap. Policy can define eligibility for expansion, but non-eligible routes should be recorded as `out_of_policy` or `not_expanded_reason`, not disappear.

**Confidence:** HIGH.

**Resolution:** `expansion_policy` limits expansion eligibility, not map visibility.

**What is now fixed?** Out-of-policy candidates must still be visible if they exist in route space.

**What is no longer allowed?** Silent policy filtering.

**What now depends on this choice?** Frontier records need status and reason fields.

**What changed in the conceptual model?** Policy becomes explanatory metadata, not an eraser.

## SV4: Clarified Understanding

The correct statement is:

```text
Multi-resolution Navigation should uncover many directions.
The runner should control how many child maps are materialized per run.
Unmaterialized candidates must remain in a visible, resumable frontier.
```

The prior phrase "the problem is breadth" should be corrected. The problem is unbounded, untracked materialization.

## Phase 4: Degrees-Of-Freedom Reduction

### Fixed

- Many discovered directions are good.
- `depth` controls vertical traversal only.
- Horizontal budget must not erase coverage.
- A frontier ledger is required for budgeted traversal.
- Unrun candidates must remain pending and runnable later.
- AI top N can schedule a batch, but cannot choose the final route.
- Exhaustive traversal should be possible as an explicit mode.

### Eliminated

- Hard permanent `max_expansions` cap.
- Hidden route filtering.
- Treating unrun as rejected.
- Treating expanded first as most important without scheduling evidence.
- Depth-only runner without composition and resume.

### Still Viable

- `coverage_mode: exhaustive`.
- `coverage_mode: budgeted`.
- `batch_size` / `max_batch_expansions`.
- `scheduling_policy`.
- `expansion_policy` with visible out-of-policy records.
- `composition_output`.
- `resume_from` or `continue`.
- `no_final_selection`.

## SV5: Constrained Understanding

The future protocol should not ask:

```text
How do we limit Navigation so it does not find too many routes?
```

It should ask:

```text
How do we let Navigation discover the frontier broadly while controlling which child maps are executed in this run?
```

That creates this constrained design:

```text
1. Generate parent map.
2. Enumerate the full expansion frontier.
3. Apply expansion policy and record eligibility/status.
4. Choose coverage mode.
5. If exhaustive: run all eligible expansions up to depth.
6. If budgeted: run batch_size candidates by scheduling policy.
7. Preserve pending candidates.
8. Write composition and run trace.
9. Resume later from frontier state.
```

## Phase 5: Conceptual Stabilization

The stable model is a **frontier-first traversal runner**.

It should discover broadly, execute controllably, and preserve continuation.

Its core artifacts should be:

```text
frontier.md
composition.md
run_trace.md
child maps
pending/resume state
```

Its core fields should be:

```text
depth
coverage_mode
batch_size or max_batch_expansions
expansion_policy
scheduling_policy
output_root
composition_output
resume_from
selection_boundary: no_final_selection
```

## SV6: Stabilized Model

The prior finding should be refined as follows:

```text
Breadth is not the problem. Breadth is the purpose.

The problem is unbounded expansion execution without a frontier ledger,
composition artifact, and resume state.

Therefore max_expansions must not be a coverage limit. It should be a
batch-size control over current-run child-map materialization.

The runner should enumerate all eligible expansion candidates, run a batch
or run all under explicit exhaustive mode, and preserve every unrun route
as pending or out-of-policy with reasons.
```

Difference from SV1: the initial understanding only said the user was right to challenge the framing. The stabilized model defines the mechanism that reconciles broad coverage with bounded execution: full frontier enumeration plus batch/exhaustive materialization modes.
