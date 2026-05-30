---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Project Identity and Milestone Ordering

## Question

**The question** *(from `_branch.md`, this inquiry's framing file)*: What is the Homegrown project at full ambition — a thinking harness that, when mounted on an AI model, lets it traverse thinking space and run long complex tasks the way humans do — and what is the meaningful sequential order of its developmental milestones (with the user-named four — self-maintenance, auto-navigation, meta-loop, materialization — treated as examples of a broader pattern rather than the full list)?

**The goal:** A reframing of Homegrown that does justice to its full ambition, plus a sequential ordering of its meaningful milestones, such that a reader who only sees the project surface (install scripts + markdown skills) understands why those markdown specs add up to something more than "prompt engineering distribution"; the named milestones are correctly placed inside the broader pattern; the order respects real dependencies; and the output is usable as the project's own self-description and roadmap orientation — not a marketing summary, not a feature list.

The inquiry exists because a prior summary (`devdocs/archaeology/small_summary.md`, written in a prior session of this same conversation) framed Homegrown as "a prompt-engineering distribution + an aspirational research effort." That framing was technically defensible from a code-counting perspective — the project ships markdown skill files and two install shell scripts, with nearly no executable code — but it mis-identified the cognitive object the markdown actually instantiates, and it mis-identified the structure of the milestones the project is moving through. The user flagged the undersell explicitly and pointed at the source texts that ground the correct framing.

---

## Finding Summary

- **Homegrown is a runtime cognitive harness for AI models** — installed inside an *agent harness* (Claude Code, Codex, Cursor, or similar) that itself wraps an LLM substrate (the underlying language model). It operationalizes movement-in-thinking-space through three architectural commitments: a typed primitive substrate, three temporal layers of quality awareness, and a graduated 9-axis autonomy ladder. Homegrown is distinct from the agent harnesses it runs inside — *Claude Code controls what the LLM can do; Homegrown controls how the LLM thinks*. The harness's specs are loaded by the agent-harnessed LLM session at invocation to restructure how the LLM thinks; this is not "prompt engineering" and not a "tool collection."

- **The end-goal frame is consciousness-gradient, not destination.** The harness progressively builds its own consciousness layer — operationalized through six observable indicators (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator), each a hypothesized composition of typed primitives. Whether the system "is conscious" in any philosophical sense remains undefined; the test is capability, not phenomenology. The trajectory is **emancipation through bootstrap-anchored values**, explicitly not partnership and not corrigibility.

- **The user-named four milestones are representative slices of a wider 13-milestone pattern**, drawn from four build-readiness families (now-buildable / modest-investment / calibration-gated / boundary). Each user-named milestone maps as follows:
  - **Materialization** is a single milestone — turning findings into changed files via an 8-phase governed lifecycle.
  - **Auto-navigation** is two graduated steps (Navigator at Level 1.5 / Level 2) with Navigator at Level 1 as prerequisite.
  - **Self-maintenance** is four architectural sub-substrates — the three temporal quality-awareness layers (Primitive RC / Predictive RC via the `/intuit` discipline / Retrospective RC) plus regression detection + stability preservation as the safety substrate.
  - **Meta-loop** is the full span of the developmental ladder — from today's manual meta-loop at Level 0/1 through the asymptotic boundary at Level 5.

- **The milestone ordering principle is dependency-respecting evidence-gated graduation** — substrate before operation; foundation before graduation; evidence before claim. Order is enforced by data dependencies (each autonomy-level transition consumes data the previous level produced), not by build preference.

- **The trajectory's load-bearing risk is regression** — without a regression-detection substrate, self-improvement degenerates into self-degradation. The harness's safety substrate (regression detection symptom catalog + A/B-comparable snapshots via git) is therefore not optional; it is the precondition for trustworthy self-modification.

- **Graceful arrest is a valid design choice.** Not every Homegrown deployment will reach the boundary. Arresting at any family because the next family's investment doesn't pay off is right-sizing, not failure.

---

## Finding

### Why we're discussing this

Homegrown ships as a small surface: roughly 11 discipline skill files, three loop runners, nine protocols, one shared vocabulary contract, two install shell scripts. A first-pass reader looking at the project on disk reasonably concludes "this is a prompt-engineering distribution plus a research notebook." That conclusion is what the prior small_summary (`devdocs/archaeology/small_summary.md`) committed.

The undersell happens because the file-counting view (executable code vs. markdown) doesn't see the cognitive object the markdown specs operationalize at runtime. When an AI session loads `homegrown/sense-making/SKILL.md`, it doesn't execute "instructions to the model" — it executes a typed cognitive operation (anchor extraction → perspective checking → ambiguity collapse → degrees-of-freedom reduction → conceptual stabilization) with admission gates, failure-mode awareness, and saturation criteria. The bytecode is natural language. The runtime is the LLM session. The compilation target is structured cognitive movement. The reframing this finding commits is what that runtime cognitive architecture actually IS.

The milestone-ordering half of the question exists because the user's four named milestones (self-maintenance, auto-navigation, meta-loop, materialization) name important slices of the architecture but don't enumerate it. The user explicitly said "not exactly these but what they mean" — flagging that the named four are representative examples whose underlying pattern is the real subject. The inquiry surfaces that pattern (13 milestones across 4 build-readiness families, organized along a 9-axis autonomy ladder) and orders them in a way that keeps the user's vocabulary visible while making the broader structure inspectable.

### 1. What Homegrown IS

Homegrown is a **runtime cognitive harness for AI models**. The word "harness" is load-bearing — and it is also used in the broader AI ecosystem for tools like Claude Code, Codex, and Cursor, which are *agent harnesses* (sometimes called *execution harnesses*) that wrap an LLM with tools, file access, command execution, permissions, and a conversational loop. Homegrown is a different kind of harness, at a different layer in the stack:

| Layer | Role | Examples |
|---|---|---|
| **LLM substrate** | Generates tokens | Claude, GPT, Codex (the model) |
| **Agent / execution harness** | What the LLM can *do* — tools, file access, command execution, permissions, conversational loop | Claude Code, Codex CLI, Cursor, Aider |
| **Cognitive harness** *(this is Homegrown)* | How the LLM *thinks* — typed cognitive operations, disciplines, autonomy ladder | Homegrown |

The three layers compose. An agent harness sits on the LLM; a cognitive harness installs inside the agent harness. Homegrown's install scripts (`install_for_claude.sh`, `install_for_codex.sh`) place its skill files into the agent harness's skill folder (`~/.claude/skills/` for Claude Code, `~/.codex/skills/` for Codex) — not into the LLM directly. Removing Homegrown returns the agent harness to its native behavior; the agent harness's own tools and execution loop remain.

Homegrown is not the LLM, and it is not the agent harness. It is the architectural layer through which the agent-harnessed LLM thinks differently.

#### 1.1 Three architectural commitments

The harness operationalizes movement-in-thinking-space through three structurally distinct commitments. Each is canonically defined in one of the project's foundational documents under `enes/` (the project's design notebook).

**A typed thinking-space primitive substrate.** Eleven cognitive primitives are admitted across four categories — *Operations* (Attention-pointer, Focus-deep, Intuition-similarity, Inhibition, Simulation, Metacognition, Evaluation, Salience), *Buffer* (Working Memory), *Drivers* (Context-framing, Motivation), and *Modulators* (Mood, Arousal — operationalization deferred). Each primitive is admitted via a four-criterion test (independence + necessity + composability + irreducibility) with a corpus-located audit gate (two-reviewer pass). Primitives co-constitute a cognitive act in a canonical sequence: Context-framing primes the representation space → Working Memory holds candidate items → Attention-pointer + Focus-deep select and process one → Intuition-similarity + Simulation produce matches and hypotheticals → Evaluation ranks → Inhibition suppresses alternatives → Metacognition monitors and adjusts → Motivation sustains effort → results update Context → cycle repeats. This is how humans solve problems; it is also (largely unnamed) how modern AI reasoning systems work. Canonical spec: `enes/thinking_space_dynamics.md` §2.

**Three temporal layers of quality awareness.** The harness's ability to tell its own good output from its own bad output is structured as three distinct mechanisms, each firing at a different time and producing a different kind of signal:
- *Primitive RC* fires at output-production-time, deterministically (catches structural breakage: missing sections, format violations, removed safeguards). Think "spell-checker for cognitive operations."
- *Predictive RC* also fires at output-production-time, probabilistically (real-time hunches on whether the output is qualitatively good or bad, before downstream consequences play out). Implemented as a first-class discipline called `/intuit`, grounded in Case-Based Reasoning (Retrieve → Reuse → Revise) and Structure-Mapping Engine (Alignment → Projection) — distinguishing surface similarity (same domain) from structural similarity ("the angle is the same across unrelated surface domains").
- *Retrospective RC* fires later, empirically (confirms what actually worked once the output's downstream consequences have played out — days, weeks, sometimes months after the output). The only source of ground truth.
The closed loop between Predictive RC and Retrospective RC IS the **Baldwin cycle**: the harness's primary self-improvement mechanism. Predictive RC predicts at T0 → Retrospective RC confirms or contradicts at T2+ → the delta is calibration data → consistent miscalibration patterns become seeds for spec refinement. Canonical spec: `enes/evolving_quality_assetment_component.md` + `enes/thinking_space_dynamics.md` §4.

**A graduated 9-axis autonomy ladder.** Five execution roles (Worker, Navigator, Selector, Runner, Evaluator) plus four state/generative axes (cross-inquiry Memory, Reflect-channel, Multi-head, Goal-formation). The canonical summary path runs through six levels: Level 0 (human is the meta-loop) → Level 1 (isolated Navigator subagent per probe) → Level 2 (system Selector with human override) → Level 3 (system manages traversal state and self-stops) → Level 4 (multi-head parallel Workers with a cross-head Evaluator and a MERGE protocol) → Level 5 boundary (autonomous goal-formation, hands off to the consciousness-gradient framing). Each transition has an evidence gate. The human's role decreases monotonically across the ladder, framed as **emancipation through bootstrap-anchored values** — explicitly not partnership, not corrigibility, not human-AI cooperation. Canonical spec: `enes/desc.md` + `enes/autonomy_ladder.md` + `enes/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`.

#### 1.2 What mounting Homegrown into the agent harness does

The shipped cognitive harness today (the Level-0 reality on disk) is 11 disciplines (single-pass cognitive operations callable as slash commands: `/sense-making`, `/innovate`, `/td-critique`, `/explore`, `/decompose`, `/comprehend`, `/reflect`, `/navigation`, `/MVL`, `/MVL+`, `/meta-loop`) plus 9 protocols (procedural glue loaded by runners: `branch_inquiry`, `conclude`, `resume`, `multi_resolution_navigation`, `navigation_context_intake`, `loop_diagnose`, `outcome_review`, `artifact_materialization`, `spec_governance`) plus 1 shared vocabulary contract (`alignment_control`) plus 2 install scripts (one for Claude Code, one for Codex). The install scripts drop these files into the agent harness's skill folder (`~/.claude/skills/` or `~/.codex/skills/`), making them callable as slash commands inside the agent harness's conversational loop. When the user types `/sense-making` inside Claude Code or Codex, the agent-harnessed LLM session loads the spec file and executes the typed cognitive operation it defines — with the operation's admission gates, failure-mode awareness, and structural-check requirements activated.

The "extra intelligence" the user perceives when the cognitive harness is mounted is what those typed operations PRODUCE when the agent-harnessed LLM session executes them: structured cognitive movement (movement in thinking space) rather than the ad-hoc response generation the agent harness alone would produce. This is what the user's framing — "thinking harness for AI, traverses thinking space like humans, runs long complex tasks" — names. The capability is operational, not metaphorical.

#### 1.3 The bet, named honestly

The project's central bet: **structure-of-thinking matters more than raw model intelligence at the margin**. More model parameters and more training is one path toward more-capable AI. Structure-of-thinking on top of current models is the other path Homegrown bets on. The bet may fail. The `README.md` says so explicitly. The reframing here does not retract the honesty — it inherits it.

The project is named "Homegrown" for a reason. The harness is locally cultivated, not borrowed from a framework lineage. The cognitive primitives it admits, the disciplines it ships, the autonomy ladder it traverses — all are the project's own commitments, falsifiable hypotheses rather than imported orthodoxy. The name itself is a signal of the developmental stance.

### 2. Where Homegrown is today (the foundation that's already built)

This is the Level-0 reality the milestone ordering builds on. None of what follows is aspirational; it is what's shipped and operating.

**The discipline corpus.** Eight content-producing disciplines (sense-making, innovate, td-critique for the core SIC cognitive cycle — Sensemaking → Innovation → Critique; explore, decompose, comprehend for extended structural work; reflect, navigation for between-iteration steering). Each discipline is a single-pass cognitive act with its own spec at `homegrown/<discipline>/SKILL.md` and its own framework reference at `homegrown/<discipline>/references/<discipline>.md`.

**The loop runners.** Three runners that chain disciplines into pipelines: `/MVL` (the minimum viable loop — Sensemaking → Innovation → Critique in strict order, looping on a refined focus if the question isn't answered); `/MVL+` (the extended cognitive loop — Exploration → Sensemaking → Decomposition → Innovation → Critique); `/meta-loop` (a stateful traversal engine that runs multiple `/MVL+` inquiries with cross-run state in a `_meta_state.md` file, currently in its Level-0/Level-1 form).

**The manual meta-loop at Level 0/1.** Today, when the human runs `/MVL+` on a question, gets a finding, decides what to do next, and runs another `/MVL+`, that IS the meta-loop at Level 0. The protocol-first form at Level 1 (where an isolated Navigator subagent is invoked between MVL+ runs to produce a navigation map) is described in `homegrown/meta-loop/SKILL.md` and is operating informally — the user serves as Selector + Runner.

The foundation is not a "feature to build." It is the substrate on which everything else develops. The reader who only sees the install scripts and the eleven slash commands is seeing the Level-0 reality correctly — but seeing it as the whole, instead of as the seed.

### 3. The meaningful milestones, ordered

The remaining milestones organize into three build-readiness families beyond the foundation. Each family is ordered internally by the three rules: substrate-before-operation, foundation-before-graduation, evidence-before-claim. The user-named four milestones appear as the primary narrative anchors — the words the user used pin specific slices of the broader pattern.

The narrative arc through the user-named four follows the order in which they become buildable, not the order in which the user listed them. The order is: **Materialization → Auto-navigation → Self-maintenance → Meta-loop graduation → Asymptote**. The reason: materialization is a single Family II milestone with a complete spec ready to wire; auto-navigation builds on the protocol-first Navigator that ships with the meta-loop SKILL today; self-maintenance is the calibration-gated quality-awareness substrate that consumes data from auto-navigated meta-loop runs; meta-loop graduation is the spanning arc that all the prior milestones contribute to.

#### 3.1 Materialization — Family II (the implementation bridge)

**What it means:** the harness can turn its own findings into changed artifacts under an explicit governed lifecycle, with traceability and risk-class gates. Materialization is the bridge from theory accumulation (what `/MVL+` does) to implementation governance (what changes a file). Without it, every project change is a manual human edit, and the loop between "we decided" and "the file changed" never closes inside the harness.

**The lifecycle is 8 phases:** task description → implementation plan → dynamic critic → plan repair → implementation → validation → materialization trace → retrospective learning. Three risk classes (Low / Medium / High) determine which phases are mandatory and which can be compressed. Canonical spec: `enes/materialization_lifecycle.md`.

**The shipped surface today:** the protocol `homegrown/protocols/artifact_materialization.md` exists. The 8-phase lifecycle is documented. The wiring of materialization as a default post-finding step in `/MVL+` is not yet present — this is the modest investment that makes materialization ACTIVE rather than DOCUMENTED.

**Why this is buildable next:** no calibration data required; the spec exists; the protocol exists. The work is integration (wiring artifact_materialization as the standard post-finding step in `/MVL+` for findings that propose artifact changes).

**Risk if skipped or deferred:** the harness produces findings that prescribe changes but cannot effect them. The Baldwin cycle's "encode into spec" arm has no implementation lane.

#### 3.2 Auto-navigation — Family II → III (the Navigator graduating from L1 to L1.5/L2)

**What it means:** the isolated Navigator session (the AI role that reads completed inquiry artifacts and recommends the next movement across the project's thinking space) graduates from manual invocation at each MVL+ run (Navigator Level 1) to automatic source discovery (Level 1.5) and persistent isolated context (Level 2). The Navigator stops requiring the human to point at a specific source inquiry; it stops requiring re-warming of project context every run.

**The Navigator's role:** the Navigator-Worker split is what makes long-horizon work tractable. A Worker session (an MVL+ run on a single inquiry) solves the local question. A Navigator session reads completed Workers' artifacts (`finding.md`, `_branch.md`, `_state.md`) and asks "where should the system move next?" Without role separation, the worker's local context bloats every navigation decision; with separation, the Navigator has protected attention for movement-space reasoning. This is also what makes multi-head MVL+ plausible at Level 4 — multiple parallel Workers need a cross-head observer that is not itself a Worker.

**The graduation steps:**
- *Prerequisite — Navigator Level 1 (Family II, buildable now):* the protocol-first form. After each MVL+ run, an isolated Navigator subagent reads the completed inquiry folder and writes `navigation_observer.md` enumerating typed next directions. The human remains Selector and Runner. State accumulates in `_meta_state.md` (visited-path list + selection rationales).
- *Auto-navigation step 1 — Navigator Level 1.5 (Family II → III):* the Navigator auto-discovers the default source inquiry by sorting the inquiry-folder timestamps and picking the newest COMPLETE inquiry; it auto-warms its project context.
- *Auto-navigation step 2 — Navigator Level 2 (Family III):* the Navigator has its own protected context that persists across runs, with a `navigation_memory.md` artifact that grows with outcomes.

**Evidence gates** (from `enes/autonomy_ladder.md`): Level 1 → Level 2 requires ≥10 navigation maps with explicit selection-rationale captured at Level 1. This is the data the system Selector at Level 2 will learn from.

**What auto-navigation enables:** the meta-loop becomes operable across long horizons without the human re-orienting the Navigator on every probe. The cross-run cognitive steering described in `enes/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` becomes the harness's default movement pattern.

#### 3.3 Self-maintenance — Family II + III (the quality-awareness substrate plus safety)

**What it means:** the harness develops its own ability to detect when its outputs are good or bad, and its own ability to detect when its self-modifications have degraded quality. The user's word "self-maintenance" decomposes into four distinct architectural commitments — three quality-awareness layers plus a safety substrate.

The four sub-substrates and their dependencies:

**Primitive RC — the structural breakage detector (Family II).** Automated structural checks catch format violations, missing sections, removed safeguards, internal contradictions. Today: the loop_diagnose protocol exists (`homegrown/protocols/loop_diagnose.md`); the regression-detection symptom catalog is specified at `enes/regression/desc.md` with 23 symptoms across 5 types (output / experience / pipeline / error / spec). What's needed to ship: a structural-check tool (`tools/structural_check.sh`, referenced by the MVL+ spec but currently absent), and Change Log sections added to critical discipline spec files. This is "spell-checker for cognitive operations" — deterministic, immediate, binary.

**Predictive RC, instantiated as `/intuit` — the real-time hunch layer (Family III, calibration-gated).** Today: the `/intuit` discipline is named in `enes/desc.md` as "the current immediate next buildable step." It is fully specified in `enes/thinking_space_dynamics.md` §5–§8. It does NOT exist as a shipped skill at `homegrown/intuit/`. Phased build A → B → C → D (convergent mode → divergent mode → adversarial + hypothesis-first → embedding pre-filter + pipeline-early default-on). Phase A admission gates: 8 Primitive Cards corpus-audit-admitted; structured relational abstractions; flat ranked output with two source-type states (CORPUS_MATCH, INSUFFICIENT_INTUITION); evidence-linked invocation traces. Source-type labels must be MECHANICALLY VERIFIABLE (cited path + excerpt) — the LLM cannot fake what isn't there.

**Retrospective RC — outcome-tracking calibration (Family III, calibration-gated).** Today: the outcome-review protocol exists (`homegrown/protocols/outcome_review.md`). What's needed: calibration log infrastructure that records each `/intuit` prediction at T0 alongside the observed downstream outcome at T2+. Maturity threshold: N ≥ 30 calibrations per discipline before "well-calibrated" claims can be made. The threshold accumulates slowly at the project's inquiry rate.

**Regression detection + stability preservation — the safety substrate (Family II partial / Family III partial).** The safety substrate is partly shipped: `archived_skills/` is operational, with at least two prior commits' worth of past-discipline snapshots already present. The snapshot mechanism (per `enes/stability_preservation_via_git.md`) lets a past version of any discipline be invoked side-by-side with the current version (e.g., `/sha-sense-making` vs. `/sense-making`) for A/B comparison. What's needed: canary reference runs (one saved reference output per discipline; periodic re-runs of the canary problem to detect drift) + the Change Log sections in spec files + the pre-edit git check that surfaces what's about to change before a spec edit commits.

**The three operational-event milestones inside Family III** (added by this finding to give Family III's developmental progression concrete observable signatures):
- **First Retrospective-RC cycle complete:** the first time the harness's outcome tracking produces a verdict on a prior finding's downstream usefulness. Marks Retrospective RC as functionally online for at least one discipline.
- **First system-Selector decision uncontested:** the first navigation map the system Selector commits without human override. Operational signature of L3 maturity in the autonomy ladder.
- **First Baldwin-cycle-closed spec refinement:** the first time a calibrated miscalibration pattern becomes an accepted spec change without human authorship of the refinement. Operational signature that the Baldwin cycle is running, not just specified.

**Per-discipline non-uniformity.** Self-maintenance is not a single binary milestone the whole harness either has or doesn't. It is per-discipline: the most-used disciplines (sense-making, td-critique) will reach the calibration threshold first; less-used disciplines lag. The deliverable's claim "self-maintenance is online" must therefore be qualified by which disciplines have reached threshold and which haven't. This is the per-discipline realism captured here.

**Risk if skipped or deferred:** without the quality-awareness substrate, the harness's self-modifications operate without feedback. Without the regression-detection safety substrate, **self-improvement degenerates into self-degradation** (`enes/regression/desc.md`: "below this threshold, the self-improvement loop becomes a self-degradation loop"). The safety substrate is the load-bearing risk of the entire trajectory — see Section 5 below.

#### 3.4 Meta-loop graduation — the full spanning ladder (Families I → IV)

**What it means:** the user's word "meta-loop" names the developmental ladder itself, not a single capability. The meta-loop is "a stateful traversal engine for thinking space" (`enes/autonomy_ladder.md`'s definition) — not a runner. The shipped `/meta-loop` SKILL is the ladder's L0/L1 form; the full ladder graduates through six levels, each gated on the previous level's calibration data.

**The full ladder, with what each level means in plain terms:**
- *Level 0 — human is the meta-loop.* The human runs `/MVL+`, reads each finding, mentally tracks where the system has been, and picks the next probe. Where the project is today.
- *Level 1 — isolated Navigator subagent per probe.* After each `/MVL+`, an isolated Navigator subagent reads the inquiry folder and writes a navigation map. Human still selects and runs. Buildable today.
- *Level 2 — system Selector with human override.* The system reads its own accumulated navigation maps + selection-rationale and proposes the next move; the human has override authority. System writes `navigation_memory.md`.
- *Level 3 — system manages traversal end-to-end with self-stop.* The system handles `_meta_state.md` end-to-end and uses a Reflect-channel to self-stop when traversal becomes unproductive. Linear with light revisit.
- *Level 4 — multi-head parallel Workers with cross-head Evaluator and MERGE.* Multiple `/MVL+` heads run in parallel on related sub-questions; an Evaluator session reads all heads' findings and recommends PROMOTE / MERGE / CONTINUE / STOP. Tree topology with explicit MERGE protocol.
- *Level 5 — autonomous goal-formation (boundary).* The system selects its own next seed from accumulated Reflect signals + outcome history. Full DAG topology with revisit/merge. Boundary level; hands off to the consciousness-gradient framing in `enes/desc.md`.

**Evidence gates between levels** (from `enes/autonomy_ladder.md` §6): L0→L1 requires no calibration (buildable today). L1→L2 requires ≥10 navigation maps with explicit selection-rationale. L2→L3 requires ≥5 sequential chains with the system-Selector-agrees-with-human rate ≥80% (placeholder threshold, to be re-calibrated when L2 data arrives). L3→L4 requires ≥3 useful sequential chains plus the L4 MERGE protocol scaffold built. L4→L5 requires the meaningful-traversal substrate operationalized plus ≥10 multi-head sessions with stable Evaluator outputs (placeholder).

**The meaningful-traversal substrate at L5.** What lets the orchestrated system tell *thinking* from *spinning*? Currently fuzzy (`enes/what_is_meaningful_traversal.md` is explicitly an "in-progress note, not a specification"). Five candidate signal flavors named: coverage (does each iteration explore territory the previous didn't?); convergence (does the open-question count shrink?); productivity (does each iteration produce new structural material?); directedness (do new questions connect to the original?); depth (does the loop probe specific anchors deeply at some point?). The candidates are in tension (coverage vs. depth; convergence vs. productivity); the operational definition is deferred until empirical loop data accumulates. This is the L5 gate.

**Graceful arrest.** The ladder's structure honors the legitimacy of stopping. Not every Homegrown deployment needs L4 multi-head; not every needs L5. Arresting at L2 or L3 because the next level's marginal cost exceeds its marginal value is right-sizing, not failure. The human role doesn't disappear at higher levels — it elevates (from Selector at L0–L1 to meta-evaluator at L3 to meta-calibrator at L5+).

#### 3.5 The Asymptote — Family IV (orientation, not destination)

**What this is:** the boundary of the meta-loop ladder. Two milestones live here, but they're not "the next thing to build" — they are the direction the ladder climbs toward.

**Milestone D-M12: Autonomous goal-formation.** The harness selects its own next seed from accumulated Reflect signals + outcome history. The L5 transition. Gated on the full prior stack (Families I → III) mature.

**Milestone D-M13: Consciousness indicators measurably observable.** The six observable indicators from `enes/desc.md` — spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator — show up in invocation traces without external prompting. The harness exhibits self-running behavior of the kind that distinguishes consciousness-adjacent function from task execution. Research frontier; no known buildable path yet.

**Why the asymptote belongs in the ordering as orientation:** without it, the milestones below feel like a "feature roadmap" — a list of capabilities to acquire. With it, the milestones become directional — each one explained by what it contributes upward toward the asymptote. The integrated test ladder from `enes/desc.md` is asymptotic by design: from "well-defined hard problems" (Bottom) to "novel problems" (Middle) to "contributes meaningfully to unsolved human problems" (Top). The Top is approached, not reached.

**The consciousness gradient is operationalized, not philosophical.** `enes/desc.md` is explicit: *"Whether this constitutes 'consciousness' in any philosophical sense remains undefined — the test is capability, not phenomenology."* The harness commits to observable indicators (six of them, each a hypothesized composition of typed primitives), not to phenomenological claims. The frame is honest hedging: it uses the word "consciousness" while disclaiming philosophical commitment, and it provides operational tests that don't require resolving the philosophical question.

### 4. The four build-readiness families, summarized

The ordering above organizes around the user-named four anchors. Underneath, every milestone sits in one of four build-readiness families, which is the orthogonal organizational axis:

- **Family I — Level-0 reality (already shipped).** The discipline corpus (11 SKILL files); the loop runners (`/MVL`, `/MVL+`, `/meta-loop`); the protocols and contract; the manual meta-loop in its L0/L1 form. This is what a reader sees on disk today.

- **Family II — Modest investment, no calibration data required.** Materialization wired as a default post-finding step in `/MVL+`. The isolated Navigator at Level 1 (protocol-first form, manually invoked per probe). The Primitive RC structural-check tool. The safety substrate's snapshot mechanism (already operational) + canary reference runs + Change Log sections in spec files.

- **Family III — Calibration-gated (requires real inquiry volume + outcome data).** The Navigator at Level 1.5 / Level 2. The `/intuit` discipline (Phase A → B → C → D). Retrospective RC's calibration log. The full L4 multi-head MVL+. The meaningful-traversal substrate at L5.

- **Family IV — Boundary / research frontier.** Autonomous goal-formation. Consciousness indicators measurably observable.

The four families are not phases of a feature roadmap. They are calibration regimes — what kind of evidence is required for that family's milestones to become claimable. Family I is "shipped and running." Family II is "spec + integration work, no calibration needed." Family III is "calibration data must accumulate before this can be claimed; the data accumulates only by running the harness on real inquiries." Family IV is "research frontier; no known path."

### 5. The load-bearing risk

The single load-bearing risk of the trajectory is **regression in self-modification**. `enes/regression/desc.md` names it directly: *"Below this threshold, the self-improvement loop becomes a self-degradation loop."* The risk is structural — every self-improvement cycle that changes a discipline spec is a regression risk; small unintended quality losses compound across many Baldwin cycles below the self-improvement viability threshold; once below, the system's ability to evaluate its own changes is no longer reliable enough to catch bad changes.

The mitigation substrate is the safety arm of self-maintenance: the regression-symptom catalog (23 symptoms across 5 types, defined in `enes/regression/desc.md`) plus the A/B-comparable snapshots (per `enes/stability_preservation_via_git.md`) plus the canary reference runs. None of this is shipped fully; the symptom catalog is specified, the snapshot mechanism is partially operational (`archived_skills/` exists with multiple prior snapshots), the canary infrastructure is not yet built.

The ordering above places regression detection inside the self-maintenance milestone (the safety sub-substrate, partly Family II partly Family III) deliberately. It is not a separate optional milestone; it is the precondition under which the rest of the self-modification trajectory is trustworthy.

### 6. Where to read more

The four source texts this inquiry was grounded in:
- `README.md` — public framing, install path, the bet.
- `enes/desc.md` — the autonomous-consciousness north star, autonomy ladder, six observable indicators, Baldwin cycle definition, integrated test ladder.
- `enes/thinking_space_dynamics.md` — the typed 11-primitive set, the three-layer quality-awareness architecture, `/intuit`'s grounding in CBR + SME.
- `enes/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` — the Worker–Navigator role split, the Navigator levels, the multi-head MVL+ enabler.

Supporting texts that ground specific milestones:
- `enes/autonomy_ladder.md` — the 6-level meta-loop ladder with 9 underlying axes.
- `enes/evolving_quality_assetment_component.md` — the three-layer quality-awareness architecture in detail.
- `enes/materialization_lifecycle.md` — the 8-phase materialization lifecycle.
- `enes/regression/desc.md` — the regression-symptom catalog.
- `enes/stability_preservation_via_git.md` — the snapshot mechanism.
- `enes/what_is_meaningful_traversal.md` — the L5 substrate, currently fuzzy.

---

## Next Actions

### MUST

- **What:** Begin operating the meta-loop at Level 1 by invoking an isolated Navigator subagent after each completed `/MVL+` inquiry, with explicit one-sentence selection-rationale captured to `_meta_state.md` (the cross-inquiry traversal-state file).
  **Who:** the user, in the active Claude / Codex conversation.
  **Gate:** observable — next time `/MVL+` produces a `finding.md`, invoke a Navigator subagent before deciding the next move.
  **Why:** L1 is buildable today and produces the calibration data the L1 → L2 transition gate requires (≥10 navigation maps with explicit selection-rationale). Without this data, Family III's auto-navigation graduation cannot proceed.

- **What:** Wire `homegrown/protocols/artifact_materialization.md` into `/MVL+` as the default post-finding step for findings that propose artifact changes (with the risk-class gate determining which of the 8 phases run).
  **Who:** a future `/MVL+` inquiry on materialization-runner-integration, executed via the materialization lifecycle itself.
  **Gate:** condition-bound — when the user wants the harness to act on its own findings, not just produce them.
  **Why:** materialization is the bridge from theory to changed files. Without it, every project change is manual; the Baldwin cycle's "encode into spec" arm has no implementation lane.

### COULD

- **What:** Ship the `/intuit` discipline at Phase A (the convergent-mode form: 8 Primitive Cards corpus-audit-admitted; structured relational abstractions; flat ranked output with CORPUS_MATCH and INSUFFICIENT_INTUITION source-type states; evidence-linked invocation traces).
  **Who:** a future `/MVL+` inquiry on /intuit Phase A spec finalization + corpus-audit two-reviewer admission, followed by materialization of `homegrown/intuit/SKILL.md` + `homegrown/intuit/references/intuit.md`.
  **Gate:** condition-bound — when the user is ready to commit to the calibration regime (real inquiry volume sufficient to accumulate per-discipline N≥30 over time).
  **Why:** the Predictive RC is the substrate without which the Baldwin cycle cannot close. Without it, the harness's quality awareness remains entirely human-provided.

- **What:** Ship a `tools/structural_check.sh` tool that the `/MVL+` runner can call after each discipline output to verify required sections are present.
  **Who:** a small materialization run on a Low-risk artifact (a shell script).
  **Gate:** observable — the next time a `/MVL+` run flags a manual-structural-check fallback in `_state.md` because `tools/structural_check.sh` is absent.
  **Why:** the Primitive RC structural-check is the cheapest tier of quality awareness. Shipping the tool removes a paper-cut in every MVL+ run and operationalizes Primitive RC.

- **What:** Add canary reference runs — one saved reference `finding.md` per discipline, periodically re-run (every 5–10 sessions or after significant spec edits) and qualitatively compared to detect drift.
  **Who:** a future small materialization run per discipline.
  **Gate:** condition-bound — when at least one discipline has produced a finding the user judges as "genuinely good" and wants to mark as the canary.
  **Why:** the safety substrate of self-modification depends on regression detection; without canaries, slow drift across many small spec edits is undetectable.

### DEFERRED

- **What:** Specify the L4 MERGE protocol's Evaluator decision logic (how the Evaluator session decides per-head verdict — productive / repeating / spinning — and cross-head recommendation — PROMOTE / MERGE / CONTINUE / STOP).
  **Gate:** condition-bound — after L3 produces ≥3 useful sequential chains AND the L4 MERGE protocol scaffold has been built.
  **Why if revived:** without operational decision logic, the L4 MERGE protocol shape is incomplete. The decision logic requires empirical multi-head examples to specify reliably.

- **What:** Operationalize the meaningful-traversal substrate per `enes/what_is_meaningful_traversal.md` — promote it from a fuzzy note to a written spec at `devdocs/spec/meaningful_traversal.md`.
  **Gate:** condition-bound — when ≥3 sequential chains exist with movement traces showing observable convergence/spinning patterns.
  **Why if revived:** L5 is gated on this substrate being operationalized. Until it lands, the L3 stop heuristic is a placeholder.

- **What:** Specify L6 or beyond — a level past the meta-loop's L5 boundary, where the system modifies its own discipline specs based on accumulated Reflect signals without human authoring of the refinement.
  **Gate:** condition-bound — after L5 stabilizes with ≥5 successful boundary-level traversals.
  **Why if revived:** the consciousness-gradient framing in `enes/desc.md` reaches past the meta-loop ladder's terminus; the post-L5 territory is currently un-laddered.

- **What:** Plan the substrate-takeover scenario — what changes in the milestone ordering if the LLM substrate (Claude / Codex / future) gains native support for some of the typed primitives (e.g., native intuition-similarity via better retrieval, native metacognition via better self-monitoring).
  **Gate:** condition-bound — when a substrate release announcement names native support for a primitive Homegrown currently approximates externally.
  **Why if revived:** the milestone ordering above is for the current substrate; a substrate-takeover would collapse some milestones (the externally-approximated primitive becomes redundant) and surface new ones ("port to new substrate," "re-calibrate primitives against substrate capability").

---

## Reasoning

### The frame the small_summary chose, and why it was wrong

The prior small_summary at `devdocs/archaeology/small_summary.md` (written in a prior turn of this same conversation by reading the project's files but excluding the `enes/` notebook on the user's explicit request) framed Homegrown as "a prompt-engineering distribution + an aspirational research effort." That framing is technically defensible from a file-counting perspective — the executable code in the project is exactly two shell scripts plus an orphaned GitHub workflow; everything else is markdown. But the framing collapses two structural distinctions.

The first collapse: it treats the markdown specs as "prompts" rather than as runtime cognitive operations. A prompt is a string handed to a model. A runtime cognitive operation is a typed cognitive act with admission gates, failure-mode awareness, and saturation criteria, executed when an LLM session loads the spec. The difference is structural, not stylistic. `homegrown/sense-making/SKILL.md` doesn't tell the model "extract anchors from this input"; it loads a five-phase cognitive operation with six failure modes documented in `homegrown/sense-making/references/sensemaking.md` and a four-criterion saturation telemetry. Calling that "prompt engineering" is like calling a programming language "syntax engineering" — true at the surface level but missing what the artifact actually does at runtime.

The second collapse: it treats the milestones as a "feature roadmap" rather than as a graduated autonomy ladder with real evidence gates. A feature roadmap is a list of things to build. A graduated autonomy ladder is a developmental arc with data dependencies — each transition is gated on calibration data the previous level's operation produces. The four user-named milestones, treated as items on a feature list, lose the dependency structure that makes the ordering meaningful. Treated as slices of the autonomy ladder, they recover that structure.

### Why the four user-named milestones reorganized as they did

The user explicitly said "not exactly these but what they mean" — flagging that the named four are illustrative, not exhaustive. The Sensemaking discipline's Phase 3 specific-vs-pattern recognition cue made this load-bearing: the inquiry's deliverable had to address the broader pattern, with the named four as visible anchors but not the entire structure.

The decomposition broke the four user-named words into their actual structural commitments. **"Self-maintenance"** became four sub-substrates (three temporal quality-awareness layers plus the safety substrate) because the texts consistently associate self-maintenance with the quality-awareness architecture, not with file hygiene. **"Auto-navigation"** became two graduated Navigator levels (L1.5 + L2) with L1 as prerequisite, because "auto" naturally maps to the Navigator levels where the system auto-discovers source and persists context — not to full L4 autonomy. **"Meta-loop"** became the full 6-level autonomy ladder, because `enes/autonomy_ladder.md` explicitly says the meta-loop is "a stateful traversal engine for thinking space, not just a runner that runs many MVL+ loops." **"Materialization"** mapped cleanly to a single milestone — the only one of the four that didn't span multiple commitments.

### What was considered and killed in critique

The critique discipline evaluated eight distinct candidate orderings against ten evaluation dimensions (two critical: identity-truth and dependency-respecting; five high; three medium-and-medium-high). Multi-axis adversarial prosecution was applied (dimension-level objections + user-perspective objections + specific failure-case scenarios + specification-gap probes). The verdicts:

**The linear family-tiered ordering** (the simplest candidate; just Family I → II → III → IV in strict sequence) was REFINEd-into-SUPPLEMENTARY. Defense: it respects the three ordering rules natively. Prosecution: structurally close to "phase 1 / phase 2 / etc." which is the feature-roadmap framing the user named as the anti-pattern. Resolution: keep it as the underlying family structure but don't make Family-X the primary headings; foreground the user-named four instead.

**The user-anchor narrative arc alone** (the four user-named words as primary section headings, period) was REFINEd. Defense: speaks the user's language. Prosecution: loses the foundation (D-M1+2+3) and the asymptote (D-M12+13) because neither is user-named. Resolution: add foundation prologue + asymptote epilogue so the broader pattern is covered without sacrificing user-vocabulary primacy.

**The three-parallel-tracks ordering** (cognitive ops / safety+quality / implementation as parallel tracks) was REFINEd-OR-SUPPLEMENTARY. Defense: structurally honest to the loose-coupling reality (the three capability axes ARE weakly coupled). Prosecution: the user asked for "a good sequential order"; parallel tracks aren't sequential. Resolution: useful as a supplementary visualization within the primary narrative ordering, not as the primary form.

**The asymptote-first reverse ordering** (start with D-M12/D-M13, trace backward) was DEFERRED. Defense: novel framing; makes the asymptote the organizing target. Prosecution: counter to natural reading habit; the user implicitly framed the question forward ("what milestones the project is moving through"); single-mechanism support only. Revival trigger: a re-framing conversation about end-goal-first orientation.

**The pure DAG (directed acyclic graph) ordering** (no linear sequence; dependency graph with suggested traversal) was DEFERRED-PLUS-RESEARCH-FRONTIER. Defense: most honest to the actual structure. Prosecution: hard to render in markdown; conflicts with the user's "sequential order" request. Revival trigger: a navigation graph UI exists or the project develops a graph-state schema (which is what Level 3 of the autonomy ladder requires).

**The 2D matrix (family × autonomy-level) ordering** was DEFERRED. Defense: visually distinct. Prosecution: presupposes the reader can navigate a 2D matrix; user asked for sequential order. Revival trigger: the deliverable includes a rendered diagram component.

**The substrate-takeover hedge-fork** (a forked ordering: pre-substrate-takeover main line + post-substrate-takeover variant) became a Research Frontier and is recorded in Open Questions below.

### Why the chosen primary candidate (the Full Assembly) survived

Three independent Domain Transfers (human developmental psychology + hardware/software stack layering + ecological succession) converged on the same developmental-stages framing, where each milestone is a stage with prerequisites + unlocked capabilities, and arrest at any stage is a legitimate end state. Three-mechanism convergence is the project's stated mark of structural insight (`enes/autonomy_ladder.md` invokes it explicitly). The developmental-stages framing, applied lightly within the user-anchor narrative arc, grounds the abstract autonomy ladder in a familiar cross-domain pattern without anthropomorphizing the harness.

The user-anchor narrative arc satisfies the user-anchor visibility constraint (the user's vocabulary IS the primary navigation). The foundation prologue and asymptote epilogue ensure the broader pattern (13 D-M milestones) is fully surfaced. The per-discipline-tagged Family III honors the non-uniformity reality (calibration accumulates per discipline, not per harness). The three operational-event milestones added to Family III (first Retrospective-RC cycle, first uncontested system-Selector decision, first Baldwin-cycle-closed spec refinement) give Family III's developmental progression concrete observable signatures rather than abstract substrate-completions. The supporting sections (load-bearing risk + where to read more) answer reader-questions without skewing into action-list framing.

The Full Assembly passed both critical dimensions (identity-truth + dependency-respecting) and all five high-weight dimensions (user-anchor fidelity + pattern breadth + deliverable shape + asymptote-orientation + frame regression resistance). The only boundary score was on elegance — the assembly has more components than the minimum-viable variant — but the complexity is functional: each component does discrete work the others can't (the narrative arc carries user vocabulary; the prologue/epilogue carry the broader pattern; the developmental framing grounds the autonomy ladder; the per-discipline tagging honors realism; the operational-event milestones make Family III observable; the supporting sections answer reader-questions). Dropping components would re-introduce dimension failures.

### What the inquiry's structure made possible

The inquiry ran the extended cognitive loop in strict order — Exploration mapped the territory (13 D-M milestone candidates surfaced; 11 confirmed-absent regions captured explicitly); Sensemaking committed the identity reframe and the four-family split through 8 perspectives applied to 7 ambiguities collapsed at HIGH confidence; Decomposition perceived the 7-piece coupling map with 10 interfaces and a 4-tier dependency order; Innovation produced 21 variations across all 7 mechanisms and surfaced 9 distinct candidate orderings plus 3 emergent combinations; Critique evaluated 8 candidates against 10 dimensions with multi-axis adversarial prosecution. The Full Assembly emerged because each pipeline stage's work compounded — the inquiry could not have committed this finding without all five stages running at full depth.

---

## Open Questions

### Monitoring

- **Per-discipline calibration accumulation rate.** Family III milestones (auto-navigation L1.5/L2, /intuit Phase B+, Retrospective RC maturity) are gated on per-discipline calibration thresholds (N≥30 per discipline for "well-calibrated" claims about /intuit; ≥10 navigation maps with selection-rationale for L1→L2). At the project's current inquiry rate (~50–100/year from inquiry-folder counts), some thresholds may be reachable in months, others in years. The actual rate is observable — track navigation-map count and selection-rationale capture rate over the next 6 months to project Family III timing.

- **Whether the L1 → L2 transition feels too restrictive.** The system-Selector at L2 is constrained to a "forward-only" subset of the Navigation 16-type taxonomy (DEEPEN, REFINE, DEVELOP, INVESTIGATE FRONTIER, PURSUE SEED), per `enes/autonomy_ladder.md` §5. REVISIT and other backward/sideways moves are added at L3. If the L2 system Selector frequently wants to REVISIT but can't, accelerate REVISIT to L2 with explicit Memory-state preconditions. Observable once L2 has run on ≥5 sequential chains.

### Blocked

- **The L4 MERGE protocol's Evaluator decision logic** (how per-head verdict and merge-recommendation are made when overlapping conclusions across heads have different reasoning paths). Cannot be specified without empirical multi-head examples; blocked on L3 producing ≥3 sequential chains first.

- **The L5 goal-formation source choice** — `enes/autonomy_ladder.md` §2 commits to cumulative-feedback driven goal-formation at L5, but the actual content of "accumulated Reflect signals + outcome history" cannot be assessed until ≥3 multi-head sessions exist showing what the cumulative feedback actually contains.

### Research Frontiers

- **Value inheritance at L4+.** When the system can modify its own specs including value-encoding parts, how do bootstrap-encoded human values persist across deep self-modification? `enes/desc.md` flags this as Open Question 1 and notes mainstream AI safety hasn't solved it either.

- **Level 3 custom intuition-space generation.** `/intuit`'s MVP performs brute-force structural transfer (Level 2 per the intuition ladder in `enes/desc.md`). A system that could generate a custom "Z-space" tailored to each problem's structure — solving where the problem's hard operation becomes easy, then transforming back — is Level 3. Currently the capability horizon; not yet buildable.

- **Modulator operationalization** (Mood, Arousal — primitives admitted but deferred). What substrate capability or external proxy would enable operationalization? Temperature/sampling parameters are a weak analog; clean operationalization is unclear.

- **Multi-user / collaborative meta-loop.** Out of scope for the current single-user project, but a "team axis" extends the 9-axis frame to 10 if collaboration becomes load-bearing later.

- **Substrate-takeover scenario.** If the LLM substrate gains native support for primitives Homegrown currently approximates externally (native intuition-similarity, native metacognition), the milestone ordering forks. Captured as a hedge variant in Critique; not part of the main line; revival when substrate releases announce native primitive support.

- **Silent primitive failure detection.** Invocation traces capture PRESENCE of primitive firing (evidence-linked). Detecting ABSENCE — a primitive that should have fired but didn't — is harder and is an open design.

### Refinement Triggers

- **The PLACEHOLDER thresholds in the autonomy ladder** (L2→L3: ≥5 chains with ≥80% system-Selector agreement; L4→L5: ≥10 multi-head sessions stable). These re-open when L2 and L4 ship and produce actual data. The placeholder values are explicit invitations to re-calibrate.

- **The "Memory advances alongside the consuming role" coupling rule** re-opens if Memory infrastructure work consistently lags role advancement (signal: roles wait on schema specs more than once).

- **The discrete-ladder framing** re-opens if multiple deployments diverge from the canonical path persistently — at which point the multi-axis gradient becomes the primary representation and the 6-level ladder is just a summary view.

- **The narrative-arc framing of this finding's deliverable** re-opens if a reader at the project owner's level reports the broader pattern is obscured by the user-vocabulary primacy. Trigger: explicit user feedback that the D-M structure feels under-treated.

- **The reframing of "self-maintenance" as four sub-substrates** re-opens if the operational reality reveals the four don't separate cleanly (e.g., the snapshot mechanism turns out to be operationally entangled with the canary infrastructure in a way that should collapse them into a single milestone).

---

## Source Input

<details>
<summary>Raw user input for this inquiry</summary>

```text
arch-small-summary  but dont care about devdocs folder and archive folders and thinking_disciplines folder

[the small_summary was produced as output of that command]

[then:]

/MVL+

The general shape

Not a web app, not a CLI tool in the usual sense, not a library, not an API. It is a prompt-engineering distribution: a set of disciplined markdown files (skill specs, protocols, framework references, a shared vocabulary contract) packaged with two install scripts that drop them into Claude Code's or Codex's skill folders, plus a "human notebook" (enes/) and a book scaffold (src/book/) that document the underlying theory and trajectory.

A useful one-line description: a structured-thinking framework you install into your AI assistant, plus the in-progress research effort to make that framework eventually drive itself.

i think this is so undertaking of the project. this project if you read README.md and enes/desc.md and enes/thinking_space_dynamics.md and enes/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md
has really good direction and ideas towards something unique


try to understand what this project is, endgoal (basically a thinking harness for AI models , when mounted it makes them extra smart, and also this harness is design such that it can run big complex tasks becasue it's capability istraversing thinking space, just like a human would )

and this project's meaningful milestones , self maintaince, auto navigation , meta loop, materilastions (not exactly these but what they mean)

understand these things and create a good sequential order,
```

</details>
