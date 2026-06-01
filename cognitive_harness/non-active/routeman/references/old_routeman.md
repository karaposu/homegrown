> **Loading note.** This file is loaded by `routeman/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — identity, components, process, quality, output — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Routeman — A Thinking Discipline

A thinking discipline for enumerating all possible next moves from a current state toward a goal or subgoal, each tagged with movement type and reachability, with per-route prescriptive guidance. Routeman produces the typed map of paths forward on which downstream selection depends.

> **Routeman is the cognitive operation by which possible next moves from a current state toward a goal or subgoal move from latent into present, each typed by movement category, evaluated for reachability, prioritized, and accompanied by prescriptive guidance — without committing to which move to take.**

Routeman has two structural operations that emerge together but live at different layers: an **enumeration operation** (producing the full set of possible next moves, typed and reachability-checked) and a **prescriptive operation** (producing per-route guidance about what to attend to if the route were taken). Both are load-bearing — enumeration without prescription collapses to a flat list of action-labels; prescription without enumeration produces hints for an unspecified action-space.

---

## 1. Identity

### 1.1 Verb-meaning (the cognitive operation)

**To route is to enumerate possible next moves from a current state toward a goal or subgoal, type each by movement category, evaluate each for reachability and priority, and attach per-route prescriptive guidance — without selecting which move to take.**

A cognizer enters with a current state (the result of prior cognitive work — what has been understood, generated, or critiqued) and a goal or subgoal that next moves should serve. Attention is biased toward what could be done next from this state to advance toward the goal. Each candidate move is read into present attention, assigned a movement type, evaluated for reachability given the current state's constraints, and accompanied by a prescriptive pointer about what to attend to if the move were taken.

The operation is **purposive** (the goal/subgoal is the bias source for which moves count as "next" toward "advance") and **idempotent within an invocation** (same state + same goal produces the same route map). It is **re-invocable across invocations** as a parameterized variation of the same operation — when the state evolves or the goal refines, routeman re-enumerates from the new state toward the refined goal.

The unit of work is the **route** — a possible next move drawn from the latent move-space, typed by movement category, tagged with reachability state, assigned priority and confidence, and bearing per-route prescriptive guidance. The discipline's verb is "enumerate possible next moves from"; routeman does not generate moves beyond what is reachable from the current state, and does not select among the enumerated moves.

### 1.2 Upstream-precondition relationship (logical, not temporal)

Routeman is the **boundary cognitive operation** that consumes the artifacts of a completed cognitive cycle and produces the typed map of possible next moves. Without prior cognitive work producing a state worth enumerating from, routeman has nothing to enumerate. "Upstream" is meant logically (precondition relationship), not temporally — within a single session the temporal order may vary, but the precondition relationship is fixed.

Routeman is also the **upstream operation to selection**. Selection (the operation of picking one route to act on) consumes routeman's Route Map and produces a single committed direction. Routeman never selects; it always emits the full enumeration.

### 1.3 NOT-list (seven entries; what routeman does not produce)

Each exclusion grounds in an intrinsic feature of the operation, not in what neighbor operations do.

| Excluded | Intrinsic ground |
|---|---|
| Selection — choosing which route to act on | Routeman's verb is "enumerate"; selection-as-commitment is a different verb. Routeman produces the field of options; selection adjudicates one. |
| Items beyond what is reachable from the current state | Routeman draws from the next-move space implied by the current state + goal; moves unreachable from the current state are out of scope. Generating-from-nothing is a different operation. |
| Evaluation of which move is best | Routeman tags moves with priority and confidence (per-move attributions); it does not produce a ranked verdict of which-move-wins. Adjudication-among-candidates is a different operation. |
| The state being enumerated from | Routeman consumes the state as input; it does not produce the state. The cognitive work that produced the state is upstream. |
| Execution of any chosen move | Routeman emits the route map; downstream action takes the selected route and executes. Execution is a different operation. |
| Cross-route relational structure beyond movement-type-and-reachability | Routeman operates at route-granularity with per-route metadata; cross-route relational structure (e.g., dependency graphs across routes) is a structural operation on the whole map. |
| The goal or subgoal being served | Routeman receives the goal as input bias; the goal is exogenous. Generating the goal is upstream. |

### 1.4 Vocabulary

| User-facing term | Structural definition |
|---|---|
| **route** | The unit of work — a possible next move from current state toward goal/subgoal. |
| **current state** | The result of prior cognitive work that routeman enumerates from. Includes settled understanding, generated candidates, critique verdicts, telemetry, and unresolved openings. Received as input. |
| **goal / subgoal** | The directional anchor that biases which moves count as "advancing." Exogenous; received as input. |
| **movement type** | The categorical label assigned to each route from the movement-type taxonomy (§2.2). Names the kind of action the route would constitute. |
| **reachability** | The route's accessibility given the current state's gates and prerequisites. Values: `open` / `blocked` / `deferred` / `active` / `done` / `stale` / `superseded`. |
| **priority** | Per-route importance verdict: HIGH / MEDIUM / LOW. |
| **confidence** | Per-route certainty in the route's relevance + reachability: HIGH / MEDIUM / LOW. |
| **guidance** | Per-route prescriptive content about what to attend to if the route is taken. Each guidance pointer carries its own WHY. |
| **guidance mode** | Per-route allocation of guidance effort: `none` / `compact` (1-2 pointers) / `full` (3-5 pointers) / `expand-on-selection` (deferred until selection). |
| **continuation note** | Per-route memory hint — what a future agent resuming this route should remember about it. |
| **route map** | Routeman's substantive output: the enumerated set of routes with per-route metadata, plus wrapper fields (count, index, excluded section, telemetry). |
| **excluded** | Movement types structurally inapplicable to the current state, listed with reasoning rather than silently filtered. |
| **selection** | The downstream operation that picks one route from the route map to act on. Out of routeman's scope. |

### 1.5 Boundary placement

Routeman is a **boundary discipline** — it operates between cognitive cycles, consuming what one cycle produced and producing the typed-next-moves field that selection or subsequent cycles consume. It is forward-facing (enumerating what could come next) and pairs naturally with a backward-facing boundary operation that observes how the prior cycle ran. Routeman operates pipeline-sequentially at the downstream loop step relative to the core cognitive work, and pipeline-upstream relative to selection.

---

## 2. Components

Routeman has ten core components within its Enumeration phase, plus one signature internal mechanism (movement-type assignment with reachability evaluation), plus a load-bearing primitive composition.

### 2.1 The ten Enumeration components

| Component | Role |
|---|---|
| **State perception** | Read the current state — what prior cognitive work settled, generated, critiqued; what is open, blocked, or pending; what telemetry exists. |
| **Goal/subgoal framing** | Anchor on the goal or subgoal that the next moves should serve. Receive the goal as bias source for enumeration. |
| **Enumeration** | Generate the full set of possible next moves from the current state toward the goal. No filtering; no selection. The substantive product. |
| **Movement-typing** | Assign a movement-type label from the taxonomy (§2.2) to each enumerated route. |
| **Reachability evaluation** | For each route, evaluate gates and prerequisites against the current state; assign a reachability value (open / blocked / deferred / active / done / stale / superseded). |
| **Adaptive guidance generation** | For each route, determine the guidance mode (none / compact / full / expand-on-selection) and produce mode-appropriate prescriptive pointers, each pointer carrying its own WHY. |
| **Cross-cycle revisitation** | Identify routes from prior cycles that warrant resurrection (prior-killed candidate now viable under new state), invalidation (prior-surviving candidate now dead), or revert (prior refinement now needs undoing). |
| **Autonomy classification** | Partition routes into those auto-derivable from current state and those requiring external judgment. The partition reflects depth-of-decision-difficulty per route, not preference. |
| **Priority + confidence assessment** | Assign per-route priority (HIGH/MEDIUM/LOW) and confidence (HIGH/MEDIUM/LOW). |
| **Excluded marking** | Identify movement types structurally inapplicable to the current state; record each with reasoning. Excluded types are visible-with-reason, not silently filtered. |

The ten components do not have a strict temporal order in the abstract; the **default operational ordering** during an Enumeration cycle is committed at §3.4. Components fire as needed within each cycle.

### 2.2 The movement-type taxonomy

The taxonomy classifies each route's action into one of sixteen named types, organized into three families. Each family reflects a depth-vs-breadth posture appropriate to its action-kind.

**Progression Family** (six types; advancing the work along the current direction):

| Type | Meaning |
|---|---|
| DEEPEN | Go further into the current line of work. |
| REFINE | Improve precision of an existing artifact or claim. |
| PURSUE-SEED | Develop a seed surfaced by prior work but not yet developed. |
| INVESTIGATE-FRONTIER | Open a frontier identified but not entered. |
| DEVELOP | Build out an idea from sketch toward instance. |
| TERMINATE | Conclude the current line; accept the result as settled. |

**Re-orientation Family** (five types; adjusting how or where the work proceeds):

| Type | Meaning |
|---|---|
| RE-RUN DEEPER | Re-run the prior cognitive operation with more depth. |
| WIDEN | Expand the scope of consideration. |
| REFRAME | Adopt a different framing of the current question. |
| DIFFERENT APPROACH | Try a different method on the same question. |
| DIAGNOSE | Investigate why the current state has its current shape (when stall or surprise is detected). |

**Coordination Family** (five types; cross-cycle, cross-branch, validation, or consolidation):

| Type | Meaning |
|---|---|
| REVISIT | Re-evaluate a prior cycle's verdict. Three sub-actions: RESURRECT (prior-killed → viable), INVALIDATE (prior-surviving → dead), REVERT (prior-refined → undo). |
| UNBLOCK | Address a known blocker that gates downstream routes. |
| MERGE | Combine work from parallel branches. |
| TEST | Validate a claim or artifact against empirical evidence. |
| CONSOLIDATE | Aggregate prior pieces into a coherent whole. |

The taxonomy is closed at the meaning-layer (sixteen types). New types are not added casually; type-extension requires structural justification.

### 2.3 The movement-type-and-reachability mechanism (signature internal capability)

The discipline's signature internal capability is the joint mechanism that, per route, assigns a movement type AND evaluates reachability. Named **typed-reachability assignment**. Structurally a per-route operation invoked iteratively during the Enumeration phase (§3.4). It is not a layer (not a continuous background process), not a phase (not a temporal segment), and not a discrete classifier (not an isolated atomic predicate).

**Per-route operational steps** (default; refinement-trigger = empirical observation of inconsistent or unreliable assignments):

1. **Receive:** the current state (already in workspace via Reception) + the goal/subgoal frame + one candidate route enumerated by §2.1's Enumeration component.
2. **Match-to-type:** apply Intuition-similarity against the type-templates of the sixteen-type taxonomy; produce a similarity profile; assign the highest-match type. Ambiguity-tolerated: when two types are equi-plausible, pick the one whose Family aligns with the goal's directional posture (Progression for forward-advance goals; Re-orientation for stall-signal goals; Coordination for cross-cycle goals).
3. **Reachability evaluation:** evaluate gates and prerequisites in the current state. Gate has three parts (blocked region, condition, current state). Assign reachability from {open / blocked / deferred / active / done / stale / superseded}.
4. **Priority + confidence:** assign per-route priority based on goal-alignment + reachability + cycle-output-signal strength; assign confidence based on signal-clarity + type-assignment-certainty.
5. **Uncertainty handling:** under low-confidence type-assignment, default to **inclusion with explicit confidence** — emit the route with the best-guess type and LOW confidence rather than dropping. Inhibition suppresses only routes structurally inapplicable (handled separately by Excluded marking).

The mechanism distinguishes routeman from descriptive-labeling siblings: a labeling discipline says "here is what's there"; typed-reachability assignment says "here is what could be done next, of which kind, accessible under what conditions."

### 2.4 The adaptive-guidance mechanism

For each route, the adaptive-guidance mechanism produces per-route prescriptive content sized to the route's importance. The mechanism is two-stage: deterministic anchor identification + judgment-within-constraints refinement.

**Stage 1 (deterministic):** For each route, identify candidate guidance anchors from the current state's content via a per-movement-type chain. Different types draw from different parts of the state — DEEPEN draws from surviving verdicts and key insights; REFINE draws from refinement targets; PURSUE-SEED draws from seeds extracted from killed candidates; INVESTIGATE-FRONTIER draws from open questions; REVISIT draws from prior-cycle verdicts; and so on. The chain falls back gracefully when sources are absent.

**Stage 2 (judgment-within-constraints):** Generate the guidance pointer text + per-pointer WHY from Stage 1's anchors, respecting the route's guidance mode and a per-mode pointer-count budget. Each pointer is a short imperative ("check against X"; "watch for the trap where Y masks Z"; "try domain transfer from W"); each WHY carries the anchored reason ("bc real usage is the only valid test of completeness"; "bc prior cycle's mock-vs-real divergence masked the failure").

**Guidance mode allocation** (default; refinement-trigger = empirical observation of consistently inappropriate mode assignment):

- **`none`** — zero pointers. WHY field + Continuation Note sufficient. Used for LOW-priority routes or deferred routes preserved for memory.
- **`compact`** — 1-2 short pointers, each with one-line WHY. Default for most routes.
- **`full`** — 3-5 pointers with developed WHYs. Used when stakes are high (HIGH-priority routes; blocked routes needing unblock-direction; risky routes; near-action routes; the route the operator is most likely to select).
- **`expand-on-selection`** — guidance deferred; route carries a one-line statement of what would be expanded if selected. Used when guidance is expensive and the route is unlikely to be selected but worth preserving.

The mechanism is the **prescriptive residual** that distinguishes routeman from descriptive-labeling siblings. Without prescription, routeman collapses to a flat list of movement-type labels — losing the discipline's separable identity.

### 2.5 Primitive composition

Routeman's load-bearing cognitive primitives:

| Primitive | Role in routeman |
|---|---|
| **Attention-pointer** | Selects which candidate route is currently under consideration during Enumeration. |
| **Working Memory** | Holds the current state + goal frame + enumerated route set + in-progress Route Map. The substrate of the workspace. |
| **Salience** | Bottom-up "this candidate is notable" signal that pulls routes into consideration, especially during state-perception and enumeration. |
| **Intuition-similarity** | Matches candidate routes against the goal-template + the movement-type-templates; substrate of the typed-reachability mechanism (§2.3). |
| **Context-framing** | The goal/subgoal frame biases everything; the purposive character is implemented via this primitive. |
| **Inhibition** | Suppresses structurally-inapplicable types (recorded via Excluded marking); does not suppress uncertain routes (those go to the map with LOW confidence). |
| **Simulation** | When a route's outcome is uncertain, simulates what taking it would unlock or block; substrate of guidance generation. |
| **Evaluation** | Per-route priority + confidence; not multi-axis ranking across the whole map (selection's job), but per-route attribution. |
| **Metacognition** | Monitors whether the next-move space has been covered, whether convergence criteria are met, whether re-invocation should be self-signaled. |
| **Focus-deep** | When a route is high-priority + complex, allocates depth-processing (more guidance pointers; deeper WHY-derivation). |

**One primitive is deliberately absent:**

- **Motivation** — routeman's effort-allocation is implicit in the goal frame + Attention-pointer + Focus-deep composition. The discipline is goal-driven from outside, not self-motivated from inside.

---

## 3. Process Model

Routeman's runtime pipeline is a three-phase shape.

### 3.1 The three-phase shape

```
PHASE 1: RECEPTION
   Receive current state + goal/subgoal + optional prior route map +
   optional refined-sub-goal. Once per invocation.
                              │
                              ▼
PHASE 2: ENUMERATION-ATTRIBUTED TRAVERSAL
   Iterative cycle; ten components fire as needed per iteration (per §3.4).
   Loop until convergence (per §4.5).
                              │
                              ▼
PHASE 3: ASSEMBLY
   Compile the Route Map (per-route entries + wrapper fields).
   Emit telemetry. Once per invocation.
```

### 3.2 Reception

Once per invocation. Receives:

- **Required:** the `current state` (artifacts and verdicts from prior cognitive work); the `goal` or `subgoal` (the directional anchor biasing enumeration).
- **Optional re-invocation parameters:** `prior route map` (always available across invocations when persisted); `refined-sub-goal` (a narrower goal for this re-invocation).

Reception initializes the workspace (loading state + goal + prior map if present) and prepares for Enumeration.

### 3.3 Enumeration-attributed Traversal

The iterative cycle. The ten components from §2.1 fire within each iteration. The **default operational ordering** (refinement-trigger = empirical observation that a different order improves coverage):

1. **State perception** — read what's in the current state.
2. **Goal/subgoal framing** — anchor on the goal as bias.
3. **Enumeration** — generate the candidate next-move set.
4. **Movement-typing** (via the typed-reachability mechanism, §2.3) — assign type to each.
5. **Reachability evaluation** (via the typed-reachability mechanism) — assign reachability.
6. **Cross-cycle revisitation** — identify routes from prior cycles warranting REVISIT sub-actions.
7. **Autonomy classification** — partition into auto-derivable vs judgment-required.
8. **Priority + confidence assessment** — per-route attribution.
9. **Adaptive guidance generation** (via the adaptive-guidance mechanism, §2.4) — per-route pointers.
10. **Excluded marking** — record structurally-inapplicable types with reasoning.

The cycle iterates until convergence per §4.5. Workspace routes accumulate as enumeration proceeds; the in-progress Route Map grows alongside.

### 3.4 Assembly

Once per invocation, at the end of Enumeration. Compiles the Route Map's structural sections:

- Per-route entries finalized (Route Identity + Route State + Route Meaning + Reasoning + Adaptive Guidance + Continuation Memory).
- Map Header (route count + HIGH-priority count).
- Route Index (when total route count exceeds the index-threshold; default 10).
- Excluded Section (structurally-inapplicable types with reasoning).
- Telemetry Block (per §5.5).

### 3.5 Re-invocation as parameterized variation

Re-invocation is the same three-phase operation with optional input parameters. Two parameters extend the initial invocation:

- **`prior route map`** — when available across invocations, the prior map is incorporated at Reception. Enumeration may resurrect / invalidate / revert prior routes via the REVISIT sub-actions; routes whose state-condition hasn't changed may be carried forward unchanged.
- **`refined-sub-goal`** (optional) — a narrower goal for this re-invocation. The narrower goal biases enumeration toward routes that serve the sub-goal specifically.

The operation's identity is preserved across invocations; only inputs and intermediate behavior parameterize.

### 3.6 Idempotency within invocation

Routeman is idempotent within a single invocation: same current state + same goal → same Route Map. Re-running within the same invocation produces the same output. Cross-invocation re-invocation is the operator's responsibility.

---

## 4. Quality

### 4.1 The failure-mode framework — LAYER 1 vs LAYER 2

Failure modes split into two layers:

- **LAYER 1 — Operational failures.** Detectable via output observation; recoverable via re-invocation. Six modes (§4.2).
- **LAYER 2 — Identity failures.** Detectable via behavioral audit over time; erode the discipline's intrinsic character; not simply recoverable. Three modes (§4.3).

### 4.2 LAYER 1 — Operational failure modes

| # | Mode | Recognition | Corrective |
|---|---|---|---|
| **1** | **Premature Filtering** | Only obvious routes shown; multiple cycle-verdict types not represented in the map | Re-enumerate with explicit pass over each cycle-verdict type. |
| **2** | **Recency Bias** | Map dominated by Progression Family routes responding only to the most-recent cycle output; older state ignored; cross-cycle Coordination routes underweighted | Re-enumerate with deliberate sampling across all three Families. |
| **3** | **Action Bias** | Only "do more" routes (DEEPEN / DEVELOP / INVESTIGATE-FRONTIER) in the map; no "do differently" routes (REFRAME / WIDEN / DIFFERENT APPROACH) | Re-enumerate with explicit consideration of Re-orientation Family routes. |
| **4** | **Enumeration Without Reasoning** | Routes listed without per-route WHY, Guidance Mode, or guidance content | Re-run adaptive-guidance generation per route; verify each carries an anchored WHY. |
| **5** | **Route State Omission** | Routes listed without Direction, Goal, Movement Type, Priority, Status, Blocked-By, or Continuation Note | Re-run Assembly; verify the per-route schema is complete per §5.4. |
| **6** | **Scope Fixation** | All routes within the current question's scope; no Routes suggesting REFRAME or WIDEN to a broader scope | Re-enumerate with explicit out-of-scope candidate generation. |

### 4.3 LAYER 2 — Identity failure modes

| # | Mode | Recognition | Why-erodes-identity |
|---|---|---|---|
| **1** | **Descriptive-Only Collapse** | Routes collapse to descriptive labels without the prescriptive layer (Guidance Mode + Guidance Pointers absent or empty) for ≥50% of routes across multiple invocations | Violates the prescriptive-residual character (§2.4). Routeman becomes a label-list, losing its separable identity from descriptive-labeling siblings. |
| **2** | **Prescriptive-Without-Grounding** | Adaptive guidance pointers emitted without anchored WHYs; pointers are generic ("consider X") rather than cycle-content-anchored ("check against the failure-mode Y identified at Z") | Violates the prescriptive-grounding requirement of the adaptive-guidance mechanism (§2.4). Prescription without grounding degrades to filler, undermining the mechanism's load-bearing role. |
| **3** | **Autonomy-Partition Drift** | The auto-vs-judgment partition no longer reflects actual decision-difficulty: routes the system can auto-derive are flagged as judgment-required (over-conservative drift), OR routes requiring judgment are auto-derived (over-aggressive drift) | Violates the autonomy-classification component (§2.1.8) — the partition reflects depth-of-decision-difficulty per route, not preference. Drift erodes the operator's trust in the classification. |

### 4.4 Asymmetric-failure principle

**Missing a possible move is structurally worse than enumerating an inapplicable one.**

- False-positive (enumerated inapplicable): downstream selection or critique filters the route out. Recovery is cheap (bounded effort).
- False-negative (missed possible): downstream cannot recover what was never enumerated. The system does not know what move it does not consider. This is the **information-loss-in-the-dark failure mode**.

**Operational form:** lean toward INCLUSION under uncertainty. Routes whose type-assignment or reachability is uncertain are emitted with LOW confidence rather than dropped. Excluded types are marked with reasoning, never silently filtered.

### 4.5 Convergence criteria

The Enumeration cycle terminates when (default; refinement-trigger = empirical observation that termination is too eager or too late):

- The next-move space implied by the current state + goal has been exhaustively traversed.
- All routes the typed-reachability mechanism is uncertain about have been included with LOW confidence (no route filtered at uncertain-typing level).
- Routes rejected only on HIGH-confidence structural inapplicability (per Inhibition primitive's behavior in §2.5); rejected routes recorded in Excluded section.

**Coverage trigger** (default; refinement-trigger = empirical observation that the trigger fires too early or too late): when the discipline self-observes that the most-recent enumeration cycle produced no new routes and no Family balance shifted, the discipline terminates Enumeration and proceeds to Assembly.

### 4.6 Calibration trajectory + signals

**Three-stage trajectory:**

- **Bootstrap** (no calibration data yet): cognitive-direct operation; trustworthiness via reference test bed + internal consistency checks.
- **Early operation** (after a small number of invocations): coverage of confirmed-blocked routes observable; Family balance ratios accumulate; re-invocation rate trackable.
- **Mature operation** (after many invocations per goal-type): per-goal-type confidence-vs-downstream-selection-success frequency computable; per-goal-type calibration curves stabilize.

**Five primary self-contained signals:**

| # | Signal | Operates at | Observation method |
|---|---|---|---|
| **PS1** | Coverage of obvious next-moves | Workspace | Operator introspection ("did the map include the obvious moves for this state?"); cross-session proxy via Route Index |
| **PS2** | Family balance | Artifact | Per-Family route count; observation of dominance by one Family |
| **PS3** | Reachability distribution | Artifact | Per-reachability-value count; identification of blocked-route visibility |
| **PS4** | Guidance allocation appropriateness | Artifact | Per-mode count; check that high-priority routes receive `full` or `compact` guidance |
| **PS5** | Excluded reasoning quality | Artifact | Each excluded type carries non-trivial reasoning (not "n/a" or empty) |

**Two secondary downstream-augmented signals** (refinement only; not foundation):

- **SS1** — per-route confidence-vs-downstream-selection-success frequency over many invocations.
- **SS2** — re-invocation rate per goal-type.

### 4.7 Self-assessment output

At the end of an invocation, routeman reports:

- **PROCEED** — all checks pass; output is ready for downstream consumption (selection or subsequent cycles).
- **FLAG** — output produced but one or more checks raised a flag (e.g., Family imbalance detected; Excluded reasoning thin; guidance allocation skewed); downstream consumer should review.
- **RE-RUN** — output incomplete or structurally suspect (e.g., enumeration produced an empty map when the state has clear cycle output; type-assignment confidence pervasively LOW); re-run recommended with adjusted parameters.

---

## 5. Output

### 5.1 The dual output

Routeman produces TWO work-products with distinct roles, both load-bearing:

- **(a) The workspace work-product** (§5.2) — the substantive product; session-local; the routes read into present attention plus full per-route metadata.
- **(b) The Route Map artifact** (§5.3) — the navigation/handoff product; persistent; per-route entries with metadata + wrapper fields. Carries the per-route content needed for downstream selection.

### 5.2 The workspace work-product

The cognizer's in-context state + goal + enumerated route set with full per-route content (movement type + reachability + priority + confidence + guidance pointers + WHYs). Session-local.

**Observability:** via introspection — a same-session reviewer queries the cognizer about what was enumerated and how each route was typed. The Route Map artifact serves as an external corroboration record.

**Persistence:** session-local. The workspace exists only within the session that produced it; session-end loses the workspace. Cross-session downstream consumers must operate from the Route Map alone or re-enumerate.

### 5.3 The Route Map artifact

A persistent record. The artifact contains per-route content (movement type, state, reasoning, guidance) at a granularity sufficient for downstream selection and for resumed work across sessions.

The artifact has two structural layers: **per-route entries** (§5.4) and **Route Map wrapper** (§5.5).

### 5.4 Per-route entry schema

Each route is rendered as a structured entry with fields organized by purpose:

| Group | Field | Content |
|---|---|---|
| **Route Identity** | Direction | Human-readable route title (the move named in operator's vocabulary). |
| | Goal | Compact target-state label (what the move would achieve). |
| | Movement Type | One of the sixteen types from §2.2. |
| **Route State** | Priority | HIGH / MEDIUM / LOW. |
| | Status | open / blocked / deferred / active / done / stale / superseded. |
| | Blocked By | The gate, missing evidence, missing artifact, or condition; `none` when unblocked. |
| **Route Meaning** | Purpose | What this route would serve, reveal, or unlock. |
| | Movement | Descriptive transition: current state → target state. |
| | Unlocks | Downstream routes / checks / decisions / artifacts; `unknown` when unclear. |
| **Reasoning** | WHY | Evidence from the current state's content making this direction worth considering. |
| | why-this-might-be-important | Per-route meta-reasoning — why this route matters beyond the immediate WHY. Length-bounded. |
| **Adaptive Guidance** | Guidance Mode | One of {none, compact, full, expand-on-selection}. |
| | Guidance Pointers | 0 / 1-2 / 3-5 pointers per the mode, each with its own WHY. |
| **Continuation Memory** | Continuation Note | What a future agent resuming this route should remember about it. |

Per-route entries are the **primary artifact granularity**. They are captured at the moment of enumeration during Traversal; the artifact is the authoritative per-route record.

### 5.5 Route Map wrapper

Wrapper fields surrounding the per-route entries:

| Field | Content |
|---|---|
| Map Header | Total route count + HIGH-priority route count. |
| Route Index | A table summarizing each route by ordinal + Direction + Goal + Movement Type + Priority + Status + Blocked-By; included when total route count exceeds the index-threshold (default 10). |
| Excluded Section | A list of structurally-inapplicable movement types with reasoning per exclusion. |
| Telemetry Block | The metrics from §5.6. |

### 5.6 Telemetry

Operational metrics reported with the output:

- Entry mode (`fresh-state` | `prior-map-extending`) + goal-type (when classifiable)
- Cycles run; routes enumerated; per-type distribution; per-Family balance
- Reachability distribution (per-status counts)
- Guidance mode allocation (per-mode counts)
- Cross-cycle revisitations (per sub-action: RESURRECT / INVALIDATE / REVERT counts)
- Autonomy partition (auto-derivable count vs judgment-required count)
- Excluded type count + reasoning-non-trivial check
- Convergence trigger fired (yes/no; which signal)
- Failure modes checked (list of named modes from §4.1)
- Self-assessment verdict (PROCEED / FLAG / RE-RUN)

### 5.7 Frontier — open questions for downstream

The Frontier section captures what routeman raised but did not answer:

- Routes whose reachability evaluation is uncertain (gate state ambiguous)
- Movement types where assignment confidence is LOW (route emitted with best-guess type)
- Cross-cycle revisitations whose sub-action is ambiguous (could be RESURRECT or INVALIDATE)
- Excluded types whose reasoning is weak (the exclusion is provisional)

A growing Frontier is a signal of state-or-goal ambiguity, not failure. It tells the downstream operator exactly what needs clarification before selection.

---

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Routeman Process

### 1. State Mode + Entry Point + Receive Input

Determine the entry-point (`fresh-state` if no prior route map exists for this state+goal; `prior-map-extending` if a prior route map is available and the operation should incorporate it). Determine the goal-type when classifiable (forward-advance / stall-signal / cross-cycle / etc.) for telemetry.

Receive: the `current state` (required; artifacts and verdicts from prior cognitive work); the `goal` or `subgoal` (required; the directional anchor); optional `prior route map` (when available across invocations); optional `refined-sub-goal` (when re-invoking with a narrower focus).

### 2. Run Reception → Enumeration-attributed Traversal → Assembly Cycle

**Reception** (once): initialize workspace with `current state` + `goal` + optional `prior route map`. Prepare for Enumeration.

**Enumeration-attributed Traversal** (iterative): apply the default component ordering per cycle (§3.4) — state perception → goal framing → enumeration → movement-typing → reachability evaluation → cross-cycle revisitation → autonomy classification → priority + confidence assessment → adaptive guidance generation → excluded marking. Per route, the typed-reachability mechanism (§2.3) assigns type + reachability + priority + confidence; the adaptive-guidance mechanism (§2.4) assigns guidance mode + pointers.

Loop until convergence per §4.5.

**Assembly** (once): finalize per-route entries; compile Route Map wrapper (Map Header + Route Index when count exceeds threshold + Excluded Section + Telemetry Block).

### 3. Assess Convergence

Apply the stop-rule from §4.5:
- Next-move space exhaustively traversed at current resolution.
- No route filtered at uncertain-typing level.
- Routes rejected only on HIGH-confidence structural inapplicability; rejections recorded in Excluded Section.

If the most-recent enumeration cycle produced no new routes and no Family balance shifted, terminate Enumeration; proceed to Assembly.

### 4. Emit Dual Output

**Workspace:** populated as side effect of Enumeration (cognizer's in-context state + goal + enumerated routes with full metadata).

**Route Map artifact:** save per the markdown rendering of §5.4 (per-route entry schema) + §5.5 (Route Map wrapper) schemas.

### 5. Self-Assessment Verdict

Report one of:

- **PROCEED** — all convergence criteria met; no LAYER 1 failure-mode flags raised; output ready for downstream consumption.
- **FLAG** — output produced; one or more flags raised (e.g., Family imbalance; Excluded reasoning thin; guidance allocation skewed); downstream consumer should review the flags before consuming.
- **RE-RUN** — output incomplete or structurally suspect (e.g., enumeration produced an empty map when the state has clear cycle output; type-assignment confidence pervasively LOW); re-run recommended with adjusted parameters.

Include the telemetry metrics from §5.6 with the verdict.
