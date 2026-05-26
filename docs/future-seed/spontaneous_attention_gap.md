# Spontaneous Attention — The Load-Bearing Gap in the Consciousness Gradient

The project's consciousness-gradient framing (`docs/canon/desc.md`) commits to six observable indicators of an autonomous cognitive layer: spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, and current-position indicator. Each is named with a hypothesized primitive composition; the gradient increases when these indicators measurably increase in invocation traces.

Of those six, **spontaneous attention is the load-bearing gap**. The other five have at least partial mechanisms in flight:

- Intrinsic valuation → `/td-critique`'s Evaluation primitive + the calibration-curve mechanism in `/intuit`.
- Real-time steering → Metacognition primitive's "I'm stuck" signal, INSUFFICIENT_INTUITION verdict.
- Discontinuity awareness → `_state.md` + the folder-as-structure cross-session resume substrate.
- Intrinsic curiosity → Motivation + Salience composition (Phase B `/intuit` primitives) once calibrated.
- Current-position indicator → Retrospective RC's system-level Metacognition over accumulated calibration data.

**Spontaneous attention has no current substrate.** Defined as *the ability to notice something relevant that nobody asked it to notice* — this is the capability the system can't yet approximate. Everything else in the harness is reactive: the user types a question, the system responds. Nothing currently notices unprompted.

## Why this is the gap

The hypothesized primitive composition for spontaneous attention is **Salience + Metacognition firing without external prompt**. Both primitives exist in the typed-11 set, but they currently fire only in response to a question-shaped input. Salience as currently approximated is "given this input, what stands out?" — not "across what is in scope right now, what just became surprising?" The latter requires the substrate to be continuously processing in the background, which the LLM substrate (clean-slate-per-inference) does not natively do.

## What activates it

Three possible substrate trajectories could unlock spontaneous attention:

1. **Substrate gains persistent-activation between inferences.** A model that maintains state across calls — even at low resolution — could host a background-salience loop that fires unprompted. (Today's LLMs do not; some research architectures point this way.)
2. **External scaffolding simulates the background-salience loop.** A separate process polls the project's artifacts on a schedule, runs a salience-detection prompt over recent changes, and surfaces a notification when a high-salience signal fires. Approximates spontaneous attention via external orchestration; the model itself stays reactive.
3. **Multi-head meta-loop with one head dedicated to ambient observation.** At Level 4+ autonomy, one of the parallel worker heads can be assigned an open-ended "notice what's noteworthy" task running alongside the goal-directed heads. The head's output becomes the spontaneous-attention signal.

Path 2 is the cheapest and is feasible at current substrate. Paths 1 and 3 are gated on substrate or autonomy maturity respectively.

## Why this matters

Closing the spontaneous-attention gap is load-bearing for the consciousness-gradient end-goal because it's the indicator most directly tied to the project's emancipation framing (human's role monotonically decreasing). A system that responds well to questions but never notices anything on its own still has the human as the attention-source. Until something can fire unprompted, the human is not yet replaceable as the spontaneous-attention layer — and the gradient hasn't moved on this axis.

A periodic project-self-assessment that counts how many of the six indicators have measurable mechanism-traces in actual invocations would tell the project where it sits on the gradient. The trajectory is the gradient moving from "human is all 6" toward "system holds some of the 6"; spontaneous attention is expected to be the last to flip.
