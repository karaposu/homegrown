# Critique: Navigation Depth And Answer Production

## User Input

`devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/_branch.md`

## A. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Corrects the user's objection | Critical | Explicitly admits Navigation is answer-producing and should not be shallow. |
| Preserves artifact clarity | Critical | Keeps Navigation Map distinct from `finding.md`. |
| Preserves authority boundaries | Critical | Does not hide selection or auto-execution inside Navigation. |
| Supports depth | Critical | Requires serious reasoning about blockers, dependencies, options, risks, and missing paths. |
| Fits current architecture | High | Does not break MVL+ atomicity or existing Navigation role. |
| Is implementable now | High | Can be improved by spec edits and dogfooding before new runners. |
| Supports future meta-loop | High | Produces maps that a later selector or meta-loop can consume. |
| Avoids over-collapse | High | Does not reduce every discipline to generic MVL+. |

## B. Fitness Landscape

### Viable Region

Navigation remains a separate boundary discipline, but its definition is strengthened: it is answer-producing in the movement-space domain and must use deep internal map-construction reasoning.

### Dead Region

- Navigation as non-answer-producing support work.
- Navigation as a shallow taxonomy assignment.
- Navigation as a hidden selector.
- Navigation rewritten as only a generic MVL+ protocol.

### Boundary Region

- Navigation using MVL+ sub-inquiries for rare hard cases.
- A separate Navigation invocation protocol.
- A `navigation_state.md` artifact for recording selections and outcomes.

### Unexplored Region

- Exact syntax for a Navigation spec patch.
- Whether internal phases should use MVL+ names or Navigation-native names.
- Whether a future selector should use Navigation confidence directly or treat it as only one input.

## C. Candidate Verdicts

### Candidate A - Navigation as a deep answer-producing boundary discipline

**Prosecution:** The phrase could sound like a compromise: Navigation is called answer-producing, but still denied decision authority. Maybe that leaves the user with a map but no answer to "what should I actually do?"

**Defense:** The candidate correctly separates two questions: "what moves exist and how do they look?" versus "which move do we commit to?" Navigation can fully answer the first without pretending to own the second.

**Collision:** Defense wins. The user objection is addressed because Navigation is no longer demoted. The selection boundary remains valid because choosing requires value criteria that Navigation does not yet contain.

**Verdict: SURVIVE**

Constructive note: The wording must be explicit: Navigation is answer-producing, but its answer is a Navigation Map, not an execution decision.

### Candidate B - Navigation with explicit internal map-construction phases

**Prosecution:** Adding E/S/D/I/C-like phases inside Navigation may duplicate MVL+ and make the discipline heavier.

**Defense:** The current risk is underpowered Navigation. A map that affects future inquiry direction needs enough rigor to avoid obvious failure modes: shallow options, missing blockers, action bias, hidden selection, and weak WHYs.

**Collision:** Defense wins, with one refinement. The phases should not blindly duplicate MVL+. They should be Navigation-native but cover equivalent pressures: breadth, understanding, dependency structure, novelty, and adversarial checking.

**Verdict: SURVIVE / REFINE**

Refinement: Name the internal phases around map construction, not around generic MVL+ identity.

### Candidate C - Complex Navigation can call MVL+ sub-inquiries as rare escalation

**Prosecution:** This creates recursion and runner complexity before Navigation has even been dogfooded manually.

**Defense:** Some navigation problems may genuinely need a sub-inquiry before a responsible map can be produced.

**Collision:** Both are true. The idea is valid but premature.

**Verdict: REFINE / DEFER**

Revival condition: after at least five real Navigation runs, if two or more cannot produce a confident map because a blocker or option-space question needs its own inquiry.

### Candidate D - Navigation should include a recommendation or chosen next move

**Prosecution:** Hidden selection is dangerous. It smuggles values into the map without declaring the value function.

**Defense:** Users often want to know what to do, not only what options exist.

**Collision:** Prosecution wins for the current stage. The defense identifies a real future need, but it belongs to a selector layer or explicit human choice.

**Verdict: KILL**

Constructive seed: Navigation may mark "strong candidate for selection" if it clearly labels that as confidence, not commitment.

### Candidate E - Rewrite Navigation as an MVL+ protocol

**Prosecution:** This loses Navigation's artifact and failure-mode contract unless rebuilt inside MVL+. It also encourages every deep discipline to collapse into the same generic loop.

**Defense:** It would guarantee depth by using the strongest current loop.

**Collision:** Prosecution wins. Depth is necessary, but depth alone does not determine component identity. Navigation needs a Navigation Map and movement-space contract.

**Verdict: KILL**

Constructive seed: Let Navigation borrow MVL-like pressures internally.

### Candidate F - Keep prior finding unchanged

**Prosecution:** It contains a misleading distinction. Saying "MVL+ is answer-producing" as a contrast to Navigation implies Navigation is not answer-producing.

**Defense:** The prior finding's architectural conclusion was mostly right: Navigation should not be a required MVL+ stage and should not become a selector.

**Collision:** Prosecution wins against the language; defense wins for the core architecture.

**Verdict: REFINE**

Refinement: Correct the language and add depth requirements while preserving the boundary-discipline conclusion.

## D. Assembly Check

The best assembly is:

```text
Correct the prior finding:
  Navigation is answer-producing.

Preserve the prior architecture:
  Navigation remains a separate boundary discipline.

Strengthen the discipline:
  Navigation must perform deep map construction before output.

Preserve authority:
  Navigation maps and evaluates possible moves.
  Human/selector chooses the move.

Defer complexity:
  MVL+ sub-inquiries and selector automation wait for dogfooding evidence.
```

Assembly verdict: **SURVIVE**

## E. Coverage Map

| Concern | Covered? | Notes |
|---|---:|---|
| User objection understood | Yes | Navigation is answer-producing and should be deep. |
| Prior finding corrected | Yes | Answer-producing distinction is rejected. |
| Discipline vs protocol | Yes | Separate discipline survives; protocol may help invocation later. |
| Internal MVL-like rigor | Yes | Survives as Navigation-native map construction phases. |
| Selector boundary | Yes | Hidden selection killed. |
| MVL+ atomicity | Yes | Navigation stays out of required MVL+ core. |
| Implementation next step | Yes | Spec patch and dogfooding first. |

## F. Signal

**TERMINATE with ranked survivors.**

Ranked survivors:

1. Navigation as a deep answer-producing boundary discipline.
2. Navigation with explicit internal map-construction phases.
3. Prior finding refined, not discarded.

Killed:

1. Navigation as non-answer-producing support work.
2. Navigation as shallow taxonomy assignment.
3. Navigation as hidden selector.
4. Navigation rewritten as only a generic MVL+ protocol.

Deferred:

1. MVL+ sub-inquiries inside Navigation.
2. Navigation invocation protocol.
3. Selection automation.
4. `navigation_state.md` selection/outcome artifact.

## Convergence Telemetry

- **Dimension coverage:** Complete for the current question.
- **Adversarial strength:** STRONG. The strongest objection to the survivor, that it denies the user a concrete "what to do" answer, was addressed through selector separation.
- **Landscape stability:** STABLE. Exploration, Sensemaking, Decomposition, and Innovation all converge on the same correction.
- **Clean SURVIVE exists:** YES - deep answer-producing boundary discipline.
- **Failure modes observed:** Self-reference risk is present because the system is evaluating its own discipline architecture. It is partially grounded by user correction, existing specs, and concrete artifact boundaries.
- **Output: PROCEED**
