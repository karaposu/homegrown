---
status: active
refines:
  - devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md
  - devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md
---
# Finding: next_load_bearing_navigation_warmup_context_loading

## Changes from Prior

**Prior paths:**

- `devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md`
- `devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md`

**Revision trigger:** The user asked whether the next load-bearing development after `artifact_materialization.md` should be Navigation, session warm-up, generic context loading, recency-targeted loading, or a separate context discipline.

**What's preserved:** The earlier finding was right that Navigation relief is the next operating focus and that materialization should bridge selected decisions into files. The Navigation Observer finding was right that movement-space attention eventually benefits from a separate observer/report layer.

**What's changed:** `homegrown/protocols/artifact_materialization.md` now exists, so the next concrete artifact should move one step closer to Navigation relief. The missing piece is not full Navigation Observer yet. It is Navigation's input boundary.

**What's new:** The next load-bearing artifact should be `homegrown/protocols/navigation_context_intake.md`, with "Navigation warm-up" as the plain-language alias.

**Migration:** Treat the future Navigation Observer as downstream. First build context intake, dogfood it on one Navigation run, and review whether it reduced the user's context-steering burden.

## Question

What is the next load-bearing development that will most relax the user's developer burden, and should it be Navigation, session warm-up/context loading, a separate context discipline, or something else?

The goal is to identify the next capability to build, explain why it is the highest-leverage step toward the endgoal, distinguish Navigation from session warm-up/context loading, and give a practical development direction that can be implemented in small pieces.

## Finding Summary

- The next load-bearing development should be a **Navigation-specific context-intake protocol**.

- The likely file is:

```text
homegrown/protocols/navigation_context_intake.md
```

- The plain-language name can be **Navigation warm-up**.

- Navigation should remain the discipline that enumerates next moves. Context intake should prepare the state Navigation reads.

- This should start as a protocol, not a new discipline. The v1 job is procedural enough: define source authority, read tiers, escalation triggers, output brief, trace, and handoff.

- It should not read only `finding.md` files by default. Findings are the first summary layer, but `docarchive/`, critique outputs, materialization traces, outcome reviews, branch records, and protocol files must be read when triggered.

- It should not become a full Navigation Observer session yet. The observer idea remains strong, but observer reports need reliable context intake first.

- It should not become a selector yet. Selection needs values and outcome-calibrated route evidence. For now, Navigation maps, the human selects, and selected moves route to branch or materialization.

## Finding

### 1. The Next Need Is Not More Navigation Power Alone

Navigation is already defined as the discipline that looks forward and enumerates possible next directions. It answers: "Given where we are, where could we move next?"

The user's current burden is slightly upstream of that. The user is still deciding what the AI should remember before Navigation can even be trusted. Recent breakthroughs, stable protocols, corrected findings, branch lineage, materialization traces, and outcome reviews are all distributed across the repo.

That means the missing load-bearing capability is:

```text
repo state
  -> Navigation context intake
  -> current-state brief
  -> Navigation map
  -> human selection
  -> branch or materialization
  -> outcome review
```

This is more concrete than "better Navigation" and smaller than "persistent Navigation Observer."

### 2. Context Intake Should Be Separate From Navigation In V1

Navigation should not absorb all context loading immediately.

The reason is diagnostic clarity. If Navigation produces a weak map, the system should be able to ask whether the failure came from:

- wrong or insufficient context intake;
- weak movement-space enumeration;
- unclear selection values;
- bad materialization of the selected move;
- or later outcome mismatch.

If context loading is hidden inside Navigation, those failures blur together.

The better v1 boundary is:

```text
Navigation context intake prepares a current-state brief.
Navigation consumes the brief and enumerates possible next moves.
```

This makes context intake testable as its own small artifact without promoting it into a new discipline.

### 3. It Should Start As A Protocol, Not A Discipline

A new context discipline may become valid later. Context selection can require judgment about relevance, authority, recency, and missing evidence.

But v1 does not need discipline status. The first useful form can be written as a protocol:

- classify the Navigation run type;
- choose a read mode;
- read stable base context;
- read recent findings;
- read source-authority links;
- escalate to deeper context when triggers appear;
- produce a current-state brief;
- record the read set and missing-context limits.

That is protocol-shaped. It is a repeatable procedure with gates and output contracts.

Promotion to a discipline should require evidence: repeated traces showing that protocol rules are not enough and that the cognitive judgment of context relevance is the load-bearing operation.

### 4. The Read Model Should Be Tiered

The user asked whether context loading should include only `finding.md` files to save context.

The answer is: findings should be the first layer, not the only layer.

`finding.md` is the right default summary artifact for fast orientation. But finding-only Navigation can create false completeness. It can miss:

- critique kills and why they were killed;
- weak discipline outputs archived in `docarchive/`;
- branch source anchors;
- materialization traces;
- outcome-review evidence;
- protocol mechanics that are more authoritative than a recent summary;
- correction chains where a later finding corrected a prior one.

The protocol should therefore define modes:

| Mode | Use When | Read Shape |
| --- | --- | --- |
| Compact | quick low-risk "what next?" check | recent `finding.md` files plus stable protocol index, with confidence warning |
| Standard | ordinary project-level Navigation | recent findings, relevant protocols, branch/materialization/outcome records |
| Deep | fundamentals, corrections, repeated confusion, high-risk movement | Standard plus `docarchive/`, critique outputs, related older chains |
| Full | rare global reset or major strategy scan | broad Markdown scan with explicit context-budget warning |

This preserves context economy without pretending that cheap context is complete context.

### 5. The Output Should Be A Current-State Brief

The context-intake protocol should not directly produce a Navigation map. That remains Navigation's job.

It should produce a current-state brief with a stable shape:

```markdown
## Read Set
## Current Position
## Recent Changes
## Stable Authorities
## Open Gates
## Movement Signals
## Missing Context / Confidence Limits
## Recommended Navigation Prompt
```

This brief is the bridge between "repo state exists on disk" and "Navigation can reason about where to move."

The brief also makes later failures inspectable. If Navigation made a bad recommendation, the read set and missing-context warnings show whether the input state was weak.

### 6. The Dogfood Sequence Matters

The next move should not stop at writing the protocol.

The sequence should be:

```text
materialize navigation_context_intake.md
  -> use it on current Homegrown state
  -> run Navigation over its current-state brief
  -> human selects one move
  -> route selected move to branch or materialization
  -> run outcome_review after use
```

The outcome review should ask whether the protocol actually reduced the user's burden of telling the AI what to read and deciding what matters.

If it only adds ceremony, the system should not standardize it.

### 7. What This Means For Navigation Observer

The Navigation Observer remains a strong later direction.

But full observer reports need reliable context intake. Otherwise the observer's first hidden problem is the same problem the user has now: what should this session load before judging movement?

So the staging is:

```text
Navigation context intake
  -> one or more dogfood Navigation runs
  -> Navigation Observer report contract
  -> navigation memory
  -> selector
  -> multihead / persistent observer
```

This keeps the architecture load-bearing for its own build process.

## Next Actions

### MUST

- **What:** Materialize `homegrown/protocols/navigation_context_intake.md`.
  **Who:** Artifact materialization protocol.
  **Gate:** Before building a full Navigation Observer report contract, selector, navigation memory, or multihead.
  **Why:** Navigation needs a reliable input boundary before it can reduce the user's next-move burden.

- **What:** Define Compact, Standard, Deep, and Full context-intake modes.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** This controls context cost without relying on finding-only false completeness.

- **What:** Define the current-state brief output contract.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** Navigation needs a stable input artifact that records read set, current position, movement signals, and missing context.

- **What:** Dogfood the protocol on current Homegrown state.
  **Who:** Human + Navigation.
  **Gate:** Immediately after the protocol is created.
  **Why:** The protocol's value is whether it reduces real user burden, not whether it reads well.

- **What:** Run outcome review after the first selected move from that Navigation run is used.
  **Who:** `homegrown/protocols/outcome_review.md`.
  **Gate:** After first meaningful use.
  **Why:** Homegrown needs evidence that context intake improved Navigation or reduced steering overhead.

### COULD

- **What:** Add a short reference in Navigation's discipline file saying independent project-level Navigation should use `navigation_context_intake.md` first.
  **Who:** Future materialization run.
  **Gate:** After the protocol exists and has been dogfooded once.
  **Why:** Avoids wiring an untested protocol into Navigation prematurely.

- **What:** Add a materialization handoff example from Navigation item to artifact request.
  **Who:** `artifact_materialization.md` or the new Navigation context-intake protocol.
  **Gate:** After first Navigation dogfood if handoff ambiguity appears.
  **Why:** It could make the chain from Navigation to files smoother.

- **What:** Create a Navigation Observer report protocol.
  **Who:** Future materialization run.
  **Gate:** After at least one context-intake dogfood run, preferably 3 if the first run is ambiguous.
  **Why:** Observer reports become much safer once their read-set layer is explicit.

### DEFERRED

- **What:** Generic `session_warmup.md`.
  **Gate:** Revive after at least 3 non-Navigation operations repeat the same context-intake needs.
  **Why (if revived):** A generic protocol may reduce duplication once repeated traces prove the common shape.

- **What:** Context-intake as a separate discipline.
  **Gate:** Revive after repeated protocol runs show that stable rules cannot handle relevance/authority judgment.
  **Why (if revived):** Discipline status is justified only if the cognitive judgment is load-bearing.

- **What:** Persistent Navigation Observer session.
  **Gate:** Revive after protocol-first context intake and observer reports reduce burden across several real navigation decisions.
  **Why (if revived):** A persistent observer may improve movement-space continuity once the report and read-set contract are proven.

- **What:** Selector protocol.
  **Gate:** Revive after at least 10 Navigation-selected moves have outcome reviews showing route-quality patterns.
  **Why (if revived):** Selection needs calibrated evidence about which kinds of moves work.

- **What:** Multihead execution.
  **Gate:** Revive after branch comparison, merge policy, and movement outcome memory exist.
  **Why (if revived):** Multihead should increase useful search, not multiply the user's digestion burden.

## Reasoning

Exploration found that Navigation, materialization, branching, outcome review, and alignment control already exist as partial architecture. The high-signal gap is the input boundary before independent project-level Navigation.

Sensemaking collapsed five ambiguities. It resolved that context intake is not Navigation itself, should not start generic, should not read only findings, should not become a discipline immediately, and should precede bigger Navigation Observer or ARC work.

Decomposition showed that the strongest boundary is between "prepare current state" and "enumerate moves." Keeping that boundary lets the system later diagnose whether bad movement came from bad context or bad Navigation reasoning.

Innovation generated seven candidates. The strongest assembly was a Navigation context-intake protocol that includes a finding-first Compact tier, current-state brief output, deeper read escalation, and deferred observer/selector paths.

Critique killed patching Navigation as the first artifact because it collapses input selection and movement enumeration. It killed finding-only mode as the default because it creates false completeness. It refined current-state brief into the output contract of the protocol. It deferred generic session warm-up, full observer, selector, and multihead because they depend on evidence this protocol is meant to produce.

The clean survivor is `homegrown/protocols/navigation_context_intake.md`.

## Open Questions

### Monitoring

- After the first dogfood run, did `navigation_context_intake.md` reduce how much context the user had to manually provide?
- After 3 Navigation uses, were Compact/Standard/Deep/Full mode boundaries clear, or did the user/agent repeatedly hesitate?

### Blocked

- Exact selector design is blocked until Navigation outputs and selected moves have outcome-review evidence.
- Persistent Navigation Observer design is blocked until protocol-first context intake is used on real project state.

### Refinement Triggers

- If finding-only Compact mode causes a bad Navigation recommendation, revise the escalation triggers.
- If Standard mode repeatedly reads too much, add stricter context-budget guidance.
- If the protocol repeatedly requires judgment that cannot be expressed as stable rules, run MVL+ on whether context intake should become a discipline.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 


what is next load bearing development for our endgoal that once established my job as developer will be relaxed and easier? i am thinking probably it is navigation but for navigation to work, we need session warm up logic... maybe thats another protocol? generic context loading and then recency targeted context loading ? or maybe since that context will be used for navigation it should only inlcude finding.md files to save context? 

but i am thinking this can be a sepeare discipline even, maybe part of navigation idk. 

lets discuss this
```

</details>
