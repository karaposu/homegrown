---
status: active
corrects:
  - devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md
refines:
  - devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md
impacts:
  - homegrown/navigation/references/navigation.md
  - homegrown/protocols/multi_resolution_navigation.md
---
# Finding: Route Expansion Fields Necessity For Auto Navigation

## Changes from Prior

**Prior paths:**

- `devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md`
- `devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md`

**Revision trigger:** The user noticed that route-card fields like `Expansion`, `Expansion reason`, and `Child maps` would need to be updated over time. That creates maintenance burden and stale-state risk.

**What's preserved:** Multi-resolution Navigation still matters. A top-level Navigation map can be complete only at a declared resolution, and child maps may be needed for dense or uncertain route regions.

**What's changed:** The earlier recommendation to add route-card Expansion fields should not be implemented as required route-card state.

**What's new:** Expansion state should live in `_frontier.md`, not in every parent route card.

**Migration:** Do not patch `homegrown/navigation/references/navigation.md` with required `Expansion`, `Expansion reason`, and `Child maps` fields now. Use `homegrown/protocols/multi_resolution_navigation.md` and `_frontier.md` for expansion candidate state.

## Question

Are route-card Expansion fields needed for auto Navigation, or do they create unnecessary update burden and stale state?

The goal is to explain what Expansion fields would be for, whether auto Navigation can work without them, what risk they introduce, and where expansion state should live if the fields are deferred or avoided.

## Finding Summary

- Auto Navigation can work without route-card `Expansion`, `Expansion reason`, and `Child maps` fields.

- The fields are useful as human hints, but they are not load-bearing for automation.

- Required route-card Expansion fields would create duplicate state because `_frontier.md` already records expansion candidates, reasons, statuses, child paths, and resume state.

- `Child maps` is the riskiest field. It would become stale whenever child maps are created, moved, skipped, marked stale, or superseded.

- The better v1 design is: route cards describe routes; `_frontier.md` controls expansion.

- Multi-resolution Navigation should derive expansion candidates from existing route fields: priority, status, blockers, unlocks, WHY, guidance mode, and continuation note.

- If real use later proves a pre-ledger readability gap, add one optional non-authoritative `Expansion hint` field. Do not add three stateful fields now.

## Finding

### 1. The User's Concern Is Correct

Expansion fields look simple when they are first written.

They become expensive when the world changes.

If a parent route says:

```text
Expansion: needed
Child maps: none
```

then after a child map is created, someone or something must update the parent route.

If the child map becomes stale, the parent route must update again.

If the route is superseded, blocked, or moved into another branch, the parent route must update again.

That is exactly the kind of maintenance state Homegrown should avoid unless it is clearly load-bearing.

### 2. Expansion State Already Has A Better Home

The multi-resolution Navigation protocol already defines `_frontier.md`.

That file records:

- every discovered expansion candidate;
- expansion reason;
- eligibility;
- scheduling reason;
- status;
- child map path;
- blocked state;
- continuation note;
- resume instruction.

Those are the exact things route-card Expansion fields were going to carry.

So adding `Expansion`, `Expansion reason`, and `Child maps` to every route card would create dual authority:

```text
navigation.md route card says one thing
_frontier.md says another thing
```

When the two disagree, future sessions will not know which artifact to trust.

The authority should be simple:

```text
navigation.md = route meaning and reachability
_frontier.md = expansion candidates and child-map state
```

### 3. Auto Navigation Does Not Need These Fields

Auto Navigation can derive expansion candidates from existing route-card fields.

Examples:

- `Priority: HIGH` plus `Guidance mode: expand-on-selection` can signal possible expansion.
- `Blocked by` plus a complex blocker can signal a child map or unblock map.
- Many `Unlocks` can signal a dense route region.
- A weak `Continuation note` or uncertain WHY can signal under-mapped territory.
- `Status: blocked`, `deferred`, or `active` can shape expansion eligibility.

The multi-resolution protocol can scan those fields and create `_frontier.md` candidate records.

That means the route-card fields are not necessary for the end goal of auto Navigation.

They are a convenience for humans before the ledger exists.

### 4. The Cleanest v1 Design

Use this shape:

```text
ordinary navigation.md
  -> descriptive route cards only

multi_resolution_navigation.md
  -> scans route cards
  -> derives expansion candidates
  -> writes _frontier.md

_frontier.md
  -> source of truth for expansion status and child maps
```

If a multi-resolution run exists, the parent `navigation.md` may include a single map-level pointer:

```text
Expansion state: see _frontier.md
```

That is enough. It avoids storing child paths in every route card.

### 5. When An Expansion Hint Might Become Worth It

Do not kill the idea forever.

If a real Navigation run shows that humans cannot see which routes are under-mapped before `_frontier.md` exists, add one optional field:

```text
Expansion hint: none | consider | likely
```

But this must be non-authoritative.

It should mean:

```text
This route may deserve deeper mapping.
```

It should not mean:

```text
This route has current child-map state.
```

Do not add `Child maps` to ordinary route cards unless real evidence proves `_frontier.md` is insufficient.

## Next Actions

### MUST

- **What:** Do not patch `homegrown/navigation/references/navigation.md` with required route-card `Expansion`, `Expansion reason`, and `Child maps` fields now.
  **Who:** Navigation reference document.
  **Gate:** Before the first multi-resolution Navigation trial.
  **Why:** Avoids duplicate state and parent-map update burden.

- **What:** Treat `_frontier.md` as the source of truth for expansion candidates, status, child paths, and resume state.
  **Who:** `homegrown/protocols/multi_resolution_navigation.md` and future operators.
  **Gate:** Every multi-resolution Navigation run.
  **Why:** Keeps expansion state in one durable control artifact.

- **What:** Run one multi-resolution Navigation trial using existing route cards and `_frontier.md`.
  **Who:** User plus Navigation.
  **Gate:** Before adding route-card expansion hints.
  **Why:** Tests whether the fields are actually needed or only seemed useful in theory.

### COULD

- **What:** Add a map-level pointer in parent Navigation maps after a multi-resolution run exists: `Expansion state: see _frontier.md`.
  **Who:** Future multi-resolution Navigation output.
  **Gate:** First real multi-resolution run.
  **Why:** Helps readers find expansion state without duplicating it.

- **What:** Add one optional `Expansion hint` field later.
  **Who:** `homegrown/navigation/references/navigation.md`.
  **Gate:** Only if the first trial shows readers cannot identify under-mapped routes before `_frontier.md` exists.
  **Why:** Gives lightweight readability without owning child-map state.

### DEFERRED

- **What:** Add `Child maps` to route cards.
  **Gate:** Revive only if `_frontier.md` repeatedly fails as a discoverable child-map index after at least two multi-resolution runs.
  **Why (if revived):** Parent maps may need inline child links for readability, but this is not proven and has stale-state risk.

## Reasoning

Adding all three fields as required route-card state was killed. It gives visibility, but it duplicates `_frontier.md`, increases route-card density, and creates stale update work.

Adding the fields only for multi-resolution-ready maps was refined. It reduces bloat, but still risks dual authority if parent route cards and `_frontier.md` both store child-map state.

Using `_frontier.md` as the expansion authority survived. It already carries the fields automation needs and can be updated after every child-map operation.

A future optional `Expansion hint` survived only as a deferred possibility. It should be a hint, not state, and should be added only if a real trial shows humans need it.

The final answer is:

```text
Expansion fields are not necessary for auto Navigation.
Expansion state belongs in _frontier.md.
Do not add required route-card Expansion fields now.
```

## Open Questions

### Monitoring

After the first multi-resolution Navigation trial, check whether `_frontier.md` made expansion state easy enough to resume.

### Refinement Triggers

Add an optional `Expansion hint` only if a real user or future session cannot tell which routes are under-mapped before `_frontier.md` exists.

Add inline `Child maps` only if `_frontier.md` fails as a child-map index after at least two real multi-resolution runs.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 


With them, it also says:

  This direction is already clear enough.
  This direction is dense/uncertain and needs its own child map.
  This direction already has child maps here.



hmm, but then this might get problem to update them yes? if possible we would like to avoid this... maybe they are not needed?  why they are important? for our end goal of using auto navigation , it is possible without them ?
```

</details>

