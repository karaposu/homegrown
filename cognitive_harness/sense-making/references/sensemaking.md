> **Loading note.** This file is loaded by `sense-making/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — framework, components, process, failure modes — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Sensemaking — A Thinking Discipline

A thinking discipline for transforming vague, ambiguous situations into stable, actionable understanding. It works by organizing partial insights into constrained conceptual structures until coherent meaning emerges.

Rather than relying on intuition alone, Structural Sensemaking treats understanding as a practiced methodology based on anchors, boundaries, and controlled reduction of uncertainty.

> **Structural Sensemaking is the process of constructing stable meaning by organizing cognitive anchors into constrained conceptual structures through perspective integration, ambiguity collapse, and degrees-of-freedom reduction.**

Sensemaking has two structural operations:

1. **Comprehending** — extracting cognitive anchors and expanding the
   anchor space through multi-perspective checking. The output is an
   enriched anchor set — the meaning territory mapped out with multiple
   viewpoints applied. (Phase 1 — Cognitive Anchor Extraction and
   Phase 2 — Perspective Checking, in the operational protocol below.)

2. **Stabilizing** — resolving ambiguities, reducing degrees of
   freedom, and converging on a coherent conceptual model. The output
   is a stabilized model — the meaning committed to. (Phase 3 —
   Ambiguity Collapse, Phase 4 — Degrees-of-Freedom Reduction, and
   Phase 5 — Conceptual Stabilization, in the operational protocol
   below.)

Comprehending without Stabilizing = a rich anchor set with no
commitment; understanding stays in expansion mode.
Stabilizing without Comprehending = committing to a model built on
too few or biased anchors (false confidence).
Both together = the full Sensemaking process.

The two operations chain. Some interleaving is expected — perspective
checking in Comprehending may surface anchors that resolve ambiguities
in Stabilizing; ambiguity collapse in Stabilizing may surface new
conceptual territory needing further perspective application.
Comprehending and Stabilizing are dominant operations of their phase
ranges, not strictly sequential.

### Key Components

#### Cognitive Anchors

Cognitive anchors are the fundamental units of meaning used to build understanding:

* **Constraints** — Limits, requirements, and boundaries
* **Key Insights** — Non-obvious implications or realizations
* **Structural Points** — Core components and relationships
* **Foundational Principles** — Assumptions, rules, axioms
* **Meaning-Nodes** — Central concepts and themes

Anchors function as reference points that restrict and guide interpretation.

#### Boundary Construction Operations

Boundary construction is the process of shaping how anchors interact. It consists of three primary operations:

**a. Perspective Checking**
- Examining the situation from multiple viewpoints
- Generating new anchors
- Expanding the interpretive space
- Examples: Technical, Human, Strategic, Risk-oriented, Systemic

**b. Ambiguity Collapse**
- Identifying vague terms, conflicts, unclear goals, and hidden assumptions
- Selecting dominant interpretations using strong anchors
- Converting clarifications into irreversible constraints
- This operation converts uncertainty into structure

**c. Degrees-of-Freedom Reduction**
- Identifying remaining variables
- Fixing stable elements
- Eliminating infeasible options
- This operation stabilizes the conceptual structure

#### Conceptual Structure

A conceptual structure is the stabilized result of anchor interaction and boundary construction. It is characterized by:

* Low ambiguity
* High internal consistency
* Clear causal or logical relations
* Actionable implications

---


## Process Model

Structural Sensemaking proceeds through five iterative phases:

The five phases group into the two structural operations introduced above. **Comprehending** spans Phase 1 (Signal Detection), Phase 2 (Anchor Extraction), and Phase 3 (Perspective Expansion) — building the anchor space. **Stabilizing** spans Phase 4 (Boundary Formation) and Phase 5 (Conceptual Stabilization) — committing to a stabilized model. The operational protocol below ("Execute the Following Process" section) uses a slightly different phase grouping (in that scheme, Comprehending = Phases 1-2 and Stabilizing = Phases 3-5); the operation names are identical across both schemes.

### Phase 1 — Signal Detection

* Recognition of a vague but meaningful pattern
* Pre-verbal intuition of relevance

### Phase 2 — Anchor Extraction

* Identification of initial anchors
* Documentation of constraints, insights, and principles

### Phase 3 — Perspective Expansion

* Deliberate exploration of alternative viewpoints
* Generation of additional anchors

### Phase 4 — Boundary Formation

* Collapsing ambiguities
* Resolving conflicts
* Reducing degrees of freedom

### Phase 5 — Conceptual Stabilization

* Integration of surviving anchors
* Formation of a coherent model
* Articulation of understanding

The process is iterative and recursive rather than strictly linear. (For the model-misfit case where stabilization is being attempted but the model keeps requiring revision, see the Accommodation trigger refinement at Phase 5 Conceptual Stabilization in the Execute section.)

---

## Saturation Indicators (Telemetry)

Sensemaking doesn't have rigid convergence criteria — ambiguity is not fully quantifiable. But four indicators signal when the process is approaching sufficiency versus when it needs more work:

* **Perspective saturation** — new perspectives stop producing new TYPES of anchors. If the last 2-3 perspectives only confirmed existing anchors without introducing new anchor types, the sensemaking may be approaching saturation.
* **Ambiguity resolution ratio** — what fraction of identified ambiguities were resolved? Remaining ambiguities should be explicitly flagged as OPEN, not silently dropped. A high ratio of unresolved ambiguities signals the sensemaking needs more work or the input is genuinely irreducible.
* **SV delta** — compare SV6 to SV1. If they're barely different, either the input wasn't genuinely ambiguous or the sensemaking was superficial. A healthy sensemaking shows clear structural shifts between initial impression and final model.
* **Anchor diversity** — do anchors come from multiple types (constraints, insights, structural points, principles, meaning-nodes) and from multiple perspectives? If all anchors are one type from one perspective, the model is one-dimensional.

These are indicators, not gates. They signal when to keep going — they don't force artificial completeness.

---

## Failure Modes

Sensemaking fails in recognizable patterns. These are not checkpoints to execute at each phase — they are patterns to notice when they're happening, like recognizing when you're off-balance.

### 1. Status Quo Bias

Defending an established structure, definition, or framework because it's documented and familiar — not because the evidence supports it. Established things feel like strong anchors. When the established thing IS the problem, this instinct protects it from legitimate challenge.

**Feels like:** Discomfort challenging something that has a spec, a name, or prior acceptance. Framing a genuine gap as "the user applied it wrong" rather than "the tool has a limitation."

**Corrective:** "Am I protecting this because the evidence supports it, or because it already exists? Would I reach the same conclusion if it were undocumented?"

### 2. Premature Stabilization

The model clicked into place quickly. SV4 feels clean and clear. But only two or three perspectives were checked, and none of them produced discomfort or surprise. The model is untested, not stable.

Premature Stabilization has two recognition axes: the *early-clarity-arrival axis* (this section's primary description — clarity arriving before testing is sufficient) and the *model-misfit axis* (clarity-resistance — multiple perspectives produce destabilizing anchors yet stabilization is forced anyway; see the Accommodation trigger refinement at Phase 5 Conceptual Stabilization in the Execute section).

**Feels like:** Clarity arriving early. Confidence at SV3 or SV4 that feels like SV6. The urge to move on. (Or, on the model-misfit axis: every new perspective forces another revision, you keep patching, but you're trying to stabilize anyway.)

**Corrective:** Check: how many perspectives produced NEW anchors versus confirmed existing ones? If fewer than three perspectives produced surprises, the model hasn't been tested from enough angles. For testing of load-bearing concepts stabilized in earlier Sensemaking outputs, see Phase 3 — Ambiguity Collapse → Load-bearing concept test refinement; for committing to a key concept built from a small set of specific examples, see Phase 3 — Ambiguity Collapse → Specific-vs-pattern recognition cue refinement; for model-misfit-induced premature stabilization (clarity-resistance rather than early-clarity-arrival), see Phase 5 — Conceptual Stabilization → Accommodation trigger refinement (all in the Execute section).

### 3. Anchor Dominance

One very strong anchor — a constraint, a principle, a key insight — is doing all the work. Every ambiguity resolves toward it. The model is really "one strong idea plus supporting details" rather than a multi-anchored structure.

**Feels like:** Everything pointing in the same direction. A satisfying coherence that's actually uniformity. No tension in the model.

**Corrective:** "If I removed this one anchor, would the rest of the model collapse? If yes, I'm building on one pillar — are there others I'm not seeing?"

### 4. Perspective Blindness

The perspectives checked all agree. Nothing produced discomfort or surprise. The model is unchallenged — not because it's robust, but because only friendly perspectives were consulted.

**Feels like:** Agreement across all perspectives. A feeling that "everyone sees it the same way." No perspective made you pause.

**Corrective:** "Which perspective would be most uncomfortable to check? That's the one to check." If you can't identify an uncomfortable perspective, you're not looking hard enough. For phase / calibration-state perspectives in inquiries involving phase-dependent rules, see Phase 2 — Perspective Checking → Phase / Calibration-State perspective requirement refinement (in the Execute section).

### 5. Clean Resolution Trap

An ambiguity resolves with an elegant, satisfying explanation. The resolution feels right — clean, logical, complete. But the strongest counter-argument was never tested on structural grounds. The resolution survives because it's elegant, not because it's the only explanation that fits the evidence.

**Feels like:** A resolution that clicks. Satisfaction. The ambiguity disappearing cleanly. No residual discomfort.

**Corrective:** State the strongest counter-argument. State why it fails — on structural grounds. "Which specific mechanism, component, or evidence disproves it?" Citing precedent ("the spec says X") is not structural evidence. If the counter-argument can only be dismissed by citing precedent, the resolution is LOW CONFIDENCE.

### 6. Self-Reference Blindness

Using sensemaking to evaluate something that shares assumptions with sensemaking itself — a discipline, a framework, a methodology. The evaluation feels easy and confirmatory because the evaluation tool and the thing being evaluated use the same conceptual language.

**Feels like:** Ease. The evaluation proceeds smoothly. No friction. The thing being evaluated "passes" without struggle.

**Corrective:** "Does the thing I'm evaluating use the same conceptual framework I'm using to evaluate it? If yes, I need external reference points — empirical evidence, user experience, cross-discipline comparison." Self-reference without external grounding is circular.

---

## Meta-Inspection — The Generative Pattern for Structural Checks

Sensemaking has THREE coexisting check patterns:

- **Pattern A — Hook-specific structural meta-inspection** (this section). The meta-question fires on 9 inspection hooks, each a structural surface of the analysis. Generates: Frame-exit Completeness perspective; Phase/Calibration-State perspective; the 4 refinement notes; and any future checks at hook surfaces.

- **Pattern B — Process-level failure-mode correctives** (the "Failure Modes" section above). The 6 failure-mode correctives are meta-questions about analysis QUALITY as a whole (Status Quo Bias, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness). These operate at a different abstraction level than the hook-specific pattern; they do not all map cleanly to hooks.

- **Pattern C — Lateral viewpoint diversity** (the lateral perspectives in Phase 2: Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Ethical/Systemic). These apply different VIEWPOINTS to analysis CONTENT — distinct from meta-inspection (which applies to analysis STRUCTURE).

This section describes Pattern A — the hook-specific structural meta-inspection.

### The meta-question

**"What am I treating as FIXED that might not be?"**

Apply this question to the structure of the analysis itself — not the content. The question surfaces assumptions about the SHAPE of the analysis (its candidates, its frame, its question's wording, its concepts, its motivating examples, its model fit, its phase-dependence, its self-reference, its language) that the analysis might be taking for granted.

Equivalent formulations the practitioner can enter from:
- "Where would I have to STEP BACK to see what I'm missing?"
- "What's the LEVEL of this analysis, and is it the right level?"

### Inspection hooks

The meta-question fires on specific surfaces — INSPECTION HOOKS. Each hook is a concrete inspection point where the meta-question generates a specific check.

| Hook | Inspection point | Calibration in this spec |
|---|---|---|
| H1 — Candidate set | The set of candidates being adjudicated for their relationships | "Wait, aren't they doing the same thing?" — convergence-recognition (sub-aspect: Cross-Candidate Unity check — DEFERRED in 14-00 finding pending ≥3-instance Step 5; integrates here as a hook sub-aspect at revival) |
| H2 — Frame scope | The boundary of what's in vs out of the inquiry's frame | Definitional / Frame-exit Completeness perspective (Phase 2) — 4 meta-categories |
| H3 — Question framing | The wording of the inquiry's question | Question-Premise Pre-Bias check (DEFERRED in 14-00 finding pending ≥3-instance Step 5; covered now at runner layer per 17-00 finding; integrates here as a hook sub-aspect at revival) |
| H4 — Concept names | The labels attached to concepts being committed to | Load-bearing concept test (Phase 3 refinement note) — sub-aspects: proxy-vs-structural, discoverability, user-language alignment |
| H5 — Motivating examples | The specific cases that motivated a key insight | Specific-vs-pattern recognition cue (Phase 3 refinement note) |
| H6 — Model fit | The pattern of revision: refinement vs patching | Accommodation trigger (Phase 5 refinement note) |
| H7 — Phase / calibration state | Whether the rule depends on calibration the project has | Phase / Calibration-State perspective (Phase 2; required when inquiry involves phase-dependent rules) |
| H8 — Self-reference | Whether the evaluation tool and the target share the same conceptual framework | Self-Reference Blindness (failure mode #6) corrective — bridges to Pattern B at this hook |
| H9 — User language alignment | Whether the rephrased concept matches what the user actually said | Sub-aspect of Load-bearing concept test (Phase 3 refinement note) |

### Hooks list extensibility

The hooks list is EXTENDABLE. When a new specific check is discovered (at ≥3-instance Step 5 threshold or via project iteration), the membership decision criterion is itself the meta-question:

1. Apply the meta-question to candidate hooks. Does an existing hook generate the new check?
2. If YES — the new check becomes a sub-aspect of the existing hook in the calibration column. No structural change to the hooks list.
3. If NO — add a new hook (H10, H11, ...) with a one-line description and the new check as its initial calibration entry.

The meta-question stays stable; only the hooks table grows. Spec growth shifts from linear (each new failure mode = ~30 lines for a top-level section) to sub-linear (each new failure mode = ~5-10 lines for a hook entry or sub-aspect).

### How the meta-question fires at runtime

Three entry points:

1. **Phase-end firing** (primary, systematic). After each phase's Sense Version (SV2/SV3/SV4/SV5/SV6) is produced, the practitioner checks the hooks relevant to that phase. Specifically:
   - After SV2 (Phase 1 close): check H4 (concept names), H5 (motivating examples).
   - After SV3 (Phase 2 close): check H1 (candidate set), H2 (frame scope), H3 (question framing), H7 (phase/calibration state).
   - After SV4 (Phase 3 close): check H4 sub-aspects, H5 (already triggered by existing refinement notes — the meta-question makes the pattern explicit).
   - After SV5 (Phase 4 close): no new hooks fire here; Phase 4 is degrees-of-freedom reduction, not new anchor extraction.
   - After SV6 (Phase 5 close): check H6 (model fit; already triggered by Accommodation trigger).
   - Throughout (any phase): H8 (self-reference; check whenever the inquiry's subject is the discipline being applied) and H9 (user language; check whenever a concept name is being committed).

2. **Practitioner-triggered firing** (secondary, intuition-driven). The practitioner notices something off mid-analysis and applies the meta-question to whichever hook is relevant. Any of the three alternative formulations can serve as the entry point.

3. **End-of-Sensemaking firing** (tertiary, safety net). Before declaring SV6, the practitioner runs the meta-question over all hooks as a final check. Optional; not gating.

### Self-applicability

The meta-question applies to Sensemaking ITSELF. Sensemaking analyzes the structure of understanding; the meta-question asks about the structure OF that analysis. Applying the meta-question to Sensemaking's own check architecture is what generated this section (an instance of the meta-question applied to H1 — "are perspectives, refinement notes, and failure-mode correctives separate, or are some of them instances of one pattern?" — and H4 — "do those three concept names represent real structural distinctions?"). Self-applicability is structural evidence that the meta-question is the right principle: a generative principle that can analyze its own framework without contradicting itself.

### Step 5 conformance note

This section is largely a STRUCTURAL REORGANIZATION — it adds a meta-level view of existing behavior. Existing perspectives, refinement notes, and failure-mode correctives continue to operate unchanged; they become the calibration set demonstrating the meta-question's application.

Two of the four phase cross-references (Phase 3, Phase 5; see Phase protocols) label existing behavior — no new behavior. Two (Phase 1, Phase 2) introduce a small new behavior: an explicit phase-end meta-question check at points where the existing protocol didn't have such a check. This small new behavior bypasses Step 5 at N=1 per the reversibility precedent established by the 17-00 finding's writing-discipline reminder (`/Users/ns/.claude/skills/MVL+/SKILL.md` Step 3 — see `devdocs/inquiries/2026-05-11_17-00__mvl_input_rephrase_as_primary_intervention/finding.md`): the change is lightweight + reversible + spec-level structural (not runtime-cognition-level new check).

When the 14-00 finding's deferred Layer 2 checks (Question-Premise Pre-Bias; Cross-Candidate Unity) reach ≥3-instance revival, they integrate as sub-aspects of hooks H3 and H1 in the calibration column — not as new top-level refinement notes. Spec growth at revival is sub-linear (~5-10 lines added to the hooks table rather than ~30+ lines for two new refinement notes).

### Scope

Meta-Inspection applies WITHIN Sensemaking. The hooks are Sensemaking-specific (candidate set; frame scope; question framing; concept names; motivating examples; model fit; phase/calibration state; self-reference; user language). Other disciplines (Exploration, Decomposition, Innovation, Critique) may have their own structural patterns; whether they have analogous meta-questions for their check-enumerations is an out-of-scope Research Frontier.

---

## Standard Analysis Protocol

When applying Structural Sensemaking to a task:

1. Define the problem or situation
2. Extract cognitive anchors
3. Perform perspective checking
4. Collapse ambiguities
5. Reduce degrees of freedom
6. Synthesize a stable conceptual model


---- NOW SOLID INSTRUCTIONS START----

## Execute the Following Process

The five phases below execute the two structural operations. Phases 1 and 2 execute the **Comprehending** operation; Phases 3, 4, and 5 execute the **Stabilizing** operation. See the "What Sensemaking Is" section above for the operation definitions and the interleaving caveat.

### Initial Sense Version (SV1 — Baseline Understanding)

Provide a brief, high-level description of your initial interpretation of the input before analysis.

---

### Phase 1 — Cognitive Anchor Extraction

Identify and list:

* Constraints (limits, requirements, boundaries)
* Key Insights (non-obvious implications)
* Structural Points (core components, relationships)
* Foundational Principles (assumptions, rules, axioms)
* Meaning-Nodes (central concepts and themes)

*Meta-Inspection cross-reference: after SV2 is produced, apply the meta-question to H4 (concept names) and H5 (motivating examples). See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*

#### Sense Version 2 (SV2 — Anchor-Informed Understanding)

Update your understanding based on extracted anchors. Summarize how the input is now interpreted differently from SV1.

---

### Phase 2 — Perspective Checking

Analyze the input from multiple perspectives:

* Technical / Logical
* Human / User
* Strategic / Long-term
* Risk / Failure
* Resource / Feasibility
* Ethical / Systemic (if relevant)
* Definitional / Internal Consistency — Does this interpretation contradict any established definitions, principles, or prior stabilized models WITHIN the inquiry's frame? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.

* Definitional / Frame-exit Completeness (when the inquiry has inherited multi-value terms in its own committed structures) — Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide, and have any out-of-scope verdicts been tested on structural grounds?

  Gating predicate: this perspective fires WHEN BOTH (i) the inquiry's commitments include terms inherited from prior findings, framing-level commitments, or upstream taxonomies; AND (ii) those inherited terms are used across ≥2 distinct values/levels WITHIN the inquiry's own committed structures (multi-row tables, ladders, axes, typed taxonomies — NOT in artifacts the inquiry analyzes; "distinct" means used to assert different propositions in different cells/levels, NOT multiple occurrences of the same proposition).

  When the gating fires, apply the four meta-categories below, in order, as separate cognitive moves:

  1. **Existence Enumeration.** Ask: "What does this term refer to project-wide, regardless of the inquiry's frame?" List each project-wide referent. Dimensions where the term may vary include (not exhaustive): TYPE (multiple referent types), LAYER (project-wide vs per-inquiry; pre-condition vs operation), PHASE (project phase-dependence), AGENT (multiple users / agents), TIME HORIZON, STRUCTURAL ROLE. For each referent enumerated, check whether the inquiry's frame's scope includes it. Failing to enumerate any referent-axis that has multiple project-wide values is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis.

  2. **Role Assessment.** For each referent identified as outside the inquiry's frame, ask: "What role does this referent play in the operation being organized?" State the role explicitly. Then ask: "Is the operation's coherence preserved if this excluded referent is ignored?" If NO — the operation depends on the excluded referent — the corrective is NOT to force the referent into the current frame, but to RE-LOCATE it to its correct in-scope layer (e.g., project-wide pre-condition vs per-inquiry artifact) and note that the current inquiry operates within a per-layer slice of the operation.

  3. **Verdict Rigor.** For any "out of scope" or "clean boundary" verdict produced in this perspective (or referenced from another perspective), state the strongest counter-argument and test it on structural grounds. This applies failure mode #5 (Clean Resolution Trap)'s corrective to the frame-exit axis: a clean-boundary verdict that survives only because the counter-argument was never tested is LOW CONFIDENCE.

  4. **Residual / Coverage Justification.** After applying the three named meta-categories above, ask: "Is there a frame-exit concern about this term — anything the inquiry's frame might exclude — that the named categories did NOT capture?" If yes, name it; apply Existence Enumeration + Role Assessment + Verdict Rigor to it. The named categories above are not exhaustive of frame-exit concerns; this closing-step is the perspective's anti-self-narrowing check. Termination: if applying the named categories to a residual concern produces no new substantive findings — the concern reduces to already-captured cases or to intentional bounding decisions — terminate the recursion. Unbounded recursion is a sign of inquiry-frame instability, not of frame-exit completeness; if recursion would continue indefinitely, the issue is upstream of this perspective.

  Example (positive — gating fires): a metaloop-ladder inquiry inherits "Memory" from a prior session-architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — human-mental memory; system-written md files (e.g., per-inquiry md files written by /MVL or /MVL+ runners); runtime in-memory state. The meta-loop frame's scope includes only the first; the other two are excluded. Role Assessment finds the md-file referent load-bearing (persistent memory across inquiries). Verdict: re-locate, not exclude.

  Example (negative — gating does NOT fire): a code review where a function-name "authenticate" appears in 2 call sites with the same meaning is NOT distinct propositions; the gating predicate yields FALSE; the perspective skips.

  Failing to apply this perspective when the inquiry has inherited multi-value terms in its own committed structures is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis. Failing to apply Verdict Rigor when a clean-boundary verdict is produced is additionally an instance of Clean Resolution Trap (failure mode #5) applied to the frame-exit axis.

* Phase / Calibration-State — does this rule depend on calibration that the current project state has? See the Phase / Calibration-State perspective requirement refinement below for when this perspective is required.


Extract new anchors from each perspective.

*Refinement note (applies at Phase 2 Perspective Checking):*

**Phase / Calibration-State perspective requirement.** When the inquiry involves rules that may behave differently in different project phases or calibration states, the Phase / Calibration-State perspective from the list above is required (not optional). Ask: does this rule depend on calibration that the current project state has? If not, what should the early-stage default be? Is the rule's correctness contingent on a phase the project has not yet reached? Failing to apply this perspective when the inquiry involves phase-dependent rules is an instance of Perspective Blindness (failure mode #4) applied to the calibration-state axis.

*Meta-Inspection cross-reference: after SV3 is produced, apply the meta-question to H1 (candidate set), H2 (frame scope — already triggered by Frame-exit Completeness above), H3 (question framing), H7 (phase/calibration state — already triggered by Phase/Calibration-State perspective above). H1 and H3 are 14-00-deferred checks that integrate as hook sub-aspects at ≥3-instance revival; at this iteration of the spec, H1 and H3 fire informally as practitioner judgment. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*

#### Sense Version 3 (SV3 — Multi-Perspective Understanding)

Update your understanding based on perspective analysis. Highlight major shifts, expansions, or reframings.

---

### Phase 3 — Ambiguity Collapse

Ambiguity Collapse is the process of identifying confusions and converting each resolution into explicit structural commitments.

Identify:

* Vague terms
* Conflicting interpretations
* Unclear goals
* Hidden assumptions

Resolve or narrow them using strong anchors.

For each identified ambiguity, provide a structured entry:

#### Ambiguity:
[Describe the vague term, conflict, assumption, or unclear goal]

**Strongest counter-interpretation:**
[State the best case for a DIFFERENT resolution. What is the strongest
argument against your chosen resolution? If you cannot articulate a
counter-interpretation, you have not tested this resolution — do not proceed.]

**Why the counter-interpretation fails (structural grounds):**
[State WHY the counter fails — which specific mechanism, component, or
evidence disproves it. "The existing spec says X" is precedent, not
structural evidence. "The mechanism can't produce Y because Z" is
structural evidence. If you can only dismiss the counter by citing
precedent, the resolution is LOW CONFIDENCE.]

**Confidence:** HIGH (evidence demands this over the counter-interpretation on structural grounds) |
LOW (elegant but the counter-interpretation has structural merit — do not treat as irreversible)

**Resolution:**
[Chosen interpretation or decision]

**What is now fixed?**
[Which parameters, meanings, or structures are now locked]

**What is no longer allowed?**
[Which interpretations, options, or behaviors are excluded]

**What now depends on this choice?**
[Which components, processes, or future decisions rely on this resolution]

**What changed in the conceptual model?**
[How this resolution reshapes the overall understanding]

Ensure that each entry results in a measurable reduction of ambiguity and interpretive freedom. Focus on irreversible or high-impact commitments.

*Refinement note (applies at Phase 3 Ambiguity Collapse):*

**Load-bearing concept test.** In addition to vague terms, conflicts, unclear goals, and hidden assumptions identified above, generate at least one ambiguity-collapse pair testing each load-bearing concept that has been stabilized in any earlier Sensemaking output. A load-bearing concept is one whose presence materially affects downstream stages — i.e., removing it would change the loop's verdict. The test predicate is appropriate to the concept's location:

- Phase 1 / Cognitive Anchor Extraction items phrased as fixed properties of the domain (Constraints) or as project axioms (Foundational Principles) → test domain-property-vs-external-default. Counter-interpretation: "Is this the project's actual property/principle, or an external default the loop adopted without testing?"
- SV2+ Terminology — newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions → test domain-terminology-vs-external-default plus user-language alignment. Counter-interpretation: "Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?"
- Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural ("does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?"), discoverability ("if the concept's use depends on a runtime determination, has the determination mechanism been specified, or left implicit?"), and user-language alignment ("does the concept's name match the user's language, or has the loop coined a name without validation?"). The illustrative list is not exhaustive — future sub-aspects may emerge as evidence accumulates.

Failing to generate at least one ambiguity-collapse pair per load-bearing concept is an instance of Premature Stabilization (failure mode #2).

*Refinement note (applies at Phase 3 Ambiguity Collapse):*

**Specific-vs-pattern recognition cue.** When Sensemaking commits to a key concept describing "what the problem IS" — particularly when that concept appears as a Phase 1 / Key Insight built from a small set of specific examples (e.g., observations from one inquiry, instances from one corpus chain) — the ambiguity-collapse pair MUST explicitly ask: are these specific examples THE WHOLE PROBLEM, or just a few cases of a wider pattern? The strongest counter is: a small set of examples doesn't always tell us about the wider pattern; the concept might fit those examples but miss the broader problem they're examples of.

*Meta-Inspection cross-reference: the Load-bearing concept test and Specific-vs-pattern recognition cue above ARE the meta-question applied to H4 (concept names) and H5 (motivating examples). No new check fires here; the cross-reference names the existing pattern. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*

#### Sense Version 4 (SV4 — Clarified Understanding)

Summarize the input after ambiguity resolution. Emphasize what is now clear and what is no longer viable.

---

### Phase 4 — Degrees-of-Freedom Reduction

Determine:

* What variables are now fixed
* What options are eliminated
* What paths remain viable

Constrain the solution space accordingly.

#### Sense Version 5 (SV5 — Constrained Understanding)

Present the stabilized problem structure. Show how solution space is now limited and organized.

---

### Phase 5 — Conceptual Stabilization

Synthesize results into:

* A coherent interpretation of the input
* A clear problem structure
* A stable action or solution framework

*Refinement note (applies at Phase 5 Conceptual Stabilization):*

**Accommodation trigger.** When new perspectives keep producing anchors that destabilize the current model — each perspective forces a revision, the model doesn't settle, you keep patching — the structural model itself may be wrong. Don't add exceptions. Drop back to Phase 2 and re-extract anchors using the destabilizing perspectives as primary sources. The problem isn't unresolved ambiguity — it's a structural model that doesn't fit the territory. Failing to recognize this and forcing stabilization is an instance of Premature Stabilization (failure mode #2) applied to the *model-misfit axis* — distinct from but related to the *early-clarity-arrival axis* the original Premature Stabilization rule addresses. (Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)

*Meta-Inspection cross-reference: the Accommodation trigger above IS the meta-question applied to H6 (model fit). No new check fires here; the cross-reference names the existing pattern. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*

#### Final Sense Version (SV6 — Stabilized Model)

Present the final, high-level conceptual model. This should represent mature, low-ambiguity understanding.

Explain how it differs from SV1. 