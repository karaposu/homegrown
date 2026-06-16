# Structural Sensemaking — route_run_tracking_rlu_design

## User Input

devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/_branch.md

---

## SV1 — Baseline Understanding

The user field-tested routelister in crowboy, found enumeration works but nothing tracks run-state, and proposed rlu (a wrapper skill that marks routes RAN in routelister.md with collected metadata). Surfacing diagnosed the gap as a missing LAYER (the selections file exists as design, deployed nowhere), decoded the hand-annotations as the requirements spec, split the record-kinds (manifestation-pointers legal in `_route.md`; process-status belongs to the ledger), showed the literal write-target fails structurally (archived + regenerated), and collapsed the wrap mechanics into the two-moment form that IS the committed admit/close-out. The likely shape: ADOPT rlu with two refinements (write-target → the per-project selections file + a `_route.md` manifestation pointer; wrap → two moments), making rlu the selections file's write-mechanism — the turn-recorder the user re-invented from field pain.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- C1 — Must cover informal runs (plain LLM sessions, no runner).
- C2 — Deliver the *reliable-current-view* desire (the deeper want), even if the literal write-target shifts.
- C3 — Don't break routelister's identity; spec changes explicit and flagged, never slipped.
- C4 — Lightweight (a small updater, not an orchestration platform); the user stays the chooser (no launcher).
- C5 — Reconcile with the committed selections-file design, not parallel-invent.

**Key Insights**
- KI1 — **The user's proposal is the right MECHANISM aimed at the wrong FILE.** The instinct — one command at run-start, metadata collected, the record updated automatically — is exactly the mechanize-the-habit pattern (the same fix that made route-listing automatic in `/aMVLwr`). But routelister.md structurally cannot hold the marks: it is a per-run snapshot, archived into docarchive/ at CONCLUDE (all three crowboy maps already live there), and regenerated on every re-enumeration (the spec's idempotency — marks written into a map vanish at the next run). The desire ("reliable and up to date") is delivered by retargeting the write, not by abandoning the mechanism.
- KI2 — **What the user wants already has a designed home: the selections file — and crowboy is the proof it's needed universally.** The Pipeline Architecture finding designed precisely this ledger (every route a decision was made about: status parked/admitted/in-flight/done/removed + why-admitted + wait-condition + invalidate-if; single-writer; the two writing moments admit/close-out). It exists as design only — deployed in no project. Within 24 hours of routelister's first field use, the user hand-wrote status+pointer+summary+progress into `_route.md` — independently re-inventing the selections entry. The gap is the vacuum where that file should be; rlu is the missing tool that CREATES and MAINTAINS it.
- KI3 — **The record-kind split resolves the spec contradiction without losing anything.** The hand-annotations conflate two kinds: (a) *manifestation facts* — "this concept was taken up; an inquiry/finding now exists at path P" — which `_route.md`'s OWN spec fields (depth-pointer, depth-signal, last-touched) already legally carry (a new artifact for a concept IS a new manifestation); and (b) *process state* — DONE / IN-PROGRESS / PENDING / "§1–§4 done" — which the spec explicitly excludes and which belongs in the selections ledger. Split them: rlu-done writes the full process record to selections AND a bare manifestation pointer to `_route.md`'s row. The map files stay perception-pure; the glance-at-the-index habit still shows "↗ taken up, see P"; nothing the hand wrote becomes unrecordable.
- KI4 — **"Wrap" must be two moments, not one — and the two moments are the committed design's admit/close-out.** A skill has no after-the-run hook; sessions end unpredictably. The robust form: `rlu start <map> <route>` writes the admission row IMMEDIATELY (route-ref + why + goal + in-flight + timestamp — the record exists even if the session dies mid-work) and hands the session its work contract; `rlu done <outcome>` completes the row (status, artifact pointers, one-line outcome) and stamps the `_route.md` manifestation pointer. Reminder mechanized into the tool: start PRINTS the done-command to paste later, and every rlu invocation sweeps for stale in-flight rows ("2 open runs — close?"). This is the selections file's two writing moments, skill-ized — the user's wrapper instinct re-derived the turn-recorder.
- KI5 — **Per-project, not per-map, is the only shape that answers the actual question.** "What has been run?" is a project-level question; crowboy's marks are scattered across three inquiry folders. One `devdocs/selections.md` per project (created by rlu on first use) aggregates every route-engagement regardless of which map the route came from (each row carries its source-map reference). This also makes rlu the cross-project deployment vehicle for the selections design — crowboy gets the ledger without needing the native project's roadmap context.
- KI6 — **rlu must mark and point, never launch.** The Selection-creep guard: rlu records the human's choice and its outcome; it does not pick routes, does not auto-run anything, does not become a dispatcher. (The user said it themselves: "I am the meta loop still." The autonomy ladder's gates own any future change to that.)
- KI7 — **The runner-integration complement is real but secondary.** `/aMVLwr` could accept an optional route-ref and write the completion mark itself at CONCLUDE (it knows the folder + finding path) — removing rlu-done ceremony for runner work. But the stated pain case is informal runs, which only rlu covers; and a second writer needs the same marked-fields discipline the Pipeline finding gave the Dispatcher. Verdict-shape: list as an enhancement option, not v1.
- KI8 — **One honest spec touch, flagged:** `_route.md`'s boundary text could gain ONE clarifying sentence — that depth-pointers may reference artifacts produced by later engagements ("taken up by inquiry X — finding at P") as manifestations, while status/verdict words remain excluded. Arguably already implied (crowboy's pointer-halves fit the existing fields); making it explicit prevents the next hand-annotator from re-conflating. The user's go, recorded as a small COULD.

**Structural Points:** SP1 right-mechanism-wrong-file (retarget, don't reject) · SP2 the selections file = the designed home; rlu = its write-mechanism + deployment vehicle · SP3 the record-kind split (manifestation → `_route.md`; process → selections) · SP4 two moments (start/done) = admit/close-out; mechanized reminders · SP5 per-project ledger; rows carry source-map refs · SP6 mark-and-point-never-launch · SP7 runner-integration as enhancement · SP8 the one-sentence spec clarification (flagged COULD).

**Foundational Principles:** FP1 mechanisms beat exhortations (zero-for-109; the aMVLwr precedent) · FP2 perception artifacts stay pure; decisions get their own ledger (could-do vs decided-about) · FP3 records must survive session death (write the admission immediately) · FP4 the user's deeper desire governs over the literal file named (C2) · FP5 field pain validates design (crowboy re-invented the entry by hand — the strongest evidence the design is right).

**Meaning-Nodes:** right-mechanism-wrong-file · the missing layer · the record-kind split · the two-moment wrap · the per-project ledger · the work contract · stale-sweep · mark-never-launch.

---

## SV2 — Anchor-Informed Understanding

The verdict is taking shape: **ADOPT rlu, with two refinements that make it stronger, not different** — (1) the write-target becomes the per-project selections file (created on first use) + a bare manifestation pointer in `_route.md`; routelister.md snapshots stay untouched (they're archived and regenerated — marks there die); (2) the wrap becomes two explicit moments (`rlu start` = admission row + work contract, robust to session death; `rlu done` = completion + pointers + outcome), with reminders mechanized (start prints done; invocations sweep stale rows). What this amounts to: **rlu is the selections file's missing write-mechanism — the turn-recorder, invoked by the human around any work, runner or not.** Open for later phases: the exact v1 command surface; the one-view UX resolution; the spec-sentence COULD; the runner-integration enhancement's placement.

---

## Phase 2 — Perspective Checking

**Technical / Logical.** The retargeting argument is mechanical, not aesthetic: archived files + idempotent regeneration make routelister.md marks literally transient — the user's "reliable and up to date" REQUIRES a living file. The two-moment split is the standard answer to no-end-hook environments (write-ahead records; the admission row is a WAL entry). Single-writer discipline holds: rlu (driven by the human) writes selections; routelister keeps writing its own two files; the only shared touch is the `_route.md` pointer — within the fields routelister's spec already owns for exactly this kind of fact.
**Human / User.** The user asked "what do you think?" expecting an honest verdict on THEIR design — the answer must lead with what's RIGHT about it (the mechanism, the metadata-binding, the automation instinct) before the corrections (the file, the wrap form). The one-view desire is the UX crux: the answer must say plainly *"the selections file becomes the one place you look for status; the map stays the place you look for options; and the index shows a ↗ where work happened."* Three files each doing ONE job is more trustworthy than one file doing three badly — but that argument must be MADE, not assumed.
**Strategic / Long-term.** rlu is quietly load-bearing for SUSTRALL: it is the tool-ization of turn-recording (the launch checklist's step 2's recurring form), it deploys the selections file to any project (crowboy now, native at Turn 1), its rows are the gate fuel (recorded choices + outcomes), and its done-marks are the completion pointers the future Dispatcher will read. Building rlu ≈ building the manual-mode Dispatcher's recording half. Worth saying — it upgrades rlu from convenience to climb infrastructure.
**Risk / Failure.** (a) Ceremony abandonment: two commands per run may rot like the observation habit — mitigations are real (start prints done; stale-sweep; runner-integration later) but the honest fallback is post-hoc-only (`rlu mark` after work) which still beats hand-editing. (b) The ledger rotting (stale in-flight rows) — the sweep mitigates; grooming stays human. (c) Scope creep toward launching — the mark-never-launch guard must be in rlu's spec NOT-list explicitly. (d) Cross-project versioning — rlu ships via the installer like every skill.
**Resource / Feasibility.** rlu v1 is small: parse a route from a map (the maps are structured — ordinal + Direction), append/update rows in a markdown table, print text. No new infrastructure. The selections file's v1 minimal-table shape is already designed (and its full schema deliberately gated on ≥3 grooming passes — rlu v1 writes the minimal columns).
**Definitional / Internal Consistency (the Synthesis re-tests).** (i) *Routelister's spec* — RESPECTED and sharpened: enumeration untouched; route-maps stay pure; `_route.md` carries only manifestation facts (its own depth-pointer field's purpose); the process-status load moves OUT of routelister's files entirely — the hand-practice's violation is CURED, not legalized. (ii) *The selections file design* — CONFIRMED by field evidence (the hand-wrote entry-shape) and EXTENDED: per-project deployment via rlu; partial-progress amendments absorbed into the outcome cell's append style; source-map references added to rows (a new, compatible column). (iii) *The launch checklist* — STRENGTHENED: rlu makes its step 2 (Turn 1) and the Turn-N recurring shape executable as commands; mechanisms-beat-exhortations honored throughout. (iv) *The crowboy hand-practice* — fully absorbed: every kind of thing the hand wrote has a home (status/progress/outcome → selections; pointers/cross-refs → `_route.md` manifestation fields + selections artifact-pointers).
**Definitional / Frame-exit Completeness.** Gating fires on "tracking," "wrap," "the file." **"Tracking":** (a) marks on the map — REJECTED (transient by construction); (b) **a decided-about ledger + manifestation pointers** — COMMITTED; (c) a process-manager — REJECTED (scope). **"Wrap":** (a) single magic invocation — REJECTED (no end-hook); (b) **two moments with mechanized reminders** — COMMITTED; (c) post-hoc only — KEPT as the degraded-but-valid mode (rlu done can run without a prior start, creating the row retroactively). **"The file the user looks at":** (a) routelister.md — it shows OPTIONS (per-run); (b) **selections.md — it shows STATUS (the one reliable view)**; (c) `_route.md` — it shows the concept-map with ↗ pointers; COMMITTED: three files, one job each, with selections as the status home.
**Phase / Calibration-State.** Design-level confidence HIGH (the mechanics are forced by structural facts); the v1 command surface and column details are sketch-level (the build refines); the spec-sentence is a flagged user-go.

---

## SV3 — Multi-Perspective Understanding

Two reframes stabilize. First: **the user didn't propose a file-updater — they re-invented the turn-recorder.** `rlu start`/`rlu done` are exactly the selections file's admit/close-out moments; the proposal's core (one command, automatic metadata, a reliable record) is the committed design's missing write-mechanism, and crowboy's hand-annotations are the field proof both were needed. Second: **the correction is a retarget, not a rejection** — marks die in routelister.md (archived, regenerated) and live in a per-project selections file; the spec contradiction dissolves via the record-kind split (manifestation pointers stay in `_route.md` legally; process status moves to the ledger); and the one-view desire is served by giving each file ONE job, with selections as the status home.

---

## Phase 3 — Ambiguity Collapse

#### Ambiguity A1: Where do the marks live — the user's routelister.md, `_route.md`, or a selections file?

**Strongest counter-interpretation:** honor the proposal literally — mark routelister.md; it's the file the user reads, and "reliable and up to date" means THE MAP shows status.

**Why the counter fails (structural grounds):** routelister.md cannot structurally hold durable marks: (1) the runner ARCHIVES it at CONCLUDE — all three crowboy maps already sit in docarchive/, so rlu would be annotating archives; (2) re-enumeration REGENERATES the map (the spec's idempotency-at-fixpoint) — marks vanish at the next run; (3) maps are per-inquiry while "what ran?" is per-project — marks would scatter exactly as the hand-annotations did. The user's DESIRE (one reliable current view) is real; the named file defeats it. The living homes: the per-project selections file (status) + `_route.md` (manifestation pointers, legal under its own depth-pointer field).

**Confidence:** HIGH. **Resolution:** **marks live in the per-project selections file** (created by rlu on first use; rows carry source-map references), **plus a bare manifestation pointer in the route's `_route.md` row** ("↗ taken up — finding at P"); routelister.md is never mutated. **No longer allowed:** writing status into route-maps or archived files; status words (DONE/IN-PROGRESS) in `_route.md`.

#### Ambiguity A2: Is rlu's "wrap" one invocation or two moments?

**Strongest counter-interpretation:** one invocation is the whole charm — `rlu <map> <route>` and forget; two commands is ceremony that will rot.

**Why the counter fails (structural grounds):** a skill fires at invocation; "after the run" has NO hook — sessions end, crash, or drift (the zero-for-109 lesson: un-mechanized closing steps don't happen). A single-invocation rlu would either write RAN *before* the work (a lie) or depend on the session remembering to come back (the exact failure being fixed). The two-moment form writes the admission IMMEDIATELY (the record survives session death — and an in-flight row that never closes is itself visible truth), and mechanizes its own reminder (start prints the done-command; every invocation sweeps stale rows). Post-hoc-only (`rlu done` without a start, creating the row retroactively) remains valid as the degraded mode — still one command better than hand-editing.

**Confidence:** HIGH. **Resolution:** **two moments** — `rlu start` (admission row: route-ref + why + goal + in-flight; prints the close-out command; hands the session the work contract) and `rlu done` (status + artifact pointers + one-line outcome + the `_route.md` stamp); **done-without-start allowed** (retroactive row). **No longer allowed:** marking RAN at start-time; designs that depend on an un-mechanized closing memory.

#### Ambiguity A3: Does rlu conflict with routelister's spec — and does the spec need amending?

**Strongest counter-interpretation:** any engagement information in `_route.md` is process state; the spec forbids it; rlu must touch only the selections file.

**Why the counter fails (structural grounds):** the spec's boundary excludes *process/control-flow state* (cycles, verdicts, dispositions) but its index EXISTS to carry within-concept manifestation facts — depth-pointers, depth-signals, first-seen/last-touched. "An inquiry was run on this concept; its finding is at P" is a new MANIFESTATION of the concept (an artifact that now exists), the precise kind of fact the depth-pointer field records — crowboy's own pointer-halves already sit comfortably in those fields; it was the STATUS WORDS that trespassed. So: the pointer is legal today; the status is not; rlu writes accordingly. One clarifying sentence in the spec (pointers may reference later-engagement artifacts; status/verdict words stay excluded) would inoculate future hand-annotators — a small flagged edit, the user's go.

**Confidence:** HIGH. **Resolution:** **no spec violation in the design** — rlu writes process state ONLY to selections, and only manifestation pointers to `_route.md` (within existing fields); the optional one-sentence clarification ships as a flagged COULD. **No longer allowed:** status/verdict words in `_route.md`; silently amending routelister's spec.

#### Ambiguity A4: How is the one-view desire actually served (the UX crux)?

**Strongest counter-interpretation:** three files (map, index, selections) is worse than the one file the user asked for — the design trades their wish for architectural purity.

**Why the counter fails (structural grounds):** the "one file" the user asked for was doing three jobs badly (options + status + pointers — and going stale in two of them by construction). The design gives each question one authoritative file: *"what could I do?"* → the freshest map; *"what's the state of this concept?"* → `_route.md` (with ↗ pointers where work happened); ***"what has been run, what's open, what came of it?"* → `devdocs/selections.md` — the ONE view the user actually wanted**, current by mechanism (rlu writes it at both moments) and project-wide (all maps' engagements in one table). The reliable-current-view desire is delivered — at the selections file, not the map.

**Confidence:** HIGH. **Resolution:** **the selections file IS the one reliable view**; the answer states the three-questions/three-files mapping plainly so the habit retargets. **No longer allowed:** promising map-resident status; leaving the one-view question implicit.

#### Ambiguity A5: What is rlu's scope boundary (skill identity)?

**Strongest counter-interpretation:** since rlu knows the route and wraps the run, let it also LAUNCH the work (pick the runner, fire the command) — one tool, whole turn.

**Why the counter fails (structural grounds):** launching is the Dispatcher's job (code, later, gated on parallel want) and choosing is the Selector's (the human, per the autonomy gates); a launching rlu becomes a proto-orchestrator with judgment creep (which runner? which mode?) — the exact Selection-creep/Process-coupling failure classes, and an autonomy jump nobody requested ("I am the meta loop still"). rlu's identity: **record and point — never choose, never launch.** (It may PRINT a suggested command as part of the work contract — text, not execution.)

**Confidence:** HIGH. **Resolution:** rlu = a **recording** skill (admission + completion + pointers + sweep); launching stays manual (or the runner-integration enhancement reports completions); a NOT-list ships in rlu's spec. **No longer allowed:** rlu executing runs; rlu choosing routes.

#### Ambiguity A6: Is the runner-integration (aMVLwr writes back) part of v1?

**Strongest counter-interpretation:** build it now — it removes all ceremony for runner work, which is most route executions.

**Why the counter fails (structural grounds):** the stated pain case is INFORMAL runs (the user's "develop X… no homegrown skill") — only rlu covers those; the runner case already has a workaround (rlu done after the runner finishes, pasting the finding path). Runner-integration adds a second writer to the ledger (needs the marked-fields discipline) and a runner-spec edit — real but separable work. v1 ships the universal mechanism; the integration is the first enhancement.

**Confidence:** MED-HIGH. **Resolution:** **v1 = rlu alone** (covers all cases, two commands); **enhancement = `/aMVLwr` accepting an optional route-ref** and appending the completion mark at CONCLUDE (one writer-discipline note when built). **No longer allowed:** blocking rlu on runner changes.

---

*Load-bearing concept test:* **"right-mechanism-wrong-file"** — the verdict's shape; flag. **"the record-kind split"** (manifestation → `_route.md`; process → selections); flag. **"the two-moment wrap"** (start/done = admit/close-out); flag. **"the per-project selections ledger"**; flag. **"the work contract"** (start hands the session its route); flag. **"mark-never-launch"**; flag. **"the three-questions/three-files mapping"**; flag. All defined in the finding.

*Specific-vs-pattern cue:* rlu (specific) is evaluated inside the tracking option-space (general); both items served — the map locates the proposal, the verdict refines it.

---

## SV4 — Clarified Understanding

Now clear — **the verdict: ADOPT rlu, refined.** The user's mechanism (one small command around any run, automatic metadata, a trustworthy record) is right and is in fact the committed selections design's missing write-tool; the two corrections are forced by structure, not taste: (1) **retarget the write** — the per-project `devdocs/selections.md` (created on first use; rows carry source-map refs) holds status/outcome; `_route.md` rows get a bare manifestation pointer (legal today); routelister.md is never mutated (archived + regenerated). (2) **two moments** — `rlu start` (admission row, work contract, prints the close-out) and `rlu done` (status, pointers, outcome, the ↗ stamp), with done-without-start as the degraded mode and a stale-row sweep on every invocation. Scope: record-and-point, never choose or launch. v1 = rlu alone; the aMVLwr write-back is the first enhancement; one flagged spec-sentence COULD. The three-questions/three-files mapping delivers the one-view desire at the selections file.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the placement (A1 — selections + pointer; never the map); the two-moment wrap with retroactive-done (A2); the spec verdict (A3 — no violation; the optional sentence flagged); the one-view resolution (A4 — selections is the view; the mapping stated); the scope boundary (A5 — record-and-point); v1-vs-enhancement (A6).

**Eliminated:** marks in routelister.md / archived files; status words in `_route.md`; single-invocation wrap; mark-RAN-at-start; rlu launching/choosing; blocking on runner changes; a parallel tracking invention beside the selections design.

**Remaining freedom (Innovation's lanes):** the v1 command surface (exact arguments; how a route is referenced — ordinal vs name); the selections row's v1 columns (minimal set + source-map ref); the work-contract text; the sweep's wording; the `_route.md` pointer's exact form; the spec-sentence's wording; how the finding presents the verdict to honor the user's authorship.

---

## SV5 — Constrained Understanding

The problem is bounded: deliver (item-1) the option-map (placement × mechanism × moments, with each option's structural verdict) converging on the selections-ledger placement, and (item-2) the rlu verdict — ADOPT with the two forced refinements — plus rlu's v1 sketch (start/done/mark commands; the row; the pointer; the sweep; the NOT-list), the three-questions/three-files mapping, the crowboy migration note (the hand-annotations' two halves re-homed), the flagged spec-sentence COULD, and the runner-integration enhancement — every build/spec-edit on the user's go.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check:* monotonic; the one real tension (the user's literal file vs the living-file facts) resolved by retarget-not-reject, with the desire explicitly preserved. No patch-loop.

*Meta-inspection:* H2 — frame-exit ran on tracking/wrap/the-file. H3 — the user's proposal is honored as RIGHT in mechanism and named as the re-invention of the committed design (authorship credited), with corrections argued from structural facts they can verify (the archived maps in their own crowboy folders). H4 — seven coined terms flagged. H8 self-reference — present (the evaluation favors the corpus's own selections design); guards: the design is favored on FIELD evidence (the user's hand re-invented its entry-shape unprompted), the structural facts (archiving, regeneration) are checkable, and the user's mechanism is adopted rather than replaced by a corpus invention.

## SV6 — Stabilized Model

**Item-2 verdict (lead): ADOPT rlu — it is the right mechanism, retargeted and made robust.**
1. **What's right in the proposal:** the one-command habit; automatic metadata collection; binding run-artifacts to routes; "reliable and up to date" as the goal. This is mechanize-the-habit, correctly instincted — and it is the missing write-mechanism of the committed selections design (the user re-invented the turn-recorder from field pain; crowboy's hand-annotations prove the need).
2. **Refinement 1 — retarget the write (forced by structure):** routelister.md is archived at CONCLUDE and regenerated on re-runs — marks there die. The marks live in **`devdocs/selections.md` per project** (rlu creates it on first use; one table: route + source-map ref + why + status in-flight/done/parked + artifact pointers + one-line outcome) **plus a bare ↗ manifestation pointer in the route's `_route.md` row** (legal under the spec's depth-pointer field). Route-maps are never mutated.
3. **Refinement 2 — the wrap is two moments:** **`rlu start <map> <route>`** → writes the admission row immediately (survives session death), hands the session the work contract, prints the close-out command; **`rlu done [<artifacts>] [<outcome>]`** → completes the row, stamps the pointer. **`rlu done` without a start** creates the row retroactively (covers forgotten starts and purely informal work). Every invocation **sweeps stale in-flight rows**.
4. **Scope:** record-and-point — never choose, never launch (a NOT-list in rlu's spec); the user remains the Selector.
5. **v1 vs enhancements:** v1 = the rlu skill alone (+ installer entry). Enhancement 1: `/aMVLwr` accepts an optional route-ref and appends the completion mark at CONCLUDE (runner work loses all ceremony). Flagged COULD: one clarifying sentence in routelister's spec (manifestation pointers may reference later-engagement artifacts; status words stay excluded).

**Item-1 (the option-map, compressed):** Placement — map (dies: archived/regenerated) / `_route.md`-only (illegal for status, legal for pointers) / **selections file (the designed home — recommended)** / hybrid (selections + pointer = the recommendation). Mechanism — wrapper skill (**rlu — recommended**) / post-hoc command (kept as rlu's degraded mode) / runner-integration (enhancement) / hand-editing (the failing status quo). Moments — single-wrap (dies: no end-hook) / **two moments (recommended)** / done-only (degraded mode).
**The one-view answer:** *what could I do* → the freshest route-map · *what's this concept's state* → `_route.md` (↗ where work happened) · ***what has been run and what came of it* → selections.md — the one reliable, mechanism-current view.**
**The crowboy migration:** the existing hand-annotations split into their two halves — pointers stay in `_route.md`; status/progress/outcome lines move into the new selections file as its first rows (rlu can be exercised on exactly this migration).

**Difference from SV1:** SV1 had the verdict's direction; SV6 has the six collapses done — the placement forced by archiving/regeneration facts, the two-moment wrap forced by the no-end-hook reality (with retroactive-done as the degraded mode), the spec adjudicated via the record-kind split (no violation; one optional sentence), the one-view desire delivered concretely (the three-questions mapping), the scope fenced (record-and-point), and v1 separated from the runner enhancement.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 8 perspectives (Frame-exit on tracking/wrap/the-file; Phase/Calibration on design-vs-build levels); saturating.
- **Ambiguity resolution ratio:** 6/6 collapsed (5 HIGH, 1 MED-HIGH); 0 silently open.
- **SV delta:** STRUCTURAL — a "what do you think?" became an ADOPT-refined verdict with a forced-by-structure design, an option-map, a migration note, and a v1/enhancement split.
- **Anchor diversity:** all 5 anchor types from 3 source classes (the crowboy field artifacts; the routelister spec; the selections/checklist commitments); the user's proposal credited and corrected on checkable facts.
- **Failure modes:** Status Quo Bias — the hand-practice is cured, not blessed; the spec is respected, not ossified (the one-sentence COULD). Premature Stabilization — the literal-target counter and the one-invocation counter got full force. Clean Resolution Trap — the ceremony-rot risk stays named (the degraded mode + sweep are mitigations, not denials). Anchor Dominance — the selections design wins on field evidence, not on being the corpus's own. Self-Reference — guarded as in Phase 5. None firing.

**Next discipline input:** Decomposition should partition the deliverable (the verdict + what's-right / the two refinements + the forced-by-structure arguments / the v1 command sketch + row + pointer + NOT-list / the option-map / the one-view mapping + crowboy migration / the enhancement + spec-sentence COULDs) with interfaces, honoring the user's authorship, the spec boundaries, and every GO staying the user's.
