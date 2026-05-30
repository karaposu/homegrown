## User Input

`devdocs/inquiries/2026-05-29_17-32__mvlw_run_thoroughness_opus48/_branch.md` (problem context: sensemaking.md [convergence-efficiency verdict]; candidates: the diagnosis→remedy package + R1–R6 + foils F1–F6 in innovation.md; priors + measured evidence in context). Adjudicate the package: is action warranted, are the remedies feasible + padding-resistant, is coverage a valid metric, is the verdict self-reference-guarded; rank R1–R6. Process-layer.

---

# Structural Critique — MVLw Thoroughness Remedy

**Stakes: HIGH** for the spec/runner-changing remedies (R3/R4/R6) → guilty-until-proven-innocent; **LOWER** for the no-tooling practice changes (R1/R2/R5) → innocent-until-proven-guilty (cheap + reversible).

## Phase 0 — Dimension Construction (extracted from Sensemaking)

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Diagnosis honesty** | Is the diagnosis correct AND is the confound credited (not alarmist, not dismissive)? | **CRITICAL** |
| D2 | **Action-warranted** | Is any remedy warranted, or does max-effort already cover it (the do-nothing foil F6)? | **CRITICAL** |
| D3 | **Remedy feasibility** | Are R1–R6 actually doable — esp. R3's absent tooling + R6's stakes-classifier? | HIGH |
| D4 | **Selectivity soundness** | Is selective enforcement right (vs blanket or none)? | HIGH |
| D5 | **Padding / gaming resistance** *(project-specific risk)* | Does any remedy risk inducing padding or coverage-gaming (count mentions, not substance)? | HIGH |
| D6 | **Self-reference integrity** *(project-specific risk)* | Is the verdict externally grounded (4.8 judging 4.8)? | **CRITICAL** |
| D7 | **Metric validity** *(project-specific risk)* | Is "coverage" genuinely better than duration, or just a different flawed proxy? | HIGH |

**Project-specific risk dimension check:** candidate involves the project's own loop/operation → D5 (padding/gaming), D6 (self-reference), D7 (metric validity) are the mechanism-oriented risk axes added beyond the content defaults. ✓

## Phase 1 — Fitness Landscape

- **Viable:** honest diagnosis (confound credited) + warranted, tiered action + feasible immediate remedies + selective enforcement + padding-resistant + externally-grounded + coverage-as-necessary-floor.
- **Dead:** (a) diagnosis dismisses OR over-alarms [fails D1]; (b) "do nothing" despite a measured max-effort-resistant gap [fails D2]; (c) remedy hand-waves its tooling/classifier [fails D3]; (d) blanket enforcement that pads convergent runs [fails D4/D5]; (e) coverage-gaming (counting mentions) [fails D5]; (f) verdict rests on introspection [fails D6]; (g) coverage over-sold as a quality guarantee [fails D7].
- **Boundary:** right direction but R3/R6 under-specified, or the anti-gaming guard left implicit → REFINE.

## Phase 2 — Adversarial Evaluation

### Candidate A — The diagnosis→remedy package (principal)

**Prosecution:**
- *P-a (do-nothing, F6 — the key objection):* "Max effort + 1M context already maximize thoroughness. The 47→9 is the re-walk confound plus the model being efficient. You're manufacturing a problem and bolting runner complexity onto it."
- *P-b (feasibility, D3):* "R3 depends on a `tools/structural_check.sh` that doesn't exist; R6 depends on a 'stakes classifier' that's hand-waved as 'signalable from `_branch.md`'. The load-bearing enforcement remedies are vapor."
- *P-c (padding/gaming, D5):* "Coverage floors get gamed — the model applies 7 shallow mechanisms to hit the count, producing 7× the volume at the same shallow depth. You've re-created padding under a 'coverage' label."
- *P-d (metric, D7):* "Coverage is just another proxy. Mechanism-COUNT ≠ mechanism-QUALITY — a run can apply 7 mechanisms badly or 2 brilliantly. You swapped a time-proxy for a count-proxy; both miss quality."

**Defense:**
- *D-a (vs P-a):* the 47→9 drop occurred **at max effort, on a matched task** (the same question re-run). Max effort was held constant, so it cannot explain the drop; and the task was matched, so the confound cannot fully explain it either. A real, measured, *max-effort-resistant* breadth reduction exists → some action is warranted. But the action is **tiered and selective**: R1/R2/R5 are near-zero-cost (monitor coverage + reinforce existing rules); only R3/R4/R6 are heavier *proposals*. "Do nothing" ignores a measured gap on exactly the divergent questions where it costs most; "do everything" over-builds. The tiered package is the calibrated middle.
- *D-b (vs P-b):* correct that R3/R6 are heaviest and least-specified — which is *why they're tiered as proposals, not immediate actions*. The immediate value (R1/R2/R5) needs **no tooling**. R3 names its dependency honestly and has a light form (surface the coverage telemetry the disciplines *already emit* — no new script needed) and a heavy form (revive the counting script). R6's classifier basis is sketched (question stakes from `_branch.md`'s Goal + Layer Commitment) with the precise rule explicitly deferred. The feasibility gap is *tiered and disclosed*, not hidden.
- *D-c (vs P-c — the critical risk):* the floor must count **substantive** applications, not mentions — and the mechanism already exists: innovate's "marked-inapplicable: `<specific reason>`" override pattern *already* requires substance and *already* flags empty/generic entries as defects. Plus **selectivity (R6) is the primary anti-padding guard** — floors apply only where breadth is the value, so convergent runs are never forced to pad. The package contains its anti-gaming defense; it just needs to state it explicitly.
- *D-d (vs P-d):* correct that count ≠ quality. The honest claim is **not** "coverage = quality" but "coverage is a *necessary floor* that is better-grounded than duration" — (a) it isn't moved by the benign speed/task confounds, and (b) it directly measures the thing that dropped (breadth). Quality is still secured by the adversarial disciplines (Critique itself): **coverage floors ensure the space is swept; the disciplines ensure it's swept well.** The two are complementary, not substitutes.

**Collision:**
- P-a × D-a → **defense wins.** The max-effort-resistant, matched-task 47→9 defeats "do nothing." **D2: PASS** (action warranted) — with the requirement that the diagnosis foreground the confound + correctness-held (so D1 isn't alarmist; present in the package).
- P-b × D-b → **defense partially wins.** R1/R2/R5 feasible now; R3/R6 are honest tiered proposals. **D3: PASS for R1/R2/R5; REFINE for R3/R6** (specify the lightest feasible form: R3 = surface existing telemetry, no new tool; R6 = stakes from `_branch.md`).
- P-c × D-c → **defense wins, REFINE required.** The anti-gaming defense (substance-counting via the existing override pattern + selectivity) must be made **explicit** in the package. **D5: PASS as refined.**
- P-d × D-d → **defense wins, REFINE required.** State coverage as a **necessary-not-sufficient floor paired with the adversarial disciplines**, not as a quality guarantee. **D7: PASS as refined.**
- **D6 (self-reference):** the verdict rests on **measured file evidence** (the 47→9 count, matched-pair ratios, per-discipline word counts from bash over the artifacts) — facts adversarial to the evaluating model's own comfort, not introspection. **D6: PASS.**

**Position:** **VIABLE.** The core (honest diagnosis + measure-coverage-not-time + tiered/selective enforcement) passes all CRITICAL dimensions under the high-stakes burden. Three REFINEs fold in: R3/R6 specify their lightest feasible form; the anti-gaming guard (substance + selectivity) is made explicit; coverage is framed as a necessary floor paired with the adversarial disciplines, not a quality guarantee.

### Candidates B — The foils

| Foil | Verdict | Why |
|---|---|---|
| **F1 (duration is the metric)** | **KILL** | confounded (speed/task/breadth) + gameable by padding. |
| **F2 (no real loss — all confound/speed)** | **KILL** (confound credited) | 47→9 at-max-effort-on-matched-task is a residual beyond the confound. |
| **F3 (don't measure, trust the model)** | **KILL** | the drop went unnoticed except via the crude clock; a cheap coverage signal is needed. |
| **F4 (soft aims are enough)** | **REFINE→selectivity** | soft aims demonstrably failed (4.8 met section-checks while under-covering); enforce, but selectively. |
| **F5 (blanket floors on every run)** | **KILL-as-stated** | pads convergent runs; re-creates wasteful enumeration. Selectivity required. |
| **F6 (max-effort covers it / do nothing)** | **KILL** | max-effort caps the *budget*, not exploration *breadth*; the 47→9 happened AT max effort. **The load-bearing kill.** |

## Phase 3 — Verdicts

- **Candidate A (the package): SURVIVE** with three REFINEs (R3/R6 lightest-feasible form; explicit anti-gaming guard; coverage-as-necessary-floor framing). Passes all CRITICAL dims under high-stakes burden.
- **Ranked remedies:**
  1. **R1 (measure coverage, not the clock)** — SURVIVE, highest confidence, immediate, zero-cost. *The core answer to the user.*
  2. **R5 (keep full-reference-reading mandatory)** — SURVIVE, immediate; already a rule, demonstrably helps.
  3. **R2 (surface coverage telemetry + flag under-par in the checkpoint)** — SURVIVE, light runner change, no new tooling.
  4. **R6 (selective enforcement by question stakes)** — SURVIVE as principle; REFINE the classifier (basis sketched; precise rule deferred).
  5. **R3 / R4 (counted coverage floors / checklist)** — REFINE: adopt the light form first (surface the disciplines' existing self-reported telemetry + substance-counting via the existing override pattern); the full structural-check tooling is a deferred proposal (the script is absent).
- **Foils:** F1/F2/F3 KILL, F4 REFINE→selectivity, F5 KILL-as-stated, F6 KILL.

## Phase 3.5 — Assembly Check

The survivors assemble into the **tiered coverage-gated package**: *measure coverage not time (R1) + keep reference-reading (R5)* now → *surface + flag coverage telemetry (R2)* as a light runner change → *selective counted floors (R6 + R3/R4 light form)* as proposals — with the **anti-gaming guard** (count substance via the existing marked-inapplicable pattern + selectivity) and the **necessary-not-sufficient framing** (coverage floors sweep the space; the adversarial disciplines ensure quality) folded in. **Emergent property:** the package makes the loop self-policing on coverage *with zero reference to wall-clock time* — which fixes the measured drop AND immunizes the project against the next (faster) model. No new failure surface; the assembly is VIABLE.

## Phase 4 — Coverage + Convergence

- **Coverage:** all four problem axes (is-there-a-problem / what-to-measure / how-to-enforce / when-to-enforce) evaluated; foils map the dead regions (do-nothing, blanket, trust-only, duration-metric); no large unexplored region.
- **Convergence:** a clean **SURVIVE** exists with no critical-dimension caveat (R1/R2/R5 immediate, high-confidence); the REFINEs sharpen R3/R6 but open no new region; landscape stable.
- **Signal: TERMINATE** — coverage sufficient + convergence reached + clean SURVIVE. The question is answered.

## Convergence Telemetry

- **Dimension coverage:** 7 dimensions (4 default-derived + project-specific D5/D6/D7); all applied.
- **Adversarial strength:** **STRONG** — prosecution constructed do-nothing (P-a), feasibility-vapor (P-b), padding/gaming (P-c), and metric-is-also-flawed (P-d); the F6 do-nothing attack was genuine, and it forced the load-bearing "max-effort-resistant 47→9" defense.
- **Landscape stability:** STABLE (the REFINEs were anticipated in Innovation's tiering; no new region).
- **Clean SURVIVE exists:** YES (R1/R2/R5).
- **Failure modes observed:** **none.** Wrong-Dimensions guarded (extracted + project-specific); Rubber-stamping guarded (4 KILLs incl. the do-nothing foil; strong prosecution); Nitpicking guarded (defense + REFINEs, not all-KILL; 3 remedies SURVIVE clean); Dimension-Blindness guarded (D5/D6/D7 added); False-Convergence guarded (clean SURVIVE on the immediate remedies); **Self-Reference-Collapse guarded** — the verdict rests on measured external evidence (47→9, matched-pair ratios, per-discipline counts from bash over the files), the remedy patterns are external domains (CI coverage-gates, surgical checklists), and the diagnosis is adversarial to the evaluating model's own comfort.
- **Overall: PROCEED / TERMINATE** — the package SURVIVES (with REFINEs); the question is answered.

### Signal to the loop
**TERMINATE.** Ranked survivor: the **tiered coverage-gated remedy** — (now, no tooling) measure coverage not the clock + keep reference-reading; (light) surface coverage telemetry + flag under-par; (proposals) selective counted floors by question stakes, anti-gaming via substance-counting + selectivity, coverage as a necessary floor paired with the adversarial disciplines. Diagnosis: the concern is partly valid but mis-instrumented — a real, max-effort-resistant, breadth-localized convergence-efficiency tendency, remediable. Ready for CONCLUDE.
