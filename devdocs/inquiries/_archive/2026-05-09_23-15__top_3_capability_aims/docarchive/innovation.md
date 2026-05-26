# Innovation: Top-3 Capability Aims (10x Multipliers)

## User Input

devdocs/inquiries/2026-05-09_23-15__top_3_capability_aims/_branch.md

Focused per-piece proposals (sensemaking + decomposition did substantial work upstream; this innovation generates concrete first-build specifications).

---

## Q1.1 — R10 Concrete First-Build (Empirical Benchmark)

### Q1.1-A — SMALL benchmark (~1 week effort)

- **Task set:** GPQA-Diamond first 50 questions (or random 50) — multi-domain reasoning; deliberation-heavy; widely-published baseline scores.
- **Model:** Claude Sonnet 4.5 (or whatever the user runs MVL+ on; match exactly).
- **Baselines:**
  - *Direct prompting:* USE PUBLISHED (Anthropic model card; HuggingFace leaderboard) — no local run.
  - *Chain-of-thought:* USE PUBLISHED if exact-config-match available; else 1 sanity-check local run on 10 questions to verify match.
  - *Self-Refine:* LOCAL RUN on the 50 questions (~1 day).
- **Treatment:** MVL+ on the 50 questions (~2-3 days at full pipeline depth).
- **Scoring:** GPQA's exact-match (multiple-choice answer) + per-question pass/fail logging.
- **Per-question log structure:** `{question_id, condition, model_answer, correct_answer, pass_fail, tokens, time_seconds}`. Save as JSONL.
- **Cost estimate:** ~3-5 days dev + ~$50-200 in API costs depending on MVL+ pipeline length per question.
- *Phase-fit:* `desc-protocol` (new tooling under `tools/benchmark/`).
- *Anchor:* GROUNDED via prior conversation about benchmarks.
- *Axis:* size (small).

### Q1.1-B — MEDIUM benchmark (~2 weeks effort)

- **Task set:** GPQA-Diamond full ~198 questions + BBH-Hard subset of 100 questions = ~300 total (covers reasoning breadth).
- **Model:** Same as Q1.1-A.
- **Baselines:**
  - Direct + CoT: PUBLISHED.
  - Self-Refine + ToT: LOCAL RUN on the same 300 questions.
- **Treatment:** MVL+ on the 300 questions.
- **Scoring:** GPQA + BBH standard scoring; per-question log.
- **Statistical analysis:** McNemar's paired test for MVL+ vs each baseline; category breakdown (physics/chem/bio for GPQA; per-task-type for BBH).
- **Cost estimate:** ~10-14 days dev + ~$300-1000 in API costs.
- *Phase-fit:* `desc-protocol`.
- *Anchor:* GROUNDED.
- *Axis:* size (medium).

### Q1.1-C [VARIANT] — CUSTOM-CORPUS benchmark (~3-5 days effort)

- **Task set:** ~30 questions DRAWN FROM the user's actual recent inquiry corpus (the meta-design questions that the project has been running). Multi-judge LLM evaluation since these are open-ended.
- **Baselines:** Direct prompting + CoT only (Self-Refine etc. don't fit open-ended meta-design well).
- **Treatment:** MVL+.
- **Scoring:** 3-judge rubric (Claude Opus + GPT-4o + Gemini Pro) on 1-5 scale per question; check inter-rater agreement.
- **Why this variant:** the project's actual use-case is meta-design; benchmark fidelity to actual use is higher than GPQA. BUT: lacks comparability to published numbers since the corpus is custom.
- **Cost estimate:** ~3-5 days dev + ~$100-300 API.
- *Anchor:* HYPOTHESIS (untested on this corpus).
- *Axis:* size (small) + fidelity (high to actual use).

### Q1.1-INV — DON'T BENCHMARK; ship MVL+ refinements instead

- Defer benchmarking; trust the family-of-effects argument from structured-reasoning literature.
- *Risk:* WON'T-MATTER risk persists; the project's commitment stays on faith rather than evidence.
- *Recommendation:* KILLED by sensemaking's analysis (R10 is #1 because the gap is real).

---

## Q1.2 — R3+R4 Concrete First-Build (Sequential Meta-Loop v1)

### Q1.2-A — Minimal sequential runner (no merging, no multi-head)

Per `meta_loop.md` §6:

```
seed + context
→ create/update _meta_state.md
→ run /MVL+ (probe 1)
→ run /navigation on probe 1's finding
→ HUMAN selects one next move from the navigation map
→ run /MVL+ (probe 2 with selected seed)
→ update _meta_state.md
→ STOP or CONTINUE (human decision; no auto-stop yet)
```

- **`_meta_state.md` shape:**
  ```yaml
  meta_loop_id: <timestamp_id>
  seed: <initial seed description + path-to-seed-artifact>
  probes:
    - probe_id: 1
      mvl_plus_inquiry_path: devdocs/inquiries/<id>/
      navigation_output_path: devdocs/inquiries/<id>/navigation.md
      selected_next_move: <chosen-from-nav-map>
      selection_reasoning: <one-paragraph>
    - probe_id: 2
      ...
  status: ACTIVE | TERMINATED
  termination_reason: <coverage / convergence / cost / human-call>
  ```
- **Navigation handoff:** runner invokes `/navigation` on the just-completed inquiry's `finding.md`; saves output as `navigation.md` in the inquiry folder; presents enumerated directions to human.
- **Human-select-next mechanism:** simple prompt — "Select next direction (1-N): "; the selected direction becomes the seed for the next /MVL+ probe.
- **Stop criterion (v1):** human-call only. No automated convergence/cost/coverage yet.
- **Evidence to log per probe:** which navigation type was selected; which prior finding's frontier-questions surfaced; rough cost (tokens) per probe.
- **Cost:** ~2-3 weeks of runner-spec work + integration testing.
- *Phase-fit:* `desc-protocol` (new runner: `/meta-mvl` or similar).
- *Anchor:* GROUNDED via meta_loop.md.
- *Axis:* automation (low; human in selection loop).

### Q1.2-B — Selector-prototype variant

Same as Q1.2-A, plus a **simple automated selector** (not a full value function):
- For each navigation item, score by: `priority * (1 / (1 + revisit_count))`. Most novel-AND-high-priority wins.
- Human can override.
- **Why:** generates calibration data for future automated selector design (per meta_loop.md DEFERRED items "Automated selector").
- **Cost:** add ~3-5 days to Q1.2-A.
- *Anchor:* HYPOTHESIS (selector formula is sketch).
- *Axis:* automation (medium; human override remains).

### Q1.2-INV — Skip; just keep using single MVL+ runs sequentially with manual chaining

- The user already manually chains inquiries (the recent inquiry chain is precisely this pattern).
- *Risk:* doesn't accumulate meta-state; doesn't run navigation systematically; cross-inquiry context lives in user's head.
- *Recommendation:* legitimate baseline if cost-pressure dominates.

---

## Q1.3 — R12 Concrete First-Build (Persistent Memory + Retrieval)

### Q1.3-A — sqlite-vec-based simple retrieval

- **Vector DB:** `sqlite-vec` (lightweight; no server; markdown-friendly).
- **Embedding model:** OpenAI's `text-embedding-3-small` (cheap; high quality) OR Voyage AI's `voyage-3-lite`.
- **What gets indexed:**
  - Each `finding.md` chunked by section (Question / Finding Summary / Finding / Reasoning).
  - Plus the `_branch.md` Question section.
  - Each chunk: `(inquiry_id, section_name, chunk_text, embedding)`.
- **Retrieval rule:** at start of new inquiry, embed the question; semantic-similarity search returns top-5 most-similar prior inquiries; surface as "Related prior inquiries" in `_branch.md`.
- **Integration:** add a `tools/recall.py` script that takes a question and returns the top-K relevant prior inquiry IDs + section summaries. The user (or `/MVL+` runner) can invoke it before starting new inquiries.
- **Cost:** ~1 week dev (~$5-20 in embedding costs for ~30-inquiry corpus).
- *Phase-fit:* `desc-protocol` (new tooling under `tools/recall/`).
- *Anchor:* GROUNDED via standard vector retrieval.
- *Axis:* automation (low; manual lookup).

### Q1.3-B — Auto-prefix retrieval (integrated into MVL+ runner)

Same DB + indexing as Q1.3-A. Plus:
- `/MVL+` runner automatically calls `tools/recall.py` at inquiry creation and PRE-PENDS top-3 prior inquiries to `_branch.md`'s `## Relationships` section.
- Sensemaking spec gets a refinement note: "Check the auto-prefixed Related prior inquiries; cite where load-bearing."
- **Cost:** ~1 week dev (Q1.3-A) + ~3 days for runner integration + refinement-note edit.
- *Anchor:* HYPOTHESIS (integration shape is novel for this project).
- *Axis:* automation (medium; auto-surface but human-cite).

### Q1.3-C [VARIANT] — Hybrid retrieval (semantic + keyword)

Same as Q1.3-A, but retrieval is hybrid (BM25 + semantic).
- Catches both keyword matches (specific terms like "decompose" / "MVL+") AND semantic matches (conceptual relevance).
- *Cost:* +2-3 days vs Q1.3-A.
- *Anchor:* GROUNDED (hybrid retrieval is well-established).

### Q1.3-INV — Don't build; keep using `improvement_observations.md` + manual recall

- The user reads prior findings manually when needed.
- *Risk:* corpus growth makes manual recall lossy; cumulative learning gets bottlenecked.
- *Recommendation:* legitimate at small corpus; not at 100+ inquiries.

---

## Q2 — Scenario Recommendation

### Q2-S1 — All-parallel scenario

- **Trigger condition:** user has 4+ weeks of building bandwidth + wants to cover all three multiplier axes simultaneously.
- **Cost:** HIGH — building R10 + R12 + R4 in parallel is ~4-6 weeks total.
- **Risk:** context-switching cost; one stream may stall others if dependencies emerge.
- **Recommendation note:** appropriate if user is in a focused build sprint; suboptimal for casual pacing.

### Q2-S2 — R10-first-sequence (RECOMMENDED-DEFAULT)

- **Trigger condition:** user wants evidence-driven prioritization; WON'T-MATTER risk feels load-bearing; willing to wait 2-3 weeks for benchmark signal before committing to R3+R4.
- **Cost:** R10 first (~2 weeks); then R12 in parallel with deciding whether R3+R4 is right based on benchmark; R3+R4 follows.
- **Risk:** benchmark might show MVL+ is marginal vs alternatives → forces redirect; this is honest, not a failure.
- **Recommendation note:** **default recommendation.** Resolves the dominant decision-relevant uncertainty before bigger commitments.

### Q2-S3 — R3+R4-first-architectural

- **Trigger condition:** user is committed to project's end-goal trajectory; values architectural progress over benchmark validation; willing to defer WON'T-MATTER resolution.
- **Cost:** R4 first (~2-3 weeks); R3 follows (multi-month with merging logic).
- **Risk:** if benchmark eventually shows MVL+ is marginal, the architectural investment is partially-stranded (sequential meta-loop is still useful but not validated as multiplier).
- **Recommendation note:** appropriate if user is committing to the strong end-goal explicitly per `desc.md`'s "this bet may fail" framing.

### Q2-S4 [HYBRID] — R10 + R12 in parallel; R3+R4 deferred until R10 result

- **Trigger condition:** user wants both quick win (R12) and credibility resolution (R10) in parallel; defers the bigger architectural commitment until evidence-informed.
- **Cost:** ~2-3 weeks total in parallel.
- **Risk:** R3+R4 still deferred; project's end-goal lever stays unmoved.
- **Recommendation note:** **strong alternative to S2;** lowest-cost path that addresses two of three multiplier axes near-term.

---

## Q3 — Excluded-Items Disclosure

### Q3-A1 — R1+R2 (Baldwin closing) deprioritization, direct phrasing

> "Closing the Baldwin cycle (`/intuit` Phase B/C/D + Retrospective RC + N≥30 calibration data) is the project's signature self-improvement engine and is more important LONG-TERM than any of the top-3 picks. It is excluded from the top-3 because it has multi-year cost + depends on `/intuit` Phase A maturing first. Its proper position is as a follow-on to `/intuit` Phase A (the immediate next buildable step per `desc.md`), not as a parallel top-3 candidate."

### Q3-A2 — R1+R2 corrective phrasing

> "We considered Baldwin cycle closing as a top-3 candidate. It deserves first-class long-term importance as the project's stated self-improvement engine. But picking it as a near-term top-3 would obscure the cost reality (multi-year + multi-prerequisite). Honest framing: highest-importance long-term direction; not next-buildable significant capability."

### Q3-B1 — R11 (tool use) deprioritization, direct phrasing

> "Tool use (web browsing, code execution, file handling) is a categorical capability addition that would let MVL+ tackle new task classes (GAIA-style benchmarks; real-world agent tasks). It is excluded from top-3 because it dilutes MVL+'s identity as a structured-reasoning pipeline rather than multiplying existing capability. If the goal is competing with agent frameworks, tool use is essential; if the goal is sharpening structured-reasoning, it's situational."

### Q3-B2 — R11 corrective phrasing

> "Tool use was considered. It would expand the universe of tasks MVL+ can attempt but would not 10x the structured-reasoning capability that's the project's actual claim. The decision deferred-not-killed: revisit if MVL+ ships and the next constraint is task universe rather than reasoning quality."

### Q3-INV — Don't surface excluded items

- *Risk:* user might think these were overlooked; transparency lost.
- *KILLED:* honesty + audit-trail demand surfacing.

---

## Q4 — Verdict Communication Artifact

### Q4-A — finding.md with sections + table

Standard finding.md with: Question; Finding Summary (bulleted); Finding (subsections per top-3 capability with multiplier-axis label + plausibility + cost + dependency); Recommended Scenario (one of S1-S4); Excluded Items (R1+R2, R11); Reasoning; Open Questions; Source Input.

Plus a top-3 comparison table:

| Rank | Capability | Multiplier Axis | Honest 10x? | Cost | Status |
|---|---|---|---|---|---|
| 1 | R10 Empirical benchmarking | CREDIBILITY | indirect-10x | MEDIUM | MISSING |
| 2 | R3+R4 Sequential→multi-head meta-loop | PARALLELISM | literal-10x conditional | LARGE staged | ON ROADMAP |
| 3 | R12 Persistent cross-inquiry memory | COMPOUNDING | 2-3x→5x | SMALL-MEDIUM | MISSING |

- *Phase-fit:* `desc-protocol` (CONCLUDE default + table).
- *Anchor:* GROUNDED.

### Q4-B — Q4-A + lead paragraph distillation

Q4-A plus a 1-paragraph lead at top of Finding section: "If you're picking one to start: R10 (benchmark) at S2 sequence. If you have parallel bandwidth: S4 hybrid (R10 + R12 in parallel). If committed to architecture-first: R3+R4."

- Conversational; respects user's voice.
- *Anchor:* GROUNDED.

### Q4-INV — No artifact; just verbal answer in conversation

- *Risk:* loses audit trail; CONCLUDE protocol violated.
- *KILLED.*

---

## Cross-Piece Convergence

- Convergence 1 — **All Q1 sub-pieces converge on "actionable in 1-3 weeks"**: R10 (1-2 weeks), R3+R4 (2-3 weeks for R4), R12 (1 week). Each is buildable now.
- Convergence 2 — **Two of three picks are MISSING from roadmap** (R10, R12); active counter-balance against roadmap-favoritism.
- Convergence 3 — **Scenario S2 (R10-first) is favored** by combined criteria (impact-per-effort, evidence-driven, addresses dominant risk).

## Assembly

**Recommended assembly:** Q1.1-A (small benchmark) + Q1.2-A (minimal sequential runner) + Q1.3-A (sqlite-vec retrieval) + Q2-S2 (R10-first-sequence as default) OR Q2-S4 (hybrid) + Q3-A1 + Q3-B1 + Q4-B.

**Emergent property:** the user has concrete first-build specs for all three picks + a recommended scenario + honest excluded-items disclosure + lead-paragraph artifact. Total decision package fits in finding.md.

## Telemetry

- Generators: Combination, Constraint Manipulation (≥1G).
- Framers: Inversion (≥1F).
- Min coverage: PASS (focused per prompt).
- No failure modes.

**Overall: PROCEED to Critique.**
