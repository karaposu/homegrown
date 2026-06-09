---
status: active
source_set: devdocs/inquiries/diagnostics/
---
# Finding: Diagnostics Fix Prioritization

## Question

After inspecting every `finding.md` under `devdocs/inquiries/diagnostics/`, which fixes should be prioritized as the most urgent, most reliability-improving, easiest high-effect, and broadest-impact system improvements?

The goal is a concrete priority set grounded in the diagnostic findings, not a generic improvement list.

At the time of this inquiry, the source set was the nine existing diagnostic findings under `devdocs/inquiries/diagnostics/`. This new finding is not counted as an input to itself.

## Finding Summary

- **Most urgent fix 1: Navigation Route-Memory Intake Package.** Navigation is the Homegrown operation that prepares route/context maps for future work. Its route-memory behavior currently depends on whether older Navigation memory exists, so the system needs explicit `PastNavigationMemoryFile Discovery`, a `route_memory_status`, deterministic active-tree search, and a source-dependency trigger before the next durable Navigation policy depends on those concepts.

- **Most urgent fix 2: Phase-Calibrated Early-Stage Route-Memory Policy.** Homegrown is currently early-stage and robustness-biased. Full Route Memory Review should be the early-stage default when a `PastNavigationMemoryFile` is found, but only after discovery and status are explicit. The policy also needs skip exceptions, anti-authority safeguards, and telemetry so the system can later optimize.

- **Most meaningful reliability fix: Navigation Route-Memory Intake Package.** This is the single fix most likely to prevent false source absence, stale route resurrection, hidden review skips, and unclear discovery/review authority in the current operational path.

- **Easiest high-effect fix 1: Archive-Use Check for `LOOP_DIAGNOSE`.** Correction-chain diagnosis should inspect `_branch.md`, `_state.md`, root discipline outputs, and `docarchive/*` before proposing embedded marks, new routine fields, or diagnostic registries.

- **Easiest high-effect fix 2: Registry-vs-Derivation plus Fallback-Promotion Check.** Before creating a maintained index or registry, Homegrown should ask whether the same state can be derived by deterministic search. If a fallback search is required, it should ask whether that fallback should be the primary mechanism.

- **Fix with the broadest touch and effect: Scoped Critique Premise/Dimension Validation Pack.** This is broader than Navigation. It improves the missed-catch stage across storage policy, diagnostics, registry/search decisions, route-memory triggers, phase policy, artifact boundaries, and durable naming.

## Finding

The diagnostics are not all saying "add more process." They are saying that Homegrown is turning process ideas into durable rules faster than the boundary interfaces behind those rules are being made explicit.

The highest-risk current example is Navigation route memory. Recent findings made `PastNavigationMemoryFile` existence, Route Memory Review, route-memory status, and early-stage robust review load-bearing. That means a future Navigation run could make a decision based on old Navigation memory being present, absent, stale, blocked, or already consumed. If the discovery method is undefined, the system can falsely claim no old memory exists or revive stale route instructions.

That is why the first priority is the **Navigation Route-Memory Intake Package**. It should define at least:

- `PastNavigationMemoryFile Discovery`: the deterministic method for finding old Navigation memory candidates in the active tree.
- `route_memory_status`: a compact status every Navigation run records before route mapping.
- `unknown`: a valid discovery/status outcome when the system has not completed the required search.
- `source_dependency`: whether old Navigation memory can materially affect the current Navigation question.
- `review_authority_boundary`: discovery finds candidates, Route Memory Review interprets them, and Navigation writes the current map.

The second urgent priority is the **Phase-Calibrated Early-Stage Route-Memory Policy**. The diagnostics show that a mature optimized trigger was applied too early. For the current project phase, robustness matters more than saving tokens. The policy should say that in early-stage durable Navigation, if a `PastNavigationMemoryFile` is discovered, full Route Memory Review runs by default unless a specific exception is recorded.

That second fix depends on the first. "Run full review when a PastNavigationMemoryFile exists" is only safe if the system knows how to discover that file and how to record `absent`, `present`, `already_consumed`, or `unknown`.

The most meaningful reliability fix is therefore the same as the most urgent first fix: **Navigation Route-Memory Intake Package**. It changes the active operational path, not just the documentation around it. It prevents the specific failures the recent diagnostics keep circling: hidden old route memory, stale route resurrection, false absence, and review decisions made without a visible source/status record.

The easiest high-effect fixes are smaller and narrower. The first is an **Archive-Use Check for `LOOP_DIAGNOSE`**, the protocol used to diagnose loop failures from correction chains. Before adding new embedded verdict marks or routine fields, that protocol should first read the existing `_state.md`, discipline outputs, and `docarchive/*`. This is cheap because the artifacts already exist; the fix mostly prevents inventing new state when existing archived evidence is enough.

The second easy fix is a **Registry-vs-Derivation plus Fallback-Promotion Check**. When a loop recommends a maintained index or registry, it should first test whether deterministic search can derive the same state. If the proposed "fallback" is reliable enough to recover the index, the loop must ask whether the fallback should become the primary mechanism. This directly addresses the PastNavigationMemoryFile index failure without banning indexes everywhere.

The fix with the broadest reach is the **Scoped Critique Premise/Dimension Validation Pack**. Critique is the stage that should catch a plausible answer that is optimized on the wrong axis. Many diagnostics show that the signal existed somewhere in the loop, but Critique did not prosecute the dimension that later failed.

That pack should be scoped by problem type. It should not add a giant checklist to every critique. For trigger, routing, index, artifact, protocol-term, and policy findings, Critique should select the relevant dimensions from:

- real dependency versus observable proxy;
- fallback as primary mechanism, not only mitigation;
- base-loop burden before adding new state;
- artifact reuse before creating new artifacts or marks;
- phase/calibration and breakthrough preservation;
- name-implied behavior and user-language fit;
- canonical layer versus provenance/history layer.

The Durable Term Boundary Check belongs inside that broader pack or as a CONCLUDE backstop. It matters because unclear names such as `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` repeatedly caused mechanism confusion. It should validate a durable term's type, plain meaning, user inference, "not this" boundary, lifecycle status, and explicitness form. It is important, but it is not the single broadest fix by itself because not every diagnostic failure was a naming failure.

CONCLUDE backstops are also useful, but downstream. They can prevent a weak finding from hardening unclear terms, side interfaces, or overstrong claims. They cannot replace upstream Sensemaking, Innovation, and Critique doing the right work.

## Next Actions

### MUST

- **What:** Draft and apply the Navigation Route-Memory Intake Package.
  **Who:** Navigation-related Homegrown docs and protocols.
  **Gate:** Before relying on `PastNavigationMemoryFile exists` or `route_memory_status` in another durable Navigation policy.
  **Why:** Prevents false absence, stale route resurrection, hidden old route memory, and unclear discovery/review authority.

- **What:** Add the Phase-Calibrated Early-Stage Route-Memory Policy after or alongside the intake package.
  **Who:** Navigation route-memory policy docs.
  **Gate:** When early-stage durable Navigation needs old Navigation memory handling.
  **Why:** Aligns current behavior with the project's robustness-first phase while preserving a later path to optimization.

- **What:** Add an Archive-Use Check to `homegrown/protocols/loop_diagnose.md`.
  **Who:** `LOOP_DIAGNOSE` protocol.
  **Gate:** Before any correction-chain diagnosis proposes embedded marks, new diagnostic fields, or new registries.
  **Why:** Reuses existing archived evidence before adding more state.

- **What:** Add the Registry-vs-Derivation plus Fallback-Promotion Check where index/registry proposals are evaluated.
  **Who:** Relevant loop guidance for Navigation/discovery/index decisions.
  **Gate:** Whenever a maintained index or registry is proposed.
  **Why:** Prevents duplicate mutable state when deterministic search is enough.

### COULD

- **What:** Add the Scoped Critique Premise/Dimension Validation Pack.
  **Who:** Critique guidance for problem types involving triggers, routing, indexes, artifacts, protocol terms, or policy defaults.
  **Gate:** Before the next broad protocol-hardening pass.
  **Why:** Improves the loop's ability to catch wrong-premise candidates before CONCLUDE makes them durable.

- **What:** Add Durable Term Boundary Check and CONCLUDE backstops as conditional subchecks.
  **Who:** Critique and CONCLUDE guidance.
  **Gate:** When a finding creates or renames a durable protocol term, durable artifact, or operational interface.
  **Why:** Prevents unclear vocabulary and side claims from becoming future mechanism confusion.

### DEFERRED

- **What:** Broad MVL+ reliability rewrite.
  **Gate:** Revive only after scoped fixes fail across multiple unrelated domains, not only Navigation route memory.
  **Why if revived:** A core rewrite may eventually be justified, but current evidence supports narrower patches first.

- **What:** Mandatory maintained `PastNavigationMemoryFile` index.
  **Gate:** Revive only if deterministic active-tree search becomes too slow, ambiguous, or unreliable in observed Navigation runs.
  **Why if revived:** A maintained index may help at scale, but the diagnostics showed that search should be validated before creating another mutable state source.

- **What:** `route_memory_review.md` for every skipped or no-op review.
  **Gate:** Revive only if compact `route_memory_status` records are repeatedly insufficient for audit or handoff.
  **Why if revived:** Full review artifacts are valuable when review runs; skipped cases need explicit status, not fake review output by default.

## Reasoning

The Navigation Route-Memory Intake Package survived because it is the only candidate that directly fixes the current operational hazard. The recent diagnostics repeatedly depend on old Navigation memory being found, judged, carried forward, retired, or ignored. Without explicit discovery and status, those decisions are not reliable.

The Phase-Calibrated Early-Stage Route-Memory Policy survived with a dependency. It is correct for the current robustness-first phase, but it becomes unsafe if it runs before discovery and status are materialized. The sequence matters: first make the source interface explicit, then make the early-stage default robust.

The Archive-Use Check survived as an easy high-effect fix because it has a narrow trigger and low blast radius. It addresses the diagnostic that found existing archived discipline outputs were available but not used before new embedded marks were considered.

The Registry-vs-Derivation plus Fallback-Promotion Check survived as an easy high-effect fix because it prevents a repeated class of overcorrection: creating a maintained index before proving that deterministic search cannot do the job. It is narrow enough to add quickly and broad enough to help beyond this one index debate.

The Scoped Critique Premise/Dimension Validation Pack survived as the broadest-impact fix because many failures were not caused by missing data. They were caused by Critique accepting a plausible candidate while missing the actual dimension that mattered. This affects storage policy, diagnostic workflow, registry/search decisions, Navigation route-memory policy, phase calibration, artifact boundaries, and naming.

The Durable Term Boundary Check survived as a component, not as the broadest standalone fix. It is clearly needed for names and durable protocol terms, but the diagnostics also show failures in phase policy, archive reuse, fallback promotion, and proxy triggers.

The Operation Boundary Package survived as a component. Status-versus-review, operation-output contracts, and bloat-control layer checks are real, but they overlap with the Navigation intake package and the broader Critique pack.

The CONCLUDE Backstop Package was refined, not promoted to top priority. CONCLUDE can catch weak durable wording, undefined side interfaces, and overstatement, but it is downstream. It should not be treated as the main reliability fix when the upstream loop is choosing the wrong premise.

The broad MVL+ reliability rewrite was killed as a current action and deferred. The diagnostics show recurring issues, but they also warn against broad core changes from narrow correction chains. Scoped fixes give better evidence before changing the core loop.

Mandatory maintained indexes were rejected as a default. A maintained index can be useful later, but a registry should not be created before deterministic search and fallback-as-primary have been tested.

Fake or no-op `route_memory_review.md` files were rejected as a default. Homegrown values explicit Markdown artifacts for meaningful operations, but skipped review is better recorded as route-memory status unless a real review actually ran.

## Open Questions

### Monitoring

After the next three durable Navigation runs, check whether every run recorded `route_memory_status`, the discovery method used, whether full Route Memory Review ran, and why it ran or skipped.

After the next three `LOOP_DIAGNOSE` uses, check whether archive-use happened before new state fields or marks were proposed.

### Refinement Triggers

Reopen the maintained index decision if deterministic active-tree search becomes measurably slow, misses expected candidates, or creates ambiguous candidate sets in real Navigation runs.

Reopen broad MVL+ core hardening if the same premise/dimension failures continue after the scoped Critique pack is applied across at least three unrelated domains.

Reopen CONCLUDE backstop scope if findings keep hardening unclear durable terms after the Durable Term Boundary Check exists.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
if you inspect all finding.md inside /Users/ns/Desktop/projects/native/devdocs/inquiries/diagnostics/ folders 

and tell me 

The most urgent 2 fixes we need 

The most meaningful fix which will make system a lot reliable

The most easy 2 fixes to have better effect on system


THe fix which will touch most and have effect most
```

</details>
