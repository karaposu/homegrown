# Sensemaking: Route Memory Review Trigger Boundary

## User Input

The user suspects the prior answer smells: why would Route Memory Review be needed for "big Navigation" but not bounded Navigation? Navigation is Navigation, and separating by what it is for may not be natural.

## SV1 - Baseline Understanding

The issue is whether Route Memory Review has been incorrectly tied to Navigation scale rather than to a real source dependency.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation should remain one discipline, not two modes with different hidden rules.
- Old route memory can affect route enumeration.
- Explicitness requires visible context decisions.
- Avoid generating meaningless artifacts.

### Key Insights

- "Project-level" was standing in for "old route memory likely matters." That is a heuristic, not a structural boundary.
- A bounded Navigation input can contain route memory.
- A project-level Navigation input can have no relevant old route memory.
- The universal step should be a route-memory preflight, not always full review.

### Structural Points

- Navigation input has a source set.
- Some sources are route-memory sources: prior `navigation.md`, `_frontier.md`, prior Route Memory Reviews, sync briefs carrying route states.
- The presence and relevance of those sources determines whether full Route Memory Review is needed.

### Foundational Principles

- Operations should trigger from actual dependency, not scale label.
- Navigation should expose its context basis.
- File generation should represent meaningful operation, not ritual.

## SV2 - Anchor-Informed Understanding

The natural model is: every Navigation run checks route-memory dependency. Full Route Memory Review happens only when the check finds relevant prior route-memory sources.

## Phase 2 - Perspective Checking

### Technical / Logical

Scope labels do not imply source dependencies. A file-path input may be a prior Navigation map; a project brief may be fresh and route-memory-free. Triggering by bounded/project-level is leaky.

### Human / User

The user should not have to remember a special rule: "big Navigation gets old-map review, bounded Navigation does not." The simpler rule is: Navigation checks route memory every time.

### Strategic / Long-Term

Future auto Navigation needs uniform preflight semantics. A single preflight outcome is easier to automate than category-specific behavior.

### Risk / Failure

If bounded Navigation skips review blindly, stale local route memory can mislead it. If every run writes a full review, the repo gains empty artifacts.

### Resource / Feasibility

A route-memory preflight is cheap: classify inputs and known context. A full review is more expensive and should run only when sources require reconciliation.

## SV3 - Multi-Perspective Understanding

The split should be replaced. Navigation should have a universal route-memory preflight with outcomes:

```text
none_detected
not_relevant
review_needed
review_consumed
thin_skipped
```

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is Route Memory Review part of every Navigation run?

**Strongest counter-interpretation:** Yes. Since Navigation is Navigation, full Route Memory Review should run every time.

**Why the counter-interpretation fails:** Some Navigation runs have no prior route-memory sources. A full review would have no object and would produce empty bureaucracy.

**Confidence:** HIGH.

**Resolution:** A route-memory check is part of every Navigation run. Full Route Memory Review is conditional.

**What is now fixed?** Universal preflight, conditional review.

**What is no longer allowed?** Skipping route-memory consideration only because the input is "bounded."

**What now depends on this choice?** Navigation preflight and context intake wording.

**What changed in the conceptual model?** The operation moved from scale-gated to dependency-gated.

### Ambiguity: What counts as route-memory dependency?

**Strongest counter-interpretation:** Only old `devdocs/navigation/*.md` maps count.

**Why the counter-interpretation fails:** `_frontier.md`, prior Route Memory Reviews, sync briefs, and local inquiry `navigation.md` files can also carry route-state memory.

**Confidence:** HIGH.

**Resolution:** Route-memory sources include prior Navigation maps, Route Memory Reviews, `_frontier.md` ledgers, sync briefs with route-state changes, and any input whose purpose is route continuation memory.

**What is now fixed?** Trigger depends on route-memory source presence and relevance.

**What is no longer allowed?** Treating `devdocs/navigation/*.md` as the only possible old route memory.

### Ambiguity: Does project-level Navigation always need the review?

**Strongest counter-interpretation:** Yes, because project-level maps are broad and likely to have prior route memory.

**Why the counter-interpretation fails:** Likely is not always. If there are no prior maps, no route-memory sources, or the question is unrelated, full review is unnecessary.

**Confidence:** HIGH.

**Resolution:** Project-level Navigation still runs the preflight; full review only if route-memory dependency is found.

## SV4 - Clarified Understanding

The user is right that "big vs bounded" smells. It is not the right abstraction. Navigation should always ask the same route-memory question, then route based on source dependency.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Universal route-memory preflight belongs in Navigation.
- Full Route Memory Review is dependency-triggered.
- Bounded inputs can trigger review.
- Project-level inputs can skip review if no route-memory dependency exists.

### Eliminated

- Project-level-only trigger.
- Bounded-local automatic bypass.
- Full review for every Navigation invocation.

## SV5 - Constrained Understanding

The operating rule becomes:

```text
Every Navigation run records route_memory_status.
If route_memory_status = review_needed, run Route Memory Review and save route_memory_review.md.
Otherwise, proceed and record why review was not needed.
```

## SV6 - Stabilized Model

Navigation is one discipline. Its universal preflight should include route-memory status. Route Memory Review is not for "big Navigation"; it is for any Navigation run whose source set contains relevant prior route-memory artifacts that need current interpretation before route enumeration.

**Overall: PROCEED** (stable model; prior split corrected).
