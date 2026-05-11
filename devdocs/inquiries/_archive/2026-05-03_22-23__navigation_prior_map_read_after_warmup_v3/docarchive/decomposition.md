# Decomposition: Navigation Prior Map Read After Warm-Up v3

## Coupling Map

### Cluster A - Source-Grounded Warm-Up

Elements:

- `navigator-warmup1.md`
- `navigator-warmup2.md`
- `navigator-warmup3.md`
- source-of-truth artifacts
- accepted findings
- current frontier
- project-direction architecture
- movement traces

Coupling:

- Strong internal sequence coupling. v2 can use v1 output. v3 assumes enough understanding from v1/v2.
- Weak coupling to prior Navigation maps. The warm-up ladder can run without prior maps.

Boundary:

- v1/v2/v3 should stay focused on context archaeology.

### Cluster B - Prior Navigation Map Artifacts

Elements:

- prior `navigation.md` files inside inquiry folders;
- `devdocs/navigation/*.md`;
- route fields: Purpose, Movement, Status, Blocked by, Unlocks, Continuation note;
- old open/blocked/stale route records.

Coupling:

- Strong coupling to Navigation output contract.
- Moderate coupling to warm-up outputs because old route state needs current-state interpretation.
- Strong coupling to the next Navigation run.

Boundary:

- Prior maps are route-memory artifacts, not initial source-grounding artifacts.

### Cluster C - Continuation Overlay / Handoff

Elements:

- v1 output: project summary and current frontier;
- v2 output: project-direction architecture;
- v3 output: movement traces;
- prior Navigation maps;
- continuation brief for Navigation.

Coupling:

- Strongly depends on v1/v2/v3 outputs.
- Strongly feeds Navigation.
- Should remain lightweight to avoid becoming v4 prematurely.

Boundary:

- This is a reducer/reconciler step, not another broad archaeology command.

### Cluster D - Navigation Discipline Consumption

Elements:

- `homegrown/navigation/SKILL.md`;
- `homegrown/navigation/references/navigation.md`;
- route-map generation;
- route-state telemetry.

Coupling:

- Navigation can consume a continuation brief directly.
- Navigation should not itself perform the full warm-up.

Boundary:

- Navigation maps possibilities after context is prepared.

## Question Tree

### Q1. What should v1 own?

Verification criteria:

- [x] v1 owns source-of-truth orientation.
- [x] v1 owns current-frontier interpretation.
- [x] v1 does not deeply read prior Navigation maps as route memory.

### Q2. What should v2 own?

Verification criteria:

- [x] v2 owns direction architecture.
- [x] v2 can use v1 output.
- [x] v2 does not depend on prior route maps as primary evidence.

### Q3. What should v3 own?

Verification criteria:

- [x] v3 owns movement trace enumeration and trace writing.
- [x] v3 can expose evidence needed for route-state freshness.
- [x] v3 should not become the route-memory reducer.

### Q4. What should prior Navigation-map reading own?

Verification criteria:

- [x] reads prior `navigation.md` and `devdocs/navigation/*.md`;
- [x] compares old routes against v1/v2/v3 outputs;
- [x] classifies route state as open, active, blocked, done, stale, superseded, or unknown;
- [x] preserves useful continuation notes;
- [x] produces a short continuation brief for Navigation.

### Q5. What artifact shape should hold the rule?

Verification criteria:

- [x] does not turn into a heavy v4 by default;
- [x] is visible enough that future agents run it before Navigation;
- [x] can later become a small command if README-level guidance is too weak.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| v1 | v2 | orientation and current frontier | one-way |
| v1/v2 | v3 | enough context to choose and write movement traces | one-way |
| prior Navigation maps | post-v3 overlay | old route records and continuation notes | one-way |
| v1/v2/v3 outputs | post-v3 overlay | current state, direction architecture, movement evidence | one-way |
| post-v3 overlay | Navigation | continuation brief and route-state reconciliation | one-way |
| Navigation | future prior maps | newly written route map | one-way over time |

## Dependency Order

1. Keep v1 unchanged with respect to prior Navigation-map deep reading.
2. Keep v2 unchanged with respect to prior Navigation-map primary evidence.
3. Clean or constrain v3 so it stays focused on movement traces.
4. Add post-v3 continuation overlay guidance.
5. Run Navigation using the overlay as handoff evidence.
6. After one real use, decide whether README-level guidance is enough or a small `navigator-handoff.md` command is needed.

## Self-Evaluation

### Independence

Pass. v1, v2, v3, post-v3 overlay, and Navigation each have a distinct operation.

### Completeness

Pass. The decomposition covers initial context, direction architecture, movement traces, prior route memory, and Navigation consumption.

### Reassembly

Pass. If v1/v2/v3 run, the overlay can reconcile old route maps, and Navigation can consume the brief to produce a new map.

### Tractability

Pass. The next change can be small: add a post-v3 handoff rule without changing all warm-up files.

### Interface Clarity

Pass. Prior maps flow into the overlay, not into v1 as base source material.

### Balance

Pass. The post-v3 overlay is the most important new piece but remains intentionally small.

### Confidence

Medium-high. Boundaries are clear conceptually; exact artifact naming should be validated by one real Navigation warm-up run.
