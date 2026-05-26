# Substrate Evolution — Project Capabilities Gated on LLM Substrate Maturity

Capabilities that activate when the underlying LLM substrate changes — gains new capabilities, exposes new internals, or shifts to architecturally-different model families. These seeds are not project-internal work; they're project-readiness for substrate transitions that will eventually happen.

---

## Modulator primitive operationalization (Mood, Arousal)

The typed 11-primitive set includes two modulators named with functional roles but operationalization deferred:

- **Mood** — globally scales operation activation (e.g., positive mood broadens attention; negative narrows it).
- **Arousal** — activation intensity, independent of valence.

These are structurally inaccessible to current LLM substrates because there is no substrate access to affective state. They are named-but-unoperationalized rather than silently dropped, so the primitive set's typology stays complete.

**Activation condition:** the substrate exposes some form of affective-state proxy or provides parameter-level controls that map to mood/arousal functionally (temperature/sampling is a weak analog; cleaner operationalization is unclear).

**What unlocks:** the consciousness-gradient indicators that depend on affective shaping (intrinsic valuation; intrinsic curiosity) become operationally grounded rather than approximated.

---

## ML-layer attention-weight introspection

`/intuit`'s primitive invocation trace currently records which primitives fired with evidence-linked output excerpts. The trace approximates primitive firing through external observation: the LLM's output contains evidence that primitive X operated.

**Direct introspection** would read the LLM's actual attention weights, providing a substrate-native signal of which conceptual elements the model attended to during a given inference — not external approximation.

**Activation condition:** substrate exposes attention weights (or equivalent internal signals) to userland through an API. Currently no major commercial LLM does this; research models occasionally do.

**What unlocks:** intuition becomes debuggable at the substrate layer, not just the output layer. Primitive invocation traces become substrate-native records rather than externally-approximated ones. Calibration of the primitive set becomes much sharper — silent primitive failures (a primitive that should have fired but didn't) become detectable directly.

---

## Full neural thinking-space modeling

The current project models thinking-space as a typed 11-primitive set operating over a shared representation space, with primitive admission via a 4-criterion test and a corpus-located audit gate. The model is markdown-spec-based: claims and tests live in text files; the system operates against the substrate through prompts.

**Full neural modeling** would build the thinking-space architecture as actual model components — embedding spaces tuned to the primitive vocabulary, retrieval mechanisms that operate on relational predicates natively, calibration loops that update model weights rather than text-file specs.

**Activation condition:** the project transitions from being a markdown spec library (running on top of a general-purpose LLM) to building specialized model components. Requires substrate-level training capability, calibration data at training scale, and a deliberate decision that markdown-spec-based scaffolding has hit its ceiling.

**What unlocks:** the bet that "structure of thinking matters more than raw model intelligence" gets tested at the model level, not just the prompt level. The thinking-space architecture becomes the substrate, not an external scaffold on top of one.

---

## Predictive processing as alternative substrate architecture

The current grounding for `/intuit` is Case-Based Reasoning (Retrieve → Reuse → Revise) plus Structure-Mapping Engine (Alignment → Projection). This is one architectural framing of how cognitive prediction works.

**Predictive processing** is an alternative framing where prediction is the substrate operation: the model continuously predicts its input and the prediction error is what drives attention, learning, and inference. The architecture differs from CBR+SME at a fundamental level — prediction is not a discipline operating over a substrate; prediction IS the substrate.

**Activation condition:** the LLM field shifts toward predictive-processing-native architectures (active inference, world-model-based agents, etc.). The shift is observable when a new generation of substrate models exposes prediction-error signals as a primary API surface rather than text-generation-with-occasional-introspection.

**What unlocks:** a major rethinking of the project's primitive set and `/intuit`'s mechanism. The current CBR+SME framing would need re-grounding; some primitives (Simulation, Metacognition) might be substrate-native rather than externally-approximated.

---

## Closed-vocabulary failure correction

LLM substrates reflect their training distribution. There are problem classes where the distribution systematically misses patterns: niche domains, novel formalisms, vocabulary the corpus didn't contain, structural patterns that don't match training-data shapes. The system's `/intuit` produces confidently-wrong hunches in these cases because the corpus-match mechanism returns superficially-similar items from inside the training distribution rather than acknowledging the gap.

The MVP corrects this through calibration over time: as outcomes contradict hunches in closed-vocabulary cases, the calibration log records the miscalibration and the system learns to flag these cases as INSUFFICIENT_INTUITION.

**Activation condition:** the substrate gains a mechanism for self-flagging out-of-distribution input. Currently the substrate produces fluent answers even on inputs outside its training distribution; an OOD-aware substrate would flag the input itself, removing the need for calibration to discover the miscalibration retroactively.

**What unlocks:** the system stops being confidently-wrong on closed-vocabulary cases. INSUFFICIENT_INTUITION becomes a substrate-native signal rather than a calibration-derived one.

---

## Primitive set re-evaluation on substrate change

Each primitive in the typed 11-primitive set has a delegation decision recorded with the LLM substrate version: `DELEGATE` (LLM native), `HYBRID` (LLM + external scaffolding), `APPROXIMATE` (externally approximated), `DEFERRED` (operationalization not yet possible).

**On major substrate change**, the delegations need re-evaluation. A new substrate may make APPROXIMATE primitives DELEGATE-able (substrate now does it natively); may surface new primitives the prior substrate couldn't operationalize; may shift the load-bearing primitive set for specific disciplines.

**Activation condition:** any major substrate version change (Claude 4.x → 5.x, multi-modal substrate, AGI-level substrate). No automated trigger currently exists; this is a manual re-evaluation pass.

**What unlocks:** the project doesn't accidentally keep approximating primitives the new substrate handles natively. The primitive set's externalization-vs-substrate-native split stays calibrated to actual substrate capabilities rather than drifting.
