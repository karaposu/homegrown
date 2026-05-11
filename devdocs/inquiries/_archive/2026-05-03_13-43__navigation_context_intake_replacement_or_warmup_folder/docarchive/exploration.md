# Exploration: Navigation Context Intake Replacement Or Warm-Up Folder

## Mode And Entry Point

- **Mode:** artifact exploration.
- **Entry point:** signal-first. The user pointed to a specific artifact (`homegrown/protocols/navigation_context_intake.md`) and a proposed replacement routine (`navigation-project-warmup_v1.md`, `v2.md`, `v3.md`).

## Cycle 1 - Scan Existing Artifacts

### Scanned

- `homegrown/protocols/navigation_context_intake.md`
- `navigation-project-warmup_v1.md`
- `navigation-project-warmup_v2.md`
- `navigation-project-warmup_v3.md`
- `homegrown/navigation/SKILL.md`
- `devdocs/inquiries/2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency/finding.md`
- `homegrown/` file layout

### Found

`navigation_context_intake.md` is a large controller protocol. It defines source profiles, intake modes, staged warm-up, trace requirements, outcome review gates, and handoff to Navigation.

`navigation-project-warmup_v1.md` and `v2.md` have already moved toward the better shape: first-party artifacts, current frontier, and project-direction architecture.

`navigation-project-warmup_v3.md` is still rough. It has the right trace concept but still contains code-only language and an incomplete `- is this` line.

`homegrown/navigation/` already exists as a discipline folder with `SKILL.md` and `references/navigation.md`.

`homegrown/protocols/` currently contains shared protocols as individual files, not protocol subfolders.

### Signals Detected

- **Duplicate responsibility:** `navigation_context_intake.md` and v1/v2/v3 now both describe warm-up.
- **Wrong interface weight:** `navigation_context_intake.md` is too heavy for the user's preferred warm-up routine.
- **Useful invariants inside old protocol:** session-level run, rerun only on boundary/staleness, read-set confidence, missing-context warnings, handoff to Navigation, and outcome review gate are still valuable.
- **Folder naming risk:** `homegrown/protocols/navigation/` may confuse "Navigation discipline" with "navigation protocol group" because `homegrown/navigation/` already exists.
- **Root-file instability:** keeping v1/v2/v3 at repo root is useful while drafting, but not good as a long-term canonical location.

### Resolution Decision

Zoom in on placement and responsibility boundaries because the main question is not whether the warm-up routine is useful. That was already answered. The question is where authority should live.

### Frontier State

The main artifacts are mapped. The unresolved frontier is the cleanest file organization.

### Confidence Map

- Old protocol is too heavy as main interface: confirmed.
- Old protocol contains reusable invariants: confirmed.
- v1/v2/v3 are the emerging main routine: confirmed.
- `homegrown/protocols/navigation/` as folder: uncertain, likely risky.

## Cycle 2 - Probe Placement Options

### Option A - Delete `navigation_context_intake.md` Now

Pros:

- removes duplicate/confusing authority;
- forces the new routine to be primary.

Cons:

- loses useful invariants before v3 is cleaned;
- removes historical context before one real run proves the new routine;
- risks reintroducing per-request mistakes because no tiny handoff wrapper remains.

Confidence: low.

### Option B - Keep `navigation_context_intake.md` As-Is

Pros:

- preserves all safety logic.

Cons:

- contradicts the user's simpler command-routine direction;
- keeps parameter-heavy shape in the active protocol layer;
- likely causes future agents to load the wrong thing and overcomplicate warm-up.

Confidence: low.

### Option C - Shrink `navigation_context_intake.md` Into A Wrapper Around v1/v2/v3

Pros:

- preserves session boundary, freshness, handoff, and review invariants;
- makes v1/v2/v3 the actual execution routine;
- avoids immediate deletion before the new routine has one real run;
- keeps existing references from breaking.

Cons:

- the wrapper can regrow if not kept short;
- still leaves a file with the old name unless renamed later.

Confidence: high.

### Option D - Move v1/v2/v3 Under `homegrown/protocols/navigation/`

Pros:

- puts warm-up files under Homegrown rather than repo root;
- groups Navigation-related protocols.

Cons:

- `homegrown/navigation/` already exists as the Navigation discipline;
- `homegrown/protocols/` currently uses flat protocol files;
- v1/v2/v3 are runnable command routines more than protocols;
- the path can imply that Navigation itself is a protocol family.

Confidence: medium-low.

### Option E - Move v1/v2/v3 Under `homegrown/navigation/warmup/`

Pros:

- places warm-up under the Navigation discipline that consumes it;
- avoids a conflicting `homegrown/protocols/navigation/` folder;
- correctly frames v1/v2/v3 as Navigation-owned warm-up routines, not generic shared protocols;
- leaves `homegrown/protocols/` for cross-cutting contracts and wrappers.

Cons:

- requires updating references from root paths;
- if future non-Navigation consumers use the routine, the path may feel too discipline-owned.

Confidence: high.

### Option F - Move v1/v2/v3 Under `homegrown/protocols/navigation_warmup/`

Pros:

- avoids `navigation/` name collision;
- keeps them under protocols.

Cons:

- still treats command routines as protocols;
- less aligned with the fact Navigation consumes the outputs.

Confidence: medium.

## Cycle 3 - Jump Scan: Similar Homegrown Layout Patterns

### Scanned

The current `homegrown/` layout:

- discipline folders: `homegrown/navigation/`, `homegrown/reflect/`, `homegrown/explore/`, etc.;
- shared contracts: `homegrown/contracts/alignment_control.md`;
- shared protocols: `homegrown/protocols/*.md`.

### Finding

Homegrown already separates cognitive disciplines from shared protocols. Navigation is a discipline. Warm-up prepares Navigation's session context, but it is not itself the Navigation discipline and it is not a generic shared protocol like `branch_inquiry.md` or `artifact_materialization.md`.

This suggests two-layer ownership:

```text
homegrown/navigation/warmup/          # executable warm-up routine
homegrown/protocols/navigation_warmup.md or old navigation_context_intake.md as wrapper
```

The wrapper should be tiny. The detailed steps should live with the warm-up routine.

## Convergence Check

- **Frontier stability:** yes. The options are mapped and no new major placement category emerged.
- **Declining discovery rate:** yes. Later scans refined naming/placement rather than finding a new concept.
- **Bounded gaps:** yes. Remaining uncertainty is empirical: whether the first real use proves the routine.

## Structural Map

### Territory Overview

The territory has three regions:

1. Existing heavy protocol.
2. Emerging v1/v2/v3 command routine.
3. Homegrown file organization and ownership.

### Inventory

- `navigation_context_intake.md`: heavy controller with valuable invariants.
- `navigation-project-warmup_v1.md`: orientation + current frontier.
- `navigation-project-warmup_v2.md`: project-direction architecture.
- `navigation-project-warmup_v3.md`: movement traces, still needs cleanup.
- `homegrown/navigation/`: existing Navigation discipline folder.
- `homegrown/protocols/`: shared cross-cutting protocols.

### Signal Log

- Duplicate authority: probed, real.
- Deleting old protocol immediately: probed, risky.
- Keeping old protocol unchanged: probed, bad.
- `homegrown/protocols/navigation/` folder: probed, name collision risk.
- `homegrown/navigation/warmup/` folder: probed, strongest placement.

### Confidence Map

- Shrink old protocol into wrapper: high confidence.
- Move v1/v2/v3 out of repo root eventually: high confidence.
- Put v1/v2/v3 under `homegrown/navigation/warmup/`: high confidence.
- Put v1/v2/v3 under `homegrown/protocols/navigation/`: medium-low confidence.
- Delete `navigation_context_intake.md` now: low confidence.

### Frontier State

Ready for sensemaking. The main unresolved question is whether to rename the wrapper now or keep the old filename temporarily.

### Gaps And Recommendations

- Do not delete `navigation_context_intake.md` immediately.
- Do not keep it as the active detailed protocol.
- Prefer shrinking it into a tiny wrapper that delegates execution to v1/v2/v3.
- Prefer moving v1/v2/v3 to `homegrown/navigation/warmup/` after v3 cleanup.
- Avoid `homegrown/protocols/navigation/` unless Homegrown later establishes protocol subfolders as a general convention.
