# Branch: Task-Define MQ2 Answer Shape — Thoroughness Check on Mode 6 Inquiry's Coverage

## Question

- **Subject** — the **dispatch substrate's necessary-information-content commitment** at §2.4 of the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`. The current §2.4 wording — *"MQ2's answer MUST contain enough information for a runner to make the external-context-need determination"* — is qualitative (the meaning-layer commitment carried over from the process-layer finding) and operationally insufficient without a concrete shape commitment. **The user has expressed concern that this gap leaves three actors under-served:** (a) Task-Define authoring MQ2's answer doesn't know what "sufficient" looks like; (b) a runner attempting extraction doesn't know what to look for; (c) LAYER 1 mode 6's detection can't fire reliably against an abstract shape.
- **Action** — verify (THOROUGHNESS CHECK) whether the prior mode 6 deep-dive inquiry's §2.4 amendment fully covers the refinement #4 scope, OR whether a residual gap remains that this inquiry should address.
- **Level** — discipline-internal at the runtime-spec structural layer. The specific section is §2.4 (dispatch substrate). Adjacent sections: §2.3 (Meta-question canonical set including MQ2 verbatim template); §4.2 mode 6 (the detector that depends on the shape).
- **Observation targets** — list each as a separate item:
  1. **Coverage assessment of mode 6 inquiry's §2.4 amendment.** Does the amendment text already committed at `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` (specifically the two-part content-presence rule: verdict ∈ {yes, no, uncertain} + kind specifier when verdict = yes) fully satisfy refinement #4's three concerns (authoring sufficiency, runner extraction target, mode 6 detection target)?
  2. **Residual gap identification.** If coverage is partial, what specific aspect of refinement #4 is uncovered by the mode 6 amendment?
  3. **Possible supplementary refinement.** If a residual gap exists, what additional content (worked examples of qualifying / non-qualifying MQ2 answers; tighter wording; cross-reference improvements) would close it?
  4. **Redundancy verification.** If no residual gap exists, document the verification — including which specific sentences of the mode 6 amendment address each of refinement #4's three concerns — so the user has an audit trail.
  5. **Cross-inquiry coherence.** Does the refinement #4 scope have any concern the mode 6 amendment ENABLES but doesn't fully close (e.g., the LLM running the discipline could apply the §2.4 shape commitment but might still benefit from a worked example in §2.3 of an MQ2 answer that satisfies the shape)?
  6. **Lightweight + self-containment compliance.** If a supplementary refinement is proposed, does it pass the spec's six lightweight criteria + the no-outbound-pointers rule?
- **Deliverable shape** — verification verdict + (if applicable) supplementary refinement spec content. Two possible outcomes: (a) COMPLETE COVERAGE — mode 6's amendment fully addresses refinement #4; no new amendment needed; just apply mode 6's MUST. (b) PARTIAL COVERAGE — mode 6's amendment addresses most but not all; supplementary refinement text needed; specify it.

**Question (single statement):** Does the prior mode 6 deep-dive inquiry's §2.4 amendment (the two-part content-presence rule on MQ2's answer: verdict ∈ {yes, no, uncertain} + kind specifier when verdict = yes; content not syntax; per-item; uncertain as valid runner-actionable verdict per asymmetric-failure principle) fully address the three concerns refinement #4 named (authoring sufficiency for Task-Define; runner extraction target; LAYER 1 mode 6 detection target) — or does a residual gap remain that this inquiry must close with supplementary spec content?

## Goal

- **Criterion** — three qualities:
  - **Verification rigor.** The coverage assessment is concrete: each of refinement #4's three concerns is traced to specific sentences of the mode 6 §2.4 amendment with explicit pass/partial/fail verdict.
  - **Residual-gap precision.** If a residual gap exists, it is named specifically (not just "incomplete coverage") with concrete description of what's missing.
  - **Honest assessment.** If mode 6's amendment fully covers refinement #4, the finding says so explicitly and avoids inventing a supplementary refinement just to produce content.
- **Use case** — settle whether the spec needs ONE amendment (mode 6's pending MUST) or TWO amendments (mode 6's pending MUST + a new supplementary refinement). The user has been queueing critique items; this verification removes ambiguity about whether refinement #4 needs its own amendment or shares mode 6's.
- **Desired outcome** — honest verdict the user can act on. If COMPLETE COVERAGE: skip new amendments; apply mode 6's MUST to close both #2 and #4 simultaneously. If PARTIAL COVERAGE: produce supplementary refinement text the user can apply alongside mode 6's MUST.
- **What would fail** — a deliverable that:
  - silently re-produces mode 6's amendment under a new name (redundancy without acknowledgment);
  - invents a supplementary refinement that mode 6 already addresses (false residual gap);
  - dismisses refinement #4 as "already done" without verification (under-checking);
  - over-states the residual gap to justify new content (motivated reasoning).

## Source Input

```text
The dispatch substrate's "necessary information content" is abstract.
  §2.4 says MQ2's answer "MUST contain enough information for a runner to make the external-context-need determination." This
  is structurally correct (it's the meaning-layer commitment) but operationally insufficient. Without an example of what
  satisfies vs violates the constraint:
  - Task-Define authoring MQ2's answer doesn't know what "sufficient" looks like.
  - A runner attempting extraction doesn't know what to look for.
  - LAYER 1 mode 6's detection can't fire reliably.
  The §2.3 MQ2 template ("Is this task self-contained, or does it require external context to make sense and be done right? If
  external, what kind?") implies the answer should carry yes/no + kind, but this is conjecture from the template, not a
  committed contract. Refinement: an explicit MQ2 answer shape commitment in §2.4 (or §2.3) — e.g., "MQ2's answer carries (a) a
  self-contained vs requires-external-context binary judgment, and (b) when requires-external-context, a one-sentence
  description of what kind of external context." now lets dive deep into this one
```

## Scope Check

Question covers goal. The six observation targets map to the three goal criteria: verification rigor covered by targets 1 + 4 + 5; residual-gap precision covered by targets 2 + 3; honest assessment is the inquiry's framing throughout. The deliverable shape (binary verdict — COMPLETE vs PARTIAL — with supplementary refinement if applicable) matches the use case (settle whether spec needs one or two amendments).

Specific-vs-pattern check: refinement #4 is one specific gap. This inquiry's primary scope is the verification verdict, not the broader pattern (whether other critique items also overlap with mode 6's coverage — flagged as future work if relevant).

## Layer Commitment

**Primary layer: Structural.** The question targets whether specific spec content (the mode 6 §2.4 amendment) covers a specific concern (refinement #4). Adjudication operates at the spec artifact's shape (sections, content, coverage).

**Other layers explicitly out of scope:**
- **Meaning** — the dispatch substrate's identity (MQ-answers-as-signal; runner-extracts; perception/action split) is settled at the meaning-layer finding §5 and reinforced at the process-layer finding §5. Not re-litigated.
- **Process** — the timing and locus of the detection / extraction (Stage 2 firing of Meta-question; end-of-invocation self-check for mode 6) are settled in the spec. Not re-litigated.

## Synthesis Trigger

This inquiry consumes the mode 6 inquiry's finding as a prior output and verifies its coverage against refinement #4's scope. Technically this is N=1 prior (only the mode 6 finding is being verified); the Synthesis Trigger threshold is N≥2. Trigger does NOT fire formally.

However, the inquiry's structural form is verification-against-prior, which is synthesis-adjacent. The finding will voluntarily include a brief `## Inherited Commitments Re-test` section to document which mode 6 commitments are being verified against refinement #4's concerns, per the spirit of the rule (intentional friction against silent inheritance).
