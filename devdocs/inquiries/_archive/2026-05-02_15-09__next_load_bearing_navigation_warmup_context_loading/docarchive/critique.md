# Critique: next_load_bearing_navigation_warmup_context_loading

## User Input

```text
Evaluate the candidate next load-bearing developments: Navigation context intake, patching Navigation, generic session warm-up, full Navigation Observer, finding-only mode, current-state brief only, and selector protocol.
```

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Burden relief | HIGH | Reduces how much the user must manually remember, list, and steer. |
| Coherence | HIGH | Fits existing Navigation, artifact materialization, branch, outcome review, and alignment-control boundaries. |
| Context economy | HIGH | Avoids reading everything by default while preventing finding-only false confidence. |
| Source authority | HIGH | Preserves why each source was read and which source justifies action. |
| Feasibility | HIGH | Can be built now as a small artifact. |
| Future leverage | MEDIUM | Supports later observer, selector, memory, and multihead without requiring them now. |
| Failure diagnosability | MEDIUM | Lets later failures be attributed to intake, Navigation, selection, or execution. |
| Simplicity | MEDIUM | Avoids adding a new discipline or runtime before evidence justifies it. |

Dimension validation: these dimensions match the user's goal. A candidate that scores high here should reduce current developer burden without creating an architecture too large to carry.

## Phase 1 - Fitness Landscape

### Viable Region

The viable region contains candidates that:

- define a small immediate artifact;
- prepare Navigation input without absorbing Navigation;
- use tiered context loading;
- record read set and confidence limits;
- route selected moves to existing branch/materialization protocols;
- defer observer runtime, selector, and multihead until evidence exists.

### Boundary Region

The boundary region contains candidates that are partly useful but misplaced:

- patching Navigation directly;
- generic session warm-up;
- current-state brief without source-selection rules.

### Dead Region

The dead region contains candidates that either create false confidence or add premature runtime complexity:

- finding-only as the default;
- autonomous selector next;
- full persistent observer next.

### Unexplored Region

The main unexplored region is naming and exact output location:

- `navigation_context_intake.md`;
- `navigation_warmup.md`;
- a section inside a future Navigation Observer protocol.

This is not enough to require another MVL+ loop. It can be resolved in the finding.

## Phase 2 - Adversarial Evaluation

### Candidate A - `navigation_context_intake.md`

**Prosecution.** This could become another protocol layer and add ceremony before every Navigation run. If it is too broad, the user will still have to decide which mode to use and what to include. It may also duplicate future Navigation Observer responsibilities.

**Defense.** The candidate is precisely targeted at the missing input boundary. It can be small, mode-based, and dogfooded once. It preserves diagnostic separation: if a Navigation map is weak, the read-set record shows whether the failure came from context intake or Navigation reasoning. It directly reduces the user's manual context-listing burden.

**Collision.** Defense wins. The prosecution's ceremony risk is real but controllable through Compact/Standard/Deep/Full modes and trace requirements. This candidate best satisfies burden relief, context economy, source authority, and future leverage.

**Verdict: SURVIVE.**

Constructive output: build it as a protocol, not a discipline. Keep v1 narrow around Navigation. Include promotion triggers and dogfood outcome gate.

### Candidate B - Patch Navigation Itself

**Prosecution.** This collapses two jobs: context intake and movement enumeration. It makes future failures harder to diagnose because a bad Navigation map could come from wrong sources or bad enumeration. It also grows the Navigation discipline before the read-set need is tested independently.

**Defense.** It is simpler for users: one command does everything. Navigation already knows what context it needs, so embedding intake could be convenient.

**Collision.** Prosecution wins for v1. Convenience is real, but it trades away source-boundary clarity. The better form is a protocol that Navigation can later call or reference.

**Verdict: KILL as first artifact; REFINE into integration later.**

Seed extracted: after `navigation_context_intake.md` has been dogfooded, Navigation can add a "load context via protocol first" instruction.

### Candidate C - Generic `session_warmup.md`

**Prosecution.** Too broad. It tries to serve Navigation, materialization, ARC, loop diagnose, and general coding before any one read pattern is proven. It risks vague checklist behavior.

**Defense.** Many Homegrown operations need context loading. A generic protocol could avoid duplicated warm-up logic across future tools.

**Collision.** Boundary verdict. The concept is valid, but it should be extracted later from repeated concrete traces. Starting Navigation-specific follows the user's immediate burden and keeps validation possible.

**Verdict: REFINE / DEFER.**

Constructive output: include generalization triggers inside `navigation_context_intake.md`.

### Candidate D - Full Navigation Observer Protocol

**Prosecution.** Too large for the next move. Observer reports require a read-set anyway. Starting with observer risks mixing current-state intake, movement mapping, ranking, and report format in one artifact.

**Defense.** Prior findings identify Navigation Observer as a breakthrough architecture. It protects movement-space attention and prepares for meta-loop.

**Collision.** Defense survives for later, not now. Observer is a good downstream artifact after context intake is proven. Building observer first makes the unproven input layer implicit.

**Verdict: DEFER.**

Constructive output: revive after one or more context-intake dogfood runs, especially if the user still feels movement-space burden.

### Candidate E - Finding-Only Navigation Mode

**Prosecution.** Finding-only creates false completeness. It misses critique kills, docarchive evidence, materialization traces, outcome reviews, branch lineage, and protocol mechanics. It can resurrect killed ideas because it lacks the kill context.

**Defense.** It saves context and is often good enough for quick high-level orientation.

**Collision.** Both are true. As a default, prosecution wins. As a Compact tier with explicit confidence limits, defense survives.

**Verdict: KILL as default; REFINE into Compact tier.**

Constructive output: Compact mode may read recent findings first, but must label missing deep context and escalate under trigger conditions.

### Candidate F - Current-State Brief Convention Only

**Prosecution.** A template without read rules does not solve the user's burden. The hard part is deciding what goes into the brief. Without source-selection rules, the user still has to provide context manually.

**Defense.** A current-state brief is the exact artifact Navigation needs. It is small, inspectable, and useful even without a full protocol.

**Collision.** Defense survives as output shape, not as standalone solution. The brief is necessary but insufficient.

**Verdict: REFINE into Candidate A.**

Constructive output: make current-state brief the required output contract of `navigation_context_intake.md`.

### Candidate G - Selector Protocol

**Prosecution.** Selection requires valuation, risk tolerance, opportunity cost, and outcome-calibrated route preference. The system does not yet have enough movement outcome evidence. A selector now could give false autonomy.

**Defense.** The user's burden includes choosing what to do, not only seeing options. A selector seems directly aligned with burden relief.

**Collision.** Prosecution wins for now. Selection is real and important, but it should consume Navigation maps and outcome evidence. Those do not yet exist in sufficient quantity.

**Verdict: DEFER.**

Constructive output: record selection manually after Navigation and outcome-review the result. Build selector later from observed route quality.

## Phase 3.5 - Assembly Check

The best assembly is:

```text
Navigation Context Intake protocol
  -> produces current-state brief
  -> includes Compact finding-first tier
  -> includes Standard/Deep escalation rules
  -> hands off to Navigation
  -> selected moves route to branch/materialization
  -> after-use evidence routes to outcome review
  -> observer and selector are deferred
```

**Assembly verdict: SURVIVE.**

This assembly occupies the viable region better than any single alternative because it preserves boundaries while directly targeting the user's burden.

## Phase 4 - Coverage Map

| Candidate | Verdict | Reason |
| --- | --- | --- |
| A - Navigation context intake | SURVIVE | Best fit to burden relief, context economy, source authority, and staged buildability. |
| B - Patch Navigation | KILL/REFINE | Useful later as integration, wrong as first artifact. |
| C - Generic warm-up | REFINE/DEFER | Valid abstraction later, too broad now. |
| D - Full observer | DEFER | Important downstream, depends on context intake. |
| E - Finding-only mode | KILL as default; REFINE as Compact tier | Efficient but unsafe if treated as complete. |
| F - Brief only | REFINE into A | Output is right; source-selection rules missing. |
| G - Selector | DEFER | Needs outcome calibration and explicit values. |

## Signal

TERMINATE with ranked survivor:

1. **Build `homegrown/protocols/navigation_context_intake.md` next.**
2. Use it to produce a current-state brief for one Navigation run.
3. Run Navigation over that brief.
4. Let the human select the move.
5. Route the selected move through branch or materialization.
6. Run outcome review after use.

## The Answer

The next load-bearing development should be a Navigation-specific context-intake protocol, probably named:

```text
homegrown/protocols/navigation_context_intake.md
```

The plain-language name can be "Navigation warm-up."

It should not be a new discipline yet. It should not be full Navigation Observer yet. It should not read only findings by default. It should define tiered read modes and produce a current-state brief that Navigation can consume.

This is the smallest next piece that makes Navigation more useful while preserving the architecture's ability to learn from real use.

## Convergence Telemetry

- Dimension coverage: 8/8 dimensions applied.
- Adversarial strength: STRONG. The strongest tempting alternatives, including observer and selector, were tested rather than ignored.
- Landscape stability: STABLE. All viable paths converged on context intake first.
- Clean SURVIVE exists: YES, Candidate A / Assembly.
- Failure modes observed: no wrong dimensions, rubber-stamping, nitpicking, dimension blindness, false convergence, evaluation drift, or self-reference collapse detected.
- Overall: PROCEED.
