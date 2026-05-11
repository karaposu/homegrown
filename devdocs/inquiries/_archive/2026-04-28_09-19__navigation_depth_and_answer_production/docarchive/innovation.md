# Innovation: Navigation Depth And Answer Production

## User Input

`devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/_branch.md`

## Seed

The seed is the user's correction: Navigation is not a lightweight map. It answers "what should be considered next?" and a serious answer may require exploration, sensemaking, decomposition, innovation, and critique.

Valuation: This matters because Navigation is likely to become a key part of Homegrown's meta-loop. A shallow Navigation discipline would make future autonomous traversal weak.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** View Navigation not as "post-processing after MVL+" but as "movement-space inquiry."

**Focused:** Navigation answers a specific question class: "Given this completed inquiry or project state, what moves are reachable, gated, promising, risky, or structurally excluded?"

**Contrarian:** Treat Navigation as the highest-stakes discipline because a bad next-move map can waste many later MVL+ loops.

**Test:** Survives. This reframe directly addresses the user's objection and improves the prior finding without changing the whole architecture.

### 2. Combination

**Generic:** Combine Navigation's taxonomy with MVL+'s rigor.

**Focused:** Define Navigation as a map-producing discipline with internal phases: position read, move-space exploration, blocker sensemaking, dependency decomposition, direction generation, map critique.

**Contrarian:** Combine Navigation and Reflection: every Navigation Map includes a process-quality lane that can route to diagnosis when prior loops were weak.

**Test:** The focused combination survives. It is actionable and preserves the Navigation Map. The contrarian combination is fertile but should stay optional because Reflection has a different backward-looking role.

### 3. Inversion

**Generic:** Instead of "Navigation is not MVL+," ask "What if Navigation is the place where MVL+ becomes useful across time?"

**Focused:** Navigation is not outside cognition; it is the boundary cognition that makes multiple MVL+ runs coherent.

**Contrarian:** What if the real primitive is not MVL+ but "question -> disciplined answer artifact"? Then MVL+ and Navigation are sibling applications with different artifacts.

**Test:** The focused inversion survives. It explains why Navigation must be rigorous. The contrarian inversion is useful but too destabilizing for immediate architecture.

### 4. Constraint Manipulation

**Generic:** Add a constraint: Navigation must never output a shallow list.

**Focused:** Require every Navigation item to include evidence, blocker/gate status, confidence, and at least one guideline with WHY.

**Contrarian:** Add a constraint that complex Navigation can spawn sub-inquiries, but its final artifact must still be a Navigation Map.

**Test:** Focused version survives. Contrarian version should be deferred because recursive sub-inquiries add runner complexity.

### 5. Absence Recognition

**Generic:** Missing thing: the current Navigation spec lacks an explicit "deep map construction" phase.

**Focused:** Missing contract: Navigation should state that it may use E/S/D/I/C-like reasoning internally, but CONCLUDE does not run and the output remains `navigation.md`.

**Contrarian:** Missing artifact: a `navigation_state.md` could record trigger, input folder, map confidence, human selection, and later outcome.

**Test:** The focused absence survives as a near-term spec improvement. The `navigation_state.md` idea is fertile but premature until Navigation is dogfooded.

### 6. Domain Transfer

**Generic:** Borrow from military/expedition planning: navigation is not just map drawing; it includes route reconnaissance, obstacles, alternatives, and abort paths.

**Focused:** A serious Navigation Map should behave like a decision-support map: possible routes, conditions, risks, gates, confidence, and excluded routes.

**Contrarian:** Borrow from compiler design: Navigation is a planner over a graph of possible cognitive moves, and MVL+ runs are execution units.

**Test:** Focused version survives. It clarifies why "map" does not mean "lightweight." Compiler analogy is useful for meta-loop later.

### 7. Extrapolation

**Generic:** If Homegrown keeps creating more inquiry folders, next-move selection becomes more important than single-inquiry quality.

**Focused:** As meta-loop grows, Navigation quality becomes a bottleneck. Weak maps will cause bad traversal; strong maps will create valuable evidence about where the system should go.

**Contrarian:** If Navigation remains manual and shallow, it will become dead infrastructure: present in the system but not trusted during real work.

**Test:** Focused version survives. It makes Navigation depth a current priority, not a theoretical concern.

## Survivor Tests

### Survivor A - Navigation as a deep answer-producing boundary discipline

- **Novelty:** Moderate. It corrects the prior finding by treating Navigation as answer-producing while preserving discipline identity.
- **Scrutiny survival:** Strong. It handles the user's objection without collapsing Navigation into MVL+.
- **Fertility:** High. It enables spec improvements, dogfooding, and future meta-loop use.
- **Actionability:** High. Update the Navigation spec and prior finding language.
- **Mechanism independence:** Strong. Lens shifting, combination, inversion, absence recognition, and extrapolation all point to it.

**Verdict: SURVIVE**

### Survivor B - Navigation with explicit internal map-construction phases

Proposed phases:

1. **Position read:** Read finding, branch, state, telemetry, prior context, and optional reflection/diagnosis.
2. **Move-space exploration:** Enumerate obvious, non-obvious, boring, and contrarian next moves.
3. **Blocker sensemaking:** Understand blockers, gates, goal pressure, and unresolved ambiguities.
4. **Direction decomposition:** Group moves by content, process, context, dependency, and reachability.
5. **Direction generation:** Create or refine non-obvious paths, not only taxonomy-derived ones.
6. **Map critique:** Check for premature filtering, action bias, recency bias, hidden selection, shallow WHYs, and missing excluded reasoning.
7. **Map output:** Produce Navigation Map with telemetry.

- **Novelty:** Moderate. It adds explicit rigor to an existing discipline.
- **Scrutiny survival:** Strong. It solves the user's concern directly.
- **Fertility:** High. It can become a spec patch.
- **Actionability:** High.
- **Mechanism independence:** Strong. Combination, absence recognition, and constraint manipulation converge.

**Verdict: SURVIVE**

### Survivor C - Complex Navigation can call MVL+ sub-inquiries only as a rare escalation

- **Novelty:** Medium. It separates normal Navigation from deep research escalation.
- **Scrutiny survival:** Medium. It is coherent, but may add complexity too early.
- **Fertility:** Medium. Useful for hard navigation problems.
- **Actionability:** Low right now.
- **Mechanism independence:** Moderate.

**Verdict: REFINE / DEFER**

Refinement: Add later as an escalation rule only after manual Navigation runs reveal cases where map construction cannot proceed without a sub-inquiry.

### Survivor D - Navigation should include a recommendation

- **Novelty:** Low.
- **Scrutiny survival:** Weak. It hides selection unless value criteria are explicit.
- **Fertility:** Medium.
- **Actionability:** Risky.
- **Mechanism independence:** Weak.

**Verdict: KILL**

Constructive seed: Navigation may mark confidence and "best candidates for human selection," but it should not silently choose.

### Survivor E - Rewrite Navigation as an MVL+ protocol

- **Novelty:** Low to medium.
- **Scrutiny survival:** Weak. It preserves depth but loses the map-specific artifact unless rebuilt inside MVL+.
- **Fertility:** Medium.
- **Actionability:** Medium.
- **Mechanism independence:** Weak. It mostly comes from one strong interpretation of the MVL primitive claim.

**Verdict: KILL**

Constructive seed: Use MVL-like internal rigor inside Navigation instead of replacing Navigation with MVL+.

## Assembly Check

The strongest assembly is:

```text
Navigation = deep answer-producing boundary discipline

It answers movement-space questions.
It uses MVL-like internal rigor.
It outputs a Navigation Map.
It does not select or execute a move.
It can be invoked manually now and by a hook/meta-loop later.
```

This assembly is stronger than any individual survivor. It preserves the prior architecture while correcting the prior weakness.

## Proposed Spec Direction

The Navigation spec should eventually say something like:

```text
Navigation is answer-producing: it answers the movement-space question.
It is not a shallow taxonomy assignment. Before producing the map,
perform a deep map-construction pass: read position, explore moves,
sensemake blockers, decompose dependencies, generate non-obvious directions,
and critique the map for missing paths or hidden selection.
```

This should be a Navigation spec patch, not a new MVL+ protocol yet.

## Mechanism Coverage

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES. Five mechanisms converge on deep answer-producing boundary discipline with internal MVL-like rigor.
- **Survivors tested:** 5 / 5
- **Failure modes observed:** None severe. Early frame lock was checked by testing the opposite direction: "rewrite as MVL+ protocol."
- **Overall: PROCEED**
