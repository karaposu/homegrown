# Branch: compare surfacing metadata runs — MVL+ vs MVL2+

## Question

Five meta-aspects:

- **Subject** — two completed inquiries that received the identical verbatim user input (a question about adding file-mtime metadata-awareness to the surfacing discipline) and were run through different cognitive loop variants:
  - **A — 16-00 inquiry:** `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/` (flow-type `extended-surfacing` → ran with `/MVL2+`, which uses Surfacing as the upstream discipline in place of Exploration).
  - **B — 20-35 inquiry:** `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/` (flow-type `extended` → ran with `/MVL+`, which uses Exploration as the upstream discipline).
- **Action** — compare + evaluate (comparative judgment with reasoning).
- **Level** — cross-inquiry (the level of the comparison is the inquiry-output as a whole, not any single discipline within them).
- **Observation targets** — TWO load-bearing items joined by "and" in the user's request ("compare them and tell me which one did a better job ... and why"). Preserved as separate items per the LOOP_DIAGNOSE MC2 verbatim trigger pattern:
  1. **Verdict** — which of the two inquiries did a better job at answering the user's stated query?
  2. **Reasoning** — WHY did that one do a better job, on what dimensions, with what evidence drawn from the artifacts?
- **Deliverable shape** — comparative judgment containing: (a) a declared verdict naming one of the two as "better job" (or a justified "tied" / "different jobs well" verdict if structurally appropriate); (b) explicit dimensions used for the comparison, with each dimension stated before being evaluated; (c) per-dimension comparison showing where each inquiry stood; (d) an overall reasoning section explaining why the verdict follows from the dimensions; (e) honest acknowledgment of confounding factors (the runner difference, the time-of-day difference, possibly different versions of skill specs).

**Question stated:** Given the two completed inquiries (A = 16-00, run via `/MVL2+` with `/surfacing` as upstream; B = 20-35, run via `/MVL+` with `/explore` as upstream) that consumed the identical verbatim user input asking how to add file-mtime metadata-awareness to the surfacing discipline without regression, which of the two did a better job answering the user's question, and why — including the explicit dimensions used for the comparison, per-dimension positioning of each inquiry, and acknowledgment of confounds?

## Goal

- **Criterion** — the comparison must be evidence-driven (citing specific sections of each inquiry's artifacts), dimension-explicit (the dimensions are stated before per-inquiry positioning), honest about confounds (the runner difference is not the same as a quality difference; same-runner-different-run differences would also matter but aren't testable here), and produce a clear actionable verdict — not "they're both fine."
- **Use case** — the user gets feedback on which inquiry's approach is more directly applicable to the actual surfacing-spec edit, AND gains insight into whether MVL2+ (Surfacing-upstream) or MVL+ (Explore-upstream) produced a richer/cleaner output for THIS class of question. The second benefit informs future runner-choice decisions.
- **Desired outcome** — a defensible verdict (one of: "A better," "B better," "tied with reasoning," "different-strengths-different-jobs with reasoning") backed by per-dimension evidence, plus an explicit acknowledgment of what the verdict does NOT tell us (e.g., whether the same comparison would hold for a different user question; whether the runner choice or the LLM-run randomness explains more of the difference).
- **What would fail** (negative spec):
  - A vague "both are good in their own way" answer with no dimensions and no verdict.
  - A verdict declared without naming the comparison dimensions.
  - A verdict that confuses spec-comprehensiveness ("more sections edited = better") with answer-quality ("matches the user's question more precisely = better") without disambiguating.
  - A verdict that ignores the runner-difference confound (treats the comparison as a clean quality comparison when it actually compares two slightly different cognitive operations applied to the same input).
  - A verdict that doesn't cite the specific findings.

## Source Input

```text
devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal
and 
devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design
one with MVL+ and another is ran with MVL2+ 

i want you to compare them and tell me which one did a btter job for given query, and why?
```

## Scope Check

Question covers goal. The question asks for the comparative verdict + the reasoning + acknowledgment of confounds; the goal asks for the same. No gap.

Specific-vs-pattern check: the user names the specific pair of inquiries (16-00 and 20-35) and asks about THIS specific comparison. The broader pattern question ("does MVL2+ always beat MVL+ for surfacing-discipline questions?") is NOT requested; this inquiry stays scoped to the specific pair. The single-comparison verdict cannot generalize to the broader pattern from N=1.

Note on the user's labeling: the user's source input says "one with MVL+ and another is ran with MVL2+" without naming which is which. The actual mapping (verified from the inquiries' `_state.md` flow-type fields) is: **16-00 = MVL2+ (extended-surfacing); 20-35 = MVL+ (extended)**. This labeling matches the user's intent regardless of which order they listed them.

## Synthesis Trigger

This inquiry consolidates the outputs of TWO prior inquiries into a single comparative verdict. The Synthesis Trigger fires.

The priors being synthesized:

- `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md` — the 16-00 inquiry's finding. Commits to: (i) a SEVEN-surface spec edit at §1.3, §1.4, §2.1, §4.2 (two failure modes), §5.4, §5.5, §5.6 of `cognitive_harness/surfacing/references/surfacing.md`; (ii) a per-item field named `recency annotation` with value shape `{source: filesystem | none, value: ISO8601 | null}`; (iii) a load-bearing principle "metadata-as-signal-not-verdict" stated at the §2.1 Step Refinement body and cross-referenced from §1.3 NOT-list + §4.2 failure modes; (iv) two new LAYER 1 failure modes — `Recency-Equates-Idleness` (FM #8) and `Recency-Bias-Filter` (FM #9) — both anchored to surfacing's existing §4.4 asymmetric-failure principle; (v) deferred numeric recency bands with revival trigger; (vi) deferred LAYER 2 (identity-eroding) failure-mode variants with revival trigger; (vii) MUST item that prohibits outbound pointers to `docs/discipline_design_history/for_surfacing.md`.

- `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md` — the 20-35 inquiry's finding. Commits to: (i) a THREE-surface spec edit at §1.3, §2.1, §5.4 of `cognitive_harness/surfacing/references/surfacing.md`; (ii) a per-item annotation named `last-edit-time` as observable-fact label (judgment-adjacent alternatives like `freshness` explicitly rejected); (iii) a named category called "observable-fact metadata annotations" framed inside the §2.1 extension as the future-extension pattern, with `last-edit-time` as the first instance; (iv) an explicit non-filtering reaffirmation at §2.1, cross-referenced with the existing §4.4 asymmetric-failure principle — but NO new failure-mode rows added to §4.2; (v) artifact-case-only scope with possibility-case explicitly N/A; (vi) deferred M2 (per-item freshness-confidence tier) and M3 (per-region edit-time-distribution) with concrete revival triggers; (vii) RESEARCH FRONTIER preserved for downstream-consumer rules with a concrete revival trigger (≥2 MVL2+ inquiries producing populated Traces).

Each of these priors carries commitments that this comparative inquiry will inherit *as the OBJECTS of comparison* rather than as commitments to be applied. CONCLUDE's `## Inherited Commitments Re-test` section will record, for each commitment, whether this inquiry's comparison validated it, contradicted it, or explicitly carried it forward without re-test.

Plan for the discipline work:

- **Exploration** maps the comparison territory — what dimensions exist to compare two inquiry outputs that received the same input; what regions of the comparison space matter for THIS specific question.
- **Sensemaking** stabilizes the meaning of "better job" (the user's load-bearing concept) — what counts as "better" given the user's stated question? Different reasonable readings produce different verdicts; sensemaking must adjudicate which reading is the user's.
- **Decomposition** partitions the comparison into independent dimensions and per-dimension comparisons.
- **Innovation** produces the comparative-verdict candidates (one of "A better" / "B better" / "tied" / "different-strengths-different-jobs") with reasoning, exploring contrarian framings before settling.
- **Critique** adversarially tests each verdict candidate; checks the per-dimension evidence is genuine (not cherry-picked); ensures the confound acknowledgment is real.
