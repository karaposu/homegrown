# Exploration: prior_navigation_map_overlay_mutability

## User Input

Should the post-v3 prior Navigation map overlay update old route statuses in old Navigation maps every time Navigation runs, or should it preserve old files and record current interpretation elsewhere?

## Mode

Possibility exploration with artifact grounding.

## Territory Map

### Concrete Artifacts Scanned

- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`
- `homegrown/navigation/warmup/README.md`
- `homegrown/protocols/navigation_context_intake.md`
- `homegrown/navigation/SKILL.md`
- prior pattern from `homegrown/protocols/multi_resolution_navigation.md`: changing expansion state belongs in `_frontier.md`, not ordinary route cards.

### Possibility Regions

1. **Mutable old maps**
   - Update `Status` inside prior `devdocs/navigation/*.md` files.
   - High readability in one file, but high history-loss and update-burden risk.

2. **Read-only overlay**
   - Read prior maps, classify old routes, write a new overlay artifact.
   - Preserves history and makes current interpretation explicit.

3. **Latest index**
   - Keep old maps and overlays immutable but add a pointer/index to latest route memory.
   - Useful later, premature now.

4. **Per-run full reconciliation**
   - Run overlay before every Navigation invocation.
   - Strong freshness, but too much repeated work and too broad for bounded navigation.

5. **Triggered reconciliation**
   - Run overlay after cold warm-up or when route memory is relevant.
   - Bounded and source-aware.

## Signal Detection

- Strong signal: the user's discomfort with editing old files points to a real snapshot-vs-state conflict.
- Strong signal: Homegrown recently made the same design move for multi-resolution Navigation: `_frontier.md` owns changing state; route cards stay descriptive.
- Tension: Navigation needs current route memory, but old maps should remain reliable historical evidence.

## Probes

### Probe 1 - Snapshot Semantics

If old maps are edited, a map no longer answers "what did Navigation think then?" It answers a mixed question: "what was listed then, with some statuses updated later." That weakens traceability.

### Probe 2 - Maintenance Burden

If every Navigation run updates old route statuses, route-state maintenance becomes part of every run. This creates a hidden bookkeeping loop and likely stale updates.

### Probe 3 - Overlay As Current Interpretation

An overlay can say "Route X from map Y is now done because file Z exists" without altering map Y. This gives current utility and preserves evidence.

## Confidence Map

- Confirmed: current overlay text says to classify routes but does not explicitly forbid editing old maps.
- Confirmed: existing Homegrown design prefers sidecars/current-state artifacts for mutable state.
- Scanned: possible index/pointer future.
- Unknown: whether multiple overlays will become hard to discover after real use.

## Convergence

Frontier stable. The main viable design is read-only overlay plus new current interpretation artifact. The remaining unknown is discoverability after repeated use, not the mutability rule.
