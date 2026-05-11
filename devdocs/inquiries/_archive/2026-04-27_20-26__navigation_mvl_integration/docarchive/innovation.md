# Innovation: Navigation MVL Integration

## User Input

`devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/_branch.md`

## Seed

Navigation exists, but it is not routinely used. The seed is the collision between three facts:

- MVL/MVL+ are becoming atomic units of cognition.
- Navigation was designed to break the "what next?" limitation.
- The future architecture points toward many MVL+ loops threaded together, possibly in parallel.

The innovation target is not a new cognitive discipline. It is an integration pattern that lets Navigation become useful now without prematurely pretending that Homegrown has autonomous orchestration.

## Direction And Valuation

The valuable outcome is a staged path from human-guided next-step choice to system-supported traversal:

```text
manual map -> conditional boundary map -> selected next loop -> sequential runner -> multi-head runner
```

The design should preserve MVL/MVL+ atomicity, expose the next-step space, keep selection explicit, and create evidence for later autonomy.

## Mechanism Outputs

### 1. Lens Shifting

Current frame: "Should Navigation be inside MVL?"

- **Generic variation:** Treat Navigation as a post-loop utility. The loop finishes, then Navigation can be called like a report generator.
- **Focused variation:** Treat "inside MVL+" as a boundary hook, not as part of the core pipeline. MVL+ remains `E -> S -> D -> I -> C -> CONCLUDE`; only after conclusion does the hook decide whether a Navigation map is useful.
- **Contrarian variation:** Treat Navigation as an orchestration concern only. MVL+ should never mention it; a separate runner is the only correct owner.

Survival note: the focused variation is strongest because it resolves the wording ambiguity. It allows MVL+ to "include" Navigation operationally without making Navigation a sixth discipline.

### 2. Combination

Combined concepts: Navigation map, CONCLUDE, `_state.md`, human selector, continuous-loop runner.

- **Generic variation:** Add a `navigation.md` artifact after every inquiry. This gives every finding a next-step map.
- **Focused variation:** Add a conditional boundary hook in MVL+ that creates `navigation.md` only when CONCLUDE or Critique signals partial answer, open frontier, multiple survivor paths, non-convergence, or explicit user request. The user remains the selector.
- **Contrarian variation:** Combine Navigation and selection into one "next-step decision" artifact. The system outputs one recommended next inquiry, not a map.

Survival note: the focused variation best combines available pieces while respecting Navigation's map-not-selector definition. The contrarian variation violates the spec unless the selection logic is a separate named layer.

### 3. Inversion

Assumption: Navigation automates next steps.

- **Generic variation:** Invert to: Navigation does not automate next steps; it only makes human choice easier.
- **Focused variation:** Invert the deeper assumption: the hard part is not mapping directions, but deciding which direction deserves the next loop under limited attention and branch budget. This implies a selector and traversal metrics must be separate artifacts.
- **Contrarian variation:** Invert again: the system should not choose next steps at all until it has enough empirical history of good and bad Navigation maps. Manual Navigation usage should precede any automatic invocation.

Survival note: the focused inversion is important. It prevents "Navigation integration" from silently becoming "autonomous selection" before the selector exists.

### 4. Constraint Manipulation

Constraints tested: preserve atomicity, avoid overbuilding, generate useful data, support future autonomy.

- **Generic variation:** Remove the atomicity constraint and make Navigation the sixth MVL+ step. This maximizes visibility but makes every loop open-ended.
- **Focused variation:** Add a constraint: Navigation may be invoked by MVL+ only after finding production and may not launch another loop. This creates a safe bridge.
- **Contrarian variation:** Add an even stricter constraint: no skill changes yet. Instead, dogfood Navigation manually on ten completed inquiries and only then edit MVL+.

Survival note: the focused variation is the most balanced implementation step. The contrarian variation is useful if the priority is empirical calibration before changing protocols.

### 5. Absence Recognition

Missing pieces around Navigation:

- **Generic variation:** Missing artifact: `navigation.md` is not routinely produced, so Navigation remains invisible.
- **Focused variation:** Missing interface: there is no standard contract from `finding.md`/`_state.md` to Navigation triggers. The system needs a small boundary signal contract before the continuous runner can consume maps reliably.
- **Contrarian variation:** Missing evidence: nobody knows whether Navigation maps actually help users choose better next MVL+ runs. The first artifact should be a usage log, not a runner.

Survival note: the focused variation reveals the real implementation gap. Navigation is specified, but its trigger contract is not operational.

### 6. Domain Transfer

Imported pattern: compilers, schedulers, and workflow engines separate program execution from job scheduling.

- **Generic variation:** MVL+ is like a function call; Navigation is like a scheduler that determines possible next jobs.
- **Focused variation:** Use a workflow-engine model: MVL+ emits a completed job result; Navigation emits candidate transitions; a selector chooses transitions; a runner dispatches new jobs.
- **Contrarian variation:** Use a debugger model: Navigation is only invoked when execution hits a breakpoint, error, or ambiguous state. No breakpoint, no Navigation.

Survival note: the workflow-engine model is the best long-term architecture. The debugger model gives a useful trigger heuristic for the near term.

### 7. Extrapolation

Trend: Homegrown is moving from single inquiry folders toward chains of inquiry folders and self-maintenance evidence.

- **Generic variation:** If every MVL+ produces a Navigation map, the system accumulates many maps but may generate noise.
- **Focused variation:** If MVL+ conditionally produces maps, the system accumulates high-signal cases where Navigation was actually needed. These cases can train the future selector and meta-loop.
- **Contrarian variation:** If the system jumps directly to multi-head orchestration, it will multiply weak direction choices before there is a meaningful-traversal metric to judge them.

Survival note: the focused extrapolation supports staged implementation. The future multi-head system needs Navigation, but adding heads before traversal quality exists amplifies uncertainty.

## Candidate Designs For Critique

### Candidate A: Core-Pipeline Navigation

Change MVL+ into:

```text
E -> S -> D -> I -> C -> N -> CONCLUDE
```

or:

```text
E -> S -> D -> I -> C -> CONCLUDE -> N
```

where Navigation is treated as a normal required stage.

### Candidate B: Manual Navigation Only

Do not edit MVL/MVL+. Keep Navigation as a skill the user invokes after completed inquiries:

```text
/navigate devdocs/inquiries/[folder_name]/
```

This preserves all boundaries and generates no automatic artifacts.

### Candidate C: Conditional MVL+ Boundary Hook

Keep the MVL+ core pipeline unchanged. After CONCLUDE, MVL+ checks boundary triggers and invokes/suggests Navigation only when useful.

Initial triggers:

- User explicitly asks for Navigation or asks "what next?"
- Finding is partial, unresolved, or has important open questions.
- Critique ends with multiple viable survivors or multiple branch directions.
- MVL+ fails to converge after N iterations, initially N=3.
- The inquiry has relationship pointers but the next movement is unclear.

Selection remains manual. The hook produces a map; it does not auto-launch the next loop.

### Candidate D: Navigation Suggestion Only

Do not invoke Navigation automatically. MVL+ only prints a stronger post-completion hint:

```text
Multiple directions emerged. For a full possibility map, run:
/navigate devdocs/inquiries/[folder_name]/
```

This is a minimal documentation-level integration.

### Candidate E: Separate Sequential Meta-Loop Runner

Create a new runner that owns recurrence:

```text
meta-state -> MVL+ -> CONCLUDE -> Navigation -> human/select -> next MVL+
```

The runner stores cross-run state, selected navigation item, termination reason, and traversal observations.

### Candidate F: Immediate Multi-Head Runner

Create a runner that consumes one Navigation map and launches several MVL+ branches in parallel, then merges or compares findings.

### Candidate G: Reflection Plus Navigation Boundary Pair

After a completed MVL+ run, optionally run:

```text
Reflection -> Navigation -> Select
```

Reflection looks backward at process quality; Navigation looks forward using that process diagnosis plus the finding.

### Candidate H: Navigation Trigger Contract

Before building a runner, define a tiny interface:

```markdown
## Boundary Signals
- answer_status: complete | partial | unresolved
- open_frontiers: none | some | many
- survivors: zero | one | many
- convergence: converged | stalled | failed
- relationship_return: yes | no
- navigation_recommended: yes | no
- reason: ...
```

CONCLUDE or MVL+ can populate this, and Navigation/runner can consume it later.

## Testing The Outputs

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence |
|---|---|---|---|---|---|
| A Core-pipeline Navigation | Low | Weak | Medium | Medium | Weak |
| B Manual only | Low | Strong | Low | High | Medium |
| C Conditional boundary hook | Medium | Strong | High | High | Strong |
| D Suggestion only | Low | Strong | Low | Very high | Medium |
| E Sequential meta-loop runner | Medium | Medium | Very high | Medium | Strong |
| F Immediate multi-head runner | Medium | Weak now | High later | Low now | Medium |
| G Reflection + Navigation pair | Medium | Medium | High | Medium | Medium |
| H Trigger contract | Medium | Strong | High | High | Strong |

## Assembly Check

The strongest architecture is not one candidate by itself. It is an assembly:

```text
D now -> C next -> H as interface -> E later -> F after traversal metrics
```

Expanded:

1. Keep or slightly strengthen the post-completion Navigation suggestion immediately.
2. Add a conditional MVL+ boundary hook, not a core pipeline step.
3. Define boundary signals so Navigation is triggered for explainable reasons.
4. Build a sequential meta-loop runner that consumes Navigation maps and keeps selection explicit.
5. Add multi-head dispatch only after meaningful-traversal signals can judge whether branching is productive.

## Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES. Lens shifting, combination, constraint manipulation, domain transfer, and extrapolation converge on "conditional boundary hook plus separate meta-loop."
- Survivors tested: 8 / 8.
- Failure modes observed: none severe. Risk noted: survival bias toward conservative staging, mitigated by retaining sequential and multi-head runner candidates as later-stage options.
- Overall: PROCEED.

