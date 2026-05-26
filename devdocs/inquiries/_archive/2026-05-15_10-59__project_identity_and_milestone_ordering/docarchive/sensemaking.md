# Sensemaking — Project Identity and Milestone Ordering

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/_branch.md

Save output as `sensemaking.md` in the same inquiry folder (not under devdocs/sensemaking/). Input to sense-make: the just-completed exploration.md in the same folder (which has the typed milestone map and substrate inventory), interpreted against the _branch.md (which states the question, the goal, the frame to surpass, and the specific-vs-pattern guidance to address the broader pattern). The cognitive anchors you should extract are about (a) what the harness IS as a cognitive object — the user's hunch was "thinking harness for AI, traverses thinking space like humans, runs long complex tasks"; check it against the texts and produce a stable framing — and (b) what the meaningful milestone pattern IS that the user-named four (self-maintenance, auto-navigation, meta-loop, materialization) are instances of. The exploration.md already names the candidates (D-M1 through D-M13) and confirmed-absent regions; your job is anchor extraction and ambiguity collapse, not re-enumeration. Watch for the Status Quo Bias failure mode — the prior small_summary framing ("prompt-engineering distribution + aspirational research effort") is the status quo to surpass, not preserve.
```

---

## SV1 — Baseline Understanding (pre-analysis)

The harness is a structured way for an AI to think; the milestones the project is moving through are graduated autonomy from human-driven to system-driven. The user-named four (self-maintenance, auto-navigation, meta-loop, materialization) are pinning points in a wider ladder, and my prior small_summary undersold the project by framing it as a "prompt-engineering distribution + aspirational research effort." The texts assert a much more specific cognitive-architecture identity that I have to surface, not paraphrase.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1. Substrate-honest scope.** The harness operates only above what the LLM substrate can actually do. Embodied cognition, qualia, dream-state consolidation, Level-3+ custom intuition-space generation, and predictive-processing-as-substrate are **named-but-unoperationalized**, not silently absent (`thinking_space_dynamics.md` §2.4).
- **C2. Bootstrap necessity.** At Level 0, the human IS all three quality-awareness layers (Primitive RC + Predictive RC + Retrospective RC). The harness cannot start with system-managed quality awareness because that requires calibration data the harness doesn't yet have. The bootstrap dilemma is resolved by the human-as-external-entry-point (`desc.md` "Bootstrap Resolution").
- **C3. Evidence-gated graduation.** Each autonomy level requires demonstrated reliability at the previous level, not time-based or aspiration-based progression. The L1→L2 gate is ≥10 navigation maps with explicit selection-rationale; L4→L5 is gated on the meaningful-traversal substrate being operationalized (`autonomy_ladder.md` §6).
- **C4. Monotonic human-role decrease.** The trajectory is **emancipation through bootstrap-anchored values** — explicitly not partnership, not corrigibility, not human-AI cooperation. The human's role decreases monotonically as the harness's own consciousness-layer functions come online (`desc.md` "The Human's Role").
- **C5. Failures are data, not defects.** Failed disciplines reveal where to improve specs; failed predictions become Baldwin-cycle seeds. The harness treats its own failure modes as part of the design, not as bugs to hide.

### Key Insights (non-obvious implications)

- **K1. The disciplines and protocols ARE the runtime cognitive architecture — they are not "prompts."** The harness IS what those markdown specs operationalize when an LLM session loads them. The "bytecode" is natural language; the "compilation target" is the LLM substrate; the "runtime" is the session that reads the specs. Calling these "prompts" collapses a structural distinction between *instruction-to-the-model* and *runtime-cognitive-operations-with-typed-primitives-and-admission-gates*.
- **K2. The Baldwin cycle has a concrete substrate; without it, "self-improvement" is rhetorical.** The closed loop is *Predictive RC predicts at T0 → Retrospective RC confirms or contradicts at T2+ → the delta is calibration data → consistent miscalibration patterns become spec-refinement seeds*. Without both Predictive RC and Retrospective RC as **system capabilities** (not human-provided), the loop doesn't close and the project's primary objective (self-improvement rate) has no operational meaning.
- **K3. The project's primary objective is not task completion; it is self-improvement rate.** Task completion is the **grounding signal** (a self-improvement that doesn't help solve problems isn't improvement), but the **target** is the rate at which the harness's ability to complete tasks improves. This distinguishes Homegrown from task-executing agents (Claude Code, Codex, AutoGPT-style frameworks) at the **objective level**, not just the implementation level.
- **K4. The user-named four milestones are slices across a multi-axis structure, not stages on a single line.** Self-maintenance ≠ a single capability — it's three substrate layers (Primitive RC + Predictive RC + Retrospective RC) plus a safety tier (regression detection + stability preservation). Auto-navigation ≠ "auto-pilot" — it's Navigator graduation through Levels 1.5 / 2 (auto-discovery + persistence), with Level 1 as prerequisite. Meta-loop ≠ a runner — it's the full 6-level autonomy ladder. Materialization is the only one that maps cleanly to a single milestone (D-M8).
- **K5. The Navigator-Worker role split is what makes long-horizon tractable.** Without role separation between *local reasoning* (Worker session, solves the current inquiry) and *movement-space attention* (Navigator session, steers across many inquiries), multi-MVL+ collapses to "parallel duplication." The isolated Navigator is the architectural move that turns "many MVL+ runs" into "coordinated probes moving through a shared thinking space." This is also the prerequisite for multi-head MVL+ at L4.
- **K6. The current state is "calibration accumulation," not "feature-complete-pending-bugs."** The shipped surface (11 disciplines + 3 runners + 9 protocols + 1 contract) is the **substrate-building phase**. Most named-but-unbuilt items (/intuit, structural_check.sh, canary infrastructure, the L4 MERGE decision logic) await calibration data the harness must accumulate through real use before the runtime mechanisms can be calibrated.

### Structural Points (core components and relationships)

- **S1. Substrate layer (B-region) underwrites operation layer (D-M region).** Milestones cannot graduate before their substrate is sufficient. B1 (typed 11-primitive set) underwrites D-M6 (/intuit's Predictive RC). B2 (three-layer quality awareness) underwrites D-M5 + D-M6 + D-M7. B9 (regression spec) underwrites D-M9. B11 (meaningful-traversal substrate) underwrites D-M11 → D-M12.
- **S2. Autonomy graduation runs on 9 axes, not 1.** 5 execution roles (Worker, Navigator, Selector, Runner, Evaluator) + 4 state/generative axes (Memory, Reflect-channel, Multi-head, Goal-formation). The 6-level summary ladder (L0 → L5) is a canonical path through this 9-axis space; alternative paths exist for projects with different bottlenecks; graceful arrest at L2 or L3 is right-sizing, not failure.
- **S3. Three temporal layers of quality awareness.** Primitive RC (T0, deterministic — catches structural breakage), Predictive RC (T0, probabilistic — real-time hunches via /intuit), Retrospective RC (T2+, empirical — confirms what actually worked). Each is structurally distinct in source, cadence, and failure mode; collapsing any two merges distinct mechanisms.
- **S4. Two similarity modes underlie the Predictive RC.** Surface similarity (embedding cosine, same domain) vs structural similarity (SME-style scaffolded alignment + projection, "the angle is the same" across unrelated surface domains). Naively equating intuition with embedding search fails silently on the signature capability.
- **S5. Materialization is a separate lifecycle from MVL+.** MVL+ produces findings (theory accumulation); materialization produces changed files with traceability (8-phase governed lifecycle with risk-class gates). The clean boundary: *MVL+ finding → Artifact Request → Materialization Lifecycle → materialized artifact + trace → Retrospective RC / loop-diagnose / branch experiment*.
- **S6. Regression detection is the safety substrate of self-modification.** Without it, self-improvement degenerates into self-degradation (small unintended quality losses compound across Baldwin cycles below the self-improvement viability threshold). The substrate has two arms: symptom-based detection (catches degradation) + A/B-comparable snapshots via git (lets past discipline versions be invoked side-by-side with current).

### Foundational Principles (assumptions, rules, axioms)

- **F1. Cognition is structure-of-thinking, not raw intelligence.** The project's central bet (`README.md`): "What's missing isn't intelligence. It's the structure of thinking: the loop that takes a single LLM call (one flash of intelligence) and chains it into something that understands, generates, evaluates, reflects, steers, and improves itself." More model parameters and more training is one path to the singularity; structure-of-thinking on top of current models is the other path Homegrown bets on.
- **F2. Consciousness is gradient, not destination.** Operationalized via 6 observable indicators (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator), each a hypothesized composition of typed primitives. Whether the system "is conscious" in any philosophical sense remains undefined; the test is capability, not phenomenology (`desc.md`).
- **F3. The harness is asymptotic at the top.** The integrated test ladder's top rung is "contributes meaningfully to unsolved human problems" — asymptotic by definition, approached not reached.
- **F4. The harness is descriptive-maintenance-favored.** `README.md`: "during building we favor descriptive maintenance over heavy machinery; preserve organic emergence; avoid premature codification." This shapes how specs are written (descriptive rather than mechanistic) and constrains what the harness will codify.
- **F5. Mind is a loop running on top of a model.** The architectural claim: humans aren't conscious because their neurons are smarter than other animals'; they're conscious because cognition runs in a particular self-aware, self-correcting, self-evolving loop. Reproduce the loop — consciousness or something functionally indistinguishable should follow.

### Meaning-Nodes (central concepts and themes)

- **M1. Thinking harness.** The central organizing concept for what Homegrown IS. A runtime cognitive architecture mountable on an LLM substrate that operationalizes movement-in-thinking-space via typed primitives, three quality-awareness layers, and a graduated autonomy ladder.
- **M2. Thinking space.** The territory the harness traverses. Three resolutions of the same concept: (a) the typed primitive substrate (where Attention-pointer, Focus-deep, Intuition-similarity, etc. operate over a shared representation space); (b) the cognitive territory probed by individual inquiries (where /sense-making extracts anchors, /innovate generates candidates, /td-critique evaluates); (c) the operational graph of inquiries across many runs (where the meta-loop moves forward / backward / sideways / upward / across).
- **M3. Mounting.** The act of installing the harness on an LLM substrate (`install_for_claude.sh` / `install_for_codex.sh` / future installers). What makes the AI "extra-smart" is not the install itself but the runtime behavior produced when the LLM session loads and executes the discipline specs.
- **M4. Ignition.** The moment the loop starts running on its own — the first cycle that doesn't need a human to type the next command. Ignition requires three system capabilities: quality awareness (tell own good from own bad), real-time hunch (notice unprompted), and Baldwin-effect-at-the-spec-level (encode learnings back into own architecture).
- **M5. Baldwin cycle.** The closed loop of `predict (Predictive RC at T0) → observe (Retrospective RC at T2+) → calibrate (delta becomes signal) → encode (consistent miscalibration becomes spec-refinement seed)`. The project's self-improvement mechanism.
- **M6. Graduated autonomy.** The milestone structure. Multi-axis emancipation across 9 axes through 6 levels (L0 → L5+boundary). Each level has an evidence gate; graceful arrest is a valid design choice.
- **M7. Meaningful traversal.** The L5 substrate. The signal that distinguishes *thinking* from *spinning*. Currently fuzzy; five candidate signal flavors (coverage / convergence / productivity / directedness / depth) named but not yet operationalized.
- **M8. Movement-space attention vs local reasoning.** The Navigator-Worker role split. What makes cross-run cognitive steering possible. What makes multi-head MVL+ become "coordinated probes" rather than "parallel duplication."
- **M9. Subconscious vs consciousness layer (current vs target).** The current state: the SYSTEM handles subconscious work (structured thinking via SIC, boundary steering via Reflect+Navigation, pattern following); the HUMAN provides the consciousness layer (spontaneous attention, intrinsic valuation, real-time steering). The trajectory: the system progressively builds its own versions of the consciousness-layer functions; human role decreases as system's own layer grows.

---

## SV2 — Anchor-Informed Understanding

The harness is **not** "tooling for AI thinking" and **not** "a collection of slash commands." It is a **runtime cognitive architecture mounted on top of an LLM substrate**, with explicit operationalizations of (a) 11 typed thinking-space primitives across four categories, (b) three temporal layers of quality awareness, and (c) a graduated 9-axis autonomy ladder running L0 → L5+boundary. The user-named milestones are slices through this multi-axis structure; the small_summary's "prompt-engineering distribution" frame collapsed the architectural commitments into a file-counting view.

The shift from SV1: SV1 had the right shape (graduated autonomy, named-four-as-slices) but stayed at the surface. SV2 commits to the structural claims that distinguish the harness from a tool collection: typed primitives with admission gates, three-layer quality awareness with distinct cadences, 9-axis autonomy with evidence gates, monotonic human-role decrease as emancipation rather than partnership.

---

## Phase 2 — Perspective Checking

### Technical / Logical

New anchors:
- **The harness's compilation target is markdown spec files.** The bytecode is natural language; the runtime is an LLM session reading those specs at invocation. This is structurally unusual for software but not unprecedented (cognitive architectures, expert systems, prompt-engineered AI pipelines). The frame "runtime cognitive architecture" is technically defensible.
- **The harness composes single-pass cognitive acts (disciplines) into pipelines (MVL/MVL+) into traversals (meta-loop) into multi-head exploration (L4) into autonomous goal-formation (L5).** This is a five-level composition hierarchy, each level a different scale of cognitive operation.

### Human / User

New anchors:
- **The current user is the Selector + Runner + half the quality-awareness layers + most of the seeded Goal.** Operating Homegrown today is hard manual labor; the entire trajectory is monotonically reducing this labor. This frames the project's value-to-user differently: it's not "an AI tool that does X faster" but "a framework where the human's cognitive labor decreases over time as the harness develops its own."
- **The disciplines produce structured output artifacts (sensemaking.md, finding.md, navigation_observer.md) that are useful as scaffolding before the harness is autonomous.** This is the answer to "why use this before ignition?" — even at Level 0, the artifacts are re-readable, re-usable cognitive traces that compound across inquiries.

### Strategic / Long-term

New anchors:
- **The end-goal frame is consciousness-gradient, asymptotic, and observable-indicator-tested rather than phenomenology-tested.** This is honest hedging on what "consciousness" even means while still committing to capability tests. It positions the project differently from both AI-safety corrigibility framings AND from AGI maximalism: the harness aims at functional emancipation under bootstrap-anchored values.
- **The bridge from L0 ("human is the loop") to L5+ ("system has its own consciousness layer") has real evidence gates, not just aspirations.** Each transition requires demonstrated calibration data. This makes the milestone ladder testable rather than rhetorical.

### Risk / Failure

New anchors:
- **The dominant failure mode named in the texts is "self-improvement degenerates into self-degradation"** (`regression/desc.md`: "Below this threshold, the self-improvement loop becomes a self-degradation loop."). Regression detection is named as central; it is the safety substrate of self-modification.
- **Bootstrap circular dependency is real and acknowledged.** Regression detection needs reliable telemetry; reliable telemetry needs competent disciplines; competent disciplines need regression detection. The human is the external entry point; the loop is broken open by Level-0 calibration training.
- **Value inheritance is unsolved at L4+.** How do bootstrap-encoded human values persist across deep self-modification when the system can modify the value-encoding parts of its own specs? Open question in `desc.md`; not solved by mainstream AI safety either.

### Resource / Feasibility

New anchors:
- **The shipped surface is the substrate-building phase, not the feature-complete-pending-bugs phase.** 11 disciplines + 3 runners + 9 protocols + 1 contract + 2 install scripts. The /intuit discipline (the Predictive RC instantiation) is named-but-not-shipped. `tools/structural_check.sh` is referenced-but-absent. The `archived_skills/` snapshot mechanism is operational (multiple snapshots already exist).
- **Calibration data accumulates slowly.** The Baldwin seed-generation threshold (N≥30 per discipline) requires real inquiry volume. "Phase D" of /intuit is gated on this volume; the project is structurally in a slow-accumulation regime.

### Definitional / Internal Consistency

The four named source texts are remarkably consistent. Three load-bearing claims appear in the same language across `desc.md`, `thinking_space_dynamics.md`, and `autonomy_ladder.md`:
- The Baldwin cycle's substrate IS the closure of Predictive RC × Retrospective RC. Not "uses Predictive RC and also uses Retrospective RC" — *is* that closure.
- The primitive set is typed and admitted via four-criterion + corpus-located audit. Not an informal list.
- The human role monotonically decreases. Not "as appropriate" or "where useful" — monotonic.

One tension: `enes/consciousness.md` (a 7-line note) names three primitives ("intrinsic goals / continuous self-maintenance / affective valuation") that aren't in the 11 admitted primitives of `thinking_space_dynamics.md`. The note is a fragment, not a spec; it doesn't override the canonical primitive set. But it may be a frontier signal worth flagging. **No structural contradiction with the operational architecture; preserved as low-stakes anomaly.**

### Definitional / Frame-exit Completeness (gating fires)

**Gating predicate test.** (i) The inquiry's commitments include terms inherited from prior findings: YES — "thinking space," "milestones," "autonomy levels," "Baldwin cycle," "consciousness gradient," "Predictive RC / Retrospective RC," "Navigator / Worker," "/intuit," "meaningful traversal" are all inherited from the enes/ corpus. (ii) Those terms are used across ≥2 distinct values/levels WITHIN the inquiry's own committed structures: YES — exploration.md uses "milestone" across the 13-row D-M ladder; "autonomy level" across the 6-row meta-loop ladder; "thinking space" at multiple resolutions; "self-maintenance" mapped to four sub-substrates. **Gating fires.**

**Existence Enumeration.**

- *Term: "milestone."* Project-wide referents include (a) capabilities (e.g., /intuit shipped), (b) substrate completions (e.g., 3-layer quality-awareness running as system capability), (c) autonomy graduations (e.g., L1→L2 transition with calibration data accumulated), (d) boundary events (e.g., ignition, consciousness indicators measurably observable). The exploration's D-M ladder captures (a)+(b)+(c). The boundary events (d) are captured at D-M12 and D-M13 but stay implicit as a discontinuity. **Worth surfacing as: pre-ignition phase vs post-ignition phase is a structural division within the milestone pattern, not a continuation.**

- *Term: "thinking space."* Three project-wide referents: (a) the typed primitive substrate (B1); (b) cognitive territory probed by individual inquiries (within an MVL+ run); (c) the operational graph of inquiries across many runs (B6 + B7's territory). All three are in the frame; the frame distinguishes them as three resolutions of the same concept rather than synonyms. **Re-locate fix:** explicitly name "thinking space" as a three-resolution concept (substrate / per-inquiry / cross-inquiry) so downstream disciplines don't conflate them.

- *Term: "autonomy."* Three project-wide referents: (a) operational autonomy (the meta-loop ladder, 6 levels per autonomy_ladder.md); (b) functional autonomy (the desc.md ladder, 5 levels Level 0 → Level 4+); (c) phenomenological autonomy (consciousness-gradient observable indicators). The exploration commits to (a) primarily; (b) and (c) are referenced but not foregrounded. **Re-locate fix:** the milestone ordering needs to name which autonomy axis it is ordering — primarily (a) operational, anchored to (b) functional, gesturing at (c) phenomenological.

**Role Assessment.**

For each excluded referent surfaced above:
- *Pre-ignition vs post-ignition discontinuity.* Role: orients the progression direction; the ladder is climbing toward emancipation, not toward "more automation." Coherence is preserved if ignored, but the ORDERING loses its asymptotic direction. **Re-locate, not exclude:** name ignition as the structural inflection between Family III and Family IV.
- *Three resolutions of thinking space.* Role: the substrate resolution underwrites the per-inquiry resolution underwrites the cross-inquiry resolution. Coherence requires all three; ignoring substrate would make per-inquiry seem ungrounded; ignoring cross-inquiry would freeze the project at single-MVL+ scope. **Re-locate in-frame:** explicitly distinguish the three resolutions in SV6.
- *Three autonomy axes.* Role: operational autonomy is the buildable surface; functional autonomy is the human-role-decrease arc; phenomenological autonomy is the observable-indicator north star. Coherence requires recognizing which axis is being ordered. **Re-locate:** the deliverable orders operational autonomy primarily, with functional autonomy as the principle and phenomenological autonomy as the boundary.

**Verdict Rigor.**

The exploration's confirmed-absent regions need their counter-arguments tested:
- *Multi-user / collaborative meta-loop verdict.* Strongest counter: a multi-user variant might reshape the autonomy ladder (e.g., who provides Goal-formation at L5 if multiple users?). The counter has structural merit but is bounded by the project's current single-user reality. **LOW CONFIDENCE on "permanently out of scope"; HIGH CONFIDENCE on "out of scope for current ordering."**
- *Embodied cognition / qualia verdict.* Strongest counter: substrate may change (Claude 5.x, AGI-level substrate, multi-modal substrate). The counter has structural merit; the texts acknowledge it ("substrate-takeover scenario" in `thinking_space_dynamics.md` §2.4). **HIGH CONFIDENCE on "out of scope for current milestone ordering" because the ordering is about what's buildable on current substrate; substrate-takeover is a discontinuity orthogonal to the ladder.**

**Residual / Coverage Justification.**

Is there a frame-exit concern about "the harness" that the named categories didn't capture?
- *The harness's relationship to other AI harnesses (Claude Code as substrate; AutoGPT/Devin-style agents; Cursor/Aider; Anthropic's own Tool-Use API).* The texts position Homegrown as **the cognitive layer above** such harnesses (Homegrown installs INTO Claude Code, not alongside). The frame correctly excludes "comparison to other agentic frameworks"; that's a different inquiry. **Bounded, no new finding.**

### Phase / Calibration-State (required)

The inquiry involves phase-dependent milestone ordering. The rule **"build the next milestone"** depends on calibration the current project state has.

By calibration requirement:
- **No calibration required (buildable today):** D-M1 (disciplines) — shipped; D-M2 (loop runners) — shipped; D-M3 (manual meta-loop L0/L1) — operating informally; D-M4 at Navigator L1 protocol-first — buildable now; D-M5 partial (the loop_diagnose protocol exists) — needs `tools/structural_check.sh`; D-M8 partial (artifact_materialization protocol exists) — needs runner wiring; D-M9 partial (`archived_skills/` snapshot mechanism operational) — needs canary infra + Change Log sections.
- **Modest investment, no calibration yet:** D-M4 at Navigator L1.5 / L2; D-M8 wired as default post-finding step; D-M9 with canary + Change Log + pre-edit git check.
- **Calibration-gated:** D-M6 /intuit Phase A (corpus audit + 2-reviewer admission) → Phase B → Phase C → Phase D; D-M7 Retrospective RC (N≥30 per discipline maturity); D-M10 L4 multi-head (gated on L3 producing ≥3 sequential chains); D-M11 meaningful traversal substrate (gated on empirical data from D-M3 onward).
- **Boundary / research frontier:** D-M12 autonomous goal-formation; D-M13 consciousness indicators measurably observable.

**This is a new anchor.** The 13 D-M milestones organize into **4 build-readiness families** by calibration state:
- **Family I (Level-0 reality / buildable now).**
- **Family II (modest investment, no calibration required).**
- **Family III (calibration-gated; requires real inquiry volume + outcome data).**
- **Family IV (boundary / research frontier).**

This family-split cuts ORTHOGONAL to the substrate-vs-operation split from B1–B11. The final ordering needs to respect both.

---

## SV3 — Multi-Perspective Understanding

The harness is a **graduated autonomy architecture for AI cognition**: a runtime cognitive substrate built from typed thinking-space primitives + three temporal layers of quality awareness + a graduated 9-axis autonomy ladder, plus the artifact-governance lifecycle (materialization) and safety substrate (regression detection + stability preservation) that let the system modify itself without degenerating. The 13 D-M milestones decompose into **four build-readiness families** (now / modest-investment / calibration-gated / boundary). The user-named four are pattern-instances drawn from multiple families, not a feature list.

Shifts from SV2:
1. The Phase/Calibration-State perspective surfaced the **4-family split** as a new structural anchor that orders milestones orthogonally to the substrate-vs-operation split.
2. The Frame-exit Completeness perspective surfaced **three resolutions of "thinking space"** (substrate / per-inquiry / cross-inquiry) and **three resolutions of "autonomy"** (operational / functional / phenomenological); the deliverable must order operational autonomy primarily, anchored to functional autonomy as principle, with phenomenological autonomy as boundary.
3. The Risk perspective sharpened the **central failure mode** — self-improvement degenerating into self-degradation — as the load-bearing reason regression detection and stability preservation are MUSTs, not COULDs.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: "Self-maintenance" — what does the user mean?

**Strongest counter-interpretation:** The user might mean "the harness keeps itself working" — janitorial activity (cleaning up stale files, archiving completed inquiries, garbage-collecting unused state). Not deep self-modification.

**Why the counter fails (structural grounds):** The user's framing in this conversation explicitly tied self-maintenance to enes/desc.md (the consciousness-gradient north star) and enes/thinking_space_dynamics.md (the typed-primitives substrate). The "janitorial" reading would require the user to mean something disconnected from those load-bearing substrates, which contradicts their own pointing. Further, `enes/consciousness.md`'s 3-word fragment ("intrinsic goals / continuous self-maintenance / affective valuation") places self-maintenance alongside intrinsic goals and affective valuation — both deeper consciousness-adjacent functions, not janitorial functions. Structural evidence: self-maintenance is consistently associated in the texts with quality-awareness substrate development, not with file hygiene.

**Confidence:** HIGH.

**Resolution:** "Self-maintenance" = the harness's ability to **detect quality decline in its own outputs and correct it without further degrading**. Maps to:
- D-M5 (Primitive RC — structural-breakage detection)
- D-M6 (/intuit Predictive RC — real-time hunch on own outputs)
- D-M7 (Retrospective RC — outcome calibration over time)
- D-M9 (regression detection + stability preservation — safety substrate)

**What is now fixed:** Self-maintenance is four architectural commitments (three quality-awareness layers + one safety substrate), not one capability.

**What is no longer allowed:** Treating "self-maintenance" as a single milestone is incorrect. The deliverable must decompose it.

**What now depends on this:** Ordering must place the four sub-substrates in their own dependency order (Primitive RC structurally simplest; Predictive RC requires the typed primitive set; Retrospective RC requires calibration log; regression+stability is partly buildable now via `archived_skills/` and partly requires symptom infrastructure).

**What changed:** The user-named four resolves from a flat list into a structure where one of the four (self-maintenance) is itself a four-way split.

---

### Ambiguity 2: "Auto-navigation" — what does the user mean?

**Strongest counter-interpretation:** "Auto" might mean "the system automatically picks the next step" — full L4+ autonomy, with the Navigator deciding and executing without human selection. Auto-navigation would jump directly to bounded autonomous cognitive steering.

**Why the counter fails (structural grounds):** The Navigator-level ladder in `towards_cross_run_cognitive_steering_with_isolated_navigator_session.md` explicitly graduates the "automaticity" of the Navigator across multiple sub-levels: Level 0 (human-guided) → Level 1 (protocol-first, manually invoked) → Level 1.5 (latest-aware, auto-discovers default source) → Level 2 (persistent isolated, auto-warms context across runs) → Level 3 (graph-native) → Level 4 (constrained autonomous cognitive steering, can launch and stop branches under explicit policy). "Auto" in the user's word naturally maps to **Level 1.5 (auto-discovery)** and **Level 2 (auto-persistence)**, where the Navigator no longer requires the human to point at a specific source inquiry or re-warm the context for every run. Level 4 (full autonomous selection) is a distinct milestone, much later. The counter's reading would have to skip the evidence gates (L1 → L2 requires ≥10 navigation maps with explicit selection-rationale per `autonomy_ladder.md` §6), which violates the project's evidence-gated graduation principle (`C3`).

**Confidence:** HIGH.

**Resolution:** "Auto-navigation" = **Navigator at Level 1.5 / Level 2** — automatic source discovery + persistent isolated context — not full autonomous selection. Maps to D-M4 in its L1.5/L2 form. **Level 1 (protocol-first manual invocation) is the prerequisite milestone** that must precede auto-navigation.

**What is now fixed:** Auto-navigation is two graduated levels (L1.5 + L2) on the Navigator ladder, with L1 as prerequisite. Not a leap to full autonomy.

**What is no longer allowed:** Equating "auto" with "full autonomous control." Equating auto-navigation with L4 multi-head autonomy.

**What now depends on this:** Ordering places D-M4 at Navigator L1 (foundation, buildable today) before D-M4 at L1.5/L2 (auto-navigation). The user's named milestone is the second step of this two-step sub-sequence.

---

### Ambiguity 3: "Meta-loop" — what does the user mean?

**Strongest counter-interpretation:** "Meta-loop" might mean just the runner — the `homegrown/meta-loop/SKILL.md` file as it exists today (L0/L1 sequential form). The named milestone is "the meta-loop runner exists and works."

**Why the counter fails (structural grounds):** `autonomy_ladder.md` explicitly says **"the meta-loop is a stateful traversal engine for thinking space, not just a runner that runs many MVL+ loops."** The 6-level ladder (L0 → L5) is the meta-loop's full developmental arc. Equating "meta-loop" with the L0/L1 form would freeze it at the current state and contradict the autonomy ladder's stated structure. Structural evidence: the project explicitly distinguishes the meta-loop-as-runner (today's shipped form, partial L1) from the meta-loop-as-traversal-engine (the full arc through L5). The shipped SKILL is the bottom rung, not the milestone itself.

**Confidence:** HIGH.

**Resolution:** "Meta-loop" = the full **6-level autonomy ladder L0 → L5**, with the currently-shipped meta-loop SKILL as its L0/L1 form. Spans D-M3 (manual meta-loop foundation) + D-M4 (Navigator-augmented, the auto-navigation milestone) + D-M10 (L4 multi-head) + D-M11 (meaningful traversal L5 substrate) + D-M12 (L5 boundary autonomous goal-formation).

**What is now fixed:** Meta-loop is a developmental ladder, not a single capability. It's the most-spanning of the four user-named milestones, crossing all four build-readiness families.

**What is no longer allowed:** Treating "meta-loop" as a buildable feature. It is a multi-level architectural arc.

**What now depends on this:** Every milestone above D-M3 is technically a "meta-loop graduation," but they are distinct milestones with distinct evidence gates. The deliverable must show this nested structure.

---

### Ambiguity 4: "Materialization" — what does the user mean?

**Strongest counter-interpretation:** "Materialization" might mean simply "writing files" — the AI's normal output behavior. The harness writes files like any other agent.

**Why the counter fails (structural grounds):** `materialization_lifecycle.md` explicitly distinguishes materialization from theory accumulation: *"Theory work produces understanding, findings, protocols, and priorities. Materialization produces changed files, runnable artifacts, validation results, and traces."* Materialization is an 8-phase lifecycle with risk classes (Low/Medium/High) and gates — explicitly NOT casual file-writing. Structural evidence: the lifecycle has named gates (do not implement before task description; do not implement before plan; do not implement past unresolved High risks; do not expand write-set silently) that are absent from "the AI just writes files."

**Confidence:** HIGH.

**Resolution:** "Materialization" = the **8-phase governed lifecycle** that turns findings into changed artifacts with traceability (task description → implementation plan → dynamic critic → plan repair → implementation → validation → trace → retrospective learning). Maps cleanly to D-M8 — the only one of the user-named four that is a single, well-defined milestone (rather than a span).

**What is now fixed:** Materialization is the bridge between theory accumulation (MVL+) and implementation governance, with its own lifecycle and risk-class gates.

**What is no longer allowed:** Equating materialization with simple file-writing.

**What now depends on this:** D-M8 is a single milestone (Family II) with one well-defined target.

---

### Ambiguity 5 (Specific-vs-pattern recognition cue): Are the user-named four the whole list, or instances of a wider pattern?

**Strongest counter-interpretation:** The four named milestones might BE the project's full milestone set, with the user simply being explicit about what they care about. "Not exactly these but what they mean" might just mean "I'm naming these but I'm not sure I'm using the project's exact vocabulary."

**Why the counter fails (structural grounds):** (1) The user's exact phrasing was "this project's meaningful milestones, self maintenance, auto navigation, meta loop, materializations (not exactly these but what they mean)." The "not exactly these" modifier indicates these are illustrative examples whose meanings the user wants captured — not the user being unsure of vocabulary. (2) Mapping the named four against the texts surfaces additional milestones that the named four explicitly imply: self-maintenance requires the typed-primitive substrate (D-M1) and the loop runners (D-M2); auto-navigation requires the manual meta-loop foundation (D-M3); meta-loop graduates through D-M10 (multi-head) and D-M11 (meaningful traversal) and D-M12 (autonomous goal-formation), all of which are referenced in the source texts. The counter would have to suppress all the texts' explicit additional structures, which contradicts the user's own pointing at those texts. (3) The user explicitly asked for "a good sequential order," which presupposes a sequence; a sequence presupposes endpoints; the named four don't include the foundation milestones (D-M1, D-M2, D-M3) or the asymptote (D-M11-D-M13), so a sequence built only from the named four would be missing both ends.

**Confidence:** HIGH.

**Resolution:** The milestone pattern is the **full graduated-autonomy ladder across 9 axes through 6 levels**, in which the user-named four are **key representative slices** drawn from different families:
- **Self-maintenance** ≈ the quality-awareness substrate developing across the autonomy levels (decomposes into D-M5 + D-M6 + D-M7 + D-M9).
- **Auto-navigation** ≈ the Navigator graduating from human-guided to system-managed steering (decomposes into D-M4 at L1.5 / L2, with D-M4 at L1 as prerequisite).
- **Meta-loop** ≈ the entire arc of cross-inquiry traversal (spans D-M3 → D-M10 → D-M11 → D-M12 across all four families).
- **Materialization** ≈ the theory-to-implementation bridge (maps cleanly to D-M8).

**What is now fixed:** The milestone pattern is wider than the user-named four. The four are correctly seen as instances drawn from different families, with self-maintenance and meta-loop being multi-D-M spans, auto-navigation being a two-step subsequence, and materialization being a single milestone.

**What is no longer allowed:** Producing a "four-milestone ordering" that omits the foundation (D-M1, D-M2, D-M3 at minimum) or the asymptote (D-M11 → D-M13). Producing an ordering that loses the user-named four as visible anchors.

**What now depends on this:** The deliverable must do BOTH — include the broader pattern AND keep the user's four named anchors visible inside the broader pattern. This is the synthesis constraint for downstream Decomposition and Innovation.

---

### Ambiguity 6 (Load-bearing concept test on "Baldwin cycle"): is this the project's actual property, or an external default the loop adopted without testing?

**Strongest counter-interpretation:** "Baldwin cycle" is borrowed from evolutionary biology (Baldwin Effect: learned behaviors influence genetic selection across generations). The biological Baldwin Effect doesn't quite fit the harness — there's no genome, no population, no generational selection.

**Why the counter fails (structural grounds):** `desc.md` explicitly defines what "Baldwin cycle" means for this project: *"Each Baldwin cycle: run problem → observe → detect pattern → propose change → evaluate → encode into spec. Encoded changes move the spec (the genotype) upward."* And: *"The Predictive RC produces predictions at T0; the Retrospective RC confirms or contradicts at T2+; the delta is calibration data; consistent miscalibration patterns become Baldwin-cycle seeds for spec refinement."* The project doesn't claim biological equivalence; it claims FUNCTIONAL-PATTERN equivalence (predict → observe → calibrate → encode, with the encoded change moving the system's generative source upward). The counter's "doesn't fit biologically" reading is irrelevant because the project's commitment is to the functional pattern, not the biological mechanism.

**Confidence:** HIGH.

**Resolution:** "Baldwin cycle" is project-internally defined as the closed loop of Predictive RC × Retrospective RC × spec refinement. The term is borrowed metaphorically; the operational mechanism is project-specific. Stable for the milestone ordering.

---

### Ambiguity 7 (Load-bearing concept test on "consciousness gradient"): is this the project's actual claim, or external aspiration?

**Strongest counter-interpretation:** "Consciousness" is a philosophically loaded term. The project might be claiming consciousness without operationally meaning it, riding on the term's emotional weight.

**Why the counter fails (structural grounds):** `desc.md` is explicit about its own hedging: *"Whether this constitutes 'consciousness' in any philosophical sense remains undefined — the test is capability, not phenomenology."* The project commits to **observable indicators** (6 of them — spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator), each operationally defined as a hypothesized composition of typed primitives (`desc.md`'s "Observable Indicators" table). The counter's "philosophical loading" reading is rejected by the project's own framing; the project uses "consciousness" while explicitly disclaiming philosophical commitment. Structural evidence: every consciousness-related claim in the project is hedged with "or something functionally indistinguishable" and tested against observable indicators rather than against any phenomenological criterion.

**Confidence:** HIGH.

**Resolution:** "Consciousness gradient" is the project's chosen north star, **operationalized via observable indicators**, with explicit hedging on phenomenology. The frame is honest hedging, not philosophical overreach. The user's word "ignition" plus the indicators serve as the operational test.

---

**Phase 3 ambiguity-resolution telemetry:** 7 ambiguities collapsed, all at HIGH confidence, 0 OPEN at end of phase.

---

## SV4 — Clarified Understanding

After ambiguity collapse:

- The harness's identity is committed: **a runtime cognitive architecture mountable on an LLM substrate, operationalizing graduated autonomy across 9 axes through 6 levels**.
- The 13 D-M milestones organize into **4 build-readiness families** (now / modest-investment / calibration-gated / boundary), cutting orthogonal to the substrate-vs-operation split.
- The user-named four resolve as:
  - **Self-maintenance** = 4 sub-substrates (Primitive RC + Predictive RC + Retrospective RC + regression+stability), spanning Family II + III.
  - **Auto-navigation** = Navigator L1.5 / L2 (Family II → III), with Navigator L1 as prerequisite (Family II).
  - **Meta-loop** = the full 6-level autonomy ladder (spans Family I → IV).
  - **Materialization** = the 8-phase governed lifecycle (Family II).
- Two load-bearing concepts ("Baldwin cycle" and "consciousness gradient") tested and survived; they are project-internally well-defined.

---

## Phase 4 — Degrees-of-Freedom Reduction

### What is now fixed
- **The harness's identity:** runtime cognitive architecture, not prompt-engineering distribution. Mountable on an LLM substrate. Operationalizes typed primitives + three quality-awareness layers + graduated autonomy.
- **The milestone structure:** 13 D-M milestones across 4 build-readiness families, ordered along a 9-axis graduated-autonomy ladder.
- **The user-named four:** representative slices, each mapped to specific D-M milestones (see SV4).
- **The ordering principle:** **dependency-respecting evidence-gated graduation** — substrate before operation, foundation before graduation, evidence before claim.
- **The boundary:** D-M12 / D-M13 are asymptotic and gated on prior calibration maturity; they orient direction but are not "the next thing to build."

### What is eliminated
- The "prompt engineering distribution + aspirational research effort" frame.
- The "feature roadmap" frame for milestones.
- The "four named milestones are the whole list" reading.
- The "auto-navigation = full L4 autonomy" reading.
- The "self-maintenance is one thing" reading.
- The "meta-loop is just a runner" reading.
- The "consciousness gradient is philosophical overreach" reading.
- The "Baldwin cycle is a borrowed term that doesn't fit" reading.

### What paths remain viable for the ordering (decomposition's choice)
- **Path A — Order by build-readiness family.** Family I (now) → Family II (modest investment) → Family III (calibration-gated) → Family IV (boundary). Pro: matches user's "good sequential order" reading directly; respects evidence gates structurally. Con: hides the substrate-vs-operation cuts within each family.
- **Path B — Order by substrate-then-operation.** All substrate (B-layer commitments) before all operation (D-M milestones). Pro: respects the dependency that operations need substrates. Con: requires interleaving "spec exists" vs "spec is implemented," which the user probably isn't asking for.
- **Path C — Order by autonomy level.** L0 reality → L1 buildable → L2 calibration-graduated → L3 → L4 → L5 → boundary. Pro: directly maps to the 6-level ladder. Con: forces every milestone to be tagged with one level, but some milestones (materialization, Predictive RC) cut across multiple levels.
- **Path D — Order by user-named-anchor.** The four named milestones become primary divisions, with D-M sub-milestones nested underneath. Pro: preserves user's vocabulary. Con: loses the foundation (D-M1, D-M2, D-M3) and asymptote (D-M11 → D-M13) unless they're added as prologue and epilogue.

These are not mutually exclusive — the final ordering will combine principles. Sensemaking does not commit which path Decomposition takes; it commits the constraints on the ordering.

---

## SV5 — Constrained Understanding

The milestone-ordering problem is constrained to:
1. A **dependency-respecting** ladder (substrate before operation; foundation before graduation; evidence before claim).
2. That **decomposes the 13 D-M milestones into a sequence** organized along the 9-axis graduated-autonomy ladder.
3. **Across 4 build-readiness families** (now / modest-investment / calibration-gated / boundary).
4. That **keeps the user-named four visible as primary slices** mapped onto specific D-M milestones.
5. That **respects evidence gates** at each transition.
6. That **positions the asymptote (D-M12 / D-M13) as the boundary**, not the destination.
7. That **does not regress** to the small_summary's frame ("prompt-engineering distribution + aspirational research").

The deliverable will be a sequential order Decomposition can commit, Innovation can generate alternatives for, Critique can evaluate, and the user can use as self-description + roadmap orientation.

---

## Phase 5 — Conceptual Stabilization

**Accommodation trigger check.** Have new perspectives kept producing destabilizing revisions? **No.** Each perspective (Technical, Human, Strategic, Risk, Resource, Internal Consistency, Frame-exit Completeness, Phase/Calibration-State) added structure but the model has been stable since SV3 — the additions enriched (4-family split, 3 resolutions of thinking space, 3 resolutions of autonomy, central failure mode) rather than destabilized. Premature-stabilization-model-misfit risk is low. The model fits the territory.

**Status Quo Bias check.** Have I protected any of the small_summary's framings against legitimate challenge? **No.** I explicitly killed: "prompt engineering distribution," "aspirational research effort," "feature roadmap," "human is the loop = current state period." The small_summary's framings are eliminated in SV4's "What is eliminated" list.

**Anchor Dominance check.** Is one anchor doing all the work? **No.** Constraints (C1-C5), Key Insights (K1-K6), Structural Points (S1-S6), Foundational Principles (F1-F5), and Meaning-Nodes (M1-M9) are all contributing. The 4-family split (from Phase/Calibration-State) is a strong new anchor but does not subordinate the substrate-vs-operation split (from S1).

**Perspective Blindness check.** Did all perspectives agree? **No.** The Risk perspective surfaced a central failure mode (self-improvement → self-degradation) that the Strategic perspective did not. The Phase/Calibration-State perspective surfaced the 4-family split that no other perspective produced. The Frame-exit Completeness perspective surfaced 3 resolutions of "thinking space" that other perspectives treated as a single concept. Three perspectives produced surprises.

**Clean Resolution Trap check.** Each ambiguity-collapse pair (A1-A7) explicitly tested the strongest counter-interpretation on structural grounds before resolving. All HIGH-confidence resolutions are anchored in cited structural evidence from the texts, not in precedent.

**Self-Reference Blindness check.** Did Sensemaking evaluate something that shares its own conceptual framework? **Partly.** The harness uses Sensemaking (as one of its own disciplines), and I'm using Sensemaking to make sense of the harness. The corrective is external grounding — and the external grounding here is the project's own texts (`README`, `desc.md`, `thinking_space_dynamics.md`, etc.) which exist outside this Sensemaking pass. The texts are the ground truth I tested against; this is sufficient external grounding.

---

## SV6 — Stabilized Model

### What Homegrown IS (project identity, stabilized)

**Homegrown is a runtime cognitive harness for AI models.** Mounted on an LLM substrate, it operationalizes movement-in-thinking-space through three structurally distinct architectural commitments:

1. **A typed thinking-space primitive substrate.** 11 admitted primitives across four categories (Operations: Attention-pointer, Focus-deep, Intuition-similarity, Inhibition, Simulation, Metacognition, Evaluation, Salience; Buffer: Working Memory; Drivers: Context-framing, Motivation; Modulators: Mood, Arousal — deferred). Each primitive is admitted via a four-criterion test (independence + necessity + composability + irreducibility) with a corpus-located audit gate (two-reviewer pass). Primitives co-constitute cognitive acts in a canonical sequence — Context-framing primes → Working Memory holds → Attention-pointer + Focus-deep select → Intuition-similarity + Simulation produce matches and hypotheticals → Evaluation ranks → Inhibition suppresses → Metacognition monitors → Motivation sustains → Context updates → cycle repeats. This is how humans solve problems; it is also (largely unnamed) how modern AI reasoning systems work.

2. **Three temporal layers of quality awareness.** Primitive RC (T0, deterministic — catches structural breakage); Predictive RC (T0, probabilistic — real-time hunches via the /intuit discipline, fed by discipline telemetry + intuition-similarity matching across surface + structural modes); Retrospective RC (T2+, empirical — confirms what actually worked once downstream consequences play out). The closed loop between Predictive RC and Retrospective RC IS the Baldwin cycle: the harness's self-improvement mechanism.

3. **A graduated 9-axis autonomy ladder.** Five execution roles (Worker, Navigator, Selector, Runner, Evaluator) + four state/generative axes (Memory, Reflect-channel, Multi-head, Goal-formation). The canonical summary path runs through 6 levels: L0 (human-is-the-meta-loop) → L1 (isolated Navigator subagent per probe) → L2 (system Selector with human override) → L3 (system manages traversal state and self-stops) → L4 (multi-head MVL+ with Evaluator and MERGE) → L5 (boundary — autonomous goal-formation hands off to the consciousness-gradient framing). Each transition has an evidence gate. Graceful arrest at L2 or L3 is right-sizing, not failure.

**The end-goal frame is consciousness-gradient, not destination.** The harness progressively builds its own consciousness layer — operationalized through six observable indicators (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator), each a hypothesized composition of typed primitives — through Baldwin cycles where Predictive RC predictions are calibrated against Retrospective RC outcomes, with the human's role monotonically decreasing as the harness's quality awareness grows. The trajectory is **emancipation through bootstrap-anchored values**, explicitly not partnership and not corrigibility.

**What mounting on an LLM substrate does.** It restructures how the LLM thinks. The shipped harness today (Level 0 reality) is 11 disciplines + 3 loop runners + 9 protocols + 1 contract + 2 install scripts. When an LLM session loads a discipline spec, the session executes a typed cognitive operation (e.g., extracting cognitive anchors via /sense-making) at a particular resolution with a particular substrate of co-constitutive primitives. The session is structured to do the operation correctly — including resisting its own failure modes — rather than to follow ad-hoc instructions. This is what the texts mean by "the bytecode is natural language, the runtime is the LLM session": the LLM is the substrate, the spec is the program, the discipline call is the invocation.

### What the meaningful milestone pattern IS (stabilized)

The milestones are **graduated developmental capabilities** the harness moves through, organized along the 9-axis autonomy ladder. They are NOT a feature roadmap, NOT a list of TODOs, NOT a marketing sequence. They are the structural arc from "human is everything" to "system has its own consciousness layer."

The 13 D-M milestones decompose into **four build-readiness families**:

- **Family I — Level-0 reality, buildable today.** D-M1 (discipline corpus), D-M2 (loop runners MVL/MVL+), D-M3 (manual meta-loop at L0/L1). These are shipped or operating informally. The substrate that everything else builds on.
- **Family II — Modest investment, no calibration data required.** D-M4 at Navigator L1 protocol-first (isolated Navigator subagent per probe); D-M5 (Primitive RC — structural_check.sh + symptom catalog wiring); D-M8 (materialization lifecycle wired into runners as default post-finding step); D-M9 partial (canary infrastructure + Change Log sections in spec files). These require spec work + integration, not real inquiry volume.
- **Family III — Calibration-gated.** D-M4 at Navigator L1.5 / L2 (auto-discovery + persistence); D-M6 (/intuit Predictive RC — Phase A → B → C → D, requires corpus audit + 2-reviewer admission + N≥30 per-discipline maturity); D-M7 (Retrospective RC — outcome tracking + calibration log infrastructure); D-M10 full L4 multi-head MVL+ (gated on L3 producing ≥3 sequential chains; MERGE decision logic gated on empirical examples); D-M11 (meaningful-traversal substrate — gated on empirical data from D-M3 onward). These require real inquiry volume + outcome data.
- **Family IV — Boundary / research frontier.** D-M12 autonomous goal-formation (L5 boundary, hands off to the consciousness-gradient framing in desc.md). D-M13 consciousness indicators measurably observable (research frontier, gated on all prior milestones).

### Where the user-named four sit in the pattern

- **Materialization (Family II, single milestone).** D-M8 — the 8-phase governed lifecycle that bridges from MVL+ findings to changed files with traceability + risk-class gates. The bridge from theory accumulation to implementation work.
- **Auto-navigation (Family II → III, two graduated levels).** D-M4 at Navigator L1.5 (auto-discovers source inquiry) + L2 (persistent isolated context across runs). Prerequisite: D-M4 at Navigator L1 (protocol-first manual invocation), which is in Family II.
- **Self-maintenance (Family II + III, four sub-substrates).** D-M5 (Primitive RC, Family II) + D-M6 (Predictive RC via /intuit, Family III) + D-M7 (Retrospective RC, Family III) + D-M9 (regression detection + stability preservation, partly Family II partly Family III). The quality-awareness substrate that turns "the harness modifies itself" into "the harness modifies itself without degenerating."
- **Meta-loop (Family I → IV, the full ladder span).** D-M3 (manual meta-loop L0/L1, Family I) → D-M4 graduated (auto-navigation milestones, Family II → III) → D-M10 (L4 multi-head, Family III) → D-M11 (meaningful-traversal substrate, Family III) → D-M12 (L5 autonomous goal-formation, Family IV). The most-spanning of the user-named four; it crosses every family.

### The ordering principle

**Dependency-respecting evidence-gated graduation.** Order is determined by three rules in priority:

1. **Substrate before operation.** A milestone cannot graduate before its substrate is sufficient. D-M6 cannot precede the typed-primitive admission audit (B1). D-M11 cannot precede the empirical evidence base from D-M3 onward.
2. **Foundation before graduation.** A graduated level of any sub-ladder cannot precede the prior level. D-M4 at L1.5/L2 (auto-navigation) cannot precede D-M4 at L1 (Navigator protocol-first).
3. **Evidence before claim.** A milestone is "reached" only when its evidence gate is met, not when its spec is written. D-M6 Phase B is gated on Phase A actionability ≥60%; D-M10 (L4 multi-head) is gated on L3 producing ≥3 sequential chains; D-M11 is gated on empirical data from D-M3 onward.

Within the constraints above, the build-readiness family ordering (I → II → III → IV) is the natural sequence the project moves through. The exact within-family ordering of milestones is for Decomposition to commit and Innovation to surface alternatives.

### SV1 vs SV6 delta

- **SV1** was a hunch ("the harness is structured AI thinking; milestones are graduated autonomy; named four are slices of a wider ladder") with the right shape but no anchors.
- **SV6** is a committed model:
  - The harness's identity is named with three structural commitments (typed primitive substrate + three quality-awareness layers + 9-axis autonomy ladder), each with cited textual grounding.
  - The end-goal is named as consciousness-gradient operationalized via 6 observable indicators, with the Baldwin cycle as the self-improvement mechanism.
  - The 13 D-M milestones organize into 4 build-readiness families.
  - The user-named four are mapped to specific D-M milestones, with the spans (self-maintenance = 4-sub-substrate split; meta-loop = full-ladder span) and prerequisites (auto-navigation requires Navigator L1) made explicit.
  - The ordering principle is named (dependency-respecting evidence-gated graduation) with three priority rules.

The delta is substantial. SV6 is the committed frame the downstream disciplines (Decomposition, Innovation, Critique) operate on.

---

## Saturation Indicators

- **Perspective saturation:** **Approaching saturation.** Three perspectives produced new anchor types (Risk → central failure mode; Phase/Calibration-State → 4-family split; Frame-exit Completeness → 3 resolutions of thinking space + 3 of autonomy). The last 2 perspectives (Internal Consistency, Residual frame-exit) confirmed existing anchors without producing new types. Saturation indicator: triggered.
- **Ambiguity resolution ratio:** **7/7 (100%) at HIGH confidence; 0 OPEN.** This is unusually high; reasons: (a) the source texts are dense and consistent, (b) the exploration pre-mapped the milestone candidates so Phase 3's work was anchor commitment rather than candidate generation, (c) the user's pointing was specific.
- **SV delta:** **Substantial.** SV1 was a hunch about graduated autonomy + named-four-as-slices; SV6 is a committed model with 3-fold harness identity, 4-family milestone organization, mapped user-named four with spans + prerequisites, and a named 3-rule ordering principle.
- **Anchor diversity:** **High.** All five anchor types present (Constraints C1-C5, Key Insights K1-K6, Structural Points S1-S6, Foundational Principles F1-F5, Meaning-Nodes M1-M9). Anchors drawn from 8 perspectives (Technical, Human, Strategic, Risk, Resource, Internal Consistency, Frame-exit Completeness, Phase/Calibration-State). No single anchor dominates.

---

## Self-Assessment

**Overall: PROCEED** (sufficient coverage + convergence + tested resolutions).

- Perspective saturation reached at 8 perspectives (3 produced new anchor types; 5 confirmed without new types).
- Ambiguity resolution ratio 7/7 at HIGH confidence, no OPEN.
- SV delta substantial (hunch → committed 3-commitment harness identity + 4-family milestone organization + named ordering principle).
- Anchor diversity all 5 types, all 8 perspectives represented.
- Failure modes: Status Quo Bias mitigated (small_summary's framings explicitly killed in SV4 elimination list); Premature Stabilization mitigated (Phase 5 accommodation check passed; the 4-family split arrived at Phase 2, integrated into SV3, stable through SV6); Anchor Dominance mitigated (no single anchor subordinates the others); Perspective Blindness mitigated (Risk + Phase/Calibration-State + Frame-exit produced disagreements with prior anchors); Clean Resolution Trap mitigated (every ambiguity-collapse pair stated and dismissed the strongest counter on structural grounds); Self-Reference Blindness mitigated (external grounding in the source texts is sufficient).

Handoff to Decomposition: the constraints in SV5 are the seam for partitioning the milestone-ordering problem. The 4-family split is the highest-coupling decomposition axis; substrate-vs-operation is the second; user-named four as visible anchors is the third. Decomposition can pick the cleanest cut.
