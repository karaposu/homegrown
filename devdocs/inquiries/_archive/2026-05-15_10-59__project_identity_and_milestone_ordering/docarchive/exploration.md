# Exploration — Project Identity and Milestone Ordering

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/_branch.md

Save output as `exploration.md` in the same inquiry folder (not under devdocs/exploration/). Mode: blended — this is partly artifact exploration (read the actual source files at the paths listed in the _branch.md's "Source Territory" section and map what they commit to) and partly possibility exploration (the territory of "meaningful milestones the project is moving through" is conceptual; candidate milestones must be enumerated from the source files, not made up). Treat the prior small_summary at devdocs/archaeology/small_summary.md as the FRAME TO SURPASS — read it, then map what it missed against what the source files actually claim. Entry point: signal-first; the user provided a strong hunch ("thinking harness for AI, traverses thinking space like humans, runs long complex tasks") that should be probed against the actual texts.
```

---

## Territory Overview

**Mode.** Blended.
- *Artifact mode* for the load-bearing source texts (4 named files + 6 jump-scanned enes/ texts + the homegrown/ shipped surface).
- *Possibility mode* for the conceptual territory of "meaningful milestones the project is moving through" — candidates were not pre-listed; they were surfaced from the texts.

**Entry point.** Signal-first. The user supplied a strong hunch — *"thinking harness for AI, traverses thinking space like humans, runs long complex tasks"* — to probe against the texts.

**Surround-layer inclusion (per spec §3.3).** The first scan deliberately included the broader `enes/` notebook surrounding the four named files (autonomy_ladder, evolving_quality_assetment_component, materialization_lifecycle, regression/desc, consciousness, stability_preservation_via_git, what_is_meaningful_traversal) before probing into details. The user's note ("not exactly these but what they mean") made the surround layer load-bearing — the named four milestones cannot be ordered correctly without surfacing the unnamed ones they imply.

**Regions (organizing axes of the map).** Four regions, each separable enough to scan independently:

| Region | What it covers | Resolution |
|---|---|---|
| **A. Project identity** | What the harness IS as a cognitive object; what mounting it on an AI does to the AI's capability | medium (the texts are explicit) |
| **B. Theoretical substrate** | The cognitive-architecture commitments the harness depends on (primitives, quality-awareness layers, autonomy ladders, etc.) | high (the texts are dense and structurally detailed) |
| **C. Implementation surface** | What is actually shipped today as Level 0 reality (skills, protocols, contract, install scripts) | high (the project surface was read directly in a prior pass) |
| **D. Milestone pattern** | The sequence of meaningful developmental milestones the project is moving through; the user-named four (self-maintenance, auto-navigation, meta-loop, materialization) as instances of this pattern | medium-low (the pattern must be inferred from the texts; the named-four pin it but do not exhaust it) |

**Frame to surpass.** `devdocs/archaeology/small_summary.md` framed Homegrown as a "prompt-engineering distribution + an aspirational research effort." That frame is technically defensible from a code-counting perspective but mis-identifies the cognitive object (the harness IS a runtime cognitive architecture, not a collection of prompts) and mis-identifies the milestone structure (the milestones form a graduated autonomy ladder with real evidence gates, not a feature roadmap). The map below replaces both errors with evidence-anchored claims.

---

## Inventory

### Region A — Project Identity

The texts make four convergent claims about what the harness IS. Surfaced items at D2–D3 (functional one-line + adjacency to the system surface that grounds the claim).

**A1. Thinking harness, not a tool collection.**
*What the texts say:* `README.md` calls the project a "thinking engine — an abstraction layer built using stateless proto-intelligent LLM calls" designed to "travel and traverse thinking space." `enes/desc.md` calls it "a cognitive system that progressively builds its own consciousness layer." `enes/thinking_space_dynamics.md` frames the disciplines as a "typed primitive set operating over a shared representation space."
*Confidence:* confirmed (all four named texts agree).

**A2. Mounted on an LLM substrate, the harness restructures how the LLM thinks.**
*What the texts say:* `README.md`: "What a thinking engine does is make LLM thinking move in certain shape and structure and redefine how it thinks." `enes/thinking_space_dynamics.md` distinguishes thinking-space dynamics from "the LLM substrate" itself, treating the harness as the architectural layer ABOVE the substrate; substrate-honest out-of-scope (embodied cognition, qualia, dream-state) is explicitly named so the harness doesn't pretend to ship what the substrate can't support.
*Confidence:* confirmed.

**A3. The "traverses thinking space like humans" claim is operationalized, not metaphorical.**
*What the texts say:* `enes/thinking_space_dynamics.md` admits 11 typed primitives (Phase A 8 + Phase B 3 + Phase C+ 2 deferred) across four categories (Operations / Buffers / Drivers / Modulators); each primitive has an operational definition and a corpus-located admission audit. The "cognitive act" is described as a co-constitutive primitive sequence: *Context-framing primes → Working Memory holds → Attention-pointer + Focus-deep select → Intuition-similarity + Simulation produce matches and hypotheticals → Evaluation ranks → Inhibition suppresses → Metacognition monitors → Motivation sustains → results update Context → cycle repeats.* The text explicitly says: "This is how humans solve problems. It is also (largely unnamed) how modern AI reasoning systems work."
*Confidence:* confirmed at the spec level; *scanned* (not yet confirmed) at the operational-validation level (the primitive compositions are explicitly called "falsifiable hypotheses, not validated claims").

**A4. Designed for long complex tasks via thinking-space traversal.**
*What the texts say:* `enes/desc.md`'s integrated test ladder is asymptotic: "well-defined hard problems → novel problems → unsolved human problems." `enes/towards_cross_run_cognitive_steering...md` explicitly motivates the Navigator as the layer that lets MVL+ become "an atomic cognitive operation" — once many MVL+ runs exist, the harness has the equipment to steer movement across them. `enes/autonomy_ladder.md` calls the meta-loop "a stateful traversal engine for thinking space, not just a runner that runs many MVL+ loops."
*Confidence:* confirmed at the spec level; *unknown* at the empirical level (no completed long-horizon task is documented).

### Region B — Theoretical Substrate

Each subsection is a structurally distinct architectural commitment. Items at D3 (adjacency: which file commits to it; which milestone it underwrites).

**B1. The typed 11-primitive thinking-space (the "substrate of substrate").**
*Source:* `enes/thinking_space_dynamics.md` §2.
*Surface form:* Phase A 8 primitives (Attention-pointer, Focus-deep, Intuition-similarity, Inhibition, Simulation, Metacognition, Working Memory, Context-framing) + Phase B 3 (Motivation, Evaluation, Salience) + Phase C+ 2 deferred (Mood, Arousal). Four-category typology (Operations / Buffers / Drivers / Modulators). Four-criterion admission test (independence + necessity + composability + irreducibility) with corpus-located audit gate (two-reviewer pass).
*Adjacency:* underwrites the 6 observable autonomy indicators in `desc.md` (each indicator is a hypothesized composition of primitives).
*Confidence:* confirmed (primitive set is canonically defined); scanned (operational validation pending).

**B2. The three-layer quality-awareness architecture.**
*Source:* `enes/evolving_quality_assetment_component.md` + `enes/thinking_space_dynamics.md` §4.
*Surface form:* **Primitive RC** (T0, deterministic — catches structural breakage: missing sections, removed safeguards, format violations) + **Predictive RC** (T0, probabilistic — real-time hunch via /intuit, fed by discipline telemetry + intuition-similarity) + **Retrospective RC** (T2+, empirical — confirms what actually worked once downstream consequences play out; "the only source of ground truth").
*Trajectory:* the human currently provides all three layers; the harness gradually develops its own Primitive RC, then Predictive RC, then Retrospective RC. The Baldwin cycle closes only when both Predictive and Retrospective RC exist as system capabilities.
*Adjacency:* the autonomy ladder in `desc.md` maps directly onto the quality-awareness trajectory (each autonomy level requires the corresponding quality-awareness capability).
*Confidence:* confirmed (architecture is canonically defined); confirmed-absent for the harness's current capability (the human is still all three layers).

**B3. The /intuit discipline (the Predictive RC instantiation).**
*Source:* `enes/desc.md` "Current immediate next buildable step" + `enes/thinking_space_dynamics.md` §5–§8.
*Surface form:* a first-class discipline grounded in Case-Based Reasoning (Aamodt & Plaza 1994) + Structure-Mapping Engine (Gentner); operates as Forward transform → Scan → Projection; phased build A → B → C → D (convergent → divergent → adversarial+hypothesis-first → embedding+scale). Two similarity modes distinguished: *surface* (embedding cosine — same domain) and *structural* (SME-style scaffolded alignment+projection — the "angle is the same across unrelated surface domains" capability). Source-type labels are MECHANICALLY VERIFIABLE (cited path + excerpt for CORPUS_MATCH; LLM can't fake what isn't there).
*Adjacency:* this is the "current immediate next buildable step" per desc.md — not shipped yet; not present as `homegrown/intuit/SKILL.md`.
*Confidence:* confirmed at the spec level; confirmed-absent in the shipped homegrown surface.

**B4. The Baldwin cycle (the project's self-improvement mechanism).**
*Source:* `enes/desc.md` "The Evolutionary Mechanism" + `enes/evolving_quality_assetment_component.md`.
*Surface form:* `run problem → observe → detect pattern → propose change → evaluate → encode into spec`. Concrete substrate: Predictive RC predicts at T0; Retrospective RC confirms or contradicts at T2+; the delta is calibration data; consistent miscalibration patterns become Baldwin-cycle SEEDS for spec refinement. Seeds enter the normal SIC loop as inquiry PROPOSALS (never bypass SIC). Seed-generation activates only after calibration maturity (N ≥ 30 per discipline).
*Adjacency:* underwrites the "primary measured objective" (self-improvement rate = Baldwin cycles × quality per cycle). Without Baldwin cycle running, the system is not self-improving — only being-improved by humans.
*Confidence:* confirmed (mechanism is canonically defined); confirmed-absent for the harness's current capability (no Baldwin cycle has run; calibration substrate doesn't exist yet).

**B5. The graduated autonomy ladder (Level 0 → Level 4+).**
*Source:* `enes/desc.md` "The Human's Role" + `enes/autonomy_ladder.md`.
*Surface form (desc.md original):* Level 0 (bootstrap, human runs disciplines + judges quality) → Level 1 (human reviews all self-modifications) → Level 2 (reviews only uncertain ones) → Level 3 (sets strategic direction) → Level 4 (observer; system identifies own gaps) → past-Level 4 (optional). The human role MONOTONICALLY DECREASES — framed as **emancipation through bootstrap-anchored values**, explicitly NOT corrigibility/partnership.
*Confidence:* confirmed.

**B6. The 6-level meta-loop autonomy ladder (a refinement of B5 with 9 explicit axes).**
*Source:* `enes/autonomy_ladder.md`.
*Surface form:* L0 (human is the meta-loop) → L1 (isolated Navigator subagent per probe; human is Selector/Runner) → L2 (system Selector with human override; system writes navigation_memory.md) → L3 (system manages _meta_state.md end-to-end + Reflect-channel for self-stop) → L4 (multi-head MVL+ with Evaluator + MERGE protocol) → L5 (boundary level; full DAG, system handles goal-formation, hands off to desc.md's consciousness gradient). 9 axes underneath: 5 roles (Worker, Navigator, Selector, Runner, Evaluator) + 4 state/generative (Memory, Reflect-channel, Multi-head, Goal-formation). Each transition has an evidence gate (e.g., L1→L2 requires ≥10 navigation maps with explicit selection-rationale).
*Confidence:* confirmed (ladder is canonically defined with PLACEHOLDER thresholds explicitly marked).

**B7. Cross-run cognitive steering via isolated Navigator session.**
*Source:* `enes/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`.
*Surface form:* role separation between *Worker* (solves the current inquiry) and *Navigator* (reads completed artifacts and recommends next movement). The Navigator is the coordination layer that makes **multihead MVL+** plausible — without a Navigator, multiple MVL+ heads are "just parallel work; with a Navigator, they become coordinated probes moving through a shared thinking space." Navigator levels: Level 0 (human-guided) → Level 1 (protocol-first observer, manually invoked) → Level 1.5 (latest-aware) → Level 2 (persistent isolated) → Level 3 (graph-native) → Level 4 (constrained autonomous cognitive steering). Navigator Warming is a separate concern from Navigation itself (warming → navigation → selection → execution).
*Confidence:* confirmed.

**B8. The materialization lifecycle (the bridge from theory to changed files).**
*Source:* `enes/materialization_lifecycle.md`.
*Surface form:* the missing operation between a finding and a file edit. 8-phase lifecycle: task description → implementation plan → dynamic critic → plan repair → implementation → validation → trace → retrospective learning. Three risk classes (Low / Medium / High) with proportionate gates. Reuses the AlignStack vibe-driven-development sequence. The clean boundary: `MVL/MVL+ finding → Artifact Request → Materialization Lifecycle → materialized artifact + trace → Retrospective RC / loop diagnose / branch experiment`. Without it, the harness accumulates theory without ever producing changed artifacts.
*Adjacency:* the `homegrown/protocols/artifact_materialization.md` protocol exists in the shipped surface — partial implementation.
*Confidence:* confirmed (lifecycle is canonically defined); scanned (the protocol exists in homegrown but full lifecycle wiring is unclear).

**B9. Regression detection (the substrate without which self-improvement becomes self-degradation).**
*Source:* `enes/regression/desc.md` + the loop_diagnose protocol in homegrown/protocols/.
*Surface form:* symptom-based detection (not numeric scores, because meaning-quality is unmeasurable). 23 symptoms across 5 types (output / experience / pipeline / error / spec) + 5 diagnostic patterns (Surface Run, Confirmation Bias, Introduced Error, Pipeline Degradation, Slow Drift) + canary tests (one saved reference run per discipline, re-run periodically). Three regression vectors (spec / command / threshold). The text explicitly says: *"Below this threshold, the self-improvement loop becomes a self-degradation loop."*
*Adjacency:* this is the Primitive RC layer in B2, extended with a symptom schema and diagnostic patterns; the human is currently the quality sensor.
*Confidence:* confirmed at the spec level; the "active" pieces (canary infrastructure, Change Log sections, pre-edit git check) are all explicitly "not yet added."

**B10. Stability preservation via git (A/B snapshot mechanism).**
*Source:* `enes/stability_preservation_via_git.md`.
*Surface form:* invoke a past version of a discipline against current input, side-by-side with the current version. Pattern: `git archive <sha> homegrown → archived_skills/<sha>-hg/` + prefix every skill's slash command name with `<sha>-` + isolate supporting files + side-by-side install. Three layers of isolation (folder name / frontmatter name field / internal cross-references). Snapshots are read-only conceptually; never share state with current.
*Adjacency:* this is the *runtime mechanism* that makes regression detection (B9) testable; without it, "the previous discipline that produced the better output no longer exists in any runnable form."
*Confidence:* confirmed (the project already has `archived_skills/` directory present; multiple snapshots already coexist).

**B11. Meaningful traversal (the L5 substrate; currently fuzzy).**
*Source:* `enes/what_is_meaningful_traversal.md`.
*Surface form:* the signal that lets the orchestrated harness distinguish *thinking* from *spinning*. Five candidate signal flavors (coverage / convergence / productivity / directedness / depth), explicitly overlapping and in tension (coverage vs depth; convergence vs productivity). Text admits: *"the failure modes are clearer than the success metric."* Three reasons it matters (in increasing order): termination, cross-head comparison, self-improvement. L3's stop heuristic is a placeholder; L5 is gated on this substrate being operationalized.
*Confidence:* confirmed-fuzzy (the project explicitly commits to it being unsolved). The text is itself an acknowledged placeholder.

### Region C — Implementation Surface (Level 0 reality)

(Confirmed by direct reading in the prior conversation pass; preserved here at D1–D2 with adjacency to which Region-B commitment each shipped piece is the operational arm of.)

**C1. Disciplines (8 + 3).** `homegrown/sense-making/`, `homegrown/innovate/`, `homegrown/td-critique/` (the SIC core); `homegrown/explore/`, `homegrown/decompose/`, `homegrown/comprehend/` (extended); `homegrown/reflect/`, `homegrown/navigation/` (boundary); `homegrown/MVL/`, `homegrown/MVL+/`, `homegrown/meta-loop/` (runners). Each has `SKILL.md` + (most) `references/` with the canonical framework definition.

**C2. Protocols (9).** `homegrown/protocols/`: `branch_inquiry.md`, `conclude.md`, `resume.md`, `multi_resolution_navigation.md`, `navigation_context_intake.md`, `loop_diagnose.md`, `outcome_review.md`, `artifact_materialization.md`, `spec_governance.md`. Plus `_archive/` for retired versions.

**C3. Contract (1).** `homegrown/contracts/alignment_control.md` — shared vocabulary for alignment-control records across protocols (alignment layers L0–L6; modes; routes).

**C4. Distribution surface (2).** `install_for_claude.sh` + `install_for_codex.sh` — copy the homegrown skills into the user's AI-assistant skill folder.

**C5. Adjacency to substrate.** The shipped surface implements the SIC and ESDIC pipelines (B3 partial — SIC is the cognitive backbone; /intuit is the missing Predictive RC discipline), the meta-loop at L0/L1 (B6 partial), the navigation discipline at Level 0/Level 1 protocol form (B7 partial — isolated subagent invocation is documented in MVL+/SKILL.md but the persistent Navigator session is not yet present), the artifact_materialization protocol (B8 partial — the protocol exists; the 8-phase lifecycle is documented but not wired into runners as a default post-finding step), and the loop_diagnose protocol (B9 partial — diagnose protocol exists; symptom catalog and canary infrastructure are absent).

**C6. What is conspicuously not present.** No `homegrown/intuit/` skill (B3). No `_meta_state.md` schema beyond what `meta-loop/SKILL.md` describes informally (B6 L1 partial). No persistent Navigator session (B7 Level 2+). No automated structural-check tool (the MVL+ spec invokes `tools/structural_check.sh` which is absent from the repo). No canary reference runs (B9). No `devdocs/spec/meaningful_traversal.md` (B11). The `archived_skills/` directory IS present (B10 partial), with at least two prior commits' worth of snapshots visible at directory level.

### Region D — Milestone Pattern (possibility mode)

Mode rule: "completeness before novelty." Below are the obvious milestones implied by Region B + C first; novel/derived ones (the four the user named, reinterpreted) follow. Each milestone is labeled with: *what it really means* (the capability it unlocks) + *what unlocks it* (the substrate it depends on) + *what it unlocks* (downstream capabilities) + *current status in the shipped surface*.

**D-M1. Discipline corpus (the SIC + ESDIC primitives).**
- *What it means:* a stable set of cognitive operations callable from any session; each operation is a single-pass cognitive act, not a loop.
- *Unlocks:* every higher milestone — without admitted disciplines, no loop, no harness.
- *Status:* **shipped at Level 0** (8 disciplines + 3 runners; primitive set typology in spec form).
- *Maps to user-named:* not directly named, but presupposed by everything else.

**D-M2. Loop runners (MVL, MVL+).**
- *What it means:* deterministic chaining of disciplines into a question-answering pipeline; one inquiry = one finding.
- *Unlocks:* atomic cognitive operations that the meta-loop can compose.
- *Status:* **shipped at Level 0.**
- *Maps to user-named:* not directly.

**D-M3. Manual meta-loop / sequential traversal (L0–L1 of the meta-loop ladder).**
- *What it means:* multiple MVL+ runs chained by a human Selector who reads each finding's frontier and picks the next probe; first form of cross-inquiry steering.
- *Unlocks:* the data needed for L2 (calibrated selection-rationale).
- *Status:* **operating informally today** (L0); **L1 buildable today** (homegrown/meta-loop/SKILL.md is the protocol-first form, but does not yet auto-invoke an isolated Navigator subagent after each MVL+).
- *Maps to user-named:* "meta-loop" milestone, in its bottom-rung form.

**D-M4. Isolated Navigator session + cross-run cognitive steering.**
- *What it means:* protected attention for movement-space reasoning, separated from worker-session local context; reads completed artifacts and produces `navigation_observer.md` enumerating typed next moves.
- *Unlocks:* L2+ meta-loop (system Selector needs calibrated Navigator output to learn from); multihead MVL+ (heads need a cross-head observer).
- *Status:* **Level 0** (human is doing this in their head); **Level 1 buildable today** via the MVL+ runner invoking the existing `homegrown/navigation/` skill as an isolated subagent.
- *Maps to user-named:* "auto-navigation" milestone — the user's "auto" sits at Navigator Level 2+ (auto-discovers source; persistent isolated context).

**D-M5. Quality-awareness substrate — Primitive RC (the spec-level checker).**
- *What it means:* the harness can detect when its own outputs are structurally broken (missing sections, removed safeguards, format violations) without human review.
- *Unlocks:* L1 autonomy (per desc.md's autonomy↔quality table); regression detection at the cheapest tier.
- *Status:* **partial.** `tools/structural_check.sh` is referenced by MVL+ but absent from the repo; the loop_diagnose protocol exists; the regression/desc.md symptom catalog is specified but not wired into a runner.
- *Maps to user-named:* a piece of the broader "self-maintenance" milestone — the structural-checking piece.

**D-M6. Quality-awareness substrate — Predictive RC (the /intuit discipline).**
- *What it means:* the harness can produce real-time probabilistic value hunches on its own outputs, before downstream consequences play out; pattern-matches against corpus of prior findings (surface + structural similarity).
- *Unlocks:* the Baldwin cycle (Predictive RC predicts at T0; Retrospective RC confirms at T2+; the delta IS the self-improvement signal); L2+ autonomy.
- *Status:* **specified, not built.** `homegrown/intuit/SKILL.md` does not exist; explicitly named as the "current immediate next buildable step" in desc.md.
- *Maps to user-named:* the deepest piece of "self-maintenance" — without it, self-modification has no real-time quality signal.

**D-M7. Quality-awareness substrate — Retrospective RC (outcome calibration).**
- *What it means:* the harness can observe which prior outputs actually worked downstream and use that signal to calibrate its Predictive RC; the outcome-tracking + calibration loop.
- *Unlocks:* the closed Baldwin cycle; L3+ autonomy ("system has all three quality-awareness layers; human reviews calibration quality").
- *Status:* **partially specified.** `homegrown/protocols/outcome_review.md` exists; the calibration log infrastructure (per-discipline N≥30 maturity threshold; primitive-attributed invocation traces) is not yet wired.
- *Maps to user-named:* the Retrospective half of "self-maintenance."

**D-M8. Materialization lifecycle (theory → file edits with traces).**
- *What it means:* the harness can turn findings into changed artifacts under an explicit contract (task description → plan → dynamic critic → plan repair → implementation → validation → trace → retrospective learning), with risk-class proportionate gates.
- *Unlocks:* the harness's ability to act on its own findings; without it, every change is a manual human edit and the loop never closes between "we decided" and "the file changed."
- *Status:* **partial.** `homegrown/protocols/artifact_materialization.md` exists in the protocols folder; the 8-phase lifecycle is specified but not wired as a default post-finding step in MVL/MVL+.
- *Maps to user-named:* "materialization" milestone — directly named.

**D-M9. Regression detection + stability preservation.**
- *What it means:* the harness can detect that its own self-modifications have degraded quality (symptom patterns, canary tests, A/B-comparable snapshots of past discipline versions); the safety substrate of self-modification.
- *Unlocks:* trustworthy self-modification at L1+ (regression-aware Baldwin cycle); without it, every self-improvement cycle is a roll of the dice.
- *Status:* **partial.** Symptom catalog specified in `enes/regression/desc.md`; canary infrastructure not built; `archived_skills/` snapshot mechanism is operational (the directory and at least two snapshots exist).
- *Maps to user-named:* the safety half of "self-maintenance" — distinct from D-M5/6/7 which are the perception half.

**D-M10. Multi-head MVL+ + Evaluator (L4 of the meta-loop ladder).**
- *What it means:* parallel Workers explore competing branches; an Evaluator session compares findings across heads; MERGE protocol decides PROMOTE / MERGE / CONTINUE / STOP.
- *Unlocks:* exploration of competing frames in parallel; cross-head comparison enables evolutionary dynamics.
- *Status:* **specified at protocol-shape level.** No multi-head runner exists; Evaluator role is named; MERGE decision logic is explicitly deferred to L4 build spec.
- *Maps to user-named:* part of the "meta-loop" milestone, in its multi-head form.

**D-M11. Meaningful-traversal substrate (the L5 stop signal).**
- *What it means:* the harness can tell *thinking* from *spinning*; the signal that lets continuous loops self-terminate without arbitrary caps.
- *Unlocks:* L5 of the meta-loop ladder; the empirical center of self-improvement (without it, "improvement" has no metric).
- *Status:* **fuzzy.** Five candidate signal flavors named; spec-level operationalization deferred; L3's stop heuristic is an explicit placeholder.
- *Maps to user-named:* not directly named; sits underneath "meta-loop" at the highest rung.

**D-M12. Autonomous goal-formation (L5 boundary, hand-off to desc.md).**
- *What it means:* the harness selects its own next seed from accumulated Reflect signals + outcome history; the boundary level where the meta-loop ladder hands off to the consciousness-gradient framing.
- *Unlocks:* the trajectory past the meta-loop's domain — the consciousness-layer indicators (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator).
- *Status:* **boundary level.** Explicitly the asymptotic terminus; not yet buildable; gated on multiple prior milestones.
- *Maps to user-named:* the asymptote of all four named milestones converging into "ignition."

**D-M13. (Boundary) Consciousness-layer indicators measurably observable.**
- *What it means:* the six observable indicators in desc.md (compositions of typed primitives) show up in invocation traces without external prompting; the harness exhibits self-running behavior characteristic of consciousness-adjacent function.
- *Unlocks:* the asymptotic end of the autonomy ladder — past Level 4, human role is optional.
- *Status:* **research frontier.** No indicator currently observable. Open Questions section of desc.md flags this as the long-horizon unresolved work.
- *Maps to user-named:* none directly; this is past where the user's four named milestones cap.

### Adjacency map (cross-region; D2–D3 adjacency annotations)

Each D-M milestone's dependency on Region-B substrates:

| Milestone | Required substrate (Region B) | Required shipped surface (Region C) |
|---|---|---|
| D-M1 Disciplines | B1 (primitive set), B11 (meaningful traversal — only partial; disciplines are pre-traversal) | C1 |
| D-M2 Loop runners | D-M1 | C1 (runners are part of C1) |
| D-M3 Manual meta-loop | D-M1, D-M2 | C1 (meta-loop SKILL.md) |
| D-M4 Isolated Navigator | D-M3, B7 | C1 (navigation skill) + protocol-level isolation |
| D-M5 Primitive RC | B2 (Primitive RC layer), B9 (regression spec symptoms) | needs `tools/structural_check.sh` |
| D-M6 Predictive RC (/intuit) | B1 (primitive set, especially Intuition-similarity + Simulation), B2 (Predictive RC layer), B3 (full /intuit spec) | needs `homegrown/intuit/SKILL.md` |
| D-M7 Retrospective RC | B2 (Retrospective RC layer), B4 (Baldwin cycle's calibration half), C2 (outcome_review protocol) | needs calibration-log infrastructure |
| D-M8 Materialization | B8 (lifecycle spec), C2 (artifact_materialization protocol) | needs runner integration as default post-finding step |
| D-M9 Regression + stability | B9 (symptom catalog), B10 (snapshot mechanism), D-M5 | `archived_skills/` operational; needs canary infra |
| D-M10 Multi-head MVL+ | B6 (L4 of meta-loop), B7 (Navigator coordinates), D-M4 | needs L4 build spec |
| D-M11 Meaningful traversal | B11 (the fuzzy spec); empirical evidence from D-M3 onward | needs `devdocs/spec/meaningful_traversal.md` |
| D-M12 Autonomous goal-formation | All of D-M3 through D-M11 mature | boundary level — not directly buildable |
| D-M13 Consciousness indicators | D-M12 + Baldwin cycle running + primitive compositions validated | research frontier |

---

## Signal Log

Signals detected during scans, with disposition (probed / deferred + reasoning).

| Signal type | Signal | Disposition | Reasoning |
|---|---|---|---|
| **Density** | The named four user-milestones map onto a richer ladder structure (D-M1 through D-M13). | **Probed.** | The user explicitly said "not exactly these but what they mean" — density mapping was load-bearing for the inquiry's goal. |
| **Novelty** | The harness frames the consciousness goal as "consciousness-gradient + emancipation + asymptotic ladder," not as a destination. | **Probed.** | The framing surpasses what the small_summary captured ("aspirational research effort"). Surfacing it correctly is required to surpass the frame. |
| **Novelty** | The 9-axis frame underneath the 6-level meta-loop ladder (5 roles + 4 state/generative axes). | **Probed.** | Without it, the L0→L5 sequence looks linear; with it, the alternative-paths/graceful-arrest design choice is visible. |
| **Novelty** | The Predictive RC + Retrospective RC closed loop IS the Baldwin cycle. | **Probed.** | This identification (rather than treating Baldwin as a separate mechanism) is the key load-bearing claim of `desc.md` + `thinking_space_dynamics.md`. |
| **Relevance** | The /intuit discipline does not exist as a shipped skill yet, despite being the "current immediate next buildable step" per desc.md. | **Probed.** | This is the milestone-pattern's load-bearing absence — the named next step. |
| **Relevance** | `tools/structural_check.sh` is referenced by MVL+ but absent from the repo. | **Probed (briefly).** | Confirms D-M5 is partial, not shipped. |
| **Tension** | The "self-maintenance" user-named milestone splits into three substrates (Primitive RC + Predictive RC + Retrospective RC) plus a safety layer (regression detection + stability preservation). The user's single word covers four distinct architectural commitments. | **Probed.** | Decomposition will need to split this in the next discipline. |
| **Tension** | Coverage vs depth and convergence vs productivity tensions in the meaningful-traversal substrate are explicit and unresolved. | **Deferred to Sensemaking/Decomposition.** | The tensions are real but the resolution is not in scope for exploration — it's a design choice that downstream disciplines must navigate. |
| **Absence** | The book scaffold under `src/book/` is mostly empty stubs; only `homegrown_skills.md` is filled in. The "Chapter 0: Terminology" is empty. | **Confirmed-absent.** | This is a confirmed absence rather than a gap — the project does not currently document itself through a book. The disciplines + enes/ notebook ARE the documentation. |
| **Absence** | No multi-user / collaborative meta-loop. | **Confirmed-absent.** | Explicitly deferred in `enes/autonomy_ladder.md` §8. |
| **Absence** | No Level 3 intuition-space generation; no embodied cognition; no qualia; no dream-state consolidation. | **Confirmed-absent.** | Substrate-honest out-of-scope per `thinking_space_dynamics.md` §2.4. |
| **Absence** | The four `enes/` files the user pointed at are all the **substrate** texts; none of them are roadmap documents. The user's question requires synthesizing the roadmap from them — there is no shipped "roadmap.md." | **Probed.** | Notable for downstream — Sensemaking will need to handle the synthesis explicitly. |
| **Tension (jump-scan finding)** | `enes/consciousness.md` is a 7-line file that names three primitives ("intrinsic goals / continuous self-maintenance / affective valuation") that are NOT in the 11 admitted primitives of `thinking_space_dynamics.md`. The 11-primitive set covers Motivation (driver), Evaluation (operation), Mood/Arousal (modulators, deferred). The consciousness.md note may be older or pointing at a layer above the typed primitive set. | **Surfaced as labeling at low confidence (per §4.4 edge-case rule).** | Not a contradiction in the operational architecture — `consciousness.md` is explicitly a notebook fragment, not a spec. |
| **Tension (jump-scan finding)** | `enes/enumerated_goals.md` is 20 lines and reads as in-progress notes, not as a goal enumeration. It mentions a "navigate's complimentary decide mechanism" and an MVL++ idea with Navigate as last element. | **Deferred.** | Suggests an unmapped milestone region around the Navigate-Decide split, but the note is too sketchy to commit to. Flagged for downstream attention if Navigate's role expands. |

---

## Confidence Map

Five-level tagging per region/sub-region. Confirmed-absent regions appear explicitly per §2.2 (mandatory annotation).

| Region / sub-region | Level | Evidence basis |
|---|---|---|
| **A. Project identity (claims A1–A4)** | **confirmed** | All four named texts converge on the harness-as-cognitive-architecture framing; the implementation surface backs the spec-level claims. |
| **B1. Typed 11-primitive set** | **confirmed (spec); scanned (operational validation)** | Canonical spec in `thinking_space_dynamics.md` §2; primitive compositions are explicitly "falsifiable hypotheses, not validated claims." |
| **B2. Three-layer quality-awareness architecture** | **confirmed (spec); confirmed-absent (current harness capability)** | Spec is canonical; the texts repeatedly state "right now, the human IS all three layers." |
| **B3. /intuit discipline** | **confirmed (spec); confirmed-absent (shipped surface)** | Full Phase A–D spec exists; `homegrown/intuit/SKILL.md` does not. |
| **B4. Baldwin cycle** | **confirmed (spec); confirmed-absent (active operation)** | Mechanism canonically defined; no Baldwin cycle has run; calibration substrate pending. |
| **B5. Original autonomy ladder (Level 0–4+)** | **confirmed** | desc.md commits to it explicitly. |
| **B6. 6-level meta-loop autonomy ladder** | **confirmed (with PLACEHOLDER thresholds explicit)** | autonomy_ladder.md commits to ladder shape + evidence gates; numeric thresholds are honestly marked as placeholders. |
| **B7. Cross-run cognitive steering / Navigator levels** | **confirmed (spec); Level 0 reality** | Spec in towards_cross_run...md; current Level 0 is the human acting as Navigator. |
| **B8. Materialization lifecycle** | **confirmed (spec); partial (shipped: artifact_materialization protocol exists, runner integration pending)** | 8-phase lifecycle canonical; protocol file present; integration into MVL+ as default not visible. |
| **B9. Regression detection** | **confirmed (spec); partial (shipped: loop_diagnose exists, symptom infrastructure pending)** | Symptom catalog + 5 diagnostic patterns canonical; canary infrastructure explicitly "not yet added." |
| **B10. Stability preservation via git** | **confirmed (spec); partial (shipped: archived_skills/ operational; at least 2 snapshots exist)** | Snapshot recipe canonical; mechanism demonstrably working at directory level. |
| **B11. Meaningful traversal** | **confirmed-fuzzy** | The project explicitly commits to it being unsolved; placeholder spec sufficient. |
| **C. Implementation surface (Level 0 reality)** | **confirmed** | Directly read in prior conversation pass; structure stable. |
| **D-M1 through D-M10 (milestones with concrete dependencies)** | **confirmed (structural shape); scanned (precise ordering)** | All milestones traced to source-text commitments; the ordering rule (B-substrate → D-milestone via the adjacency map) is structural, not opinion. |
| **D-M11 through D-M13 (boundary/asymptotic milestones)** | **inferred** | These are the project's stated boundary and asymptote; they follow from B11 + B6 L5 + B4 + B5 mature. |
| **Confirmed-absent regions** | (mandatory annotation; see §2.2) | |
| — Multi-user / collaborative meta-loop | **confirmed-absent** | Out of scope per autonomy_ladder.md §8. |
| — Level 3 custom intuition-space generation | **confirmed-absent** | Research frontier per thinking_space_dynamics.md §2.4. |
| — Embodied cognition / qualia / dream-state consolidation | **confirmed-absent (substrate-honest)** | Structurally inaccessible to the LLM substrate per thinking_space_dynamics.md §2.4. |
| — Predictive processing as substrate | **confirmed-absent (deferred)** | Alternative architecture; noted as research frontier; out of current MVP. |
| — `src/book/` chapters past `homegrown_skills.md` | **confirmed-absent (empty stubs)** | Direct file read in prior pass; the book scaffold is not the documentation surface. |
| — `tools/structural_check.sh` referenced by MVL+ | **confirmed-absent** | Path is named in spec; file does not exist in repo. |
| — `homegrown/intuit/` skill folder | **confirmed-absent** | The "current immediate next buildable step" per desc.md is not yet shipped. |
| — Canary reference runs per discipline (regression detection) | **confirmed-absent** | Explicitly "not yet added" per regression/desc.md. |
| — `devdocs/spec/meaningful_traversal.md` | **confirmed-absent** | Item 4 of the buildout roadmap per what_is_meaningful_traversal.md; not yet written. |

---

## Frontier State

**Status: stable.**

Justifications per §4.2 convergence criteria:
1. **Frontier stability** — the territory's regions (identity / substrate / surface / milestone pattern) are bounded. The four named source texts plus six jump-scanned enes/ texts plus the homegrown/ surface produced a stable region map; further scans inside Region B added detail without revealing new regions.
2. **Declining discovery rate** — the last jump-scans (regression/desc.md + consciousness.md + enumerated_goals.md + stability_preservation_via_git.md) refined existing regions rather than opening new ones. Discovery rate visibly tailed off.
3. **Bounded gaps** — remaining unknowns (precise wiring between D-M5/6/7 substrates and the existing protocols; operational form of meaningful traversal; the Navigate-Decide split flagged in enumerated_goals.md) sit *between* mapped regions, not beyond them. They are tasks for downstream disciplines, not exploration gaps.
4. **Jump-scan rule** — the deliberate jump from the four named files into `enes/regression/`, `enes/consciousness.md`, and `enes/stability_preservation_via_git.md` produced confirmations and refinements (B9, B10) — no surprises that would have invalidated the region map. Frontier confirmed stable.

---

## Gaps and Recommendations

Frontier questions handed to downstream disciplines:

### To Sensemaking (next discipline)
- **The dominant cognitive anchor for Region A.** Is the harness best framed as a *thinking-space traversal engine* (the surface user-supplied hunch), or as a *consciousness-gradient builder* (desc.md's framing), or as a *substrate-emancipating cognitive architecture* (a synthesis of both)? The three are not contradictory but they prioritize different load-bearing claims. Sensemaking must pick the primary anchor and order the others underneath.
- **The named-four reinterpretation.** "Self-maintenance" decomposes into D-M5 + D-M6 + D-M7 + D-M9 (four distinct architectural commitments). "Auto-navigation" maps to D-M4 at Navigator Level 2+ (Navigator becomes auto-discovering, then persistent, then graph-native). "Meta-loop" spans D-M3 through D-M10 (the full meta-loop ladder L0→L4). "Materialization" maps to D-M8. Sensemaking should choose how to express the user-named four inside the broader D-M pattern without losing the user's intent.
- **The undersell pattern.** What makes the small_summary's "prompt engineering distribution" frame intuitive-but-wrong? (Hypothesis: the file-counting view privileges executable code over runtime cognitive architecture; an SBOM-style mindset fails on cognitive artifacts.) The discipline should articulate this so the new frame won't be re-undersold by the next reader.

### To Decomposition
- **The natural seams of the milestone pattern.** Where does the dependency graph (built into the adjacency map above) want to be cut? Candidate seams: (a) substrate vs operation (B1–B11 vs D-M1–D-M13); (b) perception-tier (D-M5/6/7 quality-awareness layers) vs action-tier (D-M3/4/8 loop+navigator+materialization) vs safety-tier (D-M9 regression+stability); (c) per-level cuts (L0/L1 buildable today vs L2+ requiring evidence gates). Each seam yields a different valid ordering.

### To Innovation
- **Alternative orderings.** The "dependency-respecting" ordering is structural (you can't do D-M6 without D-M1), but multiple structurally-valid orderings exist. Innovation should surface ≥3 candidate orderings (e.g., quality-substrate-first vs steering-substrate-first vs materialization-first) so Critique has real choices.
- **Naming for the user-named four reinterpreted.** Should "self-maintenance" stay as the user's label and gain sub-bullets, or should the four-way split (Primitive RC / Predictive RC / Retrospective RC / Regression+Stability) get its own name?

### To Critique
- **Survival test on the named-four loyalty.** The user's question explicitly says "not exactly these but what they mean." Critique should test whether any candidate ordering risks losing the user's intent by drifting too far from the named-four vocabulary. The frame surpass goal does not require destroying the user-vocabulary anchors.

### Deferred signals (handed forward; not for exploration)
- The Navigate-Decide split flagged in `enes/enumerated_goals.md`. Probably a refinement to D-M4 / D-M10; not load-bearing for the ordering question unless the downstream disciplines pull it in.
- The exact operational form of the meaningful-traversal substrate. Sits in B11 as fuzzy; resolution is a separate inquiry.
- The relationship between consciousness.md's three-word list ("intrinsic goals / continuous self-maintenance / affective valuation") and the typed 11-primitive set. Probably the older notebook fragment; not load-bearing for the milestone ordering.

---

## Telemetry

- **Mode:** blended (artifact + possibility)
- **Entry point:** signal-first
- **Cycles run:** 2 (first scan: README + 4 named enes files; second scan + jump-scan: 6 supporting enes files + homegrown surface confirmation)
- **Candidates generated (possibility mode):** 13 milestones (D-M1 through D-M13)
- **Signals detected:** 14 — Probed: 9; Deferred: 5 (with reasoning)
- **Resolution progression evidence:** first scan at coarse resolution (D1–D2 — region identification); probes at fine resolution (D3 — adjacency to the milestone map); jump-scan returned to coarse to confirm region stability
- **Frontier state:** stable
- **Discovery rate:** decreasing (last 3 reads — regression/desc, consciousness, enumerated_goals — produced refinements, no new regions)
- **Convergence criteria status:** frontier-stability ✓; declining-discovery ✓; bounded-gaps ✓
- **Jump-scan performed:** YES (from named-4 into regression/, consciousness.md, stability_preservation_via_git.md, enumerated_goals.md)
- **Failure modes checked:** Premature depth (avoided — coarse scan completed before deep probing); Surface-only scanning (avoided — probed deep on B1, B2, B3, B6, B7 after initial scan); False confidence (mitigated by the jump-scan); Premature termination (three criteria explicitly checked); Re-exploration (no — each file read exactly once); Completeness bias in possibility mode (mitigated by the standard-first/novel-second rule in Region D, plus inclusion of the user-named four as instances rather than substitutes); Open→closed drift (avoided — annotations stay at labeling level; relational meaning is deferred to Sensemaking); Silent boundary-discovery (N/A — the inquiry's _branch.md explicitly enumerates the Source Territory); Negative-space silent drop (avoided — confirmed-absent regions appear explicitly); Inadequate per-item content depth (D2 minimum maintained; D3 used where adjacency was load-bearing)
- **Per-item depth:** D2 default; D3 where adjacency mattered (almost all of Region B)

---

## Self-Assessment

**Overall: PROCEED** (territory bounded, regions mapped at confirmed level, milestone candidates enumerated with substrate adjacency, confirmed-absent regions surfaced explicitly, frontier handed off with typed questions for each downstream discipline).
