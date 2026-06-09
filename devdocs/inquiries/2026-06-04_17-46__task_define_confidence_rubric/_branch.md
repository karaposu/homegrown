# Branch: Task-Define Self-Assessment Confidence Rubric

## Question

- **Subject** — the **self-assessment confidence attribute** at §4.7 of the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`. §4.7 commits a PROCEED / FLAG / RE-RUN verdict shape with a HIGH / MED / LOW confidence attribute, but provides only a qualitative description (*"confidence reflects the LLM's judgment about the strength of the verdict"*). There is no rubric specifying what produces HIGH vs MED vs LOW. The user will receive confidence stamps across invocations with no consistent meaning — the same answer might be stamped HIGH one run and MED another, with no observable difference in what triggered the change. This was identified in prior critique as a separate gap from refinement #2 (mode 6 detection rule) and refinement #4 (MQ2 shape coverage); both prior inquiries explicitly noted that §4.7's general rubric being under-specified is a separate concern flagged for this inquiry to address.
- **Action** — design (DEVELOP) a concrete confidence rubric — 1-2 sentences per level (HIGH / MED / LOW) naming what produces it, grounded in observable runtime signals (not subjective LLM feeling).
- **Level** — discipline-internal at the runtime-spec structural layer. Specifically §4.7 (self-assessment verdict + confidence + initial conditions). Adjacent sections: §4.1 (LAYER 1 vs LAYER 2 framework), §4.2 (LAYER 1 modes); the rubric will reference these as observable signals.
- **Observation targets** — list each as a separate item:
  1. **HIGH definition.** What concretely produces a HIGH-confidence stamp? (User's proposed: *"every operation's output is internally coherent and no LAYER 1 mode boundary was approached; the verdict reflects a clean run."*) Is this the right specification, or does it need adjustment?
  2. **MED definition.** What concretely produces a MED-confidence stamp? (User's proposed: *"one operation's output had observable judgment-call boundaries but no rule fired."*)
  3. **LOW definition.** What concretely produces a LOW-confidence stamp? (User's proposed: *"multiple judgment-calls at boundaries OR proximity to a LAYER 1 mode without firing."*)
  4. **Cross-level coherence.** Are the three definitions monotonically ordered (HIGH > MED > LOW on the same observable axis), or do they admit different axes (e.g., HIGH = clean; MED = single concern; LOW = compound concern)? The discriminator dimension matters.
  5. **Observable signal grounding.** Are the rubric definitions tied to runtime-observable signals (LAYER 1 mode boundaries; per-operation judgment calls; MQ extension borderline cases; Itemize ambiguity) rather than to subjective LLM feeling?
  6. **Coherence with the LAYER 1/LAYER 2 framework.** Does the rubric distinguish LAYER 1 mode boundary proximity from LAYER 2 mode-identity-eroding signals? (LAYER 2 is detected by behavioral audit over time, not per-invocation; so LAYER 2 proximity likely should not be in the per-invocation confidence rubric.)
  7. **Placement.** Where in §4.7 does the rubric live? As a sub-block after the verdict-shape commitment? As a per-level annotation inside the existing verdict list? As a separate sub-section?
  8. **Coherence with the verdict shapes (PROCEED / FLAG / RE-RUN).** Does the confidence rubric apply uniformly across all three verdicts, or are some confidence levels incompatible with some verdicts (e.g., can a RE-RUN verdict be HIGH confidence)?
  9. **Lightweight + self-containment compliance.** Does the rubric pass the 6 lightweight criteria + the no-outbound-pointers rule?
- **Deliverable shape** — concrete drop-in spec content: rubric text (HIGH / MED / LOW definitions) + placement decision + cross-verdict applicability + compliance verdicts. Ready to amend `cognitive_harness/task-define/references/task-define.md` §4.7.

**Question (single statement):** What is the HIGH / MED / LOW confidence rubric for §4.7's self-assessment verdict — including each level's concrete definition grounded in runtime-observable signals (LAYER 1 mode boundary proximity, per-operation judgment calls, MQ extension borderline cases), the discriminator dimension that orders the three levels, the cross-verdict applicability (whether all three verdicts can carry any confidence), the placement in §4.7, and the refinement's lightweight + self-containment compliance — such that an LLM stamping confidence at end-of-invocation applies consistent meaning across invocations and a downstream consumer reading the verdict knows what HIGH / MED / LOW actually means?

## Goal

- **Criterion** — three qualities:
  - **Concreteness.** Each level's definition is operational — names a specific runtime signal an LLM can observe (e.g., "LAYER 1 mode boundary approached"), not a subjective feeling ("the run felt clean"). Concreteness is what prevents drift across invocations.
  - **Cross-level coherence.** The three definitions sit on the same discriminator axis (or a small set of axes); HIGH > MED > LOW is structurally meaningful, not just a label gradient.
  - **Coherence with existing spec.** The rubric is consistent with §4.7's verdict shape, §4.1's LAYER 1/LAYER 2 framework, §4.2's mode list, and the lightweight + self-containment commitments.
- **Use case** — amend `cognitive_harness/task-define/references/task-define.md` §4.7 with the rubric; LLMs running the discipline have a consistent rubric to apply; downstream consumers (runners, users) have a consistent meaning for HIGH / MED / LOW stamps.
- **Desired outcome** — concrete drop-in spec text the user can either approve or push back on. Verdict-with-confidence becomes a useful runtime signal rather than a stamp with unknown meaning.
- **What would fail** — a deliverable that:
  - states the rubric qualitatively ("HIGH = high confidence; MED = medium; LOW = low") without naming what produces each level;
  - ties definitions to subjective LLM feeling rather than observable signals;
  - uses different discriminator axes for each level without structural justification (e.g., HIGH = clean run; MED = lots of operations fired; LOW = user complained — three different axes);
  - over-procedurizes (e.g., requires the LLM to count judgment-calls explicitly and gate at fixed numerical thresholds);
  - re-introduces a structured-shape commitment that conflicts with mode 6's content-not-syntax decision;
  - re-introduces a per-mode confidence rubric (which mode 6 rejected as premature for Bootstrap state);
  - includes inquiry-folder references in the committed text.

## Source Input

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

## Scope Check

Question covers goal. The nine observation targets map to the three goal criteria: concreteness covered by targets 1+2+3+5; cross-level coherence covered by target 4; coherence with existing spec covered by targets 6+7+8+9. The deliverable shape (drop-in rubric text + placement + applicability + compliance) matches the use case (amend §4.7).

Specific-vs-pattern check: the user's input proposes specific definitions for each level (HIGH/MED/LOW) but the inquiry's scope is the rubric design overall — including whether the user's proposed wording is the best form or needs adjustment. Both readings considered; primary scope is the rubric design as a structural unit. Pattern propagation to OTHER per-discipline confidence rubrics (sister disciplines' approach to confidence) flagged as future work.

## Layer Commitment

**Primary layer: Structural.** The question targets WHAT IS WRITTEN at §4.7 of the runtime spec — rubric text + placement + applicability + compliance verdicts. The artifact's shape (which sections, what they contain, how they reference adjacent sections) is the adjudication target.

**Other layers explicitly out of scope:**
- **Meaning** — the existence of the confidence attribute on the verdict (the fact that PROCEED / FLAG / RE-RUN carries a HIGH / MED / LOW stamp) is settled at the process-layer finding's §9. The MEANING of "confidence" as a concept (LLM judgment about verdict strength) is settled in §4.7's existing wording. Not re-litigated.
- **Process** — the timing of confidence emission (at end-of-invocation alongside the verdict) is settled in the spec's Execute step 4. The when/who of confidence stamping is fixed; only the WHAT (the rubric content) is at issue.

**Layer ordering rationale:** the existence and timing of the confidence attribute are settled; the missing piece is its operational rubric. Pure structural-layer work.

## Synthesis Trigger

Not declared. This inquiry inherits from the runtime spec (current §4.7 text) and the prior critique observations (refinement #6 from the earlier self-critique). It does NOT consolidate 2+ prior inquiry outputs. The mode 6 inquiry's deferral of this rubric is context, not a co-input.
