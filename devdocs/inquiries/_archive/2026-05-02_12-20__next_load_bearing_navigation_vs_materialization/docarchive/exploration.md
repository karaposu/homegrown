# Exploration: Next Load-Bearing Navigation vs Materialization

## Mode and Entry Point

- **Mode:** Mixed artifact + possibility exploration.
- **Primary mode:** Possibility exploration, because the inquiry asks which next development path should be chosen.
- **Artifact anchors read:** `enes/materialization_lifecycle.md`, `homegrown/navigation/references/navigation.md`, `homegrown/navigation/SKILL.md`, `homegrown/meta-loop/SKILL.md`, `homegrown/protocols/branch_inquiry.md`, `devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md`, `devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md`, and `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`.
- **Entry point:** Signal-first. The user has a concrete hunch: Navigation may be next because navigation is what the user does most and it is getting harder.

## Exploration Cycles

### Cycle 1 - Coarse Scan

Scanned the obvious candidate regions:

1. **Materialization lifecycle**
   - `enes/materialization_lifecycle.md` exists and is mature as a theory/lifecycle note.
   - It is not yet operationalized as `homegrown/protocols/artifact_materialization.md`.
   - Prior finding says materialization should be a tiered lifecycle controller with Compact, Standard, and Full modes.

2. **Navigation**
   - `homegrown/navigation/` exists as a discipline.
   - It enumerates possible next directions and explicitly does not choose.
   - Prior Navigation Observer finding says a separate observer/report could help with movement-space perception.

3. **Branching**
   - `homegrown/protocols/branch_inquiry.md` exists.
   - It supports nested branches and branch sets as future-compatible metadata.
   - It does not launch, compare, merge, or select branches.

4. **Outcome/alignment feedback**
   - `homegrown/protocols/outcome_review.md` exists and has just been refined with alignment-dynamics calibration.
   - `homegrown/contracts/alignment_control.md` and `enes/alignment_dynamics.md` provide shared alignment/control vocabulary.
   - The missing piece is still repeated use, not more theory.

5. **Meta-loop**
   - `homegrown/meta-loop/SKILL.md` exists as a sequential, human-selected traversal engine.
   - It already composes MVL+ -> Navigation -> selection -> MVL+ -> meta-state.
   - It is not autonomous multihead execution.

6. **Multihead**
   - Branch protocol is future-compatible with branch sets.
   - Prior findings defer serious multihead until outcome comparison and merge discipline exist.

### Cycle 1 Signals

- **Strong relevance signal:** User pain is navigation/selection burden. The system should reduce "what should we do next?" load.
- **Dependency signal:** Navigation can suggest movement, but materialization is required to turn chosen protocol/artifact decisions into reliable files.
- **Absence signal:** `homegrown/protocols/artifact_materialization.md` is not present even though multiple findings point to it.
- **Readiness signal:** Navigation already has a runnable discipline and meta-loop already knows how to call it sequentially.
- **Risk signal:** Building a separate Navigation Observer or stronger meta-loop before artifact materialization may create more recommendations than the system can safely implement.

Resolution decision: zoom in on the dependency between Navigation and materialization.

### Cycle 2 - Probe: Navigation-First Path

Navigation-first could mean several different things:

1. **Run an immediate standalone Navigation session**
   - Cheap.
   - Helps the user now.
   - Produces a map of options but no implementation bridge.

2. **Create Navigation Observer protocol**
   - Stronger movement-space artifact.
   - Could reduce user's cognitive burden by reading multiple inquiries and recommending routes.
   - Prior finding recommends protocol-first reports before persistent observer session.

3. **Wire Navigation into meta-loop more heavily**
   - Meta-loop already exists.
   - Could make sequential traversal more usable.
   - Still depends on selected moves becoming branches or materializations.

4. **Improve Navigation depth/method**
   - Could make maps better.
   - But method upgrades require materialization if they edit `homegrown/navigation/...`.

Probe result: Navigation-first is valuable for the user's felt burden, but the only low-risk immediate form is **using** existing navigation, not expanding Navigation architecture. Expanding Navigation architecture is a materialization task.

### Cycle 3 - Probe: Materialization-First Path

Materialization-first could mean:

1. **Create `homegrown/protocols/artifact_materialization.md`**
   - Directly fills a known absence.
   - Gives controlled bridge from findings to files.
   - Supports low-risk compact mode, so it need not become heavy.

2. **Dogfood it on one small artifact**
   - Converts the protocol from theory to operational proof.
   - Produces a trace and later outcome review gate.
   - Helps calibrate whether compact/standard/full boundaries are right.

3. **Use it to materialize Navigation Observer protocol**
   - This sequence combines both paths.
   - Materialization becomes the tool that creates the Navigation improvement.

Probe result: Materialization-first is less glamorous than Navigation-first, but it is more load-bearing because it lets Homegrown safely build the next Navigation artifact.

### Cycle 4 - Jump Scan

Scanned a different direction: maybe the next load-bearing capability is not Navigation or materialization but state comprehension, ARC harness, or multihead.

- **State comprehension** would reduce memory burden, but without outcome/materialization/navigation records it mostly summarizes claims.
- **ARC harness** is important for benchmark work, but it is domain-specific and should be materialized as a high-risk artifact under a general materialization protocol.
- **Multihead** increases breadth, but without outcome comparison, selection, and merge policy it multiplies digestion burden.
- **Alignment/outcome record accumulation** is necessary, but the protocol already exists. The next pressure is to use records inside building/navigation, not create another theory layer.

Jump-scan result: no alternate candidate beats a materialization-backed Navigation improvement sequence.

## Convergence Assessment

- **Frontier stability:** Stable enough. The major next-development regions are mapped: materialization, Navigation, branch/meta-loop, feedback/alignment, multihead, state comprehension, ARC harness.
- **Declining discovery rate:** Later scans found refinements of the same dependency, not new primary candidates.
- **Bounded gaps:** Remaining unknowns are implementation details: exact `artifact_materialization.md` contents, exact first dogfood artifact, and whether Navigation Observer should be that first artifact.

Exploration is converged for sensemaking.

## Territory Overview

| Region | Status | Exploration Resolution |
| --- | --- | --- |
| Materialization lifecycle | Mature theory, missing operational protocol | Confirmed |
| Navigation discipline | Existing, useful, not selector | Confirmed |
| Navigation Observer | Strong prior finding, not materialized | Scanned/probed |
| Branch protocol | Implemented; enables nested follow-up inquiries | Confirmed |
| Meta-loop | Existing sequential traversal scaffold | Confirmed |
| Outcome/alignment feedback | Protocol/contract exist; needs use | Confirmed |
| Multihead | Future scale mechanism, not ready | Scanned |
| State comprehension | Future burden reducer, needs evidence substrate | Scanned |
| ARC harness | Domain-specific artifact need | Scanned |

## Inventory of Candidate Next Developments

1. **Finish artifact materialization protocol**
   - Create `homegrown/protocols/artifact_materialization.md`.
   - Include Compact/Standard/Full modes.
   - Dogfood on one small real artifact.

2. **Run a separate Navigation session now**
   - Use existing Navigation or Navigation-style analysis over current project state.
   - Low cost and immediately relieves "what next?" pressure.
   - Produces recommendations, not file changes.

3. **Materialize Navigation Observer protocol**
   - Create a report contract for cross-inquiry movement-space perception.
   - Best as a materialization target after artifact materialization exists.

4. **Use meta-loop sequentially**
   - Start a bounded meta-loop with human selection.
   - Useful after Navigation maps exist.
   - Still depends on materialization for protocol/file changes.

5. **Build state comprehension**
   - Helpful later for memory burden.
   - Premature as a controller without outcome/materialization/navigation records.

6. **Build multihead**
   - Powerful later.
   - Too early because comparison/merge/outcome evidence is not mature.

7. **Build ARC harness integration**
   - Important for competition work.
   - Should be a high-risk materialization under the general protocol, not the general next substrate.

## Signal Log

| Signal | Meaning | Probed? |
| --- | --- | --- |
| User does most Navigation manually | Navigation burden is the visible pain | Yes |
| Materialization protocol missing | Chosen decisions still lack safe file bridge | Yes |
| Branching exists | Navigation can now create follow-up work with topology | Yes |
| Outcome review exists | After-use learning substrate is emerging | Yes |
| Meta-loop exists | Sequential Navigation-driven traversal can be tested | Yes |
| Navigation Observer finding exists | Separate movement-space perception is a strong candidate | Yes |
| Multihead temptation | Scale should wait for comparison and merge | Yes |
| ARC need | Exact benchmark work should be materialized under protocol | Yes |

## Confidence Map

- **Confirmed:** materialization lifecycle theory exists; artifact materialization protocol is absent; Navigation discipline exists; branch protocol exists; meta-loop exists; outcome_review exists.
- **Scanned:** Navigation Observer as protocol-first report; state comprehension; ARC harness; multihead.
- **Inferred:** A materialization-backed Navigation improvement has the best dependency order because it handles both immediate burden and safe implementation.
- **Unknown:** Whether the first materialized artifact should be `navigation_observer.md`, `artifact_materialization.md` dogfood trace, or a navigation-memory index.
- **Confirmed absent:** No `homegrown/protocols/artifact_materialization.md` file was found in the scan.

## Frontier State

The frontier is no longer "which broad capability exists?" The frontier is sequencing:

```text
Should Homegrown first use Navigation to choose next work,
or first materialize the protocol that makes chosen work safe?
```

The exploration result points to a combined sequence:

```text
1. Run a lightweight Navigation session to choose the first materialization target.
2. Materialize artifact_materialization.md.
3. Dogfood artifact_materialization.md on the first Navigation improvement artifact.
```

## Gaps and Recommendations for Sensemaking

- Sensemaking should decide whether Navigation is the next **session** while materialization is the next **artifact**.
- Sensemaking should distinguish "what relieves the user today" from "what must exist before Homegrown can safely build itself."
- Sensemaking should check whether creating `artifact_materialization.md` itself can be done without already having that protocol.
- Sensemaking should evaluate if a compact proto-materialization is acceptable for creating the materialization protocol.
