# Branch: Compare MVL+ vs MVL2+ on the surfacing-metadata question

## Question

Five meta-aspects:

- **Subject** — two prior inquiry findings on the same user question (whether/how the surfacing discipline should use file last-edit-datetime metadata): one produced by `/MVL+` (at `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md`) and one produced by `/MVL2+` (at `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md`).
- **Action** — compare and adjudicate (decide which finding did a better job, with reasoning).
- **Level** — finding-level (compare the two completed findings as artifacts) AND loop-level (compare the runners that produced them — `/MVL+` vs `/MVL2+`).
- **Observation targets** — multiple, preserved separately because the user's two-clause structure ("compare them and tell me which one did a better job for given query, and why") carries distinct semantic load:
  - a) **Which finding did a better job for the given query** — a verdict pointing at one of the two findings (or "tie" / "partial wins" — admissible verdict shapes must be considered).
  - b) **WHY** — the reasoning behind the verdict, with explicit criteria, dimensions, and per-dimension scoring or comparison. A bare verdict without reasoning fails the goal.
  - c) Implicit but load-bearing: **whether the runner difference (MVL+ with /explore upstream vs MVL2+ with /surfacing upstream) explains observed quality differences** — because the user's framing ("one with MVL+ and another is ran with MVL2+") names the runner distinction as the operative variable. The comparison must explicitly examine whether the runner's upstream discipline affected output quality OR whether the difference is attributable to other variables (LLM run-to-run variance, time-of-day, etc.).
- **Deliverable shape** — comparative evaluation: extracted dimensions, per-dimension comparison, verdict (with confidence), reasoning that links observed differences to causal hypotheses (runner-effect vs other variables).

Question stated:

> Comparing the two findings at `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md` (produced by `/MVL2+`) and `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md` (produced by `/MVL+`) on the same user query about adding mtime-awareness to the surfacing discipline — which finding did a better job, and why, with explicit reasoning that distinguishes runner-attributable differences from other-variable differences?

## Goal

- **Criterion** — a verdict that (i) names which finding did better OR explicitly declares a tie/partial-win pattern; (ii) provides a multi-dimensional comparison rather than a single-axis judgment; (iii) reasons explicitly about whether the runner choice (MVL+ vs MVL2+) caused the observed difference, or whether other variables are responsible; (iv) doesn't hide behind hedges — confidence is named.
- **Use case** — the user is calibrating which runner (MVL+ vs MVL2+) to prefer for spec-edit-type design questions; the comparison feeds that calibration decision.
- **Desired outcome** — a verdict the user can act on (either "use MVL2+ for this kind of question going forward" or "the runner doesn't matter much for this kind of question; pick on speed/cost grounds" or some other actionable verdict).
- **What would fail** (negative spec):
  - a comparison that lists differences but doesn't reach a verdict;
  - a verdict without reasoning;
  - a verdict that attributes the difference to "MVL2+ is better" without testing whether the runner was actually the operative variable (would the same difference appear from two MVL2+ runs of the same query? from two MVL+ runs?);
  - a comparison that ignores the user's explicit framing of the runner as the operative variable;
  - reading either finding only at the surface (Summary section) without consulting Reasoning, Open Questions, or Source Input for transcription fidelity;
  - assuming this inquiry should produce a NEW design for surfacing — the inquiry's job is to compare the two existing designs, not to produce a third.

## Source Input

```text
devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal                                                    
  and                                                                                                                      
  devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design                                             
  one with MVL+ and another is ran with MVL2+                                                                              
                                                                                                                           
  i want you to compare them and tell me which one did a btter job for given query, and why?
```

## Scope Check

Question covers goal.

The question, if answered with a verdict + multi-dimensional comparison + runner-attribution analysis + named confidence, satisfies all four goal criteria.

Specific-vs-pattern check: the user named two specific findings to compare. The comparison stays scoped to those two specific findings (and the runners that produced them). The inquiry does NOT generalize to "MVL+ vs MVL2+ across all question types" — that would be a different, broader inquiry. The user's framing is observation about TWO specific runs.

## Synthesis Trigger

This inquiry consumes the commitments of TWO prior inquiry outputs and produces a comparative verdict. The Synthesis Trigger fires.

Priors being synthesized:

- `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md` — produced by `/MVL2+`. Commits: a 7-surface multi-piece edit to `cognitive_harness/surfacing/references/surfacing.md`; field name `recency annotation`; value shape `{source, value}`; principle `metadata-as-signal-not-verdict`; two LAYER 1 failure modes `Recency-Equates-Idleness` and `Recency-Bias-Filter` anchored to §4.4; numeric bands DEFERRED. The finding includes a multi-layered defense-in-depth rationale and KILLs 7 alternatives with structural grounds.

- `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md` — produced by `/MVL+`. Commits: to be read during this inquiry (the file exists at the path; its specific commitments will be examined during Surfacing). Not summarized here to avoid pre-committing to a frame before reading.

CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section. Because this inquiry is a comparison rather than a synthesis-that-builds-on (it ADJUDICATES the priors rather than INHERITING them), the re-test will assess whether each finding's commitments are STRUCTURALLY SOUND (the comparison's own re-evaluation of them) rather than transferring them forward. The discipline work (especially Sensemaking and Critique) will conduct the re-evaluation, not just record the inheritance.
