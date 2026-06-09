---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---

# Finding: Task-Define §4.7 — Confidence Rubric Refinement

## Question

From `_branch.md`:

**Question.** Design the HIGH / MED / LOW confidence rubric for §4.7's self-assessment verdict in the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`. The current §4.7 commits the verdict shape (PROCEED / FLAG / RE-RUN with HIGH / MED / LOW confidence) but provides only a qualitative description — *"confidence reflects the LLM's judgment about the strength of the verdict"* — with no rubric specifying what produces each level. Without operational definitions, the same input may receive different confidence stamps across invocations; downstream consumers have no consistent meaning to read. Refinement #6 from the earlier self-critique flagged this; mode 6 and verification inquiries both noted it as a separate gap to be addressed in its own inquiry.

**Goal.** Concrete drop-in spec content — rubric text + placement + cross-verdict applicability + compliance verdicts. Each level's definition must be operational (tied to runtime-observable signals; not subjective LLM feeling), the three levels must form a coherent gradient (HIGH > MED > LOW on the same discriminator), and the refinement must respect the existing spec (§4.1 framework, §4.2 mode list, §4.7 verdict shape) + the lightweight stance + the self-containment rule.

**What would fail.** A rubric that states levels qualitatively without naming what produces each; ties definitions to subjective LLM feeling; uses different discriminator axes per level without structural justification; over-procedurizes (numerical thresholds; explicit judgment-call counting); re-introduces structured-shape commitment (which mode 6 rejected); re-introduces per-mode confidence (which mode 6 rejected as premature for Bootstrap state); includes inquiry-folder references.

## Finding Summary

- **The refinement is a §4.7 sub-block** added immediately after the verdict-shape commitment paragraph (and before the FLAG conditions list). The sub-block contains the 3-level rubric definitions + a brief cross-verdict applicability note. No other section changes.

- **The discriminator is LAYER 1 mode boundary proximity (primary, objective) + per-operation output coherence (secondary, subjective).** The primary axis uses the §4.2 LAYER 1 mode list as its signal source — each level is defined by how many LAYER 1 mode boundaries were approached during the invocation and how close any one came to firing. The secondary axis captures per-operation friction the LLM perceives even when no LAYER 1 mode boundary was approached (e.g., close calls inside Itemize's tuple test or Rephrase's synonym selection that don't propagate to a mode firing). Combining both axes preserves the user's original intent — the user's proposed wording paired "internally coherent" (subjective) with "no LAYER 1 mode boundary approached" (objective), and that combined form is what the refinement commits.

- **HIGH = no LAYER 1 mode boundary approached AND each operation's output internally coherent without close calls.** A clean run. No friction observed on either axis.

- **MED = one LAYER 1 mode boundary approached but did not fire, OR one operation's output had an observable close call that did not propagate to a mode boundary.** One friction point observed.

- **LOW = multiple LAYER 1 mode boundaries approached, OR one was very near firing, OR multiple operations had close calls.** Compound or severe friction.

- **The rubric applies to all three verdicts (PROCEED, FLAG, RE-RUN); confidence and verdict are independently determined.** A brief paragraph after the 3-level definitions names common combinations (HIGH-PROCEED clean run + output ready; MED-FLAG one boundary approached + one fired with downstream review warranted; LOW-RE-RUN structural failure with low confidence in any verdict claim) and less-common-but-valid ones (LOW-PROCEED process succeeded but the LLM perceives compound internal friction; HIGH-FLAG very confident the flagged condition actually exists). All 9 verdict×confidence combinations are allowed; no defaults are committed by this rubric.

- **The discriminator uses Task-Define's own §4.2 LAYER 1 mode list as the signal source — not imported from sister disciplines.** The structural pattern (observable-signal-anchored confidence) is shared with Surfacing's per-item relevance-confidence and Sensemaking's ambiguity-collapse HIGH/LOW, but each discipline grounds its rubric in its own observable signals. This refinement applies the project pattern to Task-Define's specific signals (LAYER 1 modes) rather than importing sister-discipline machinery.

- **Self-containment, lightweight stance, and perception/action split all preserved.** The sub-block is ~8-12 lines (3-bullet rubric + brief paragraph), fitting §4.7's existing multi-paragraph structure; references only intra-spec sections (§4.2 mode list; §4.4 asymmetric-failure principle in the cross-verdict note); confidence remains perceptive content (the LLM perceives friction; the runner/user act on the verdict-with-confidence stamp).

- **Bootstrap-state compatible.** The rubric works without observed-performance calibration data — both discriminator axes are observable per invocation. At Mature Operation (~30+ invocations), the rubric's structural form persists; numerical anchors (e.g., quantifying "very near firing") may be added empirically.

## Finding

Small piece of surrounding context before the rubric itself: the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md` was authored from the meaning-layer + process-layer findings. Self-critique afterward identified several gaps; this inquiry addresses refinement #6 — the §4.7 self-assessment confidence rubric being under-specified. Mode 6 and verification inquiries explicitly flagged this rubric as outside their scope, deferring it to this inquiry. The refinement adds an operational rubric so the same input produces consistent confidence stamps across invocations and downstream consumers (runners, users) have a stable meaning for HIGH / MED / LOW.

### 1. What gets amended

One §4.7 sub-block added. Nothing else in the spec changes.

The current §4.7 contains the verdict-shape commitment paragraph (PROCEED / FLAG / RE-RUN with HIGH / MED / LOW confidence + Conditions list), the PROCEED definition, the FLAG conditions list, and the RE-RUN conditions list. The refinement inserts a "Confidence rubric:" sub-block between the verdict-shape commitment paragraph and the FLAG conditions list. The sub-block has two parts — the 3-level rubric definitions (P1) and the cross-verdict applicability note (P2).

### 2. The §4.7 sub-block — exact text

Inserted immediately after the verdict-shape commitment paragraph (the one that introduces PROCEED / FLAG / RE-RUN with HIGH / MED / LOW), before the FLAG conditions list:

> *Confidence rubric:*
>
> - **HIGH** — no LAYER 1 mode boundary (§4.2) was approached during the invocation, and each operation's output was internally coherent without close calls. The verdict reflects a clean run.
>
> - **MED** — one LAYER 1 mode boundary was approached but did not fire, or one operation's output had an observable close call that did not propagate to a mode boundary. The verdict reflects one friction point.
>
> - **LOW** — multiple LAYER 1 mode boundaries were approached, or one was very near firing, or multiple operations had close calls. The verdict reflects compound friction.
>
> *The rubric applies to all three verdicts (PROCEED, FLAG, RE-RUN); confidence and verdict are independently determined. Common combinations include HIGH-confidence-PROCEED (clean run; output ready for downstream consumption), MED-confidence-FLAG (one boundary approached and one fired; downstream review warranted), and LOW-confidence-RE-RUN (structural failure; low confidence in any verdict claim about the malformed invocation). Less-common-but-valid combinations include LOW-confidence-PROCEED (process succeeded but the LLM perceives compound internal friction) and HIGH-confidence-FLAG (very confident the flagged condition actually exists).*

### 3. How the rubric operates at runtime

At end-of-invocation self-check, the LLM running Task-Define applies the rubric as follows:

(a) Examine each of the 6 LAYER 1 modes from §4.2. For each mode, ask: did this invocation approach the mode's boundary? Count the number of boundaries approached. For any boundary approached, judge how close it came to firing.

(b) Examine each operation's output independently (Itemize statement-level + Meta-question per item + Deconstruct per item + MultiScope per item + Rephrase per item). For each operation, ask: did the LLM observe a close call inside the operation that did not propagate to a LAYER 1 mode boundary? Count operations with such observable close calls.

(c) Apply the rubric:
- 0 boundaries approached AND 0 operations with close calls → HIGH.
- 1 boundary approached (but not fired) OR 1 operation with a close call → MED.
- Multiple boundaries approached OR 1 boundary very near firing OR multiple operations with close calls → LOW.

(d) The confidence stamp is emitted alongside the verdict. Confidence and verdict are independent — a HIGH-confidence stamp can pair with any of PROCEED / FLAG / RE-RUN, and the cross-verdict applicability note identifies common and less-common patterns to aid downstream interpretation without committing defaults.

### 4. Why two discriminator axes — primary + secondary

The user's original refinement proposal paired two observation types: *"every operation's output is internally coherent AND no LAYER 1 mode boundary was approached."* The AND combines an OBJECTIVE structural anchor (LAYER 1 mode boundary; observable per invocation; project-rooted via §4.2) and a SUBJECTIVE quality observation (operation output coherence; LLM judgment about per-operation friction).

The two are distinct in what they capture. Most per-operation judgment-calls map onto LAYER 1 mode boundaries — Itemize's tuple-test maps to mode 1 (Premature-split) or mode 2 (Late-detected); Rephrase's constrained-by judgment maps to mode 4 (Rephrase-drifted); the MQ extension bounded-rule judgment maps to mode 3 (MQ-extension-violates). But there are also per-operation judgment-calls UPSTREAM of mode boundaries: tuple-identification choices within Itemize that don't trigger the Premature-split mode; synonym choices within Rephrase that don't drift into mode 4. The primary objective axis (LAYER 1 boundary proximity) anchors the rubric in structural facts; the secondary subjective axis (per-operation coherence) captures the LLM-perceived friction at finer granularity.

A pure-objective rubric (only LAYER 1 boundary count) would lose the user's both-axes intent. A pure-subjective rubric (only operation coherence) would let confidence drift across invocations because "coherence" is judgment-dependent. The combined form is the structural choice that preserves both.

### 5. Why the rubric applies to all 9 verdict×confidence combinations

Each of the 3 verdicts can pair with any of the 3 confidence levels — 9 combinations. The cross-verdict applicability note allows all 9 without committing defaults because:

- The verdict and confidence answer different questions. The verdict says "what happened structurally" (PROCEED = clean operation; FLAG = recoverable issue; RE-RUN = structural failure). The confidence says "how clean was the reasoning that produced the verdict" (HIGH = no friction observed; MED = one friction point; LOW = compound or severe friction). Committing a default (e.g., "RE-RUN always pairs with LOW") would force one to determine the other, losing the orthogonal information.

- Some less-common combinations are honest reports the rubric should support. LOW-confidence-PROCEED says "the operation succeeded but the LLM perceived compound friction internally" — useful caveat for downstream consumers. HIGH-confidence-FLAG says "very confident the flagged condition actually exists" — useful when the runner needs to act on the flag.

The cross-verdict note names the common combinations (so downstream consumers have a starting point for interpretation) and explicitly identifies the less-common-but-valid combinations (so the rubric doesn't preclude honest unusual reports) without committing any pattern as a default.

### 6. Coherence with sister-discipline confidence patterns

Surfacing's per-item relevance-confidence (at `cognitive_harness/surfacing/references/surfacing.md` §2.3) ties confidence to match strength against a purpose template; applies an asymmetric-failure default (low-confidence rejection requires HIGH confidence; uncertain cases lean toward inclusion). Sensemaking's ambiguity-collapse confidence (at `cognitive_harness/sense-making/references/sensemaking.md` Phase 3) ties confidence to how the strongest counter-interpretation fares on structural grounds — HIGH if evidence demands the resolution over the counter; LOW if the counter has structural merit.

Both sister-discipline rubrics share a structural pattern: confidence reflects reasoning quality observed through specific signals. Task-Define's rubric inherits this pattern but uses Task-Define's own §4.2 LAYER 1 mode list as the signal source. The pattern transfers; the specific signals are discipline-local.

This was a deliberate choice in the inquiry. An alternative would have imported Surfacing's exact form (match-strength-based) or Sensemaking's exact form (counter-interpretation-based). Both were rejected because Task-Define's friction signature is its own — operation-level boundary proximity to the 6 LAYER 1 modes — and importing sister-form would have forced a poor structural fit.

### 7. Bootstrap-state compatibility + future calibration

The rubric works at Bootstrap state because both discriminator axes are observable per invocation — the LLM applying the rubric at end-of-invocation can count LAYER 1 mode boundaries approached and observe per-operation close calls without needing prior-invocation calibration data.

At Mature Operation (per the runtime spec's §4.6 calibration trajectory; ~30+ invocations), the rubric's structural form persists. Numerical anchors may be added empirically — e.g., what specifically counts as "very near firing" could be operationalized once empirical patterns of boundary proximity are observed. The current rubric's qualitative phrasings ("approached," "very near," "close call") are intentional Bootstrap-state forms; they'll sharpen as evidence accumulates.

### 8. Why no defaults committed for verdict×confidence pairings

A simpler design would have committed defaults — e.g., "RE-RUN always pairs with LOW confidence." This was considered and rejected.

The rejection reason is structural: the rubric defines what HIGH / MED / LOW MEAN; the verdict×confidence pairing is application logic for the LLM stamping the verdict. If an LLM is genuinely confident the RE-RUN is warranted (structural failure clearly observed at the receive step; LAYER 2 mode self-recognized with strong signal), HIGH-confidence-RE-RUN is a valid honest stamp. Precluding it via a forced LOW default would compel dishonest stamping, undermining the rubric's purpose of consistent meaning.

The cross-verdict applicability note describes COMMON patterns (where the natural pairing emerges from the verdict's structural context) without constraining the LLM to those patterns. Common patterns are guidance; rare patterns are allowed.

## Inherited Commitments Re-test

This finding's rubric depends on prior commitments from the runtime spec + the prior inquiries' work. Voluntary re-test summary:

| Source | Commitment | Re-test status | Evidence / Reason |
|---|---|---|---|
| Process-layer finding §9 | "PROCEED / FLAG / RE-RUN self-assessment verdict with HIGH/MED/LOW confidence per surfacing precedent" | RE-TESTED | This refinement operationalizes the "per surfacing precedent" phrase via Task-Define-specific signals (§4.2 modes) — preserves the inherited pattern while applying it to Task-Define's own signal source |
| Runtime spec §4.1 LAYER 1/LAYER 2 framework | "LAYER 1 per-invocation observable; LAYER 2 audit-over-time" | RE-TESTED | Rubric uses ONLY LAYER 1 modes (per-invocation scope); LAYER 2 explicitly out (sensemaking A1 + Frame-exit Completeness verified) |
| Runtime spec §4.2 LAYER 1 modes (6 modes) | The 6 named modes with recognition + corrective | RE-TESTED | Rubric references "any LAYER 1 mode boundary (§4.2)" as signal source; mode list unchanged |
| Runtime spec §4.4 asymmetric-failure principle | Lean-to-keep-together at Itemize; lean-to-fire at MQ extensions | INHERITED-WITHOUT-RE-TEST | Background principle that informs how "boundary approached but didn't fire" should be interpreted; not directly applied in the rubric's own text |
| Mode 6 inquiry's deferral of this rubric | "§4.7's general confidence rubric is itself under-specified — flagged as separate gap" | RE-TESTED | This inquiry closes the deferred gap; mode 6's rejection of per-mode confidence (premature for Bootstrap) is honored by keeping the rubric general-level + reserving per-mode refinement for Mature Operation |
| Surfacing §2.3 relevance-confidence pattern | Match-strength-based confidence with asymmetric-failure default | INHERITED-WITHOUT-RE-TEST (with reason) | Structural pattern (observable-signal-anchored confidence) is inherited; specific form is Task-Define-rooted, not imported |
| Sensemaking ambiguity-collapse confidence | Structural-grounds-based HIGH/LOW | INHERITED-WITHOUT-RE-TEST (with reason) | Same — pattern inherited; form Task-Define-rooted |
| 15-39 §11 self-containment | No outbound pointers in runtime spec | RE-TESTED | Rubric text references only intra-spec sections (§4.2, §4.4); no inquiry-folder mentions |
| 15-39 §9 lightweight criteria | 6 criteria; criterion (iv) "no sub-machinery beyond a paragraph" | RE-TESTED | §4.7 is not an operation paragraph (criterion iv applies to §2.1); rubric sub-block ~8-12 lines fits §4.7's existing multi-paragraph structure |

7 of 9 commitments RE-TESTED via textual trace; 2 INHERITED-WITHOUT-RE-TEST with explicit reasons (background principles; structural patterns inherited at pattern-level not form-level).

## Next Actions

### MUST

- **What:** Apply the §4.7 sub-block amendment to `cognitive_harness/task-define/references/task-define.md`. Insert the "Confidence rubric:" sub-block (3 level definitions + cross-verdict applicability note; exact text in finding section 2 above) immediately after the verdict-shape commitment paragraph (the paragraph introducing PROCEED/FLAG/RE-RUN with HIGH/MED/LOW + Conditions) and before the FLAG conditions list. No other section changes.
  - **Who:** spec editor.
  - **Gate:** condition-bound — apply as a direct spec edit.
  - **Why:** closes refinement #6's gap. Without the rubric, HIGH/MED/LOW stamps have no consistent meaning across invocations; downstream consumers can't interpret them; mode 6 detection's contribution to FLAG confidence is unmoored. Applying the rubric gives the existing confidence attribute operational meaning.

### COULD

- **What:** After Task-Define has accumulated ~10-20 invocations (Early Operation calibration), observe rubric application — does the LLM running discipline produce consistent confidence stamps for similar inputs? Are common combinations (HIGH-PROCEED / MED-FLAG / LOW-RE-RUN) the dominant pattern? Do less-common-but-valid combinations (LOW-PROCEED / HIGH-FLAG) appear in honest cases?
  - **Who:** spec maintainer; observational across runner invocations.
  - **Gate:** observable — after ~10-20 invocations.
  - **Why:** validates the rubric empirically. If the LLM struggles to apply "close call" consistently or if specific verdict×confidence pairings turn out unusable, the rubric can be sharpened at Mature Operation.

- **What:** Propagate the rubric's structural pattern (observable-signal-anchored confidence + cross-verdict applicability note + asymmetric-failure-aligned defaults if needed) to sister disciplines that have similarly under-specified confidence stamps. Surfacing's per-item relevance-confidence is already operationalized; Sensemaking's ambiguity-collapse HIGH/LOW is operationalized; other disciplines may benefit from explicit rubrics following this same structural form.
  - **Who:** future inquiry author.
  - **Gate:** condition-bound — when a sister discipline's confidence is identified as under-specified.
  - **Why:** the structural pattern (objective discriminator + supplementary subjective axis + cross-verdict note) is project-rooted and reusable.

### DEFERRED

- **What:** At Mature Operation (~30+ invocations across diverse task types), revisit the rubric for numerical operationalization — e.g., what specifically counts as "very near firing" (some quantifiable proximity to the LAYER 1 mode boundary), what counts as "multiple operations had close calls" (numerical threshold). Currently qualitative phrasings; Bootstrap-acceptable; sharpen later if patterns warrant.
  - **Gate:** observable — ~30+ invocations with stable per-task-type firing patterns.
  - **Why (if revived):** Mature-state empirical refinement of the rubric's qualitative anchors; preserves structural form.

- **What:** If multiple runners disagree about the same verdict-with-confidence stamp's interpretation (e.g., one runner treats LOW-PROCEED as "re-invoke anyway"; another treats it as "proceed with caveat"), escalate to a cross-runner-coordination inquiry that adjudicates the interpretation conventions.
  - **Gate:** observable — 2+ runners producing different downstream actions for the same verdict-with-confidence stamp.
  - **Why (if revived):** prevents cross-runner divergence; analogous to the mode 6 inquiry's runner-side extraction-protocol deferral.

## Reasoning

### Why LAYER 1 mode boundary proximity as the primary discriminator

Several discriminator candidates were considered: LAYER 1 mode boundary proximity (D1); per-operation judgment-call density (D2); per-operation output coherence (D3); combined indicators (D4); count-based explicit on LAYER 1 boundaries (D5). The choice of D1 as primary rests on three structural grounds:

(a) **Observable per invocation.** The 6 LAYER 1 modes are explicit in §4.2; the LLM running the discipline can observe whether any boundary was approached during the invocation without external reference. This makes the rubric Bootstrap-compatible — no calibration data needed.

(b) **Project-rooted via §4.2.** The mode list is already part of the spec; the rubric uses an existing structural feature as the signal source rather than introducing new vocabulary. This preserves spec coherence.

(c) **Ties confidence to a structural fact, not LLM feeling.** A subjective rubric ("the run felt clean") drifts across invocations; the same input may receive different stamps from different LLMs. Tying confidence to LAYER 1 boundary proximity makes the rubric consistent across LLMs because the boundaries themselves are externally observable (the mode list is fixed).

D2 (judgment-call density) was rejected because "judgment call" is itself a subjective category — counts vary with the LLM's introspective granularity. D3 (per-operation output coherence) was rejected as standalone for the same reason. D4 (combined indicators) was rejected as over-specifying. D5 (count-based explicit) was rejected because numerical thresholds at Bootstrap state are premature; the qualitative count phrasings ("one," "multiple") work without committing to numerical anchors.

### Why per-operation coherence as the secondary discriminator

The user's original wording paired the LAYER 1 boundary observation with "every operation's output is internally coherent" — an AND clause. This is a deliberate combination of objective (boundary proximity) and subjective (per-operation coherence) axes.

Sharpening to D1-only would have lost this combination. The user's intent is the rubric captures LLM-perceived friction at two granularities — structural (mode boundaries) AND per-operation (coherence within an operation that doesn't propagate to a mode boundary).

Most per-operation judgment-calls upstream of mode boundaries probably DO propagate eventually — a tuple-identification choice within Itemize that's borderline tends to lead to a borderline split decision (which approaches mode 1 or 2). So D3's standalone signal often won't fire independently of D1. But occasionally a per-operation close call doesn't propagate (an Itemize tuple-test choice that's borderline but the chosen tuple comfortably yields a clear single-task decision; a Rephrase synonym choice that's borderline but the rest of the rephrasing is robust). In these cases, the LLM has genuine internal friction that D3 captures.

Preserving both axes honors the user's intent + captures the full friction surface.

### Why the cross-verdict applicability note was added (beyond user's request)

The user's original input proposed the 3-level rubric definitions. The cross-verdict applicability note was added beyond the literal request. The reasoning:

A 3-level rubric without cross-verdict guidance leaves an immediate ambiguity for downstream consumers: "can RE-RUN be HIGH confidence?" or "what does LOW-PROCEED mean?" The user's negative-spec explicitly says the rubric's purpose is consistent meaning across invocations; ambiguity about verdict×confidence pairings reintroduces inconsistency by leaving each LLM to invent conventions.

The cross-verdict note closes this gap with three deliberate moves: (i) explicit statement that all 9 combinations are valid and confidence/verdict are independently determined; (ii) named common combinations with brief reasoning for each (so downstream consumers have a starting interpretation); (iii) named less-common-but-valid combinations (so the rubric explicitly allows honest unusual reports).

The note is ~4 lines; the cost-benefit favors inclusion. P2 Inversion (DO-NOTHING — skip the note) was tested and rejected on the implicit-default-locking risk: without explicit allowance of less-common combinations, future readers might assume RE-RUN→LOW is required (a default that would force dishonest stamping for genuinely-confident RE-RUN cases).

### Why no defaults committed for verdict×confidence pairings

Committing a default (e.g., RE-RUN→LOW always) was considered and rejected. The rejection reason: defaults compel the LLM to stamp a particular confidence regardless of actual reasoning quality. If an LLM is genuinely confident the structural failure occurred (LAYER 2 mode clearly self-recognized; receive step clearly failed), a forced LOW would be dishonest reporting. The rubric's purpose is consistent honest meaning; defaults undermine honesty.

The note's structure (common + less-common-valid + "independently determined") provides guidance without coercion. Downstream consumers can use the common combinations as starting interpretations + know that rare combinations are allowed when the LLM honestly reports them.

### Why import sister-discipline pattern but not form

Surfacing's relevance-confidence is match-strength-based against a purpose template. Sensemaking's ambiguity-collapse confidence is structural-grounds-based against a strongest counter-interpretation. Both ground confidence in observable reasoning quality.

Task-Define's friction surface is different — operation-level boundary proximity to the 6 LAYER 1 modes. Importing Surfacing's match-strength form would require reframing Task-Define's operations as matching against templates (they don't). Importing Sensemaking's counter-interpretation form would require Task-Define operations to produce counter-interpretations (they don't, structurally).

The structural PATTERN (observable-signal-anchored confidence) is what's reusable; the specific FORM is discipline-local. This refinement preserves the pattern by tying confidence to Task-Define's own observable signals (§4.2 modes + per-operation coherence) — a third instance of the project-rooted pattern, not a copy of either prior.

## Open Questions

### Monitoring

- **Observable after ~10-20 invocations.** Does the LLM running Task-Define produce consistent confidence stamps for similar inputs? Variability across same-input invocations indicates the rubric's anchors need sharpening.

- **Observable across multiple LLMs.** If different LLMs apply the rubric and produce different confidence stamps for the same input, the subjective axis ("close call") may need tightening — possibly via worked examples (parallel to the rule (b) inquiry's pattern) or via numerical anchors at Mature Operation.

- **Observable in downstream consumer behavior.** Do runners and users find the verdict-with-confidence stamps useful? If downstream consumers ignore confidence stamps (always proceed regardless), the rubric may not be paying for its spec cost.

### Refinement Triggers

- **If the LLM's HIGH-confidence stamp rate drops below 50% across the first 20 invocations**, the rubric may be too strict — most invocations may genuinely be clean but the rubric's wording overcounts close calls. Trigger: observable < 50% HIGH-rate.

- **If LOW-PROCEED stamps appear in > 10% of invocations**, the LLM may be perceiving more friction than the LAYER 1 boundary structure captures — investigate whether additional LAYER 1 modes are warranted (per the §4.2 mode list refinement-trigger noted in the runtime spec). Trigger: observable > 10% LOW-PROCEED rate.

- **If downstream consumers (runners, users) report that the cross-verdict note's common-combinations guidance is treated as defaults (despite explicit "independently determined" wording)**, the note's framing may need tightening. Trigger: 2+ observed cases of common-combination-as-default behavior.

### Research Frontiers

- **Whether the structural pattern (observable-signal-anchored confidence + cross-verdict applicability note) generalizes to sister disciplines with under-specified confidence stamps.** Pattern propagation depends on each discipline having a stable per-invocation signal source analogous to Task-Define's §4.2 mode list. Investigation: do other disciplines (Surfacing, Sensemaking, Decompose, etc.) have such signals? Out of scope here; flagged as future work.

- **Whether numerical anchoring at Mature Operation should replace qualitative phrasings ("approached," "very near firing").** Trade-off: numerical anchors give per-LLM consistency but lose flexibility for cases that don't fit the threshold. Investigation depends on Mature-state empirical patterns.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
6. Self-assessment confidence rubric is missing.
  §4.7 says "confidence reflects the LLM's judgment about the strength of the verdict" — but there's no HIGH / MED / LOW
  rubric. Compare to surfacing's per-item relevance-confidence, where the spec gives concrete signals
  (high-confidence-rejection threshold; uncertainty-includes filtering). Task-Define's confidence is unmoored. The user will
  get LOW / MED / HIGH stamps with no consistent meaning across invocations. Refinement: 1-2 sentences per confidence level
  naming what produces it (e.g., HIGH = "every operation's output is internally coherent and no LAYER 1 mode boundary was
  approached; the verdict reflects a clean run"; MED = "one operation's output had observable judgment-call boundaries but no
  rule fired"; LOW = "multiple judgment-calls at boundaries OR proximity to a LAYER 1 mode without firing").

lets dive deep into this one
```

</details>
