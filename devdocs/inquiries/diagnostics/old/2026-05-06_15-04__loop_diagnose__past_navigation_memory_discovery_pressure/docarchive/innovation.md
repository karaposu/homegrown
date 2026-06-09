# Innovation: Loop Diagnose - Past Navigation Memory Discovery Pressure

## User Input

`devdocs/inquiries/2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure/_branch.md`

## Seed

Seed type: gap + correction-chain dissatisfaction.

The gap:

```text
The prior robust-mode policy made PastNavigationMemoryFile existence decisive,
but did not define how existence is discovered or how uncertainty is handled.
```

The valuation:

The user wants robust, explicit Homegrown mechanisms, but the diagnosis must avoid converting every gap into a maintained Markdown index without proving that the index is the right layer.

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- View the issue as an implementation detail.
- Output: leave discovery to Navigation context intake implementation.

Focused variation:

- View the issue as a trigger-interface problem.
- Output: any policy trigger that depends on artifact existence must define discovery method, confidence state, and fallback.

Contrarian variation:

- View the index as a UX artifact rather than a mechanism.
- Output: the index may be useful because it gives the user a visible answer to "what old Navigation memory exists," even if search could find the files.

Surviving output:

The load-bearing repair is trigger-interface completeness. UX-visible artifacts are candidates under that repair, not the repair itself.

### 2. Combination

Generic variation:

- Combine source-present robust mode with explicit discovery status.
- Output: `past_navigation_memory_discovery_status: present | absent | unknown`.

Focused variation:

- Combine deterministic search with optional index.
- Output: active-tree search is the validation substrate; a maintained index is a cache/discovery accelerator.

Contrarian variation:

- Combine index with route dispositions.
- Output: one table that says whether each route is current, stale, retired, or ignored.

Surviving output:

Hybrid search/index survives as a candidate. Route dispositions in discovery die because they duplicate Route Memory Review.

### 3. Inversion

Generic variation:

- Invert "the runner knows whether source exists."
- Output: default to `unknown` until discovery is performed and recorded.

Focused variation:

- Invert "index absence means no memory file."
- Output: index absence means `unknown` or `needs_search`, not `absent`, unless validation was performed.

Contrarian variation:

- Invert "discovery is before review."
- Output: make Route Memory Review discover sources while reviewing.

Surviving output:

`unknown` status and search fallback survive. Review-only discovery fails as the only mechanism because it does not help decide whether to run review in the first place.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: no maintained discovery artifact until deterministic search baseline is tested.
- Output: define search patterns before deciding index.

Focused variation:

- Add constraint: any index must be non-authoritative and must exclude current route dispositions.
- Output: index can list candidates only.

Contrarian variation:

- Remove constraint: index every Navigation-related file for maximum recall.
- Output: broad inventory.

Surviving output:

Search baseline and non-authority constraints survive. Broad inventory dies as too noisy for route-memory discovery.

### 5. Absence Recognition

Generic variation:

- Missing thing: a named `PastNavigationMemoryFile Discovery` sub-interface.

Focused variation:

- Missing thing: a diagnostic guard in loops: if a proposed trigger says "X exists," ask "how is X discovered?"

Contrarian variation:

- Missing thing: a file creation event log for every Navigation artifact.

Surviving output:

The sub-interface and trigger-discovery guard survive. A broad event log is deferred until artifact volume or audit failures justify it.

### 6. Domain Transfer

Generic variation:

- Transfer from cache design: a cache speeds reads but cannot be the source of truth.
- Output: maintained index must be treated as a cache over active files.

Focused variation:

- Transfer from database query planning: first define the query, then decide whether to add an index.
- Output: define deterministic discovery search before creating a maintained index.

Contrarian variation:

- Transfer from library catalogs: a curated catalog helps humans more than raw search.
- Output: user-facing index can be justified for understandability even if search is possible.

Surviving output:

Index-as-cache and query-before-index survive together: search patterns define the truth substrate; index is optional accelerator/handoff.

### 7. Extrapolation

Generic variation:

- If Navigation artifacts grow, raw search may become slow and cognitively expensive.
- Output: index may become valuable after artifact population grows.

Focused variation:

- If index maintenance starts now without tooling, update drift may create false absence.
- Output: require validation/backfill and drift telemetry.

Contrarian variation:

- If artifact count stays small, index is permanent overhead.
- Output: start with discovery status/search and set a threshold for index creation.

Surviving output:

Phase/threshold policy survives: begin with explicit discovery strategy; add maintained index when friction or volume justifies it, or keep hybrid only if explicitness is valued enough to pay maintenance cost.

## Candidate Set

### Candidate A - Discovery Interface Invariant

Any trigger that depends on an artifact or source existing must define how existence is discovered, how uncertainty is represented, and what fallback prevents false absence.

### Candidate B - PastNavigationMemoryFile Discovery Status Vocabulary

Add a compact status vocabulary for Navigation intake:

```text
present
absent
unknown
stale_index
search_backfilled
already_consumed
```

### Candidate C - Deterministic Active-Tree Discovery Search

Define active-tree search patterns for `PastNavigationMemoryFile` candidates and use them as the baseline discovery mechanism.

### Candidate D - Maintained PastNavigationMemoryFile Index As Mandatory Repair

Make a maintained index required because Homegrown values explicit files and because the corrected inquiry recommended it.

### Candidate E - Hybrid Index/Search Escalation Policy

Treat deterministic search as the source of validation and a maintained index as an optional or phase-specific discovery accelerator. Require scan/backfill if index confidence matters.

### Candidate F - Discovery/Review Authority Boundary Rule

Discovery outputs candidate files and confidence only. Route Memory Review owns current route classifications.

### Candidate G - Trigger-Discovery Critique Guard

For trigger/routing policy inquiries, Critique must ask: "If this trigger depends on X existing, how is X discovered?"

### Candidate H - CONCLUDE Secondary Interface Guard

If a finding proposes operational routing or intake behavior, it must define every load-bearing interface it introduces or mark that interface deferred.

### Candidate I - Broad Navigation Artifact Index

Record all Navigation-related file creations in a maintained index.

### Candidate J - Leave Discovery To Later Implementation

Keep the robust policy finding as-is and let future implementation decide discovery details.

## Test Cycle

### Candidate A - Discovery Interface Invariant

Novelty: moderate.

Scrutiny survival: survives. It directly repairs the prior miss without prematurely selecting index versus search.

Fertility: high. It generalizes to other existence-dependent triggers.

Actionability: high.

Mechanism independence: high. Lens shifting, absence recognition, and domain transfer all produced it.

Verdict: survive.

### Candidate B - PastNavigationMemoryFile Discovery Status Vocabulary

Novelty: moderate.

Scrutiny survival: survives. `present | absent` is unsafe when discovery is not performed or when an index may be stale. `unknown` prevents false absence.

Fertility: high. It supports Navigation intake, review triggers, and telemetry.

Actionability: high.

Mechanism independence: high. Combination and inversion produced it.

Verdict: survive.

### Candidate C - Deterministic Active-Tree Discovery Search

Novelty: moderate.

Scrutiny survival: survives as baseline. It validates whether a maintained index is needed and provides fallback even if the index exists.

Fertility: high.

Actionability: high.

Mechanism independence: medium-high. Constraint manipulation and domain transfer produced it.

Verdict: survive.

### Candidate D - Maintained PastNavigationMemoryFile Index As Mandatory Repair

Novelty: low because the later inquiry already proposed it.

Scrutiny survival: fails as mandatory invariant. The correction chain proves discovery-interface need, not index superiority.

Fertility: medium. It is useful as one implementation path.

Actionability: high but may create stale state.

Mechanism independence: medium.

Verdict: refine into Candidate E.

### Candidate E - Hybrid Index/Search Escalation Policy

Novelty: moderate.

Scrutiny survival: survives. It preserves the later inquiry's useful index concept while avoiding index-as-ground-truth.

Fertility: high.

Actionability: high.

Mechanism independence: high. Combination, domain transfer, and extrapolation all produced it.

Verdict: survive.

### Candidate F - Discovery/Review Authority Boundary Rule

Novelty: moderate.

Scrutiny survival: survives. It prevents discovery artifacts or search reports from becoming Route Memory Review.

Fertility: high.

Actionability: high.

Mechanism independence: high. Combination, constraint manipulation, and sensemaking all support it.

Verdict: survive.

### Candidate G - Trigger-Discovery Critique Guard

Novelty: moderate.

Scrutiny survival: survives with scope. It catches exactly the prior Critique miss: the robust policy survived without being prosecuted on how `source_present` is known.

Fertility: medium-high.

Actionability: medium.

Mechanism independence: medium.

Verdict: survive for trigger/routing critiques.

### Candidate H - CONCLUDE Secondary Interface Guard

Novelty: moderate.

Scrutiny survival: survives with scope. The prior finding's MUST patch guidance depended on an interface that the inquiry had not defined.

Fertility: medium.

Actionability: medium-high.

Mechanism independence: medium.

Verdict: survive as a CONCLUDE/backstop guard.

### Candidate I - Broad Navigation Artifact Index

Novelty: low.

Scrutiny survival: fails. It indexes too much and makes Route Memory Review sift through generic Navigation-adjacent files.

Fertility: low for route-memory discovery.

Actionability: high but noisy.

Mechanism independence: low.

Verdict: kill.

Seed from failure: if a general Navigation artifact inventory is needed later, run a separate inquiry with a separate goal.

### Candidate J - Leave Discovery To Later Implementation

Novelty: low.

Scrutiny survival: fails. The prior finding proposed operational intake patches. Leaving discovery entirely to later implementation is how the gap was created.

Fertility: low.

Actionability: low.

Mechanism independence: low.

Verdict: kill.

Seed from failure: if implementation is deferred, explicitly mark discovery semantics deferred instead of implying they are solved.

## Assembly Check

Best assembly:

```text
Discovery Interface Invariant
  + PastNavigationMemoryFile Discovery Status Vocabulary
  + Deterministic Active-Tree Discovery Search
  + Hybrid Index/Search Escalation Policy
  + Discovery/Review Authority Boundary
  + scoped Trigger-Discovery Critique Guard
  + scoped CONCLUDE Secondary Interface Guard
```

Emergent value:

- The invariant fixes the correct layer.
- The status vocabulary prevents false absence.
- The search baseline tests whether the index is necessary.
- The hybrid policy preserves index feasibility without making it mandatory.
- The authority boundary prevents duplicate current route truth.
- Critique and CONCLUDE guards catch the failure before it reaches durable patch guidance.

## Recommended Innovation

Adopt a source-discovery prevention bundle:

```text
For route-memory policy:
  define PastNavigationMemoryFile Discovery as an intake sub-interface;
  require status: present | absent | unknown | stale_index | search_backfilled;
  define deterministic active-tree search patterns as baseline/fallback;
  allow maintained index only as candidate accelerator or explicit phase choice;
  keep Route Memory Review as current interpretation authority.

For future trigger/routing findings:
  if a trigger depends on X existing, define how X is discovered;
  if a finding proposes routing/intake behavior outside its main question,
  define the introduced interface or mark it deferred.
```

Do not adopt:

- broad index of all Navigation-related file creations;
- route dispositions in a discovery index;
- mandatory maintained index from this correction chain alone;
- "future implementation will decide" when the finding already proposes intake routing.

## Mechanism Coverage Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Six mechanisms converge on discovery-interface completeness plus confidence/fallback. Four mechanisms converge on treating maintained index as candidate or cache, not invariant.

Survivors tested: 10 / 10.

Failure modes observed: none. Premature evaluation avoided by testing both index and search alternatives. Survival bias checked by killing the comfortable "make an index mandatory" answer.

Overall: PROCEED.
