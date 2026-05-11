# Sensemaking: Resume Protocol Usecase

## User Input

`devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/_branch.md`

## SV1 - Baseline Understanding

The initial question looks like a redundancy check: Homegrown has a standalone `homegrown/protocols/resume.md`, but MVL and MVL+ already contain resume branches. The likely answer is that the standalone Resume protocol is currently unused, while the operational need for resume is already covered inline.

That baseline is incomplete because "resume" is being used for more than one mechanism.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- MVL and MVL+ already implement folder-path resume inline.
- MVL+ must run continuously through E -> S -> D -> I -> C without waiting between disciplines.
- `homegrown/protocols/resume.md` is not loaded by MVL or MVL+.
- The standalone Resume protocol expects standardized `**Overall: PROCEED**`, `**Overall: FLAG**`, or `**Overall: RE-RUN**` verdicts.
- Current source search shows the exact verdict pattern is only clearly established in Innovation.
- Meta-loop has a different resume mechanism around `_meta_state.md`.

### Key Insights

- Basic resume and telemetry-aware resume are different capabilities.
- The current user workflow only needs basic resume most of the time.
- The standalone file's unique value is not continuation itself; it is quality-aware routing when resuming partial work.
- The standalone file is premature if discipline outputs cannot reliably provide the verdicts it reads.
- The earlier "delete Resume" recommendation was right about orphan risk, but too compressed if interpreted as "Resume has no future use."

### Structural Points

- **Inline MVL/MVL+ resume:** reads `_state.md`, `_branch.md`, file existence, and continues from the first incomplete discipline.
- **Standalone Resume:** reads completed discipline outputs, interprets telemetry verdicts, and stops on FLAG/RE-RUN.
- **Meta-loop resume:** reads `_meta_state.md` and continues the traversal from `## Next Action`.
- These are related but not interchangeable.

### Foundational Principles

- Protocols route; disciplines judge.
- An extracted protocol only earns its place if the runtime loads it or it functions as an explicit future spec with clear status.
- Orphaned active-looking files are dangerous because they create two sources of truth.
- Current autonomy level remains human-guided; auto-decisions on FLAG/RE-RUN are not yet appropriate.

### Meaning-Nodes

- Resume as persistence.
- Resume as quality gate.
- Resume as autonomy infrastructure.
- Inline implementation versus named protocol.
- Orphaned extraction.
- Telemetry standardization.

## SV2 - Anchor-Informed Understanding

The real question is not "does Resume have a use case?" It does. The real question is which layer of Resume is being discussed.

At the current stage, Homegrown's main resume use case is cross-session continuation of incomplete MVL/MVL+ inquiries. That is already implemented inline. The standalone protocol's distinctive use case is more advanced: when restarting a partially completed inquiry, the system should not blindly continue just because files exist; it should inspect each completed discipline's own verdict and decide whether continuation is allowed, flagged, or should rerun.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The inline branch is mechanically sufficient for simple continuation. It answers: "Where did the pipeline stop?" It does not answer: "Should the existing output be trusted?"

The standalone Resume protocol answers the second question, but it depends on missing infrastructure: consistent verdict telemetry across all disciplines and a runner willing to route on those verdicts.

New anchor: standalone Resume is a quality-aware resume protocol, not merely a continuation protocol.

### Human / User Perspective

The user does not currently feel a missing capability because manual MVL/MVL+ usage is interruption-tolerant enough: pass the folder path, continue from missing files. The pain will appear when the user resumes a folder containing weak, partial, or self-flagged outputs and the runner continues without noticing.

New anchor: Resume becomes valuable when "file exists" is too weak a trust signal.

### Strategic / Long-Term Perspective

For a future meta-loop, branch evolution, or autonomous self-maintenance workflow, resume cannot only mean "continue from the next file." It must preserve run integrity across interruptions, agent handoffs, and runtime branches. A future system needs to know not only what ran, but what was valid enough to build on.

New anchor: telemetry-aware Resume is autonomy infrastructure, but not Level 0 necessity.

### Risk / Failure Perspective

Keeping `resume.md` as an active-looking protocol while MVL/MVL+ ignore it is a drift risk. Wiring it in now is also risky because it can reintroduce waits into the no-wait MVL/MVL+ pipeline and because most disciplines do not emit the verdicts it needs.

New anchor: current worst state is an unmarked orphan, not deletion or explicit future status.

### Resource / Feasibility Perspective

Basic inline resume has near-zero maintenance cost because it is already in the runners. Real telemetry-aware Resume requires:

- standard verdict lines across E/S/D/I/C;
- runner integration that actually loads the protocol;
- state update semantics;
- policy for FLAG/RE-RUN in human-guided versus autonomous modes;
- tests or dry-run examples.

New anchor: the missing prerequisite is not the file; it is the telemetry contract.

### Definitional / Consistency Perspective

If Resume means "a generic operational concern," it is alive. If Resume means "the current standalone file is operational," it is not. If Resume means "MVL lacks any resume alternative," that is false.

New anchor: the name `Resume` should not be allowed to hide implementation status.

## SV3 - Multi-Perspective Understanding

The stabilized distinction is:

```text
Resume concept = alive and important.
Inline runner resume = current working implementation for basic continuation.
Standalone resume.md = dormant/premature telemetry-aware protocol.
```

This reframes the question away from simple deletion versus use. The more precise decision is whether Homegrown should keep the standalone file as a future spec, archive it as premature, or complete the missing telemetry standardization and wire it in for real.

## Phase 3 - Ambiguity Collapse

### Ambiguity: What is the main use case of Resume?

**Strongest counter-interpretation:**
Resume's main use case is general cross-session continuation, and therefore the standalone file is redundant because MVL/MVL+ already do it.

**Why the counter-interpretation fails (structural grounds):**
It correctly describes the current inline branch, but it does not cover the unique behavior in `resume.md`: reading discipline verdicts and stopping on non-PROCEED. That is a different mechanism with a different purpose.

**Confidence:** HIGH.

**Resolution:**
Today, Resume's main use case is cross-session continuation. The standalone file's main unique use case is quality-aware continuation.

**What is now fixed?**
Use "basic resume" for file/state continuation and "telemetry-aware resume" for verdict-gated continuation.

**What is no longer allowed?**
Do not claim the standalone protocol is merely identical to inline resume.

**What now depends on this choice?**
Any decision to keep/delete/wire `resume.md` must specify which resume layer is being evaluated.

**What changed in the conceptual model?**
Resume is now a layered capability, not a single feature.

### Ambiguity: Does MVL already have a Resume alternative inside?

**Strongest counter-interpretation:**
No, because MVL does not load `homegrown/protocols/resume.md`.

**Why the counter-interpretation fails (structural grounds):**
MVL and MVL+ both have explicit `If RESUME (input is a folder path)` sections and cross-session resume instructions. They implement basic resume directly.

**Confidence:** HIGH.

**Resolution:**
Yes. MVL/MVL+ already have an inline resume alternative for basic continuation.

**What is now fixed?**
The current runtime does not require `resume.md` to resume incomplete inquiries.

**What is no longer allowed?**
Do not present `resume.md` as the only resume mechanism.

**What now depends on this choice?**
Real wire-up must justify replacing or extending the inline branch, not filling a blank.

**What changed in the conceptual model?**
`resume.md` is not missing runtime capability; it is extra future routing logic.

### Ambiguity: Is the standalone Resume protocol useful now?

**Strongest counter-interpretation:**
Yes, because it contains better logic than inline resume and could immediately improve safety.

**Why the counter-interpretation fails (structural grounds):**
The better logic depends on standardized verdict lines across disciplines. Without those verdicts, it mostly falls back to treating old outputs as PROCEED, which collapses back to basic resume while adding complexity.

**Confidence:** HIGH.

**Resolution:**
It is not operationally useful now as an active runtime dependency. It is useful as a future design sketch only if clearly marked as dormant or archived.

**What is now fixed?**
Do not wire it into MVL/MVL+ immediately.

**What is no longer allowed?**
No cosmetic pointer from MVL/MVL+ to `resume.md` unless the runner actually loads and obeys it.

**What now depends on this choice?**
Telemetry standardization becomes the prerequisite for future Resume work.

**What changed in the conceptual model?**
The bottleneck moves from "we need a Resume protocol" to "we need verdict telemetry before Resume can matter."

### Ambiguity: What effect would using it have?

**Strongest counter-interpretation:**
It would simply make resume more modular and cleaner.

**Why the counter-interpretation fails (structural grounds):**
A merely modular extraction does not change behavior. The behavior-changing effect is that Resume can stop the runner when a completed discipline self-reports FLAG/RE-RUN. Without that, the extraction is documentation churn.

**Confidence:** HIGH.

**Resolution:**
If fully usable, it would turn resume from "continue from the first missing file" into "verify completed outputs are acceptable before continuing."

**What is now fixed?**
The value proposition is quality-gated continuation.

**What is no longer allowed?**
Do not sell real wire-up as valuable unless it routes on evidence, not just file existence.

**What now depends on this choice?**
Future implementation must include discipline verdicts and route policies.

**What changed in the conceptual model?**
Resume becomes a trust boundary between partial past work and future continuation.

## SV4 - Clarified Understanding

Resume's current practical use case is already solved inline: recover from interruption, context loss, new session, or handoff by reading `_state.md` and continuing from the first missing discipline output.

The standalone protocol is not redundant in theory. It has unique telemetry-aware routing logic. But it is premature in practice because the project lacks the standardized verdicts and runner integration that would make that logic real.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- MVL/MVL+ already support basic resume.
- `resume.md` is not currently invoked.
- `resume.md` has unique quality-gate logic.
- That logic depends on standardized discipline verdicts.
- Wiring it cosmetically is not a valid solution.

### Eliminated Options

- Treat standalone Resume as currently operational.
- Claim MVL/MVL+ cannot resume without it.
- Wire it in now without standardizing verdict telemetry.
- Leave it as an active-looking orphan indefinitely.

### Viable Paths

1. Keep using inline MVL/MVL+ resume for current human-guided workflows.
2. Archive or delete `homegrown/protocols/resume.md` as premature if keeping the system lean is the priority.
3. Keep it only if explicitly marked as dormant/future and tied to prerequisites.
4. Later, standardize E/S/D/I/C telemetry and then re-extract or wire a real telemetry-aware Resume.
5. For meta-loop, treat resume separately as `_meta_state.md` traversal resume, not as a direct reuse of inquiry-level `resume.md`.

## SV5 - Constrained Understanding

The choice space is now limited:

- **Current answer:** use MVL/MVL+ inline resume.
- **Current file disposition:** do not wire standalone Resume now; either archive/delete it or mark it dormant.
- **Future path:** build telemetry standardization first, then revisit real Resume integration.
- **Autonomy path:** meta-loop will need resume semantics, but its first resume mechanism is `_meta_state.md`, not discipline verdict routing.

## Phase 5 - Conceptual Stabilization

Resume should be understood as a layered capability:

1. **Level 0 - Basic manual continuation**
   - Input: inquiry folder path.
   - Mechanism: read `_state.md`, `_branch.md`, and missing files.
   - Current status: implemented inline in MVL/MVL+.
   - Effect: recovers from interruption.

2. **Level 1 - Quality-aware continuation**
   - Input: inquiry folder path with completed discipline outputs.
   - Mechanism: read standardized discipline verdicts and stop on FLAG/RE-RUN.
   - Current status: specified in `resume.md`, but not operational.
   - Effect: prevents building on weak partial work.

3. **Level 2 - Autonomous traversal resume**
   - Input: meta-loop state and inquiry graph.
   - Mechanism: resume traversal, compare branches, select or revisit frontiers.
   - Current status: early meta-loop spec via `_meta_state.md`.
   - Effect: supports long-running multi-step inquiry systems.

## SV6 - Stabilized Model

Resume is not useless, but the currently extracted `homegrown/protocols/resume.md` is ahead of the system's runtime maturity.

MVL and MVL+ already contain the resume capability Homegrown currently needs: basic cross-session continuation. The standalone protocol's unique logic is telemetry-aware continuation: it can inspect completed outputs, detect FLAG/RE-RUN, and avoid blindly continuing from bad intermediate artifacts. That will be useful for long-running, multi-agent, meta-loop, or autonomous workflows.

The immediate recommendation is: do not wire `resume.md` into MVL/MVL+ now. Continue using inline resume. Treat `resume.md` as either a dormant future spec with explicit prerequisites or archive/delete it to avoid two-source-of-truth drift. The next real enabling step is not "use Resume"; it is standardize verdict telemetry across the disciplines so a future Resume protocol has real evidence to route on.

Difference from SV1: SV1 saw a likely redundancy. SV6 distinguishes redundancy at the basic-continuation layer from unique future value at the quality-gated continuation layer.
