# Innovation: Navigation Prior Map Read After Warm-Up v3

## User Input

Decide whether prior Navigation-map reading belongs inside warm-up v1, or after v3 as a separate continuation-memory step.

## Seed

Prior Navigation maps are valuable route memory, but stale-prone. They should inform Navigation without polluting initial warm-up.

## Mechanism 1 - Lens Shifting

### Generic

View prior Navigation maps not as context files, but as previous route-state snapshots.

### Focused

The correct question becomes: "When is the system ready to judge an old route snapshot?" Answer: after v1/v2/v3 have established current context.

### Contrarian

Maybe prior maps should be read only by Navigation itself. Rejected as too late: Navigation would then need to do reconciliation while also generating the new map.

## Mechanism 2 - Combination

### Generic

Combine v1/v2/v3 outputs with prior Navigation maps.

### Focused

Create a post-v3 continuation overlay:

```text
v1 summary + v2 direction architecture + v3 traces + prior maps
  -> route continuation brief
  -> Navigation
```

### Contrarian

Combine prior maps with v1 only. Rejected because v1 lacks movement evidence and would over-weight old routes.

## Mechanism 3 - Inversion

### Generic

Instead of "warm-up reads everything first," assume "warm-up must delay derived artifacts until it can interpret them."

### Focused

Delay prior-map reading until after current-state grounding. This protects v1 from route-map anchoring.

### Contrarian

Never read prior maps. Rejected because route maps contain options, blocked paths, and continuation notes that findings do not preserve.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: no fourth heavy warm-up stage yet.

### Focused

The operation must be small: a handoff/overlay that classifies old routes, not a full archaeology command.

### Contrarian

Add constraint: prior maps must be read in every session. Rejected because many sessions may not have prior maps or may not need Navigation continuation.

## Mechanism 5 - Absence Recognition

### Generic

Missing artifact: a Navigation handoff brief.

### Focused

The handoff brief should contain:

- prior maps scanned;
- old routes still open;
- old routes blocked;
- old routes done/stale/superseded;
- useful continuation notes;
- unresolved route-state uncertainty.

### Contrarian

Missing artifact might be a full `navigator-warmup4.md`. Deferred because no real run has proven the overlay needs that much machinery.

## Mechanism 6 - Domain Transfer

### Generic

From incident review: old tickets are not read as current truth. They are triaged against current system state.

### Focused

Prior Navigation maps should be triaged:

```text
old route -> current evidence -> live / blocked / stale / superseded / unknown
```

### Contrarian

From version-control history: old branches can be useful, but are not merged blindly. Same for old routes.

## Mechanism 7 - Extrapolation

### Generic

If Navigation maps accumulate, reading them in v1 will make v1 increasingly noisy and stale-prone.

### Focused

If a post-v3 overlay exists, accumulated maps become useful memory rather than context clutter.

### Contrarian

If maps do not accumulate, the overlay will usually be no-op. That is acceptable if it stays lightweight.

## Survivor Candidates

### Candidate A - Put Prior Map Reading In v1

Test:

- **Novelty:** low.
- **Scrutiny survival:** weak. It anchors orientation around stale route snapshots.
- **Fertility:** medium but risky.
- **Actionability:** high.
- **Mechanism independence:** weak.

Verdict: **KILL.**

### Candidate B - Put Prior Map Reading In v2

Test:

- **Novelty:** low.
- **Scrutiny survival:** weak-medium. It is closer to direction architecture but still premature.
- **Fertility:** medium.
- **Actionability:** high.
- **Mechanism independence:** weak.

Verdict: **KILL.**

### Candidate C - Put Prior Map Reading Inside v3

Test:

- **Novelty:** medium.
- **Scrutiny survival:** mixed. It is close to movement traces, but it overloads v3.
- **Fertility:** medium.
- **Actionability:** high.
- **Mechanism independence:** medium.

Verdict: **REFINE.**

Constructive output:

Keep prior-map reading adjacent to v3, but not embedded as v3's main job.

### Candidate D - Add Post-v3 Continuation Overlay

Test:

- **Novelty:** medium.
- **Scrutiny survival:** strong. It respects v1/v2/v3 boundaries and gives Navigation route memory.
- **Fertility:** high. It creates a reusable handoff pattern.
- **Actionability:** high. Can start as README/wrapper guidance.
- **Mechanism independence:** strong; produced by lens shifting, combination, inversion, absence recognition, and extrapolation.

Verdict: **SURVIVE.**

### Candidate E - Create Full `navigator-warmup4.md`

Test:

- **Novelty:** medium.
- **Scrutiny survival:** weak now. It may overbuild before one Navigation warm-up test.
- **Fertility:** medium-high later.
- **Actionability:** medium.
- **Mechanism independence:** medium.

Verdict: **DEFER.**

### Candidate F - Let Navigation Itself Read Prior Maps Directly

Test:

- **Novelty:** low.
- **Scrutiny survival:** weak. It mixes context reconciliation into map generation.
- **Fertility:** low.
- **Actionability:** high but messy.
- **Mechanism independence:** weak.

Verdict: **KILL.**

## Assembly Check

Best assembly:

```text
Do not patch v1 to read prior maps.
Do not make v2 depend on prior maps.
Keep v3 focused on movement traces.
Add a post-v3 continuation overlay:
  - read prior navigation maps;
  - compare against v1/v2/v3 outputs;
  - classify route states;
  - preserve useful continuation notes;
  - produce a short Navigation handoff brief.
Start as README/wrapper guidance.
Create a dedicated command only if real use shows the overlay needs more structure.
```

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4.
- **Framers applied:** 3/3.
- **Convergence:** yes. Five mechanisms converge on a post-v3 overlay.
- **Survivors tested:** 6/6.
- **Failure modes observed:** no premature evaluation; no single-mechanism trap; no survival bias.
- **Overall:** PROCEED.
