# Innovation: Loop Diagnose - Past Navigation Memory Index Before Search

## User Input

Diagnose why the prior loop recommended a maintained `PastNavigationMemoryFile Index` before validating deterministic active-tree search, using the correction chain between `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility` and `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`.

## Seed

Seed type: failure + dissatisfaction.

The failure: a prior MVL+ inquiry produced a plausible but later corrected recommendation: a maintained global `PastNavigationMemoryFile Index`.

The dissatisfaction: the user identified a simpler mechanism, deterministic search over known file names and path patterns, and challenged why the maintained index was needed.

Valuation: this matters because LOOP_DIAGNOSE should expose what the earlier loop missed and produce maintainable lessons without overclaiming exact root cause.

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- View the prior result as "unnecessary artifact creation."

Focused variation:

- View the prior result as "explicitness shape selection": the loop chose maintained registry instead of protocolized derivation.

Contrarian variation:

- View the prior result as partially correct for a later phase: a global index may become useful after naming drift or artifact volume grows.

Surviving output:

The diagnostic should say the prior loop selected the wrong explicitness shape for v1, not that explicitness or indexes are inherently wrong.

### 2. Combination

Generic variation:

- Combine prior and corrected findings into one rule: search now, index later.

Focused variation:

- Combine corrected Discovery Search with prior authority safeguards:

```text
Discovery Search
  + candidate/excluded statuses
  + optional run-local report
  + Route Memory Review interpretation boundary
  + index revival triggers
```

Contrarian variation:

- Combine maintained index and search by requiring both to agree before Navigation proceeds.

Surviving output:

The search/report/review/revival assembly is the best repaired mechanism. The agree-before-proceed variant is rejected because it creates two discovery authorities and a new reconciliation burden.

### 3. Inversion

Generic variation:

- Instead of "an index avoids repeated search," use "repeated search avoids a stale index."

Focused variation:

- Instead of "artifact creators register route-memory files at creation time," use "Navigation derives candidate files at consumption time."

Contrarian variation:

- Instead of "fallback protects the index," use "fallback reveals the real primitive."

Surviving output:

The most diagnostic inversion is the third. The prior loop treated scan/backfill as safety around the index. The corrected loop treats deterministic search as the primitive and optional artifact generation as output mode.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: do not create duplicate mutable state when derivation is cheap.

Focused variation:

- Add diagnostic constraint: any maintained registry candidate must answer why derivation/search is insufficient before it can survive.

Contrarian variation:

- Add constraint: always create a durable Markdown artifact for every explicit operation.

Surviving output:

The useful constraint is registry-specific, not global. Maintained registries should face a "derived-state challenge"; durable operation outputs can still be correct elsewhere.

### 5. Absence Recognition

Generic variation:

- Missing object in prior loop: "search contract."

Focused variation:

- Missing candidate in prior Innovation: `PastNavigationMemoryFile Discovery Search` with output modes.

Contrarian variation:

- Missing object in corrected loop: a browseable catalog for future humans.

Surviving output:

The missing candidate is the key diagnosis. The browseable catalog is a deferred need, not a v1 requirement.

### 6. Domain Transfer

Generic variation:

- Transfer from build systems: derive generated artifacts from source files rather than hand-maintain them.

Focused variation:

- Transfer from test discovery: tests are found by naming conventions at run time; they are not usually registered manually in a global list.

Contrarian variation:

- Transfer from package registries: consumers need a registry because packages are distributed and not locally searchable.

Surviving output:

The local-repository nature of Homegrown route-memory files favors test-discovery/build-derived logic over package-registry logic for v1.

### 7. Extrapolation

Generic variation:

- As route-memory files grow, discovery could get harder.

Focused variation:

- As file names drift, search patterns may miss candidates; then generated/global catalog may become useful.

Contrarian variation:

- If search remains cheap and stable, a maintained index may remain unnecessary forever.

Surviving output:

Use explicit revival triggers. Do not create the index now for hypothetical future growth, but do not ban it permanently.

## Candidate Diagnostic Hypotheses

### Hypothesis A - Exploration Under-Probed Search As Primary

Shape:

Prior Exploration found active artifacts and knew scan/backfill was possible, but did not develop deterministic search into a primary explicit mechanism.

Evidence:

- Prior Exploration scanned active artifact classes and found a small active set.
- Prior finding requires active-tree scan/backfill.
- Corrected Exploration tested search directly and made the prior fallback central.

Test:

- Novelty: medium.
- Scrutiny survival: high, if framed as under-probed role rather than no search.
- Fertility: high.
- Actionability: medium.
- Mechanism independence: high.

Verdict: survive as contributing hypothesis.

Why not stronger:

Prior Exploration did include search-related evidence, so this is not a clean omission.

### Hypothesis B - Sensemaking Over-Associated Explicitness With Maintained Registry

Shape:

Prior Sensemaking treated "one known place" and Homegrown explicitness as strong anchors, making a maintained file feel like the natural answer.

Evidence:

- Prior Sensemaking emphasizes explicit durable Markdown artifacts, human-readable place, and known registry.
- Corrected Sensemaking says explicitness can live in a documented search contract plus optional report.

Test:

- Novelty: medium.
- Scrutiny survival: high if called explicitness-shape error.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict: survive.

Why not stronger:

Prior Sensemaking also recognized stale-index risk and authority boundaries, so it was not blind artifact maximalism.

### Hypothesis C - Innovation Failed To Generate The Strongest Alternative

Shape:

Prior Innovation generated "No Index, Scan Each Time," but not "protocolized Discovery Search plus optional run-local candidate report."

Evidence:

- Prior Innovation killed no-index scan as default.
- Corrected Innovation's survivor is Discovery Search plus output modes.
- Prior Exploration had a generated-on-demand report possibility, but it did not become a primary Innovation candidate.

Test:

- Novelty: high.
- Scrutiny survival: high.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict: strongest survivor.

Why not stronger:

This may be partly inherited from prior Sensemaking/Decomposition frame, not Innovation alone.

### Hypothesis D - Critique Missed Fallback-As-Primary Prosecution

Shape:

Prior Critique made the index safer with scan/backfill, but did not ask whether required scan/backfill makes the index unnecessary as v1.

Evidence:

- Prior Critique lists robustness against staleness as critical and preserves active-tree scan fallback.
- Corrected Critique kills maintained index as v1 because search can derive the list and index can silently drift.

Test:

- Novelty: high.
- Scrutiny survival: high.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict: strongest survivor alongside Hypothesis C.

Why not stronger:

Critique can only critique candidates generated by earlier stages; the strongest search-contract candidate was missing or weak.

### Hypothesis E - Decomposition Centered The Wrong Object

Shape:

Prior Decomposition split the problem into index scope, schema, update ownership, review consumption, validation, and rollout. It did not split the search-contract alternative into its own pieces.

Evidence:

- Prior Decomposition's question tree is index-centered.
- Corrected Decomposition splits search scope, pattern set, filtering, output mode, review interface, and revival triggers.

Test:

- Novelty: medium.
- Scrutiny survival: medium.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: medium.

Verdict: refine as downstream effect, not primary cause.

Why not stronger:

Decomposition followed the stabilized frame. It likely did not originate the miss.

## Candidate Maintenance Actions

### Candidate 1 - Registry-Vs-Derivation Challenge

Shape:

Add a narrow check to relevant critique or protocol guidance:

```text
When a maintained index/registry is proposed, ask whether the indexed state is cheaply derivable by deterministic search. If yes, test protocolized search plus optional generated report before allowing the maintained registry to survive.
```

Strength:

- Directly targets this failure.
- Does not ban indexes.
- Produces an evaluation gate.

Weakness:

- Needs placement. Could belong in Critique, Innovation, or Navigation context docs.

Verdict: survive as strongest maintenance candidate.

### Candidate 2 - Explicitness Shape Menu

Shape:

Add a sensemaking/innovation reminder:

```text
Explicitness can be: protocol rule, telemetry line, run-local report, maintained registry, generated index, or authoritative ledger. Choose the lightest shape that preserves handoff and audit.
```

Strength:

- Generalizes beyond this case.
- Prevents "explicit = maintained file" collapse.

Weakness:

- Broader than one correction chain; risk of becoming vague.

Verdict: survive as supporting candidate, not immediate source edit unless another chain confirms.

### Candidate 3 - Strongest Alternative Rule

Shape:

When killing a "no artifact" or "scan-only" alternative, first strengthen it:

```text
Can this become a named protocol operation with explicit scope, exclusions, statuses, telemetry, or optional report?
```

Strength:

- Directly addresses prior Innovation's weak alternative.
- Low risk.

Weakness:

- Could add cognitive overhead to every artifact decision.

Verdict: survive.

### Candidate 4 - Fallback Promotion Check

Shape:

Add a critique question:

```text
If a candidate only survives because a fallback is required for safety, should the fallback be promoted to the primary mechanism?
```

Strength:

- Very close to this failure.
- Useful beyond indexes.

Weakness:

- Not all fallbacks should become primary; needs careful wording.

Verdict: survive with guardrail.

### Candidate 5 - Immediate Navigation Source Patch

Shape:

Patch Navigation docs now to replace maintained index with Discovery Search.

Strength:

- Corrected inquiry already recommends this.

Weakness:

- This LOOP_DIAGNOSE inquiry is about diagnosing the loop failure, not implementing Navigation policy.
- Source patch should be driven by a separate implementation task or materialization inquiry.

Verdict: defer. Mention as downstream if user asks for implementation.

## Assembly Check

Strongest diagnostic assembly:

```text
Prior loop had the right safety concerns
  + wrong explicitness shape
  + weak search alternative
  + critique accepted fallback as mitigation
  -> maintained index survived too early

Correct repair:
  explicit Discovery Search
  + optional run-local report
  + Route Memory Review interpretation boundary
  + index revival triggers
```

Emergent value:

- Avoids blaming one discipline without evidence.
- Identifies a reusable maintenance lesson.
- Preserves Homegrown explicitness.
- Prevents anti-index overcorrection.

## Proposed Diagnostic Output Shape

Final finding should include at least four hypotheses:

1. Exploration under-probed search-as-primary. Confidence: MEDIUM-HIGH.
2. Sensemaking over-associated explicitness with maintained registry. Confidence: MEDIUM-HIGH.
3. Innovation failed to generate the strongest explicit-search candidate. Confidence: HIGH.
4. Critique missed fallback-as-primary prosecution. Confidence: HIGH.

Optional downstream hypothesis:

- Decomposition centered the wrong object. Confidence: MEDIUM, downstream.

Strongest maintenance candidate:

```text
Registry-Vs-Derivation Challenge
```

Recommended verdict candidate:

```text
ACTIONABLE, but narrowly.
```

Rationale:

At least one maintenance candidate is specific, low-risk, and gateable. Broad MVL+ rewrites should remain deferred.

## Innovation Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Five mechanisms converge on the same core diagnosis: the prior loop did not test protocolized derivation strongly enough before maintaining a registry.

Survivors tested: 5 / 5 hypotheses and 5 / 5 maintenance candidates.

Failure modes observed: none. Premature evaluation avoided by generating multiple hypotheses before choosing survivors. Survival bias checked by preserving the uncomfortable possibility that explicitness is still correct, just in a different shape.

Overall: PROCEED.
