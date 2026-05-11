## User Input

Using the current warmed-up Homegrown context, produce a Navigation map for the next load-bearing development after
Navigation warm-up.

Include active, blocked, deferred, and risky-but-important routes.

The important part: Navigation should consume the warm-up outputs as session context. It should not redo v1/v2/v3
unless the warmed context is stale or missing.

## Context Consumed

This Navigation run consumed the warmed session context from `devdocs/archaeology/project_summary.md` and the current session's prior project read. It did not rerun warm-up v1/v2/v3.

Freshness judgment: sufficient for Navigation. The warmed context is current to the May 3, 2026 findings and current local files. The main missing context is post-use evidence: no repeated outcome-review records or selected-route results were available in the warmed brief.

## Navigation Map (13 items, 5 HIGH)

### Content [6]

■ DEVELOP: Materialize the post-v3 Navigation continuation handoff [HIGH] [active]
  Purpose: make Navigation warm-up usable as durable session memory instead of a one-off summary.
  Movement: warm-up files exist but lack handoff rule -> warm-up routine with README/index and post-v3 prior-map overlay.
  Status: active
  Blocked by: none
  Unlocks: reliable prior-map reading, cleaner Navigation sessions, later Navigation Observer report contract.
  WHY: the latest canonical finding says prior Navigation maps should be reconciled after warm-up v3, and the current warm-up folder lacks the visible handoff rule.
  Guidelines:
  - Add `homegrown/navigation/warmup/README.md` or equivalent index -> because the finding explicitly calls for a run-order/session-boundary artifact.
  - Put prior Navigation-map reading after v3 -> because old route maps are evidence, not authority, and need current movement traces before interpretation.
  - Keep the overlay small -> because the finding deferred a full `navigator-warmup4.md` until real use proves the need.
  - Include status vocabulary for old routes -> because Navigation needs to distinguish open, active, blocked, done, stale, and superseded routes.
  Continuation note: this is the cleanest immediate closure of the Navigation warm-up frontier without rerunning the whole archaeology routine.

■ DEVELOP: Dogfood `artifact_materialization.md` on one Navigation-relief artifact [HIGH] [open]
  Purpose: test whether Homegrown can turn a Navigation-selected decision into files under source authority, write scope, validation, and trace.
  Movement: specified materialization protocol -> first real Navigation-relief materialization trace.
  Status: open
  Blocked by: human selection of the dogfood artifact, or explicit selection from this map.
  Unlocks: outcome review after use, calibrated materialization mode boundaries, evidence for future selector design.
  WHY: recent findings frame the next load-bearing sequence as materialization-backed Navigation relief.
  Guidelines:
  - Use the materialization protocol itself, not direct editing -> because the point is to test the decision-to-files bridge.
  - Prefer a Navigation-relief target -> because the user's live burden is choosing where Homegrown should move next.
  - Keep the first run Compact or Standard based on actual risk -> because the protocol's main claim is risk-scaled lifecycle depth.
  - Write a trace and follow-up gate -> because without after-use evidence the materialization only proves file creation, not usefulness.
  Continuation note: if selected, this becomes the first evidence-producing route after warm-up.

○ INVESTIGATE FRONTIER: Choose the first Navigation-relief dogfood target [MEDIUM] [open]
  Purpose: decide whether the first materialization should be a warm-up handoff, Navigation Observer report, navigation memory convention, or install/protocol packaging fix.
  Movement: several plausible Navigation-relief artifacts -> one selected dogfood target.
  Status: open
  Blocked by: none
  Unlocks: DEVELOP route for artifact materialization, later outcome review.
  WHY: the warmed context names several plausible targets but does not yet contain a recorded selection.
  Guidelines:
  - Compare burden reduction, not theoretical elegance -> because the recent finding says the target should reduce the user's Navigation burden.
  - Prefer an artifact that will be used immediately -> because outcome review needs downstream use to produce evidence.
  - Avoid persistent observer runtime as first target -> because multiple findings defer it until report contracts prove value.
  Continuation note: this route is a selection-prep route; it should not become a long research inquiry unless selection remains unclear.

○ REFINE: Shrink `navigation_context_intake.md` into a wrapper [MEDIUM] [deferred]
  Purpose: remove duplicate authority between the detailed warm-up routine and the older parameterized intake protocol.
  Movement: full intake protocol -> tiny session-boundary and handoff wrapper.
  Status: deferred
  Blocked by: warm-up README/post-v3 handoff not yet materialized.
  Unlocks: cleaner Navigation entry point, lower confusion for future agents.
  WHY: May 3 findings say `navigation_context_intake.md` should no longer be the main detailed warm-up procedure if v1/v2/v3 work.
  Guidelines:
  - Do this after the warm-up folder has a stable index -> because the wrapper needs concrete target paths.
  - Preserve run/rerun invariants -> because those are the still-useful part of the protocol.
  - Remove detailed profile/stage duplication -> because duplicate procedural authority will drift.
  Continuation note: blocked until the handoff/index route lands.

· PURSUE SEED: Prototype graph/UI thinking-space view from Navigation maps [LOW] [deferred]
  Purpose: preserve the UI/graph innovation seed without letting it preempt route-map and outcome evidence.
  Movement: Markdown route maps -> graph-native thinking-space representation.
  Status: deferred
  Blocked by: too few real Navigation maps, selected moves, and outcome records.
  Unlocks: static graph exporter, later UI, possible selector training data.
  WHY: prior findings call the UI direction promising but explicitly downstream of real graph-shaped Navigation data.
  Guidelines:
  - Do not build a polished UI yet -> because visualizing immature data makes weak structure look stable.
  - Start with static graph data only after several maps exist -> because schema should follow actual route records.
  - Preserve blocked and stale route states -> because the graph is valuable only if it represents movement memory, not just nodes.
  Continuation note: keep as a deferred innovation seed; revive after several real route maps and outcome reviews.

· DEVELOP: Materialize `/intuit` as a predictive quality-sense skill [LOW] [deferred]
  Purpose: eventually add predictive regression checking, the missing "hunch before failure" capability.
  Movement: `/intuit` concept notes -> installable Homegrown skill and trial protocol.
  Status: deferred
  Blocked by: Navigation/materialization/outcome loop not yet dogfooded enough.
  Unlocks: Predictive RC trials, better calibration data, stronger autonomy ladder.
  WHY: `/intuit` is important in the long-term architecture but not the next load-bearing step after warm-up.
  Guidelines:
  - Keep `/intuit` behind outcome-learning work -> because predictive calibration needs prior expected-vs-observed records.
  - Start with a trial-gated skill, not runtime authority -> because false hunches are dangerous without calibration.
  - Reuse alignment dynamics vocabulary -> because `/intuit` is a signal-maturity and calibration mechanism.
  Continuation note: important but too early; do not let it distract from the builder-loop closure.

### Process [4]

■ UNBLOCK: Resolve the missing structural check gate [HIGH] [blocked]
  Purpose: decide whether MVL/MVL+ should regain a real structural gate or stop referencing a missing tool.
  Movement: runners reference absent `tools/structural_check.sh` -> either implemented checker or corrected runner docs.
  Status: blocked
  Blocked by: decision between implementing the checker, replacing it with protocol-level validation, or removing the references.
  Unlocks: safer MVL/MVL+ runs, clearer install behavior, fewer stale assumptions.
  WHY: MVL/MVL+ currently reference a file that is absent, while older loop design treats the checker as a gate.
  Guidelines:
  - Treat this as risky because it touches runner behavior -> because changing gates affects every future inquiry.
  - Use Standard or Full materialization -> because this is behavior-affecting even if the edit is Markdown.
  - Decide gate semantics before implementation -> because a fake checker would be worse than no checker.
  - Validate on root and nested branch inquiry paths -> because branch path support is a current contract.
  Continuation note: risky but important; do not patch casually as a cleanup.

○ REFRAME: Shift from "more warm-up" to "first evidence-producing builder-loop use" [MEDIUM] [open]
  Purpose: avoid endless context preparation and move into a use -> trace -> outcome cycle.
  Movement: Navigation warm-up frontier -> builder-loop dogfood frontier.
  Status: open
  Blocked by: none
  Unlocks: materialization dogfood, outcome review, selector evidence.
  WHY: the user asked for the next load-bearing development after warm-up, and the findings warn against adding more warm-up stages prematurely.
  Guidelines:
  - Treat warm-up as sufficient unless Navigation fails from missing context -> because the user explicitly asked not to redo v1/v2/v3.
  - Prefer a route that produces after-use evidence -> because Homegrown's self-improvement needs outcomes, not just better specs.
  - Keep Navigation as enumerator, not selector -> because commitment remains separate.
  Continuation note: this is the conceptual pivot for the next phase.

○ DIFFERENT APPROACH: Run a protocol-first Navigation Observer report before building observer runtime [MEDIUM] [open]
  Purpose: test separate movement-space attention without committing to persistent multi-session machinery.
  Movement: ordinary Navigation map -> Navigation Observer report with read set, movement map, blockers, recommendation status, and outcome hook.
  Status: open
  Blocked by: selecting observer report as first dogfood target.
  Unlocks: persistent observer decision, graph fields, navigation memory.
  WHY: multiple findings preserve the Navigation Observer idea but defer persistent runtime until report artifacts prove useful.
  Guidelines:
  - Keep the observer report artifact-first -> because artifact read sets are auditable and avoid transcript bloat.
  - Leave selection uncommitted -> because the observer should not silently choose in v1.
  - Include an outcome hook -> because observer usefulness must be judged after selected moves.
  Continuation note: strong candidate if the selected goal is reducing the user's cross-run Navigation burden.

· RE-RUN DEEPER: Targeted warm-up rerun only on missing-context failure [LOW] [deferred]
  Purpose: preserve the option to deepen context without violating the current warmed-context boundary.
  Movement: current warmed context -> targeted v1/v2/v3 rerun or post-v3 overlay refresh.
  Status: deferred
  Blocked by: evidence that current Navigation output is stale, under-contextualized, or missing critical context.
  Unlocks: corrected Navigation map when context quality fails.
  WHY: no current signal requires rerunning warm-up, but the protocol allows rerun on staleness or missing-context failure.
  Guidelines:
  - Do not rerun by default -> because the user explicitly set warmed context as the input.
  - If rerun is needed, make it targeted -> because full archaeology is expensive and can create recency churn.
  - Record what was missing -> because missing-context warnings improve future warm-up design.
  Continuation note: this route is a safety valve, not the next move.

### Context [3]

■ TEST: Outcome-review the first selected post-warm-up route after use [HIGH] [blocked]
  Purpose: turn the selected route from an idea into evidence about what actually helped.
  Movement: selected Navigation route -> used artifact or action -> outcome alignment record.
  Status: blocked
  Blocked by: no selected route has been used yet.
  Unlocks: route-quality calibration, future selector evidence, materialization protocol improvement.
  WHY: alignment dynamics says existence is not success; after-use evidence is what teaches the system.
  Guidelines:
  - Set the review gate before implementation -> because otherwise outcome review is easy to forget.
  - Compare expected burden reduction against observed use -> because the current goal is reducing developer Navigation load.
  - Route mismatch to Navigation, materialization repair, reflect, or loop diagnose as evidence supports -> because outcome review should not absorb other operations.
  - Record no-op if it worked -> because confirmations are also calibration data.
  Continuation note: this is blocked now but should become mandatory after the first selected route is used.

■ REVISIT: Update install/package surface for active protocols [HIGH] [risky]
  Purpose: make installed Homegrown match the current protocol set instead of only old conclude/resume support.
  Movement: install scripts lag active protocol layer -> install surface includes or deliberately excludes active protocols.
  Status: blocked
  Blocked by: deciding which protocols are installable support artifacts versus repo-local only.
  Unlocks: usable installed MVL/MVL+/Navigation workflows, fewer stale runtime assumptions.
  WHY: current install scripts install only `conclude.md` and `resume.md`, while active work depends on branch, materialization, outcome, loop diagnosis, and Navigation warm-up protocols.
  Guidelines:
  - Treat as risky packaging work -> because it changes what external installs load as operational authority.
  - First define the installable protocol inventory -> because blindly installing every protocol may expose unfinished or repo-local artifacts.
  - Check Claude and Codex differences separately -> because their install paths and invocation models differ.
  - Update README after scripts, not before -> because docs should describe the actual install surface.
  Continuation note: risky but important once local post-warm-up dogfood proves which protocols are live.

○ CONSOLIDATE: Create a current active-artifact index for Homegrown operators [MEDIUM] [deferred]
  Purpose: reduce stale-doc confusion by naming which files are current, dormant, historical, or superseded.
  Movement: scattered protocols/findings/notes -> compact active artifact inventory.
  Status: deferred
  Blocked by: first dogfood route should produce evidence before another summary/index artifact.
  Unlocks: easier onboarding, safer packaging, better future Navigation warm-up.
  WHY: the warmed summary found stale book/README/older notes and current protocol drift.
  Guidelines:
  - Do not duplicate findings -> because the index should point to authority, not become a second authority.
  - Include status labels -> because current vs stale is the core problem.
  - Generate from current tree where possible -> because manual indexes become stale quickly.
  Continuation note: useful after one or two post-warm-up changes, especially before install/package cleanup.

## Excluded (considered and rejected)

✗ TERMINATE — structurally inapplicable. The user asked for next load-bearing routes, and the warmed context has active blockers and unfinished handoffs.

✗ WIDEN — not useful as a standalone route right now. The scope is already broad enough: next load-bearing development after warm-up. Widening toward all autonomy work would dilute the immediate decision.

✗ MERGE — no completed branch set is currently ready for merge in the warmed context. Consolidation of findings is relevant, but branch-result merge is not the right type.

✗ DIAGNOSE — no correction-chain evidence is present for this specific Navigation run. Diagnostic work may become relevant if the selected post-warm-up route fails or if runner/checker drift causes a concrete failure.

## Navigation Telemetry

- Type coverage: 16/16 considered.
- Included types: DEVELOP, INVESTIGATE FRONTIER, REFINE, PURSUE SEED, UNBLOCK, REFRAME, DIFFERENT APPROACH, RE-RUN DEEPER, TEST, REVISIT, CONSOLIDATE.
- Excluded types: TERMINATE, WIDEN, MERGE, DIAGNOSE.
- Category balance: Content 6, Process 4, Context 3.
- Guideline depth: COMPLETE. Every included route has 3-4 guidelines with per-guideline WHY.
- Route-state completeness: COMPLETE. Every route has Purpose, Movement, Status, Blocked by, Unlocks, WHY, Guidelines, and Continuation note.
- Blocked-route visibility: COMPLETE. Blocked but meaningful routes are included in the main map.
- Excluded reasoning: COMPLETE. Each excluded type has a structural reason.
- Failure modes observed: no premature filtering; action bias checked by including process/context routes; scope fixation checked by adding the REFRAME route. Main residual risk is low outcome evidence because selected-route outcomes do not exist yet.

Overall: COMPLETE.
