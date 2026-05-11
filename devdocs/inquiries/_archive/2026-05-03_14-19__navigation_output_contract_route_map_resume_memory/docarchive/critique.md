# Critique: Navigation Output Contract, Route Map, And Resume Memory

## User Input

Evaluate whether current Navigation supports structured comprehensive route maps with movement information, blocked paths, route purposes, and saved Markdown continuation memory.

## Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Navigation identity | 25 | Refinement preserves Navigation as enumeration, not selection/planning. |
| Completeness | 25 | All routes, including blocked routes, can be represented. |
| Continuation value | 20 | Saved maps can help future sessions understand prior route space and movement. |
| Simplicity | 15 | Uses Markdown contract refinements, not premature infrastructure. |
| Coherence with current spec | 10 | Extends existing WHY/guideline/gate model rather than replacing it. |
| Correctness cleanup | 5 | Fixes known taxonomy mismatch. |

## Fitness Landscape

### Viable Region

Patch Navigation's Markdown output contract and warm-up read rules while keeping Navigation non-selective.

### Dead Region

Keep the current contract unchanged, hide blocked routes, or build a heavy route graph engine before Markdown route maps have been tried.

### Boundary Region

Adding movement fields is viable only if movement remains descriptive and does not become sequencing, ownership, or schedule.

### Unexplored Region

How route maps behave after several real Navigation runs.

## Candidate Verdicts

### Candidate A - Keep Current Navigation Contract As-Is

#### Prosecution

Current Navigation already has item structure, but it does not make route purpose, route status, movement, blocked-by/unlocks, or continuation notes explicit. Future warm-up would need to infer too much.

#### Defense

The current contract has full enumeration, WHY, guidelines, gates, and `UNBLOCK`, so it may be enough.

#### Collision

The defense proves the foundation exists, not that the stronger route-map contract exists.

#### Verdict

**KILL.**

Constructive output:

Keep the current foundation, but patch the route-map fields.

### Candidate B - Add Route Fields To Navigation Items

#### Prosecution

More fields may make output heavier and more rigid.

#### Defense

The fields are exactly what makes the map durable: purpose, movement, status, blocked-by/unlocks, and continuation notes. They reduce future inference burden.

#### Collision

Defense wins if fields stay concise and optional where genuinely unknown.

#### Verdict

**SURVIVE.**

Constructive output:

Use this item shape:

```text
[confidence] [TYPE]: [route title] [status]
  Purpose: ...
  Movement: current state -> target state
  WHY: ...
  Blocked by: ...
  Unlocks: ...
  Guidelines:
  - pointer -> why
  Continuation note: ...
```

### Candidate C - List Blocked Routes In Main Map

#### Prosecution

Blocked routes may clutter the map and distract from available work.

#### Defense

The user's key requirement is comprehensive route visibility. A blocked route is still part of the possibility space. If hidden, the system forgets what the unblock check is for.

#### Collision

Defense wins. Status labels solve the clutter problem better than omission.

#### Verdict

**SURVIVE.**

Constructive output:

Blocked routes should appear with `Status: blocked` and a linked `UNBLOCK` route/check.

### Candidate D - Make Prior Navigation Maps Warm-Up Sources

#### Prosecution

Prior maps can be stale. Reading them may reintroduce old route ideas and confuse current state.

#### Defense

Warm-up already handles stale/conflicting artifacts. Prior maps are uniquely valuable because they record routes not chosen, blocked paths, and movement-space options that findings do not preserve.

#### Collision

Defense wins if warm-up treats maps as evidence, not authority.

#### Verdict

**SURVIVE.**

Constructive output:

Warm-up should read previous `navigation.md` and `devdocs/navigation/*.md` files, then classify route states as open, active, blocked, done, stale, or superseded when evidence allows.

### Candidate E - Build A Separate Route Graph Engine

#### Prosecution

This is premature. The system does not yet have enough Navigation map usage to justify infrastructure.

#### Defense

A graph engine may eventually help with dependencies and resume state.

#### Collision

Defense identifies a future possibility, not a current need.

#### Verdict

**DEFER.**

Constructive output:

Consider only after multiple Markdown maps show recurring graph-management pain.

### Candidate F - Fix 15/16 Taxonomy Mismatch

#### Prosecution

Minor cleanup, not central to route maps.

#### Defense

It is a real spec inconsistency. Navigation cannot be trusted as a contract if its skill file and reference disagree on type count.

#### Collision

Defense wins.

#### Verdict

**SURVIVE.**

Constructive output:

Patch `homegrown/navigation/SKILL.md` to say 16-type taxonomy.

## Assembly Check

The strongest assembly is:

```text
1. Patch Navigation reference output format with route fields.
2. Require blocked routes in the main map.
3. Keep Excluded for structurally inapplicable types only.
4. Add route telemetry:
   - route fields present;
   - blocked routes represented;
   - prior-map continuity considered.
5. Patch warm-up v1/v2/v3 to read previous Navigation maps.
6. Fix 15/16 taxonomy mismatch.
7. Defer route graph infrastructure.
```

This assembly preserves Navigation's identity. It maps routes; it does not select or schedule them.

## Coverage Map

| User Requirement | Covered By Current Spec? | Needed Refinement |
| --- | --- | --- |
| Structured list | Yes | Add stable route fields. |
| All possible routes | Mostly | Make blocked routes main-map items. |
| Movement information | Partial | Add Movement field. |
| Blocked paths | Partial | Add Status, Blocked by, Unlocks. |
| Route purpose | Partial | Add Purpose field separate from WHY. |
| Resume from Markdown maps | Potential | Warm-up must read prior maps; maps need continuation notes. |

## Signal

**TERMINATE** with refinements.

The original question is answered: current Navigation supports the foundation but not the full route-map/continuation-memory contract.

## Convergence Telemetry

- **Dimension coverage:** strong. The critique checked identity, completeness, continuation value, simplicity, coherence, and correctness cleanup.
- **Adversarial strength:** strong. It killed unchanged status quo and deferred route graph infrastructure.
- **Landscape stability:** stable. Survivors converge on Markdown route-map refinement.
- **Clean survivor exists:** yes, route-map contract patch plus warm-up source patch.
- **Failure modes observed:** no rubber-stamping; no nitpicking. Self-reference risk is bounded by concrete file evidence.
- **Overall:** PROCEED.
