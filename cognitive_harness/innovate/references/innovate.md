
> **Loading note.** This file is loaded by `innovate/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — framework, components, process, failure modes — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Innovation — A Thinking Discipline

A thinking discipline for producing novel ideas through systematic mechanism application. Innovation is not inspiration — it's a practiced methodology with identifiable tools, a repeatable process, predictable failure modes, and a coverage strategy that ensures the innovation space is explored rather than sampled by accident.

---

## What Innovation Is

**Innovation is the process of creating something that doesn't exist in the current evaluation frame — a new idea, approach, condition, or combination — and making it viable enough to survive scrutiny.**

Innovation is not:
- Creativity (creativity is one input; innovation is the full process including testing and survival)
- Optimization (optimization improves within a known space; innovation changes the space)
- Brainstorming (brainstorming generates volume; innovation generates viability)
- Invention (invention creates artifacts; innovation creates new possibilities that hold up)

Innovation has two structural operations:

1. **Generation** — creating novel ideas, concepts, or connections that didn't exist before
2. **Framing** — finding or constructing the conditions under which a novel idea becomes valid and useful

Generation without framing = interesting ideas that can't defend themselves.
Framing without generation = existing ideas made viable under new conditions (useful, but not full innovation).
Both together = the full innovation process.

The seven mechanisms split naturally into these two roles:

| | Generators | Framers |
|---|---|---|
| **Primary role** | Create new concepts | Find viable conditions |
| **Mechanisms** | Combination, Absence Recognition, Domain Transfer, Extrapolation | Lens Shifting, Constraint Manipulation, Inversion |
| **What they produce** | Novel content | Novel evaluation frames |
| **Coverage minimum** | At least one required | At least one required |

---

## Intuition and Direction

Innovation starts with a trigger — a gap noticed, a question asked, a feeling that something matters. But where does that trigger come from? What makes someone notice the gap, ask the question, or feel the importance?

The answer is **intuition** — pattern recognition from accumulated experience that produces signals before conscious reasoning can articulate them.

Intuition has three components:

**1. Context** — what concepts are cognitively proximate. Determined by what you're working on, thinking about, and exposed to. A developer working on AI methodologies has "methodology," "AI," and "developer experience" in proximity — not because they chose to, but because daily work loaded those concepts.

**2. Valuation** — what feels important. A pre-logical sense of worth. You FEEL that something matters before you can prove it. This feeling is what makes you persist when others push back, and what distinguishes seeds worth pursuing from seeds that are merely interesting.

**3. Motivation** — the drive to pursue it. The desire to make the implicit explicit, to logically expose what is intuitively sensed. Without motivation, a feeling of importance stays a feeling and never becomes a seed.

### Intuition and Mechanisms Are Complementary

Intuition provides **direction** — which seeds to pursue, which outputs feel important. Mechanisms provide **coverage** — systematic exploration of the innovation space. Testing catches the blind spots of both — intuition's biases (confirmation bias, emotional attachment) and mechanism's aimlessness (treating all outputs as equally interesting).

| | Intuition | Mechanisms |
|---|---|---|
| **Provides** | Direction — where to look | Coverage — how to look systematically |
| **Strength** | Specific, experiential, felt | Systematic, exhaustive, rigorous |
| **Weakness** | Biased, narrow, hard to articulate | Aimless without direction |
| **Compensated by** | Mechanisms + Testing | Intuition + Testing |

Neither alone is sufficient. Intuition without mechanisms produces undefended gut feelings. Mechanisms without intuition produce aimless novelty. Together they produce directed, systematically explored, tested innovation.

### Practical Implication

Before applying mechanisms, **establish direction** — not just "here's a seed" but "here's a seed, and this is why it matters." The valuation signal shapes which mechanism outputs are worth pursuing and which are technically novel but practically irrelevant.

When working with AI: the human provides intuition (direction, valuation, motivation). The AI provides systematic mechanism application (coverage). Context can be supported through deliberate loading (workspace knowledge, recent work, domain themes). Valuation can be elicited ("what feels important? what would you regret not pursuing?"). Motivation must come from the human.

---

## The Seed

Innovation starts with a seed — something that triggers the process. Seeds are produced by intuition — by the interaction of context, valuation, and motivation. They come from structural sources:

| Seed Type | What it feels like | Example |
|-----------|-------------------|---------|
| **Gap** | "Something should exist here but doesn't" | No methodology market despite methodology mattering |
| **Dissatisfaction** | "This works but something feels wrong" | "Model quality sets the ceiling" felt incomplete |
| **Constraint** | "We can't do X because of Y" | SaaS losing value because of AI commoditization |
| **Question** | "What if...?" or "Why not...?" | "What if model intelligence plateaus?" |
| **Signal** | Pre-verbal sensing that something is possible | "I have this maybe idea" |
| **Failure** | "This didn't work, but why?" | Idea rejected → what conditions would make it valid? |
| **Collision** | Two unrelated things in proximity | Methodology + convergence + business in one conversation |

A seed doesn't need to be clear. "I have a maybe idea" is a valid seed. The mechanisms will do the work of developing it.

---

## The Seven Mechanisms

Mechanisms are the tools for generating novel output from a seed. Each mechanism covers a different region of the innovation space. They can be used individually, combined, or chained.

### 1. Lens Shifting

**What it does:** Changes the conditions under which the idea is evaluated. Same idea, different frame.

**Region it covers:** Condition-dependent innovations — things that are wrong under one set of conditions but powerful under another.

**How to apply:**
- Identify the current evaluation frame (what conditions are assumed?)
- Ask: "Under what different conditions would this idea become valid/powerful?"
- Construct those conditions explicitly
- Re-evaluate the idea under the new conditions

**Example:** In a discussion about AI's future, someone proposed "methodology matters more than model intelligence." Under current conditions — where large capability gaps exist between models — this is weak. The AI pushed back: "model quality sets the ceiling." But when the proposer shifted the lens to convergence conditions ("what happens when models plateau and the gap between best and good shrinks?"), the same idea became a powerful, defensible thesis. The idea didn't change. The evaluation conditions did.

**What it misses:** Novel connections, absent things, inverse truths. Lens shifting only re-evaluates existing ideas — it doesn't generate fundamentally new concepts.

---

### 2. Combination

**What it does:** Connects previously unrelated concepts to produce something neither contained alone.

**Region it covers:** Emergent novelty — things that only exist at the intersection of two or more ideas.

**How to apply:**
- Identify the core concepts in and around the seed
- Find second concepts to connect with. Sources:
  - **What's already nearby** — concepts in the current context that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work.

    **Scope-fidelity caveat.** When the inquiry's framing claims generic scope (e.g., "applies to a class of cases," "should be reusable," "applies regardless of context"), treat the current context as ONE inspiration anchor among many — do not let it become the scope-defining source. Actively seek concepts from outside the immediate working context to match the framed scope. When the inquiry's framing is narrow/specific to one context, the current context is the natural primary source.
  - **What other mechanisms produced** — outputs from Lens Shifting, Absence Recognition, etc. become combination candidates. Mechanisms feed each other.
  - **What shares the same structure** — the seed has properties and patterns. What else has those same properties in a different domain?
  - **What the user/audience is already thinking about** — the innovator's concerns and interests are a rich source of second concepts. For generic-scope inquiries, treat these as inspiration anchors but verify the resulting combinations don't narrow output to the user's specific contexts.
- Ask: "What happens if I connect A and B?"
- Explore what emerges at the intersection

**Example:** In a discussion about AI's future, three concepts were in proximity through the speaker's daily work and concerns: methodology (they were building methodologies), convergence (introduced via Lens Shifting), and business value (a personal concern). Connecting all three produced: proprietary AI frameworks as a market category. None of the three alone produces this — it emerges from their combination. The concepts were available for combination because intuition had already placed them in proximity.

**Anti-pattern caution.** Be careful that available-context combination doesn't cause scope misalignment — when the inquiry's framing claims a scope broader than the immediate working context, combinations drawn only from the nearby context can narrow output below the framed scope.

**What it misses:** Condition-dependent truths, absent things, trend implications. Combination is generative but undirected — it finds surprising connections but doesn't explain why they matter.

---

### 3. Inversion

**What it does:** Assumes the opposite of a current belief and explores what follows.

**Region it covers:** Hidden assumptions — things believed to be true that, when flipped, reveal new territory.

**How to apply:**
- Identify a core assumption or belief related to the seed
- State the opposite explicitly
- Ask: "If this opposite were true, what would follow?"
- Explore the implications without immediately judging feasibility

*Refinement note (applies at Inversion mechanism):*

**Depth check:** After each inversion, ask "Can I invert AGAIN?" The first inversion often produces an incremental improvement. The second often reveals a structural change. Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT.

- If the inversion produces a statement about a component ("the middleware does X"), invert again
- Keep inverting until you reach a statement about the system ("the communication protocol is X")
- Component-level inversions find workarounds. System-level inversions find architectural solutions.

**Example:**
- Level 1: "Middleware discovers context" → "Middleware is told context" (component-level — a workaround)
- Level 2: "Something must tell the middleware" → "Nothing needs to tell it — the communication protocol carries context inherently" (system-level — an architectural solution)
- Level 3: "The protocol must be designed for this" → "The protocol was always supposed to be structured — the text-based protocol is the real bug" (root-cause-level)

**Multi-axis system-level check (refinement to depth-check).** After reaching a system-level statement along ONE axis, additionally check: are there OTHER system-level axes you haven't inverted along? Specifically, the **existence-axis** (could the count/quantity be ZERO instead of N?) and the **identity-axis** (what does this thing fundamentally consist of?) are common system-level dimensions that may yield different inversions than the primary axis. Reaching system-level along ONE axis is not sufficient when a competing system-level statement along ANOTHER axis would change the verdict. The existing depth-check is correct as far as it goes; the multi-axis check is a refinement that handles the case where multiple system-level statements compete. Example: if the primary inversion reaches "X is not a deeper-depth variant of Y" (depth-axis system-level), also try "X has ZERO existence of additive operations beyond Y" (existence-axis system-level) — both are system-level; only one of them holds in any given case.

**What it misses:** Nuanced middle ground, absent things, connections to other domains. Inversion is binary — it flips, but the interesting territory is often between the poles.

---

### 4. Constraint Manipulation

**What it does:** Adds constraints that enable or removes constraints that block. Counterintuitively, adding a constraint can expand the solution space by changing what's relevant.

**Region it covers:** Constraint-shaped innovations — things that become possible when you add or remove a specific limitation.

**How to apply:**
- Identify the constraints currently shaping the seed (explicit and implicit)
- For each constraint, ask: "What if I removed this?" and "What if I added a new constraint?"
- Explore what becomes possible under the modified constraint set

**Example:** Adding the constraint "assume models converge" transforms "methodology vs intelligence" from a weak argument into a powerful thesis. The constraint didn't limit — it focused the innovation.

**What it misses:** Connections, inversions, absent things. Constraint manipulation is powerful but narrow — it operates within the existing conceptual territory, just with different boundaries.

*Refinement note (applies at Constraint Manipulation mechanism):*

**Both-direction-mandatory refinement.** When Constraint Manipulation is applied, BOTH directions (ADD a constraint AND REMOVE a constraint) are mandatory per invocation. Record at least one ADD-direction output and at least one REMOVE-direction output, or explicitly flag the missing direction (e.g., "REMOVE-direction explored; no candidate produced — the relevant constraints are non-removable in this seed's context") with specific reasoning. Empty flags are defects.

The bidirectional requirement prevents the unidirectional bias where only one direction is exercised. The two directions surface different categories of innovation: ADD-direction explores what becomes possible under tighter constraints; REMOVE-direction explores what becomes possible when an assumed constraint is relaxed.

---

### 5. Absence Recognition

**What it does:** Identifies what should exist but doesn't. Innovation from the negative space.

**Region it covers:** Missing things — gaps, holes, needs that aren't being met, ideas that should exist but haven't been articulated.

**How to apply:**
- Survey the landscape around the seed
- Ask: "What's missing? What should be here but isn't?"
- Ask: "Who needs something that doesn't exist yet?"
- Ask: "What would the complete picture look like, and what's absent from it?"
- Ask: "What would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?"

The first three questions find **gaps in the current design** (a missing field, a missing validation, a missing handler). The last question finds **things the current design never considered** — structural absences that only become visible when you step outside the incremental mindset. The first finds patches. The last finds redesigns. Both are valid.

**Example:** "No one is building methodology products even though methodology will become the differentiator" — the absence of a market category is itself an innovation opportunity. At the redesign level: "If AI tooling were designed from scratch today, methodology would be a first-class product category, not an afterthought bolted onto model APIs."

**What it misses:** Condition-dependent truths, connections, inversions. Absence recognition finds gaps but doesn't fill them — it needs other mechanisms to generate the thing that fills the gap.

*Refinement note (applies at Absence Recognition mechanism):*

**Both-levels-mandatory and bidirectional refinement.** When Absence Recognition is applied, BOTH the patch-level questions (gaps in the current design) and the redesign-level question (what would exist if designed from scratch) are mandatory per invocation. Record at least one patch-level absence and at least one redesign-level absence, or explicitly flag "redesign-level question yielded no novel absence" with reasoning. Empty flags are defects; the reasoning must be specific.

The redesign-level question is bidirectional. Ask BOTH directions:

1. **What's missing** — what would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?
2. **What's already present in different form** — what is the project already doing in a less articulated way that we are treating as 'new' or 'absent'? Particularly when generating proposals for capabilities the project might lack, check whether the project already has the capability in narrative / partial / hand-curated form.

The two directions above are illustrative, not exhaustive — other categories of absence (e.g., absent-affordance; absent-coordination; absent-failure-mode-coverage) may surface; the bidirectional framing's purpose is to prevent the unidirectional bias where only "missing" gets surfaced.

---

### 6. Domain Transfer

**What it does:** Imports patterns, solutions, or principles from an unrelated field.

**Region it covers:** Cross-domain innovations — things that exist elsewhere but haven't been applied here.

**How to apply:**
- Identify the core challenge in the seed
- Ask: "Where else has a similar challenge been solved?"
- Look in deliberately different fields (different industries, different disciplines, different eras)
- Ask: "What can be imported? What needs adapting?"

**Example:** "When core technology matures in manufacturing, competitive advantage moves to process and specialization" → imported to AI: "When model capability matures, advantage moves to methodology and workflow."

**What it misses:** Things genuinely novel to all fields, condition-dependent truths, absent things. Domain transfer finds what exists elsewhere — it doesn't create what exists nowhere.

*Refinement note (applies at Domain Transfer mechanism):*

**Source-domain selection guard.** When the seed is in a recognizable domain (computing systems, biology, physics, organizational behavior, etc.), at least one source domain selected MUST be NATIVE to that domain (in addition to deliberately-different fields). This counter-balances the "deliberately different" rule and prevents missing the obvious native-domain source. Example: when the seed is about computing-system memory, the deliberately-different field (e.g., regulatory tiers) is valuable for cross-domain pattern-matching, but at least one computing-native source ("files = memory" / RAM / persistent storage / filesystem / database tables) must also be in the source set to catch foundational frame mismatches.

---

### 7. Extrapolation

**What it does:** Extends an observed trend beyond its current range and explores the implications.

**Region it covers:** Future-state innovations — things that don't exist yet but will if current trends continue.

**How to apply:**
- Identify a trend related to the seed
- Extend it: "If this continues, what happens in 1 year? 5 years? 10 years?"
- Ask: "What becomes true that isn't true today?"
- Ask: "What becomes possible, necessary, or obsolete?"

**Example:** "If model convergence continues, then the gap between the best and second-best model shrinks toward zero. At that point, the only differentiator is everything that's NOT the model."

**What it misses:** Discontinuities, inversions, absent things. Extrapolation assumes continuation — it misses disruptions, Black Swans, and qualitative shifts.

---

## The Process

Innovation is iterative, not linear. The process has three phases that cycle:

### Phase 1: Seed

Start with something. A gap, a question, a dissatisfaction, a collision of ideas, a signal. It doesn't need to be clear. Write it down as-is.

*Refinement note (applies at Phase 1 Seed):*

**Methodology-Mode Consideration.** When Innovation receives a seed, the seed framing implies a methodology mode (per the Methodology Modes section of the Intervention-Shape and Methodology-Mode Vocabulary refinement note at Phase 2 Generate). The framing-implied mode is inherited from upstream disciplines (sensemaking + decomposition) and reflects their adjudication of how Innovation should run. Before running mechanisms on the seed, Innovation MUST:

1. **Identify the inherited mode.** Read the seed framing's text; classify per the methodology-modes vocabulary (use the "Text signals in seed framing" column). If the mode is ambiguous, default to Standard default unless the seed text explicitly names a non-default mode.

2. **Generate at least one alternative mode.** Name a different mode from the vocabulary that could be applied to this seed. Surface the alternative explicitly in the Innovation output's seed/preamble section.

3. **State what follows under the alternative.** In 1-3 sentences, describe what the candidate space would look like if the alternative mode were applied instead of the inherited mode. This is a brief structural-reasoning exercise, not a full mode-switch trial.

4. **Decide which mode to run with.**
   - *Default decision:* use the inherited mode. Innovation proceeds with the framing-implied mode and runs mechanisms accordingly.
   - *Mode-switch:* if the alternative is strongly preferable (the inherited mode would produce predictable / over-elaborate / under-coverage candidate spaces), switch to the alternative AND record: `Seed-time-methodology-mode-switch: <new-mode>; reason: <specific reason>`.
   - *Override (alternative inapplicable):* if the alternative is structurally inappropriate for this seed (upstream-discipline boundary already adjudicated the mode; specific calibration already conducted; etc.), record: `Methodology-mode-alternative-marked-inapplicable: <specific reason>`. Empty overrides are defects; the reason must be specific.

**Compliance criterion (artifact-observable).** The Innovation output's seed/preamble section contains: (a) the inherited mode named; (b) at least one alternative mode named; (c) the "what follows" description; (d) the decision (default OR mode-switch OR override-with-reason). Reading the artifact must be sufficient to verify compliance.

**Composition with piece-level rules.** This seed-time rule fires ONCE at the start of each Innovation run, BEFORE the piece-level rules at Phase 2 Generate (the Piece-Level Inversion Rule + the Intervention-Shape-Axis Inversion). The three rules form a vertical-layering architecture:

- **Seed time (this rule):** methodology-mode-alternative consideration → decides how mechanisms will apply across the run.
- **Piece time, generic (Piece-Level Inversion Rule):** for each meta-decision piece, generate piece-level Inversion-candidate.
- **Piece time, intervention-shape-axis (Intervention-Shape-Axis Inversion):** for each property-(v) piece, ensure the Inversion targets the intervention-shape axis.

Together with the Inherited Frame Audit (between Phase 2 and Phase 3), the methodology-mode consideration provides defense-in-depth across seed time and piece time.

### Phase 2: Generate

Apply mechanisms to the seed to produce novel outputs. This is where coverage matters.

**Minimum coverage:** Apply at least one Generator and one Framer to the same seed. This ensures you've both created novel content and found viable conditions for it.

**Systematic coverage:** For high-stakes innovation, apply all seven mechanisms. Each produces a different view:

```
Seed: "AI methodology as a business"
│
├── Lens Shifting     → Under convergence: methodology becomes THE differentiator
├── Combination       → Methodology + SaaS + proprietary prompts = new product category
├── Inversion         → What if methodology HURTS? When does structure kill creativity?
├── Constraint Manip. → Add: "models are free" → all value is in the system around them
├── Absence Recog.    → No one sells reasoning frameworks. Why? Is the market premature or missing?
├── Domain Transfer   → Consulting firms sell methodology. McKinsey's value IS the framework.
└── Extrapolation     → In 5 years: methodology is the main competitive moat in AI
```

Not all outputs will be useful. That's expected. The point is to generate a spread across the innovation space so you don't miss the best idea by only looking in one direction.

**Combining mechanisms:** Mechanisms chain. Apply Domain Transfer → get a pattern → apply Lens Shifting to evaluate it under different conditions → apply Constraint Manipulation to refine it. The output of one mechanism becomes the input to another.

*Refinement note (applies at Phase 2 Generate):*

**Intervention-Shape and Methodology-Mode Vocabulary.** Innovation operates at two named axes — per-piece intervention shapes and per-run methodology modes — that downstream refinement notes reference.

**Per-piece intervention shapes.** When Innovation generates a candidate (especially a maintenance candidate for a spec or a fix for an identified problem), the candidate has an **intervention shape** — the form of action it proposes. The shape is distinct from the candidate's content. Two candidates with the same content can have different shapes; two candidates with the same shape can have different content. Recognized shapes:

| Shape | Operation on the target | Cost / risk profile |
|---|---|---|
| **ADD-TEST** | Append a new test or check that runs alongside existing text | Low risk; no existing behavior changes |
| **ADD-DIMENSION** | Append a new evaluation dimension to existing evaluation framework | Low risk; expands evaluation surface |
| **ADD-CONTENT** | Append new content (text, section, sub-section) that isn't a test or dimension | Low-to-medium risk; extends the spec's coverage |
| **REPAIR** | Modify existing text that causes the failure; *changes semantics* while preserving the function the text was meant to provide | Medium risk; existing behavior changes structurally |
| **REVERT-REGRESSION** | Roll back current text to a prior version that did not exhibit the failure | Low-to-medium risk (depends on prior version's other properties) |
| **REMOVE** | Delete the failing text entirely without replacement | Medium risk; the function the text provided is also removed |
| **REFRAME-AS-BUG** | Reclassify the failure from a generic pattern to a localized bug; fix-and-move-on | Variable risk |
| **DO-NOTHING** | Accept the failure as out-of-scope or worth-the-cost | No risk; no change |
| **REORGANIZE-WITHOUT-ADDING** | Restructure existing sections; *preserves semantics* while changing form | Low risk; presentation-only |
| **CONTRARIAN-RETHINK** | Question the framing entirely; treat the prior conclusion as a candidate to invalidate | High risk if applied to load-bearing prior decisions |

The distinction between REPAIR and REORGANIZE-WITHOUT-ADDING is semantics-preserving (REORGANIZE preserves; REPAIR changes). The distinction between ADD-CONTENT and ADD-TEST / ADD-DIMENSION is content-type.

**Per-run methodology modes.** When Innovation runs on a seed, the seed framing implies a **methodology mode** — the form of mechanism distribution and seed-purpose stance under which Innovation operates. Methodology mode is distinct from intervention shape: shapes are per-piece commitments; modes are per-run commitments inherited from the seed framing. Recognized modes:

| Mode | Mechanism distribution | Seed-purpose stance | Text signals in seed framing |
|---|---|---|---|
| **Standard default** | Balanced (4 Generators + 3 Framers; minimum 1G+1F per Coverage Strategy) | Elaborate the committed direction; produce confident ship-ready output | No specific weighting; "elaborate", "produce", "generate output" |
| **Contrarian-rethink (Framer-weighted)** | Framer-heavy (Framers carry the load; Generators light) | Challenge prior commitments; surface contrarian alternatives | "Framer-weighted", "contrarian", "rethink", "challenge", "deliberately invert" |
| **Generator-weighted exploration** | Generator-heavy | Maximize novel-candidate breadth | "Generate widely", "explore the space", "novelty-first" |
| **Depth-iteration mode** | One mechanism (often Inversion) iterated to system-level per the Inversion mechanism's depth-check refinement | Drive a single mechanism through repeated application until a system-level claim emerges | "Depth-iterate", "go deeper", "iterate until system-level" |
| **Minimum-mechanism mode** | 1G + 1F only (the Coverage Strategy's bare minimum) | Maximize parsimony; minimum cognitive load | "Minimum sufficient", "parsimonious", "just enough" |

**Primary mechanism if specified.** If the seed framing names a specific mechanism (e.g., "apply Lens Shifting deeply"), the mode is whichever names that mechanism plus the framing-given purpose. For example, "apply Inversion deeply to a single seed-belief" maps to Depth-iteration mode with Inversion as the primary mechanism.

**Extensibility.** Add new shapes or modes as evidence accumulates. Revival trigger: when 3+ inquiries surface a candidate or seed framing whose shape/mode doesn't fit one of the above, add the new entry.

**Cross-references.** The Meta-Decision-Piece Criterion (below) fires property (v) when a piece commits to a named intervention shape. The Methodology-Mode Consideration refinement note at Phase 1 Seed (above) requires Innovation to identify the inherited methodology mode from this vocabulary at seed time.

*Refinement note (applies at Phase 2 Generate):*

**Meta-Decision-Piece Criterion.** A piece in the inquiry's piece-list is a **meta-decision piece** when at least one of the following observable properties holds at piece-output time:

1. **Relationship-label property:** the piece commits to a relationship between this finding and a prior — `refines:`, `corrects:`, `supersedes:`, `diagnoses:`, or equivalent body-text declaration.
2. **Framing-semantic property:** the piece commits to a frame the rest of the finding operates under — e.g., "this is a layer-shift situation," "this is a redo," "this is an audit."
3. **Lesson-vocabulary property:** the piece introduces new vocabulary (a named bias, named pattern, named failure mode, named procedure) that the same finding then applies to itself or to other cases.
4. **Evaluation-criterion property:** the piece commits to criteria by which downstream candidates will be judged.
5. **Intervention-shape commitment property:** the piece's principal candidate text contains an explicit intervention-shape commitment — names a shape from the Intervention-Shape Vocabulary (above) — AND the shape commitment is load-bearing for downstream pieces or downstream-discipline behavior.

A piece is **content-production** (not meta-decision) when none of these properties hold and the piece's role is to produce text instantiating a frame committed elsewhere in the artifact.

**Edge cases and retrospective audit.** For pieces where classification is judgment-dependent at piece-output time (the piece introduces vocabulary, but whether the same finding applies the vocabulary to itself is not yet determinable; OR a piece's shape-commitment is unclear at the moment but subsequent pieces operate under it), perform retrospective self-audit after the run: ask whether any piece committed a relationship, frame, semantic, vocabulary, or shape that subsequent pieces (intra-artifact) OR the next-discipline's behavior (inter-artifact) operated under. If yes, retrospectively classify that piece as meta-decision and apply the Piece-Level Inversion Rule (below) to it before publishing.

**Worked positive example.** The M1 piece in a maintenance-candidate-producing run commits to ADD-TEST shape; subsequent pieces operate under the ADD-TEST shape commitment → property (v) fires → meta-decision piece.

**Worked negative example.** A piece producing diversified examples for an M1 candidate (spanning algorithm spec / protocol spec / etc.) does NOT fire property (v) — the shape was chosen at the M1 piece; this piece elaborates within the chosen shape → content-production piece.

*Refinement note (applies at Phase 2 Generate):*

**Piece-Level Inversion at Meta-Decision Pieces.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), the Coverage Strategy's per-seed gating is necessary but not sufficient. For each piece that meets the Meta-Decision-Piece Criterion (above), Innovation MUST additionally apply Inversion at piece-level, generating an Inversion-candidate that asks "what is the assumption this piece commits, and what if it's reversed?"

**Preconditions:** Production-task mode is operating; the piece meets at least one of the meta-decision-piece properties.

**Compliance criterion (observable at the saved Innovation output):** the piece's output contains both (a) the principal candidate text for the piece's committed direction, AND (b) an explicit Inversion-candidate paragraph naming the assumption being reversed and stating what follows from the reversal. Both candidates must be tested via the 5-test cycle. The Inversion-candidate may be selected, rejected, or refined; the rule does not mandate the Inversion-candidate's selection, only its generation and testing.

**Override path:** When the runner determines Inversion is genuinely inapplicable at a meta-decision piece (e.g., a synthesis of consistent priors where the relationship label is unambiguously REFINES with no plausible inversion-candidate), the override is recorded as `Inversion-marked-inapplicable: <specific reason>`. The reason must be specific (not "this just doesn't need it"); the override-recording overhead is intentional friction, not a loophole. Empty overrides, generic overrides, and single-component overrides are defects.

**Cross-references.** This rule operates alongside the Inversion mechanism's depth-check refinement note (above). For meta-decision pieces whose first Inversion produces a component-level statement, depth-iterate per the existing refinement. This rule does NOT replace the Coverage Strategy's per-seed minimum (1 Generator + 1 Framer); it adds a per-piece requirement specifically for meta-decision pieces.

**Scope bounded.** This rule does NOT apply to content-production pieces (those failing all meta-decision-piece properties). Over-application risk is bounded by the determination mechanism.

*Refinement note (applies at Phase 2 Generate):*

**Intervention-Shape-Axis Inversion at Property-(v) Pieces.** This is an additive extension to the Piece-Level Inversion Rule (above). For pieces firing property (v) of the Meta-Decision-Piece Criterion (intervention-shape commitment), the Inversion-candidate paragraph required by the Piece-Level Inversion Rule's compliance criterion MUST target the intervention-shape axis. The "assumption being reversed" must be the piece's intervention-shape commitment (named per the Intervention-Shape Vocabulary above), not a content-level assumption adjacent to the shape.

**Concretely**, when the piece commits to shape X (where X is one of the shapes from the Intervention-Shape Vocabulary), the Inversion-candidate paragraph must:

1. Name X explicitly as the assumption being reversed.
2. Name at least one alternative shape Y (also from the Vocabulary) that the reversal points to.
3. State what follows if Y were committed instead of X.
4. Test both X and Y via the 5-test cycle.

**Override path.** When the runner determines the framing-given or commitment shape is uniquely correct — no plausible alternative shape exists for this piece's specific case — record `Intervention-shape-Inversion-marked-inapplicable: <specific reason>`. The reason must be specific (not "no alternative comes to mind"). Example: "The piece commits to recording a historical observation; intervention-shape is not the piece's axis." Empty overrides are defects.

**Compliance criterion.** A meta-decision piece firing property (v) satisfies the rule when its Innovation output contains: (a) principal candidate text; (b) Inversion-candidate paragraph naming a shape from the Vocabulary as reversed assumption AND naming at least one alternative shape AND stating what follows; (c) 5-test cycle on both candidates; OR (d) `Intervention-shape-Inversion-marked-inapplicable` override with specific reason.

**Additive nature.** Pieces firing properties (i)-(iv) but NOT (v) continue under the Piece-Level Inversion Rule unchanged. Content-axis Inversion satisfies compliance for non-property-(v) pieces.

For axis coverage of generated candidates, see Phase 3 (Test) → Assembly check / Axis coverage check. After Phase 2 Generate completes, the Inherited Frame Audit (next sub-section) examines the candidate set for un-challenged inheritance before Phase 3 Test begins.

### Inherited Frame Audit

After Phase 2 Generate has produced the full candidate set, and before Phase 3 Test begins, examine the candidate set for un-challenged inheritance.

**Predicate.** The check operates at two scope levels.

**Step (i) — Seed-level identification.** Read the seed framing's text plus the upstream Sensemaking output (the Sense Versions' commitments; key Decomposition pieces if available). Identify the **seed's central assumption** — the strongest load-bearing belief or commitment carried by the seed framing. Examples of central assumptions: a direction the inquiry presupposes ("expansion is risk"); a cell value committed at upstream stabilization ("Memory at L0 = human"); a mechanism claim inherited from a Decomposition piece ("/navigate has 4 additive operations"); a methodology mode the seed implies ("standard default 4G+3F").

If multiple plausible central assumptions exist (the seed framing is ambiguous), apply the **multi-assumption fallback rule:** run the predicate against each plausible assumption in turn; if any assumption's check fails (Step iii), the audit fires.

**Step (ii) — Piece-level identification.** For each piece in the inquiry's piece-list, classify the piece by the 4+1 meta-decision-piece criterion: a piece is a meta-decision piece if it commits any of (a) a **relationship-label** (e.g., REFINES/CORRECTS) that downstream pieces depend on, (b) a **framing-semantic** that downstream pieces inherit, (c) a **lesson-vocabulary** that downstream pieces apply, (d) an **evaluation-criterion** that downstream pieces are tested against, or (e) an **intervention-shape commitment** that downstream pieces or downstream-discipline behavior depend on. For each meta-decision piece (any property fires), identify the piece's **load-bearing commitment** per the property that fires.

**Step (iii) — Challenge scan.** For the seed's central assumption (from Step i) AND for each piece's load-bearing commitment (from Step ii), examine the candidate set: does any candidate in the set explicitly challenge the assumption/commitment? "Explicit challenge" means a candidate that states the opposite (Inversion); removes the constraint (Constraint Manipulation REMOVE); identifies the absence at redesign-level (Absence Recognition redesign-level); or declares the assumption structurally wrong (frame-rejection).

Operational signals for "explicit challenge" — concrete patterns to apply deterministically when scanning candidate text:

- Direct opposite statements: "what if X is wrong"; "the opposite of X"; "X is incorrect"
- Removal statements: "without X"; "X removed"; "if X did not constrain"
- Absence-recognition statements: "X does not exist"; "X is absent at redesign-level"; "redesigned from scratch, X would not be present"
- Frame-rejection statements: "challenge X"; "invert X"; "X is the wrong frame"
- Reversal statements: "X reversed produces Y"; "the inverse of X"

**Step (iv) — Firing condition.** The Inherited Frame Audit **fires** if for ANY assumption or commitment (seed-level OR any piece-level), the answer to Step (iii) is NO. When the audit fires, proceed to the Orchestration Procedure. When the audit does not fire, proceed directly to Phase 3 Test.

**Orchestration Procedure.** When the predicate fires, classify the un-challenged assumption/commitment by type and force-apply the corresponding frame-escape feature.

Feature-selective dispatch table:

| Assumption type | Frame-escape feature | Spec reference |
|---|---|---|
| **Belief** — a stated proposition about how the system works | Inversion at system-level depth | the Inversion mechanism (above) and its depth-check refinement note |
| **Constraint** — a limit that shapes what's allowed | Constraint Manipulation REMOVE | the Constraint Manipulation mechanism (above), REMOVE direction |
| **Design choice** — a structural commitment about how the system is organized | Absence Recognition redesign-level | the Absence Recognition mechanism (above) and its redesign-level question |
| **Success criterion** — a definition of what counts as a working answer | Lens Shifting on the criterion | the Lens Shifting mechanism (above) |

**Tie-breaker for multi-type assumptions.** When an assumption can be read as multiple types (e.g., "expansion = risk" is both a Belief and a Constraint; or all three types Belief + Constraint + Design choice), apply this rule:

1. **Default: apply Inversion** at system-level depth on the Belief aspect of the assumption.
2. **Additionally apply ALL identified secondary types' features** in priority order. For 2-type: Inversion + secondary feature. For 3+ types: Inversion + each secondary type's feature.
3. Each feature's output is recorded as a separate candidate. The candidates can be tested separately or jointly via the 5-test cycle.

Multi-type assumptions get richer treatment, not narrower.

**Worked examples (one per assumption type):**

- **Belief example.** Identified seed-level Belief that "expansion must be bounded." Audit fires (no candidate challenged it). Invoke Inversion at system-level depth → produces "breadth IS the purpose; record everything; bound execution timing not discovery." The system-level inversion replaces the component-level bounded-expansion framing.

- **Constraint example.** Identified piece-level Constraint at L0 row: "memory is human-only at this level." Audit fires (zero mechanism-trace at L0). Invoke Constraint Manipulation REMOVE → "what if 'human-only at L0' is removed? Then md files (CLAUDE.md, navigation_observer.md) ARE memory at L0 already." Tie-breaker applies (this is also a Belief): also invoke Inversion → "the opposite of human-only is artifact-included; L0 memory is both."

- **Design choice example.** Identified seed-level Design choice: "warming files at homegrown/navigation/warmup/ are out of the inquiry's scope." Audit fires (Frame-exit verification re-confirmed rather than re-tested). Invoke Absence Recognition redesign-level → "what is the project already doing in a less articulated way that this design excludes? — the warming files ARE concept-map content in narrative form."

- **Success criterion example.** A future inquiry's seed assumes the success criterion is "minimize variance." Audit fires (no candidate challenged the success criterion). Invoke Lens Shifting on the criterion → "under what conditions does maximizing-variance become the goal instead?" Reframe.

**Return-to-Phase-2 sub-procedure.** After orchestration produces new candidates (frame-alternatives), return to Phase 2 Generate: integrate the new candidates into the candidate set. Re-evaluate the predicate (Steps iii-iv). If the audit no longer fires (every assumption now has at least one explicit challenge in the augmented candidate set), proceed to Phase 3 Test. If the audit still fires, record an override (next component) OR iterate once more.

**Iteration bound.** Limit Return-to-Phase-2 iterations to **2 cycles** per audit firing. If the audit still fires after 2 cycles, record an override with structural reason explaining why the assumption is genuinely un-challengeable. This prevents infinite loop.

**Override Path.** When the audit fires but the runner determines the inherited frame is legitimately committed (the upstream Sensemaking did its job correctly; the inheritance is structurally appropriate; no plausible frame-alternative exists for this specific case), record an override:

```
Inherited-Frame-Audit-marked-inapplicable: <specific reason>
```

**Compliance criterion.** The `<specific reason>` must be:

- **Structural** — name the specific structural property that makes the frame legitimately committed (not "I don't want to challenge it" or generic "the frame is fine").
- **Contextual** — reference the specific upstream work that committed the frame (which Sensemaking SV; which Decomposition piece; which prior finding; which user-correction-equivalent).

Empty overrides, generic overrides, and single-component overrides (only structural without contextual, or vice versa) are **defects**. The override-recording overhead is intentional friction.

**Known abuse vector — rhetorically-rich-but-shallow-content overrides.** A runner could satisfy the syntax with template-filling that hits both components without genuine structural reasoning (e.g., "The frame is structurally coherent (structural reason) and Sensemaking adjudicated it (contextual reason)"). Such overrides are also defects under compliance: "structurally coherent" is generic, not naming the specific property; "Sensemaking adjudicated it" is generic, not naming which adjudication. Reviewers should spot rhetorically-rich-but-shallow overrides by checking whether the structural property is NAMED specifically and the contextual reference points to specific upstream work that can be cross-referenced. This abuse vector is monitored through the override-rate at the evaluation gate (next component) and through a broader research frontier on override compliance-criterion strengthening.

**Worked positive example (structurally specific + contextually grounded):**

> `Inherited-Frame-Audit-marked-inapplicable: Synthesizing 5 consistent priors from devdocs/inquiries/2026-05-04 / 05-07 / 05-09 / 05-12 / 05-14, each with independently surveyed evidence converging on REFINES relationship. Sensemaking's SV4 explicitly adjudicated the relationship-label as REFINES with HIGH confidence after 3-perspective check. No plausible CORRECTS alternative exists at this case's structural level — the priors operate at different layers without contradiction. Structural reason: convergence of independent prior commitments. Contextual reason: SV4 adjudication at this inquiry.`

**Worked negative example (insufficient — empty/generic):**

> `Inherited-Frame-Audit-marked-inapplicable: the frame is correct.`

Defects: no structural property named (which property makes it correct?); no contextual grounding (no reference to upstream work). Compliance failure.

**Cross-reference to established override pattern.** The override path follows the pattern shared by other override-recording rules in /innovate. As future refinement notes are committed (e.g., piece-level Inversion's override; methodology-mode-alternative consideration's override), each will use the same `<rule-name>-marked-inapplicable: <specific reason>` pattern with the same compliance criterion (structural + contextual; not empty; not generic).

**Evaluation Gate.** The audit's calibration is measured through a hybrid gate combining single-run observability with cross-run marginal-value validation.

**Component (a) — Single-run observable (immediate calibration).**

- **False-positive rate.** Count of audit firings where the override was correctly invoked (the frame was legitimately committed; no frame-alternative was structurally warranted). High false-positive rate over multiple runs signals the predicate is too loose.
- **False-negative rate.** Count of post-run user corrections (verbal or written; in the inquiry's `_branch.md` history; in a follow-up correction inquiry) that target inheritance the audit SHOULD have caught but didn't fire on. High false-negative rate signals the predicate is too strict.

Both rates are observable per run by examining the Innovation output's mechanism log + override invocations + post-run human interventions.

**Component (b) — Cross-run comparison (marginal-value validation).** Compare /innovate runs operating under two configurations:

- **Baseline:** the current /innovate spec at measurement time, with the Inherited Frame Audit sub-section hypothetically removed.
- **Experimental:** the current /innovate spec at measurement time, with the Inherited Frame Audit sub-section present.

Run the same inquiry seed in both configurations (or run different inquiries in matched configurations). Measure across 3-5 matched pairs: did the audit catch inheritance cases the baseline missed (marginal catch)? Did the audit produce false-positives the baseline didn't (marginal cost)? Net marginal value = catches gained minus false-positives introduced.

**Promotion criterion (heuristic):** if marginal value is consistently positive across 3-5 matched pairs, the Inherited Frame Audit graduates from initial commit to confirmed structural feature.

**Reciprocal relationship between components.** Single-run observable provides per-run immediate signal for calibration adjustment. Cross-run comparison provides cumulative-evidence for promotion. They're not redundant: single-run catches calibration drift per run; cross-run validates structural value across runs.

**Thresholds are evidence-quality-driven, not count-based.** The gate intentionally does not commit to specific percentage thresholds. These are heuristics dependent on case-specific evidence quality. The calibration is per-run evaluator judgment.

**Integration Map.** The Inherited Frame Audit is one sub-section in /innovate spec, located between Phase 2 Generate and Phase 3 Test. It orchestrates existing features and integrates with refinement notes (current and forthcoming) without duplicating their scope.

**Cross-references to existing /innovate features (the audit invokes these):**

- The **Lens Shifting** mechanism (above) — invoked when the un-challenged assumption is a success-criterion type.
- The **Inversion** mechanism (above) and its depth-check refinement note — invoked when the assumption is a Belief type; the depth-check forces system-level termini.
- The **Constraint Manipulation** mechanism (above), REMOVE direction — invoked when the assumption is a Constraint type.
- The **Absence Recognition** mechanism (above) and its redesign-level question — invoked when the assumption is a Design-choice type.
- The **Axis Coverage Check** refinement note at Phase 3 Test — complementary, not duplicative. The Inherited Frame Audit fires earlier (between Phase 2 and Phase 3) and broader (any single-shared-assumption pattern); the Axis Coverage Check fires later (at Assembly) and narrower (single-axis variance across the candidate set).

**Cross-references to forthcoming refinement notes (the audit coordinates with these):**

- A forthcoming **Meta-Decision-Piece Criterion** refinement note at Phase 2 Generate will provide the canonical home for the 4+1-property criterion currently restated inline in this sub-section's Predicate Step (ii).
- A forthcoming **Piece-Level Inversion Rule** refinement note at Phase 2 Generate may be invoked by the audit when a meta-decision piece's load-bearing commitment is un-challenged; that rule will retain its own per-piece compliance criterion independently of this audit.
- A forthcoming **Intervention-Shape-Axis Inversion** refinement note at Phase 2 Generate may be invoked by the audit when an intervention-shape commitment is un-challenged.
- A forthcoming **Methodology-Mode Consideration** refinement note at Phase 1 Seed will fire earlier than this audit (at seed time, before Phase 2 begins). Complementary at different times.
- A forthcoming **Re-test trigger** disposition (a 4th category at Phase 3 Test's output-disposition refinement note) will fire later than this audit (after Phase 3 Test). Complementary.

**Preserved research frontier — ADD-MULTI-AXIS-REQUIREMENT.** The audit invokes ADD-MULTI-AXIS-REQUIREMENT (require Inversion on ALL load-bearing axes simultaneously at multi-axis meta-decision pieces) "when promoted to actionable" — i.e., when cumulative evidence reaches the strict revival trigger preserved by the originating diagnostic. The audit does NOT preempt the cumulative-evidence-driven promotion; the frontier retains its own promotion path.

**The Inherited Frame Audit does NOT duplicate.**

- The audit is distinct from a forthcoming **Mechanism Independence shared-input-detection** refinement (at the 5-test cycle's Mechanism Independence test). Different scopes; different signals.
- The audit is distinct from a forthcoming **Artifact-Grounding** 6th-conditional-test refinement (at Phase 3 Test). Different operations.
- The audit is distinct from the forthcoming **Methodology-Mode Consideration** refinement at Phase 1 Seed. Different times.

**Cross-discipline complementarity.**

- **Sense-making's Definitional/Internal-Consistency perspective.** Operates on ANCHORS during sensemaking; output is revised anchors. The Inherited Frame Audit operates on the PIECE-LIST and candidate set during /innovate's run; output is frame-alternative candidates as novel content. Different time + different target + different output type. The audit stays in /innovate as DEFENSE-IN-DEPTH at /innovate-stage; /sense-making's perspective is the upstream catch at sense-making stage.

- **Td-critique's Scrutiny Survival test.** Operates on existing candidates during evaluation; output is verdicts. The Inherited Frame Audit operates pre-evaluation; output is new candidates. Different time + different operation. The audit is /innovate territory.

**Sub-section location.** Single sub-section between Phase 2 Generate and Phase 3 Test, named "Inherited Frame Audit." Not split across two locations.

### Phase 3: Test

Each novel output must be tested. Innovation testing is not the same as validation or proof — it's a survival check:

| Test | Question |
|------|----------|
| **Novelty** | Is this genuinely new, or a repackaging of something known? |
| **Scrutiny survival** | Does it hold up when challenged? What's the strongest objection, and does the idea survive it? |
| **Fertility** | Does it open new territory? Can you build on it? Does it lead somewhere? |
| **Actionability** | Can someone do something with this? Or is it only interesting in theory? |
| **Mechanism independence** | Would you reach the same conclusion through a different mechanism? (If yes, it's robust. If only one mechanism produces it, it might be fragile.) |

Outputs that fail testing are not wasted — they become new seeds. "This didn't work because..." often contains the seed for what will work.

*Refinement note (applies at Phase 3 Test):*

**Output disposition categories.** When outputs pass the 5-test cycle, the disposition depends on evidence shape and observation type:

- **ACTIONABLE** — multi-source / multi-mechanism convergent. The default disposition for survivors with strong evidence; ACTIONABLE outputs are the terminating outputs that downstream consumers act on.
- **DEFERRED with revival trigger** — single-source or single-mechanism survivors. Evidence is sufficient to pass the 5-test cycle but too thin for full ACTIONABLE confidence. The disposition preserves the option to refine on more evidence; killing the survivor loses the path, promoting it overreaches. Each DEFERRED output has an explicit revival trigger — a time-bound (e.g., "after N more inquiries"), condition-bound (e.g., "when sister-pattern X reaches 3 instances"), or observable (e.g., "if this rule does not fire effectively in the next 3 runs") trigger that promotes the output to ACTIONABLE if met.
- **RESEARCH FRONTIER** — survivors that require multi-phase architectural work or otherwise exceed per-inquiry scope. The output is preserved as an observation in the finding's Open Questions / Research Frontiers subsection; it is not proposed as an actionable candidate.
- **RE-TEST TRIGGER** — survivors whose content has implications for already-committed claims in the same output. When a surviving output (typically from a Framer mechanism producing a system-level or root-level inversion) carries content that contradicts or significantly recasts a committed cell value / claim / assembly element, the disposition is RE-TEST TRIGGER: the survivor is preserved + the affected committed claims are flagged for re-test before final assembly. The operational predicate: for each surviving output, after passing the 5-test cycle, ask "does this output's content imply that any already-committed claim should be re-tested?" If YES, list the affected claims and re-test them before the assembly check finalizes.

The disposition categories apply only to passing survivors; failed outputs follow the new-seed path described above.

**Assembly check:** After testing individual outputs, examine the survivors and refined candidates together. Ask: "What architecture emerges if I combine these survivors? Does the assembly produce emergent value that none of the individual pieces have?" Individual mechanisms generate components. The assembly check catches innovations that exist only at the intersection of those components — where the combination is more valuable than any piece alone.

*Refinement note (applies at Phase 3 Test):*

**Artifact-grounding (6th test, conditionally applied).** When the output produces categorical claims about project state, cell values in multi-element committed tables, or claims about which agents/systems perform which roles, additionally check the claim against existing project artifacts (files, configurations, observable state, including canonical discipline specs of any discipline being analyzed by the inquiry — found at `cognitive_harness/<discipline>/references/<discipline>.md`). The operational predicate: for the claim's referent, enumerate the project artifacts that currently exist serving the claim's role; if existing artifacts contradict the claim, flag for re-test (route via the RE-TEST TRIGGER disposition above) or revision before commitment.

The conditional application narrows the test's surface to outputs producing committed cell values about project state; for outputs that operate purely within abstract conceptual spaces, the test does not apply.

This test lightly domain-couples /innovate by introducing artifact-awareness; the design tension with /innovate's domain-agnostic positioning is acknowledged: the coupling is justified by closing a recurring failure mode where abstract claims contradict existing project state.

*Refinement note (applies at Phase 3 Test):*

**Axis coverage check.** Before producing the assembly verdict, examine the candidate set for the orthogonal axes it varies along. When the underlying problem has multiple orthogonal axes — for example, a problem that combines an operation with output storage has at least two axes (operation-trigger control and storage-policy control); a problem involving rules that may behave differently in different states has axes of rule-content and state-condition; a problem with runtime-determined triggers has axes of policy and discovery-mechanism — each axis should have at least one candidate variant. A candidate set that varies along only one axis when multiple orthogonal axes are relevant is incomplete; the assembly check must explicitly identify the candidate-space axes and flag any axis with no variant. Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias.

**Per-row / per-element mechanism-trace.** For proposals with multi-row tables or multi-element committed structures (e.g., 9-axis role allocation, N-level ladder, M-category taxonomy), verify each row/element received active mechanism work — specifically, at least one of the variation outputs should reference or construct the row/element's cell values, and that variation must appear in the testing log. Rows/elements that appear only in the final committed output without any mechanism trace are flagged for re-scrutiny. This applies particularly to baseline / L0 / default rows, which tend to inherit silently from upstream stabilization. The operational predicate is mechanism-trace-presence: per row, check that at least one variation's content constructs or references the row's committed cell values.

*Refinement note (applies at Phase 3 Test — Mechanism Independence test):*

**Shared-input detection.** When multiple mechanisms reach the same conclusion, additionally check: do they all operate on the same inherited input from upstream stages (e.g., from upstream Decomposition pieces, Sensemaking SV commitments, prior-finding inheritances, or shared user-stated framing)? If yes, the convergence may be SPURIOUS (tautological from shared input), not INDEPENDENT (multiple independent groundings). Mark spurious-from-shared-input convergence as needing additional adversarial testing — specifically, attempt to invert or challenge the shared upstream input before treating the convergence as robust. Independent convergence requires multiple mechanisms reaching the same conclusion from DIFFERENT upstream grounds.

### Iteration

```
Seed → Generate (mechanisms) → Test → [fails] → new seed / different mechanisms → Generate → Test → ...
                                    → [passes] → Develop further → Test again → ...
```

The process terminates when a novel output:
1. Survives scrutiny
2. Opens new territory (is fertile)
3. Is actionable (someone can do something with it)

Or when you've exhausted mechanisms and nothing survives — which is itself valuable information (the seed may not contain innovation potential, or you need a better seed).

---

## Coverage Strategy

The biggest risk in innovation is **under-exploration** — finding the first thing that works and stopping. Coverage strategy prevents this.

### Minimum viable coverage

At least one **Generator** + at least one **Framer**:

- At least one **Generator** (Combination, Absence Recognition, Domain Transfer, or Extrapolation) — to create novel content
- At least one **Framer** (Lens Shifting, Constraint Manipulation, or Inversion) — to find viable conditions

Both are required because generation alone produces ideas that can't survive scrutiny, and framing alone only repositions existing ideas. Innovation needs both new content AND viable conditions for that content.

More mechanisms = better coverage. There is no upper limit — apply as many as the seed warrants. The diminishing returns signal is convergence: when additional mechanisms keep pointing to the same innovation, you've covered enough.

### Full coverage

Apply all seven mechanisms. Compare results. Look for:

- **Convergence** — multiple mechanisms pointing to the same innovation → high confidence
- **Divergence** — mechanisms pointing to contradictory innovations → interesting tension, worth exploring
- **Gaps** — mechanisms that produce nothing → either the seed doesn't resonate in that region, or you need to push harder

### When to stop

- **Stop generating** when three or more mechanisms point to the same core innovation (convergence signal)
- **Stop testing** when an output survives the strongest objection you can construct
- **Stop the whole process** when you have at least one output that is novel, survives scrutiny, is fertile, and is actionable

---

## Failure Modes

Innovation fails in predictable, structural ways:

### 1. Premature Evaluation

The novel output is tested before mechanisms have had a chance to develop it. The idea is evaluated under the wrong conditions, in its rawest form, and rejected.

**How to recognize:** The first response to any novel output is "that won't work." No mechanisms applied, no reframing attempted.

**How to prevent:** Separate generation from testing. Generate first, test later. Never evaluate an idea using only the conditions it was born under.

### 2. Single-Mechanism Trap

Only one mechanism is used. The innovation space is barely explored. Whatever that mechanism produces is taken as "the answer."

**How to recognize:** The innovation came from one angle only. No alternative mechanisms were tried.

**How to prevent:** Minimum coverage rule — always apply at least one Generator and one Framer.

### 3. Early Frame Lock

The first successful reframe is adopted permanently. No further mechanisms are applied. The innovation is real but suboptimal — a better version exists in an unexplored region.

**How to recognize:** An idea was accepted on the first successful mechanism application. The feeling is "good enough, let's move on."

**How to prevent:** After the first successful output, apply at least one more mechanism to check if there's something better.

### 4. Innovation Without Grounding

Novel outputs are generated endlessly but never tested. The process stays in generation mode forever, producing increasingly abstract ideas that never face scrutiny.

**How to recognize:** Many novel outputs, none tested. Excitement about ideas without any "does this actually work?" check.

**How to prevent:** Enforce the Generate → Test cycle. Every generation phase must be followed by a testing phase.

### 5. Mechanism Exhaustion

All mechanisms are tried, nothing survives testing. The seed may be unproductive, or the mechanisms may be applied too superficially.

**How to recognize:** Seven mechanisms applied, zero viable outputs.

**How to prevent:** Before declaring exhaustion: (a) try combining mechanisms, (b) try chaining mechanisms, (c) reconsider whether the seed itself needs reformulating. If none of that works, accept that this seed may not contain innovation potential — and that's valid information.

### 6. Survival Bias

Only the most comfortable or familiar novel outputs survive testing. Truly disruptive innovations are killed because they're uncomfortable, not because they're wrong.

**How to recognize:** Everything that survives testing is incremental. Nothing challenges fundamental assumptions. The "innovation" is really just optimization.

**How to prevent:** Deliberately test the most uncomfortable output with extra care. Ask: "Am I rejecting this because it's wrong, or because it's threatening?"

---

## Summary

| Component | What it is | How many |
|-----------|-----------|----------|
| **Intuition** | Upstream source of seeds — context, valuation, motivation | 3 components |
| **Seed** | The trigger — what starts the innovation process | 1 per process |
| **Mechanisms** | Tools for generating novelty from the seed | 7 (4 Generators + 3 Framers) |
| **Process** | Seed → Generate (mechanisms) → Test → Iterate | 3 phases, cyclic |
| **Coverage** | Strategy for exploring the innovation space | Min 1G + 1F, full 7 |
| **Tests** | How to evaluate novel outputs | 5 criteria |
| **Failure modes** | How innovation fails structurally | 6 identified |

The framework is domain-agnostic. It works for business strategy, software architecture, product design, research, or any field where novel ideas are needed. It does not prescribe WHAT to innovate — it provides the structural tools for HOW to innovate systematically.

---

## Mechanism Coverage (Telemetry)

After producing all outputs, assess the quality of this innovation run:

* **Mechanism coverage** — How many generators applied? How many framers? (Minimum: 1G + 1F. Full: all 7.)
* **Convergence signal** — Did 3+ mechanisms point to the same core innovation? If yes: high confidence. If no: either the seed is genuinely divergent or coverage was insufficient.
* **Test completion** — Were surviving outputs tested for novelty, scrutiny survival, fertility, actionability, and mechanism independence? Any untested survivors should be flagged.
* **Failure mode check** — Did any of the 6 failure modes visibly occur? (Premature evaluation, single-mechanism trap, early frame lock, innovation without grounding, mechanism exhaustion, survival bias)

Report:
* Generators applied: [count] / 4
* Framers applied: [count] / 3
* Convergence: [YES — N mechanisms converge on X / NO — outputs diverge]
* Survivors tested: [count tested] / [count total]
* Failure modes observed: [none / list]
* **Overall: PROCEED** (sufficient coverage + convergence + tested survivors) / **FLAG** (coverage gaps or untested survivors) / **RE-RUN** (minimum coverage not met or failure mode detected)

*Refinement note (applies at Mechanism Coverage Telemetry):*

**Production-task additional telemetry.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), report additionally:

- **Per-piece mechanism log.** For each piece in the piece-list, report the mechanism(s) applied. Format: `<piece-id>: [<mechanism>, <mechanism>, ...]`.
- **Per-piece axis-distribution log.** For each meta-decision piece with property (v) firing (intervention-shape commitment), the mechanism log gains an `axis` annotation: `<piece-id>: [<mechanism>:<axis>, <mechanism>:<axis>, ...]` where `<axis>` is one of: `content`, `intervention-shape`, `scope`, `direction`, or `other-named-axis`.
- **Meta-decision-piece classification.** For each piece, report `meta-decision` / `content-production` / `inapplicable-override`.
- **Piece-level Inversion compliance.** For each meta-decision piece, report `satisfied` / `violated` / `overridden`. A piece's compliance is *violated* when no Inversion-candidate was generated for that piece. An Inversion-candidate that was generated, tested, and rejected after the 5-test cycle does NOT count as violation — the rule's purpose is to ensure the alternative is surfaced and evaluated, not that the alternative wins.

**FLAG condition (refined).** If any meta-decision piece has `Piece-level Inversion compliance: violated`, the overall telemetry verdict is FLAG (not PROCEED), regardless of seed-level mechanism coverage. Additionally, when property (v) fires for a piece AND Inversion is logged at that piece with axis ≠ `intervention-shape` (without `Intervention-shape-Inversion-marked-inapplicable` override), the verdict is FLAG.

**RE-RUN condition (refined).** If two or more meta-decision pieces have `Piece-level Inversion compliance: violated` without override, OR if 2 or more pieces have property (v) firing AND axis-misalignment violations (without overrides), the verdict is RE-RUN.
