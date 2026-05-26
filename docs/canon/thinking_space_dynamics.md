---
status: active
---
# Finding: Thinking-Space Dynamics

## Question

**How do we approximate the dynamics of the human thinking-space — attention, focus, intuition (as multi-dimensional geometric similarity, including across unrelated surface domains), and context — so that the system can render real-time value judgments on its own outputs, instead of being bounded to structural detection and waiting for retrospective downstream confirmation?**

### Goal

A structural model of thinking-space + a Level 0-2 approximation mechanism, with honest limits, that:
1. Models what thinking-space IS (components and their interaction)
2. Accounts for how humans generate real-time value judgments (not magic — a characterizable process)
3. Provides a concrete approximation approach buildable at Level 0-2
4. Revises the prior finding's claim that real-time detection is bounded to structural
5. Connects to the end-goal program — this is a frontier of autonomous consciousness work, not just regression detection

---

## Finding

### 1. The correction

Value IS retrospective in all cognitive-quality domains — ground truth about importance only arrives through downstream use. But the earlier claim that "real-time regression detection is therefore bounded to STRUCTURAL regression" was wrong. Humans make real-time value judgments constantly. A programmer sees a refactor and says "this will work but isn't elegant — let me try a different angle" long before any downstream confirmation. The judgment is real-time, not structural, and not subjective in the sense of "beyond mechanism." It is the cognitive act of intuition operating on a thinking-space.

Applied AI already implements working versions of this — LLM-as-judge, chain-of-thought, self-consistency, analogical retrieval. The capability is not theoretical. The question is how to architect it as a proper cognitive discipline that avoids the failure modes that would cause it to silently mis-approximate its signature capability.

### 2. The architecture of thinking-space

Thinking-space dynamics — whether biological or artificial — consist of a **typed primitive set** operating over a shared representation space. The primitives partition across four structurally distinct categories (the typology):

- **Operations** — things-you-do; transform representations
- **Buffers** — structures-you-hold-things-in; static between reads/writes
- **Drivers** — motivational/energetic; allocate effort to targets
- **Modulators** — global shapers; bias which operations activate

Primitives are admitted via a **four-criterion primitivity test** (independence + necessity + composability + irreducibility) with a **corpus-located audit** gate (each primitive must be locatable in existing findings with a specific signature-evidenced excerpt; two-reviewer pass required).

Eleven primitives are admitted across Phase A + Phase B. Phase C+ adds modulators (operationalization deferred).

#### Phase A — 8 primitives 

**Operations (6):**

| Primitive | Operational definition | Cognitive role |
|---|---|---|
| **Attention-pointer** | Points at ONE item within the active set for current processing | The spotlight within the buffer |
| **Focus-deep** | Allocates processing depth to the pointed item | Determines how much work each item gets |
| **Intuition-similarity** | Pattern-matches current item against corpus (similarity only — ranking and construction are separate) | Finds prior work that matches in surface OR structure |
| **Inhibition** | Actively dampens candidate thoughts/responses | Lets weaker-but-correct options surface; enables commitment |
| **Simulation** | Constructs representations not currently in input (hypotheticals, abstractions, future states) |  powers counterfactual reasoning |
| **Metacognition** | Monitors own cognitive state AND adjusts (one primitive with two sub-operations) | Produces the "I'm stuck" signal and INSUFFICIENT outputs; enables real-time steering |

**Buffers (1):**

| Primitive | Operational definition | Cognitive role |
|---|---|---|
| **Working Memory** | Holds candidate items in the active set; the space the pointer operates within | The buffer itself — distinct from pointing or attending |

**Drivers (1):**

| Primitive | Operational definition | Cognitive role |
|---|---|---|
| **Context-framing** | Current inquiry + active specs + relevant prior findings + current goals | Scopes all other primitives; determines what's "about" what |

#### Phase B — 3 more primitives (gated on Phase A calibration)

| Primitive | Type | Operational definition |
|---|---|---|
| **Motivation** | Driver | Allocates effort across candidate problems (distinct from framing — orthogonal to WHAT the problem is, governs HOW MUCH effort) |
| **Evaluation** | Operation | Ranks items by worth (distinct from similarity matching) |
| **Salience** | Operation | Bottom-up attention capture by surprise/novelty (distinct from voluntary Attention-pointer) |

#### Phase C+ — Modulators (operationalization deferred)

| Primitive | Type | Status |
|---|---|---|
| **Mood** | Modulator | Named with functional role (globally scales operation activation — e.g., positive mood broadens attention); operationalization deferred until substrate access to affective state matures |
| **Arousal** | Modulator | Named with functional role (activation intensity, independent of valence); operationalization deferred |

#### The current 4 primitives — retained with split

The earlier 4-primitive model (Attention / Focus / Intuition / Context) was internally contradictory: each collapsed multiple operationally distinct processes. It's retained with split, not replaced:

- **Attention** → Attention-pointer + Working Memory (buffer, split out) + Salience (Phase B, split out)
- **Focus** → Focus-deep + Inhibition (split out) + Commitment (emergent from Focus+Inhibition, not primitive)
- **Intuition** → Intuition-similarity + Simulation (split out) + Evaluation (Phase B, split out) + Abstraction generation (as Simulation sub-application)
- **Context** → Context-framing + Motivation (Phase B, split out) + Mood (Phase C+ modulator)

Every reference to "attention" or "context" etc. in older text should now be read under the split meaning.

#### Resolved and NOT admitted (sub-primitives, sub-applications, emergent)

- **Curiosity** → sub-primitive of Motivation + Salience (information-gap signal from failed Intuition match)
- **Temporal projection, mental rehearsal, abstraction generation** → sub-applications of Simulation
- **Commitment / closure** → emergent from Focus + Inhibition
- **Self-model** → sub-primitive of Metacognition at higher abstraction
- **Intention / goal** → sub-primitive of Motivation with explicit content

#### The cognitive act — co-constitutive primitives working together

Primitives don't fire in isolation. They **co-constitute a single cognitive act**:

> *Context-framing primes the representation space → Working Memory holds candidate items → Attention-pointer + Focus-deep select and process → Intuition-similarity + Simulation produce matches and hypotheticals → Evaluation (Phase B) ranks → Inhibition suppresses alternatives → Metacognition monitors and adjusts → Motivation (Phase B) sustains effort → results update Context → cycle repeats.*

This is how humans solve problems. It is also (largely unnamed) how modern AI reasoning systems work.

#### Substrate-honest out-of-scope

Structurally inaccessible to the LLM substrate; named-but-unoperationalized:
- **Embodied body-state cognition** — no body; no sensorimotor input
- **Felt affective quality (qualia)** — valence + arousal representable as scalars; the FEEL is not
- **Dream-state / offline consolidation** — each inference is clean-slate
- **Level 3+ custom intuition-space generation** — brute-force transfer at Level 2; future capability
- **Predictive processing as substrate** — alternative architecture; noted as research frontier, out of current MVP

### 3. Two kinds of similarity, not one

The signature claim — "geometrical similarities between shapes even if they are irrelevant, the angle might be the same" — points at a specific kind of intuition that generic embedding similarity does NOT capture:

| Similarity mode | What matches | Example | Approximation |
|---|---|---|---|
| **Surface similarity** | Content, vocabulary, same domain | "This refactor is like that refactor — same module" | Embedding cosine on text |
| **Structural similarity** | Relational pattern, regardless of surface | "This problem has the same SHAPE as a problem in a different field — the angle is the same even though content is unrelated" | Requires scaffolding — not embedding similarity alone |

**Embedding similarity alone captures mostly surface similarity. Structural analogy — the signature ability — requires scaffolded retrieval protocols grounded in Structure-Mapping Engine (SME)-style Alignment + Projection.** Any approximation that naively equates "intuition" with "embedding search" will fail silently on the capability it most needs to deliver.

> **What "scaffolded" means here:** retrieval that goes through intermediate structural steps instead of matching raw text to raw text. Unscaffolded: `query → embed → match stored text embeddings → top-K` (one step, captures shared vocabulary). Scaffolded: `query → LLM articulates its relational structure independent of surface domain → match against pre-computed abstractions of stored findings → project transferable parts back to source` (multiple steps, each stripping surface and keeping structure). The scaffolding is the intermediate transformations — prompts that produce structured relational abstractions, quality gates, multi-sample consensus, SME-style alignment and projection — that force retrieval to operate on structure, not on surface content.

### 4. The three-layer architecture

The system's quality awareness is structured as three layers — Primitive Regression Checker (immediate, deterministic), Predictive Regression Checker (immediate, probabilistic), and Retrospective (delayed, empirical). The full explanation of what these layers are, how they interact, and the trajectory from human-provided to system-provided quality awareness is in `docs/evolving_quality_assetment_component.md`.

**Layer naming convention.** Throughout this document the three layers are referenced by their full names: **Primitive RC**, **Predictive RC**, and **Retrospective RC**. They are temporally distinct: Primitive RC fires at T0 deterministically; Predictive RC fires at T0 probabilistically; Retrospective RC fires at T2+ empirically.

The Predictive RC predicts at T0; the Retrospective RC confirms or contradicts at T2+; the delta is calibration data. Over time the Predictive RC's hunches become more reliable as the calibration loop runs. **This closed loop IS the Baldwin cycle** — the system's primary mechanism for self-improvement.

**Primitive-to-layer placement.** Most of the 11 admitted primitives live primarily in the Predictive RC (the real-time cognitive layer). Two span layers:

- **Metacognition** operates at the Predictive RC in-call (the "I'm stuck" signal, INSUFFICIENT_INTUITION outputs) AND at the Retrospective RC system-level (observing calibration curves over time, signaling when a primitive needs refinement).
- **Working Memory** operates at the Predictive RC ephemerally (the in-call buffer; LLM context scope) AND at the Retrospective RC when a persistent `thinking_space.md` artifact ships (Phase δ of the primitive build, gated on Baldwin cycle requiring cross-call continuity).

### 5. The Predictive RC mechanism: the /intuit discipline

The Predictive RC is implemented as a first-class thinking discipline, `/intuit`, grounded in **Case-Based Reasoning** (Retrieve → Reuse → Revise, Aamodt & Plaza 1994) and **Structure-Mapping Engine** (Alignment → Projection, Gentner). Core operation is a three-step transform-space pattern:

**Forward transform → Scan → Projection**

- **Forward transform:** source text → structured relational abstraction (`predicate(typed_arg, typed_arg)` form, not prose)
- **Scan:** find corpus findings whose abstractions match the source's, in one of three modes (convergent / divergent / adversarial)
- **Projection:** SME-style Alignment + Projection — identify which structural relations align between source and match, project their consequences back to source context as a Popperian hypothesis

The "inverse transform" step is NOT a mathematical reversal. Natural-language abstraction is lossy by design; information discarded in the forward direction is not recoverable. Projection is asymmetric, selective, and guided by structural correspondence — it transfers structural consequences, not surface content. The Z-transform analogy is pedagogical scaffolding; the actual mechanism is SME Projection.

### 6. Phased build

The discipline ships in four phases, each standalone-valuable:

- **Phase A — Core:** convergent mode only; source-first standalone invocation; structured relational abstractions with vocabulary-hint mechanism and multi-sample consensus; flat ranked output; two source_type states (`CORPUS_MATCH`, `INSUFFICIENT_INTUITION`); four decline conditions; six inherited transform failure modes (aliasing, information loss, boundary effects, domain mismatch, overfit, underfit).
- **Phase B — Expansion:** adds divergent mode (the "angle-match" cross-domain analogy — the signature capability); embedded invocation; validator lighter-path; inquiry-state-first entry; differential output with discriminators (gated on ≥60% actionability test); `TRAINING_DISTRIBUTION_MATCH` and `NOT_APPLICABLE` states; lightweight failed-projection logging.
- **Phase C — Adversarial + hypothesis-first:** adds adversarial mode (scans for matches against prior FAILED findings, triggered by specific failure-indicator relationships like `CORRECTED_BY`, `REPLACED_BY`, `status: failed`); hypothesis-first process variant, COUPLED with adversarial (cannot ship without it — otherwise confirmation-bias-by-construction); pipeline-early opt-in flag at inquiry creation.
- **Phase D — Scale + maturity:** adds embedding pre-filter (activates at corpus N > ~100-200); pipeline-early default-on (after calibration matures, N ≥ 30 per discipline); extension to `/explore`, `/sense-making`, `/decompose` as consumers.

Embeddings are NOT foundational at MVP — they are a Phase D scaling layer. At current corpus size (~20 findings), LLM-direct reading of corpus abstractions in-context is sufficient. Embeddings earn their weight when N exceeds the context-window headroom threshold.

### 7. Output schema (Popperian, verifiable, primitive-attributed)

Each seed carries:
- `source_anchor`, `abstraction`, `corpus_match`, `structural_alignment`, `transferable_projection`
- `prediction`, `prediction_window`, `observable_outcome` (Popperian — every seed is a testable prediction with a specific Retrospective RC signal that will later confirm or refute)
- `reliability` (0-1; honest confidence)
- `hunch_state` ∈ {POSITIVE, NEGATIVE, INSUFFICIENT_HUNCH}
- `source_type` ∈ {CORPUS_MATCH, TRAINING_DISTRIBUTION_MATCH, ADVERSARIAL_MATCH, NOT_APPLICABLE, INSUFFICIENT_INTUITION}
- `primitive_contributions` (Phase β+) — array of primitives that shaped the seed

Source-type labels are **verifiable**, not LLM self-reported. `CORPUS_MATCH` requires a cited file path and excerpt; verification checks path existence and excerpt presence. The LLM cannot fake what isn't there.

Recorded hunches (entering the calibration log) require the full schema. Transient in-flight hunches may have partial structure.

Alongside the seeds, every `/intuit` call produces a **primitive invocation trace** — a step-by-step record of which primitives fired, in what order, with what inputs and outputs. Each trace entry is **evidence-linked**: cites a specific observable output artifact, not a self-reported claim. Without evidence, a trace entry is noise. This makes cognition debuggable — failure diagnosis and per-primitive calibration become possible.

### 8. Integration patterns

- **`/innovate`:** embedded + inquiry-state-first — seeds feed innovation mechanisms (especially Domain Transfer and Combination). 
 Structural analogies from future `/intuit` (not implemented , and still heavily under development and has big major issues ) become starting points for Domain Transfer; failed-projection seeds become Absence Recognition inputs.
- **`/td-critique`:** embedded validator mode — prosecution and defense pass candidate hypotheses
- .

### 9. Connection to the end-goal

Thinking-space dynamics are the substrate of cognition itself, which makes this finding a frontier of the `autonomous_consciousness_goal` program — not a regression-detection refinement. The Baldwin cycle (the end-goal's self-improvement mechanism) REQUIRES real-time hunches as input. Without the Predictive RC, the autonomy ladder has no substrate for Level 3+. The three-layer architecture with the Predictive RC at its center — instantiated as `/intuit` — is therefore load-bearing for the end goal: it is where the system develops a functional analogue of first-person cognition.



some open questions:

1. **Abstraction quality ceiling** — per-finding text abstractions have limits. Deeper relational representation (Structure-Mapping Theory formal predicates, typed relational graphs) may be needed at scale.

2. **Closed-vocabulary failure cases** — LLM substrate reflects training distribution; there are problem classes where the distribution systematically misses patterns. Calibration eventually corrects this; speed of correction is proportional to how often such patterns appear.
