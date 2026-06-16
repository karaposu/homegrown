# Structural Sensemaking — navigational_session_queue_dispatcher_possibilities

## User Input

devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/_branch.md

---

## SV1 — Baseline Understanding

The user rejects the single-Selector story: they want a navigational isolated session (≠ Selector), a persistent waiting-queue of *selected* paths (not priority-ordered) consumed by a dispatching "meta-loop" (sometimes parallel), and a Selector that admits routes and is *forced* to re-groom the queue as findings land. Surfacing named the pattern (two-level scheduling), generated the space (6 axes → designs D1–D5), pinned the queue (field vs queue; admission-rationale; invalidate-if), adjudicated the Navigator (root-mode ≠ loop-tail → a recurring isolated run), and made the cadence-decoupling argument. The likely shape: an enumerated map converging on the split design with a code dispatcher, the queue as one selections-artifact-with-states, and a growth path from today's manual mode.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- C1 — The navigational session must NOT be re-collapsed into the Selector (the user's explicit disagreement).
- C2 — The queue is NOT priority-ordered (an admitted set, not a ranking).
- C3 — The deliverable is an ENUMERATION with an argued recommendation (not one asserted answer; not an assessment-free list).
- C4 — Re-test the three priors; revise openly where the new design supersedes.
- C5 — Honor the confusion: open parts (grooming values, annotation sufficiency) stay flagged.

**Key Insights**
- KI1 — **The sketch separates three judgments the prior design fused, and the separation tracks CADENCE.** Navigation (enumerate the field: slow, global, map-heavy) · admission+grooming (what *deserves* to run: medium, semantic, reads findings) · dispatch (what runs *now*: fast, frequent, mechanical-given-constraints). The single-Selector design woke one heavy session for all three. The felt "something vital is missing" is cadence-mixing — the better design is the one where each judgment runs at its own tempo, meeting only through artifacts.
- KI2 — **The pattern is two-level scheduling, and naming it settles "not ordered by priority."** Long-term/admission scheduler (the Selector: which routes are admitted to the committed set) vs short-term dispatcher (which admitted entry runs now), over a ready-SET — exactly kanban's backlog → ready column → in-progress. In such systems the ready set is *deliberately not a global ranking*: dispatch picks by *readiness* (run-conditions met, no conflict with in-flight work, a free slot), with FIFO-ish fairness among equals. The user's "selections are not necessarily ordered by priority" is not a quirk — it is how mature scheduling systems actually work; ordering judgment, where needed, is expressed by the Selector as *constraints on entries* (run-after-X, exclusive-with-Y), not as a queue-wide rank.
- KI3 — **The waiting queue is the genuinely new piece, and it is the Expedition's ledger grown up — ONE selections artifact with states.** The field (`_route.md`, routelister-owned, descriptive, ever-growing) answers "what COULD be done." The selections file (Selector-owned, curated) answers "what we have DECIDED about what could be done" — each entry a route-ref with status ∈ {parked, admitted, in-flight, done, removed} plus the **admission rationale** (why selected), **run-conditions** (GATED-on tests), parallel/exclusivity hints, and an **invalidate-if** (what discovery would void this selection). This unifies the Expedition's "PARKED ≠ LOST" ledger with the user's waiting queue (parked = the deferral side; admitted = the commitment side of the SAME file), keeps single-ownership clean, and makes the audit trail one place.
- KI4 — **The invalidate-if field is what makes "forced re-evaluation" cheap and real.** The user's requirement — the Selector must re-groom when meta-loop runs discover something — needs a mechanism, not diligence. If each admitted entry records *what it rested on* (the evidence-state / the assumption that justified admission), then grooming = on each landing, check whether the new finding touches any entry's invalidate-if; periodically, sweep all of them. "Forced" becomes structural: the grooming loop is part of the design (triggers: every landing for the touched concepts; every K landings for a full sweep; on gate-releases), not an optional virtue.
- KI5 — **Dispatch becomes CODE the moment the Selector pre-pays the judgment as annotations — with one honest valve.** The judgment-gates-a-session rule (inherited, re-applied finer): if admitted entries carry run-conditions + conflict hints, then "what runs now" = *fire any runnable entry while slots are free* — no judgment left, so the dispatcher is code (cheap, parallel-safe, always-on), absorbing the old Runner (firing + completion-pointers were already code's job). The honest valve: entries the Selector *cannot* fully annotate get marked `needs-judgment`, and the dispatcher never fires them — it surfaces them back to the Selector. Dispatch stays code; judgment stays the Selector's. (This vindicates the user's ORIGINAL instinct — "meta-loop is operational, maybe just code" — which the single-Selector design had absorbed into a session.)
- KI6 — **The Navigator earns its isolated session on OPERATION-DIFFERENCE grounds, not objectivity grounds — so it doesn't reverse the prior dial-demotion.** Routelister has two run modes: loop-tail/concept-target exhaust (cheap, local, already rides each CONCLUDE) and ROOT-mode breadth (project-space sweep + index maintenance: re-confirm, stale-flag, merge). The user's "generic routelister runs" = root-mode — a *different operation at a different cadence*, which loop-tails cannot replace (they only see their own inquiry's neighborhood; the 16-09 routelister-gap finding's point). That earns a **recurring isolated session-kind — the Navigator** — triggered by staleness (every K landings / index-smell), not a standing seat. The prior findings' fresh-seat *dial* (objectivity for choice-protection) survives as a separate, compatible knob.
- KI7 — **The prior WAKE-scheduler doesn't die — it splits into TWO loops at two cadences, and RANK dissolves.** The Selector's **grooming loop** (slow; on landings + periodic): read the new finding → admit new routes from the field (with rationale + conditions) → re-check invalidate-ifs → park/remove/annotate. The Dispatcher's **dispatch loop** (fast; on slot-free/queue-change): fire runnable admitted entries ≤ N, dedup against in-flight, write completion pointers. RANK as a global ordering dissolves into *readiness + constraints + FIFO-fairness* (and with it, the starvation-guard problem mostly evaporates — aging is only needed if admission outpaces dispatch chronically, which is the Selector's own admission-discipline problem).
- KI8 — **The user's design makes the field-before-choice rule ARCHITECTURAL.** The Turn Architecture finding's validity condition (the field written before the pick; the choice recorded with rationale; an outcome slot; the goal carried) was a discipline within one session. In the split design it becomes physical: the field is written by *other stations* (loop-tails + the Navigator) before the Selector ever chooses; the admission rationale IS the turn-record's choice-entry; the dispatcher's completion pointer fills the outcome slot. The architecture now *enforces* what the prior finding could only require.
- KI9 — **The designs are not rivals — they are a GROWTH PATH.** D1/D4 (one session, optionally with the queue artifact) is today's N=1 manual reality, and it's the right *starting* mode (lowest overhead). D3 (Navigator-recurring + Selector-grooming + code-Dispatcher) is the *end-state* the user's instinct points at, paying off as N and run-length grow. The adoption path: **D4 first** (introduce the selections file — pure artifact change, no new sessions) → **D3** (split dispatch out as code when parallel runs begin; schedule the Navigator when the index starts smelling stale). D2 (dispatcher-as-light-session) is D3's fallback if annotation proves insufficient in practice; D5 (every function a seat) stays rejected (seat-proliferation).

**Structural Points:** SP1 three judgments, split by cadence · SP2 two-level scheduling; the admitted SET (constraints, not rank) · SP3 ONE selections artifact with states (queue = ledger grown up; field stays separate) · SP4 invalidate-if → grooming structural · SP5 dispatch = code + needs-judgment valve · SP6 the Navigator = recurring isolated root-mode run (operation-difference) · SP7 two loops replace one scheduler; RANK dissolves · SP8 field-before-choice made architectural · SP9 the growth path D4→D3 (D2 fallback; D5 rejected).

**Foundational Principles:** FP1 judgment-gates-a-session, applied per-judgment (C1/C5) · FP2 each judgment at its own cadence, meeting through artifacts · FP3 single-writer per artifact (routelister→field; Selector→selections; dispatcher→status/pointers only) · FP4 commitments must carry their own revision triggers (invalidate-if; C4's spirit) · FP5 enumerate-then-recommend (C3).

**Meaning-Nodes:** the three-judgment split · two-level scheduling · the selections file (parked/admitted/in-flight/done) · admission-rationale / run-conditions / invalidate-if · the needs-judgment valve · the Navigator (root-mode, recurring, isolated) · the grooming loop + the dispatch loop · the growth path D4→D3.

---

## SV2 — Anchor-Informed Understanding

The map is forming: six axes generate five designs; the recommendation converges on the **Pipeline design (D3)** — Navigator (recurring isolated root-mode enumeration) → Selector (admission + structural grooming of ONE selections file) → Dispatcher (code; fires runnable entries ≤N; needs-judgment valve) → Loops — reached via a **growth path** starting from D4 (add the selections file to today's single session). All three user corrections come true: the navigational session is real (operation-difference grounds), the meta-loop lands as the dispatcher's operational loop (code — their first instinct), and the Selector is the grooming admission-officer. Open for later phases: grooming v1 values, the annotation/valve mechanics, the naming presentation.

---

## Phase 2 — Perspective Checking

**Technical / Logical.** Two-level scheduling is the canonical solution to exactly this tension (semantic admission vs fast dispatch); kanban's ready-column is its human-workflow twin. Single-writer-per-artifact keeps the file story auditable (routelister writes the field; the Selector writes selections; the dispatcher only flips status/appends pointers). The dissolve-RANK move is sound: readiness + constraints + FIFO is how real dispatchers avoid both global-ranking brittleness and starvation.

**Human / User.** All three corrections are honored *and shown to cohere*: the user was right three times — the navigational session (operation-difference), the queue (the commitment layer), and meta-loop-as-operational-code (their 04-00 opening instinct, which the prior finding had argued past). The answer should SAY this plainly — the design that "makes a lot more sense" is the one their instincts were assembling.

**Strategic / Long-term.** The split maps cleanly onto the autonomy ladder: the **Dispatcher** is fixed code at every level; the **Navigator** is schedulable (its isolation never changes); only the **Selector** graduates (human admits → proposes-then-approves → admits-within-scope). The selections file's admission-rationales are exactly the agreement-data the Selector's graduation gates need. The architecture is the climb's substrate, not just today's convenience.

**Risk / Failure.** (a) Overhead at N=1: two new session-kinds + an artifact for a workflow currently done by hand — mitigated by the growth path (D4 first; D3 when parallelism arrives). (b) Annotation insufficiency: if run-conditions can't be written for most entries, the code-dispatcher starves and everything escalates — mitigated by the needs-judgment valve + honest fallback to D2 (light-session dispatcher); this is measurable (valve-rate). (c) Stale queue: grooming must be structural (triggers, invalidate-ifs) or the queue rots into a to-do graveyard. (d) Split-brain: the Selector and Navigator both touch route-space — kept distinct by artifact ownership (Navigator/routelister own the FIELD; the Selector owns SELECTIONS; neither writes the other's file).

**Resource / Feasibility.** `_route.md` exists (routelister writes it); the loop-tail exhaust step exists; the ledger concept exists (Expedition) — the selections file *formalizes* it; the dispatcher is a small program (spawn + detect + pointer + status-flip); the Navigator is a scheduled routelister root-run. Nothing here is a big build; the new artifact + a small dispatcher are the only concrete items.

**Definitional / Internal Consistency (the Synthesis re-tests).** (i) *04-00: "the Selector is the ONLY thing that decides"* — REVISED, openly: semantic judgment stays in sessions, but it now lives in TWO session-kinds (the Selector's admission/grooming; the Navigator's enumeration runs), and *dispatch* is demoted from judgment to mechanism (annotated-queue + valve). The deeper rule beneath it — judgment-gates-a-session — is CONFIRMED and applied finer. (ii) *04-00: the WAKE-scheduler* — REVISED: splits into the grooming loop + the dispatch loop; RANK dissolves; the starvation guard mostly evaporates with it. (iii) *04-00: the Runner's no-read bright line + completion-record* — CONFIRMED: absorbed intact into the Dispatcher (code reads nothing semantic; pointers only). (iv) *Turn Architecture: the fresh-seat DIAL* — CONFIRMED as what it was (objectivity knob) AND the Navigator added on different grounds (operation-difference); no reversal. (v) *Turn Architecture: field-before-choice + the turn-record* — CONFIRMED and STRENGTHENED: the split makes the rule architectural; the admission rationale is the turn-record's choice; the completion pointer fills the outcome slot. (vi) *Expedition: the ledger ("PARKED ≠ LOST")* — CONFIRMED and ABSORBED: the selections file is the ledger grown up (parked is one of its states).

**Definitional / Frame-exit Completeness.** Gating fires on "queue," "navigational session," "meta-loop." **"Queue":** (a) a priority queue — REJECTED (the user's own bound; mature dispatch uses ready-sets); (b) **a curated admitted-SET with states and constraints (one selections file)** — COMMITTED; (c) a separate file from the ledger — REJECTED (one artifact, states). **"Navigational session":** (a) the Selector wearing a different hat — REJECTED (the user's disagreement + operation-difference); (b) **a recurring isolated root-mode routelister run (the Navigator)** — COMMITTED; (c) a standing always-on seat — REJECTED (no continuous job exists for it; recurrence suffices). **"Meta-loop":** (a) the turn-cycle (the old referent) — dissolved (there are now visibly two loops); (b) **the dispatcher's operational loop (code)** — COMMITTED as the recommendation (the user's original instinct), final say theirs; (c) the whole architecture — REJECTED (too vague to name anything).

**Phase / Calibration-State.** This is a design proposal; the pattern-level claims (two-level scheduling; single-writer) are high-confidence; the v1 values (grooming every-K, valve-rate threshold, N) are explicitly placeholders to be set by practice.

---

## SV3 — Multi-Perspective Understanding

Two reframes stabilize. First: **the user's three corrections are one design seen from three sides** — split the judgments by cadence (navigation / admission / dispatch), give the middle one a durable artifact (the selections file), and the rest follows: the dispatcher mechanizes (code — their original meta-loop instinct), the Navigator earns its isolation (root-mode is a different operation), and grooming becomes structural (invalidate-ifs + triggers). Second: **nothing from the priors is wasted** — the no-read Runner lives inside the Dispatcher, the WAKE-scheduler becomes two loops, the ledger becomes the selections file's parked state, the field-before-choice rule becomes architecture, and judgment-gates-a-session — the rule that built the prior design — is precisely what, applied finer, builds this one. The enumeration's job is to show D1–D5 honestly and the growth path D4→D3.

---

## Phase 3 — Ambiguity Collapse

#### Ambiguity A1: Is the split actually better than the single-Selector — and if so, when?

**Strongest counter-interpretation:** the 04-00 design already works; three stations + an artifact is over-engineering for a system that today runs N=1 by hand.

**Why the counter fails (structural grounds):** at N=1 it doesn't fail — and the resolution must say so. The single session mixes three cadences (global map-work, semantic curation, fast firing); the cost is invisible at N=1 and compounds with parallelism (every trivial dispatch wakes the heavy seat; selections live only in one session's moment; enumeration never gets its global pass). The split's benefits (cadence-decoupling, durable revisable commitments, mechanized dispatch) are exactly the properties parallel sustained operation needs. So: not "better always" — better as the END-STATE, with a staged adoption.

**Confidence:** HIGH. **Resolution:** the split (D3) is the **end-state recommendation**; **D4 → D3 is the growth path** (add the selections file inside today's single session first; split out the code Dispatcher when parallel runs begin; schedule the Navigator when the index needs its first global pass). D1 remains an honest description of today. **No longer allowed:** presenting D3 as urgent for N=1; presenting D1 as sufficient for the end-state.

#### Ambiguity A2: Is the waiting queue the Expedition's ledger, or a new artifact?

**Strongest counter-interpretation:** keep them separate — the ledger is for parked/deferred things, the queue for admitted ones; merging muddles two meanings.

**Why the counter fails (structural grounds):** parked and admitted are *states of the same decision* ("what have we decided about this route?"), made by the same role (the Selector), revised by the same grooming, and audited in the same trail. Two files = two places for one decision-history, with moves between them losing their record. One file with `status ∈ {parked, admitted, in-flight, done, removed}` keeps the Selector single-writer, the audit whole, and the Expedition's "PARKED ≠ LOST" guarantee intact (parked entries sit in the same file the dispatcher reads past).

**Confidence:** HIGH. **Resolution:** **ONE selections file** (the ledger grown up): every route the Selector has *decided something about*, each entry carrying status + admission-rationale + run-conditions + invalidate-if. The FIELD (`_route.md`) stays separate (different owner, different meaning: could-do vs decided-about). **No longer allowed:** a second parallel queue-file; treating the ledger and the queue as unrelated.

#### Ambiguity A3: Dispatcher — code (D3) or light session (D2)?

**Strongest counter-interpretation:** "picks what to run next, sometimes in parallel" is judgment — a session.

**Why the counter fails (structural grounds):** the judgment in "what runs now" exists only where information is missing. If admitted entries carry run-conditions + conflict-hints (the Selector pre-paying the judgment at admission, when it's reading findings anyway), then dispatch = "fire any runnable entry while a slot is free" — mechanical. The honest residue: entries the Selector couldn't fully annotate. The **needs-judgment valve** handles exactly those (the dispatcher never fires them; they surface back to the Selector). If practice shows the valve-rate is high (most entries un-annotatable), THAT is the evidence D2's light-session dispatcher is needed — a measurable, revisable hinge, not a guess.

**Confidence:** HIGH on the mechanism; MED on which side practice lands. **Resolution:** **Dispatcher = code with the needs-judgment valve (D3)**; D2 is the *named fallback*, triggered by an observable (a chronically high valve-rate). The user's original "meta-loop maybe just code" is thereby vindicated as the design's default. **No longer allowed:** an unconditional session-dispatcher; a code-dispatcher with no valve (silent starvation of un-annotatable work).

#### Ambiguity A4: The Navigator — standing seat, recurring run, or still just a dial?

**Strongest counter-interpretation (two-sided):** (i) the prior findings demoted the separate enumeration session to a dial — honor that; (ii) or, the user wants it, so make it a standing always-on seat.

**Why both fail (structural grounds):** (i) the dial answered a different question — WHERE to run enumeration for *objectivity*; the user's claim is about WHAT runs: root-mode breadth + index maintenance (re-confirm, stale-flag, merge) is a *different operation* from loop-tail exhaust, with a global scope and slow cadence loop-tails can't supply (the routelister-gap finding's "alone, not weak" cuts the same way). So the dial-demotion doesn't cover it. (ii) But no *continuous* job exists for a standing seat — the global pass is needed periodically/on-staleness, not always-on.

**Confidence:** HIGH. **Resolution:** **the Navigator = a recurring isolated session-kind** — a scheduled/triggered routelister ROOT-mode run (+ index maintenance), e.g. every K landings or on staleness signals; isolated by construction (it enumerates; it never chooses). The fresh-seat dial survives separately as the objectivity knob it always was. **No longer allowed:** re-collapsing the Navigator into the Selector; a standing always-on Navigator seat; conflating the Navigator with the dial.

#### Ambiguity A5: What survives of "the Selector is the ONLY decision session" and the WAKE-scheduler?

**Strongest counter-interpretation:** the new design contradicts the just-concluded finding — yesterday's architecture was wrong.

**Why the counter fails (structural grounds):** the deeper commitment was never "one session" — it was **judgment-gates-a-session** (the rule both findings share). The 04-00 design applied it at coarse grain (all judgment → one session); the user's corrections apply it at fine grain (each judgment → its own home; non-judgment → code). The WAKE-scheduler's steps all survive, redistributed: REFRESH+FILTER's semantic parts + admission → the grooming loop; DISPATCH+dedup+N-cap → the dispatch loop; RANK dissolves into readiness+constraints (and the starvation-guard problem largely dissolves with it); STOP splits (dispatcher idles on empty; the Selector owns goal-done). The no-read Runner is absorbed intact into the Dispatcher.

**Confidence:** HIGH. **Resolution:** **revision, not contradiction** — the single-decision-session commitment revises to "semantic judgment lives in sessions (two kinds: the Selector's grooming; the Navigator's enumeration); dispatch demotes to code"; the scheduler splits into two loops at two cadences. The re-test will record this as confirmed-but-frame-revised, with the shared rule (judgment-gates-a-session) as the continuity. **No longer allowed:** framing this as the prior finding being "wrong" (it was the coarse-grain application of the same rule); silently keeping the single-session claim.

#### Ambiguity A6: What makes the re-evaluation "forced"?

**Strongest counter-interpretation:** grooming is a virtue the operator should practice — leave it to diligence.

**Why the counter fails (structural grounds):** the user said *forced*, and diligence doesn't survive autonomy (or fatigue). The force must be structural: (a) **event triggers** — every landing, the Selector (already reading the new finding to admit its routes) re-checks the invalidate-ifs of queued entries touching the landed concepts; (b) **periodic sweep** — every K landings, a full grooming pass over all admitted+parked entries; (c) **gate-releases** — GATED run-conditions are re-tested by the dispatcher cheaply (it just doesn't fire un-met ones), and released entries surface. The *invalidate-if field is what makes (a) cheap* — grooming is a lookup, not a re-derivation.

**Confidence:** HIGH (mechanism); v1 values (K) flagged. **Resolution:** grooming is **structural** — invalidate-if on every entry + the three triggers (per-landing touched-concept check; every-K full sweep; gate-release surfacing). **No longer allowed:** grooming as optional diligence; admitted entries without an invalidate-if.

---

*Load-bearing concept test:* **"two-level scheduling / admission-vs-dispatch"** — the pattern; flag. **"the selections file (one artifact, states)"** — flag. **"admission-rationale / run-conditions / invalidate-if"** — the entry triple; flag. **"the needs-judgment valve"** — flag. **"the Navigator (recurring isolated root-mode run)"** — flag. **"the grooming loop + the dispatch loop"** — flag. **"the growth path D4→D3"** — flag. All defined in the finding.

*Specific-vs-pattern cue:* the user's sketch (specific) is rendered as D2/D3; the general space (D1–D5 + axes) locates it — both layers served.

---

## SV4 — Clarified Understanding

Now clear. The enumeration: six axes → five designs (D1 single-decider today / D2 sketch-literal / **D3 two-level with code dispatcher** / D4 queue-only-minimal / D5 maximal-rejected). The recommendation: **D3 as the end-state via the growth path D4→D3** — Navigator (recurring isolated root-mode routelister + map maintenance) → Selector (admission into + structural grooming of ONE selections file: rationale, run-conditions, invalidate-if; statuses parked/admitted/in-flight/done/removed) → Dispatcher (code; fires runnable entries ≤N; needs-judgment valve; absorbs the no-read Runner) → the Loops. The 04-00 scheduler splits into the grooming loop + the dispatch loop; RANK dissolves; all three user corrections come true (including meta-loop = the dispatcher's loop, their original instinct). The priors revise openly under the shared rule (judgment-gates-a-session, applied finer); the field-before-choice rule becomes architectural.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the end-state-with-growth-path resolution (A1); one selections file with states (A2); code-dispatcher-with-valve, D2 as observable-triggered fallback (A3); the Navigator as a recurring isolated run (A4); revision-not-contradiction of the priors under judgment-gates-a-session (A5); structural grooming via invalidate-if + three triggers (A6).

**Eliminated:** priority-ordered queue; two separate ledger/queue files; unconditional session-dispatcher; valve-less code dispatcher; standing Navigator seat; Navigator-as-dial conflation; grooming-as-diligence; "the prior finding was wrong" framing.

**Remaining freedom (Innovation's lanes):** the map's presentation (the axes table; per-design one-screen sketches); the entry-triple's exact wording; v1 values (K, N, valve-rate threshold) as placeholders; the two-loop diagram; the growth path's concrete trigger-points ("split when X observable"); the naming presentation (meta-loop=dispatcher as recommendation with veto); how plainly to say "your three instincts were right."

---

## SV5 — Constrained Understanding

The problem is bounded: deliver the possibility MAP (six axes; D1–D5 with what-each-buys/costs; D5 shown-rejected) converging on **D3-via-D4** — Navigator (recurring isolated root-mode) / Selector (admission + structural grooming of the one selections file) / Dispatcher (code + valve, absorbing the Runner) / Loops — with the queue pinned (states; rationale/conditions/invalidate-if; not-priority), the two loops replacing the one scheduler, the re-tests recorded as revision-under-a-shared-rule, the v1 values flagged, and the naming (meta-loop = the dispatcher's loop) offered for the user's veto.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check:* monotonic; the one real tension (the just-concluded 04-00 finding vs the user's corrections) resolved as fine-graining the same rule, not contradiction. No patch-loop.

*Meta-inspection:* H2 — frame-exit ran on queue/navigational-session/meta-loop. H3 — the user's confusion was answered by *naming the pattern* their instincts were assembling (two-level scheduling), and all three corrections validated — derived, not deferred-to. H4 — seven coined terms flagged. H8 self-reference — notable: the system is revising its OWN day-old finding; guards: the revision is forced by the user's corrections + the shared-rule continuity is shown explicitly + the prior finding's pieces are tracked to their new homes (nothing silently dropped) + the open hinges (valve-rate; v1 values) stay measurable rather than asserted.

## SV6 — Stabilized Model

**The possibility map (what the finding will render):**

1. **The axes (6):** enumeration's home · admission-vs-dispatch split · dispatcher's form · queue-or-not · grooming triggers · semantic-seat count.
2. **The designs (5):** **D1** the single-decider (today's 04-00 baseline; right for manual N=1) · **D2** the sketch-literal (3 seats; session-dispatcher — the fallback) · **D3** two-level with code dispatcher (**the end-state recommendation**) · **D4** queue-only-minimal (**the first step**: the selections file inside today's single session) · **D5** maximal split (shown and rejected: seat-proliferation).
3. **D3, concretely:** **the Navigator** — a recurring isolated session-kind running routelister ROOT-mode + index maintenance (every K landings / on staleness); enumerates, never chooses. **The Selector** — the admission officer and groomer: reads each landed finding; admits routes from the field into **the selections file** with admission-rationale + run-conditions + invalidate-if; re-checks invalidate-ifs per landing, full sweep every K, parks/removes with reasons. **The Dispatcher** — code: fires any runnable admitted entry while slots ≤ N are free; dedups against in-flight; never fires `needs-judgment` entries (the valve); writes completion pointers (the old Runner absorbed; no-read intact). **The Loops** — unchanged (MVL inquiries; loop-tail routelister keeps feeding the field).
4. **The two artifacts:** the FIELD (`_route.md`; routelister-owned; what could be done) and the SELECTIONS file (Selector-owned; what we've decided: parked / admitted / in-flight / done / removed — the Expedition ledger grown up; "PARKED ≠ LOST" preserved).
5. **The two loops:** the **grooming loop** (slow, semantic) and the **dispatch loop** (fast, mechanical) replace the prior single WAKE-scheduler; RANK dissolves into readiness + constraints + FIFO-fairness.
6. **The growth path:** D1 (now) → **D4** (add the selections file — pure artifact, no new sessions) → **D3** (split the code Dispatcher out when parallel runs begin; schedule the first Navigator pass when the index needs it). D2 is the named fallback if the valve-rate stays chronically high.
7. **The re-tests:** judgment-gates-a-session CONFIRMED (the continuity); "one decision session" REVISED (fine-grained); the WAKE-scheduler REVISED (split); the Runner's contract CONFIRMED (absorbed); the dial CONFIRMED (separate knob); field-before-choice CONFIRMED-STRENGTHENED (architectural); the ledger CONFIRMED-ABSORBED (the selections file).
8. **The names (user's veto):** Navigator / Selector / Dispatcher — and **"meta-loop" = the dispatcher's operational loop** (the user's original instinct, now natural), with the old cycle-referent dissolved into the two loops.

**Difference from SV1:** SV1 had the pattern-hunch and the pieces; SV6 has the six collapses done — the end-state-vs-growth-path resolution, the one-selections-file verdict, the code-dispatcher-with-valve (and its observable fallback), the Navigator's operation-difference grounds, the revision-not-contradiction re-test framing, and structural grooming — plus the map's exact shape and the all-three-instincts-were-right through-line.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 8 perspectives (Frame-exit on queue / navigational-session / meta-loop; Phase/Calibration on v1 placeholders); saturating.
- **Ambiguity resolution ratio:** 6/6 collapsed (all HIGH on mechanism; A3 MED on which side practice lands — by design, an observable hinge); 0 silently open.
- **SV delta:** STRUCTURAL — a confused three-correction pushback became a named pattern, a 5-design map, a one-artifact verdict, a two-loop operating model, and a staged adoption path.
- **Anchor diversity:** all 5 anchor types from 3 source classes (the user's corrections; the three priors + routelister spec; the scheduling-pattern canon); the priors revised under an explicit shared rule rather than defended or discarded.
- **Failure modes:** Status Quo Bias — the day-old finding is revised, not defended (the heaviest test this session). Premature Stabilization — the over-engineering counter, the two-file counter, the session-dispatcher counter, and the standing-seat counter all got full force. Clean Resolution Trap — the D2-vs-D3 hinge kept honestly observable (valve-rate); v1 values left as placeholders. Anchor Dominance — the two-level-scheduling pattern is load-bearing but each collapse also stands on project-internal grounds (the ledger, the gap finding, the dial's actual question). Self-Reference — guarded as in Phase 5. None firing.

**Next discipline input:** Decomposition should partition the deliverable (the axes+designs map / D3's stations / the selections-file artifact / the two loops / the growth path / the re-tests + naming) with interfaces, honoring enumerate-then-recommend, the three user-corrections as hard bounds, and the flagged placeholders.
