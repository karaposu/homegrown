# State: MVLw Run Thoroughness on Opus 4.8

## Flow-type
extended-surfacing

## Pipeline
Su → S → D → I → C (always)

## Progress
- [x] Surfacing
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships
- USES-AS-EVIDENCE: all MVLw runs from devdocs/inquiries/2026-05-25 through 2026-05-29 (the 4.7 vs 4.8 comparison dataset)
- META: this inquiry is about the MVLw runner + disciplines themselves (self-referential — guard Self-Reference in Sensemaking + Critique)

## History
- 2026-05-29: Created. Question: is Opus 4.8's shorter MVLw elapsed time (~15min vs 4.7's ~40min) a real reasoning-thoroughness drop, where does it concentrate, and what can we do to prevent it? Layer Commitment: PROCESS (remedy = how the loop enforces/measures coverage); diagnosis (meaning) upstream; structural spec-wording deferred. Synthesis Trigger OMITTED (priors used as evidence/data, not synthesized). Pre-pipeline evidence gathered: 4.7≈23k vs 4.8≈8.7k disc-words (~2.6×, 12 vs 9 runs); matched pairs 19-00→14-58 (3.2×), 15-48→16-41 (2.5×); per-discipline thinning Sensemaking-least(2.3×)/Innovation-most(4.0×); Innovation mechanism-applications 47→9; same ambiguity count + SVs + structural checks held; NOT a hard floor (16-41/17-08 ~2.5× fuller than 14-58/12-44). Confound: recent 4.8 runs were re-walks with priors in context.
- 2026-05-29: Surfacing complete (artifact mode; evidence measured this turn via bash, not recalled). 11 items (core 6 / sub 4 / side 1). Confirmed-absent: stored per-run elapsed-time (corroborated indirectly by volume), coverage-counting structural check. Key concepts: volume-as-independent-corroboration; coverage-vs-volume distinction (correctness held, exploration breadth dropped); Sensemaking-held/Innovation-thinned; tendency-not-floor; re-walk confound; soft-aim-vs-checked-floor; measure-coverage-not-time. Frontier: F1 reframe (duration→coverage proxy), F2 localization, F3 confound weighting, F4 remedy levers, F5 self-reference guard. Structural 5/5. PROCEED. Next: Sensemaking.
- 2026-05-29: Sensemaking complete. VERDICT: concern is PARTLY VALID but MIS-INSTRUMENTED. Opus 4.8 has a **convergence-efficiency tendency** — reaches sufficiency faster + stops, trading exploration breadth for speed. Duration confounds 3 causes (speed↑ benign / re-walk task↓ benign / breadth↓ the concern); only COVERAGE isolates the real loss. Loss is REAL (47→9 mechanisms, beyond confound), LOCALIZED to exploration breadth (Innovation most; core analysis/Sensemaking spared), and a TENDENCY not a floor (remediable). "Max effort" caps budget, NOT breadth-within-budget → coverage floor is a distinct lever. Remedy shape: (a) measure coverage not the clock; (b) enforce floors not duration (promote soft aims→counted floors; keep reference-reading; NEVER target time — induces padding); (c) SELECTIVE (enforce breadth on divergent/high-stakes; let convergence stand on convergent — "more coverage" is NOT universally better). 4/4 ambiguities HIGH. Self-Reference guarded (MEASURED file evidence, not introspection). Structural 6/6. Next: Decomposition.
- 2026-05-29: Decomposition complete. Whole (diagnosis+remedy) → 6 pieces: P1 metric-reframe (duration confounded → coverage valid); P2 phenomenon-verdict (real residual, breadth-localized, correctness-spared, tendency-not-floor); P3 remedy-A measure-coverage-not-clock; P4 remedy-B enforce-floors-not-duration (promote soft aims→counted floors, keep reference-reading, never target time); P5 remedy-C selectivity (divergent/high-stakes vs convergent + the when-determination BASIS); P6 synthesis + self-reference guard + foils. Top-down/bottom-up AGREE on all 6 (HIGH). Dependency: P1,P2 → P3,P4,P5 → P6. Self-eval 3/3 PASS. Determination-mechanism check: P5's when-to-enforce determination — basis IS in scope (process-layer inquiry, stricter than prior meaning-layer re-walks) + sketched; precise classifier structural-deferred. Structural 5/5. Next: Innovation.
- 2026-05-29: Innovation complete (FULL 7-mechanism coverage — deliberately demonstrating the thoroughness it prescribes; warranted as a divergent/high-stakes question per the inquiry's own selectivity principle). 6 concrete remedies generated + tiered by cost: R1 measure-coverage-not-clock (now, no tooling), R2 surface telemetry+flag in checkpoint (light runner change), R3 promote soft aims→counted floors via coverage-counting structural check (needs absent tools/structural_check.sh), R4 per-discipline coverage checklist (applied-or-marked-inapplicable), R5 keep reference-reading mandatory (reinforce), R6 selective enforcement by question stakes. Domain Transfer: CI coverage-gates + surgical checklists (time-blind, coverage-keyed). Foils: F1/F2/F3 KILL, F4 REFINE→selectivity, F5 KILL-as-stated (blanket pads), F6 KILL [critical — max-effort caps budget NOT breadth; 47→9 happened AT max effort → "do nothing" rejected]. Convergence YES (independent grounds). Inherited Frame Audit did NOT fire. Per-piece Inversion 6/6. Failure modes none. Structural 8/8. Next: Critique.
- 2026-05-29: Critique complete (HIGH stakes for spec-changing remedies). 7 dimensions (D1 diagnosis-honesty, D2 action-warranted, D6 self-reference [CRITICAL]; D3 feasibility, D4 selectivity, D5 padding/gaming, D7 metric-validity). Package = **SURVIVE** with 3 REFINEs (R3/R6 lightest-feasible form; anti-gaming guard explicit [substance-counting via existing marked-inapplicable pattern + selectivity]; coverage = necessary-floor-paired-with-adversarial-disciplines, not quality guarantee). Ranked: R1 measure-coverage-not-clock (immediate, top) + R5 reference-reading + R2 surface-telemetry = clean SURVIVE now; R6 selective = SURVIVE-principle/REFINE-classifier; R3/R4 counted-floors = REFINE (light form: surface existing telemetry, no new tool). Foils: F1/F2/F3 KILL, F4 REFINE→selectivity, F5 KILL-as-stated, F6 KILL [do-nothing — defeated by 47→9 AT max effort on matched task]. Self-Reference guarded (measured file evidence; external remedy domains; adversarial to own comfort). Failure modes none. Signal **TERMINATE**. Structural 6/6 (Phase0-4 + telemetry). Next: CONCLUDE.
- 2026-05-29: CONCLUDE complete. finding.md compiled (fresh diagnostic; no refines; no Synthesis re-test). ANSWER: the concern is PARTLY VALID but MIS-INSTRUMENTED — wall-clock time confounds speed↑/task↓/breadth↓; measured by COVERAGE there's a real, max-effort-resistant, breadth-localized reduction (Innovation 47→9; matched pairs 2.5-3.2×) = "convergence efficiency," correctness-spared, a tendency not a floor. REMEDY (never target duration → induces padding): MUST — measure coverage not the clock + keep reference-reading mandatory; COULD — surface coverage telemetry+flag in checkpoint, selective counted floors (substance not mentions); DEFERRED — build coverage-counting structural_check.sh + define the divergent/high-stakes classifier. 5 outputs archived. Status COMPLETE.
