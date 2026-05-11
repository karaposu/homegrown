# Critique: Route Memory Review File Necessity

## User Input

Evaluate the candidate answers to whether Route Memory Review should generate a file, including benefit, path, structure, trigger, timing, and rationale.

## Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Explicitness fit | 5 | Matches Homegrown's artifact-first operational memory culture. |
| Anti-staleness | 5 | Prevents stale old routes from influencing Navigation invisibly. |
| Historical integrity | 5 | Does not mutate old Navigation snapshots. |
| Anti-bloat | 4 | Avoids meaningless artifact generation. |
| Automation readiness | 4 | Works for future auto Navigation and multi-session use. |
| Actionability | 4 | Defines owner, path, timing, and structure. |
| Coherence | 4 | Fits existing Navigation preflight, refresh, and context-intake architecture. |

## Fitness Landscape

### Viable Region

Artifact-mandatory when the review operation runs, with strict trigger policy.

### Boundary Region

Inline summaries inside the next Navigation map. Useful as secondary visibility, not as the authoritative review.

### Dead Region

Editing old maps, inline-only authoritative review, and generating review files for every Navigation run regardless of route-memory relevance.

### Unexplored Region

Potential later rename from `navigator-prior-map-overlay.md` to `navigator-route-memory-review.md`.

## Candidate Verdicts

### Candidate A - Mandatory Artifact On Operation

Prosecution: Could still create many files if old route memory is checked too often.

Defense: The candidate moves bloat control to the correct layer: trigger policy. It preserves explicitness and avoids invisible route-memory state.

Collision: Defense wins. The weakness is manageable by routing rules.

Verdict: SURVIVE.

### Candidate B - Inline Default, Saved On Durable Handoff

Prosecution: Conflicts with the user's explicit correction and creates chat-local operational state.

Defense: Reduces artifact count and is convenient for immediate same-session work.

Collision: Prosecution wins in this codebase. Convenience does not outweigh resumability and auditability.

Verdict: KILL.

Seed extracted: How can summaries remain lightweight while the authoritative review is saved? Possible answer: Navigation can include a short `Route Memory Used` section pointing to the review file.

### Candidate C - Always Generate For Every Navigation Run

Prosecution: Generates meaningless files for bounded local Navigation, no-prior-map runs, or cases where route memory was never consulted.

Defense: Maximizes explicitness.

Collision: Prosecution wins. Explicitness records real operations; it should not manufacture empty operations.

Verdict: KILL.

Seed extracted: Trigger policy must be explicit enough that skipping the review is itself justified by context classification.

### Candidate D - Store Review Only Inside New Navigation Map

Prosecution: The new map is downstream of the review; if the review only appears inside the map, the source context that shaped the map is not independently inspectable.

Defense: Keeps related route information together for the reader.

Collision: Both are true. It works as a summary, not as the authoritative artifact.

Verdict: REFINE.

Refinement: Add optional `Route Memory Used` summary in Navigation maps that cites `route_memory_review.md`.

### Candidate E - Navigation Context Folder Artifact

Prosecution: Adds another navigation-context artifact type.

Defense: The artifact type is exactly what the operation is: context preparation for Navigation. It does not pollute old maps or route maps.

Collision: Defense wins. This gives clean ownership and path semantics.

Verdict: SURVIVE.

## Assembly Verdict

The answer is Candidate A + Candidate E + refined Candidate D:

```text
When Route Memory Review runs, it writes:
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__route_memory_review_<slug>>/route_memory_review.md

Navigation then consumes that file.
The resulting navigation.md may include a short "Route Memory Used" pointer.
```

## Coverage Map

- Necessity: covered.
- Benefit: covered.
- Path: covered.
- Structure: covered in final finding.
- Timing: covered.
- Anti-bloat: covered through trigger policy.

## Signal

TERMINATE with ranked survivor. The question is answered.

## Convergence Telemetry

- Dimension coverage: all critical dimensions covered.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: yes.
- Failure modes observed: none.

**Overall: PROCEED** (clean survivor and stable landscape).
