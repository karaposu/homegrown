# Critique: Navigation Observer Session Architecture

## User Input

`devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/_branch.md`

## 1. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Movement-depth | Critical | Improves Navigation's ability to understand non-obvious moves, blockers, dependencies, and excluded paths. |
| Role clarity | Critical | Keeps observer, selector, runner, and worker responsibilities separate. |
| Feasibility | High | Can be implemented without requiring a full autonomous multi-agent runtime immediately. |
| Artifact auditability | High | Decisions can be traced to read artifacts, confidence, and explicit recommendations. |
| Context efficiency | High | Reduces main-session bloat without creating equal or worse observer bloat. |
| Evolution path | High | Provides a staged route toward meta-loop, graph state, and UI. |
| Safety against false autonomy | Critical | Does not create hidden selection or execution authority before evidence exists. |
| Empirical evaluability | Medium-high | Produces outputs that can be compared against outcomes and human judgment. |

## 2. Fitness Landscape

### Viable Region

Designs that:

- separate worker problem-solving from Navigation movement-space perception;
- use artifacts as the main synchronization substrate;
- produce auditable Navigation outputs;
- keep selection explicit;
- start protocol-first before persistent runtime.

### Dead Region

Designs that:

- make the observer an autonomous selector/executor in v1;
- depend primarily on raw chat transcripts;
- add a live supervisory session without an artifact contract;
- visualize thinking-space before maps and graph data are meaningful.

### Boundary Region

Designs that:

- use a long-lived observer session after protocol validation;
- allow observer-written graph updates if uncertainty is represented correctly;
- allow observer-triggered MVL+ sub-inquiries later, if gated by selector or explicit permission.

### Unexplored Region

- Exact file format for navigation memory.
- Exact wake/trigger policy for a persistent observer.
- Exact evaluation metric for "better movement quality."
- How a future selector should make tradeoffs when human selection is replaced or assisted.

## 3. Candidate Verdicts

### Candidate A: Navigation Observer Role

**Description:** A separate context-isolated role/session that reads inquiry artifacts and produces movement-space maps and recommendations.

**Prosecution:** This could be just a fancy name for another prompt. It might add overhead without improving actual Navigation quality.

**Defense:** The role separation solves a real structural problem: local inquiry solving and cross-run movement perception are different cognitive jobs. Current Navigation lacks continuity and protected attention. The observer gives a place for N2/N3 Navigation to live.

**Collision:** Defense wins if the observer is artifact-native and output-driven. Prosecution wins if it is only a vague session identity.

**Verdict:** **SURVIVE**

**Constructive output:** Define it by artifacts and authority, not personality. The observer is valid only if it writes inspectable Navigation outputs.

### Candidate B: Protocol-First Observer Mode

**Description:** Implement the observer first as a manually invoked protocol/report after completed MVL+ inquiries.

**Prosecution:** This is less exciting than a live separate AI session and may not test the persistent-context advantage.

**Defense:** It tests the important part first: whether observer-style artifact reading produces better movement maps. It avoids runtime complexity and keeps failure cheap.

**Collision:** Defense wins strongly. The persistent-context benefit is not useful until the artifact contract and output format work.

**Verdict:** **SURVIVE - Rank 1 immediate build**

**Constructive output:** Create a `navigation_observer.md` protocol before creating a long-lived observer session.

### Candidate C: Navigation-Focused MVL+ Internal Loop

**Description:** The observer can run MVL+ internally when the movement-space is complex.

**Prosecution:** This may blur Navigation and MVL+ until every Navigation run becomes expensive and overbuilt.

**Defense:** MVL+ is the reasoning engine; Navigation remains the domain. The output stays Navigation-specific: maps, candidates, blockers, confidence, excluded directions.

**Collision:** Defense wins with an escalation rule. Prosecution wins if deep MVL+ is always mandatory.

**Verdict:** **REFINE**

**Constructive output:** Use tiering:

- N1: cheap Navigation map;
- N2: deep Navigation protocol;
- N3: graph-native Navigation;
- N4: navigation-focused MVL+ sub-inquiry for high-complexity movement decisions.

### Candidate D: Artifact-First Read Contract

**Description:** Observer reads scoped inquiry artifacts and records what it read.

**Prosecution:** Artifacts may omit important user context, causing stale or partial recommendations.

**Defense:** Artifact-first is still superior to raw transcript dependence because it is auditable and durable. Missing context can be surfaced as a warning instead of hidden in model memory.

**Collision:** Defense wins, but only if missing-artifact and missing-context warnings are part of the protocol.

**Verdict:** **SURVIVE**

**Constructive output:** Require `Read Set` and `Missing Context / Confidence Limits` sections.

### Candidate E: Explicit Selector Boundary

**Description:** Observer recommends; human or explicit selector commits.

**Prosecution:** This slows the meta-loop and prevents full automation.

**Defense:** It prevents false autonomy and preserves human valuation while outcome evidence is thin. Selection is a different problem from mapping.

**Collision:** Defense wins on critical safety and role clarity.

**Verdict:** **SURVIVE - Critical constraint**

**Constructive output:** Every observer output should say `Selection Status: uncommitted` unless a separate selector/human has chosen.

### Candidate F: Outcome-Tracked Navigation Memory

**Description:** Track recommended moves, selected moves, and outcomes.

**Prosecution:** Adds maintenance overhead and may create a ledger nobody updates.

**Defense:** Without outcome memory, the system cannot learn whether Navigation improved movement quality. This is the empirical substrate for future autonomy.

**Collision:** Defense wins if the memory is lightweight and tied to actual observer reports.

**Verdict:** **SURVIVE**

**Constructive output:** Start with minimal fields: `source_inquiry`, `recommended_move_id`, `selected_move_id`, `selection_reason`, `outcome`, `evidence_path`.

### Candidate G: Graph-Native State

**Description:** Navigation emits nodes/edges usable by a thinking-space UI.

**Prosecution:** Graph work can become premature infrastructure and make weak maps look scientific.

**Defense:** The meta-loop whirl and UI need graph state eventually. Nodes and edges are the natural representation of thinking-space traversal.

**Collision:** Boundary verdict. It is correct later, not first.

**Verdict:** **REFINE / DEFER**

**Constructive output:** Do not build full graph/UI first. Add graph fields only after observer reports stabilize.

### Candidate H: Observer as Autonomous Selector

**Description:** Observer observes, chooses, and launches the next MVL.

**Prosecution:** Collapses Navigation, valuation, and execution before evidence exists. Hides values. Can burn compute on confident but wrong paths.

**Defense:** It would make the system feel more autonomous and could accelerate traversal.

**Collision:** Prosecution wins. Acceleration without validated selection is not progress.

**Verdict:** **KILL for current stage**

**Constructive seed:** What selection evidence and valuation contract would be required before observer recommendations can become committed moves?

### Candidate I: Observer as Full Meta-loop Runner

**Description:** Observer becomes the whole meta-loop controller.

**Prosecution:** Too broad. Requires execution, stop conditions, branch merge, state mutation, and selection authority all at once.

**Defense:** Eventually a unified controller may be simpler than separate pieces.

**Collision:** Prosecution wins for now. The future possibility does not justify skipping modular stages.

**Verdict:** **KILL for v1 / revisit later**

**Constructive seed:** Build observer and runner as separate artifacts first; merge only if separation proves artificial.

### Candidate J: Raw Transcript Observer

**Description:** Observer watches full chat/session transcripts directly.

**Prosecution:** Imports context bloat, weakens auditability, and makes observer state fragile.

**Defense:** It may capture nuance not present in artifacts.

**Collision:** Prosecution wins for primary input. Defense suggests an exception: raw user correction can be passed explicitly when relevant.

**Verdict:** **KILL as primary mode**

**Constructive output:** Use explicit `extra_context` fields rather than transcript dependence.

## 4. Assembly Check

The strongest assembly is:

```text
Protocol-first Navigation Observer
+ artifact-first read contract
+ optional navigation-focused MVL+ escalation
+ explicit selector boundary
+ lightweight outcome-tracked navigation memory
```

**Prosecution:** Even this assembly may be process-heavy for small inquiries.

**Defense:** It does not need to run for every small inquiry. It should trigger on strategic "what next?" questions, correction chains, multiple plausible moves, blockers, low confidence, or fundamentals-related inquiries.

**Collision:** Defense wins with trigger rules.

**Assembly verdict:** **SURVIVE**

## 5. Ranked Survivors

1. **Protocol-first Navigation Observer** - immediate build path.
2. **Explicit selector boundary** - critical constraint.
3. **Artifact-first read contract** - auditability substrate.
4. **Navigation-focused MVL+ escalation** - deep reasoning option for complex movement-space.
5. **Outcome-tracked navigation memory** - empirical substrate for future autonomy.
6. **Graph-native state** - later substrate for UI and meta-loop traversal.

## 6. Coverage Map

| Region | Coverage | Result |
|---|---|---|
| Shallow current Navigation | Covered | Insufficient for meta-loop-grade traversal. |
| Separate observer role | Covered | Survives. |
| Protocol-first implementation | Covered | Strongest immediate survivor. |
| Persistent live observer | Covered | Deferred. |
| Autonomous selector | Covered | Killed for current stage. |
| Full meta-loop controller | Covered | Killed/deferred. |
| Artifact-first vs transcript-first | Covered | Artifact-first survives. |
| Graph/UI | Covered | Deferred until map data exists. |

## 7. Signal

**TERMINATE with ranked survivors.**

The original question is answered enough for a finding: the separate Navigation observer idea makes sense and may be a breakthrough-level architecture, but not as an immediate autonomous manager. The next useful move is a protocol-first observer that creates auditable movement-space maps after selected MVL+ inquiries.

## Convergence Telemetry

- **Dimension coverage:** Complete for current decision.
- **Adversarial strength:** Strong. The attractive autonomous variants were directly tested and rejected for v1.
- **Landscape stability:** Stable. New candidates land in known regions: observer, selector, runner, graph/UI, autonomy.
- **Clean SURVIVE exists:** Yes: protocol-first Navigation Observer with selector boundary and artifact contract.
- **Failure modes observed:** None major. Self-reference risk remains because this evaluates a cognitive architecture with its own cognitive disciplines; empirical dogfooding is required.
- **Overall: PROCEED**
