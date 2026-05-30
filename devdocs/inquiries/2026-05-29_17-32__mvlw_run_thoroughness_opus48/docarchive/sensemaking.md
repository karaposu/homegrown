## User Input

`devdocs/inquiries/2026-05-29_17-32__mvlw_run_thoroughness_opus48/_branch.md` (prior output: surfacing.md; workspace in context — measured 4.7-vs-4.8 evidence + the loop's existing coverage levers). Question: is Opus 4.8's shorter MVLw run a real thoroughness drop (OT1), where (OT2), and what can we do (OT3)?

---

# Structural Sensemaking — MVLw Thoroughness on Opus 4.8

## SV1 — Baseline Understanding

Initial read: the user equates shorter elapsed time with less-thorough reasoning. Wall-clock time is a weak instrument for that — a faster model does the same work in less time. But the measured evidence is not nothing: artifact volume dropped ~2.6× (independent of speed), and on matched-task re-runs the thinning persists (~2.5-3.2×), with Innovation's *mechanism coverage* specifically falling 47→9. So the concern is probably *partly* real but mis-instrumented: the right thing to look at is coverage, not the clock. The work is to separate the genuine reduction from the speed-and-task-confound, localize it, and find a remedy that targets coverage rather than duration.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Process-layer (remedy = how the loop enforces/measures coverage); the diagnosis (is the concern valid; is duration a proxy) is the meaning-level grounding done first; structural spec-wording deferred.
- C2 — The verdict must be honest in BOTH directions: not dismiss the concern as "just faster" (the evidence shows real coverage loss), and not over-attack 4.8 (correctness held; the confound is real; efficiency on convergent questions is legitimate).
- C3 — Self-reference: this is 4.8 judging 4.8's own thoroughness → rest on MEASURED external evidence, not introspection.

**Key Insights:**
- K1 — **Duration is a confounded, indirect proxy.** Elapsed time = (model speed) × (amount of work) + (task size). A faster model legitimately does equal work in less time; and a re-walk legitimately has less work. So a duration drop *cannot by itself* establish a thoroughness loss — it mixes at least three causes (speed↑, task↓, breadth↓).
- K2 — **But the concern is validated by a BETTER proxy: coverage.** The mechanism-application count (47→9 in the matched Innovation pair) is a *direct coverage measure*, not a time measure — and it dropped. Coverage is directly measurable from the artifacts; it is the valid instrument the duration concern was reaching for.
- K3 — **The loss is real but LOCALIZED to exploration breadth.** Core analytical coverage held (matched pair: same 5 ambiguities resolved; all Sense Versions; structural checks pass; Sensemaking thinned least at 2.3×). Generative/exploration breadth thinned most (Innovation 4.0×; mechanism-applications 47→9; Decomposition/Critique ~3.4×). The model keeps *correctness* and sheds *breadth-of-sweep*.
- K4 — **The right name for the tendency: convergence efficiency.** 4.8 reaches a sufficient answer faster and stops, rather than exhaustively enumerating the space. That is an exploration/exploitation shift toward exploitation — NOT "laziness" and NOT a loss of capability. It preserves correctness on convergent questions while reducing the breadth of the sweep.
- K5 — **It is a TENDENCY, not a FLOOR.** Within the 4.8 batch, deliberate runs that read full references and forced full coverage (`16-41`, `17-08`) ran ~2.5× fuller than light re-walks (`14-58`, `12-44`). The model CAN sweep wide when execution forces it → the tendency is remediable by execution discipline, not a hard ceiling.
- K6 — **The confound is real and partial.** Recent 4.8 runs were re-walks with priors already in context (less new ground to cover). Part of the volume drop is legitimate task difference. But the matched-pair + mechanism-count evidence shows a genuine residual beyond the confound.
- K7 — **The disciplines already define the right metric; it's just soft + unmonitored.** innovate says "aim for full coverage (all seven mechanisms)"; sensemaking has saturation indicators + an ambiguity-resolution ratio; each discipline reports coverage telemetry. The gap is that these are *soft aims*, not *enforced+counted floors*, and the runner surfaces wall-clock-adjacent checkpoints rather than coverage numbers.
- K8 — **Targeting duration directly would BACKFIRE.** If the remedy were "make runs take longer," the model would generate padding to fill time — inflating duration without adding coverage, which is worse than the disease (it degrades signal AND wastes tokens). The remedy must target coverage, never the clock.

**Structural Points:**
- S1 — Three causes are tangled in the duration drop: (a) model speed↑ (benign), (b) re-walk task↓ (benign confound), (c) exploration-breadth↓ (the real concern). Only (c) is a problem, and only coverage telemetry isolates it.
- S2 — "More coverage" is not universally better — it is the value on *divergent/high-stakes* questions (wide option space, adversarial completeness, genuine innovation) and is waste on *convergent* ones (clear answer). The remedy must be selective.

**Foundational Principles:**
- P1 — Measure the thing you care about directly, not a confounded proxy of it. (Coverage, not wall-clock time.) [methodological]
- P2 — Enforce the property at risk; don't enforce a correlate of it. (Enforce coverage floors; don't enforce duration.) [process]

**Meaning-Nodes:**
- M1 — *convergence efficiency (the tendency)*; M2 — *coverage-not-duration (the metric)*; M3 — *breadth-localized loss*; M4 — *tendency-not-floor (remediable)*; M5 — *selective enforcement (not blanket more-coverage)*; M6 — *padding risk (why not target time)*.

### SV2 — Anchor-Informed Understanding

The user's concern is partly valid but mis-instrumented. Opus 4.8 shows a *convergence-efficiency* tendency — it reaches sufficiency faster and stops, trading exploration breadth for speed. The genuine loss is real but localized (core analysis held; Innovation mechanism coverage dropped 47→9) and is a tendency, not a floor (deliberate runs are ~2.5× fuller). Wall-clock duration can't isolate this (it confounds speed↑ + task↓ + breadth↓); coverage telemetry can, and is what the disciplines already define. The remedy targets coverage, selectively, never duration.

*Meta-Inspection (H8 self-reference): the verdict rests on measured file evidence (word/mechanism counts), not introspection — flagged for Phase 2 grounding. (H4 concept names: "coverage" is the disciplines' own telemetry, not coined.)*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** elapsed time is dimensionally (work ÷ rate) + setup; holding "work" constant, a higher rate (4.8 faster) lowers time with zero thoroughness change. So time is not a clean function of thoroughness. The clean function of thoroughness is coverage (mechanisms applied, ambiguities resolved, perspectives checked) — all directly countable from artifacts. New anchor → **K9: thoroughness is countable; we don't need to infer it from the clock.**

**Human / User:** the user is using the signal they can see (a timer) to flag a real unease (is the new model cutting corners?). The honest response respects the unease (it's partly justified) while swapping their instrument (watch coverage, not minutes). Dismissing it as "just faster" would be wrong and would feel dismissive; endorsing "duration = quality" would entrench a misleading metric.

**Strategic / Long-term:** if the project standardizes on wall-clock time as the quality bar, it will (a) miss real coverage drops that happen *within* a fast run and (b) eventually reward padding. Standardizing on coverage telemetry is durable across model generations (the next model will be faster still). → strong reason to fix the metric now.

**Risk / Failure (the padding trap):** the most dangerous remedy is "make it take longer." It would induce filler, degrade signal-to-noise, and waste tokens — a net loss. Any remedy that even indirectly rewards duration carries this risk. → the remedy must be coverage-anchored and explicitly duration-blind.

**Resource / Feasibility:** coverage floors are cheap to state (the aims already exist); counting them needs either the absent `tools/structural_check.sh` to count, or the runner to surface the disciplines' self-reported telemetry in the checkpoint. The lightest feasible version (surface + flag the telemetry the disciplines already emit) needs no new tooling.

**Definitional / Internal Consistency:** does "convergence efficiency" contradict "max effort"? No — max effort sets the *ceiling* of allowed work; the model's exploration/exploitation balance decides how much of that ceiling it spends on breadth. 4.8 spends less on breadth at the same effort ceiling. Consistent. New anchor → **K10: "max effort" governs the budget cap, not the exploration breadth within it — so a coverage floor is a distinct, non-redundant lever.**

**Phase / Calibration-State:** the remedy's selectivity (S2) IS phase/calibration-dependent: which questions are "high-stakes/divergent" (needing enforced breadth) vs "convergent" (where breadth is waste) is a runtime judgment. The remedy must include a determination of *when* to enforce, not a blanket rule. → flagged for Decomposition (the determination mechanism is process-deferred, but the *need* for it is meaning-level).

**Self-Reference (failure mode #6):** this inquiry is 4.8 assessing 4.8. External grounding: every load-bearing claim is a MEASURED fact about files — word counts, the 47→9 mechanism count, the matched-pair ratios — produced by bash over the artifacts, not by my introspecting "do I feel thorough?". The convergence-efficiency verdict is an inference from those external counts. Check passed (the evidence is adversarial to my own comfort — it documents that my model under-covers).

### SV3 — Multi-Perspective Understanding

The concern is partly valid and mis-instrumented. Duration confounds speed↑ + task↓ + breadth↓; only coverage isolates the real loss, which is breadth-localized (Innovation mechanism coverage), correctness-preserving, and a remediable tendency. "Max effort" caps the budget but doesn't govern breadth-within-budget, so a coverage floor is a distinct lever. The remedy must be coverage-anchored, duration-blind, and *selective* (enforce breadth where breadth is the value; not blanket). The verdict stands on measured file evidence, guarding self-reference.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is wall-clock duration a valid proxy for reasoning thoroughness? (the reframe; OT1)

**Strongest counter-interpretation:** "Of course duration tracks thoroughness — more thinking takes more time; a run that's 15 min instead of 40 obviously did less."

**Why the counter fails (structural grounds):** elapsed time = work ÷ rate + task-setup. Three independent variables move it. (1) *Rate*: 4.8 is faster, so the SAME work finishes sooner — pure speed, zero thoroughness change. (2) *Task*: the recent 4.8 runs were re-walks (priors in context) — genuinely less work to do. (3) *Breadth*: less exploration. Only (3) is the concern, and duration cannot distinguish it from (1) and (2). Worse, duration is *gameable* in the wrong direction — padding inflates it without thoroughness. The directly-measurable instrument — coverage (mechanisms applied, ambiguities resolved, perspectives checked) — does isolate (3), and it shows the real drop. So duration is an indirect, confounded, gameable proxy; coverage is the valid one. **Confidence:** HIGH. **Resolution:** duration is NOT a valid proxy; the concern is real but must be measured via coverage. (The concern is validated, the instrument is replaced.)

### Ambiguity 2 — Is the thinning a genuine model tendency, or entirely the re-walk confound? (OT1/OT2)

**Strongest counter-interpretation:** "The 4.8 runs were all lighter re-walks of already-answered questions; the entire volume drop is task difference, and the model is fine."

**Why the counter fails (structural grounds):** two pieces of evidence survive the confound. (a) *Matched-task pairs* — the same question re-run (`19-00`→`14-58`; `15-48`→`16-41`) still shows 2.5-3.2× thinning, holding task type roughly constant. (b) *Mechanism coverage* — 47→9 is a coverage measure independent of volume; a re-walk doesn't mechanically reduce how many innovation mechanisms you apply. So a genuine residual exists beyond the confound. BUT the counter is *partly* right — the confound is real and explains some of the gap. **Confidence:** HIGH. **Resolution:** both causes operate; the confound explains part, a real convergence-efficiency tendency explains the residual (visible in matched pairs + mechanism count). Not "entirely confound," not "entirely model."

### Ambiguity 3 — Is more coverage always better — should we even fight the tendency? (guards the user's implicit assumption; the load-bearing ambiguity)

**Strongest counter-interpretation:** "4.8's convergence efficiency is a FEATURE — it reaches the same correct answer faster without wasteful enumeration. Forcing more coverage just forces padding and waste. Don't fight it."

**Why the counter partially succeeds AND why it fails as a general rule (structural grounds):** it *succeeds* for **convergent** questions — where a clear answer exists (most re-walks), correctness held, and forcing all 7 mechanisms would indeed be waste. It *fails* for **divergent / high-stakes** questions — where the VALUE is the breadth of the sweep itself (wide option spaces, adversarial completeness, genuine innovation). There, early convergence under-covers: you stop at the first sufficient answer and never learn what a wider sweep would have surfaced — and you can't tell, from inside the run, what you missed (the asymmetric "information-loss-in-the-dark" failure). So the tendency is benign on convergent questions and costly on divergent ones. **Confidence:** HIGH. **Resolution:** the remedy must be **selective** — enforce coverage floors where breadth is the value (divergent/high-stakes), and let convergence efficiency stand where it isn't. A blanket "always more coverage" rule would itself be a failure (padding convergent runs). This refines the remedy decisively.

### Ambiguity 4 — Load-bearing concept test + self-reference: is "coverage" the project's real thoroughness measure, and is the verdict externally grounded?

**Counter-interpretation:** "'coverage' is a substitute the loop coined to rationalize 4.8's brevity; and the whole verdict is 4.8 grading itself."

**Why it fails:** "coverage" is not coined here — it is the disciplines' OWN pre-existing telemetry (innovate's Mechanism Coverage; sensemaking's Saturation Indicators + ambiguity-resolution ratio; td-critique's dimension/adversarial coverage; surfacing's coverage criteria). And the verdict rests on MEASURED external facts (word counts, the 47→9 mechanism count, matched-pair ratios from bash over the files) — facts adversarial to my own comfort, not introspection. **Confidence:** HIGH. **Resolution:** coverage is the project's actual thoroughness measure; the verdict is externally grounded; self-reference is guarded.

---

### SV4 — Disambiguated Understanding

All four ambiguities resolve at HIGH confidence and converge: the user's concern is **real but mis-instrumented**. Duration confounds three causes (speed↑, task↓, breadth↓) and only the third is the problem; coverage telemetry isolates it and confirms a genuine, *localized* reduction in exploration breadth (Innovation mechanism coverage), with correctness preserved and the tendency remediable. The remedy must be coverage-anchored, duration-blind, and **selective** (enforce breadth on divergent/high-stakes questions; let convergence efficiency stand on convergent ones). The verdict is grounded in measured file evidence, not introspection.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Duration is an indirect, confounded, gameable proxy; coverage is the valid, directly-measurable one.
- A genuine breadth-reduction tendency exists (convergence efficiency), beyond the re-walk confound, localized to exploration breadth (esp. Innovation), correctness-preserving, and a tendency not a floor.
- "Max effort" caps budget but doesn't govern breadth-within-budget → a coverage floor is a distinct, non-redundant lever.
- The remedy is coverage-anchored, explicitly duration-blind, and selective (divergent/high-stakes vs convergent).

**Eliminated:**
- "Duration proves a thoroughness loss" — KILLED (confounded; coverage is the instrument).
- "The drop is entirely the re-walk confound / the model is fine" — KILLED (matched pairs + 47→9 show real residual).
- "Just make runs take longer" — KILLED (induces padding; worse than the disease).
- "Always force full coverage everywhere" — KILLED (waste on convergent questions; the remedy must be selective).
- "Nothing's wrong, it's pure speed" — KILLED (real breadth loss measured).

**Remaining viable (downstream):**
- The exact coverage-floor levers + how to make them counted/enforced (Innovation).
- The determination of *when* a question is divergent/high-stakes enough to enforce floors (process-deferred mechanism; the NEED is fixed, the mechanism is later).
- Exact spec/runner wording (structural; deferred).

### SV5 — Constrained Understanding

The concern is real but mis-instrumented: Opus 4.8's convergence-efficiency tendency genuinely reduces exploration breadth (measured via coverage, esp. Innovation 47→9 mechanisms), beyond the re-walk confound, while preserving correctness — and it's remediable (a tendency, not a floor). The fix monitors and enforces COVERAGE (the disciplines' own telemetry), never duration, and does so SELECTIVELY on divergent/high-stakes questions. "Max effort" doesn't already cover this (it caps budget, not breadth-within-budget).

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged on the convergence-efficiency model (each refined it — the padding trap, the max-effort distinction, the selectivity — rather than destabilizing it). No model-misfit. Stable.*

### SV6 — Stabilized Model — MVLw Thoroughness on Opus 4.8

**The user's concern is partly valid, but the instrument is wrong. Opus 4.8 exhibits a *convergence-efficiency tendency* — it reaches a sufficient answer faster and stops, trading exploration breadth for speed. That tendency does produce a real reduction, but you cannot see it reliably in the clock; you see it in coverage. So: validate the concern, replace the metric, and enforce coverage selectively.**

The model, in five parts:

1. **Why duration misleads.** Elapsed time mixes three independent causes: the new model is genuinely *faster* (benign), the recent runs were *re-walks* with priors already in context (benign task difference), and the model *explores less breadth* (the real concern). A timer cannot separate them, and it can be gamed the wrong way — padding inflates duration without adding thoroughness. So a duration drop neither proves nor measures a thoroughness loss.

2. **What the real concern is, measured properly.** The valid instrument is *coverage* — how many innovation mechanisms were applied, how many ambiguities resolved, how many perspectives checked — all directly countable from the artifacts, and all already defined as each discipline's own telemetry. Measured that way, there IS a real reduction: in the matched-task pair, Innovation's mechanism-applications fell from 47 to 9, beyond what the re-walk confound explains.

3. **Where it concentrates — and what it spares.** The loss is localized to *exploration breadth*. Core analytical coverage held: the same ambiguities were resolved, all Sense Versions present, structural checks passed, and Sensemaking (the core analytical discipline) thinned least. The generative/breadth disciplines — Innovation most of all — thinned most. The model keeps *correctness* and sheds *breadth-of-sweep*. The honest name for this is convergence efficiency, not laziness: it is an exploration/exploitation shift toward stopping once an answer is sufficient.

4. **It is a tendency, not a floor — so it is remediable.** Within the very same model, deliberate runs that read the full discipline references and forced full coverage ran about 2.5× fuller than light re-walks. The capability is intact; the default posture is briefer. Execution discipline closes the gap.

5. **What to do (the remedy's shape; Innovation/Critique build the specifics).** Three principles. (a) **Measure coverage, not the clock** — monitor the coverage telemetry the disciplines already emit; stop using wall-clock minutes as the quality bar (it will only get more misleading as models get faster). (b) **Enforce the property at risk, not a correlate** — promote the disciplines' soft coverage *aims* (e.g., innovate's "aim for all seven mechanisms") to enforced, *counted* floors, and keep full-reference-reading mandatory; never target duration (it induces padding). (c) **Be selective** — enforce breadth floors where breadth is the value (divergent / high-stakes questions, wide option spaces, adversarial completeness), and let convergence efficiency stand on convergent questions where forcing more would just pad. ("Max effort" does not already cover this: it caps the budget, not how much of the budget goes to breadth.)

**How SV6 differs from SV1:** SV1 suspected the concern was real-but-mis-instrumented and that the clock was weak. SV6 establishes *why* the clock misleads (three confounded causes + gameability), *that* the concern is nonetheless real (coverage measured, 47→9, beyond the confound), *where* (exploration breadth; correctness spared; a tendency not a floor), and the *shape* of the remedy (measure coverage not time; enforce floors not duration; selectively) — with the crucial refinement that more-coverage is not universally better, so enforcement must be selective.

---

## Saturation / Telemetry

- **Perspective saturation:** saturating (later perspectives refined the model — padding trap, max-effort distinction, selectivity — rather than adding new anchor types).
- **Ambiguity resolution ratio:** 4/4 resolved at HIGH confidence; 0 OPEN.
- **SV delta:** large (SV1 "concern real-but-mis-instrumented, clock is weak" → SV6 "convergence-efficiency tendency; measure coverage not time; enforce floors selectively; max-effort doesn't cover it; grounded in measured evidence").
- **Anchor diversity:** multi-pillar (the three-cause confound, the coverage-vs-duration instrument, the breadth-localization, the tendency-not-floor, the selectivity refinement, the padding trap).
- **Failure modes checked:** Status Quo Bias (both directions — not dismissing the concern as "just faster," not over-attacking 4.8: credited correctness-held + confound + legitimate convergent-question efficiency); **Self-Reference Blindness (load-bearing) — verdict rests on MEASURED file evidence (47→9, word counts, matched-pair ratios), adversarial to my own comfort, not introspection**; Clean Resolution Trap (the tempting clean dismissal "it's just speed" was tested and rejected via coverage residual); Premature Stabilization (the "is more coverage always better?" counter genuinely tested → selectivity refinement); Perspective Blindness (the uncomfortable "maybe the tendency is GOOD / maybe I'm wrong it's a problem" perspective checked, Amb. 3).

**Handoff to Decomposition:** structure to partition — (1) the metric reframe (duration confounded → coverage valid); (2) the diagnosis (real residual beyond confound; localized to breadth; correctness spared; tendency not floor); (3) the remedy principle "measure coverage not time"; (4) the remedy principle "enforce floors not duration" (promote soft aims → counted floors; keep reference-reading); (5) the selectivity refinement (divergent/high-stakes vs convergent; the when-to-enforce determination); (6) synthesis + self-reference guard. Candidate sub-questions for /decompose.
