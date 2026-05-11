---
status: active
refines:
  - devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md
  - devdocs/inquiries/2026-05-04_05-35__navigation_map_format_guidelines_density/finding.md
corrected_by:
  - devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md
---
# Finding: Recursive Navigation Coverage

## Changes from Prior

**Prior paths:**

- `devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md`
- `devdocs/inquiries/2026-05-04_05-35__navigation_map_format_guidelines_density/finding.md`

**Revision trigger:** The user noticed that asking Navigation to "list all possible directions" may not produce truly comprehensive coverage. The user proposed first finding main directions, then running Navigation again for each main direction, and using MVL or another operation afterward to choose top options.

**What's preserved:** Navigation remains an enumeration discipline. It maps route space; it does not choose, plan, implement, or automatically route the system.

**What's changed:** A Navigation map should now be understood as complete only at a declared resolution. A single flat map can be useful and valid without being the final expansion of every subspace.

**What's new:** The right concept is **multi-resolution Navigation**. Navigation can produce a top-level map, mark routes that need deeper expansion, and allow child Navigation maps for selected or flagged route regions.

**Migration:** Do not introduce automatic recursive Navigation. Later correction: do not add required `Expansion`, `Expansion reason`, or `Child maps` fields to ordinary route cards. Use `homegrown/protocols/multi_resolution_navigation.md` and `_frontier.md` as the expansion-state authority.

**Later correction:** `devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md` corrects the route-card field recommendation in this finding. Multi-resolution Navigation still survives, but expansion candidates, child-map paths, statuses, and resume state should live in `_frontier.md`, not in parent route cards.

## Question

Does iterative or recursive Navigation make sense as the way to get comprehensive route coverage for the codebase/project, while leaving top-option selection to a later MVL or decision step?

The goal is to clarify whether Navigation should run in layered passes, how those passes should be bounded, how main directions and sub-directions relate, and where Navigation must stop so selection/priority judgment remains outside Navigation's job.

## Finding Summary

- The user's iterative understanding is correct: one flat Navigation run is not enough to guarantee comprehensive coverage across a large project.

- The stronger framing is **multi-resolution Navigation**, not automatic recursion.

- A top-level Navigation map should identify main directions and preserve blocked, deferred, low-priority, and risky routes.

- A route can later become an expansion candidate when it is dense, important, blocked, uncertain, high-value, or explicitly selected by the user. That candidate state should be recorded in `_frontier.md`, not as required fields in the parent route card.

- Child Navigation maps should be subordinate to parent routes. They need parent route identity, source authority, inherited context, child scope, and a way to compose back into the parent map.

- Running child Navigation maps in parallel can make sense later, but not before child-map and composition contracts exist.

- MVL, MVL+, the user, a selector protocol, or a materialization request can evaluate top options after the map exists. That is not Navigation's job.

- The next small operational step is to trial multi-resolution Navigation using existing route cards plus `_frontier.md`. Do not add required route-card Expansion fields before that trial.

## Finding

### 1. One Flat Navigation Map Cannot Carry Full Coverage

Navigation currently says it enumerates the full space of possible next directions. That remains correct, but it needs one extra precision: full at what resolution?

A project-level Navigation map can list the major movement regions. It cannot also list every sub-route inside every region without becoming too large, too dense, and too attention-heavy. If it tries, it will usually fail in one of two ways.

First, it may preserve readability by omitting deeper routes. That creates false completeness.

Second, it may include too many subroutes in one map. That creates a document the user cannot scan and future warm-up cannot easily reconcile.

The better model is borrowed from maps: a world map and a city map can both be complete, but they are complete at different zoom levels.

Navigation should work the same way.

### 2. Recursive Navigation Is Valid Only As Resolution Expansion

The user's proposal has the right shape:

```text
find the main project directions
run Navigation deeper for each important direction
compose the route space
then evaluate top options outside Navigation
```

The important refinement is that Navigation should not automatically recurse into every route.

Automatic recursion has no safe stopping rule yet. It can create too many artifacts. It can also turn traversal order into hidden selection: the first routes expanded receive more attention, so they begin to look more important even if no selection decision was made.

The stable form is:

```text
top-level map
  -> derive expansion candidates from existing route fields
  -> create child maps only where justified
  -> record candidate status, child paths, and resume state in _frontier.md
```

This is multi-resolution Navigation.

### 3. Expansion State Belongs In `_frontier.md`

The current route-card contract already has fields like `Direction`, `Goal`, `Type`, `Priority`, `Status`, `Blocked by`, `Purpose`, `Movement`, `Unlocks`, `Why this route exists`, `Guidance mode`, and `Continuation note`.

Those fields are enough for a route snapshot. They are also enough for the multi-resolution protocol to derive expansion candidates.

The earlier version of this finding recommended adding:

```text
Expansion: no | optional | needed
Expansion reason: [density, uncertainty, blocker complexity, high value, user request, none]
Child maps: [links or none]
```

That recommendation is now corrected.

The problem is update burden. If `Child maps` appears in a parent route card, it must be updated whenever child maps are created, moved, skipped, marked stale, or superseded. If the parent route card and `_frontier.md` disagree, future sessions will not know which artifact to trust.

The cleaner authority split is:

```text
navigation.md = route meaning, reachability, evidence, guidance, and continuation
_frontier.md = expansion candidates, expansion reasons, statuses, child paths, and resume state
```

This still lets Navigation be honest about resolution. The honesty lives in the multi-resolution run and `_frontier.md`, not in required per-route fields.

### 4. Child Maps Need Parent Identity

A child Navigation map should not be an independent map floating in `devdocs/navigation/` with no lineage.

It should state:

```text
Parent map:
Parent route:
Child question:
Resolution:
Source authority:
Inherited context:
Additional sources:
Output:
Composition note:
```

The most important fields are `Parent route` and `Source authority`.

Without `Parent route`, the future reader cannot tell what region the child map expanded.

Without `Source authority`, the child map may look like current truth even though it was based on partial context.

### 5. Composition Matters More Than Parallelism

The user is also right that once main directions exist, child Navigation could eventually run in parallel.

That is not the load-bearing breakthrough yet.

Parallel child maps are useful only if their outputs can be composed. Without a shared child-map contract, parallelism multiplies files and increases the user's burden.

The correct order is:

```text
child-map contract first
one manual child-map trial second
_frontier.md resume/readability convention third
parallel child maps later
```

Parallelism should be treated as an execution optimization, not the coverage concept itself.

### 6. MVL Can Evaluate Top Options After Navigation

The user is right that finding the top options is not Navigation's job.

Navigation can show priority, status, blockers, reasons, and continuation notes. Multi-resolution Navigation can then derive expansion candidates from those fields and record the expansion state in `_frontier.md`. Those are map and ledger properties. They help a human or later evaluator understand the route space.

They are not commitment.

After a top-level map and any needed child maps exist, MVL or MVL+ can evaluate the composed map. That loop can ask which routes best serve the current goal, which routes are load-bearing, which are blocked, and which should be materialized first.

This keeps the boundary clean:

```text
Navigation = enumerate route space
MVL / selector / user = choose or evaluate
Materialization = turn selected decision into files
Outcome review = check whether the used result worked
```

## Next Actions

### MUST

- **What:** Treat future Navigation maps as resolution-scoped snapshots.
  **Who:** Navigation discipline and future operators.
  **Gate:** Any time a Navigation map is expected to be comprehensive across a broad project state.
  **Why:** Prevents one flat map from being mistaken for full subspace coverage.

- **What:** Treat `_frontier.md` as the source of truth for expansion candidates, statuses, child-map paths, and resume state.
  **Who:** `homegrown/protocols/multi_resolution_navigation.md` and future operators.
  **Gate:** Every multi-resolution Navigation run.
  **Why:** Avoids duplicate expansion state in parent route cards and prevents stale child-map pointers.

- **What:** Do not add required `Expansion`, `Expansion reason`, or `Child maps` fields to ordinary route cards.
  **Who:** Navigation reference document and future route-map authors.
  **Gate:** Before the first multi-resolution Navigation trial.
  **Why:** Existing route fields are enough to derive candidates; `_frontier.md` owns expansion state.

- **What:** Keep top-option selection outside Navigation.
  **Who:** Navigation discipline, MVL/MVL+, user selection, future selector protocol.
  **Gate:** Every Navigation run that produces route priorities or expansion candidates.
  **Why:** Prevents priority and traversal order from becoming hidden commands.

### COULD

- **What:** Trial one manual child Navigation map from a parent route in the next real Navigation use.
  **Who:** User plus Navigation discipline.
  **Gate:** After a top-level route map has at least one dense, uncertain, blocked, high-value, or explicitly selected route whose subspace needs deeper mapping.
  **Why:** Tests whether the child-map idea is useful before creating a runner or adding optional route-level hints.

- **What:** Define a minimal child-map header contract.
  **Who:** `homegrown/protocols/multi_resolution_navigation.md` or a future Navigation handoff artifact.
  **Gate:** Before creating more than one child map from a parent Navigation map.
  **Why:** Parent identity and source authority are required for later composition.

- **What:** Add a map-level pointer after a multi-resolution run exists: `Expansion state: see _frontier.md`.
  **Who:** Future multi-resolution Navigation output.
  **Gate:** First real multi-resolution run.
  **Why:** Helps readers find expansion state without duplicating it in route cards.

- **What:** Run MVL/MVL+ over a composed parent-plus-child map when top-option choice is high-stakes.
  **Who:** User or future selector workflow.
  **Gate:** When the map contains multiple plausible high-priority routes and the next commitment is unclear.
  **Why:** Gives top-option selection a real reasoning loop instead of smuggling selection into Navigation.

### DEFERRED

- **What:** Parallel child Navigation for every main direction.
  **Gate:** Revive after the child-map contract and composition convention have survived at least one manual trial.
  **Why (if revived):** It can increase coverage speed once child outputs are mergeable.

- **What:** A full `recursive_navigation.md` protocol.
  **Gate:** Revive after at least two real Navigation sessions need child maps and README/reference guidance proves insufficient.
  **Why (if revived):** A protocol may be needed if parent/child map handling becomes repeated and error-prone.

- **What:** Navigation atlas or route graph infrastructure.
  **Gate:** Revive after several parent and child maps become hard to traverse in Markdown.
  **Why (if revived):** A graph or atlas may eventually help with accumulated route state, but it is premature now.

- **What:** Add a route-card `Expansion hint`.
  **Gate:** Revive only if a real multi-resolution trial shows that readers cannot identify under-mapped routes before `_frontier.md` exists.
  **Why (if revived):** A non-authoritative hint may improve readability, but it should not store child-map state.

## Reasoning

The flat-map-only option was killed. Its defense is simplicity: one map is easier to produce and easier to store. Its prosecution is stronger: a broad project has too much internal route space for one flat map to fully expose without either omitting subroutes or becoming unreadable.

Automatic recursive Navigation was killed. Its defense is maximum coverage. Its prosecution is stronger: it has no safe stop condition, creates artifact explosion, and turns traversal order into hidden selection pressure.

Parallel child Navigation was killed as an immediate default. Its defense is speed and coverage. Its prosecution is stronger at the current stage: without a child-map contract and composition rules, parallelism only multiplies outputs the user must reconcile.

The Navigation-atlas idea was deferred. It is directionally useful, but the project does not yet have enough child maps to justify atlas infrastructure.

The child-map contract survived with refinement. It is necessary before serious recursive or parallel Navigation, but the active contract now belongs in `homegrown/protocols/multi_resolution_navigation.md`, with `_frontier.md` as the control sidecar.

The `Expansion` field idea is now corrected by `devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md`. Required route-card Expansion fields should not be added now because they duplicate `_frontier.md` and create stale update work. A future optional `Expansion hint` remains deferred.

The MVL-after-Navigation idea survived. It preserves the boundary between enumeration and selection. Navigation produces the route space; MVL or another commitment authority evaluates top options.

The final assembly survived because it handles both needs at once:

```text
better coverage through deeper maps
bounded complexity through explicit expansion rules
clean discipline boundary through external selection
future scalability through child-map composition
```

## Open Questions

### Monitoring

After one Navigation map uses `Expansion` fields, check whether the user can see where coverage is complete and where deeper mapping is still needed.

After one multi-resolution Navigation trial creates `_frontier.md`, check whether the user can see where coverage is complete, where deeper mapping remains pending, and where child maps live.

After one manual child map is created, check whether future warm-up can understand the parent-child relationship from `_frontier.md` and child-map headers without user explanation.

### Refinement Triggers

Create or refine a dedicated child-map runner only if two real Navigation runs need child maps and the parent-child relationship is handled inconsistently despite `_frontier.md`.

Require a route index or map-of-maps composition artifact if a Navigation result exceeds 10 route cards plus child maps and becomes hard to scan.

Reopen parallel child Navigation only after parent route IDs, child-map headers, and composition rules are stable.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

i am also thinking , to find all directions, to list all of possible paths, we need iterative/recursive run of navigaiton...

first, what are the main directions in this codebase... and then we will run navigation in parallel for each main directions ...

does this makes sense?

and once navigation map is complete, we can run MVL to find top options but this is not nacigations job

does my iterative understanding makes sense? because simply saying list all to navigation doesnt give us comprehensive results... and we need that comprehensive coverage
```

Runner context pasted by the user after the question is omitted because it was invocation mechanics, not part of the substantive design question.

</details>
