# Critique: Navigation Protocol Or Discipline

## User Input

`devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/_branch.md`

## A. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Atomicity preservation | Critical | MVL/MVL+ stays a bounded answer-producing loop. |
| Distinct operation fit | Critical | Navigation's architecture matches whether it has a distinct cognitive operation. |
| Output fit | High | The design preserves the Navigation Map when that artifact is useful. |
| Meta-loop readiness | High | Future meta-loop can use Navigation without hidden selection. |
| Simplicity | Medium | The design avoids unnecessary new layers. |
| Adoption | High | The design makes Navigation usable rather than dormant. |
| Safety | High | The design avoids every inquiry becoming automatic continuation. |
| Spec coherence | High | The design fits existing source and prior findings. |

## B. Fitness Landscape

### Viable Region

Navigation remains a separate boundary discipline, while invocation is clarified through manual use, optional post-CONCLUDE hook, and meta-loop consumption.

### Dead Region

- Navigation as required sixth MVL+ stage.
- Navigation rewritten as only MVL+ protocol wrapper.
- Navigation as selector.
- Silent hidden selection from Navigation confidence.

### Boundary Region

- Manual-only Navigation: safe but under-integrated.
- Future invocation protocol: possibly useful, but not a replacement for Navigation.
- Meta-loop internalization: future infrastructure, but not now.

### Unexplored Region

- Exact hook trigger wording.
- Whether to add a separate `homegrown/protocols/navigation_invocation.md`.
- Best dataset for dogfooding Navigation maps.

## C. Candidate Verdicts

### Candidate A - Rewrite Navigation As MVL+ Protocol Wrapper

**Prosecution:** This collapses a map-making operation into generic inquiry answering. It loses the specialized Navigation Map, taxonomy, excluded-type reasoning, guideline WHYs, and Navigation telemetry unless all of that is rebuilt inside MVL+.

**Defense:** It preserves the principle that MVL+ is the atomic cognitive operation and reduces the number of separate skills.

**Collision:** Prosecution wins. The defense misunderstands atomicity. MVL+ atomicity does not require boundary perception to become MVL+.

**Verdict: KILL**

Constructive seed: protocolize invocation, not identity.

### Candidate B - Keep Navigation As Separate Boundary Discipline

**Prosecution:** It may remain underused if no runner invokes it. It also creates another thing to maintain.

**Defense:** It has a distinct operation, artifact, taxonomy, telemetry, and failure modes. The source already defines it as a boundary discipline.

**Collision:** Defense wins. Underuse is an integration problem, not proof that the architecture is wrong.

**Verdict: SURVIVE**

Caveat: it needs dogfooding and a small doc cleanup.

### Candidate C - Separate Discipline Plus Invocation Protocol/Hook

**Prosecution:** This may feel like a compromise that preserves too many layers.

**Defense:** It separates identity from invocation. Navigation stays a map-making discipline, while MVL+ or meta-loop can call it at the boundary.

**Collision:** Defense wins strongly. This design solves the actual problem without erasing Navigation's structure.

**Verdict: SURVIVE**

Implementation constraint: the hook must run after CONCLUDE or inside meta-loop traversal, not inside E/S/D/I/C.

### Candidate D - Add Navigation As Required Sixth MVL+ Stage

**Prosecution:** It breaks bounded inquiry closure. Every completed inquiry would produce continuation pressure by default, even when the finding is complete.

**Defense:** It would make Navigation visible and regularly used.

**Collision:** Prosecution wins. Visibility is not worth corrupting the core loop's closure.

**Verdict: KILL**

Constructive seed: use conditional post-CONCLUDE invocation instead.

### Candidate E - Keep Manual Navigation Only

**Prosecution:** This is likely why Navigation remains unused. Manual-only tools are easy to forget.

**Defense:** It is safe and requires no runner changes.

**Collision:** Both sides have merit. Manual use is acceptable now, but should not be the final integration.

**Verdict: REFINE**

Refinement: dogfood manually on several completed inquiries, then add a conditional hook if useful.

### Candidate F - Move Navigation Entirely Into Meta-Loop

**Prosecution:** Meta-loop is not mature enough to own Navigation. Internal-only Navigation would hide a useful standalone map.

**Defense:** Meta-loop is the natural long-term consumer.

**Collision:** Defense is future-valid but current-invalid.

**Verdict: REFINE / DEFER**

Refinement: meta-loop consumes Navigation, but Navigation remains callable independently.

### Candidate G - Navigation As Selector

**Prosecution:** This hides valuation and decision-making inside a map. Confidence labels would become decisions without explicit selection criteria.

**Defense:** A map that ranks options could naturally pick the highest-ranked item.

**Collision:** Prosecution wins. Prior findings are right: Navigation sees, selector chooses.

**Verdict: KILL**

Constructive seed: define a selector later using recorded human selections and outcomes.

### Candidate H - Fix Docs And Dogfood Before Architecture Change

**Prosecution:** Cleanup and dogfooding may not answer the deeper architecture concern.

**Defense:** The architecture is already mostly sound. The immediate problem is usage and small spec drift, especially the 15 vs 16 taxonomy mismatch.

**Collision:** Defense wins as a near-term action, not as the whole strategy.

**Verdict: SURVIVE**

## D. Assembly Check

Surviving assembly:

```text
Keep Navigation as a separate boundary discipline.
Do not put it inside E/S/D/I/C.
Do not rewrite it as a generic MVL+ protocol wrapper.
Add or clarify invocation only at boundaries:
  manual command,
  post-CONCLUDE MVL+ hook,
  meta-loop Navigation phase.
Keep selection separate.
Clean taxonomy mismatch and dogfood on completed inquiries.
```

Assembly verdict: **SURVIVE**

Why it survives:

- Preserves MVL+ atomicity.
- Preserves Navigation's distinct map artifact.
- Keeps future meta-loop perception modular.
- Avoids hidden selection.
- Addresses underuse through invocation, not demotion.

## E. Coverage Map

| Concern | Covered? | Notes |
|---|---:|---|
| Separate discipline vs MVL+ protocol | Yes | Separate boundary discipline wins. |
| MVL+ atomicity | Yes | Boundary discipline does not violate it. |
| Core pipeline inclusion | Yes | Required sixth stage killed. |
| Invocation | Yes | Manual now; conditional hook later. |
| Meta-loop role | Yes | Navigation remains eyes/perception. |
| Selector boundary | Yes | Navigation sees, selector chooses. |
| Immediate actions | Yes | Dogfood and fix taxonomy mismatch. |

## F. Signal

**TERMINATE with ranked survivors.**

Ranked survivors:

1. Navigation as separate boundary discipline.
2. Separate discipline plus boundary invocation hook/protocol.
3. Manual dogfooding plus taxonomy cleanup.
4. Meta-loop consuming Navigation maps as perception.

Killed:

1. Navigation as only MVL+ protocol wrapper.
2. Navigation as required sixth MVL+ stage.
3. Navigation as selector.

Deferred:

1. Full meta-loop ownership.
2. Autonomous selector.
3. Separate navigation invocation protocol file.

## Convergence Telemetry

- **Dimension coverage:** Complete for the current question.
- **Adversarial strength:** STRONG. The strongest objection to separate Navigation, underuse, was treated as an integration problem and not dismissed.
- **Landscape stability:** STABLE. Exploration, Sensemaking, Decomposition, and Innovation all converged on the same identity/invocation split.
- **Clean SURVIVE exists:** YES - separate boundary discipline plus explicit boundary invocation.
- **Failure modes observed:** Self-reference risk was present because Homegrown is evaluating its own discipline architecture, but prior findings and source artifacts provided external anchors inside the project.
- **Output: PROCEED**
