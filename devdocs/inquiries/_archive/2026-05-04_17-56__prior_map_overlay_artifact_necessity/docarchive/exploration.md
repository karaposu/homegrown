# Exploration: Prior Map Overlay Artifact Necessity

## User Input

Should `navigator-prior-map-overlay.md` read old Navigation maps and always write a separate `prior_map_overlay.md` file, or is there a better solution?

## Mode

Mixed exploration:

- Artifact exploration over existing Navigation warm-up files.
- Possibility exploration over output shapes for route-memory reconciliation.

## Coarse Scan

### Existing Artifacts

- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`
  - Treats old `devdocs/navigation/*.md` as historical snapshots.
  - Says the routine writes a new `prior_map_overlay.md` artifact.
  - Uses `output_mode: save | print_only`.
  - Handoff prompt treats `prior_map_overlay.md` as the current interpretation of prior route memory.

- `homegrown/protocols/navigation_context_intake.md`
  - Owns warm-up routing.
  - Routes cold project sessions through warmup1 -> warmup2 -> warmup3 -> prior-map overlay -> Navigation.
  - Says the overlay writes a reconciliation artifact.

- `homegrown/navigation/SKILL.md`
  - Adds Freshness Preflight.
  - Stops for full warm-up when baseline is missing or globally stale.
  - Tells the user to run warmup1 -> warmup2 -> warmup3 -> prior-map overlay.

- `homegrown/navigation/warmup/navigator-refresh.md`
  - Handles stale warmed sessions with bounded recent changes.
  - Produces `sync_brief.md`.
  - Already treats prior Navigation maps as stale evidence, not current authority.

- `devdocs/inquiries/2026-05-04_17-40__prior_navigation_map_overlay_mutability/finding.md`
  - Correctly killed editing old maps.
  - Correctly preserved old maps as historical snapshots.
  - Still states the overlay should write a new artifact.

### Possibility Space

1. Edit old Navigation maps in place.
2. Skip old maps entirely.
3. Always save a separate `prior_map_overlay.md`.
4. Print the overlay inline and let the next Navigation map absorb it.
5. Add a `Prior Route Memory` section to the next Navigation map.
6. Make prior-map overlay an operation with output modes: inline for immediate/small use, saved for durable handoff.
7. Merge prior-map reconciliation into `navigator-refresh.md`.
8. Create a global route-memory registry.

## Signal Detection

### Strong Signals

- The immutability decision is strong. Editing old maps would destroy their value as evidence.
- The current wording over-identifies the operation with one storage form.
- There is a clear handoff-distance difference:
  - same session, small number of old routes -> inline context can be enough;
  - cross-session, many old maps, or user wants durable handoff -> saved file is useful.
- A saved overlay is useful when route memory is expensive to reconstruct, but wasteful when it is just a short correction.

### Tensions

- Navigation needs route-memory context, but Homegrown is trying to avoid artifact bloat.
- A separate artifact improves resumability, but it can create another "latest file" discovery problem.
- The router wants a clean run order, but the overlay should be conditional and proportional.

### Absences

- No explicit `inline` output mode exists.
- No save-policy threshold exists.
- The handoff prompt assumes `prior_map_overlay.md` exists, instead of allowing an inline overlay result.

## Probe

### Probe: Always-Saved Overlay

Strength: durable, inspectable, good for separate sessions.

Weakness: creates a new file even when the route-memory delta is trivial. Also risks turning every warm-up into materialization.

Confidence: scanned/confirmed.

### Probe: Inline Overlay Only

Strength: lean, immediate, low maintenance.

Weakness: weak across sessions. If the next Navigation run happens elsewhere, the route reconciliation can be lost.

Confidence: scanned.

### Probe: Adaptive Output Mode

Strength: separates the operation from storage. Preserves history while avoiding mandatory artifact creation. Compatible with both immediate and cross-session Navigation.

Weakness: needs clear save-policy language so agents do not choose randomly.

Confidence: confirmed.

## Confidence Map

- Confirmed: old maps should remain historical snapshots.
- Confirmed: route memory needs current interpretation before Navigation consumes old maps.
- Confirmed: mandatory file creation is not always proportional.
- Scanned: inline result can work for immediate Navigation.
- Inferred: saved artifact should be used when a different session or future run must consume the reconciliation.
- Unknown: how often real Navigation sessions will need durable overlays; usage should be watched.

## Convergence Check

Frontier is stable enough. The major options are visible, the important tension is identified, and the remaining unknown is empirical usage frequency rather than missing structure.
