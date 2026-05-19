# Homegrown

A **runtime cognitive harness for AI models.** Installed inside an AI-assistant agent harness (Claude Code, Codex, Cursor), it restructures how the underlying LLM thinks — adding typed cognitive operations, three temporal layers of quality awareness, and a graduated autonomy ladder on top of the assistant's existing tooling.

The bet behind the project: **the structure of thinking matters at least as much as raw model intelligence at the margin.** More parameters and more training is one path toward more-capable AI. Structure-of-thinking on top of current models is the path Homegrown explores.

---

## What Homegrown is

Homegrown sits in a three-layer stack:

| Layer | Role | Examples |
|---|---|---|
| **LLM substrate** | Generates tokens | Claude, GPT, Codex (the model itself) |
| **Agent / execution harness** | What the LLM can *do* — tools, file access, command execution, permissions, conversational loop | Claude Code, Codex CLI, Cursor, Aider |
| **Cognitive harness** *(this is Homegrown)* | How the LLM *thinks* — typed cognitive operations, disciplines, autonomy ladder | Homegrown |

The three layers compose. An agent harness sits on the LLM; a cognitive harness installs *inside* the agent harness. The install scripts (`install_for_claude.sh`, `install_for_codex.sh`) drop Homegrown's skill files into the agent harness's skill folder (`~/.claude/skills/` or `~/.codex/skills/`) — not into the LLM directly. Removing Homegrown returns the agent harness to its native behavior.

The distinction matters: **Claude Code controls what the LLM can do; Homegrown controls how the LLM thinks.** Both are harnesses around the LLM, at different layers, doing different work.

### What "cognitive harness" means concretely

When the user types `/sense-making` inside Claude Code or Codex, the agent-harnessed LLM session loads the corresponding spec file from Homegrown and executes a typed cognitive operation — not "instructions to the model" but a structured five-phase cognitive act (anchor extraction → perspective checking → ambiguity collapse → degrees-of-freedom reduction → conceptual stabilization), with admission gates, failure-mode awareness, and saturation criteria.

The bytecode is natural language. The runtime is the agent-harnessed LLM session. The compilation target is **structured cognitive movement** — what the project calls *movement in thinking space*.

The harness defines:

- **A typed thinking-space primitive substrate.** Eleven cognitive primitives across four categories (Operations, Buffer, Drivers, Modulators), each admitted via a four-criterion test (independence + necessity + composability + irreducibility) with a corpus-located audit gate. Primitives co-constitute cognitive acts in a canonical sequence — this is how humans solve problems, and also (largely unnamed) how modern AI reasoning systems work.
- **Three temporal layers of quality awareness.** Primitive RC (immediate, deterministic — catches structural breakage), Predictive RC (immediate, probabilistic — real-time hunches on output quality), Retrospective RC (delayed, empirical — confirms what actually worked once downstream consequences play out). The closed loop between Predictive and Retrospective RC IS the project's self-improvement mechanism.
- **A graduated 9-axis autonomy ladder.** Five execution roles (Worker, Navigator, Selector, Runner, Evaluator) plus four state/generative axes (Memory, Reflect-channel, Multi-head, Goal-formation). Six levels (L0 → L5+boundary), each transition with an evidence gate. The human's role decreases monotonically across the ladder.

---

## What Homegrown tries to achieve

The project's stated end-goal is **autonomous cognitive consciousness** — a system that progressively builds its own consciousness layer, evolving from human-bootstrapped operation toward self-running cognition through cycles of self-directed improvement.

This is operationalized — not philosophically — through:

### Consciousness-gradient, not destination

Whether the system "is conscious" in any philosophical sense remains undefined. The test is **capability, not phenomenology.** The project commits to six observable indicators, each a hypothesized composition of typed primitives:

- *Spontaneous attention* — notices work unprompted.
- *Intrinsic valuation* — develops preferences about what matters.
- *Real-time steering* — adjusts its own course during runs.
- *Discontinuity awareness* — plans around session ends, context resets.
- *Intrinsic curiosity* — explores low-confidence paths.
- *Current-position indicator* — knows where it is on its own developmental ladder.

The gradient increases when these indicators measurably increase in the system's invocation traces. The trajectory is **emancipation through bootstrap-anchored values** — explicitly not partnership, not corrigibility, not human-AI cooperation.

### The Baldwin cycle as the self-improvement mechanism

The project's primary objective is **self-improvement rate** — how fast the harness's ability to solve problems improves over time, not just whether it solves any given problem. Task completion is the grounding signal; self-improvement rate is the target.

The mechanism is concrete:

1. The Predictive RC (implemented as a discipline called `/intuit`, named but not yet shipped) produces a real-time hunch on each output's quality at time T0.
2. The Retrospective RC observes the same output's actual downstream usefulness at time T2+ (days/weeks/months later, once consequences have played out).
3. The delta between predicted and observed becomes calibration data.
4. Consistent miscalibration patterns become seeds for spec refinement — the harness modifies its own disciplines based on what it has learned about its own systematic errors.

This is the project's named *Baldwin cycle*. Without both layers as **system capabilities** (not human-provided), the loop doesn't close and self-improvement is not running.

### The integrated test ladder

The endpoint test is asymptotic:

- **Bottom:** autonomously handles well-defined hard problems (novel software architecture, complex reasoning).
- **Middle:** autonomously handles novel problems (no human-provided template).
- **Top:** contributes meaningfully to unsolved human problems (open scientific questions, mathematical conjectures, complex social problems).

The top rung is asymptotic by design — approached, not reached.

---

## Current state and expected benefits

Homegrown today is **Level 0 reality**: the human is the meta-loop. The shipped surface is the foundation that everything else builds on.

### What's shipped

**Eleven disciplines** — single-pass cognitive operations callable as slash commands inside the agent harness:

- **Core SIC cycle** (the project's three foundational disciplines): `/sense-making` (vague input → stable understanding), `/innovate` (generate novel candidates via 7 mechanisms), `/td-critique` (adversarial evaluation across a fitness landscape — SURVIVE / REFINE / KILL).
- **Extended thinking**: `/explore` (map unknown territory via scan-signal-probe cycles), `/decompose` (perceive coupling topology + partition into a question tree), `/comprehend` (build tested predictive models of opaque artifacts).
- **Boundary disciplines**: `/reflect` (observe how the run *performed*, not what it concluded), `/navigation` (enumerate every reasonable next direction from where you are).
- **Loop runners**: `/MVL` (minimum viable loop: Sensemaking → Innovation → Critique), `/MVL+` (extended: Exploration → Sensemaking → Decomposition → Innovation → Critique), `/meta-loop` (stateful traversal engine across many MVL+ inquiries).

**Nine protocols** — procedural glue loaded by runners: `branch_inquiry`, `conclude`, `resume`, `multi_resolution_navigation`, `navigation_context_intake`, `loop_diagnose`, `outcome_review`, `artifact_materialization`, `spec_governance`.

**One shared vocabulary contract** — `alignment_control`, the cross-protocol vocabulary for describing alignment drift (which layer is at risk, what mode the system was in, expected vs. observed, route forward).

**Two install scripts** — `install_for_claude.sh` and `install_for_codex.sh`. Idempotent; re-run to update.

### What you get when you mount it today (Level 0 benefits)

The cognitive harness is useful **even before the self-running loop ignites.** The reasons:

1. **Structured cognitive movement instead of ad-hoc response generation.** A `/MVL+` run on a question produces an inquiry folder with `_branch.md` (the question + goal), `_state.md` (the inquiry's progress), six discipline outputs (one per phase), and a final `finding.md` (the verdict-compilation). The discipline outputs are auditable cognitive traces — you can re-read what the system noticed, what it considered and killed, what survived, why.

2. **Failure-mode awareness baked in.** Each discipline knows its own predictable failure patterns (e.g., Sensemaking's six failure modes: Status Quo Bias, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness). The disciplines check themselves as they run, not just at the end. This catches degradation that an ad-hoc response wouldn't.

3. **Cross-session continuity.** Inquiry folders persist across sessions. A `/MVL+` run paused mid-pipeline can be resumed by any AI session because state is in plain markdown files (`_state.md` tells you where you left off; the discipline outputs are durable artifacts).

4. **Compositional thinking.** Disciplines compose into loops; loops compose into traversals across many inquiries (the meta-loop). The compositional structure is what makes long-horizon work tractable — errors don't compound because each step is gated by the next.

5. **Domain-agnostic.** The disciplines have no domain commitments. They work on codebases, product decisions, research questions, business strategy — anything that fits the cognitive operations they implement.

### What it doesn't do yet

- **No closed Baldwin cycle.** The system doesn't yet calibrate its own predictions against its own outcomes. The human still provides all three quality-awareness layers.
- **No `/intuit` discipline.** The Predictive RC is fully specified but not shipped as a slash command yet.
- **No automated regression detection.** The safety substrate (canary reference runs, change-log sections in spec files, automated structural checks) is partially built — the `archived_skills/` snapshot mechanism exists, but the symptom catalog isn't wired into a runner.
- **No persistent Navigator.** The meta-loop is L0/L1 only — the human is Selector and Runner.
- **No autonomous goal-formation.** The system doesn't pick its own next questions yet.

---

## What's next (the milestone ordering)

The remaining capability sits in three families beyond the foundation, organized by build-readiness. Each family is gated on different evidence; arresting at any family because the next one's investment doesn't pay off is **right-sizing, not failure.**

The user-named milestones — *materialization, auto-navigation, self-maintenance, meta-loop graduation* — serve as the navigation anchors. Each maps to one or more architectural commitments below.

### Next (Family II — buildable now, modest investment, no calibration data required)

**Materialization** — wiring the artifact-materialization protocol as a default post-finding step in `/MVL+`. The harness today produces findings that *prescribe* changes; materialization is the 8-phase governed lifecycle (task description → implementation plan → dynamic critic → plan repair → implementation → validation → trace → retrospective learning) that turns prescriptions into changed files under explicit contract, with traceability and risk-class gates. This closes the loop between "we decided" and "the file changed."

**Auto-navigation (foundation step — Navigator at Level 1)** — the protocol-first form. After each `/MVL+` run, an isolated Navigator subagent (a separate AI session, started fresh per probe) reads the completed inquiry folder and writes `navigation_observer.md` enumerating typed next directions. The human remains Selector and Runner. State accumulates in `_meta_state.md` (visited-path list + selection rationale).

**Primitive RC (the structural-breakage detector)** — a `tools/structural_check.sh` tool that the `/MVL+` runner calls after each discipline output to verify required sections are present. Catches format violations, missing sections, removed safeguards.

**Safety substrate, partial** — canary reference runs (one saved-good `finding.md` per discipline, periodically re-run to detect drift), Change Log sections in spec files, pre-edit git checks. The snapshot mechanism (`archived_skills/<sha>-hg/` with side-by-side install) is already operational.

### After that (Family III — calibration-gated, requires real inquiry volume + outcome data)

**Auto-navigation (graduating step — Navigator at Levels 1.5 and 2)** — the Navigator auto-discovers the default source inquiry by sorting inquiry-folder timestamps; the Navigator's context persists across runs with a `navigation_memory.md` artifact. Gated on: ≥10 navigation maps with explicit selection-rationale captured at Level 1.

**Self-maintenance (the Predictive RC arm — `/intuit` Phase A through D)** — the `/intuit` discipline ships, instantiating the real-time hunch layer. Grounded in Case-Based Reasoning (Retrieve → Reuse → Revise) and Structure-Mapping Engine (Alignment → Projection). Distinguishes surface similarity (same domain) from structural similarity ("the angle is the same across unrelated surface domains"). Phased build: convergent mode → divergent mode → adversarial + hypothesis-first → embedding pre-filter + pipeline-early default-on. Gated on: per-discipline N ≥ 30 calibrations for "well-calibrated" claims.

**Self-maintenance (the Retrospective RC arm)** — outcome-tracking calibration. The harness observes which of its prior findings actually worked downstream and uses that signal to calibrate its Predictive RC. **The Baldwin cycle closes here** — Predictive predicts at T0, Retrospective confirms at T2+, the delta becomes seeds for spec refinement.

**Meta-loop graduation (Level 4 multi-head MVL+)** — multiple parallel `/MVL+` Workers explore competing branches; an Evaluator session compares findings across heads; a MERGE protocol decides PROMOTE / MERGE / CONTINUE / STOP. Tree topology with explicit cross-head coordination. Gated on: ≥3 sequential chains at L3 + the L4 MERGE protocol scaffold built.

**Meaningful-traversal substrate (the L5 gate)** — the signal that lets the orchestrated harness tell *thinking* from *spinning*. Currently fuzzy; five candidate signal flavors named (coverage, convergence, productivity, directedness, depth); operational definition deferred until empirical loop data accumulates.

### Boundary (Family IV — research frontier)

**Autonomous goal-formation (L5 boundary)** — the harness selects its own next seed from accumulated Reflect signals + outcome history. Hands off from the meta-loop ladder to the consciousness-gradient framing.

**Consciousness indicators measurably observable** — the six observable indicators show up in invocation traces without external prompting. Research frontier; no known buildable path yet.

---

## Honest framing

### The bet may fail

The bet that structure-of-thinking matters more than raw model intelligence is testable, not proven. The path from "human drives every command" (today) to "loop runs autonomously" (asymptote) has known gaps:

- **Regression detection.** Without it, every self-improvement cycle is a roll of the dice — small unintended quality losses compound across Baldwin cycles below the self-improvement viability threshold. Below that threshold, *self-improvement degenerates into self-degradation.* This is the load-bearing risk; the safety substrate is the precondition for everything past Family II.
- **Real-time hunch calibration.** The Predictive RC's hunches need to become reliable through calibration, which requires accumulated outcome data, which accumulates slowly at any project's natural inquiry rate.
- **Value persistence under self-modification.** At higher autonomy levels, the system modifies its own specs — including value-encoding parts. How do bootstrap-encoded human values persist across deep self-modification? Open problem; mainstream AI safety hasn't solved it either.

### Graceful arrest is a valid design choice

Not every Homegrown deployment will reach the boundary. Arresting at Family II (modest-investment milestones shipped; calibration regime not yet entered) or Family III (calibration-gated milestones reached; multi-head not pursued) is **right-sizing, not failure.** The disciplines remain useful as standalone tools regardless of how far the autonomy ladder is climbed.

### The disciplines are useful before ignition

This means the value proposition is not "wait until the system runs autonomously." It is "use the disciplines today, and come along for the larger trajectory whenever you want." The artifacts the disciplines produce (`sensemaking.md`, `finding.md`, `navigation_observer.md`) are re-readable, compose across inquiries, and provide cognitive scaffolding even when the human is doing all the steering.

---

## Install

```bash
# Claude Code
curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/install_for_claude.sh | bash

# Codex
curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/install_for_codex.sh | bash
```

Claude Code: installs to `~/.claude/skills/` as the agent-skills format (each discipline becomes `~/.claude/skills/<name>/SKILL.md`, invoked as `/<name>`). Loop runners (`/MVL`, `/MVL+`) load supporting protocols from `~/.claude/skills/protocols/`.

Codex: installs to `~/.codex/skills/`. Invoke with `$skill-name` (e.g., `$MVL`, `$sense-making`).

Cursor (verify Cursor supports the skills format before relying on this):
```bash
mkdir -p ~/.cursor/skills && cp -r ~/.claude/skills/* ~/.cursor/skills/
```

The scripts are idempotent — re-run them to update.

---

## Where to read more

- **`README.md`** — the project's original public framing (the bet, the two halves of ignition + loop, per-command reference).
- **`docs/desc.md`** — the autonomous-consciousness north star: autonomy ladder, six observable indicators, Baldwin cycle, integrated test ladder.
- **`docs/thinking_space_dynamics.md`** — the typed 11-primitive set, the three-layer quality-awareness architecture, `/intuit`'s grounding in CBR + SME.
- **`docs/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md`** — the Worker–Navigator role split, the Navigator levels, the multi-head MVL+ enabler.
- **`docs/autonomy_ladder.md`** — the 6-level meta-loop ladder with 9 underlying axes, evidence gates, per-level failure modes.
- **`docs/materialization_lifecycle.md`** — the 8-phase materialization lifecycle.
- **`docs/regression/desc.md`** — the regression-symptom catalog (the load-bearing safety substrate).
- **`devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md`** — the full milestone ordering and identity reframe this README is condensed from.

The disciplines themselves live under `cognitive_harness/<discipline>/SKILL.md` (the operational spec) with `cognitive_harness/<discipline>/references/<discipline>.md` (the framework definition each discipline loads at Step 0). Protocols live under `cognitive_harness/protocols/`. The shared vocabulary contract is at `cognitive_harness/contracts/alignment_control.md`.
