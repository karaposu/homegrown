# Exploration: Navigator Warm-Up v1/v2/v3 Sufficiency

## Mode And Entry Point

- **Mode:** artifact exploration.
- **Entry point:** signal-first, because the user provided three concrete candidate warm-up files and a specific suspicion about missing recency exposure.

## Cycle 1 - Coarse Scan

### Scanned

- `navigation-project-warmup_v1.md`
- `navigation-project-warmup_v2.md`
- `navigation-project-warmup_v3.md`

### Found

- `v1` is a broad project summary command. It asks the model to read first-party source-of-truth artifacts, with special handling for `devdocs/inquiries/`: read each `finding.md`, skip `docarchive/`.
- `v2` is an architecture/direction command. It asks for end goal, intermediate goals, how the project is positioned to reach them, and existing attempts.
- `v3` is a trace command. It defines project movement traces and includes seven trace categories, including reasoning/evidence traces. It asks for grouped trace enumeration and per-trace files.

### Signals Detected

- **Strong staged pattern:** the sequence roughly maps to summary -> directional architecture -> movement traces.
- **Codebase residue:** all three still carry code-shaped wording. `v1` says "Read all code files" and "Focus on source code" even though it later says first-party code + Markdown. `v2` says "codebase", "new engineer", "data flow", and has a typo `codeb`. `v3` says traces should be grounded strictly in actual code behavior.
- **Recency ambiguity:** `v1` reads dated `finding.md` files, but none of the files explicitly produce a "recent changes / active frontier / stale state" section for Navigation.
- **Trace strength:** `v3` contains the most Homegrown-native addition: reasoning/evidence traces.
- **Trace incompleteness:** `v3` has an unfinished subsection line: `- is this`.

### Resolution Decision

Zoom in on whether the sequence is sufficient for Navigation, because the files are small and the main risk is not hidden content but missing operational output.

### Frontier State

Stable at the candidate-file level. Unknowns remain around how these would behave after dogfooding on a full Homegrown session.

### Confidence Map

- `v1` role: confirmed.
- `v2` role: confirmed.
- `v3` role: confirmed but incomplete in wording.
- Recency sufficiency: scanned, not confirmed.

## Cycle 2 - Targeted Probe: Recency And Currentness

### Probed

Whether dated inquiry folders make a separate recency warm-up unnecessary.

### Finding

Dates provide **ordering evidence**, not **current-state interpretation**.

A date can tell Navigation what is recent, but it does not tell:

- which recent finding still matters;
- which finding was corrected later;
- which artifact is now active;
- which prior direction has become stale;
- which current user correction changed the interpretation;
- which open gate is now the next bottleneck.

So recency exists in the filesystem, but it is not yet exposed as a warm-up output.

### Signal

The missing piece is not necessarily a fourth heavy command. It is a required freshness/current-frontier lens somewhere in the routine.

### Resolution Decision

Zoom out and check whether v1, v2, or v3 is the natural place to add that lens.

### Frontier State

The recency gap is bounded: it can be addressed by adding a small required section, not by replacing the whole routine.

### Confidence Map

- Need for recency exposure: confirmed.
- Need for separate full warm-up command: inferred, likely unnecessary unless full reads become too expensive.

## Cycle 3 - Jump Scan: Alternative Missing Vital Pieces

### Scanned

Other possible gaps besides recency:

- source authority;
- write/overwrite safety;
- output contract;
- current-session reuse;
- trace volume control;
- non-code wording;
- explicit "do not reread if already warmed" behavior.

### Found

The largest non-recency risks are:

- **No session boundary rule:** the routine does not clearly say it is done once per session and reused by Navigation.
- **No freshness rule:** it does not say when existing `devdocs/archaeology/*` outputs are stale enough to rerun.
- **No trace selection rule:** `v3` may explode into too many trace files if it tries to trace every possible category.
- **No Navigation handoff:** the outputs are useful, but the routine does not yet state exactly what Navigation should consume from them.

### Resolution Decision

No major unbounded gap found. The candidate routine is structurally good but needs tightening before it can replace `navigation_context_intake.md`.

## Convergence Check

- **Frontier stability:** yes. The three-file routine's main shape and risks are visible.
- **Declining discovery rate:** yes. The second and third passes found refinements, not a fundamentally different routine.
- **Bounded gaps:** yes. Missing pieces are local edits: recency/currentness, session boundary, trace selection, and non-code wording.

## Structural Map

### Territory Overview

The routine has three useful layers:

1. `v1`: plain summary of what exists.
2. `v2`: directional architecture: end goal, intermediate goals, attempts, and positioning.
3. `v3`: movement traces: how decisions, artifacts, protocols, branches, implementations, and corrections develop over time.

### Inventory

- `navigation-project-warmup_v1.md`: broad context ingestion and plain-language summary.
- `navigation-project-warmup_v2.md`: high-level design/direction understanding.
- `navigation-project-warmup_v3.md`: trace extraction and risk/improvement analysis.

### Signal Log

- Strong staged unlock pattern: probed, survives.
- Codebase residue: probed, needs refinement.
- Recency ambiguity: probed, needs explicit lens.
- Trace incompleteness: probed, needs cleanup.
- Output/handoff ambiguity: probed, needs minimal contract.

### Confidence Map

- The v1/v2/v3 routine is a better operating shape than a large parameterized protocol: confirmed.
- The routine is ready to dogfood after small edits: high confidence.
- The routine is ready to fully replace `navigation_context_intake.md`: medium confidence, because the handoff and freshness rules are not yet explicit.
- A separate heavy recency warm-up is necessary: low confidence.
- A lightweight recency/current-frontier section is necessary: high confidence.

### Frontier State

Known enough to answer. Remaining unknown is empirical: how much context the v1/v2/v3 routine consumes during real Homegrown use.

### Gaps And Recommendations

- Add a required `Recent / Current Frontier` section to either `v1` or `v2`.
- Add a session rule: run the warm-up once per session unless sources changed or outputs are stale.
- Add a `Navigation Handoff` section after v3 or in a small wrapper.
- Tighten v3 trace selection to avoid exhaustive trace explosion.
- Remove code-only phrasing from all three files where the target is Homegrown/project-state warm-up.
