# Sensemaking: next_load_bearing_navigation_warmup_context_loading

## User Input

```text
What is the next load-bearing development for Homegrown that will most relax the user's developer burden? The user suspects it is probably Navigation, but Navigation may require session warm-up logic, generic context loading, recency-targeted context loading, or perhaps only finding.md reads. The user asks whether this should be a separate protocol, part of Navigation, or a separate discipline.
```

## SV1 - Baseline Understanding

The user is asking whether the next load-bearing development should be Navigation or something underneath Navigation that prepares context before Navigation runs.

Initial interpretation: the immediate pain is not lack of reasoning power. The pain is that the user still acts as the system's working memory and movement-space manager. The user decides what context matters, what recent breakthroughs matter, what old findings remain authoritative, and what should be explored next.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- The system must be built in pieces, not as a large architecture that cannot be carried.
- The next development should reduce the user's developer burden soon.
- Navigation should not become shallow because it lacks context.
- Context loading must not consume unlimited context every run.
- Reading only recent context can miss older source authority.
- Reading only `finding.md` files can miss critique kills, discipline failure evidence, and trace details.
- The new piece should fit with `artifact_materialization.md`, `branch_inquiry.md`, `outcome_review.md`, and alignment-control thinking.
- Multihead and persistent observer runtime remain risky until the system can compare, select, and learn from outcomes.

### Key Insights

- Navigation is not blocked by absence of a Navigation theory; it is blocked by absence of a repeatable current-state intake.
- The user's burden is partly "which context should this session load before deciding what next?"
- A protocol can define read tiers without inventing a new discipline.
- A discipline may become valid later if context intake requires judgment beyond read-set selection and summary.
- The next artifact should make Navigation useful as an independent session, not only as a post-loop appendix.

### Structural Points

The current stack is:

```text
MVL/MVL+ findings
  -> Branching isolates follow-ups
  -> Artifact materialization turns selected decisions into files
  -> Outcome review checks after-use value
  -> Navigation should map next movement
```

The missing bridge is:

```text
project state on disk
  -> context intake / warm-up
  -> current-state brief
  -> Navigation map
  -> human selection
  -> materialization or branch
```

### Foundational Principles

- Use the lightest sufficient control.
- Do not split protocols before real traces justify it.
- Navigation enumerates; selection commits.
- Context should be source-authorized, not merely recent.
- Recency is a signal, not an authority rule.
- `docarchive/` is not noise when diagnosis or critique-quality evidence matters.

### Meaning-Nodes

- Developer burden relief
- Navigation readiness
- Context intake
- Session warm-up
- Recency-targeted loading
- Source authority
- Read-set contract
- Current-state brief
- Navigation Observer
- Future discipline boundary

## SV2 - Anchor-Informed Understanding

The problem is no longer "Navigation vs materialization." Materialization exists now. The new problem is "what does Navigation need at its input boundary so it can reliably help the user choose what to do next?"

The likely answer is a small context-intake/warm-up protocol that prepares a Navigation-ready current-state brief.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

Navigation's independent mode currently says it can read whatever context exists. That is too underspecified for repeatable use. A read-set protocol can make the input contract explicit without changing Navigation's core cognitive operation.

New anchor: the missing thing is an **input boundary**, not the Navigation reasoning engine itself.

### Human / User Perspective

The user experiences strain from holding the whole project state in their head. A useful next step should reduce "tell the AI what matters" overhead. A context-intake protocol is valuable if it lets the user say "run Navigation over current Homegrown state" without manually listing ten files.

New anchor: success means less user prompting, not more documents.

### Strategic / Long-Term Perspective

Future Navigation Observer, selector, and multihead all need a reliable state model. If the system cannot load its own current state, deeper navigation or parallelism will amplify confusion.

New anchor: context intake is a substrate for later observer and selector work.

### Risk / Failure Perspective

If warm-up becomes too generic, it can become another heavy ceremony. If it reads only findings, it can create false confidence. If it becomes a new discipline too early, it adds taxonomy complexity before the repeated operation is proven.

New anchor: the v1 artifact should be narrow, mode-based, and dogfooded immediately.

### Resource / Feasibility Perspective

A protocol is cheaper than a discipline or live observer session. It can define tiers:

- Base: stable project context.
- Recent: latest findings and recent materializations.
- Targeted: related prior findings and protocols.
- Deep: `docarchive/`, critique, traces, outcome reviews, branches.

New anchor: tiered loading can control context cost.

### Definitional / Consistency Perspective

Navigation is a discipline because it performs a cognitive operation: enumerating possible next directions. Context intake is mostly a procedure for choosing and recording what to read. That makes it a protocol at v1.

Counter-pressure: if context intake later requires significant judgment about relevance, authority, recency, and missing evidence, it may become a discipline or a Navigation subdiscipline.

New anchor: start as protocol, promote only if traces show cognitive complexity.

## SV3 - Multi-Perspective Understanding

The core shift is from "Navigation should be next" to "Navigation should be the next use, but Navigation context-intake should be the next artifact."

The next load-bearing development is not a full Navigation Observer and not multihead. It is a Navigation warm-up/context-intake protocol that makes independent Navigation reliable and cheaper for the user to invoke.

## Phase 3 - Ambiguity Collapse

### Ambiguity 1: Is this Navigation itself or something before Navigation?

**Strongest counter-interpretation:** It is Navigation itself. Navigation should simply know how to read context, so adding a separate protocol adds unnecessary indirection.

**Why the counter-interpretation fails structurally:** Navigation's core operation is enumeration of possible next directions. Context intake is source selection, read-set tiering, and current-state summarization. These are coupled to Navigation but not identical to Navigation. Merging them immediately would make Navigation carry both "what to read" and "what directions exist," which makes testing harder.

**Confidence:** HIGH.

**Resolution:** Treat context intake as a pre-Navigation protocol in v1.

**What is now fixed?** Navigation consumes a current-state brief prepared under a read-set contract.

**What is no longer allowed?** Assuming Navigation can be reliable from arbitrary session memory alone.

**What now depends on this choice?** The next artifact shape and dogfood sequence.

**What changed in the conceptual model?** Navigation becomes a consumer of context intake, not the owner of all context-loading logic.

### Ambiguity 2: Should this be generic context loading for every task?

**Strongest counter-interpretation:** Yes. Every Homegrown operation needs context. A generic session warm-up protocol would serve materialization, Navigation, loop diagnose, ARC, and more.

**Why the counter-interpretation fails structurally:** Generic context loading risks abstracting before the most painful use case is proven. Navigation has a specific read need: current position, recent movements, authoritative findings, open branches, materialization traces, outcomes, and blockers. Starting generic would either be too vague or too large.

**Confidence:** HIGH for v1, MEDIUM for long-term.

**Resolution:** Build Navigation-specific context intake first, with enough generic vocabulary that it can later be generalized.

**What is now fixed?** The immediate artifact should serve Navigation.

**What is no longer allowed?** Leading with a universal session warm-up protocol unless Navigation-specific dogfooding proves a broader repeated pattern.

**What now depends on this choice?** File naming, scope, and validation criteria.

**What changed in the conceptual model?** General context loading becomes a possible extraction, not the starting point.

### Ambiguity 3: Should it read only `finding.md` files to save context?

**Strongest counter-interpretation:** Yes. `finding.md` is the conclusion artifact, so reading only findings is the cheapest useful Navigation state.

**Why the counter-interpretation fails structurally:** `finding.md` is enough for many high-level decisions, but not for diagnosing why a prior loop failed, why critique killed an idea, or whether a protocol edit changed behavior. Existing `loop_diagnose.md` explicitly warns not to diagnose from findings alone when `docarchive/` exists. Navigation often needs critique kills, telemetry flags, and trace outcomes to avoid resurrecting bad moves.

**Confidence:** HIGH.

**Resolution:** Use `finding.md` as the default first read, not the only read. Add escalation rules for `docarchive/`, materialization traces, outcome reviews, and protocol files.

**What is now fixed?** The read contract must be tiered.

**What is no longer allowed?** A finding-only Navigation state presented as complete.

**What now depends on this choice?** The protocol must define when deeper context is required.

**What changed in the conceptual model?** Context economy is achieved by staging, not by permanent exclusion.

### Ambiguity 4: Is this a separate discipline?

**Strongest counter-interpretation:** Yes. Context selection can be cognitive: it requires relevance judgment, source authority, recency handling, and priority decisions.

**Why the counter-interpretation fails structurally:** In v1, the most valuable part can be expressed procedurally: read these stable files, scan these recent findings, escalate under these conditions, output this brief. That is a protocol-shaped operation. A discipline should be admitted when repeated runs show that the judgment itself is load-bearing and not reducible to stable protocol rules.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Start as a protocol. Record promotion triggers.

**What is now fixed?** Do not create a new context discipline yet.

**What is no longer allowed?** Treating "maybe cognitive later" as enough reason to expand taxonomy now.

**What now depends on this choice?** The protocol should include trace fields so repeated use can show whether promotion is needed.

**What changed in the conceptual model?** Discipline status becomes evidence-gated.

### Ambiguity 5: Is this more important than materializing ARC or Navigation Observer?

**Strongest counter-interpretation:** ARC harness or full Navigation Observer gives more concrete payoff. Context intake is meta-work.

**Why the counter-interpretation fails structurally:** ARC and Navigation Observer both depend on good selection and current-state awareness. If the system does not know what context to load, it will build the wrong next artifact or require the user to manually steer every step. Context intake directly targets the user's current burden.

**Confidence:** HIGH.

**Resolution:** The next load-bearing artifact should be Navigation context intake/warm-up. ARC and full observer remain downstream.

**What is now fixed?** Build the smallest context-intake artifact before larger Navigation runtime or ARC integration.

**What is no longer allowed?** Jumping to multihead/observer runtime while context intake is undefined.

**What now depends on this choice?** The immediate Next Actions in the final finding.

**What changed in the conceptual model?** Context intake becomes the load-bearing precondition for Navigation relief.

## SV4 - Clarified Understanding

The strongest interpretation is:

```text
Navigation should be the next operating focus.
Navigation context-intake should be the next materialized artifact.
```

The artifact should not be a new discipline yet. It should be a protocol that defines how to warm up a session for Navigation: which files to read, how to stage context by risk and recency, when to include deeper archives, and what current-state brief to produce.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Next durable artifact should be context-intake/warm-up for Navigation.
- It should start as a protocol.
- It should produce a Navigation-ready current-state brief.
- It should use tiered loading, not all-or-nothing reading.
- `finding.md` files are default summary inputs, not exclusive inputs.
- Deeper reads include `docarchive/`, materialization traces, outcome reviews, branch records, and protocol files when triggered.

### Eliminated Options

- Build multihead next.
- Build persistent Navigation Observer session next.
- Build a generic all-purpose session warm-up protocol as the first artifact.
- Read all Markdown every time.
- Read only recent findings and call that complete.
- Admit a new context discipline immediately.

### Viable Paths

1. Create `homegrown/protocols/navigation_context_intake.md`.
2. Add a smaller section to `homegrown/protocols/artifact_materialization.md` linking Navigation selections to materialization.
3. Create a Navigation Observer report contract after context intake is dogfooded.
4. Later extract generic context loading if multiple protocols repeat the same intake pattern.

## SV5 - Constrained Understanding

The solution space is now narrow.

The next load-bearing development should be a **Navigation Context Intake protocol**:

```text
source request: "What should Homegrown do next?"
  -> classify Navigation run type
  -> load base context
  -> load recent context
  -> load source-authority context
  -> load targeted deep context only when triggered
  -> output current_state_brief.md or navigation_warmup.md
  -> run Navigation over that brief
  -> human selects
  -> materialization or branch
  -> outcome review after use
```

This relaxes the user's developer burden because it moves "remember what matters and tell the AI what to read" from the user's head into a repeatable protocol.

## Phase 5 - Conceptual Stabilization

## SV6 - Stabilized Model

The next load-bearing development is not Navigation alone and not generic session warm-up. It is the missing **input-boundary protocol for Navigation**.

Navigation is the cognitive operation that maps possible next moves. But for project-level Navigation to work independently, it needs a reliable warm-up layer that builds a current-state model from the repo. That warm-up layer should begin as a protocol because v1 can be expressed as source authority, read tiers, escalation triggers, output contract, and trace.

The protocol should probably live at:

```text
homegrown/protocols/navigation_context_intake.md
```

or, if the naming should emphasize session preparation:

```text
homegrown/protocols/navigation_warmup.md
```

The first name is more precise. The second name is easier to say. The finding should choose one, likely `navigation_context_intake.md`, with "warm-up" as a plain-language alias.

How this differs from SV1: SV1 framed the question as Navigation vs warm-up. SV6 resolves it as a stack:

```text
Navigation context intake
  -> Navigation map
  -> human selection
  -> branch or materialization
  -> outcome review
```

The practical next move is to materialize the protocol under `artifact_materialization.md`, then dogfood it by running Navigation on the current Homegrown state.

## Telemetry

- Perspective saturation: high. Technical, human, strategic, risk, resource, and definitional perspectives all converged.
- Ambiguity resolution ratio: 5/5 resolved.
- SV delta: strong. The model moved from "Navigation or warm-up?" to "Navigation requires a protocolized input boundary."
- Anchor diversity: high. Constraints, key insights, structural points, principles, and meaning-nodes were all used.
- Overall: PROCEED.
