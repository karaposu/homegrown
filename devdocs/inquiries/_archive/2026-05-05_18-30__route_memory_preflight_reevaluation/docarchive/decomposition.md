# Decomposition: Route Memory Preflight Reevaluation

## Input

`_branch.md`, `exploration.md`, and `sensemaking.md` from this inquiry.

## Step 1 - Perceive Coupling Topology

The whole problem is:

```text
How should Navigation handle old route memory without splitting into unnatural run types or creating meaningless artifacts?
```

### Elements

- Navigation invocation
- Freshness/context intake
- Route-memory status classification
- Old route-memory sources
- Current authority and freshness anchor
- Full Route Memory Review
- `route_memory_review.md`
- New `navigation.md`
- Navigation telemetry / context-preparation record

### Coupling Gradients

Strong coupling:

- Route-memory status classification and Freshness Preflight: status belongs in intake because intake decides whether context is safe enough to map from.
- Full Route Memory Review and `route_memory_review.md`: if review runs, the artifact is the operation's output contract.
- Review timing and Navigation correctness: review must happen before current route enumeration or stale memory can shape the map.

Moderate coupling:

- Navigation context intake and `navigator-prior-map-overlay.md`: intake routes to the review routine, but the routine owns reconciliation details.
- Route-memory status and Navigation telemetry: telemetry records the status, but the status decision can be made before the final map is formatted.

Weak coupling:

- Project-level vs bounded input and review trigger: input size may hint at likelihood, but it should not decide review.
- Artifact path naming and trigger semantics: path matters, but it does not decide when review is needed.

## Step 2 - Detect Boundaries Top-Down

Natural boundaries:

1. **Terminology and Layer Boundary**
   - Separates "preflight/status classification" from "review/reconciliation."

2. **Trigger Boundary**
   - Defines when status becomes `review_needed`.

3. **Artifact Boundary**
   - Defines when `route_memory_review.md` exists and what it means.

4. **Timing and Ownership Boundary**
   - Places the review in the workflow and assigns responsibility to the review routine rather than Navigation's route-map generator.

5. **Navigation Handoff Boundary**
   - Defines what the new `navigation.md` records after review is consumed or skipped.

These boundaries cut at low coupling. Each can be answered with a specific rule, and together they reconstruct the full operating model.

## Step 3 - Validate Boundaries Bottom-Up

### Atoms

- A route-memory source is present or absent.
- A route-memory source is relevant or irrelevant.
- A current review is provided or missing.
- Old route records need disposition or do not.
- A full review was run or was not.
- A review artifact path exists or does not.
- Navigation produces a route map.

### Validation

The atoms group naturally into the top-down pieces:

- present / relevant / current review / thin skip -> status classification;
- needs disposition -> trigger boundary;
- full review ran / artifact path -> artifact boundary;
- current context ready / before Navigation map -> timing boundary;
- route memory used / reason skipped -> handoff boundary.

Confidence: high. No atom is split across unrelated pieces. The only crossing interface is deliberate: status classification feeds the trigger, and review output feeds Navigation.

## Step 4 - Question Tree

### Q1. What should "Route-Memory Preflight" mean?

Verification criteria:

- [ ] Distinguishes status classification from full review.
- [ ] Does not introduce a standalone mandatory routine before every Navigation run.
- [ ] Fits inside existing Freshness Preflight or context intake.
- [ ] Preserves the user's "Navigation is Navigation" concern.

### Q2. When does route-memory status become `review_needed`?

Verification criteria:

- [ ] Excludes project-level vs bounded as the trigger.
- [ ] Excludes old-map presence as the trigger.
- [ ] Excludes relevance alone as the trigger.
- [ ] Defines a positive material-effect threshold.
- [ ] Handles bounded inputs that are themselves route-memory sources.

### Q3. When is `route_memory_review.md` generated?

Verification criteria:

- [ ] File is mandatory when full Route Memory Review runs.
- [ ] File is not generated when only cheap status classification happened.
- [ ] File is not generated for `none_detected`, `not_relevant`, `review_consumed`, or `thin_skipped`.
- [ ] The rule matches Homegrown explicit-artifact culture without creating no-op artifacts.

### Q4. Where does Route Memory Review sit in the Navigation workflow?

Verification criteria:

- [ ] Runs after current context is fresh enough to classify old route memory.
- [ ] Runs before Navigation writes the new route map.
- [ ] Does not mutate old Navigation maps.
- [ ] Does not enumerate new routes or select a route.
- [ ] Produces a handoff that Navigation can consume.

### Q5. What should Navigation record when review is skipped or consumed?

Verification criteria:

- [ ] Records `route_memory_status`.
- [ ] Records why no review ran when status is not `review_needed`.
- [ ] Records review path when status is `review_consumed`.
- [ ] Keeps the status visible in `navigation.md` or a context-preparation record.
- [ ] Does not force a separate review file for no-op cases.

## Step 5 - Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 terminology/layers | Q2 trigger | Meaning of classification vs review | one-way |
| Q2 trigger | Q3 artifact | Whether full review ran | one-way |
| Q2 trigger | Q4 workflow | Decision to stop and review or proceed | one-way |
| Q4 workflow | Q3 artifact | Owner, path, and timing of file generation | one-way |
| Q3 artifact | Q5 handoff | Artifact path and review output | one-way |
| Q5 handoff | Navigation map | Status, reason, consumed review pointer | one-way |

Hidden coupling to avoid:

- Letting artifact policy decide trigger policy.
- Letting "bounded/project-level" decide route-memory dependency.
- Letting Navigation map generation perform review decisions invisibly.

## Step 6 - Dependency Order

1. Define terminology/layers first.
2. Define the `review_needed` trigger second.
3. Define artifact generation from the operation trigger third.
4. Place review in workflow and assign ownership fourth.
5. Define Navigation recording/handoff fifth.

Parallel work possible after step 2:

- artifact structure can be refined in parallel with Navigation telemetry wording;
- routine naming can be discussed separately from trigger semantics.

Must wait:

- Do not decide artifact generation before the operation trigger is fixed.
- Do not patch Navigation handoff before deciding where status is recorded.

## Step 7 - Self-Evaluation

### Independence

Pass.

Each piece answers a distinct question. Q1 can be answered without knowing exact artifact structure. Q3 can be answered once Q2 states whether full review ran. Q5 can be answered from the status model and review artifact path.

### Completeness

Pass.

The pieces cover the original whole: why it feels messy, whether the answer is clean, when full review runs, whether a file is generated, where it sits in the workflow, and what Navigation records.

### Reassembly

Pass.

If Q1-Q5 are answered and interfaces are satisfied, the full rule reconstructs:

```text
Navigation does one intake classification.
Full review runs only for review_needed.
Full review writes route_memory_review.md.
Navigation consumes that review and records route-memory status in the new map.
```

### Tractability

Pass.

Each question is small enough for one focused answer or patch.

### Interface Clarity

Pass.

The main interface is `route_memory_status`. The second interface is the saved `route_memory_review.md` path when status is `review_consumed`.

### Balance

Pass.

Q2 is the hardest piece, but not overwhelmingly so. It is the load-bearing boundary and should receive the most critique.

### Confidence

High.

Top-down and bottom-up boundaries agree.

## Final Deliverable

### Coupling Map

```text
Freshness/context intake
  strongly contains -> route-memory status classification

route-memory status classification
  feeds -> trigger decision

trigger decision = review_needed
  starts -> Route Memory Review

Route Memory Review
  writes -> route_memory_review.md
  hands off -> reviewed old-route decisions

Navigation
  consumes -> current context + route_memory_status + optional review artifact
  writes -> navigation.md
```

### Question Tree

1. What should "Route-Memory Preflight" mean?
2. When does status become `review_needed`?
3. When is `route_memory_review.md` generated?
4. Where does Route Memory Review sit in the Navigation workflow?
5. What should Navigation record when review is skipped or consumed?

### Interface Map

Primary interface:

```text
route_memory_status = none_detected | not_relevant | review_needed | review_consumed | thin_skipped
```

Secondary interface:

```text
route_memory_review_path = devdocs/navigation_context/<timestamp>__route_memory_review_<slug>/route_memory_review.md
```

Only present when full review ran or a current review was already provided.

### Dependency Order

```text
terms/layers -> trigger -> artifact -> workflow ownership -> Navigation recording
```

### Self-Evaluation Summary

Independence: pass.
Completeness: pass.
Reassembly: pass.
