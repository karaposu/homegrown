# Innovation: Missing Unifying Theory for Alignment and Feedback

## User Input

```text
What kind of thing are we missing if alignment and feedback logic still feels scattered?
```

## Seed

The seed is a dissatisfaction signal: recent artifacts are locally coherent, but feedback, alignment, reflect, outcome review, loop diagnose, navigation, materialization, and meta-loop still do not feel unified at the theory level.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** Shift from object taxonomy to temporal dynamics.

**Focused:** Instead of classifying tools (`reflect`, `outcome_review`, `loop_diagnose`), model how a signal moves through time: appears, strengthens, routes, acts, and calibrates.

**Contrarian:** Shift from alignment to autonomy. Maybe the missing thing is not alignment dynamics but autonomy policy: who may act on what signal.

**Candidate:** `alignment_dynamics.md` as a theory of state changes over time.

### 2. Combination

**Generic:** Combine AlignStack layers, HomeGrown Agent modes, alignment-control records, RC calibration, and meta-loop traversal.

**Focused:** The assembled theory is:

```text
layers say where
modes say posture
records say what was observed
signals say why attention is needed
evidence maturity says how much trust the signal deserves
control actions say what to do
outcomes calibrate future routing
```

**Contrarian:** Combine everything into an "alignment operating system" with scheduler, memory, routing, and permissions.

**Candidate:** Cognitive control stack.

### 3. Inversion

**Generic:** Instead of asking "what unifies feedback operations?", ask "what makes them scattered?"

**Focused:** They feel scattered because each one owns a different evidence moment, but no artifact explains the sequence across moments.

**Contrarian:** Maybe scattering is correct. Feedback operations should stay separate because unifying them would create a vague mega-theory.

**Candidate:** Evidence lifecycle as the missing unifier without merging operations.

### 4. Constraint Manipulation

**Generic:** Add the constraint: do not build automation.

**Focused:** Under that constraint, the first artifact must be a theory note or contract, not a runner. It should define primitives and relationships only.

**Contrarian:** Add the opposite constraint: every theory must immediately drive an executable protocol. That forces a minimal operational protocol like `signal_lifecycle.md`.

**Candidate:** Theory-first with operational hooks, not automation.

### 5. Absence Recognition

**Generic:** What should exist but does not?

**Focused:** There is no artifact that answers:

- what counts as a signal;
- how signal strength changes;
- when weak evidence becomes enough;
- how routes are chosen;
- how route outcomes update future choice.

**Contrarian:** The absent thing might be "selector" rather than theory: navigation sees but no selector chooses.

**Candidate:** Signal lifecycle + selector boundary.

### 6. Domain Transfer

**Generic:** Borrow from cybernetics/control systems.

**Focused:** The system has sensors (`checkpoint`, `reflect`, `outcome_review`), state estimates (`alignment_control` records), controllers (future selection policy), actuators (`branch`, `materialize`, `diagnose`, `recover`), and calibration (`Retrospective RC`). What is missing is the control theory connecting them.

**Contrarian:** Borrow from incident management instead: alerts, severity, triage, escalation, postmortems, and runbooks.

**Candidate:** Cognitive control theory with incident-management-style maturity levels.

### 7. Extrapolation

**Generic:** If we continue adding local protocols without a dynamics layer, the system will gain more names but not more self-direction.

**Focused:** In multihead future, branch heads will produce many signals. Without signal lifecycle and control policy, merge/selection becomes human-only or arbitrary.

**Contrarian:** If we overformalize now, the system may become harder to use before data exists.

**Candidate:** A small v0 theory with explicit defer gates.

## Candidate Missing Abstractions

### Candidate A: `alignment_dynamics.md`

A theory note explaining alignment as state over time:

```text
state -> signal -> evidence maturity -> control action -> outcome -> calibration -> updated state
```

### Candidate B: `cognitive_control.md`

A broader theory of control for thinking systems: sensing, state estimation, control policy, action, feedback, calibration, autonomy permission.

### Candidate C: `signal_lifecycle.md`

A narrower operational theory of how signals are born, mature, route, decay, and calibrate.

### Candidate D: `self_maintenance.md`

A broad theory of how Homegrown maintains and improves itself through feedback, diagnosis, materialization, regression checks, and reflection.

### Candidate E: `selector.md`

A theory/protocol for selecting among navigation items and route choices.

### Candidate F: No New Theory; Use Existing `alignment_control.md`

Expand the existing contract to include dynamics, signal lifecycle, and calibration.

### Candidate G: Empirical First; Wait For Records

Do not materialize any theory now. Collect 10 alignment-control records first, then induce the theory.

## Survival Tests

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Result |
| --- | --- | --- | --- | --- | --- | --- |
| A. `alignment_dynamics.md` | High | High | High | High | High | Survives |
| B. `cognitive_control.md` | High | Medium | High | Medium | High | Refine |
| C. `signal_lifecycle.md` | Medium | High | Medium | High | High | Survives as subpart |
| D. `self_maintenance.md` | Medium | Medium-Low | High | Low | Medium | Defer |
| E. `selector.md` | Medium | Medium | Medium | Medium | Medium | Defer |
| F. Expand `alignment_control.md` | Low | Medium-Low | Medium | Medium | Low | Kill for now |
| G. Wait for records | Low | Medium | Medium | Low | Low | Refine, not enough |

## Assembly Check

The strongest assembly is:

```text
Now:
  enes/alignment_dynamics.md
    defines the missing theory:
      alignment state
      signal lifecycle
      evidence maturity
      control action
      calibration
      interface to existing operations

Inside it:
  signal_lifecycle = one section, not separate file yet
  cognitive_control = framing term, not broader artifact yet

Later:
  homegrown/contracts/alignment_control.md may import stable pieces
  selector/control policy may be designed only after real records
  self_maintenance.md may emerge as broader architecture after dynamics stabilizes
```

## Innovation Verdict

**Overall: PROCEED**

- Generators applied: 4 / 4
- Framers applied: 3 / 3
- Convergence: YES. Lens shifting, combination, absence recognition, domain transfer, and extrapolation all converge on a dynamics/control layer.
- Survivors tested: 7 / 7
- Failure modes observed: none significant.

## Surviving Innovation

The missing thing is best named **alignment dynamics** for v0.

`cognitive_control` is probably the broader theoretical family, but it risks overexpansion. `signal_lifecycle` is a key subcomponent, but too narrow to unify all feedback logic. `self_maintenance` is the larger program. `selector` is a future control-policy artifact.

The immediate useful artifact would be:

```text
enes/alignment_dynamics.md
```

It should be a theory note, not an operational protocol and not a contract yet.
