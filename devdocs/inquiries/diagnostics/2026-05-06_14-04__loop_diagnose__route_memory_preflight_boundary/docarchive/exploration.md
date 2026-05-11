# Exploration: Loop Diagnose - Route Memory Preflight Boundary

## Mode and Entry Point

Mode: artifact exploration with diagnostic framing.

Entry point: signal-first. The signal is the user's correction: the prior answer still felt messy because "cheap Route-Memory Preflight plus full Route Memory Review" sounded like Navigation had gained a side ritual instead of a clean status classification inside normal intake.

## Evidence Read

Required LOOP_DIAGNOSE fields were present:

- `prior_path`: `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`
- `corrected_path`: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`
- `human_correction`: the user said the prior answer still felt messy and asked to start by understanding why the "cheap Route-Memory Preflight plus full Route Memory Review" model did not feel clean.
- `optional_context`: the prior inquiry fixed project-level versus bounded split by saying every Navigation run should do a cheap Route-Memory Preflight; the corrected inquiry reframed that as route-memory status classification inside normal Freshness Preflight or context intake.
- `diagnostic_goal`: identify what the prior loop missed about naming, operation boundaries, status classification versus full review, and possible failures in premature preflight stabilization, human/user perspective, or critique.

Files read fully:

- Prior `_branch.md`, `_state.md`, `finding.md`.
- Prior `docarchive/exploration.md`, `docarchive/sensemaking.md`, `docarchive/decomposition.md`, `docarchive/innovation.md`, `docarchive/critique.md`.
- Corrected `_branch.md`, `_state.md`, `finding.md`.
- Corrected `docarchive/exploration.md`, `docarchive/sensemaking.md`, `docarchive/decomposition.md`, `docarchive/innovation.md`, `docarchive/critique.md`.
- `homegrown/protocols/loop_diagnose.md`.

Evidence volume:

- Prior inquiry artifacts: 813 lines.
- Corrected inquiry artifacts: 1,962 lines.

Targeted active-doc context read:

- `homegrown/navigation/SKILL.md`
- `homegrown/protocols/navigation_context_intake.md`
- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`

These active files were read to test whether the correction points at live implementation surfaces. They still show Freshness Preflight as an every-run step, but do not yet integrate `route_memory_status`; the prior-map overlay routine still uses inline-by-default output language.

## Exploration Cycles

### Cycle 1 - Map the Prior Inquiry

Scan:

- Prior question: should Route Memory Review be tied to "big" or project-level Navigation, or should Navigation always include a route-memory check?
- Prior finding correctly killed project-level versus bounded as the trigger.
- Prior finding stabilized this model:

```text
Every Navigation run performs Route-Memory Preflight.
If route_memory_status = review_needed, run Route Memory Review and save route_memory_review.md.
Otherwise, proceed and record why review was not needed.
```

Signals:

- Strong positive signal: the prior inquiry accepted the user's smell about "big vs bounded."
- Strong positive signal: it moved the trigger from Navigation size to route-memory dependency.
- Strong positive signal: it preserved the artifact rule that full review writes `route_memory_review.md`.
- Failure signal: it promoted "Route-Memory Preflight" as a named universal step.
- Failure signal: "old maps may affect the new map" / route-memory dependency remained broad enough to risk over-triggering review.
- Failure signal: status classification, full review, and Navigation telemetry were adjacent but not sharply separated.

Resolution decision:

Zoom in on whether the prior loop solved the user's first smell but created a new operation-boundary smell.

Probe:

Prior archived outputs show the same stabilized model across stages:

- Exploration: universal cheap route-memory preflight plus conditional full review.
- Sensemaking: universal preflight belongs in Navigation; full review dependency-triggered.
- Decomposition: route-memory preflight feeds Route Memory Review and Navigation telemetry.
- Innovation: Candidate C "Universal Route-Memory Preflight, Conditional Review" survived.
- Critique: Candidate C survived; Candidate D "Fold Into Freshness Preflight" was refined, not made the primary survivor.

Frontier state:

Advancing. The prior loop did not ignore the problem; it corrected one bad boundary but left a second boundary blurry.

Confidence update:

Confirmed: prior loop stabilized "universal Route-Memory Preflight" language.

Confirmed: prior loop saw folding into Freshness Preflight as useful, but did not make "status classification inside intake" the main concept.

### Cycle 2 - Map the Corrected Inquiry

Scan:

- Corrected question explicitly asks why the earlier answer feels messy.
- Corrected finding says the prior answer was directionally right but not clean enough.
- Corrected finding distinguishes two operations:

```text
route-memory status classification
Route Memory Review
```

Signals:

- Corrected Sensemaking says "Route-Memory Preflight" is clean only if it means classification, not a new always-run routine.
- Corrected Sensemaking says the prior answer blurred layers 2 and 3: route-memory classification and route-memory reconciliation.
- Corrected Decomposition makes the first boundary "Terminology and Layer Boundary."
- Corrected Innovation adds a constraint: no new named mandatory routine before every Navigation run.
- Corrected Critique makes "avoid operation proliferation" a critical part of conceptual cleanliness.
- Corrected finding narrows trigger from "old maps may affect the new map" to unresolved material old-route effect.

Resolution decision:

Zoom in on the corrected mechanism:

```text
Prior: every Navigation run performs Route-Memory Preflight.
Corrected: every Navigation run classifies route_memory_status during normal intake.
```

Probe:

Corrected artifacts answer what the prior did not:

- why it feels messy: a named preflight sounds like a side ritual;
- where the cheap part belongs: existing Freshness Preflight or context intake;
- what triggers full review: `review_needed`;
- what `review_needed` means: relevant old route memory has unresolved current disposition and stale or missing disposition could materially change the new map;
- what writes a file: full Route Memory Review only.

Frontier state:

Stable for the corrected model. It is not a total reversal of the prior inquiry. It preserves its direction while tightening naming and operation boundaries.

Confidence update:

Confirmed: corrected inquiry directly repairs the prior "preflight" naming/operation boundary.

Confirmed: corrected inquiry treats the user's discomfort as an important signal, not as cosmetic wording.

### Cycle 3 - Probe Active Navigation Context

Scan:

- `homegrown/navigation/SKILL.md`
- `homegrown/protocols/navigation_context_intake.md`
- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`

Signals:

- Active Navigation has a mandatory Freshness Preflight for every invocation.
- Active Navigation telemetry reports freshness, but not `route_memory_status`.
- `navigation_context_intake.md` routes to `navigator-prior-map-overlay.md` when prior route memory matters.
- `navigation_context_intake.md` still says overlay output mode is owned by the overlay routine.
- `navigator-prior-map-overlay.md` still says inline output by default and save only when durable handoff is needed.
- `navigator-prior-map-overlay.md` says it does not run before every Navigation invocation.

Resolution decision:

Treat active docs as implementation-surface evidence, not as the truth that decides the diagnostic. The prior and corrected inquiries were evaluating these mechanisms.

Probe:

The active docs support the user's concern. The system already has an every-run Freshness Preflight. Adding a separately named every-run Route-Memory Preflight risks operation proliferation. The cleaner path is to add route-memory status classification into the existing intake surface.

The active overlay routine also confirms why naming matters. "Prior map overlay" and "inline unless durable" belong to older models. They do not cleanly express the corrected operation/output boundary.

Frontier state:

Stable. Active source context reinforces the corrected inquiry's implementation direction.

Confidence update:

Confirmed: `route_memory_status` is not yet integrated in active Navigation docs.

Confirmed: active overlay routine still preserves older inline/default and project-warmup framing.

### Cycle 4 - Locate Likely Failure Surfaces

Scan:

Compared prior and corrected discipline outputs stage by stage.

Signals:

- Prior Exploration listed "Route Memory Review is replaced by freshness preflight" as a possibility but stabilized universal preflight plus conditional review.
- Prior Sensemaking treated "universal route-memory preflight" as the stable answer and did not foreground the user's possible discomfort with a new named step.
- Prior Innovation's Candidate D "Fold Everything Into Freshness Preflight" was partial/refined, but the assembly still said "Navigation Freshness Preflight includes Route-Memory Preflight."
- Prior Critique had Coherence as a dimension and refined Freshness Preflight inclusion, but its surviving candidate remained "Universal Preflight, Conditional Review."
- Corrected Critique made "avoid operation proliferation" critical and explicitly constrained wording away from a standalone routine.

Resolution decision:

Keep multiple attributions open. The evidence shows a stage-spanning drift, not a single isolated bad sentence.

Probe:

Candidate failure surfaces:

1. Premature stabilization around the term "preflight." The prior loop found a good replacement for "big vs bounded" and stabilized too soon on a named universal preflight.
2. Insufficient human/user perspective. The prior loop accepted the first user smell but did not ask why the replacement might still feel operationally unnatural to the user.
3. Critique under-attacked operation proliferation. It accepted "adds another preflight field" as a minor cost rather than testing whether a new named preflight is itself the problem.
4. Innovation candidate weighting. "Fold into Freshness Preflight" was present but treated as a refinement under Universal Route-Memory Preflight instead of becoming the primary cleaned-up model.
5. Decomposition boundary. The prior decomposition separated trigger, execution, and output, but did not create a first-class terminology/layer boundary between classification and review.

Frontier state:

Stable with mixed attribution.

Confidence update:

High confidence: prior stabilized an unclean named preflight boundary.

High confidence: Critique did not attack operation proliferation strongly enough.

Medium-high confidence: human/user perspective was insufficiently deep; the prior loop heard "Navigation is Navigation" for size split but not for side-ritual proliferation.

Medium confidence: Exploration/Innovation had the right candidate but underweighted it.

### Cycle 5 - Maintenance Candidate Territory

Scan:

LOOP_DIAGNOSE asks for maintenance candidates only when evidence supports them.

Signals:

- Corrected inquiry does not require a new broad loop mode.
- The reusable problem is naming/layer drift: a cheap classification gets named like an operation.
- Another reusable problem is weak critique dimensions: operation proliferation was not critical enough.
- The relevant prevention should be narrow and phrase-level, not a broad MVL+ rewrite.

Resolution decision:

Pass narrow candidates to later disciplines:

- Operation Boundary Naming Gate: if a proposed "preflight/check/review" is mandatory every run, ask whether it is a true operation or a status field inside an existing operation.
- Status Classification vs Review Gate: distinguish detection/status from reconciliation/disposition before naming files or triggers.
- Critique Operation-Proliferation Guard: when a new always-run named step is proposed, Critique must test whether it should be absorbed into an existing preflight/intake.
- User-Felt-Messiness Anchor: when the user says "this feels messy," Sensemaking must treat that as an architectural signal about boundaries/names, not just as dissatisfaction with the conclusion.

Frontier state:

Open but bounded. Exact file placement for maintenance rules should be deferred to a later materialization task.

Confidence update:

Medium-high for the candidate set.

Low for immediate broad source edits from this one correction chain.

## Jump Scan

Different direction checked: could the corrected inquiry be overcorrecting and merely renaming the same behavior?

Signals:

- Corrected finding preserves every-run route-memory status classification.
- Corrected finding preserves full review when `review_needed`.
- Corrected finding preserves mandatory `route_memory_review.md` for full review.
- Corrected finding kills only the standalone-routine interpretation of "Route-Memory Preflight."

Result:

The correction is not just a style preference. It changes the operation boundary:

```text
before: a named universal preflight operation with conditional review
after: normal intake classification with conditional review operation
```

The behavior remains similar at a high level, but the lifecycle is cleaner and less prone to operation proliferation.

## Convergence Check

Frontier stability: stable. Repeated scans converge on the same issue: the prior answer fixed trigger scale but did not cleanly separate classification from review.

Declining discovery rate: yes. Later probes added stage-attribution nuance, not new conceptual regions.

Bounded gaps: yes. Exact maintenance placement remains open, but the diagnostic territory is mapped.

## Territory Overview

The diagnostic territory has five regions:

1. **Prior result:** killed project-level versus bounded, but stabilized "every Navigation run performs Route-Memory Preflight."
2. **Human correction:** the replacement still felt messy; the answer needed to start from why it was not clean.
3. **Corrected result:** route-memory status classification belongs inside normal Freshness Preflight or context intake; full Route Memory Review is separate and artifact-producing.
4. **Active docs:** Freshness Preflight exists, but route-memory status is not integrated; prior-map overlay still preserves older inline/default language.
5. **Maintenance territory:** prevent cheap classifications from being named or critiqued as separate always-run operations.

## Inventory

Prior artifacts found:

- Correct rejection of project-level versus bounded as trigger.
- Correct preservation of mandatory file when full review runs.
- Status set: `none_detected`, `not_relevant`, `review_needed`, `review_consumed`, `thin_skipped`.
- Surviving phrase: "Universal Route-Memory Preflight, Conditional Review."
- Underweighted alternative: fold status into Freshness Preflight.

Corrected artifacts found:

- Explanation of why the prior answer felt messy.
- Layer split: route-memory status classification versus Route Memory Review.
- Trigger refinement: unresolved material old-route effect.
- Wording constraint: avoid "Route-Memory Preflight" as a standalone routine.
- Critique dimension: avoid operation proliferation.
- Rule: no full review without file; no file without full review.

Targeted active-doc signals:

- Freshness Preflight is already an every-run Navigation step.
- Active Navigation telemetry lacks `route_memory_status`.
- Active prior-map overlay still uses older inline/durable-handoff output mode.

## Signal Log

- Strong signal: prior finding says every Navigation run should include cheap Route-Memory Preflight.
- Strong signal: corrected finding says that wording should mean route-memory status classification inside existing intake, not a standalone routine.
- Strong signal: prior Innovation/Critique had the Freshness Preflight absorption candidate but did not promote it as the main cleaned-up concept.
- Strong signal: corrected Critique makes operation proliferation a critical cleanliness dimension.
- Medium signal: active docs still reflect older implementation surfaces.
- Medium signal: exact source placement for future maintenance is not settled.

## Confidence Map

Confirmed:

- Both inquiry folders exist and all required artifacts were read.
- Prior inquiry stabilized universal Route-Memory Preflight language.
- Corrected inquiry reframed the cheap part as status classification inside normal intake.
- Corrected inquiry preserved full Route Memory Review and mandatory artifact when full review runs.
- Active Navigation docs have Freshness Preflight but not `route_memory_status`.

Scanned:

- Stage-by-stage difference between prior and corrected inquiries.
- Active Navigation context intake and prior-map overlay surfaces.

Inferred:

- Prior loop likely prematurely stabilized on "preflight" after fixing "big vs bounded."
- Prior loop likely underweighted the user's human/operational cleanliness signal.
- Prior Critique likely did not make operation proliferation a strong enough adversarial dimension.

Unknown:

- Whether this failure pattern repeats outside Navigation route-memory discussions.
- Exact rule placement for prevention.
- Whether later source edits already planned elsewhere will absorb this correction.

Confirmed absent:

- Prior artifacts do not use the corrected phrase "route-memory status classification inside normal intake" as the primary model.
- Prior artifacts do not define operation proliferation as a critical critique risk.

## Frontier State

Closed enough for Sensemaking:

- The correction chain is clean.
- The prior model's useful parts and weak boundary are both visible.
- Likely failure surfaces are visible.

Open:

- Which failure surface deserves highest confidence.
- Which maintenance candidate should survive Critique.
- Whether the final diagnostic verdict should be ACTIONABLE or PARTIAL.

## Gaps and Recommendations

Pass to Sensemaking:

- Do not diagnose this as "the prior answer was wrong." It was directionally right but unclean.
- The precise failure is naming/layer drift: a cheap status classification was given the shape of a named universal operation.
- Test whether "preflight" became an attractive label because it solved the first user's smell, then blocked deeper inspection of the new boundary.
