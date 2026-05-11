---
status: active
refines:
  - devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md
  - devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md
  - devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md
---
# Finding: next_load_bearing_navigation_vs_materialization

## Changes from Prior

**Prior paths:**

- `devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md`
- `devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md`
- `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`

**Revision trigger:** The user asked whether the next load-bearing development should be materialization lifecycle, a separate Navigation session, or something else. The user leaned toward Navigation because choosing where to move in thinking space is the burden they most often carry.

**What's preserved:** The prior finding `devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md` was right that Homegrown needs a closed builder loop using outcome review and calibration before scale or autonomy. The prior Navigation Observer finding was right that separate movement-space attention can be valuable. The prior artifact materialization finding was right that materialization needs Compact, Standard, and Full modes.

**What's changed:** The next step should no longer be framed as "Navigation or materialization." It should be framed as two different nexts: Navigation is the next session/use, while artifact materialization is the next protocol artifact.

**What's new:** The strongest sequence is materialization-backed Navigation relief:

```text
Run/use Navigation now
  -> bootstrap artifact_materialization.md
  -> dogfood it on a Navigation-relief artifact
  -> run outcome_review after the artifact is used
```

**Migration:** Treat "outcome review next" as already mostly materialized at the protocol level. The next concrete artifact is `homegrown/protocols/artifact_materialization.md`, but it should be created in service of Navigation relief, not as isolated process documentation.

## Question

What is the next load-bearing development for Homegrown that would most reduce the user's developer burden: finishing materialization lifecycle, running a separate Navigation session, or building another capability first?

The goal is to decide the next concrete development sequence, explain why it is load-bearing for the end goal, and avoid building a capability that adds orchestration complexity before it can carry work.

## Finding Summary

- The next load-bearing development is **materialization-backed Navigation relief**.

- The next **session/use** should be Navigation, because the user's live burden is deciding where Homegrown should move next in thinking space.

- The next **artifact/protocol** should be `homegrown/protocols/artifact_materialization.md`, because Homegrown still lacks the operational bridge from an accepted decision to concrete files under source authority, write scope, validation, and trace.

- The first dogfood target for artifact materialization should be Navigation-related. The likely target is a protocol-first Navigation Observer report, a Navigation-to-materialization handoff section, or a navigation-memory/report convention.

- Do not build a persistent Navigation Observer runtime yet. Build a report/protocol first, then promote only if repeated use proves that it improves next-move quality.

- Do not build multihead next. Branching exists, but multihead would multiply inquiry outputs before Homegrown has enough comparison, merge, and outcome-calibration discipline.

- The sequence should end with outcome review after real use. The question to review is simple: did the Navigation-relief artifact actually reduce the user's choice burden or improve movement quality?

## Finding

### 1. The Apparent Either-Or Is The Wrong Shape

The user is right that Navigation is the most visible burden. The user is currently acting as the movement-space manager: noticing what matters, deciding what to branch, deciding what to defer, and deciding which line of work keeps Homegrown coherent.

That does not mean the next durable system artifact should be a bigger Navigation runtime.

Navigation and materialization solve different layers of the same problem:

```text
Navigation answers: where could we move next?
Selection answers: which move do we commit?
Materialization answers: how does a selected decision become files?
Outcome review answers: did the used result work?
```

The next step should respect those boundaries. Navigation should help choose. Materialization should make the chosen work concrete. Outcome review should later check whether the materialized work helped.

### 2. Navigation Should Be Used Next, But Not Overbuilt Next

Navigation already exists under `homegrown/navigation/`. It can produce a movement map from a completed inquiry or project-level context. It is therefore ready to use immediately as a separate session or report.

That immediate use matters. It can reduce the user's current burden by mapping what should happen next, including which artifact should be materialized first.

But building a persistent Navigation Observer session now is premature. A persistent observer would introduce new role/runtime complexity before the report format, read-set, selector boundary, and outcome memory have been proven.

The better v1 form is protocol-first:

```text
Navigation report
  -> recommended moves
  -> explicit human selection
  -> selected materialization request
```

Navigation may recommend. It should not silently select or launch work in v1.

### 3. Materialization Is The Next Protocol Artifact

The operational artifact `homegrown/protocols/artifact_materialization.md` is missing.

The theory already exists in `enes/materialization_lifecycle.md`, and the protocol shape already exists in `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`.

The missing operation is concrete:

```text
accepted finding or user request
  -> source authority
  -> artifact contract
  -> write-set
  -> risk mode
  -> implementation plan depth
  -> validation
  -> trace
  -> follow-up outcome review gate
```

This is load-bearing because every later Navigation improvement, ARC harness adapter, protocol edit, skill edit, branch experiment, or trace schema needs a controlled way to become files.

Creating `artifact_materialization.md` has a bootstrap exception: the materialization protocol does not exist yet, so it cannot govern its own creation. That exception should be explicit, narrow, and non-repeatable. It should use existing source authority, a bounded write-set, manual review, and a trace-like summary.

### 4. The First Dogfood Should Target Navigation Relief

Materialization alone can become process bureaucracy if it is not immediately used on something the user feels.

The first dogfood artifact should therefore be Navigation-related. Good candidates are:

- `homegrown/protocols/navigation_observer.md`, a protocol-first report contract for cross-inquiry movement-space perception;
- a Navigation-to-materialization handoff section inside `artifact_materialization.md`;
- a lightweight navigation-memory/report convention that lets future Navigation read selected moves, materialization traces, and outcome reviews.

The best exact target can be selected by a Navigation session, but the target should satisfy one criterion: it must reduce the user's burden of deciding what to do next.

### 5. Outcome Review Closes The Builder Loop

After the first Navigation-relief artifact is used, Homegrown should run `homegrown/protocols/outcome_review.md`.

The review should ask:

```text
What was this artifact expected to make easier?
What happened when it was used?
Did it reduce choice burden, improve movement quality, or add overhead?
What should future Navigation/materialization learn from that?
```

This is where `enes/alignment_dynamics.md` matters. A materialized artifact is not evidence of success merely because it exists. It becomes evidence only after use shows whether the selected route helped, partially helped, failed, or added overhead.

### 6. Multihead Is Still Deferred

Branching now exists, and it is tempting to brute force thinking-space exploration with many branches.

That is not the next load-bearing development. Multihead increases output volume. Without comparison, merge policy, and calibrated outcome records, it increases the user's digestion burden instead of reducing it.

Multihead should return after several Navigation-selected branch or materialization outcomes have been reviewed and there is a clear branch comparison or merge policy.

## Next Actions

### MUST

- **What:** Run/use Navigation as the next session over the current project state or this finding.
  **Who:** Human + existing `homegrown/navigation/` discipline.
  **Gate:** Before choosing the first Navigation-relief dogfood artifact, unless the user directly selects the target.
  **Why:** It relieves the user's immediate next-move burden and prevents materializing the wrong artifact.

- **What:** Create `homegrown/protocols/artifact_materialization.md`.
  **Who:** Homegrown protocol layer.
  **Gate:** Before any new durable Navigation Observer, navigation-memory, ARC harness, skill edit, or runner change is treated as a normal Homegrown materialization.
  **Why:** It gives Homegrown the controlled bridge from decisions to files.

- **What:** Include Compact, Standard, and Full modes in `artifact_materialization.md`.
  **Who:** `artifact_materialization.md`.
  **Gate:** Same artifact creation.
  **Why:** Minimal artifacts should not pay full process cost, but compact mode must still preserve source authority, write-set, risk scan, validation, and trace.

- **What:** Dogfood `artifact_materialization.md` on one Navigation-relief artifact.
  **Who:** Materialization lifecycle.
  **Gate:** Immediately after `artifact_materialization.md` exists.
  **Why:** This ensures materialization is not abstract process work; it directly targets the user's Navigation burden.

- **What:** Add an outcome-review gate to the dogfood artifact.
  **Who:** Materialization trace and `homegrown/protocols/outcome_review.md`.
  **Gate:** After the Navigation-relief artifact has been used at least once.
  **Why:** Homegrown needs to know whether the artifact actually reduced developer burden.

### COULD

- **What:** Add a "Navigation item -> materialization request" section inside `artifact_materialization.md`.
  **Who:** `artifact_materialization.md`.
  **Gate:** During artifact materialization protocol creation if it remains small; otherwise after first dogfood use.
  **Why:** It connects Navigation maps to controlled implementation without creating a standalone handoff protocol too early.

- **What:** Create a protocol-first `navigation_observer.md` report contract.
  **Who:** Future materialization run.
  **Gate:** Best as the first dogfood artifact if Navigation selects it.
  **Why:** It tests separate movement-space attention without building a persistent session.

- **What:** Define a lightweight navigation memory convention from selected moves, materialization traces, and outcome reviews.
  **Who:** Future Navigation/materialization work.
  **Gate:** After at least 3 materialization traces or outcome reviews exist.
  **Why:** Navigation should eventually read evidence about which moves worked.

### DEFERRED

- **What:** Persistent Navigation Observer session.
  **Gate:** Revive after 3 to 5 protocol-first observer/navigation reports prove useful and continuity becomes the limiting factor.
  **Why (if revived):** It may reduce worker-session context pollution and improve movement-space perception.

- **What:** Autonomous selector.
  **Gate:** Revive after at least 10 selected moves have outcome reviews showing stable route-quality patterns.
  **Why (if revived):** Selection can become partially automated only after route quality is calibrated.

- **What:** Multihead branch execution.
  **Gate:** Revive after several branch/materialization outcomes have outcome reviews and a branch comparison or merge policy exists.
  **Why (if revived):** Multihead can increase thinking-space coverage once the system can compare and digest results.

- **What:** ARC harness integration as a major next step.
  **Gate:** Revive after `artifact_materialization.md` exists; treat ARC execution/scoring as Full-mode materialization.
  **Why (if revived):** ARC is important for benchmark work, but it should not define the general self-building substrate.

## Reasoning

Exploration found that Navigation, materialization, branching, outcome review, and meta-loop already form a partial architecture. The concrete absence was `homegrown/protocols/artifact_materialization.md`. The visible human pain was Navigation/selection burden.

Sensemaking resolved the tension by separating the next **session** from the next **artifact**. Navigation should be used next because it directly helps the user choose. Materialization should be built next because it makes chosen work safe to implement.

Decomposition showed the natural dependency order:

```text
Immediate Navigation use
  -> materialization protocol bootstrap
  -> Navigation-relief dogfood artifact
  -> outcome review after use
  -> deferred scale gates
```

Innovation generated six candidates. Navigation session first survived as immediate use. Materialization protocol first survived as the next artifact. Navigation-to-materialization handoff survived with refinement: embed it rather than creating a standalone protocol now. Navigation memory survived as a deferred direction. Persistent Navigation Observer runtime and multihead branch brute force were rejected for immediate sequencing.

Critique ranked the assembly first because it avoids both bad extremes. Navigation alone can produce more option load without a file-changing bridge. Materialization alone can become process work that does not relieve the user's actual burden. The assembly uses each operation for its proper job.

Persistent Navigation Observer runtime was killed for now because it adds role/runtime complexity before report artifacts, read sets, outcome memory, and selector boundaries are proven. The preserved seed is protocol-first Navigation Observer reports.

Multihead was killed for now because it increases branch output before Homegrown has enough comparison, merge, and calibrated outcome evidence. The preserved seed is branch-set execution after several reviewed branch outcomes exist.

## Open Questions

### Monitoring

- After the first use of `artifact_materialization.md`, check whether Compact/Standard/Full mode selection was clear enough.

- After the first Navigation-relief artifact is used, run outcome review and ask whether it reduced the user's next-move burden.

- After 3 Navigation reports or observer-style reports, check whether they identify useful moves the ordinary worker session would likely miss.

### Blocked

- The exact first dogfood artifact is blocked until the user either selects it directly or Navigation maps the candidates.

- Navigation memory should wait until at least 3 materialization traces or outcome reviews exist.

### Refinement Triggers

- If creating `artifact_materialization.md` becomes heavy enough to delay useful work, reopen Compact bootstrap depth and reduce it.

- If Navigation sessions keep producing good maps but selected moves still fail during implementation, strengthen the Navigation-to-materialization handoff.

- If materialization traces accumulate but Navigation does not read them, add an explicit Navigation input rule for traces and outcome reviews.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
what is next load bearing development for our endgoal that once established my job as developer will be relaxed and easier? is it materilazation life cycle? it was in our plate but we did not finsih it yet. 
or it is seperate navigation session ? or something else?  i am leaning towards nagivation because this is what i do most and it is getting harder, and with branching available it is easier to brute force the navigation of thikning space if we already have a good direction under our hands..  but maybe materilisation should come first?
```

</details>
