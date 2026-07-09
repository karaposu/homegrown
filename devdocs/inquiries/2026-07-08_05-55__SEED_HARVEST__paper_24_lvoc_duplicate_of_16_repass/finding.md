---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: paper 24 IS paper 16 (Lieder et al., LVOC) — the first duplicate-aware re-pass

## Question

"Read `devdocs/paper_seed/24.md` fully and use `cognitive_harness/protocols/seed_harvester.md` with it" — intended as harvest run n=4. **Pre-dive verification found the source is a duplicate:** 24.md is the same paper as 16.md (Lieder, Shenhav, Musslick & Griffiths, "Rational metareasoning and the plasticity of cognitive control" — the LVOC model, PLOS Computational Biology 2018), which the harvest already graded on 2026-07-06. The dive therefore ran as a **duplicate-aware re-pass**: document the duplicate, honor the full-read instruction, re-confirm the baseline without double-grading, and gate only what the CHANGED anchor-space can newly generate (the protocol, p21-S1, and p23-S1 all postdate the paper-16 grading).

## Finding Summary

- **⚠ THE DUPLICATE (user-facing):** `devdocs/paper_seed/24.md` = `16.md`. Verified twice: pre-dive (identical title/authors/head; identical counts of four distinctive phrases) and in-read (same five experiments, same three models, same conclusions end-to-end; the 28-line difference is extraction variance — 24.md carries the author-contributions block). **Your paper folder carries a redundant file — delete, rename (e.g. `24_DUPLICATE_OF_16.md`), or leave it; your call.** Nothing was auto-deleted.
- **The baseline verdict is RE-CONFIRMED, not re-issued.** Paper 16's grade (no import; high-confirming-plus + a sharp mirror + quarantine; below paper 15) stands across the full read. Its Refinement Trigger does NOT fire — a proposed seed is not a gained runtime-learned control policy; the fixed-pipeline premise is untouched.
- **Seed-yield: ONE new record — p16-S1, NASCENT** (inspiration/mechanism): *maybe the diversification lever's adaptive variant should LEARN the value of jumping from features + recorded outcomes (LVOC-style) rather than follow a hand-set rule* — a design fork present in no prior record, carrying its own failure-warning from the same source (such learning **mal-transfers** when value isn't additive-linear in the features). Id is source-true (`p16-S1`, not p24-S1 — a redundant file gets no id of its own). Full record in `## Seeds`.
- **The anchor-dependence readout (the dive's method-result): changed anchors changed YIELD.** The same text produced a record it could not have produced at baseline, because the record's anchor (p21-S1's open design fork) and its enabling evidence (the harvest's telemetry stream) did not exist then. One nascent record from a duplicate is modest — exactly what a working fold-discipline should permit, no more.
- **Two reusable method-yields:** (1) **FOLD-INFLATION** named — extending a settled NO beyond its stated premises is the mirror-image of yield-inflation; (2) **the three-condition fold-reopen discipline** — a candidate at a new site clears a settled fold only if (a) the fold's premises name a different site, shown verbatim; (b) the new site's evidence postdates the old adjudication; (c) the candidate is anchored in the new site specifically. Plus the protocol observation that caught the whole thing: **identity-check every harvest source against already-graded sources before framing.**
- **Calibration: in-band** (baseline re-confirmed ✓; yield 0–1 → 1 ✓; all guards held, including the pre-committed nascent cap and the named re-pass-justification pressure).

## Finding

### 1. The duplicate, and what the dive did about it

The pre-read identity check (title/authors + distinctive-phrase counts against the graded corpus) flagged 24.md before any framing was inherited; the full read then closed the question end-to-end. With the fresh-source presumption false, the honest executable form of "harvest paper 24" became a re-pass: the duplicate documented prominently (the articulation carried a MED-FLAG), the "read fully" instruction honored (genuinely new coverage — the paper-16 dive predates the read-fully default), the ladder verdict left with the baseline (re-confirmed, never re-graded), and the only admissible yield-question being what the anchors that postdate the baseline can generate from the same text. The full read also surfaced depth the baseline never cited: the paper's own **maladaptive prediction** (its learning mechanism harms performance when the value being learned isn't additive-linear in the features — demonstrated by a mal-transfer experiment; :921-943) and its **control-inertia** account (control settings start from the previous trial's value and adjust gradually; time pressure shrinks the adjustment — a control-level lock-shape that rhymes with paper 23's Einstellung; :944-953).

### 2. Why one new seed was admissible from an already-graded source

The baseline's no-import fold has three parts, and each names its target: the CONFIRMING part covers "the harness's control improves with experience" (owned by selection-not-steering); the MIRROR covers the harness's improvement paradigm (selection, not reinforcement learning); the QUARANTINE's stated premise is that **"the harness has no numeric utility or reward signal to approximate."** All three still hold at their site. But the candidate's site is different: not the harness's control policy, but **the harvest's own meta-parameters** — specifically the form of p21-S1's adaptive variant — where a numeric, consequence-linked outcome-stream now exists (the seed index's grades and dates; per-dive calibration closes; staleness-streak counts), all of it created after the baseline was graded. The gate ruled that extending the fold's NO beyond its stated premises to kill a candidate at a site that didn't exist would be **fold-inflation**, and admitted the candidate under the three-condition discipline (premises-name-a-different-site, shown verbatim ✓; new evidence postdates ✓; candidate anchored in the new site ✓).

The prosecution's strongest form — "the fold's *spirit* was 'LVOC has no home here,' and a sparse stream doesn't change that" — is documented as this dive's **strongest-failed**: a fold's spirit cannot have been adjudicated at a site that did not exist when the fold was made.

### 3. The seed, honestly capped

The record stops at the FORK — value-learned versus rule-set adaptation — and commits no features and no fitting (that would be development, which the harvest doesn't do). The grade is **NASCENT by pre-commitment**: the telemetry stream is real but roughly two orders of magnitude short of fitting even a crude three-feature predictor; acting now would be fitting noise. The trigger is two observable events, whichever comes first: p21-S1's own maturation-trigger fires (the developer of the adaptive variant then faces exactly this fork, and this record is what they should find), or the telemetry reaches fit-scale (~30–50 protocol dives). The fork carries its own caution from the same source — the paper's demonstrated mal-transfer when the learned value isn't linear in the features — so the future developer inherits the failure mode with the idea.

The kill of the dive: the companion thought "prosecution-effort allocation should be value-learned too" died at the gate — paper 15's checking-economy fold owns that territory, and p23-S1's audit is the measurement step that must produce the very data such an allocator would learn from. Its residue (the allocator question revives if audit data accumulates) lives in p23-S1's orbit, not in a record.

### 4. What the re-pass proves about the protocol

This dive was the crossing's first natural anchor-dependence experiment: same source, new anchors. The readout — one admissible record where the baseline could yield none — validates the protocol's §2 design claim that germs are source-claims × PROJECT ANCHORS, not properties of the source alone. And the duplicate-detection itself earned its place: without the pre-read identity check, the dive would have double-graded a graded source and corrupted the yield accounting.

## Seeds

*(Per the seed_harvester protocol §7–8, delta form. Yield: 1. Also appended to `devdocs/seeds/_seed.md`.)*

```
seed:
  id:                p16-S1
  hypothesis:        "maybe the diversification lever's adaptive variant should LEARN the value
                      of jumping from features + recorded outcomes — LVOC-style: a crude
                      value-predictor (e.g. source-type / staleness-streak-length / anchor-heat →
                      seed-yield / grade / calibration-in-band) trained on the harvest's own
                      telemetry — rather than follow a hand-set rule; the fork carries its own
                      failure mode from the same source: such learning MAL-TRANSFERS when the
                      value is not additive-linear in the features"
  type:              inspiration  (kind: mechanism — a design-fork for a mechanism's form)
  anchor:            p21-S1's adaptive variant, whose FORM its record leaves open (rule-based is
                     the only recorded idea; value-learned vs rule-set is this record's fork) +
                     the harvest's telemetry stream (seed-index grades/dates; per-dive
                     calibration closes; streak counts — all postdating the paper-16 baseline)
  source:            devdocs/paper_seed/16.md (= 24.md, duplicate file; harvested via the
                     24-repass dive) — Lieder, Shenhav, Musslick & Griffiths, PLOS Comp Bio 2018
  source-support:    the LVOC mechanism — feature-based value approximation, Bayesian updating,
                     posterior-sampling exploration (Eqs 6-9, :269-317); learning binds to
                     FEATURES and transfers to novel stimuli, positively and negatively
                     (:834-852); the in-source caution — "in situations where the internal
                     model's assumptions are violated… the control system's plasticity mechanisms
                     may become maladaptive" (:921-943, the BOTH-trials mal-transfer experiment)
  door:              novelty (a design fork present in no record, with worked source machinery)
  grade:             NASCENT — trigger: p21-S1's own maturation-trigger fires (the developer then
                     faces this fork first), OR the telemetry stream reaches the scale of a crude
                     3-feature fit (~30-50 protocol dives), whichever comes first
  move:              transfer (the mechanism-shape; no parameters, no features committed now)
  confidence:        low-med (the fork is real and source-worked; the enabling data is ~2 orders
                     short — the site-distinction from the paper-16 fold is the record's basis)
```

**Gate telemetry:** candidates 3 · gated-in 1 (nascent) · kills 1 (the allocator — owned + premature) · empty-delta dispatched-credited · strongest-failed: the fold's spirit-prosecution · doors: novelty 1 · moves: transfer. The nascent cap was pre-committed at sensemaking and honored. Self-assessment: **PROCEED**.

## Next Actions

### COULD
- **What:** Decide 24.md's fate (delete / rename to a duplicate-marker / leave). **Who:** the user. **Why:** the folder carries a silent dupe; any later walk of the folder would re-hit it.
- **What:** Batch-apply the SIX pending protocol/template one-liners (now including: §11 pre-read identity-check; the fold-reopen three-condition discipline; plus the four older pending lines). **Who:** the user (one edit session). **Why:** the protocol absorbs its run-lessons.
- **What:** The next harvest — paper 22 (the only ungraded number ≤ 24) or 25+ (n=5), with the identity-check now part of the framing step.

## Reasoning

The dive's two opposite risks were: double-grading a graded source as if fresh (killed by the re-pass frame and the no-double-grading rule), and letting the re-pass justify itself by manufacturing a yield (named as a guard; the empty-delta candidate stayed live to the end, and the one survivor had to clear three steelmen — fold-absorption at full strength, premature-development, and too-sparse). The verdict's linchpin is the site-distinction, which was held to the fold's own verbatim premises rather than argued from vibes; the counter-guard (the three-condition discipline) prevents "the site is new" from becoming a universal fold-reopening loophole. The nascent cap was pre-committed before the gate ran, so the grade could not inflate on the experiment's success — which was the dive's readout, not the seed's merit.

## Open Questions

### Monitoring
- **p16-S1's trigger** (two observable events, whichever first — registered above).
- **The killed allocator's residue:** revives inside p23-S1's orbit only if the audit's data accumulates.
- Standing watches unchanged: p21-S1's trigger; p23-S1's audit (LIVE); the provocation second-instance watch (this dive's yield was inspiration — the class didn't move).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
read devdocs/paper_seed/24.md fully and use cognitive_harness/protocols/seed_harvester.md with it
```

</details>
