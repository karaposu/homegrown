# Innovation: Route Memory Preflight Reevaluation

## User Input

`devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/_branch.md`

## Seed

The current answer is close but unclean:

```text
Every Navigation run should do cheap route-memory classification, but full Route Memory Review should run only when old route memory creates an unresolved material effect on the next map.
```

The innovation need is a cleaner operating model that preserves Navigation as one workflow, prevents stale route resurrection, avoids no-op artifacts, and fits Homegrown's explicit Markdown culture.

## Mechanism 1 - Lens Shifting

### Generic

Evaluate route memory through the lens of **context safety**, not workflow size.

Output: route-memory handling becomes a safety check inside Navigation context intake.

### Focused

Evaluate "Route-Memory Preflight" as a telemetry/status field, not as a separate named routine.

Output: every Navigation map records `route_memory_status`, but only `review_needed` invokes a review routine.

### Contrarian

Evaluate old route memory as contamination risk rather than useful memory.

Output: default to not carrying old routes unless a review explicitly reauthorizes them. This strongly prevents resurrection, but may overcorrect into route amnesia.

## Mechanism 2 - Combination

### Generic

Combine Freshness Preflight with route-memory status.

Output: one `Context Preparation` section covers both freshness and route memory.

### Focused

Combine explicit-artifact culture with operation-triggered routing.

Output:

```text
classification -> recorded inline in navigation.md
reconciliation -> saved as route_memory_review.md
```

### Contrarian

Combine review artifact and Navigation map into one file.

Output: embed a `Route Memory Review` section inside `navigation.md`. This reduces files, but violates the boundary because review decisions and route enumeration become one artifact.

## Mechanism 3 - Inversion

### Generic

Invert "old maps may affect the new map."

Output: old maps do not affect the new map unless a current route-memory status explicitly allows or requires that effect.

### Focused

Invert "Route Memory Review decides whether to write a file."

Output: the file contract decides whether a review truly happened. If no `route_memory_review.md` was written, only classification occurred.

### Contrarian

Invert "Navigation should avoid old maps unless needed."

Output: Navigation must always scan old maps and prove they are irrelevant. This maximizes safety but is too expensive and makes old maps overly authoritative.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: no new named mandatory routine before every Navigation run.

Output: route-memory status must be added to existing Freshness Preflight or context intake.

### Focused

Add constraint: full review cannot start unless it will make at least one route-memory decision.

Output: `review_needed` requires expected decisions such as carry forward, retire, keep blocked, needs check, or ignore with evidence.

### Contrarian

Remove constraint: allow no-file full review.

Output: same-session inline review returns. It is faster but fails the user's explicitness requirement when the operation changes current interpretation.

## Mechanism 5 - Absence Recognition

### Generic

Missing thing: a named boundary between "detected" and "needs disposition."

Output: introduce `route_memory_effect` as the internal decision test:

```text
none | irrelevant | already_resolved | unresolved_material
```

### Focused

Missing thing: a `Context Preparation` section in `navigation.md`.

Output: Navigation output should show:

```yaml
freshness_status:
route_memory_status:
route_memory_reason:
route_memory_review:
```

### Contrarian

Missing thing: a registry of latest route-memory reviews.

Output: maintain a global index. This could help discovery later, but it is premature and creates another maintenance surface.

## Mechanism 6 - Domain Transfer

### Generic

Import a compiler model: parse, typecheck, then compile.

Output:

```text
parse context -> typecheck route memory -> compile Navigation map
```

Route Memory Review is only needed when typechecking cannot resolve old-route references cheaply.

### Focused

Import database migration model.

Output: old maps are immutable migration history; Route Memory Review is a migration status report that says which historical route records still apply to the current schema.

### Contrarian

Import legal discovery model.

Output: every relevant old route becomes evidence that must be reviewed and cited. This is rigorous but likely too heavy for ordinary Navigation.

## Mechanism 7 - Extrapolation

### Generic

If Navigation artifacts multiply over time, no-op reviews will become discovery burden.

Output: avoid generating review files for `none_detected` and `not_relevant`.

### Focused

If automation eventually runs Navigation without the user present, fuzzy triggers will fail.

Output: `review_needed` needs deterministic criteria:

- route-memory source exists;
- source is relevant to target Navigation question;
- no current review was consumed;
- disposition cannot be cheaply classified;
- stale or missing disposition could materially alter the map.

### Contrarian

If route-memory review becomes too narrow, automated Navigation will miss deferred/blocked routes.

Output: include a conservative escape hatch:

```text
If unsure whether unresolved route memory is material, mark review_needed rather than silently proceeding.
```

## Candidate Set

### Candidate A - Status-Only Preflight

Every Navigation run records `route_memory_status` during existing Freshness Preflight or context intake. This is the cheap preflight. It does not deeply inspect or classify old route cards.

### Candidate B - Material-Disposition Trigger

Full Route Memory Review runs only when relevant old route memory has unresolved current disposition and could materially change the next map.

### Candidate C - Operation-Triggered Artifact

If full Route Memory Review runs, it writes `route_memory_review.md`. If only status classification happens, no review file is generated.

### Candidate D - Context Preparation Section

Every `navigation.md` should include a small `Context Preparation` or telemetry record naming freshness and route-memory status, plus review path if consumed.

### Candidate E - Review Routine Rename

Reframe `navigator-prior-map-overlay.md` as Route Memory Review. Rename later only if churn is acceptable; behavior should change first.

### Candidate F - Conservative Uncertainty Rule

If route-memory materiality is uncertain and stale resurrection risk is real, classify as `review_needed` rather than `not_relevant`.

### Candidate G - Embedded Review In Navigation

Put the full Route Memory Review inside `navigation.md` instead of a separate file.

## Test Cycle

### Candidate A - Status-Only Preflight

Novelty: moderate. It converts a named routine into a status field.

Scrutiny survival: survives. It resolves the user's "Navigation is Navigation" concern without losing auditability.

Fertility: high. It gives a clear implementation path in Freshness Preflight and telemetry.

Actionability: high.

Mechanism independence: high. Lens shifting, combination, and constraint manipulation all produced it.

Verdict: survive.

### Candidate B - Material-Disposition Trigger

Novelty: moderate. It sharpens "may affect" into a threshold.

Scrutiny survival: survives. Strongest objection is that it may miss subtle old-route relevance. Candidate F covers the uncertainty case.

Fertility: high. It gives a crisp replacement for project-level vs bounded.

Actionability: high.

Mechanism independence: high. Sensemaking, inversion, and extrapolation converge on it.

Verdict: survive with Candidate F.

### Candidate C - Operation-Triggered Artifact

Novelty: low to moderate. It preserves the prior file-necessity finding but puts it on the cleaner trigger.

Scrutiny survival: survives. It fits Homegrown explicitness while avoiding no-op review files.

Fertility: medium. It implies canonical path and structure.

Actionability: high.

Mechanism independence: high. Combination, inversion, and constraint manipulation converge on it.

Verdict: survive.

### Candidate D - Context Preparation Section

Novelty: moderate.

Scrutiny survival: survives. It handles explicitness for skipped review without creating a separate file.

Fertility: high. It unifies freshness, route memory, and thin-context warnings.

Actionability: high.

Mechanism independence: medium. Combination and absence recognition produce it.

Verdict: survive.

### Candidate E - Review Routine Rename

Novelty: low.

Scrutiny survival: survives as optional. The behavior matters more than the filename.

Fertility: medium. Better naming lowers future confusion.

Actionability: medium due to reference churn.

Mechanism independence: low.

Verdict: refine. Treat as later cleanup, not core rule.

### Candidate F - Conservative Uncertainty Rule

Novelty: low.

Scrutiny survival: survives. It prevents the materiality threshold from becoming an excuse to skip hard reviews.

Fertility: medium. It improves automation safety.

Actionability: high.

Mechanism independence: medium. Extrapolation and risk framing produce it.

Verdict: survive as guardrail.

### Candidate G - Embedded Review In Navigation

Novelty: low.

Scrutiny survival: fails. It collapses review and Navigation into one artifact, which hides whether stale route memory shaped the map before being reviewed.

Fertility: low.

Actionability: medium.

Mechanism independence: low.

Verdict: kill.

## Assembly Check

The surviving assembly:

```text
Existing Freshness Preflight
  includes -> route-memory status classification

route_memory_status = review_needed
  triggers -> Route Memory Review

Route Memory Review
  writes -> route_memory_review.md

Navigation
  consumes -> route_memory_review.md when present
  records -> Context Preparation / route_memory_status in navigation.md
```

Emergent value:

- The model stays unified: Navigation always does the same intake classification.
- The trigger is natural: review depends on unresolved route-memory effect.
- The artifact is justified: it exists only when reconciliation actually creates current authority.
- The skipped case remains explicit: `navigation.md` records why no review ran.
- The guardrail prevents under-review when materiality is uncertain.

## Recommended Innovation

Use the combined model:

```text
Route-memory status is mandatory intake metadata.
Route Memory Review is optional dependency resolution.
route_memory_review.md is mandatory output of that dependency-resolution operation.
```

Suggested precise rule:

```text
During Navigation Freshness Preflight, classify route_memory_status.

Set route_memory_status to review_needed only when relevant old route memory has unresolved current disposition and stale or missing disposition could materially alter the new Navigation map.

If materiality is uncertain and stale resurrection or route amnesia is plausible, choose review_needed.

When review_needed, run Route Memory Review after current context is fresh enough and before Navigation writes navigation.md. The review writes route_memory_review.md.

When status is none_detected, not_relevant, review_consumed, or thin_skipped, do not generate route_memory_review.md. Record status and reason in Navigation's Context Preparation or telemetry.
```

## Mechanism Coverage Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Five mechanisms converged on the same core innovation: status classification inside intake plus artifact-producing review only for unresolved material route-memory effect.

Survivors tested: 7 / 7.

Failure modes observed: none. Premature evaluation avoided by generating all mechanisms first; survival bias checked by testing embedded-review and always-review contrarian paths.

Overall: PROCEED.
