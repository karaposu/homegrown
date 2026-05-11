# Innovation: Navigation Protocol Or Discipline

## User Input

`devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/_branch.md`

## Seed

The user is questioning whether Navigation should be treated like `loop_diagnose`: not a separate discipline, but an MVL+ command/use case with a special protocol.

Direction: find the cleanest architecture that preserves MVL+ atomicity, preserves Navigation's useful structure, and avoids overbuilding.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** View Navigation as "what next?" reasoning.

- Test: too broad. MVL+ can answer "what next?" in prose, but that loses Navigation's map format and taxonomy.

**Focused:** View Navigation as boundary perception.

- Test: strong. It sees possible moves after a cycle produces artifacts.

**Contrarian:** View Navigation as an artifact compiler, like CONCLUDE.

- Test: partially useful. Navigation compiles possible movements from artifacts, but unlike CONCLUDE it does not close an inquiry; it opens movement options.

### 2. Combination

**Generic:** Combine separate discipline + invocation protocol.

- Test: strongest. Navigation keeps identity; a hook/protocol clarifies when to run it.

**Focused:** Combine MVL+ post-CONCLUDE hook + Navigation map + human selection.

- Test: strong. This matches prior findings and meta-loop v1.

**Contrarian:** Combine Navigation with `loop_diagnose` style protocol only for diagnostic movement.

- Test: useful but narrow. Navigation can include DIAGNOSE as a movement type, but it is broader than diagnosis.

### 3. Inversion

**Generic:** What if Navigation is not separate?

- Result: next-step mapping becomes ad hoc MVL+ output.
- Test: weak. The map/taxonomy/telemetry disappear or must be rebuilt inside every run.

**Focused:** What if Navigation should be separate but not called a discipline?

- Result: call it a boundary protocol.
- Test: weaker than discipline. It still has a distinct operation and quality criteria, so "discipline" is accurate.

**Contrarian:** What if Navigation is too mature to be a discipline and should become infrastructure?

- Result: in future, meta-loop may treat Navigation as a perception subsystem.
- Test: future-valid, but it remains a discipline-level operation now.

### 4. Constraint Manipulation

**Generic:** Add constraint: MVL+ pipeline cannot change.

- Test: supports boundary hook, not core integration.

**Focused:** Add constraint: Navigation cannot choose.

- Test: supports keeping selection separate.

**Contrarian:** Add constraint: every boundary operation must be MVL+.

- Test: fails. It collapses distinct artifacts into generic findings and makes the system less modular.

### 5. Absence Recognition

**Generic:** Missing: a clear Navigation invocation contract.

- Test: real gap. This is probably why Navigation feels underused.

**Focused:** Missing: dogfooding data from completed inquiries.

- Test: important. Before rewriting Navigation, run it more.

**Contrarian:** Missing: taxonomy cleanup.

- Test: small but real. The skill says 15 types while the reference defines 16.

### 6. Domain Transfer

**Generic:** Transfer from compilers.

- Navigation is not a compiler; it does not produce final executable output.
- Test: weak analogy.

**Focused:** Transfer from maps.

- Navigation is a mapmaker. A map is not the trip, not the driver, and not the destination.
- Test: strong analogy. The mapmaker should be distinct from the traveler and selector.

**Contrarian:** Transfer from operating systems.

- Navigation resembles a process scheduler's visible queue, but not the scheduler itself.
- Test: useful. Navigation enumerates runnable directions; selector schedules one.

### 7. Extrapolation

**Generic:** If Navigation is not preserved, future meta-loop loses its perception layer.

- Test: high confidence.

**Focused:** If Navigation remains separate but underused, it becomes a dormant artifact.

- Test: high confidence. Invocation/dogfooding is needed.

**Contrarian:** If Navigation becomes required after every MVL+, artifact volume may explode.

- Test: high confidence. Conditional invocation is better.

## Candidate Designs

### Candidate A - Rewrite Navigation As MVL+ Protocol Wrapper

Navigation becomes `homegrown/protocols/navigation.md`. MVL+ reads that protocol and produces a normal finding about possible next steps.

Verdict: KILL.

Reason: this erases the distinct Navigation Map artifact and recreates specialized map logic inside a generic finding.

### Candidate B - Keep Navigation As Separate Boundary Discipline

Navigation remains `homegrown/navigation/SKILL.md`. It is called manually or by other runners.

Verdict: SURVIVE.

Reason: it preserves the distinct enumeration operation, taxonomy, output format, telemetry, and failure modes.

### Candidate C - Separate Discipline Plus Invocation Protocol/Hook

Navigation remains a discipline, but MVL+ or meta-loop can invoke it through explicit boundary rules.

Verdict: STRONG SURVIVE.

Reason: this resolves the real problem: not identity, but under-integration.

### Candidate D - Add Navigation As Required Sixth MVL+ Stage

MVL+ becomes E/S/D/I/C/N.

Verdict: KILL.

Reason: it breaks atomic inquiry closure and makes every inquiry produce continuation pressure.

### Candidate E - Keep Manual Navigation Only

Navigation exists, but no runner ever mentions it.

Verdict: REFINE.

Reason: safe, but likely to keep Navigation underused.

### Candidate F - Move Navigation Entirely Into Meta-Loop

Remove standalone use and make it an internal meta-loop phase.

Verdict: KILL for now / possible future infrastructure.

Reason: meta-loop needs Navigation, but users still need manual Navigation maps. Internal-only Navigation would hide a useful artifact.

### Candidate G - Navigation As Selector

Navigation both maps and chooses the next move.

Verdict: KILL.

Reason: prior findings and meta-loop spec are right: Navigation sees but does not choose.

### Candidate H - Fix Docs And Dogfood Before Any Architecture Change

Keep architecture, fix 15/16 taxonomy mismatch, run Navigation on several completed inquiries.

Verdict: SURVIVE.

Reason: the current problem may be lack of use and small spec drift, not wrong architecture.

## Assembly Check

Strongest assembly:

```text
Navigation remains a separate boundary discipline
+ add/clarify invocation hooks later
+ keep it out of E/S/D/I/C
+ keep selection separate
+ dogfood and clean taxonomy mismatch now
```

This assembly works because:

- separate discipline preserves map-making;
- boundary hook preserves MVL+ atomicity;
- selection separation prevents hidden autonomy;
- dogfooding tests usefulness before redesign;
- taxonomy cleanup improves trust without overhauling architecture.

## Survivors

1. Navigation as separate boundary discipline.
2. Protocol-style invocation contract or post-CONCLUDE hook.
3. Manual dogfooding on completed inquiries.
4. Taxonomy count cleanup.
5. Meta-loop consuming Navigation maps as perception.

## Innovation Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES - lens shifting, combination, inversion, constraint manipulation, and extrapolation converge on separate boundary discipline plus invocation hook.
- **Survivors tested:** 8 / 8 candidate designs tested.
- **Failure modes observed:** None. The tempting protocol-wrapper analogy was tested and rejected rather than assumed.
- **Overall: PROCEED**
