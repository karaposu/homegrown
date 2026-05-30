# Branch: MVLw Run Thoroughness on Opus 4.8 (the "low-duration reasoning" concern)

## Question

The user observes that MVLw runs on the new model (Opus 4.8) take ~15 min of elapsed wall-clock time, while runs on the prior model (Opus 4.7) took ~40 min — both at max effort + 1M-context — and is concerned this reflects a "low-duration reasoning tendency" of the new model (i.e., that it reasons less thoroughly). The inquiry must (subject: the MVLw loop's reasoning thoroughness on Opus 4.8 vs 4.7; action: **diagnose then remedy**; level: **runner + disciplines / cross-cutting**; deliverable: a diagnosis + a set of concrete, evaluated mitigations). The observation targets, preserved separately:

- **(OT1 — is the concern valid?)** Is the new model actually reasoning *less thoroughly*, or is it producing comparable thoroughness *faster*? Wall-clock duration is the user's signal; the inquiry must check whether duration is a valid proxy for reasoning thoroughness, using the actual artifacts as evidence (volume, coverage, perspectives, mechanism coverage, ambiguities resolved, failure-mode guarding), controlling for the confound that the recent 4.8 runs were largely *re-walks of priors already in context* (legitimately less work).
- **(OT2 — if there IS a real thoroughness drop, where is it?)** Which disciplines / which kind of coverage thinned (breadth-of-exploration vs core analytical correctness), and is it a hard model floor or a tendency that responds to execution discipline?
- **(OT3 — what can we do to prevent it?)** Concrete mitigations to keep MVLw reasoning thorough on the new model — spanning what we MEASURE (the metric to monitor instead of, or alongside, wall-clock time) and how the loop ENFORCES coverage (runner / discipline-spec levers). The user's phrasing "prevent this low-duration reasoning tendency" is preserved; the remedy must address the underlying worry (thoroughness), not literally inflate duration.

**Deliverable shape:** a diagnosis (is the concern valid + where the thinning is, grounded in the artifact evidence already gathered) followed by a ranked set of evaluated mitigations (with what survives critique), oriented to the runner + discipline specs.

## Goal

- **Criterion** — an honest, evidence-grounded verdict (not defensive, not self-flagellating) on whether 4.8 reasons less thoroughly, plus mitigations that are concrete and checkable.
- **Use case** — the user decides whether/how to adjust the MVLw runner or discipline specs (or their own monitoring practice) so that 4.8 runs stay thorough.
- **Desired outcome** — clarity on (a) whether the concern is real, (b) where the thinning concentrates, (c) what to measure instead of wall-clock time, and (d) concrete coverage-enforcement levers.
- **What would fail** — (a) accepting "duration = thoroughness" uncritically (a longer run is not automatically a better one; padding is not depth); (b) dismissing the concern as pure model-speed when the evidence shows real coverage reduction (esp. Innovation mechanism coverage); (c) a remedy that targets wall-clock time directly (which would induce padding) rather than coverage; (d) ignoring the re-walk confound and over-attributing the volume drop to the model.

## Source Input

```text
if  you look at last 3 MVLw runs in /Users/ns/Desktop/projects/native/devdocs/inquiries and also if you look at the ones before from devdocs/inquiries/2026-05-28_20-35__routeman_identity_standalone_discipline_redo 

new ones uses opus 4.8 and old ones uses 4.7, both max effort and 1m context model. 

There is one huge difference in terms of MVLw elapsed time. old ones were mostly around 40mins and new ones are aroudn 15min 


i am concerned about this. is there anything we cna do to prevent this low duration reasoning tendency of this new model?
```

## Scope Check

Question covers goal: **YES** — the diagnosis (OT1 validity + OT2 localization) + remedy (OT3 mitigations) covers the goal of an evidence-grounded verdict plus checkable mitigations.

Specific-vs-pattern: the user points at specific runs (last 3 vs the ones from 2026-05-28_20-35 back). The inquiry addresses the BROADER PATTERN those runs illustrate — "does Opus 4.8 under-cover in MVLw, and how do we keep it thorough?" — using the specific runs as evidence. Both in scope; the specific runs are the data.

Remedy-touches-specs note: proposed mitigations may touch the MVLw runner and/or discipline specs (coverage floors, telemetry surfacing, structural-check counting) and/or the user's monitoring practice (what metric to watch). These are PROPOSALS (Next Actions), grounded in the diagnosis — see Layer Commitment.

Transcription-audit note: the input's "and"-joined clauses are setup/controls ("new ones use 4.8 AND old ones use 4.7"; "both max effort AND 1m context") — captured as the controlled comparison. The load-bearing clauses preserved: the observation (elapsed-time drop ~40→~15 min), the concern (the user reads low duration AS low reasoning), and the remedy request ("is there anything we can do to prevent" it). All three appear in Question + Goal. The user's "low-duration reasoning tendency" framing is preserved verbatim AND flagged as an assumption the inquiry will test (is duration a valid proxy for thoroughness?).

## Layer Commitment

Primary layer: **PROCESS.** The actionable core of the question ("is there anything we can do to prevent it?") is about how the MVLw loop *enforces and measures* reasoning coverage — gates, checks, coverage floors, telemetry surfacing. That is the process layer (the steps/mechanisms the loop runs), not a redefinition of any discipline's meaning or a re-shaping of spec sections.

Sequential note (within this one inquiry): the **diagnosis** is upstream meaning/analysis grounding — is the concern valid, and is wall-clock duration a valid proxy for thoroughness? — and is settled first (Surfacing + Sensemaking) before the process-level remedy (Innovation + Critique) is built on it.

Other-layer alternatives considered and explicitly OUT OF SCOPE for this run:
- **Meaning** (what "thorough reasoning" fundamentally IS) — touched only as far as needed to decide whether duration proxies it; not a full redefinition.
- **Structural** (exact spec-section wording for any coverage-floor / telemetry change) — deferred to a follow-up authoring pass; this run decides WHAT process levers, not their final spec prose.

The primary layer is **not ambiguous** (the remedy is about loop process/enforcement), so the pipeline proceeds without a user gate.

## Evidence already gathered (pre-pipeline, to ground Surfacing)

- **Volume, batch-level:** 4.7 MVLw runs average ~23k discipline-words (12 runs, range 11.6k–34.3k); 4.8 runs average ~8.7k (9 runs, range 6.3k–11k) → ~2.6× less volume. Robust across many runs, not a single sample.
- **Matched-task pairs (control for task type):** `2026-05-28_19-00` (4.7, 21.9k) → `2026-05-29_14-58` (4.8, 6.9k) ≈ 3.2×; `2026-05-28_15-48` (4.7, 23.2k) → `2026-05-29_16-41` (4.8, 9.1k) ≈ 2.5×. Thinning persists even on the same question re-run.
- **Where it concentrates:** per-discipline ratios (4.7 avg ÷ 4.8 avg) ≈ Surfacing 3.9× / Sensemaking 2.3× / Decomposition 3.4× / Innovation 4.0× / Critique 3.4×. **Sensemaking thinned least; Innovation thinned most.**
- **Coverage (not just volume):** in the matched pair, the 4.8 run resolved the **same 5 ambiguities** and kept all Sense Versions + passing structural checks, but Innovation mechanism-applications dropped from **47 → 9** — a genuine reduction in exploration breadth, not just terser prose.
- **Not a hard floor:** within the 4.8 batch, deliberate runs that read full references + forced full coverage (`16-41`, `17-08`) ran ~2.5× fuller than light re-walks (`14-58`, `12-44`) — the model CAN go deep when execution forces it.
- **Confound:** the recent 4.8 runs were largely re-walks of priors already in context (less new ground); part of the volume drop is legitimate task difference, not model laziness.

## Synthesis Trigger

OMITTED — this inquiry uses prior MVLw runs as **evidence/data** (measuring their volume + coverage), not as prior findings whose commitments are being synthesized/consolidated/rolled-up into a merged output. No commitments are inherited from them; they are the dataset. (Distinction: looking-at-as-evidence ≠ synthesizing-commitments-from.)
