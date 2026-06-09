# Innovation: Navigation Naming Boundary Drift Loop Diagnose

## User Input

`devdocs/inquiries/2026-05-06_16-49__loop_diagnose__navigation_naming_boundary_drift/_branch.md`

## Seed

The seed is a failure pattern:

```text
Navigation route-memory loops produced internally plausible names that made mechanisms feel unnatural or unclear to the user.
```

The innovation need is a prevention mechanism that catches boundary-unsafe durable names without adding a heavy new loop or changing the core MVL/MVL+ machinery wholesale.

## Mechanism 1 - Lens Shifting

### Generic

Evaluate naming as interface design, not wording.

Output: every durable term must expose the right interface: status, operation, artifact, discovery, or authority.

### Focused

Evaluate a proposed Navigation term by the behavior a future runner would infer from it.

Output: add a "name-implied behavior" check before terms are concluded.

### Contrarian

Evaluate naming as low priority; the real issue is trigger policy.

Output: ignore names and only make triggers more formal. This fails for `Route-Memory Preflight`, because the corrected trigger still needed the term demoted into a status classification.

## Mechanism 2 - Combination

### Generic

Combine user-language validation with type checking.

Output:

```text
plain gloss + type label + what this is not
```

### Focused

Combine Homegrown explicitness with explicitness-form testing.

Output:

```text
Should explicitness be satisfied by:
status record | operation artifact | repeatable procedure | run-local report | global index?
```

### Contrarian

Combine all naming checks into a new `Naming Review` discipline.

Output: strong coverage, but too heavy and likely to create the same operation-proliferation failure it is trying to prevent.

## Mechanism 3 - Inversion

### Generic

Invert "choose the best name."

Output: first identify names that must not become canonical because they imply the wrong operation.

### Focused

Invert "new term becomes finding title."

Output: if a term is transitional, legacy, or disputed, the finding must mark it that way and avoid making it the title unless the point is to retire it.

### Contrarian

Invert "use explicit protocol terms."

Output: use only plain English phrases and avoid formal terms. This reduces jargon but breaks Homegrown's need for durable searchable conventions.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: any new durable term must declare its type.

Output:

```text
term_type: status | operation | artifact | discovery | authority-adjacent
```

### Focused

Add constraint: no operation-sounding name for field/status checks.

Output: "preflight," "review," "audit," "index," and "overlay" require extra scrutiny because they imply operations or standing objects.

### Contrarian

Remove constraint: let terms evolve conversationally until the user objects.

Output: low process cost, but it repeats the observed failure and relies on human correction after damage.

## Mechanism 5 - Absence Recognition

### Generic

Missing artifact: a durable-term decision block inside findings.

Output: each finding that creates or renames a protocol term includes:

```text
## Durable Terms
| Term | Type | Plain Meaning | Not This | Status |
```

### Focused

Missing critique dimension: name-boundary fit.

Output: Critique must prosecute whether a name makes the wrong behavior likely.

### Contrarian

Missing global glossary.

Output: create a central glossary of every term. This may help later but is not the immediate fix, because the failure happens at term creation time before glossary maintenance can correct it.

## Mechanism 6 - Domain Transfer

### Generic

Transfer from API design: names are contracts.

Output: breaking semantic versioning of a name should be treated like an API compatibility issue.

### Focused

Transfer from database schema migrations: mark aliases and deprecated columns explicitly.

Output: legacy/provisional/canonical status for terms prevents old names from silently staying authoritative.

### Contrarian

Transfer from literary editing: improve prose after the fact.

Output: post-hoc editing can polish but cannot prevent candidate generation from following the wrong mechanism.

## Mechanism 7 - Extrapolation

### Generic

If Homegrown continues to create durable protocols, names will become more authoritative over time.

Output: add prevention before term count grows.

### Focused

If Navigation memory artifacts grow, a wrong discovery term can create duplicate state or missed memory.

Output: explicitness-form testing is needed before recommending indexes, registries, or reports.

### Contrarian

If every term needs validation, MVL+ becomes slow and bureaucratic.

Output: scope the check only to durable terms that affect future behavior, not local phrasing.

## Candidate Set

### Candidate A - Boundary-Name Validation Gate

Before CONCLUDE, validate every new durable term:

- type;
- plain meaning;
- user-implied behavior;
- what it is not;
- legacy/provisional/canonical status;
- explicitness form if it creates or routes artifacts.

### Candidate B - Critique Dimension: Name-Implied Behavior

Add a critique axis for any candidate that introduces or preserves a durable protocol term:

```text
Does this name make a future user or runner infer the wrong operation?
```

### Candidate C - Durable Terms Block In Findings

Findings that create, rename, or retire durable terms include a small table:

```markdown
## Durable Terms
| Term | Type | Plain Meaning | Not This | Status |
```

### Candidate D - Legacy / Provisional Name Quarantine

If a loop identifies a name as weak, transitional, or legacy, later discipline outputs may cite it as legacy but should not use it as the governing concept.

### Candidate E - Explicitness Form Matrix

When Homegrown explicitness is invoked, decide the form explicitly:

```text
status_record | operation_artifact | repeatable_procedure | run_local_report | global_index
```

### Candidate F - Plain Gloss Requirement

Every new durable protocol term must be paired with one plain sentence:

```text
In plain terms, this means...
```

and one exclusion:

```text
This does not mean...
```

### Candidate G - Full Naming Review Discipline

Create a separate named review operation for all important naming decisions.

### Candidate H - Rename `PastNavigationMemoryFile`

Choose a simpler name now and patch all docs again.

### Candidate I - No Protocol Change

Rely on future user corrections and loop diagnosis when names smell wrong.

## Test Cycle

### Candidate A - Boundary-Name Validation Gate

Novelty: moderate. It treats naming as operation-boundary validation, not wording.

Scrutiny survival: survives. Strongest objection: it may add more process. It survives if scoped only to durable protocol terms and run near CONCLUDE.

Fertility: high. It can prevent overlay, preflight, source, and index-style failures.

Actionability: high. It can be added as a small rule block in MVL+ periphery or conclude-facing guidance.

Mechanism independence: high. Lens shifting, combination, constraint manipulation, and extrapolation all produced it.

Verdict: survive.

### Candidate B - Critique Dimension: Name-Implied Behavior

Novelty: moderate.

Scrutiny survival: survives. It catches the failure while candidates are still being attacked. It would have prosecuted "Route-Memory Preflight" and `PastNavigationMemoryFile Index` earlier.

Fertility: high. It strengthens future loop diagnostics and protocol critiques.

Actionability: medium-high. It requires either a Critique prompt addition or MVL+ transaction reminder to apply this dimension when durable terms appear.

Mechanism independence: high. Absence recognition, lens shifting, and domain transfer all produced it.

Verdict: survive.

### Candidate C - Durable Terms Block In Findings

Novelty: moderate.

Scrutiny survival: survives with scope constraint. It could create boilerplate if every finding has it, but it is useful when a finding creates or revises durable names.

Fertility: medium-high. It gives future readers a stable place to see term status.

Actionability: high.

Mechanism independence: medium. Absence recognition and combination produced it.

Verdict: survive with scope constraint.

### Candidate D - Legacy / Provisional Name Quarantine

Novelty: moderate.

Scrutiny survival: survives. It directly addresses the prior `prior_map_overlay` failure: the loop noticed the weak name but did not stop it from governing later reasoning.

Fertility: high. It can apply to old protocol names, deprecated artifacts, and renamed routines.

Actionability: high.

Mechanism independence: medium-high. Inversion, domain transfer, and constraint manipulation produced it.

Verdict: survive.

### Candidate E - Explicitness Form Matrix

Novelty: moderate.

Scrutiny survival: survives. Strongest objection: it may weaken Homegrown explicitness by letting loops choose procedure over file. It survives because full meaningful operations still choose operation artifacts; only discovery/status/no-op cases choose other forms.

Fertility: high. It explains why `route_memory_review.md` is mandatory for full review while a maintained global index is not mandatory for search.

Actionability: high.

Mechanism independence: high. Combination, extrapolation, and constraint manipulation produced it.

Verdict: survive.

### Candidate F - Plain Gloss Requirement

Novelty: low.

Scrutiny survival: survives as a support measure. It does not solve operation-boundary drift alone, but it would have made "source" and `PastNavigationMemoryFile` easier to understand.

Fertility: medium.

Actionability: high.

Mechanism independence: medium. Combination and absence recognition produced it.

Verdict: survive as support.

### Candidate G - Full Naming Review Discipline

Novelty: medium.

Scrutiny survival: fails for now. It creates another named operation to prevent over-named operations. It may be justified later if durable term failures continue after a lightweight gate.

Fertility: medium.

Actionability: medium.

Mechanism independence: low.

Verdict: kill as v1; defer as escalation.

### Candidate H - Rename `PastNavigationMemoryFile`

Novelty: low.

Scrutiny survival: fails as the main prevention. The evidence does not prove this exact term is wrong, and another rename can repeat the same failure if the mechanism boundary remains unstable.

Fertility: low-medium.

Actionability: medium, but risky due to churn.

Mechanism independence: low.

Verdict: refine/defer. Only rename if a later term-specific review proves the name itself causes repeated misunderstanding.

### Candidate I - No Protocol Change

Novelty: none.

Scrutiny survival: fails. The same pattern has already repeated across multiple inquiries.

Fertility: low.

Actionability: high but ineffective.

Mechanism independence: none.

Verdict: kill.

## Assembly Check

The strongest assembly combines:

- Candidate A: Boundary-Name Validation Gate.
- Candidate B: Critique Dimension.
- Candidate C: Durable Terms Block.
- Candidate D: Legacy / Provisional Quarantine.
- Candidate E: Explicitness Form Matrix.
- Candidate F: Plain Gloss Requirement.

Emergent value:

- A catches the problem before conclusion.
- B makes critique attack name-implied behavior.
- C makes the term decision inspectable.
- D prevents transitional names from continuing to govern.
- E prevents explicitness from automatically becoming a maintained object.
- F keeps formal terms understandable.

The assembly remains lightweight because it triggers only when a loop creates, renames, retires, or relies on a durable protocol term, artifact, status field, discovery mechanism, or index.

## Recommended Innovation

Add a **Durable Term Boundary Check** as the maintenance candidate:

```text
When an MVL/MVL+ inquiry creates, renames, retires, or relies on a durable protocol term,
artifact name, status field, discovery mechanism, route, or index, validate it before CONCLUDE.
```

Required checks:

```text
1. Type: status | operation | artifact | discovery_procedure | standing_object | authority_adjacent.
2. Plain meaning: one sentence in ordinary language.
3. User inference: what behavior could this name make a future user/runner assume?
4. Not-this: what nearby mechanism must it not be confused with?
5. Term status: legacy | provisional | canonical | retired.
6. Explicitness form: status_record | operation_artifact | repeatable_procedure | run_local_report | global_index.
7. Critique attack: would this name have caused any of the observed failures?
```

Suggested finding block:

```markdown
## Durable Terms
| Term | Type | Plain Meaning | Not This | Status | Explicitness Form |
| --- | --- | --- | --- | --- | --- |
```

Suggested critique prompt:

```text
If this loop introduces or preserves durable terms, prosecute name-implied behavior:
Does the name make a future user or runner infer the wrong operation, artifact, status,
discovery mechanism, or authority?
```

Suggested legacy rule:

```text
If a term is identified as weak or transitional, later discipline outputs may cite it as a legacy alias,
but must not use it as the governing concept unless explicitly revived.
```

## Mechanism Coverage Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Six mechanisms converged on lightweight durable-term boundary validation rather than full naming review or pure renaming.

Survivors tested: 9 / 9.

Failure modes observed: none. Premature evaluation avoided by generating multiple prevention shapes before selecting the assembly. Survival bias checked by testing the uncomfortable heavy Naming Review option and the no-change option.

Overall: PROCEED.
