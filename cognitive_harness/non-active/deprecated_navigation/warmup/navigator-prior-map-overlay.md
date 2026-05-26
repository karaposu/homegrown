# /navigator-prior-map-overlay - Prior Navigation Map Overlay

Read prior Navigation maps after `navigator-warmup1.md`, `navigator-warmup2.md`, and `navigator-warmup3.md` have already established current project context. Produce a compact overlay that tells Navigation which old routes still matter, which changed, and which should not be trusted as current.

This routine is read-only over prior Navigation maps. It must not edit old `devdocs/navigation/*.md` files by default. Old maps are historical snapshots; this routine produces an overlay result that records the current interpretation of those snapshots. Save that result as `prior_map_overlay.md` only when durable handoff is needed.

This is a Navigation warm-up support routine. It is not full warm-up, not Navigation itself, not route selection, and not multi-resolution expansion.

## Core Contract

- Read prior `devdocs/navigation/*.md` maps when they are relevant to the target Navigation question.
- Do not edit old Navigation maps. Treat them as historical snapshots.
- Produce a prior-map overlay result with the current route-memory interpretation.
- Use inline output for small same-session reconciliation; save `prior_map_overlay.md` when durable handoff is needed.
- Run only when prior route memory matters. Do not run before every Navigation invocation.

## Additional Input/Instructions

$ARGUMENTS

---

## When To Use

Use this after a cold project-level warm-up sequence:

```text
navigator-warmup1.md -> navigator-warmup2.md -> navigator-warmup3.md
```

Use it before the first project-level Navigation run in that warmed session when prior route maps exist under `devdocs/navigation/` and route memory may affect the next map.

This routine does not run before every Navigation invocation. Skip it for bounded local Navigation, fresh warmed sessions with no route-memory need, or explicit thin-context runs.

Do not use it when:

- no prior Navigation maps exist;
- prior maps are irrelevant to the target Navigation question;
- the session has not completed warm-up v1/v2/v3;
- the session only needs a narrow local file or inquiry map;
- the question is to select a route rather than reconcile route memory;
- the task is multi-resolution child-map expansion; use `cognitive_harness/protocols/multi_resolution_navigation.md`.

## Inputs To Identify

Before reading prior maps, identify:

```yaml
warmup_context:
  summary: devdocs/archaeology/project_summary.md or equivalent
  architecture: devdocs/archaeology/project_direction_architecture.md or equivalent
  traces: devdocs/archaeology/traces/ or equivalent
prior_navigation_sources:
  - devdocs/navigation/<map>.md
target_navigation_question:
source_authority: user_request | warmup_routine | finding | navigation_map | other
output_mode: inline | save | print_only
```

If warm-up context is missing or clearly stale, stop and recommend full warm-up instead of overlaying old maps.

## Read Rules

Read:

- the current warm-up outputs from `devdocs/archaeology/`;
- prior `devdocs/navigation/*.md` maps relevant to the target question;
- `_frontier.md` files only when they belong to a prior multi-resolution Navigation run relevant to the target question;
- recent active `finding.md` files only when needed to classify old routes.

Do not read `docarchive/` by default.

Do not treat file dates as authority. Dates help identify order, not truth.

## Procedure

### Step 1 - Establish Overlay Boundary

Record:

```yaml
target_navigation_question:
warmup_outputs_read:
prior_maps_read:
excluded_prior_maps:
exclusion_reason:
```

### Step 2 - Extract Prior Routes

For each prior Navigation map, extract route cards and preserve:

```yaml
direction:
goal:
type:
priority:
status:
blocked_by:
unlocks:
continuation_note:
source_map:
```

### Step 3 - Reconcile Against Current Warm-Up

Do not modify prior map files during reconciliation.

Reconciliation means:

```text
read prior route
compare it with current warm-up context
write current classification into the overlay result
leave the prior navigation.md unchanged
```

Classify each prior route:

```text
still_open
active
blocked
done
stale
superseded
unknown
```

Use current warm-up outputs and active findings as the authority for classification.

Do not carry old routes forward unchanged just because they appeared in a prior map.

Do not rewrite old `Status`, `Blocked by`, `Unlocks`, or `Continuation note` fields inside prior maps unless the user explicitly asks to correct the historical file itself.

### Step 4 - Identify Route Memory Effects

For each meaningful old route, state what Navigation should remember:

- still relevant direction;
- changed blocker;
- route that became done;
- stale assumption;
- superseding file or finding;
- route that should reappear as blocked;
- route that should be excluded as structurally inapplicable now.

### Step 5 - Produce The Overlay Result

Default mode is `inline` when Navigation will run immediately in the same warmed session and the route-memory reconciliation is small.

Use `save` when:

- another session needs to consume the reconciliation;
- many prior maps or route cards were read;
- the reconciliation is expensive to reconstruct;
- the result should survive the current conversation;
- the user explicitly asks for a durable artifact.

Default saved path for `save` mode:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__prior_map_overlay_<slug>/prior_map_overlay.md
```

If `inline` is used, include the overlay result in the handoff to Navigation. If durable route-memory is still needed after Navigation runs, either save the overlay or ensure the resulting Navigation map carries the relevant effects in its normal route cards and continuation notes. State that no separate overlay file was created.

If `-n` or `print_only` is passed, print the overlay result in the conversation and state that no durable overlay was created.

Use this structure:

```markdown
# Prior Navigation Map Overlay: <name>

## Target Navigation Question
## Warm-Up Context Used
## Prior Maps Read
## Route State Reconciliation
| Prior Route | Source Map | Current State | Evidence | Navigation Impact |
| --- | --- | --- | --- | --- |
## Still-Relevant Routes
## Stale Or Superseded Routes
## Changed Blockers And Unlocks
## Missing Context And Confidence Limits
## Handoff Prompt
```

### Handoff Prompt

Use this shape:

```text
Use the current warm-up outputs plus this prior-map overlay result as source context.
Enumerate possible next directions.
Treat prior Navigation maps as route-memory evidence, not current authority.
If the overlay result was saved, read prior_map_overlay.md.
If the overlay result is inline, treat the inline overlay section as current route-memory context.
Preserve stale, superseded, blocked, and unknown route states where relevant.
Do not select a final route unless explicitly asked.
```

## Validation

Before completing the overlay, check:

- Were current warm-up outputs read first?
- Were prior maps treated as evidence rather than authority?
- Were prior maps left unchanged?
- Did every carried-forward route get a current-state classification?
- Are stale and superseded routes visible instead of silently dropped?
- Are changed blockers and unlocks named?
- Was the output mode justified?
- Can Navigation consume the overlay result without rereading every old map?

If an automated checker exists, run it. If no checker exists, record manual validation.

## Failure Modes

### Old Map Authority Drift

An old route map is treated as current truth.

Correction: classify routes against current warm-up outputs and active findings.

### Historical Mutation

The overlay edits prior Navigation maps to update their route statuses.

Correction: leave old maps unchanged and write current classifications into the overlay.

### Route Amnesia

Old blocked or deferred routes disappear even though they may still matter.

Correction: preserve them as route-memory records with current state.

### Recency Bias

The newest Navigation map overwrites older but still relevant route memory.

Correction: classify by evidence and authority, not date alone.

### Artifact Overproduction

The routine saves a new `prior_map_overlay.md` even when the reconciliation is tiny and Navigation will consume it immediately.

Correction: use inline output unless durable handoff has clear value.

### Overlay Becomes Navigation

The overlay starts enumerating new routes or selecting the best route.

Correction: keep it to prior-route reconciliation. Navigation produces the new map.

## Short Version

After warm-up v1/v2/v3, ask:

```text
What prior Navigation maps exist?
Which old routes still matter?
Which old routes are stale, done, blocked, or superseded?
What should Navigation remember before producing the next map?
```

Then hand the overlay to Navigation.

The overlay is a reconciliation result, not a patch to old Navigation maps. Save it as `prior_map_overlay.md` only when durable handoff is useful.
