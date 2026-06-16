---
status: active
model: claude-fable-5[1m]
effort: max
---
# Finding: The SUSTRALL Launch Checklist — Four Steps + a Rider, Each With Its Alternatives (and the One Step That Must Go First)

## Question

From `_branch.md`: **what are the next MAIN steps for achieving SUSTRALL, and what alternatives of them exist for now** — currently-available options only, main steps only, with every go/no-go decision remaining the user's.

## The concepts this roadmap uses (read this first)

Plain definitions, so every later sentence is readable on its own:

- **SUSTRALL** — the project's era-goal (`docs/canon/sustained_traversal_loop_of_loops.md`): a system that keeps running research loops *by itself* over a long stretch, exploring and defining a topic space, with its autonomy increased only as recorded evidence justifies it.
- **An inquiry (a "loop")** — one run of a runner like `/aMVLw` or `/aMVLwr`: six or seven thinking disciplines executed in sequence, ending in a `finding.md`. The project has run 100+ of these.
- **A route** — one typed "thing we could do next" (e.g., "DIAGNOSE the coverage concept"). **Routelister** is the discipline that *lists* routes: given a body of work and a goal, it enumerates the routes that work offers — without choosing among them. It writes two files: `routelister.md` (the route list of that one run) and **`_route.md`** (a persistent index of routes that accumulates across runs). The new runner **`/aMVLwr`** runs routelister automatically at the end of every inquiry — so every inquiry now finishes with its onward routes already enumerated.
- **The field (of routes)** — the enumerated option-space: all the routes that have been *written down* as available. Three precisions: (i) a field is always relative to a territory — a **local field** is one inquiry's `_route.md` (the routes *that* work offers; these exist today), while the **global field** is the whole project's routes, one per concept, cumulative — which is exactly what the Navigator's recurring whole-project sweep will maintain (it becomes real at the Navigator's first run; until then the practical field is the freshest local one); (ii) the field is the *mapped* part of an open space — routes nobody has enumerated yet aren't in it, and every finished inquiry's exhaust adds to it, so the field grows while you traverse it; (iii) the field is *could-do* (routelister-owned) — distinct from the selections file, which is *decided-about* (Selector-owned). A turn moves a route from the field into the selections file.
- **A turn** — what happens *between* inquiries: look at the field of routes → choose one → start the next inquiry → **write down what was chosen and why**. The human has always done this invisibly; it has *never once been written down* (100+ inquiries, zero recorded turns). **"Turn 1"** = the first-ever *recorded* turn. A recorded turn needs four things to count: the option-list existed in writing before the choice; the choice + a one-line reason are written; an empty "outcome: TBD" cell is left open in the same row; and the goal the turn serves is named. **The outcome cell is NOT filled by a special return-trip** — it's filled in the same selections-file row at a moment that already happens: when the launched inquiry lands and you next open the file anyway (to admit its new routes), you write one line about what the choice produced. Occasionally a row's outcome gets a later append, when a subsequent turn reveals the choice's longer-range worth (it unblocked things / it was a dead end) — opportunistic, during a grooming pass that touches old rows anyway.
- **Why recording the turns is the whole game** — today the project records its *work* (findings) but not its *navigation* (why it went where it went). The turn records are, at once: **(1) the gate fuel** — every autonomy level opens by comparing the system's proposals against recorded human choices, which cannot be done against choices that were never written; the records are the future Selector's training data; **(2) the learning loop** — choice records alone show *what* was picked; only choice+outcome pairs show whether picking that way *works*, and the outcome cell is filled at the close-out moment that already happens (no return-trip); **(3) the measurement substrate** — the six consciousness-gradient indicators are defined as things *observable in traversal records*, so without records the pre-registered criteria measure nothing; **(4) the missing memory organ** — navigation knowledge currently evaporates every session; **(5) eventually the automation's queue** — the Dispatcher fires from this same file. An unrecorded turn happened but never *committed*: no gate fuel, no memory, no statistics — hence the bar "recorded beats wise."
- **The selections file** — a single new file (suggested: `devdocs/selections.md`) holding **every route we have made a decision about**, one row each, with a status — `parked` (deliberately set aside), `admitted` (decided to run), `in-flight` (currently running), `done`, or `removed` — plus, per row: *why it was admitted*, *any condition it must wait for*, and *what future discovery would invalidate the decision*. It was designed yesterday in the **Pipeline Architecture finding** (`devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md`), whose adoption plan introduces this file as its first stage (that plan's label for the stage is "D4" — the term means nothing more than *"create and start using the selections file, with no new sessions or tooling"*). Key property: if you record your decisions in this file, the four requirements of a valid turn-record (previous bullet) are satisfied automatically — the file's columns ARE those four things. That is what "turn-validity by construction" means below.
- **The three roles** (from the same Pipeline Architecture finding): the **Selector** — whoever decides which routes get admitted (today: the user, by hand); the **Dispatcher** — a planned small *program* (not an AI session) that will fire admitted routes as inquiries once parallel running is wanted; the **Navigator** — a planned *recurring, isolated* routelister sweep over the whole project (as opposed to the per-inquiry sweeps `/aMVLwr` already does), run occasionally to refresh the global picture.
- **The pre-registration file** — a file (suggested: `devdocs/indicator_preregistration.md`) to be written **before any recorded turn exists**, stating in advance what observable evidence in future turn records would count toward each of the project's six "consciousness-gradient" indicators (defined in `docs/canon/project_north_star.md`: spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position awareness), each with a *count or rate* measure rather than a yes/no. Why before: committing the criteria before any data exists is what makes them scientifically honest — file timestamps prove the criteria weren't tuned to fit whatever later appeared. **This proof becomes impossible forever the moment the first turn record exists.**
- **The Expedition** — the planned first long autonomous-ish run: **at least 20 recorded turns back-to-back** under a "continue unless something is genuinely wrong" rule. The user has named this the #1 goal. Its own design finding (`devdocs/inquiries/2026-06-10_14-41__lone_traversal_loop_operational_breakthrough/finding.md`) requires a **shakedown** first — a short trial proving the turn-recording setup works before committing to a 20-turn arc.
- **The worklist** — `devdocs/next_steps_for_sustrall.md`, the standing to-do snapshot for the SUSTRALL climb (written 2026-06-10, one day before this finding — so it predates the Pipeline Architecture finding and `/aMVLwr`).
- **The autonomy ladder and its gates** — L0 (human does everything) → L1 (everything *recorded*) → L2 (system *proposes* next routes, human approves) → L3 (system selects and runs sequential work itself) → L4 (parallel workers). Each level opens only on recorded evidence — e.g., L2 opens after **~10 recorded turns** exist to compare proposals against (the ~10 is an admitted placeholder number).
- **The allocation rule** — the standing decision rule for what a work session is spent on: *climbing* (the steps below) is the default; *polishing the loop machinery* is allowed only when specific tripwires fire or for one standing debt at a time.
- **The structural checker** — `tools/structural_check.sh`, a small script every runner already tries to call to verify each discipline's output file has its required sections. It has never been built, so every check this session was done by hand (~7 manual checks per `/aMVLwr` inquiry). Its design is already written (`devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/finding.md`).

## Finding Summary

- **The already-committed plan survives; this session made its steps cheaper, not different.** The worklist's ordered path — write the pre-registration file → take Turn 1 → accumulate ~10 recorded turns → open L2 → build the Dispatcher → write a stop rule → run the final acceptance demo — keeps exactly that order. What changed: Turn 1's record-keeping now has a better artifact (the selections file replaces the worklist's simpler "traversal_memory.md" idea), the option-list for any turn is now produced free by `/aMVLwr`, and the eventual automation's shape is settled (a small program, not another AI session). The next steps are small *because the architecture thinking is finished* — what remains is habit-and-data work.
- **Step 1 — write the pre-registration file. Unconditionally first.** It is the only step with a permanently-closing window: its timestamp must precede the first turn record, and Turn 1 creates that record. *Alternatives:* a full version (one sitting) vs a minimal version (~20 minutes — with the honest caveat that only what is actually written now counts as pre-registered; anything added after data exists is post-hoc by definition) vs **the assistant drafts the file's skeleton and the user fills the judgment cells** (the skeleton = headings + the indicator definitions quoted from the north star + only examples that are already written in the worklist; the *evidence* and *measure* cells — the scientific commitments — stay empty for the user). *Killed:* deferring it.
- **Step 2 — take Turn 1, which now means: create the selections file and write one admitted row in it.** This is one move, about ten minutes, because the route options already exist (this very inquiry ended with a `_route.md` listing 15 routes). The script: **(0) confirm the pre-registration file exists — if not, STOP and do step 1** → (1) open the freshest `_route.md` → (2) pick one route → (3) create `devdocs/selections.md` as a small table → (4) write the chosen route as its first `admitted` row (route + why + any wait-condition + what-would-invalidate + the goal; outcome left open). The bar is deliberately low: *a recorded mediocre choice is worth more than an unrecorded brilliant one.* *Alternatives for where the option-list comes from:* the freshest `_route.md` (free; fine when Turn 1 is just the habit's first repetition) / a fresh-session **Navigator-style sweep of the whole project** (costs one session; the better choice if Turn 1 should set the Expedition's direction, since a per-inquiry route list only sees its own neighborhood) / listing options inline by hand (the floor). *Killed:* creating the worklist's separate `traversal_memory.md` (the selections file does its job better, and starting with the old shape means migrating after a handful of turns).
- **Step 3 — accumulate recorded turns; choose the vehicle. This is the one genuinely open fork.** *Option A — organic:* turns happen as normal work happens; zero ceremony; slow — and note that **making no decision silently chooses this option**. *Option B — start the 20-turn Expedition immediately:* killed by the Expedition's own design finding, which requires a shakedown first — with zero recorded turns, nothing has been shaken down, so "Expedition now" collapses into option C anyway. ***Option C — mixed (recommended):* do ~3 ordinary recorded turns and treat them AS the shakedown** (they debug the file, the habit, and the rhythm on real work, and they count toward the ~10-turn gate), then launch the Expedition on a tested setup. The only real question left is *when to schedule the Expedition*, not whether to shake down first.
- **Step 4 — make the run-observation habit mechanical.** The project's feedback file (`devdocs/improvement_observations.md`) was measured at **zero entries across 109 inquiries** even though every runner prompts for one at the end — prompting alone demonstrably does not work; building the behavior into the machinery does (that is exactly how `/aMVLwr` fixed route-listing: the runner just does it). *Recommended:* attach the observation to the two writing moments that already exist in the selections file — the "why" written when a route is admitted, and a one-line "how did the run go" written when the outcome cell is filled. *Fallback:* the assistant drafts the observation at each inquiry's end and the user vetoes/edits. *Killed:* keeping the prompt alone.
- **The rider (not a main step): build the structural checker.** It is the one piece of loop-machinery work that legitimately rides along now: the allocation rule itself permits one standing debt, the script's design is already written, and the cost of not having it grew this session (~7 hand-checks per inquiry). *Alternatives:* build now / next maintenance slot / keep checking by hand (priced: ~7 checks × every future inquiry).
- **Deliberately NOT next (gated):** opening L2 (needs ~10 recorded turns), the route-admission policy and the selections-file schema (need ≥3 real grooming passes over the file), the stop rule v1, building the Dispatcher (needs the first genuinely-wanted parallel run), the Navigator's first scheduled sweep (needs the first sign the per-inquiry route lists have gone stale), parallel workers, and the final acceptance demo. These wait because their *content is supposed to be derived from the records the early steps produce* — writing them now would be inventing rules without data, a failure the project has already named.
- **The worklist needs an update, not a rewrite** — five edits in two halves: three that can be applied any time (point its Turn-1 item at the selections file; mark its "refresh the dormant meta-loop draft" item as superseded by the Pipeline Architecture finding; note `/aMVLwr` exists), and two wording edits (its old "orchestrator"/"eyes" vocabulary → the Selector/Dispatcher/Navigator role names) that wait on the user's still-open naming decision.

## Finding

*Context: SUSTRALL needs the system to run inquiry after inquiry on its own. The machinery for running a single inquiry is mature (the runners). What has never existed is the recorded layer BETWEEN inquiries — written-down choices of what to do next and why. The steps below build exactly that layer, in the order the evidence rules require.*

### 1. Where things stand (what this session changed, in plain terms)

Nothing reordered the committed path; four things got cheaper or clearer:

1. **The record-keeping artifact got better.** The old plan (the worklist's Turn-1 item) said: when taking the first recorded turn, create a simple dated list called `traversal_memory.md` and log each choice there. Yesterday's Pipeline Architecture finding designed a better artifact for the same job: **the selections file** — one table holding every route a decision has been made about, one row per route, with a status (parked / admitted / in-flight / done / removed), the reason it was admitted, any condition it must wait for, and what future discovery would invalidate it. Writing a row in that table automatically satisfies all four things a recorded turn requires (the options existed in writing first; the choice and its reason are written; an outcome slot is left open; the goal is named) — so no separate log file is needed. And the same table is what the future launcher program will read when automation arrives, so nothing gets thrown away. Bottom line: "take the first recorded turn" and "create the selections file" are now ONE move, not two.
2. **The option-list became free.** Choosing a next route requires seeing the options first. Producing that option-list used to mean running the route-listing discipline (routelister) by hand as a separate session; the new runner `/aMVLwr` now runs it automatically at the end of every inquiry — so a fresh `_route.md` (the file where the enumerated routes accumulate) is always sitting there. This very inquiry produced one: 15 routes, 2 marked high-priority. The first recorded turn can simply pick from it.
3. **The automation question is settled.** When the system eventually starts inquiries without the user typing the commands, that launcher will be a small *program* — named the Dispatcher in the Pipeline Architecture finding — that reads the selections file and fires whatever is admitted and ready. It will NOT be another AI session (a launcher makes no judgments, so paying for a reasoning session there would be waste). Nothing needs building yet; the agreed trigger is the first time two inquiries should genuinely run at the same time.
4. **One worklist item died.** The worklist still lists "refresh the dormant meta-loop skeleton" — i.e., rewrite an old, never-run draft of a coordinator AI-session that was once imagined to manage the loops. That item is superseded: the Pipeline Architecture finding re-derived the whole between-inquiry layer from scratch and concluded no such coordinator session exists in the design at all (deciding belongs to the Selector role, launching to the Dispatcher program). Refreshing the draft would resurrect a retired idea.

Net effect: the climb's next stage is small — one file with a closing deadline (the pre-registration file, step 1), one ten-minute first recorded turn (step 2), one pacing decision (which vehicle for accumulating turns, step 3), and one habit made mechanical (the run-observation, step 4).

### 2. The launch checklist (the four steps + the rider)

| # | Step (and its done-condition) | Why it is next | Alternatives — pick when | Killed |
|---|---|---|---|---|
| 1 | **Write the pre-registration file** (`devdocs/indicator_preregistration.md`): for each of the six consciousness-gradient indicators — its definition (quoted), what future-record evidence would count, and a count/rate measure. DONE = the file exists, timestamped. | **The only permanently-closing window.** Pre-registration is only provable while NO turn record exists; Turn 1 ends that forever. Skipping it permanently demotes the indicator program from evidence to anecdote. | **Full** (one sitting; pre-registers the most) · **minimal** (~20 min; valid but thinner forever — only what's written now counts) · **assistant-drafts-skeleton, user fills the evidence/measure cells** (fastest; the commitments stay the user's) | deferring it |
| 2 | **Take Turn 1** = create `devdocs/selections.md` (a small status table) and write ONE admitted row: the chosen route, why, any wait-condition, what would invalidate it, the goal, outcome left open. DONE = the file exists with that row. ~10 minutes via the guarded script (its step 0: *confirm step 1's file exists, else STOP*). | The first-ever recorded turn — the artifact every later gate consumes. 100+ inquiries exist; zero recorded decisions between them. *Recorded beats wise.* | Option-list from: **the freshest `_route.md`** (free; right when Turn 1 is just the habit's first rep — this inquiry's own 15-route index qualifies, as the *freshest* available, not the best possible) · **a whole-project sweep in a fresh session** (one session's cost; right if Turn 1 should pick the Expedition's direction — a per-inquiry list only sees its own neighborhood) · **inline by hand** (floor) | the old separate `traversal_memory.md`; keeping two record files |
| 3 | **Accumulate recorded turns — pick the vehicle.** DONE = turns appearing in the selections file with outcomes filling in. | Every gate feeds on these records (~10 turns → L2; ≥3 grooming passes → the schema/policy). | **Mixed (recommended): ~3 ordinary recorded turns serve AS the Expedition's required shakedown, then launch the ≥20-turn Expedition** (the user's #1 goal) on a tested setup — the 3 count toward the gate · **organic only** (zero ceremony; note: *not deciding = this*) | **Expedition immediately** — its own finding requires a shakedown first; with zero turns recorded, "now" just collapses into mixed |
| 4 | **Mechanize the run-observation habit.** DONE = observations appearing without anyone having to remember. | The feedback file measured **0 entries / 109 inquiries** with prompting alone. Mechanism beats reminder — the same fix that made route-listing automatic in `/aMVLwr`. | **Ride the two existing writing moments** in the selections file (the "why" at admission; one line "how it went" when the outcome is filled) · assistant-drafts at each inquiry's end, user vetoes | the prompt alone |
| R | *Rider:* **build `tools/structural_check.sh`** (the output-sections checker every runner already calls for). DONE = the script replaces the hand-checks. | The allocation rule's one permitted standing debt; design already written; cost now ~7 hand-checks per inquiry. | **now** · next maintenance slot · keep hand-checking (priced) | letting the build session sprawl into general spec-polishing |

Steps 1+2 together ≈ **one sitting**. For step 3's Expedition moment, the pre-conditions are: the selections file feels smooth after ~3 turns · a goal is chosen · a turn budget-cap is set · ideally the checker is built.

**What a turn looks like from Turn 2 onward** (so the checklist outlives its first run): read the freshest `_route.md`(s) → admit or park routes in the selections file, with reasons → start the next inquiry with a runner → when results land, fill the outcome cells and the one-line observation → check whether the new finding invalidates any waiting row (each row names its own invalidation condition, so this is a lookup, not a re-think).

### 3. What is deliberately NOT next (and what would open each)

| Gated item (plain description) | What opens it |
|---|---|
| **L2** — the system starts *proposing* the next route; the user approves or overrides | ≥10 recorded turns to compare proposals against (the ~10 and the ~80%-agreement figures are admitted placeholders) |
| **The admission policy + the selections-file schema** — written rules for what gets admitted/parked, and the file's final column format | ≥3 real grooming passes over the file (rules are to be *derived from* recorded choices, not invented) |
| **The stop rule v1** — when the system stops working a goal | recorded-turn data; shape already committed (five quality signals + a hard turn-budget cap) |
| **The Dispatcher** — the small program that fires admitted routes as inquiries | the first time two inquiries should genuinely run in parallel |
| **The Navigator's first scheduled sweep** — the recurring whole-project route refresh | the first sign per-inquiry route lists have gone stale or local-blind |
| **Parallel workers + comparing their outputs** | ≥3 useful sequential chains completed at L3 |
| **The explfine demo** — the acceptance test: point the system at a fresh territory and it explores-and-defines it | all the per-level gates passed on recorded evidence |

These stay gated on purpose: their content is supposed to come *from the records* steps 1–4 produce. Writing them today would mean inventing rules without data — a failure mode the project has already identified and named (canon running ahead of practice).

### 4. The worklist reconciliation

`devdocs/next_steps_for_sustrall.md` keeps its structure, its tiers, its gates, and its ordering. Five edits, two halves:

- **Apply-anytime half:** (1) its Turn-1 item's record artifact → the selections file (one move with Turn 1, replacing `traversal_memory.md`); (2) its item 7, "refresh the dormant meta-loop skeleton" → mark SUPERSEDED (the Pipeline Architecture finding re-derived that layer; no orchestrator session exists in the settled design); (3) add a note that `/aMVLwr` now exists (route-listing is automatic per inquiry).
- **Wait-for-the-naming half:** (4)+(5) its "orchestrator (the will)" and "navigational session (the eyes)" wording → the settled role names (Selector / Dispatcher / Navigator). These wait because the user has an explicitly reserved veto on those names that hasn't been exercised yet.

### 5. Honesty notes (kept from this inquiry's own critique)

- **The ordering guard lives inside the Turn-1 script** (its step 0 stops if the pre-registration file is missing) — not only in this document's prose, because prose doesn't stop a hasty start; a checklist step does.
- **The skeleton offer is bounded:** the assistant may draft the pre-registration file's *structure* (headings, quoted definitions, already-committed examples only) — never the *evidence and measure cells*, which are the scientific commitment and stay the user's.
- **"Mixed is the safer arc" is sourced, not estimated:** it follows from the Expedition finding's own shakedown requirement. No quantitative "mixed is faster" claim is made — no data exists for one.
- **Recommending this inquiry's own `_route.md` is a freshness fact, not self-promotion:** the recommendation is "use the *freshest* index" — this inquiry's is simply the newest right now, and any later inquiry's index supersedes it. The richer whole-project sweep remains the stated alternative, with its own use-case.
- **Every step predates this session** (they are the worklist's own items 1–4 and the Expedition finding's requirement) — this session's findings enter only as cost-reductions and artifact upgrades. The roadmap is not the session grading its own homework.

## Inherited Commitments Re-test

- **Commitment:** pre-registration before any traversal record; do it first; timestamps as proof.
  - **Source:** the Traversal Thesis finding's MUST, carried as the worklist's item 1.
  - **Re-test status:** RE-TESTED — confirmed and STRENGTHENED. **Evidence:** verified that zero turn-record files exist (the window is open); the strongest counter ("create the selections file first, since the new architecture says so") was run and lost — the selections file's first row IS a traversal record, so it must come second; the guard was moved into the Turn-1 script itself.
- **Commitment:** "introduce the selections file now" (the Pipeline Architecture finding's first adoption stage).
  - **Source:** `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md`, Next Actions.
  - **Re-test status:** RE-TESTED — confirmed and UNIFIED. **Evidence:** it and the worklist's Turn 1 are one move (the file's columns satisfy the four turn-record requirements automatically); no conflict with pre-registration-first, since both fit in the same sitting, ordered.
- **Commitment:** the Turn-Architecture finding's minimal build list (a turn-record file + the recording habit) and the four validity conditions of a recorded turn.
  - **Source:** `devdocs/inquiries/2026-06-10_14-00__metaloop_orchestrator_role_architecture_from_scratch/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed but frame revised. **Evidence:** the four conditions hold unchanged; what changed is WHERE they're satisfied — by the selections file's columns rather than a dedicated turn-record file. The habit half (actually writing entries) remains live and is step 4's subject.
- **Commitment:** the Expedition's requirements — shakedown before the committed ≥20-turn run; the run itself as the #1 goal.
  - **Source:** `devdocs/inquiries/2026-06-10_14-41__lone_traversal_loop_operational_breakthrough/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed and made load-bearing. **Evidence:** the shakedown requirement is exactly what kills "Expedition immediately" and what makes the mixed option not a compromise but the requirement's own fulfillment.
- **Commitment:** the allocation rule (climbing is the default; machinery work only on tripwires or as the one standing debt) and the ladder's evidence gates.
  - **Source:** the SUSTRALL canon + the threshold finding, carried in the worklist.
  - **Re-test status:** RE-TESTED — confirmed. **Evidence:** all four steps are climb-work; the checker enters under the rule's own debt clause with its scope capped; every gated item lists its committed trigger; the placeholder numbers stay flagged as placeholders.

Pattern-note: four confirmed (one strengthened, one unified, one made load-bearing), one confirmed-with-frame-revised (the turn-record's *function* migrating into the selections file). The roadmap is the committed plan re-priced — which is exactly what it claims to be.

## Next Actions

*(The steps ARE the actions; every go is the user's. No MUST — nothing here may move without you.)*

### COULD

- **What:** Say GO on step 1 — and optionally "draft the skeleton" (the assistant produces the bounded pre-registration skeleton; you fill the evidence/measure cells and save).
  **Who:** you (+ assistant for the skeleton).
  **Gate:** observable — any time before Turn 1; the window stays open only until then.
  **Why:** the single irreversible deadline in the roadmap.

- **What:** Say GO on step 2 — the ten-minute guarded Turn-1 script (create the selections file; admit one route from the freshest `_route.md`).
  **Who:** you (+ assistant execution if wanted).
  **Gate:** condition-bound — after step 1's file exists (the script's step 0 enforces this).
  **Why:** the first recorded turn; everything downstream consumes it.

- **What:** Pick step 3's vehicle: mixed (recommended — ~3 turns as the shakedown, then schedule the Expedition) or organic-only.
  **Who:** you — one line.
  **Gate:** observable — any time; note that not deciding silently selects organic-only.
  **Why:** the #1 goal (the Expedition) stays unscheduled until this is picked.

- **What:** Apply the worklist's three apply-anytime edits (Turn-1 item → the selections file; item 7 → superseded; + the `/aMVLwr` note); the two wording edits after your naming decision.
  **Who:** assistant, on your go.
  **Gate:** observable — whenever.
  **Why:** the standing worklist currently presents a superseded item as live.

### DEFERRED

- **What:** Step 4's mechanism (the observation riding the selections file's two writing moments) and the rider (the checker build).
  **Gate:** step 4 needs Turn 1's file to exist (its moments live in that file's rows); the checker rides the next maintenance slot the allocation rule permits.
  **Why (if revived):** the habit's survival; ~7 hand-checks per inquiry, respectively.

- **What:** Everything in the gated table (L2, the policy/schema, the stop rule, the Dispatcher, the Navigator sweep, parallel work, the acceptance demo).
  **Gate:** each item's listed trigger.
  **Why (if revived):** the climb's own ladder — the rules are to be derived from the records.

## Reasoning

**Why this is a re-priced committed plan rather than a new plan.** Every step already existed as a commitment before this session (the worklist's items 1–4; the Expedition finding's shakedown requirement; the ladder's gates). This session's findings changed costs and artifacts: Turn 1's record-keeping merged with the selections file; the option-list became automatic; the future launcher's shape settled. Presenting a "new roadmap" would have meant the session inflating its own work — the first adversary this inquiry's critique ran, and the reason the Honesty notes section exists.

**Why the pre-registration file outranks everything.** It is the only ordering in the territory that is *irreversible* (timestamps cannot be back-dated honestly), and the cost of inverting it is permanent: the consciousness-gradient indicator program would lose its before-the-data proof forever. Every other step tolerates delay; this one only tolerates being first. The guard was placed inside the Turn-1 script because documents don't stop hasty starts — a checklist's step 0 does.

**Why the mixed vehicle wins the fork.** "Expedition immediately" violates the Expedition's own design requirement (a shakedown must precede the committed arc — and with zero recorded turns, nothing has been shaken down), so it reduces to the mixed option under its own terms. "Organic only" leaves the user's #1 goal unscheduled — and is also what silently happens if no decision is made, which the roadmap says out loud so the fork is a real decision. The mixed option satisfies the shakedown requirement *with* turns that already count toward the ~10-turn gate.

**Significant kills.** *Deferring pre-registration* — killed by the closing window. *A separate `traversal_memory.md`, or keeping two record files* — killed: the selections file does the same job with more (it was designed yesterday precisely to absorb it), and starting with the old shape forces a migration within a handful of turns. *Expedition immediately* — killed by its own finding's requirement. *The prompt-alone observation habit* — killed by measurement (zero entries in 109 inquiries). *A quantitative "mixed is faster" claim* — killed as unsupported; replaced by the sourced safety argument. *Unbounded skeleton-drafting* — killed: assistant-invented examples would anchor the user's scientific judgment cells; the skeleton is bounded to structure + quotes + already-committed examples. *Dropping the gated-items table or the worklist edits from the answer* — killed: the first loses half the question ("what alternatives exist" includes knowing what is deliberately later), the second leaves a standing file actively misleading.

**Self-reference handling.** This roadmap recommends, as Turn 1's option-list, the `_route.md` produced by this very inquiry's own exhaust step. That is flagged in the Honesty notes and bounded: the recommendation is "use the freshest index" (a rule), not "use this index" (an artifact) — any newer inquiry's index supersedes it, and the whole-project sweep stays available as the quality option. The window, the fork, and every go remain the user's.

## Open Questions

### Monitoring

- **Does Turn 1 happen with the window intact?** Observable: the pre-registration file's timestamp preceding the selections file's first row.
- **Does the two-moment observation mechanism actually produce entries** where the prompt produced zero-for-109? Observable: "how it went" lines appearing as outcomes fill.
- **Does the free option-list suffice in practice,** or do early turns reach for the whole-project sweep? Observable: which option-list each early turn cites.

### Blocked

- **Everything in the gated table** — blocked on its named trigger, by design.

### Refinement Triggers

- **If the ~3 shakedown turns reveal friction in the selections file** — fix its v1 shape before the Expedition, not during it.
- **If the user's naming decision lands** — apply the worklist's two wording edits and use the settled role names throughout.
- **If a turn is taken without being recorded** (the old invisible habit resurfacing) — the climb's named failure mode (stagnation) is live; revisit step 4's mechanism before adding any new machinery.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what is next main steps  for achieving SUSTRALL ?
and what alternatives of them exits for now
```

</details>
