# Innovation: Loop Diagnose - Discipline Verdict Source

## User Input

Generate maintenance candidates from the diagnosis of why the `08-27` inquiry missed the archive-first `LOOP_DIAGNOSE` conclusion later found in the `08-47` inquiry.

## Seed

The seed is a failure chain: a valid anti-self-verdict inquiry overfit to Critique-issued upstream marks because it framed the problem around verdict authority and did not generate an archive-first diagnostic workflow.

Valuation signal: improve future self-maintenance without adding broad protocol rewrites from one correction chain.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** Shift from "which stage should own marks?" to "what workflow consumes existing evidence when diagnosis is needed?"

**Focused:** Add a diagnostic-framing prompt for self-maintenance inquiries: "Is this a routing problem, a diagnosis problem, or both?"

**Contrarian:** Do not fix the base disciplines yet. Treat this as evidence that `LOOP_DIAGNOSE` should be used explicitly for correction chains.

### 2. Combination

**Generic:** Combine branch framing, artifact archive, and human correction into a preflight check.

**Focused:** Before creating `_branch.md` for correction-chain tasks, normalize `prior_path`, `corrected_path`, `human_correction`, `optional_context`, and `diagnostic_goal` using `LOOP_DIAGNOSE`.

**Contrarian:** Combine optional Critique notes with diagnostic later-use: Critique may record diagnostic seeds, but not marks.

### 3. Inversion

**Generic:** Instead of "mark failures now for future diagnosis," invert to "preserve evidence now and diagnose later."

**Focused:** Add an archive-use check to maintenance inquiries: "If `docarchive/` exists, what can it answer without new marks?"

**Contrarian:** If no archive exists, then marks or summaries may become more useful. The maintenance candidate should depend on archive availability.

### 4. Constraint Manipulation

**Generic:** Add the constraint "no new mandatory per-loop fields from one diagnostic chain."

**Focused:** Any proposed new mark or schema must pass a base-loop burden test: does this need to be emitted every run, or can it be derived on demand from archived artifacts?

**Contrarian:** For high-risk live loops, allow explicit gate-mode Critique. But require an explicit mode flag rather than default behavior.

### 5. Absence Recognition

**Generic:** Missing item: a "proposal expansion" step. User-proposed mechanisms need to be expanded into alternatives before being adopted.

**Focused:** Add a check to MVL+ or branch-writing habits for maintenance tasks: "If the user names a mechanism, list at least one non-embedded, one embedded, and one archive-derived alternative."

**Contrarian:** The missing artifact might be a diagnostic index later, but this correction chain does not justify it yet.

### 6. Domain Transfer

**Generic:** Use incident-postmortem practice. Systems preserve logs during normal operation and run postmortems after incidents; they do not require every log line to name root cause.

**Focused:** Treat `docarchive/` as logs/traces and `LOOP_DIAGNOSE` as postmortem. Maintenance candidate: make this analogy explicit in the diagnostic protocol or future documentation.

**Contrarian:** Some monitoring systems do emit alerts. Equivalent here: optional Critique refinement clues may exist, but they are not root-cause diagnosis.

### 7. Extrapolation

**Generic:** If more diagnostic findings accumulate, the system can identify repeated failure patterns.

**Focused:** After 5 to 10 `LOOP_DIAGNOSE` findings, review whether to formalize trigger hooks or build a diagnostic index.

**Contrarian:** If future diagnoses vary widely, avoid formalizing; keep the protocol as explicit manual framing.

## Candidate Maintenance Actions

### Candidate A: Add Explicit LOOP_DIAGNOSE Hook To MVL+

When new MVL+ input explicitly asks for `loop_diagnose` or correction-chain diagnosis, read `homegrown/protocols/loop_diagnose.md` before branch creation.

**Potential benefit:** prevents the runner from creating an ordinary MVL+ branch when the user asks for diagnosis.

**Risk:** low if explicit-trigger only; medium if silent inference is allowed.

**Evaluation gate:** after this current diagnostic finding plus at least 4 more explicit `LOOP_DIAGNOSE` runs, check whether trigger language and outputs are stable.

**Status:** refine / staged adoption.

### Candidate B: Add Archive-Use Check To Diagnostic Branch Framing

For self-maintenance or correction-chain tasks, explicitly ask: "Which existing `docarchive/` artifacts can answer this before we add new marks or schema?"

**Potential benefit:** directly addresses the miss in `08-27`.

**Risk:** low; it is a framing check, not a schema change.

**Evaluation gate:** use in the next 3 correction-chain inquiries and check whether it prevents premature mark proposals.

**Status:** strong candidate.

### Candidate C: Add User-Proposed Mechanism Expansion Check

When the user suggests a mechanism, require at least three alternatives before selecting architecture:

1. embedded in current loop;
2. derived later from artifacts;
3. external or explicit protocol wrapper.

**Potential benefit:** prevents overfitting to a user-proposed mechanism.

**Risk:** low to medium; it adds a small cognitive burden.

**Evaluation gate:** inspect future maintenance inquiries where the user proposes a mechanism; check whether the alternative set is broader than the user's initial suggestion.

**Status:** strong candidate.

### Candidate D: Add Base-Loop Burden Dimension To Critique For Protocol Changes

When Critique evaluates protocol or discipline changes, include a dimension asking whether the change adds mandatory cost to every run.

**Potential benefit:** would likely have weakened mandatory upstream marks in `08-27`.

**Risk:** low; it is a dimension for a class of critiques, not a universal requirement.

**Evaluation gate:** in the next 5 protocol-change critiques, check whether base-loop burden is considered when proposed changes add routine fields or steps.

**Status:** strong candidate.

### Candidate E: Add Artifact-Reuse Dimension To Critique For Diagnostic Changes

When evaluating diagnostic or telemetry changes, include a dimension asking whether existing artifacts already provide the needed evidence.

**Potential benefit:** targets the exact archive blindness in `08-27`.

**Risk:** low.

**Evaluation gate:** next 3 telemetry/diagnostic findings should explicitly answer whether `docarchive/` or existing outputs are enough.

**Status:** strong candidate.

### Candidate F: Add CONCLUDE Overstatement Check

Before finalizing a correction finding, check whether the wording strengthens a survivor beyond the discipline outputs' evidence.

**Potential benefit:** would have softened "Let Critique produce upstream discipline marks."

**Risk:** medium; could make findings more verbose or hesitant if overapplied.

**Evaluation gate:** apply to 3 future correction findings and check whether it catches overstrong recommendations without weakening clear decisions.

**Status:** refine.

### Candidate G: Create Diagnostic Pattern Index Now

Create a cross-inquiry index of recurring discipline failures.

**Potential benefit:** could eventually show repeated failure modes.

**Risk:** premature; one or two diagnostic chains are not enough.

**Evaluation gate:** revisit after at least 10 diagnostic findings.

**Status:** defer.

### Candidate H: Edit Core Discipline Specs Immediately

Modify Sensemaking, Decomposition, Innovation, Critique, and CONCLUDE specs now to encode the above checks.

**Potential benefit:** immediate systemic correction.

**Risk:** too broad for one chain; could overfit and add noise.

**Evaluation gate:** only after repeated diagnostic findings show the same failure pattern.

**Status:** weak candidate / likely kill.

## Assembly Check

The strongest maintenance package is lightweight and staged:

1. Use `LOOP_DIAGNOSE` explicitly for correction-chain diagnosis.
2. Add or follow an archive-use check in diagnostic branch framing.
3. Add a user-proposed mechanism expansion check in maintenance inquiries.
4. Add base-loop burden and artifact-reuse dimensions to relevant protocol-change critiques.
5. Defer source edits and diagnostic indexes until multiple diagnostic findings support them.

This package targets the failure without rewriting fundamentals from one example.

## Innovation Telemetry

- **Generators applied:** 4/4.
- **Framers applied:** 3/3.
- **Convergence:** yes; multiple mechanisms converge on lightweight framing/checklist improvements rather than broad rewrites.
- **Survivors tested:** 5/8 candidates look viable or refinable.
- **Failure modes observed:** none. The strongest overreaction candidate, immediate broad source edits, was included and weakened.
- **Overall:** sufficient for Critique.
