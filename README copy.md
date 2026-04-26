# Homegrown

Installable slash commands that turn an AI assistant from a one-shot prompt-responder into something that **thinks in a loop** — sensemaking, generating, critiquing, reflecting, and steering — across long tasks.

The project's bet is simple: today's LLMs are already smart enough. What's missing isn't more intelligence, it's the **structure of thinking**. Homegrown installs that structure as practiced disciplines — domain-agnostic methodologies for the cognitive operations humans already do (understand, generate, evaluate, reflect, navigate). When the AI runs them in sequence, output stops drifting between brilliant and shallow and starts compounding.

## How this differs from typical AI usage

| Typical AI usage | Homegrown |
|---|---|
| Single mode: generate code / generate text | Multi-mode: explore, sense-make, innovate, critique, reflect, navigate |
| One-shot prompt → output | Looped: each step's output is the next step's input |
| Quality is whatever the prompt happens to elicit | Quality is gated — every discipline reports telemetry; the loop catches thin runs |
| No memory of how the work went, only what was produced | Reflection extracts process lessons; navigation maps next directions |
| Human reviews each output | Long-running tasks where the loop self-corrects between human checkpoints |
| Compounds quantitatively (more tokens) | Compounds qualitatively (each cycle's understanding feeds the next) |

## Where this is heading

The endpoint isn't another coding assistant. It's a **self-improving cognitive system** — one that:

- Handles long tasks (multi-step, multi-day) without compounding small errors into confidently-wrong systems
- Detects its own quality drops and flags them before propagation (regression detection)
- Applies its own disciplines **to itself** — using sensemaking + innovation + critique to improve its own discipline specs (the Baldwin loop)
- Progressively reduces its dependence on a human reviewer through a graduated autonomy model (Level 0: human reviews everything → Level 4+: human observes)
- Eventually produces, observably, the things humans currently provide for it: spontaneous attention, intrinsic valuation, real-time steering

This is aspirational. The starting point is much smaller: a quality-gated manual loop that a human drives one command at a time. Everything else emerges from running it.

## Install

```bash
# Claude Code
curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/commands/install_for_claude.sh | bash

# Codex
curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/commands/install_for_codex.sh | bash
```

Claude installs to `~/.claude/commands/` (invoke with `/skill-name`). Codex installs to `~/.codex/skills/` (invoke with `$skill-name`). Cursor: copy `~/.claude/commands/*.md` into `~/.cursor/commands/`.

## The disciplines

**Input shaping**
- `/elaborate` — restructure messy input into clear, scannable form

**Core thinking disciplines** (the SIC cycle)
- `/sense-making` — turn ambiguity into stable understanding (SV1 → SV6)
- `/innovate` — produce novel ideas via 7 mechanisms (4 generators + 3 framers)
- `/td-critique` — adversarial evaluation across a fitness landscape (SURVIVE / REFINE / KILL)

**Extended thinking disciplines**
- `/explore` — map unknown territory via scan-signal-probe cycles
- `/decompose` — perceive coupling topology and partition into a question tree
- `/comprehend` — build internal working models with predictive power (CV1 → CV5)

**Boundary disciplines** (between loop iterations)
- `/reflect` — observe how the run performed; produce process lessons
- `/navigation` — enumerate every possible next direction (15-type taxonomy)
- `/wayfinding` — pick a single steering move (superseded by `/navigation`)

**Loop runners**
- `/inquiry` — classifies a problem, picks the pipeline, tracks state
- `/MVL` — minimum viable loop: S → I → C
- `/MVL+` — extended cognitive loop: E → S → D → I → C

**Navigation**
- `/roadmap` — build a node-by-node map from current state to goal state

## Full docs

See [`src/book/chapter_0/homegrown_skills.md`](src/book/chapter_0/homegrown_skills.md) for per-command details, and the [`thinking_disciplines/`](thinking_disciplines/) folder for the underlying methodology specs.
