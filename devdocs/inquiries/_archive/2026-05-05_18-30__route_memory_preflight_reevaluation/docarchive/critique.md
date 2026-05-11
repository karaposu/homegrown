# Critique: Route Memory Preflight Reevaluation

## User Input

`devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/_branch.md`

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Conceptual cleanliness | Critical | Preserves one Navigation workflow; removes unnatural big/bounded split; avoids operation proliferation. |
| Trigger correctness | Critical | Full review runs neither too often nor too rarely; trigger is operational and tied to route-memory effect. |
| Artifact fit | Critical | Meaningful operations produce Markdown artifacts; no-op checks do not create meaningless files. |
| Boundary integrity | Critical | Route Memory Review reconciles old route memory; Navigation enumerates current routes; old maps remain immutable. |
| Automation clarity | High | A future runner can apply the rule without fuzzy "big enough" judgment. |
| User alignment | High | Matches the user's explicitness culture and discomfort with unnatural separation. |
| Implementation tractability | Medium | Can be patched into current Navigation/Freshness/overlay docs without large redesign. |

Dimension validation: these axes come directly from the sensemaking anchors. If a candidate passed all dimensions, it would answer the user's question and produce an implementable rule.

## Phase 1 - Fitness Landscape

### Viable Region

Candidates that:

- make route-memory status part of normal Navigation intake;
- trigger full review only for unresolved material old-route disposition;
- write `route_memory_review.md` when full review runs;
- record skipped or consumed status visibly;
- keep review and Navigation as separate operations.

### Dead Region

Candidates that:

- use project-level vs bounded as the trigger;
- review every old map just because it exists;
- hide full review in chat or inside `navigation.md`;
- let old maps become current authority;
- generate no-op review artifacts for simple status checks.

### Boundary Region

Candidates that are directionally useful but need clearer wording:

- material-effect threshold, if not made operational enough;
- routine rename, if treated as required before behavior is fixed;
- conservative uncertainty rule, if it becomes "review everything."

### Unexplored Region

Implementation details of exact patch text and file renames are not fully explored here. They are lower-level follow-up work after the conceptual rule is accepted.

## Phase 2 - Candidate Evaluation

### Candidate A - Status-Only Preflight

**Prosecution:**
Calling this "Route-Memory Preflight" risks creating another named mandatory operation. That is exactly the smell the user objected to: Navigation seems to grow side rituals.

**Defense:**
The candidate does not require a separate routine. It makes route-memory status a field inside existing Freshness Preflight or context intake. That preserves one Navigation workflow while making old-route handling explicit.

**Collision:**
Defense survives only if wording avoids implying a standalone protocol. The clean form is "route-memory status classification during Navigation intake," not "run Route-Memory Preflight" as an independent command.

**Verdict: SURVIVE with wording constraint**

Constructive output: keep the behavior, but prefer "route-memory status classification" over a new routine name.

### Candidate B - Material-Disposition Trigger

**Prosecution:**
"Material effect" may still be subjective. A future runner might classify too narrowly, skip review, and resurrect stale routes or forget blocked ones.

**Defense:**
The candidate is still much more operational than "big Navigation" or "old maps may affect." It can be expressed as a decision test:

```text
old route-memory source exists
AND source is relevant to the target Navigation question
AND no current review was consumed
AND old route disposition cannot be cheaply classified
AND stale or missing disposition could materially change the map
```

The uncertainty guardrail sends plausible stale-route risk to `review_needed`.

**Collision:**
Defense survives if the trigger includes the explicit decision test plus uncertainty guardrail. Without those, prosecution wins.

**Verdict: SURVIVE with refinement**

Constructive output: define `review_needed` with the five-part test and add: "if unsure and stale resurrection or route amnesia is plausible, choose `review_needed`."

### Candidate C - Operation-Triggered Artifact

**Prosecution:**
If every full review writes a file, artifact volume could still grow. Future Navigation may need to reconcile review files in addition to old maps.

**Defense:**
The artifact is not generated for every run, only for full review. The review creates a current interpretation of historical route evidence. In Homegrown, that is meaningful enough to require a Markdown artifact. Bloat is controlled at the trigger.

**Collision:**
Defense wins. The candidate matches the user's explicitness requirement while avoiding no-op files.

**Verdict: SURVIVE**

Constructive output: state the rule as "no full review without file; no file without full review."

### Candidate D - Context Preparation Section

**Prosecution:**
Adding a new section to every `navigation.md` could become boilerplate and clutter maps.

**Defense:**
The section is small and solves the audit problem for skipped review. Without it, "no file was generated" is ambiguous: either no review was needed or the runner skipped work silently.

**Collision:**
Defense wins if the section stays compact and status-shaped. It should not contain full old-route reconciliation.

**Verdict: SURVIVE with size constraint**

Constructive output: include a compact status record, not a prose review:

```yaml
freshness_status:
route_memory_status:
route_memory_reason:
route_memory_review:
```

### Candidate E - Review Routine Rename

**Prosecution:**
Renaming `navigator-prior-map-overlay.md` can create churn and distract from the behavior correction. A rename alone does not fix triggers, output contract, or timing.

**Defense:**
The old name is conceptually weaker and keeps the "overlay" metaphor alive. Renaming later could reduce future confusion.

**Collision:**
Both are true. Naming is useful but not load-bearing for the current answer.

**Verdict: REFINE / DEFER**

Constructive output: patch behavior first. Treat rename as a later cleanup after references are stable.

### Candidate F - Conservative Uncertainty Rule

**Prosecution:**
If uncertainty always becomes `review_needed`, the rule degrades into reviewing too often.

**Defense:**
The guardrail is conditional. It applies only when stale resurrection or route amnesia is plausible. It does not apply to trivial uncertainty or clearly irrelevant old maps.

**Collision:**
Defense wins if the guardrail is scoped to route-memory safety risks, not generic uncertainty.

**Verdict: SURVIVE with scope constraint**

Constructive output: use the guardrail only for plausible stale-route or forgotten-route risk.

### Candidate G - Embedded Review In Navigation

**Prosecution:**
Embedding full review in `navigation.md` collapses context preparation and route enumeration. It makes it harder to see whether stale memory shaped the map before being reviewed.

**Defense:**
It reduces artifact count and keeps related information in one file.

**Collision:**
Prosecution wins. The artifact count benefit is weaker than the boundary violation. This model also conflicts with the user's preference for explicit files when operations matter.

**Verdict: KILL**

Seed from failure: a compact `Context Preparation` section can give one-file visibility without embedding full review.

## Phase 3.5 - Assembly Check

### Assembly Candidate - Intake Status Plus Artifact Review

Combined survivors:

- Candidate A: status classification inside intake.
- Candidate B: material-disposition trigger.
- Candidate C: operation-triggered artifact.
- Candidate D: compact context-preparation record.
- Candidate F: scoped uncertainty guardrail.

**Prosecution:**
The assembly still depends on judgment. "Could materially change the map" requires the runner to reason about route impact. A weak runner may under-review.

**Defense:**
No useful rule can remove all judgment because route memory is semantically tied to the target Navigation question. The assembly reduces judgment to a specific check and adds conservative escalation when stale-route risk is plausible. It is more automatable than "big vs bounded" and less wasteful than "old maps exist."

**Collision:**
Defense wins. The remaining judgment is essential domain judgment, not sloppy categorization.

**Verdict: SURVIVE**

Rank: 1.

## Phase 3 - Ranked Verdicts

1. **SURVIVE: Assembly - Intake Status Plus Artifact Review**
   - Best complete answer.
   - Use as final finding.

2. **SURVIVE: Candidate C - Operation-Triggered Artifact**
   - Strong artifact rule.
   - Needs Candidate B trigger to avoid bloat.

3. **SURVIVE with refinement: Candidate B - Material-Disposition Trigger**
   - Load-bearing trigger.
   - Must include explicit five-part test and uncertainty guardrail.

4. **SURVIVE with wording constraint: Candidate A - Status-Only Preflight**
   - Use as intake field, not standalone routine.

5. **SURVIVE with size constraint: Candidate D - Context Preparation Section**
   - Useful audit surface.
   - Keep compact.

6. **SURVIVE with scope constraint: Candidate F - Conservative Uncertainty Rule**
   - Useful safety guard.
   - Do not let it become review-by-default.

7. **REFINE / DEFER: Candidate E - Review Routine Rename**
   - Helpful later.
   - Not part of the core answer.

8. **KILL: Candidate G - Embedded Review In Navigation**
   - Boundary collapse.
   - Keep full review separate.

## Coverage Map

| Region | Covered? | Result |
| --- | --- | --- |
| Every-run classification | yes | Survives as intake status. |
| Full review trigger | yes | Survives with five-part test. |
| Artifact necessity | yes | Survives as operation output. |
| Skipped-review explicitness | yes | Survives as compact status record. |
| Naming cleanup | yes | Deferred. |
| Embedded review alternative | yes | Killed. |
| Review-everything alternative | yes | Rejected through trigger critique. |
| Bounded/project-level trigger | yes | Rejected by earlier sensemaking and critique dimensions. |

No major adjacent viable region remains unexplored for the conceptual question.

## Signal

TERMINATE.

The original question is answered. A clean survivor exists:

```text
Navigation should always classify route-memory status during normal context intake.

Full Route Memory Review should run only when status is review_needed.

review_needed means relevant old route memory has unresolved current disposition and stale or missing disposition could materially alter the new Navigation map.

If materiality is uncertain and stale resurrection or route amnesia is plausible, choose review_needed.

If full Route Memory Review runs, write route_memory_review.md.

If full review does not run, do not generate route_memory_review.md; record the status and reason in Navigation's Context Preparation or telemetry.
```

## Convergence Telemetry

Dimension coverage: complete. All critical dimensions were used.

Adversarial strength: strong. The main survivor was prosecuted on the hardest weakness: judgment-heavy materiality.

Landscape stability: stable. No new conceptual region emerged during candidate collision.

Clean SURVIVE exists: yes, the assembly candidate.

Failure modes observed: none. Not rubber-stamped: one candidate killed, one deferred, several refined. Not nitpicked: the main survivor was preserved with constraints.

Overall: PROCEED.
