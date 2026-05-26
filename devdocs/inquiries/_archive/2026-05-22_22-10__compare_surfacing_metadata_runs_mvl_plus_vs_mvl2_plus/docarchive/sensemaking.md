# Sensemaking — compare surfacing metadata runs (MVL+ vs MVL2+)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_22-10__compare_surfacing_metadata_runs_mvl_plus_vs_mvl2_plus/_branch.md` + exploration.md

Central anchor-extraction questions handed by exploration:
1. What does "better job" mean for the user's question? (Three readings.)
2. How should the runner-difference confound enter the verdict?
3. What's the structural difference between A's failure-mode-rows-anchoring and B's reaffirmation-anchoring as anti-regression strategies?

---

## Initial Sense Version (SV1 — Baseline Understanding)

Two inquiries (A=16-00 via `/MVL2+`; B=20-35 via `/MVL+`) consumed the identical user query about adding mtime metadata-awareness to the surfacing discipline. A produced a comprehensive 7-surface spec edit; B produced a parsimonious 3-surface spec edit. The user asks which did a "better job for given query, and why." Initial sense: the verdict depends on what "better job" means; if it means "more comprehensive" A wins; if it means "matches the user's question more directly" B wins. The runner difference (`/MVL2+`'s `/surfacing`-as-upstream vs `/MVL+`'s `/explore`-as-upstream) is a confound that complicates the verdict.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

| # | Anchor |
|---|---|
| C1 | Both inquiries received the IDENTICAL verbatim user input (Source Input verified in both `_branch.md` files). |
| C2 | The user wrote *"compare them and tell me which one did a btter job FOR GIVEN QUERY, and why?"* — the phrase "for given query" is load-bearing. It anchors the verdict to the user's actual stated query, not to abstract quality dimensions. |
| C3 | The runner difference (`/MVL2+` with `/surfacing` upstream vs `/MVL+` with `/explore` upstream) is a structural confound — a different cognitive operation, not a different quality of the same operation. |
| C4 | The user's verbatim query asks *"what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?"* — the phrase "what kind of thing" is singular. The user did NOT request a comprehensive multi-surface package. |
| C5 | The user named TWO explicit failure modes: A (idle-treated-as-refined — the positive signal value of the addition) and B (relevant-but-idle dropped — the "old ≠ idle" guard). Both inquiries must address both. |
| C6 | The user asked about a "section" as an open question (*"maybe surfacing discipline should have some section regarding this?"*), not as a demand. |
| C7 | The verdict is N=1 — a single comparison instance. Cannot generalize to broader claims about `/MVL+` vs `/MVL2+` as runners. |
| C8 | Project memory commitment "Disciplines self-contained" (from prior reflection) — surfacing's runtime spec must not contain outbound pointers to design-history. Relevant to evaluating each inquiry's structural cleanliness. |

### Key Insights

| # | Anchor |
|---|---|
| KI1 | **"For given query" is the verdict's anchor.** It shifts the criterion from abstract quality (output-volume, process-rigor) to user-question-fidelity (does the output match what the user asked for?). |
| KI2 | **The user's singular phrasing ("what kind of thing we can add")** structurally supports the parsimony reading. The user did not write "what comprehensive package of additions" or "what multi-section spec edit." |
| KI3 | **But completeness has support too.** The user said "maybe surfacing should have some section regarding this?" — they were OPEN to multi-section additions. So the parsimony reading is favored but not exclusive. The "for given query" anchor (C2) breaks the tie toward parsimony. |
| KI4 | **Both inquiries address both user-stated failure modes (A and B).** TIE on this primary user-criterion. The remaining question is HOW each addresses them and whether either's mechanism is structurally stronger. |
| KI5 | **The runner-difference confound is real.** `/MVL2+` running `/surfacing` upstream against a surfacing-spec question produces a self-reference dynamic: the upstream operation engages the discipline-as-itself, which may explain why A's output is richer in surfacing-structural-elements (NOT-list, vocabulary, failure-mode catalog, primitive composition). This is NOT a quality difference; it is a different cognitive operation. The confound shapes the explanation, not the verdict. |
| KI6 | **A's 7 KILLs vs B's 0 KILLs** is a process-rigor signal but not a verdict signal. KILLs only matter if the rejected alternatives were genuine candidates that a less-rigorous run would have shipped. A's critique was more adversarial; B's critique converged faster. Neither necessarily indicates better outcome for the user. |
| KI7 | **A's failure-mode-rows-anchoring (FM #8 + FM #9 at §4.2) and B's reaffirmation-anchoring (non-filtering paragraph at §2.1) are TWO DIFFERENT structural philosophies for anti-regression.** A uses the discipline's failure-mode catalog; B uses the canonical-home reaffirmation pattern from `docs/discipline_rule_placement.md`. Both are project-consistent. Neither is automatically stronger. |

### Structural Points

| # | Anchor |
|---|---|
| SP1 | Spec edit surface count: A = 7 (§1.3, §1.4, §2.1, §4.2 ×2, §5.4, §5.5, §5.6); B = 3 (§1.3, §2.1, §5.4). ~2× difference. |
| SP2 | A added vocabulary (§1.4 row), telemetry (§5.6 bullet), and State Summary derivation (§5.5 row); B did not. |
| SP3 | A added two new failure-mode ROWS to §4.2; B added one non-filtering REAFFIRMATION paragraph at §2.1 (no §4.2 additions). |
| SP4 | A's field name `recency annotation` is signal-level (forward-compatible with non-mtime sources); B's `last-edit-time` is observable-fact-level (matches user's "last datetime of edit" phrasing). |
| SP5 | A's possibility-mode handling: first-class `{source: none, value: null}`; B's: field absent or N/A. |
| SP6 | A's Reasoning section documented 7 KILLs with explicit structural grounds; B's documented 7 forced design-choices but 0 KILLs (all candidates survived; 2 REFINEs). |
| SP7 | A declared Layer Commitment as "process" with explicit out-of-scope reasoning for meaning + structural layers; B omitted Layer Commitment (treated the question as ordinary problem-solving). Per the MVL+ template's trigger ("REQUIRED when the question is a from-scratch redefinition, a meta-question on a discipline / protocol / framework artifact, or a fundamental restructure"), the question IS a meta-question on a discipline artifact, so A's declaration is more template-compliant. But the question is not "from-scratch redefinition" or "fundamental restructure" — it's an addition — so B's omission is also defensible. |

### Foundational Principles

| # | Anchor |
|---|---|
| FP1 | "Better job for given query" is a user-question-fidelity criterion. The user's words anchor the verdict. |
| FP2 | A comparative verdict is a RANKING, not an absolute judgment. Either inquiry could be "better" without the other being "bad." |
| FP3 | Confounds must be honestly named, not used as escape hatches. The runner difference is a real confound, but the verdict can still be rendered as long as the confound's contribution is bounded and named. |
| FP4 | Multiple defensible readings of "better" produce multiple defensible verdicts. Sensemaking's job is to commit to ONE primary reading with explicit reasoning for the commitment. |

### Meaning-Nodes

| # | Concept (load-bearing) |
|---|---|
| MN1 | **"For given query"** — the user's verdict-anchoring phrase. |
| MN2 | **"What kind of thing we can add"** — the user's singular phrasing of the original question. |
| MN3 | **"Better job"** — the multi-reading meaning-node sensemaking must adjudicate. |
| MN4 | **Runner-difference confound** — the structural fact that A and B aren't quality-controlled samples; they're different operations on the same input. |

### Meta-Inspection hooks for Phase 1 (H4 + H5)

- **H4 (concept names) fires.** "Better job," "for given query," and "what kind of thing" are all load-bearing concept names; Phase 3 Load-bearing concept test fires on all three.
- **H5 (motivating examples) fires.** The motivating examples are the two specific prior findings. The Specific-vs-pattern check: the user asked about THIS pair (N=1), not the broader pattern of `/MVL+` vs `/MVL2+`. The verdict must be scoped to N=1; Phase 3 must preserve this scoping.

---

### Sense Version 2 (SV2 — Anchor-Informed Understanding)

The question is not "which is better in general?" — it is "which is better FOR GIVEN QUERY?" That qualifier shifts the verdict criterion from abstract quality dimensions (completeness, comprehensiveness) to **user-question-fidelity** (does the inquiry's output match the user's stated need?).

The user's query was singular: "what kind of thing we can add." Both inquiries addressed both user-stated failure modes (A and B). The remaining question is which inquiry's output more directly matches the user's singular framing.

The runner-difference confound is real but does NOT disqualify the verdict — it shapes the explanation. Part of A's deeper engagement with surfacing's structural elements (NOT-list, vocabulary, failure-mode catalog) is attributable to `/MVL2+`'s self-reference dynamic, not to A being a "smarter" inquiry.

---

## Phase 2 — Perspective Checking

### Lateral perspectives

**Technical/Logical.** From a spec-editing-mechanics standpoint:
- A's 7-surface edit produces more touch-points; each is a maintenance surface.
- B's 3-surface edit produces fewer touch-points; the named-category framing in §2.1 is forward-extension-ready without restructuring.
- A more comprehensive; B more parsimonious. Both mechanically valid.

**Human/User.** The user wrote a brief, casual paragraph asking a single question with two guards. From the user's perspective:
- B's 3-surface edit more directly matches "what kind of thing we can add."
- A's 7-surface edit may feel over-elaborated relative to the user's modest question.
- However: A's vocabulary + failure-mode rows + telemetry produce a "feature-complete spec engineering" feel that the user might appreciate (the user's question is open enough to accommodate either).
- **Net:** B aligns more directly with the user's exact phrasing; A delivers more "spec-engineering completeness."

**Strategic/Long-term.** Both approaches respect the discipline's existing patterns. A uses §4.2 (failure-mode catalog) as the home for anti-regression; B uses §2.1 (canonical home per placement convention). Both project-consistent. **TIE** on long-term strategic fit; different conventions emphasized.

**Risk/Failure.** Different risk profiles:
- A's risk: 7-surface edits multiply maintenance drift risk. A future spec edit could update one surface (e.g., §2.1) without updating others (§5.4 schema row, §1.4 vocabulary), leaving inconsistencies.
- B's risk: 3-surface edits with named-category framing concentrated in §2.1 — if §2.1 grows over time (more metadata kinds), the category description could become bloated.
- Neither is obviously worse; different risk surfaces.

**Resource/Feasibility.** Both are spec text; no implementation cost. **TIE.**

**Ethical/Systemic.** N/A — internal design choice.

**Definitional/Internal Consistency.** Both inquiries respect surfacing's existing identity. A adds to NOT-list + vocabulary + failure modes + telemetry within existing patterns; B adds to NOT-list + extends §2.1 + adds schema row within existing patterns. Both pass; different anchoring choices.

### Definitional / Frame-exit Completeness perspective

**Gating predicate:** does the inquiry's commitments include terms inherited from prior findings used across ≥2 distinct values/levels within the inquiry's own committed structures?

YES — the inquiry inherits "MVL+", "MVL2+", "better job," "surfacing," "for given query." These terms are used across multiple distinct propositions (A vs B; primary criterion vs secondary criterion; etc.). Gating fires.

Apply the four meta-categories:

1. **Existence Enumeration.** "What does 'better job' refer to project-wide?"
   - **User-level reading:** which inquiry's output is more useful to the user RIGHT NOW for their actual query.
   - **Per-inquiry critique-verdict reading:** SURVIVE/REFINE/KILL — but each inquiry already ran its own critique; this is internal to each inquiry, not the comparison.
   - **Cross-inquiry outcome-review reading:** has each finding's MUST/COULD been validated by downstream use? — observable only after the spec edits land and inquiries consume them.
   - **Project-level calibration reading:** is `/MVL+` or `/MVL2+` a better runner for this CLASS of question? — requires multi-instance dataset.
   - The inquiry's frame: user-level reading is in scope; project-level calibration reading is OUT of scope (N=1 cannot calibrate runner choice).

2. **Role Assessment.** The user-level reading IS the comparison's evaluation criterion. The project-level reading would require data that doesn't exist (multiple A/B pairs across many question classes). **Re-locate, not exclude:** the project-level calibration question is a future-inquiry frontier; preserve as observation.

3. **Verdict Rigor.** "Out of scope" for project-level reading — strongest counter: future inquiries may want to use THIS comparison as data for runner-calibration. The counter has merit; the verdict's reasoning should be archivable for future calibration use. **No clean-resolution-trap;** the comparison data is preserved as a research-frontier seed.

4. **Residual / Coverage Justification.** Any frame-exit concern not captured? One residual: "better job" could mean "more pedagogically valuable for understanding surfacing's identity" — but this is the user-level reading at a different granularity (the user might learn more from A's deeper engagement). Termination: the user's "for given query" phrase anchors the verdict to user-needs-fulfillment, not to pedagogical value; no new substantive findings.

**Frame-exit Completeness verdict: PASS.** User-level reading committed; project-level reading explicitly out-of-scope but preserved as future-inquiry observation.

### Phase / Calibration-State perspective

Does the verdict depend on calibration the project has?

- The user-level reading does NOT — it depends on reading the user's stated query.
- The project-level reading WOULD require calibration data (multiple `/MVL+`-vs-`/MVL2+` comparisons across many inquiries) that the project does NOT have.
- The verdict is structured at the user-level layer, which is calibration-independent for this single comparison. **PASS.**

### Meta-Inspection hooks for Phase 2 (H1, H2, H3, H7, H8, H9)

**H1 (candidate set) fires.** Verdict candidates: V1=A-better; V2=B-better; V3=TIED; V4=different-strengths-different-jobs; V5=verdict-impossible-due-to-confounds. Convergence-recognition check: are they distinct?
- V3 (TIED) and V4 (different-strengths) overlap but differ — TIED means equal on the same dimensions; V4 means each better on different dimensions.
- V5 is structurally distinct — refusal to render.
- All 5 are meaningfully distinct. No collapse; Phase 3 will adjudicate among them.

**H2 (frame scope).** Inquiry's frame: specific A-vs-B comparison. Out-of-scope: broader runner generalization; LLM run-to-run variance; spec-version drift. Bounded appropriately.

**H3 (question framing).** User's framing ("compare and tell me which one did a better job, and why") pre-biases toward verdict-with-reasoning — matches the inquiry's deliverable shape. No problem.

**H7 (phase/calibration state).** Addressed above. PASS.

**H8 (self-reference).** Using cognitive disciplines to compare cognitive-discipline-runs is borderline self-reference. External grounding:
- The user's verbatim query (extrinsic).
- The prior findings as objective artifacts (read from disk; not generated by this inquiry).
- The runner-difference confound is a structural fact (recorded in `_state.md` flow-type fields), not framework reasoning.
External grounding adequate. **PASS.**

**H9 (user language alignment).** The user wrote casually ("did a btter job," "for given query"). The verdict should be readable in that register — not overly formal. The reasoning should be evidence-rich, but the verdict statement should be plain English.

---

### Sense Version 3 (SV3 — Multi-Perspective Understanding)

After lateral perspectives + Frame-exit Completeness + Phase/Calibration-State + Meta-Inspection:

- The verdict criterion is **user-question-fidelity** (Reading 1 from exploration), grounded by the user's explicit "for given query" phrase.
- The verdict is bounded to N=1; project-level `/MVL+`-vs-`/MVL2+` comparison is out of scope.
- The runner-difference confound is real but does not disqualify the verdict — it shapes the explanation.
- Both inquiries respect surfacing's identity; both address user's failure modes A and B. Divergence is on secondary dimensions (surface count, anti-regression philosophy, future-extension framing).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — What does "better job for given query" mean? (Load-bearing concept test)

**Candidates:** Reading 1 (user-question-fidelity) / Reading 2 (completeness) / Reading 3 (defense-in-depth on anti-regression).

**Strongest counter-interpretation (Reading 2):** "Better job" should mean "produced more output value for the user." More comprehensive = more output value. The user can always ignore parts of A's output they don't need, but they can't add what's missing from B's output without doing more work.

**Why the counter fails (structural grounds):** The phrase "for given query" anchors the verdict to the user's stated query, not to abstract output-volume. The user's query asks "what kind of thing we can add" — singular phrasing requesting an addition, not a comprehensive package. An answer that produces a comprehensive package goes BEYOND the user's question; this can be valuable, but it isn't strictly "better job FOR GIVEN QUERY." More-output ≠ better-fit when the question scopes the addition.

Additionally, the user's query asks "without LIMITING it or regressing it." "Limiting" includes over-committing to fixed structures that close off future options. A's failure-mode rows commit explicit FM names that downstream-anchored Correctives reference; B's category framing commits a named category that future kinds extend. Both have limit-risk and limit-protection on this axis. TIE on limit-axis; the verdict differentiator is the singular-phrasing axis.

**Confidence:** HIGH — structural grounds (the user's "for given query" anchor) override the comprehensiveness counter.

**Resolution:** **Reading 1 (user-question-fidelity) is the PRIMARY verdict criterion.** Readings 2 and 3 are SECONDARY dimensions — they enter the verdict's reasoning but don't overturn the primary verdict.

**What is now fixed:** the verdict criterion is user-question-fidelity, anchored to the user's "for given query" phrase.

**What is no longer allowed:** declaring a verdict that ignores the user's question phrasing in favor of abstract output-volume.

**What now depends on this choice:** the per-dimension comparison's WEIGHTS (D1 user-question-fidelity critical-weighted; D2 completeness medium-weighted; D4 anti-regression critical-weighted since user explicitly named both failure modes).

**What changed in the conceptual model:** the verdict is constrained to anchor on the user's words, not on the inquiry's apparent comprehensiveness.

---

### Ambiguity 2 — How should the runner-difference confound enter the verdict?

**Candidates:** Option α (confound blocks verdict) / Option β (confound is a side-note) / Option γ (confound shapes the explanation).

**Strongest counter-interpretation (Option α):** Without controlling for the runner, this comparison conflates "different runner" with "different output quality." Any verdict mixes two confounded variables; a rigorous verdict refuses to render.

**Why the counter fails (structural grounds):** Option α would require refusing the verdict, which contradicts the user's explicit request ("tell me which one did a better job"). The user knows both ran through different runners — they said so in the source input. The user is asking for the comparison given the runners they have. Option α's refusal violates the user's framing and is unresponsive to the actual question.

Additionally, Option α treats the runner difference as if it confounded a hypothetical clean comparison. But there is no clean comparison — the only data the user has is one MVL2+ run and one MVL+ run. The user's pragmatic question is "which output is more useful for my purpose?" — answerable even when the underlying cognitive operations differ.

**Confidence:** HIGH on Option γ.

**Resolution:** **Option γ.** The verdict declares a winner (on user-question-fidelity primarily); the explanation acknowledges that PART of the substantive divergence is attributable to the runner difference. Specifically: `/MVL2+`'s self-reference dynamic (the upstream `/surfacing` discipline IS the discipline being modified) naturally produces deeper engagement with surfacing's structural elements (NOT-list, vocabulary, failure-mode catalog, primitive composition).

**What is now fixed:** the verdict is declared with confound-acknowledgment in the reasoning, not blocked by the confound.

**What is no longer allowed:** "verdict-impossible-due-to-confounds" as a candidate verdict (V5 from exploration).

**What now depends on this choice:** the verdict's explanation section must include a paragraph attributing part of A's deeper coverage to the self-reference dynamic.

---

### Ambiguity 3 — How to characterize A's failure-mode-rows-anchoring vs B's reaffirmation-anchoring as anti-regression strategies?

**Candidates:** Reading α (A's FM rows stronger because callable-by-name from elsewhere) / Reading β (B's §2.1 reaffirmation stronger because it's at the canonical home where readers learn the mechanism) / Reading γ (different philosophies; neither automatically stronger).

**Strongest counter-interpretation (Reading α):** The failure-mode catalog at §4.2 is the discipline's existing anti-regression mechanism; adding new entries follows the existing pattern. B's reaffirmation-only approach under-utilizes the existing failure-mode infrastructure.

**Why the counter fails (structural grounds):** Both approaches respect the discipline's existing patterns:
- §4.2 IS the failure-mode catalog (A's approach uses it; project-consistent).
- §2.1 IS the canonical home for refinement-rule placement per `docs/discipline_rule_placement.md` (B's approach uses it; project-consistent).
The choice between them depends on the discipline-author's emphasis (anti-regression-as-failure-catalog vs anti-regression-as-canonical-home-reaffirmation), not on objective strength.

Both approaches share the structural anchor: §4.4's asymmetric-failure principle is the LOAD-BEARING anti-regression mechanism, upstream of both. A's FM rows and B's reaffirmation are DOWNSTREAM defensive surfaces — both anchored to the same upstream principle.

**Confidence:** HIGH on Reading γ.

**Resolution:** **Reading γ.** A and B use different but both-valid anchoring philosophies. The verdict notes TIE on the anti-regression dimension (D4), with different structural philosophies acknowledged in the reasoning.

**What is now fixed:** the verdict acknowledges TIE on D4 (anti-regression strength).

**What is no longer allowed:** declaring A "more rigorous on anti-regression" or B "weaker on anti-regression" without qualifying which philosophy is being judged.

---

### Ambiguity 4 — Is the verdict A-better, B-better, TIED, or different-strengths-different-jobs? (Specific-vs-pattern check applies)

**Candidates:** V1 (A better) / V2 (B better) / V3 (TIED) / V4 (different-strengths-different-jobs).

**Specific-vs-pattern check.** The user asked about THIS pair (N=1), not about a broader pattern. The verdict must be the specific verdict for this pair; it cannot generalize. Preserved.

**Strongest counter to V2 (B better):** A is more comprehensive, touches more spec surfaces, has more rigorous Layer Commitment declaration, has more killed alternatives in critique — these all indicate A's process was more thorough, hence "better job."

**Why the counter fails (structural grounds — per Ambiguity 1):** "Better job FOR GIVEN QUERY" anchors on user-question-fidelity, not on process-rigor or output-volume. The user's query is singular ("what kind of thing we can add") — B's answer matches more directly. A's additional surfaces (vocabulary, telemetry, FM rows) are added value but go beyond the user's stated need. A's more thorough process is good engineering hygiene but doesn't change the user-question-fidelity verdict.

A's commitments (Layer Commitment declared; 7 KILLs explicit; first-class possibility-mode value) ARE more rigorous on inquiry-template compliance + adversarial-test rigor. But these are not user-question-fidelity dimensions.

**Strongest counter to V1 (A better):** B's parsimony respects the user's phrasing better; B's named-category framing is forward-extension-ready without restructuring; B's runner `/MVL+` (general-purpose) avoids the self-reference dynamic of `/MVL2+`, producing more arms-length reasoning.

**Counter to V3 (TIED):** A and B make substantively different choices (7 vs 3 surfaces; FM rows vs reaffirmation; signal-level vs observable-fact naming). They are not equivalent outputs. TIED would dissolve real differences.

**Counter to V4 (different-strengths-different-jobs):** plausible but vague. "Different jobs" is descriptively true at the dimension level (A wins on completeness; B wins on parsimony) but the user asked "which one did a better job FOR GIVEN QUERY" — they want a single verdict, not "they did different jobs." V4 is partially correct as a SECONDARY framing but doesn't deliver the verdict the user requested.

**Confidence:** HIGH on V2 (B better); MEDIUM-HIGH on V4 (different-strengths) as a supporting characterization.

**Resolution:** **V2 (B better) is the primary verdict, with V4 (different-strengths) as supporting characterization.** The verdict statement: **B (20-35 via `/MVL+`) did a better job for the user's given query — because (a) B's 3-surface edit matches the user's singular "what kind of thing we can add" phrasing more directly; (b) B's `last-edit-time` naming matches the user's "last datetime of edit" vocabulary; (c) both inquiries address both user-stated failure modes, so the divergence point is user-question-fidelity, where B wins. A's additional value (more spec surfaces, more rigorous Layer Commitment, more KILLed alternatives) is real but reflects "more spec engineering done," not "better job at the user's actual question."**

**What is now fixed:** Verdict = V2 (B better) with V4 supporting characterization.

**What is no longer allowed:** verdicts that declare A better on user-question-fidelity grounds; verdicts that refuse to render due to confounds.

**What now depends on this choice:** the per-dimension comparison's weighting; the explanation's structure (B's user-language-alignment foregrounded; A's process-rigor acknowledged but framed as secondary).

**What changed in the conceptual model:** the verdict is now committed to B-better, with explicit structural grounds anchoring the verdict to the user's "for given query" phrase.

---

### Ambiguity 5 — Should the verdict be evidence-rich or summary-only?

**Candidates:** evidence-rich (cite specific sections of each finding) / summary-only.

**Strongest counter to evidence-rich:** the user wrote casually; matching their tone might be summary-only.

**Why the counter fails:** the user asked "and why?" — explicit request for reasoning. "Why" requires evidence, not summary. The Goal in `_branch.md` explicitly requires "evidence-driven."

**Confidence:** HIGH.

**Resolution:** evidence-rich. The verdict cites specific sections of each finding.

---

### Ambiguity 6 — Should the verdict be dimension-by-dimension or holistic?

**Candidates:** dimension-by-dimension / holistic.

**Strongest counter to dimension-by-dimension:** a per-dimension table atomizes the verdict into "many small judgments" that may not roll up cleanly.

**Why the counter fails:** per-dimension table makes the verdict's evidence structure visible; the user can audit which dimensions drove the verdict. The Goal in `_branch.md` requires "per-dimension positioning."

**Confidence:** HIGH.

**Resolution:** dimension-by-dimension comparison, with explicit overall verdict at the end.

---

### Load-bearing concept test (Phase 3 refinement note)

Each load-bearing concept from earlier Sense Versions (SV2+) has been tested:

- **"For given query"** (MN1) → Ambiguity 1 tested; resolved as the verdict's primary anchor.
- **"What kind of thing"** (MN2) → tested implicitly via Ambiguity 1 and Ambiguity 4; resolved as supporting the parsimony reading.
- **"Better job"** (MN3) → Ambiguity 4 tested; resolved as V2 (B better) primary + V4 (different-strengths) secondary.
- **Runner-difference confound** (MN4) → Ambiguity 2 tested; resolved as confound shapes explanation, not blocks verdict.

All four are tested. No load-bearing concepts left implicit.

### Specific-vs-pattern recognition cue (Phase 3 refinement note)

Specific examples motivating the verdict: the two specific findings (16-00 and 20-35). The verdict is scoped to THIS pair (N=1) — applied to Ambiguity 4 explicitly. The broader pattern (`/MVL+` vs `/MVL2+` runner choice in general) is preserved as a research-frontier observation, not a verdict.

---

### Sense Version 4 (SV4 — Clarified Understanding)

Post-ambiguity-collapse, the design is sharp:

- **Verdict:** **B (20-35 via `/MVL+`) better for the user's given query.**
- **Primary criterion:** user-question-fidelity (the user's "for given query" anchor).
- **Secondary criteria:** completeness, defense-in-depth, process rigor — these enter the reasoning but don't overturn the primary verdict.
- **Confound treatment:** Option γ — confound shapes the explanation (`/MVL2+`'s self-reference dynamic explains part of A's depth).
- **Anti-regression dimension:** TIE — A and B use different but both-valid philosophies.
- **Verdict shape:** evidence-rich, dimension-by-dimension, with overall verdict.
- **Scope:** N=1; cannot generalize beyond this specific pair.

---

## Phase 4 — Degrees-of-Freedom Reduction

### What is now fixed

| Field | Value |
|---|---|
| Verdict | V2 = B better (with V4 different-strengths as supporting characterization) |
| Primary criterion | user-question-fidelity |
| Confound treatment | Option γ — shapes explanation, doesn't block verdict |
| D4 (anti-regression) | TIE — different philosophies, both valid |
| Evidence shape | dimension-by-dimension with citations |
| Scope | N=1 — specific pair only |

### What is eliminated

- V1 (A better overall) — eliminated by Ambiguity 1's user-question-fidelity primary criterion.
- V3 (TIED) — eliminated by Ambiguity 4's "they make substantively different choices."
- V5 (verdict-impossible-due-to-confounds) — eliminated by Ambiguity 2's structural ground.
- Holistic-only verdict.
- Summary-only reasoning.
- Generalization to `/MVL+`-vs-`/MVL2+` as runners.

### What paths remain viable

| Path | Status |
|---|---|
| V2 primary verdict with V4 supporting characterization | Default |
| Per-dimension table with weighted dimensions | Default |
| Explicit acknowledgment of confound + scope limitation | Required |
| Future-inquiry frontier on project-level runner calibration | Preserved as observation |

---

### Sense Version 5 (SV5 — Constrained Understanding)

The solution space is constrained:
- Verdict shape: V2 + V4 framing.
- Evidence: dimension-by-dimension with citations.
- Confound: shapes explanation, not blocks verdict.
- Scope: N=1, preserved as such.

---

## Phase 5 — Conceptual Stabilization

### Core claim

**B (the 20-35 inquiry via `/MVL+`) did a better job for the user's given query than A (the 16-00 inquiry via `/MVL2+`).**

The primary reason is user-question-fidelity: the user's verbatim query asks "what kind of thing we can add to surfacing discipline" — singular phrasing requesting an addition with explicit guard against limiting/regressing. B's 3-surface edit (§1.3 NOT-list note + §2.1 paragraph + §5.4 schema row) matches the singular phrasing directly; A's 7-surface edit (§1.3 + §1.4 + §2.1 + §4.2 ×2 + §5.4 + §5.5 + §5.6) goes beyond the user's stated scope. Both inquiries address both user-stated failure modes (A: idle-treated-as-refined; B: relevant-but-idle dropped) — TIE on the user's primary safety criteria. The divergence point is the addition's scope, where B wins on matching the singular phrasing.

Secondary considerations:
- B's `last-edit-time` naming matches the user's "last datetime of edit" vocabulary; A's `recency annotation` is a coined signal-level term.
- A is more rigorous on inquiry-template compliance (declared Layer Commitment; 7 KILLed alternatives in critique; first-class possibility-mode value).
- A is more comprehensive on spec engineering (vocabulary, telemetry, State Summary derivation).
- These secondary dimensions favor A but do not overturn the primary user-question-fidelity verdict.

Confound: part of A's deeper engagement with surfacing's structural elements is attributable to `/MVL2+`'s self-reference dynamic (the upstream `/surfacing` discipline IS the discipline being modified). This is a different cognitive operation, not a quality difference; it explains why A's output engaged more deeply with surfacing's existing structural elements (NOT-list, vocabulary, failure-mode catalog) — those elements were activated by the self-referential upstream.

### Accommodation trigger check (H6)

Did multiple perspectives destabilize the model?

- Technical/Logical: confirmed; both mechanically valid; B simpler.
- Human/User: strong support for verdict (user's singular phrasing).
- Strategic/Long-term: TIE on conventions.
- Risk/Failure: different risk profiles; no destabilization.
- Resource/Feasibility: TIE.
- Definitional/Internal Consistency: both pass.
- Frame-exit Completeness: user-level reading committed; project-level out-of-scope.
- Phase/Calibration-State: PASS.

No destabilization. **Accommodation trigger does NOT fire.**

### Self-Reference Blindness check (H8)

Using cognitive disciplines to compare cognitive-discipline-runs is borderline self-reference. External grounding:
- The user's verbatim query (extrinsic).
- The prior findings as objective artifacts (read from disk).
- The runner-difference confound is a structural fact (recorded in `_state.md` flow-type fields).
- The project's placement convention at `docs/discipline_rule_placement.md` is extrinsic project documentation.

External grounding adequate. **PASS.**

---

### Final Sense Version (SV6 — Stabilized Model)

**The verdict:** **B (the 20-35 inquiry via `/MVL+`) did a better job for the user's given query than A (the 16-00 inquiry via `/MVL2+`).**

**Why (the primary reason):** The user's verbatim query asks "what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?" — singular phrasing. B's 3-surface edit matches that phrasing directly; A's 7-surface edit goes beyond it. Both inquiries address both user-stated failure modes; the divergence point is the addition's scope, where B's parsimony wins on user-question-fidelity.

**Why (secondary considerations that favor A but don't overturn the verdict):**
- A is more comprehensive on spec engineering (vocabulary, telemetry, State Summary derivation in addition to the core mechanism).
- A is more rigorous on inquiry-template compliance (declared Layer Commitment explicitly; documented 7 KILLed alternatives with structural grounds).
- A has more adversarial critique (7 KILLs vs B's 0 KILLs + 2 REFINEs).

**Why (the confound that shapes — but does not block — the verdict):** `/MVL2+`'s self-reference dynamic (upstream `/surfacing` discipline IS the discipline being modified) naturally produces deeper engagement with surfacing's structural elements (NOT-list, vocabulary, failure-mode catalog, primitive composition). This explains part of A's depth; it is not the same as "A was a smarter inquiry."

**Why (the scope limitation that must accompany the verdict):** This is an N=1 comparison. It does NOT generalize to "MVL+ is always better than MVL2+ for surfacing-spec questions." A different user with a different query (e.g., "give me a complete spec engineering package for adding metadata") could find A better; a different user with the same query but different time-of-day or LLM-run randomness could get a different output from either runner. The project's deferred `ab_stability_test` protocol (per the A/B precedent at `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/`) would need to run before any runner-level calibration claim could be made.

### Answers to the three exploration-handoff questions

**1. What does "better job" mean for the user's question?**

**Reading 1 (user-question-fidelity) is primary**, anchored by the user's "for given query" phrase. The user's singular "what kind of thing we can add" phrasing structurally supports B's parsimonious answer over A's comprehensive one. Readings 2 (completeness) and 3 (defense-in-depth) are secondary dimensions; they favor A but don't overturn the primary verdict.

**2. How should the runner-difference confound enter the verdict?**

**Option γ:** the verdict declares a winner; the explanation acknowledges that part of A's deeper engagement with surfacing's structural elements is attributable to `/MVL2+`'s self-reference dynamic. The confound does not block the verdict (which would violate the user's request) and does not get hidden in a footnote (which would be dishonest); it sits in the explanation, shaping how A's depth is interpreted.

**3. What's the structural difference between A's failure-mode-rows-anchoring and B's reaffirmation-anchoring as anti-regression strategies?**

**Reading γ:** they are different but both-valid philosophies. A anchors the anti-regression principle in the failure-mode catalog at §4.2 (named FMs callable by name from elsewhere); B anchors it at the canonical home §2.1 (reaffirmation at the location where readers learn the mechanism). Both are project-consistent (§4.2 IS the failure-mode catalog; §2.1 IS the canonical home per `docs/discipline_rule_placement.md`). Both are anchored to the same upstream principle (§4.4 asymmetric-failure). **TIE on D4 (anti-regression dimension).**

### SV1 → SV6 comparison

| Dimension | SV1 | SV6 |
|---|---|---|
| Verdict criterion | Implied "abstract quality" | User-question-fidelity (anchored to "for given query") |
| Verdict | Undecided | **V2 (B better)** with V4 supporting characterization |
| Confound handling | Open | Option γ (shapes explanation; doesn't block) |
| Anti-regression dimension | Open | TIE — different philosophies |
| Verdict shape | Open | Evidence-rich, dimension-by-dimension |
| Scope | Open | N=1 — specific pair |
| Frame-exit | Unchecked | Checked; user-level reading committed; project-level explicitly out-of-scope |

Substantial structural shift between SV1 and SV6 on six dimensions. Healthy sensemaking.

---

## Saturation Indicators (Telemetry)

| Indicator | Status |
|---|---|
| Perspective saturation | All lateral perspectives applied; last few produced no new anchor TYPES; saturation approached. |
| Ambiguity resolution ratio | 6 ambiguities identified; 6 resolved (all HIGH confidence except Ambiguity 4 which is HIGH primary + MEDIUM-HIGH supporting). 0 OPEN. |
| SV delta | SV1 → SV6 shows clear structural shifts on 6 dimensions (verdict criterion, verdict itself, confound handling, anti-regression dimension, verdict shape, scope). Substantial. |
| Anchor diversity | All 5 anchor types represented: Constraints (C1-C8), Key Insights (KI1-KI7), Structural Points (SP1-SP7), Foundational Principles (FP1-FP4), Meaning-Nodes (MN1-MN4). Multi-dimensional. |

## Self-Assessment Verdict

**PROCEED.**

- All convergence indicators approaching saturation; no ambiguity left OPEN.
- No failure modes raised: Status Quo Bias (no — challenged comprehensiveness preference); Premature Stabilization (no — multiple perspectives applied and tested with structural grounds); Anchor Dominance (no — multiple anchors interact); Perspective Blindness (no — uncomfortable Option α tested for the confound; uncomfortable V1 tested for the verdict); Clean Resolution Trap (no — counter-interpretations stated and tested on structural grounds for each ambiguity); Self-Reference Blindness (no — external grounding established via user's verbatim query + prior findings as artifacts + structural facts).
- The three exploration-handoff questions all answered with HIGH confidence.
- **Hand to decomposition.** The remaining work is to partition the verdict into independently coherent pieces: (i) per-dimension comparison table; (ii) the verdict statement; (iii) the confound paragraph; (iv) the scope-limitation paragraph; (v) the supporting V4 different-strengths characterization. Each piece has its own interface and dependency order.
