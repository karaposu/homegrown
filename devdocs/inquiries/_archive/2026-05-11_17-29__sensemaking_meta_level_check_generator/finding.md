---
status: active
continues_from: devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md
continues_from_2: devdocs/inquiries/2026-05-11_17-00__mvl_input_rephrase_as_primary_intervention/finding.md
---
# Finding: Sensemaking Meta-Level Check Generator

## Question

**Question.** The user accepted the prior 14-00 finding's deferred Layer 2 design (two refinement notes — Question Premise Check before SV1; Cross-Candidate Unity check at Phase 2 — added to `homegrown/sense-making/references/sensemaking.md` at the ≥3-instance revival trigger) but pushed back on the framing: **Sensemaking checks shouldn't be a rigid enumeration that grows check-by-check. They should be defined at a META level so they have COVERAGE.** The user's specific example: what meta-level question would GENERATE the specific check "wait, aren't they doing the same thing?" — and by extension, generate the other known specific checks (convergence-recognition; Frame-exit Completeness; Question Premise Pre-Bias; Load-bearing Concept Test; Specific-vs-Pattern; Accommodation Trigger) as INSTANCES of one underlying meta-operation when applied to inquiry content?

**Goal.** Identify the meta-level question(s) — or the structural principle that generates them — that produces the family of Sensemaking checks as runtime instances rather than as hard-coded enumeration. Demonstrate coverage over known check instances. Demonstrate discoverability (a practitioner can apply the meta-question reliably). Identify the tier ceiling (meta-question remains discipline-layer; doesn't collapse into runner-layer or expand into a new discipline). Propose how Sensemaking's spec could be reorganized — or extended — around the meta-question.

The user's exact framing: *"sensemaking checks shuldnt be so rigid.. we sohuld define them as meta so they have coverage.. what meta level question would create a question 'wait, arent they doing the same thing?'"*

---

## Finding Summary

- **The meta-question is "What am I treating as FIXED that might not be?"** Applied to the structure of the analysis (not its content), this question generates the family of Sensemaking checks as instances. Exploration demonstrated 9/9 coverage over known META-INSPECTION checks (convergence-recognition; Frame-exit Completeness; Question Premise Pre-Bias; Load-bearing Concept Test; Specific-vs-Pattern; Accommodation Trigger; Phase/Calibration-State; Self-Reference Blindness corrective; User-Language Alignment). Two equivalent alternative formulations let practitioners enter the meta-operation from whichever phrasing clicks: "Where would I have to STEP BACK to see what I'm missing?" and "What's the LEVEL of this analysis, and is it the right level?"

- **The meta-question fires through 9 inspection hooks.** Each hook is a concrete inspection point in the analysis structure. The hooks list — Candidate Set, Frame Scope, Question Framing, Concept Names, Motivating Examples, Model Fit, Phase/Calibration State, Self-Reference, User Language — is EXTENDABLE. Future failure modes (including the 14-00 finding's deferred Question-Premise Pre-Bias and Cross-Candidate Unity at ≥3-instance revival) integrate as new hooks rather than as new top-level perspectives or refinement notes. The spec's growth pattern shifts from linear (each new failure mode adds a top-level section) to sub-linear (each new failure mode adds a hook entry).

- **Sensemaking has TWO coexisting meta-patterns, not one.** This is the strongest emergent finding from Critique. Pattern A — **hook-specific structural meta-inspection** — is the meta-question + 9 hooks covered by this finding (applies to structural surfaces of the analysis: candidates, frame, question framing, concepts, examples, model fit, phase, self-reference, language). Pattern B — **process-level failure-mode correctives** — is the 6 existing failure-mode correctives (Status Quo Bias, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness), which are meta-questions about analysis QUALITY as a whole (not about specific structural surfaces). Both patterns coexist. The deliverable explicitly names both.

- **Lateral perspectives are NOT a meta-inspection pattern.** Sensemaking's 6 lateral perspectives (Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Ethical/Systemic) are a third pattern — multi-perspective viewpoint diversity applied to ANALYSIS CONTENT — distinct from meta-inspection (which applies to ANALYSIS STRUCTURE). The drafted section text in this finding makes this distinction explicit to avoid conflating the three patterns.

- **The intervention is an additive section to `homegrown/sense-making/references/sensemaking.md`, located AFTER the Failure Modes section and BEFORE Standard Analysis Protocol.** Backward-compatible (existing perspectives, refinement notes, and failure-mode correctives unchanged). Reversible (one edit to remove). ~90 lines added (within the ≤100-line ceiling set during Sensemaking analysis).

- **Step 5 outside literal scope, with one honest qualifier.** The section is largely a STRUCTURAL REORGANIZATION (adds a meta-level VIEW of existing behavior — the existing perspectives, refinement notes, and failure-mode correctives become the calibration set). Two of the four phase cross-references (Phase 3, Phase 5) label existing behavior — no new behavior. Two of the four (Phase 1, Phase 2) DO introduce a small new behavior: an explicit meta-question check at phase close at points where the existing protocol didn't have such a check. This small new behavior bypasses Step 5 at N=1 per the same reversibility precedent that the 17-00 finding's writing-discipline reminder used (lightweight + reversible + spec-level not runtime-cognition-level). The Step-5 reasoning in the drafted section text honestly acknowledges this.

- **Discoverability mechanism: three entry points.** (1) Phase-end firing (primary, systematic): after each phase's Sense Version (SV2/SV3/SV4/SV5/SV6) is produced, the practitioner checks the hooks relevant to that phase. (2) Practitioner-triggered (secondary, intuition-driven): apply the meta-question manually when something feels off. (3) End-of-Sensemaking (tertiary, safety net): before declaring SV6, run the meta-question over all hooks as a final check. Defense-in-depth across three entry surfaces.

- **Self-applicability is HIGH evidence the meta-question is the right principle.** Applying the meta-question to Sensemaking ITSELF generates THIS inquiry. The user's question — "what am I treating as fixed in Sensemaking's check architecture that might not be?" — IS the meta-question applied to Sensemaking's hooks (specifically H1 candidate set: "are perspectives, refinement notes, and failure-mode correctives separate, or instances of one pattern?" and H4 concept names: "do the concepts 'perspective,' 'refinement note,' and 'failure-mode corrective' represent real structural distinctions or are they incidental groupings?"). Self-applicability holds — Sensemaking can analyze its own structure with the same tool it analyzes external content with.

---

## Finding

The Sensemaking discipline spec at `homegrown/sense-managing/references/sensemaking.md` has grown over time. The project began with a baseline framework (5 anchor types; 5 process phases; 5 lateral perspectives; saturation indicators). Through accumulated inquiries, the spec gained: a sixth lateral perspective (Ethical/Systemic), three Definitional/Internal-Consistency and Frame-exit-Completeness and Phase-Calibration perspectives, four refinement notes (Phase/Calibration-State perspective requirement; Load-bearing concept test with sub-aspects; Specific-vs-pattern recognition cue; Accommodation trigger), and six failure modes (each with a corrective question). The spec is now 383 lines. The user's intuition during this inquiry: the growth pattern is unsustainable — each new failure mode adds a new top-level section; the spec will keep growing linearly; the patterns being encoded should be unified under a generative meta-principle so that future additions extend a small structure rather than enumerate more sections.

The user gave a specific example: the convergence-recognition check — "wait, aren't they doing the same thing?" — from the 14-00 finding. That finding designed a refinement-note addition (Cross-Candidate Unity check at Phase 2) but deferred it pending ≥3 instances per Step 5. The user asked: what META-LEVEL question would have generated "wait, aren't they doing the same thing?" — and would it also generate the other known Sensemaking checks?

This finding's answer: yes, such a meta-question exists; the deliverable is a new Meta-Inspection section to add to the Sensemaking spec.

### 1. The meta-question

**"What am I treating as FIXED that might not be?"**

Apply this question to the STRUCTURE of the analysis — not the content. The question surfaces assumptions about the SHAPE of the analysis (its candidates, its frame, its question's wording, its concepts, its motivating examples, its model fit, its phase-dependence, its self-reference, its language) that the analysis might be taking for granted.

Equivalent formulations enter the same operation from different angles:
- "Where would I have to STEP BACK to see what I'm missing?"
- "What's the LEVEL of this analysis, and is it the right level?"

Exploration tested four candidate meta-questions and found M1, M3, M4 each achieve 9/9 coverage over the known specific checks. They are different phrasings of the same operation: inspect the analysis's own structure for what's been left unexamined. M1 ("treating as FIXED") was selected as the primary phrasing because it (a) is short and memorable, (b) aligns with the corrective-question idiom used in the existing 6 failure-mode correctives, and (c) makes the inspection operation explicit.

### 2. The 9 inspection hooks

The meta-question is abstract. It becomes operational when applied to specific INSPECTION HOOKS — concrete surfaces of the analysis where the meta-question generates a specific check.

Nine hooks were identified during Exploration, covering all currently-known specific Sensemaking checks:

| Hook | Inspection point | What the meta-question generates here |
|---|---|---|
| H1 — Candidate set | The set of candidates being adjudicated for their relationships | "Wait, aren't they doing the same thing?" — convergence-recognition; cross-candidate unity |
| H2 — Frame scope | The boundary of what's in vs out of the inquiry's frame | "What does this term refer to project-wide that my frame excludes?" — Frame-exit Completeness perspective |
| H3 — Question framing | The wording of the inquiry's question | "What does the framing pre-bias toward? What's the inverse framing?" — Question Premise Pre-Bias check |
| H4 — Concept names | The labels attached to concepts being committed to | "Does this concept's name represent its structure, or is it a proxy?" — Load-bearing concept test |
| H5 — Motivating examples | The specific cases that motivated a key insight | "Are these examples the whole story, or instances of a wider pattern?" — Specific-vs-Pattern Recognition Cue |
| H6 — Model fit | The pattern of revision: refinement vs patching | "Is the model not settling because I'm patching, or because the territory is complex?" — Accommodation Trigger |
| H7 — Phase / calibration state | Whether the rule depends on calibration the project has | "Is this rule's correctness contingent on a phase the project has not yet reached?" — Phase/Calibration-State perspective |
| H8 — Self-reference | Whether the evaluation tool and the target share the same conceptual framework | "Am I using the same framework I'm evaluating?" — Self-Reference Blindness corrective |
| H9 — User language alignment | Whether the rephrased concept matches what the user actually said | "Does this concept name match the user's actual vocabulary?" — User-Language Alignment sub-aspect |

The hooks list is EXTENDABLE. When a new specific check is discovered, the membership decision criterion is itself the meta-question: **apply the meta-question to the candidate hooks; does an existing hook generate the new check? If yes, the new check becomes a sub-aspect of an existing hook (no spec change to the hooks list). If no, a new hook is added with a one-line description and the check as its initial calibration entry.**

The spec's growth pattern shifts from linear (each new failure mode = ~30 lines for a top-level section) to sub-linear (each new failure mode = ~5-10 lines for a hook entry). The currently-deferred 14-00 Layer 2 checks (Question Premise Pre-Bias; Cross-Candidate Unity) integrate at ≥3-instance revival as sub-aspects of existing hooks (H3 and H1 respectively), not as new top-level refinement notes.

### 3. Sensemaking has THREE coexisting check patterns, not one

The strongest emergent finding from Critique is that Sensemaking has THREE distinct check patterns operating in parallel, NOT one unified principle:

- **Pattern A — Hook-specific structural meta-inspection.** The meta-question + 9 hooks. Applies to ANALYSIS STRUCTURE (the candidate set, frame, question framing, concepts, examples, model fit, phase, self-reference, language). Covered by the new Meta-Inspection section.

- **Pattern B — Process-level failure-mode correctives.** The 6 failure modes (Status Quo Bias, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness) and their corrective questions. Applies to ANALYSIS QUALITY AS A WHOLE (analysis-process quality, not specific structural surfaces). Already in the existing spec; remains unchanged.

- **Pattern C — Lateral viewpoint diversity.** The 6 lateral perspectives (Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Ethical/Systemic). Applies to ANALYSIS CONTENT (different viewpoints applied to substantive content of the inquiry). Already in the existing spec; remains unchanged.

The three patterns operate on different scopes (STRUCTURE vs QUALITY vs CONTENT) and address different concerns. The deliverable explicitly names this three-pattern architecture to avoid the conflation a unified-theory framing would produce.

### 4. Why this is an ADDITIVE section, not a reorganization

Sensemaking evaluated three implementation paths during its SV1→SV6:
- **Path 1 (full reorganization)** — replace existing perspectives + refinement notes + failure-mode correctives with the meta-question + hooks structure. Rejected: too disruptive; loses accumulated wisdom in the calibration set; sacrifices backward compatibility.
- **Path 2 (additive section)** — add the Meta-Inspection section ABOVE existing content; existing perspectives + refinement notes + failure-mode correctives become the calibration set demonstrating the meta-question. **SELECTED.**
- **Path 3 (failure-mode-level extension)** — add the meta-question as a new failure-mode corrective. Rejected: too narrow; the meta-question is broader than a single failure-mode corrective and applies across perspectives + refinement notes + failure modes.

Path 2 preserves accumulated wisdom, keeps the spec backward-compatible, and is reversible at near-zero cost (one edit to remove the section). The Meta-Inspection section ADDS a meta-level view; it doesn't replace anything.

### 5. Step-5-outside-scope, with honest qualifier

The proposal is largely a STRUCTURAL REORGANIZATION — adds a meta-level view of existing behavior. Existing perspectives, refinement notes, and failure-mode correctives continue to operate unchanged. The existing content becomes the calibration set; the meta-question describes the generative principle they instantiate.

The new Meta-Inspection section also includes four light one-line cross-references in existing phases (Phase 1, Phase 2, Phase 3, Phase 5) pointing at the relevant hooks. Two of these (Phase 3 and Phase 5) LABEL existing behavior — the Load-bearing concept test and Specific-vs-pattern recognition cue already fire at Phase 3; the Accommodation trigger fires at Phase 5; the cross-references just name them as instances of the meta-question. No new behavior.

The other two cross-references (Phase 1 and Phase 2) DO introduce small new behavior: an explicit meta-question check at phase close at points where the existing protocol didn't have such a check. Specifically:
- Phase 1 close gains: "apply the meta-question to H4 (concept names) and H5 (motivating examples)" — a new phase-end check.
- Phase 2 close gains: "apply the meta-question to H1 (candidate set), H2 (frame scope), H3 (question framing), H7 (phase/calibration state)" — a new phase-end check (where H2 and H7 are existing perspectives already triggered, but H1 and H3 are 14-00-deferred checks that don't yet fire).

This small new behavior bypasses Step 5 at N=1 per the reversibility precedent established by the 17-00 finding's writing-discipline reminder: lightweight + reversible + spec-level structural change (not runtime-cognition-level new check). The behavior change is honestly acknowledged in the drafted section text rather than glossed over.

### 6. Self-applicability

The meta-question applies to Sensemaking ITSELF. Sensemaking analyzes the structure of understanding; the meta-question asks about the structure OF that analysis. Applying it to Sensemaking's check architecture generates THIS inquiry: "What am I treating as fixed in Sensemaking's check architecture that might not be?" — applied to hooks H1 (candidate set: are perspectives + refinement notes + failure-mode correctives separate?) and H4 (concept names: do those three labels represent real structural distinctions?). The answer to those questions is exactly what this finding produces: three coexisting patterns (Pattern A meta-inspection; Pattern B failure-mode correctives; Pattern C lateral perspectives), not one unified theory.

Self-applicability is HIGH evidence the meta-question is the right principle: a generative principle that can analyze its own framework is structurally trustworthy. If applying the meta-question to Sensemaking produced nothing or contradicted Sensemaking's existing patterns, the meta-question would be untrustworthy when applied externally.

### 7. What's deferred or hedged

- The currently-deferred 14-00 Layer 2 checks (Question-Premise Pre-Bias before SV1; Cross-Candidate Unity at Phase 2) remain DEFERRED until ≥3-instance Step-5 revival. When revived, they integrate as new sub-aspects of hooks H3 and H1 respectively — not as new top-level refinement notes. The spec's growth at that point is sub-linear: ~5-10 lines added to the hooks table rather than ~30+ lines for two new refinement notes.

- Three loop-coined terms in this finding ("meta-question," "inspection hook," "calibration set") need user validation. Defaults ship in the drafted section; alternatives are listed under Open Questions.

- Cross-discipline application — whether Exploration, Decomposition, Innovation, Critique have analogous meta-questions for their own check enumerations — is flagged as a Research Frontier. Not investigated here.

---

## Next Actions

### MUST

- **What:** Apply the drafted Meta-Inspection section text to `homegrown/sense-making/references/sensemaking.md`. Insert AFTER the "Failure Modes" section (i.e., after the Self-Reference Blindness corrective) and BEFORE the "Standard Analysis Protocol" section. The exact text is in the Reasoning section below ("8B — Drafted section text").
  - **Who:** User-applied (or AI-applied with explicit user request).
  - **Gate:** No verification gate; can ship now (the existing spec is the reference; no parallel files need verification).
  - **Why:** Installs the meta-question + 9 hooks + calibration set as a generative principle. Reduces future spec growth from linear to sub-linear. Answers the user's specific question (the H1 hook generates "wait, aren't they doing the same thing?"). Backward-compatible.

- **What:** Add four light one-line cross-references in existing Sensemaking phases pointing at the relevant hooks. The exact texts are in the Reasoning section below ("8C — Cross-references for existing phases").
  - **Who:** Same applicator.
  - **Gate:** Apply concurrently with the Meta-Inspection section.
  - **Why:** Provides discoverability bridges from the existing phases to the new section. Phase 3 and Phase 5 cross-references label existing behavior (no behavior change). Phase 1 and Phase 2 cross-references introduce a small new behavior (phase-end meta-question check), honestly acknowledged in the drafted section's Step-5-conformance note.

### COULD

- **What:** Validate the three loop-coined terms ("meta-question," "inspection hook," "calibration set"). User picks alternatives or accepts defaults.
  - **Who:** User.
  - **Gate:** Optional; not blocking application.
  - **Why:** Terminology defaults work; alternatives (e.g., "structure check" / "stance check" for meta-question; "extension point" / "check surface" for inspection hook; "worked examples" for calibration set) may match the user's mental model better.

- **What:** Run a focused inquiry to identify cross-discipline analogs (does Exploration have its own meta-question? Decomposition? Innovation? Critique?).
  - **Who:** User-initiated inquiry.
  - **Gate:** At user's convenience; not blocking.
  - **Why:** The meta-question pattern may apply beyond Sensemaking. Each discipline has check enumerations; analogous generative principles may be discoverable for each. Out of scope for this inquiry.

### DEFERRED

- **What:** The 14-00 finding's Layer 2 refinement notes (Question-Premise Pre-Bias check before SV1; Cross-Candidate Unity check at Phase 2). These remain DEFERRED until ≥3-instance Step-5 revival.
  - **Gate:** ≥3 confirmed instances of convergence-recognition failure across distinct inquiries (current count from 14-00: 1 confirmed + 1 possible pending the TEM-Sensemaking-Comprehending disambiguation in 14-00 MC3).
  - **Why (if revived):** Adds H1 (Cross-Candidate Unity) and H3 (Question-Premise Pre-Bias) sub-aspects to the hooks table. Integration shape changes from "new top-level refinement notes" (pre-Meta-Inspection) to "sub-aspects of existing hooks" (post-Meta-Inspection) — keeping spec growth sub-linear at revival.

---

## Reasoning

### 8 — What gets applied (refinements integrated inline)

The 4-piece Innovation deliverable was REFINED by Critique. The refinements are applied inline below.

#### 8A — Refinements from Critique (applied)

- **Distinguish meta-inspection checks from lateral perspectives** (Critique D1). The drafted section text below explicitly names three coexisting patterns (A: hook-specific meta-inspection; B: process-level failure-mode correctives; C: lateral viewpoint diversity). The opening sentence scopes precisely to META-INSPECTION checks, not "all Sensemaking checks."

- **Acknowledge two coexisting meta-patterns** (Critique D9). The drafted section names Pattern A (hook-specific structural meta-inspection — the new section's scope) and Pattern B (process-level failure-mode correctives — already in the existing spec, unchanged). The failure-mode correctives DO NOT all map to hooks; they operate at a different abstraction level.

- **Cross-references split clean-label vs introduces-small-new-behavior** (Critique D8 + D4). The drafted section's Step-5-conformance note honestly states: "Phase 3 and Phase 5 cross-references label existing behavior — no new behavior. Phase 1 and Phase 2 cross-references introduce a small new behavior (explicit meta-question check at phase close), bypassed at N=1 per reversibility precedent from the 17-00 finding's writing-discipline reminder."

- **Define phase-end firing timing explicitly** (Critique D11). The drafted section states: "Phase-end firing = after the phase's Sense Version (SV2/SV3/SV4/SV5/SV6) is produced."

- **Make RF3 hook-membership decision criterion explicit** (Critique RF3). The drafted section's "Hooks list extensibility" subsection states: "Apply the meta-question to candidate hooks; does an existing hook generate the new check? If yes → sub-aspect. If no → new hook."

#### 8B — Drafted section text (PRIMARY DELIVERABLE)

Insert into `homegrown/sense-making/references/sensemaking.md` AFTER the "Failure Modes" section (after Self-Reference Blindness corrective ends) and BEFORE the "Standard Analysis Protocol" section.

```markdown
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
| H1 — Candidate set | The set of candidates being adjudicated for their relationships | Convergence-recognition — testing whether candidates being adjudicated are instances of the same underlying operation. Example check phrasing: "Wait, aren't they doing the same thing?" |
| H2 — Frame scope | The boundary of what's in vs out of the inquiry's frame | Definitional / Frame-exit Completeness perspective (Phase 2) — 4 meta-categories |
| H3 — Question framing | The wording of the inquiry's question | Question-premise pre-bias — testing whether the inquiry's question framing pre-biases the candidate set toward distinction, unity, typed relationship, partition, or other; the practitioner states the inverse framing as a structural-grounds check. |
| H4 — Concept names | The labels attached to concepts being committed to | Load-bearing concept test (Phase 3 refinement note) — sub-aspects: proxy-vs-structural, discoverability, user-language alignment |
| H5 — Motivating examples | The specific cases that motivated a key insight | Specific-vs-pattern recognition cue (Phase 3 refinement note) |
| H6 — Model fit | The pattern of revision: refinement vs patching | Accommodation trigger (Phase 5 refinement note) |
| H7 — Phase / calibration state | Whether the rule depends on calibration the project has | Phase / Calibration-State perspective (Phase 2; required when inquiry involves phase-dependent rules) |
| H8 — Self-reference | Whether the evaluation tool and the target share the same conceptual framework | Self-Reference Blindness (failure mode #6) corrective — bridges to Pattern B at this hook |
| H9 — User language alignment | Whether the rephrased concept matches what the user actually said | Sub-aspect of Load-bearing concept test (Phase 3 refinement note) |

### Hooks list extensibility

The hooks list is EXTENDABLE. When a new specific check is discovered, the membership decision criterion is itself the meta-question:

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

### Scope

Meta-Inspection applies WITHIN Sensemaking. The hooks are Sensemaking-specific (candidate set; frame scope; question framing; concept names; motivating examples; model fit; phase/calibration state; self-reference; user language). Other thinking disciplines may have their own structural patterns and analogous meta-questions for their check-enumerations; those are separate concerns.

---
```

The section is approximately 90 lines of markdown — within the ≤100-line ceiling.

#### 8C — Cross-references for existing phases

In addition to the new section, add four light one-line cross-references in the existing phase protocols. Each is one sentence; the existing phase protocols are otherwise unchanged.

**Phase 1 (after the existing Cognitive Anchor Extraction protocol, BEFORE the SV2 heading):**

```markdown
*Meta-Inspection cross-reference: after SV2 is produced, apply the meta-question to H4 (concept names) and H5 (motivating examples). See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

**Phase 2 (after the existing Perspective Checking protocol and refinement notes, BEFORE the SV3 heading):**

```markdown
*Meta-Inspection cross-reference: after SV3 is produced, apply the meta-question to H1 (candidate set), H2 (frame scope — already triggered by Frame-exit Completeness above), H3 (question framing), H7 (phase/calibration state — already triggered by Phase/Calibration-State perspective above). H1 and H3 fire informally as practitioner judgment at this point. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

**Phase 3 (after the existing Ambiguity Collapse protocol and refinement notes, BEFORE the SV4 heading):**

```markdown
*Meta-Inspection cross-reference: the Load-bearing concept test and Specific-vs-pattern recognition cue above ARE the meta-question applied to H4 (concept names) and H5 (motivating examples). No new check fires here; the cross-reference names the existing pattern. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

**Phase 5 (after the existing Conceptual Stabilization protocol and Accommodation trigger refinement note, BEFORE the SV6 heading):**

```markdown
*Meta-Inspection cross-reference: the Accommodation trigger above IS the meta-question applied to H6 (model fit). No new check fires here; the cross-reference names the existing pattern. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

### 9 — KILLs and SURVIVEs from Critique

- **P1 (conceptual content) — REFINE.** Critique flagged: (a) the "9/9 coverage" claim conflated meta-inspection checks with all checks; (b) some calibration mappings were vague. **APPLIED:** the drafted section explicitly names three coexisting patterns (A meta-inspection; B failure-mode correctives; C lateral perspectives) and scopes the meta-question to Pattern A only. The vague mappings (Status Quo Bias, Perspective Blindness, Clean Resolution Trap → which hooks?) are addressed by the "two-meta-patterns" framing: those failure-mode correctives are Pattern B (process-level), not Pattern A (hook-specific), and do not need to map to hooks.

- **P2 (implementation choices) — REFINE.** Critique flagged: (a) the cross-references mix label-existing-behavior with introduces-small-new-behavior; (b) "phase-end firing" timing was ambiguous. **APPLIED:** the drafted section's Step-5 conformance note honestly distinguishes the four cross-references (Phase 3 and Phase 5 = label; Phase 1 and Phase 2 = small new behavior) and cites the reversibility precedent from the 17-00 finding. Phase-end firing is explicitly defined as "after the phase's Sense Version is produced," with the specific hook-firing mapping (after SV2 → H4, H5; after SV3 → H1, H2, H3, H7; etc.).

- **P3 (drafted section text) — REFINE.** Critique flagged: (a) opening sentence overclaimed; (b) needed lateral-perspectives clarification. **APPLIED:** the drafted section's opening names three coexisting patterns and explicitly distinguishes meta-inspection from lateral perspectives.

- **P4 (open items + Research Frontier) — REFINE-MINOR.** Critique flagged: RF3 decision criterion needed to be explicit. **APPLIED:** the drafted section's "Hooks list extensibility" subsection makes the decision criterion explicit (apply the meta-question to candidate hooks; existing hook generates check → sub-aspect; no existing hook → new hook).

- **Emergent observation from Phase 3.5 — TWO meta-patterns coexist.** **APPLIED:** the drafted section's opening explicitly names Pattern A (this section) + Pattern B (failure-mode correctives — already in the spec) + Pattern C (lateral perspectives — already in the spec).

### 10 — Self-reference handling

This inquiry used Sensemaking to investigate Sensemaking's check architecture. Self-reference acuity was high.

External anchoring used: the existing `homegrown/sense-making/references/sensemaking.md` was read in full at Exploration (artifact-grounded); the 14-00 finding cited as the predecessor (deferred Layer 2 design that this inquiry's hook-integration plan extends); the 17-00 finding cited as the source of the reversibility precedent for Step-5 bypass; the user's literal language quoted and used as the H1-application example ("wait, aren't they doing the same thing?").

Counter-anchoring: Exploration explicitly mapped the inverse direction (M-NULL: do nothing; keep the enumeration). Sensemaking explicitly tested Path 1 (full reorganization) as the counter to Path 2 (additive) and rejected Path 1 on backward-compatibility grounds. Innovation explicitly tested the contrarian inversion (don't add the section) and rejected it on growth-pattern grounds. Critique tested the "9/9 coverage" claim and exposed the conflation between meta-inspection and lateral perspectives.

No friction-free passing. The self-applicability claim (the meta-question applies to Sensemaking itself) was explicitly tested: does applying the meta-question to Sensemaking's structure produce something meaningful? Yes — it produces the three-pattern distinction that became the strongest emergent finding from Critique. Self-reference held.

Self-Reference Blindness corrective (failure mode #6) applied: does the thing I'm evaluating use the same conceptual framework I'm using to evaluate it? YES (Sensemaking evaluating Sensemaking). External grounding via existing spec, predecessor findings, and user language. Counter-interpretation tests run per ambiguity. Self-reference HELD.

---

## Open Questions

### Monitoring

- After the Meta-Inspection section is applied, does the next /MVL+ inquiry's Sensemaking phase reference the meta-question + hooks correctly? Observable in the next Sensemaking output that fires a hook check (e.g., applies Load-bearing concept test and references it as H4).
- When the 14-00 deferred Layer 2 checks reach ≥3-instance revival, do they integrate as hook sub-aspects (H1, H3) per this finding's plan, rather than as new top-level refinement notes? Observable at revival time.

### Blocked

- The 14-00 finding's Layer 2 (Question Premise Pre-Bias check, Cross-Candidate Unity check) remains blocked on ≥3-instance threshold. This finding doesn't advance the count; the count tracking is in the 14-00 finding.

### Research Frontiers

- **Cross-discipline meta-questions.** Other disciplines (Exploration, Decomposition, Innovation, Critique) may have analogous generative meta-questions for their own check-enumerations. Candidate meta-questions per discipline:
  - Exploration: "What region am I treating as scanned that might not be?"
  - Decomposition: "What boundary am I treating as natural that might not be?"
  - Innovation: "What mechanism am I treating as the only path that might not be?"
  - Critique: "What dimension am I treating as load-bearing that might not be?"
  
  Focused future inquiry could enumerate each discipline's analog meta-question + hooks. Out of scope here.

- **Spec-growth pattern monitoring.** Track Sensemaking's spec size over time; verify that growth shifts from linear (~30 lines per new failure mode) to sub-linear (~5-10 lines per new hook entry) as new checks are added via the hook mechanism. Other disciplines may show similar growth patterns when meta-question + hooks structures are installed there.

- **Pattern C (lateral perspectives) — is it actually a third pattern or a sub-pattern of something larger?** The 6 lateral perspectives (Technical, Human, Strategic, Risk, Resource, Ethical/Systemic) may themselves be instances of a higher-order pattern (perhaps a meta-question about VIEWPOINT DIVERSITY: "What viewpoint am I taking that I should also see this through?"). Out of scope; flagged for future exploration if the three-pattern model is revisited.

### Refinement Triggers

- **If applying the meta-question + hooks to a future inquiry produces NO useful surfacing** (the practitioner finds the hooks list doesn't fit the inquiry's content), revisit whether the hooks need refinement or whether a new hook is missing.
- **If the cross-references at Phase 1 and Phase 2 confuse practitioners** (because they introduce new behavior at points the existing protocol didn't fire checks), revisit whether the cross-references should be dropped or rephrased.
- **If the "preserve + classify + surface" tier ceiling from the 17-00 finding is later found to apply at the discipline layer too** (i.e., if Sensemaking discovers it crossed into runner-layer cognition), revisit the discipline-layer / runner-layer boundary that this finding presumed clear.

---

## Appendix — Exact Edits to Apply

This appendix lists the exact text and insertion points for applying this finding to `homegrown/sense-making/references/sensemaking.md`. Line numbers reference the spec as of the time this finding was written (383-line baseline; line numbers shift only if the spec is edited between this finding and application). Use structural markers (section headings; line content) to locate insertion points if line numbers drift.

All five edits are insertions. No existing content is removed or modified. Net spec growth: ~100 lines (one section ~90 lines + four one-line cross-references).

### Edit 1 — Insert Meta-Inspection section

**File:** `homegrown/sense-making/references/sensemaking.md`

**Insertion point:** AFTER the `---` divider that follows the Failure Modes section's "Self-Reference Blindness" corrective (line 193 in the baseline spec). BEFORE the `## Standard Analysis Protocol` heading (line 195 in the baseline spec). Insert a blank line + the section content + a `---` divider.

**Exact text to insert:**

```markdown

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
| H1 — Candidate set | The set of candidates being adjudicated for their relationships | Convergence-recognition — testing whether candidates being adjudicated are instances of the same underlying operation. Example check phrasing: "Wait, aren't they doing the same thing?" |
| H2 — Frame scope | The boundary of what's in vs out of the inquiry's frame | Definitional / Frame-exit Completeness perspective (Phase 2) — 4 meta-categories |
| H3 — Question framing | The wording of the inquiry's question | Question-premise pre-bias — testing whether the inquiry's question framing pre-biases the candidate set toward distinction, unity, typed relationship, partition, or other; the practitioner states the inverse framing as a structural-grounds check. |
| H4 — Concept names | The labels attached to concepts being committed to | Load-bearing concept test (Phase 3 refinement note) — sub-aspects: proxy-vs-structural, discoverability, user-language alignment |
| H5 — Motivating examples | The specific cases that motivated a key insight | Specific-vs-pattern recognition cue (Phase 3 refinement note) |
| H6 — Model fit | The pattern of revision: refinement vs patching | Accommodation trigger (Phase 5 refinement note) |
| H7 — Phase / calibration state | Whether the rule depends on calibration the project has | Phase / Calibration-State perspective (Phase 2; required when inquiry involves phase-dependent rules) |
| H8 — Self-reference | Whether the evaluation tool and the target share the same conceptual framework | Self-Reference Blindness (failure mode #6) corrective — bridges to Pattern B at this hook |
| H9 — User language alignment | Whether the rephrased concept matches what the user actually said | Sub-aspect of Load-bearing concept test (Phase 3 refinement note) |

### Hooks list extensibility

The hooks list is EXTENDABLE. When a new specific check is discovered, the membership decision criterion is itself the meta-question:

1. Apply the meta-question to candidate hooks. Does an existing hook generate the new check?
2. If YES — the new check becomes a sub-aspect of the existing hook in the calibration column. No structural change to the hooks list.
3. If NO — add a new hook (H10, H11, ...) with a one-line description and the new check as its initial calibration entry.

The meta-question stays stable; only the hooks table grows.

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

The meta-question applies to Sensemaking ITSELF. Sensemaking analyzes the structure of understanding; the meta-question asks about the structure OF that analysis. Self-applicability is structural evidence that the meta-question is the right principle: a generative principle that can analyze its own framework without contradicting itself.

### Scope

Meta-Inspection applies WITHIN Sensemaking. The hooks are Sensemaking-specific (candidate set; frame scope; question framing; concept names; motivating examples; model fit; phase/calibration state; self-reference; user language). Other thinking disciplines may have their own structural patterns and analogous meta-questions for their check-enumerations; those are separate concerns.

---
```

### Edit 2 — Insert Phase 1 cross-reference

**File:** `homegrown/sense-making/references/sensemaking.md`

**Insertion point:** at the end of Phase 1 — Cognitive Anchor Extraction's anchor-types list (after the line `* Meaning-Nodes (central concepts and themes)`, line 227 in the baseline spec), BEFORE the blank line preceding the SV2 heading (line 229).

**Exact text to insert** (with a blank line before):

```markdown

*Meta-Inspection cross-reference: after SV2 is produced, apply the meta-question to H4 (concept names) and H5 (motivating examples). See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

### Edit 3 — Insert Phase 2 cross-reference

**File:** `homegrown/sense-making/references/sensemaking.md`

**Insertion point:** at the end of Phase 2 — Perspective Checking's refinement notes (after the Phase / Calibration-State perspective requirement refinement note, line 274 in the baseline spec), BEFORE the blank line preceding the SV3 heading (line 276).

**Exact text to insert** (with a blank line before):

```markdown

*Meta-Inspection cross-reference: after SV3 is produced, apply the meta-question to H1 (candidate set), H2 (frame scope — already triggered by Frame-exit Completeness above), H3 (question framing), H7 (phase/calibration state — already triggered by Phase/Calibration-State perspective above). H1 and H3 fire informally as practitioner judgment at this point. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

### Edit 4 — Insert Phase 3 cross-reference

**File:** `homegrown/sense-making/references/sensemaking.md`

**Insertion point:** at the end of Phase 3 — Ambiguity Collapse's refinement notes (after the Specific-vs-pattern recognition cue refinement note, line 344 in the baseline spec), BEFORE the blank line preceding the SV4 heading (line 346).

**Exact text to insert** (with a blank line before):

```markdown

*Meta-Inspection cross-reference: the Load-bearing concept test and Specific-vs-pattern recognition cue above ARE the meta-question applied to H4 (concept names) and H5 (motivating examples). No new check fires here; the cross-reference names the existing pattern. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

### Edit 5 — Insert Phase 5 cross-reference

**File:** `homegrown/sense-making/references/sensemaking.md`

**Insertion point:** at the end of Phase 5 — Conceptual Stabilization's Accommodation trigger refinement note (after line 378 in the baseline spec), BEFORE the blank line preceding the SV6 heading (line 380).

**Exact text to insert** (with a blank line before):

```markdown

*Meta-Inspection cross-reference: the Accommodation trigger above IS the meta-question applied to H6 (model fit). No new check fires here; the cross-reference names the existing pattern. See the "Meta-Inspection — The Generative Pattern for Structural Checks" section above.*
```

### Application checklist

- [ ] Edit 1 applied (Meta-Inspection section inserted)
- [ ] Edit 2 applied (Phase 1 cross-reference inserted)
- [ ] Edit 3 applied (Phase 2 cross-reference inserted)
- [ ] Edit 4 applied (Phase 3 cross-reference inserted)
- [ ] Edit 5 applied (Phase 5 cross-reference inserted)

After all 5 edits, the spec grows by ~100 lines. No existing content is modified or removed.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+
u said

Layer 2 — Sensemaking + Innovation (discipline layer, DEFERRED until ≥3 instances). Two refinement notes added to homegrown/sense-making/references/sensemaking.md (Question Premise Check before SV1; Cross-Candidate Unity check at Phase 2)


and i think this is good. But sensemaking checks shuldnt be so rigid.. we sohuld define them as meta so they have coverage..

what meta level question would create a question "wait , arent they doing the same thing? "
```

</details>
