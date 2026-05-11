# Decomposition: Early Stage Always Full Route Memory Review

## Input

`_branch.md`, `exploration.md`, and `sensemaking.md` from this inquiry.

## Step 1 - Perceive Coupling Topology

The whole problem:

```text
Should Homegrown temporarily lower the Route Memory Review trigger because it is early-stage and needs robustness/breakthroughs more than efficiency?
```

### Elements

- Early-stage discovery mode
- Stable optimized mode
- Route-memory source detection
- Full Route Memory Review
- `route_memory_review.md`
- Exceptions to review-by-default
- Anti-authority rules for old maps
- Monitoring and exit criteria
- Latest mature trigger: unresolved material effect

### Coupling Gradients

Strong coupling:

- Early-stage mode and trigger default: the phase directly changes burden of proof.
- Full Route Memory Review and `route_memory_review.md`: the artifact remains the output contract.
- Anti-authority rule and review-by-default: reviewing more often increases old-map influence risk, so safeguards are mandatory.
- Exit criteria and temporary policy: without exit criteria, robust mode becomes permanent.

Moderate coupling:

- Exceptions and route-memory source detection: exceptions depend on accurate source/status classification.
- Monitoring and future stable mode: monitoring determines when the system can safely return to narrower triggers.

Weak coupling:

- Exact filename rename and core policy: naming can change later without changing the phase policy.
- Token cost and artifact existence: cost matters, but it does not decide whether the review artifact is required when review runs.

## Step 2 - Detect Boundaries Top-Down

Natural pieces:

1. **Phase Definition**
   - What counts as early-stage discovery mode?

2. **Default Trigger**
   - What condition triggers full review during early-stage mode?

3. **Exception Set**
   - When can full review be skipped despite early-stage mode?

4. **Review Safeguards**
   - How does full review avoid making old maps authoritative?

5. **Artifact Contract**
   - What is generated when review runs?

6. **Exit And Monitoring**
   - When can the system leave robust mode?

These boundaries are low-coupling because each answers a different policy question.

## Step 3 - Validate Boundaries Bottom-Up

### Atoms

- A route-memory source exists.
- No route-memory source exists.
- A current review has already been consumed.
- The user accepts thin context.
- The Navigation run is durable or throwaway.
- An old route is stale, blocked, superseded, still open, or irrelevant.
- A review produces decisions or no-op results.
- Review cost blocks other work.

### Validation

The atoms group cleanly:

- source/no-source/already-consumed/thin/throwaway -> Exception Set and Default Trigger;
- stale/blocked/superseded/open/irrelevant -> Review Safeguards;
- decisions/no-op/cost -> Exit And Monitoring;
- review runs -> Artifact Contract.

Confidence: high. The boundaries align with the operational atoms.

## Step 4 - Question Tree

### Q1. What is early-stage discovery mode?

Verification criteria:

- [ ] Defines the current phase without vague "early forever" wording.
- [ ] Connects the phase to lack of calibration and breakthrough-seeking.
- [ ] Explains why this phase changes review threshold.

### Q2. What is the early-stage default trigger?

Verification criteria:

- [ ] States whether route-memory source presence is enough.
- [ ] Distinguishes source-present from no-source cases.
- [ ] Explains whether this refines or supersedes the latest `review_needed` trigger.

### Q3. What exceptions allow skipping full review?

Verification criteria:

- [ ] Includes no route-memory source.
- [ ] Includes already-consumed current review.
- [ ] Includes explicit thin context.
- [ ] Includes disposable local/non-durable runs only if reason is recorded.
- [ ] Prevents exceptions from becoming a broad skip mechanism.

### Q4. How does review-by-default avoid old-map authority drift?

Verification criteria:

- [ ] States old maps are evidence, not authority.
- [ ] Requires current evidence for carry-forward decisions.
- [ ] Treats retire, ignore, supersede, and keep-blocked as first-class outcomes.
- [ ] Prevents review from becoming Navigation.

### Q5. What artifact is produced?

Verification criteria:

- [ ] Confirms `route_memory_review.md` is mandatory when full review runs.
- [ ] Keeps no-source/non-review status in Navigation context prep, not a review file.
- [ ] Preserves the existing path convention under `devdocs/navigation_context/`.

### Q6. When can robust mode end?

Verification criteria:

- [ ] Defines observable monitoring signals.
- [ ] Gives conditions for moving back to the mature material-effect trigger.
- [ ] Avoids permanent token-heavy policy without evidence.

## Step 5 - Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 phase definition | Q2 default trigger | Whether early-stage override is active | one-way |
| Q2 default trigger | Q3 exceptions | Baseline rule that exceptions can override | one-way |
| Q2 default trigger | Q5 artifact contract | Whether full review ran | one-way |
| Q3 exceptions | Q5 artifact contract | Whether no review file is produced | one-way |
| Q4 safeguards | Q2 default trigger | Conditions that make review-by-default safe | feedback |
| Q4 safeguards | Q5 artifact contract | Required review structure and validation | one-way |
| Q5 artifact contract | Q6 monitoring | Review outcomes and no-op rates | one-way |
| Q6 monitoring | Q1 phase definition | Evidence to exit early-stage mode | feedback |

Hidden coupling to watch:

- If exceptions are too broad, the default trigger is fake.
- If safeguards are weak, review-by-default becomes old-map authority drift.
- If monitoring is absent, temporary robust mode becomes permanent.

## Step 6 - Dependency Order

1. Define early-stage discovery mode.
2. Define source-present review-by-default.
3. Define narrow exceptions.
4. Define anti-authority safeguards.
5. Reaffirm artifact contract.
6. Define monitoring and exit criteria.

Implementation can follow the same order. Do not patch exceptions before the default is clear.

## Step 7 - Self-Evaluation

### Independence

Pass.

Each question is answerable on its own after the prior dependency is fixed. Q4 safeguards can be reasoned independently from Q6 exit criteria.

### Completeness

Pass.

The pieces cover the whole policy: phase, trigger, exceptions, safeguards, artifact, and exit.

### Reassembly

Pass.

If all pieces are answered, the full policy reconstructs:

```text
During early-stage discovery mode, route-memory source presence triggers full Route Memory Review by default, except for explicit safe skips. Review writes route_memory_review.md, treats old maps as evidence, and is monitored until the system can return to the narrower stable trigger.
```

### Tractability

Pass.

Each piece can be turned into one subsection of a finding or one patch section later.

### Interface Clarity

Pass.

The main interfaces are phase status, source presence, exception status, review artifact path, and review outcome metrics.

### Balance

Pass.

The hard pieces are Q2 trigger and Q6 exit criteria. Neither dominates enough to require sub-decomposition.

### Confidence

High.

Top-down and bottom-up boundaries agree.

## Final Deliverable

### Coupling Map

```text
early-stage discovery mode
  changes -> review trigger burden

route-memory source present
  normally triggers -> full Route Memory Review

explicit exception
  can skip -> full review
  must record -> reason

full Route Memory Review
  writes -> route_memory_review.md
  must enforce -> old maps as evidence, not authority

review outcomes
  feed -> monitoring and exit criteria
```

### Question Tree

1. What is early-stage discovery mode?
2. What is the early-stage default trigger?
3. What exceptions allow skipping full review?
4. How does review-by-default avoid old-map authority drift?
5. What artifact is produced?
6. When can robust mode end?

### Interface Map

Primary interfaces:

```yaml
navigation_phase: early_stage_discovery | stable_optimized
route_memory_sources: none | present
route_memory_policy: robust_default | material_effect_trigger
route_memory_review: path | none
skip_reason: none | no_source | already_consumed | thin_accepted | disposable_local
```

### Dependency Order

```text
phase -> default trigger -> exceptions -> safeguards -> artifact -> monitoring/exit
```

### Self-Evaluation Summary

Independence: pass.

Completeness: pass.

Reassembly: pass.
