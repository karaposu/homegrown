# Decomposition: Loop Diagnose Over Upstream Marks

## Input

Sensemaking stabilized the model as: archive first, diagnose on demand. Routine Critique should preserve evaluation evidence and local refinement clues, while correction-chain diagnosis should be performed by an explicit `LOOP_DIAGNOSE`-style MVL+ inquiry over existing artifacts.

## Step 1 - Coupling Topology

### Major Elements

1. Base MVL/MVL+ loop execution.
2. Discipline output artifacts.
3. CONCLUDE archival into `docarchive/`.
4. Routine Critique candidate evaluation.
5. Optional Critique refinement clues.
6. Correction-chain diagnosis.
7. `LOOP_DIAGNOSE` protocol framing.
8. Maintenance candidate generation.
9. Future MVL+ hook or formalization.

### Coupling Map

| Element A | Element B | Coupling | Reason |
|---|---|---:|---|
| Base loop execution | Discipline outputs | Strong | Each loop stage produces artifacts. |
| CONCLUDE | `docarchive/` | Strong | CONCLUDE moves outputs into archive. |
| Routine Critique | Candidate verdict evidence | Strong | Verdicts and kill/refine reasons are Critique's native output. |
| Routine Critique | Upstream failure attribution | Moderate | Critique may see clues, but does not have full correction-chain context by default. |
| `docarchive/` | Correction-chain diagnosis | Strong | Diagnosis depends on archived artifacts. |
| Human correction | Correction-chain diagnosis | Strong | The correction signal is required evidence. |
| Corrected inquiry | Correction-chain diagnosis | Strong | Comparative diagnosis needs the later improved artifact. |
| `LOOP_DIAGNOSE` | MVL+ | Strong | It frames a normal MVL+ run, not a separate discipline. |
| Diagnosis | Maintenance candidates | Strong | Maintenance proposals depend on evidence-backed hypotheses. |
| Future hook | Repeated diagnostic runs | Strong | Formalization should depend on observed stability. |

### Topology Summary

Routine Critique is tightly coupled to current candidate evaluation, but only moderately coupled to upstream attribution. Correction-chain diagnosis is tightly coupled to archived artifacts, human correction, and the corrected inquiry. That creates a natural boundary: do not put diagnosis inside routine Critique by default.

## Step 2 - Boundaries

### Boundary A: Routine Loop vs Diagnostic Loop

**Low-coupling cut:** base loop execution produces artifacts; diagnostic loop consumes artifacts later.

**Why this boundary is natural:** the producer does not need to know whether future diagnosis will be required.

### Boundary B: Critique Evidence vs Failure Attribution

**Low-coupling cut:** Critique records candidate evaluation evidence; a later diagnosis attributes failure cause.

**Why this boundary is natural:** evidence capture and causal diagnosis have different context requirements.

### Boundary C: Archive Storage vs Routing Marks

**Low-coupling cut:** `docarchive/` stores full artifacts; routing or diagnosis marks are derived views over those artifacts.

**Why this boundary is natural:** storage should preserve rich evidence without choosing premature labels.

### Boundary D: Protocol Use vs Protocol Formalization

**Low-coupling cut:** use `LOOP_DIAGNOSE` explicitly now; only later decide whether MVL+ should add an automatic hook.

**Why this boundary is natural:** one successful pattern does not justify broad automatic behavior.

## Step 3 - Bottom-Up Boundary Validation

### Irreducible Atoms

- A discipline output file is an artifact.
- A Critique verdict is candidate evaluation evidence.
- A human correction is an external signal.
- A corrected inquiry is comparative evidence.
- A maintenance candidate is a diagnostic output.

### Validation

- Discipline output files naturally group with archive storage, not with routing labels.
- Critique verdicts naturally group with candidate evaluation, not with full correction-chain diagnosis.
- Human correction and corrected inquiry naturally group with `LOOP_DIAGNOSE`, not with the original Critique output.
- Maintenance candidates naturally follow diagnosis, not routine loop execution.

**Boundary confidence:** high. Top-down and bottom-up views agree.

## Step 4 - Question Tree

### Question 1: What should routine Critique be responsible for?

Verification criteria:

- [x] Preserve candidate evaluation reasoning.
- [x] Preserve kill/refine/survive causes.
- [x] Include local refinement guidance when it naturally follows.
- [x] Avoid mandatory upstream discipline marks.

### Question 2: What should `docarchive/` be responsible for?

Verification criteria:

- [x] Preserve root discipline outputs after CONCLUDE.
- [x] Provide the evidence substrate for later diagnosis.
- [x] Avoid lossy preclassification where full artifact evidence is available.

### Question 3: What should `LOOP_DIAGNOSE` be responsible for?

Verification criteria:

- [x] Normalize prior path, corrected path, human correction, optional context, and diagnostic goal.
- [x] Read both inquiries' `_branch.md`, `_state.md`, `finding.md`, root outputs, and `docarchive/` outputs when present.
- [x] Produce evidence-backed hypotheses, confidence, maintenance candidates, and evaluation gates.
- [x] Allow mixed, unknown, framing, orchestration, context, or CONCLUDE attribution.

### Question 4: What should the prior finding be corrected to say?

Verification criteria:

- [x] Keep rejection of discipline self-verdicts.
- [x] Remove or weaken "Critique should produce upstream marks."
- [x] Replace with "Critique preserves evaluation evidence; `LOOP_DIAGNOSE` performs correction-chain diagnosis when needed."
- [x] Keep hard routing deferred.

### Question 5: When should this become a formal MVL+ hook?

Verification criteria:

- [x] Require explicit trigger language for now.
- [x] Require multiple successful diagnostic runs before automatic inference.
- [x] Avoid promoting the protocol into a new discipline prematurely.

## Step 5 - Interface Map

| Source | Target | Flow | Direction |
|---|---|---|---|
| Discipline outputs | CONCLUDE | Completed artifacts | one-way |
| CONCLUDE | `docarchive/` | Archived E/S/D/I/C outputs | one-way |
| Routine Critique | `docarchive/` | Candidate verdict evidence and rationale | one-way |
| User | `LOOP_DIAGNOSE` | Human correction signal | one-way |
| Prior inquiry archive | `LOOP_DIAGNOSE` | Weak-result evidence | one-way |
| Corrected inquiry archive | `LOOP_DIAGNOSE` | Comparative improved-result evidence | one-way |
| `LOOP_DIAGNOSE` | MVL+ | Framed diagnostic question and required reads | one-way |
| Diagnostic MVL+ finding | Maintenance process | Hypotheses, candidates, evaluation gates | one-way |
| Repeated diagnostic results | Future MVL+ protocol | Evidence for possible hook | one-way |

## Step 6 - Dependency Order

1. Base MVL/MVL+ run produces artifacts.
2. CONCLUDE archives artifacts into `docarchive/`.
3. Human correction or later dissatisfaction creates a diagnostic signal.
4. A corrected inquiry or improved result provides comparative evidence.
5. `LOOP_DIAGNOSE` frames a diagnostic MVL+ run.
6. Diagnostic MVL+ reads archives and produces hypotheses.
7. Maintenance candidates are considered only if evidence supports them.
8. Future protocol hooks are considered only after repeated diagnostic runs.

Parallelizable:

- Reading prior inquiry and corrected inquiry artifacts.
- Inspecting Critique output and other discipline outputs.

Must not happen early:

- Do not produce broad maintenance rewrites before diagnosis.
- Do not formalize `LOOP_DIAGNOSE` as an automatic mode before repeated evidence.

## Step 7 - Self-Evaluation

| Dimension | Check | Result |
|---|---|---|
| Independence | Can routine Critique, archive storage, and diagnostic protocol be reasoned about separately? | Pass |
| Completeness | Does the decomposition cover base loop, archive, diagnosis, maintenance, and adoption? | Pass |
| Reassembly | Do the pieces reconstruct the corrected architecture? | Pass |
| Tractability | Can each piece be worked on in one focused pass? | Pass |
| Interface clarity | Are cross-piece flows explicit? | Pass |
| Balance | No single piece hides most complexity; diagnosis protocol is largest but bounded. | Pass |
| Confidence | Top-down and bottom-up boundaries agree. | Pass |

## Final Decomposition

The natural architecture is:

1. **Routine loop:** produce and archive artifacts.
2. **Routine Critique:** evaluate candidates and preserve reasoning.
3. **Archive layer:** store complete evidence.
4. **Diagnostic protocol:** use `LOOP_DIAGNOSE` to analyze archives when correction-chain diagnosis is requested.
5. **Maintenance layer:** propose changes only from evidence-backed diagnostic findings.

## Decomposition Telemetry

- **Major pieces:** 5.
- **Interfaces mapped:** 9.
- **Dependency order:** established.
- **Self-evaluation:** 7/7 pass.
- **Main design boundary:** routine candidate evaluation vs retrospective correction-chain diagnosis.
- **Overall:** sufficient for Innovation.
