# Structural Innovation — route_run_tracking_rlu_design

## User Input

devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/_branch.md

---

## Phase 1 — Seed (+ Methodology-Mode Consideration)

**Seed:** the five-piece deliverable (the credited verdict + refinements / the rlu v1 sketch / the option-map / the view+migration / the gated extras) needing final, buildable texts. Seed type: **Signal** (a refined design wanting its sharpest, most usable form).

**Methodology-Mode Consideration:** (a) inherited: **Production-task, Standard default**. (b) Alternative: Framer-weighted (the answer is to a "what do you think?" — tone and concreteness matter). (c) Under it: the worked example + the command ergonomics. (d) **Decision: Standard with Framer emphasis**, Inversion at the meta-decisions (the retarget; the two-moment form; the v1 scope), one adversary pass on whether the design over-serves the corpus's own architecture.

**Meta-decision classification:** the retarget (selections + pointer) — meta. The two-moment wrap — meta. The v1 scope (rlu alone) — meta. The command surfaces / worked example / tables — content-production.

---

## Phase 2 — Generate (7 mechanisms × 3, compact)

### 1. Lens Shifting (Framer)

- **1G — the lab-notebook lens.** rlu start = opening a notebook entry before the experiment (hypothesis + intent recorded ahead); rlu done = recording the result. Science doesn't write conclusions before experiments — and doesn't trust unrecorded ones. One framing line for WHY two moments beat one.
- **1F — the checkout/checkin lens (adopted for the docs).** `rlu start` ≈ checking a route out of the field ("I'm working this"); `rlu done` ≈ checking it back in with the deliverable attached. Familiar from version control; makes in-flight rows instantly intuitive (a checkout that's never checked in is VISIBLE, not lost). Adopted as rlu's one teaching metaphor.
- **1C — the "you're over-building a todo app" deflater (contrarian).** "This is a TODO list with extra steps." Answer: a todo app tracks intentions; this tracks *decisions with provenance* — each row binds a typed route (from an enumerated field) to its rationale, its artifacts, and its outcome, which is what makes the records gate-fuel for the autonomy climb (todo apps train nothing). The difference is the WHY+outcome columns, not the checkboxes. Adopted as a one-line aside.

### 2. Combination (Generator)

- **2G — rlu × the SUSTRALL launch checklist = Turn-recording made executable (adopted).** The checklist's step 2 (Turn 1 = the selections file + one admitted row) and the Turn-N recurring shape are exactly `rlu start`+`rlu done`. So rlu isn't only crowboy's fix — it is the native climb's missing tool: **Turn 1 can be taken WITH rlu** (`rlu start <freshest-map> <route>`), and the ~10-turn gate accumulates through it. One section in the finding connecting them.
- **2F — the work contract × the runner invocation.** When the route will be run by a runner, rlu start's printed contract can BE the runner command (`/aMVLwr "<route's direction + guidance>"`) — text the user pastes, not execution (the NOT-list holds). The wrapper composes with runners without integrating them. Adopted into the sketch.
- **2C — the sweep × grooming = the same moment.** The stale-row sweep is a micro-grooming pass; when the selections file later gains full grooming (invalidate-ifs etc.), the sweep is its seed — rlu's nag grows into the Selector's grooming loop. One forward-pointer line.

### 3. Inversion (Framer; at the meta-decisions)

- **3G — invert the retarget: when would marks-in-the-map be right?** Only if maps were living documents — never archived, never regenerated. That would require REMOVING the exhaust step's archive behavior and routelister's idempotency — i.e., redesigning two committed mechanisms to avoid creating one small file. The inversion collapses; the retarget is over-determined. Adopted as stated.
- **3F — invert the two-moment form: when is single-invocation right?** Only when the work happens INSIDE the invocation itself (the skill performs the run) — which is the launching rlu the NOT-list forbids (and nobody asked for). For human-paced work spanning sessions, the write-ahead admission is forced. Adopted.
- **3C — invert the v1 scope: should the selections file's CREATION be a separate step (the checklist's D4) rather than rlu's side-effect?** Honest tension: the launch checklist made creating the file Turn 1's act, with the pre-registration window guard (step 0: confirm the pre-registration file exists, else STOP). If rlu auto-creates the file in the NATIVE project before pre-registration exists, it burns the window! Resolution: **rlu inherits the window guard** — on first use in a project, if no selections file exists AND a `devdocs/indicator_preregistration.md` is absent, rlu warns: "this creates the project's first traversal record — the native-project checklist requires the pre-registration file first; proceed only if this project doesn't pre-register" (crowboy: proceed; native: STOP until step 1 done). The guard travels INTO the tool — exactly where the checklist finding said guards belong. ADOPTED — the round's most important catch.

### 4. Constraint Manipulation (Framer; both directions)

- **4-ADD (generic, adopted).** The selections row gets a `source:` column (map path + route ordinal) — every mark traceable to the enumeration it came from (provenance for the provenance-tool).
- **4-ADD (focused, adopted).** `rlu list` — a third tiny command: print the current selections table (filtered: open / done / all). The "one reliable view" gets a one-command viewer; the habit ("where do I look?") gets an answer that types in four letters.
- **4-REMOVE (generic).** Drop the `_route.md` ↗ stamp (selections-only)? → loses the glance-at-the-index affordance and the manifestation record routelister's own cumulativeness wants; the stamp is cheap and legal. Keep.
- **4-REMOVE (contrarian).** Drop `rlu start` (done-only tool)? → loses the work contract, the in-flight visibility, and the write-ahead record (back to remember-to-mark). Keep start; done-without-start remains the degraded mode.

### 5. Absence Recognition (Generator; both levels, bidirectional)

- **Patch-level:** (i) **route disambiguation** — `rlu start <map> 7` (ordinal) or a quoted direction-fragment; on ambiguity, rlu lists candidates and asks (never guesses — a mis-bound mark corrupts the ledger). (ii) **the PARKED verb** — the user will sometimes look at a route and decide NOT now: `rlu park <map> <route> "<why>"` writes the parked row (the ledger's parked state existed in the design; the tool should expose it — deciding-against is also a decision worth recording). (iii) **multi-route runs** — one session sometimes serves two routes; rlu done accepts multiple route-refs (rows close together, same pointers). (iv) **the migration command** — `rlu adopt <_route.md>` (or just documented manual seeding) for crowboy's existing hand-annotations; v1 can do this manually, the command is sugar.
- **Redesign-level:** none — the two-command core holds.
- **Bidirectional (already-present):** the crowboy hand-annotations already demonstrate every payload rlu will write (status, pointer, summary, progress) — v1's columns are READ OFF the field evidence, not invented.
- **(Adopted: i, ii; iii as a v1 nicety; iv as documentation-first.)**

### 6. Domain Transfer (Generator; native source included)

- **6-native (adopted).** The Dispatcher's **marked-fields discipline** (from the Pipeline finding: the code Dispatcher only flips statuses/appends pointers in designated fields) transfers to rlu and the future runner-integration: rlu owns the row lifecycle; any second writer (aMVLwr's write-back) appends only completion fields. One consistency rule, stated once.
- **6-different (issue trackers).** "Linked commits close issues" (GitHub's `fixes #7`) — the runner-enhancement's shape: a run that knows its route-ref closes it on completion. Familiar pattern; one line when the enhancement is described.
- **6-different (kanban WIP limits).** REJECTED for v1 — an in-flight cap is Selector policy, not the recorder's job (Selection-creep adjacent); noted as a future grooming knob only.

### 7. Extrapolation (Generator)

- **7G — rlu rows as the L2 gate fuel (adopted).** Extrapolate ~10 recorded rows: choices + rationales + outcomes per route = exactly what the Selector-graduation gate compares proposals against. rlu is the instrument that makes the gate's data exist. One line tying to the ladder.
- **7F — the Dispatcher reads what rlu writes.** At the parallel stage, the code Dispatcher fires ADMITTED rows from this same file — rlu v1's columns should not contradict the Pipeline finding's entry-triple (they don't: why/status/pointers are a subset; run-conditions/invalidate-if join when grooming matures). Compatibility stated, schema still gated.
- **7C — the failure pole: a stale ledger.** If rlu falls out of use, selections rots into the same wall-of-dead-tickets the Pipeline finding named (rot). Mitigations exist (sweep; the degraded one-command mode; the runner enhancement); the honest line: a tool can lower the cost of the habit, not replace the habit — the closing-line lesson stands. Adopted into the honesty notes.

---

## Piece-Level Inversions (meta-decision pieces; content-axis)

- **The retarget.** 3G adopted: over-determined (marks-in-the-map would require redesigning two committed mechanisms).
- **The two-moment form.** 3F adopted: single-invocation is right only for a launching tool nobody asked for.
- **The v1 scope.** 3C adopted WITH THE CATCH: rlu inherits the pre-registration **window guard** on first-use-in-a-project (native: STOP until step 1; crowboy: proceed) — the guard travels into the tool.

## Inherited Frame Audit

The design was attacked by the todo-app deflater (1C — answered: decisions-with-provenance, the WHY+outcome columns are the gate fuel), the marks-in-the-map inversion (3G — collapses), the single-invocation inversion (3F — collapses), and the corpus-self-service worry (routed to critique as special attention). The window-guard catch (3C) CUT AGAINST the design's own convenience (auto-create) and was adopted. Sensemaking's six collapses held. **Audit does not fire.**

---

## Phase 3 — Test (5-test cycle) + dispositions

| K | Candidate (piece) | Novelty | Scrutiny | Fertility | Actionability | Mech-independence | Disposition |
|---|---|---|---|---|---|---|---|
| K1 | **The verdict + refinements** (P1) — what's-right credited (the turn-recorder re-invented; crowboy as proof); the retarget over-determined (3G); the two-moment form forced (3F; the lab-notebook line); the checkout/checkin teaching metaphor; the todo-app aside | High | Survives (every correction argued from checkable structure; the credit is factual, not flattery) | High | High | YES (3G+3F+field evidence) | **ACTIONABLE** |
| K2 | **The rlu v1 sketch** (P2) — `rlu start <map> <route-ref>` (admission row; work contract — incl. the paste-able runner command when applicable; prints the close-out) · `rlu done [refs] [pointers] [outcome]` (completes; stamps ↗; retroactive OK; multi-ref OK) · **`rlu park <map> <route> "<why>"`** (deciding-against recorded) · **`rlu list [open|done|all]`** (the one-command view) · the sweep on every invocation · route disambiguation (ordinal/fragment; ask-never-guess) · the `source:` column · **the inherited WINDOW GUARD on first-use-per-project** (3C) · the NOT-list (never choose/launch/edit-maps/status-into-`_route.md`) · ships via installer | High | Survives (each command earns its place: park = the parked state exposed; list = the one-view habit answered; the guard = the checklist's own rule traveling into the tool; ask-never-guess protects ledger integrity) | High | High | YES (5-patches + 3C + 4-ADDs) | **ACTIONABLE** |
| K3 | **The option-map** (P3) — P×M×T with structural verdicts; the user's literal cell located respectfully (its three failing axes each named with the checkable reason) | Med-High | Survives (the map is honest enumeration, not strawmen — each option's best case stated) | Med | High | YES (the axes + verdicts) | **ACTIONABLE** |
| K4 | **The one-view mapping + migration** (P4) — the three-questions/three-files table; crowboy's marks split (pointers stay; status/outcome seed the new selections file — optionally via `rlu adopt`, manual-first); the headers become TRUE again | Med-High | Survives (the migration is small, concrete, and cures the live contradiction) | Med-High | High | YES (the split + the field files) | **ACTIONABLE** |
| K5 | **The gated extras + ties** (P5) — enhancement 1: aMVLwr optional route-ref write-back (issue-tracker pattern; marked-fields discipline); the one-sentence spec clarification (flagged, user's go); the climb ties (Turn 1 WITH rlu; rows = L2 gate fuel; Dispatcher-compatibility; sweep→grooming seed); the rot honesty (7C) | High | Survives (each extra gated; the climb ties are checkable against the checklist/Pipeline findings; the honesty line keeps the tool from over-promising) | High | High | YES (2G+7G+7F+6-native) | **ACTIONABLE** |
| — | A WIP-limit in rlu | — | Selector policy, not the recorder's (Selection-creep adjacent) | — | — | — | **KILL** (noted as future grooming knob) |
| — | `rlu adopt` as a v1 command | — | manual seeding suffices; sugar later | — | — | — | **KILL** (documentation-first) |
| — | Dropping the start command | — | loses write-ahead + contract + visibility | — | — | — | **KILL** |

**Artifact-grounding (fired):** the crowboy maps verified archived (docarchive/ paths); the hand-annotation payloads verified as the column source; the checklist's window guard verified (step 0 of the Turn-1 script — the same guard now inherited by rlu); the Pipeline finding's entry-triple verified compatible with v1 columns; the marked-fields discipline verified as the committed second-writer rule.

**Axis coverage check:** verdict-axis (K1), tool-axis (K2), map-axis (K3), UX/migration-axis (K4), extras/ties-axis (K5), plus the todo-deflater (1C), the window-guard (3C), the park-verb (5-ii), the disambiguation (5-i). No piece single-variant where a second was plausible.

**Mechanism-independence shared-input check:** the verdict rests on archiving/regeneration facts + the no-end-hook reality; the sketch on the field-evidence columns + the committed guards; the ties on three separate findings; two adversaries cut against (todo-app; auto-create-burns-the-window). INDEPENDENT.

---

## Assembly Check

The candidates assemble into **rlu — the route-engagement recorder (the selections file's write-tool)**:

```
K1 the verdict (right mechanism, retargeted + two-momented — credited as the re-invented turn-recorder)
 └─ K2 the tool (start / done / park / list + sweep + guard + NOT-list; the row + the ↗ stamp)
     ├─ K3 the option-map (the verdict located among the real alternatives)
     ├─ K4 the view + migration (three-questions table; crowboy cured)
     └─ K5 the extras + climb ties (runner write-back; the spec sentence; Turn-1-with-rlu; gate fuel; Dispatcher-ready)
```

**Emergent value:** (1) **the window guard travels into the tool** (3C) — rlu's first-use check makes the launch checklist's irreversible ordering self-enforcing in every project, not just in prose; (2) **`rlu park`** — deciding-AGAINST a route becomes as recordable as deciding-for (the parked state finally has a pen); (3) **Turn 1 with rlu** — the native climb's first recorded turn can be taken with the very tool this inquiry designs (the checklist's 10-minute script becomes `rlu start` + work + `rlu done`); (4) **the checkout/checkin metaphor** gives the tool a one-line mental model; (5) the **rot honesty** — the tool lowers the habit's cost; it cannot replace the habit.

---

## Mechanism Coverage (Telemetry)

- Generators applied: **4 / 4** · Framers applied: **3 / 3** (Constraint Manipulation both directions; Inversion ×3 at the meta-decisions — all adopted, one against-own-convenience)
- Variations: 21 mechanism-variations + 3 piece-level inversions (all adopted)
- Convergence: **YES — 5 independent grounds**, two adversarial (shared-input check passed)
- Survivors: 5/5 ACTIONABLE; 3 KILLs with reasons kept
- Failure modes observed: none (the window-guard catch cut against the design's own convenience and was adopted — the audit's job done)
- **Production-task telemetry:** per-piece log — K1 `[3G, 3F, 1F(checkout), 1C(todo aside), 1G(lab-notebook line)]` · K2 `[5-i(disambiguation), 5-ii(park), 5-iii(multi-ref), 4-ADD(list, source), 3C(WINDOW GUARD), 2F(paste-able contract)]` · K3 `[the axes]` · K4 `[the split + adopt-as-docs]` · K5 `[2G(Turn-1-with-rlu), 7G(gate fuel), 7F(Dispatcher-compat), 6-native(marked-fields), 6-tracker(closes-#7), 7C(rot honesty), 2C(sweep→grooming)]`. Meta-decisions: **Inversion compliance satisfied ×3, violated ×0, overridden ×0**.
- **Overall: PROCEED**

**Next discipline input:** Critique receives five ACTIONABLE candidates + the assembly, three kills — with special attention invited to: (a) **the window guard's reach** (is rlu the right place to enforce a native-project checklist rule in OTHER projects — or does the warn-and-proceed form over/under-shoot?); (b) **command-surface creep** (start/done/park/list + sweep — is v1 still the small tool the user sketched, or has it grown past "lightweight"?); (c) **the corpus-self-service worry** (the verdict routes everything into the corpus's own selections design — is the field evidence genuinely sufficient, or is the design being favored because it's ours?).
