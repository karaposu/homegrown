---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: The Elephant on the Path to Homegrown's End-Goal

## Question

The user asked: *"What is the one elephant in the room thing this project misses? And if it is solved, everything towards endgame will be a lot easier?"*

Restated for this inquiry: **What is the single biggest missing piece in Homegrown such that, if solved, the project's path to its end-goal (autonomous cognitive consciousness via the Baldwin self-improvement cycle and the autonomy ladder, as described in `README2.md` and `docs/desc.md`) would become substantially easier?**

The user's goal: a named candidate for the elephant with comparative reasoning showing why it wins on leverage — actionable enough that the user can either accept it as a directional commitment or push back with a specific alternative.

---

## Finding Summary

- **The unconditional answer to "what's the elephant?" is a project-level meta-decision the project's own documentation has not surfaced** — specifically, three unfaced choices that determine whether the elephant has any meaning at all: (a) does the project commit to autonomy Level 4+ as the end-goal, or accept "graceful arrest" at Level 3 (the README's own permitted alternative); (b) is the Baldwin self-improvement cycle (borrowed from evolutionary biology) the right metaphor for *cognitive* self-improvement, or has the project inherited a biology-shaped framework that doesn't fit a cognitive harness; (c) how much residual self-reference is acceptable in the project's calibration substrate — specifically, is an all-LLM-based calibration portfolio good enough, or does the project need at least one truly-external (non-LLM) anchor as a default. *These three are the elephant in the canonical sense of "things not being talked about" — the project's docs lay out the trajectory without explicitly forcing these choices.*

- **The conditional answer — if the project commits to Level 4+ as the end-goal, keeps the Baldwin metaphor, and accepts an LLM-substrate calibration portfolio — is the calibration anchor portfolio with deterministic routing.** Concretely: a small fixed set of compute-cheap calibration anchors (cross-AI consensus among 3+ frontier models from different families; cross-discipline self-consistency using disjoint discipline-sets; perturbation-resilience testing; and at least one truly-external anchor like code-execution where the discipline output can be transformed into runnable code) that the system routes each finding to *automatically* based on output type, rather than treating "which anchor?" as a per-finding judgment call.

- **Why this is the elephant.** The project explicitly names the Baldwin cycle's *capability layers* (the three Regression Checker layers — Primitive RC, Predictive RC, Retrospective RC, defined in `docs/desc.md`) but does not name what feeds Retrospective RC at runtime. Today, the human provides that signal implicitly through accept/reject judgments. The README2's trajectory commits to phasing the human out. Without naming the replacement signal, the substrate has a calibration target only as long as the human is present — meaning the gap is *latent* now (the human masks it) and *acute* later (the human is being phased out precisely when the gap matters most). Latency is what makes it an elephant.

- **Why solving the conditional answer would broadly ease the trajectory.** A calibration anchor portfolio unblocks five downstream items at once: the Predictive RC discipline (`/intuit`, currently specified but not shipped) gains a calibration target; the Retrospective RC arm of the Baldwin cycle has empirical-outcome inputs; the materialization protocol (currently specified at `cognitive_harness/protocols/artifact_materialization.md` but not wired as default-post-finding) has outcome-attribution anchors; multi-head loop comparison (the README2's "Family III Meta-loop graduation") gets a comparison signal; and the integrated test ladder described in `docs/desc.md` (well-defined hard problems → novel problems → unsolved human problems) becomes wireable as a *runtime* calibration source rather than a one-off end-test.

- **Why solving the conditional answer changes the project's testability.** The project's foundational bet, named in `README2.md` and acknowledged in "Honest Framing" as testable-not-proven, is that "the structure of thinking matters at least as much as raw model intelligence at the margin." A calibration portfolio with at least one truly-external anchor makes this bet *falsifiable* — calibration against external outcomes can confirm or kill the bet on observable evidence rather than internal consistency. The project's own commitment to falsifiability requires what the project has not specified.

- **The single most-leveraged sub-action.** If the project answered "yes" to all three meta-decisions today, the single highest-leverage move would be: **commit to a fixed three-anchor default portfolio (cross-AI consensus + cross-discipline self-consistency + perturbation-resilience) and add code-execution as a fourth anchor opportunistically wherever a discipline output can produce runnable code** — and then add the file-convention scaffolding (`outcome.md` for tracking what happened after a finding got materialized; `overrides.md` for capturing every place the human went against a discipline's verdict, since override moments are the highest-signal calibration data) to make the substrate operational.

---

## Finding

### Context (what this inquiry is responding to)

Homegrown is a *cognitive harness* — a set of installable Markdown specifications that an LLM agent (Claude Code, Codex, Cursor) loads and follows, restructuring how the underlying model thinks. It is described in two layered framings (in `README.md` and `README2.md`) and a north-star description in `docs/desc.md`. The project's stated end-goal is **autonomous cognitive consciousness via the Baldwin cycle**: a self-improving cognitive loop where the system's predictions about output quality (the Predictive Regression Checker, described as a not-yet-shipped discipline called `/intuit`) are calibrated against observed downstream outcomes (the Retrospective Regression Checker), with the delta becoming spec-refinement seeds that improve the system over time. The human's role is described as monotonically decreasing across a six-level autonomy ladder (Level 0 bootstrap → Level 4+ full emancipation).

The user asked: of all the work between the current state (Level 0, "human is the loop") and the end-goal, what's the *one* missing thing whose absence is the dominant bottleneck — the elephant in the room.

This inquiry ran the full Extended Cognitive Loop on that question (Exploration → Sensemaking → Decomposition → Innovation → Critique). The discipline outputs are archived under this inquiry folder's `docarchive/`. The compiled answer follows.

### The candidate set considered

Exploration surfaced 26 candidates across five named regions (infrastructure, cognitive substrate, value/trust, loop-architecture, external/meta) and a sixth cross-cutting region of *unnamed* candidates that Exploration introduced through gap-pattern analysis rather than from the project's own vocabulary. Three top-tier elephants were handed forward:

1. **The Closed Baldwin Substrate** — the project's own stated next priority. Specifically: shipping `/intuit` (the Predictive RC discipline) AND building the Retrospective RC arm AND wiring outcome-tracking calibration. This is what `docs/desc.md` calls "the immediate next buildable step."

2. **External Ground Truth** — an *unnamed* candidate introduced by this inquiry's Exploration. The project's docs name "Retrospective RC" as a layer but do not name what serves as its objective input. The closest project concept is the integrated test ladder, which is described as the system's *end-test* (well-defined hard problems → novel problems → unsolved human problems) but is not instantiated as a *runtime* calibration source.

3. **The Calibration Data Velocity cluster** — the structural fact that the Baldwin cycle's tempo is bounded by external response time. Predictions arrive immediately; outcomes arrive "days/weeks/months later" per `docs/desc.md`. Per-discipline calibration thresholds (N ≥ 30 outcomes) imply months-to-years of accumulated wall-clock time even under favorable conditions. The project recognizes the threshold but does not compute the wall-clock implication.

Innovation expanded these into a wider set including the eight obvious calibration domains (math proofs, code execution, prediction markets, user-retention, scientific replication, cross-AI consensus, established benchmarks, expert-human panels) plus 21 mechanism-derived candidates spanning combinations, absence-recognition, domain-transfer (from clinical trials, forecasting tournaments, replication studies), extrapolations (agent-task benchmarks, cheap multi-model consensus), and three framing-questioning candidates (the "thinking-traces don't need ground truth" lens; the "graceful arrest at Level 3" project-pivot; the "Baldwin metaphor is wrong" foundational reframe).

After adversarial critique across ten weighted evaluation dimensions, the candidates resolved into **six finalists** and the structure of the answer became clear.

### Why none of the substrate-only candidates won on their own

Four of the six finalists were *substrate-building* answers — different ways of constructing the calibration substrate:

- **DAMACA** (a Domain-Agnostic Multi-Anchor Calibration Architecture) — a four-layer assembly emergent from Innovation: an anchor portfolio + outcome-recording methodology + high-signal-capture file conventions + a human-bridge phase plan.
- **Cross-AI consensus alone** — multiple frontier LLMs grade each discipline output; agreement is the calibration signal.
- **Cross-discipline self-consistency alone** — the system's own disciplines, used in disjoint sets, evaluate each other's outputs as a quasi-external check.
- **The `outcome.md` + `overrides.md` file conventions alone** — protocol additions that make outcome-tracking and human-disagreement first-class artifacts in the inquiry-folder convention.

All four were REFINED, not killed, but none survived as the unconditional answer. The reason: each fails on at least one *critical-weight* dimension of the elephant question.

Cross-AI consensus alone fails on **epistemic honesty** (the candidates all share the LLM substrate; agreement reflects shared training corpora as much as truth — a documented phenomenon in the LLM-judge literature) and on **bet-falsifiability** (LLM agreement doesn't test whether "structure of thinking matters more than raw intelligence" — it confounds the two). Cross-discipline alone fails harder on epistemic honesty (it's purely internal; the disciplines share project vocabulary and authoring context) and on **silent-failure resistance** (the system can become internally coherent while drifting from external usefulness, and nothing in the architecture notices). The file conventions alone are scaffolding without a signal source — they prepare the substrate to *hold* outcome data but don't say what *makes* the data signal-bearing.

DAMACA — the four-layer assembly — addresses all three sub-failures by combining the components. Multiple LLM-judges from different families have less shared bias than one model rating itself; cross-discipline evaluation adds an orthogonal signal; perturbation-resilience testing adds a third orthogonal signal; the file conventions give all the signals somewhere to live. But DAMACA retains a *residual* self-reference risk: all its Layer-1 anchors are LLM-based by default. Multiple LLMs disagreeing is meaningful (catches local hallucinations) but multiple LLMs *agreeing* on a wrong-but-conventional answer remains a silent failure mode. The architecture is *better than self-rating* but not *truly external*. This is why DAMACA goes to REFINE, not unconditional SURVIVE — and the refinement direction is: add at least one truly-external (non-LLM) anchor as a default Layer-1 component wherever applicable. Code execution is the most obvious candidate: any discipline output that produces runnable code can be scored by the runtime result, which is not an LLM judgment. Where code-execution doesn't apply, fall back to the LLM portfolio.

### The two framing-questioning candidates and what they revealed

Two candidates operated at a different altitude from the substrate-building four:

- **Graceful arrest at Level 3 as the new end-goal.** README2 explicitly names "graceful arrest" — the project completing Family II or Family III milestones and not pursuing Family IV — as a *valid design choice, not failure*. If the project committed to Level 3 as the ceiling, the human's role would not phase out fully; the human would remain the strategic-level calibrator forever. Under this framing, the elephant *dissolves*: the human is the durable calibrator; the calibration anchor question simply doesn't apply at Level 3 the way it applies at Level 4+. This is a legitimate answer to a *different* question ("what's the right end-goal for this project?") but is not the elephant on the path to the *stated* Level 4+ end-goal.

- **The Baldwin metaphor is wrong.** The Baldwin effect comes from evolutionary biology, where the environment provides ground truth automatically (organisms that adapt better leave more offspring). The cognitive harness has no automatic environment — there is no equivalent of "leaving offspring" for a thinking system. The metaphor may have been silently inherited from a domain where it works into a domain where it doesn't. Alternative metaphors include Hegelian dialectic, mathematical proof-search, and Vygotsky's apprenticeship model — each implying a different substrate. This is a research-frontier candidate: if the metaphor is wrong, all substrate work is shaped by the wrong organizing principle. But the candidate doesn't *propose* a replacement — it only flags the possibility — so it is not directly actionable as an answer.

### Why the assembled answer has two layers

The six candidates do not sit on the same axis. The four substrate-building candidates answer "build what?" The graceful-arrest candidate answers "should we build it at all?" The Baldwin-wrong candidate asks "is what we'd build the right thing?" Treating them as competing on one dimension flattens the structure of the answer.

The honest answer recognizes the layered shape:

**Layer 1 — the unconditional elephant: a meta-decision the project has not surfaced.** Specifically the three choices: (a) Level 4+ commitment vs. graceful arrest at Level 3; (b) Baldwin metaphor's correctness; (c) acceptable level of residual LLM-substrate self-reference. The canonical "elephant in the room" idiom describes something everyone in the room is aware of but doesn't discuss. The project's documentation lays out the trajectory toward Level 4+ via the Baldwin cycle without explicitly forcing these choices — making them the precise idiomatic match. *Each meta-decision is the elephant from a different angle.* They are not three competing elephants — they are three faces of one unfaced decision-cluster.

**Layer 2 — the conditional elephant: the calibration anchor portfolio with deterministic routing.** This is what the elephant *becomes* once the meta-decisions are made favorably (commit to Level 4+; keep Baldwin; accept LLM-substrate-with-non-LLM-augmentation as good enough). At that point the architecture work begins: define the small fixed portfolio (cross-AI consensus among multiple model families; cross-discipline self-consistency using disjoint discipline sets; perturbation-resilience testing per the Comprehend discipline's "Hardened" depth pattern; at least one truly-external anchor like code-execution where applicable). The "selection algorithm" question — which Decomposition identified as the leverage center within the broader outcome substrate — gets resolved at the architecture level rather than per-finding: the system *routes* each finding to all applicable anchors in the fixed portfolio, automatically, based on output type. There is no per-finding selection decision.

### Why this answer was reached over the alternatives

The strongest counter-argument considered was: *the user asked for ONE elephant; "it depends on three meta-decisions" deflects the question.* The collision resolved as follows. The conditional structure of the answer is not deflection — it is *the most accurate description of the elephant's shape*. The substrate-building work *cannot proceed coherently* without the three meta-decisions, but the project's documentation does not surface the decisions explicitly. The honest answer is to name both the unconditional elephant (the unfaced decisions, which match the idiomatic meaning of "elephant in the room") and the conditional elephant (the calibration anchor portfolio, which is what the elephant *becomes* once the decisions are made). Collapsing the two into a single answer either hides the conditional shape (false confidence) or hides the substrate detail (unactionable). Naming both is what an honest answer to "what's the elephant" looks like when the elephant has two altitudes.

### What the user can do with this answer

The user has two paths:

- **Path A (act on the conditional answer):** if the user already implicitly considers the three meta-decisions answered (commit to Level 4+; keep Baldwin; tolerate LLM-portfolio with non-LLM augmentation), they can directly accept "the calibration anchor portfolio with deterministic routing" as the elephant's solution and proceed to detailed design.

- **Path B (face the meta-decisions first):** if any of the three meta-decisions feels genuinely open, the elephant is that decision. The substrate-building work should not begin until the decision-cluster is resolved, because the wrong substrate built on the wrong meta-decisions is worse than no substrate. The most economical move is to run a small dedicated inquiry (a single `/MVL+` or even a `/sense-making` pass) on each open meta-decision before proceeding to substrate work.

- **Or push back:** if the user disagrees with any of the inquiry's premises (e.g., they hold that internal coherence IS the legitimate end and external grounding is a category error per the lens-shifting candidate), they have specific structural grounds to articulate the disagreement. The inquiry has tested the counter-arguments at known points and the user can re-open any of them with new evidence.

---

## Next Actions

### MUST

- **What:** Explicitly answer the three meta-decisions named above as Layer 1 of the elephant — (a) Level 4+ commitment vs. graceful arrest at Level 3; (b) Baldwin metaphor stays as the organizing principle for cognitive self-improvement vs. open the question; (c) all-LLM-substrate calibration portfolio is acceptable vs. require at least one truly-external (non-LLM) anchor as default. **Who:** the user (project lead) — these are project-identity-level decisions that the cognitive harness cannot adjudicate for itself per the self-reference flag this inquiry carries. **Gate:** condition-bound — answer the decisions before starting substrate-building work; the decisions can be answered together or sequentially with a dedicated `/MVL+` inquiry per decision. **Why:** the conditional elephant (the calibration anchor portfolio) cannot be coherently designed without these answers; building on unfaced decisions risks a substrate that is well-engineered for the wrong end-goal.

### COULD

- **What:** Wire the `outcome.md` and `overrides.md` file conventions into the inquiry-folder protocol now. **Who:** edit `cognitive_harness/protocols/artifact_materialization.md` and the `/MVL+` runner to write `outcome.md` (initially human-filled) for each materialized finding, and to log every human override of a discipline verdict to `overrides.md` in the inquiry folder. **Gate:** observable — when the next inquiry materializes a finding, the conventions get created automatically. **Why:** these conventions are infrastructure that prepares the substrate to receive calibration signals later. They are independently valuable even before the meta-decisions are made because the override log captures the highest-signal calibration data (human-system disagreement) that is currently being lost. **Depends-on:** MUST item "answer the three meta-decisions." OVERRIDE: COULD is adoption-ready despite open MUST. Reason: the file conventions store data without committing to a calibration architecture; they pre-position the substrate for whatever architecture eventually gets chosen, and the override log's value is independent of the meta-decisions because human-disagreement data is intrinsically signal-rich.

- **What:** Run a dedicated `/MVL+` inquiry on the Baldwin-metaphor-correctness question. **Who:** the project lead via `/MVL+`. **Gate:** condition-bound — before committing to any substrate architecture if the Baldwin meta-decision feels genuinely open. **Why:** if the metaphor is wrong, all substrate work is shaped by the wrong organizing principle; the question is research-frontier-shaped but tractable enough for one focused inquiry. **Depends-on:** MUST item "answer the three meta-decisions" — this COULD is one possible way to answer meta-decision (b).

### DEFERRED

- **What:** Build the full conditional architecture — the four-layer Domain-Agnostic Multi-Anchor Calibration Architecture with its anchor portfolio + outcome methodology + file conventions + human-bridge phase plan. **Gate:** condition-bound — revival when all three meta-decisions are answered with values that point at substrate-building (Level 4+ committed; Baldwin stays; LLM-portfolio-with-non-LLM-augmentation accepted). **Why (if revived):** this is the substrate that closes the Baldwin cycle; the project's stated trajectory depends on it. The deferral is not because the architecture is wrong — it is because building the architecture on unfaced meta-decisions risks a well-engineered substrate for the wrong end-goal.

- **What:** Implement the four obvious calibration domains the inquiry flagged as DEFERRED-with-revival-trigger: math-proof verification, code-execution scoring, prediction-market resolution tracking, longitudinal user-decision-quality tracking. **Gate:** condition-bound per domain — math when a discipline output is shaped as a formal claim; code when the output produces runnable code; prediction-market when long-horizon outcome tracking infrastructure exists; user-decision when the substrate captures decision-attribution data. **Why (if revived):** each opportunistically extends the anchor portfolio with a truly-external (non-LLM) signal source, reducing residual self-reference.

---

## Reasoning

### Significant rejections

**The project's own stated next priority — shipping `/intuit` as the Predictive RC arm — was displaced as the elephant.** It is necessary but downstream. The reasoning: `/intuit` produces real-time hunches about output quality. Hunches need calibration. Calibration requires a target. The target is what the *Retrospective* RC compares against. Building `/intuit` without naming the Retrospective RC's input source produces a calibration machine with no calibration target — well-built but ungrounded. The project's docs treat the Predictive RC arm and the Retrospective RC arm as parallel engineering tracks, but the Retrospective RC arm has an unnamed prerequisite (what feeds it at runtime) that the Predictive RC arm doesn't have. Displacing `/intuit` as the elephant is not a rejection of the Predictive RC's value — it is a structural reordering of what should be settled first.

**The calibration data velocity cluster was rejected as the elephant, though preserved as a real constraint.** The reasoning: faster calibration of nothing is still nothing. The velocity problem matters only once a calibration signal exists. The signal source is upstream of the velocity question.

**Cross-AI consensus as a *standalone* answer was rejected.** It fails on the silent-failure-resistance dimension (the documented phenomenon where LLM judges share systematic biases with the models they rate, converging on conventional answers even when the conventional answer is wrong). It is preserved as a Layer-1 *component* of the conditional architecture because cheap LLM-judging catches local hallucinations even when it misses systemic biases, and in a portfolio with orthogonal anchors the systemic-bias risk is reduced.

**Cross-discipline self-consistency as a standalone answer was rejected.** It is more deeply self-referential than cross-AI consensus (the disciplines share project vocabulary and authoring context) and has the silent-failure shape (internal coherence reinforcing internal coherence with no external check). Preserved as a Layer-1 *component* because at L0 it gives an immediate-signal that, combined with cross-AI, has a different failure profile than either alone.

**File conventions as the standalone answer were rejected.** Bookkeeping does not equal signal. The `outcome.md` and `overrides.md` conventions are necessary scaffolding but do not specify what signal goes into the files. Preserved as scaffolding that any of the substrate-building paths can adopt now.

**Graceful arrest at Level 3 was preserved as an alternative top-level answer, not folded into the substrate-building path.** This is a project-identity decision, not a substrate decision. Whether to commit to the stated end-goal IS part of the elephant — but it is the *unfaced-decision* face of the elephant, not the calibration-substrate face.

**The Baldwin metaphor critique was preserved as a research-frontier track, not folded into the substrate-building path.** Without a proposed replacement architecture, the candidate cannot be implemented on its own terms. But the question is real, and shifting it to a side-inquiry preserves the option to revisit if substrate work hits foundational difficulties.

### Survivors and why

The assembled answer survived because it accurately reflects the multi-altitude shape of the candidate space. The substrate-building candidates address "build what?" at one altitude; the meta-framing candidates address "build at all?" and "what shape should the build take?" at higher altitudes. Forcing them onto a single axis would either dismiss the meta-altitude candidates (false confidence in substrate work that may be misdirected) or dismiss the substrate-altitude candidates (no actionable answer). The conditional structure — *the elephant is the unfaced meta-decision; conditional on its resolution, the elephant becomes the calibration anchor portfolio* — captures both.

### Contradictions reconciled across disciplines

Two contradictions across the pipeline outputs needed resolution:

The first was between Exploration's project-self-diagnosis perspective (which ranked the Baldwin substrate as the project's stated elephant) and Sensemaking's structural-leverage analysis (which ranked external ground truth as more upstream than the Baldwin substrate). The reconciliation: both are correct at their level. The project's *stated* elephant is the Baldwin substrate because that is what the project's documentation has explicitly placed at the head of its trajectory. The *load-bearing* elephant is upstream of the substrate (its calibration target), which the project has not explicitly named. This is precisely why the unconditional answer to the user's question is "an unfaced project-level decision" — the project's framing and the load-bearing structure diverge at this point.

The second was between Innovation's emergent assembly (DAMACA, which proposed an all-LLM-anchor portfolio as good-enough) and Critique's epistemic-honesty challenge (that all-LLM-anchors retain residual self-reference). The reconciliation in this finding: the assembled architecture survives as the conditional answer, but with the explicit refinement that at least one truly-external (non-LLM) anchor — code execution wherever a discipline output can produce runnable code — is added as a default Layer-1 component. This converts DAMACA from "all-LLM ensemble" to "LLM ensemble plus at least one non-LLM anchor where applicable."

---

## Open Questions

### Monitoring

- Observable when the project answers (or doesn't) the three meta-decisions: does the trajectory's next year of work proceed coherently, or does the substrate-building hit foundational difficulties that trace back to an unfaced decision? If the latter, the unconditional elephant is confirmed.
- Observable after the `outcome.md` and `overrides.md` file conventions are wired: does the override log become dense (high-signal calibration data) or sparse (humans don't actually override discipline verdicts often)? Density informs the value of the highest-signal-capture component of the eventual substrate.

### Blocked

- Detailed design of the calibration anchor portfolio (which specific cross-AI models from which families; what's the cross-discipline-evaluation routing topology; how does perturbation-resilience testing fit into the inquiry-folder protocol; how do non-LLM anchors get composed with the LLM portfolio) is blocked until the three meta-decisions are answered. Designing the portfolio without the meta-answers risks committing to an architecture optimized for the wrong assumptions.

### Research Frontiers

- **Is the Baldwin metaphor the right organizing principle for cognitive self-improvement?** The candidate raised by Innovation as I-L3 (the inversion mechanism's root-cause level). Real candidate metaphors include dialectical self-improvement (Hegelian), proof-search (mathematical), and apprenticeship (Vygotsky's "more capable other"). Each implies a different substrate shape. No known buildable path until a replacement is proposed; preserved as a side-inquiry candidate.
- **Can a truly-external (non-LLM) anchor be defined that is also domain-agnostic?** Code execution is non-LLM but applies only to outputs containing runnable code; math verification applies only to formal claims. The question whether a non-LLM, domain-agnostic anchor exists at all is open.

### Refinement Triggers

- When non-LLM domain-specific anchors (code execution; mathematical verification; longitudinal user-decision tracking) become buildable in the project's scope, the conditional architecture's anchor portfolio should add them as defaults rather than as opportunistic supplements. Specifically: when a discipline output type is consistently runnable (e.g., findings that recommend a specific code change), the discipline's calibration should add code-execution as a *default* Layer-1 anchor rather than relying on the LLM ensemble.
- When the override log (`overrides.md`) accumulates N ≥ 30 entries across disciplines, the calibration substrate should treat the override pattern as a primary input to the Predictive RC's calibration data — overrides are the disagreement boundary where the system's hunches diverge from the human's, and they are intrinsically signal-rich.
- If the project's autonomy ladder reaches Level 2 (per `docs/desc.md`'s "human reviews uncertain only") without the conditional architecture being built, the elephant becomes acute: the human is being phased down precisely without the substrate that should be taking over. Re-open this finding at that point.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
make sure you read README2.md 
what is one elephant in to room thing this project misses? and if it is solved everything towards endgame will be a lot easy
```

</details>
