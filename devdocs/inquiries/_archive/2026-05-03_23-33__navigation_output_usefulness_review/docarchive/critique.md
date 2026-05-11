# Critique: Navigation Output Usefulness Review

## User Input

Review `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`: how good it is, what is missing or lacking, and how useful it is.

## Phase 0 - Dimensions and Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Correctness | 5 | Accurately judges the Navigation output against the current Navigation contract and real project state. |
| Usefulness | 5 | Helps the user decide whether the output is worth relying on and what to do next. |
| Boundary Safety | 5 | Keeps Navigation, selection, materialization, and outcome review distinct. |
| Continuation Value | 5 | Improves cross-session route memory and current-state recovery. |
| Feasibility | 4 | Can be applied with small artifacts or edits, without new heavy infrastructure. |
| Anti-Staleness | 4 | Prevents old Navigation maps from becoming misleading authority. |
| Elegance | 3 | Adds the smallest structure that carries the needed load. |

Critical dimensions: Correctness, Usefulness, Boundary Safety, Continuation Value.

## Phase 1 - Fitness Landscape

### Viable Region

Candidates that preserve the comprehensive Navigation map while adding lightweight provenance, handoff, or reconciliation outside core enumeration.

### Boundary Region

Candidates that improve usability but could blur selection into Navigation if not carefully scoped.

### Dead Region

Candidates that make Navigation auto-select, shrink maps by hiding routes, or add heavy infrastructure before enough map evidence exists.

### Unexplored Region

Long-term graph/state-manager tooling after multiple maps accumulate. This is not needed for the current question.

## Phase 2 and 3 - Candidate Verdicts

### Candidate A: Navigation Map Provenance Rule

**Prosecution:** Provenance can become another verbose section. It may make maps longer without directly helping the user choose.

**Defense:** The current map's "Context Consumed" section is too coarse for later diagnosis. Exact read-set/freshness evidence is the difference between trusting a route snapshot and knowing how to challenge it.

**Collision:** Defense wins. Provenance is small and directly supports anti-staleness and future diagnosis. The risk is verbosity, so the rule should be compact.

**Verdict:** SURVIVE.

**Constructive output:** Future Navigation maps should include compact provenance: warm-up outputs, prior maps read, key current files/findings read, freshness cutoff, and known missing context.

### Candidate B: Compact Current-Move Handoff

**Prosecution:** This can secretly become selector output. If Navigation adds "strongest route," the user may treat enumeration as command.

**Defense:** The user burden remains high if every Navigation output is only a 13-route archive. A compact handoff can reduce operator friction while leaving selection explicit.

**Collision:** Both sides are strong. The candidate survives only if the handoff is explicitly separate from Navigation's authority and records selection state as `none` unless a human/selector chooses.

**Verdict:** REFINE.

**Refinement target:** Use a section like `Selection / Handoff State`, not `Recommended Next`. It may say `Selection state: none` and list high-value open/blocked routes without committing.

### Candidate C: Route-State Reconciliation Record

**Prosecution:** This may duplicate outcome review. It could create another feedback artifact and increase complexity.

**Defense:** Outcome review judges whether a used result worked. Route-state reconciliation updates the movement map after work happens. They overlap but are not identical. The stale install/package route demonstrates the need immediately.

**Collision:** Defense wins. The candidate addresses the exact lifecycle gap and prevents prior maps from becoming stale authority. It should be lightweight and may route to outcome review when the question is "did it work?"

**Verdict:** SURVIVE.

**Constructive output:** Add or define a small route-state reconciliation step after selected route use:

```text
Route acted on:
Action/result:
Routes now done:
Routes now stale/superseded:
Routes still blocked:
Newly opened routes:
Outcome review needed:
```

### Candidate D: Navigation Vocabulary Hygiene Rule

**Prosecution:** This is surface polish. It does not materially improve navigation intelligence.

**Defense:** Repeated user friction reduces adoption. The user explicitly objected to "dogfood," so continuing to output it damages fit and trust.

**Collision:** Defense wins, but the candidate is low load-bearing. It should be bundled with other Navigation guidance, not treated as a major protocol.

**Verdict:** SURVIVE as minor correction.

**Constructive output:** Replace "dogfood" with "first real use," "trial use," or "evidence-producing use."

### Candidate E: Selection-State Marker

**Prosecution:** A marker saying no selection was made may be redundant and add boilerplate.

**Defense:** The exact risk is boundary blur. A clear marker prevents future agents from treating route order as selection.

**Collision:** Defense wins for now because the system is young and route maps are about to become continuation memory. Boundary labels are cheap insurance.

**Verdict:** SURVIVE.

**Constructive output:** Add a short marker to future maps or handoffs:

```text
Selection state: none by Navigation.
Commitment authority: user, selector protocol, or artifact materialization request.
```

## Phase 3.5 - Assembly Check

### Assembly Candidate: Snapshot-to-State Navigation Lifecycle

Combine:

- provenance rule;
- selection-state/handoff marker;
- route-state reconciliation;
- outcome review only when after-use success/failure needs judgment;
- future warm-up reads old maps as evidence after v3.

**Prosecution:** This assembly adds more moving parts: map, handoff, reconciliation, outcome review. It risks creating feedback sprawl.

**Defense:** The moving parts correspond to different state transitions. Navigation maps possibilities. Selection marks commitment. Reconciliation updates route state after action. Outcome review judges reality after use. Collapsing them into one artifact is what creates confusion.

**Collision:** Defense wins if the assembly is implemented incrementally. Do not build a full state manager. Start with a small convention or section for post-use route-state reconciliation.

**Verdict:** SURVIVE as the ranked best answer.

## Phase 4 - Coverage and Convergence

### Coverage Map

- Artifact quality: covered.
- Practical usefulness: covered.
- Boundary safety: covered.
- Lifecycle/staleness: covered.
- User-friction vocabulary: covered.
- Heavy future tooling: considered and deferred.

### Verdict Summary

| Candidate | Verdict | Rank |
|---|---|---:|
| Snapshot-to-State Navigation Lifecycle assembly | SURVIVE | 1 |
| Route-State Reconciliation Record | SURVIVE | 2 |
| Navigation Map Provenance Rule | SURVIVE | 3 |
| Selection-State Marker | SURVIVE | 4 |
| Compact Current-Move Handoff | REFINE | 5 |
| Vocabulary Hygiene Rule | SURVIVE minor | 6 |

### Killed

- Auto-selection by Navigation.
- Dropping low/deferred/blocked routes to make maps shorter.
- Creating a route graph engine now.
- Rerunning warm-up to solve a lifecycle problem.

## Signal

TERMINATE. The original question is answered.

The Navigation output is good and useful. Its main missing capability is not more route fields; it is route-state lifecycle support after a route is selected or acted on.

## Convergence Telemetry

- **Dimension coverage:** COMPLETE. All critical dimensions evaluated.
- **Adversarial strength:** STRONG. Each survivor faced a concrete boundary or complexity objection.
- **Landscape stability:** STABLE. Candidates converged around route-state lifecycle rather than producing unrelated fixes.
- **Clean SURVIVE exists:** YES. Snapshot-to-State Navigation Lifecycle assembly.
- **Failure modes observed:** none. No rubber-stamping, no nitpicking, no self-reference collapse; external evidence included the installer route becoming acted-on/stale.

Overall: PROCEED.
