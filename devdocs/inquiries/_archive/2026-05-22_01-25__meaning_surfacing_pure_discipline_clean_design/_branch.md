# Branch: Surfacing — Pure Discipline Clean Design (Meaning Layer)

## Question

What IS "surfacing" as a cognitive discipline — independent of how the current /explore is implemented — given that the discipline's job is **only** to surface what exists that is relevant (core-relevant, sub-relevant, side-relevant) and to NOT surface what is irrelevant, where: (a) surfacing does NOT do sensemaking's job or any other discipline's job, (b) surfacing does NOT know about other disciplines (it is self-contained as an "individual" per the project's disciplines-self-contained principle), (c) surfacing carries an internal **relevance-judging mechanism** that is sensemaking-LIKE but is NOT sensemaking, (d) surfacing has a structure (operations, phases, outputs) that makes it inspectable and operationally definite, and (e) surfacing is the **most upstream and most consequential** discipline — its failure cascades into all downstream disciplines, because if relevant content is left unsurfaced or irrelevant content is surfaced, every downstream discipline operates on a wrong set?

## Goal

A from-scratch MEANING-layer characterization of "surfacing" — the **pure version** of what /explore should have been — that the user can use as the foundational concept-statement for the discipline. The user should be able to:

1. **Read one paragraph and understand what surfacing IS** as a cognitive operation, in a way that distinguishes it from sensemaking, decomposition, comprehend, innovation, critique, navigation, reflect, and intuit — without referring to "current /explore" or to any negative framing.

2. **Read the structural shape** of surfacing — what operations it composes, what its internal **relevance-judging mechanism** is (its sensemaking-LIKE-but-not-sensemaking inner engine), what its input is, what its output is, what its phases are, what it must terminate with, and what it must NEVER do.

3. **Read the boundary statement** — what surfacing surfaces (relevant + sub-relevant + side-relevant + core-relevant content) and what it strictly does NOT do (does not extract anchors; does not produce stable meaning; does not partition into pieces; does not generate novel candidates; does not evaluate; does not decide direction; does not learn cross-inquiry). The boundary must be defensible without naming sibling disciplines (the boundary is INTRINSIC to surfacing's identity, not relational).

4. **Read the failure modes specific to surfacing** — what counts as "surfacing did its job badly," with explicit attention to the asymmetry the user named: surfacing a wrong item is one failure; missing a relevant item is a worse failure (because downstream can't recover what was never surfaced).

5. **Read the calibration question** — what makes surfacing's internal relevance-judging mechanism trustworthy + how is its trustworthiness eventually testable (without already requiring downstream disciplines' verdicts, which would couple it back to them).

The deliverable is a written discipline-meaning artifact at the FINDING level — not a runtime spec yet, but the concept that a runtime spec would later operationalize. The user said "lets discuss this" — the discussion happens through the E → S → D → I → C pipeline producing this characterization.

## Scope Check

**Question covers goal.** The 5 goal sub-asks all derive from the question:
- (1) the one-paragraph identity statement ← the question's core "what IS surfacing"
- (2) the structural shape + relevance mechanism ← the question's clauses (c) + (d)
- (3) the boundary statement ← the question's clauses (a) + (b)
- (4) the failure-modes-with-asymmetry ← the question's clause (e) (failure cascades)
- (5) the calibration question ← the question's clause (c) (sensemaking-LIKE but NOT sensemaking — the trustworthiness of the inner mechanism is the load-bearing concern)

**Specific-vs-pattern check.** The question targets the SPECIFIC discipline named "surfacing." The broader pattern (general principles of discipline identity at the MEANING layer) may emerge but is not the goal. The inquiry stays scoped to surfacing-as-a-discipline; if a generalizable principle is surfaced, it goes into Open Questions, not into the finding's primary claim.

**Independence-from-current-/explore enforcement.** The user explicitly framed this as "A clean discussion independent from how explore's current design, which we assume has multi layer problems and issues." The inquiry MUST NOT use current `/explore`'s spec as the starting frame. The current /explore is named "current /explore" or referred to ONLY as a sibling concept being held apart; "surfacing" is named distinctly to mark that this is a clean redesign. The inquiry MAY refer to the project's general vocabulary (relevance, candidate, label, anchor, territory, etc.) and to the disciplines taxonomy at `docs/discipline_taxonomy.md` — but NOT to current /explore's section structure, current /explore's mode-determination, current /explore's components, current /explore's failure modes, or current /explore's §3.1 etc.

**Scope NOT widened to:**
- A runtime spec file for surfacing (separate STRUCTURAL inquiry, downstream).
- Migration plan from current /explore to surfacing (separate PROCESS inquiry, downstream).
- Coordination with /sense-making, /decompose, etc. (separate inquiry; surfacing is self-contained per the user's clause (b)).
- Empirical validation of the relevance-judging mechanism (separate buildout; this inquiry produces the concept, not the calibration data).
- A renaming proposal for the project (whether to rename /explore to /surfacing in code is a separate user-discretion decision, downstream of this inquiry confirming the meaning).

## Layer Commitment

**Primary cognitive layer: MEANING.**

Justification: The user asked "what IS surfacing" — a from-scratch definition of a cognitive discipline. The trigger phrases match `redefine X from scratch` and `what should X be` from the `/MVL+` Layer Commitment template. The question is NOT about the spec's section organization (STRUCTURAL) and NOT about its procedural steps (PROCESS); it is about what surfacing IS AS A COGNITIVE OPERATION.

Out-of-scope alternatives explicitly considered OUT OF SCOPE for THIS run:

- **STRUCTURAL** — the artifact's section shape (header / mode-determination / components / process model / failure modes / etc.) is OUT OF SCOPE here. Once the MEANING is settled, a downstream STRUCTURAL inquiry produces the spec file at `cognitive_harness/surfacing/references/surfacing.md` (or wherever the user chooses to host it). This inquiry produces only the conceptual content.

- **PROCESS** — the operational steps (how the runner actually executes surfacing; scan cycles; signal-detection loops; convergence criteria) are OUT OF SCOPE here. The MEANING characterization will name WHAT operations compose surfacing, but the procedural fine-grain (how many iterations; when to stop; how to invoke) is downstream.

Sequential plan: THIS inquiry (MEANING; what surfacing IS) → IF user chooses: STRUCTURAL inquiry (what surfacing's spec file LOOKS LIKE) → IF user chooses: PROCESS inquiry (the exact operational steps + convergence criteria) → IF user chooses: implementation as a callable skill + migration from current /explore.

## Synthesis Trigger

**OMITTED.** This inquiry does NOT consume prior inquiry outputs as inputs. The user explicitly framed the request as "A clean discussion independent from how explore's current design" — and named this clean concept "surfacing" specifically to mark its independence.

Per the `/MVL+` Synthesis Trigger guidance: "OMIT this section entirely when the inquiry is a fresh inquiry that does not consume prior inquiry outputs as inputs." This inquiry meets that condition.

The project's general vocabulary (relevance, candidate, label, anchor, territory) and the canonical disciplines taxonomy at `docs/discipline_taxonomy.md` may be referenced for orientation, but are NOT inputs in the Synthesis-Trigger sense (commitments-to-be-re-tested). The /explore design history at `docs/discipline_design_history/for_explore.md` is held APART as a known sibling concept — not as a source of commitments this inquiry inherits.

The finding does NOT carry an `## Inherited Commitments Re-test` section because there are no inherited commitments.

## Diagnostic Constraints

- **Independence-from-current-/explore is a hard constraint.** The inquiry must not derive surfacing's identity by negating current /explore's flaws; that would couple surfacing's meaning to current /explore's specifics. Surfacing's identity must stand on its own terms.

- **The disciplines-self-contained principle is honored** (per `/Users/ns/.claude/projects/-Users-ns-Desktop-projects-native/memory/feedback_disciplines_self_contained.md`). The finding may discuss surfacing's relationship to sensemaking conceptually (since the user explicitly invoked the comparison: "sensemaking-LIKE mechanism inside" + "shouldnt do sensemaking's job"), but surfacing's boundary must be intrinsically definable — not "surfacing is whatever sensemaking is not."

- **The relevance-judging-mechanism is the load-bearing concept.** Per the user: "it has it's own relevance sense making like mechanism inside i guess. but not exactly like sensemaking." This is the discipline's signature internal capability. The finding must:
  - Name what this mechanism does.
  - Distinguish it from sensemaking (which does anchor extraction + perspective check + ambiguity collapse + stable understanding).
  - Explain why surfacing needs its own version rather than calling sensemaking (answer: surfacing is upstream of sensemaking; sensemaking depends on surfacing's output; the mechanism inside surfacing is for RELEVANCE-judgment-during-surfacing, not for stable-meaning-construction).
  - Note the calibration question — how does this mechanism become trustworthy.

- **The 4-fold relevance taxonomy from the user.** The user named four relevance modes: relevant + sub-relevant + side-relevant + core-relevant. The finding must engage these four — either confirming this is the right taxonomy, refining it, or surfacing the ambiguity. (Specifically: is "relevant" the umbrella and the other three are types? Or are all four types?)

- **The asymmetric failure principle.** Per the user: "if surfacing surfaces some irrelevant info and leave relevant ones unsurfaced, rest of the disciplines also messed up." The asymmetry between false-positives (surfaced-but-irrelevant; downstream can filter) and false-negatives (missed-relevant; downstream can't recover what wasn't surfaced) is structural. The finding must commit which failure is worse and why — and what surfacing should do under uncertainty (lean toward surfacing or lean toward filtering).

- **Cognitive-position commitment.** The user's clause (e) names surfacing as the **most upstream** discipline ("it is the most important because if surfacing surfaces some irrelevant info and leave relevant ones unsurfaced, rest of the disciplines also messed up"). This positions surfacing at a specific place in any loop — the entry. The finding must accept or refine this positioning. (If accepted: surfacing is the cognitive operation that the entire downstream depends on. If refined: surfacing's relationship to comprehension, inputs, framing, etc. needs clarification.)

- **Anti-overscope discipline.** Per the user's clause (a): surfacing must not do sensemaking's job, decomposition's job, innovation's job, critique's job, navigation's job, reflect's job, comprehend's job, intuit's job. The finding must explicitly enumerate what surfacing does NOT do — but on intrinsic grounds (e.g., "surfacing does not produce stable meaning"), not on relational grounds ("surfacing does not do sensemaking's job"). This is the disciplines-self-contained principle applied at meaning-layer.

- **Disciplines-self-contained vocabulary applied.** Surfacing's intrinsic definition should use the project's general cognitive vocabulary (relevance / territory / item / candidate / signal / etc.) without anchoring to any sibling discipline's specific terms. The finding may mention sibling disciplines as conceptual neighbors for the user's orientation; it may NOT define surfacing in terms of them.

- **Cognitive-investment from current /explore: held apart.** The current /explore has accumulated design knowledge (modes, scan-signal-probe cycles, resolution levels, labels-vs-anchors, confidence levels, frontier tracking, /explore §1.5 declaration, /explore §4.4 labeling-vs-meaning heuristic, etc.). The inquiry's clean-design constraint says these cannot be inherited as starting frames. However: if the finding's clean-derivation INDEPENDENTLY arrives at concepts that overlap with current /explore's vocabulary (e.g., the finding concludes that surfacing must distinguish "label-level" from "interpretation-level" content), that's a CONVERGENCE signal, not a violation. The constraint is on starting frame, not on terminal vocabulary.

- **Structure-is-required.** Per the user: "and it should have a structure." The finding must commit a structural shape for surfacing — not the SPEC's section structure (out of scope), but the conceptual structure: what operations compose it; what is its inner shape; what phases or aspects it has. The user has invited the finding to commit a structure, not to leave the discipline as a vague concept.

- **Reading explicitly required.** The user said "BEFORE STARTING THIS INQUIRY READ ALL IN /Users/ns/Desktop/projects/native/docs fully and also thinking_disciplines/anatomy_of_disciplines.md." This reading provides shared vocabulary (consciousness-gradient, Baldwin cycle, the three-layer quality awareness, the typed 11-primitive set, the meta-loop autonomy ladder, the regression catalog, the discipline taxonomy, the 4 categories, the anatomy template, the materialization lifecycle, the alignment dynamics, the self-improvement rate measurement, the meaningful traversal concept, the navigation as eyes / MVL+ as probe / meta-state as memory triad, etc.). The inquiry's vocabulary should DRAW FROM this corpus where applicable — not invent neighbors. Where the corpus has a named primitive (e.g., **Attention-pointer**, **Working Memory**, **Salience**, **Intuition-similarity**, **Inhibition**, **Metacognition**, **Context-framing**), the finding may use it.

- **Anatomy-of-disciplines compliance.** Per the user's reading list and `thinking_disciplines/anatomy_of_disciplines.md` (read at session start): every discipline has Definition/Philosophy + Structural Components + Process Model + Failure Modes + Coverage Strategy + Output Anatomy (Transform, Progression, Telemetry, Frontier). The finding need not produce all these (that's the downstream STRUCTURAL inquiry's job), but must at minimum produce the Definition/Philosophy + a sketch of the Structural Components + the load-bearing Failure Modes + the Transform (input → output relation). These are the MEANING-layer essentials.

## Relationships

- **DOES NOT CONTINUE FROM:** any prior inquiry on /explore. The user's framing is clean-slate. The inquiry chain from 21-04-00 through 22-00-30 (which culminated in the additive form-(i)/(ii) recognition for current /explore §3.1) is held APART — it operationalizes a different concept (current /explore's incremental improvement), not the same concept (the from-scratch pure version called surfacing).

- **DOES NOT SUPERSEDE:** any prior inquiry. The prior /explore chain remains valid for what it operationalized (current /explore's incremental improvement). If this inquiry's finding ultimately motivates replacing current /explore with surfacing, that's a downstream user-discretion decision; this inquiry does not assert it.

- **RELATED (orientation only; not inputs):**
  - `docs/discipline_taxonomy.md` — the 4-category taxonomy is the project's frame for placing surfacing.
  - `docs/discipline_design_history/for_explore.md` — the prior /explore design history; held APART as a sibling concept.
  - `docs/desc.md` — the autonomous-consciousness-goal frame; the consciousness-gradient.
  - `docs/thinking_space_dynamics.md` — the typed 11-primitive set; the cognitive vocabulary.
  - `docs/regression/desc.md` — the 23-symptom regression catalog; relevant for surfacing's failure modes.
  - `thinking_disciplines/anatomy_of_disciplines.md` — the spec-anatomy template.
  - `thinking_disciplines/what_are_they.md` + `terminology.md` — the disciplines vocabulary.
  - `docs/possible_breakthroughs/2.md` — the user's original observation that motivated this clean-design (held APART; NOT a synthesis input).

- **POTENTIAL DOWNSTREAM:**
  - STRUCTURAL inquiry on the surfacing spec file's section organization.
  - PROCESS inquiry on surfacing's operational cycle.
  - User-discretion decision on whether to rename current /explore → /surfacing or keep both.
  - Migration design from current /explore output format to surfacing output format.
  - Empirical calibration of surfacing's internal relevance-judging mechanism (Baldwin-cycle-style; depends on downstream operating data).
