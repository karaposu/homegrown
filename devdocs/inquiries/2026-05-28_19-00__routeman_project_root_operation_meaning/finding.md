---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: routeman_project_root_operation_meaning

## Question

The user noticed that running `/routeman` at project root — with no inquiry folder, in a warmed-up navigation session — felt like it should produce a useful "list of concepts, features, project directions." They asked: *"so routeman, if run in root should give us list of concepts features, project directions? does this makes sense?"* The user picked the **Meaning layer** explicitly: *"What IS routeman's cognitive operation when invoked at project root? The current spec defines routeman as enumerating typed next-moves from a state+goal. Concepts/features/directions are NOT next-moves — they're more like artifact-modeling content (the territory /comprehend used to occupy, per the 18-58 inquiry)."*

The inquiry diagnoses the Meaning-layer question: when routeman is invoked at project root, what IS its cognitive operation? Three sub-hypotheses were carried into the pipeline:
1. **(i) WRONG-TOOL** — routeman is the wrong cognitive operation for project-root scope; the right operation is artifact-modeling (which is /comprehend's territory).
2. **(ii) SILENTLY-TWO-OPERATIONS** — routeman silently covers two distinct operations (typed-next-moves at inquiry-folder scope; concept/feature/direction enumeration at project root) and the second one needs explicit naming.
3. **(iii) STRUCTURAL-COLLAPSE** — "next-moves at project scope" structurally collapses into "concepts/features/directions" and routeman's spec just needs to make that visible.

Process-layer details (what /comprehend's output looks like in concrete; how the handoff is wired) and Structural-layer details (would routeman's spec benefit from explicit "wrong tool at project root" guidance?) were declared out of scope for THIS run and flagged as sequential follow-ups.

## Finding Summary

- **Verdict:** routeman is the wrong tool for the user's hypothesized output ("list of concepts, features, project directions") at project root; the right operation is **/comprehend** (artifact-modeling); the canonical composition is **Shape H** (`/comprehend → /routeman`) from the 18-58 finding. Confidence: HIGH.

- **Six independent identity anchors** in routeman's spec converge on the wrong-tool reading: §1.1 verb-meaning ("enumerate next moves... type each by movement category"); §1.2 upstream-precondition (consumes artifacts of a completed cognitive cycle); §1.3 NOT-list row 4 (does not produce state); §1.4 vocabulary for `current state` (lists cycle-output shapes, not project artifacts); §1.5 boundary placement (between cognitive cycles); §2.2 16-type taxonomy (movement verbs; not concept/feature classes). The anchors are structurally distinct layers — each independently rules out artifact-modeling.

- **Verdict scoped.** Wrong-tool for THIS output shape (concepts/features/directions). Routeman remains the right tool at project root WHEN state + goal are properly supplied AND the user wants next-move enumeration. The 15-48 finding's two-axis frame (cognitive necessity + source flexibility) joins a third axis surfaced here: **operation-shape fit** — input-shape-legality (15-48 Axis 2) does NOT determine operation-shape-fit. Both must pass independently.

- **Shape H is the composition pattern that fits.** First `/comprehend` builds a tested working model of the project (Mechanistic: components + how-they-interact; Intent: design rationale + project trajectory); the comprehended model becomes routeman's `current state` input; then `/routeman` enumerates typed next-moves over that comprehended state toward a goal. The user's "second invocation more accurate" intuition maps onto /comprehend's depth hierarchy (CV1 Structural → CV5 Generative), not routeman's state-evolution re-run.

- **/comprehend revival reactivates.** /comprehend is currently non-active at `cognitive_harness/non-active/comprehend/`. The 18-58 finding deferred its revival pending an audit of /comprehend's deprecation reason. This inquiry's verdict supplies a concrete use case (project-root artifact-modeling in warmed-up navigation sessions) that strengthens the revival prompt. The 18-58 audit-first sequencing is preserved — this finding does not bypass the deprecation-reason unknown.

- **The user's intuition is right at the cognitive-intent layer; mis-routed at the discipline-selection layer.** "Something useful comes from a warmed-up navigation session at project root" is correct. The mistake is which discipline produces the useful output. Contributing causes named: routeman's `SKILL.md` description's "give me the directions to consider" phrasing (move-directions in the spec; project-trajectory-directions in the user's reading — surface-vocabulary overlap); and the agent's prior framings narrowing routeman to inquiry-folder scope (the 15-48 / 17-30 Q7 systematic-narrowing pattern's prior instances).

## Finding

The user has been working with routeman across several inquiries this session — 15-48 (input contract two-axis), 17-30 (read-policy on docarchive), and now this one. The pattern across all three is the same: the user pushes on a place where the agent's framing of routeman doesn't quite match the spec's identity claims. The first two inquiries resolved within routeman's scope (input shape; what files routeman reads). This one cuts deeper: the user's hypothesized output ("concepts, features, project directions") doesn't fit routeman's operation at all, no matter how the input is shaped. The Meaning-layer question is whether the operation extends to that output, and the answer is no — but the user's intuition that the scenario warrants SOME cognitive operation is right; just not routeman's.

### 1. Routeman's identity per the spec

Routeman's spec at `cognitive_harness/routeman/references/routeman.md` defines the discipline's identity in §1 with six structurally distinct anchors, plus the 16-type taxonomy in §2.2. Each anchor independently rules out artifact-modeling of project content. The convergence is across distinct layers — verb-meaning, precondition, exclusion, vocabulary, structural placement, and output classification — so it's not "one anchor split into six." Each layer would have to be independently overturned to support a project-root artifact-modeling reading.

| Spec section | What it says (verbatim or short paraphrase) | What it commits |
|---|---|---|
| **§1.1 verb-meaning** | *"To route is to enumerate possible next moves from a current state toward a goal or subgoal, type each by movement category, evaluate each for reachability and priority, and attach per-route prescriptive guidance — without selecting which move to take."* | Output unit is the typed **route** (a next move). Not the model component, not the concept, not the feature. |
| **§1.2 upstream-precondition** | *"Routeman is the boundary cognitive operation that consumes the artifacts of a completed cognitive cycle... Without prior cognitive work producing a state worth enumerating from, routeman has nothing to enumerate."* | Routeman presupposes prior cycle work. Project root content is not, in general, the artifact of a completed cognitive cycle — it's the project's working state. |
| **§1.3 NOT-list, row 4** | *"The state being enumerated from — Routeman consumes the state as input; it does not produce the state. The cognitive work that produced the state is upstream."* | Routeman does NOT model or build the state. Building the state is upstream of routeman — a different cognitive operation. |
| **§1.4 vocabulary for `current state`** | *"The result of prior cognitive work that routeman enumerates from. Includes settled understanding, generated candidates, critique verdicts, telemetry, and unresolved openings. Received as input."* | The state-vocabulary lists **cycle-output shapes** (sensemaking outputs, innovation candidates, critique verdicts). Not project-artifact shapes (concepts, features, code modules). |
| **§1.5 boundary placement** | *"Routeman is a boundary discipline — it operates between cognitive cycles, consuming what one cycle produced and producing the typed-next-moves field that selection or subsequent cycles consume."* | Routeman's structural role is **between cycles**, not at project root with no cycles. |
| **§2.2 movement-type taxonomy** | 16 types organized in 3 Families (Progression: DEEPEN / REFINE / PURSUE-SEED / INVESTIGATE-FRONTIER / DEVELOP / TERMINATE; Re-orientation: RE-RUN DEEPER / WIDEN / REFRAME / DIFFERENT APPROACH / DIAGNOSE; Coordination: REVISIT / UNBLOCK / MERGE / TEST / CONSOLIDATE). Closed at the meaning-layer. | The taxonomy classifies **moves** (verbs of action). Features and concepts are not in the taxonomy. The closed-at-the-meaning-layer constraint means features/concepts aren't accidentally-uncovered — they're structurally outside what counts as a route. |

The strongest counter-interpretation considered: *"completed cognitive cycle could metaphorically include project's prior development; code files are artifacts; the precondition is met."* This stretch was tested at two independent layers and failed both. The §1.4 vocabulary specifies which artifact kinds count (cycle-output shapes — settled understanding, generated candidates, critique verdicts); code files and design docs don't match those shapes. The §2.2 taxonomy reinforces: the 16 movement types operate over cycle-output substrate (DEEPEN-an-understanding, REVISIT-a-verdict, CONSOLIDATE-pieces); code files aren't substrate for those verbs in the spec's sense. Two-layer structural-evidence refutation; the metaphor stretch does not survive.

### 2. /comprehend is the operation that fits

/comprehend's spec at `cognitive_harness/non-active/comprehend/SKILL.md` describes the operation precisely: *"Transforms observable-but-opaque artifacts (codebases, systems, documents, designs) into tested working models with predictive power... Use when the user asks to 'understand,' 'explain,' or 'model how X works,' when a codebase or system needs deep analysis before modification, when a design needs to be reverse-engineered."*

The reference at `cognitive_harness/non-active/comprehend/references/comprehend.md` deepens the identity: comprehension is **model construction** — building a representation of the artifact that can predict behavior, explain design rationale, and identify what would break if conditions changed. It has two aspects: **Mechanistic** ("How does this work?") and **Intent** ("Why was this built this way?").

The user's hypothesized output maps cleanly onto /comprehend's territory:
- **"Concepts"** ≈ components in the project's structural model (Mechanistic)
- **"Features"** ≈ functional units in the artifact-model (Mechanistic)
- **"Project directions"** ≈ design rationale + project trajectory (Intent)

The two operations — routeman (candidate-adjudication: enumerating typed next-moves over a settled state toward a goal) and /comprehend (artifact-modeling: building a predictive model of an opaque artifact) — are structurally distinct cognitive operations. This distinction was committed by the 18-58 finding (`devdocs/inquiries/2026-05-27_18-58__next_focus_understand_discipline_evaluation/finding.md`). They are not redundant tools doing the same job at different scales; they do different cognitive work.

### 3. Verdict scoping — the third axis

The 15-48 finding committed routeman's two-axis input contract:
- **Axis 1 — Cognitive necessity** (state + goal as concepts REQUIRED)
- **Axis 2 — Source flexibility** (folder path / raw text / implicit-surfaced FLEXIBLE)

This inquiry surfaces a third axis that joins the frame:

- **Axis 3 — Operation-shape fit.** The discipline's spec-committed operation must match the output shape the caller wants. Input-shape-legality (Axis 2) does NOT determine operation-shape-fit. Both must pass independently for the invocation to be appropriate.

The user's invocation at project root passed Axes 1 + 2: state + goal could be surfaced from the warmed-up context; project root is a legal input shape per the 15-48 source-flexibility verdict. But Axis 3 failed: routeman's committed operation produces typed next-moves, not concepts/features/directions. The wrong-tool verdict names this Axis 3 failure.

The verdict is therefore **scoped**, not universal. Routeman remains the right tool at project root **when both conditions hold**:
- (a) state + goal are properly supplied (via raw text per Axis 2, or via a project-level folder whose content can be reconstructed into cycle-output-shaped state — rare in practice);
- (b) the user wants next-move enumeration (a Route Map of typed moves toward the stated goal), not a model of the project's components.

When either condition fails, routeman is the wrong tool by operation-shape mismatch (not by spec violation; the input is legal).

### 4. Shape H — the canonical composition

The composition pattern that fits the user's full scenario is **Shape H: `/comprehend → /routeman`**, identified in the 18-58 finding as the artifact-modeling-before-enumeration composition.

**Mechanic.** At project root, the warmed-up navigation session runs `/comprehend` first — building a tested working model of the project. The comprehended model becomes routeman's `current state` input. Then `/routeman` enumerates typed next-moves over that comprehended state, toward a goal that may have been surfaced during comprehension.

**The "second invocation more accurate" intuition fits /comprehend, not routeman.** /comprehend's depth hierarchy (CV1 Structural → CV2 Behavioral → CV3 Causal → CV4 Hardened → CV5 Generative) is exactly the progressive-deepening mechanism the user described. Each pass goes deeper. Routeman's re-invocation pattern (parameterized variation when state evolves) doesn't fit because state doesn't evolve at project root between invocations unless code is changed.

**Dependency.** Shape H requires /comprehend to be an active, runnable discipline. /comprehend is currently non-active per the 18-58 deferred-revival decision. Shape H's operational use is blocked until that revival happens — which the next section routes.

Detailed Process-layer mechanics (what /comprehend's output looks like in concrete; how the handoff from /comprehend to /routeman is wired; whether CV-depth should be a parameter to /comprehend in Shape H) are **out of scope** for this Meaning-layer finding. They become Process-layer follow-up if /comprehend revival activates.

### 5. Why the mis-invocation happened

Two contributing causes, both external to the user's reasoning:

**Cause #1 — Surface-vocabulary overlap in routeman's documentation.** Routeman's `SKILL.md` description includes the phrase *"Use when the user asks... 'give me the directions to consider.'"* The word "directions" here refers to **move directions** (the next moves to consider; routes). The user's hypothesized "project directions" refers to **project-trajectory directions** (where the project is heading; design rationale). Same word; different referents. The surface overlap plausibly contributed to routeman feeling like the right tool for an artifact-modeling task. This is a spec-surface contribution.

**Cause #2 — Agent's prior framings narrowed routeman's perceived scope.** The 15-48 finding's Q7 frontier flagged a systematic-narrowing pattern in the agent's framings; the 17-30 inquiry documented a second observed instance (Story 1 in `devdocs/routeman_user_stories.md` claiming routeman reads `docarchive/` by default — corrected via MUST-1 in 17-30's finding). The narrowings established routeman as the dominant project-scope-routing tool in the user's mental model. When the user reached for the discipline that should do project-root work in a warmed-up navigation session, routeman was the salient option — even though the operation-shape didn't fit.

Both causes are downstream of pre-existing patterns and surface-vocabulary structures. The user's intuition at the cognitive-intent layer (something useful comes from warmed-up project-root invocation) was sound; the discipline-selection layer mis-routed because the project's documentation surface didn't disambiguate the operation-shape-fit axis.

### 6. Honoring the intuition; re-routing the operation

The user's intuition operates at two distinct layers, and the verdict respects each separately.

- **Cognitive-intent layer — intuition validated.** "A warmed-up navigation session at project root should produce useful output regarding navigation and a route list" is right. The scenario warrants a cognitive operation; something useful does come from it. Specifically, what comes is a tested working model of the project (concepts + features + design rationale + project trajectory). The "second invocation more accurate" intuition is also right — progressive depth is exactly how the operation works.

- **Discipline-selection layer — re-routed.** The operation that produces that useful output is /comprehend (artifact-modeling), not /routeman (candidate-adjudication). These are structurally distinct cognitive operations per the project's own committed vocabulary. Routeman's spec-committed operation produces typed next-moves over a settled cycle-state — a different output shape from concepts/features/directions.

The mis-routing is downstream of agent framings + surface-vocabulary overlap, not a user reasoning error. The corrective doesn't override the intuition; it points the intuition at the correct discipline.

## Next Actions

### MUST

(none — Meaning-layer verdict alone doesn't impose actions on the user.)

### COULD

- **COULD-1 — Open the /comprehend deprecation-reason audit inquiry.**
  - **What:** Open a `/MVLw` inquiry on the question "why was /comprehend deprecated?" — auditing the non-active spec at `cognitive_harness/non-active/comprehend/` for the deprecation reasoning (commit history; archive notes; cross-references in prior inquiries).
  - **Who:** the user (decide when to prioritize); the inquiry itself would consume the /comprehend non-active artifacts as input.
  - **Gate:** condition-bound — when the user wants to act on Shape H operational use AND wants to honor the 18-58 audit-first sequencing.
  - **Why:** the 18-58 finding deferred /comprehend revival pending this audit; this inquiry's verdict supplies a concrete use case strengthening the revival prompt. Without the audit, revival risks re-introducing whatever caused deprecation.

- **COULD-2 — Process-layer inquiry on /comprehend's output at project root.**
  - **What:** Open a `/MVLw` inquiry on "what does /comprehend's output look like at project root in concrete? what's the handoff to /routeman in Shape H?"
  - **Who:** the user.
  - **Gate:** condition-bound — after COULD-1 (audit) concludes /comprehend is safe to revive.
  - **Why:** this Meaning-layer finding commits Shape H as the right composition but does not address Process-layer details. The follow-up inquiry would design the operational mechanics.
  - **Depends-on:** MUST or COULD-1's revival decision. This COULD is GATED — do not act until /comprehend revival is approved.

- **COULD-3 — Structural-layer inquiry on routeman's spec.**
  - **What:** Open a `/MVLw` inquiry on "would routeman's spec benefit from explicit 'wrong tool at project root' guidance, or from Axis 3 (operation-shape fit) being named in §3.2?"
  - **Who:** the user.
  - **Gate:** condition-bound — after this Meaning-layer verdict is digested AND the user judges the spec's current surface insufficient for preventing future mis-invocations.
  - **Why:** the spec amendment would prevent future agents from making the routeman → artifact-modeling mis-routing this inquiry diagnosed. SHOULD-CONSIDER, not MUST.
  - **Depends-on:** none directly; can run independently of COULD-1 and COULD-2.

### DEFERRED

(none.)

## Reasoning

### Why this verdict held

The verdict survived adversarial testing across eight dimensions including two CRITICAL project-specific risk axes (Layer Commitment discipline + meta-fidelity).

- **Spec-grounding rigor.** Every load-bearing claim cited: routeman §1.1 verb-meaning verbatim; §1.2 upstream-precondition verbatim; §1.3 NOT-list row 4 verbatim; §1.4 vocabulary verbatim; §1.5 boundary placement verbatim; §2.2 taxonomy enumerated; /comprehend SKILL.md description verbatim; /comprehend references verbatim. The strongest counter-interpretation — the metaphor stretch — was tested at two independent layers (§1.4 vocabulary + §2.2 taxonomy) and failed both.

- **Layer Commitment discipline.** No Process-layer content (what /comprehend would output in concrete; how the Shape H handoff is wired) or Structural-layer content (spec amendment text) appears in this finding's body. Process and Structural follow-ups are FLAGGED in COULD-2 + COULD-3 but not addressed.

- **Meta-fidelity.** The diagnosis of "agent narrows disciplines" does not itself narrow. The six-anchor convergence is described as "structurally distinct layers" to preempt the "one anchor split into six" reading. Shape H is named with explicit /comprehend-non-active dependency to prevent false-confidence positioning.

### Alternatives considered and killed

- **"The metaphor stretch — 'completed cognitive cycle' includes 'project's prior development' — is plausible-reading."** KILLED. The stretch fails at the §1.4 vocabulary layer (code files don't match the listed artifact-kinds) and at the §2.2 taxonomy layer (code files aren't substrate for the 16 movement verbs). Two-layer structural-evidence rebuttal; not over-strict, just precise.

- **"Sub-hypothesis (ii) SILENTLY-TWO-OPERATIONS."** KILLED. The spec shows positive evidence of single-operation identity (consistent §1-§5; one verb-meaning; one closed taxonomy; one Route Map output). The 18-58 finding's project-canonical naming makes routeman and /comprehend EXPLICITLY two distinct disciplines — not one with silent duality.

- **"Sub-hypothesis (iii) STRUCTURAL-COLLAPSE."** KILLED. The user's hypothesized output is a tightly-integrated triple; features and concepts don't fit any of the 16 movement types; partial-coverage of "directions" via REFRAME / DIFFERENT APPROACH doesn't salvage the triple.

- **"Recommend /comprehend revival immediately based on this inquiry's strong use case."** KILLED. The 18-58 audit-first commitment is inherited context; the deferral reason (audit deprecation-reason unknown before reviving) is risk-management. A strong use case doesn't change the unknown; it strengthens the prompt to investigate the unknown. Bypassing the audit would be over-confidence, not honest commitment-honoring.

- **"Naming agent's prior framings as a contributing cause is deflection from spec ambiguity."** KILLED. The corrective names two distinct contributing causes, and Cause #1 IS the spec-surface concern (the SKILL.md "directions to consider" surface vocabulary). The reorder of causes (#1 surface-vocab; #2 agent-framings) preempts the deflection reading.

- **"The cognitive-intent vs discipline-selection split is artificial."** KILLED. The two layers have independent truth values in this case (cognitive-intent is true; discipline-selection is false), proving the split is structural rather than post-hoc rationalization.

- **"Three instances of the systematic-narrowing pattern isn't independent evidence because instance 3 is downstream of 1+2."** ADDRESSED, not killed. The Q7 frontier update explicitly acknowledges the downstream-causation. The promotion criterion (N≥3 OR sufficient cross-evidence) is conjunctive-with-judgment; three instances of a propagating pattern is meaningful supporting evidence but doesn't mechanically promote the verdict.

### Refinements applied during Critique

Three light REFINEs surfaced during adversarial testing and were applied:

- **Q1 added the parenthetical "structurally distinct layers"** to preempt the "one anchor split into six" reading.
- **Q5 reordered the contributing causes** to lead with the spec-surface contribution (Cause #1 surface-vocabulary) before the agent-framing pattern (Cause #2), preempting the deflection objection.
- **Q8 led the Finding Summary** with the direct verdict ("routeman is the wrong tool for the user's hypothesized output... the right operation is /comprehend; the canonical composition is Shape H") rather than the abbreviated label.

## Open Questions

### Research Frontiers

- **Wider standing question (carried forward from 15-48 + 17-30 Q7):** does the agent's mental model SYSTEMATICALLY narrow disciplines to their most-common invocation contexts? Specifically: does it narrow routeman to inquiry-folder scope and obscure the operation-shape-fit axis at other scopes?

  *Third observed instance added by this inquiry:* the routeman mis-invocation at project root. The mis-invocation pattern matches: discipline-selection follows the agent's prior framings + surface-vocabulary overlap; the operation-shape-fit axis is not surfaced; the user reaches for the dominant-framed tool.

  *Sequencing observation:* this instance is plausibly DOWNSTREAM of instances 1 (the 15-48 finding's agent "routeman has nothing to enumerate from" framing) and 2 (the 17-30 Story 1 docarchive over-claim). The narrowings in instances 1-2 plausibly contributed to the user's routeman invocation in instance 3 — making this an instance of the pattern propagating across conversations rather than three independent observations.

  *Scope disclaimer (firm):* this inquiry diagnoses the specific case and supplies a third evidence point. The wider standing question is NOT resolved here. Promotion criterion (N≥3 instances OR sufficient cross-evidence) is conjunctive-with-judgment; this inquiry brings the count to N=3 but the count is plausibly downstream-caused, not independent. Whether to promote is a future-inquiry decision, not a pre-commitment by this finding.

### Blocked

- **Shape H operational use is blocked** on /comprehend revival, per the 18-58 audit-first commitment. COULD-1 (the audit inquiry) is the immediate unblock candidate; COULD-2 (Process-layer Shape H mechanics) is GATED on COULD-1's revival decision.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVLw

i am noticing sth weird


lets say we have a project that was already worked on a bit, but wihtout MVL loops.  and we get only one folder inside inquiries folder. for some feature thing. it is just one run

and we have navigation session and run the routeman. 

if what routeman does is to go and read the inquiries fodler contents instead of inspecting the project, it will be messed up. 


and yeah i know navigation session requires warm up. thats okay. but still i feel like i can run routeman as root in warmed up session and get something useful regarding navigation and routelist. And also i could be able to run it a second time and i should get sth more accuarete ... 


so routeman  , if run in root should give us list of concepts features, project directions?  does this makes sense?
```

User's layer-pick (follow-up response that locked Layer Commitment to Meaning):

```text
Meaning layer. What IS routeman's cognitive operation when invoked at project root? The current spec defines routeman as
enumerating typed next-moves from a state+goal. Concepts/features/directions are NOT next-moves — they're more like
artifact-modeling content (the territory /comprehend used to occupy, per the 18-58 inquiry). If your hypothesis is right,
project-root invocation might not be a different mode of routeman but a different cognitive operation entirely — which means
either (i) routeman is the wrong tool for project-root scope, (ii) routeman silently covers two distinct operations and the second
one needs naming, or (iii) "next-moves at project scope" structurally collapses into "concepts/features/directions" and the spec
just needs to make that visible. This layer adjudicates what the operation IS.
```

</details>
