# Innovation — Innovation Missed CORRECTS on Mapping Redo

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/_branch.md`

Inputs read in order: (1) `_branch.md` — LOOP_DIAGNOSE framing + Innovation-only hard scope; (2) `exploration.md` — territory map; (3) `sensemaking.md` — SV6 model with 3 spec-structural anchors + 4 maintenance paths; (4) `decomposition.md` — 5-piece Q-tree with dependency order {Q1, Q2} → Q3 → {Q4, Q5}, 3 hidden-coupling risks flagged; (5) `cognitive_harness/innovate/references/innovate.md` — the criterion artifact this Innovation is generating spec-edit candidates for.

---

## Seed

A 5-piece Q-tree is committed (decomposition); the seed is a Production-task: materialize concrete candidate text for each of Q1-Q5, with per-piece Inversion applied explicitly to each piece. Failure types to avoid:

- **Recursive self-trap:** generating spec-edit candidates for `/innovate` reference while committing the very failure being diagnosed (single-candidate piece with no Inversion variant); the self-reference operates and the args explicitly require per-piece Inversion.
- **Compliance-criterion fuzziness propagation** (decomposition hidden-coupling risk 1): Q3's rule text returning compliance language that's clear-on-paper but ambiguous-in-application; Q4 and Q5 inheriting the fuzziness.
- **Determination-procedure propagation** (risk 2): Q2's mechanism returning unstable classifications; Q4's recognition signals and Q5's FLAG condition inheriting the instability.
- **Spec-internal-consistency drift** (risk 3): Q1's text edit subtly breaking §3 Inversion's existing "How to apply" or "What it misses" text.

External grounding: candidates must be testable by future cases beyond `12-15` (the motivating case); cross-references to canonical `/innovate` reference sections are preserved verbatim.

---

## Phase 2 — Generation (per-piece, per-mechanism, with Inversion at piece-level)

### Q1 — Definitional clarification

**Question:** What text edit to `/innovate` §3 Inversion commits unambiguously to the expansive Inversion-belief-per-piece reading?

**Mechanisms applied at this piece:** Constraint Manipulation (one-sentence text edit) + Absence Recognition (clarifying-note for a previously-implicit reading) + **Inversion at piece-level** (the strict reading — what follows?).

**Variant Q1.a — Generic (one-line refinement note appended to §3 Inversion):**
> Refinement: "Inversion's 'belief related to the seed' includes any piece-internal load-bearing commitment, not only the seed's single top-level belief."

**Variant Q1.b — Focused (specific text edit to the existing 'How to apply' sub-step):**
> Original: *"Identify a core assumption or belief related to the seed."*
> Edited: *"Identify a core assumption or belief related to the seed — including, when the seed unfolds into multiple piece-internal commitments (relationship-labels, framing semantics, lesson vocabulary, evaluation criteria), each load-bearing commitment is an in-scope 'belief related to the seed' for Inversion's purposes. The depth-check refinement note below ('Keep inverting until you reach a statement about the SYSTEM') applies across piece-internal commitments, not only at seed-level."*

**Variant Q1.c — Contrarian (leave the spec ambiguous; add a runtime-hook instead):**
> Add §3 Inversion's "How to apply" step: *"Before applying Inversion, the runner declares whether this inquiry treats the belief-target as seed-only or seed-plus-piece-commitments. The declaration is recorded in `_branch.md`. Both readings are spec-permitted; runner discretion is explicit."*

**Variant Q1.Inversion — Inversion candidate ("what if the spec should NOT be clarified?"):**
> Strict-reading-only alternative: *"Inversion applies once per Innovation run, to the seed's top-level belief. Multiple piece-internal Inversion applications dilute the mechanism's force; the spec's existing seed-level coverage rule is canonical."*
> Following from this: `12-45`'s P3.8 (self-reference acknowledgment) would be reframed as "the seed-level Inversion applied to the inquiry's own choice"; this is a single Inversion at seed scale, not multiple piece-level Inversions. The strict reading IS internally consistent if reformulated this way.
> What breaks: `12-45`'s P3.5 ("what does a vocabulary look like that prevents this vs enables this?") is hard to reframe as seed-level — the meta-pattern's Inversion is genuinely piece-internal. The strict-reading alternative loses the lesson `12-45` demonstrated.

**Choice:** **Q1.b (Focused).** Q1.a is too generic to disambiguate operationally. Q1.c (contrarian) preserves ambiguity, which is the exact failure being diagnosed; it merely makes the ambiguity explicit rather than resolving it. Q1.Inversion is structurally interesting but loses `12-45`'s evidence. Q1.b commits to expansive reading with a specific text edit that's internally consistent with §3 Inversion's depth-check refinement note.

**5-Test Cycle on Q1.b:**

| Test | Verdict |
|---|---|
| Novelty | MEDIUM. The expansive reading is implicit in the spec's depth-check refinement; the edit makes it explicit. New as a committed text edit; not new conceptually. |
| Scrutiny survival | PASS. Strongest objection: "this expands Inversion's scope too broadly; every piece-internal commitment becomes an Inversion-target, causing over-application." Response: the edit restricts the expansion to **load-bearing** commitments, not all commitments; Q2's determination mechanism specifies which pieces qualify; Q3's rule cross-references the bound. |
| Fertility | HIGH. Enables Q3's rule text to reference "load-bearing piece-internal commitment" with a clear definitional anchor. |
| Actionability | HIGH (one specific text edit). |
| Mechanism independence | YES. Constraint Manipulation (one-sentence edit) + Absence Recognition (clarifying note) + Combination (existing depth-check + new expansive-reading) all converge on the same text. Inversion (the strict-reading candidate Q1.Inversion) produces a different text — confirming the chosen Q1.b is the expansive direction, while Q1.Inversion preserves the alternative for the assembly check. |

**Disposition:** ACTIONABLE. Q1.Inversion preserved as RESEARCH FRONTIER (the strict reading reformulated at seed-level could be empirically tested in a future case; if it produces the same outputs as expansive in 3+ cases, the spec could be left ambiguous with no operational consequence).

### Q2 — Determination mechanism

**Question:** What runtime mechanism does Innovation use to identify "this piece is a meta-decision piece"?

**Mechanisms applied:** Absence Recognition (the spec currently lacks this mechanism) + Constraint Manipulation (operational checkability constraint) + **Inversion at piece-level** ("what if 'meta-decision piece' is not a determinable category at runtime?").

**Variant Q2.a — Generic (heuristic statement):**
> "A piece is a meta-decision piece if it commits to a label, frame, semantic, or vocabulary that other pieces will reference."

**Variant Q2.b — Focused (observable-property checklist):**
> A piece P is a **meta-decision piece** when at least one of the following observable properties holds at piece-output time:
> (i) **Relationship-label property:** P commits to a relationship between this finding and a prior — frontmatter `refines:`, `corrects:`, `supersedes:`, `diagnoses:`, or equivalent body-text declaration.
> (ii) **Framing-semantic property:** P commits to a frame the rest of the finding operates under — e.g., "this is a layer-shift situation," "this is a redo," "this is an audit."
> (iii) **Lesson-vocabulary property:** P introduces new vocabulary (a named bias, a named pattern, a named failure mode, a named procedure) that the same finding then applies to itself or to other cases.
> (iv) **Evaluation-criterion property:** P commits to criteria by which downstream candidates will be judged — e.g., "the diagnostic must yield three YESes for REFINES."
>
> A piece P is **content-production**, not meta-decision, when none of (i)-(iv) hold and P's role is to produce text instantiating a frame committed elsewhere in the artifact.
>
> Worked positive example (from `12-15` innovation.md): P4.2 (Changes from Prior body section) commits to a relationship-label (REFINES) — property (i) holds → meta-decision piece.
>
> Worked negative example (from `12-15` innovation.md): P3.2 (classification guidance) commits no relationship-label, frame, vocabulary-with-self-application, or evaluation criterion; it produces text instantiating the framework's classification-procedure → content-production piece.
>
> Edge case: P3.1 (12 paradigms enumeration) introduces vocabulary (the 12 named paradigms) but applies it to general content, not to itself; property (iii) fires marginally. **Resolution:** treat as content-production unless the same artifact applies the vocabulary to its own structure (which `12-15`'s P3.1 does not). The marginal property by itself does not promote to meta-decision.

**Variant Q2.c — Contrarian (every piece is a meta-decision piece by default):**
> "Every Innovation piece-output is a meta-decision piece. The category distinction collapses; piece-level Inversion is required everywhere."

**Variant Q2.Inversion — Inversion candidate ("what if 'meta-decision piece' is not determinable?"):**
> Suppose the determination is irreducibly fuzzy — the boundary between meta-decision and content-production is judgment-dependent at runtime. What follows? Either: (i) Q3's rule is unenforceable in practice (the fuzziness produces inconsistent applications across runs); OR (ii) the rule's compliance is evaluated retrospectively (after each run, the runner self-checks "did any of my pieces commit a relationship-label, frame, semantic, or vocabulary? If yes, was Inversion applied there?"). Path (ii) preserves Q3's enforceability without requiring upfront determinacy; the rule fires retrospectively as a self-audit, not as a precondition. **This Inversion-candidate is structurally important** — it reveals that Q2.b's procedure is sufficient even if some edge cases are judgment-dependent, as long as the *common cases* (relationship-label, framing-semantic) are determinable. Q2.b's worked examples are common-case-determinable; the spec accepts edge-case judgment.

**Choice:** **Q2.b (Focused) refined by Q2.Inversion's insight.** Q2.a is too generic. Q2.c collapses the distinction and produces false positives (content-production pieces would all be required to apply Inversion, over-constraining the discipline). Q2.b with the Inversion-candidate's retrospective-self-audit fallback handles edge cases while preserving common-case determinacy.

**5-Test Cycle on Q2.b (refined):**

| Test | Verdict |
|---|---|
| Novelty | HIGH. The four-property checklist is new to the project's vocabulary. |
| Scrutiny survival | PASS (refined). Strongest objection: "edge cases break determinacy; the procedure is covertly fuzzy." Response (from Q2.Inversion): edge cases are handled retrospectively via self-audit; common cases (the load-bearing ones — properties (i) and (ii)) are determinable at piece-output time. |
| Fertility | HIGH. Enables Q3's rule to fire on a clear bound; enables Q4's recognition signals to reference observable properties; enables Q5's telemetry to flag specific piece-properties. |
| Actionability | HIGH. Drop-in to `/innovate` reference at §"Phase 2 Generate" or as a new §3 Inversion subsection. |
| Mechanism independence | PARTIAL. Constraint Manipulation + Absence Recognition converge on the checklist shape. Inversion produces the retrospective-self-audit fallback specifically; this aspect of the candidate is uniquely Inversion-derived. The candidate is robust because two mechanisms produce the core, with Inversion adding the edge-case handling. |

**Disposition:** ACTIONABLE. The retrospective-self-audit fallback (Inversion-derived) is preserved in the candidate text as the edge-case handler.

### Q3 — Piece-level Inversion rule (load-bearing)

**Question:** What is the exact rule text for `/innovate` reference's refinement-note addition requiring Innovation to apply Inversion at piece-level when the piece is a meta-decision piece?

**Mechanisms applied:** Combination (rule + precondition + compliance criterion + cross-references) + Constraint Manipulation (specific rule wording) + Absence Recognition (new rule for previously-unaddressed case) + **Inversion at piece-level** ("what if the rule should be soft instead of hard?").

This piece requires at least 3 variants per the args (generic / focused / contrarian).

**Variant Q3.a — Generic (one-sentence rule):**
> "Innovation MUST apply Inversion at piece-level when the piece is a meta-decision piece (per Q2's determination)."

**Variant Q3.b — Focused (full refinement note with preconditions, compliance criterion, cross-references):**

> *Refinement note (applies at Phase 2 Generate, after the existing variations-per-mechanism text):*
>
> **Piece-level Inversion at meta-decision pieces.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), the mechanism-coverage rule's per-seed gating is necessary but not sufficient. For each piece that meets the meta-decision-piece criterion (see §"Determination Mechanism for Meta-Decision Pieces"), Innovation MUST additionally apply Inversion at piece-level, generating an Inversion-candidate that asks "what is the assumption this piece commits, and what if it's reversed?"
>
> **Preconditions:** (1) the inquiry's seed has unfolded into a piece-list (Production-task mode is operating); (2) the piece in question meets at least one of the four meta-decision-piece properties (relationship-label / framing-semantic / lesson-vocabulary / evaluation-criterion).
>
> **Compliance criterion (observable at artifact level):** the piece's output in `innovation.md` contains both (a) the principal candidate text for the piece's committed direction, AND (b) an explicit Inversion-candidate paragraph naming the assumption being reversed and stating what follows from the reversal. Both candidates must be tested via the 5-test cycle. The Inversion-candidate may be selected, rejected, or refined; the rule does not mandate the Inversion-candidate's selection, only its generation and testing.
>
> **Cross-references:** This rule operates alongside the spec's existing depth-check refinement note (§3 Inversion: "Keep inverting until you reach a statement about the SYSTEM"). For meta-decision pieces whose first Inversion produces a component-level statement, depth-iterate per the existing refinement. This rule does not replace the existing Coverage Strategy's per-seed minimum (1 Generator + 1 Framer); it adds a per-piece requirement specifically for meta-decision pieces.
>
> **Scope bounded:** This rule does NOT apply to content-production pieces (those failing all four meta-decision-piece properties). Over-application risk is bounded by Q2's determination mechanism.

**Variant Q3.c — Contrarian (soft rule: recommendation, not requirement):**
> *Refinement note:* "Innovation **SHOULD** consider Inversion at piece-level when a piece is a meta-decision piece. The recommendation reflects the discipline's preference for surfacing alternatives at load-bearing decision points; failure to apply Inversion is not a compliance violation but produces a FLAG in telemetry. The runner may override the FLAG with explicit reasoning."

**Variant Q3.Inversion — Inversion candidate ("what if the rule should be soft instead of hard?"):**
> Suppose the rule is MUST and produces false positives in practice — Innovation runs that legitimately have single-direction candidate sets at meta-decision pieces (e.g., a finding that synthesizes 5 prior consistent findings; the relationship-label is clearly REFINES with no inversion-candidate needed). What follows? Either: (i) the rule fires too aggressively and produces ritual compliance (an empty Inversion-candidate generated to satisfy the rule, then dismissed without substance); OR (ii) the rule has an override path (the runner can mark the piece "Inversion-not-applicable" with explicit reason, satisfying the rule without generating an empty candidate). Path (ii) preserves the rule's enforcement force without over-constraining.
>
> The Inversion-candidate suggests: combine Q3.b (MUST with compliance criterion) with an OVERRIDE PATH analogous to the spec_governance.md COULD-vs-MUST gating: when the runner determines Inversion is genuinely inapplicable at a meta-decision piece, the override is recorded as "Inversion-marked-inapplicable: [reason]" and the rule's compliance is satisfied. The override is intentional friction — the reason must be specific (not "this just doesn't need it"); a future reviewer can spot weak overrides.

**Choice:** **Q3.b (Focused) extended with Q3.Inversion's override path.** Q3.a is too generic. Q3.c (soft rule) loses enforcement force — the diagnostic shows `12-15`'s Innovation didn't apply Inversion despite the existing soft "depth-check refinement" already pointing in the direction. A soft rule will not catch the same failure pattern. Q3.b with override path balances enforcement and flexibility.

**Final committed text for Q3:**

> *Refinement note (applies at Phase 2 Generate, after the existing variations-per-mechanism text):*
>
> **Piece-level Inversion at meta-decision pieces.** When Innovation operates in Production-task mode (the seed is a piece-list inherited from upstream disciplines, and Innovation generates text per piece), the mechanism-coverage rule's per-seed gating is necessary but not sufficient. For each piece that meets the meta-decision-piece criterion (see §"Determination Mechanism for Meta-Decision Pieces"), Innovation MUST additionally apply Inversion at piece-level, generating an Inversion-candidate that asks "what is the assumption this piece commits, and what if it's reversed?"
>
> **Preconditions:** (1) Production-task mode is operating; (2) the piece in question meets at least one of the four meta-decision-piece properties (relationship-label / framing-semantic / lesson-vocabulary / evaluation-criterion).
>
> **Compliance criterion (observable at artifact level):** the piece's output in `innovation.md` contains both (a) the principal candidate text for the piece's committed direction, AND (b) an explicit Inversion-candidate paragraph naming the assumption being reversed and stating what follows from the reversal. Both candidates must be tested via the 5-test cycle. The Inversion-candidate may be selected, rejected, or refined; the rule does not mandate the Inversion-candidate's selection, only its generation and testing.
>
> **Override path:** When the runner determines Inversion is genuinely inapplicable at a meta-decision piece (e.g., a synthesis of consistent priors where the relationship-label is unambiguously REFINES with no plausible inversion), the override is recorded as `Inversion-marked-inapplicable: [specific reason]`. The reason must be specific (not "this just doesn't need it"); empty overrides are weak and a future reviewer can spot them. With a recorded override, the rule's compliance is satisfied without generating an empty Inversion-candidate.
>
> **Cross-references:** This rule operates alongside the spec's existing depth-check refinement note (§3 Inversion: "Keep inverting until you reach a statement about the SYSTEM"). For meta-decision pieces whose first Inversion produces a component-level statement, depth-iterate per the existing refinement. This rule does not replace the Coverage Strategy's per-seed minimum (1 Generator + 1 Framer); it adds a per-piece requirement specifically for meta-decision pieces.
>
> **Scope bounded:** This rule does NOT apply to content-production pieces (those failing all four meta-decision-piece properties). Over-application risk is bounded by the determination mechanism.

**5-Test Cycle on Q3 (committed):**

| Test | Verdict |
|---|---|
| Novelty | HIGH. New rule; no equivalent currently in `/innovate` reference. |
| Scrutiny survival | PASS. Strongest objection 1: "MUST rule over-constrains Innovation; produces ritual compliance." Response: override path with specific-reason requirement is the existing-spec-precedent mechanism (cf. spec_governance.md COULD-vs-MUST override path). Strongest objection 2: "compliance criterion is fuzzy — what counts as 'an explicit Inversion-candidate paragraph'?" Response: the criterion is "names the assumption AND states what follows from the reversal AND is tested via the 5-test cycle"; an empty bullet point fails all three sub-criteria. |
| Fertility | HIGH. Enables Q4's failure-mode prevention refinements to cross-reference Q3 cleanly; enables Q5's telemetry FLAG condition; addresses the load-bearing failure surface from sensemaking's SV6. |
| Actionability | HIGH (one specific refinement note drop-in to `/innovate` reference). |
| Mechanism independence | PARTIAL. Combination + Constraint Manipulation converge on the rule structure. Absence Recognition supplies the new-rule-for-uncovered-case framing. Inversion produced the override path (Q3.Inversion). The rule's CORE (MUST + compliance criterion + bounded scope) is reachable by three mechanisms; the OVERRIDE PATH is uniquely Inversion-derived. |

**Disposition:** ACTIONABLE. Q3.a, Q3.c preserved as RESEARCH FRONTIER variants in case future cases reveal Q3.b's MUST framing produces unacceptable false positives.

### Q4 — Failure-mode prevention refinements

**Question:** What are the refined prevention rules for Early Frame Lock (TYPE-aware) and Survival Bias (never-generate), each cross-referencing Q3?

**Mechanisms applied:** Combination (cross-referencing structure) + Constraint Manipulation (refinement-note format) + **Inversion at piece-level** ("what if existing failure modes already cover this and refinement is unnecessary?").

**Variant Q4.a — Generic:**
> "Extend Early Frame Lock prevention to be mechanism-type-aware. Extend Survival Bias prevention to cover never-generate failures."

**Variant Q4.b — Focused (full text for both refinements):**

> *Refinement note appended to §3 Early Frame Lock:*
>
> **Mechanism-type-aware prevention.** The base prevention rule ("after the first successful output, apply at least one more mechanism") is mechanism-count-aware. When the decision at the locked piece is at meta-level (relationship-label / framing-semantic / lesson-vocabulary / evaluation-criterion per the meta-decision-piece criterion), the additional mechanism MUST include Inversion specifically — applying any-mechanism-that-isn't-Inversion does not satisfy the prevention rule for meta-decision pieces. See §"Phase 2 Generate" piece-level Inversion rule.
>
> Recognition signal: a meta-decision piece's mechanism log shows 2+ mechanisms applied (count satisfies base prevention) but none is Inversion (TYPE fails refined prevention). The Early Frame Lock failure mode is operating in its mechanism-TYPE form.
>
> *Refinement note appended to §6 Survival Bias:*
>
> **Prior-step never-generate prevention.** The base prevention rule ("deliberately test the most uncomfortable output with extra care") presupposes the uncomfortable output exists in the candidate set. When the candidate set at a meta-decision piece contains only one direction (e.g., "preserve / accept / continue" without "reject / invert / discard"), the prior-step variant of Survival Bias is operating: the uncomfortable alternative was never generated, so there is nothing to test with extra care.
>
> Recognition signal: at a meta-decision piece, the candidate set contains only directions that preserve the prior / extend the current frame / continue the inherited direction, with no candidate that rejects / inverts / discards. The Survival Bias failure mode is operating in its prior-step never-generate form. Apply the piece-level Inversion rule from §"Phase 2 Generate" to generate the missing direction. See also §3 Early Frame Lock mechanism-TYPE-aware prevention.

**Variant Q4.c — Contrarian (no refinement; argue the existing rules cover it):**
> "Early Frame Lock's existing prevention (apply at least one more mechanism) is sufficient when 'more mechanism' is read to include Inversion. Survival Bias's existing prevention (test the uncomfortable output) is sufficient when the runner generates the uncomfortable output as part of normal coverage. No refinement needed; better runner discipline catches the case."

**Variant Q4.Inversion — Inversion candidate ("what if existing modes already cover this?"):**
> Suppose Q4.c is right and `12-15`'s failure is just discipline-application, not spec-gap. What follows? `12-15`'s Innovation applied 7 mechanisms total at seed-level (per its telemetry) — Early Frame Lock's prevention (apply another mechanism) was clearly satisfied. Yet the failure occurred. So the existing rule cannot have caught it without additional structure. Q4.c fails this test: the existing rule WAS satisfied and the failure WAS committed. The refinement is required, not optional. Q4.Inversion confirms Q4.b's direction by showing the alternative (Q4.c) doesn't hold under evidence.

**Choice:** **Q4.b (Focused).** Q4.a is too generic. Q4.c is structurally falsified by `12-15`'s actual telemetry (which satisfied the base prevention rule and still committed the failure). Q4.Inversion's test confirms Q4.b is needed.

**5-Test Cycle on Q4.b:**

| Test | Verdict |
|---|---|
| Novelty | MEDIUM. The TYPE-aware refinement is structurally new for Early Frame Lock; the never-generate variant is structurally new for Survival Bias. |
| Scrutiny survival | PASS. Strongest objection: "the refinements are redundant with Q3 — both say 'apply Inversion at meta-decision pieces.'" Response: Q3 is the POSITIVE RULE; Q4 is the FAILURE-MODE RECOGNITION. Q3 says "do this." Q4 says "if you didn't do this, here's how to recognize the failure." They are complementary, not redundant. The recognition signals are diagnostic (telemetry-observable) and prescriptive (Q3 cross-reference) at once. |
| Fertility | MEDIUM. Reusable for any future case where a meta-decision piece lacks Inversion. |
| Actionability | HIGH (two specific refinement notes drop-in to existing failure-mode sections). |
| Mechanism independence | YES. Combination + Constraint Manipulation converge on the structure. The Inversion-candidate Q4.Inversion confirmed the direction (Q4.c falsified). |

**Disposition:** ACTIONABLE.

### Q5 — Telemetry extension

**Question:** What extension to `/innovate` §"Mechanism Coverage Telemetry" surfaces per-piece mechanism distribution and flags violations of Q3?

**Mechanisms applied:** Combination (existing-telemetry-fields + new-fields) + Absence Recognition (missing observability for piece-level) + **Inversion at piece-level** ("what if telemetry shouldn't be extended?").

**Variant Q5.a — Generic:**
> "Add a per-piece mechanism log to telemetry."

**Variant Q5.b — Focused (full refinement to §"Mechanism Coverage (Telemetry)"):**

> *Refinement to §"Mechanism Coverage (Telemetry)":*
>
> When Innovation operates in Production-task mode, report additionally:
> - **Per-piece mechanism log.** For each piece in the piece-list, report the mechanism(s) applied. Format: `<piece-id>: [<mechanism>, <mechanism>, ...]`.
> - **Meta-decision-piece classification.** For each piece, report whether it is a meta-decision piece (per the four-property criterion) or content-production. Format: `<piece-id>: meta-decision | content-production | inapplicable-override`.
> - **Piece-level Inversion compliance.** For each meta-decision piece, report whether the piece-level Inversion rule was satisfied. Format: `<piece-id>: satisfied | violated | overridden`.
>
> **FLAG condition (refined):** If any meta-decision piece has `Piece-level Inversion compliance: violated`, the overall telemetry verdict is FLAG (not PROCEED), regardless of seed-level mechanism coverage. The runner reviews and either repairs (by adding the missing Inversion-candidate to the piece's output and re-running the 5-test cycle on the new candidate) or overrides (by marking the piece `Inversion-marked-inapplicable` with a specific reason per Q3's override path).
>
> **RE-RUN condition (refined):** If 2 or more meta-decision pieces have `Piece-level Inversion compliance: violated` without override, the verdict is RE-RUN. Multiple violations indicate a systemic discipline-application failure, not a one-off oversight.

**Variant Q5.c — Contrarian (telemetry shouldn't be extended):**
> "The existing telemetry is sufficient. Adding per-piece reporting bloats the output. The runner can manually audit piece-level Inversion when needed."

**Variant Q5.Inversion — Inversion candidate ("what if telemetry extension produces over-flagging?"):**
> Suppose Q5.b fires FLAG on every Production-task-mode run with a meta-decision piece. What is the cost? If a run has 5 meta-decision pieces and 1 has a legitimate Inversion-inapplicable override, the FLAG fires until the override is recorded. False-positive rate: depends on how often legitimate overrides occur. If overrides are common (say >30% of meta-decision pieces), the FLAG becomes noise. If overrides are rare (<5%), the FLAG is signal.
>
> The Inversion-candidate suggests: PROCEED with override-recorded; FLAG with violation-not-overridden. Q5.b already handles this — the override path satisfies compliance. The Inversion-candidate confirms Q5.b's filtering is appropriate; the remaining open question is whether overrides will be rare in practice (a calibration question for future cases).

**Choice:** **Q5.b (Focused).** Q5.a too generic. Q5.c falsified by the diagnostic: `12-15`'s case demonstrates manual auditing missed the violation; telemetry visibility was needed. Q5.Inversion confirms Q5.b's filtering structure.

**5-Test Cycle on Q5.b:**

| Test | Verdict |
|---|---|
| Novelty | HIGH. Per-piece mechanism reporting is new to the spec's telemetry. |
| Scrutiny survival | PASS. Strongest objection: "FLAG produces noise if overrides are common." Response: the override path internalizes the runner's judgment as recorded data; the FLAG fires only on un-overridden violations. Calibration question for future cases is preserved as a RESEARCH FRONTIER (override-rate observation). |
| Fertility | HIGH. The per-piece log makes ALL mechanism-distribution analyses possible (not just Inversion-at-meta-decision); future failure-mode discoveries can leverage the same data. |
| Actionability | HIGH (drop-in refinement to the telemetry section). |
| Mechanism independence | YES. Combination + Absence Recognition + Constraint Manipulation converge on the structure. Inversion's contribution is the override-filtering check (Q5.Inversion). |

**Disposition:** ACTIONABLE.

---

## Phase 3.5 — Assembly Check

### Assembly: "Five-Piece Refinement Set to `/innovate` Reference"

The five committed candidates compose into a coherent refinement-set covering definitional (Q1), determination-mechanism (Q2), positive-rule (Q3), failure-mode-recognition (Q4), and telemetry-observability (Q5) dimensions.

### Coherence check across the assembly

**Cross-reference verification:**
- Q3's rule cross-references Q1's clarified reading and Q2's determination mechanism (preconditions).
- Q3's rule and Q2's determination mechanism share the term "meta-decision-piece"; both define it via the same four-property criterion.
- Q4's failure-mode refinements cross-reference Q3's positive rule.
- Q5's telemetry FLAG condition references the same compliance criterion as Q3's rule.

**Field-naming consistency:**
- "Meta-decision piece" is used consistently across Q2, Q3, Q4, Q5. The four properties (relationship-label, framing-semantic, lesson-vocabulary, evaluation-criterion) are named consistently.
- "Inversion-marked-inapplicable" appears in both Q3 (override path) and Q5 (telemetry override). No drift.
- "Piece-level Inversion compliance" in Q5 uses the same compliance criterion as Q3 (principal candidate + Inversion-candidate paragraph + 5-test cycle on both).

**Contradiction check:**
- Q1 commits to expansive reading; Q3 builds on expansive reading. Consistent.
- Q2 specifies determinable common cases + retrospective-self-audit for edge cases; Q3 references Q2's determination; Q4 and Q5 reference the same criterion. No contradictions.
- Q4's failure-mode-recognition signals match Q5's telemetry observables. No drift.

**Hidden-coupling-risk check (against decomposition's three flagged risks):**

1. **Q3 compliance-criterion fuzziness:** Q3's compliance criterion is "(a) principal candidate AND (b) Inversion-candidate paragraph AND (c) 5-test cycle on both." All three sub-criteria are artifact-observable. PASS (not fuzzy).

2. **Q2 determination-procedure propagation:** Q2 specifies four observable properties for common cases + retrospective-self-audit fallback for edge cases. Q4 and Q5 inherit the same four-property criterion. If Q2's procedure is judgment-dependent on edge cases, the judgment propagates to Q4 and Q5 — BUT only on edge cases, not on the common cases the diagnostic addresses (relationship-label property covers the `12-15` case directly). PASS (with edge-case caveat preserved).

3. **Q1 spec-internal-consistency:** Q1's text edit extends §3 Inversion's "Identify a core assumption or belief related to the seed" to include piece-internal commitments. The existing depth-check refinement note already supports this; Q1.b is internally consistent. The existing "What it misses" caveat for Inversion ("binary — between-poles territory") still applies and is not affected by Q1.b. PASS.

### Emergent properties of the assembly

- **E1 — Five-piece refinement set is doc-only.** No runtime changes beyond `/innovate` reference edits. No new disciplines, runners, or files.

- **E2 — The set's enforcement mechanism is layered.** Q1 sets reading; Q2 sets determination; Q3 sets positive rule; Q4 sets failure-mode recognition; Q5 sets telemetry observability. A future Innovation run encountering a meta-decision piece will: (i) know expansive reading applies; (ii) apply determination; (iii) generate Inversion-candidate per Q3 OR record override; (iv) self-check via Q4's recognition signals; (v) emit telemetry per Q5. Layered enforcement is more robust than a single-rule check.

- **E3 — The Inversion-candidate-generation requirement is self-applying.** This Innovation run applied Inversion at piece-level for each of Q1-Q5 (per the args). The Inversion-candidates surfaced legitimate alternatives (Q1.Inversion preserved as RESEARCH FRONTIER; Q3.Inversion produced the override path; Q4.Inversion confirmed direction by falsifying Q4.c; Q5.Inversion confirmed filtering). The refinement-set, applied to its own generation, produced better candidates than would have emerged without piece-level Inversion. The self-application is concrete evidence that Q3's rule has practical force.

- **E4 — The override path internalizes legitimate exceptions.** Q3's "Inversion-marked-inapplicable" + Q5's `overridden` status preserve runner discretion for genuine exceptions while creating an audit trail. The friction (specific-reason requirement) prevents abuse.

- **E5 — The four-property meta-decision-piece criterion is operationally usable.** The Q2.b checklist is concrete (observable at piece-output time). The `12-15` case's P4.2 fires property (i) — relationship-label — directly; the criterion catches the motivating case.

- **E6 — Future-case testability.** The refinement-set is testable on cases beyond `12-15`. Any future `_branch.md` with a relationship-label declaration will exercise the criterion; any future innovation.md with a meta-decision piece will exercise Q3's rule. The set is not over-fit to one case.

### Axis coverage check

The decomposition's interface map surfaced four axes the assembly must cover. The committed candidate set's coverage:

- **(a) Definitional vs Rule vs Failure-mode vs Telemetry axis.** Q1 (definitional) + Q3 (rule) + Q4 (failure-mode) + Q5 (telemetry). All four cells populated. **PASS.**

- **(b) Meta-decision-piece-classification-fuzziness axis.** Q2 (common-case determinable + edge-case retrospective audit) + Q3 (rule applies on determined cases) + Q5 (override status preserved in telemetry). Three points covering common-case / edge-case / override-recorded. **PASS.**

- **(c) Downstream-discipline-usability axis.** Each piece is testable by Critique (verification criteria from decomposition + 5-test cycle here). Each piece is committable by future spec-edit work (drop-in refinement notes). Each piece is auditable by future Innovation runs (telemetry observability). **PASS.**

- **(d) Hidden-coupling-risk axis.** Three flagged risks (Q3 fuzziness, Q2 propagation, Q1 consistency); coherence check above resolves all three for the committed candidate set. **PASS.**

All four axes covered.

### Project-specific risk dimensions

- **Duplicate-derivable-state:** **LOW.** The refinement-set's content is new; it does not duplicate existing state. The override-path mechanism cross-references spec_governance.md's COULD-vs-MUST pattern (deliberate reuse, not duplication).

- **Operation-parsimony:** **STRONG.** Five doc-only refinement notes; no new disciplines, runners, files, or runtime mechanisms. Each refinement is a localized edit at an existing `/innovate` reference section.

- **Phase-fit:** **PASS.** At autonomy Level 0-1, the runner reviews FLAGs; at Level 2+, the FLAG can be auto-routed. The override path is L0-L1 appropriate (human reasoning); at higher autonomy, the override-reason-quality could itself be auditable. The refinement-set scales with autonomy phase.

- **Explicit-culture-fit:** **PASS.** The refinement-set follows project conventions: MUST + override path (cf. spec_governance.md COULD-vs-MUST), refinement-notes attached to existing sections (cf. existing depth-check refinement note), telemetry verdict structure preserved (PROCEED / FLAG / RE-RUN).

---

## Final Recommendation — Output Dispositions

### ACTIONABLE (ship as "Five-Piece Refinement Set to `/innovate` Reference")

- **Q1** — Definitional clarification at §3 Inversion (expansive reading committed).
- **Q2** — Determination mechanism (four-property checklist + retrospective-self-audit edge-case fallback).
- **Q3** — Piece-level Inversion rule at §"Phase 2 Generate" (MUST + override path + compliance criterion).
- **Q4** — Failure-mode prevention refinements at §3 Early Frame Lock (TYPE-aware) and §6 Survival Bias (never-generate).
- **Q5** — Telemetry extension at §"Mechanism Coverage (Telemetry)" (per-piece log + compliance status + FLAG/RE-RUN refinement).

### DEFERRED with revival trigger

- **Q1.Inversion (strict-reading reformulated at seed-level)** — preserved as alternative reading. **Gate:** observable — revive if 3+ future cases show Q1.b's expansive reading produces over-application without operational benefit.

- **Q3.a / Q3.c (generic / contrarian rule variants)** — preserved as alternatives. **Gate:** observable — revive if Q3.b's MUST framing produces unacceptable false positives in future cases.

- **Override-rate calibration** (per Q5.Inversion's suggestion) — observe over future cases how often `Inversion-marked-inapplicable` is invoked. **Gate:** observable — revive when 10+ Production-task-mode runs have completed; assess override rate; refine the telemetry FLAG calibration if needed.

### RESEARCH FRONTIER

- **Does the refinement-set generalize beyond the diagnostic's single case?** The prior gap-analysis at `2026-05-17_22-51` cataloged 19 pairs; only Pair #5 was the motivating case. Whether the refinement-set catches the failures in the other 18 pairs (especially T2 frame-reshape sub-types other than "wholesale rejection + redo") is a separate inquiry. Preserve in finding's Open Questions / Research Frontiers.

- **Composition with the prior gap-analysis's Gap-2 (T4 procedural-meta absence).** The prior finding named two gaps; this diagnostic addresses Gap-1 (refined). Whether Gap-2 (procedural-meta moves like REPAIR-not-ADD-TEST, contrarian-rethink directives) requires its own piece-level mechanism extension is a separate research direction. Preserve.

- **Self-reference of the refinement-set on future spec edits.** The refinement-set introduces new vocabulary (meta-decision piece, four properties, Inversion-marked-inapplicable). Per `12-45`'s named "lesson-introduces-its-own-trap" pattern, future Innovation runs that edit this refinement-set itself should be expected to encounter the same trap and self-apply the rule. Preserve as a methodological caveat.

### KILLED

None new in this innovation phase. Sensemaking already killed:
- A new top-level failure mode (resolved as refinements to existing modes).
- Within-artifact self-application as exclusively other-discipline territory (resolved as Innovation-via-Inversion route is real).
- Gap-1's "Lens Shifting expansion is the bottleneck" framing (resolved as Inversion-extension-to-meta-targets is the load-bearing piece).
- Other-discipline maintenance candidates (sensemaking / critique / decomposition / exploration refinements) — out of scope per user's framing.

---

## Mechanism Coverage (Telemetry)

- **Generators applied: 4/4.** Combination (cross-references across pieces); Absence Recognition (new rules for previously-unaddressed cases — meta-decision-piece criterion, never-generate Survival Bias variant, per-piece telemetry); Domain Transfer (override path borrowed from spec_governance.md's COULD-vs-MUST pattern); Extrapolation (future-case testability framing in E6, override-rate calibration trigger).
- **Framers applied: 3/3.** Lens Shifting (re-reading existing depth-check refinement under the expansive-reading frame in Q1.b); Constraint Manipulation (single-paragraph rule wordings in Q1.b, Q3.b, Q4.b, Q5.b); **Inversion applied at piece-level explicitly at Q1, Q2, Q3, Q4, Q5** (the load-bearing application; the args required this).

- **Per-piece mechanism log** (the new telemetry Q5.b proposes, applied to this Innovation run):
  - Q1: [Constraint Manipulation, Absence Recognition, Inversion] — meta-decision (lesson-vocabulary property: defines "expansive reading" vocabulary)
  - Q2: [Absence Recognition, Constraint Manipulation, Inversion] — meta-decision (lesson-vocabulary property: defines "meta-decision piece" criterion)
  - Q3: [Combination, Constraint Manipulation, Absence Recognition, Inversion] — meta-decision (evaluation-criterion property: defines compliance criterion)
  - Q4: [Combination, Constraint Manipulation, Inversion] — meta-decision (lesson-vocabulary property: defines failure-mode recognition signals)
  - Q5: [Combination, Absence Recognition, Inversion] — meta-decision (evaluation-criterion property: defines FLAG / RE-RUN routing)

- **Piece-level Inversion compliance** (applied to THIS Innovation run, per Q5.b's proposed telemetry):
  - Q1: satisfied (Inversion-candidate Q1.Inversion generated, tested, preserved as RESEARCH FRONTIER)
  - Q2: satisfied (Inversion-candidate Q2.Inversion generated, tested, refined Q2.b with retrospective-self-audit fallback)
  - Q3: satisfied (Inversion-candidate Q3.Inversion generated, tested, contributed override path to committed text)
  - Q4: satisfied (Inversion-candidate Q4.Inversion generated, tested, confirmed direction by falsifying Q4.c)
  - Q5: satisfied (Inversion-candidate Q5.Inversion generated, tested, confirmed filtering structure)

- **Convergence:** YES — three independent mechanisms (Combination, Constraint Manipulation, Absence Recognition) converged on the rule structure of Q3 (the load-bearing piece); Inversion produced the load-bearing override path. The five-piece set composes coherently per the assembly check.

- **Survivors tested:** all 5 ACTIONABLE candidates passed the 5-test cycle. 3 alternative variants preserved as DEFERRED. 3 research questions preserved as RESEARCH FRONTIER.

- **Failure modes observed:** None.
  - Premature evaluation: avoided (mechanisms applied before testing per spec; each variant produced before disposition).
  - Single-mechanism trap: avoided (4G + 3F applied across the set; each piece used 2-4 mechanisms).
  - Early frame lock: avoided (per-piece Inversion-candidates generated explicitly per args; Q1.Inversion, Q3.Inversion, Q4.Inversion, Q5.Inversion all preserved or refined the committed text).
  - Innovation without grounding: avoided (5-test cycle applied to every variant; assembly check + axis coverage check + project-specific risk dimensions all run).
  - Mechanism exhaustion: not encountered.
  - Survival bias: not observed — uncomfortable items (Q1.Inversion as alternative reading; Q3.c soft-rule contrarian; Q5.c no-telemetry-extension contrarian) all survived testing as DEFERRED or RESEARCH FRONTIER, not killed by comfort.

- **Self-reference note (per args):** this Innovation generated spec-edit candidates for `/innovate` reference. The candidate-set was applied to its own generation (per-piece Inversion at each of Q1-Q5). The recursive self-application produced legitimate alternatives at each piece, not empty ritual compliance. External grounding sources used: `12-15`/`12-45` artifact contrast (motivating case + corrected case); canonical `/innovate` reference (criterion); decomposition's three hidden-coupling-risk flags (testable conditions on the candidate set).

---

## **Overall: PROCEED.**

Downstream (`/td-critique`) should treat "Five-Piece Refinement Set to `/innovate` Reference" as the primary candidate set. Critique's adversarial-test focal points (per decomposition's notes for downstream disciplines):

- Is Q3's compliance criterion operationally clear at artifact level, or covertly fuzzy?
- Does Q2's determination procedure produce stable classifications across cases, or does the edge-case retrospective-self-audit fallback produce drift?
- Does Q1's text edit preserve §3 Inversion's existing internal consistency?
- False-positive risk on Q3's MUST rule: does it fire on cases where REFINES is genuinely correct without inversion-candidate needed (legitimate single-direction cases)?
- False-positive risk on Q4's recognition signals: does it over-flag cases with legitimate single-direction candidate sets?
- Self-reference robustness: does the refinement-set, applied to a future spec edit OF the refinement-set itself, produce coherent or contradictory outcomes?

The 3 DEFERRED items have explicit revival triggers. The 3 RESEARCH FRONTIER items are preserved for the finding's Open Questions section. No new KILLs surfaced.
