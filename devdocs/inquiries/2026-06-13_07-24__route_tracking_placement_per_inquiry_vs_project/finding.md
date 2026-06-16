---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md
---
# Finding: Run-State Lives Per-Inquiry — `_route_engagements.md` Is the Source of Truth, the Project View Is Derived (You and the Prior Finding Were Both Right, About Different Objects)

## Question

From `_branch.md`: re-decide WHERE route run-state is recorded — the user's per-inquiry sibling update file (append-only, never touching the original) vs the prior finding's per-project `selections.md` — **weighing the pluses and minuses correctly**, re-testing whether the prior finding actually has the **2000-entry lookup flaw** the user fears, and resolving the **inquiry-level vs project-level routelister** distinction.

## The concepts this finding uses (read this first)

- **A routelister run** produces a **route-map** (`routelister.md`, the list of typed routes) and updates the **route index** (`_route.md`). In an `/aMVLwr` inquiry the route-map is **archived to `docarchive/` at CONCLUDE** and **regenerated** if routelister runs again; `_route.md` is the living per-inquiry file at the inquiry root, and its spec forbids it from holding *process/control-flow state* (statuses, verdicts).
- **Run-state** = the answer to "which routes have I actually run, and what came of them?"
- **The prior routelog finding** (`devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md`) designed `routelog`, a small skill that records run-state, and decided (its "Correction-1") that the marks go in a **per-project `selections.md`** (one file for the whole project) plus a small "↗ taken-up" pointer in each `_route.md`. **This finding revises that placement decision** — the rest of routelog (the mechanism, the two `start`/`done` moments, its NOT-list) is unchanged.
- **The selections file** (from the Pipeline Architecture finding) was designed as the **Selector's working-queue** — a project-level list of routes *admitted to be run*, that a future automated Dispatcher fires from.
- **The two routelister run modes** (from its spec): **concept-target / inquiry-level** (the per-inquiry `/aMVLwr` exhaust) and **root / project-space** (a future whole-project sweep) — the literal basis for "inquiry-level vs project-level routelisters."

## Finding Summary

- **You and the prior finding were both right — about two different things that the word "run-state" was hiding.** "Run-state" is **two objects** with two natural scopes: **(A) the per-route RUN-LOG** — "was *this* route, in *this* inquiry's map, run, and what came of it?" — which is intrinsically **local** (you always ask it while standing in one inquiry); and **(B) the Selector's WORKING-QUEUE** — "across the whole project, what have I admitted to run that the Dispatcher will fire?" — which is intrinsically **project-level**. The prior finding's central `selections.md` tried to be both. **Your lookup pain is the exact symptom of asking object-A's local question of an object-B project file.** You're right about A (local); the prior finding is right about B (project) — it was a conflation, not a contest.
- **The verdict: run-state's source of truth is PER-INQUIRY, exactly as your instinct said.** routelog writes a small per-inquiry file; the local question ("what's un-run in this inquiry's field?") is answered right there, reading ~10 lines, never a project-wide scan.
- **The project-wide view still exists — but as a DERIVED view, not a maintained second file.** "What's been run across the whole project" is assembled on demand by scanning the per-inquiry files (`routelog list` with no argument globs them all). This is the move that dissolves *both* your objections at once: the **2000-entry lookup disappears** (you never query a project file to learn a local fact), and the **reference-fragility disappears** (the truth lives inside each inquiry folder, so moving or renaming a folder carries its run-state with it; the derived view simply re-scans and self-heals).
- **Your sibling-file instinct is right; one detail is corrected by a fact you can check.** You said "a `routelister_updates.md` next to `routelister.md`." But `routelister.md` is archived into `docarchive/` at CONCLUDE — a literal sibling would be archived too. The living per-inquiry file that stays at the inquiry root is `_route.md`, and the spec forbids process-state inside it. So the run-log is a **new underscore file at the inquiry root — `_route_engagements.md`** — sitting beside `_route.md` / `_state.md` / `_branch.md`. It inherits exactly the properties you wanted: regex-discoverable across folders, folder-membership tells you the inquiry, never archived.
- **Your "project file for project-level routelisters, in-folder for inquiry-level" is exactly the right cleavage.** It maps one-to-one onto the two objects: the inquiry-level routelister (the per-`aMVLwr` exhaust) → object-A's `_route_engagements.md`; the future project-level routelister (the Navigator sweep) + the Selector's queue → object-B's project file. Three distinctions, one line.
- **Does the prior finding already fix the lookup? Partially — not fully.** It DID add a per-inquiry breadcrumb (the ↗ pointer in `_route.md`), so it knew locality mattered. But that pointer is (a) keyed to *concepts* in the index, not to the route-map's routes, and (b) a bare "engaged" mark, not full run-state. So for "is route #7 run?" it half-helps; for "what's the run-state of this whole field?" you still fell back to the central file. Your catch is valid; `_route_engagements.md` is the full answer.
- **What this is, in one line: database normalization.** Per-inquiry `_route_engagements.md` files are the normalized truth (local, no duplication); the project overview is a derived view (regenerable, never a parallel truth). You re-invented this from filesystem pain — which is the strongest sign it's right.
- **Cost honesty:** it is **not** more to use than one file — day-1 use is one file + two commands (`routelog start`, `routelog done`) + `routelog list` to view, same as before, but the local read is cheap. Only **one new file** exists now (`_route_engagements.md`); the project queue (object-B) stays deferred until the Dispatcher is real; the overview is a command, not a maintained file. The count didn't go up — the conflation went down.

## Finding

*Context: routelister enumerates routes per inquiry; the prior finding gave routelog the job of recording which got run, and put that record in a per-project file. You pushed back — a project file is wrong for the local "what's run here?" question (the 2000-entry scan; broken references on folder moves), and per-inquiry update files feel right. This finding weighs that, and you're correct — with one structural correction and one clarifying reframe.*

### 1. The dissolving move: two objects, one of them local

The dispute looked like "per-inquiry vs project-level," a contest with a winner. It isn't — "run-state" is two different things:

- **Object A — the per-route RUN-LOG.** Backward-looking: *was this route, in this inquiry's field, run, and what came of it?* Its reader is a human (or the Selector) **standing inside one inquiry**, asking a local question. Natural scope: **per-inquiry.**
- **Object B — the Selector's WORKING-QUEUE.** Forward-looking: *across the project, what routes are admitted to run, that the Dispatcher fires from?* Its reader is the (future) Dispatcher, cross-inquiry. Natural scope: **project-level.**

The prior finding's `selections.md` fused them. The fusion is exactly why your local question hurt: you were asking object-A's local question ("is *this* route run?") of an object-B project file, which forces a whole-file scan (your 2000-entry objection) and makes correctness depend on stable folder references (your move/rename objection). Separate them and each sits at its natural scope. **You were right about A; the prior finding was right about B.**

### 2. Source of truth vs derived view (why both your objections vanish)

The prior finding's real error was not "a project file exists" — it was making the project file the **source of truth** for the local run-log. Flip it:

- **Per-inquiry `_route_engagements.md` files are the source of truth.**
- **Any project-wide view is derived** — assembled on demand by scanning the per-inquiry files, never a separately-maintained file.

This is database normalization (normalized tables + a materialized view) or `git log --all` (per-subdir history, assembled on read — never a global changelog everyone edits). Both your objections are properties of *querying a centralized source-of-truth for a local fact*; remove the centralization-of-truth and:
- **The 2000-entry lookup is gone** — the local question is answered in the inquiry folder, reading ~10 lines; you never open a project file to learn a local fact.
- **Reference-fragility is gone** — the truth lives *inside* the folder; move or rename the folder and its run-state moves with it; the derived view re-scans and self-heals (no stored folder-references to break).
- **The project-wide overview survives** — as the derived view (the "compile into a what's-going-on" you granted might be valuable), with none of the costs.

### 3. The file: `_route_engagements.md` at the inquiry root

Your "sibling next to routelister.md" is right in spirit, wrong in one checkable detail: `routelister.md` is archived to `docarchive/` at CONCLUDE, so a literal sibling lands in the archive (or orphans from the map). The fix:

- **Location:** a new underscore file at the **inquiry root** — named **`_route_engagements.md`** (chosen over the more generic `_runs.md`: binding the name to *routes* keeps it from colliding with test/CI/pipeline "runs," and "engagements" covers parked/decided-against routes too, not only runs — matching routelog's role as the route-engagement recorder) — beside `_route.md` / `_state.md` / `_branch.md`. It inherits the proven `_route.md` pattern: living (never archived), machine-discoverable by name (regex `_route_engagements.md` across folders), folder-membership = the inquiry's identity. routelister writes nothing differently; its identity is untouched; `_route.md` stays process-state-free per its spec.
- **Write discipline:** routelog-owned, **append-only** (your instinct — crash-safe, full history; "the current state of route #7" = the last line that mentions #7, a trivial scan at ~10 routes).
- **A self-documenting header** (mirroring `_route.md`'s) states its role: *"run-log for this inquiry's routes; append-only; routelog-owned; the source of done-records, not of decisions"* — so a future reader doesn't re-conflate it with the queue.
- **Contents (sketch; full format gated, like the selections schema):** route-ref (the map's ordinal or name) · status (in-flight / done / parked) · started/finished · artifact pointer · one-line outcome.
- **Cross-inquiry routes** (a route surfaced in inquiry X but run as inquiry Y): the row lives **where the work ran** (Y's `_route_engagements.md`), carrying a **source-map back-reference** to X's map. "Where did this route's work go" and "which field offered it" are both answered by pointer — no central join.

### 4. The project-wide view, and what stays deferred

- **The done-overview** ("what's been run across the project") = `routelog list` with no argument: glob all `_route_engagements.md`, assemble, print. Read-only, regenerable, **never a maintained file**. `routelog list <inquiry>` = just that folder's.
- **The Selector's working-queue (object B)** = the Pipeline finding's selections file, scoped to *forward-intent* — a genuinely project-level, maintained artifact the Dispatcher fires from. It stays **deferred** behind its existing gate (the first genuinely-wanted parallel run); it is NOT needed for the immediate "track what's run" need, which is object-A alone.
- **The window guard re-attaches.** The prior guard fired on "creating the central selections file" — one detectable event. With truth distributed, the irreversible pre-registration window (native project: the first traversal record must post-date the pre-registration file) must re-attach to **the first `_route_engagements.md` created anywhere in the project** — routelog globs for any existing `_route_engagements.md` on first run-log; if none and a pre-registration program is declared, it fires the graded guard. The distribution's one real cost, paid explicitly.

### 5. The plus/minus weighing (you asked for it correctly)

| Axis | who asks / how often | Per-inquiry `_route_engagements.md` | Central file |
|---|---|---|---|
| The local question ("what's un-run *here*?") | common (every time you sit in an inquiry) | O(~10), answered in the folder ✓✓ | O(all entries) + folder-filter ✗ (your 2000-entry pain) |
| Robustness to folder rename/move | whenever you reorganize | truth moves with the folder ✓✓ | stored references break ✗ |
| The project-wide question ("what's done overall?") | occasional | assemble-on-scan, O(N files), cacheable ~ | O(1) read ✓✓ |
| The Selector/Dispatcher queue role | when the Dispatcher is real | not its home ✗ | native home ✓✓ |

The verdict isn't "per-inquiry wins everything" — the central file genuinely wins the project-wide read and the queue role. **The source-vs-derived reframe takes the winning column of both:** per-inquiry truth (locality + robustness) AND a derived project view (the overview). Truth belongs where the *common* question is asked (per-inquiry); the occasional question gets a derived view. The only residual costs — assembling the overview (a cacheable scan) and homing cross-inquiry routes (where-it-ran + a back-reference) — are small and named.

## Inherited Commitments Re-test

- **Commitment:** the prior routelog finding's Correction-1 — run-state's marks live in a per-PROJECT `selections.md` (source of truth) + a bare ↗ pointer in each `_route.md`; "what has been run is a project-level question."
  - **Source:** `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` (§Correction-1, §option-map).
  - **Re-test status:** RE-TESTED — **found PARTIALLY INVALID; revised.** **Evidence:** the central-file-as-source-of-truth forces the local question (the common one) into a whole-file scan (the user's checkable 2000-entry objection) and makes correctness depend on stable folder references (the move/rename objection); the ↗ pointer half-mitigated (per-inquiry, but keyed to concepts and a bare breadcrumb, not full run-state). Revised: per-inquiry `_route_engagements.md` is the source of truth; the project view is derived. The prior finding's *partially-right* part — that "what's done project-wide" is a real question — survives as the derived overview. **The corrigendum is surgical:** only the write-target and the central file's role change; routelog's mechanism, two moments, NOT-list, and window guard are preserved.
- **Commitment:** the selections file's designed role — the Selector's cross-inquiry working-queue the Dispatcher fires from (five states, single-writer).
  - **Source:** `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md`.
  - **Re-test status:** RE-TESTED — **commitment confirmed, scope clarified.** **Evidence:** the selections file remains valid as **object B** (the forward-intent queue) — but it is NOT the per-route done-log; the prior routelog finding mis-borrowed it for that. The Pipeline design itself stands untouched; only its application-as-run-log was the error. Object B stays deferred behind the Dispatcher gate.
- **Commitment:** routelister's spec — `_route.md` at the inquiry root, never archived, excludes process state; route-maps archived; two run modes (root/project-space vs concept-target).
  - **Source:** `cognitive_harness/routelister/references/routelister.md`.
  - **Re-test status:** RE-TESTED — **confirmed and load-bearing.** **Evidence:** the archiving fact forces `_route_engagements.md` to the root (not a map-sibling); the process-state exclusion forces it to be a NEW file (not `_route.md`); the two run modes ARE the object-A/object-B (inquiry-level/project-level) cleavage the user named.
- **Commitment:** the launch checklist — "Turn 1 = create the central selections file" as the climb's first recorded turn; the L2 gate at ~10 recorded turns; the irreversible pre-registration window.
  - **Source:** `devdocs/inquiries/2026-06-11_16-45__sustrall_next_main_steps_and_alternatives/finding.md`.
  - **Re-test status:** RE-TESTED — **commitment confirmed, but a downstream re-test FLAGGED (not performed here).** **Evidence:** the gate logic survives the distribution, separable three ways: the turn-COUNT (the L2 gate) = the derived assembled view (counts exactly as well); the QUEUE (the Dispatcher's fuel) = object-B (unaffected — it never read the done-log); the FIRST-RECORD window = the first `_route_engagements.md` anywhere (the guard re-attached). What needs re-pointing is the checklist's *wording* ("Turn 1 = the central selections file" → "Turn 1 = the project's first `_route_engagements.md` row + the assembled view"). That is the checklist finding's own re-test to run, flagged below — not silently performed here.

Pattern-note: one partially-invalid-and-revised (the prior placement), two confirmed-with-scope/role clarified (the selections queue; routelister's spec made load-bearing), one confirmed-with-a-flagged-downstream-re-test (the checklist) — the revision is surgical and the SUSTRALL gate logic provably survives.

## Next Actions

### MUST

- **What:** Add `impacted_by:` + a corrigendum banner to the prior routelog finding (`devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md`) — its Correction-1 placement is revised here (write-target: central `selections.md` → per-inquiry `_route_engagements.md`; the central file's role → the deferred Selector-queue + the derived `routelog list` overview; routelog mechanism/moments/NOT-list/guard preserved).
  **Who:** this CONCLUDE (executed immediately after this finding).
  **Gate:** observable — done in this session.
  **Why:** unmarked, the prior finding presents a superseded write-target as current; the next reader would build routelog against the wrong file.

### COULD

- **What:** When routelog v1 is built (the prior finding's COULD), use the **revised write-target**: `routelog start`/`routelog done` append to the per-inquiry `_route_engagements.md` (not a central file); `routelog list` globs all `_route_engagements.md` for the derived view; the window guard globs for the first `_route_engagements.md` project-wide.
  **Who:** assistant, on your go. **Gate:** when you say build routelog. **Why:** this finding's operational payload.
- **What:** The crowboy migration, now **smaller**: move the hand-written status/progress lines DOWN into each inquiry's own `_route_engagements.md` (the pointer-halves stay in `_route.md`) — not OUT to a central file.
  **Who:** assistant, on your go. **Gate:** with/after routelog v1. **Why:** cures the live spec contradiction, more locally than the prior plan.

### DEFERRED

- **What:** Re-point the launch checklist's "Turn 1 = the central selections file" using the three-way separation (turn-COUNT = the derived view; the QUEUE = object-B; the FIRST-record window = the first `_route_engagements.md`).
  **Gate:** the checklist finding's own next re-test (or when Turn 1 is actually taken).
  **Why (if revived):** keeps the SUSTRALL gate wording precise; the gate logic already holds, only the wording lags.
- **What:** Object-B (the Selector's working-queue) + the assembled-view caching.
  **Gate:** object-B on the Dispatcher/parallel-want trigger; caching only at large N (it's a read-optimization, never a source of truth).
  **Why (if revived):** the genuinely-project-level forward queue; the scale knob.

## Reasoning

**Why "both right" rather than a winner.** The honest weighing the user asked for showed the central file genuinely wins the project-wide read and the queue role, while per-inquiry genuinely wins the local read and move-robustness — which is impossible if they're competing for ONE file's job, and trivial once you see they're TWO objects. The dissolving move (source-of-truth per-inquiry + derived project view) then captures both winning columns, so neither side is sacrificed.

**Why the user's objections are textbook, not quirks.** The 2000-entry lookup and the broken-references-on-move are the two canonical costs of denormalizing truth — exactly what database normalization and distributed version-control logs exist to avoid. The user reached the normalized design from filesystem pain; naming the pattern shows the instinct is principled.

**Why partially-invalid, not wrong.** The prior finding correctly identified the need, correctly built routelog, and correctly noted "what's done project-wide" is a real question. Its single over-reach was making a project file the *source of truth* for the *local* done-log (and the ↗ pointer was a half-measure). 90% survives; the corrigendum is surgical.

**Significant kills.** *A maintained central done-file alongside per-inquiry files* — killed: a second source of truth that drifts; the overview must be DERIVED. *Status words in `_route.md`* — killed by the spec. *A sibling next to the archived route-map* — killed by the archiving fact (→ root-level `_route_engagements.md`). *Killing the project file entirely* — killed: object-B (the queue) is genuinely project-level, just deferred and distinct. *Wholesale-superseding the prior finding* — killed: discards the 90% that's right.

**Self-reference handling.** This revises the corpus's own day-old finding (and invokes the corpus's normalization framing). Guards: the revision is driven by the user's *checkable* objections (open the crowboy `docarchive/` — the maps are there; the local lookup IS O(all) against a central file); 90% of the prior finding is preserved; and the normalization pattern is invoked as *explanation of the user's instinct*, not as authority over it. The verdict credits the user's proposal as the right one, corrected on one fact.

## Open Questions

### Monitoring

- **Does the local read stay cheap as the project grows?** Observable: per-inquiry `_route_engagements.md` stay ~10 rows regardless of project size (they should, by construction).
- **Does the derived `routelog list` view ever feel slow?** Observable: assembly time at large N — the trigger for the caching knob (deferred).

### Blocked

- The launch-checklist wording re-point — on that finding's own re-test.
- Object-B (the queue) — on the Dispatcher becoming real.

### Refinement Triggers

- **If cross-inquiry routes turn out common** — the where-it-ran + back-reference rule may need a richer convention (e.g., a bidirectional link); revisit when observed.
- **If the derived view is queried far more than the local read** — the access-frequency assumption flips, and a cached/maintained project view earns its place (re-run this weighing).

## Source Input

<details>
<summary>Raw user input for this finding (voice-dictated, transcribed roughly)</summary>

```text
[re-read the prior routelog finding in full, then:] … these inquiry folders give docarchive and routelister.md, which we agreed not to edit. But like the optimization where routelister moved from a per-inquiry session to the end of the loop, I want a way to UPDATE the routelisters in place, in their inquiry folders, not recreate/centralize them. One way: routelog marks RAN in routelister.md. Another: routelog creates a sibling routelister_updates.md in the same folder, append-only, never touching the original. The last inquiry suggested a PROJECT-LEVEL done-list, which I think may be a bad idea for inquiry-level routes (maybe good as a "what's going on" overview, or for project-level routelisters). Per-inquiry update files are regex-discoverable and folder-membership identifies the inquiry (no broken references on rename/move). But a 2000-entry project file would force me to read the whole thing to check if one inquiry's route is run — implausible. Maybe the last inquiry already fixes this, maybe there's a gap. Weigh it correctly.
```

</details>
