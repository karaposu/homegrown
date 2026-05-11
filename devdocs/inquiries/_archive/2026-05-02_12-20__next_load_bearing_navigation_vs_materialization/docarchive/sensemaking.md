# Sensemaking: Next Load-Bearing Navigation vs Materialization

## User Input

`devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/_branch.md`

## SV1 - Baseline Understanding

The initial question appears to ask for a priority decision: should Homegrown next finish the materialization lifecycle, create a separate Navigation session/observer, or build some other capability first so the user's developer role becomes easier?

At baseline, the user leans toward Navigation because choosing where to move in thinking space is the burden they most often carry.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- The next development must be **load-bearing for the act of building Homegrown**, not merely interesting.
- The system must avoid growing larger than the user can carry.
- Branching now exists, so follow-up inquiries can be physically represented.
- Navigation exists, but it enumerates; it does not select or implement.
- Materialization lifecycle exists as `enes/materialization_lifecycle.md`, but the operational protocol `homegrown/protocols/artifact_materialization.md` is absent.
- Outcome review and alignment control exist, so after-use feedback has a place to land.
- Multihead remains unsafe until branch comparison, merge, and outcome evidence improve.

### Key Insights

- The apparent choice is not one dimension. There is a difference between the next **session** and the next **artifact**.
- Navigation relieves the human's immediate cognitive burden.
- Materialization relieves the system's implementation bottleneck.
- A Navigation improvement is itself an artifact and therefore needs materialization if it changes protocols, reports, skills, or traces.
- The next move should probably combine them rather than choose one absolutely.

### Structural Points

```text
Navigation answers: where could we move next?
Selection answers: which move do we commit?
Materialization answers: how does a selected decision become files?
Outcome review answers: did the used result work?
```

The missing load-bearing chain is:

```text
Navigation map
  -> explicit selection
  -> materialization
  -> validation/trace
  -> outcome review
  -> future navigation evidence
```

### Foundational Principles

- Use the lightest sufficient step that increases future carrying capacity.
- Do not scale branch count before comparison and learning exist.
- Do not turn Navigation into hidden selection.
- Do not let findings directly become arbitrary file edits.
- Use protocols to control file-changing behavior.

### Meaning-Nodes

- **Developer burden**
- **Movement-space perception**
- **Artifact materialization**
- **Safe self-building**
- **Branchable thinking space**
- **Calibration through outcome**

## SV2 - Anchor-Informed Understanding

The question is not "Navigation or materialization?" in a flat sense. It is a sequencing problem across two planes:

- **cognitive plane:** the user needs Navigation help to choose directions;
- **implementation plane:** Homegrown needs materialization to turn chosen directions into durable artifacts.

The strongest interpretation is: run Navigation next as a cognitive session, but build materialization next as the load-bearing artifact.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

Navigation can run now because its discipline exists. Materialization cannot run as a protocol because its operational file is absent. Any durable Navigation Observer, navigation-memory, or meta-loop improvement would require file edits; those edits are exactly what materialization should govern.

New anchor: materialization is a prerequisite for safely improving Navigation architecture.

### Human / User Perspective

The user's pain is not mainly "I cannot write files." The user's pain is "I must continually decide what matters, what to branch, what to defer, and what sequence keeps the system coherent." Navigation is therefore the visible relief point.

New anchor: immediate subjective relief comes from Navigation, not from materialization docs alone.

### Strategic / Long-Term Perspective

Homegrown's end goal is a system that can maneuver thinking space while maintaining itself. That requires both movement perception and controlled self-modification. Navigation without materialization produces more possible moves; materialization without Navigation risks building the wrong thing efficiently.

New anchor: the next load-bearing development should close the loop between movement choice and artifact creation.

### Risk / Failure Perspective

If Navigation Observer is built before materialization, the system may produce richer recommendations that still depend on ad hoc implementation. If materialization is built without using Navigation, it may become ceremony and not reduce the user's real burden.

New anchor: the safe sequence must be immediately dogfooded on a Navigation-related artifact.

### Resource / Feasibility Perspective

Creating `artifact_materialization.md` is a bounded documentation/protocol artifact. It can be done with a compact proto-materialization because it is the protocol that will govern later materializations. Creating a live separate Navigation session or observer runtime is larger and less testable.

New anchor: the lowest-cost high-leverage artifact is the materialization protocol; the lowest-cost high-relief operation is a Navigation session.

### Definitional / Consistency Perspective

Navigation is defined as enumeration, not selection. Materialization is defined as decision-to-files under contract. Therefore "Navigation should manage what happens next" must be narrowed: Navigation can map and recommend; it cannot silently choose or implement.

New anchor: a Navigation Observer can be a report/protocol first, not a manager.

## SV3 - Multi-Perspective Understanding

The problem stabilizes into a dependency chain. The user is correct that Navigation is where the burden is felt. But the next capability that lets Homegrown safely build the Navigation improvements is materialization.

So the refined answer should not say "ignore Navigation and do materialization." It should say:

```text
Use Navigation immediately.
Materialize artifact_materialization.md next.
Then use that materialization protocol to build the first Navigation-relief artifact.
```

## Phase 3 - Ambiguity Collapse

### Ambiguity: What does "next load-bearing development" mean?

**Strongest counter-interpretation:** It means the single most valuable conceptual capability, so choose Navigation because it reduces the user's strategic burden most.

**Why the counter-interpretation fails:** Navigation may reduce strategic burden, but development means changing the system. Navigation's own improvement path requires controlled artifact creation. A capability that identifies work but cannot safely materialize selected work is not load-bearing enough for self-building.

**Confidence:** HIGH

**Resolution:** "Next load-bearing development" means the next build step that increases Homegrown's capacity to build later steps safely and with less human burden.

**What is now fixed?** The decision must consider implementation carry-capacity, not just cognitive relief.

**What is no longer allowed?** Treating Navigation value alone as sufficient proof that Navigation architecture should be built before the materialization bridge.

**What now depends on this choice?** The final sequence, risk ranking, and next-actions list.

**What changed in the conceptual model?** The question becomes a sequencing problem, not a popularity contest between capabilities.

### Ambiguity: Does "Navigation next" mean run Navigation or build Navigation infrastructure?

**Strongest counter-interpretation:** Since the user says Navigation is what they do most, the next development should be a separate Navigation session/observer.

**Why the counter-interpretation fails:** Running Navigation is already possible. Building a separate observer or report protocol is a materialization task. The same word names both an immediate cognitive operation and a file-changing development path.

**Confidence:** HIGH

**Resolution:** Navigation should be next as a **session/use**, but materialization should be next as a **protocol artifact**.

**What is now fixed?** We separate operational use from system development.

**What is no longer allowed?** Saying "Navigation first" without specifying whether it means use, protocol, observer, runner, or persistent session.

**What now depends on this choice?** The recommended next sequence.

**What changed in the conceptual model?** The answer can preserve the user's Navigation instinct while still prioritizing materialization as the next artifact.

### Ambiguity: Can materialization create itself?

**Strongest counter-interpretation:** No. If materialization is required before artifacts, then creating `artifact_materialization.md` without it violates the same rule.

**Why the counter-interpretation fails:** The rule cannot apply retroactively before the protocol exists. A bootstrap exception is structurally necessary. The safe version is to create the protocol under an explicit source, bounded write-set, manual validation, and trace-like summary, then use the protocol for later artifacts.

**Confidence:** HIGH

**Resolution:** `artifact_materialization.md` can be bootstrapped with a compact proto-materialization standard, because it is a low-risk protocol document and the source authority already exists in prior findings.

**What is now fixed?** The first materialization protocol can be created without waiting for itself.

**What is no longer allowed?** Using the bootstrap exception as general permission for arbitrary direct edits.

**What now depends on this choice?** The immediate next implementation step.

**What changed in the conceptual model?** Materialization is not blocked; it needs an explicit bootstrap boundary.

### Ambiguity: Is a separate Navigation session the same as a Navigation Observer?

**Strongest counter-interpretation:** Yes. If the user wants a separate Navigation session, build the Navigation Observer now.

**Why the counter-interpretation fails:** A manual/separate Navigation session can happen immediately using existing discipline behavior. A Navigation Observer is an artifact contract or role architecture requiring design, storage, read-set rules, outcome hooks, and possibly future persistent-session behavior.

**Confidence:** HIGH

**Resolution:** Treat "separate Navigation session" as an immediate dogfood operation. Treat "Navigation Observer" as a candidate artifact to materialize after `artifact_materialization.md` exists.

**What is now fixed?** Immediate Navigation use and durable Navigation architecture are different steps.

**What is no longer allowed?** Smuggling persistent observer/session architecture into the next step without a protocol artifact.

**What now depends on this choice?** The sequencing of Navigation relief.

**What changed in the conceptual model?** Navigation can be used before it is further built.

## SV4 - Clarified Understanding

The next move should be a two-level answer:

```text
Next session: Navigation.
Next artifact: artifact_materialization.md.
First dogfood: use artifact_materialization.md to create a Navigation-relief artifact.
```

This resolves the tension between what the user feels and what the system structurally lacks.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Navigation is the immediate human-burden reducer.
- Materialization is the missing self-building bridge.
- Multihead is not next.
- State comprehension is not next as a controller.
- ARC harness work should be downstream of materialization.
- Navigation must not become hidden selection.
- Materialization must have risk-scaled modes.

### Eliminated

- Building a live persistent Navigation Observer immediately.
- Building multihead before route/outcome comparison.
- Treating outcome_review/alignment_dynamics as enough to implement artifacts.
- Treating `enes/materialization_lifecycle.md` as already operational.
- Building Navigation improvements via ad hoc edits.

### Still Viable

1. Run a separate Navigation session over current project state to choose the first artifact target.
2. Create `homegrown/protocols/artifact_materialization.md`.
3. Use it on one small real artifact.
4. Prefer the first dogfood artifact to be Navigation-related, probably a `navigation_observer.md` report protocol or navigation-memory/report convention.

## SV5 - Constrained Understanding

The solution space is now narrow:

```text
Navigation use now
  -> artifact_materialization.md bootstrap
  -> dogfood materialization on Navigation-relief artifact
  -> outcome review after real use
```

The main remaining design question is not whether materialization or Navigation matters more. It is which Navigation-relief artifact should be the first dogfood target.

## Phase 5 - Conceptual Stabilization

The stable model is:

```text
Navigation is the next cognitive assistance.
Materialization is the next system capability.
Navigation Observer is a likely first materialization target.
```

This differs from SV1 by splitting the original either/or into planes:

- **Use plane:** run Navigation because the user needs help choosing.
- **Build plane:** materialize artifact_materialization because Homegrown needs a safe bridge from decisions to files.
- **Learning plane:** outcome_review later checks whether the materialized Navigation relief actually helped.

## SV6 - Stabilized Model

The next load-bearing development is the **materialization-backed Navigation relief sequence**.

Do not build a big Navigation Observer runtime first. Do not postpone Navigation until materialization is perfect. Instead:

1. Use Navigation now as a separate session to choose the first concrete target.
2. Bootstrap `homegrown/protocols/artifact_materialization.md` as the next protocol artifact.
3. Immediately dogfood it on a Navigation-relief artifact.
4. After that artifact is used, run outcome review to see whether it reduced the user's burden.

This sequence relaxes the user's role in the fastest safe way: Navigation starts carrying choice pressure, while materialization starts carrying implementation discipline.

## Telemetry

- **Perspective saturation:** High. Technical, human, strategic, risk, resource, and definitional perspectives all converged on a split-plane sequence.
- **Ambiguity resolution ratio:** High. Main ambiguities resolved: next development, Navigation use vs build, materialization bootstrap, Navigation session vs observer.
- **SV delta:** Strong. SV1 framed an either/or; SV6 reframes it as a staged chain.
- **Anchor diversity:** High. Constraints, insights, structural points, principles, and meaning-nodes all participated.

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
