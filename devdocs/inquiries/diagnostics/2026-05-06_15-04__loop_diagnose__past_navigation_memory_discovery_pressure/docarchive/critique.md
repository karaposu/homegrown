# Critique: Loop Diagnose - Past Navigation Memory Discovery Pressure

## User Input

`devdocs/inquiries/2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure/_branch.md`, with `sensemaking.md`, `decomposition.md`, and `innovation.md` as current loop inputs.

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Diagnostic fit | 25 | Explains the correction chain without claiming the prior loop should have specifically invented the index. |
| Repair-layer correctness | 20 | Targets the load-bearing missing interface, not only a downstream artifact choice. |
| False-absence safety | 15 | Prevents under-specified discovery from becoming `absent` and skipping review incorrectly. |
| Authority separation | 15 | Keeps discovery/search/index outputs separate from Route Memory Review's current route classifications. |
| Overcorrection control | 10 | Avoids broad indexes, duplicate mutable state, and global protocol rewrites unsupported by the evidence. |
| Actionability | 10 | Produces concrete candidates with evaluation gates. |
| Human clarity | 5 | Makes the discovery status understandable to the user and future runners. |

Dimension validation:

- These dimensions come from the stabilized Sensemaking model: source-discovery interface gap, candidate discovery versus current interpretation, index bridge versus overcorrection, and user need for explicitness.
- Authority separation and false-absence safety are critical because both are realistic failure paths in Navigation.
- Human clarity is lower-weighted but still present because the user correction was partly about understandability.

## Phase 1 - Fitness Landscape

### Viable Region

Viable candidates:

- define `PastNavigationMemoryFile Discovery` as a Navigation intake interface;
- include `present | absent | unknown` style discovery status;
- define deterministic active-tree search as baseline or fallback;
- allow a maintained index only with non-authority wording and validation/backfill;
- add scoped guards for trigger/routing findings.

### Dead Region

Dead candidates:

- require a maintained index as the invariant from this correction chain alone;
- index all Navigation-related file creations;
- store carry-forward, retire, ignore, or current route truth inside discovery;
- leave discovery semantics entirely to later implementation while proposing intake routing.

### Boundary Region

Boundary candidates:

- deterministic active-tree search as sole v1 mechanism: strong baseline, but may not satisfy explicit durable handoff if artifact growth increases.
- maintained index as optional accelerator: useful, but needs gate conditions.
- critique and CONCLUDE guards: useful when scoped to trigger/routing policy, too heavy if global.

### Unexplored Region

- Exact active-tree search command/patterns.
- Exact implementation file for discovery status.
- Empirical comparison of search-only versus maintained index in real Navigation runs.

These are implementation follow-ups, not blockers for this diagnosis.

## Phase 2 - Candidate Verdicts

### Candidate A - Discovery Interface Invariant

Prosecution:

This can become abstract advice if it does not name concrete required fields.

Defense:

It targets the actual failure layer. The prior loop made existence load-bearing. The invariant prevents any future trigger from saying "X exists" without saying how X is discovered.

Collision:

Defense wins if the invariant requires concrete outputs: method, status, confidence, fallback.

Verdict: **SURVIVE**.

Constructive output:

Every existence-dependent trigger must define discovery method, possible statuses, confidence/unknown behavior, and fallback.

### Candidate B - PastNavigationMemoryFile Discovery Status Vocabulary

Prosecution:

More statuses can become jargon and create needless bookkeeping.

Defense:

The prior model's binary present/absent shape is unsafe. `unknown` is essential when discovery has not run or index confidence is low.

Collision:

Defense wins with a compact status set.

Verdict: **SURVIVE**.

Constructive output:

Use a minimal set:

```text
present
absent
unknown
stale_index
search_backfilled
already_consumed
```

### Candidate C - Deterministic Active-Tree Discovery Search

Prosecution:

Search-only may recreate discovery friction and require every runner to remember patterns.

Defense:

Search is the validation substrate. Without it, index absence can become false absence. It also tests whether a maintained index is necessary.

Collision:

Defense wins as baseline/fallback, not necessarily as the only long-term mechanism.

Verdict: **SURVIVE**.

Constructive output:

Define active-tree search patterns and archive exclusions before making a maintained index mandatory.

### Candidate D - Maintained PastNavigationMemoryFile Index As Mandatory Repair

Prosecution:

The correction chain proves discovery was under-specified. It does not prove maintained index superiority. Making the index mandatory now risks creating stale duplicate state.

Defense:

Homegrown values explicit Markdown artifacts, and the later index inquiry showed the index is feasible and useful as a discovery registry.

Collision:

Defense proves the index is a plausible candidate, not the invariant. Prosecution wins against mandatory status.

Verdict: **REFINE**.

Constructive output:

Keep the index as an optional/hybrid implementation path with explicit gates: artifact volume, repeated discovery misses, or user choice to pay update cost for visible handoff.

### Candidate E - Hybrid Index/Search Escalation Policy

Prosecution:

Hybrid designs can be more complex than either search or index alone.

Defense:

This is the only candidate that respects both sides of the evidence: the later index was a reasonable bridge, but search/backfill is necessary to avoid false absence.

Collision:

Defense wins if the hybrid has a simple rule: search is validation substrate; index is accelerator/handoff.

Verdict: **SURVIVE**.

Constructive output:

Use search as baseline/fallback. Add or keep the index when it has a clear benefit and non-authority safeguards.

### Candidate F - Discovery/Review Authority Boundary Rule

Prosecution:

The boundary may seem redundant because Route Memory Review already owns interpretation.

Defense:

The corrected index inquiry's main risk was duplicate authority. Discovery must not store current route dispositions.

Collision:

Defense wins. This boundary is required for any index or search report.

Verdict: **SURVIVE**.

Constructive output:

Discovery outputs candidate paths, kind, method, and confidence. Route Memory Review outputs carry forward, retire, keep blocked, needs check, or ignore.

### Candidate G - Trigger-Discovery Critique Guard

Prosecution:

Adding a new critique dimension can create process friction if applied everywhere.

Defense:

The prior Critique missed exactly this question: how does the runner know the trigger condition exists?

Collision:

Boundary candidate. It survives when scoped to trigger/routing policy.

Verdict: **REFINE**.

Constructive output:

Apply only when a candidate proposes triggers, routing rules, mode selection, or intake behavior.

### Candidate H - CONCLUDE Secondary Interface Guard

Prosecution:

CONCLUDE cannot fix weak upstream reasoning by itself.

Defense:

The prior final finding proposed MUST patches that depended on an undefined interface. A final-stage guard can catch this before durable handoff.

Collision:

Defense wins as a backstop, not as the main fix.

Verdict: **REFINE**.

Constructive output:

If a finding proposes operational routing/intake behavior, it must define any load-bearing interfaces or mark them deferred.

### Candidate I - Broad Navigation Artifact Index

Prosecution:

This indexes too much. It would make route-memory review sift through generic Navigation-adjacent files and increase maintenance burden.

Defense:

It maximizes recall and gives a visible record of Navigation activity.

Collision:

Prosecution wins for this problem. Broad artifact inventory may be a separate future goal, but not a route-memory discovery repair.

Verdict: **KILL**.

Seed:

Run a separate active-artifact inventory inquiry if Homegrown needs onboarding or global artifact visibility.

### Candidate J - Leave Discovery To Later Implementation

Prosecution:

This repeats the prior failure. The finding already proposed operational intake behavior, so discovery cannot remain entirely implicit.

Defense:

The prior branch did not ask for implementation detail, and over-specifying too early can cause churn.

Collision:

Defense only supports deferring exact implementation, not leaving the interface undefined.

Verdict: **KILL**.

Seed:

If implementation is deferred, write "discovery interface deferred" explicitly and do not present source-present routing as complete.

## Phase 3.5 - Assembly Check

Assembly candidate:

```text
Discovery Interface Invariant
  + compact discovery status
  + deterministic active-tree search baseline
  + hybrid index/search escalation
  + discovery/review authority boundary
  + scoped trigger-discovery critique guard
  + scoped CONCLUDE secondary interface guard
```

Assembly prosecution:

The bundle could become heavy if every finding has to define search patterns, statuses, and guards.

Assembly defense:

The bundle is scoped to existence-dependent triggers and routing/intake behavior. It does not require every finding to create an index. It directly prevents false absence and premature maintained-state decisions.

Assembly verdict: **SURVIVE**.

Required scope constraints:

- Do not apply global index creation from this diagnosis alone.
- Do not add route dispositions to discovery output.
- Do not require full implementation detail in policy findings, but require explicit deferral if the interface is not defined.

## Phase 4 - Coverage And Convergence

### Coverage Map

| Requirement | Covered By | Status |
| --- | --- | --- |
| Diagnose prior gap without rejecting robust policy | A, assembly | covered |
| Prevent false source absence | B, C, E | covered |
| Avoid mandatory index overreach | D refined, E | covered |
| Preserve discovery/review authority boundary | F | covered |
| Catch future trigger-interface misses | G, H | covered |
| Reject broad Navigation artifact index | I killed | covered |
| Reject silent deferral | J killed | covered |

### Convergence

The landscape is stable. The survivors converge on one repair:

```text
existence-dependent triggers need a discovery interface
```

The maintained index remains a candidate implementation, not the invariant. No further innovation pass is needed for this diagnosis.

## Signal

**TERMINATE** with ranked survivors:

1. Discovery Interface Invariant.
2. PastNavigationMemoryFile Discovery Status Vocabulary.
3. Deterministic Active-Tree Discovery Search.
4. Hybrid Index/Search Escalation Policy.
5. Discovery/Review Authority Boundary Rule.
6. Scoped Trigger-Discovery Critique Guard.
7. Scoped CONCLUDE Secondary Interface Guard.

Refined:

- Maintained PastNavigationMemoryFile Index as mandatory repair -> keep as optional/hybrid implementation candidate.

Killed:

- Broad Navigation Artifact Index.
- Leave Discovery To Later Implementation.

## Convergence Telemetry

Dimension coverage: complete.

Adversarial strength: STRONG. The critique challenged the tempting mandatory-index conclusion and the tempting implementation-deferral conclusion.

Landscape stability: STABLE. All viable paths cluster around discovery-interface completeness plus fallback.

Clean SURVIVE exists: yes. Candidate A survives cleanly.

Failure modes observed:

- Wrong dimensions: not observed.
- Rubber-stamping: avoided by refining D/G/H and killing I/J.
- Nitpicking: avoided by preserving index as candidate rather than killing it outright.
- Dimension blindness: mitigated by explicit overcorrection and authority-separation dimensions.
- False convergence: low risk; remaining unknowns are empirical implementation choices.
- Evaluation drift: not observed.
- Self-reference collapse: mitigated by grounding in user correction and concrete archived inquiry evidence.

Overall: **PROCEED TO CONCLUDE**.
