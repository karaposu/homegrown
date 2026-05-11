# Sensemaking: Route Memory Preflight Reevaluation

## User Input

`devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/_branch.md`

## SV1 - Baseline Understanding

The prior answer is directionally better than the old "project-level vs bounded" split, but it still feels messy because it introduces "cheap Route-Memory Preflight" and "Full Route Memory Review" without making the boundary between them precise enough.

Initial model:

```text
Every Navigation run checks route memory.
Only some runs reconcile old route memory.
If reconciliation happens, write route_memory_review.md.
```

The ambiguous part is what "checks" and "reconcile" mean operationally.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation should remain one discipline. It should not behave differently just because a run is "big" or "bounded."
- Old `navigation.md` files are historical snapshots and should not be edited as current truth.
- Navigation's job is forward route enumeration, not hidden old-route reconciliation.
- Homegrown values explicit Markdown artifacts for meaningful operations.
- Artifact bloat should be controlled by routing, not by hiding meaningful operations in chat.
- The current Navigation skill already has an every-run Freshness Preflight.

### Key Insights

- "Route-Memory Preflight" is clean only if it means classification, not a new always-run routine.
- "Full Route Memory Review" is clean only if it means actual disposition decisions about old route records.
- The trigger cannot be route-map existence. Existence is evidence, not dependency.
- The trigger cannot be project size. Size predicts likelihood, not structural need.
- The strongest trigger is material unresolved effect: old route memory could materially change the new map and cannot be safely classified without review.

### Structural Points

There are four different layers:

1. Freshness/context intake: is the current input authoritative enough?
2. Route-memory classification: does relevant old route memory exist, and what status does it have?
3. Route-memory reconciliation: what should happen to old route records now?
4. Navigation map generation: what are the current possible next directions?

The prior answer blurred layers 2 and 3.

### Foundational Principles

- A check can be mandatory without being an artifact-producing operation.
- A meaningful operation that creates current authority should leave an artifact in this codebase.
- Historical evidence should be separated from current interpretation.
- Navigation should consume reviewed route memory, not produce hidden review decisions while mapping routes.

### Meaning-Nodes

- Route memory
- Route-memory status
- Current interpretation
- Material effect
- Explicit handoff
- Stale route resurrection
- Route amnesia

## SV2 - Anchor-Informed Understanding

The clean question is no longer "should every Navigation run perform Route Memory Review?" It is:

```text
Which part of route-memory handling is mandatory intake classification, and which part is a separate artifact-producing review operation?
```

This reframes the user's smell. The unnatural part is not that some Navigation runs need extra context work. The unnatural part is naming that extra work in a way that sounds like a second kind of Navigation, or triggering it with vague terms like "old maps may affect the map."

## Phase 2 - Perspective Checking

### Technical / Logical

The clean logical model is a state machine:

```text
route_memory_status:
  none_detected
  not_relevant
  review_consumed
  review_needed
  thin_skipped
```

Only `review_needed` routes to full Route Memory Review.

New anchor: status classification is cheap because it decides whether review is needed; it does not classify individual old routes.

### Human / User

The user's discomfort is about conceptual hygiene. "Navigation is Navigation" means the command should not ask the user to reason about a fuzzy distinction like "is this big enough for memory review?"

New anchor: the user should see one Navigation workflow with explicit context status, not a hidden fork between local and project modes.

### Strategic / Long-Term

If every old map triggers full review, the project accumulates low-value artifacts and future sessions must review the reviews. If route memory is ignored, old blockers, supersessions, and killed ideas can be lost.

New anchor: the system needs a low-cost audit trail for skipped review and a high-quality artifact for actual reconciliation.

### Risk / Failure

Failure risks:

- stale route resurrection: old routes reappear as active;
- route amnesia: blocked or deferred routes disappear;
- artifact bloat: no-op reviews accumulate;
- Navigation collapse: review becomes a second Navigation map;
- preflight sprawl: every intake concern gets a new named subprotocol.

New anchor: the trigger must be narrow enough to prevent bloat and broad enough to catch stale-route risk.

### Resource / Feasibility

Adding a route-memory status to existing Freshness Preflight is feasible and cheap. Running full review requires reading old maps, current authorities, and writing a structured artifact. That is more expensive and should be justified.

New anchor: cost difference supports two layers, but only if the cheap layer is genuinely cheap.

### Definitional / Consistency

Navigation is defined as forward-looking enumeration. Route Memory Review is backward/current reconciliation. They are compatible only if Route Memory Review produces context for Navigation, not routes instead of Navigation.

New anchor: Route Memory Review belongs before Navigation map generation, after current context is fresh enough.

## SV3 - Multi-Perspective Understanding

The model stabilizes around a layered intake:

```text
Navigation invocation
  -> Freshness Preflight, including route-memory status classification
  -> if review_needed: Route Memory Review writes route_memory_review.md
  -> Navigation consumes current context plus review artifact
  -> Navigation writes navigation.md
```

The important shift from SV1 is that "Route-Memory Preflight" should not be understood as a standalone operation. It is a small classification inside the already-mandatory Navigation context intake. "Full Route Memory Review" is the separate operation.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does every Navigation run perform Route-Memory Preflight?

**Strongest counter-interpretation:**
No. Calling it Route-Memory Preflight makes it sound like every Navigation run has another protocol step, which repeats the same over-structuring problem the user is worried about.

**Why the counter-interpretation fails (structural grounds):**
Every Navigation run already needs context intake. Route memory can affect whether context is safe to use. A status classification inside intake does not add a separate operation; it fills a required safety field. The counter only succeeds if "preflight" means a standalone review routine, which should be rejected.

**Confidence:** HIGH

**Resolution:**
Every Navigation run should classify route-memory status as part of Freshness Preflight or context intake. It should not always run a separate Route-Memory Preflight routine.

**What is now fixed?**
The mandatory part is status classification, not review.

**What is no longer allowed?**
Treating "every run has preflight" as "every run reads old maps deeply" is excluded.

**What now depends on this choice?**
Navigation output or telemetry needs a stable place to record route-memory status.

**What changed in the conceptual model?**
The model becomes layered instead of forked.

### Ambiguity: What triggers full Route Memory Review?

**Strongest counter-interpretation:**
Any relevant old Navigation map should trigger full review, because Homegrown values explicitness and stale route resurrection is dangerous.

**Why the counter-interpretation fails (structural grounds):**
Relevance alone does not create a disposition problem. A route-memory source can be present and obviously irrelevant, already reviewed, or fully superseded by a current finding. Full review is only needed when old route records require current classification before Navigation can safely enumerate routes. Otherwise the review would produce no new authority.

**Confidence:** HIGH

**Resolution:**
Full Route Memory Review is triggered by an unresolved, material route-memory effect:

```text
Relevant old route memory exists, and Navigation cannot safely carry it forward, retire it, keep it blocked, ignore it, or mark it already consumed without a current review.
```

**What is now fixed?**
The trigger is unresolved material effect, not size, not old-map presence, and not relevance alone.

**What is no longer allowed?**
Running full review just because prior maps exist is excluded.

**What now depends on this choice?**
The status `review_needed` must mean "needs current disposition," not "old maps exist."

**What changed in the conceptual model?**
Route Memory Review becomes a dependency-resolution operation.

### Ambiguity: Should `route_memory_review.md` be generated?

**Strongest counter-interpretation:**
Only save it when the result must survive beyond the current chat, because otherwise the artifact stream grows.

**Why the counter-interpretation fails (structural grounds):**
If full Route Memory Review runs, it creates a current interpretation of historical route evidence. That interpretation can affect the next `navigation.md`. In this codebase, meaningful interpretation changes should be citable and inspectable. Bloat is controlled by not running review unless it is needed, not by making review invisible.

**Confidence:** HIGH

**Resolution:**
If full Route Memory Review runs, it writes `route_memory_review.md`.

**What is now fixed?**
The artifact is mandatory for the review operation.

**What is no longer allowed?**
Inline-only full review is excluded unless the user explicitly asks for a nonstandard thin/no-file path.

**What now depends on this choice?**
The review routine needs a canonical path and structure.

**What changed in the conceptual model?**
The file is not storage convenience. It is the operation's output contract.

### Ambiguity: Is project-level vs bounded ever useful?

**Strongest counter-interpretation:**
Yes. Project-level runs are the only ones likely to need old project maps, so the distinction is practical.

**Why the counter-interpretation fails (structural grounds):**
A bounded input can itself be route memory, such as an old `navigation.md` or inquiry folder containing a previous map. A project-level run can have no relevant old maps. Size predicts probability but cannot decide dependency.

**Confidence:** HIGH

**Resolution:**
Project-level vs bounded may be a routing hint for context freshness, but not the trigger for Route Memory Review.

**What is now fixed?**
Route-memory handling follows source dependency, not map size.

**What is no longer allowed?**
Skipping route-memory classification for bounded inputs is excluded.

**What now depends on this choice?**
Navigation context intake should be patched away from bounded/project-only route-memory language.

**What changed in the conceptual model?**
Navigation remains one workflow across input scales.

## SV4 - Clarified Understanding

The clean model is:

```text
Every Navigation run records route-memory status.
Only status = review_needed runs full Route Memory Review.
Full Route Memory Review writes route_memory_review.md.
Navigation consumes the review and then writes navigation.md.
```

What is no longer viable:

- full review for every Navigation run;
- full review only for project-level Navigation;
- saving review only when durable handoff matters;
- treating old Navigation maps as current authority;
- doing route-memory reconciliation invisibly inside Navigation map generation.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Mandatory every-run action: route-memory status classification.
- Optional operation: full Route Memory Review.
- Artifact rule: full review writes `route_memory_review.md`.
- Trigger axis: unresolved material old-route effect.
- Timing: after current context is fresh enough, before current Navigation map generation.

### Eliminated Options

- Project-level vs bounded as the trigger.
- Old-map existence as the trigger.
- Inline-only full review as the default.
- Editing old `navigation.md` maps.
- Generating a no-op review file when no review operation ran.

### Viable Paths

1. Patch Navigation Freshness Preflight to include route-memory status classification.
2. Patch or rename `navigator-prior-map-overlay.md` into a Route Memory Review routine.
3. Define `review_needed` with material-effect language.
4. Define `route_memory_review.md` as mandatory output only for full review.
5. Add a small `Route Memory Used` or `Context Preparation` section to `navigation.md` when a review is consumed or skipped.

## SV5 - Constrained Understanding

The answer should not say "Navigation sometimes does Route Memory Review because the run is big." It should say:

```text
Navigation always performs the same intake classification.
The classification includes route-memory status.
If old route memory creates an unresolved material effect on the current route map, Navigation must stop and run Route Memory Review first.
That review writes route_memory_review.md.
Then Navigation consumes that artifact and produces navigation.md.
```

This preserves the user's "Navigation is Navigation" intuition. The workflow is unified; only the context dependency changes.

## Phase 5 - Conceptual Stabilization

### Stable Interpretation

The previous answer is partly correct but not clean enough.

Correct:

- replacing "project-level vs bounded" with route-memory dependency;
- keeping full review before Navigation map generation;
- writing `route_memory_review.md` when full review runs;
- using statuses such as `none_detected`, `not_relevant`, `review_needed`, `review_consumed`, and `thin_skipped`.

Not clean enough:

- "Route-Memory Preflight" sounds like a separate operation when it should be a context-intake subcheck.
- "old maps may affect the new map" is too vague.
- the answer does not distinguish route-memory detection from route-memory disposition.
- it risks adding another named step instead of clarifying the existing Freshness Preflight.

### Stable Action Framework

Use this rule:

```text
Every Navigation run must record route_memory_status during context intake.

Set status to review_needed only when old route memory is both relevant to the target Navigation question and unresolved enough that Navigation could produce a wrong or materially different map without current route disposition.

When status is review_needed, run Route Memory Review before Navigation map generation and write route_memory_review.md.

When status is none_detected, not_relevant, review_consumed, or thin_skipped, do not generate route_memory_review.md; record the status and reason in the Navigation output or context-preparation record.
```

## SV6 - Stabilized Model

The clean answer is a layered model:

```text
Navigation intake always asks:
  "What is the route-memory status for this run?"

Only one answer, review_needed, starts Route Memory Review.

Route Memory Review asks:
  "What should current Navigation do with old route memory?"

If that operation runs, it writes route_memory_review.md.

Navigation then asks:
  "Given current context and reviewed route memory, what are all possible next routes?"
```

Difference from SV1:

SV1 treated "cheap preflight" and "full review" as two named stages whose boundary was still fuzzy. SV6 makes the cheap part a status classification inside normal Navigation intake and makes the full part a separate artifact-producing reconciliation operation triggered only by unresolved material route-memory effect.

## Telemetry

Perspective saturation: reached. Technical, user, strategic, risk, feasibility, and definitional perspectives converged on the same layered boundary.

Ambiguity resolution ratio: high. Main ambiguities resolved; implementation wording remains for later disciplines.

SV delta: meaningful. The model shifted from "two-stage preflight/review" to "intake classification plus review operation."

Anchor diversity: good. Anchors include constraints, principles, structural boundaries, risk signals, and meaning-nodes.
