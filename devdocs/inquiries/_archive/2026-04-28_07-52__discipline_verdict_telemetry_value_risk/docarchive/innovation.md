# Innovation: Discipline Verdict Telemetry Value Risk

## User Input

`devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/_branch.md`

## Seed

Homegrown may need a shared `PROCEED / FLAG / RE-RUN` verdict format across disciplines, but the user is concerned that this could become rigid, misleading, or low-quality self-evaluation.

Direction: find a contract that gives Resume, Navigation, and future meta-loop logic usable signals without pretending the disciplines can perfectly judge themselves.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** Treat verdicts as "quality labels."

- Test: weak. This invites overclaiming and false confidence.

**Focused:** Treat verdicts as "process sufficiency labels."

- Test: strong. A discipline can judge whether its own process ran sufficiently better than it can judge final truth.

**Contrarian:** Treat verdicts as "audit notes," not routing controls.

- Test: useful. This avoids premature automation while still collecting data.

### 2. Combination

**Generic:** Combine verdict label with discipline telemetry.

- Test: strong. The label becomes interpretable only when attached to evidence.

**Focused:** Combine verdict label + risk + suggested routing + calibration note.

- Test: strongest candidate. It creates a compact interface for human review and future automation.

**Contrarian:** Combine verdicts with user correction chains rather than live routing.

- Test: strong for self-maintenance. It turns verdicts into retrospective learning material.

### 3. Inversion

**Generic:** What if no verdicts are added?

- Result: outputs stay flexible but hard to resume, compare, and route.
- Test: fails long-term goals.

**Focused:** What if `PROCEED` is not permission to trust, but permission to continue with visible assumptions?

- Result: `PROCEED` becomes modest and safe.
- Test: survives.

**Contrarian:** What if `RE-RUN` should not automatically rerun?

- Result: at current maturity, `RE-RUN` should mean "minimum process failed; rerun recommended," not "runner must obey."
- Test: survives for Level 0-1.

### 4. Constraint Manipulation

**Generic:** Add constraint: every verdict must cite concrete evidence.

- Test: strong. Reduces label-only compliance.

**Focused:** Add constraint: every verdict must declare scope.

- Test: strong. Prevents `PROCEED` from implying final truth.

**Contrarian:** Add constraint: no hard routing until retrospective calibration exists.

- Test: strong. Keeps the system from over-automating weak self-report.

### 5. Absence Recognition

**Generic:** Missing: a shared parse point across discipline outputs.

- Test: real absence.

**Focused:** Missing: a calibration surface for comparing discipline self-assessments against later outcomes.

- Test: strategically important. Without this, self-maintenance has no evidence trail.

**Contrarian:** Missing: a way to preserve uncertainty without stopping the loop.

- Test: important. `FLAG` fills this role if defined as "continue with named risk."

### 6. Domain Transfer

**Generic:** CI status transfer: pass/warn/fail.

- Test: useful but incomplete. Software tests have clearer ground truth than cognitive protocol outputs.

**Focused:** Clinical triage transfer: stable / watch / intervene.

- Test: useful analogy. The label routes attention, not certainty.

**Contrarian:** Aviation checklist transfer: a checklist is valuable only when tied to actual checks, not just signatures.

- Test: supports evidence-backed verdict blocks over bare labels.

### 7. Extrapolation

**Generic:** As inquiry folders grow, freeform outputs become harder to scan.

- Test: high confidence.

**Focused:** As Navigation/meta-loop behavior matures, it will need routable signals across many MVL runs.

- Test: high confidence.

**Contrarian:** As automation increases, uncalibrated self-verdicts could amplify errors faster.

- Test: high confidence. This argues for advisory verdicts first.

## Candidate Designs

### Candidate A - Label-Only Verdict Footer

```markdown
**Overall: PROCEED**
```

Verdict: Kill.

Reason: easy to parse, but too thin. It creates fake confidence and gives no evidence for correction or calibration.

### Candidate B - Evidence-Backed Advisory Verdict Block

```markdown
## Discipline Verdict

**Overall: PROCEED | FLAG | RE-RUN**
**Scope:** Process sufficiency for this discipline, not final truth.

- **Evidence:** [2-4 concrete discipline-specific signals]
- **Risk:** [known weakness if downstream continues]
- **Suggested routing:** [continue / continue with caution / rerun this discipline]
- **Calibration note:** [what later evidence would confirm or disconfirm this verdict]
```

Verdict: Survives.

Reason: routable, readable, humble, and useful for retrospective learning.

### Candidate C - Immediate Hard Routing

Rules:

- `PROCEED` continues.
- `FLAG` branches or pauses.
- `RE-RUN` automatically reruns.

Verdict: Kill for now; maybe revive later.

Reason: current self-verdicts are not calibrated. Hard routing would make self-report errors operationally powerful too early.

### Candidate D - Structured `_state.md` Verdict Storage

Store each discipline verdict in `_state.md` after each run.

Verdict: Defer.

Reason: valuable for machine consumption, but not required for the first version. Start with markdown contract; add structured state when Resume or Navigation actually consumes it.

### Candidate E - Split Process Verdict From Outcome Verdict

Each discipline verdict explicitly says it is judging process sufficiency. The final `finding.md` can later judge whether the inquiry answered the question.

Verdict: Survives.

Reason: prevents category error. Exploration and Sensemaking cannot know final outcome quality, but they can expose their own sufficiency and uncertainty.

### Candidate F - Keep Prose Telemetry Only

Do not add shared labels; let each discipline describe quality in its own words.

Verdict: Kill as the long-term contract.

Reason: flexible but not routable. It blocks Resume, Navigation, meta-loop, and comparative diagnostics from reliably consuming discipline quality signals.

## Assembly Check

The strongest assembly is:

```text
Evidence-backed advisory discipline verdicts
  + process-sufficiency semantics
  + discipline-specific evidence
  + no hard routing yet
  + future retrospective calibration
```

This assembly has emergent value because each piece compensates for another:

- Shared labels make outputs routable.
- Evidence prevents empty labels.
- Process scope prevents overclaiming.
- Advisory use prevents premature automation.
- Calibration makes later autonomy possible.

## Survivors

1. Add standardized verdicts across disciplines.
2. Define them as process-sufficiency telemetry, not final truth.
3. Require evidence, risk, suggested routing, and calibration note.
4. Keep criteria discipline-specific.
5. Treat verdicts as advisory until enough retrospective calibration exists.
6. Defer structured `_state.md` storage until a consumer actually uses it.

## Innovation Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES - lens shifting, combination, constraint manipulation, absence recognition, domain transfer, and extrapolation all converge on evidence-backed advisory telemetry.
- **Survivors tested:** 6 / 6 candidate designs tested.
- **Failure modes observed:** None. The run avoided label-only premature evaluation and tested contrarian cases.
- **Overall: PROCEED**
