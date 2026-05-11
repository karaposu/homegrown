---
status: active
corrects: devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/finding.md
impacted_by:
  - devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md
  - devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md
  - devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/finding.md
---
# Finding: Navigation Depth And Answer Production

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/finding.md

**Revision trigger:** The user pointed out that the prior finding described MVL+ as "answer-producing" in a way that made Navigation sound non-answer-producing or lightweight.

**What's preserved:** The prior finding was right that Navigation should not become a required sixth stage inside MVL+ and should not become a hidden selector.

**What's changed:** The prior distinction between "answer-producing MVL+" and "movement-mapping Navigation" is corrected. Navigation is also answer-producing.

**What's new:** Navigation should be understood as a deep, answer-producing boundary discipline. It answers movement-space questions and should use serious internal reasoning before producing a Navigation Map.

**Migration:** Treat the prior finding as architecturally useful but conceptually incomplete. Future Navigation docs should say that Navigation is answer-producing in its own domain, not just a light map after "real" reasoning has happened elsewhere.

## Question

If Navigation also answers the question of what to do next and should reason deeply about blockers, options, directions, and risks, should it be treated as an MVL+ protocol, a separate discipline, or a discipline with an internal MVL-like structure?

The goal was to correct the weak distinction in the prior finding, explain whether Navigation is answer-producing, clarify how serious Navigation should reason, and decide what architectural framing best preserves both MVL+ atomicity and Navigation depth.

## Finding Summary

- The user correction is right: Navigation is answer-producing.

- Navigation answers a different question than MVL+. MVL+ answers the current inquiry question; Navigation answers the movement-space question: what possible moves exist from here?

- Navigation should not be lightweight. A good Navigation run should understand the current position, blockers, dependencies, non-obvious directions, risks, excluded moves, and confidence.

- Navigation should remain a separate boundary discipline because its output and authority are different from MVL+.

- The output difference matters. MVL+ produces `finding.md`; Navigation produces a Navigation Map.

- The authority difference matters. Navigation maps and evaluates possible moves; the human or a future selector chooses which move to execute.

- Navigation can have internal MVL-like rigor without becoming the MVL+ command. It can explore, sensemake, decompose, generate, and critique the next-move space while still ending in a Navigation Map.

- The practical next step is to strengthen the Navigation spec, not to rewrite Navigation as a generic MVL+ protocol.

## Finding

### 1. Yes, the prior wording was weak

The sentence "MVL+ is answer-producing" was a bad distinguishing phrase.

Navigation also produces an answer. It answers questions like:

- What next moves are possible from this finding or project state?
- Which moves are blocked or gated?
- Which moves are high-confidence, medium-confidence, or weak?
- Which moves are structurally inapplicable?
- What guidelines would make each move stronger?

A Navigation Map can be the final answer to that movement-space question.

The fact that Navigation does not choose one move does not make it non-answer-producing. It means Navigation answers a different kind of question.

### 2. The better distinction is question domain, artifact, and authority

The stronger model is:

```text
MVL+ answers an inquiry question -> finding.md
Navigation answers a movement-space question -> navigation.md / Navigation Map
Human or selector answers a commitment question -> chosen next move
Meta-loop answers traversal-control questions -> sequence, branch, merge, or stop
```

This distinction is cleaner than "answer-producing versus map-producing."

Navigation's map is itself an answer, but it is not the same artifact as a finding.

Navigation's confidence labels are evaluative, but they are not the same thing as a decision to execute.

### 3. Navigation should be serious, not a post-processing list

The user is also right that Navigation cannot be treated lightly.

If Navigation only assigns taxonomy labels after MVL+ finishes, it will be too shallow for the project's direction. Homegrown is moving toward meta-loop traversal, where later inquiries may depend on Navigation's map. Bad maps will waste future loops.

A serious Navigation run should do internal work that resembles the pressures in MVL+:

- **Position read:** Read the completed inquiry, goal, state, critique verdicts, telemetry, prior context, and optional reflection or diagnosis.
- **Move-space exploration:** Enumerate obvious, boring, non-obvious, and contrarian next moves.
- **Blocker sensemaking:** Understand gates, unresolved ambiguity, dependencies, and goal pressure.
- **Direction decomposition:** Separate content moves, process moves, context moves, reachability, and prerequisites.
- **Direction generation:** Create or refine non-obvious paths, not only taxonomy-derived paths.
- **Map critique:** Check for premature filtering, action bias, recency bias, hidden selection, shallow WHYs, missing blockers, and missing excluded reasoning.
- **Map output:** Produce a Navigation Map with evidence, confidence, guidelines, excluded directions, and telemetry.

This is not shallow. It is a disciplined movement-space analysis.

### 4. Internal MVL-like rigor does not make Navigation the MVL+ command

The key distinction is role versus internal method.

Navigation can internally use exploration-like, sensemaking-like, decomposition-like, innovation-like, and critique-like operations. That does not mean Navigation should be replaced by `/MVL+`.

Many disciplines are already internally complex. Exploration has scan-signal-probe cycles. Sensemaking has anchor extraction and ambiguity collapse. Critique has dimension construction and adversarial testing.

A discipline is not defined by being simple. A discipline is defined by a stable operation, input shape, output artifact, authority boundary, and failure modes.

Navigation's stable operation is movement-space mapping.

Navigation's output artifact is a Navigation Map.

Navigation's authority is to enumerate and evaluate possible moves, not to silently choose or launch one.

### 5. Why not make Navigation just an MVL+ protocol?

Making Navigation only an MVL+ protocol would guarantee some reasoning depth, but it would weaken the Navigation contract.

MVL+ normally produces a finding. Navigation needs a map.

MVL+ normally answers the inquiry question. Navigation needs to answer the movement-space question.

MVL+ normally closes the current inquiry. Navigation prepares possible movement after closure.

If Navigation becomes only "MVL+ with a Navigation prompt," the system must rebuild the Navigation Map, taxonomy, confidence labels, excluded reasoning, and telemetry inside a generic finding flow. That is possible, but it is less clean than strengthening Navigation directly.

The better path is to keep Navigation as a separate discipline and make its own spec deeper.

### 6. Why not let Navigation choose?

Navigation should not silently choose the next move yet.

Choosing requires a value function. The chooser needs priorities, risk tolerance, branch budget, time horizon, user preference, and outcome memory from prior choices.

Navigation does not currently own those criteria. It can say a move is high-confidence because evidence supports it. It should not pretend that high-confidence automatically means "execute this next."

The current rule should be:

```text
Navigation maps and evaluates.
Human or selector chooses.
Meta-loop executes and remembers.
```

Later, a selector can be designed from recorded Navigation Maps, human choices, and outcomes.

### 7. The corrected architecture

The corrected architecture is:

```text
MVL+ -> finding.md
finding.md + state/context -> Navigation
Navigation -> Navigation Map
Navigation Map -> human or selector
chosen move -> next MVL+ / branch / merge / test / stop
```

This keeps MVL+ atomic.

It also gives Navigation the seriousness it needs.

The prior finding was right to keep Navigation outside the required MVL+ core. It was wrong to explain that by implying MVL+ answers and Navigation merely maps.

The better explanation is: both answer, but they answer different questions and produce different artifacts.

## Next Actions

### MUST

- **What:** Correct the conceptual language in future Navigation discussions.
  **Who:** Any future finding or spec edit that describes Navigation.
  **Gate:** Every time Navigation is compared with MVL+.
  **Why:** Prevents Navigation from being treated as non-answer-producing or lightweight.

- **What:** Preserve Navigation as a separate boundary discipline.
  **Who:** `homegrown/navigation/SKILL.md`.
  **Gate:** Any edit that tries to replace Navigation with only an MVL+ protocol.
  **Why:** Keeps the Navigation Map, taxonomy, confidence, excluded reasoning, and telemetry as first-class outputs.

- **What:** Add internal depth requirements to the Navigation spec.
  **Who:** `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md`.
  **Gate:** Before adding automatic Navigation hooks or meta-loop consumption.
  **Why:** Makes Navigation serious enough to support future traversal.

- **What:** Keep selection separate from Navigation.
  **Who:** Navigation, meta-loop, and future selector specs.
  **Gate:** Any feature that tries to auto-run the next inquiry from a Navigation Map.
  **Why:** Prevents hidden value judgments and premature autonomy.

### COULD

- **What:** Define Navigation-native internal phases.
  **Who:** Navigation spec.
  **Gate:** When editing the Navigation spec for depth.
  **Why:** Gives Navigation MVL-like rigor without copying MVL+ mechanically.

- **What:** Record human selections from Navigation Maps.
  **Who:** Future manual Navigation workflow or meta-loop state.
  **Gate:** After at least five manual Navigation Maps exist.
  **Why:** Creates evidence for a future selector.

### DEFERRED

- **What:** Allow Navigation to call MVL+ sub-inquiries for hard navigation problems.
  **Gate:** After at least five real Navigation runs, and only if at least two runs cannot produce a responsible map without a sub-inquiry.
  **Why if revived:** Some movement-space questions may need their own inquiry before a map can be trusted.

- **What:** Create an automatic selector.
  **Gate:** After at least ten Navigation Maps with recorded human choices and later outcomes.
  **Why if revived:** Selection needs evidence about which mapped moves actually led to useful work.

- **What:** Create a separate Navigation invocation protocol.
  **Gate:** If agents repeatedly invoke Navigation inconsistently across at least three real uses.
  **Why if revived:** Invocation protocol can standardize inputs and storage without replacing Navigation.

## Reasoning

Exploration found the core flaw: "answer-producing" is not a valid separator. Both MVL+ and Navigation can answer questions. The distinction has to be question domain, artifact, and authority.

Sensemaking stabilized the corrected model. Navigation answers movement-space questions. It should not answer commitment questions unless a selector layer is explicitly added.

Decomposition split the architecture into five pieces: question domain, artifact contract, internal rigor, authority boundary, and invocation. This showed that Navigation's depth requirement is strongly coupled to map quality, but only weakly coupled to whether Navigation is invoked manually, by hook, or by meta-loop.

Innovation generated and tested options. The strongest survivor was Navigation as a deep answer-producing boundary discipline. The second survivor was Navigation with explicit internal map-construction phases. The idea that Navigation can call MVL+ sub-inquiries survived only as a deferred escalation.

Critique killed the idea that Navigation is non-answer-producing support work. That idea fails the user's correction directly.

Critique killed shallow taxonomy assignment. It would produce maps that look structured but do not understand blockers, risks, dependencies, or non-obvious directions.

Critique killed hidden selection. Choosing the next move requires a value function that Navigation does not currently own.

Critique killed rewriting Navigation as only a generic MVL+ protocol. That approach preserves depth but weakens the Navigation Map contract.

The surviving answer is not a compromise for its own sake. It is a boundary correction: Navigation's identity is separate, and its internal reasoning should be deeper.

## Open Questions

### Monitoring

After five manual Navigation runs, check whether the maps contain real blockers, non-obvious directions, excluded reasoning, and useful confidence labels.

After ten Navigation Maps with human choices and later outcomes, check whether confidence labels predicted useful next moves.

### Blocked

The selector design is blocked until there are recorded Navigation Maps, human selections, and outcomes.

The MVL+ sub-inquiry escalation rule is blocked until real Navigation runs show that ordinary map construction sometimes cannot proceed responsibly.

### Research Frontiers

The main research frontier is how to design a selector that uses Navigation output without reducing selection to "pick highest confidence."

### Refinement Triggers

Reopen this decision if deep Navigation Maps repeatedly look indistinguishable from normal MVL+ findings. That would suggest the artifact distinction is not holding.

Reopen this decision if Navigation Maps remain shallow after the spec is strengthened. That would suggest the discipline needs a stronger runner or internal checkpoint system.

Reopen this decision if users consistently expect Navigation to choose, not only map. That would justify prioritizing an explicit selector.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

u said 

MVL+ is answer-producing. It runs Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique, then CONCLUDE writes a finding.md.


but navigation also answer producing about what to do next no? and navigation is not sth we can take lightly,it should explore , decompose, sensemake for understanding blockers etc,  it should innovate a direction and critique... 


u understand my point yes? .
```

</details>
