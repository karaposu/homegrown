# Innovation: Loop Diagnose Over Upstream Marks

## User Input

Should the prior finding replace "Critique should produce upstream marks" with a separate `LOOP_DIAGNOSE`-style protocol that analyzes existing inquiry artifacts and `docarchive/` outputs when inner-loop diagnosis is needed?

## Seed

The seed is a dissatisfaction: the prior finding solved self-verdict risk but introduced a new default processing burden by locating upstream diagnosis inside routine Critique output.

The direction signal is: use existing artifacts better before adding new marks.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** Treat upstream diagnosis not as live routing but as postmortem analysis. Under that lens, the important input is not a Critique mark; it is the preserved evidence trail.

**Focused:** Reframe `Critique Should Produce Upstream Marks` as `Critique Should Preserve Diagnostic Evidence`. The actual attribution should happen in a separate diagnostic MVL+ run.

**Contrarian:** Keep upstream marks only for high-stakes loops where immediate rerun decisions are needed, but treat that as a gated mode, not default Critique behavior.

### 2. Combination

**Generic:** Combine `docarchive/`, human correction, and MVL+ into an explicit diagnostic workflow.

**Focused:** `LOOP_DIAGNOSE = prior inquiry artifacts + human correction + corrected inquiry artifacts + MVL+`. This creates evidence-backed failure hypotheses without changing the base loop.

**Contrarian:** Combine routine Critique notes with later `LOOP_DIAGNOSE`: Critique can leave optional diagnostic seeds, but `LOOP_DIAGNOSE` decides attribution later.

### 3. Inversion

**Generic:** Instead of "mark now so future systems can diagnose," invert to "archive now so future systems can diagnose from full evidence."

**Focused:** Do not ask every Critique output "which upstream discipline failed?" Ask only when a correction chain exists, and then let the diagnostic inquiry read the full artifact trail.

**Contrarian:** If no corrected inquiry exists, do not diagnose root cause yet. Record the correction signal as an observation and wait for comparative evidence.

### 4. Constraint Manipulation

**Generic:** Add the constraint "zero extra mandatory fields in routine Critique." This forces diagnosis into an on-demand protocol.

**Focused:** Add the constraint "diagnosis must consider non-discipline failures." This makes `LOOP_DIAGNOSE` stronger than upstream discipline marks because it can attribute to framing, orchestration, context elicitation, or CONCLUDE.

**Contrarian:** Remove the constraint that diagnosis requires a corrected inquiry. This enables partial diagnosis, but lowers confidence. It should be allowed only as explicitly partial, not as full `LOOP_DIAGNOSE`.

### 5. Absence Recognition

**Generic:** What is missing is not upstream marks; it is a named workflow for analyzing correction chains.

**Focused:** The missing artifact is a diagnostic finding with hypotheses, confidence, maintenance candidates, and evaluation gates.

**Contrarian:** The archive may also need lightweight relationship pointers so diagnostic runs can find correction chains without relying on memory. That is separate from Critique marks.

### 6. Domain Transfer

**Generic:** This resembles incident postmortems. Systems do not require every runtime log line to pre-label root cause. They preserve logs, traces, and events, then run a postmortem when an incident occurs.

**Focused:** `docarchive/` is the trace log. `LOOP_DIAGNOSE` is the postmortem protocol. Critique marks are like premature root-cause labels inside a log line.

**Contrarian:** Some runtime monitors do emit alerts. By analogy, Critique may emit local warnings, but a warning is not the postmortem.

### 7. Extrapolation

**Generic:** If many correction-chain diagnoses accumulate, the system can later mine them for repeated failure patterns.

**Focused:** Future MVL+ can add an explicit `loop_diagnose` hook once 5 to 10 real diagnostic runs show stable trigger language and output structure.

**Contrarian:** If diagnosis becomes frequent, a derived index or summary layer may become useful. But that should be generated from archived artifacts and diagnostic findings, not added as mandatory metadata to every base loop.

## Candidate Architectures

### Candidate A: Mandatory Critique Upstream Marks

Every Critique output includes upstream `PROCEED / FLAG / RE-RUN` marks.

**Novelty:** low.

**Scrutiny survival:** weak. It adds burden, risks over-attribution, and duplicates later archive analysis.

**Fertility:** medium, because it creates routable metadata.

**Actionability:** high, but the action may be wrong.

**Mechanism independence:** weak; only survives when routability is weighted above evidence quality.

**Status:** weak candidate.

### Candidate B: Optional Critique Diagnostic Notes

Routine Critique may include local notes when candidate failures clearly imply next-iteration guidance, but these notes are not standardized upstream marks.

**Novelty:** medium.

**Scrutiny survival:** strong. It preserves useful clues without mandatory attribution.

**Fertility:** medium. Notes can seed later diagnosis.

**Actionability:** high for immediate rerun/refinement.

**Mechanism independence:** strong; supported by lens shift, combination, and domain transfer.

**Status:** useful supporting candidate.

### Candidate C: Explicit `LOOP_DIAGNOSE` Over Archives

Use `homegrown/protocols/loop_diagnose.md` to frame a new MVL+ diagnostic inquiry when a correction chain exists.

**Novelty:** high in this context.

**Scrutiny survival:** strong. It uses full artifacts, human correction, and comparative evidence.

**Fertility:** high. It can produce maintenance candidates, evaluation gates, and future protocol evidence.

**Actionability:** high when required inputs exist.

**Mechanism independence:** very strong; supported by combination, inversion, absence recognition, and domain transfer.

**Status:** strongest candidate.

### Candidate D: Archive Relationship Pointers

Keep current archived artifacts, but add explicit relationship pointers between weak prior inquiries, corrected inquiries, and diagnostic findings.

**Novelty:** medium.

**Scrutiny survival:** medium-high. It improves discoverability without adding diagnosis to Critique.

**Fertility:** high for future tooling.

**Actionability:** medium; requires a relationship convention.

**Mechanism independence:** medium; mostly from absence recognition and extrapolation.

**Status:** promising later enhancement, not required for the present correction.

### Candidate E: Derived Diagnostic Index

Periodically scan completed diagnostic findings to identify common failure patterns across disciplines or orchestration stages.

**Novelty:** medium.

**Scrutiny survival:** medium. It is useful later but premature before several diagnostic runs exist.

**Fertility:** high for system maintenance.

**Actionability:** low now.

**Mechanism independence:** medium.

**Status:** defer.

### Candidate F: Immediate MVL+ Hook For `loop_diagnose`

Modify MVL+ now so explicit `loop_diagnose` triggers read the protocol before branch creation.

**Novelty:** medium.

**Scrutiny survival:** medium. The protocol itself suggests this only after at least one successful use, and warns against silent automatic inference.

**Fertility:** high if the workflow repeats.

**Actionability:** medium.

**Mechanism independence:** medium.

**Status:** refine; recommend as a future branch experiment after this protocol is tested on real correction chains.

### Candidate G: Finding-Only Correction

Only edit the prior finding to say "use `LOOP_DIAGNOSE`" and do not create broader architecture guidance.

**Novelty:** low.

**Scrutiny survival:** medium. It fixes the immediate sentence but misses the wider boundary model.

**Fertility:** low.

**Actionability:** high but shallow.

**Mechanism independence:** weak.

**Status:** insufficient alone.

## Assembly Check

The strongest architecture combines Candidates B, C, and a deferred version of D/F:

1. Routine Critique may preserve local diagnostic notes as refinement guidance.
2. The primary failure-attribution mechanism is explicit `LOOP_DIAGNOSE` over archived artifacts.
3. Diagnostic findings can later create relationship pointers and pattern indexes.
4. MVL+ hook adoption should wait until real uses prove trigger and output stability.

## Proposed Correction

Replace:

> Critique should produce upstream marks.

With:

> Routine Critique should preserve candidate evaluation evidence and may leave local refinement clues. Upstream or loop-level failure attribution should be performed by an explicit `LOOP_DIAGNOSE`-style MVL+ inquiry over existing archived artifacts when a correction chain exists.

## Innovation Telemetry

- **Generators applied:** 4/4.
- **Framers applied:** 3/3.
- **Convergence:** yes; 5 mechanisms converge on archive-first, on-demand diagnosis.
- **Survivors tested:** 3/7 survive or refine.
- **Failure modes observed:** none. The most uncomfortable candidate, mandatory Critique marks, was tested and weakened.
- **Overall:** sufficient for Critique.
