# Innovation: Resume Protocol Usecase

## User Input

`devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/_branch.md`

## Seed

Homegrown has working inline resume logic in MVL/MVL+, but also has a standalone `homegrown/protocols/resume.md` that is richer, telemetry-aware, and unused. The question is what role Resume should have now and what future role it could have if made usable.

## Direction / Valuation

The valuable outcome is not preserving a protocol name. The valuable outcome is preventing future runs from blindly building on partial, stale, or self-flagged artifacts while keeping the current MVL/MVL+ workflow simple enough to use.

## Mechanism Outputs

### 1. Lens Shifting

#### Generic

**Idea:** View Resume as a persistence protocol.

Under this lens, MVL/MVL+ already satisfy the need. The protocol's main job is "continue after interruption," and inline resume does that.

**Test:**
- Novelty: low.
- Scrutiny survival: survives for current manual workflows.
- Fertility: limited.
- Actionability: high.
- Mechanism independence: supported by decomposition.

**Status:** Survives as the current-use answer.

#### Focused

**Idea:** View Resume as a trust-boundary protocol.

Under this lens, Resume's job is not continuation. Its job is deciding whether past partial work is safe enough to continue from.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong; it explains the unique verdict-reading logic.
- Fertility: high; leads to telemetry, branch validation, and autonomy.
- Actionability: medium now, high later.
- Mechanism independence: appears again through domain transfer and extrapolation.

**Status:** Strong survivor.

#### Contrarian

**Idea:** View Resume as a symptom of missing state design.

If `_state.md` carried richer per-discipline verdicts, a separate Resume protocol might be unnecessary. The runner could read state directly instead of scanning markdown outputs.

**Test:**
- Novelty: medium.
- Scrutiny survival: partial; better machine design, but not the current Homegrown pattern.
- Fertility: high; suggests future state schema.
- Actionability: low now.
- Mechanism independence: supported by absence recognition.

**Status:** Refine as a future alternative: state-level verdicts may supersede markdown-scanning Resume later.

### 2. Combination

#### Generic

**Idea:** Combine inline resume + standalone telemetry Resume.

Keep inline resume for file continuation, then call Resume only when completed output files exist and standardized verdicts are present.

**Test:**
- Novelty: medium.
- Scrutiny survival: weak unless routing policy is clear.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: supported by constraint manipulation.

**Status:** Conditional survivor after telemetry standardization.

#### Focused

**Idea:** Combine Resume with a manual `resume-check` mode before runtime integration.

Instead of wiring `resume.md` into MVL/MVL+, expose the logic as a diagnostic/audit operation: "inspect this inquiry folder and tell me whether it is safe to resume." It would not control the runner yet.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong; avoids no-wait conflict.
- Fertility: high; generates data about whether telemetry-aware resume is valuable.
- Actionability: high after minimal spec work.
- Mechanism independence: supported by absence recognition and domain transfer.

**Status:** Strong future bridge, but not needed to answer current question.

#### Contrarian

**Idea:** Combine Resume with CONCLUDE instead of MVL/MVL+ resume.

At iteration-complete time, CONCLUDE could verify that all discipline outputs have acceptable verdicts before writing `finding.md`.

**Test:**
- Novelty: medium.
- Scrutiny survival: partial; avoids mid-pipeline waits, but detects problems late.
- Fertility: medium.
- Actionability: medium after telemetry standardization.
- Mechanism independence: weak.

**Status:** Interesting but inferior to a dedicated pre-continuation trust gate.

### 3. Inversion

#### Generic

**Idea:** Instead of asking "how do we use Resume?", ask "what if Resume should not exist?"

If the project stays lean, delete/archive `resume.md` and rely on inline resume until a concrete failure proves the need.

**Test:**
- Novelty: low-to-medium.
- Scrutiny survival: strong for current state.
- Fertility: medium; forces evidence before protocol expansion.
- Actionability: high.
- Mechanism independence: supported by prior continuous-loop finding.

**Status:** Strong current governance candidate.

#### Focused

**Idea:** Invert "Resume reads outputs" to "disciplines write routable state."

Instead of Resume scanning markdown for verdict strings, each discipline updates `_state.md` with a structured verdict. Resume then reads state, not documents.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong technically, but larger change.
- Fertility: high; improves automation.
- Actionability: low-to-medium.
- Mechanism independence: supported by lens shifting.

**Status:** Future architecture candidate; too large for now.

#### Contrarian

**Idea:** Invert "Resume waits on FLAG/RE-RUN" to "Resume never waits; it records risk and continues."

This preserves MVL/MVL+ no-wait behavior while still surfacing quality concerns.

**Test:**
- Novelty: medium.
- Scrutiny survival: weak-to-medium; continuing past RE-RUN may defeat the trust-boundary purpose.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: limited.

**Status:** Refine only if no-wait remains absolute. Better for warning mode than control mode.

### 4. Constraint Manipulation

#### Generic

**Idea:** Add a constraint: no runtime waits inside MVL/MVL+.

Under this constraint, telemetry-aware Resume cannot be wired as written. It can only warn, preflight, or run outside the normal pipeline.

**Test:**
- Novelty: low.
- Scrutiny survival: strong.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: supported by decomposition.

**Status:** Survives as an integration constraint.

#### Focused

**Idea:** Add a prerequisite constraint: Resume may be active only after all five MVL+ disciplines emit standardized verdicts.

This makes `resume.md`'s activation condition explicit and prevents premature wiring.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high; gives a clean build trigger.
- Actionability: high.
- Mechanism independence: strong.

**Status:** Strong survivor.

#### Contrarian

**Idea:** Remove the constraint that Resume must be a protocol file.

Resume could be implemented as runner-native logic only, with no standalone file. The named concept remains in docs, but the executable behavior lives in MVL/MVL+/meta-loop.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong for lean execution, weaker for protocol vocabulary.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: supported by inversion.

**Status:** Viable if minimizing protocol-folder artifacts.

### 5. Absence Recognition

#### Generic

**Idea:** The missing thing is a clear status label on `resume.md`.

It should not look operational if it is not operational. Add a visible dormant/future/precondition status or move it out of active protocols.

**Test:**
- Novelty: low.
- Scrutiny survival: strong.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: supported by protocol hygiene.

**Status:** Strong survivor.

#### Focused

**Idea:** The missing thing is a telemetry contract, not a Resume protocol.

Before touching Resume, define exactly what each discipline must output for routeable verdicts.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: medium.
- Mechanism independence: strong.

**Status:** Strong survivor.

#### Contrarian

**Idea:** The missing thing is empirical evidence that Resume catches real failures.

Do not wire or delete purely by theory. Run a few manual correction chains and see whether a resume-check would have prevented bad continuation.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high; connects to self-maintenance evidence.
- Actionability: medium.
- Mechanism independence: supported by domain transfer.

**Status:** Survives as an evaluation path.

### 6. Domain Transfer

#### Generic

**Idea:** Treat Resume like crash recovery.

Crash recovery systems replay logs and restore to a consistent point. Basic MVL resume is already a crude crash recovery mechanism.

**Test:**
- Novelty: low.
- Scrutiny survival: strong.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: supports current-use framing.

**Status:** Survives as analogy for basic resume.

#### Focused

**Idea:** Treat Resume like CI gates.

CI does not just see that build artifacts exist; it reads pass/fail checks before allowing merge. Telemetry-aware Resume is the same idea for thinking artifacts.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high; suggests verdicts, gates, and override logs.
- Actionability: medium after telemetry standardization.
- Mechanism independence: strong.

**Status:** Strong survivor.

#### Contrarian

**Idea:** Treat Resume like medical triage.

The goal is not to finish the pipeline; the goal is to decide whether the current artifact is safe to continue, needs attention, or must rerun.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong as a conceptual model, but maybe too heavy for current workflow.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: supports trust-boundary framing.

**Status:** Refined into the quality-gate model.

### 7. Extrapolation

#### Generic

**Idea:** If inquiry count grows, basic resume remains useful but not enough.

More folders, more partial runs, and more handoffs will make "file exists" less reliable as a resume signal.

**Test:**
- Novelty: low-to-medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: medium.
- Mechanism independence: supported by strategic sensemaking.

**Status:** Survives.

#### Focused

**Idea:** If meta-loop becomes real, Resume becomes a state-integrity mechanism.

The meta-loop will traverse inquiry space, revisit branches, and resume incomplete frontiers. It will need to know whether old artifacts are trustworthy, stale, superseded, or flagged.

**Test:**
- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: future.
- Mechanism independence: supported by domain transfer.

**Status:** Strong future survivor.

#### Contrarian

**Idea:** If the system evolves toward git-branch experimentation, `resume.md` may be too local.

Future self-maintenance may need branch-level resume: continue a branch, compare branch outputs, stop weak branches, or merge winners. Inquiry-level Resume is only a small subroutine.

**Test:**
- Novelty: high.
- Scrutiny survival: partial; relevant long-term but not immediate.
- Fertility: high.
- Actionability: low now.
- Mechanism independence: weak-to-medium.

**Status:** Future frontier, not current answer.

## Tested Survivors

### Survivor A - Inline Resume Is the Current Main Use

MVL/MVL+ already solve the main current use case: continuing an incomplete inquiry after interruption, session loss, or handoff.

**Strongest objection:** This ignores standalone Resume's richer logic.

**Response:** It only claims current main use, not total future value. It survives.

### Survivor B - Standalone Resume's Unique Value Is Trust-Gated Continuation

The separate protocol is valuable only when it can inspect verdicts and prevent continuation from weak outputs.

**Strongest objection:** This is overbuilt for current Homegrown.

**Response:** Correct for current runtime; that is why it should not be wired now. It survives as future capability.

### Survivor C - Telemetry Standardization Is the Activation Prerequisite

Do not wire standalone Resume until disciplines produce consistent verdicts.

**Strongest objection:** Resume has backward-compatible missing-verdict handling.

**Response:** Backward-compatible PROCEED makes it behave like basic resume while adding complexity. The distinctive value still requires telemetry. It survives.

### Survivor D - Orphan Active Protocol Is the Bad State

The file should either be operational, explicitly dormant/future, or archived/deleted.

**Strongest objection:** Keeping it around is harmless.

**Response:** It is not harmless if future readers believe it is loaded or authoritative. It survives.

### Survivor E - Manual Resume-Check Could Be a Bridge

A future low-risk path is a non-runtime diagnostic that inspects an inquiry folder and reports whether Resume would proceed, flag, or rerun.

**Strongest objection:** This is not what the user asked to build now.

**Response:** Correct. It belongs in future options, not the immediate recommendation. It survives as optional future bridge.

## Assembly Check

The strongest assembly is:

```text
Use inline resume now.
Treat standalone Resume as future trust-gated continuation.
Do not wire it until telemetry exists.
Resolve the current orphan file by archiving/deleting or marking dormant.
Later, validate usefulness through resume-check or telemetry standardization before runtime control.
```

This assembly explains why the project does not use Resume, what effect Resume would have if usable, when it becomes important, and why MVL/MVL+ already have a partial alternative.

## Innovation Telemetry

- Generators applied: 4 / 4
- Framers applied: 3 / 3
- Convergence: YES - six mechanisms converge on "basic inline resume now, telemetry-aware trust gate later."
- Survivors tested: 5 / 5
- Failure modes observed: none visible. The run avoided single-mechanism trap and did not preserve the orphan file by default.
- **Overall: PROCEED** (full mechanism coverage + convergence + tested survivors)
