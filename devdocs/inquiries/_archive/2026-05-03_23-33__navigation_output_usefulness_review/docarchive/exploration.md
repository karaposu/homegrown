# Exploration: Navigation Output Usefulness Review

## Mode and Entry Point

- **Mode:** Artifact exploration.
- **Entry point:** Signal-first.
- **Primary artifact:** `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`.
- **Comparison contracts:** `homegrown/navigation/references/navigation.md`, `homegrown/navigation/SKILL.md`, `devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md`, and `devdocs/inquiries/2026-05-03_22-23__navigation_prior_map_read_after_warmup_v3/finding.md`.

The starting signal is the user's question: whether the first warmed-session Navigation output is actually good, what it lacks, and whether it is useful.

## Exploration Cycles

### Cycle 1: Scan the Navigation Output Shape

**Scanned:** full route map structure, sections, route fields, excluded section, and telemetry.

**Found:**

- The output records the user input and context consumed.
- It explicitly says it consumed warmed context and did not rerun v1/v2/v3.
- It contains 13 included route records across Content, Process, and Context.
- It includes active, open, blocked, deferred, and risky routes.
- Every route has Purpose, Movement, Status, Blocked by, Unlocks, WHY, Guidelines, and Continuation note.
- The Excluded section rejects structurally inapplicable types rather than blocked routes.
- Navigation Telemetry reports type coverage, category balance, guideline depth, route-state completeness, blocked-route visibility, excluded reasoning, and residual risk.

**Signals detected:**

- Strong contract compliance signal: required route fields are present.
- Strong continuation-memory signal: continuation notes are present and meaningful.
- Possible selection-bias signal: the first route is framed as "cleanest immediate closure," which can read like a recommendation rather than pure enumeration.
- Vocabulary problem signal: the map uses "Dogfood," a term the user explicitly disliked earlier.
- Freshness problem signal: the `REVISIT: Update install/package surface` route says install scripts only install `conclude.md` and `resume.md`, which became stale during this session after installer patches added `branch_inquiry.md`.

**Resolution decision:** zoom in on content quality, because format compliance alone does not answer usefulness.

**Probe:** inspected route quality against the route-map contract.

**Frontier state:** the outer artifact structure is stable; content judgment remains partially open.

**Confidence update:** structure confirmed; freshness and selection-boundary concerns scanned.

### Cycle 2: Probe Usefulness As Continuation Memory

**Scanned:** route purposes, movements, blockers, unlocks, guidelines, and continuation notes.

**Found:**

- The map is useful for continuation because a later session can reconstruct not only "what options existed," but also why each option existed and what would unblock it.
- The strongest practical value is that it surfaces blocked/non-immediate routes instead of losing them.
- The map preserves several route classes that would otherwise disappear from memory: deferred UI graph work, deferred `/intuit`, structural checker drift, outcome review, install/package surface, and current active-artifact index.
- The map cleanly separates "warm-up is sufficient for now" from "post-v3 handoff still needs materialization."

**Signals detected:**

- Good route-memory signal: continuation notes are not generic; they preserve future-state context.
- Good blockage signal: blocked routes are visible in the main map.
- Weak selector-boundary signal: several entries imply practical preference, especially the first DEVELOP route and the REFRAME route.
- Missing current selection state: the map does not mark whether the user actually selected any route after Navigation. That is correct for Navigation itself, but a later continuation overlay will need a selected-route/result field or separate outcome artifact.

**Resolution decision:** zoom out to compare with Navigation doctrine.

**Probe:** compared the output to the Navigation reference's failure modes and telemetry contract.

**Frontier state:** usefulness is high for route memory; decision handoff remains a gap outside Navigation.

**Confidence update:** route-memory usefulness confirmed; selector boundary inferred.

### Cycle 3: Jump Scan Against Adjacent Project Reality

**Scanned:** adjacent current project state: installer work during this session and prior warm-up findings.

**Found:**

- The map's route `REVISIT: Update install/package surface for active protocols` was accurate when produced, but part of it is now stale because `install_for_codex.sh` and `install_for_claude.sh` were patched to install `branch_inquiry.md`.
- The map did correctly identify that installer/package surface was a live risk. The route was useful: it pointed at a real defect that was fixed immediately after the Navigation run.
- The map did not know about the new installer changes because they happened after the map was produced. This is not a Navigation failure; it is expected route-map staleness after downstream use.
- The output says `Context Consumed` came from `devdocs/archaeology/project_summary.md` and "current session's prior project read." That is useful, but the exact warm-up artifacts/read set are not fully listed. This makes the freshness claim less auditable.

**Signals detected:**

- Strong evidence-of-usefulness signal: a route found a real packaging defect.
- Staleness-management signal: Navigation maps need post-use/current-state reconciliation, exactly as the post-v3 overlay finding predicted.
- Source-audit gap: the context-consumed section is too coarse for later diagnosis.

**Resolution decision:** stop exploration after convergence check because the artifact, contract, and adjacent reality have been scanned.

**Frontier state:** stable for this review.

**Confidence update:** high confidence on structural quality and usefulness; medium confidence on missing fields/gaps because more real Navigation runs are needed.

## Convergence Check

- **Frontier stability:** met. The main regions are mapped: structure, route quality, continuation memory, contract compliance, freshness, and selection boundary.
- **Declining discovery rate:** met. Later scans refined earlier signals rather than revealing wholly new classes of defect.
- **Bounded gaps:** met. Remaining gaps require future use evidence, not more reading of this single map.
- **Jump scan:** completed against installer/package reality and prior warm-up findings.

## Structural Map

### Territory Overview

The artifact has four important regions:

1. **Input and context consumed**: records the Navigation prompt, warmed-context claim, and freshness judgment.
2. **Route map**: 13 route records across Content, Process, and Context.
3. **Excluded section**: structurally inapplicable route types.
4. **Telemetry**: self-checks against the Navigation contract.

### Inventory

**Confirmed strengths:**

- Full route-record fields are present.
- Blocked routes remain in the main map.
- Excluded types are explained.
- Process and context routes are included, avoiding pure content/action bias.
- Continuation notes make the file reusable by a future warm-up.
- The map identified at least one real live issue: installer/package surface drift.

**Scanned weaknesses:**

- Some wording leaks selection/recommendation.
- "Dogfood" appears despite the user's stated dislike of the word.
- Context-consumed/read-set provenance is too coarse.
- Staleness is already visible after installer fixes.
- The map does not create a compact "next handoff" or "selected route" section; this may be outside Navigation, but it affects practical usability.

**Confirmed absences:**

- No route is missing the required route-state fields.
- No blocked route appears to be hidden only in Excluded.
- No fourth warm-up command is prematurely proposed as required.

### Signal Log

- **Contract-compliance signal:** probed and confirmed.
- **Continuation-memory signal:** probed and confirmed.
- **Selection-boundary signal:** probed and partially confirmed.
- **Freshness/staleness signal:** probed and confirmed after installer changes.
- **Source-audit signal:** probed and confirmed as a moderate gap.

### Confidence Map

- **Confirmed:** route field completeness, blocked-route visibility, excluded reasoning, broad usefulness as continuation memory.
- **Scanned:** route priority quality, confidence labels, category balance.
- **Inferred:** selection-boundary pressure from language like "cleanest immediate closure."
- **Unknown:** whether the map will still be easy to consume after 5-10 accumulated Navigation maps.
- **Confirmed absent:** severe structural contract failure.

### Frontier State

The artifact is good enough to use as a real continuation-memory test. The frontier is no longer "can Navigation produce the route map shape?" It is now "can the system reconcile route maps after use and preserve current movement state without the user manually restating everything?"

## Gaps and Recommendations

1. Add stronger read-set provenance to future Navigation maps.
2. Avoid words the user rejected, especially "dogfood"; use "trial use," "first real use," or "evidence-producing use."
3. Keep Navigation's output enumerative. If it highlights a recommended next route, label that as a separate selector/handoff judgment, not Navigation itself.
4. Add a post-use continuation update or outcome review after a selected route is acted on, because stale route state appears immediately once work happens.
5. Do not rerun warm-up solely because this map has gaps; the gaps are mostly handoff/outcome/reconciliation gaps, not context-intake gaps.

## Telemetry

- **Mode fit:** artifact exploration.
- **Cycles run:** 3.
- **Signals probed:** 5.
- **Convergence:** met.
- **Residual unknowns:** future accumulation behavior and selected-route reconciliation.

Overall: PROCEED with FLAG for source-audit and post-use reconciliation gaps.
