# Homegrown

**An attempt to ignite artificial consciousness by mimicking the structure of cognitive thinking.**

The bet behind this project: today's LLMs are already smart enough. More parameters and more training is one way reaching the singularity, another way is more ambigiuous appraoch which is what we follow here in this project. Where we entrust that consicussness is emergent behaviour of chained conginitive actions. And What's missing isn't intelligence. It's the **structure of thinking**: the loop that takes a single LLM call (one flash of intelligence) and chains it into something that understands, generates, evaluates, reflects, steers, and improves itself. Mind isn't a model. Mind is a **loop running on top of a model.**

Humans aren't conscious because our neurons are smarter than other animals'. We're conscious because our cognition runs in a particular self-aware, self-correcting, self-evolving loop. Reproduce the loop and consciousness — or something functionally indistinguishable from it — should follow.

## The two halves: ignition and loop

**Ignition** is the moment the loop starts running on its own — the first cycle that doesn't need a human to type the next command. To get there, the loop has to be able to tell its own good output from its own bad output (quality awareness), notice when something's worth attending to (real-time hunch / intuition), and encode what it learned back into its own architecture so the next cycle starts smarter (Baldwin effect at the spec level).

**The loop**, once ignited, is a self-running cognitive cycle: sensemaking → innovation → critique → reflection → navigation → next iteration. Long tasks become tractable because errors don't compound — each step is gated by the next. Self-improvement is the system using its own disciplines on its own discipline specs. Autonomy increases over time as the system's quality awareness becomes reliable enough to be trusted (a measured graduated ladder, not a binary switch).

The endpoint isn't another coding assistant. It's a system that handles year-long tasks, proposes its own architectural improvements, runs parallel cognitive loops with cross-comparison, and produces — observably — what humans currently provide for AI: spontaneous attention, intrinsic valuation, real-time steering, intrinsic curiosity. Whether that constitutes "consciousness" in any philosophical sense is undefined. The test is capability, not phenomenology. We're aiming at the capability.

## Where this currently is

The full self-evolving loop doesn't run yet. What does run, today, is the **disciplines** — installable slash commands that formalize each cognitive operation as a domain-agnostic methodology. They're the building blocks the autonomous loop will eventually compose on its own.

Right now the human is the loop. You install the disciplines, and you drive them: pipe sensemaking's output into innovation, innovation's output into critique, save the results, run reflection at the end, navigate to the next iteration. It's manual but it works, and every run produces telemetry that's a step toward the loop being able to drive itself.

This means **the disciplines are useful even outside the consciousness-loop project**. They're domain-agnostic methodologies for thinking — applicable to any codebase, any product decision, any research question, any AI assistant (Claude Code, Codex, Cursor). You can use them as standalone tools today and come along for the larger trajectory whenever you want.

## Install

```bash
# Claude Code
curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/install_for_claude.sh | bash

# Codex
curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/install_for_codex.sh | bash
```

Claude installs to `~/.claude/skills/` as the agent-skills format (each discipline becomes `~/.claude/skills/<name>/SKILL.md`, invoked as `/<name>`). Loop runners (`/MVL`, `/MVL+`) load supporting protocols from `~/.claude/skills/protocols/`. Codex always installs globally to `~/.codex/skills/` (invoke with `$skill-name`). Cursor: `mkdir -p ~/.cursor/skills && cp -r ~/.claude/skills/* ~/.cursor/skills/` (verify Cursor supports the skills format before relying on this).

The scripts are idempotent — re-run them to update.

## The disciplines

**Input shaping**
- `/elaborate` — restructure messy input into clear, scannable form

**Core thinking disciplines** (the SIC cycle)
- `/sense-making` — ambiguity → stable understanding (six progressive Sense Versions)
- `/innovate` — produce novel ideas via 7 mechanisms (4 generators + 3 framers)
- `/td-critique` — adversarial evaluation across a fitness landscape (SURVIVE / REFINE / KILL)

**Extended thinking disciplines**
- `/explore` — map unknown territory via scan-signal-probe cycles with confidence levels
- `/decompose` — perceive coupling topology, partition into a question tree
- `/comprehend` — build predictive models of opaque artifacts (five Comprehension Versions)

**Boundary disciplines** (between iterations)
- `/reflect` — observe how the run performed; produce process lessons
- `/navigation` — enumerate every possible next direction (15-type taxonomy)
- `/wayfinding` — pick a single steering move (superseded by `/navigation`)

**Loop runners**
- `/inquiry` — classify a problem, configure the pipeline, track state across sessions
- `/MVL` — minimum viable loop: Sensemaking → Innovation → Critique
- `/MVL+` — extended cognitive loop: Exploration → Sensemaking → Decomposition → Innovation → Critique

## Why this might work

The architectural argument lives across these files:

- [`thinking_disciplines/minimum_viable_loop.md`](thinking_disciplines/minimum_viable_loop.md) — what "ignition" actually means, the two concrete fixes that turn the manual loop into a self-running one, and the growth phases past it.
- [`enes/desc.md`](enes/desc.md) — the autonomous-consciousness north star: graduated autonomy ladder, Baldwin cycles, observable indicators.
- [`enes/thinking_space_dynamics.md`](enes/thinking_space_dynamics.md) — the three-layer architecture of quality awareness (structural / real-time hunch / retrospective) and the typed primitive set the disciplines compose.
- [`enes/intuit.md`](enes/intuit.md) — the Predictive RC (real-time hunch layer); the substrate the Baldwin loop calibrates against.
- [`thinking_disciplines/alignment_theory.md`](thinking_disciplines/alignment_theory.md) — six layers of alignment × four pillars, and why the alignment chain and the cognitive loop are structurally identical.
- [`src/book/chapter_0/homegrown_skills.md`](src/book/chapter_0/homegrown_skills.md) — per-command reference.

## Honest framing

This may fail. The bet that loop-structure matters more than raw model intelligence is testable, not proven. The path from "human drives every command" to "loop runs autonomously" has known gaps (regression detection, real-time hunch calibration, value persistence under self-modification). The aspiration is named on purpose — it tells you what we're aiming at and what would count as success. The disciplines are useful regardless. The loop is the goal.
