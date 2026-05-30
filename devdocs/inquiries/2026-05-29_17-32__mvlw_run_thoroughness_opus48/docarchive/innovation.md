## User Input

`devdocs/inquiries/2026-05-29_17-32__mvlw_run_thoroughness_opus48/_branch.md` (prior outputs: surfacing.md, sensemaking.md [convergence-efficiency verdict], decomposition.md [P1–P6]; workspace in context). Produce the diagnosis→remedy package + foils. Process-layer.

---

# Structural Innovation — MVLw Thoroughness Remedy

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed (type: gap + remedy-design).** The P1–P6 piece-list: articulate the diagnosis (P1 metric, P2 phenomenon) and generate the remedy space (P3 measure / P4 enforce / P5 selective), then synthesize the package + foils.

**Methodology-Mode Consideration (required):**
- **(a) Inherited mode — Standard default.** The seed framing asks to elaborate a committed direction (the three remedy principles).
- **(b) Alternative mode named — Generator-weighted exploration.** The remedy space is genuinely wide (many possible coverage-enforcement mechanisms); a generator-heavy sweep maximizes candidate breadth.
- **(c) What follows under the alternative.** Generator-weighted would produce more concrete remedy candidates (more enforcement mechanisms, more measurement options) at the cost of less per-candidate framing.
- **(d) Decision — run FULL coverage (all 7 mechanisms), Standard default + mandatory piece-level Inversion.** Self-consistency note: this inquiry's own verdict says full coverage is warranted on *divergent/high-stakes* questions where breadth is the value — and remedy-design for a loop-wide problem IS such a question. So full mechanism coverage here is the *correct* application of the inquiry's own selectivity principle, not padding. (This run deliberately demonstrates the thoroughness it prescribes.)

## Meta-Decision-Piece Classification (Production-task mode)

All six pieces commit a frame → all are meta-decision pieces → each gets a piece-level Inversion foil:

| Piece | Commitment | → Foil |
|---|---|---|
| P1 metric-reframe | "duration confounded; coverage valid" | F1 |
| P2 phenomenon | "real loss, breadth-localized, tendency-not-floor" | F2 |
| P3 measure | "monitor coverage not the clock" | F3 |
| P4 enforce | "promote soft aims → counted floors; never target duration" | F4 |
| P5 selective | "enforce where breadth is the value, not blanket" | F5 |
| P6 synthesis | "partly-valid-but-mis-instrumented; act via coverage" (relationship to the concern) | F6 (critical) |

---

## Phase 2 — Generate (full mechanism coverage — all 7)

### Generators

**G1 — Combination.** Combine P3 (measure) + P4 (enforce) + P5 (selective) → emergent: **a "coverage-gated MVLw"** — one integrated mechanism where the loop *reads* the coverage telemetry each discipline already emits, *gates* on it (a run that under-covers fails the discipline's structural check), and *applies the gate selectively* by the question's stakes. The three principles aren't separate fixes; they're one self-policing coverage loop. → feeds P6.

**G2 — Absence Recognition (patch + redesign, both mandatory).**
- *Patch-level (concrete gap):* the structural check is **section-presence-only** and `tools/structural_check.sh` is *absent* (checks are manual). So a run that writes an Innovation section applying only 2 mechanisms **passes** — under-coverage is invisible to the check. The missing piece is a **coverage-counting check**: count mechanisms-applied, perspectives-checked, ambiguities-resolved, and FAIL when below the floor. → concrete remedy candidate **R3**.
- *Redesign-level (what's already present in different form):* each discipline ALREADY self-reports coverage telemetry (innovate's "Generators applied: N/4, Framers: N/3"; sensemaking's saturation + ambiguity ratio; td-critique's dimension coverage). The loop *has the data and ignores it.* So the remedy is mostly "**act on telemetry the loop already emits**" (surface it in the checkpoint; flag under-par) — NOT build new measurement. → concrete remedy candidate **R2** (cheaper than R3; no tooling).

**G3 — Domain Transfer (native + different).**
- *Native (software testing — coverage gates):* CI fails a build when test coverage drops below a threshold — *time-blind, coverage-keyed.* Import directly: a **reasoning-coverage gate** — the run fails its structural check when mechanism/perspective/ambiguity coverage is below floor, regardless of how fast it converged. (This is exactly R3.) The analogy also warns of the failure mode: *coverage-gaming* (writing trivial tests to hit the number) → the floor must count *substantive* applications, not mentions.
- *Different (aviation/surgical pre-flight checklist):* a checklist confirms each critical step was *done* — not that the procedure took long. Import: a **per-discipline coverage checklist** the run ticks ("all 7 mechanisms applied or explicitly marked-inapplicable-with-reason"; "≥5 perspectives checked") — the innovate spec's existing "marked-inapplicable: <reason>" override IS this pattern already; promote it from optional to required-with-count. → remedy candidate **R4**.

**G4 — Extrapolation.** Extend the trend: models keep getting faster. If the project anchors quality on wall-clock time, the bar *erodes every generation* — next year a fully-thorough run might take 5 min and look "lazy" by a 40-min yardstick, while a padded shallow run hits 40 min and looks "good." Time-anchoring inverts over time. Coverage floors are **generation-invariant** (a mechanism either was applied or wasn't, at any speed). → reinforces R1 (measure coverage not time) as the *future-proof* core, and is itself an argument the user will face again with the next model.

### Framers — Piece-Level Inversion (foils)

**F1 — Invert P1 (metric).** "Duration IS the right metric." → **KILL** — confounded (speed/task/breadth) + gameable (padding); coverage is the direct instrument (Sensemaking Amb1).

**F2 — Invert P2 (phenomenon).** "There's no real loss — it's all speed + the re-walk confound." → **KILL** — matched-pair 2.5-3.2× + mechanism coverage 47→9 are residuals beyond the confound (Amb2). (But credit: the confound IS partly real — so the verdict is "partly valid," not "fully alarming.")

**F3 — Invert P3 (measure).** "Don't measure anything — trust the model to be thorough." → **KILL** — the user's unease is justified (real coverage drop), so a signal is needed; coverage is cheap to read (the disciplines already emit it). Trust-without-signal is how the drop went unnoticed except via the crude clock.

**F4 — Invert P4 (enforce).** "Don't enforce floors — the soft aims are enough." → **REFINE** — soft aims are *precisely what failed* (4.8 satisfied section-checks while applying 1-2 mechanisms), so "enough" is falsified; BUT hard floors *everywhere* over-correct into padding → this resolves into P5's selectivity (enforce where breadth matters). So F4 is half-right and routes to selectivity, not to "no enforcement."

**F5 — Invert P5 (selective).** "Enforce floors on EVERY run (blanket)." → **KILL-as-stated** — blanket floors pad convergent runs and re-introduce the wasteful-enumeration the user would (rightly) then complain about (Amb3). Selectivity is required. (Keep-as-tension: the *determination* of which runs are divergent is the residual hard part — routes to the deferred classifier.)

**F6 — Invert P6 (synthesis) — THE critical foil.** "Max effort + 1M context already cover thoroughness; nothing to change — do nothing." → **KILL** — max effort caps the *budget*, it does not govern *how much of the budget goes to exploration breadth* (Sensemaking K10); the measured 47→9 drop happened *at max effort*, proving max-effort doesn't enforce breadth. "Do nothing" leaves the real, measured drop unaddressed on exactly the divergent questions where it costs most. (This is the load-bearing foil — the "no action needed" position — handed to Critique.)

### Constraint Manipulation (both directions mandatory)
- **REMOVE:** remove the *selectivity* constraint → blanket coverage floors → padding on convergent runs (re-walks would be forced through all 7 mechanisms for no value). Confirms selectivity is load-bearing (P5).
- **ADD:** add "the structural check must COUNT substantive coverage (mechanisms/perspectives/ambiguities), not just confirm sections exist" → this is the concrete enabling constraint behind R3/R4; it requires either reviving `tools/structural_check.sh` to count, or the runner surfacing the disciplines' self-reported counts. Productive — names the tooling dependency.

### Lens Shifting
Shift to the frame "the next model is 2× faster again, runs finish in 7 min." Under this lens: wall-clock anchoring is *useless* (every run looks alarmingly short); coverage floors are *unchanged* (still N mechanisms, M perspectives). The lens shows the remedy must be the one that survives the next model too — coverage, not time. Strongest support for R1.

---

## Inherited Frame Audit

**Seed central assumption:** "the concern is real but mis-instrumented; fix via coverage." **Challenge scan:** F2 challenges "real loss" (says it's all confound) and F6 challenges "fix needed" (says max-effort already covers it / do nothing) — both tested at depth. The audit **does NOT fire** (the central assumption is explicitly challenged + adjudicated). Per-piece: each P1–P6 has its inverting foil (F1–F6). Audit clean.

---

## Phase 3 — Test (5-test on the remedy package + foil dispositions)

**The concrete remedy candidates (assembled from the mechanisms):**
- **R1 — Measure coverage, not the clock.** (Monitoring practice; zero tooling.) The user watches the disciplines' coverage telemetry instead of elapsed minutes.
- **R2 — Surface coverage telemetry in the runner checkpoint + flag under-par.** (Runner change; light, no new tooling — the data already exists.)
- **R3 — Promote soft coverage aims → counted floors, enforced by a coverage-counting structural check.** (Needs `tools/structural_check.sh` to exist + count, or runner to read the self-reported counts; heavier.)
- **R4 — Per-discipline coverage checklist with required "applied-or-marked-inapplicable-with-reason."** (Promotes innovate's existing optional override pattern to required+counted.)
- **R5 — Keep full-reference-reading mandatory.** (Already a runner rule; reinforce — deliberate runs that read full references were ~2.5× fuller.)
- **R6 — Apply R3/R4 floors SELECTIVELY by question stakes** (divergent/high-stakes → enforce; convergent → let efficiency stand), keyed off `_branch.md`'s Goal + Layer Commitment.

**5-test on the package:**
- **Novelty:** moderate — it imports a known pattern (coverage gates) into the loop + reframes the metric; honest, not a from-nothing invention (G2 redesign: mostly act-on-existing-telemetry).
- **Scrutiny survival:** survives the "do nothing / max-effort covers it" foil (F6) via the measured-at-max-effort 47→9, and the "no real loss" foil (F2) via matched pairs. ✓ STRONG.
- **Fertility:** opens the runner checkpoint design + the structural-check tooling + the stakes-classifier. ✓
- **Actionability:** R1/R2/R5 are immediately actionable (no/low tooling); R3/R4/R6 are concrete proposals. ✓
- **Mechanism independence:** the "measure coverage not time" core is reached by Domain Transfer (CI gates + checklists), Extrapolation (future-proofing), AND Absence Recognition (act on existing telemetry) — independent grounds. ✓ ROBUST.

**Foil dispositions:**
| Foil | Verdict | Why |
|---|---|---|
| F1 (duration is the metric) | **KILL** | confounded + gameable. |
| F2 (no real loss) | **KILL** (confound credited) | residuals beyond confound (47→9, matched pairs). |
| F3 (don't measure, trust) | **KILL** | unease justified; signal needed; coverage cheap. |
| F4 (soft aims enough) | **REFINE→selectivity** | soft aims failed; but enforce selectively, not everywhere. |
| F5 (blanket floors) | **KILL-as-stated** | pads convergent runs; selectivity required. |
| F6 (max-effort covers it / do nothing) | **KILL** | max-effort caps budget not breadth; 47→9 happened AT max effort. **The load-bearing kill.** |

**Assembly check.** The survivors assemble into **coverage-gated MVLw**: *measure coverage not time (R1) → surface + flag it in the checkpoint (R2) → enforce counted floors (R3/R4) selectively by stakes (R6), with reference-reading kept mandatory (R5).* Emergent: the loop becomes **self-policing on coverage with zero reference to wall-clock time** — which both fixes the real drop AND immunizes the project against the next (faster) model. The tiered actionability (R1/R2/R5 now, no tooling; R3/R4/R6 as proposals) means the user gets value immediately and a roadmap for the rest.

**Axis coverage check.** Orthogonal axes: (1) what-to-measure — R1 + F1 vary it; (2) how-to-enforce — R3/R4 + F4 vary it; (3) when-to-enforce — R6 + F5 vary it; (4) is-there-a-problem — P2 + F2/F6 vary it. All four axes have variants. ✓

**Artifact-grounding (6th test, conditional).** Claims checked against project state: "soft aims exist" (innovate spec "aim for all seven" — in context ✓); "structural check is section-presence + script absent" (confirmed across this session's runs ✓); "disciplines self-report coverage telemetry" (each spec's Telemetry section ✓). Consistent — no artifact contradicts the remedy.

---

## Output — The Diagnosis→Remedy Package + Foils (for Critique)

**DIAGNOSIS:** the concern is **partly valid but mis-instrumented.** Opus 4.8 has a *convergence-efficiency tendency* (reaches sufficiency faster, stops, trades exploration breadth for speed). The real loss is measured via **coverage** (Innovation mechanism-applications 47→9, beyond the re-walk confound), is **localized to exploration breadth** (core analysis/Sensemaking spared; correctness held), and is a **tendency, not a floor** (deliberate runs ~2.5× fuller). Wall-clock duration cannot isolate it (it confounds speed↑ + task↓ + breadth↓ and is gameable by padding).

**REMEDY (coverage-gated MVLw — tiered by cost):**
- **Now, no tooling:** R1 *measure coverage, not the clock*; R5 *keep full-reference-reading mandatory*.
- **Light runner change:** R2 *surface each discipline's coverage telemetry in the checkpoint + flag under-par*.
- **Proposals (need spec/tooling):** R3 *promote soft coverage aims → counted floors, enforced by a coverage-counting structural check*; R4 *per-discipline coverage checklist (applied-or-marked-inapplicable-with-reason)*; R6 *apply floors SELECTIVELY by question stakes* (divergent/high-stakes → enforce; convergent → let convergence efficiency stand).
- **Never:** target wall-clock duration directly (induces padding — worse than the disease).

**Foils handed to Critique:** F1 KILL, F2 KILL (confound credited), F3 KILL, F4 REFINE→selectivity, F5 KILL-as-stated, F6 (max-effort-covers-it / do-nothing) KILL [the critical one]. Critique must adjudicate especially F6 (is any action warranted?), R3/R6 feasibility (the absent tool + the stakes-classifier), and the coverage-gaming risk (G3's warning).

## Telemetry

- Generators applied: **4/4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3/3** (Inversion ×6 piece-level, Constraint Manipulation [ADD+REMOVE], Lens Shifting)
- Convergence: **YES** — Domain Transfer (CI gates + checklists) + Extrapolation (future-proofing) + Absence Recognition (act-on-existing-telemetry) converge on "measure+enforce coverage, not time" from independent grounds.
- Survivors tested: 7/7 (package + 6 foils) via the 5-test cycle; 6 concrete remedy candidates (R1–R6) generated + tiered.
- **Per-piece Inversion compliance:** P1✓ P2✓ P3✓ P4✓ P5✓ P6✓ — all satisfied.
- Inherited Frame Audit: did NOT fire (F2 + F6 challenge the central assumption + adjudicated).
- Failure modes observed: **none** (Survival-Bias guarded — the uncomfortable "do nothing / max-effort covers it" F6 was generated AND tested, not skipped; Single-Mechanism-Trap guarded — full 7-mechanism coverage; Early-Frame-Lock guarded). *Note: this run deliberately exercised full coverage as both the correct response to a divergent question AND a live demonstration of the remedy it prescribes.*
- **Overall: PROCEED** — full coverage, robust convergence, all survivors tested, 6 tiered remedies, per-piece Inversion satisfied.

### Handoff to Critique
Adjudicate the diagnosis→remedy package: (1) F6 — is ANY action warranted, or does max-effort already cover it? (2) R3/R6 feasibility — the absent `tools/structural_check.sh` + the stakes-classifier (how does the loop know a question is divergent?); (3) the coverage-gaming risk (floors counting mentions not substance); (4) the diagnosis's honesty (is the confound credited enough?). Render SURVIVE/REFINE/KILL on the package + rank the R1–R6 remedies.
