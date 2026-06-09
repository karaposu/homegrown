# Decomposition: Diagnostics Fix Prioritization

## Input

`_branch.md`, `exploration.md`, and `sensemaking.md` from this inquiry.

## Step 1 - Perceive Coupling Topology

The whole problem is:

```text
Rank fixes from the diagnostics corpus by urgency, reliability impact, ease, and breadth.
```

### Elements

- Diagnostic findings and repeated failure families.
- Navigation route-memory operational risk.
- Loop-level reasoning reliability.
- Critique dimension coverage.
- CONCLUDE hardening and durable terms.
- Implementation effort and blast radius.
- User-facing ranking categories.

### Coupling Gradients

Strong coupling:

- Navigation route-memory discovery, route-memory status, source-dependency trigger, and phase policy. These must be considered together for operational reliability.
- Critique dimension gaps, premise validation, and broad loop effect. These form the broadest system-level safety net.
- Ease and scope. A fix is not easy if it has a broad trigger or ambiguous activation rule.

Moderate coupling:

- Durable Term Boundary Check and CONCLUDE backstops. Term validation needs durable output shape, but it is not only a CONCLUDE problem.
- Registry-vs-derivation challenge and Discovery Interface Invariant. Both involve search/registry decisions, but one is a narrow easy check while the other is a broader Navigation interface.
- Phase calibration and early-stage robust review. Phase policy is mostly Navigation-specific now but could become broader if repeated.

Weak coupling:

- Canonical-vs-provenance check and route-memory discovery. Both are boundary checks, but they apply to different domains.
- Archive-use check and Navigation intake implementation. Both improve reliability, but one is diagnostic workflow and the other is operational behavior.

## Step 2 - Detect Boundaries Top-Down

Natural pieces:

1. **Urgent Fix Selection**
   - Which two fixes reduce the most current operational risk?

2. **Reliability Winner**
   - Which single fix most improves system correctness and trust?

3. **Easy High-Effect Fixes**
   - Which two fixes are low-risk, clear-trigger, and still meaningful?

4. **Broadest Impact Fix**
   - Which fix touches the most future failure surfaces?

5. **Sequencing / Packaging**
   - How should the fixes be grouped so they can be applied without creating process bloat?

These boundaries match the user's categories and avoid blending different ranking criteria.

## Step 3 - Validate Boundaries Bottom-Up

### Atoms

- `PastNavigationMemoryFile exists` is load-bearing but needs discovery status and fallback.
- Every Navigation run should record route-memory status.
- Full Route Memory Review writes `route_memory_review.md` when it runs.
- Early-stage robust mode needs phase, exceptions, anti-authority, and telemetry.
- Critique missed dimensions across many correction chains.
- Archive-first diagnosis prevents unnecessary embedded marks.
- Registry-vs-derivation prevents maintained indexes that duplicate cheap search.
- Durable terms need type and user-inference validation.

### Validation

The atoms group naturally:

- first four atoms -> urgent and reliability Navigation package;
- Critique and durable term atoms -> broadest impact;
- archive and registry atoms -> easy high-effect;
- phase and telemetry atom -> urgent second fix / sequencing.

Confidence: high. The pieces are user-category aligned and reassemble into the requested answer.

## Step 4 - Question Tree

### Q1. What are the most urgent two fixes?

Verification criteria:

- [ ] Uses current operational risk, not only frequency.
- [ ] Accounts for recent Navigation route-memory density.
- [ ] Names concrete fix packages, not vague themes.
- [ ] Explains why broad loop fixes are not first in urgency.

### Q2. What is the most meaningful reliability fix?

Verification criteria:

- [ ] Identifies the fix that most directly prevents false skips, stale memory, and hidden load-bearing state.
- [ ] Distinguishes operational reliability from future reasoning reliability.
- [ ] States the minimum components needed for the fix to work.

### Q3. What are the easiest two fixes with good effect?

Verification criteria:

- [ ] Selects low-blast-radius checks.
- [ ] Gives clear activation triggers.
- [ ] Avoids broad invariants disguised as easy fixes.
- [ ] Explains expected effect.

### Q4. Which fix touches the most and has the most effect?

Verification criteria:

- [ ] Compares Critique, Durable Term, CONCLUDE, and Navigation patch breadth.
- [ ] Selects one broadest-impact fix or tightly named package.
- [ ] Includes scope limits to prevent checklist bloat.

### Q5. What implementation order follows?

Verification criteria:

- [ ] Gives practical sequencing.
- [ ] Separates quick wins from deeper materialization.
- [ ] Avoids broad MVL+ rewrite as first move.
- [ ] Preserves deferred gates where evidence is not broad enough.

## Step 5 - Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 urgent fixes | Q5 sequencing | P0/P1 implementation order | one-way |
| Q2 reliability winner | Q1 urgent fixes | Whether reliability winner is also urgent | one-way |
| Q3 easy fixes | Q5 sequencing | Quick-win patch candidates | one-way |
| Q4 broadest fix | Q5 sequencing | Loop-level hardening after or alongside operational patch | one-way |
| Evidence from exploration | Q1-Q4 | Candidate support and confidence | one-way |
| Sensemaking ranking model | Q1-Q4 | Axis definitions | one-way |

Hidden coupling to avoid:

- Letting the broadest fix replace the urgent operational fix.
- Letting quick wins look like complete reliability materialization.
- Letting Navigation-specific evidence justify a broad MVL+ rewrite.

## Step 6 - Dependency Order

1. Define ranking criteria from Sensemaking.
2. Answer Q1 and Q2 first because they share the Navigation operational package.
3. Answer Q3 independently as quick wins.
4. Answer Q4 after Q1-Q3 so broad impact is not confused with urgency or ease.
5. Answer Q5 last as sequencing.

## Step 7 - Self-Evaluation

### Independence

Pass. Each question maps to one user-requested category or needed sequencing.

### Completeness

Pass. The decomposition covers urgent, reliability, easy, broadest, and order.

### Reassembly

Pass. Answering Q1-Q5 reconstructs the final response the user asked for.

### Tractability

Pass. Each piece can be answered in one focused section.

### Interface Clarity

Pass. Ranking criteria and evidence support flow one way into candidate rankings.

### Balance

Pass. Q1/Q2 carry the most complexity, but that reflects the diagnostics density around Navigation.

### Confidence

High. Top-down categories match the user's explicit request and bottom-up atoms.

## Final Deliverable

### Coupling Map

```text
Navigation route-memory package
  strongly couples -> discovery, status, source trigger, phase telemetry

Loop-level reliability package
  strongly couples -> critique dimensions, premise validation, durable term checks

Quick wins
  weakly couple -> archive-use check, registry-vs-derivation/fallback-promotion
```

### Question Tree

1. What are the most urgent two fixes?
2. What is the most meaningful reliability fix?
3. What are the easiest two fixes with good effect?
4. Which fix touches the most and has the most effect?
5. What implementation order follows?

### Interface Map

Primary interface:

```text
ranking_axis = urgent | reliability | ease | breadth
```

Secondary interface:

```text
fix_scope = Navigation_operational | loop_reasoning | diagnostic_workflow | conclude_backstop
```

### Dependency Order

```text
criteria -> urgent/reliability/easy/broad rankings -> implementation sequence
```

### Self-Evaluation Summary

Independence: pass.
Completeness: pass.
Reassembly: pass.
Tractability: pass.
Interface clarity: pass.
Balance: pass.
Confidence: pass.
