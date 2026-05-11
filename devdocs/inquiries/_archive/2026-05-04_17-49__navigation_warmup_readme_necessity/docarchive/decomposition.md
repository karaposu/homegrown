# Decomposition: navigation_warmup_readme_necessity

## Coupling Map

- Routing conditions are strongly coupled to `navigation_context_intake.md`.
- Warm-up routine details are strongly coupled to individual files under `homegrown/navigation/warmup/`.
- README is weakly coupled: it only points at these files and repeats their roles.

## Question Tree

### Q1 - Is README load-bearing?

Answer: no, not yet.

### Q2 - Where does run order belong?

Answer: `navigation_context_intake.md`.

### Q3 - What happens to overlay rules?

Answer: keep them in `navigator-prior-map-overlay.md` and route conditions in `navigation_context_intake.md`.

### Q4 - What edit is needed?

Answer: delete README and remove it from the canonical file list.

## Dependency Order

1. Decide README is not active architecture.
2. Delete README.
3. Patch router canonical list.
4. Leave overlay file intact.
