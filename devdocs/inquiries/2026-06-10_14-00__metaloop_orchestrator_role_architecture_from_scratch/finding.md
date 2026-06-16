---
status: active
model: claude-fable-5[1m]
effort: max
---
# Finding: The Turn Architecture — the Meta-Loop Is the Cycle, the Selector Is the Role, and Almost Nothing Is a Component

## Question

From `_branch.md`: what should the meta-loop do and not do? Is the meta-loop the MVL loop runner? Does it decide which route to follow? Should it have a separate session? If it chooses AND runs workers, what does an orchestrator session do — is the orchestrator the one who chooses? Who is responsible for running multiple loops, possibly in parallel? "Let's make this clear, because right now it is not understood at all — we don't even know if we need an orchestrator." **Method directive:** prior meta-loop discussions are NOT canon — `_meta_state.md` and the component maps were ideas; nothing inherited as settled, *even from canon-folder files*.

**Goal:** the minimum sufficient between-inquiry architecture, derived from function — components with DO/DON'T lists, session boundaries argued fresh, parallelism assigned, names settled (retirements allowed), the no-orchestrator option seriously adjudicated, and the canon-repair consequences listed. At MEANING level only; artifact schemas and decision rules sequenced to their own gated inquiries.

## Finding Summary

- **Your confusion was accurate to the record.** The prior discussions contradict each other — the dormant meta-loop draft merges everything into one session while the component triple splits it three ways — and no document ever adjudicated between them. Nothing was "not understood by you"; nothing was actually settled.
- **The root error was a KIND error: things got names before getting kinds.** Derived fresh, each between-inquiry function wants a different kind of home — and almost none of them is a component: choosing is a **role**, memory is a **file**, launching is **plumbing**, enumeration is a **discipline with a dial**, auditability is a **property**, and stop-judging is just one of the choices.
- **The unit is the TURN, and "meta-loop" names the turn loop — nothing else.** One cycle: *see (field written) → choose (rationale recorded) → start → record (outcome slot opened) → repeat.* A turn COUNTS only if the enumerated field is written down before the pick and the choice is recorded — an unrecorded turn happened, but it doesn't count (the turn-invariant, now unified with the field-before-choice rule).
- **The orchestrator question, answered:** as a SESSION — not needed at Levels 0–2, and whether Level 3 wants one is deliberately left to the process layer. As a ROLE — it exists and **you are it**: the role that picks from the written field, owns the rationale, and holds the option-vocabulary (go-deeper, widen, different-approach, merge, revisit, unblock, **stop**). *Your guess — "the orchestrator is the one who chooses" — is confirmed at the function level.* The recommended NAME, however, is **the Selector** (matching the worklist's existing "Selector graduation"), with "orchestrator" retired — it keeps re-growing the seat image that caused this confusion. **Naming is your seat: veto freely.**
- **The session question becomes a dial, not a dogma.** What protects enumeration from choice-bias is the *field-before-choice rule* (write the field, then pick), not session count. A fresh, warmed session for enumeration is the QUALITY dial — buying a stranger's objectivity at the cost of context (warming is how you buy the context back) — recommended when the working session is long or invested, default at Level 4, never what makes a turn valid.
- **Parallelism decomposes; no component "is" the parallel-runner.** RUNNING N loops is plumbing (N invocations; per-inquiry folders already prevent collisions — later, the carrier). DECIDING how many, and deduplicating intents, is the Selector at scale. COMPARING parallel results is the single genuinely new judgment — it appears only at Level 4 (and may be a critique-variant rather than a new discipline).
- **The cycle is invariant through Level 3; Level 4 adds exactly one phase (compare).** Only the PERFORMERS of phases change as autonomy rises — human chooses → system proposes with approval → system chooses within scope — which makes the whole ladder a role-transfer story over one unchanging loop.
- **The build list SHRINKS.** Level 1 needs only the turn-record file and the recording habit (already on the worklist). No orchestrator session to build; no navigational-session prerequisite before turns can start — **Turn 1 can legally happen today, in this very session.** The failure mode of this architecture is stagnation (turns stop being recorded), not breakage.
- **The demoted ideas got honest fates:** EARNED by fresh derivation — traversal-memory-as-file, the seven moves (as the Selector's option-vocabulary), the enumerate/decide split (as a role split), the ordering rule. FOUND INVALID — the triple as a seat map, session-count as turn-validity, the draft's premature state schema. LEFT OPEN with gates — the L3 chooser-session question; the compare design.

## Finding

### 1. The method that dissolved the tangle: kinds before names

The prior texts assigned NAMES ("orchestrator," "meta-loop," "navigational session") to presumed SEATS before deciding what kind of thing each function needed. Derived fresh from the retained goal layer and live practice, the between-inquiry layer has seven functions, each with a kind:

| Function | Kind | Home |
|---|---|---|
| SEE — enumerate the field after work finishes | a **discipline** (with a quality dial) | `/routelister`, run as a phase — or in a fresh warmed session when the dial says so |
| CHOOSE — pick the next move (stop included) | a **role** (policy — the thing autonomy gates graduate) | the Selector (you, today) |
| START — launch the chosen work | **plumbing** (mechanism, no judgment) | typing the command today; the carrier later |
| REMEMBER — record selections, rationales, outcomes across inquiries | a **file** | the turn record (the one genuinely missing artifact) |
| STOP-JUDGE — decide a goal's traversal is done | folded into CHOOSE | "stop" is one of the Selector's options |
| COORDINATE-MANY — parallel workers | **decomposes** | running = plumbing; deciding-N = the Selector at scale; comparing = the one new L4 judgment |
| STAY-AUDITABLE | a **property** | enforced by the turn's validity condition |

The mechanism-vs-policy split does the heavy lifting: launching is mechanism (anything can invoke a runner); choosing is policy (the only judgment between inquiries — and exactly what the autonomy ladder's gates were always about).

### 2. The turn — the unit, its validity, its dial

**What a turn is, concretely.** A turn is what happens *between* two inquiries — the thing the human did by hand several times today: an inquiry finishes → look at what could be done next → pick one → start it → write down what was picked and why. That once-around is ONE turn. As a schema:

```
   THE META-LOOP  =  the turn loop.        one lap around it  =  one TURN
   ────────────────────────────────────────────────────────────────────────

        ┌──▶  ① SEE       enumerate the field — and SAVE the option-list BEFORE picking
        │     ② CHOOSE    pick the next move (incl. "stop")  +  a one-line rationale
        │     ③ START     launch the chosen inquiry ──────────┐
        │     ④ RECORD    log the pick + open an outcome slot  │
        │                                                      ▼
        │                                       ╔══════════════════════════════╗
        │                                       ║   THE INQUIRY RUNS            ║   ← the
        │                                       ║   (a runner does its 6        ║     layer
        │                                       ║    disciplines → one finding) ║     BELOW
        │                                       ╚══════════════════════════════╝
        │                                                      │
        └────────────  repeat: next lap = next turn  ◀─────────┘
```

**"The meta-loop" is the name of this repeating outer lap** — not a program, not a session, not an agent. (The "ideally" is dropped on purpose: a lap that skips ① or ④ still *happened*, but it doesn't COUNT — see the validity condition below.)

**Two stacked loops, two units of work.** Read the schema as one loop inside another:

- **The inner loop is the inquiry** — a runner executing its six disciplines to produce one finding. Its unit of work is *one inquiry*. This is **work getting done.**
- **The outer loop is the turn** — see → choose → start → record. Its unit is *one turn*. This is **deciding which work happens next, launching it, and logging the decision.**

So "two units at two layers" just means: the layer below counts progress in *inquiries* (findings produced); the layer above (this finding's subject) counts progress in *turns* (decisions made and recorded). The inquiry is the *doing*; the turn is the *choosing-and-logging* that wraps each doing. The meta-loop is only ever the outer one.

**Phase by phase — the verb and its object (see *what*? choose *what*? …).** Each phase acts on a specific thing:

| Phase | Acts on — *the "what"* | Concretely |
|---|---|---|
| **① SEE** | **the concept-route field** — the typed directions the territory offers toward the goal | **`/routelister`** sweeps the finished work's artifacts (building on its persistent concept-map) and writes the field: one *route* per concept, each typed by an engagement-verb — **DEEPEN / DEVELOP / PURSUE-SEED / INVESTIGATE-FRONTIER** (advance the goal) or **REFINE / REFRAME / DIAGNOSE / TEST / CONSOLIDATE** (sharpen it). These are *concept*-directions — e.g. "DIAGNOSE the coverage concept" — **not** control-flow decisions: routelister deliberately does *not* emit widen / merge / revisit / unblock / stop (its NOT-list, routelister spec §1.3 — those are the Selector's, see ②). And it is meant to ride the **end of each MVL inquiry** (the exhaust step), so SEE usually *reads a field already on disk* rather than running a separate pass; the fresh-session dial (below) only adds an optional re-list for objectivity. |
| **② CHOOSE** | **one decision** — a route from the field, *or* a standing control-flow move | The Selector (the role, §3) picks the next move and writes a one-line rationale. Its vocabulary is wider than the routelister field: pick a *concept-route* from the field (go-deeper ≈ choose a DEEPEN route, different-approach ≈ a REFRAME route), **or** a *control-flow move* that no concept-route names — widen the goal, merge two lines, revisit a parked item, unblock a blocked one, or **stop**. The concept-routes are enumerated by routelister (from the territory); the control-flow moves are the Selector's fixed standing options (read off the process/ledger state). Deciding is always the Selector's, never routelister's. |
| **③ START** | **the chosen move** | Launch the worker that does the actual work on the picked route — i.e. kick off one inquiry (the inner loop). Today that is typing the runner command; later, automated launch ("the carrier"). Pure mechanism, no judgment. |
| **④ RECORD** | **the turn itself** | Write the turn-record entry: *which* option was picked, the *rationale*, an empty *outcome slot* (filled in later when you revisit the area), and the *goal* this turn serves. This is what makes the lap COUNT (see the validity condition next). |

Read in one line: **SEE** the concept-route field (routelister's output, already on disk from the prior inquiry's tail) → **CHOOSE** one route *or* a standing control-flow move → **START** the inquiry that pursues it → **RECORD** the pick, why, the goal, and a slot for how it turned out. SEE and RECORD are the easy-to-skip phases, and they are exactly the two that make a turn count.

*(Division of labor, to keep it straight: **routelister** enumerates the concept-route field — the territory-specific directions, typed by the nine engagement-verbs — and emits no decisions; the **Selector** decides, holding the fixed control-flow vocabulary (widen / merge / revisit / unblock / stop) that routelister's NOT-list deliberately keeps out of enumeration.)*

**Where parallelism fits (the schema above draws the *default*, single-worker shape).** Levels 0–3 launch one inquiry per turn — that is why the picture shows a single inner box. The architecture *does* account for parallelism; it just **decomposes** it across the same four phases instead of adding a "parallel-runner" component:

- **③ START can fan out** — launch N inquiries at once. Running N is pure plumbing (N invocations; per-inquiry folders already stop file collisions), so the cycle's shape is unchanged — START simply has N arrows instead of one.
- **② CHOOSE does the deciding** — "how many to run, and which intents (deduplicated)" is the Selector's job at scale.
- **One new phase appears, and only at Level 4: COMPARE** — when several inquiries return together, something has to merge / promote / continue / stop across their findings before the next ① SEE. That cross-result comparison is the *single genuinely new judgment* parallelism introduces; everything else is plumbing (run) or the Selector (decide). The parallel lap is therefore:

```
   ① SEE → ② CHOOSE → ③ START ⇉ ⎧ inquiry 1 ⎫
                                 ⎨ inquiry 2 ⎬ → ⑤ COMPARE → ④ RECORD → repeat
                                 ⎩   …  N    ⎭
```

So parallelism is "counted" — as three jobs already placed in the architecture (plumbing to run, the Selector to decide, a compare-phase to judge), not as a new kind of agent. The per-level detail is in §4.

**Validity — when a turn COUNTS.** A turn is valid when four things are visible in files afterward:

1. **The field, written BEFORE the pick** — the list of available options, saved before any choosing happened. This proves the choice was made *from* options rather than rationalized after the fact.
2. **The choice plus a one-line rationale** — the decision data the autonomy gates will later need (the Selector's graduation compares "what the system would pick" against exactly these records).
3. **An open outcome slot** — a "what came of it" field, left empty now and filled when the area is revisited. Without outcomes attached to choices, no one can ever learn whether the choices were good — records without outcomes train nothing.
4. **The goal the turn serves** — named in the record, because "which option is best?" and "should we stop?" are unanswerable without knowing what we are trying to achieve. Inventing goals remains the human's job (unchanged from the goal layer); the record merely has to *carry* the goal so choosing and stop-judging have a referent.

One flagged metaphor for why this matters: a turn is like a bank transaction — the four conditions are its *commit criteria*. Work done without them genuinely happened, but it never **committed**: it produces no gate fuel, no memory, no statistics. (Today's seven sequential loops are exactly this — real work, zero committed turns, because nothing was recorded between them.)

**The field-before-choice rule — what replaced the session dogma.** The OLD idea (in the now-demoted texts) said: the session that *lists* the options must be a physically separate session from the one that *picks* — because a picker already leaning toward an option produces a biased list (it stops enumerating once it sees one it likes, and it describes the rivals weakly). That worry is real; it is the same motivated-perception risk the articulation-first runner design exists to prevent (committing-while-enumerating drops options). But the re-derivation found the cure was mis-located: what actually protects the list is **order plus artifact, not session count** — produce and SAVE the complete field *first*, then choose. Once the list exists on disk before any choosing starts, a leaning has nowhere to act on it. And one session demonstrably can hold this discipline: the worker runners already do exactly it — six disciplines in one session, each phase writing its file before the next begins, none reaching back to contaminate the previous one. So the separate "eyes" session survives only as an optional quality upgrade (the dial, next paragraph); writing the field before choosing is the actual law.

**The quality dial:** running the enumeration in a **fresh, warmed session** buys a stranger's read of the artifacts — valuable when the current session is long or invested in its own conclusions, and the natural default at Level 4. Its honest cost: a cold session lacks context, and warming is the price of buying it back. The dial is a recommendation with conditions — never what makes a turn legitimate.

**Who may perform a turn:** any agent that can satisfy the validity condition — the human today (with or without assistant execution), automated sessions later. The turn is performer-agnostic by design; that is what lets the ladder transfer roles without redesigning the cycle.

### 3. The Selector — the role, its boundaries, the names

**DO:** pick from the *written* field; own the recorded rationale; hold the option-vocabulary — go-deeper, widen, different-approach, merge, revisit, unblock, **stop** (re-derived as the natural choice-types of the decision space, not inherited); at Level 4, decide how many workers run and deduplicate intents.

**DON'T:** enumerate its own field from scratch (it consumes the see-phase's artifact — the ordering rule); execute the work itself (workers do that); edit discipline specs mid-turn (a spec change is itself a route the Selector may *choose* — a Baldwin inquiry — never a side effect, else the turn rewrites its own rules while running and the record stops being auditable); and it is **not a mandatory session** at Levels 0–2.

**The ladder (staged graduation of ONE role):** Level 0–1 — the human selects, now with records. Level 2 — the system PROPOSES, the human approves (this is exactly the worklist's existing "Selector graduation": the role's propose-half graduates first). Level 3 — scoped autonomous choice (whether this wants its own session is **left open** to the process-layer inquiry, gated on recorded-turn data). Level 4 — decide-N and the compare phase.

**Names, settled by the anti-regrowth test** (each name must map to exactly one kind and must not re-grow the seat image): **"the meta-loop" = the cycle** — kept; it is grammatically a loop and now unambiguous. **"The Selector" = the role** — recommended; it is unambiguously a job title and already matches the worklist and gate vocabulary. **"Orchestrator" — retired**: your guess about its function was right, but the word itself keeps conjuring a conductor at a podium — a seat — which is the exact confusion this inquiry was asked to kill. **"The turn record" = the file; "the carrier" = the launch plumbing.** *Naming is your seat — this ships as a recommendation with explicit veto; if you prefer keeping "orchestrator" as the role's name, everything else stands unchanged.*

### 4. Levels and parallelism — what is actually new, when

- **Level 1:** the turn-record file + the recording habit. Nothing else — and two phantom prerequisites are REMOVED (no orchestrator session to design; no navigational-session requirement before turns may start). The worklist shrinks.
- **Level 2:** the Selector's propose-half (proposals + your approvals accumulate as agreement data in the same record).
- **Level 3:** the carrier (launch plumbing automated) + the Selector's scope rules — both process-layer, gated on recorded turns; the session question lives there.
- **Level 4:** the compare phase — the single genuinely new judgment (merge/promote/continue/stop across parallel findings). Reuse note for its future design: it may be a **critique-variant** (same adversarial machinery, different candidate type) rather than a new discipline.
- **Parallelism:** running N is plumbing; deciding N is the Selector; comparing N is Level 4's phase. "Who runs the parallel loops?" was a component question with no component answer — it decomposes.
- **Degradation:** if recording stops, the layer degrades to today's status quo — working, unclimbing. Stagnation is the architecture's named FAILURE mode (the climb requires the habit), not an accepted operating mode.

### 5. Your seven questions, answered in one breath each

1. **What should the meta-loop do / not do?** It's not an agent — it's the cycle `[cycle]`: see → choose → start → record. It "does" nothing; performers do. A cycle-instance without a written field and a recorded choice doesn't count.
2. **Is the meta-loop the MVL loop runner?** No — the runner `[plumbing+executor]` is what a turn LAUNCHES; it executes one inquiry inside the cycle's start-phase.
3. **Does it decide what route to follow?** Deciding is the choose-phase, held by the Selector `[role]` — you, today.
4. **Should it have a separate session?** The cycle isn't a session; its phases can share one. A fresh warmed session for the see-phase is a quality dial `[dial]`, recommended when your session is long/invested — never required for validity.
5. **If it chooses and runs workers, what does the orchestrator session do?** There is no orchestrator SESSION at Levels 0–2 — that seat was never derived, only assumed.
6. **"I guess orchestrator is the one who chooses?"** Functionally yes — confirmed: the chooser-role is real and graduates up the ladder. The recommended name for it is **the Selector**; "orchestrator" retires because the word keeps re-growing the seat image (your veto stands).
7. **Is the meta-loop responsible for running multiple loops, even parallel?** Running N is plumbing `[carrier]`; deciding N is the Selector at scale; comparing results is the one new Level-4 judgment `[L4-compare]`.
8. *(The implicit eighth: "isn't this just the old triple renamed?")* No — checkably: the old map DEMANDED seats be built before climbing; this one demands a file and a habit, and Turn 1 is legal today in this session. The build list shrank; that is a difference in consequences, not words.

### 6. Canon repairs (proposals — your seat)

The SUSTRALL canon's component descriptions presently present demoted ideas as settled. Proposed repair, honoring the self-contained-canon rule:

1. **Replace, don't patch:** the component sections (the hands/eyes/will triple, the orchestrator-as-will paragraph) are replaced by ONE self-contained section — "The Between-Inquiry Layer" — carrying the turn (with validity condition), the kind-table, the Selector (with the staged-graduation note), the field-before-choice rule + dial, the per-level list, and **status marks on every element** (derived / left-open), so canon's epistemic state stays honest.
2. **The teaching image:** the cockpit/logbook replaces hands/eyes/will — *the pilot (the Selector) scans the instruments (the written field), decides, executes, and logs the flight (the turn record); licenses (autonomy levels) are earned from the logbook, never from simulator polish.* Net analogy count unchanged (it replaces the triple) and it unifies the existing flight-hours framing.
3. **The same-day rename caught by critique:** today's Allocation Rule section in SUSTRALL canon says the allocation question "migrates to the orchestrator" at Level 3 — rides the same pass → "migrates to the Selector."
4. **The worklist consistency pass** (`devdocs/next_steps_for_sustrall.md`): "orchestrator decision rules" → "Selector scope rules"; "run the eyes as designed" → the dial's phrasing; Turn 1 annotated as performable in the current session, fresh-seat optional.

## Inherited Commitments Re-test

Per the Synthesis Trigger's **epistemic inversion** (the user's directive suspended inheritance): every prior claim entered as a demoted candidate; statuses below reflect fresh derivation, not absorption.

- **Commitment (demoted):** traversal memory as a cross-inquiry artifact (`_meta_state.md`-class).
  - **Source:** the dormant draft; the SUSTRALL canon's component sections.
  - **Re-test status:** RE-TESTED — commitment confirmed (re-derived and EARNED). **Evidence:** memory is data, not agency (the kind-table); the retained gates concept requires records; the file is the only Level-1 build item. Its SCHEMA remains un-designed (the draft's schema stays demoted; structural layer, gated on ≥3 real turns).

- **Commitment (demoted):** the seven loop-control moves as a closed decision vocabulary.
  - **Source:** the loop-control design history; the SUSTRALL canon.
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** the same seven choice-types re-emerge from the decision space itself (with stop folded in as a choice rather than a separate faculty); their home is now the **Selector's option-vocabulary**, not a component's repertoire.

- **Commitment (demoted):** "eyes never choose" — enumeration isolated from selection by session.
  - **Source:** the navigation-session doctrine; the SUSTRALL canon.
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised (WEAKENED). **Evidence:** the contamination risk is real (the corpus's own articulation-first design is independent evidence), but the working defense is the **field-before-choice rule** (ordering + written artifact), with fresh-seat enumeration as a quality dial — not a validity condition. The session-count dogma is dropped; the protection is kept.

- **Commitment (demoted):** one-enumerator / two-controllers.
  - **Source:** the loop-control finding.
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** re-derived in role form — one enumerating discipline; control within inquiries held by the runner, control between inquiries held by the Selector role. Same content, no seat implications.

- **Commitment (demoted):** the hands/eyes/will triple as the component map.
  - **Source:** the SUSTRALL canon's component sections.
  - **Re-test status:** RE-TESTED — commitment found INVALID (as a component map). **Evidence:** it promoted a discipline (enumeration) and a role (choosing) into mandatory seats, which the function derivation does not support and which produced phantom build-items; it survives only as a superseded teaching image (replaced by the cockpit/logbook).

- **Commitment (demoted):** the dormant draft's design (one session that enumerates, decides, dispatches, holding `_meta_state.md`).
  - **Source:** `cognitive_harness/non-active/meta-loop/SKILL.md`.
  - **Re-test status:** RE-TESTED — partially confirmed, partially found INVALID. **Evidence:** one-session turns are legitimate (phases-in-one-session is the runners' own proven pattern) — that half is re-derived; its enumerate/choose fusion WITHOUT the written-field-between violates the ordering rule, and its state schema was premature — those halves stay invalid.

- **Commitment (demoted):** the 9-axis role split.
  - **Source:** the autonomy ladder.
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** re-derived as a FUNCTION checklist (it independently corroborates the seven-function list); rejected as a seat map. The "Selector" name is adopted from it, with staged graduation resolving the scope question.

- **Left open (not commitments — newly opened questions with gates):** whether the L3 Selector needs its own session (process-layer inquiry, gated on recorded-turn data); the compare phase's design (gated on multihead reality; reuse note: possible critique-variant).

Pattern-note: two demoted ideas died, four survived only by re-earning their place, and the inquiry's own NEW text was corrected twice by its own critique (the invariance overclaim; the goal-context gap) — the inheritance ban was honored in both directions.

## Next Actions

### MUST

None. The architecture is a meaning-level result; its build items already exist on the worklist (and this finding REMOVES two phantom ones).

### COULD

- **What:** Approve or veto the naming recommendation (Selector / retire "orchestrator").
  **Who:** the user — one word suffices.
  **Gate:** observable — whenever read.
  **Why:** the canon repairs' wording hangs on it; everything except the name stands either way.

- **What:** Execute the **canon repair** (the replacement "Between-Inquiry Layer" section in `docs/canon/sustained_traversal_loop_of_loops.md`, with status marks + the Allocation-Rule rename) and the **worklist consistency pass**.
  **Who:** one editing session.
  **Gate:** condition-bound — after the naming veto window.
  **Why:** canon currently presents demoted ideas as settled — the exact hygiene failure the user named.
  **Depends-on:** COULD item "naming approval". GATED — the section's wording uses the settled names.

- **What:** Take **Turn 1 under the clarified architecture** — in this session or any session: write the field (run routelister or enumerate inline), choose, record selection + rationale + outcome slot + the goal it serves.
  **Who:** the user (with assistant execution if wanted).
  **Gate:** observable — any next work session; **the pre-registration MUST from the Traversal Thesis finding still rides first** (its window closes when the first record is created).
  **Why:** the architecture's first practical payoff is that this is now unambiguous and cheap.

### DEFERRED

- **What:** The L3 Selector-session question (does scoped autonomous choosing want its own session?).
  **Gate:** revival trigger — the process-layer inquiry, after recorded-turn data exists.
  **Why (if revived):** it is the one seat question with a real trade left; deciding it without turn data would repeat canon-running-ahead.

- **What:** The compare phase's design (the L4 judgment; possibly a critique-variant).
  **Gate:** revival trigger — multihead becomes real (≥3 useful sequential chains at L3, per the existing gate).
  **Why (if revived):** the only genuinely new judgment in the whole layer.

- **What:** The turn record's v1 schema.
  **Gate:** revival trigger — ≥3 real turns recorded (the structural-layer sequencing this finding reaffirms).
  **Why (if revived):** schemas follow practice; the validity condition already implies the minimal content (field-reference, choice, rationale, outcome slot, goal).

## Reasoning

**Why kinds-before-names is the load-bearing move.** Every prior confusion instance maps to a kind error: "is the meta-loop the runner?" (cycle confused with executor); "what does the orchestrator session do?" (role confused with seat); "who runs parallel loops?" (plumbing confused with identity). Once each function received its kind — derived from the retained goal layer and live practice, with the demoted maps consulted only afterward — the names had single referents available and the questions answered themselves.

**Why the seam weakened rather than survived or died.** The strongest pro-seam argument (motivated perception corrupts enumeration) is real and has independent in-corpus evidence — but inspecting the corpus's own defenses shows the protection that works is ordering-plus-artifact, not session count: articulate_simple defends openness INSIDE a shared session via its answer-shape rules and written bundle; the runners execute six phases in one session with artifact handoffs. The session split survives as what it actually is — a quality purchase with a context cost — honest as a dial, dishonest as a dogma.

**Why "orchestrator" retires despite the user's guess being right.** The guess concerned the function (the one who chooses) — confirmed and now load-bearing. The WORD failed the anti-regrowth test: every name in this architecture must map to exactly one kind, and "orchestrator" kept conjuring a conductor — a seat — which is the precise image that produced the original tangle (and which today's own canon edit reproduced: "migrates to the orchestrator"). "Selector" was already the worklist's word for the role's first graduation; one role, one name, staged graduation.

**Significant kills and self-corrections.** *Keep-both-names* — killed: two names for one role is the original disease. *Drop-the-record-from-L1* — killed: no records, no gates, no climb. *The invariance overclaim* — the inquiry's own headline ("same cycle at every level") was corrected by its own critique to "invariant through L3; L4 adds compare." *The goal-context gap* — the function list presumed a goal without housing it; the record now carries the seed (goal-formation stays the human's retained seat). *The just-renamed-the-triple adversary* — answered with a checkable consequence difference: the old map demanded seats before climbing; this one makes Turn 1 legal today.

**Self-reference handling — the heaviest configuration yet.** The system re-derived architecture it wrote yesterday, under a ban covering its own words. Guards: the function list stands on the retained goal layer plus live observation of today's actual turns; the option space was generated BEFORE consulting the demoted maps; corroborations are checkable matches, not citations; and the result CUTS AGAINST the author's prior text twice (the triple and the session dogma invalidated) and against its own new text twice (invariance; goal-context). The inheritance ban was honored at every phase, including by the prosecutions.

## Open Questions

### Monitoring

- **Does the kind-vocabulary take?** Observable: the next architecture discussion uses cycle/role/rule/file/dial/plumbing without re-growing seat-language.
- **Does Turn 1 happen under the clarified rules** (field written → choice recorded → outcome slot → goal carried)? Observable: the first turn-record file.

### Blocked

- **The L3 session question and the Selector's scope rules** — blocked on recorded-turn data (the process inquiry's gate).
- **The compare design** — blocked on multihead reality.

### Refinement Triggers

- **If the user vetoes the naming** — the role keeps "orchestrator" with the role-not-seat definition; all repairs re-word accordingly; nothing else changes.
- **If early turns show the field-before-choice rule is too heavy inline** (operators skip writing the field) — the dial's recommendation strengthens toward fresh-seat-by-default; the rule itself stays (it defines counting).
- **If a future inquiry re-opens the architecture** — this finding's per-idea status list is the starting inventory; the same inverted re-test discipline applies.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
metaloop should do what? shouldnt do what? meta loop is MVL loop runner? it also decides what route to follow? should it has seperate session? if it is the one who chooses and runs them in worker session then what does orchestrator session does?i guess orchestrator is the one chooses? meta loop is responsible of running multiple loops even parallel? lets make this more clear becasue right now it is not understood at all, we dont know even if we need orchestator or not... 


and i guess metaloop had many discussions but non of them really cannon.  meta state md file etc all were just some ideas and so be careful to not take preexisting knowledge as canon, even in canon folder files
```

</details>
