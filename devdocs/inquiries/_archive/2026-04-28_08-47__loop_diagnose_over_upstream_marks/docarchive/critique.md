# Critique: Loop Diagnose Over Upstream Marks

## User Input

Evaluate the candidates from Innovation for correcting the prior finding's "Critique Should Produce Upstream Marks" section.

## Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Evidence quality | 5 | Uses full archived artifacts and human correction rather than lossy precomputed labels. |
| Base-loop weight | 5 | Avoids adding mandatory processing or schema burden to every routine loop. |
| Attribution humility | 5 | Allows mixed, unknown, framing, orchestration, context, and CONCLUDE causes. |
| Diagnostic usefulness | 4 | Produces actionable hypotheses, maintenance candidates, and evaluation gates. |
| Routability / discoverability | 3 | Gives future tools enough structure to find and use diagnostic evidence. |
| Adoption safety | 4 | Avoids premature automatic hooks or new disciplines before repeated evidence. |
| Compatibility with MVL+ | 4 | Preserves normal E -> S -> D -> I -> C and uses wrappers only where appropriate. |

Critical dimensions: evidence quality, base-loop weight, attribution humility, adoption safety.

## Fitness Landscape

### Viable Region

Approaches that preserve full artifacts during routine loops and run diagnosis explicitly when correction-chain evidence exists.

### Boundary Region

Approaches that improve discoverability or future routing but require more evidence before adoption.

### Dead Region

Approaches that add mandatory upstream marks to routine Critique, compress diagnosis into labels too early, or diagnose from `finding.md` alone.

### Unexplored Region

Exact schema for cross-inquiry relationship pointers and long-term diagnostic indexes. This is adjacent to viable territory but not required to answer the current question.

## Candidate Verdicts

### Candidate A: Mandatory Critique Upstream Marks

**Prosecution:** This makes Critique perform extra attribution by default, even when no correction-chain diagnosis is needed. It also pressures Critique to blame upstream disciplines from a single pass, when the actual failure may be framing, orchestration, context, or CONCLUDE. It creates label artifacts that future tools may over-trust.

**Defense:** It gives Resume, Navigation, or future meta-loop tools a stable signal without re-reading full archives. It also captures failure information close to where candidate failures are observed.

**Collision:** The defense is real for routability, but loses on critical dimensions. The archived artifacts already preserve richer evidence, and `LOOP_DIAGNOSE` can produce stable diagnostic outputs when needed. Mandatory marks buy convenience at the cost of evidence quality and attribution humility.

**Verdict:** KILL.

**Constructive output:** preserve local Critique reasoning and optional refinement clues, then diagnose later from archived artifacts.

### Candidate B: Optional Critique Diagnostic Notes

**Prosecution:** Optional notes can become inconsistent and may tempt future agents to treat notes as authoritative diagnosis.

**Defense:** They are lightweight and useful when Critique naturally sees that candidates fail for the same reason. They help the next iteration without imposing a schema or pretending to be full correction-chain diagnosis.

**Collision:** Defense survives if notes are explicitly non-routable and framed as refinement clues.

**Verdict:** SURVIVE with caveat.

**Caveat:** call them `refinement clues`, `diagnostic seeds`, or plain reasoning, not upstream marks.

### Candidate C: Explicit `LOOP_DIAGNOSE` Over Archives

**Prosecution:** It requires more work than reading a label. It also needs a corrected inquiry or improved result for full confidence, so it may not always be immediately usable.

**Defense:** It uses the right evidence at the right time: prior artifacts, human correction, corrected artifacts, and full MVL+ reasoning. It also avoids forcing all failures into upstream discipline attribution.

**Collision:** Defense wins on all critical dimensions. The added work is appropriate because diagnosis is not routine routing; it is maintenance-grade analysis.

**Verdict:** SURVIVE.

**Constructive output:** make this the primary correction-chain diagnosis mechanism.

### Candidate D: Archive Relationship Pointers

**Prosecution:** Relationship metadata can become another schema expansion and may be premature before enough diagnostic runs exist.

**Defense:** Pointers such as `DIAGNOSES`, `COMPARES WITH`, and `CORRECTS` make the artifact graph navigable without adding labels to routine Critique.

**Collision:** The idea is useful, but should stay lightweight and follow existing relationship conventions.

**Verdict:** REFINE.

**Refinement target:** use relationship pointers in diagnostic inquiry `_branch.md` and `_state.md`; do not mandate a new global index yet.

### Candidate E: Derived Diagnostic Index

**Prosecution:** Premature. There are not enough diagnostic findings yet to mine reliable patterns.

**Defense:** Once enough diagnostic findings exist, an index could reveal common failures across disciplines or orchestration stages.

**Collision:** Strong future value, weak present justification.

**Verdict:** REFINE / DEFER.

**Refinement target:** revisit after multiple `LOOP_DIAGNOSE` findings exist.

### Candidate F: Immediate MVL+ Hook For `loop_diagnose`

**Prosecution:** The protocol itself warns against silent mode switching and premature formalization. Adding a hook now risks overfitting from one correction chain.

**Defense:** If the user explicitly says `loop_diagnose`, reading the protocol before branch creation is low-risk and improves consistency.

**Collision:** Explicit trigger support can survive later, but broad automatic inference should not. For this answer, the safer recommendation is use the protocol manually/explicitly and collect cases.

**Verdict:** REFINE.

**Refinement target:** after at least one successful real run, consider a narrow explicit-trigger hook. No silent inference.

### Candidate G: Finding-Only Correction

**Prosecution:** It fixes the wording but fails to explain the architecture and may leave future agents unsure what to do.

**Defense:** It is fast and directly addresses the immediate mistake.

**Collision:** The defense is not enough. The correction needs to clarify routine Critique, archives, diagnosis, and adoption timing.

**Verdict:** KILL as standalone.

**Constructive output:** include the finding correction inside the broader archive-first/on-demand diagnosis architecture.

## Assembly Check

The best assembly is:

1. Keep the prior finding's rejection of discipline self-verdicts.
2. Replace mandatory or expected upstream Critique marks with optional local diagnostic seeds.
3. Make `LOOP_DIAGNOSE` the primary mechanism for correction-chain diagnosis over archived artifacts.
4. Use relationship pointers in diagnostic inquiries for discoverability.
5. Defer indexes and MVL+ hook formalization until repeated diagnostic runs justify them.

This assembly satisfies all critical dimensions and keeps the base loop lean.

## Coverage Map

| Region | Coverage | Result |
|---|---|---|
| Mandatory in-loop marks | Fully evaluated | Dead |
| Optional Critique notes | Evaluated | Viable with caveat |
| Archive-first diagnosis | Fully evaluated | Viable |
| Relationship pointers | Evaluated | Boundary / refine |
| Diagnostic indexes | Evaluated | Defer |
| MVL+ formal hook | Evaluated | Boundary / refine |
| Finding-only edit | Evaluated | Dead alone |

No unexplored region is required to answer the current question. The unexplored schema/index region is a future tooling concern.

## Signal

**TERMINATE.** A clean survivor exists: archive-first, on-demand `LOOP_DIAGNOSE` for correction-chain diagnosis, with optional Critique notes as non-routable local clues.

## Convergence Telemetry

- **Dimension coverage:** all critical dimensions covered.
- **Adversarial strength:** strong; mandatory marks were given their best routability defense and still failed.
- **Landscape stability:** stable.
- **Clean survivor:** yes, Candidate C plus the assembly.
- **Failure modes observed:** none. Main risk, over-attribution, is mitigated by `LOOP_DIAGNOSE`'s confidence and evidence requirements.
- **Overall:** sufficient to conclude.
