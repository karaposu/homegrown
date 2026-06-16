## User Input

`devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/_branch.md`

---

# Innovation — rlu behavioral contract

**Seed:** rlu's behavioral contract — should-do (lifecycle + invariants) / shouldn't-be (the P1/P2 scope fence) / scenarios (the 7 generative axes), governed by three pillars (P1 single-decider, P2 source-of-truth integrity, P3 mechanize-or-it-won't-happen).

**Methodology mode:** inherited = **Standard default** (elaborate into a build-ready contract; full coverage). Alternative named = **Contrarian-rethink / Framer-weighted** (overturn the adopted design). What follows under the alternative: it would treat the pillars as suspect and try to invalidate the two-moment model — useful adversarially, but the user asked to deepen a freshly-settled design, not overturn it. **Decision: default**, with Inversion deliberately applied to each load-bearing pillar (so commitments are challenged at the meta-decision pieces, not silently inherited).

---

## Phase 2 — Generate (7 mechanisms)

### Generators

**G1 — Combination**
- *(focused)* **rlu + version control (git).** `rlu done` ≈ `git commit` for a route; `_route_engagements.md` ≈ a per-folder append-only commit log; `rlu list` (no-arg) ≈ `git log --all`. The row IS a commit: immutable, dated, points at an artifact. → strengthens P2 and suggests the artifact-pointer can be a path or a commit ref.
- *(focused)* **rlu + library checkout/checkin.** `start` = check a route out of the field (in-flight); `done` = check it back in with the deliverable attached; the sweep = the overdue-checkout reminder. An unclosed checkout is *visible*, never lost. → grounds the two-moment lifecycle.
- *(contrarian)* **rlu + a pre-commit hook.** What if `done` *refuses* to close without an artifact pointer (or an explicit "no-artifact: reason")? An enabling constraint — see C2.

**G2 — Absence Recognition** *(both levels mandatory)*
- *(patch-level)* **No defined behavior when a route's home inquiry is renamed/archived while a row is in-flight.** Gap: does the in-flight row travel? → resolved by the where-it-ran + name-keyed source-map ref (see G4/Inv3).
- *(patch-level)* **No "dangling-ref" behavior** when a row references a route ordinal but the route-map regenerated and re-numbered. → the source-map ref must key on route **name/text**, not just ordinal.
- *(redesign-level — what's missing if built from scratch)* **A unified close-reason verb.** done / parked / superseded / abandoned are currently four separate notions; from scratch, rlu would have ONE "close with reason" transition whose reason-code is {done, parked, superseded}. Cleaner lifecycle (see Inv + assembly).
- *(redesign-level — already present in different form)* rlu is **not new capability** — the project already tracks run-state by hand (crowboy `_route.md` annotations). rlu *mechanizes an existing hand-practice*. Guards against over-claiming novelty; the demand is proven, not hypothesized.

**G3 — Domain Transfer** *(native + far, per source-domain guard)*
- *(native — software)* **Write-ahead log (WAL).** `rlu start` is the WAL entry written BEFORE the work, so a crash leaves a recoverable, replayable record. This IS the deep justification for the two-moment design + append-only: start = WAL-write; the sweep = WAL-recovery of un-committed entries.
- *(native — software)* **Event-sourcing / immutable ledger.** The engagement log is an event stream; "current state of route N" is a fold over the events (= the last row mentioning N); never mutate, only append. Justifies D1 (append-only) at the architecture level.
- *(far — medicine)* **Clinical-trial pre-registration.** The pre-registration window IS the trials-registry rule: register the protocol before collecting data, or the result is suspect. Grounds the window guard in an external, respected discipline — not a homegrown quirk.
- *(far — aviation)* **Pilot's logbook + pre-flight checklist.** `_route_engagements.md` = the append-only, per-flight, never-edited logbook; the work-contract `start` hands over = the pre-flight checklist. rlu = the route logbook.

**G4 — Extrapolation**
- *(focused)* If routelister + rlu succeed, the field of `_route_engagements.md` files becomes a **queryable run-history corpus** — and the Selector's future route-ranking can read "which routes actually paid off" from it. → rlu's logs become input to the Selector (RESEARCH FRONTIER — needs the Selector).
- *(contrarian — the scope-creep gradient)* Extend the "rlu collects a bit of outcome" trend: collect → summarize → evaluate → rank → choose. In N small steps rlu *becomes the Selector*. → the bright line (P1) must be defended **precisely because the gradient slopes toward deciding**; "records-and-points" is a cliff-edge, not a preference.

### Framers

**F1 — Lens Shifting**
- *(focused)* **Lens: "rlu is the FIRST deployed write-tool of the whole SUSTRALL machine."** Then records-and-points isn't convenience — it's the *constitutional* decision-authority limit the future Dispatcher/Selector inherit. Getting it exact now prevents a multi-decider tangle later.
- *(focused — the load-bearing reframe)* **Lens: "the human is forgetful and sessions die."** Then the design must be optimized for the *failure* case, not the happy path: degraded `done`-without-`start`, the sweep, retroactive rows become PRIMARY behaviors, and the named "edge" scenarios (forgot-to-start S3, crash S4) are actually the *common* case. This shifts the spec's center of gravity.

**F2 — Constraint Manipulation** *(both directions mandatory)*
- *(ADD)* **"rlu writes only by APPENDING — never read-then-rewrite."** Forces the immutable log; eliminates a class of corruption bugs; makes rlu safe to invoke from multiple sessions (each just appends). Enabling constraint → confirms D1.
- *(ADD)* **"`done` requires an artifact pointer OR an explicit no-artifact reason."** Forces every closed route to point at something concrete (no orphan "done"). Flag: informal runs may produce no folder → the "or reason" branch covers it.
- *(REMOVE)* **Remove "rlu must resolve the route to a map ordinal."** Then rlu can record an engagement against a **free-text route description** not (yet) in any map — covering purely-informal work on routes that were never formally listed. Flag: weakens the field-link → resolution: allow it, marked `unlinked`, with a later reconcile. (DEFERRED — revival: if unlinked engagements become common.)

**F3 — Inversion** *(depth-checked to system-level; applied to the load-bearing pillars — the meta-decision pieces)*
- **Inv1 — invert P1 "rlu never decides."** L1: rlu picks the next route (a chooser). L2 (system): decision-authority is now split across rlu + the Selector → the machine has *two minds* → incoherent control. **Inversion CONFIRMS P1 at system-level**: single decision-authority is a *system invariant*, not a style choice.
- **Inv2 — invert D1 "append-only."** L1: rewrite rows in place (cleaner file). L2 (system): lose crash-recovery + history + concurrency-safety; the file becomes mutable shared state — the exact thing the placement finding's distributed-truth design avoided. **Confirms append-only at system-level.**
- **Inv3 — invert "rlu is a session-skill."** L1: make it pure code (cheaper, no context). L2 (system): code can't disambiguate-by-asking, can't read prose route-maps, can't judge "first-in-project" with nuance — BUT for the *formal-loop* case the runner already has the context and CAN auto-mark. **Yields a real refinement (not just confirmation): rlu is a session-skill, AND the formal-loop completion is a runner code-path (Enhancement 1) — two modes.** Fertile.
- **Inv4 — invert "per-inquiry file"** (the placement finding's settled choice). L1: one central file. L2 (system): re-derives the 2000-lookup + reference-fragility the placement finding already killed. **Confirms per-inquiry at system-level** (no re-litigation needed).

## Inherited Frame Audit (between Generate and Test)

**Seed's central assumption:** "rlu is records-and-points, never decides (P1), and the adopted design [two moments, append-only, per-inquiry, session-skill] is right."
**Challenge scan:** Did any candidate explicitly challenge it? **YES** — Inv1 challenged P1; Inv2 challenged append-only; Inv3 challenged session-skill; Inv4 challenged per-inquiry. Each was inverted to system-level and either confirmed or refined (Inv3). **Audit does NOT fire** — no load-bearing commitment was inherited un-challenged. (The one genuine refinement, Inv3's two-mode rlu, is folded into the candidate set.)

## Phase 3 — Test (5-test cycle on survivors)

| Candidate | Novelty | Scrutiny | Fertile | Actionable | Mech-independent | Disposition |
|---|---|---|---|---|---|---|
| **WAL / event-sourcing framing of the two-moment + append-only** | reframe | survives (canonical) | yes | yes (grounds sweep + D1) | **converges** w/ G1-git + Inv2 | **ACTIONABLE** |
| **Pre-registration = clinical-trial / logbook grounding** | reframe | survives | yes | yes (justifies the guard to skeptics) | converges (G3-far + G1-logbook) | **ACTIONABLE** |
| **"Optimize for the forgetful human" lens** | yes | survives | yes | yes (elevates S3/S4 to primary; reshapes the scenario table) | — (Lens-specific) | **ACTIONABLE** |
| **Two-mode rlu (session-skill + formal-loop runner code-path)** | yes | survives | yes | yes | converges (Inv3 + prior Enhancement-1) | **ACTIONABLE** |
| **Single-decision-authority as a system invariant** (Inv1) | reframe | survives | yes | yes (makes P1 non-negotiable) | converges (Inv1 + G4-gradient) | **ACTIONABLE** |
| **Unified close-with-reason verb** {done/parked/superseded} (G2) | yes | survives | yes | yes (clean lifecycle) | — | **ACTIONABLE** |
| **Name-keyed source-map ref** (G2 dangling-ref) | yes | survives | yes | yes (robust to map regen) | converges (G2 + G4-corpus) | **ACTIONABLE** |
| **`done` requires artifact-pointer-or-reason** (F2-ADD) | yes | survives w/ flag | moderate | yes | — | **ACTIONABLE** |
| **Free-text / `unlinked` engagement** (F2-REMOVE) | yes | survives w/ flag (weakens field-link) | moderate | partial | — | **DEFERRED** (revival: unlinked engagements become common) |
| **rlu-logs → Selector training input** (G4) | yes | survives | high | not yet | — | **RESEARCH FRONTIER** (needs the Selector) |

**Assembly check (emergent architecture):** The survivors assemble into one coherent thesis — **rlu is a write-ahead engagement log governed by a single-decision-authority constitutional limit, optimized for the forgetful human, closing every engagement with a reason-code, robust to map-regeneration via name-keyed refs, deployed as a session-skill with a formal-loop runner code-path.** The emergent value none of the pieces has alone: **each of the three pillars gets an external grounding** — P1 = single-decision-authority system invariant (Inv1, confirmed); P2 = WAL / event-sourcing (G3+G1, convergent); P3 = optimize-for-forgetful-human (F1) + checklist/logbook (G3). The spec stops being "our design" and becomes "an instance of well-understood disciplines (WAL, event-sourcing, pre-registration, logbook)" — the strongest possible validation of a freshly-invented tool.

**Axis coverage check:** problem axes = trigger (who invokes: human vs runner), storage (per-inquiry append-only), discovery (glob / disambiguation / name-ref), close-reason. Candidates vary along ALL four (two-mode→trigger; WAL→storage; name-ref+glob→discovery; close-with-reason→close). No single-axis collapse. PASS.

**Per-element mechanism-trace (the pillars must not inherit silently):** P1 ← Inv1 + G4-gradient; P2 ← G3-WAL + G1-git + Inv2; P3 ← F1-lens + G3-logbook. Every pillar received active mechanism work. PASS.

## Telemetry

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation [both directions], Inversion [depth-checked to system-level])
- **Convergence:** YES — append-only-WAL-log reached by 3 mechanisms (Combination-git, Domain-Transfer-WAL, Inversion-confirm) → high confidence on P2; single-decider reached by Inversion + Extrapolation-gradient → high confidence on P1.
- **Survivors tested:** 10/10. ACTIONABLE ×8, DEFERRED ×1 (free-text unlinked), RESEARCH FRONTIER ×1 (Selector training input).
- **Inherited Frame Audit:** did not fire (all 4 load-bearing commitments challenged via Inversion; 3 confirmed, 1 refined).
- **Production-task per-piece note:** the meta-decision pieces (the pillars) each received Inversion → Piece-Level Inversion compliance: **satisfied**.
- **Failure modes observed:** none (generation separated from testing; full coverage; no early frame-lock — Inversion applied even where it only confirmed; no survival bias — the uncomfortable Inv1/Inv2 were generated and tested, not skipped).
- **Special-attention items for Critique:** (a) the "optimize-for-forgetful-human" lens recategorizes "edge" scenarios as primary — does that over-rotate the spec toward failure-handling? (b) the `done`-requires-pointer-or-reason ADD-constraint — is the "or reason" escape hatch too loose? (c) the close-with-reason unification — does collapsing done/parked/superseded into one verb lose a needed distinction? (d) the two-mode rlu — does the runner code-path + session-skill split create a consistency risk (two writers of the same file)?
- **Overall: PROCEED** (full coverage 4G+3F; strong convergence on both load-bearing pillars; all survivors tested; no failure modes).
