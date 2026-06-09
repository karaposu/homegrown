---
status: active
diagnoses:
  - devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md
compares_with:
  - devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md
supporting_context:
  - devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md
  - devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md
  - devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/finding.md
impacts:
  - homegrown/MVL+/SKILL.md
  - homegrown/protocols/loop_diagnose.md
  - homegrown/protocols/conclude.md
---
# Finding: Navigation Naming Boundary Drift Loop Diagnose

## Question

The question was why unclear or unnatural Navigation route-memory names kept producing mechanism confusion across a correction chain.

The primary comparison was between `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md` and `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md`.

The user asked for evidence-backed hypotheses, not assumptions. The diagnosis also had to inspect supporting folders for later vocabulary evidence around `source`, `PastNavigationMemoryFile`, index, search, and route-memory wording.

## Finding Summary

- The failure was not just awkward naming. The deeper issue was that durable names were accepted before the loop checked what workflow those names would imply to the user or to future runners.

- The highest-confidence miss is `prior_map_overlay`. The prior inquiry noticed that the name was weak, but it kept the overlay frame active in discipline outputs and still treated the saved file as adaptive storage.

- The second high-confidence miss is "Route-Memory Preflight." The corrected inquiry showed that this name made a cheap status classification sound like a new routine. The better model was `route_memory_status` inside normal Navigation intake.

- Homegrown explicitness was under-modeled in the earliest prior inquiry. Full Route Memory Review is a meaningful operation, so if it runs, it writes `route_memory_review.md`. Bloat should be controlled by when the review runs, not by making the review invisible.

- Supporting vocabulary evidence points to the same pattern with lower confidence. "Source" was too abstract for user-facing policy. `PastNavigationMemoryFile` was more concrete but dense. `PastNavigationMemoryFile Index` turned a discovery need into a maintained object before deterministic search had been validated.

- The recommended prevention is a narrow **Durable Term Boundary Check**. It should apply only when a loop creates, renames, retires, or materially relies on a durable protocol term, artifact name, status field, discovery mechanism, route name, or index.

- The check should not become a new full naming discipline. It should be a small gate before CONCLUDE and a critique dimension when durable terms appear.

## Finding

Navigation is Homegrown's discipline for mapping possible next routes from current context. Route Memory Review is different: it interprets past Navigation memory so old route maps do not become current truth by accident.

The user repeatedly pushed back when names made that workflow feel unnatural. That pushback was not cosmetic. In this chain, names were functioning like protocol contracts. A name did not merely label a thing; it suggested what kind of thing existed and when it should run.

### 1. The first miss was incomplete migration away from `prior_map_overlay`

The prior inquiry `2026-05-04_17-56__prior_map_overlay_artifact_necessity` correctly detected that `prior_map_overlay` was a weak frame. It said `Route Memory Review` was a clearer name for the operation.

That detection did not fully commit. The discipline trail continued to use "overlay" as the governing concept, and the surviving assembly still described an "overlay result" plus saved `prior_map_overlay.md`.

That matters because `prior_map_overlay` bundled two things:

- a review operation over old route memory;
- a storage artifact produced after warm-up.

Once the name bundled those layers, the loop naturally emphasized output mode and artifact proportionality. That is how it reached the rule "save only when durable handoff matters." The later user correction rejected that. In Homegrown, if the full meaningful operation runs, the operation should leave a Markdown artifact.

This was not a total failure. The prior loop found the right direction. The failure was enforcement: a weak transitional name was identified but not quarantined.

### 2. The corrected inquiry fixed the boundary, not just the word

The corrected inquiry `2026-05-05_18-30__route_memory_preflight_reevaluation` did not solve the problem by inventing a nicer name. It solved it by separating layers:

- normal Navigation intake;
- route-memory status classification;
- full Route Memory Review;
- `route_memory_review.md`;
- current `navigation.md`.

"Route-Memory Preflight" was the problem because it sounded like a standalone routine. The corrected model demoted it into `route_memory_status`, a small classification inside existing Navigation intake.

That is the key evidence that this was not just a vocabulary issue. The name was wrong because it implied the wrong mechanism.

### 3. Later vocabulary repeats the same pattern with lower confidence

The later robust-review finding introduced `PastNavigationMemoryFile` and also used "route-memory source." The term `PastNavigationMemoryFile` was defined as any file that records earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.

That term is more concrete than "source," but it is dense. It needs a plain-language gloss whenever it becomes a trigger. The evidence does not prove that `PastNavigationMemoryFile` must be replaced. It proves that dense durable terms need explicit plain meaning and "not this" boundaries.

The index/search chain shows another form of the same risk. The index inquiry recommended a maintained `PastNavigationMemoryFile Index` because Homegrown values explicit Markdown artifacts. The later search inquiry corrected that: active-tree search could find the files, and a maintained global index would duplicate filesystem state.

The better corrected mechanism was `PastNavigationMemoryFile Discovery Search`: an explicit procedure with scope, patterns, exclusions, and output modes. A run-local `past_navigation_memory_candidates.md` can still be written when one scan needs durable handoff. That preserves explicitness without creating a standing mutable registry by default.

### 4. The likely loop miss spans multiple disciplines

This should not be blamed only on Sensemaking.

Framing mattered because the prior branch question centered `prior_map_overlay.md` and unnecessary artifacts.

Sensemaking mattered because it detected some distinctions but did not make the name migration irreversible.

Innovation mattered because it generated plausible machinery around the active name, such as adaptive overlay output or later an index.

Critique mattered because it did not consistently prosecute name-implied behavior: "does this name make a future runner infer a side routine, storage object, or authority?"

CONCLUDE mattered because finding titles, next actions, and migration wording make terms durable.

The repair should therefore be a cross-loop invariant near the point where durable terms harden, not a full rewrite of one core discipline.

### 5. The prevention is Durable Term Boundary Check

Use this rule:

```text
When an inquiry creates, renames, retires, or materially relies on a durable protocol term,
artifact name, status field, discovery mechanism, route name, or index, validate it before CONCLUDE.
```

The validation asks:

```text
1. Type: status | operation | artifact | discovery_procedure | standing_object | authority_adjacent.
2. Plain meaning: one ordinary sentence.
3. User inference: what behavior might this name make a future user or runner assume?
4. Not-this: what nearby mechanism must it not be confused with?
5. Term status: legacy | provisional | canonical | retired.
6. Explicitness form: status_record | operation_artifact | repeatable_procedure | run_local_report | global_index.
7. Critique attack: would this name have caused one of the observed failures?
```

This check is intentionally narrow. It is not for every phrase. It is for names that become future workflow contracts.

### Durable Terms

| Term | Type | Plain Meaning | Not This | Status | Explicitness Form |
| --- | --- | --- | --- | --- | --- |
| Durable Term Boundary Check | protocol rule | A small validation gate for names that become future workflow contracts. | Not a new full naming discipline. | canonical recommendation | repeatable_procedure |
| `prior_map_overlay` | legacy artifact/operation alias | Old name for the route-memory review storage frame. | Not the current governing operation name. | legacy | none by default |
| `Route-Memory Preflight` | discouraged routine-sounding alias | A phrase that made route-memory status classification sound like a separate routine. | Not a standalone mandatory operation. | retired/discouraged | none |
| `route_memory_status` | status field | The Navigation intake classification of whether old route memory needs review. | Not full Route Memory Review. | canonical pattern | status_record |
| `route_memory_review.md` | operation artifact | The Markdown output of full Route Memory Review. | Not a no-op status file for every Navigation run. | canonical pattern | operation_artifact |
| `PastNavigationMemoryFile` | historical evidence file category | A file that may contain earlier Navigation routes or route-state memory. | Not current route truth. | existing term needing gloss | status_record when detected; review source when read |
| `PastNavigationMemoryFile Discovery Search` | discovery procedure | A repeatable search for files that may contain past Navigation memory. | Not Route Memory Review and not current route interpretation. | canonical pattern from supporting correction | repeatable_procedure |

## Next Actions

### MUST

- **What:** Add Durable Term Boundary Check wording to the relevant rules/peripheral section of `homegrown/MVL+/SKILL.md` or the local MVL+ execution guidance.
  **Who:** MVL+ protocol maintainer.
  **Gate:** Before the next protocol patch that changes route-memory naming or Navigation-memory terminology.
  **Why:** Prevents a compact or fast conclude step from hardening an unstable durable term.

- **What:** Add a conditional critique instruction for name-implied behavior when durable terms are introduced or preserved.
  **Who:** Critique prompt or MVL+ discipline transaction guidance.
  **Gate:** Before the next loop that proposes a new protocol term, artifact, status field, discovery mechanism, or index.
  **Why:** Forces the loop to prosecute whether the name implies the wrong operation.

- **What:** Add a Durable Terms block to findings that create, rename, retire, or materially rely on durable protocol terms.
  **Who:** `homegrown/protocols/conclude.md` or conclude-facing guidance.
  **Gate:** Before using this diagnostic finding as the basis for patching Navigation route-memory docs.
  **Why:** Makes term type, plain meaning, exclusions, status, and explicitness form inspectable.

- **What:** Mark weak or transitional names as legacy/provisional when they are retained for searchability.
  **Who:** Any protocol or finding that mentions `prior_map_overlay`, "Route-Memory Preflight," or similar legacy terms.
  **Gate:** Whenever those terms are touched next.
  **Why:** Preserves historical reference without letting old names govern current reasoning.

### COULD

- **What:** Add a small examples section showing the difference between `route_memory_status`, Route Memory Review, `route_memory_review.md`, and PastNavigationMemoryFile Discovery Search.
  **Who:** Navigation context intake documentation.
  **Gate:** When Navigation memory intake is patched.
  **Why:** Gives future runners a concrete model instead of relying on formal names alone.

- **What:** Add a generated or manual glossary later for durable Homegrown protocol terms.
  **Who:** Documentation maintainer.
  **Gate:** After at least ten durable protocol terms have caused lookup or explanation friction.
  **Why:** Helps readers browse terms, but does not replace term validation at creation time.

### DEFERRED

- **What:** Create a full Naming Review discipline.
  **Gate:** Revive only if at least three future inquiries repeat durable-name boundary failures after the lightweight check is installed.
  **Why (if revived):** A full review may be justified if narrow validation does not prevent repeated protocol-term drift.

- **What:** Rename `PastNavigationMemoryFile`.
  **Gate:** Revive only if future Durable Term Boundary Checks show that plain glosses and examples still do not make the term understandable.
  **Why (if revived):** A rename may reduce friction, but current evidence does not prove the term itself is the root cause.

## Reasoning

The finding preserves the high-confidence evidence from the primary chain. `prior_map_overlay` is the strongest example because the prior inquiry explicitly recognized the name as weak but continued to reason in overlay terms. That is incomplete migration, not ignorance.

"Route-Memory Preflight" is the second strongest example because the corrected inquiry explicitly identified the phrase as a risk. The corrected answer did not make it a better routine. It removed the routine implication and treated route-memory handling as status classification inside normal Navigation intake.

The supporting evidence was useful but weaker. "Source" and `PastNavigationMemoryFile` show naming load, but the artifacts alone do not prove that `PastNavigationMemoryFile` is wrong. The careful conclusion is that dense durable terms need a plain-language gloss and a "not this" boundary.

The maintained index recommendation was not killed because indexes are always bad. It was killed as the v1 mechanism because it duplicated a result that active-tree search can derive. Explicitness survived as a repeatable discovery procedure and optional run-local report.

The full Naming Review discipline was killed as a v1 fix. It risks repeating the same failure by creating another named side operation.

The no-change option was killed because the pattern already repeated across several inquiries.

The immediate rename of `PastNavigationMemoryFile` was deferred because the evidence is not strong enough. A replacement name without a boundary check could reproduce the same problem.

The surviving assembly is Durable Term Boundary Check. It is strong because it combines the useful parts:

- type validation;
- user-language validation;
- critique attack;
- explicitness-form selection;
- legacy/provisional/canonical status;
- durable recording only when terms affect future behavior.

## Open Questions

### Monitoring

After the next five MVL+ inquiries that create or revise durable protocol terminology, check whether the Durable Terms block prevented unclear name hardening or whether users still had to correct the mechanism implied by names.

### Refinement Triggers

Reopen the prevention design if a future inquiry creates a new routine-sounding term for a status field, a standing object for a repeatable search, or an artifact path that becomes mistaken for an operation.

Reopen the `PastNavigationMemoryFile` naming decision if two future users or two future loop diagnostics identify the term itself as the source of misunderstanding after plain-language glosses are present.

Reopen the full Naming Review idea only if three or more durable-name failures recur after the lightweight check is installed.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity

corrected_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

human_correction:
Across the chain, the user repeatedly pushed back on unclear or unnatural names and boundaries: `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough.

optional_context:
Use these two folders as the primary correction chain for naming and operation-boundary drift. Also inspect, as supporting context, `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, and `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search` for `source`, `PastNavigationMemoryFile`, index, search, and route-memory wording. This is an aggregate naming diagnostic, so keep confidence lower unless evidence isolates a specific prior-loop failure.

diagnostic_goal:
Identify evidence-backed hypotheses for why unclear names kept producing mechanism confusion. Diagnose whether the weakness is in framing, sensemaking vocabulary selection, conclude wording, or lack of user-language validation. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for the prior and corrected folders; read the additional context folders only for supporting vocabulary evidence. Do not treat later wording as ground truth.
```

</details>
