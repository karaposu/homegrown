# Structural Sensemaking — route_tracking_placement_per_inquiry_vs_project

## User Input

devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/_branch.md

---

## SV1 — Baseline Understanding

The user contests the prior rlu finding's placement (a per-project `selections.md` as source of truth) and proposes a per-inquiry sibling update file, with two objections (the 2000-entry local lookup; reference-fragility on folder move) and a distinction (inquiry-level vs project-level routelisters). Surfacing's resolution: the dispute dissolves into (i) **two conflated objects** — the per-route RUN-LOG (local) vs the Selector's WORKING-QUEUE (project) — and (ii) a **source-of-truth-vs-derived-view reframe** (per-inquiry files = truth; project overview = derived projection), which takes the winning column of both sides and dissolves both objections; the user's sibling-file corrects to a root-level `_runs.md` (since routelister.md is archived); only that per-inquiry file is new-now (the queue stays deferred). The likely shape: the user is RIGHT, the prior finding is RIGHT — about different objects — and the verdict is the three-artifact separation with per-inquiry as the source of truth.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- C1 — Weigh correctly (explicit meta-ask): no rubber-stamp of either side.
- C2 — Never mutate the original artifacts (routelister.md, discipline outputs); append/sibling only.
- C3 — The local question ("is this inquiry's route run?") must NOT require a 2000-entry scan.
- C4 — No correctness break on folder rename/move.
- C5 — rlu-the-mechanism is accepted; this is target-only.

**Key Insights**
- KI1 — **The dispute is not a contest; it's a conflation. "Run-state" names two objects with two natural scopes.** Object-A, the per-route RUN-LOG ("was this route, in this map, engaged — and what came of it?"), is intrinsically LOCAL: its question is always asked while standing in one inquiry's field. Object-B, the Selector's WORKING-QUEUE / decided-about ledger ("across the whole project, what have I admitted / am working / parked, that the Dispatcher will fire?"), is intrinsically PROJECT-LEVEL: a cross-inquiry portfolio. The prior finding's `selections.md` tried to be both. The user's lookup pain is precisely the symptom of asking object-A's local question of an object-B project file. Separate them and each lands at its natural scope — the user is right about A, the prior finding is right about B.
- KI2 — **The real error in the prior finding was source-of-truth-ness, not the project file's existence. Flip it and both objections dissolve at once.** Make **per-inquiry files the source of truth**; make any project-wide view a **derived, regenerable projection** (regex-assemble the per-inquiry files, or cache it). Then: the 2000-lookup dissolves (the local question is answered in the inquiry folder, O(routes-here) — you never query the project file to learn a local fact); reference-fragility dissolves (the truth lives INSIDE the folder, so moving/renaming carries it along, and the derived view self-heals on its next regeneration). The user reached this intuitively ("regex to find all... consume at once; folder-membership tells you the inquiry").
- KI3 — **The user's sibling-file is right in instinct, wrong in one detail — and the correction is forced by two facts.** "Put it next to routelister.md" fails because routelister.md is ARCHIVED to docarchive/ at CONCLUDE (a literal sibling would be archived too, or orphaned). And `_route.md` — the living root file — is forbidden by routelister's spec from holding process state. So the per-inquiry run-log is a NEW underscore state-class file at the **inquiry root** (working name `_runs.md`), sibling to `_route.md`/`_state.md`/`_branch.md`: living (never archived), rlu-owned (routelister's identity untouched), spec-clean (`_route.md` stays pure).
- KI4 — **The inquiry-level/project-level routelister distinction IS the object-A/object-B cleavage, seen from the run-mode angle.** Routelister's two run modes: concept-target/inquiry-level (the aMVLwr exhaust → a per-inquiry field) ↔ object-A's home (`_runs.md` at that inquiry's root); root/project-space (the future Navigator's project-wide sweep) ↔ object-B's home (a project-level ledger/queue). So the user's "project file for project-level routelisters, per-inquiry file for inquiry-level" is not a side-remark — it is the same cleavage, principled, three-ways-confirmed (object / scope / run-mode all cut the same line).
- KI5 — **Not everything is derived: the Dispatcher's queue is a genuinely-maintained project artifact — but it's a DIFFERENT thing from the done-log.** The Pipeline finding's selections file is the Selector's WORKING-QUEUE that the code Dispatcher FIRES FROM — that's forward-looking admitted-intent, a real maintained project file (object-B). The backward-looking per-route DONE-record is object-A (per-inquiry). The cross-project "what's been done" overview is the DERIVED projection over object-A. So the clean picture is THREE roles: (B) the maintained forward queue [project, deferred until the Dispatcher is real], (A) the per-inquiry done-log [local, new now], (overview) the derived done-view [regenerable, build when needed]. The prior finding fused all three into one file, which is exactly why the local lookup hurt.
- KI6 — **The user's "update in place, don't recreate/centralize" analogy is apt for A and bounded at B — and naming the boundary IS weighing correctly.** The routelister-moved-to-end-of-loop optimization taught: put the artifact where the work is; don't centralize the act. That licenses object-A (run-state lives where the routes live). It does NOT extend to object-B (the Selector's queue is inherently cross-inquiry — centralization IS its nature, not a smell). The analogy correctly justifies the per-inquiry move and correctly stops at the queue.
- KI7 — **For the user's actual immediate need, only object-A ships — which IS the lightweight per-inquiry file they asked for.** crowboy needs "track what's run" NOW. That's object-A: a root-level `_runs.md` per inquiry, rlu-written, append-only. Object-B (the queue) stays deferred behind its existing gates (the Dispatcher/parallel-want trigger). The derived overview is `rlu list`-over-all-`_runs.md`-on-demand — no maintained file yet. So the reframe ADDS no build cost now; it CLARIFIES that the central file was never needed for the immediate need, vindicating the user's wariness.
- KI8 — **Append-only wins for the local file; the queue may differ — a real per-object divergence.** For ~10 routes per inquiry, append-only `_runs.md` is simpler, crash-safe, audit-friendly (full history), and "current state of route #7 = last line mentioning #7" is a trivial scan. The project queue (object-B) may prefer mutate-in-place for compactness — another reason A and B are different artifacts, not one.

**Structural Points:** SP1 the two objects (RUN-LOG local / WORKING-QUEUE project) · SP2 source-of-truth (per-inquiry) vs derived-view (overview) — the dissolving move · SP3 the root-level `_runs.md` (not a map-sibling; not `_route.md`) · SP4 inquiry-level/project-level routelister = the object/scope cleavage · SP5 three roles (maintained queue B / per-inquiry done-log A / derived overview) · SP6 the update-in-place analogy apt-for-A-bounded-at-B · SP7 only-A-ships-now (B deferred; overview on-demand) · SP8 append-local / (maybe) mutate-queue.

**Foundational Principles:** FP1 source of truth lives where the thing lives; views are derived and disposable (C2/C3/C4 all follow) · FP2 distinguish before placing — a conflated noun gets a conflated (wrong) home · FP3 locality for the local question; centralization only where the question is inherently cross-cutting · FP4 ship the small real need now, defer the speculative machinery (C1's honest weighing) · FP5 the user's instincts are data — re-tested, both their proposal AND their objections largely hold; the prior finding's placement was the over-reach.

**Meaning-Nodes:** the two objects · source-vs-derived · `_runs.md` (root) · the object/scope/run-mode cleavage · three roles · update-in-place-bounded · only-A-now · append-local.

---

## SV2 — Anchor-Informed Understanding

The verdict is forming: **the prior finding's Correction-1 is REVISED — per-inquiry is the source of truth for the per-route run-log (object-A), the project file's role narrows to the Selector's forward queue (object-B, deferred), and the project-wide overview becomes a derived projection.** Concretely: rlu writes a root-level `_runs.md` per inquiry (append-only; never the archived map; never `_route.md`); the local question is answered there in O(routes-here); the project overview is `rlu list` assembling all `_runs.md` on demand; the central queue stays deferred behind the Dispatcher gate. The user is right (object-A is local), the prior finding is right (object-B is project) — they were arguing about one file that is two-or-three concerns. Open for later phases: the `_runs.md` exact format; whether to formally re-scope the prior finding's selections file or just amend; the overview's trigger.

---

## Phase 2 — Perspective Checking

**Technical / Logical.** The source-of-truth/derived-view split is the standard resolution of "I want locality AND a global view" — it's the normalized-data-with-a-materialized-view pattern: the per-inquiry files are the normalized truth; the overview is a view you can drop and rebuild. The two objections are both properties of *querying a centralized source-of-truth for a local fact* — remove the centralization-of-truth and they vanish, provably. The object-A/B split is sound: forward-intent (queue) and backward-record (done-log) are genuinely different temporal directions with different access patterns (the Dispatcher reads B to decide; a human reads A to recall) — fusing them was the latent error.

**Human / User.** The user asked to "weigh correctly" and distrusts a too-quick answer — so the deliverable must SHOW the plus/minus and must credit BOTH their proposal (object-A locality, the sibling instinct, the regex-discovery) AND the prior finding (object-B's queue is genuinely project-level) rather than declaring a winner. The honest punchline they'll appreciate: *you're both right, about different things; here's the line.* And the immediate-need answer (only `_runs.md` ships now) directly serves their wariness about the project file.

**Structural / Long-term.** The three-role separation is more future-robust than either monolith: object-A scales with inquiries (each file stays ~10 rows); the overview is regenerable (no migration when folders move); object-B arrives only when the Dispatcher does, designed then against real queue needs. It also keeps routelister's identity clean (it writes neither) and `_route.md` spec-pure.

**Risk / Failure.** (a) Two-files-becomes-three-files complexity: mitigated because only ONE (object-A) exists now; B and the overview are deferred/on-demand, named not built. (b) The derived overview drifting from truth: impossible by construction (it's regenerated from the per-inquiry files; it has no independent state). (c) Cross-inquiry routes (a route from inquiry X run as inquiry Y): object-A's home is "the inquiry whose field the route came FROM" — the run-log row lives in X's `_runs.md` with a pointer to Y's artifacts (the route was X's; the work landed in Y). Flag for the file format. (d) The user's append-only at huge per-inquiry scale: not a risk (~10 routes); only object-B (project) would ever be large, and it's deferred.

**Resource / Feasibility.** Object-A (`_runs.md`) is trivial: rlu appends a line at start and at done. The overview is a regex+concat (a `list` command or a one-liner). Object-B is the existing Pipeline design, untouched and deferred. So the verdict's NET new build for the immediate need is one small per-inquiry file — exactly the user's ask, now correctly scoped.

**Definitional / Internal Consistency (the Synthesis re-tests).** (i) *Prior finding Correction-1 (central selections = source of truth + ↗ pointer)* — RE-TESTED, found PARTIALLY INVALID: the placement is revised (per-inquiry is the source of truth for the done-log); the ↗ pointer was a half-measure (keyed to concepts, a bare breadcrumb) — it's superseded by the full per-inquiry `_runs.md`, though a manifestation pointer in `_route.md` can remain as the index's legal breadcrumb. (ii) *The selections file's designed role (Pipeline finding)* — RE-TESTED, CONFIRMED but SCOPED: it remains valid as object-B (the Selector's forward queue the Dispatcher fires from) — but it is NOT the per-route done-log; the prior rlu finding mis-borrowed it for that. The Pipeline design itself stands; its application-as-run-log was the error. (iii) *routelister spec (two run modes; `_route.md` excludes process state; maps archived)* — RE-TESTED, CONFIRMED and LOAD-BEARING: the two run modes are the literal object-A/B cleavage; the archiving fact forces `_runs.md` to root; the process-state exclusion forces it to be a NEW file not `_route.md`.

**Definitional / Frame-exit Completeness.** Gating fires on "run-state," "the file," "project-level." **"Run-state":** (a) one object — REJECTED (the conflation that caused the pain); (b) **two objects: a local per-route done-log + a project forward-queue** — COMMITTED; (c) three+ — the overview is a third ROLE but a derived view, not a maintained object. **"The file the user looks at for run-state":** (a) the central selections — REJECTED for the local question (the lookup); (b) **the inquiry's `_runs.md`** — COMMITTED (local source of truth); (c) the archived map — REJECTED (archived/regenerated). **"Project-level":** (a) the source of truth — REJECTED (centralizing truth caused both objections); (b) **a derived overview (for done) + a maintained queue (for forward-intent, deferred)** — COMMITTED.

**Phase / Calibration-State.** The placement verdict is design-level and forced by structural facts (archiving, the spec, the access-pattern split) — HIGH confidence. The `_runs.md` exact format is sketch-level (gated, like the selections schema). Whether to amend vs re-scope the prior finding is a small process choice (flagged).

---

## SV3 — Multi-Perspective Understanding

Two reframes stabilize. First: **"run-state" was one word for two objects with two scopes** — the per-route RUN-LOG (local; the question is always asked standing in one inquiry's field) and the Selector's WORKING-QUEUE (project; a cross-inquiry forward portfolio). The user is right about the first, the prior finding about the second; the dispute was a conflation, not a contest. Second: **the prior finding's actual error was making a project file the SOURCE OF TRUTH** — flip to per-inquiry-source + a derived project view, and both the 2000-lookup and the reference-fragility objections dissolve at once (they are properties of querying centralized truth for local facts), while the project-wide overview survives as a regenerable projection. The winning shape: a root-level `_runs.md` per inquiry (the user's sibling-file, corrected for archiving), the overview derived on demand, and the central queue deferred to the Dispatcher.

---

## Phase 3 — Ambiguity Collapse

#### Ambiguity A1: Is "run-state" one object or two?

**Strongest counter-interpretation:** it's one thing — "what's the status of each route" — and one file should hold it; splitting is over-engineering.

**Why the counter fails (structural grounds):** the two have different temporal directions and different readers with different access patterns. The per-route DONE-log is backward-looking, read locally by a human standing in one inquiry ("what's left in THIS field?"). The Selector's QUEUE is forward-looking admitted-intent, read project-wide by the (future) Dispatcher to decide what to fire next. A single file serving both forces the local reader to scan the project portfolio (the user's exact pain) and forces the queue to carry inert done-rows. They are one noun ("run-state") over two objects; the pain is the proof.

**Confidence:** HIGH. **Resolution:** **two objects** — the per-route RUN-LOG (local) and the Selector's WORKING-QUEUE (project) — plus a derived overview as a third (view, not object). **No longer allowed:** treating "run-state" as a single artifact; answering the local question from a project file.

#### Ambiguity A2: Where is the per-route run-log's source of truth — per-inquiry or central?

**Strongest counter-interpretation:** central (the prior finding) — one place to look is simpler, and the future Dispatcher wants it centralized anyway.

**Why the counter fails (structural grounds):** the local question ("is this inquiry's route run?") is asked while standing in the inquiry folder; a central source-of-truth forces an O(all-entries) scan + a folder-filter for an O(routes-here) fact (the 2000-entry objection — real), and makes correctness depend on stable folder references (the move/rename objection — real). Per-inquiry source-of-truth answers the local question locally and carries its truth inside the folder. The Dispatcher's need is object-B (the forward queue), not this done-log — so "the Dispatcher wants it central" conflates A with B again.

**Confidence:** HIGH. **Resolution:** **the per-inquiry file is the source of truth** for the run-log (object-A); the project-wide done-view is DERIVED from it. **No longer allowed:** a central done-log as source of truth; the lookup; reference-fragility.

#### Ambiguity A3: Where exactly does the per-inquiry file live, given archiving?

**Strongest counter-interpretation:** literally next to routelister.md (the user's words), in the inquiry folder.

**Why the counter fails (structural grounds):** routelister.md is moved to `docarchive/` at CONCLUDE — a sibling placed beside it is either archived too (leaving the inquiry root with no run-state) or orphaned from the map. The file must STAY at the inquiry root. The only root-level living files are the underscore state-class ones (`_state.md`, `_branch.md`, `_route.md`); `_route.md` itself can't hold process state (spec). So the run-log is a NEW underscore file at the inquiry root.

**Confidence:** HIGH. **Resolution:** **a root-level underscore state-class file (working name `_runs.md`)**, sibling to `_route.md`/`_state.md`, rlu-owned, never archived. **No longer allowed:** a sibling of the archived map; storing run-state in `_route.md`.

#### Ambiguity A4: Does the project file disappear, or keep a (different) role?

**Strongest counter-interpretation:** kill the project file entirely — per-inquiry files + a derived view cover everything.

**Why the counter fails (structural grounds):** the Selector's working-queue (object-B) is genuinely project-level and forward-looking — the Dispatcher fires admitted-intent from across inquiries; that's a maintained cross-inquiry artifact by nature, not a derived view (you can't derive future intent from past done-logs). It is a DIFFERENT object from the done-log, deferred until the Dispatcher is real — but not abolished. The project file's done-log ROLE is what's removed (becomes the derived overview); its queue role survives, scoped and deferred.

**Confidence:** HIGH. **Resolution:** **three roles** — object-A done-log (per-inquiry, source of truth, new now); object-B forward queue (project, maintained, deferred to the Dispatcher); the done-overview (project, DERIVED, on-demand). The prior finding fused all three. **No longer allowed:** fusing the done-log into the queue; treating the queue as derivable.

#### Ambiguity A5: Does the prior finding already fix the lookup (the user's explicit question)?

**Strongest counter-interpretation:** yes — it added a per-inquiry ↗ pointer in `_route.md`, which IS local.

**Why the counter fails (structural grounds):** the ↗ pointer is a partial mitigation, not a fix: it is keyed to CONCEPTS in the index (not the route-map's ordinals), and it is a bare "engaged" breadcrumb, not full run-state (no status/outcome/which-of-the-10). It tells you a concept was taken up; it does not answer "what's the run-state of this inquiry's field." So the local question still falls back to the central file. The prior finding KNEW locality mattered (hence the pointer) but kept the central file as the source of truth — the inverse of what the access pattern wants.

**Confidence:** HIGH. **Resolution:** **partially — not a full fix.** The honest verdict: the ↗ pointer half-helps; the per-inquiry `_runs.md` is the full answer (and the ↗ pointer can remain as the index's legal breadcrumb pointing at the run-log/artifacts). **No longer allowed:** claiming the prior finding already solved the local lookup; dismissing the user's catch.

#### Ambiguity A6: Amend the prior finding, or leave it?

**Strongest counter-interpretation:** leave it; this finding supersedes it implicitly.

**Why the counter fails (structural grounds):** the prior finding's Correction-1 + its rlu v1 sketch (write-target = central selections.md) are now partially-invalid; leaving them unmarked means the next reader builds rlu against the superseded target. The corpus's own corrigendum discipline (impacted_by:) exists for exactly this.

**Confidence:** HIGH. **Resolution:** **amend** — add `impacted_by:` + a corrigendum banner to the prior finding (its rlu write-target → the per-inquiry `_runs.md`; the central file's role → the deferred queue + the derived overview), on the user's go. **No longer allowed:** leaving the prior finding's superseded write-target unmarked.

---

*Load-bearing concept test:* **"the two objects (run-log / working-queue)"** — the spine; flag. **"source-of-truth (per-inquiry) vs derived-view (overview)"** — the dissolving move; flag. **"`_runs.md` at the inquiry root"** — the corrected sibling; flag. **"the object/scope/run-mode cleavage"** — flag. **"three roles (A done-log / B queue / derived overview)"** — flag. All defined in the finding.

*Specific-vs-pattern cue:* the user's specific file (`routelister_updates.md`) and objection (2000 entries) anchor the general placement pattern (source-of-truth by scope); both served.

---

## SV4 — Clarified Understanding

Now clear. **The dispute dissolves: you're both right, about different objects.** "Run-state" is two things — the per-route **RUN-LOG** (local; the user's instinct) and the Selector's **WORKING-QUEUE** (project; the prior finding's instinct) — plus a derived **overview** (third role, a view). The prior finding's error was making a project file the SOURCE OF TRUTH and fusing all three into it; the fix is **per-inquiry source-of-truth + a derived project view**, which dissolves the 2000-lookup and the reference-fragility objections at once. Concretely: rlu writes a root-level **`_runs.md`** per inquiry (the user's sibling-file, corrected because routelister.md is archived and `_route.md` is spec-bound), append-only; the local question is answered there; the project overview is `rlu list` assembling all `_runs.md` on demand; the central queue (object-B) stays deferred behind the Dispatcher gate. The prior finding gets a corrigendum. Only `_runs.md` is new-now. Dead: run-state-as-one-object; central-as-source-of-truth for the done-log; the literal map-sibling; killing the project file entirely; "the prior finding already fixed it."

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** two objects + a derived third (A1, A4); per-inquiry source of truth for the run-log (A2); the root-level `_runs.md` (A3); the prior finding partially-fixed-not-fully (A5); amend the prior finding (A6); the source-of-truth/derived-view reframe (KI2); the object/scope/run-mode cleavage (KI4); only-A-ships-now (KI7).

**Eliminated:** run-state-as-one-file; central done-log as source of truth; the 2000-lookup; reference-fragility; the literal map-sibling; status in `_route.md`; killing the project file; "already fixed."

**Remaining freedom (Innovation's lanes):** `_runs.md`'s exact format (columns; append-line shape; how "current state of route #7" is read; the cross-inquiry-route home convention); whether the ↗ `_route.md` breadcrumb stays or goes; the overview's exact form (`rlu list` over all `_runs.md`? a cached compile?) and its trigger; the corrigendum's wording; how rlu's v1 (from the prior finding) changes its write-target.

---

## SV5 — Constrained Understanding

The problem is bounded: deliver the placement re-decision — **per-inquiry `_runs.md` as the run-log's source of truth (the user's proposal, corrected); the project-wide done-view as a derived projection; the Selector's queue as a separate, deferred project object** — with (i) the explicit plus/minus table, (ii) the honest "partially, not fully" verdict on the prior finding's lookup, (iii) the inquiry-level/project-level resolution (= the object/scope cleavage), (iv) `_runs.md`'s concrete shape reconciled with archiving + the spec + rlu, and (v) the prior-finding corrigendum — every build/edit on the user's go.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check:* monotonic; the one tension (does the project file survive?) resolved by the object-A/B split (its done-log role dies, its queue role survives-deferred). No patch-loop.

*Meta-inspection:* H2 — frame-exit ran on run-state / the-file / project-level. H3 — the user's proposal AND objections are credited as largely correct (object-A locality, the regex-discovery, both objections valid), and the prior finding is revised, not defended — derived, not deferred. H4 — five coined terms flagged. H8 self-reference — the system revising its OWN day-old finding again; guards: the revision is forced by the user's checkable objections (the lookup, the archiving fact), the prior finding's correct part is preserved (object-B's queue role), and the verdict credits the user's instinct rather than the corpus's prior text.

## SV6 — Stabilized Model

**The placement re-decision:**

1. **"Run-state" is TWO objects (+ a derived third):**
   - **Object-A — the per-route RUN-LOG** (local): "was this route, in this inquiry's map, engaged — and what came of it?" Source of truth = a **root-level `_runs.md` per inquiry**.
   - **Object-B — the Selector's WORKING-QUEUE** (project): the cross-inquiry forward portfolio of admitted-intent the future Dispatcher fires from. A maintained project artifact (the Pipeline finding's selections file, scoped to forward-intent) — **deferred** until the Dispatcher is real.
   - **The done-OVERVIEW** (project, DERIVED): "what's been run across the project" — a regenerable projection assembled from all `_runs.md` (e.g. `rlu list` on demand), NOT a maintained file.

2. **The dissolving move — source-of-truth vs derived-view:** the prior finding's error was making a project file the source of truth for the done-log. Per-inquiry files are the truth; the project view is derived. This takes the winning column of both sides: **locality + move-robustness** (per-inquiry) AND **the project-wide overview** (derived) — and dissolves both the 2000-lookup (local question answered locally) and the reference-fragility (truth lives in the folder; the view self-heals on regeneration).

3. **`_runs.md` — the corrected sibling-file:** at the **inquiry root** (NOT next to routelister.md, which is archived; NOT inside `_route.md`, which the spec keeps process-free); a new underscore state-class file beside `_route.md`/`_state.md`/`_branch.md`; **rlu-owned, append-only** (the user's instinct — crash-safe, audit-friendly; "current state of route #7" = the last line mentioning it, trivial at ~10 routes); never archived. routelister writes neither it nor anything else differently — its identity is untouched.

4. **The plus/minus table** (the explicit weighing): per-inquiry wins locality (O(routes-here) vs O(all)) and move-robustness (folder-membership = key); central wins the O(1) project read and the queue-role — and the source-vs-derived reframe lets the design TAKE BOTH (per-inquiry truth + derived view). The only residual costs — assembling the overview (a scan, cacheable) and homing cross-inquiry routes (the row lives in the originating inquiry's `_runs.md`, pointing at where the work landed) — are small and named.

5. **The inquiry-level/project-level routelister distinction = the cleavage:** concept-target/inquiry-level routelister ↔ object-A (`_runs.md`); root/project-space routelister (the Navigator) ↔ object-B (the project queue). The user's "project file for project-level, in-folder for inquiry-level" is exactly right.

6. **The prior-finding verdict:** Correction-1 was **partially right, partially over-reached** — right that run-state needs a home and that "what's been run project-wide" is a real question (→ the derived overview); over-reached in making a central file the SOURCE OF TRUTH for the local done-log (the ↗ `_route.md` pointer half-mitigated but didn't fix the local lookup — it's keyed to concepts, a bare breadcrumb). Amend it (`impacted_by:` + corrigendum): rlu's write-target → `_runs.md`; the central file's role → the deferred queue + the derived overview.

7. **What ships now:** only **object-A (`_runs.md`)** — the lightweight per-inquiry file the user asked for. Object-B stays deferred (the Dispatcher gate); the overview is on-demand (`rlu list`). The reframe adds no build cost now; it vindicates the user's wariness about the central file by showing it wasn't needed for the immediate need.

**Difference from SV1:** SV1 had the two-objects + reframe intuitions; SV6 has the six collapses done — the conflation named and split, the source-vs-derived move proven to dissolve both objections, the sibling-file corrected to a root `_runs.md` on the archiving+spec facts, the project file's queue-role preserved-but-deferred (not killed), the prior finding re-tested honestly (partially, not fully), and the build scoped (only A now).

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 8 perspectives (Frame-exit on run-state/the-file/project-level; Phase/Calibration on design-vs-format levels); saturating.
- **Ambiguity resolution ratio:** 6/6 collapsed, all HIGH; 0 silently open.
- **SV delta:** STRUCTURAL — a placement dispute became a two-objects-plus-derived-view architecture with a forced file location and a prior-finding corrigendum.
- **Anchor diversity:** all 5 anchor types from 3 source classes (the prior finding; the Pipeline selections design; the routelister spec's two run modes); the user's proposal AND objections credited, the prior finding revised on checkable facts.
- **Failure modes:** Status Quo Bias — the day-old finding is revised, not defended. Premature Stabilization — the one-object, central-source, kill-the-project-file, and already-fixed counters all got full force. Clean Resolution Trap — the residual costs (overview-assembly, cross-inquiry homing) are named, not hidden; the queue's survival-but-deferral kept its real complexity. Anchor Dominance — the reframe wins on the access-pattern logic, not on either party's authority. Self-Reference — guarded (the user's checkable objections drive the revision). None firing.

**Next discipline input:** Decomposition should partition the deliverable (the two-objects+derived-view model / the source-vs-derived reframe / the `_runs.md` shape / the plus-minus table / the prior-finding re-test + corrigendum / what-ships-now) with interfaces, honoring "weigh correctly", the no-mutation + no-2000-scan + no-fragile-ref bounds, and the user's authorship of object-A.
