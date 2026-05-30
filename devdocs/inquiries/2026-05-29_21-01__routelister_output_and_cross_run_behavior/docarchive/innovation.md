## User Input

`devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/_branch.md` (prior outputs: surfacing.md, sensemaking.md [verdicts + cross-run model + DAG], decomposition.md [P1–P6]; workspace in context). Produce the verdicts + design the cross-run model + foils. Process-layer.

---

# Structural Innovation — Routelister Output + Cross-Run Behavior

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed (type: diagnosis + design).** The P1–P6 piece-list: state the 5 verdicts, design the cross-run memory model (the user's headline OT5), state the principles, apply the routeman re-derivation lens, order the work, synthesize + foils.

**Methodology-Mode Consideration (required):**
- **(a) Inherited mode — Standard default.**
- **(b) Alternative — Generator-weighted exploration** (the cross-run model is a genuine design space — index shapes, integration mechanisms).
- **(c) What follows under the alternative:** more concrete design candidates for the model.
- **(d) Decision — FULL 7-mechanism coverage, Standard default + mandatory piece-level Inversion.** The headline (OT5) is a real design problem warranting breadth (per the selectivity principle, divergent → full coverage); the piece-level Inversion supplies the adversarial pressure (F-P2 no-model, F-P4 routeman-covers-it, F-P6 over-engineering). No mode-switch.

## Meta-Decision-Piece Classification (Production-task mode)

All six pieces commit a frame → each gets a piece-level Inversion foil: P1 (verdicts), P2 (the model), P3 (principles), P4 (routeman-lens), P5 (DAG), P6 (synthesis). → F1–F6.

---

## Phase 2 — Generate (full 7-mechanism coverage)

### Generators

**G1 — Combination (the design core).** Combine routeman's `_route.md` operations (read-prior / recalibrate / add-new, §5.8) + a **cross-target index** + identity-individuation + the enrich-not-dump guard → **the cross-run memory model**, with three re-derived operations:
1. **read-prior** — on invocation, scan the routelister workspace/index for prior runs: the run's OWN prior output (self-re-run, OT4) AND, for a root run, prior concept-target depth runs (OT5).
2. **integrate** — for each enumerated concept-identity, match it (via individuation) against prior depth runs; if matched, attach a compact **depth-signal** to that identity's route (enrich-not-dump); for self-re-run, reconcile against the own-prior map (idempotency).
3. **persist** — write this run's `routelister.md` AND register it in the index (target identity + pointer), so future runs can discover it.

This is routeman's per-folder state model **generalized** (same-map → cross-target index) and **stripped** of the loop-control (REVISIT) parts.

**G2 — Absence Recognition (patch + redesign).**
- *Patch (the concrete missing piece):* routeman has *per-folder* state (`_route.md`); routelister's OT5 needs a **cross-target INDEX** — a routelister-workspace-level registry mapping concept-identities → the depth runs that drilled them. That index is the one genuinely-new artifact. → candidate **I1 (the cross-run index)**.
- *Redesign (already-present-in-different-form):* routelister's two axes (`11-43`) were ALREADY designed to compose (breadth lists identities; depth drills one). The cross-run model is what makes them compose **across runs** (a depth run permanently enriches future breadth runs), not just inline (Shape-H). So the model articulates a composition the design already implied — it doesn't bolt on a new capability.

**G3 — Domain Transfer (native + different).**
- *Native (incremental build / compiler cache):* a build reads prior build artifacts keyed by unit-identity and re-runs incrementally — idempotent, reuses prior work. Map: routelister runs read prior run artifacts keyed by concept-identity; the cross-target depth runs are the "cache" a root run consults; re-running a root run is incremental (idempotent-at-fixpoint, reuses depth runs). → grounds OT4 idempotency + OT5 reuse in a known pattern.
- *Different (a wiki / knowledge base):* an index page (the root map) lists topics (identities) and shows which have detailed sub-pages (depth runs) — the index page shows a *link + summary*, not the full sub-page content. That is EXACTLY enrich-not-dump: the root map shows "A has depth (here's the headline — an unresolved divergence)," not A's full manifestations. → the wiki index-page is the precise model for the breadth map's enrichment.

**G4 — Extrapolation.** Extend forward: as depth runs accumulate, each root run gets progressively richer — routelister becomes a **growing project knowledge-map** rather than a stateless per-run enumerator. At the limit, the root map is a live index over all the depth knowledge ever produced. So the cross-run model is not a feature — it is what makes routelister *cumulative*, which is the navigation endgoal. (And it's why "stateless re-enumerate every time" — F-P6 — forfeits the endgoal.)

### Framers — Piece-Level Inversion (foils)

**F1 — Invert P1 (verdicts).** "OT5 IS defined / OT3 is NOT." → **KILL** — OT3 is grain (defined, `11-43`/`18-17`); OT5 is neither in the chain nor (in shape) in routeman.

**F2 — Invert P2 (the model).** "No cross-run model needed — each run is stateless/independent." → **KILL** — then depth runs never feed breadth (the axes don't compose; the user's explicit goal is unmet), and it would be a regression even from routeman (which HAS cross-run state). Statelessness forfeits the cumulative endgoal (G4).

**F3 — Invert P3 (principles).** "Idempotency is wrong — runs SHOULD accumulate/evolve." → **REFINE** — idempotency is on *unchanged input*; when the territory changes OR new depth runs exist, the map updates — but that's *input-change*, not drift. So idempotency-at-fixpoint is correct and "accumulation" happens *through* new input, bounded by the fixpoint (the map converges given fixed input). (And inverting enrich-not-dump → "dump everything for completeness" → KILL: overload, `11-43`.)

**F4 — Invert P4 (routeman-lens).** "routeman DOES define it — just carry §3.5/§5.8." → **KILL** — same-map ≠ cross-target; REVISIT-built (doesn't transfer per `18-17`). Carrying it wholesale re-imports the loop-relativity the project excised.

**F5 — Invert P5 (the DAG).** "Build OT5 first — it's what the user wants." → **KILL** — OT5 is gated on individuation (to match concepts across runs) + the output-schema (to have something to read/write). Building it first means building on undefined foundations; the DAG order is forced by dependencies, not preference.

**F6 — Invert P6 (synthesis / the self-ref + minimalism foil).** "This whole model is over-engineering — routelister should just re-enumerate statelessly each time." → **REFINE (the productive tension):** stateless forfeits the cumulative endgoal (G4) and wastes prior depth work — so pure statelessness is wrong. BUT the foil's pressure toward minimalism is RIGHT: the model must be the *lightest thing that composes the axes* — an index + read-prior + enrich-not-dump — NOT a heavyweight state engine or a full dependency-graph DB (which `18-17`/routeman's NOT-list forbids anyway). → keep the model minimal: an index + depth-signals, governed by idempotency + enrich-not-dump.

### Constraint Manipulation (both directions mandatory)
- **REMOVE individuation** → the cross-target match fails (a root run can't tell its enumerated "A" is the A a prior run drilled) → confirms individuation is the gating prerequisite (the DAG linchpin).
- **ADD "the root run must be stateless"** → OT5 becomes impossible (no way to read prior runs) → confirms a persisted cross-run state (the index) is *required* for OT5.

### Lens Shifting
Shift to "routelister as a growing project knowledge-map" (not a per-run tool): under this lens the cross-run model is *core*, not an add-on — each depth run permanently enriches future breadth runs, and the root map becomes a living index over accumulated depth. This reframes OT5 from "a nice cross-run feature" to "the mechanism that makes routelister cumulative" — the endgoal. Strongest support for P2/G4.

---

## Inherited Frame Audit

**Seed central assumption:** "OT5 is undefined-but-sound; the cross-run memory model is the design." **Challenge scan:** F2 (no model / stateless), F4 (routeman defines it), F6 (over-engineering) all directly challenge it + were tested. Audit **does NOT fire**. Per-piece: each P1–P6 has its foil. Clean.

---

## Phase 3 — Test (5-test + foil dispositions)

**The designed answer (G1+G3 assembly):** the cross-run memory model = a routelister-workspace **index** (concept-identity → depth-run pointers) + three operations (read-prior / integrate-via-individuation-with-enrich-not-dump / persist+register), governed by idempotency-at-fixpoint + enrich-not-dump; OT4 (self-re-run) and OT5 (cross-target) are the same model at two read-scopes.

**The user's trace, worked (root → A → B → root):**
1. **root #1** — enumerates the project's concept-identities; index empty of depth runs → a plain breadth map; registers itself.
2. **target-A** — depth run on A → A's manifestations + divergences as routes; registers "A drilled; unresolved README-vs-impl divergence."
3. **target-B** — depth run on B → registers "B drilled; clean."
4. **root #2** — enumerates the identities; **reads the index**; for A's and B's identity-routes attaches depth-signals ("A: drilled — unresolved divergence → epistemic route available"; "B: drilled — clean") → a *smarter* breadth map than root #1, **same identities, enriched** (compact; no manifestation dump). Idempotent at the fixpoint: root #2 = root #1 + the depth-signals; had A/B not run, root #2 = root #1.

This is exactly the user's stated intent — now designed.

- **Novelty:** moderate — articulates a composition the two-axis design implied (G2 redesign) + the cross-target index (the one new artifact) + a known pattern (incremental build / wiki index, G3).
- **Scrutiny survival:** survives the no-model foil (F2, via the cumulative endgoal), the routeman-covers-it foil (F4, via shape + loop-built), and the over-engineering foil (F6, refined to minimalism). ✓ STRONG.
- **Fertility:** seeds the index artifact (I1), the individuation inquiry (the linchpin), the output-schema (to make runs readable), and the state-file re-derivation. ✓
- **Actionability:** the verdicts + the DAG are immediately usable; the model is a concrete design (gated on individuation/schema). ✓
- **Mechanism independence:** the model is reached by Combination (routeman re-derived) + Domain Transfer (incremental build AND wiki index) + Extrapolation (cumulative endgoal) — independent grounds. ✓ ROBUST.

**Foil dispositions:** F1 KILL, F2 KILL, F3 REFINE (idempotency-on-unchanged-input), F4 KILL, F5 KILL, F6 REFINE (keep minimal). 

**Assembly check.** The verdicts + the model + the principles + the DAG assemble into a **handle-next plan with a designed capstone**: do individuation → enumeration/scoping → output-schema → then the cross-run model (index + 3 operations), with the user's OT5 trace as the acceptance test. **Emergent:** the cross-run model + G4's reframe show routelister's *real* endgoal value is being *cumulative* — which elevates individuation (its prerequisite) from "an open detail" to "the gate on routelister's core value." That sharpens the DAG's priority: individuation isn't just next, it's the unlock for everything cumulative.

**Axis coverage check.** Axes: (1) per-mode output — OT3/P1; (2) is-it-defined — P1/F1; (3) the cross-run model — P2/F2; (4) governing principles — P3/F3; (5) routeman-relationship — P4/F4; (6) priority/sequencing — P5/F5; (7) scope/minimalism — F6. All have variants. ✓

**Artifact-grounding (6th test).** Checked against project state: routeman's §3.5/§5.8 (the same-map model + REVISIT — read this turn ✓); `11-43` compactness + individuation-frontier (✓); `18-17` loop-bound test (✓). No artifact contradicts the design.

---

## Output — The Answers + the Designed Model + Foils (for Critique)

**THE FIVE VERDICTS:** OT3 **DEFINED** (output differs by grain — root→identities, concept-target→manifestations). OT1 **PARTIAL** (WHAT defined; HOW — enumeration + individuation + scoping — not). OT2 **PARTIAL** (output KIND clear; FORM/schema not authored). OT4 **idempotent-at-fixpoint** (re-run converges; reading prior refines-not-drifts). OT5 **NOT DEFINED — sound, and the capstone** (gated on individuation + output-schema).

**THE CROSS-RUN MEMORY MODEL (the design for OT5+OT4):** a routelister-workspace **index** (concept-identity → depth-run pointers) + three operations — **read-prior** (scan for own-prior + cross-target depth runs), **integrate** (match via individuation; attach compact depth-*signals* to identity-routes — enrich-not-dump; reconcile own-prior — idempotency), **persist** (write `routelister.md` + register in the index). OT4 and OT5 are this one model at two read-scopes. The user's root→A→B→root trace is the acceptance test (root #2 = root #1 enriched with A/B depth-signals, compact, idempotent at the fixpoint).

**THE TWO GOVERNING PRINCIPLES (definable now):** idempotency-at-fixpoint (converge, don't drift); enrich-not-dump (depth-signals on identity-routes, never manifestation dump — preserves `11-43` compactness).

**THE HANDLE-NEXT DAG (OT0):** **identity-individuation → enumeration/breadth-scoping → output-artifact schema → cross-run memory model** — individuation the linchpin (it gates both OT1's HOW and OT5's matching, and — per the assembly insight — routelister's whole cumulative value).

**ROUTEMAN RE-DERIVATION:** routeman's §3.5/§5.8 is a *same-map, REVISIT-built partial template* — re-derive (generalize to cross-target index; strip loop-control), don't carry.

**Foils for Critique:** F1 (verdicts wrong) KILL, F2 (no model/stateless) KILL, F3 (idempotency wrong) REFINE, F4 (routeman covers it) KILL, F5 (build OT5 first) KILL, F6 (over-engineering) REFINE→minimal. Critique must adjudicate especially F6 (is the index minimal-enough, or scope-creep toward a forbidden cross-concept graph?) + F5 (is the DAG order forced?) + the self-reference.

## Telemetry

- Generators applied: **4/4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3/3** (Inversion ×6 piece-level, Constraint Manipulation [ADD+REMOVE], Lens Shifting)
- Convergence: **YES** — the model reached via Combination (routeman re-derived) + Domain Transfer (incremental-build + wiki-index) + Extrapolation (cumulative endgoal), independent grounds.
- Survivors tested: 7/7 (answer + 6 foils); concrete candidate I1 (the cross-run index) + the worked trace.
- **Per-piece Inversion compliance:** P1–P6 ✓ all satisfied.
- Inherited Frame Audit: did NOT fire (F2/F4/F6 challenge the central assumption + adjudicated).
- Failure modes observed: **none** (Survival-Bias guarded — the uncomfortable F2 "stateless" + F6 "over-engineering" generated + tested; Single-Mechanism-Trap guarded — full 7; Early-Frame-Lock guarded).
- **Overall: PROCEED** — full coverage, robust convergence, all survivors tested, per-piece Inversion satisfied.

### Handoff to Critique
Adjudicate: (1) the 5 verdicts (esp. OT5 not-defined, OT4 idempotent-at-fixpoint); (2) the cross-run model design (P2) — is the index minimal, or does it creep toward the forbidden cross-concept dependency graph (`18-17`/routeman NOT-list)? does the enrich-not-dump guard genuinely hold? (3) F5 — is the DAG order forced by dependencies? (4) F6 — minimalism vs the cumulative endgoal; (5) the self-reference + the routeman/chain re-test. Render SURVIVE/REFINE/KILL.
