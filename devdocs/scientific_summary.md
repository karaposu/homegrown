# Scientific Summary of the Homegrown System

## Short Answer

This project is trying to build a methodology layer for AI reasoning: a set of explicit, reusable cognitive procedures that make an AI assistant reason less like a one-shot answer generator and more like a disciplined investigator.

The central hypothesis is that many failures in AI-assisted work are not only model-capability failures. They are process failures: insufficient exploration, premature sensemaking, weak decomposition, shallow novelty generation, bad evaluation criteria, no memory across iterations, no reflection on process quality, and no explicit navigation after an answer. The project tries to reduce those failures by turning reasoning into named disciplines with inputs, outputs, failure modes, telemetry, and file-backed state.

My honest opinion: the idea is unusually coherent and more ambitious than a prompt library. It is closer to an experimental cognitive operating system for AI agents. But it is still mostly a textual protocol system, not yet a validated scientific system. The concepts are strong; the empirical evidence and executable enforcement are thin.

## What Is Being Built

The active `homegrown/` folder defines a family of "thinking disciplines." Each discipline is a reusable cognitive operation:

- `explore` maps unknown territory before interpretation.
- `sense-making` turns ambiguity into a stable conceptual model.
- `decompose` breaks a complex whole into independently tractable sub-questions.
- `comprehend` builds tested working models of opaque artifacts.
- `innovate` generates and tests novel candidates.
- `td-critique` evaluates candidates against problem-derived dimensions.
- `reflect` examines how a completed thinking process performed.
- `navigation` enumerates possible next directions after a cycle.

The loop runners compose these disciplines:

- `MVL` runs Sensemaking -> Innovation -> Critique.
- `MVL+` runs Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique.

The system persists work in `devdocs/inquiries/<name>/`. Each inquiry has:

- `_branch.md` for the question, goal, and scope check.
- `_state.md` for pipeline progress, iteration, status, and history.
- discipline outputs such as `sensemaking.md`, `innovation.md`, and `critique.md`.
- `finding.md` as the final synthesized answer.
- `docarchive/` for archived intermediate outputs after conclusion.

So the project is not merely defining prompts. It is defining a file-backed reasoning workflow where an AI assistant produces durable artifacts, resumes across sessions, and can theoretically learn from process failures.

## The Core Hypothesis

The strongest hypothesis is:

> AI reasoning quality can be improved by decomposing "thinking" into explicit cognitive operations, giving each operation its own procedure, failure modes, coverage strategy, telemetry, and artifact format, then composing those operations into loops with state and reflection.

This is different from just asking the model to "think step by step." The project assumes that "thinking" is not one generic activity. It treats exploration, sensemaking, decomposition, comprehension, innovation, critique, reflection, and navigation as different operations with different success conditions.

A second hypothesis is:

> When model intelligence becomes less differentiating, structured methodology becomes a major source of advantage.

This appears most clearly in the innovation discipline, which explicitly treats human intuition as the source of direction, valuation, and motivation, while the AI supplies systematic mechanism coverage. The project is trying to capture and operationalize that methodology advantage.

## What Is Unique About The Approach

### 1. It treats cognition as modular, not monolithic

Most prompt systems bundle everything into one instruction: understand the problem, generate ideas, evaluate them, produce the answer. This project separates those operations.

The separation is meaningful. Exploration is not sensemaking. Sensemaking is not comprehension. Innovation is not critique. Reflection is not navigation. Each discipline has its own definition, process model, failure modes, and output expectations.

That is the project's most important conceptual move.

### 2. It uses expansion and contraction as a reasoning architecture

The loop has a recognizable cognitive rhythm:

- Exploration expands the known territory.
- Sensemaking stabilizes meaning.
- Decomposition partitions complexity.
- Innovation expands possible solutions.
- Critique contracts the solution space.
- Conclude turns the surviving result into a durable finding.
- Reflect learns from the process.
- Navigation opens the next decision frontier.

This is a stronger architecture than a linear "analyze -> answer" prompt. It is closer to an iterative research program.

### 3. It makes failure modes first-class

Every major discipline names predictable ways it can fail: premature stabilization, false confidence, hidden coupling, surface fluency, survival bias, rubber-stamping, false convergence, content reflection instead of process reflection, premature filtering, and so on.

This matters because the project is not just telling the AI what to do. It is telling the AI what kind of self-deception to watch for.

### 4. It uses file-backed artifacts as cognitive memory

The inquiry folder is a simple but powerful idea. It turns reasoning from transient conversation into an inspectable record. That gives the system a path toward:

- cross-session continuity,
- auditability,
- reusable findings,
- reflection on previous runs,
- navigation across multiple branches.

This is one of the most practical parts of the design.

### 5. It separates process reflection from content critique

`reflect` is not another critique of the answer. It is a critique of the process that produced the answer. This is important because a system cannot improve its methodology if it only evaluates final answers.

Reflection asks where the human had to intervene, where later steps discovered things earlier steps should have found, and whether the answer drifted away from the goal.

### 6. It treats next-step selection as a map, not a single answer

`navigation` absorbed the older one-direction "wayfinding" idea and now enumerates possible next directions. This is a notable evolution. Instead of pretending there is always one best next move, the system maps the decision space and separates enumeration from selection.

That is a more mature agent architecture, especially if multiple inquiry branches or multiple agents are expected later.

## Where The Project Is Trying To Evolve

At this stage, the project is evolving from a set of individual thinking prompts into a protocolized agent workflow system.

The direction is visible in several design moves:

- `MVL+` adds exploration and decomposition before the classic SIC loop, which means the project is moving from "answer a question" toward "map and structure a problem before solving it."
- `resume.md` and `conclude.md` pull shared behavior out of the loop runners, which suggests movement toward reusable protocol modules.
- telemetry verdicts such as `PROCEED`, `FLAG`, and `RE-RUN` suggest an emerging routing system where disciplines self-assess and protocols route based on those assessments.
- `navigation` distinguishes auto-derivable next steps from human-judgment next steps, which is basically an autonomy boundary.
- `reflect` introduces process learning, which is the seed of long-term methodology improvement.

The likely next form of the project is a lightweight cognitive runtime: still Markdown-native, but with more structured state, validation, routing, and perhaps multi-branch inquiry management.

## What Is Scientifically Strong

The strongest scientific feature is operational decomposition. The project does not merely name vague virtues like "be thorough" or "be creative." It breaks them into operations:

- exploration uses scan, signal detection, probing, frontier tracking, and confidence mapping.
- sensemaking uses anchors, perspective checking, ambiguity collapse, and degrees-of-freedom reduction.
- comprehension uses explicit predictions, perturbation testing, and adversarial model-breaking.
- innovation uses seven named generation and framing mechanisms plus survival tests.
- critique uses extracted dimensions, a fitness landscape, prosecution, defense, collision, and verdicts.

These mechanisms are concrete enough to be tested. For example, one could compare outputs with and without exploration, with and without adversarial critique, or with and without reflection.

The second strong feature is that each discipline includes failure modes. A real methodology needs a theory of failure, not only a theory of success.

The third strong feature is the insistence on artifacts. Scientific work improves when observations, hypotheses, decisions, and failures are written down in stable forms.

## What Is Scientifically Weak

The project is not yet scientific in the strict sense because it lacks systematic empirical validation.

It proposes many plausible mechanisms, but it does not yet show:

- controlled comparisons against simpler prompting,
- measurable improvements in answer quality,
- reliability across domains,
- inter-rater agreement on outputs,
- predictive validity of telemetry,
- evidence that the named failure modes are detected consistently,
- evidence that the loop converges better than ad hoc reasoning.

The terminology is sophisticated, but without measurement it can become self-confirming. Several files explicitly recognize self-reference risk, especially when a discipline evaluates another discipline that shares its vocabulary. That concern is real.

The system also depends heavily on assistant compliance. The "runtime" is mostly prose. A model is instructed to read references, follow processes, write files, run checks, and update state. Some of this is not enforced by code. The missing `tools/structural_check.sh` reference is a concrete example: the architecture wants validation, but the local implementation does not currently provide the tool.

## Honest Opinion

The project is conceptually strong and practically promising. It has a real thesis: better AI work may come less from asking for better answers and more from designing better cognitive process around the model.

The most original part is not any single discipline. It is the full stack:

1. define cognitive operations,
2. give each operation failure modes and coverage rules,
3. compose operations into loops,
4. persist intermediate artifacts,
5. conclude into a durable finding,
6. reflect on process quality,
7. navigate future directions.

That stack is unusual. It is more serious than normal prompt engineering.

The risk is that the system may become over-procedural before it becomes empirically grounded. It has many named concepts, and many of them sound convincing. But a methodology becomes real when it reliably improves outcomes under test, not when its internal vocabulary becomes elaborate.

The next scientific step should not be adding more disciplines. It should be validation.

## What Should Be Tested Next

The project should define a small evaluation program:

1. Pick 10 to 20 real tasks across code understanding, design, planning, and research.
2. Run each task with a normal strong assistant prompt.
3. Run the same task with `MVL` or `MVL+`.
4. Compare final answer quality, error rate, missing considerations, usefulness, and time cost.
5. Have at least one human judge blind to which method produced which answer.
6. Track whether telemetry warnings predict real output weaknesses.
7. Track whether reflection produces changes that improve later runs.

The most important measurement is not "does the output look structured?" The important measurement is whether the structure changes decisions, reduces mistakes, surfaces hidden assumptions, or improves downstream action.

## Likely Evolution Path

The healthy evolution path is:

1. Stabilize the artifact format.
2. Make `_state.md` more machine-readable.
3. Implement or remove the missing structural check tool.
4. Standardize telemetry across all disciplines.
5. Add a small validation harness.
6. Use reflection findings to revise discipline specs.
7. Only then expand autonomy.

The unhealthy evolution path is:

1. keep adding concepts,
2. keep adding new disciplines,
3. keep adding taxonomies,
4. never test whether the loop beats simpler workflows.

The project is currently near the fork between those paths.

## Bottom Line

This is an attempt to build a disciplined, file-backed cognitive methodology for AI agents. Its unique approach is to model reasoning as modular operations with explicit failure modes, coverage criteria, and routing artifacts. Its strongest hypothesis is that AI performance can be materially improved by process architecture around the model, not only by model capability.

My honest assessment: the idea is worth pursuing. It is internally coherent, genuinely differentiated, and pointed at an important problem. But it is still at the protocol-specification stage. To become scientifically credible, it needs empirical evaluation, stricter artifact schemas, real validation tooling, and fewer claims that rely only on the system's own vocabulary.
