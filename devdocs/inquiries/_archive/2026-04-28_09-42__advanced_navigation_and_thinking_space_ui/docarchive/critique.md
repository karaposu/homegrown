# Critique: Advanced Navigation And Thinking Space UI

## User Input

`devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/_branch.md`

## A. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Honest current-state assessment | Critical | Does not overstate current Navigation maturity. |
| Compute realism | Critical | Avoids always-expensive Navigation and artifact noise. |
| Navigation quality | Critical | Produces deeper maps than current taxonomy assignment. |
| UI timing | Critical | Does not build polished UI before data and evidence exist. |
| Strategic fit | High | Supports meta-loop, selector, and thinking-space traversal. |
| Data readiness | High | Recognizes schema/graph data as prerequisite for UI. |
| Actionability | High | Gives next steps that can be done now. |
| Autonomy safety | High | Keeps selection explicit and avoids hidden automation. |

## B. Fitness Landscape

### Viable Region

Tiered Navigation plus graph-ready output:

- N1 current map remains usable.
- N2 deep map construction becomes the next real upgrade.
- N3 graph-native output follows real Navigation maps.
- Static graph UI comes after N3 basics.
- Live dashboard and selector automation wait for traversal evidence.

### Dead Region

- Claiming current Navigation is already advanced enough.
- Always running full deep Navigation.
- Building polished UI before structured map data.
- Treating UI interaction or Navigation confidence as hidden selection.

### Boundary Region

- N4 sub-inquiry escalation.
- Live meta-loop dashboard.
- Graph UI as selector surface.
- `navigation.graph.json` schema details.

### Unexplored Region

- Exact schema.
- Exact UI tech.
- Whether graph visualization improves human decisions.
- How to measure context-cost reduction.

## C. Candidate Verdicts

### Candidate A - Tiered Navigation levels

**Prosecution:** Adds complexity to a discipline that has not yet been used. Too many levels could make agents hesitate or select the wrong depth.

**Defense:** Compute limits require depth control. A single Navigation mode either becomes too shallow for hard cases or too expensive for ordinary cases. Levels make the tradeoff explicit.

**Collision:** Defense wins, with a refinement. The first implementation should not overbuild all levels. It should define the ladder but implement only N1 and N2 behavior first.

**Verdict: SURVIVE / REFINE**

Refinement: document all levels, but implement N2 before N3/N4.

### Candidate B - Navigation Map as graph-native artifact

**Prosecution:** Graph schema can become speculative if designed before real Navigation maps exist.

**Defense:** UI, meta-loop memory, selected-move tracking, and selector calibration all need structured data. Prose-only maps will not scale.

**Collision:** Defense wins, but timing matters. Graph-native output should follow several real maps, not precede them.

**Verdict: SURVIVE / REFINE**

Refinement: start with a minimal sidecar after five N2 maps, not a comprehensive ontology.

### Candidate C - Static thinking-space graph as first UI

**Prosecution:** Even a static UI can distract from protocol work and create maintenance burden.

**Defense:** A static generated graph is cheap, avoids live-runner complexity, and directly addresses the growing inquiry-folder navigation problem.

**Collision:** Defense wins if the graph is generated from existing artifacts and kept minimal.

**Verdict: SURVIVE**

Constraint: build only after Navigation has structured output or enough relationship data to avoid manual upkeep.

### Candidate D - Live meta-loop dashboard

**Prosecution:** No live traversal data exists yet. A dashboard would invent UI states before runner states are proven.

**Defense:** Long-term, showing loops moving through thinking space is exactly what the meta-loop needs for observability.

**Collision:** Both are true. It is strategically good and currently premature.

**Verdict: REFINE / DEFER**

Revival condition: after a sequential meta-loop has at least three traversal traces.

### Candidate E - Polished visual UI immediately

**Prosecution:** Premature. It would make weak or absent data look mature and spend effort on presentation before the cognitive substrate exists.

**Defense:** A UI could make the system feel real and help the user navigate many folders.

**Collision:** Prosecution wins. The defense identifies real value, but the timing and level are wrong.

**Verdict: KILL**

Constructive seed: build a generated static graph later from real data.

### Candidate F - Always-run deep Navigation

**Prosecution:** Ignores compute limits, creates artifact noise, and may make Navigation feel too expensive to use.

**Defense:** It maximizes quality and prevents shallow maps.

**Collision:** Prosecution wins. Quality must be adaptive. A tool that is too expensive to use regularly will fail in practice.

**Verdict: KILL**

Constructive seed: use trigger-based escalation from N1 to N2.

### Candidate G - Keep current Navigation as-is and only dogfood

**Prosecution:** Dogfooding current Navigation is useful, but it will test a known-underpowered version. It may falsely teach that Navigation is weak when the spec is simply too shallow.

**Defense:** Real use is needed before changing too much.

**Collision:** Split verdict. Dogfooding is necessary, but current Navigation should first get a small N2 spec patch so the test is meaningful.

**Verdict: REFINE**

Refinement: patch N2 depth requirements, then dogfood.

## D. Assembly Check

Surviving assembly:

```text
Do not claim current Navigation is advanced enough.
Patch Navigation toward N2 deep map construction.
Keep depth adaptive through explicit modes/triggers.
Dogfood N2 on real completed inquiries.
After enough real maps, add graph-native structured output.
Then generate a static thinking-space graph.
Defer polished UI, live dashboard, selector automation, and N4 sub-inquiries.
```

Assembly verdict: **SURVIVE**

Why it survives:

- It is honest about current weakness.
- It respects compute constraints.
- It keeps UI grounded in data.
- It gives an immediate next step.
- It preserves explicit human/selector boundary.

## E. Coverage Map

| Concern | Covered? | Notes |
|---|---:|---|
| Current Navigation advanced enough? | Yes | No; strong skeleton but underpowered. |
| Need advanced Navigation? | Yes | Yes, but tiered. |
| Compute limits? | Yes | Depth modes and triggers are central. |
| Thinking-space UI good idea? | Yes | Yes as instrumentation, not immediate polished app. |
| Navigation Map as innovation? | Yes | Strong if graph-native and outcome-aware. |
| Next implementation | Yes | Patch N2, dogfood, schema, static graph. |
| Hidden selection risk | Yes | Keep human/selector explicit. |

## F. Signal

**TERMINATE with ranked survivors.**

Ranked survivors:

1. Tiered Navigation with N2 deep map construction as next target.
2. Navigation Map evolving into graph-native artifact after dogfooding.
3. Static thinking-space graph as first UI after structured data exists.
4. Live meta-loop dashboard later.

Killed:

1. Current Navigation is already advanced enough.
2. Always-run deep Navigation.
3. Polished UI immediately.

Refined:

1. Dogfood Navigation, but after a small N2 depth patch.
2. Graph UI as selector surface, but only with explicit human selection.

Deferred:

1. N4 sub-inquiry Navigation.
2. Interactive UI.
3. Live dashboard.
4. Autonomous selector.

## Convergence Telemetry

- **Dimension coverage:** Complete for this question.
- **Adversarial strength:** STRONG. The exciting UI direction was tested against timing, data, and maintenance risks.
- **Landscape stability:** STABLE. Exploration, Sensemaking, Decomposition, and Innovation converge on staged tiered Navigation.
- **Clean SURVIVE exists:** YES - N2 deep Navigation first, graph-native output second, static UI third.
- **Failure modes observed:** Self-reference risk is present because Homegrown is evaluating its own Navigation architecture. It is reduced by concrete artifact inspection: current Navigation source and absence of real `navigation.md` inquiry outputs.
- **Output: PROCEED**
