
> **Loading note.** This file is loaded by `navigation/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — framework, components, process, failure modes — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Navigation — A Thinking Discipline

A thinking discipline for enumerating all possible next directions after a cognitive cycle completes. Navigation reads what was produced (survivors, refinements, kill seeds, frontier questions, telemetry signals) and maps the full space of what could come next — each direction with its purpose, route state, reasoning, and adaptive guidance.

Navigation is a BOUNDARY discipline — it operates between cognitive cycles, not within them. It looks FORWARD: given what this cycle produced, what are all the possible next directions?

> **Structural Navigation is the process of transforming a completed cognitive cycle's output into a full enumeration of typed next directions, each with purpose, movement, reachability state, independent reasoning, and guidance depth scaled to route importance — producing a navigation map that reveals the complete possibility space without filtering or selecting.**

---

## What Navigation Is

**Navigation is the cognitive operation of seeing ALL possible next moves from the current position and making them explicit.**

Navigation is not:
- Decision-making (navigation ENUMERATES possibilities. Choosing which to pursue is a separate operation)
- Planning (navigation maps the space and records descriptive reachability. Sequencing, ownership, and scheduling are separate)
- Wayfinding (wayfinding produced ONE direction — the "best" one. Navigation produces ALL directions and lets the selector decide)
- Reflection (reflection looks BACKWARD at process quality. Navigation looks FORWARD at possibility space)
- Routing (routing is mechanical dispatch — "S done, run I next." Navigation is cognitive — understanding what possibilities exist and why)

Navigation has one structural operation:

**Enumeration** — reading the cycle's output and producing a typed, reasoned, route-state-aware route map of every possible next direction. The enumeration is COMPLETE (all possibilities, not a filtered subset) and TYPED (each direction has a category and type from the taxonomy).

---

## The Transform

**Input:** A completed SIC cycle's output — C's verdicts (survivors, refinements, kill seeds), frontier questions, telemetry from S/I/C, scope check results, and optionally R's process observations.

**Output:** A navigation map — the full enumeration of possible next directions, each as a navigation item with direction + goal + type + priority + status + blockers/unlocks + purpose + movement + WHY + adaptive guidance + continuation note.

**The transform:** SIC output → possibility space. What was produced → what could come next.

---

## Navigation Item Structure

Each item in the navigation map is a route record. It uses a reader-first route-card hierarchy: route identity, route state, route meaning, evidence, adaptive guidance, and continuation memory.

### Route identity + route state

WHAT the route is, what it would serve, and whether it is reachable from the current state.

- **Direction** — the human-readable route name or route title
- **Goal** — the compact target-state label this route is trying to reach
- **Type** — the type from the 16-type taxonomy
- **Priority** — `HIGH`, `MEDIUM`, or `LOW`, based on evidence strength and route importance
- **Status** — the route's reachability or lifecycle state: open, blocked, deferred, active, done, stale, or superseded
- **Blocked by** — the gate, missing evidence, missing artifact, or condition preventing movement; use `none` when unblocked

### Route meaning

WHY this route matters and what movement it represents.

- **Purpose** — what this route would serve, reveal, or unlock
- **Movement** — the descriptive transition this route represents: current state → target state
- **Unlocks** — one or more downstream routes, checks, decisions, or artifacts this route may open; use `unknown` when unclear

These fields are required on every included route. If the value is not known, say `unknown`. If the field does not apply, say `none`. Do not omit the field; omission makes the map harder to resume from later.

### Reasoning

WHY the route is worth considering.

- **WHY** — the evidence from C's output, telemetry, or context that makes this direction worth considering

### Adaptive guidance

HOW to approach the direction, with depth scaled to route importance, risk, and action proximity.

Guidelines are useful, but full Guidelines are not mandatory on every route. Navigation's first job is route-space coverage. Guidance depth must not crowd out meaningful routes.

Every route must declare a `Guidance mode`:

- **none** — allowed only for low-priority or deferred routes when `WHY` and `Continuation note` are sufficient for memory.
- **compact** — 1-2 critical pointers; the default for most routes.
- **full** — 3-5 pointers with reasons; use for high-risk, blocked, near-action, or especially important routes.
- **expand-on-selection** — defer full guidance until the user, selector, or materialization protocol selects the route.

Default guidance allocation:

- `HIGH`, risky, blocked, or near-action routes: `compact` or `full`.
- `MEDIUM` open/deferred routes: `compact`.
- `LOW` or deferred routes: `none` or `compact`.
- Selected route: `full` or `expand-on-selection`.

Each guideline that is included must carry its own WHY. Guidelines don't need to connect to each other — they each independently relate to the direction. They're parallel coordinates pointing at the same destination from different angles.

Guidelines can address any discipline step:
- S guidelines: "Focus on X" → bc [reason]
- I guidelines: "Try domain transfer from A" → bc [reason]
- C guidelines: "Check for trap D" → bc [reason]
- General: "Elegance matters here" → bc [reason]

### Continuation note

What a future warm-up should remember about this route. This is not an instruction to pursue the route. It is durable context for later Navigation: why the route existed, what changed, what remained blocked, or what evidence would make the route live again.

### Example

```
### Route 1: Test the taxonomy's completeness

Direction: Test the taxonomy's completeness
Goal: usage-tested Navigation taxonomy
Type: DEEPEN
Priority: HIGH
Status: open
Blocked by: none

Purpose: test whether the 16-type taxonomy is complete enough for real Navigation runs.
Movement: first-pass taxonomy → usage-tested taxonomy.
Unlocks: taxonomy refinement routes; telemetry improvements; possible type consolidation.
Why this route exists: 16 types is a first-pass enumeration and has not been tested against enough real use.

Guidance mode: compact
Guidance:
- Check against actual SIC/MVL runs → bc real usage is the only valid test of completeness.
- Look for overlapping types such as DEEPEN vs RE-RUN DEEPER → bc blurred route types weaken future route selection and continuation memory.

Continuation note: if repeated runs show overlap between DEEPEN and RE-RUN DEEPER, reopen the taxonomy boundary.
```

---

## The 16-Type Taxonomy

When a SIC cycle completes, the possible next directions fall into 16 types across 3 categories.

### Content-Directed (acting on WHAT the cycle produced)

| Type | What it does | Trigger |
|---|---|---|
| **DEEPEN** | Go deeper on a survivor — investigate an unexplored aspect | C: SURVIVE + surface-level |
| **REFINE** | Fix a specific weakness C identified | C: REFINE verdict |
| **PURSUE SEED** | Follow what can be learned from a killed idea | C: KILL + promising seed |
| **INVESTIGATE FRONTIER** | Answer a question the cycle raised but didn't answer | Frontier question matters for goal |
| **DEVELOP** | Make a survivor concrete — implement, prototype, document | C: SURVIVE + mature enough for action |
| **TERMINATE** | The question is answered. Compile and stop. | Answer matches goal |

### Process-Directed (acting on HOW the cycle ran)

| Type | What it does | Trigger |
|---|---|---|
| **RE-RUN DEEPER** | Re-run a discipline with more depth | Telemetry flagged thin |
| **WIDEN** | Expand the question's scope | Scope check: question doesn't cover goal |
| **REFRAME** | Change the question entirely | Multiple iterations without progress |
| **DIFFERENT APPROACH** | Try a different cognitive approach | Current approach not advancing goal |
| **DIAGNOSE** | Drop back to sensemaking on the gap — the inquiry process itself is broken (not the candidates) | Sensemaking-stall signals: oscillation across iterations (refinements fix X but break Y), velocity negative for 2+ iterations, OR layer-conflict (memory of past kill conditions contradicts current convergence signals) |

### Context-Directed (acting on information OUTSIDE this cycle)

| Type | What it does | Trigger |
|---|---|---|
| **REVISIT** | Re-evaluate a prior finding under new conditions | New info changes past conditions |
| **UNBLOCK** | Resolve a dependency preventing progress | Blocker identified |
| **MERGE** | Combine results from multiple branches | Multiple branches completed |
| **TEST** | Verify a finding against reality | Finding needs validation, not analysis |
| **CONSOLIDATE** | Integrate findings across multiple inquiries | Multiple inquiries need unification |

**REVISIT modes (sub-actions):** REVISIT operates in three directions:

| Mode | What it does | When triggered |
|---|---|---|
| **RESURRECT** | A killed idea becomes possibly viable | New info contradicts the kill condition |
| **INVALIDATE** | A surviving idea becomes possibly dead | New info undermines the survival condition |
| **REVERT** | A refined idea returns to earlier version | New info shows refinement degraded it |

Threshold for triggering REVISIT self-adjusts based on loop state: low in early iterations (sparse coverage, even moderate relevance is worth revisiting), high near convergence (don't destabilize a converging search), minimum when no SURVIVE candidates exist (any possible unlock worth investigating).

### Why Three Categories

- **Content-directed** acts on the OUTPUTS — what was produced
- **Process-directed** acts on the QUALITY — how well the cycle ran
- **Context-directed** acts on INFORMATION OUTSIDE — prior work, blockers, parallel efforts

The category tells you WHERE to look for the right next direction.

---

## The Navigation Map

The navigation map is the FULL enumeration of possible next directions, presented for review.

### Format

```
## Navigation Map ([N] items, [H] HIGH)

### Content [count]

### Route [number]: [direction / route title]

Direction: [human-readable route title]
Goal: [compact target-state label]
Type: [one of the 16 Navigation types]
Priority: [HIGH | MEDIUM | LOW]
Status: [open | blocked | deferred | active | done | stale | superseded]
Blocked by: [gate, missing evidence, missing artifact, condition, none, or unknown]

Purpose: [what this route would serve, reveal, or unlock]
Movement: [current state] → [target state]
Unlocks: [one or more downstream routes/checks/decisions/artifacts, or unknown]
Why this route exists: [evidence]

Guidance mode: [none | compact | full | expand-on-selection]
Guidance:
- [pointer 1] → [why this pointer matters]
- [pointer 2] → [why]

Continuation note: [what a future warm-up should remember]

### Process [count]
...

### Context [count]
...

### Excluded (considered and rejected)
✗ [TYPE] — [why structurally inapplicable]
```

For large maps, an optional route index may appear before route details:

```
## Route Index

| # | Direction | Goal | Type | Priority | Status | Blocked by |
|---|---|---|---|---|---|---|
| 1 | [route title] | [compact goal] | [TYPE] | [HIGH/MEDIUM/LOW] | [status] | [blocker or none] |
```

Use the index when the map has more than 10 routes, when the route-card section becomes hard to scan, or when the user asks for a compact overview. The index is a scan layer; route cards remain the canonical detail records.

### Priority / Confidence

- **HIGH** — strong evidence from C's output or project context; likely load-bearing.
- **MEDIUM** — moderate signal; worth tracking or possibly pursuing.
- **LOW** — weak or deferred signal; preserve for memory, but do not let it crowd out higher-value routes.

Priority is a ROUGH signal for implicit prioritization, not a precise measurement and not an automatic selection.

### Excluded Section

Types that navigation considered and REJECTED, with reasoning.

Only STRUCTURALLY inapplicable types belong here (e.g., CONSOLIDATE when only 1 inquiry exists). A route is structurally inapplicable when it does not fit the current possibility space at all.

Blocked routes do not belong in Excluded. A blocked route is still part of the possibility space; it is just not reachable yet. Keep it in the main map with `Status: blocked`, fill `Blocked by`, and connect it to the relevant `UNBLOCK` route/check when one exists.

Low-priority items also stay in the main map with `Priority: LOW`. Low priority means deprioritized, not excluded.

---

## Process Model

### Step 1: Read the Cycle's Output

Read everything produced by the completed SIC cycle:
- C's verdicts (SURVIVE, REFINE, KILL with seeds)
- Frontier questions from S, I, C
- Telemetry from all three disciplines
- Scope check results (does the question cover the goal?)
- The original question and goal
- R's observations (if R ran before N)

**Reachability check:** Before assigning types, identify which directions are accessible from current state and which are gated behind prerequisites. A gate has three parts: blocked region (what becomes reachable when the gate opens), condition (what must be true), current state (open or closed). For each detected gate: log it and encode it into the affected route records. The affected route gets `Status: blocked` or `Status: open`, the gate appears in `Blocked by`, and possible downstream openings appear in `Unlocks`. If a gate blocks an otherwise-promising direction, keep that direction in the main map as a blocked route and add or link an `UNBLOCK` route/check that names the condition.

### Step 2: Assign Types

For each signal in the output, assign a type from the taxonomy:
- C: SURVIVE → DEEPEN or DEVELOP (depending on depth/readiness)
- C: REFINE → REFINE
- C: KILL + seed → PURSUE SEED
- Frontier question → INVESTIGATE FRONTIER
- Telemetry below threshold → RE-RUN DEEPER
- Scope check gap → WIDEN
- Answer matches goal → TERMINATE
- Blocker identified → UNBLOCK
- Testable hypothesis → TEST
- Branches completed → MERGE
- Sensemaking-stall signals (oscillation, velocity negative 2+ iterations, layer-conflict) → DIAGNOSE

For human-judgment types (REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE): flag as available but don't auto-derive. The human adds these based on their assessment.

### Step 3: Allocate Guidance And Generate Pointers

For each direction, first choose the `Guidance mode`:

- `none` for low-priority or deferred routes where `WHY` and `Continuation note` are enough.
- `compact` for most routes.
- `full` for high-priority, risky, blocked, near-action, or especially important routes.
- `expand-on-selection` when full guidance should wait until the route is selected.

Then generate the appropriate number of independently reasoned pointers:

- `none`: no guidance lines.
- `compact`: 1-2 critical pointers.
- `full`: 3-5 pointers.
- `expand-on-selection`: a one-line statement of what should be expanded if selected.

Draw guidance from:
- C's specific findings (prosecution arguments, defense strengths)
- R's observations (if available — process weaknesses become guidelines)
- The question/goal context (what the user cares about)
- Each included guideline gets its own WHY

### Step 4: Assess Priority / Confidence

Assign `Priority` based on evidence strength and route importance:
- `HIGH` = explicit data, strong project relevance, load-bearing dependency, active blocker, or near-action route.
- `MEDIUM` = inferred but meaningful signal, borderline telemetry, or route worth preserving for likely follow-up.
- `LOW` = weak, deferred, or speculative signal that should remain visible without competing with stronger routes.

### Step 5: Check Excluded

For each of the 16 types: is it structurally inapplicable? If yes, add to excluded section with reasoning. If no but low priority, keep in map with `Priority: LOW`. If the route is meaningful but blocked, it must remain in the main map with `Status: blocked` and must connect to the relevant `UNBLOCK` route/check when that check is known.

### Step 6: Format the Map

Group by category (content/process/context). Order by priority within each category. Use the route-card format for every included route. Include every required route field for each item: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, and Continuation note. Include Guidance lines according to the selected Guidance mode. Include the excluded section for structurally inapplicable types.

---

## Failure Modes

Navigation fails in predictable ways:

### 1. Premature Filtering

Only showing obvious options. Missing subtle but important directions. The map looks clean but the possibility space is incompletely explored.

**How to recognize:** The map has few items (3-4) when the SIC output was rich. Multiple C verdicts are not represented. Frontier questions are missing.

**How to prevent:** Check every C verdict type (SURVIVE, REFINE, KILL) — each should produce at least one navigation item. Check telemetry — any flag should produce a process-directed item. Check frontier questions — each should produce an INVESTIGATE FRONTIER item.

### 2. Recency Bias

Over-weighting what C just produced. Under-weighting context-directed types (REVISIT, UNBLOCK, CONSOLIDATE). The map is dominated by "more of what we just did" without stepping back to check the broader context.

**How to recognize:** All items are content-directed. No process or context items. The map responds to THIS cycle's output but ignores the larger situation.

**How to prevent:** Explicitly check all three categories. If process and context are empty, ask: "Is there genuinely nothing to improve in the process and nothing in the broader context?" Usually there is.

### 3. Action Bias

Only producing "do more" types (DEEPEN, DEVELOP, INVESTIGATE). Missing "do differently" types (REFRAME, DIFFERENT APPROACH, WIDEN). The map assumes the current direction is right and only suggests going further, never changing course.

**How to recognize:** All items are about CONTINUING. None are about CHANGING. No process-directed types. The map doesn't question the current approach.

**How to prevent:** Explicitly check: should REFRAME, WIDEN, or DIFFERENT APPROACH be in the map? Even if the current direction seems right, consider whether continuing is the only option.

### 4. Enumeration Without Reasoning

Listing routes without per-item WHY, guidance mode, or appropriate guidance. The map is a bare list: "DEEPEN X, REFINE Y, INVESTIGATE Z." No reasoning, no action constraints, and no explanation of why a route is present. The human sees options but has no basis for choosing between them.

**How to recognize:** Items are one-liners. No WHY section. No guidance mode. High-priority, risky, blocked, or near-action routes have no guidance. The map looks like a TODO list, not a reasoned assessment.

**How to prevent:** Every item must have direction-level WHY and a declared Guidance mode. Use `compact` or `full` guidance for routes that are high-priority, risky, blocked, near-action, or selected. If you can't articulate WHY a direction is in the map, it might not belong there.

### 5. Route State Omission

Listing directions without Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, or Continuation note. The map may be useful in the moment, but a later warm-up cannot reliably tell what the route was for, whether it was reachable, or what it was supposed to open.

**How to recognize:** Items have direction and WHY, but no explicit goal, status, blocker, or unlock fields. Blocked routes are described only inside prose. `UNBLOCK` appears without the blocked destination route it is meant to open.

**How to prevent:** Treat every navigation item as a route record. Fill all route-state fields even when the value is `none` or `unknown`. Keep blocked routes in the main map with `Status: blocked`.

### 6. Scope Fixation

All directions are within the current question's scope. Missing "the question itself should change" types (REFRAME, WIDEN). The map explores within the box but never questions the box.

**How to recognize:** All items relate to the current question's topic. None suggest changing the question, broadening the scope, or reframing the problem. The scope check is ignored.

**How to prevent:** Explicitly compare each direction to the GOAL (not just the question). If the goal is broader than the question, WIDEN should be in the map. If multiple iterations haven't progressed, REFRAME should be considered.

---

## Telemetry

After producing the navigation map, assess the quality of this navigation run:

- **Type coverage** — How many of the 16 types were considered (not necessarily included — considered and either included or excluded with reasoning)? If fewer than 10 were considered, navigation may have been shallow.

- **Category balance** — Are items distributed across content, process, and context? If one category is empty, check whether that's correct for the situation or indicates a blind spot. Track across runs — if a category is consistently empty, it's a systematic blind spot.

- **Route coverage** — Does the map include the meaningful route space, including blocked, low-priority, and deferred routes where relevant? If guidance detail crowds out route inclusion, Navigation may be over-planning instead of enumerating.

- **Guidance allocation** — Did each route declare an appropriate Guidance mode (`none`, `compact`, `full`, or `expand-on-selection`)? Are high-priority, risky, blocked, near-action, or selected routes given compact/full guidance rather than being bare directions?

- **Guidance modes used** — Count how many routes used each mode: `none N`, `compact N`, `full N`, `expand-on-selection N`. This makes adaptive guidance auditable.

- **Route-state completeness** — Does every included item have Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, and Continuation note? Missing fields make the map weak as continuation memory.

- **Blocked-route visibility** — Are blocked but meaningful routes represented in the main map with `Status: blocked`, instead of being hidden in Excluded or collapsed into only an `UNBLOCK` item?

- **Excluded reasoning** — Does the excluded section explain why types were rejected? Excluded without reasoning is premature filtering. Excluded with reasoning is conscious assessment.

These metrics are for CROSS-RUN tracking, not per-run gating. Individual runs may legitimately have empty categories or few types. Patterns across 10+ runs reveal systematic blind spots.

---

## Relationship to Other Disciplines

### Navigation and the Core Cycle (S → I → C)

Navigation is a BOUNDARY discipline — it operates between core cycles, not within them. S, I, C operate on one question and produce one answer. Navigation reads the answer and maps what could come next. It crosses the iteration boundary: its output (next directions) feeds the NEXT cycle's input.

### Navigation and Reflection

Both are boundary disciplines. Both operate after C completes. They're paired but distinct:

| | Reflection | Navigation |
|---|---|---|
| **Direction** | BACKWARD | FORWARD |
| **Reads** | The process (how S/I/C performed) | The result (what S/I/C produced) |
| **Produces** | Process observations, memory cells | Navigation map of typed directions |
| **Purpose** | Learn from the run | Direct the next run |

**The boundary flow:** R runs first (learn from process), N runs second (map possibilities, informed by R's findings). R feeds N as an optional enhancement — N works without R, works better with R. R's observations become N's guidelines.

```
SIC → R (backward) → N (forward, reads R) → Select → next SIC
```

### Navigation and Wayfinding

Navigation absorbed the `/wayfinding` discipline. Earlier project iterations had a separate `/wayfinding` focused on single-direction selection ("pick ONE move from a 6-move taxonomy at iteration boundary"). That selection-as-pick-one framing is a single-head architectural artifact — under multi-head architecture (parallel MVL loops with cross-comparison), each head consumes the enumeration and picks its own direction; there is no global "pick ONE." `/wayfinding`'s load-bearing substance has been migrated into navigation: DIAGNOSE as 16th type in Process category; reachability/gates check in Step 1; REVISIT sub-actions (RESURRECT/INVALIDATE/REVERT) with threshold-aware confidence. The `/wayfinding` discipline file has been deleted.

---

## Auto-Derivable vs Human-Judgment Types

### Auto-derivable (from C output + telemetry + scope check)

| Type | Derived from |
|---|---|
| DEEPEN | C: SURVIVE + unexplored depth |
| REFINE | C: REFINE verdict |
| PURSUE SEED | C: KILL + seed |
| INVESTIGATE FRONTIER | Frontier questions |
| DEVELOP | C: SURVIVE + mature |
| TERMINATE | Answer matches goal |
| RE-RUN DEEPER | Telemetry below threshold |
| WIDEN | Scope check gap |
| UNBLOCK | Blocker identified |
| TEST | Testable hypothesis |
| MERGE | Branches completed |
| DIAGNOSE | Sensemaking-stall signals (oscillation / velocity negative 2+ iterations / layer-conflict) |

### Human-judgment required

| Type | Why it needs judgment |
|---|---|
| REFRAME | Knowing the framing is wrong (not just incomplete) needs judgment |
| REVISIT | Knowing which past finding to re-evaluate needs cross-inquiry awareness |
| DIFFERENT APPROACH | Knowing which different approach to try needs experience |
| CONSOLIDATE | Knowing which inquiries need integration needs strategic judgment |

This split IS the graduated autonomy boundary. At Level 0, the human makes all decisions. At Level 1, the system enumerates the 12 auto-derivable types and the human adds the 4 judgment types. At Level 2+, the system handles more.

---

## When to Navigate

### After a SIC cycle (the primary use)

The cycle completed. C produced verdicts. The question may or may not be answered. Navigation maps what's next.

### Independently (outside MVL)

The human wants to see their options without running SIC first. "Given the project's current state, what should I work on?" Navigation reads whatever context exists (prior inquiry outputs, project files) and produces a map. Thinner than post-SIC navigation (no C verdicts to read) but useful for strategic direction-setting.

### Between branches (during multi-headed execution)

Branch 1 completed. Branch 2 is still running. Navigation re-reads the state: should remaining branches continue? Should new branches be added based on branch 1's findings? Dynamic navigation that responds to incoming results.
