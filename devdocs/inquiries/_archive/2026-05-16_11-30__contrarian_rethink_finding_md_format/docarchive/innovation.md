# Innovation: Contrarian Rethink — finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Input: decomposition.md (4 pieces; dep order P2 → P1 → P3 → P4) + sensemaking.md (6 CONFIRMS + 1 REFINES) + exploration.md (8 contrarian designs + per-commit inversions). Mode: elaboration; Framer-weighted (continued from prior phases). Apply Constraint-Manipulation to P2 + Combination to P3 + Lens-Shifting to P4 + light Inversion on the meta-question of contrarian re-run utility.

---

## Seed and Direction

**Seed:** Sensemaking committed honest verdict (6 CONFIRMS + 1 REFINES); Decomposition partitioned into 4 pieces. Innovation produces concrete per-piece content. The load-bearing piece is P1 (Inherited Commitments Re-test) per CONCLUDE's enforcement. P2 (diff-based refinement spec) is the only new structural content; small but critical.

**Direction (intuition):** The honest verdict is REFINES, not SUPERSEDES. The user asked for contrarian rethink and that produced an honest validation of the prior with one adopted refinement. Resist forcing more refinements than the evidence supports.

---

## P2 — Diff-based Edit-Spec Refinement (Design C content)

**Constraint Manipulation:** "the diff-based form must be `git apply`-validatable." This constraint surfaces the metadata requirements: target_path must be exact; line numbers must match the file's current state; `@@` markers must be valid unified-diff format.

### Markdown rendering pattern

```markdown
#### Edit [N] — [short label]

**Target:** `target_path` — `target_anchor` (optional)
**Operation:** REPLACE | ADD | DELETE | RESTRUCTURE
**Rationale:** [one-line WHY]
**Reversibility:** [one-line how to undo]

```diff
@@ -<old_line>,<old_count> +<new_line>,<new_count> @@ optional section anchor
- removed line 1
- removed line 2
+ added line 1
+ added line 2
+ added line 3
```
```

### Metadata schema (surrounding the diff block)

| Field | Required | Notes |
|---|---|---|
| `target_path` | always | Exact file path from repo root (e.g., `cognitive_harness/innovate/references/innovate.md`) |
| `target_anchor` | optional | Section heading or descriptive label (the `@@` line in diff usually carries line numbers; this adds human-readable context) |
| `operation` | always | REPLACE / ADD / DELETE / RESTRUCTURE — matches the diff's predominant operation |
| `rationale` | always | One-line WHY |
| `reversibility` | always | One-line how to undo (typically: `git revert <commit>` or "reverse the diff") |

### When to use diff-based vs field-based decision table

| Edit profile | Recommended form | Why |
|---|---|---|
| **Line-level text edit; known line numbers; <50 lines changed** | DIFF-BASED | `git apply`-validatable; precise; familiar to developers |
| **Add-new-file** | FIELD-BASED | No "before" to diff against; field-based handles cleanly |
| **Restructure entire section / multi-paragraph rewrite** | FIELD-BASED (or diff with full block replacement) | Diff format becomes noisy for large blocks; field-based with `current_text` / `new_text` blocks reads better |
| **Cross-file edit with identical content across N files** | FIELD-BASED (with `target_paths:` list) | One sub-form covers all; diff would require N separate blocks |
| **Procedure-step edit (sequence modification)** | FIELD-BASED (with `sequence_position:` extension) | Diff doesn't capture procedural sequence semantics |
| **Frontmatter edit** | FIELD-BASED (with `yaml_key:` extension) | YAML key-value editing is more natural in field form |
| **Unknown line numbers (mid-design)** | FIELD-BASED | Diff requires precise line numbers; field-based allows section-heading anchor |

### Example diff-based block (fully filled)

```markdown
#### Edit 1 — Add scope-fidelity caveat to Combination mechanism

**Target:** `cognitive_harness/innovate/references/innovate.md` — §2.2 "What's already nearby"
**Operation:** REPLACE
**Rationale:** Removes "(conversation, project, problem space)" enumeration that biases the mechanism toward project-specific sources; adds scope-fidelity conditional.
**Reversibility:** `git revert <commit>` or restore the original parenthetical and delete the new caveat paragraph.

```diff
@@ -126,3 +126,9 @@ §2.2 Combination — "What's already nearby"
-What's already nearby — concepts in the current context (conversation, project, problem space) that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work.
+What's already nearby — concepts in the current context that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work.
+
+Scope-fidelity caveat. When the inquiry's framing claims generic scope (e.g., "applies to a class of cases"), treat the current context as ONE inspiration anchor among many — do not let it become the scope-defining source.
```
```

### Coexistence rules

Both diff-based and field-based forms are PERMITTED within the same Spec-modification finding. The structural-check passes either form per edit. Authors pick the more natural form for each edit individually — a single finding may use diff-based for some edits and field-based for others (e.g., field-based for an add-new-file edit + diff-based for a section-rewrite edit).

The prior's P3 field-based sub-form REMAINS the default; the diff-based form is an alternate authors may choose when the edit profile fits.

### 5-test cycle on P2

- **Novelty:** Domain-Transfer from unified-diff format applied to finding edits. The pattern is widely-known; novel in being adopted as a finding-level alternative.
- **Scrutiny:** Strongest objection — "diff format requires exact line numbers at design time; authors don't always know." Defense: the decision table explicitly says "Unknown line numbers → use field-based." Both forms coexist; authors choose. Survives.
- **Fertility:** Enables `git apply`-validation tooling; lowers friction for spec-modification findings that capture line-level edits.
- **Actionability:** Yes — copy-pasteable markdown pattern + decision table + example.
- **Mechanism independence:** Domain-Transfer (unified-diff) + Constraint-Manipulation (git-apply-validatable) + Lens-Shifting (when diff vs field-based) all converge.

**Disposition: ACTIONABLE.**

---

## P1 — Inherited Commitments Re-test

Per-commit verdict for each of the prior's 8 commitments (C1-C8). Format: prior's commitment / verdict / evidence / refinement-pointer (if applicable).

### C1 — Hybrid base+typed-variants architecture

**Prior's commitment:** Universal base (frontmatter + 5 universal sections + conditional sections) + 4 typed Finding-body variants (Decision / Spec-modification / Recommendation / Loop-diagnose).

**Verdict: CONFIRMS.**

**Evidence:**
- **Empirical refutation of contrarian alternative B (Convention-by-Example):** the corpus's 96% concrete-edit-form failure rate IS the convention-by-example outcome at the canonical template's documentation-layer rules. If convention-by-example worked, compliance would be higher. Empirically disproven.
- **Empirical refutation of contrarian alternative G (ADR-minimalism):** the corpus's 22+ non-canonical sections invented per content-type shows ADR's 4-section template underfits the variety. Loop-diagnose / Spec-modification / Recommendation findings need MORE structure than ADR provides.
- **Substrate-honest:** the universal base + typed variants are markdown-renderable and CONCLUDE-compile-time enforceable. No aspirational tooling required.

### C2 — 4-type taxonomy (Decision / Spec-modification / Recommendation / Loop-diagnose)

**Prior's commitment:** Consolidated from 8 candidates via pairwise coupling; corpus check passed 5/5 sampled findings.

**Verdict: CONFIRMS.**

**Evidence:**
- **Corpus check:** 5 representative findings (one per source domain) each fit one type cleanly (per prior's Innovation phase test).
- **Refutation of G (0 types or "fewer types"):** as above, ADR's 4-section single template underfits variety.
- **Refutation of "more types" (8+ from prior exploration):** pairwise coupling collapse showed strategic-decision + definitional + question-design merge cleanly; spec-rewrite + spec-edit-REPAIR merge into spec-modification. 4 is the structurally-supported grain.

### C3 — Composable Edit-Specification sub-form

**Prior's commitment:** 7 required base fields (target_path / target_anchor / operation / current_text / new_text / rationale / reversibility) + 4 optional type-specific extensions (yaml_key / sequence_position / precondition / target_paths). REQUIRED for Spec-modification; REQUIRED for Loop-diagnose Maintenance Candidates; OPTIONAL elsewhere.

**Verdict: REFINES.**

**Evidence:**
- The prior's sub-form is correct on the principle (structural enforcement of "what exactly to change").
- Contrarian Design C (diff-based) is a strict additional capability — `git apply`-validatable; familiar; lower friction for line-level edits with known line numbers.
- The refinement: **add the diff-based form as an alternate**, coexisting with field-based. Both forms permitted within Spec-modification type; authors pick per edit profile (see P2's decision table).

**Refinement content:** See P2 for the full diff-based spec.

**Why not CORRECTS:** field-based is still required for add-new-file, restructure, multi-file-identical, frontmatter, procedure-step, and unknown-line-number edits. Diff-based ADDS, doesn't REPLACE.

### C4 — Materialization carve-out

**Prior's commitment:** Materialization-record artifacts are OUT-of-scope; separate artifact per the 2026-04-28 prior finding (`materialization_record.md` for Compact; separate `desc.md` / `step_by_step_impl_plan.md` / `critic.md` / `materialization_trace.md` for Standard/Full).

**Verdict: CONFIRMS.**

**Evidence:**
- Contrarian inversion: "materialization-record IS finding.md — merge them." This re-litigates the 2026-04-28 prior, which had explicit reasoning: theory (finding) and implementation (materialization-record) live at different layers; merging destroys plan-vs-actual learning.
- The 2026-04-28 prior's arguments stand: separating finding from materialization-record preserves the delta between expected and actual that retrospective diagnosis needs.
- Substrate-honest: keeping artifacts separate is markdown-natural and doesn't require new infrastructure.

### C5 — Four strengthened style rules

**Prior's commitment:** Concrete-edit-form / Anchored-cross-reference / Verb-specificity / Scope-specificity, plus preservation of canonical rules (hedging-specificity / gate-specificity / one-decision-per-paragraph / plain-language-first).

**Verdict: CONFIRMS.**

**Evidence:**
- **Empirical refutation of "0 rules" inversion:** the corpus's 96% concrete-edit-form failure rate IS what happens with documentation-only rules (canonical's existing 4 style rules). Removing rules increases failure rate, doesn't decrease.
- **Refutation of "20+ rules" inversion:** rule fatigue + copy-paste compliance. Already killed in prior's Innovation phase via Survival-Bias check.
- 4 new rules + 4 preserved canonical = 8 rules total. Manageable; each rule has positive + negative examples + edge cases captured.

### C6 — Frontmatter extension

**Prior's commitment:** Required `status` + `template_version` + `type` keys; recommended `model` + `effort`; conditional `refines` / `supersedes` / `corrects` / `diagnoses`; optional `related` / `continues_from` / `compares_with` / `verdict`.

**Verdict: CONFIRMS.**

**Evidence:**
- **Refutation of contrarian Design H (title-prefix type discrimination):** Design H replaces frontmatter `type:` with title-prefix (`# Finding: Decide [X]`). This adds CONCLUDE parsing complexity (regex on title) WITHOUT saving frontmatter complexity (other keys still needed). Net: more complexity, not less.
- **Refutation of "minimal frontmatter (status only)":** loses metadata that the corpus already adopted bottom-up (`related:` 32/50 corpus findings; `diagnoses:` 4/50; `verdict:` 2/50). The prior's extension formalizes observed patterns.
- Substrate-honest: YAML frontmatter is a well-established convention.

### C7 — Future-only migration

**Prior's commitment:** Existing 50 findings stay as historical record (`template_version` absent = v1); new template applies from the procedure-update inquiry forward.

**Verdict: CONFIRMS.**

**Evidence:**
- **Refutation of "retroactive migration" inversion:** cost of re-authoring 50 findings (~50 mini-inquiries) exceeds the consistency value. Audit-trail value of as-authored preservation is high.
- **Refutation of "no new template" inversion:** keeping canonical preserves the 96% failure rate. Status quo doesn't address user's named complaints.
- Substrate-honest: future-only migration is a documentation policy + backward-compat note. No new tooling required.

### C8 — Markdown is the right medium

**Prior's commitment:** finding.md is markdown; not YAML-only, not knowledge-graph, not database.

**Verdict: CONFIRMS.**

**Evidence:**
- **Refutation of Design E (frontmatter-only):** prose reasoning gets cramped; project's calibration is mixed human/LLM reading; YAML-only doesn't serve human readers well.
- **Refutation of Design F (knowledge graph):** substrate-honest fail. Project has no graph infrastructure (no JSON-LD store, no SPARQL endpoint, no graph database). Adopting graph format requires major infrastructure investment that doesn't fit current calibration.
- **Refutation of Design D (MD+YAML companion):** doubles maintenance; risk of drift between MD and YAML; doesn't address user's named failure classes.
- Substrate-honest: markdown is the project's native format; LLMs author markdown naturally.

### Aggregation

| Commitment | Verdict |
|---|---|
| C1 Hybrid base+typed-variants | CONFIRMS |
| C2 4-type taxonomy | CONFIRMS |
| C3 Edit-Spec sub-form | **REFINES** (add diff-based alternate; see P2) |
| C4 Materialization carve-out | CONFIRMS |
| C5 4 strengthened style rules | CONFIRMS |
| C6 Frontmatter extension | CONFIRMS |
| C7 Future-only migration | CONFIRMS |
| C8 Markdown medium | CONFIRMS |

**Totals: 6 CONFIRMS + 1 REFINES + 0 CORRECTS + 0 SUPERSEDED.**

### 5-test cycle on P1

- **Novelty:** the per-commit re-test with EVIDENCE per verdict is the load-bearing innovation; not novel as a pattern (CONCLUDE requires it) but novel in being rigorously evidence-based.
- **Scrutiny:** strongest objection — "6 CONFIRMS is too many; contrarian re-run should overturn more." Defense: per-commit verdicts use observable evidence (corpus rates + cross-domain + substrate-honesty); the rate of CONFIRMS is the rate the evidence supports, not the rate prescribed by the contrarian framing.
- **Fertility:** sets up Critique to formalize verdicts; sets up CONCLUDE compilation.
- **Actionability:** yes — per-commit verdicts are clear; refinement is pointer to P2.
- **Mechanism independence:** evidence-based verdicts independent of inversion mechanism — emerge from the corpus data regardless.

**Disposition: ACTIONABLE.**

---

## P3 — Contrarian-designs Disposition + Recommendation

**Combination mechanism:** combining per-commit verdicts + per-design disposition + recommendation into one user-facing packet.

### Per-design disposition table

| Design | Verdict | Evidence |
|---|---|---|
| **A Minimalist canonical-plus-rules** | REJECTED | Drops the sub-form; doesn't address F2 (missing exact-line edits) without it. Internal inconsistency with the user's stated #1 failure class. |
| **B Convention-by-Example** | **EMPIRICALLY REFUTED** | Corpus's 96% concrete-edit-form failure rate IS the convention-by-example outcome at canonical (documentation-only) rules. If B worked, the rate would be lower. |
| **C Diff-based edit-spec** | **REFINES-ADOPTED** | Strict capability addition. Compatible with prior's architecture. Coexists with field-based sub-form. See P2 for specification. |
| **D MD+YAML companion** | REJECTED | Doubles maintenance; risk of MD-vs-YAML drift; doesn't address user's named failure classes. |
| **E Frontmatter-only (YAML)** | DEFERRED-FUTURE-PHASE | Substrate-honest fail at current calibration (mixed human/LLM reading); could revive if LLM-only consumption + machine-queryability becomes the dominant pattern. See P4 for Refinement Trigger. |
| **F Knowledge graph** | DEFERRED-FUTURE-PHASE (most radical) | Substrate-honest fail (no graph infrastructure). Could revive if project adopts graph/triple-store backend or corpus exceeds ~500 findings with cross-finding-query needs. See P4 for Refinement Trigger. |
| **G ADR-style single template** | **EMPIRICALLY REFUTED** | Corpus's 22+ non-canonical sections per content-type proves ADR's 4-section template underfits variety. Loop-diagnose + Spec-modification + Recommendation findings need more structure than ADR provides. |
| **H Title-prefix type discrimination** | REJECTED | Adds CONCLUDE parsing complexity (regex on title) WITHOUT saving frontmatter complexity (other keys still needed). Net: more complexity. |

### Ranked recommendation

**Primary (recommended):**

> **Adopt the prior's design with one refinement: Design C (diff-based edit-spec) as an alternate format to the prior's field-based sub-form.** Both forms permitted within Spec-modification type; authors pick per edit profile (decision table in P2).
>
> All other 7 prior commitments (C1, C2, C4, C5, C6, C7, C8) stand unchanged.

**Alternate (future-phase):**

> If the project's calibration shifts to **LLM-only consumption** or **>500 findings with machine-queryability needs**, revisit Designs E (frontmatter-only YAML) and F (knowledge graph). Currently substrate-honest fail; refinement triggers documented in P4.

**Pre-filtered (rejected after contrarian test):**

> Designs A, B, D, G, H — each fails on a specific structural or empirical ground (see Per-design disposition table).

### Honest framing

The user asked for a contrarian rethink in weighted-Innovation way. The honest verdict is:

> The contrarian re-run **largely validates the prior**. Of 8 contrarian designs surfaced via Framer-weighted exploration (16 inversions + 4 Lens-Shift conditions + 5 Constraint-Manipulation outcomes + 5 Domain-Transfer signals + 3 Absence-Recognition findings), **only one** produces a genuine refinement (Design C, diff-based edit-spec as alternate format). The other 7 are empirically refuted or substrate-honest-failed at current calibration.
>
> The verdict is **not** forced confirmation of the prior. It emerges from observable evidence: the corpus's 96% concrete-edit-form failure rate empirically refutes Convention-by-Example (Design B); the corpus's 22+ non-canonical sections empirically refute ADR-minimalism (Design G); substrate-honesty refutes the radical-medium designs (D/E/F at current calibration).
>
> The contrarian re-run is itself **valuable evidence**: the prior's design survives a rigorous adversarial test where 8 alternatives were surfaced via Framer-weighted Innovation and 7 fell to evidence. This strengthens confidence in the prior more than a single-pass design would.

### 5-test cycle on P3

- **Novelty:** disposition table format combining per-design verdict + evidence; recommendation pattern adapted from the prior's Recommendation-variant Finding-body.
- **Scrutiny:** strongest objection — "is the contrarian re-run worth the effort if it just confirms the prior?" Defense: validating evidence has value; the re-run adversarially tested designs the prior didn't reach (knowledge-graph, ADR, Convention-by-Example), strengthening confidence. Net positive.
- **Fertility:** the disposition table + Refinement Triggers preserve the contrarian designs for future reconsideration if calibration shifts.
- **Actionability:** yes — user reads disposition + recommendation + decides.
- **Mechanism independence:** Combination + Lens-Shifting + Inversion (light) all support the recommendation.

**Disposition: ACTIONABLE.**

---

## P4 — Adjacent Observations

**Lens-Shifting mechanism:** the Refinement Triggers are conditional under future-phase calibrations.

### Lens-Shifting condition-table inheritance

The prior committed under CURRENT calibration: 50 findings, mixed human/LLM reading, current-phase substrate. Lens-Shifting in this contrarian inquiry's exploration revealed conditional-correctness:

| Condition | Effect on design |
|---|---|
| Project has 500 findings (not 50) | Prior commitments strengthen; typed variants help routing; sub-form enables cross-finding extraction. **Prior + Design C remains correct.** |
| Project has 5 findings (not 50) | Prior is over-engineered for early-stage. Design G (ADR-minimalism) might fit. **Not current state.** |
| Findings consumed by another LLM (not a human) | Design SHIFTS toward more structure. Frontmatter-only (E) becomes more viable. **Not current state.** |
| Findings need to be machine-queryable | Design SHIFTS toward graph/database (F). **Not current state.** |

**The prior + Design C refinement is correct for CURRENT calibration.** Future-phase pivots are deferred as Refinement Triggers below.

### Future-phase pivots as Refinement Triggers

**RT-1 — Revive Design E (frontmatter-only YAML):**
- **Trigger:** condition-bound — observable LLM-only consumption pattern (>80% of finding-reads are by agent tools, not humans) AND machine-queryability becomes a load-bearing project need.
- **Why if revived:** YAML-only would maximize machine-parseability; the human-readability cost becomes acceptable when humans aren't the primary readers.

**RT-2 — Revive Design F (knowledge graph):**
- **Trigger:** condition-bound — project adopts a graph/triple-store backend OR corpus exceeds ~500 findings with cross-finding-query needs becoming load-bearing.
- **Why if revived:** Graph queries enable cross-finding analysis (e.g., extract all CORRECTS relationships; find all findings citing a particular file). Justified once corpus scale + tooling supports it.

**RT-3 — Revive Designs A or G (minimalist):**
- **Trigger:** condition-bound — if corpus shows under-utilization of typed variants (e.g., >90% of findings are Decision type) OR author-cognitive-load becomes a documented friction.
- **Why if revived:** simplicity wins when variety is observed lower than the typed taxonomy provides.

### Cross-references

- Prior finding: `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md` (the design being contrarianly re-tested; 6 CONFIRMS + 1 REFINES verdict)
- Materialization carve-out source: `devdocs/inquiries/2026-04-28_14-13__materialization_trace_record_location/finding.md`
- Corpus base: 50 findings under `devdocs/inquiries/*/finding.md`
- Cross-domain analogs referenced in contrarian exploration: ADR (Architecture Decision Record); Conventional Commits (title-prefix discrimination); IETF RFC; OpenAPI / JSON Schema; unified-diff format; PR template

### Self-applicability note

THIS finding's own type-assignment under the prior's taxonomy is **`type: spec-modification`** because:
- It proposes one concrete edit to the prior's design (adopt Design C as alternate format for the Edit-Spec sub-form).
- The edit is the Per-edit spec in P2's content.
- The Per-edit spec uses BOTH allowed forms (field-based metadata + diff-based fenced block) per coexistence rules.

This self-application validates the prior's typed-variant approach — this contrarian finding fits Spec-modification cleanly.

**Inversion mechanism (light) on the meta-question:** Is the contrarian re-run itself useful?
- Inversion: "Would running 3 more contrarian re-runs improve the verdict further?" Answer: no — diminishing returns. Once an honest test produces 6 CONFIRMS + 1 REFINES, more tests confirm the same baseline. The contrarian re-run is one-shot value: validates by rigorous adversarial test, then stops.
- Verdict: contrarian re-run is useful for HIGH-stakes commits (the prior's design IS high-stakes — affects all future findings); not useful for repeat runs.

### 5-test cycle on P4

- **Novelty:** Lens-Shifting condition-table is novel as inheritance from prior phase + explicit Refinement Triggers.
- **Scrutiny:** "what if the future-phase triggers never fire?" Defense: that's OK; they're conditional. The current design works for current state.
- **Fertility:** preserves the contrarian designs for future reconsideration; aids long-term project evolution.
- **Actionability:** yes — Refinement Triggers + cross-refs + self-application note are user-readable.
- **Mechanism independence:** Lens-Shifting + Inversion (meta-question) + Combination (cross-refs).

**Disposition: ACTIONABLE.**

---

## Assembly Check

The 4 pieces compose into a REFINES-type finding:

1. **P1 Inherited Commitments Re-test** is the LOAD-BEARING piece per CONCLUDE's enforcement.
2. **P2 Diff-based refinement** is the ONE adopted structural change.
3. **P3 Disposition + Recommendation** documents which 7 contrarians fell and why.
4. **P4 Adjacent observations** preserves future-phase optionality.

The pieces compose without contradiction. The finding's relationship to prior is **REFINES** (frontmatter `refines: devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md`).

**Emergent property:** the contrarian re-run produces evidence that the prior's design is well-grounded. This is meta-evidence — the prior surviving rigorous adversarial test is itself information.

### Self-applicability

This contrarian finding self-applies cleanly to the prior's taxonomy:
- `type: spec-modification` (proposes a refinement edit to the prior's sub-form spec)
- Uses field-based sub-form for the diff-based-format spec (the metadata about the new alternate)
- Uses diff-based form would be circular here — better to spec the alternate using field-based since the alternate doesn't yet exist

### Axis Coverage Check

| Axis | Coverage |
|---|---|
| Per-commit verdicts | P1 covers all 8 |
| Refinement content | P2 covers diff-based |
| Per-design dispositions | P3 covers all 8 |
| Honest framing | P3 + P4 |
| Future-phase preservation | P4 Refinement Triggers |
| Cross-refs + Lens-Shifting inheritance | P4 |

All axes covered.

---

## Mechanism Coverage (Telemetry)

| Mechanism | Applied to | Output |
|---|---|---|
| **Constraint Manipulation** (F) | P2 | `git apply`-validatable constraint surfaces metadata + decision-table |
| **Combination** (G) | P3 | Per-commit verdicts + per-design dispositions + recommendation → packet |
| **Lens Shifting** (F) | P4 | Refinement Triggers conditional on future-phase calibrations |
| **Inversion** (F, light) | P4 (meta) | "Would more re-runs improve verdict?" → diminishing returns; one-shot value |
| Domain Transfer (G) | P2 (inherited from exploration) | Unified-diff format applied as alternate edit-spec form |
| Absence Recognition (G) | (light, from exploration) | Convention-by-Example surfaced and refuted |
| Extrapolation (G) | (n/a directly; light in P4 Refinement Triggers) | — |

**Generators applied:** 2/4 directly (Combination + Domain-Transfer-inherited) + Absence-Recognition-inherited ✓
**Framers applied:** 3/3 (Constraint-Manipulation + Lens-Shifting + Inversion) ✓

Continued Framer-weighting per user directive. Generators present for completeness; Framers carry the load.

**Convergence:** STRONG. Per-commit verdicts converge on 6 CONFIRMS + 1 REFINES. The contrarian re-run's evidence base (empirical refutation + substrate-honesty + corpus rates) is independent of conversation history.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Evaluation | ✗ avoided — each piece tested via 5-test cycle |
| 2. Single-Mechanism Trap | ✗ avoided — 2G + 3F applied directly + 2 inherited from exploration |
| 3. Early Frame Lock | ✗ avoided — 8 contrarian designs evaluated individually; not collapsed early |
| 4. Innovation Without Grounding | ✗ avoided — corpus rates + cross-domain + substrate per verdict |
| 5. Mechanism Exhaustion | ✗ avoided — Framer-weighted as user directed; Generators light |
| 6. Survival Bias | ✗ avoided — honest verdict (REFINES not forced SUPERSEDES); status-quo bias tested both directions |

### Self-Assessment

**PROCEED.** 4 pieces with concrete content; P2 diff-based spec is ship-ready; P1 per-commit verdicts use observable evidence per verdict; P3 honest disposition + recommendation; P4 Refinement Triggers preserve future-phase optionality. Convergence STRONG on 6 CONFIRMS + 1 REFINES. The contrarian re-run's verdict is honest, evidence-grounded, and emerges from rigorous adversarial test of 8 alternatives. Ready for Critique to formalize verdicts.
