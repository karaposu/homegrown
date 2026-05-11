# Exploration: Route Memory Review Trigger Boundary

## User Input

The user challenged the prior trigger model: Route Memory Review was described as running for project-level Navigation but not bounded Navigation. The user found this separation unnatural because Navigation is Navigation.

## Mode And Entry Point

Mode: possibility exploration.

Entry point: signal-first. The signal is discomfort with the bounded/project-level distinction.

## Cycle 1

### Scan

Mapped possible trigger models:

1. Project-level only.
2. Every Navigation run always writes Route Memory Review.
3. Every Navigation run performs a cheap route-memory preflight; full review runs only when route-memory sources need interpretation.
4. Route Memory Review is folded entirely into Navigation output.
5. Route Memory Review is replaced by freshness preflight.

### Signals Detected

- The user's smell is real: project-level vs bounded is a poor conceptual boundary.
- The actual dependency is source-relative: does this Navigation run depend on prior route-memory artifacts?
- Some bounded inputs can still contain route memory, such as a prior `navigation.md`, a local inquiry with prior `navigation.md`, or a multi-resolution `_frontier.md`.
- Some project-level runs may have no relevant prior route memory.

### Probe

The project-level distinction was a shortcut for "likely to need old maps," not a structural property of Navigation. Structural Navigation has one job: enumerate next directions from current context. Before doing that, it needs to know whether old route memory should influence the map.

### Frontier State

Stable. The key frontier is the replacement trigger model.

## Jump Scan

Checked whether full Route Memory Review should run every time to preserve explicitness. That overcorrects. Explicitness can be satisfied by recording a route-memory preflight outcome in every Navigation map, while generating a full review artifact only when there are route-memory sources to reconcile.

## Final Structural Map

### Territory Overview

The natural boundary is not:

```text
bounded vs project-level
```

The natural boundary is:

```text
no route-memory dependency vs route-memory dependency
```

### Inventory

- Universal part: every Navigation run checks route-memory relevance.
- Conditional part: full Route Memory Review artifact when old route-memory sources need current interpretation.
- Output part: every Navigation map records route-memory status in telemetry or context-preparation section.

### Confidence Map

- Confirmed: bounded/project-level is a weak trigger boundary.
- Confirmed: route-memory dependency is the stronger boundary.
- Confirmed: bounded inputs may still need review.
- Confirmed: broad inputs may not need review.

**Overall: PROCEED** (territory mapped; trigger replacement is clear).
