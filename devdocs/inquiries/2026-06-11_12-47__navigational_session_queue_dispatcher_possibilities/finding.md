---
status: active
model: claude-fable-5[1m]
effort: max
refines: devdocs/inquiries/2026-06-11_04-00__loop_runner_vs_selector_operational_story/finding.md
---
# Finding: The Pipeline Architecture — Navigator, Selector, Dispatcher over One Selections File (the Possibility Map, and Why Your Three Instincts Were Right)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-11_04-00__loop_runner_vs_selector_operational_story/finding.md` (the operational story: three actors, ONE Selector session holding all judgment, the WAKE→…→STOP scheduler).
**Revision trigger:** User correction — "you are missing something vital": a navigational isolated session is still needed (and is not the Selector); the meta-loop reads a persistent waiting-queue of *selected* paths (not priority-ordered) and dispatches; the Selector is *forced* to re-evaluate the queue as findings land.
**What's preserved:** the judgment-gates-a-session rule (the continuity both designs share); the no-read bright line + the five-field completion pointer (absorbed intact into the Dispatcher); the Loop as the unit of work; dedup, the N-cap, sync-handoff/async-execution.
**What's changed:** "the Selector is the ONLY decision session" revises to *semantic judgment lives in two session-kinds* (the Selector's admission/grooming; the Navigator's enumeration runs) *and dispatch demotes to code*; the single WAKE-scheduler splits into **two loops at two cadences** (grooming / dispatch); RANK (and with it most of the starvation-guard problem) dissolves into readiness + constraints + FIFO-fairness.
**What's new:** the **selections file** (the waiting queue — one artifact with states, absorbing the Expedition's ledger and the turn-record); the **Navigator** (a recurring isolated root-mode enumeration session-kind); the **possibility map** (six axes, five designs) and the **staged growth path**.
**MUST/COULD drift:** the prior's COULD "build the Runner as code when N>1" is superseded — the Runner is absorbed into the **Dispatcher** (same code, plus queue-consumption); rationale: the dispatch step the Runner served now reads the selections file rather than taking hand-offs. The prior's naming COULD (the four "meta-loop" options) is superseded by this finding's naming section (the dispatcher's-loop option strengthened).
**Migration:** executed at this CONCLUDE — an `impacted_by:` line + a revision banner added to the prior finding.

## Question

From `_branch.md` (the user, pushing back on the prior story): we still need a **navigational isolated session** — and it is *not* the Selector. Imagine the **meta-loop** reads a **persistent, regularly-updated file** of *selected* paths (not necessarily priority-ordered) and decides what to run, sometimes in parallel — while the **Selector** admits routes and is **forced to re-evaluate** the existing selections periodically (and when runs discover something: read, understand, remove things from the **waiting queue**). Generic routelister runs maybe live in their own session. "I am confused but my instincts tell there is a better design… **let's try to enumerate possibilities.**"

**Goal:** a real possibility map (axes + designs + trade-offs), the user's sketch faithfully among them, re-tests of the prior findings, and an argued recommendation — under three hard bounds: the navigational session must not be re-collapsed into the Selector; the queue is not priority-forced; open parts stay honestly open.

## Finding Summary

- **All three of your instincts were right, and they are one design seen from three sides.** Split the between-inquiry judgments by *cadence* — **navigation** (slow, global map-work), **admission/grooming** (medium, semantic), **dispatch** (fast, mechanical) — and give the middle one a durable artifact (**the selections file**). Then: the navigational session is real (it does a *different operation*, not the Selector's), the dispatcher mechanizes (your original "meta-loop is operational, maybe just code"), and forced re-evaluation becomes structural (each entry knows what would invalidate it).
- **The pattern has a name: two-level scheduling.** A *long-term admission scheduler* (the Selector: which routes are admitted to the committed set) and a *short-term dispatcher* (which admitted entry runs now), over a ready-SET — kanban's backlog → ready → in-progress. Your "selections are not necessarily ordered by priority" is exactly how mature schedulers work: the ready column is a set; dispatch picks by *readiness and constraints*, not a global rank.
- **The map: six axes generate five designs.** D1 the single-decider (the prior finding — honest for today's manual N=1) · D2 the sketch-literal (a separate light dispatch *session*) · **D3 two-level with a code Dispatcher (the end-state recommendation)** · D4 queue-only-minimal (**the first step**: the selections file inside today's single session) · D5 maximal-split (shown and rejected — seat proliferation).
- **The recommendation is STAGED, because the goal stages it:** sustained-*sequential* operation (the lone-traversal goal's first committed stage) entails the **QUEUE** — durable, revisable selections (D4, adoptable now: one file, no new sessions). The committed *later* stages (Mode B parallelism; the automated carrier) entail the **SPLIT** (D3). Not taste — entailment, staged.
- **The selections file is ONE artifact with states — the Expedition's ledger grown up.** Every route the Selector has *decided something about*: `status ∈ {parked, admitted, in-flight, done, removed}` ("PARKED ≠ LOST" preserved). Each entry carries the **admission rationale** (why selected), **run-conditions** (the GATED-on vocabulary, reused), and an **invalidate-if** (what discovery voids this selection — which is what makes your "forced re-evaluation" *cheap*: grooming is a lookup, not a re-derivation). Plus a small **decision log** for non-route choices (stop/widen/trigger-a-Navigator-run). The FIELD (`_route.md`) stays separate: *what could be done* (routelister-owned) vs *what we've decided* (Selector-owned).
- **Turn-validity becomes automatic.** The Turn Architecture finding's four validity conditions (field-before-choice · choice+rationale · outcome slot · the goal) are delivered *by construction*: the field is written by other stations before admission; the admission entry IS the choice+rationale; the status trail + completion pointer IS the outcome; entries carry the goal. The discipline becomes a side-effect of using the artifact.
- **Dispatch is code, with one honest valve.** If admitted entries carry run-conditions, "what runs now" = *fire any runnable entry while a slot is free* — no judgment, so code (the prior Runner absorbed; no-read intact). Entries the Selector can't fully annotate are marked `needs-judgment` and are never fired — they surface back. **Two observables govern the design's health:** a high valve-rate → improve annotations (or accept Selector-handled escalations); the *Selector overloading* on escalation volume → that is the real trigger for D2 (a separate light dispatch session — a genuine fork, not a failure).
- **The Navigator is a recurring isolated session-kind — earned on operation-difference grounds.** Routelister's ROOT-mode (project-wide breadth sweep + index maintenance: re-confirm, stale-flag, merge) is a *different operation* from the loop-tail exhaust runs, at a different cadence — loop-tails are locally blind (the routelister-gap finding's exact warning). Recurring (every K landings / on staleness), isolated by construction (it enumerates; it never chooses). The prior findings' fresh-seat *dial* (objectivity) survives separately — the Navigator doesn't reverse it; it answers a different question.
- **Three failure poles bound the whole operating space:** **stagnation** (the Selector never fires), **explosion** (it never stops), and — new with the queue — **rot** (stale commitments; the wall of dead tickets). Structural grooming is rot's specific antidote.
- **Naming (your seat):** **Navigator / Selector / Dispatcher** — and **"meta-loop" = the Dispatcher's operational loop** (the recommendation): it is the only always-running mechanical loop in the design, the most literal "loop over the loops," and it makes your first instinct ("an operational layer, maybe just code") the word's final meaning.

## Finding

*Context: the prior finding answered "how does the system run loops?" with one reasoning session (the Selector) holding all judgment over a scheduler cycle. You pushed back with three corrections. This finding enumerates the design space those corrections open, locates the prior design inside it, and recommends — in stages — the design your instincts were assembling.*

### 1. The map — six axes, five designs

**The axes:** where enumeration lives (loop-tails only / + a recurring isolated root-run / a standing seat) · whether admission and dispatch are split · the dispatcher's form (code / light session / merged) · a persistent queue or not · grooming triggers (none / periodic / event-driven / both) · the semantic-seat count (1 / 2 / 3).

| Design | What it is | Choose it when | Cost |
|---|---|---|---|
| **D1 — the single-decider** (the prior finding) | one Selector session sees/chooses/dispatches; runner=code; no queue; navigation = a dial | solo, manual, short horizons (today's truth) | selections live in no artifact; cadences mixed; doesn't scale to parallel |
| **D2 — the sketch-literal** | three semantic seats: Navigator session + Selector (admit+groom) + a *light dispatch session* | you're in D3 and the **Selector overloads** on escalation volume (the real D2 trigger) | a session that mostly performs mechanical work |
| **D3 — two-level, code Dispatcher** ★ | Navigator (recurring isolated root-runs) + Selector (admission + grooming of the selections file) + **Dispatcher = code** (+ the valve) | parallel runs or long horizons — the committed end-state | overhead unjustified at manual N=1; needs the annotation habit |
| **D4 — queue-only minimal** | today's single session, but its choices flow through the **selections file** | **now** — the first step; one file, no new sessions | doesn't yet decouple cadences |
| **D5 — maximal split** | navigation + admission + dispatch + compare, each a standing seat | never — shown and rejected | seat proliferation: the disease the Turn Architecture inquiry existed to kill |

The map's one apparent fork (D2 vs D3) closes gracefully: **the valve connects them.** A code Dispatcher that escalates everything it can't fire has effectively handed judgment back to the Selector (a D4-flavored re-merge); only when those escalations *overload the Selector* does a separate dispatch session (D2) earn its seat. Two observables — the valve-rate, and Selector overload — tell you where you are and what to do.

### 2. The end-state design (D3), on one board

```
            THE FIELD (_route.md)                       THE SELECTIONS FILE (one file, Selector-owned)
   (routelister-owned: all enumerated routes)   ┌─────────┬───────────┬─────────────┬──────────────┐
              [backlog — a VIEW]                │ PARKED  │ ADMITTED  │  IN-FLIGHT  │ DONE/REMOVED │
                     │                          │ (with   │ (rationale│   (≤ N)     │ (archived,   │
   ┌─ the NAVIGATOR ─┘                          │  why)   │ run-conds │             │  with why)   │
   │  recurring, isolated, root-mode            │         │ invalid-  │             │              │
   │  sweep + index maintenance;                │         │  ate-if)  │             │              │
   │  enumerates, NEVER chooses                 └─────────┴───────────┴─────────────┴──────────────┘
   │                                                  ▲  ▲                │  ▲
   └── loop-tail routelister runs                     │  │ admits/grooms  │  │ status flips +
       keep feeding the field too                     │  │ (single writer)│  │ completion pointers
                                                ┌─────┴──┴─────┐   ┌──────┴──┴──────┐
                                                │  the SELECTOR │   │ the DISPATCHER │
                                                │  (a session — │   │ (code — fires  │
                                                │  admission +  │   │ runnable ≤N,   │
                                                │  grooming)    │   │ dedup, valve,  │
                                                └───────▲───────┘   │ never reads)   │
                                                        │           └──────┬─────────┘
                                              the needs-grooming           │ spawns
                                              INBOX (completions,          ▼
                                              faileds, valve items)   THE LOOPS (MVL inquiries
                                                        ▲             → findings + new routes)
                                                        └──────────────────┘
```

**The Navigator** — a recurring isolated session-kind: routelister ROOT-mode over the project + index maintenance (re-confirm, stale-flag, merge). Triggers: every K landings, or staleness signals. It enumerates; it never chooses. (Loop-tail routelister runs continue per-inquiry — the Navigator is the *global* pass they can't supply.)

**The Selector** — the admission officer and groomer, a reasoning session, the selections file's *only author*. Per landed finding: read it; admit new routes from the field (entry = rationale + run-conditions + invalidate-if); re-check the invalidate-ifs of entries touching the landed concepts. Every K landings: a full grooming sweep. It parks, removes, and annotates — always with reasons. Non-route decisions (stop-admitting / widen / trigger-a-Navigator-run) go in the file's **decision log**.

**The Dispatcher** — code (the prior Runner absorbed): whenever a slot is free, fire any ADMITTED entry whose run-conditions pass, dedup against in-flight intents, flip statuses, write completion pointers; `failed` and valve-surfaced entries land in the **inbox** the Selector reads next time it sits down. It never opens findings or routes (the no-read bright line, intact).

**The two loops** (replacing the prior single scheduler): the **grooming loop** (slow, semantic — the Selector's) and the **dispatch loop** (fast, mechanical — the Dispatcher's). RANK as a global ordering dissolves — readiness + constraints + FIFO-fairness among equals — and with it most of the starvation-guard problem.

### 3. The selections file, precisely

- **One artifact, five states:** parked / admitted / in-flight / done / removed — every route the Selector has *decided something about*, with the decision's reason. This is the Expedition's ledger grown up ("PARKED ≠ LOST" is now a state in the same file the Dispatcher reads past).
- **The entry-triple:** **admission-rationale** (why this was selected — exactly the turn-record's "choice + rationale") · **run-conditions** (when it may fire — reusing the canonized GATED-on(condition) vocabulary) · **invalidate-if** (what discovery voids the selection — corrigenda-discipline applied to *decisions*).
- **Not priority-ordered.** The ADMITTED column is a set. Where ordering matters, the Selector expresses it as *constraints on entries* (run-after-X, exclusive-with-Y), never as a queue-wide rank.
- **The decision log:** non-route choices (stop / widen / Navigator-trigger / compare verdicts), one line each — so the unification is *route-complete by construction, decision-complete via the log*.
- **Guards:** single-writer (the Selector authors; the Dispatcher only flips statuses and appends pointers in marked fields); DONE/REMOVED entries archive out so the live file stays small.
- **Turn-validity by construction:** field-before-choice (the field is written by other stations), choice+rationale (the admission entry), the outcome slot (status trail + pointer), the goal (referenced per entry) — the Turn Architecture's validity condition stops being a discipline to remember and becomes a property of the artifact.

### 4. The growth path (staged, with observable triggers)

1. **Now → D4:** create the selections file and route today's choices through it — *one file, no new sessions*. (It formalizes an existing habit: the worklist and the Expedition's ledger sketches are proto-selections files.) This is entailed by the *sequential* lone-traversal goal already: a 20-loop expedition's selections otherwise live in no artifact and rot unexamined.
2. **First parallel want → split the Dispatcher out as code.** The moment two loops should be in flight, the dispatch loop earns its code form (Mode B schedules this stage anyway).
3. **First local-blindness/staleness → schedule the Navigator.** When a loop-tail's routes feel locally blind or the index carries stale entries, run the first isolated root-mode pass; recur sparsely.
4. **If the Selector overloads on escalations → D2's seat.** The separate light dispatch session is a real fork with a real observable — not a failure of the design, its pressure valve.

**You are all three stations today.** At Level 1 the human alternates the hats — sometimes surveying the map, sometimes deciding what deserves running, sometimes just firing the next thing. The architecture *names* what you already do, so the autonomy ladder can graduate one hat at a time: the **Dispatcher** stays fixed code at every level; the **Navigator** stays schedulable; only the **Selector** graduates (admit → propose-then-approve → admit-within-scope) — and the selections file's rationale trail is exactly the agreement-data those gates need.

**The failure triad:** stagnation (never fires) · explosion (never stops) · **rot** (stale commitments — the queue's own pole; structural grooming is its antidote).

### 5. Naming — your seat

**Navigator / Selector / Dispatcher** (the executor "Runner" dissolves into the Dispatcher). The contested word **"meta-loop"** now has a natural home: **the Dispatcher's operational loop** — the only always-running, mechanical, loop-over-the-loops in the design, which makes your first instinct ("the meta-loop is an operational layer… maybe just code") the word's final meaning. (Alternatives remain: retire it, or keep it for the dissolved turn-cycle — but the cycle is now visibly two loops, so that referent has faded on its own.) One word per station; veto freely.

## Inherited Commitments Re-test

- **Commitment:** judgment-gates-a-session (a reasoning session is justified only where a judgment is made).
  - **Source:** the prior finding (`2026-06-11_04-00`, §4.1).
  - **Re-test status:** RE-TESTED — confirmed, and now load-bearing at finer grain. **Evidence:** it is exactly this rule, applied per-judgment instead of wholesale, that generates the new design: navigation and admission are judgments → sessions; dispatch with annotated entries is not → code.
- **Commitment:** "the Selector is the ONLY thing that decides" (one decision session).
  - **Source:** the prior finding, the cast table.
  - **Re-test status:** RE-TESTED — confirmed but frame revised. **Evidence:** the *intent* (decision-authority must not fragment into accidental deciders) survives — the Runner/Dispatcher still never judges; but semantic judgment now deliberately lives in two session-kinds (the Selector's admission/grooming; the Navigator's enumeration), and the single-session reading was the coarse-grain application of the deeper rule above.
- **Commitment:** the WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP scheduler (one session's cycle), RANK v1 + starvation guard.
  - **Source:** the prior finding, §4.3.
  - **Re-test status:** RE-TESTED — confirmed but frame revised (SPLIT). **Evidence:** every step survives, redistributed — REFRESH/FILTER's semantic parts + admission → the grooming loop; DISPATCH/dedup/N-cap → the dispatch loop; RANK dissolves into readiness+constraints+FIFO (and the starvation problem largely dissolves with it — it was an artifact of forcing a global rank); STOP splits (the Dispatcher idles on empty; the Selector owns goal-done).
- **Commitment:** the Runner's no-read bright line + the five-field completion pointer.
  - **Source:** the prior finding, §4.2.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** absorbed intact into the Dispatcher (code never opens artifacts; pointers + status flips only; `failed` is a report, the decision is the Selector's).
- **Commitment:** the fresh-seat enumeration DIAL (a quality knob, not a validity condition).
  - **Source:** the Turn Architecture finding (`2026-06-10_14-00`, §2).
  - **Re-test status:** RE-TESTED — confirmed; the Navigator added on DIFFERENT grounds. **Evidence:** the dial answered *where* enumeration runs (objectivity); the Navigator answers *what* runs (root-mode + index maintenance — a different operation at a different cadence, which loop-tails cannot supply per the routelister-gap finding). No reversal; two compatible knobs.
- **Commitment:** field-before-choice + the turn-record's four validity conditions.
  - **Source:** the Turn Architecture finding, §2.
  - **Re-test status:** RE-TESTED — confirmed and STRENGTHENED. **Evidence:** the split makes the rule architectural — the field is written by other stations before the Selector chooses, and the selections file delivers all four conditions by construction (the admission entry is the choice-record; the status trail is the outcome slot).
- **Commitment:** the Expedition's ledger ("PARKED ≠ LOST"; the deferral queue) + Mode B (a persistent spine dispatching workers).
  - **Source:** the Expedition finding (`2026-06-10_14-41`).
  - **Re-test status:** RE-TESTED — confirmed and ABSORBED/extended. **Evidence:** the selections file is the ledger grown up (parked is a first-class state in the same audited file); Mode B's spine maps onto the Selector + Dispatcher pair, with the queue as their contract.

Pattern-note: one commitment confirmed-unchanged, one confirmed-strengthened, one confirmed-absorbed, two confirmed-but-frame-revised, one confirmed-at-finer-grain, one confirmed-with-an-addition-on-different-grounds — the revision is governed throughout by the one shared rule (judgment-gates-a-session), which is what makes this an evolution of the prior architecture rather than its contradiction.

## Next Actions

### MUST

- **What:** Add `impacted_by:` + a revision banner to the prior finding (`2026-06-11_04-00`), pointing here — the single-Selector story and its scheduler are revised by this design.
  **Who:** this CONCLUDE (executed immediately after this finding is written).
  **Gate:** observable — done in this session.
  **Why:** the prior finding otherwise presents a superseded architecture as current.

### COULD

- **What:** Take the **D4 step** — create the selections file (states + the entry-triple + the decision log) and start routing choices through it.
  **Who:** the user (with assistant execution if wanted); it changes the live workflow, so it's the user's call to start.
  **Gate:** observable — any next working session; the file's v1 can be minimal (a markdown table).
  **Why:** it is the staged path's first move, entailed by the sequential goal already, and it makes every later step (Dispatcher, Navigator, gates) cheaper.

- **What:** Approve or veto the naming (Navigator / Selector / Dispatcher; "meta-loop" = the Dispatcher's loop).
  **Who:** the user — one line.
  **Gate:** observable — whenever read.
  **Why:** one word per station keeps the next design conversation un-tangled.

- **What:** Annotate the Expedition finding (ledger → "grown into the selections file") when the file ships.
  **Who:** rides the D4 step.
  **Gate:** condition-bound — after the selections file exists.
  **Why:** keeps the ledger's vocabulary pointing at its successor.

### DEFERRED

- **What:** The selections file's full SCHEMA (field names, formats).
  **Gate:** revival trigger — ≥3 real grooming passes recorded (schemas follow practice).
  **Why (if revived):** the v1 minimal table will have shown which fields earn their place.

- **What:** The D2 fork (a separate light dispatch session).
  **Gate:** revival trigger — the Selector observably overloading on valve-escalation volume.
  **Why (if revived):** the design's named pressure valve; building it earlier is a seat without a job.

- **What:** The compare-phase design (reconciling parallel findings).
  **Gate:** unchanged from the prior findings — parallel work becoming real.
  **Why (if revived):** the one genuinely-new judgment parallelism introduces; it slots between landings and grooming.

## Reasoning

**Why the enumeration came first.** The user asked for possibilities, and the map is what makes the recommendation checkable: D3 is not asserted — it is *located* (D1 honest-for-today, D4 the entailed first step, D2 a fork with a named observable, D5 rejected for seat-proliferation). The choose-when clauses make the map decision-usable rather than decorative.

**Why the split is right (and when).** The three judgments differ in cadence and context (global map-work / semantic curation / mechanical firing); one session doing all three mixes cadences — invisible at N=1, compounding with parallelism. The staged entailment keeps the claim honest: the *queue* is needed for sustained-sequential already (selections must outlive sessions and stay revisable); the *split* is needed when the goal's own later stages (Mode B, the carrier) arrive.

**Why one selections file.** Parked and admitted are states of the *same decision*, made by the same role, revised by the same grooming, audited in the same trail — two files would split one decision-history. The single-writer rule plus the Dispatcher's marked append-fields keep it consistent; archiving keeps it small. Folding the turn-record in is route-complete by construction and decision-complete via the log — checked, not assumed.

**Why the Dispatcher is code.** Annotated entries leave dispatch no judgment ("fire any runnable entry while a slot is free"), and the valve handles the honest residue without giving code any authority — un-annotatable entries are simply never fired by code. Critique's correction matters here: a saturated valve does NOT turn the Dispatcher into D2 — it lands the judgment back on the Selector (a D4-flavored re-merge); D2's separate session is justified only by the *second* observable (Selector overload). Two observables, two moves.

**Significant kills.** *D5 (every function a seat)* — killed: seat-proliferation, the original disease. *A priority-ordered queue* — killed: the user's own bound, and mature dispatch uses ready-sets with constraints. *Dropping invalidate-if* — killed: grooming becomes re-derivation or neglect (rot). *Dropping the Navigator from the end-state* — killed: loop-tails are locally blind and the index goes unmaintained (kept sparse instead). *A third metaphor* — killed: kanban + the ATC-upgrade + the OS-spine suffice. *"The goal entails D3 today"* — killed as overclaim; replaced by the staged entailment.

**Self-reference handling — revising yesterday's own finding.** The heaviest guard-set this session: the revision is forced by the user's corrections, governed by a rule BOTH designs share (judgment-gates-a-session), every prior commitment is tracked to its new home (nothing silently dropped — see the re-test), the boldest new claims were each narrowed by critique (the continuum's degradation target; the unification's residue; the entailment's staging), and the open hinges are observables (valve-rate; Selector overload; staleness), not assertions.

## Open Questions

### Monitoring

- **Does the D4 file get used?** Observable: selections actually routed through it in the next working sessions; the first grooming pass happening at all.
- **The valve-rate and the Selector's escalation load** — the two health observables, once the Dispatcher exists.
- **Does the Navigator's sparse cadence suffice?** Observable: how often root-runs find what loop-tails missed (the gap finding's tally, now operationalized).

### Blocked

- **The queue schema** — blocked on ≥3 real grooming passes.
- **The compare design** — blocked on parallel work becoming real (unchanged).

### Refinement Triggers

- **If the user vetoes the naming** — re-word; the architecture is unchanged.
- **If grooming lapses in practice** (rot appears) — strengthen the triggers (smaller K; per-landing sweep) before adding any new machinery.
- **If the Selector overloads on escalations** — the D2 fork's trigger has fired; spin up the separate dispatch session.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
[quoting the prior finding's three-actor summary] … i feel like you are missing somthings vital .

we still need a navigational isolated session. i guess u think thats selector, i disagree

and imagine meta loop is the one actually read some persistant and regularly updated file and picks what to run next , the selections are not neccesarily order by priority.. meta loop read this list of selected paths and decides to run them , sometime in parallel, and selector is forced to revaluate exisitng selected routes periodically too. If meta loop runs discovers sth , selector read them and understand sth new and can re evaluate the quene (waiting quene) and remove thigns etc.

and navigational generic routelister runs are differnet session maybe?

i am confused but my instints tell that there is better design and which makes a lot more sense. lets try to enumarate possibilitties
```

</details>
