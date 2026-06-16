---
status: active
model: claude-fable-5[1m]
effort: max
impacted_by: devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/finding.md
---
# Finding: routelog — Adopt It, Retargeted: the Route-Engagement Recorder That Writes the Selections File (Not the Route-Map)

> **⚠ CORRIGENDUM (placement revised — added 2026-06-13).** A later inquiry (`devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/finding.md`, "Run-State Lives Per-Inquiry") revised **where routelog writes**. This finding's **Correction 1** put the run-marks in a single per-project `devdocs/selections.md` as the *source of truth*. That is superseded on two points:
> 1. **Write-target → per-inquiry `_route_engagements.md`.** The run-log's source of truth is a **new underscore state-class file at each inquiry root, `_route_engagements.md`** (append-only, sibling to `_route.md`) — NOT a central project file. Reason (checkable): the *local* question "is THIS inquiry's route #N run?" is the common one, and a central file forces a whole-file scan for it (the 2000-entry-lookup problem) plus reference-breakage on folder moves. `routelog start` / `routelog done` append to `_route_engagements.md`.
> 2. **The central file's role → split in two, both NOT the per-route done-log.** "What's been run across the project" becomes a **DERIVED view** — `routelog list` (no argument) globs and assembles all `_route_engagements.md`, never a maintained second file. The genuinely-project-level *forward* artifact (the Selector's working-queue the Dispatcher fires from, "object B") stays **deferred** behind the Dispatcher gate.
>
> **What still stands (≈90% of this finding):** routelog's mechanism, the two writing moments (`start`/`done`), the degraded `done`-without-`start` mode, the stale-in-flight sweep, the `park`/`list` extras, the NOT-list scope fence, and the pre-registration window guard — **except** the guard now re-attaches to "the **first `_route_engagements.md` anywhere** in the project" (detected by a glob at first run-log), since distributing the truth removes the single central-file-creation event it used to fire on. Read Correction 1 and the "↗ taken up" pointer below with this retarget in mind: the ↗ pointer survives, but the *status words live in `_route_engagements.md`*, not a central selections file.

## Question

From `_branch.md`, two items: **(1)** routes get listed well (field-tested in crowboy with `/aMVLwr`), but **nothing tracks which routes have been run** — including routes run informally in plain LLM sessions. What are our options? **(2)** The user's proposal: a new skill **routelog** ("routelist updater") — `routelog path_to_routelister.md lets develop X` — that wraps a run, collects the produced folder path + metadata afterward, and writes RAN back into the original routelister.md. "What do you think?"

## The concepts this finding uses (read this first)

- **A route-map (`routelister.md`)** — the per-run list of typed routes one routelister run produced. In `/aMVLwr` inquiries it is **archived into `docarchive/` at CONCLUDE** and **regenerated** if routelister runs again — it is a *snapshot of perception*, not a living document.
- **The route index (`_route.md`)** — routelister's persistent per-territory concept-map: one row per concept, accumulating across runs, never archived. Its spec allows *within-concept facts* (depth-pointers to a concept's manifestations, depth-signals, timestamps) and explicitly excludes *process/control-flow state* (statuses, verdicts).
- **The selections file** — the designed-but-nowhere-deployed ledger from the Pipeline Architecture finding (`devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md`): one per-project table of **every route a decision has been made about** — status (parked / admitted / in-flight / done / removed), why it was admitted, artifact pointers, outcome. Writing a row in it is, by construction, a valid **recorded turn** (choice + reason + outcome slot + goal).
- **The two writing moments** — the selections design's lifecycle: **admit** (record the choice when work begins) and **close-out** (record pointers + outcome when it lands).
- **The crowboy field record** — four completed inquiries in `/Users/ns/Desktop/projects/crowboy/`; three ran `/aMVLwr`. Their `_route.md` files carry **hand-written run-state** ("DEVELOPED via full /aMVLwr inquiry…", "IN PROGRESS — §1–§4 done, 119 tests green", "DONE", "RATIFICATION PENDING") directly under headers that say "no process/control-flow state" — the tracking need being met by hand, against the spec, because no proper home existed.
- **The pre-registration window** — the native project's standing rule (the SUSTRALL launch checklist): before the FIRST recorded turn ever exists, a pre-registration file must be written (its timestamp is the proof); creating the first selections row starts that clock irreversibly.

## Finding Summary

- **Verdict on routelog: ADOPT — your mechanism is right; two corrections are forced by structure, not taste.** What's right (and credited as such): one small command around any run · automatic metadata collection · binding run-artifacts to routes · "reliable and up to date" as the goal. This is the *mechanize-the-habit* pattern (exactly how `/aMVLwr` fixed route-listing), and it is in fact **the missing write-tool of the already-designed selections file — you re-invented the turn-recorder from field pain**, which is the strongest validation that design has received.
- **Correction 1 — retarget the write. Marks die in routelister.md; they live in a per-project selections file.** Checkable in your own crowboy folders: all three route-maps sit in `docarchive/` (the runner archives them at CONCLUDE), and re-running routelister regenerates the map (marks would vanish). Also "what has been run?" is a *project-level* question, while route-maps are per-inquiry — your hand-marks are already scattered across three folders. So: **routelog writes to `devdocs/selections.md`** (created on first use; each row carries a source-map reference) **plus a bare "↗ taken up — finding at P" pointer into the route's `_route.md` row** — which is legal *today* (a new artifact for a concept is a *manifestation*, exactly what the index's depth-pointer field exists for). Route-maps are never mutated. The status words (DONE / IN-PROGRESS) move out of `_route.md` — curing the spec contradiction your hand-practice was forced into.
- **Correction 2 — "wrap" must be two moments, not one.** A skill fires at invocation; "after the run" has no hook — sessions end, crash, drift (the measured zero-for-109 lesson: un-mechanized closing steps don't happen). So: **`routelog start`** writes the admission row IMMEDIATELY (route + why + goal + in-flight — the record survives session death), hands the session its *work contract* (the route's text + guidance, including a paste-able runner command when applicable), and prints the close-out command; **`routelog done`** completes the row (status, artifact pointers, one-line outcome) and stamps the ↗. **`routelog done` without a prior start works** (creates the row retroactively — the degraded mode that still covers forgotten starts and purely informal work). Every invocation **sweeps stale in-flight rows** ("2 open runs — close them?") — the reminder mechanized into the tool. Think *checkout/checkin*: start checks a route out of the field; done checks it back in with the deliverable attached; an unclosed checkout is visible, never lost.
- **The day-1 surface stays small: two commands** (`routelog start`, `routelog done`), with two discoverable extras — **`routelog park`** (recording a deciding-AGAINST: "looked at it, not now, because…" — the parked state finally has a pen) and **`routelog list`** (print the table: open / done / all — the one-command answer to "where do I look?"). The sweep, the route disambiguation (ordinal or name-fragment; on ambiguity it asks, never guesses — a mis-bound mark corrupts the ledger), and the guard are behaviors, not commands.
- **The window guard travels into the tool, graded.** On first use in a project (no selections file yet), routelog states the consequence — "this creates this project's first traversal record; if you ever intend pre-registered indicator measurement here, that file must exist FIRST, irreversibly" — and asks once. It **hard-STOPs only where a pre-registration program is declared** (the native project); elsewhere (crowboy) it warns and proceeds. The launch checklist's irreversible ordering becomes self-enforcing without colonizing projects that never intended to pre-register.
- **Scope fence:** routelog **records and points — it never chooses a route, never launches a run, never edits route-maps, never writes status words into `_route.md`** (its spec ships with this NOT-list). You said it yourself: "I am the meta loop still."
- **The one-view answer (your real desire):** *what could I do?* → the freshest route-map · *what's this concept's state?* → `_route.md` (with ↗ where work happened) · ***what has been run, what's open, what came of it?* → `selections.md` — the one reliable view, current by mechanism, project-wide.** Three files, one job each — more trustworthy than one file doing three jobs badly.
- **v1 = routelog alone.** Enhancement 1 (later): `/aMVLwr` accepts an optional route-ref and appends the completion mark itself at CONCLUDE — runner work loses all ceremony; routelog remains the tool for informal runs. Flagged COULD: one clarifying sentence in routelister's spec (manifestation pointers may reference later-engagement artifacts; status words stay excluded).
- **Crowboy gets cured, not scolded:** the existing hand-annotations split into their halves — pointers stay in `_route.md` (they were legal all along); the status/progress/outcome lines become the new selections file's first rows. The "no process state" headers become true again.

## Finding

*Context: routelister deliberately enumerates without tracking (its identity is perceive-the-field, never select or manage); the runner archives each route-map at CONCLUDE; and the ledger designed to hold decisions (the selections file) existed only on paper. Your field test hit the vacuum between them within a day — and your hand filled it the only place available. The design below gives that practice a proper home and a tool.*

### 1. The gap, diagnosed

The missing thing is a LAYER, not a feature. Routelister's spec **excludes run-state on purpose** (enumerate-not-select; "no process or control-flow state" in the index; Process-coupling is one of its named identity failures) — a route-map that managed its own execution would stop being a perception instrument. The selections file was designed three days ago as exactly the decided-about ledger this requires — but it is deployed in no project. Your crowboy hand-annotations are the proof of demand: within 24 hours of routelister's first field use, you hand-wrote per-route **status + pointer + one-line consequence + partial-progress notes + cross-references** — which is, column for column, the selections entry + outcome cell. You re-invented the design from need. The fix is to make the ledger real and give it a pen.

### 2. The option-map (item 1's answer)

| Axis | Options | Verdict |
|---|---|---|
| **Placement** — where marks live | **(a) routelister.md** (your literal proposal) | dies structurally: archived at CONCLUDE (your three maps already are), regenerated on re-runs, per-inquiry scatter |
| | **(b) `_route.md` only** | status words are outside its spec boundary; **pointers are inside it** — half-legal |
| | **(c) per-project selections file** | the designed home; project-wide; survives everything |
| | **(d) = (c) + a ↗ pointer in (b)** | **the recommendation** — the ledger holds the state; the index shows where work happened |
| **Mechanism** — what writes | **(a) wrapper skill (routelog)** | **recommended** — covers informal runs by construction |
| | (b) post-hoc mark command | kept as routelog's degraded mode (`done` without `start`) |
| | (c) runner write-back | real, gated as enhancement 1 (covers only runner work) |
| | (d) keep hand-editing | the measured failing state |
| **Moments** — when | (a) one "wrapping" invocation | dies: no after-the-run hook exists; marking RAN at start would be a lie |
| | **(b) two moments (start + done)** | **recommended** — write-ahead admission survives session death; = the committed admit/close-out |
| | (c) done-only | kept as the degraded mode |

Your sketch was (a)×(a)×(a): the right mechanism aimed at a file that can't hold it, with a wrap that has no hook. The corrections keep your mechanism and fix the two structural cells.

### 3. routelog v1 (item 2's answer — the buildable shape)

```
routelog start <map-path> <route-ref>      # route-ref = ordinal ("7") or a name fragment; ambiguous → routelog lists candidates and asks
  → appends to devdocs/selections.md:  | route | source-map#ref | why (one line, prompted) | goal | status: in-flight | started |
  → prints the WORK CONTRACT: the route's Direction + guidance (+ the runner command to paste, if a runner fits)
  → prints the close-out line to paste later:  routelog done "<artifacts>" "<outcome>"
  → first use in a project: the WINDOW GUARD (state the irreversible consequence; STOP only where pre-registration is declared)

routelog done [<route-ref>] [<artifact-paths>] ["<one-line outcome>"]
  → flips the row to done; writes pointers + outcome
  → stamps the ↗ manifestation pointer into the route's _route.md row (best-effort: skip with a note if no index exists;
    the selections row is the record of record)
  → with no prior start: creates the completed row retroactively (the degraded mode)

routelog park <map-path> <route-ref> "<why>"     # deciding-AGAINST, recorded — the parked state's pen
routelog list [open|done|all]                     # the one-command view of the ledger

(every invocation: sweep — list in-flight rows older than this session and offer to close them)
```

**The NOT-list (ships in routelog's spec):** never chooses a route · never executes/launches anything (the contract is printed text) · never edits routelister.md or archived files · never writes status/verdict words into `_route.md` · never auto-creates the selections file silently (the guard speaks first). **Distribution:** `cognitive_harness/routelog/SKILL.md` + an installer entry, like every skill.

### 4. Why this is quietly load-bearing for the climb

The rows routelog writes are not just bookkeeping: each is a **recorded turn** (the choice + why + outcome — turn-validity by construction), which makes routelog the executable form of the SUSTRALL launch checklist's step 2 — **Turn 1 in the native project can be taken WITH routelog** (`routelog start <freshest-map> <route>` → work → `routelog done`), the ~10-turn gate accumulates through it, and the columns are forward-compatible with the future Dispatcher's queue (v1's fields are a subset of the designed entry-triple; run-conditions/invalidate-if join when grooming matures — the full schema stays gated on ≥3 real grooming passes, as committed). One honest line rides along: **a tool lowers the habit's cost; it cannot replace the habit** — if routelog falls out of use the ledger rots like any wall of dead tickets; the sweep and the one-command degraded mode are mitigations, not denials.

### 5. The crowboy migration (small, on your go)

Split the existing hand-annotations into their halves: the **pointer/cross-reference content stays** in the three `_route.md` files (it was within the spec's manifestation fields all along); the **status/progress/outcome lines move** into a new `crowboy/devdocs/selections.md` as its first rows. The index headers become true again, nothing you wrote is lost, and the migration is a natural first exercise of routelog.

## Inherited Commitments Re-test

- **Commitment:** routelister's identity — enumerate-not-select; route-maps as perception snapshots; `_route.md` carries within-concept facts only (depth-pointers/signals allowed; process/control-flow state excluded).
  - **Source:** `cognitive_harness/routelister/references/routelister.md` (NOT-list §1.3; the index boundary §5.3; LAYER 2 §4.3).
  - **Re-test status:** RE-TESTED — confirmed and ENFORCED BETTER. **Evidence:** the design moves ALL status words out of routelister's files (curing crowboy's live violation), mutates no route-map, and uses the index's own depth-pointer field for exactly its specified purpose (a new manifestation of a concept). The optional one-sentence clarification is flagged for the user's go, not slipped.
- **Commitment:** the selections file design — five states, the entry-triple, single-writer, the two writing moments, the field-vs-selections distinction; full schema gated on ≥3 grooming passes.
  - **Source:** the Pipeline Architecture finding (`devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md`).
  - **Re-test status:** RE-TESTED — confirmed by FIELD EVIDENCE and extended. **Evidence:** the crowboy hand-annotations independently reproduce the entry-shape (status+pointer+why+outcome+progress) — the strip-the-corpus test shows any neutral designer converges on the same minimal table; the design's real contribution is the name + forward-compatibility. Extensions absorbed: per-project deployment via routelog; the source-map reference column; the schema gate respected (v1 columns minimal).
- **Commitment:** the launch checklist — Turn 1 = the selections file; the pre-registration window's irreversible ordering (the guard belongs in the artifact); mechanisms-beat-exhortations (zero-for-109).
  - **Source:** `devdocs/inquiries/2026-06-11_16-45__sustrall_next_main_steps_and_alternatives/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed and PROPAGATED. **Evidence:** routelog inherits the window guard (graded: warn-everywhere, stop-where-declared — caught when auto-creation would have silently burned the native window); the two-moment form is the checklist's own admit/close-out; Turn-1-with-routelog makes step 2 executable as commands.
- **Commitment:** the crowboy field record (the empirical layer this design must serve).
  - **Source:** the four crowboy inquiries + their `_route.md` files (read in full).
  - **Re-test status:** RE-TESTED — fully absorbed. **Evidence:** every kind of thing the hand wrote has a home (pointers → the index's manifestation fields; status/progress/outcome → the ledger); the migration loses nothing and cures the header contradiction.

Pattern-note: two confirmed-and-strengthened (the spec enforced better; the guard propagated), one confirmed-by-independent-field-evidence (the strongest kind), one absorbed — and one commitment CUT AGAINST the new tool's convenience (the window guard forced onto routelog's first-use path). No silent inheritance.

## Next Actions

*(Every GO is yours.)*

### COULD

- **What:** Say GO to build routelog v1 (the §3 sketch: `cognitive_harness/routelog/SKILL.md` + installer entry).
  **Who:** assistant, on your go. **Gate:** observable — whenever. **Why:** the verdict's deliverable; small (one spec file + installer line).
- **What:** Run the crowboy migration (split the hand-annotations; seed `crowboy/devdocs/selections.md`).
  **Who:** assistant, on your go (it edits files you hand-wrote — your call). **Gate:** after (or with) routelog v1. **Why:** cures the live spec contradiction; nothing lost.
- **What:** The one-sentence routelister spec clarification (manifestation pointers may reference later-engagement artifacts; status words stay excluded).
  **Who:** assistant, on your go (a canon-spec touch). **Gate:** with routelog v1. **Why:** inoculates future hand-annotators.

### DEFERRED

- **What:** Enhancement 1 — `/aMVLwr` accepts an optional route-ref and appends the completion mark at CONCLUDE (second-writer discipline: append-only completion fields).
  **Gate:** after routelog v1 proves the row mechanics. **Why (if revived):** runner work loses all done-ceremony; the informal case stays routelog's.
- **What:** The two usage tests — does the two-command habit hold (≥5 real uses)? does the work contract sharpen runs?
  **Gate:** usage data. **Why (if revived):** the rot-honesty needs evidence; the contract is asserted, not measured.
- **What:** v1-columns ↔ entry-triple convergence (one schema).
  **Gate:** ≥3 real grooming passes (inherited). **Why (if revived):** two column-sets on one file would drift.

## Reasoning

**Why ADOPT rather than redirect-to-something-else.** The proposal's mechanism is the correct one by the corpus's own strongest precedent (mechanize the habit — the aMVLwr exhaust), and the field evidence shows the need is real and urgent (the hand-practice). The corrections are both *forced by checkable structure*: the archiving + regeneration of route-maps (your own docarchive folders) and the absence of an after-the-run hook in LLM sessions (the zero-for-109 measurement). A verdict that rejected routelog would have discarded a right mechanism over a wrong filename.

**Why the selections file and not a new invention.** The strip-the-corpus test: given the hand-annotations' demands (status + pointer + why + outcome + progress, per route, project-wide, surviving re-enumeration), a designer who had never seen this project's findings would land on the same minimal per-project table. The committed design contributes the name, the states, and the forward-compatibility (the Dispatcher reads this file later; the grooming loop grows from the sweep) — not the necessity. Favoring it is convergence, not self-service.

**Why the guard had to be graded.** Innovation caught that routelog auto-creating the selections file would silently burn the native project's pre-registration window (an irreversible loss); critique then caught the over-correction — a hard STOP in every project would impose a native scientific rule on projects (crowboy) that never intended to pre-register. Warn-everywhere/stop-where-declared keeps the irreversibility protected exactly where it exists.

**Significant kills.** *Marks in routelister.md* — killed by archiving + regeneration (the user's own folders are the evidence). *Status words in `_route.md`* — killed by the spec boundary (and cured in crowboy by the migration). *Single-invocation wrap* — killed by the no-end-hook reality; marking RAN at start would record a fiction. *A launching/choosing routelog* — killed by the Selection-creep guard and the user's own framing ("I am the meta loop still"). *A WIP-limit in routelog* — killed: Selector policy, not the recorder's. *An `routelog adopt` migration command in v1* — killed: manual seeding suffices; sugar later. *Dropping `routelog start`* — killed: loses the write-ahead record, the work contract, and in-flight visibility.

**Self-reference handling.** The verdict routes the user's proposal into the corpus's own three-day-old design — the obvious bias risk. Guards: the strip-the-corpus convergence test (run explicitly); every correction argued from facts the user can verify in their own folders; the user's authorship credited factually (the hand-annotations ARE the entry-shape; the wrapper instinct IS the two-moment lifecycle); and the one place the corpus design constrained the new tool (the window guard) was adopted *against* the tool's convenience.

## Open Questions

### Monitoring

- **Does the two-command habit survive contact with real work?** Observable: ≥5 routelog uses with done-marks actually landing (the sweep's catch-rate tells the rest).
- **Does the ledger stay current or rot?** Observable: the ratio of in-flight rows older than a week to total rows.

### Blocked

- The runner write-back's ergonomics — blocked on routelog v1 existing.
- The schema convergence — blocked on ≥3 real grooming passes (inherited gate).

### Refinement Triggers

- **If the sweep's nagging annoys more than it saves** — soften to `routelog list`-only visibility (the rows remain visible truth either way).
- **If route-refs frequently mis-bind** — strengthen the binding (require ordinals; or map-embedded route IDs as a routelister output tweak, flagged as its own spec change).
- **If crowboy-style hand-annotation reappears AFTER routelog exists** — the tool's ergonomics failed somewhere; read the annotations as the next requirements spec (the same method this inquiry used).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay read all inquiry files in /Users/ns/Desktop/projects/crowboy/devdocs/inquiries together with their docarchive

i was testing routelister with AMVLwr in that project. routelister works well in terms of listing the routes. and i can easily (i am the meta loop still) tell what do run next.  But here is the caveat.  there is no tracking of what is ran and what is not from the routes....

some routes are like develop X and i ran them normally without any homegrown skill inside LLM session. 

lets think of this, what are  our options? because tracking what is already ran in routelister.md file would be really useful. 

i am thinking that we can create a new skill call routelog  (routelist updater) and when i am gonna run a route from routelister.md i can use this skill  

routelog parth_to_routelister.md lets develop X 

and it can kind of wrap that run, so that after the run, folder path and metadata is collected and it will go back to original routelister.md file and mark that route as RAN and add the information there. 

this way routelister.md files will reliable and up to date. 

what do you think?
```

</details>
