# Exploration: navigation_warmup_readme_necessity

## Territory

Scanned:

- `homegrown/navigation/warmup/README.md`
- `homegrown/protocols/navigation_context_intake.md`
- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`
- `homegrown/navigation/SKILL.md`
- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`
- `devdocs/inquiries/2026-05-04_17-40__prior_navigation_map_overlay_mutability/finding.md`

## Signals

- The README repeats run order that already exists in `navigation_context_intake.md`.
- The folder has only a small number of clearly named files.
- The user's bloat signal is consistent with recent Homegrown direction: avoid duplicate authority unless the artifact carries a distinct operation.
- `navigator-prior-map-overlay.md` already contains the critical old-map immutability rule.

## Possibilities

1. Keep README as run-order file.
2. Remove README and let `navigation_context_intake.md` be the router.
3. Keep README only as a minimal index, with no rules.
4. Move all routing into `homegrown/navigation/SKILL.md`.

## Convergence

Option 2 is strongest now. Option 3 may become useful later if discovery becomes a problem, but it is premature.
