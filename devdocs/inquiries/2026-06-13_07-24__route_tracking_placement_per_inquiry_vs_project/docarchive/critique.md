# Structural Critique — route_tracking_placement_per_inquiry_vs_project

## User Input

devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/_branch.md

**Inputs consumed:** surfacing.md (10 regions), sensemaking.md (SV6 + 6 collapses + the re-tests), decomposition.md (5 pieces), innovation.md (5 ACTIONABLE + assembly + 3 kills + 3 special-attention items).

---

## Phase 0 — Dimension Construction

| # | Dimension | Weight | Source |
|---|---|---|---|
| D1 | **Weighed-correctly** — both the user's proposal and the prior finding credited/corrected on merits, not deference | CRITICAL | the explicit meta-ask |
| D2 | **Dissolves the objections** — the verdict actually kills the 2000-lookup AND the reference-fragility, provably | CRITICAL | the user's two objections |
| D3 | **Simplicity-in-effect** — the design is not heavier to USE than one file (over-engineering guard) | HIGH | special-attention (a) |
| D4 | **Structural correctness** — respects archiving + the routelister spec; no mutation of originals | HIGH | the facts |
| D5 | **Prior-coherence** — the corrigendum + the downstream re-test hold without breaking SUSTRALL gate logic | HIGH | special-attention (b) + the Synthesis Trigger |
| D6 | **Guard integrity** — the irreversible-window guard survives the distribution of truth | MED-HIGH | special-attention (c) |

**Frame-premise test (fired on the three special-attention premises):**
- **Premise (a): two-objects + a derived-view is simpler-in-effect than one file.** What-if-wrong: conceptually it's three names; a user just wanting "track my runs" now faces a model. Resolution: the test is USE-cost, not concept-count. Day-1 use = `rlu start`/`rlu done` writing ONE local file + `rlu list` to view — the user touches one file and two commands, same as a one-file design, but the local read is O(10) not O(all). The "two objects + derived view" is the EXPLANATION, not the interface; object-B doesn't exist yet. So simpler-in-effect holds — PROVIDED the finding presents it use-first (one file, two commands) and the model second. Routed to the presentation.
- **Premise (b): re-pointing the launch checklist's "Turn 1 = the central selections file" to per-inquiry `_runs.md` + assembled view holds without breaking the gate logic.** What-if-wrong: the SUSTRALL gates (L2 at ~10 recorded turns; the Dispatcher firing from the queue) may DEPEND on a single central ledger; distributing it could break "count the turns" or "fire from the queue." Resolution: the L2 gate needs ~10 recorded TURNS countable — the assembled view counts them exactly as well as a central file (it IS the count, derived). BUT the Dispatcher fires from object-B (the forward QUEUE), which this verdict keeps as a maintained project artifact — so the Dispatcher is unaffected (it never read the done-log). The one real subtlety: the launch checklist said "Turn 1 = create the selections file" as the climb's first recorded turn; under this verdict Turn 1 = create the project's first `_runs.md` row — STILL a single first traversal record (the pre-registration window still triggers on it). So the gate logic holds, but the checklist's wording must be re-pointed precisely (turn-COUNT = the assembled view; the QUEUE = object-B; the FIRST-record window = the first `_runs.md` anywhere). This is a real downstream amendment, not a break. Routed to K4.
- **Premise (c): the irreversible-window guard survives distributed truth.** What-if-wrong: the prior guard fired on "creating the central selections file" — a single detectable event; with truth distributed across many `_runs.md`, there's no single creation event to guard, so the native project's pre-registration window could be burned by ANY inquiry's first `_runs.md` with no guard firing. Resolution: this is the verdict's sharpest risk. The guard must re-attach to "the FIRST `_runs.md` created ANYWHERE in the project" — which rlu CAN detect (on `rlu start`/`done`, glob for any existing `_runs.md` in the project; if none AND a pre-registration program is declared/absent, fire the graded guard). It's detectable but requires a project-wide glob at first-run-log time (cheap, once). So the guard survives — but its trigger moves from "central file creation" to "first run-log anywhere," and that detection must be specified. Routed to K3/K4.

## Phase 1 — Fitness Landscape

- **Viable region:** per-inquiry `_runs.md` source-of-truth + derived `rlu list` view; use-first presentation; the surgical corrigendum; the guard re-attached to first-run-log-anywhere; object-B deferred.
- **Dead region:** a maintained central done-file (second drifting truth); status in `_route.md`; a sibling beside the archived map; the local question paying O(all); a guard with no trigger under distribution.
- **Boundary region:** the simplicity presentation (use-first vs model-first); the checklist re-pointing's precision (count vs queue vs window); the guard's first-run-log detection.
- **Unexplored (named):** `_runs.md`'s final format (gated); whether the assembled view ever needs caching (only at large N).

## Phase 2 + 3 — Adversarial Evaluation + Verdicts

### The conceptual core (K1)

**Prosecution:** the over-engineering worry (frame-premise a) — does the normalization/git framing dress a simple need in DB theory? **Defense:** the frames are EXPLANATORY (they show the user re-invented a known-correct pattern, which credits him); the USE is one file + two commands. Adopted: the finding leads use-first, frames second. The access-frequency argument (3G) and the cost-of-fusion (3F) are the load-bearing justifications, not the analogies.
**Verdict: REFINE.** Lead use-first; keep the frames as the "why it's principled" second layer.

### The plus/minus table (K2)

**Prosecution:** is the "who-asks/how-often" column the real decider, or a thumb on the scale toward per-inquiry? **Defense:** it's the honest decider BECAUSE truth-placement by access-frequency is a general principle (put truth where the common query is); and the table still shows central's genuine wins (O(1) project read, the queue role) — the reframe then takes both columns rather than declaring per-inquiry the blanket winner. Balanced.
**Verdict: SURVIVE.**

### The `_runs.md` shape (K3)

**Prosecution:** (a) the guard's first-run-log detection (frame-premise c). (b) cross-inquiry pointer-pair — is "the row lives in the originating inquiry" always unambiguous? (a route surfaced in X, but the user is sitting in Y running it — which folder?). **Defense:** (a) adopted — rlu globs for any `_runs.md` in the project on first run-log; the guard fires there; specified, cheap. (b) genuine ambiguity — resolved by a rule: the run-log row lives where the WORK happens (the inquiry the run produces / the session's cwd inquiry), with a pointer back to the source map; "which field offered this route" is answered by the source-map reference on the row, not by the row's location. So location = where-it-ran; reference = where-it-came-from. Cleaner than "originating inquiry."
**Verdict: REFINE.** The guard's glob-detection specified; the row lives where-it-RAN (source-map ref points back), not "the originating inquiry."

### The prior-finding re-test + corrigendum (K4)

**Prosecution:** the checklist re-pointing (frame-premise b) — does it break the gate logic? **Defense:** adopted with precision — the corrigendum/flag must separate three things: turn-COUNT (= the derived assembled view, counts fine), the QUEUE (= object-B, maintained, unaffected — the Dispatcher never read the done-log), and the FIRST-RECORD window (= the first `_runs.md` anywhere, the guard re-attached). The launch-checklist re-test is FLAGGED (not performed here — it's that finding's to re-run), with these three separations named so it's actionable. The surgical-corrigendum scope (write-target + central-role only; 90% survives) holds.
**Verdict: REFINE.** The checklist re-test flag carries the three-way separation (count / queue / window) so the downstream inquiry can act on it precisely.

### What-ships-now + the migration (K5)

**Prosecution:** does "only object-A ships" leave the project-wide view unavailable until someone builds `rlu list`? **Defense:** `rlu list` was already in the prior finding's rlu v1 — re-aiming it to scan all `_runs.md` is a small change, not new work; and the local question (the common one) works from day one without it. The migration shrinking (crowboy status lines move DOWN into per-folder `_runs.md`) is verified smaller than the prior finding's "seed a central file."
**Verdict: SURVIVE.**

### The assembly

**Prosecution:** post-refinement coherence — use-first presentation + where-it-ran rows + the three-way checklist separation + the glob-guard: consistent? Checked: use-first doesn't change the model; where-it-ran + source-ref is cleaner than originating-inquiry and consistent with the pointer-pair; the three-way separation is exactly what keeps the gate logic intact; the glob-guard is the distributed analogue of the central-creation guard. Consistent.
**Verdict: SURVIVE.** Consolidation note: every refinement either moved a JUSTIFICATION to the right layer (use-first), SHARPENED a rule (where-it-ran), or SPECIFIED a mechanism the distribution made non-obvious (the glob-guard; the count/queue/window separation) — the core verdict (per-inquiry truth + derived view) emerged untouched, and the distribution's one genuine cost (the guard needs a glob) is now paid explicitly.

## Phase 3.5 — Assembly Check

No new emergent candidate. Innovation's five emergents survive, three refined (use-first presentation; where-it-ran rows; the three-way checklist separation); the normalization/git framing and the migration-shrank stand.

## Phase 4 — Coverage + Convergence

**Accumulator:**
- Evaluation log: 5 candidates + assembly across D1–D6; all three special-attention items adjudicated (over-engineering → use-first; checklist → three-way separation, holds; guard → glob-detection on first-run-log-anywhere).
- Kill record: none new; innovation's three stand (maintained-central-done-file; 4th metaphor; wholesale-supersede).
- Refinement record: **use-first presentation** (one file + two commands lead; the normalization/git frames are the second-layer "why"); **where-it-RAN row placement** (source-map ref points back; cleaner than "originating inquiry"); **the glob-guard** (the irreversible-window guard re-attaches to "first `_runs.md` anywhere," detected by a project-wide glob at first run-log — the distribution's one real cost, paid); **the three-way checklist separation** (turn-COUNT = derived view / QUEUE = object-B unaffected / FIRST-RECORD window = first run-log — so the downstream re-test is actionable and the gate logic provably holds). All in-frame.
- Coverage map: viable fully adjudicated; boundary resolved (presentation; checklist precision; guard detection); dead empty; unexplored named.
- Convergence trend: stable.
- Mechanism-independence: validated — the verdict rests on the access-pattern split + archiving/spec facts + the prior findings; the over-engineering, checklist-break, and guard-evaporation adversaries each cut against and were absorbed (the guard one added a real mechanism).

**Signal: TERMINATE — ranked survivors:**
1. **The conceptual core, refined** — two objects (RUN-LOG local / QUEUE project) + a derived overview; source-of-truth/derived-view; presented use-first (one file, two commands), justified by access-frequency + cost-of-fusion, framed (second layer) as normalization + git-log.
2. **The `_runs.md` shape, refined** — root-level underscore file (the `_route.md` pattern); append-only; self-documenting header; rows live where-it-RAN with a source-map back-reference; the graded window guard re-attached to the project's first run-log (glob-detected); rlu-owned.
3. **The prior-finding re-test + surgical corrigendum, refined** — partially-right/over-reached; `impacted_by:` + banner (write-target → `_runs.md`; central role → deferred queue + derived overview); the launch-checklist re-test FLAGGED with the count/queue/window three-way separation.
4. **The plus/minus table** (SURVIVE) — 7 axes + who-asks/how-often + take-both-columns.
5. **What-ships-now + migration** (SURVIVE) — only object-A; overview = `rlu list` scan-all; migration smaller (down into folders); scales O(10)-local; localized rot.

## Convergence Telemetry

- Dimension coverage: 6/6; both critical dimensions per candidate
- Adversarial strength: **STRONG** — the guard-evaporation attack found the distribution's one real cost (no single creation event) and forced an explicit mechanism (the first-run-log glob); the checklist-break attack forced the three-way separation that proves the gate logic survives; the over-engineering attack moved the framing to the right layer (use-first)
- Landscape stability: STABLE
- Clean SURVIVE exists: YES (the table; the migration; the assembly)
- Failure modes: none firing — Rubber-Stamping (the verdict's own conveniences — the clean reframe, the "simpler" claim — were prosecuted; the guard cost was found, not waved away); Self-Reference Collapse (revising the corpus's own day-old finding — guarded: the user's checkable objections drive it, 90% of the prior finding is preserved, and the corpus's normalization pattern is invoked as explanation-of-the-user's-instinct not as authority); Nitpicking (each refinement guards a critical dimension); Axis Absence (the guard-under-distribution risk caught at the irreversibility plane)

**Overall: PROCEED**

**Next step input (for ITERATION COMPLETE):** the placement re-decision is answered — you're both right about different objects (per-route RUN-LOG = local = the user's instinct; Selector WORKING-QUEUE = project = the prior finding's, deferred); per-inquiry `_runs.md` is the run-log's source of truth and the project overview is a derived `rlu list` view (dissolving the 2000-lookup and the fragility); presented use-first (one file, two commands); the prior finding gets a surgical corrigendum and the launch checklist a flagged three-way (count/queue/window) re-test; the window guard re-attaches to the project's first run-log; only `_runs.md` ships now — every edit on the user's go.

## Convergence Telemetry — Output: PROCEED
