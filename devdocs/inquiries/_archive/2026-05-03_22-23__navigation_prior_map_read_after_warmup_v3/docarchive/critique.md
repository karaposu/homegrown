# Critique: Navigation Prior Map Read After Warm-Up v3

## User Input

Evaluate whether prior Navigation-map reading should happen inside v1, inside v2, inside v3, after v3, as a full v4, or inside Navigation itself.

## Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Source grounding | 25 | Initial warm-up is not anchored by stale derived route maps. |
| Continuation value | 25 | Prior Navigation maps still inform the next Navigation run. |
| Stage coherence | 20 | v1/v2/v3 keep distinct jobs and do not absorb unrelated work. |
| Simplicity | 15 | Avoids a heavy new stage before real use proves need. |
| Staleness control | 10 | Old routes are classified against current evidence before reuse. |
| Actionability | 5 | The next edit can be made clearly. |

## Fitness Landscape

### Viable Region

A small post-v3 continuation overlay that reconciles prior Navigation maps against v1/v2/v3 outputs and feeds Navigation.

### Dead Region

Reading prior maps deeply in v1, making v2 depend on old route maps, or making Navigation perform full route-memory reconciliation while generating a new map.

### Boundary Region

Putting prior-map reading inside v3. It is near the right evidence, but risks overloading v3.

### Unexplored Region

Whether the overlay deserves its own file after one real warm-up run.

## Candidate Verdicts

### Candidate A - Put Prior Map Reading In v1

#### Prosecution

v1 is responsible for source-of-truth orientation and current frontier. Prior Navigation maps are derived route snapshots and may be stale. Reading them deeply in v1 risks making old route suggestions shape the whole warm-up before the project is re-grounded.

#### Defense

v1 is already broad. It reads first-party artifacts and could simply include prior maps as another artifact type.

#### Collision

Defense fails because prior maps are not ordinary source-of-truth artifacts. They require freshness interpretation, and v1 is too early to do that well.

#### Verdict

**KILL.**

Constructive output: v1 may notice that prior Navigation maps exist, but it should not deeply reconcile them or use them as core source grounding.

### Candidate B - Put Prior Map Reading In v2

#### Prosecution

v2 explains project-direction architecture. Old route maps may help later, but they should not drive the architecture read. If v2 consumes route maps too early, it can confuse the project's actual direction with previously enumerated possibilities.

#### Defense

v2 is closer to route interpretation than v1 because it handles direction and movement path.

#### Collision

Defense is not enough. v2 still lacks v3's movement traces, which are the stronger basis for stale/superseded judgment.

#### Verdict

**KILL.**

Constructive output: v2 can remain route-map aware in later tests, but should not make prior maps a required input now.

### Candidate C - Put Prior Map Reading Inside v3

#### Prosecution

v3 already has a large job: enumerate trace categories, select traces, and write trace files. Adding route-map reconciliation can make v3 too broad and expensive.

#### Defense

v3 is the closest existing stage to the needed operation because it handles movement over time.

#### Collision

Defense wins on adjacency but loses on ownership. Prior-map reading should happen after v3, using v3's output, not inside v3's core trace-writing operation.

#### Verdict

**REFINE.**

Constructive output: make the post-v3 overlay adjacent to v3 in the warm-up routine, but keep it separate from v3's trace-generation responsibility.

### Candidate D - Add A Post-v3 Continuation Overlay

#### Prosecution

This may be too subtle. If it is only a handoff rule, agents may forget to run it. If it becomes a file, it may look like v4.

#### Defense

It is the cleanest boundary. v1/v2/v3 establish current context. The overlay then reconciles old route maps against that context and gives Navigation a short continuation brief. It avoids stale anchoring and avoids overbuilding.

#### Collision

Defense wins with one condition: the overlay must be visible in the warm-up run order, not hidden in prose.

#### Verdict

**SURVIVE.**

Constructive output: add an explicit post-v3 handoff rule, probably in `homegrown/navigation/warmup/README.md` or an equivalent wrapper. It should say:

```text
After v3, if prior Navigation maps exist, read them as route-memory evidence.
Compare them against v1/v2/v3 outputs.
Classify routes as open, active, blocked, done, stale, superseded, or unknown.
Produce a short continuation brief for Navigation.
Treat old maps as evidence, not authority.
```

### Candidate E - Create Full `navigator-warmup4.md`

#### Prosecution

This adds a fourth warm-up command before the first real Navigation output-contract test. It risks expanding warm-up cost and making the routine feel heavier than needed.

#### Defense

A dedicated command would be harder to forget and easier to execute consistently.

#### Collision

Defense identifies a future need, not a current necessity. Visibility can be achieved with README/wrapper guidance first.

#### Verdict

**DEFER.**

Constructive output: create a dedicated `navigator-handoff.md` or `navigator-warmup4.md` only if README/wrapper guidance fails in real use.

### Candidate F - Let Navigation Read Prior Maps Directly

#### Prosecution

This mixes route-memory reconciliation into Navigation's core job. Navigation should map next routes, not reconstruct session context.

#### Defense

Navigation is the direct consumer of prior maps, so it could handle them.

#### Collision

Defense fails on stage coherence. Navigation should consume a prepared continuation brief, not perform the whole warm-up tail.

#### Verdict

**KILL.**

Constructive output: Navigation may read the brief and selected prior-map evidence, but should not own the full reconciliation step.

## Assembly Check

The strongest assembly is:

```text
Keep v1 as orientation/current frontier.
Keep v2 as project-direction architecture.
Keep v3 as movement traces.
Add a visible post-v3 continuation overlay.
Do not call it v4 yet.
Do not bury it inside Navigation.
Promote it to a small command only if real use shows README/wrapper guidance is too weak.
```

## Coverage Map

| Placement | Verdict | Reason |
| --- | --- | --- |
| v1 | KILL | Too early; stale route-map anchoring risk. |
| v2 | KILL | Still premature; confuses direction architecture with old possibilities. |
| v3 internal | REFINE | Adjacent but overloading. |
| post-v3 overlay | SURVIVE | Best balance of freshness, continuity, and simplicity. |
| full v4 | DEFER | Could be useful later, overbuilt now. |
| Navigation direct | KILL | Mixes reconciliation with route-map generation. |

## Signal

**TERMINATE** with a clear survivor.

The answer is: yes, the user's instinct is right. Prior Navigation-map reading should happen after v3, but as a lightweight continuation overlay or handoff, not as a heavy `navigator-warmup4.md` yet.

## Convergence Telemetry

- **Dimension coverage:** strong. Checked source grounding, continuation value, stage coherence, simplicity, staleness control, and actionability.
- **Adversarial strength:** strong. The survivor was challenged for being too subtle and survived only with a visibility condition.
- **Landscape stability:** stable. All plausible placements were evaluated.
- **Clean survivor exists:** yes, post-v3 continuation overlay.
- **Failure modes observed:** no rubber-stamping, no nitpicking, no false convergence.
- **Overall:** PROCEED.
