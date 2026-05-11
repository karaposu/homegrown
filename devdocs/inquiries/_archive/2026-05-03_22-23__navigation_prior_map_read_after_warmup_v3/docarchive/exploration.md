# Exploration: Navigation Prior Map Read After Warm-Up v3

## Mode And Entry Point

- **Mode:** artifact exploration.
- **Entry point:** signal-first. The user supplied a concrete hypothesis: prior Navigation-map reading should happen after `navigator-warmup3.md`, not inside v1.

## Cycle 1 - Scan Current Warm-Up Artifacts

### Scanned

- `homegrown/navigation/warmup/navigator-warmup1.md`
- `homegrown/navigation/warmup/navigator-warmup2.md`
- `homegrown/navigation/warmup/navigator-warmup3.md`

### Found

`navigator-warmup1.md` is a broad orientation command. It reads first-party source-of-truth artifacts and produces a plain project summary plus a `Recent / Current Frontier` section. It explicitly treats findings as canonical records for inquiry folders and skips `docarchive/` unless requested.

`navigator-warmup2.md` is a project-direction architecture command. It reads first-party source-of-truth artifacts and, if available, uses `devdocs/archaeology/project_summary.md` from v1 as orientation. It explains end goal, intermediate goals, attempts, positioning, main abstractions, and movement path.

`navigator-warmup3.md` is a trace command. It assumes v1/v2-level context already exists, enumerates traces, then writes selected trace files under `devdocs/archaeology/traces/`. It is still rough, but its conceptual target is movement through the project over time.

### Signals

- **Stage roles are different:** v1 is orientation/current frontier, v2 is direction architecture, v3 is movement traces.
- **Prior Navigation maps are derived artifacts:** they are route-space outputs, not raw source-of-truth artifacts.
- **Placement risk:** reading prior maps in v1 could pull orientation toward old route suggestions before the project has been re-grounded.
- **Usefulness signal:** prior maps are still important because they preserve routes not captured by findings.

### Resolution Decision

Probe the Navigation contract and recent findings to understand whether prior maps are authoritative input, evidence, or handoff material.

### Frontier State

Advancing. Warm-up roles are mapped, but prior-map status remains unresolved.

### Confidence Update

- v1 role: confirmed.
- v2 role: confirmed.
- v3 role: scanned.
- Prior maps as separate artifact class: inferred.

## Cycle 2 - Probe Navigation Contract And Recent Findings

### Scanned

- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/SKILL.md`
- `devdocs/inquiries/2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency/finding.md`
- `devdocs/inquiries/2026-05-03_13-43__navigation_context_intake_replacement_or_warmup_folder/finding.md`
- `devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md`

### Found

Navigation now writes route records with `Purpose`, `Movement`, `Status`, `Blocked by`, `Unlocks`, `WHY`, `Guidelines`, and `Continuation note`.

The route-map finding says prior Navigation maps should become continuation memory, but it says "Navigation warm-up should read prior Navigation maps" at a broad level. It does not settle which stage reads them.

The warm-up sufficiency finding says v1/v2/v3 should be the warm-up spine and warns against adding a fourth heavy warm-up command unless real use proves the need.

The warm-up folder finding says the detailed warm-up routine belongs under `homegrown/navigation/warmup/`, while a tiny wrapper may preserve session/rerun/handoff invariants.

### Signals

- **Prior maps are evidence, not authority:** the route-map finding explicitly says old maps can become stale or superseded.
- **Continuation memory depends on interpretation:** old route status cannot be trusted without current project context.
- **v3 creates the right evaluation basis:** traces explain what changed over time, which is exactly what is needed to judge whether a prior route is still open, stale, blocked, or superseded.
- **The existing three-stage routine should not grow into a heavy fourth command without evidence.**

### Resolution Decision

Treat prior-map reading as a post-v3 continuation overlay unless a later test shows v3 itself should own it.

### Frontier State

Stable in main direction. Need one jump scan for alternative placement.

### Confidence Update

- Prior maps should be read before Navigation: high confidence.
- Prior maps should be read in v1: low confidence.
- Prior maps should be read after v3: medium-high confidence.

## Cycle 3 - Jump Scan: Alternative Placements

### Alternatives Checked

1. **Read prior maps in v1.**
   - Benefit: early exposure to route history.
   - Problem: v1 is supposed to build neutral project orientation and current frontier. Prior maps are old route suggestions and can anchor currentness too early.

2. **Read prior maps in v2.**
   - Benefit: route maps can inform movement path and architecture.
   - Problem: v2 should derive direction architecture from source artifacts and v1 summary. Prior maps are more useful after direction architecture is known, not before.

3. **Read prior maps inside v3.**
   - Benefit: v3 already handles movement traces.
   - Problem: v3 trace generation can become expensive and broad. If prior-map reading is embedded inside v3, v3 may become both trace producer and continuation-state reducer.

4. **Read prior maps after v3 in a small handoff/overlay step.**
   - Benefit: v1/v2/v3 stay clean; prior maps are interpreted after orientation, direction architecture, and movement traces exist.
   - Problem: this creates another named operation if handled as a separate file.

### Jump Scan Result

The strongest placement is after v3, but it should be a small continuation-memory overlay, not a full new warm-up stage.

## Convergence Check

- **Frontier stability:** yes. All plausible placements were checked.
- **Declining discovery rate:** yes. Later scans refined placement rather than discovering new artifact classes.
- **Bounded gaps:** yes. Remaining uncertainty is naming and exact file placement, not conceptual role.

## Structural Map

### Territory Overview

The warm-up ladder has three cognitive stages:

```text
v1 = orientation + current frontier
v2 = project-direction architecture
v3 = movement traces
post-v3 overlay = prior Navigation-map continuation state
```

### Inventory

- `navigator-warmup1.md`: source-of-truth orientation, canonical findings, current frontier.
- `navigator-warmup2.md`: direction architecture and project movement path.
- `navigator-warmup3.md`: movement traces across ideas, decisions, protocols, branches, implementations, and corrections.
- Prior `navigation.md` / `devdocs/navigation/*.md`: route-space memory, including open routes, blocked routes, abandoned routes, and continuation notes.

### Signal Log

- User hypothesis "after v3" was probed and looks structurally right.
- v1 placement was probed and looks risky because it could anchor orientation too early.
- v2 placement was probed and looks premature because route maps are better interpreted after direction architecture is known.
- v3 placement was probed and is close, but embedding prior-map reading inside v3 may overload trace generation.
- Post-v3 overlay survived as the cleanest boundary.

### Confidence Map

- Prior maps should be consumed before Navigation runs: confirmed.
- Prior maps should be treated as evidence, not authority: confirmed.
- Prior maps should not be part of v1's core read: high confidence.
- Prior maps should be interpreted after v3: medium-high confidence.
- Exact artifact name for the overlay: unknown.

### Frontier State

Ready for sensemaking. The main ambiguity is whether "after v3" means a separate `v4`, an appended section in v3 output, or a tiny handoff rule in a warm-up README/wrapper.

### Gaps And Recommendations

- Do not patch v1 to deeply read prior Navigation maps.
- Do not make prior maps source-of-truth for v2.
- Add a post-v3 continuation-memory step that reads prior maps and classifies route state after the project has been re-grounded.
- Keep the step small enough that it does not become a fourth heavy warm-up command.
