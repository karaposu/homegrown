# Decomposition: navigation_context_intake_warmup_archaeology_pattern

## 1. Coupling Map

### Major Clusters

1. **Controller Protocol**
   - `homegrown/protocols/navigation_context_intake.md`
   - owns source profiles, modes, read-set rules, current-state brief contract, and handoff to Navigation.

2. **Codebase Warm-Up Track**
   - existing `arch-small-summary`
   - existing `arch-intro`
   - existing `arch-traces-2`

3. **Artifact / Project-State Warm-Up Track**
   - project-state summary
   - project-state structure map
   - movement/evidence traces

4. **Current-State Brief**
   - read set
   - current position
   - stable authorities
   - open gates
   - movement signals
   - missing context / confidence limits

5. **Navigation Consumer**
   - reads current-state brief
   - enumerates next directions

6. **Future Extraction Layer**
   - possible future commands/skills for non-code stages
   - possible generic context archaeology family

### Coupling Strengths

| Pair | Coupling | Reason |
| --- | --- | --- |
| Controller protocol <-> source profiles | strong | The protocol must choose how to warm up based on source type. |
| Controller protocol <-> current-state brief | strong | The brief is the protocol's main output. |
| Codebase track <-> existing arch commands | strong | The track should reuse proven codebase commands. |
| Artifact track <-> project-state artifacts | strong | Non-code artifacts need different read/trace semantics. |
| Tracks <-> current-state brief | moderate/strong | Tracks feed the brief but should not own Navigation. |
| Current-state brief <-> Navigation | strong | Navigation consumes the brief. |
| Future extraction <-> dogfood traces | moderate | Extraction should depend on repeated use evidence. |

### Natural Boundaries

The natural boundaries are:

- controller vs track;
- codebase track vs artifact/project-state track;
- warm-up outputs vs Navigation map;
- protocol-internal stages vs future standalone commands.

## 2. Boundary Validation

### Top-Down Boundary Check

Top-down analysis says the controller should not know the deep details of every source type. It should define mode, track, output contract, and escalation. Tracks handle source-specific understanding.

### Bottom-Up Sanity Check

Atoms:

- Identify source profile.
- Choose context mode.
- Run codebase orientation/structure/traces if source is code.
- Run project-state orientation/structure/traces if source is artifact set.
- Produce current-state brief.
- Hand off to Navigation.
- Record trace/outcome hooks.

These atoms group into the same boundaries. Source profile selection and output contract belong together. Codebase analysis and project-state analysis are separate tracks.

### Boundary Confidence

| Boundary | Confidence |
| --- | --- |
| Controller vs track | high |
| Codebase track vs project-state track | high |
| Current-state brief vs Navigation | high |
| Protocol sections vs future commands | medium/high |
| Project-state vs business subtype | high |

## 3. Question Tree

### Q1 - What source profiles should `navigation_context_intake.md` support?

Verification criteria:

- [ ] Includes `codebase`.
- [ ] Includes `artifact_set`.
- [ ] Includes `project_state`.
- [ ] Includes `mixed`.
- [ ] Allows `business_strategy` as a subtype, not the default general name.

### Q2 - What are the staged warm-up levels?

Verification criteria:

- [ ] Defines Stage 1: orientation summary.
- [ ] Defines Stage 2: structural introduction/map.
- [ ] Defines Stage 3: behavior/movement/evidence traces.
- [ ] Explains why stages are sequential.
- [ ] Defines what unlocks each next stage.

### Q3 - How does the codebase track work?

Verification criteria:

- [ ] Reuses `arch-small-summary` for Stage 1.
- [ ] Reuses `arch-intro` for Stage 2.
- [ ] Reuses `arch-traces-2` for Stage 3.
- [ ] Preserves their code-based grounding rule.
- [ ] Does not duplicate them in Homegrown unless a real integration issue appears.

### Q4 - How does the artifact/project-state track work?

Verification criteria:

- [ ] Defines project-state summary.
- [ ] Defines project-state structure map.
- [ ] Defines movement/evidence traces.
- [ ] Includes findings, protocols, branches, materialization traces, outcome reviews, and docarchives as possible sources.
- [ ] Defines non-code trace categories.

### Q5 - How does the staged warm-up feed Navigation?

Verification criteria:

- [ ] Produces a current-state brief.
- [ ] Records exact read set.
- [ ] Separates confirmed state from missing context.
- [ ] Names movement signals and gates.
- [ ] Produces a recommended Navigation prompt.

### Q6 - When should standalone commands be extracted?

Verification criteria:

- [ ] Requires dogfood traces.
- [ ] Requires stable repeated stage procedures.
- [ ] Avoids creating three commands before the protocol exists.
- [ ] Preserves controller as entry point even after extraction.

## 4. Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| User Navigation request | Controller protocol | purpose, source profile, risk/context mode | one-way |
| Controller protocol | Codebase track | codebase path, mode, output needs | one-way |
| Controller protocol | Project-state track | artifact roots, mode, output needs | one-way |
| Codebase track | Current-state brief | code behavior summary, architecture, runtime traces | one-way |
| Project-state track | Current-state brief | project state, authority map, movement/evidence traces | one-way |
| Current-state brief | Navigation | current position, movement signals, gates, confidence limits | one-way |
| Navigation output | Branch/materialization | selected move source authority | one-way after selection |
| Dogfood/outcome review | Future extraction layer | evidence that stages should become commands | one-way |

## 5. Dependency Order

### First

Build `navigation_context_intake.md` as the controller protocol.

### Second

Inside it, define source profiles and staged warm-up levels.

### Third

Reference existing codebase archaeology commands for the `codebase` source profile.

### Fourth

Define project-state/artifact archaeology stages inside the protocol.

### Fifth

Dogfood the protocol on current Homegrown state.

### Sixth

Extract standalone commands only if repeated traces show stable stage procedures and real usability need.

## 6. Reassembly Test

If the pieces are answered:

```text
navigation_context_intake.md
  -> detects source profile
  -> runs appropriate staged warm-up
  -> produces current-state brief
  -> Navigation consumes brief
  -> user gets better movement map
```

This reconstructs the user's goal: preserve the existing expanding-unlock effect and generalize it beyond code without overbuilding immediately.

## 7. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | Controller, tracks, brief, and future extraction have separable responsibilities. |
| Completeness | PASS | Covers reuse, generalization, non-code analogues, Navigation handoff, and extraction timing. |
| Reassembly | PASS | Pieces reconstruct a coherent context-intake protocol. |
| Tractability | PASS | Immediate materialization is one protocol, not a command family. |
| Interface clarity | PASS | Each flow has a clear source and target. |
| Balance | PASS | No piece dominates excessively; controller remains central. |
| Confidence | PASS/MEDIUM | Boundaries are strong; exact names for non-code stages need innovation/critique. |

## Decomposition Verdict

Proceed to Innovation over exact protocol shape and naming.

The decomposition favors a controller protocol with source profiles:

```yaml
source_profile: codebase | artifact_set | project_state | mixed
```

and stages:

```text
orientation -> structure -> traces
```
