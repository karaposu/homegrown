# Exploration: Sensemaking Meta-Level Check Generator

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_17-29__sensemaking_meta_level_check_generator/_branch.md`

Question (restated): what meta-level question(s) would GENERATE Sensemaking's specific checks (convergence-recognition; Frame-exit Completeness; Question Premise Pre-Bias; Load-bearing Concept Test; Cross-Candidate Unity; Specific-vs-Pattern; Accommodation Trigger) as runtime instances of one underlying meta-operation, rather than a hard-coded enumeration that grows with each new failure mode?

---

## 1. Mode and Entry Point

**Mode: mixed.**
- Artifact mode for inventorying the existing Sensemaking checks in `homegrown/sense-making/references/sensemaking.md`.
- Possibility mode for generating candidate meta-questions and testing their coverage of the known instances.

**Entry point: signal-first.** The user provided two signals: (a) "checks shouldn't be so rigid; define them as meta so they have coverage"; (b) the example specific check "wait, aren't they doing the same thing?" Probe these signals, then scan outward for coverage and inverse direction.

**Surround layer (Coarse Scan requirement).** Before going deep on meta-question candidates, scan the contextual frame:
- The current Sensemaking spec as the artifact to potentially reorganize.
- The 14-00 finding's deferred Layer 2 (two specific checks proposed; would join the enumeration).
- The 17-00 finding's runner-layer Layer 1 (different layer — informs tier ceiling for this inquiry).
- Step 5 caution (≥3 instances threshold for behavior-changing discipline-spec edits).
- Existing META-question pattern in the spec: the 6 failure modes each have a Corrective question (meta-question per failure mode). The pattern partially exists already.

---

## 2. Coarse Scan — Surround layer

| Region | Inventory | Confidence |
|---|---|---|
| Current Sensemaking perspectives | 9 perspectives listed: Technical, Human, Strategic, Risk, Resource, Ethical, Definitional/Internal Consistency, Definitional/Frame-exit Completeness, Phase/Calibration-State | Confirmed (read in full) |
| Frame-exit Completeness sub-structure | 4 meta-categories: Existence Enumeration, Role Assessment, Verdict Rigor, Residual / Coverage Justification | Confirmed |
| Refinement notes in spec | 4 distinct refinement notes: Phase/Calibration-State perspective requirement (Phase 2); Load-bearing concept test with 3+ sub-aspects (Phase 3); Specific-vs-pattern recognition cue (Phase 3); Accommodation trigger (Phase 5) | Confirmed |
| Failure modes | 6 failure modes, each with a "Feels like" + "Corrective" question | Confirmed |
| Two-operation framing | Comprehending (Phase 1-2) + Stabilizing (Phase 3-5); 12-30 inquiry added this | Confirmed |
| Deferred checks (14-00 Layer 2) | Question Premise Check before SV1; Cross-Candidate Unity at Phase 2 | Confirmed (in 14-00 finding) |
| Corrective-questions pattern already in spec | Each failure mode has a meta-question corrective. E.g., Status Quo Bias's "Am I protecting this because evidence supports it, or because it exists?" | Confirmed |
| Step 5 caution | ≥3 instances of NEW failure-mode family before behavior-changing discipline-spec edits | Confirmed |
| Tier-ceiling concept from 17-00 | Runner-layer = preserve + classify + surface; discipline-layer = analysis + cognition | Confirmed (just adopted) |

**Surround layer fully scanned.** No Premature Depth — the territory's frame is mapped before going deep.

---

## 3. Cycle 1 — Probe: existing CORRECTIVE-QUESTIONS pattern in the spec

**Probe target:** the 6 failure modes each have a Corrective question. The pattern of "meta-question that generates a runtime check" already exists at the failure-mode level. Is this the same pattern the user is asking to extend to the perspective / refinement-note level?

### The 6 existing corrective questions

| # | Failure mode | Corrective question (meta-question) |
|---|---|---|
| 1 | Status Quo Bias | "Am I protecting this because the evidence supports it, or because it already exists? Would I reach the same conclusion if it were undocumented?" |
| 2 | Premature Stabilization | "How many perspectives produced NEW anchors versus confirmed existing ones?" |
| 3 | Anchor Dominance | "If I removed this one anchor, would the rest of the model collapse? If yes, I'm building on one pillar — are there others I'm not seeing?" |
| 4 | Perspective Blindness | "Which perspective would be most uncomfortable to check? That's the one to check." |
| 5 | Clean Resolution Trap | "State the strongest counter-argument. State why it fails — on structural grounds." |
| 6 | Self-Reference Blindness | "Does the thing I'm evaluating use the same conceptual framework I'm using to evaluate it?" |

### Sub-feature discovered: META-PATTERN partially exists

The corrective-question pattern is already a META operation — each question is general enough to generate a SPECIFIC runtime check when applied to the inquiry's content. The user's intuition extends this pattern to PERSPECTIVES and REFINEMENT NOTES (not just failure modes).

Currently:
- Failure modes are SIGNALS THAT SOMETHING WENT WRONG, with meta-questions as correctives.
- Perspectives are LISTS OF CHECKS TO RUN, with specific instructions.
- Refinement notes are ADDITIONS to specific phases triggered by specific conditions.

The user's proposal: REFRAME perspectives / refinement notes as META-QUESTIONS that generate specific checks when applied to inquiry content. Pattern-consistent with the existing failure-mode correctives.

---

## 4. Cycle 2 — Scan: Candidate meta-questions

Possibility mode. Generate candidates at surface level.

### Candidate meta-questions

| # | Candidate | Phrasing emphasis |
|---|---|---|
| M1 | "What am I treating as FIXED that might not be?" | Object-focus: assumptions |
| M2 | "What presupposition does my analysis depend on?" | Same as M1 with different phrasing |
| M3 | "Where would I have to STEP BACK to see what I'm missing?" | Operation-focus: stepping back |
| M4 | "What's the LEVEL of this analysis, and is it the right level?" | Abstraction-level focus |
| M5 | "What am I taking for granted about the SHAPE of my analysis?" | Structure-focus |
| M6 | "What would I see if I inverted what I'm assuming here?" | Inversion-focus |
| M7 | "What's the same that I'm treating as different?" + inverse "What's different that I'm treating as the same?" | Identity/difference focus |
| M8 | "What's the smallest change to my frame that would surface something new?" | Perturbation-focus |
| M9 | "Where is the inquiry's commitment thinnest — what would break under pressure?" | Stress-test focus |

### Candidate inspection hooks (for whichever meta-question wins)

The meta-question by itself is abstract. To be operational, it needs HOOKS — specific aspects of the analysis to inspect. Surfaced from probing the existing check inventory:

| Hook | What the meta-question applies to | Generates which specific check |
|---|---|---|
| H1 — Candidate set | The set of candidates being adjudicated for their relationships | Convergence-recognition / Cross-Candidate Unity |
| H2 — Frame scope | The boundary of what's in vs out of the inquiry's frame | Frame-exit Completeness |
| H3 — Question framing | The wording of the inquiry's question | Question Premise Pre-Bias |
| H4 — Concept names | The labels attached to concepts being committed to | Load-bearing Concept Test (sub-aspects: proxy-vs-structural; discoverability; user-language alignment) |
| H5 — Motivating examples | The specific cases that motivated a key insight | Specific-vs-Pattern Recognition Cue |
| H6 — Model fit | The pattern of revision: refinement vs patching | Accommodation Trigger |
| H7 — Project phase / calibration state | Whether the rule depends on calibration the project has | Phase / Calibration-State |
| H8 — Self-reference | Whether the evaluation tool and target share conceptual framework | Self-Reference Blindness corrective |
| H9 — User language | Does the rephrased concept match what the user actually said | Load-bearing concept test sub-aspect |

9 hooks identified, covering all known specific checks.

### C13-style null option

| # | Candidate | Description |
|---|---|---|
| M-NULL | Keep the enumeration as-is | The existing spec already has corrective-questions at failure-mode level + perspective-specific checks. Don't reorganize. |

---

## 5. Cycle 3 — Probe: Coverage test for each meta-question candidate

For each candidate, test whether applying it to each hook generates the known specific check.

### M1 — "What am I treating as FIXED that might not be?"

| Hook | Specific check generated | Generates correctly? |
|---|---|---|
| H1 candidate set | "I'm treating candidates as separate — are they actually separate?" → Convergence-recognition | ✓ |
| H2 frame scope | "I'm treating my frame as complete — what's outside?" → Frame-exit Completeness | ✓ |
| H3 question framing | "I'm treating the question's wording as neutral — what's it pre-biasing?" → Question Premise Pre-Bias | ✓ |
| H4 concept names | "I'm treating this concept's name as accurate — does it represent its structure?" → Load-bearing Concept Test | ✓ |
| H5 motivating examples | "I'm treating these examples as the whole — are they instances of a wider pattern?" → Specific-vs-Pattern | ✓ |
| H6 model fit | "I'm treating each revision as refinement — am I patching a misfit model?" → Accommodation Trigger | ✓ |
| H7 phase / calibration | "I'm treating the rule as universal — does it depend on phase calibration?" → Phase/Calibration | ✓ |
| H8 self-reference | "I'm treating my evaluation as independent — does it share framework with target?" → Self-Reference Blindness | ✓ |
| H9 user language | "I'm treating the term as appropriate — does the user actually use this language?" → User-Language Alignment | ✓ |

**Coverage: 9/9.** M1 generates all known specific checks when applied across the hooks.

### M3 — "Where would I have to STEP BACK to see what I'm missing?"

| Hook | Specific check generated | Generates correctly? |
|---|---|---|
| H1 candidate set | "Step back from pairwise comparison to operation-level" → Convergence-recognition | ✓ |
| H2 frame scope | "Step back from inside frame to project-wide" → Frame-exit Completeness | ✓ |
| H3 question framing | "Step back from question wording to framing pre-bias" → Question Premise Pre-Bias | ✓ |
| H4 concept names | "Step back from name to structure" → Load-bearing Concept Test | ✓ |
| H5 motivating examples | "Step back from examples to pattern" → Specific-vs-Pattern | ✓ |
| H6 model fit | "Step back from patching to questioning model fit" → Accommodation Trigger | ✓ |
| H7 phase / calibration | "Step back from rule to calibration context" → Phase/Calibration | ✓ |
| H8 self-reference | "Step back from evaluation to evaluation tool" → Self-Reference Blindness | ✓ |
| H9 user language | "Step back from loop-coined name to user vocabulary" → User-Language Alignment | ✓ |

**Coverage: 9/9.** M3 also generates all known specific checks. Same coverage as M1.

### M4 — "What's the LEVEL of this analysis, and is it the right level?"

| Hook | Generates correctly? |
|---|---|
| H1 candidate set | "Pairwise vs abstraction level" → Convergence-recognition ✓ |
| H2 frame scope | "Frame level vs project-wide level" → Frame-exit Completeness ✓ |
| H3 question framing | "Word level vs framing level" → Question Premise Pre-Bias ✓ |
| H4 concept names | "Name level vs structure level" → Load-bearing Concept Test ✓ |
| H5 motivating examples | "Example level vs pattern level" → Specific-vs-Pattern ✓ |
| H6 model fit | "Component-revision level vs model-fit level" → Accommodation Trigger ✓ |
| H7 phase / calibration | "Universal-rule level vs phase-contingent level" → Phase/Calibration ✓ |
| H8 self-reference | "Object level vs meta level" → Self-Reference Blindness ✓ |
| H9 user language | "Loop-coined level vs project-vocabulary level" → User-Language Alignment ✓ |

**Coverage: 9/9.** M4 also covers everything.

### M7 — "What's the same that I'm treating as different? What's different that I'm treating as the same?"

| Hook | Generates correctly? |
|---|---|
| H1 candidate set | "Same → different: convergence-recognition ✓" |
| H2 frame scope | Partial — frame-exit isn't about same/different; it's about exclusion. Awkward fit. |
| H3 question framing | Partial — framing pre-bias isn't well-served by same/different. |
| H4 concept names | Partial — name vs structure isn't fundamentally same/different. |
| H5 motivating examples | Partial — pattern-vs-examples isn't fundamentally same/different. |
| H6 model fit | NOT well-fit. |
| H7 phase / calibration | NOT well-fit. |
| H8 self-reference | NOT well-fit. |
| H9 user language | NOT well-fit. |

**Coverage: 2/9 strong; 3/9 partial; 4/9 not fit.** M7 is too narrow — it generates convergence-recognition well but misses most other hooks.

### Convergence observed

M1, M3, M4 all achieve 9/9 coverage. They are different PHRASINGS of the same underlying meta-operation: **inspecting the analysis's own structure for assumptions, level, frame, etc., and asking what's been left unexamined**.

M7 is too narrow.

M2 is M1 with different phrasing.

M5, M6, M8, M9 are variations — all probably 7+/9 with some weakness.

---

## 6. Cycle 4 — Probe: the M-NULL option (inverse direction)

The inverse argument: the enumeration is structurally correct; specific checks are more discoverable and operational than meta-questions.

### Arguments for M-NULL (keep enumeration)

- **Specificity for operational guidance.** A specific check ("apply Cross-Candidate Unity test with these 3 steps") is more actionable than a meta-question ("inspect the candidate set"). The practitioner needs concrete steps.
- **Discoverability.** Enumerated checks are searchable; meta-questions are abstract. A new practitioner reads the spec and sees "Frame-exit Completeness" as a discrete thing to apply.
- **Risk of becoming aspirational.** "Inspect analysis structure" without specific hooks is too vague to be operational. The hooks ARE the specificity — and the hooks turn the meta-question back into an enumeration.
- **Failure-mode correctives are already meta-questions.** The pattern exists at the failure-mode level (the most general signal "something is off") but doesn't need to extend to perspectives (the most specific check). Different abstraction levels for different purposes.

### Arguments against M-NULL (i.e., for adopting meta-question)

- **Spec growth.** Each new failure mode adds a new refinement note. The spec is at 383 lines and growing. A meta-question with hooks lets the hooks list grow without restructuring the spec.
- **Coverage of unknown failure modes.** A new failure mode that hasn't been named yet might be GENERATED by the meta-question applied to a new hook, before the failure mode is even diagnosed. The enumeration can't do this.
- **Cognitive coherence.** The practitioner learns ONE meta-operation, then applies it broadly. The enumeration requires memorizing 9 perspectives + 4 refinement notes + 6 failure modes = 19 items.

### Tension resolution

The two directions converge on a HYBRID:
- The meta-question is the GENERATOR — abstract, applies broadly.
- The hooks are the COVERAGE INDEX — concrete inspection points, list can grow.
- The existing specific checks are EXAMPLES / CALIBRATION POINTS — show practitioners what "applying the meta-question to hook X" looks like in practice.

The enumeration doesn't disappear; it becomes the CALIBRATION SET that demonstrates the meta-question's application. The meta-question becomes the GENERATIVE PRINCIPLE that covers unknown hooks.

**Sub-feature discovered:** the binary choice (meta-question vs enumeration) is false. The hybrid (meta + hooks + examples) gets both coverage and discoverability.

---

## 7. Cycle 5 — Jump scan: challenge the user's framing

Per Failure Mode #3 (False Confidence) prevention: deliberately scan in a different direction than the user's framing.

### Jump scan candidate 1: maybe the FAILURE-MODE structure is the right meta-level

The 6 failure modes ARE the meta-level checks. Each has a corrective question that generates specific runtime checks. Maybe the right move is NOT to add a new meta-level (perspective + refinement → meta-question) but to REORGANIZE existing perspectives + refinements AS failure modes with correctives.

E.g.:
- Convergence-recognition → new failure mode "Convergence Blindness" with corrective "Wait, aren't they doing the same thing?"
- Frame-exit Completeness → new failure mode "Frame-scope Blindness" with corrective "What does this term refer to project-wide?"

But Step 5 gates failure-mode coinage at ≥3 instances. Convergence-recognition is at N=1; Frame-exit was promoted to perspective in 09-20 inquiry because failure-mode coinage was DEFERRED.

So this jump-scan refinement actually CONFIRMS the user's intuition from a different angle: failure-mode coinage is too heavyweight at N=1. A meta-question with hooks is a LIGHTER-WEIGHT structure that captures the SAME generative pattern without crossing the ≥3-threshold for failure-mode coinage.

### Jump scan candidate 2: the meta-question is already implicit in the existing structure

Sensemaking already operates this way at the level of practice — the practitioner reads the spec, internalizes the patterns, and applies them generatively. The user's question may be about MAKING THIS EXPLICIT in the spec itself, not about adding new functionality.

Yes — the user's framing supports this. "We should define them as meta so they have coverage" → make the meta operation explicit in the spec, not implicit in the practitioner's head.

### Jump scan candidate 3: what if the meta-question can also apply to Sensemaking itself, not just to inquiries?

Self-reference acuity. The meta-question "what am I treating as fixed that might not be?" applied to Sensemaking ITSELF:
- "I'm treating the 9 perspectives as fixed — are they all instances of one operation?"
- "I'm treating the 4 refinement notes as fixed — are they instances of the meta-question already?"
- "I'm treating the 6 failure modes as fixed — could they be generated by the meta-question + hooks?"

YES. The meta-question, when applied to Sensemaking's own structure, generates THIS INQUIRY. The user's question is itself an INSTANCE of the meta-question applied at the self-reference level.

**Sub-feature discovered:** the meta-question is self-applicable. The fact that the user is asking THIS question is evidence that the meta-question is the right generative principle. The user is doing exactly what the meta-question recommends: stepping back from Sensemaking's specific checks to ask if they're instances of something more general.

---

## 8. Frontier State

**Frontier: STABLE.** Five cycles produced:
- 9 candidate meta-questions (M1-M9 + M-NULL)
- 9 inspection hooks (H1-H9)
- 9/9 coverage on M1, M3, M4 (different phrasings, same operation)
- Hybrid structure (meta + hooks + examples) resolves the binary choice
- 3 jump scan refinements (failure-mode-coinage perspective; making-implicit-explicit; self-applicability)

Frontier hasn't pushed outward in the last cycle — jump scan refined existing regions.

---

## 9. Confidence Map

| Region | Confidence | Note |
|---|---|---|
| Current Sensemaking spec inventory | Confirmed | Read in full |
| 6 failure modes + correctives pattern | Confirmed | Pattern is meta-level |
| Existing 9 perspectives + 4 refinement notes | Confirmed | These are the candidate enumeration |
| 9 candidate meta-questions | Scanned | M1, M3, M4 converge at 9/9 coverage |
| 9 inspection hooks | Scanned | Map all known specific checks |
| Inverse direction (enumeration is correct) | Scanned | Resolved via hybrid |
| Hybrid structure (meta + hooks + examples) | Scanned | Both coverage and discoverability achievable |
| Self-applicability of meta-question | Scanned | This inquiry is itself an instance |
| Phrasing choice among M1, M3, M4 | Unknown — deferred to Sensemaking | They have equivalent coverage; the choice is stylistic, not structural |
| Reorganization vs additive | Unknown — deferred to Sensemaking | Should sensemaking.md be reorganized around the meta-question, or should the meta-question be ADDED as a new top-level section alongside existing content? |
| Tier ceiling | Inferred | Meta-question stays within discipline-layer; doesn't cross to runner-layer (which is preserve+classify+surface per 17-00 finding) |
| Hook list growth | Inferred | The hook list can grow; the meta-question stays stable. New failure modes add hooks, not perspectives. |

---

## 10. Gaps and Recommendations

### Known gaps (bounded; adjacent to explored)

- **Exact phrasing of the meta-question** — M1, M3, M4 all achieve 9/9 coverage with different phrasings. Sensemaking should adjudicate which phrasing best matches Sensemaking's existing vocabulary and the practitioner's intuitive grasp.
- **Reorganization scope** — does sensemaking.md get REORGANIZED around the meta-question (replacing the current perspective list with the meta + hooks structure), or does the meta-question get ADDED as a new section alongside existing perspectives (maximum backward compatibility)?
- **Step 5 application** — does the meta-question count as a behavior-changing discipline-spec edit (gated by Step 5)? Or is it a structural reorganization that doesn't add new failure modes (and thus outside Step 5's literal scope)?

### Unknown — deferred for Sensemaking

- **Sensemaking should adjudicate:** which phrasing of the meta-question wins (M1, M3, M4, or a synthesis); whether the spec is REORGANIZED or ADDED-TO; whether Step 5 applies.

### Recommendations for next disciplines

- **Sensemaking** should adjudicate the phrasing crux (M1 vs M3 vs M4 vs synthesis), the reorganization-vs-addition crux, and the Step 5 application. Apply the meta-question to itself as a self-applicability test.
- **Decomposition** should partition the deliverable: the meta-question text; the hooks list; the example calibration set; the reorganization proposal (if warranted); Step 5 reasoning.
- **Innovation** should draft the exact sensemaking.md text — either as reorganization or as additive section. Bound by the discipline-layer tier (discipline cognition is allowed here; runner tier doesn't apply).
- **Critique** should adversarially test: (a) coverage of the meta-question over the 9 known check instances; (b) discoverability of the meta-question for new practitioners; (c) tier ceiling (meta-question stays within discipline-layer cognition; doesn't expand into a new discipline); (d) self-reference handling.

---

## 11. Convergence Assessment

- **Frontier stability:** STABLE. Last cycle (jump scan) refined existing regions; did not open new region.
- **Declining discovery rate:** YES. Cycle 5 produced refinements; Cycle 4 produced the hybrid resolution; the rate is declining.
- **Bounded gaps:** YES. All known gaps are adjacent to scanned regions. The unknown phrasing and reorganization-vs-addition choices are explicitly named and handed to Sensemaking.

**All three convergence criteria met.**

Jump scan completed (Cycle 5) — no uncharted voids surfaced.

**Premature Evaluation in Possibility Mode guardrail:** this exploration did NOT pre-reject any candidate. M-NULL (the inverse direction) is on the map. M7 was assessed as too narrow but kept on the map with explicit reasoning. No rejections-with-verdict-reasoning.

**Convergence: PASS.** Hand off to Sensemaking.

---

## 12. Telemetry

- Regions scanned: 6 (surround + 5 cycles)
- Signals detected: 9 meta-question candidates + 9 hooks + 3 jump-scan refinements
- Probes conducted: 5 (cycles 1-5)
- Frontier state: STABLE
- Failure modes observed: None — Premature Depth avoided (surround layer scanned first); Surface-Only Scanning avoided (5 probes); False Confidence prevented (jump scan completed); Premature Termination prevented (3 convergence criteria checked); Re-Exploration prevented (frontier tracked); Completeness Bias prevented (M-NULL included; inverse direction tested).
- Self-reference acuity handled: YES (jump scan candidate 3 — the meta-question is self-applicable; this inquiry is an instance).
