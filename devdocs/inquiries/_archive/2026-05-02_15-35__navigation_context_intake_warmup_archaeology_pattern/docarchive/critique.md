# Critique: navigation_context_intake_warmup_archaeology_pattern

## User Input

```text
Evaluate whether Homegrown Navigation context intake should reuse the three existing codebase archaeology commands, create analogous non-code/business/project-state commands, or generalize the staged unlock pattern inside `navigation_context_intake.md`.
```

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Preserves proven value | HIGH | Keeps the useful staged unlock from the existing commands. |
| Source-type correctness | HIGH | Does not force code-specific assumptions onto non-code artifacts. |
| Navigation usefulness | HIGH | Produces better current-state input for Navigation. |
| Context economy | HIGH | Avoids reading or generating too much by default. |
| Materialization feasibility | HIGH | Can be built next without a large command family. |
| Coherence with artifact materialization | HIGH | Uses controller-first and extraction gates rather than premature fragmentation. |
| Future extensibility | MEDIUM | Allows later command extraction, observer reports, and source-profile expansion. |
| Naming clarity | MEDIUM | Names the non-code domain accurately without over-narrowing it to business. |

## Phase 1 - Fitness Landscape

### Viable Region

The viable region contains designs that:

- reuse existing codebase commands for codebases;
- generalize the staged unlock pattern;
- define source profiles;
- define project-state/artifact stages inside `navigation_context_intake.md`;
- produce a current-state brief;
- defer standalone non-code command extraction until dogfood proves the shape.

### Boundary Region

The boundary region contains:

- creating three non-code commands now;
- creating a broad generic `context_archaeology.md` before Navigation-specific intake;
- naming the general track "business-level."

These ideas have real value but need refinement.

### Dead Region

The dead region contains:

- running existing codebase archaeology commands directly on all artifact types;
- patching Navigation to own warm-up internally in v1;
- replacing the existing codebase commands now.

## Phase 2 - Adversarial Evaluation

### Candidate A - Controller Protocol With Source Profiles

**Prosecution.** A controller protocol might become too abstract. If it only names source profiles and stages without concrete procedures, it will not actually warm up a session.

**Defense.** The controller can be concrete enough: source profile, mode, staged outputs, read-set, current-state brief, and extraction gates. It also respects materialization's controller-first principle and keeps Navigation's input boundary inspectable.

**Collision.** Defense wins. The risk is real, but the remedy is to define concrete stage outputs inside the protocol.

**Verdict: SURVIVE.**

Constructive output: require each source profile to name Stage 1, Stage 2, Stage 3 inputs and outputs.

### Candidate B - Create Three Non-Code Commands Now

**Prosecution.** Premature. The codebase ladder is proven because it has lived in use. The non-code ladder has not been dogfooded. Creating three files now risks wrong names, wrong trace categories, and command sprawl.

**Defense.** The three-command shape is ergonomic and mirrors a proven workflow. It may reduce ambiguity faster than a long protocol section.

**Collision.** Prosecution wins for immediate materialization, but defense survives as extraction target. The right move is to include the three-stage shape inside `navigation_context_intake.md` and extract after repeated use.

**Verdict: REFINE / DEFER.**

Constructive output: add extraction gates: 3+ dogfood runs, stable stage procedure, repeated value, no duplicated invariants, controller remains entry point.

### Candidate C - Reuse Existing Arch Commands For Everything

**Prosecution.** The commands assume code files and runtime behavior. Non-code artifacts have source authority, refinement, branch movement, and outcome behavior, not necessarily data flow or runtime resource management. Direct reuse would create false fit.

**Defense.** The commands already work and could provide a cheap first approximation.

**Collision.** Prosecution wins. Cheap approximation is not enough if it misreads the source type.

**Verdict: KILL.**

Seed extracted: reuse the staged unlock, not the exact code-oriented source assumptions.

### Candidate D - Generic `context_archaeology.md` First

**Prosecution.** Too broad. It may become a generic epistemic tool before Navigation's concrete need is served. It also creates another entry point.

**Defense.** The underlying pattern is general. A generic context archaeology protocol could serve materialization, loop diagnose, ARC, strategy, and Navigation.

**Collision.** Boundary verdict. Generic context archaeology is probably real, but should be extracted from Navigation context-intake traces, not invented first.

**Verdict: REFINE / DEFER.**

Constructive output: let `navigation_context_intake.md` include source profiles and trace categories that could later become a generic protocol.

### Candidate E - Patch Navigation To Run Warm-Up Internally

**Prosecution.** This collapses preparation and enumeration. It makes Navigation heavier, harder to diagnose, and more context-expensive.

**Defense.** Single-command user experience is attractive.

**Collision.** Prosecution wins for v1. Single-command convenience can come later by having Navigation call the protocol, not by embedding the protocol invisibly.

**Verdict: KILL for v1.**

Seed extracted: after dogfood, add Navigation instruction: "for independent project-level Navigation, run context intake first."

### Candidate F - Controller Plus Extraction Gates

**Prosecution.** Extraction gates could slow down useful command creation. The user already has a proven three-command pattern and may benefit from immediate analogues.

**Defense.** The gates prevent command sprawl while preserving the path. They encode the lesson from `artifact_materialization.md`: controller first, extraction after repeated traces.

**Collision.** Defense wins. The gates are not a block; they are the mechanism that keeps growth load-bearing.

**Verdict: SURVIVE.**

Constructive output: make extraction gates explicit in `navigation_context_intake.md`.

## Phase 3.5 - Assembly Check

The strongest assembly is:

```text
navigation_context_intake.md
  -> source profiles
  -> staged unlock levels
  -> codebase track reuses existing arch commands
  -> project-state/artifact track defines analogous stages internally
  -> current-state brief
  -> extraction gates for future standalone commands
```

**Assembly verdict: SURVIVE.**

This is the best answer because it preserves proven value without overfitting codebase commands to non-code artifacts or creating a command family too early.

## Phase 4 - Coverage Map

| Candidate | Verdict | Reason |
| --- | --- | --- |
| A - Controller with source profiles | SURVIVE | Correct immediate protocol shape. |
| B - Three non-code commands now | REFINE/DEFER | Good future target, premature now. |
| C - Reuse arch commands for everything | KILL | Code-specific assumptions do not fit non-code artifacts. |
| D - Generic context archaeology first | REFINE/DEFER | Real later abstraction, too broad as next artifact. |
| E - Patch Navigation internally | KILL for v1 | Collapses input preparation and movement enumeration. |
| F - Controller + extraction gates | SURVIVE | Best assembly and safest growth path. |

## Signal

TERMINATE with ranked survivor:

1. `navigation_context_intake.md` should include source-profiled staged warm-up.
2. Existing arch commands should be reused for codebase profile.
3. Non-code/project-state stages should be protocol sections first.
4. Standalone non-code commands should be extracted only after dogfood.

## The Answer

Yes, the existing three-command warm-up pattern is highly relevant.

But the thing to copy is not the code-specific commands themselves. The thing to copy is the staged unlock:

```text
orientation summary
  -> structural introduction/map
  -> behavior or movement traces
```

For codebases, reuse:

```text
arch-small-summary
  -> arch-intro
  -> arch-traces-2
```

For Homegrown's non-code artifacts, define an analogous project-state/artifact track inside `navigation_context_intake.md` first:

```text
project-state summary
  -> project-state structure map
  -> movement/evidence traces
```

Do not call the general track "business-level." Use `project_state`, `artifact_set`, or `context_archaeology`. Business strategy can be one source profile.

## Convergence Telemetry

- Dimension coverage: 8/8 dimensions applied.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: YES, Candidate F / Assembly.
- Failure modes observed: no wrong dimensions, rubber-stamping, nitpicking, dimension blindness, false convergence, evaluation drift, or self-reference collapse detected.
- Overall: PROCEED.
