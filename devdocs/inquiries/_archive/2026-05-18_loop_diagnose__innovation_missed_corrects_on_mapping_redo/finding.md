---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Innovation Missed CORRECTS on Mapping Redo — Diagnostic of a Piece-Level Inversion Gap

## Question

From `_branch.md`:

> Given the weak prior inquiry at `devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/` (which generated a meta-paradigm framework AND declared REFINES + layer-shift framing to the original 7-kinds finding `2026-05-13_07-16__is_mapping_required_core_of_explore/`), the human correction (*"i ddisagree, you shouldnt have preserve the prior understanding just for the sake of preserving it, it tried to understand mapping but it was wrong. redo this"*), and the corrected inquiry at `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/` (which switched to CORRECTS, named the bias preservation-for-preservation's-sake, and introduced the obligatory 3-question diagnostic) — **what did the Innovation discipline in inquiry `12-15` fail to do that would have surfaced the CORRECTS candidate as a real contender against REFINES, focusing strictly on Innovation's own responsibility surface and excluding what other disciplines should have done**?

**Goal:** an evidence-backed diagnostic that identifies Innovation's specific shortcoming(s) on this one correction chain, scoped strictly to the `/innovate` discipline's specified responsibilities (the seven mechanisms, the five tests, the assembly check, the axis-coverage check, the six failure modes) — usable as input for a future redesign of the `/innovate` reference (`cognitive_harness/innovate/references/innovate.md`).

---

## Finding Summary

- **Where Innovation failed (the one specific place in the artifact).** In the weak prior inquiry `12-15`'s saved Innovation output (`docarchive/innovation.md` in that folder), one piece — the one that committed the relationship label between the new finding and the older 7-kinds finding — applied Combination + Absence Recognition only. The Inversion mechanism was applied to a different piece (the classification-guidance piece, which was about explaining how to use the framework to readers). At the relationship-label piece, no Inversion-candidate was generated; CORRECTS was therefore never produced as an alternative for the candidate set to consider.

- **Why the failure occurred (three structural anchors in the `/innovate` reference).** The discipline's specification has three gaps that, together, made the failure observable-but-not-caught:
  - **Definitional ambiguity in §3 Inversion.** The phrase "belief related to the seed" reads two ways. Strict reading: Inversion applies once, to the seed's single top-level belief. Expansive reading: Inversion applies to any load-bearing belief committed inside the inquiry, including per-piece commitments. The spec's own depth-check refinement note ("Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT") supports the expansive reading; the rest of the spec doesn't disambiguate.
  - **Coverage-rule scope gap.** The Coverage Strategy rule (apply at least one Generator + one Framer per seed; aim for all 7) and the Mechanism Coverage Telemetry section both track mechanism EXISTENCE at the seed level. They do not track mechanism LOCUS — where each mechanism was applied within the piece-list. `12-15`'s telemetry tail correctly reported "Framers applied: 3/3" because Lens Shifting, Constraint Manipulation, and Inversion each appeared somewhere in the artifact; no field surfaced that Inversion appeared at a non-load-bearing piece while the load-bearing piece received no Inversion.
  - **Two existing failure-mode prevention rules don't catch this case.** Early Frame Lock's prevention rule ("after the first successful output, apply at least one more mechanism") is mechanism-COUNT-aware: `12-15` applied multiple mechanisms to the relationship-label piece (Combination + Absence Recognition), satisfying the count. Survival Bias's prevention rule ("deliberately test the most uncomfortable output with extra care") presupposes the uncomfortable output exists in the candidate set; in this case, the uncomfortable output (CORRECTS) was never generated, so there was nothing to test.

- **What Innovation should have done (the one move that would have surfaced CORRECTS).** Generated an Inversion-candidate at the relationship-label piece, asking the canonical Inversion question — "what is the assumption this piece commits, and what if it's reversed?" — applied to the piece's committed assumption ("the prior is preservable at its level"). The reversed assumption ("the prior is wrong at its level") is exactly the CORRECTS-candidate. The corrected inquiry `12-45`'s saved Innovation output demonstrates this move four times at piece-level (it applied Inversion at the diagnostic-rule piece, the bias-naming piece, the meta-pattern piece, and the self-reference-acknowledgment piece). The contrast between `12-15` (no piece-level Inversion at the load-bearing piece) and `12-45` (piece-level Inversion four times in the same conceptual cluster) is the diagnostic's load-bearing evidence.

- **The deliverable: a five-piece refinement set for `/innovate` reference.** The finding produces a set of five concrete spec-edit proposals, all operating exclusively within the `/innovate` reference, ranked as an emergent assembly above any single piece:
  - **Q1 — Definitional clarification at §3 Inversion.** A specific text edit that commits to the expansive reading of "belief related to the seed," explicitly including piece-internal load-bearing commitments.
  - **Q2 — Determination mechanism for "meta-decision piece."** A four-property checklist that tells the runtime LLM which pieces require piece-level Inversion: pieces that commit a relationship label, a framing semantic, lesson-vocabulary, or evaluation criteria. Edge cases handled by a retrospective self-audit after the run.
  - **Q3 (the load-bearing piece) — Piece-level Inversion rule.** A MUST rule with override path: at every meta-decision piece, Innovation generates an Inversion-candidate that names the reversed assumption and is tested via the existing 5-test cycle. When Inversion is genuinely inapplicable, the runner records "Inversion-marked-inapplicable: [specific reason]" — intentional friction prevents abuse.
  - **Q4 — Failure-mode prevention refinements.** Early Frame Lock's prevention rule becomes mechanism-TYPE-aware (at meta-decision pieces, the additional mechanism MUST include Inversion). Survival Bias gains a prior-step never-generate variant (when the candidate set at a meta-decision piece has only the preserve-direction, the bias is operating BEFORE testing).
  - **Q5 — Telemetry extension.** A per-piece mechanism log surfacing mechanism-locus alongside mechanism-existence; a refined FLAG condition that fires when a meta-decision piece received no Inversion (without override); a RE-RUN condition that fires when multiple violations occur.

- **The emergent assembly (ranked above any single piece).** The five pieces compose into a layered enforcement architecture for piece-level Inversion at meta-decision pieces: Q1 sets the reading, Q2 sets the determination, Q3 sets the positive rule, Q4 sets the failure-mode recognition signals, Q5 sets the observability. Defense-in-depth — five independent layers must all fail for the diagnostic's case to recur. This composition is the finding's primary downstream-usable artifact; shipping any subset would break the defense-in-depth property.

- **Relationship to a prior gap-analysis (refinement, not replacement).** The earlier `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` cataloged 19 prior→follow-up correction pairs and named two structural gaps in `/innovate`: Gap-1 (the framer-suite for frame-reshape moves is under-elaborated, attributed to Lens Shifting being too generic) and Gap-2 (procedural-meta moves like "fix the loop, not the candidate" are absent entirely). The case under diagnosis here was tagged in that finding as Pair #5 (T2 frame-reshape, sub-type "wholesale rejection + redo"). This finding REFINES Gap-1's specific attribution: the missing piece for this case is not Lens Shifting expansion but Inversion-extension-to-meta-targets (applying Inversion to piece-internal commitments, including relationship labels). The territorial claim of Gap-1 (frame-reshape territory under-elaborated) stands; the specific Framer at issue is different. Whether this refinement holds across the other 18 pairs in the dataset is preserved as a research-frontier item.

- **Hard scope constraint maintained throughout.** The user's framing — focus only on what Innovation should do, not the job of other disciplines — was carried through every stage of the loop. Failures attributable to other disciplines were observed in evidence (the relationship label REFINES was declared in `_branch.md` before Innovation ran; Innovation's KILL section attributed CORRECTS-rejection to upstream Sensemaking; the adversarial test in `12-15`'s Critique did not push back on REFINES) but explicitly recorded as out-of-scope and not transformed into Innovation responsibilities. All five refinement-set pieces operate exclusively on the `/innovate` reference; no candidate proposes edits to the Sensemaking, Critique, Decomposition, or Exploration references.

---

## Finding

### Surrounding context — why this diagnostic exists

The project (called Homegrown, a cognitive harness defined by markdown files installed as LLM skills — see the project README) ships a discipline called `/innovate` whose canonical specification lives at `cognitive_harness/innovate/references/innovate.md`. The discipline's job is to generate candidate ideas using seven named mechanisms (four "Generators" — Combination, Absence Recognition, Domain Transfer, Extrapolation — and three "Framers" — Lens Shifting, Constraint Manipulation, Inversion), test the candidates via a five-test cycle, and report a verdict (PROCEED / FLAG / RE-RUN).

Earlier, the user ran a 19-pair dataset analysis (`2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`) cataloging correction chains in which the project's accumulated inquiry history shows the human had to step in with an innovation the discipline didn't produce on its own. That analysis named two structural gaps in `/innovate`. The user then asked for a deeper diagnostic on one specific pair from that dataset — the mapping-redo case — using the project's LOOP_DIAGNOSE protocol (`cognitive_harness/protocols/loop_diagnose.md`), with an explicit constraint: focus only on what Innovation should do.

This inquiry is that diagnostic. Its output is intended as input for a future redesign of `/innovate`. It does not redesign the discipline; it produces evidence-backed maintenance candidates.

### The correction chain

Three saved inquiries form the evidence base:

- **The original prior**, at `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/`, established that mapping is core to `/explore` (the Structural Exploration discipline) and enumerated seven observed kinds of mapping (layout, concept, status, coverage/confidence, frontier, possibility, partly-excluded relational). The finding claimed this seven-kinds enumeration constituted a typology of mapping kinds.

- **The weak prior under diagnosis**, at `devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/`, produced a meta-paradigm framework (a minimum-core definition + 4 primary axes + 8 secondary axes + 12 crystallized paradigms + classification guidance) AND declared its relationship to the original prior as REFINES, with a "layer-shift" framing that preserved the seven-kinds "at its level" as an `/explore`-scoped projection of the meta-paradigms.

- **The corrected inquiry**, at `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/`, re-issued the meta-paradigm finding with the relationship-declaration changed to CORRECTS, introduced an obligatory three-question diagnostic for future REFINES-vs-CORRECTS decisions, named the bias the user identified ("preservation-for-preservation's-sake"), and named a meta-pattern ("lesson-introduces-its-own-trap" — a meta-lesson's new vocabulary becoming a vector for the failure the lesson names).

The human correction that triggered the redo: *"i ddisagree, you shouldnt have preserve the prior understanding just for the sake of preserving it, it tried to understand mapping but it was wrong. redo this."* (Quoted verbatim from the corrected inquiry's Source Input section.)

The diagnostic's question — what did Innovation in the weak prior fail to do that would have surfaced CORRECTS as a real candidate against REFINES — was investigated by reading the weak prior's archived Innovation output and contrasting it with the corrected inquiry's archived Innovation output (both stored in their respective `docarchive/` folders).

### What Innovation produced in the weak prior

The weak prior's Innovation operated in what the inquiry's own seed-framing called "Production-task mode": the seed was a piece-list inherited from upstream disciplines (Sensemaking and Decomposition), and Innovation's job was to materialize concrete final text for each piece in the list. The artifact's structure mirrors the piece-list: each piece (P1.1 through CC2 — workspace-internal labels that do not need to be carried into this finding) has a brief mechanism-application section followed by a 5-test cycle.

The piece that committed the relationship label between the new finding and the original prior — the "Changes from Prior body section" piece — is where the failure occurred. That piece's mechanism-application section names Combination (combining preserve + add + reposition + a meta-lesson on layer-shift semantics) and Absence Recognition (naming a previously-unnamed project concept). The piece's committed text declared the relationship as REFINES and added a new meta-lesson about distinguishing REFINES from CORRECTS from SUPERSEDES, framed around the concept of "layer-shift semantics."

A striking detail: the 5-test cycle's Scrutiny-survival entry for this piece reads — *"meta-lesson tested by reverse-application: would treating layer-shift situations as corrections invalidate prior work? Yes. Would treating corrections as layer-shifts preserve wrong claims? Yes. Both failure modes are real; the distinction is structurally load-bearing."* The Scrutiny-survival test explicitly names the failure mode being committed in the same piece. But the test was applied to the meta-lesson AS AN ABSTRACT CONTRIBUTION, not to the concrete REFINES decision the same piece was committing for the seven-kinds case. The vocabulary required to catch the failure was present in the same 5-test cycle that passed the failure-committing candidate; the missing move was applying the vocabulary to itself.

The KILLs section of the weak prior's Innovation output attributes the rejection of CORRECTS-against-the-seven-kinds to upstream Sensemaking: *"Sensemaking already killed: ... treating the prior 7-kinds as the meta-answer (rejected by layer-shift)."* This is an observation about upstream framing; under the user's hard scope constraint it cannot be diagnosed here, but it explains operationally why Innovation entered the relationship-label piece with REFINES already favored.

The Mechanism Coverage Telemetry reports that all seven mechanisms were applied across the artifact (4/4 Generators + 3/3 Framers), and the Inversion mechanism was logged once — at a different piece, the classification-guidance piece (which explains to readers of the finding how to use the framework to classify a new mapping into the 12 paradigms). The Inversion at that piece was about "what does a confused reader produce without this guidance?" — a content-level Inversion on reader interpretation, not on the framework's relationship to prior work.

### What Innovation produced in the corrected inquiry

The corrected inquiry's Innovation operated in the same Production-task mode, with a different piece-list inherited from a different upstream Sensemaking and Decomposition pass. The relevant contrast appears in the cluster of pieces that committed the strengthened meta-lesson — four pieces in particular:

- The obligatory-diagnostic piece (the 3-question check + decision rule + default-to-CORRECTS rule) names Constraint Manipulation and Absence Recognition as its primary mechanisms, with Inversion logged as a co-derived mechanism.
- The bias-naming piece ("preservation-for-preservation's-sake") names Absence Recognition + Inversion.
- The meta-pattern piece ("lesson-introduces-its-own-trap") names Inversion plus Absence Recognition. The Inversion is explicitly described as: *"what does a vocabulary look like that prevents this vs enables this."*
- The self-reference-acknowledgment piece names Inversion: *"what does a self-reference-blind version look like; what does acknowledgment add."*

In the weak prior, Inversion was applied at one piece (and that piece was about reader interpretation). In the corrected inquiry, Inversion was applied at four piece-level decisions in the cluster that committed the meta-lesson revisions. The mechanism that did the load-bearing work in the corrected case is Inversion, and the application target is piece-internal meta-level commitments — specifically the relationship label, the new vocabulary, and the inquiry's own structure as inspectable surfaces.

### Why the failure occurred — three anchors in the `/innovate` specification

The weak prior's Innovation was compliant with the specification as written. The Coverage Strategy rule (1 Generator + 1 Framer minimum; all 7 ideal per seed) was satisfied. The 5-test cycle was applied to each piece. The Assembly Check and the Axis Coverage Check both ran. The Mechanism Coverage Telemetry produced a PROCEED verdict. The compliance was real.

The failure surface is therefore at three structural locations inside `/innovate`'s spec:

**First anchor: definitional ambiguity in §3 Inversion's "How to apply" sub-step.** The instruction reads, in part, *"Identify a core assumption or belief related to the seed. State the opposite explicitly."* The phrase "belief related to the seed" is ambiguous between two readings. The strict reading is that the seed has one top-level belief and Inversion applies to that one. The expansive reading is that any load-bearing belief committed inside the inquiry is "related to the seed" — including beliefs committed per-piece in Production-task mode. The spec's own depth-check refinement note ("Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT") only makes sense under the expansive reading: depth-iterated Inversion by definition operates on multiple targets, including system-level targets. Yet the rest of the spec doesn't say so. The weak prior's Innovation operated on the strict reading and was compliant; the corrected inquiry's Innovation operated on the expansive reading and produced the missing CORRECTS-candidate. The same spec, two operative readings, two different outputs.

**Second anchor: the coverage rule's scope gap.** The Coverage Strategy rule fires at seed level — the unit of analysis is the seed, and the question is whether all seven mechanisms were applied to that seed. In Production-task mode, the seed unfolds into N pieces, each with its own commitments. The spec doesn't say what mechanism-distribution-across-pieces should look like; the Mechanism Coverage Telemetry reports mechanism EXISTENCE (was the mechanism applied somewhere?) but not mechanism LOCUS (where in the piece-list did it land?). The weak prior's telemetry truthfully reported all seven mechanisms applied; no field surfaced that Inversion appeared only at the classification-guidance piece while the relationship-label piece received no Inversion. The PROCEED verdict was satisfied at telemetry level regardless of mechanism-locus.

**Third anchor: two existing failure-mode prevention rules don't catch the case as written.** Two failure modes in `/innovate`'s spec point at the territory of this failure:

- *Early Frame Lock* describes adopting the first successful reframe permanently. Its prevention rule: "After the first successful output, apply at least one more mechanism." The rule is mechanism-COUNT-aware — apply more mechanisms. The weak prior applied two mechanisms (Combination + Absence Recognition) at the relationship-label piece, satisfying the count. The prevention rule does not care which mechanisms; it only counts.

- *Survival Bias* describes uncomfortable candidates being killed unfairly during testing. Its prevention rule: "Deliberately test the most uncomfortable output with extra care." The rule presupposes the uncomfortable output exists in the candidate set; if no inversion was generated, there is nothing uncomfortable to test, and the prevention rule has no candidate to apply itself to. The failure operates at the PRIOR step — the candidate that would have been uncomfortable was never generated — but the prevention rule starts at the testing step.

Neither prevention rule, as currently written, would have caught the weak prior's case at the relationship-label piece. The case is structurally where the two failure modes' coverage doesn't extend to.

### What Innovation should have done

The one move that would have surfaced CORRECTS is: at the relationship-label piece, apply Inversion explicitly to the piece's committed belief.

Per the spec's §3 Inversion mechanism, Inversion's canonical procedure is to identify a core assumption or belief, state the opposite explicitly, and ask what follows if the opposite were true. At the relationship-label piece, the committed belief was "the prior is preservable at its level." Reversed: "the prior is wrong at its level." Asking what follows: if the prior's typology claim was a wrong attempt rather than a right-at-its-level attempt, the relationship-label is CORRECTS, and the prior's underlying observations are preserved as data while the typology claim is corrected. That's the CORRECTS-candidate.

The corrected inquiry's Innovation made this move at four piece-level decisions in the meta-lesson cluster (the obligatory diagnostic, the bias-naming, the meta-pattern, and the self-reference acknowledgment). The Inversion at each piece operated on a different piece-internal commitment: the assumption of the meta-lesson's vocabulary, the assumption that preservation is the default, the assumption that lessons can be cleanly stated. Each Inversion produced a real alternative; the alternatives became load-bearing content in the corrected finding.

The diagnostic's claim — that piece-level Inversion at the relationship-label piece would have surfaced CORRECTS — is therefore not speculation. The same mechanism applied to the same kind of piece in the same artifact-shape, by the same discipline, did produce the equivalent candidates in the corrected case.

### The five-piece refinement set (the diagnostic's primary deliverable)

The 5-piece set below is the answer to the user's downstream-use ask: "input for a future redesign of `/innovate`." Each piece is a concrete spec-edit proposal for `cognitive_harness/innovate/references/innovate.md`. The pieces compose into a layered enforcement architecture; shipping the set as an assembly is ranked above any individual piece.

**Q1 — Definitional clarification at §3 Inversion** (the prerequisite layer).

Edit the existing "Identify a core assumption or belief related to the seed" sentence in §3 Inversion's "How to apply" sub-section. Replace with:

> *"Identify a core assumption or belief related to the seed — including, when the seed unfolds into multiple piece-internal commitments (relationship labels, framing semantics, lesson vocabulary, evaluation criteria), each load-bearing commitment is an in-scope 'belief related to the seed' for Inversion's purposes. The depth-check refinement note below ('Keep inverting until you reach a statement about the SYSTEM') applies across piece-internal commitments, not only at seed-level."*

Cross-reference Q2 (the determination mechanism, immediately following) at first mention of "load-bearing commitment" to keep the scope-bound visible at the same reading-point where a reader might worry about over-expansion.

**Q2 — Determination mechanism for "meta-decision piece"** (the runtime-classification layer).

Add a new sub-section to `/innovate`'s §"Phase 2 Generate" or a new sub-section in §3 Inversion. The mechanism uses four observable properties to classify a piece as meta-decision (requiring piece-level Inversion) vs content-production (not requiring it):

> A piece is a *meta-decision piece* when at least one of the following observable properties holds at piece-output time:
>
> 1. *Relationship-label property:* the piece commits to a relationship between this finding and a prior — `refines:`, `corrects:`, `supersedes:`, `diagnoses:`, or equivalent body-text declaration.
> 2. *Framing-semantic property:* the piece commits to a frame the rest of the finding operates under — e.g., "this is a layer-shift situation," "this is a redo," "this is an audit."
> 3. *Lesson-vocabulary property:* the piece introduces new vocabulary (a named bias, named pattern, named failure mode, named procedure) that the same finding then applies to itself or to other cases.
> 4. *Evaluation-criterion property:* the piece commits to criteria by which downstream candidates will be judged — e.g., the obligatory-diagnostic rule's "three YESes for REFINES" decision rule.
>
> A piece is *content-production* (not meta-decision) when none of these properties hold and the piece's role is to produce text instantiating a frame committed elsewhere in the artifact.
>
> **Edge cases and retrospective audit.** For pieces where the classification is judgment-dependent at piece-output time (the piece introduces vocabulary, but whether the same finding applies the vocabulary to itself is not yet determinable), perform a retrospective self-audit after the run: ask whether any piece committed a relationship label, frame, semantic, or vocabulary that subsequent pieces operated under. If yes, retrospectively classify that piece as meta-decision and apply the piece-level Inversion rule (Q3 below) to it before publishing. The retrospective fallback handles the boundary cases the upfront properties don't cleanly catch.

Worked positive example for the rule: the relationship-label piece in the weak prior's saved Innovation output fires property (i) directly — that piece committed a `refines:` declaration. → meta-decision piece.

Worked negative example: the classification-guidance piece in the same artifact commits no relationship label, frame, vocabulary-with-self-application, or evaluation criterion; it produces text instantiating the framework's classification procedure. → content-production piece.

**Q3 — Piece-level Inversion rule** (the load-bearing positive-rule layer).

Add a refinement note to `/innovate`'s §"Phase 2 Generate," after the existing variations-per-mechanism instruction:

> **Piece-level Inversion at meta-decision pieces.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), the mechanism-coverage rule's per-seed gating is necessary but not sufficient. For each piece that meets the meta-decision-piece criterion above, Innovation MUST additionally apply Inversion at piece-level, generating an Inversion-candidate that asks "what is the assumption this piece commits, and what if it's reversed?"
>
> *Preconditions:* Production-task mode is operating; the piece in question meets at least one of the four meta-decision-piece properties.
>
> *Compliance criterion (observable at the saved Innovation output):* the piece's output contains both (a) the principal candidate text for the piece's committed direction, AND (b) an explicit Inversion-candidate paragraph naming the assumption being reversed and stating what follows from the reversal. Both candidates must be tested via the 5-test cycle. The Inversion-candidate may be selected, rejected, or refined; the rule does not mandate the Inversion-candidate's selection, only its generation and testing.
>
> *Override path:* When the runner determines Inversion is genuinely inapplicable at a meta-decision piece (e.g., a synthesis of consistent priors where the relationship label is unambiguously REFINES with no plausible inversion-candidate), the override is recorded as `Inversion-marked-inapplicable: [specific reason]`. The reason must be specific (not "this just doesn't need it"); the override-recording overhead is intentional friction, not a loophole. A future reviewer can spot weak overrides. With a recorded override, the rule's compliance is satisfied without generating an empty Inversion-candidate.
>
> *Cross-references:* This rule operates alongside the existing depth-check refinement note in §3 Inversion ("Keep inverting until you reach a statement about the SYSTEM"). For meta-decision pieces whose first Inversion produces a component-level statement, depth-iterate per the existing refinement. This rule does not replace the Coverage Strategy's per-seed minimum (1 Generator + 1 Framer); it adds a per-piece requirement specifically for meta-decision pieces.
>
> *Scope bounded:* This rule does NOT apply to content-production pieces (those failing all four meta-decision-piece properties). Over-application risk is bounded by the determination mechanism.
>
> *Methodological caveat (acknowledged self-reference):* this rule introduces new vocabulary (meta-decision piece, four properties, Inversion-marked-inapplicable). Per the project's named "lesson-introduces-its-own-trap" pattern (see `2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`), future Innovation runs that edit this rule should self-apply: when proposing changes to this rule, apply this rule to those proposed changes.

**Q4 — Failure-mode prevention refinements** (the recognition-signal layer).

Add a refinement note to `/innovate`'s §"Failure Modes" §3 Early Frame Lock:

> **Mechanism-TYPE-aware prevention.** The base prevention rule (apply at least one more mechanism after the first successful output) is mechanism-count-aware. When the decision at the locked piece is at meta-level (relationship label, framing semantic, lesson vocabulary, evaluation criterion per the meta-decision-piece criterion in §"Phase 2 Generate"), the additional mechanism MUST include Inversion specifically — applying any-mechanism-that-isn't-Inversion does not satisfy the prevention rule for meta-decision pieces. Recognition signal: a meta-decision piece's mechanism log shows two or more mechanisms applied (count satisfies the base rule) but none is Inversion (TYPE fails the refined rule).

Add a parallel refinement to §"Failure Modes" §6 Survival Bias:

> **Prior-step never-generate prevention.** The base prevention rule (deliberately test the most uncomfortable output) presupposes the uncomfortable output exists in the candidate set. When the candidate set at a meta-decision piece contains only one direction (e.g., the "preserve / accept / continue" direction without the "reject / invert / discard" direction), the prior-step variant of Survival Bias is operating: the uncomfortable alternative was never generated, so there is nothing to test with extra care. Recognition signal: at a meta-decision piece, the candidate set contains only directions that preserve the prior, extend the current frame, or continue the inherited direction, with no candidate that rejects, inverts, or discards. Apply the piece-level Inversion rule from §"Phase 2 Generate" to generate the missing direction.

**Q5 — Telemetry extension** (the observability layer).

Add to `/innovate`'s §"Mechanism Coverage (Telemetry)" section:

> When Innovation operates in Production-task mode, report additionally:
>
> - *Per-piece mechanism log:* for each piece in the piece-list, report the mechanism(s) applied. Format: `<piece-id>: [<mechanism>, <mechanism>, ...]`.
> - *Meta-decision-piece classification:* for each piece, report `meta-decision` / `content-production` / `inapplicable-override`.
> - *Piece-level Inversion compliance:* for each meta-decision piece, report `satisfied` / `violated` / `overridden`. A piece's compliance is *violated* when no Inversion-candidate was generated for that piece. An Inversion-candidate that was generated, tested, and rejected after the 5-test cycle does NOT count as violation — the rule's purpose is to ensure the alternative is surfaced and evaluated, not that the alternative wins.
>
> *FLAG condition (refined):* if any meta-decision piece has `Piece-level Inversion compliance: violated`, the overall telemetry verdict is FLAG (not PROCEED), regardless of seed-level mechanism coverage.
>
> *RE-RUN condition (refined):* if two or more meta-decision pieces have `Piece-level Inversion compliance: violated` without override, the verdict is RE-RUN.

### The layered enforcement architecture (the assembly)

The five pieces compose into a defense-in-depth architecture. A future Innovation run encountering a meta-decision piece will: (i) know the expansive reading applies (Q1's clarification); (ii) classify the piece via the four-property checklist or retrospective audit (Q2); (iii) generate an Inversion-candidate per Q3's rule OR record an override with a specific reason; (iv) self-check via Q4's recognition signals at the failure-mode level; (v) emit telemetry per Q5 that surfaces violations to the runner. Five independent layers must all fail for the diagnostic's case to recur.

A concrete check against the motivating case: if the weak prior's Innovation had operated under the refinement set, the relationship-label piece would have fired Q2's property (i), Q3's rule would have required generating an Inversion-candidate, the assumption to invert was visible ("the prior is preservable at its level"), the reversed assumption produces the CORRECTS-candidate, and Q5's telemetry would have FLAGGED a violation if the runner ignored the rule. The user's correction (the redo trigger) would not have been necessary because the discipline's own machinery would have surfaced the alternative.

The Innovation discipline applied Q3 recursively during this very inquiry — generating an Inversion-candidate at each of the five pieces Q1-Q5 (the user's instruction explicitly required this). The recursive self-application produced legitimate alternatives at each piece (a strict-reading alternative for Q1, a retrospective-self-audit fallback for Q2's edge cases via Q2's Inversion-candidate, an override path for Q3, a confirmation-by-falsification of the no-refinement-needed alternative for Q4, an override-filtering check for Q5). The rule's own first application demonstrates non-empty practical force, not ritual compliance.

### What this diagnostic does NOT do

This diagnostic does NOT:

- **Redesign `/innovate`.** It produces evidence-backed candidates for a redesign; the redesign itself is downstream work. A future inquiry, likely `/MVL+`, would consume this finding's candidate set and decide what to commit, in what order, with what wording.

- **Diagnose other disciplines.** Sensemaking's role in pre-killing CORRECTS via the layer-shift framing; Critique's failure to adversarially test the REFINES verdict against the user's correction; Decomposition's piece-list that produced the per-piece granularity; Exploration's mapping that preceded the relationship decision — all are observable in the same evidence base and all are out of scope per the user's hard scope constraint. The user has explicitly named that other-discipline diagnostics belong to separate inquiries.

- **Generalize the refinement-set to the 19-pair dataset.** The earlier `2026-05-17_22-51` finding cataloged 18 other correction pairs; this diagnostic addresses one (the mapping-redo case, Pair #5). Whether the refinement-set catches the failures in the other 18 pairs — especially T2 frame-reshape sub-types other than "wholesale rejection + redo" — is preserved as a research-frontier item for a future inquiry.

- **Address the prior gap-analysis's Gap-2.** That finding named a second gap (procedural-meta moves like "fix the loop, not the candidate" are absent from `/innovate`'s mechanism vocabulary entirely). This diagnostic refines Gap-1; Gap-2 is a separate territory requiring its own inquiry.

- **Commit any spec edits to `/innovate`.** The candidate text in the five-piece refinement set is proposal-form, not committed. The future redesign work decides commitment.

---

## Next Actions

### MUST

- **What:** Run a downstream inquiry (likely `/MVL+`) that takes the five-piece refinement set as input and decides whether to commit it to `/innovate` reference (in whole or in part), with what specific wording. The downstream inquiry's job is the redesign work this diagnostic explicitly defers.
  - **Who:** the user, via `/MVL+` on a new inquiry seeded by this finding.
  - **Gate:** condition-bound — when the user turns attention to redesigning `/innovate`.
  - **Why:** the candidate set is potential, not actual. Without a redesign inquiry that decides commitment, the diagnostic's value remains as evidence rather than as a working spec change.

### COULD

- **What:** Apply Q2's four-property meta-decision-piece criterion to the other 18 pairs in the `2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` dataset, checking whether the piece-level Inversion gap recurs across the broader T2 frame-reshape sub-types.
  - **Who:** a separate analysis inquiry.
  - **Gate:** condition-bound — when the user wants to test the refinement-set's generalization beyond the motivating case.
  - **Why:** establishes whether the refinement-set is a one-case fix or a pattern-level intervention. Affects how aggressively to commit Q3's MUST rule.
  - **Depends-on:** MUST item "Run downstream redesign inquiry." OVERRIDE: COULD is adoption-ready independent of the MUST. Reason: the generalization analysis can run on the existing 19-pair dataset without first committing any `/innovate` spec changes; its value (calibrating the refinement-set's scope claim) does not require the redesign to have happened.

- **What:** Probe the prior gap-analysis's Gap-2 (T4 procedural-meta moves absent from `/innovate`'s mechanism vocabulary) via a separate diagnostic on one of the T4-tagged pairs in the 19-pair dataset.
  - **Who:** the user, via a new `/MVL+` inquiry.
  - **Gate:** condition-bound — when the user wants to address procedural-meta moves alongside the piece-level Inversion gap addressed here.
  - **Why:** Gap-2 is a separate territory; this diagnostic explicitly does not address it. A parallel diagnostic would surface what `/innovate` needs for procedural-meta moves and could compose with this finding's refinement-set into a unified `/innovate` redesign input.

- **What:** Add a calibration-watch on the override rate that Q3's `Inversion-marked-inapplicable` invocation pattern produces in future Innovation runs.
  - **Who:** future Innovation runs operating under the committed refinement-set (if/when committed).
  - **Gate:** observable — after 10+ Production-task-mode runs have completed under the refinement-set; assess override-rate; refine telemetry FLAG calibration if needed.
  - **Why:** distinguishes a working enforcement rule from a noisy FLAG. If overrides are rare (<5% of meta-decision pieces), the rule is doing its job; if common (>30%), the rule needs recalibration or the four-property criterion needs tightening.
  - **Depends-on:** MUST item "Run downstream redesign inquiry." GATED — do not act until the rule is committed to the spec and at least 10 runs have operated under it.

### DEFERRED

- **What:** Reformulate the strict-reading-of-Inversion alternative (the alternative to Q1.b's expansive reading) at seed-level, with a worked example in a future inquiry that has a single-belief seed.
  - **Gate:** observable — if three or more future cases show Q1.b's expansive reading produces over-application without operational benefit, revisit the strict-reading reformulation.
  - **Why (if revived):** preserves the option to step back from the expansive reading if it produces noise; specific-vs-pattern caution: the diagnostic rests on one case.

- **What:** Soft-rule variants of Q3 (SHOULD rather than MUST; recommendation rather than requirement) preserved for revisit if the MUST framing produces unacceptable false positives.
  - **Gate:** observable — if Q3's MUST rule, in practice, produces 2+ documented false positives where REFINES was genuinely correct and the override mechanism's friction was disproportionate to the override's actual rarity.
  - **Why (if revived):** balances enforcement and flexibility differently if real-world data warrants.

### RESEARCH FRONTIERS

- **What:** Does the refinement-set's Q2 four-property meta-decision-piece criterion produce stable classifications across cases beyond the motivating one?
  - **Why:** the criterion is operationally clear for the load-bearing case (the relationship-label piece in the weak prior). Edge cases (the minimum-core-definition piece; the 12-paradigm-enumeration piece) are judgment-dependent and handled by the retrospective-self-audit fallback. Whether the retrospective fallback produces stable classifications across many cases is empirically unresolved.

- **What:** Composition of this finding's refinement-set with a future Gap-2 (procedural-meta) refinement-set.
  - **Why:** the two refinement-sets may interact (e.g., a procedural-meta move at a meta-decision piece would fire both rules); the composition is not addressed here.

- **What:** Self-reference of the refinement-set on future spec edits TO the refinement-set itself.
  - **Why:** per `12-45`'s named "lesson-introduces-its-own-trap" pattern, future Innovation runs that edit this rule could commit the same failure on the rule's own vocabulary. Q3's methodological caveat acknowledges this; whether the caveat suffices in practice is empirically unresolved.

---

## Reasoning

### Why this answer over the alternatives — the Critique adversarial verdicts

The five-piece refinement set was the surviving candidate after the Critique discipline ran 11 evaluation dimensions (six default — Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance — plus four project-specific risk dimensions — duplicate-derivable-state, operation-parsimony, phase-fit, explicit-culture-fit — plus a self-reference axis). Multi-axis prosecution was applied per the user's instructions to the critique step: user-perspective objection, specific failure-case scenario, specification-gap probe, false-positive testing, and hard scope constraint verification.

The strongest prosecution arguments and their defenses:

**Prosecution against Q1 (definitional clarification).** Risk of scope expansion — does "piece-internal load-bearing commitments" mean every piece could be claimed as load-bearing, producing over-application? Defense: the scope is bound by Q2's four-property criterion; the text edit is explicit about "load-bearing." Survived intact with a small refinement: cross-reference Q2 at first mention to keep the bound visible at reading time.

**Prosecution against Q2 (determination mechanism).** Risk of covert fuzziness — does the four-property checklist produce stable classifications? Tested by applying the checklist to several pieces in the weak prior's and the corrected inquiry's saved Innovation outputs: classifications were stable on load-bearing cases (the relationship-label piece fires property (i) directly; the classification-guidance piece fires none of the four), and judgment-dependent on edge cases (the minimum-core-definition piece could be claimed as property (iv) but the determination is retrospective). Defense: the retrospective-self-audit fallback handles edge cases bound. Survived with a refinement: make the edge-case handling more prominent in the published spec text rather than buried inside the candidate's edge-case sentence.

**Prosecution against Q3 (the load-bearing piece).** Risk of false-positive on legitimate REFINES cases — would Q3's MUST rule over-flag a finding that legitimately synthesizes consistent priors with no plausible inversion? Tested by constructing a hypothetical: a synthesis of five consistent priors where each is right at its level. Q3 would fire (the relationship-label piece is a meta-decision piece per property (i)); the override path applies (the runner records `Inversion-marked-inapplicable: 5 consistent priors, no plausible inversion-candidate at this level`). The override-recording overhead is small (3-5 sentences); the friction is intentional. Defense survived. A second prosecution about the "lesson-introduces-its-own-trap" risk (Q3 itself becomes a vector for its named failure) was addressed by adding the methodological caveat to Q3's spec text acknowledging the self-reference.

**Prosecution against Q4 (failure-mode refinements).** Risk of redundancy with Q3. Defense: Q3 is the positive rule (apply Inversion); Q4 is the failure-mode recognition (when not applied, here's how to recognize). They are diagnostic-complementary, not redundant. The recognition signals are observable in telemetry (via Q5's data) and useful retrospectively.

**Prosecution against Q5 (telemetry).** Risk of bloat or FLAG-noise from frequent overrides. Defense: the additions are localized to Production-task mode; the override path satisfies compliance, so FLAG fires only on un-overridden violations; the override-rate calibration is preserved as a future research-frontier item rather than a blocker.

No piece was KILLed. Four pieces were marked SURVIVE-with-REFINE (textual clarity refinements, not structural changes); one piece (Q4) was a clean SURVIVE.

### Why these refinements, not a wholly new failure mode

The Sensemaking discipline's analysis considered whether the case required a new top-level failure mode in `/innovate`'s spec rather than refinements to two existing failure modes. The case was tested against Early Frame Lock (does the first-successful-reframe-permanently-adopted pattern fit?) and Survival Bias (does the uncomfortable-output-killed-unfairly pattern fit?). Early Frame Lock's pattern fits with mechanism-COUNT-vs-mechanism-TYPE refinement; Survival Bias's pattern fits with testing-step-vs-prior-step refinement. Adding a new top-level failure mode for what is structurally a refinement to two existing modes would be over-engineering for single-case evidence. The diagnostic chose refinements.

### Why the case refines, rather than instantiates, the prior gap-analysis's Gap-1 attribution

The earlier `2026-05-17_22-51` finding attributed Gap-1 (T2 frame-reshape under-elaborated territory) specifically to Lens Shifting being too generic across nine sub-types. But the corrected inquiry's actual mechanism that surfaced CORRECTS was Inversion (applied at piece-level to meta-targets), not Lens Shifting. Reading the corrected inquiry's saved Innovation output: Lens Shifting appears once (re-reading the 12 paradigms under the empirical-revisable frame); Inversion appears four times in the meta-lesson cluster. Gap-1's territorial claim (frame-reshape territory under-elaborated) stands. Gap-1's specific attribution to Lens Shifting is refined by this case's evidence to Inversion-extension-to-meta-targets. Whether the refinement holds across the other 18 pairs in the dataset is preserved as a research-frontier item (see Next Actions COULD).

### Contradictions reconciled across the loop

The Exploration step's signal log surfaced 11 signals; the most load-bearing was the contrast between mechanism-distribution-across-pieces in the weak prior versus the corrected inquiry. Sensemaking initially considered two competing readings of where Innovation's failure lived: a within-spec interpretation (Innovation had latitude to apply Inversion at the load-bearing piece and chose to apply it elsewhere) versus a spec-level interpretation (the spec doesn't require piece-level Inversion; Innovation followed the spec correctly but the spec missed the case). The reconciliation: both are true and not exclusive. Innovation had latitude AND the spec has a structural gap. The five-piece refinement set addresses both — it makes piece-level Inversion explicit in the spec (eliminating the latitude that produced the misallocation) while preserving runner discretion via the override path (for cases where the new requirement is genuinely inapplicable). This was not a single-source resolution but a deliberate-combination resolution.

A second potential contradiction surfaced in the Decomposition step: the Q3 (piece-level Inversion rule) piece-text-location and the Q1 (definitional clarification) piece-text-location both land in or near §3 Inversion of the `/innovate` spec. Conceptually they are distinct (one is the rule, one is the definitional commitment that enables the rule), but they spatially co-locate. The reconciliation: keep them as separate pieces in the decomposition because the conceptual separation is the question-answerable unit; acknowledge the spatial co-location as a presentation-detail for the future redesign work.

### Self-reference acknowledgment

This entire inquiry was conducted using the same cognitive harness whose discipline (`/innovate`) the finding's deliverable proposes to refine. The Critique step explicitly weighted a self-reference robustness dimension. The external grounding sources were three: the user's correction (independent signal); the contrast between the weak prior's and the corrected inquiry's saved Innovation outputs (artifact-level evidence not produced by this inquiry); and the canonical `/innovate` reference (the criterion artifact). The discipline applied its own proposed rule (piece-level Inversion at meta-decision pieces) to its own piece-by-piece generation during the Innovation step — and produced non-empty Inversion-candidates at each of the five pieces, demonstrating the rule's practical force on at least one application target. A future Innovation run that proposes changes to this finding's refinement-set should self-apply the rule per Q3's methodological caveat; whether the rule survives recursive self-application across multiple iterations is an empirically open question that future cases will answer.

---

## Open Questions

### Monitoring

- **Override-rate calibration after rule commitment.** When (and if) Q3's MUST rule is committed to the `/innovate` reference, observe the rate at which future Innovation runs invoke `Inversion-marked-inapplicable`. If overrides are rare (<5% of meta-decision pieces in practice), the rule is doing useful enforcement; if common (>30%), the rule is producing noise and the four-property criterion or the rule's wording needs recalibration. Observable after 10+ Production-task-mode runs have operated under the committed refinement-set.

- **Whether the named meta-pattern "lesson-introduces-its-own-trap" recurs on this finding's own rule.** A future Innovation run that proposes spec edits to Q3 will, per the methodological caveat in Q3 itself, be expected to self-apply. Observe whether that self-application catches problems or whether the rule's own vocabulary becomes a trap.

### Blocked

- **Concrete spec-edit commitments to `/innovate` reference.** Cannot proceed until a downstream redesign inquiry consumes this finding's refinement-set and decides what to commit. The MUST item in Next Actions is the unblocking event.

### Research Frontiers

- **Does the four-property meta-decision-piece criterion generalize to the other 18 pairs in the prior gap-analysis dataset?** This finding's evidence base is one correction pair (the mapping-redo case, tagged Pair #5 in the 19-pair dataset). The refinement-set's claim that the four-property criterion catches similar failures across T2 frame-reshape sub-types is plausible but unproven. A separate analysis inquiry could apply Q2's criterion to each of the other 18 pairs and report classification stability.

- **Composition with Gap-2 (procedural-meta moves absent from `/innovate`).** The prior gap-analysis named two structural gaps. This finding addresses Gap-1; Gap-2 is unaddressed. A future Gap-2 diagnostic + refinement-set will need to compose with this finding's refinement-set; the composition's emergent properties are unknown.

- **Self-reference of the refinement-set on future edits to the refinement-set.** Q3's methodological caveat acknowledges this risk; whether the caveat is operationally sufficient or whether stronger structural prevention is needed is an open question that future spec-edit cases will answer.

### Refinement Triggers

- **If three or more future cases show Q1.b's expansive reading produces over-application without operational benefit:** revisit the strict-reading reformulation preserved as DEFERRED above.

- **If Q3's MUST framing produces two or more documented false positives where REFINES was genuinely correct and the override mechanism's friction was disproportionate:** revisit the soft-rule variants of Q3 (SHOULD instead of MUST) preserved as DEFERRED above.

- **If the override rate observed under Q3 exceeds 30% of meta-decision pieces across 10+ runs:** trigger a recalibration of either Q2's four-property criterion (the determination mechanism is over-classifying pieces as meta-decision) or Q3's compliance criterion (the rule's bar is too high for legitimate cases).

- **If two or more pieces of the refinement-set are committed but the third is deferred:** revisit the assembly-rank-vs-individual-piece-rank decision. The finding's claim is that the five pieces compose into defense-in-depth; partial commitment may break the defense-in-depth property.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use cognitive_harness/protocols/loop_diagnose.md
  one innovation fix pair is                          
                                                      
  | # | Prior → Follow-up | Primary T-tag | Sub-type |                                                                                   
  |---|---|---|---|                                                                                              
   `2026-05-13_12-15__what_is_mapping_meta_paradigms` + `2026-05-13_07-16__is_mapping_required_core_of_explore` →                       
  `2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo                                                                         
                                                                                                                                          
  i want you to analyse exactly what when wrong with innovation that it missed this.  but make sure only focus on what innovation should  
  do, and not job of other disciplines, this will be used to improve innovation later on but this is not our scope now.
```

</details>
