---
status: active
model: claude-opus-4-7[1m]
effort: high
refines: devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md
---
# Finding: Contrarian Rethink — finding.md Format Redesign

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md`

**Revision trigger.** User-directed contrarian re-evaluation: *"read this... now look it from contraversial angle, and differnt way / rethink the same question but in weighted innovation way."* The prior committed a hybrid base+typed-variants + 4-type taxonomy + composable Edit-Specification sub-form + materialization carve-out + 4 strengthened style rules + frontmatter extension + future-only migration + markdown medium. This contrarian inquiry deliberately re-tested those 8 commitments using Framer-weighted Innovation (Inversion + Lens-Shifting + Constraint-Manipulation weighted above Generators).

**What's preserved.** 7 of the prior's 8 commitments (C1, C2, C4, C5, C6, C7, C8) survive contrarian challenge unchanged. Per-commit verdicts are evidence-grounded — corpus statistics, cross-domain analogs, substrate-honesty checks — not preference-based.

**What's changed.** One commitment (C3 — Edit-Specification sub-form) is **refined** with a diff-based edit-spec alternate format as a coexisting form alongside the prior's field-based sub-form. Authors pick per edit profile (decision table in §3).

**What's new.** This finding adds Design C (diff-based edit-spec) as the second permitted form for spec-edit content within Spec-modification findings. It also adds three Refinement Triggers (RT-1, RT-2, RT-3) preserving future-phase pivots if calibration shifts.

**Migration.** Apply the Design C diff-based form addition as a refinement to the prior's P3 sub-form specification. Both forms (field-based AND diff-based) are valid; structural-check accepts either. The prior's other 7 commits stand without modification. The follow-up CONCLUDE-procedure-update inquiry (brief in prior's Next Actions § MUST) now needs to handle both forms in its structural-check rules.

## Question

The user asked: take the prior `2026-05-16_10-50__finding_md_format_redesign` finding's design and rethink it from a controversial angle, in a different way, using a weighted-Innovation approach. The implicit goal: HONEST adversarial test of the prior — its 8 committed structural choices should each be re-tested under contrarian framings. The deliverable depends on the evidence: the new finding can CONFIRM the prior (contrarian test fails to find a winner), REFINE it (some contrarian alternative produces a genuine improvement), CORRECT it (a contrarian alternative beats the prior on a dimension), or SUPERSEDE it entirely (a contrarian replaces the prior wholesale).

The framing was set at the **structural** layer — same as the prior. The user's "controversial angle" + "weighted innovation way" prompt asked for Innovation mechanism weighting toward Framers (Lens-Shifting, Constraint-Manipulation, Inversion) over Generators, and an honest contrarian re-test rather than rubber-stamp validation.

## Finding Summary

- **The contrarian re-run largely validates the prior.** Per-commit verdicts on the prior's 8 commitments (C1 hybrid base+typed-variants / C2 4-type taxonomy / C3 Edit-Spec sub-form / C4 materialization carve-out / C5 strengthened style rules / C6 frontmatter extension / C7 future-only migration / C8 markdown medium) come out at **6 CONFIRMS + 1 REFINES + 0 CORRECTS + 0 SUPERSEDED**. The relationship between this finding and the prior is REFINES — not CONFIRMS (because there IS a real refinement), not CORRECTS/SUPERSEDED (because no contrarian beats the prior on a load-bearing dimension).

- **The one refinement is on C3 (Edit-Specification sub-form): add a diff-based edit-spec form as a coexisting alternative.** The prior's field-based sub-form (target_path / target_anchor / operation / current_text / new_text / rationale / reversibility) remains the default. The new diff-based form uses unified-diff inside a fenced code-block, surrounded by metadata (target_path / target_anchor / operation / rationale / reversibility). Authors pick the more natural form per edit profile — diff-based for line-level text edits with known line numbers; field-based for add-new-file, restructure, multi-file-identical, frontmatter, procedure-step, and unknown-line-number edits. Full specification in §3 below.

- **Design B (Convention-by-Example) is empirically refuted as a REPLACEMENT for the prior's structural-enforcement principle.** The corpus's 96% concrete-edit-form failure rate emerged under documented-rules-without-structural-enforcement (the canonical state). Pure convention-by-example would not be expected to improve compliance because the binding constraint is author preference for prose, not absence of rules. Structural enforcement is the documented intervention. The underlying intuition of B (exemplar-led emulation) is not wrong as a principle — it's insufficient ALONE to address the corpus's failure modes.

- **Design G (ADR-style single template) is empirically refuted as a REPLACEMENT for the prior's typed-variants approach.** The corpus's 22+ non-canonical sections invented per content-type prove that authors needed MORE structure than ADR's 4-section template provides. Strict ADR underfits; ADR-with-extensions converges structurally toward the prior. The underlying intuition of G (minimalism) is not wrong as a principle — it's insufficient ALONE for a corpus with diverse content shapes.

- **Designs E (frontmatter-only YAML) and F (knowledge graph) substrate-honest fail at current calibration.** Project lacks graph infrastructure; mixed human/LLM reading workflow doesn't fit YAML-only artifacts. Both designs are PRESERVED as future-phase pivots — Refinement Triggers RT-1 and RT-2 document the conditions under which they revive (LLM-only consumption pattern; >500 findings with machine-queryability needs; graph backend adoption).

- **Designs A (minimalist canonical-plus-rules), D (MD+YAML companion), and H (title-prefix type discrimination) are rejected on internal-consistency or net-complexity grounds.** A drops the sub-form (doesn't address F2 from the prior); D doubles maintenance with drift risk; H adds CONCLUDE parsing complexity without saving frontmatter complexity. None beats the prior on a load-bearing dimension.

- **Status Quo Bias tested in both directions.** Direction 1 (defending prior because produced recently in the same conversation) mitigated by per-commit observable-evidence-based verdicts — reversibility test confirms a fresh agent would reach the same verdicts from the same corpus data. Direction 2 (forcing overturning because user said "controversial") mitigated by honest evidence-grounding — if evidence said SUPERSEDED, the verdict would be SUPERSEDED. Evidence says REFINES.

- **The contrarian re-run produces meta-evidence that the prior's design is well-grounded.** 8 contrarian designs surfaced via Framer-weighted exploration (16 inversions + 4 Lens-Shifting conditions + 5 Constraint-Manipulation outcomes + 5 Domain-Transfer signals + 3 Absence-Recognition findings). 7 fall to observable evidence; 1 produces a refinement. This is stronger validation than a single-pass design would provide.

## Finding

The user's question — "look at it from controversial angle, in a different way, rethink the same question but in weighted innovation way" — sets up a deliberate adversarial re-test of an inquiry just completed. The risk for this kind of re-run is **two-way bias**: the agent defending the prior because conversational continuity creates emotional investment, OR the agent forcing overturning because the user said "controversial" and a contrarian-themed inquiry seems to demand contrarian-themed outcome.

The honest method against both biases is **per-commit verdicts grounded in observable evidence**. Each of the prior's 8 commitments gets evaluated against contrarian alternatives surfaced via Framer-weighted Innovation; each verdict cites corpus statistics, cross-domain analogs, or substrate-honesty checks. The resulting verdicts emerge from observable evidence regardless of conversation history; a different agent re-running this fresh would arrive at the same results.

### 1. The eight contrarian designs and their dispositions

Framer-weighted Innovation in this inquiry's exploration phase surfaced 8 named contrarian designs by inverting each of the prior's 8 commitments and applying Lens-Shifting + Constraint-Manipulation. Each design's verdict, with evidence:

**Design A — Minimalist canonical-plus-rules.** Keep canonical 5 universal sections + add 4 strengthened style rules; drop typed variants; drop Edit-Spec sub-form. **Rejected.** Saves ~95% of prior's complexity but doesn't address the user's #1 named failure class (F2 — missing exact-line edits) because dropping the sub-form leaves edits described in prose. Internal inconsistency between scope and savings.

**Design B — Convention-by-Example.** Replace formal template with 4 exemplar findings. Authors emulate. **Empirically refuted.** The corpus's 96% concrete-edit-form failure rate emerged under documented-rules-without-structural-enforcement (canonical state with style rules + exemplar findings). Pure convention-by-example would not be expected to improve compliance because the binding constraint is author preference for prose, not absence of rules. The underlying intuition (exemplars help) is not wrong as a principle — it's insufficient ALONE.

**Design C — Diff-based edit-spec.** Replace OR coexist-with the field-based sub-form using unified-diff blocks inside fenced code-blocks. **Refines-adopted.** See §3 for the full specification. Compatible with prior's architecture; addresses F2 via concrete diff format; `git apply`-validatable as a future tooling capability.

**Design D — MD+YAML companion.** Add a `finding.yaml` alongside `finding.md` with structured fields. **Rejected.** Doubles maintenance burden; risk of drift between MD and YAML versions; doesn't address the user's named failure classes any better than the prior.

**Design E — Frontmatter-only YAML.** Entire finding is YAML; no markdown body. **Substrate-honest fail at current calibration.** Doesn't fit mixed human/LLM reading workflow. Preserved as Refinement Trigger RT-1.

**Design F — Knowledge graph.** Findings become nodes in a graph with typed edges (CORRECTS / REFINES / RELATED). **Substrate-honest fail at current calibration.** Project lacks graph infrastructure. Preserved as Refinement Trigger RT-2.

**Design G — ADR-style single template.** 4-section template (Context / Decision / Status / Consequences); ~50-100 lines per finding; no typed variants. **Empirically refuted.** The corpus's 22+ non-canonical sections per content-type prove authors needed MORE structure than ADR's 4 sections. Strict ADR underfits; ADR-with-extensions converges structurally toward the prior. The underlying intuition (minimalism) is not wrong as a principle — it's insufficient ALONE for a corpus with diverse content shapes.

**Design H — Title-prefix type discrimination.** Replace frontmatter `type:` with title-prefix conventions (`# Finding: Decide [X]` / `# Finding: REPAIR [X]` / etc.). **Rejected.** Adds CONCLUDE parsing complexity (regex on title) WITHOUT saving frontmatter complexity (other keys still needed). Net: more complexity, not less.

### 2. Per-commit Inherited Commitments Re-test

Per the prior's 8 commitments, with verdict and evidence:

**C1 — Hybrid base+typed-variants architecture.** Verdict: **CONFIRMS.** Evidence: empirically supported by the corpus's failure under documentation-only conventions (96% rate) and by the corpus's 22+ non-canonical sections (variety that requires more structure than minimalism provides). Substrate-honest — universal base + typed variants are markdown-renderable; CONCLUDE compile-time enforceable.

**C2 — 4-type taxonomy (Decision / Spec-modification / Recommendation / Loop-diagnose).** Verdict: **CONFIRMS.** Evidence: prior's corpus check (5 representative findings fit one type cleanly each); pairwise coupling refutation of 8-type-granularity and 0-type-no-taxonomy. ADR-with-extensions (Design G's loose form) is structurally close to typed-variants; strict ADR underfits.

**C3 — Composable Edit-Specification sub-form.** Verdict: **REFINES.** The prior's field-based sub-form is correct on the principle (structural enforcement of "what exactly to change"). Design C (diff-based) is a strict capability addition for line-level edits with known line numbers. The refinement: **add the diff-based form as an alternate**, coexisting with field-based. Both forms permitted within Spec-modification type; authors pick per edit profile (full specification in §3).

**C4 — Materialization carve-out.** Verdict: **CONFIRMS.** Evidence: the 2026-04-28 prior's reasoning stands (theory and implementation belong at different layers; merging destroys plan-vs-actual learning). Contrarian inversion ("materialization-record IS finding.md") re-litigates the 2026-04-28 prior without new evidence to overturn it.

**C5 — Four strengthened style rules (concrete-edit-form / anchored-cross-reference / verb-specificity / scope-specificity).** Verdict: **CONFIRMS.** Evidence: the "0 rules" inversion empirically refuted (canonical's 96% rate IS what happens under documentation-only style rules; removing them doesn't improve). The "20+ rules" inversion killed via Survival-Bias check (rule fatigue + copy-paste compliance). 4 new + 4 preserved canonical = 8 rules total is manageable.

**C6 — Frontmatter extension (template_version + type + status + model + effort + canonical relationship keys + observed optional keys).** Verdict: **CONFIRMS.** Evidence: Design H (title-prefix replaces `type:` key) adds CONCLUDE parsing complexity (regex on title format) WITHOUT saving frontmatter complexity (other keys still needed). Minimal-frontmatter inversion (status-only) loses metadata that the corpus already adopted bottom-up (`related:` 32/50; `diagnoses:` 4/50; `verdict:` 2/50).

**C7 — Future-only migration.** Verdict: **CONFIRMS.** Evidence: retroactive migration would cost ~50 mini-inquiries (re-authoring existing findings); audit-trail value of as-authored preservation exceeds the consistency value. No-new-template inversion preserves the 96% rate.

**C8 — Markdown medium.** Verdict: **CONFIRMS.** Evidence: substrate-honest fail of YAML-only (Design E) at current calibration (mixed human/LLM reading) and of knowledge-graph (Design F) at current calibration (no graph infrastructure). Markdown is the project's native format; LLMs author markdown naturally.

**Aggregation: 6 CONFIRMS + 1 REFINES + 0 CORRECTS + 0 SUPERSEDED.**

### 3. The diff-based Edit-Specification alternate format (Design C refinement)

The prior's field-based Edit-Spec sub-form requires 7 base fields per edit (target_path / target_anchor / operation / current_text / new_text / rationale / reversibility) plus optional type-specific extensions. This works for all edit profiles but is verbose for line-level text changes. The diff-based form adds a more compact alternate.

**Markdown rendering pattern:**

```markdown
#### Edit [N] — [short label]

**Target:** `target_path` — `target_anchor` (optional, human-readable label)
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

**Surrounding metadata (required):**

| Field | Required | Notes |
|---|---|---|
| `target_path` | always | Exact file path from repo root |
| `target_anchor` | optional | Section heading or descriptive label adding human-readable context to the `@@` line numbers |
| `operation` | always | REPLACE / ADD / DELETE / RESTRUCTURE — matches the diff's predominant operation |
| `rationale` | always | One-line WHY this edit |
| `reversibility` | always | One-line how to undo (typically `git revert <commit>` or "reverse the diff") |

**When to use diff-based vs field-based — decision table:**

| Edit profile | Recommended form | Why |
|---|---|---|
| Line-level text edit; known line numbers; <50 lines changed | **Diff-based** | `git apply`-validatable; precise; familiar |
| Add-new-file | **Field-based** | No "before" to diff against; field-based handles cleanly |
| Restructure entire section / multi-paragraph rewrite | **Field-based** (or diff with full block replacement) | Diff format becomes noisy for large blocks |
| Cross-file edit with identical content across N files | **Field-based** (with `target_paths:` list extension) | One sub-form covers all; diff would require N separate blocks |
| Procedure-step edit (sequence modification) | **Field-based** (with `sequence_position:` extension) | Diff doesn't capture procedural sequence semantics |
| Frontmatter edit | **Field-based** (with `yaml_key:` extension) | YAML key-value editing more natural in field form |
| Unknown line numbers (mid-design) | **Field-based** | Diff requires precise line numbers; field-based allows section-heading anchor |

**Fully-filled example:**

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

**Coexistence rules.** Both diff-based and field-based forms are permitted within the same Spec-modification finding. CONCLUDE's structural-check accepts either form per edit. Authors may use diff-based for some edits and field-based for others within one finding (e.g., field-based for an add-new-file edit + diff-based for a section-rewrite edit). The prior's P3 field-based sub-form remains the default; diff-based is the alternate authors may choose when the edit profile fits.

### 4. Honest framing — what the contrarian re-run actually produces

The user asked for a "controversial angle" rethink. The honest verdict: the contrarian re-run **largely validates the prior**. Of 8 contrarian designs surfaced via Framer-weighted exploration, **only one** produces a genuine refinement (Design C). The other 7 fall to empirical refutation (B, G), substrate-honest fail at current calibration (D, E, F), or internal-inconsistency / net-complexity (A, H).

The verdict is **not** rubber-stamp confirmation of the prior — it emerges from observable evidence. The per-commit verdicts cite corpus statistics, cross-domain analogs, and substrate-honesty checks; they would be reproduced by a different agent running this inquiry fresh from the same corpus data.

The verdict is **not** forced overturning despite the user's "controversial" framing. The user invoked /MVL+ for rigorous evidence-based inquiry; if they wanted forced overturning, they'd have said so explicitly. The honest verdict honors the user's actual ask (rigorous adversarial test) rather than the verbal framing.

The contrarian re-run produces **meta-evidence**: the prior's design survived a deliberate adversarial test where 8 alternatives were generated via Framer-weighted Innovation (Inversion, Lens-Shifting, Constraint-Manipulation) plus light Generators (Domain-Transfer, Absence-Recognition). 7 of 8 fell to observable evidence. This is stronger validation than a single-pass would provide.

## Inherited Commitments Re-test

(Required because the prior's commitments are being re-tested by this inquiry per the Synthesis Trigger declared in `_branch.md`.)

| Commitment (paraphrased from prior) | Source | Re-test Status | Evidence |
|---|---|---|---|
| **C1 Hybrid base+typed-variants architecture** | prior §1, §2 | RE-TESTED → CONFIRMS | Corpus 96% concrete-edit-form failure rate emerged under documented-rules-without-enforcement; structural enforcement is the intervention; substrate-honest |
| **C2 4-type taxonomy** | prior §3 | RE-TESTED → CONFIRMS | Prior's corpus check (5/5 fit); pairwise coupling refutation of 8-type and 0-type alternatives; ADR-with-extensions converges structurally toward typed-variants |
| **C3 Edit-Specification sub-form (field-based)** | prior §4 | RE-TESTED → **REFINES** | Field-based is correct on principle (structural enforcement); diff-based form added as coexisting alternate for line-level edits with known line numbers; both forms permitted; see §3 for refinement content |
| **C4 Materialization carve-out** | prior §5 (Finding section); prior's `2026-04-28` reference | RE-TESTED → CONFIRMS | 2026-04-28 prior's reasoning stands (theory and implementation belong at different layers); contrarian inversion re-litigates without new evidence |
| **C5 Four strengthened style rules** | prior §5 | RE-TESTED → CONFIRMS | "0 rules" inversion empirically refuted; "20+ rules" inversion killed via Survival-Bias check; 8 total rules (4 new + 4 preserved canonical) manageable |
| **C6 Frontmatter extension** | prior §2 | RE-TESTED → CONFIRMS | Title-prefix inversion (Design H) adds CONCLUDE complexity without saving frontmatter; minimal-frontmatter inversion loses corpus-observed bottom-up usage (`related:` 32/50, `diagnoses:` 4/50) |
| **C7 Future-only migration** | prior §6 | RE-TESTED → CONFIRMS | Retroactive migration cost (~50 mini-inquiries) exceeds consistency value; no-new-template preserves 96% rate |
| **C8 Markdown medium** | prior implicit | RE-TESTED → CONFIRMS | YAML-only (E) substrate-fail at mixed-reading calibration; knowledge graph (F) substrate-fail at infra calibration; markdown is project's native format |

**Aggregation:** 6 CONFIRMS + 1 REFINES + 0 CORRECTS + 0 SUPERSEDED. Finding relationship to prior: **REFINES**.

## Next Actions

### MUST

- **What:** Update the prior's follow-up CONCLUDE-procedure-update inquiry's brief (in prior's Next Actions § MUST) to include the diff-based alternate form for the Edit-Specification sub-form. CONCLUDE's structural-check rules (Edit C in prior's brief) must accept either form per edit.
  - **Who:** the follow-up CONCLUDE-procedure-update inquiry author (when that inquiry runs).
  - **Gate:** condition-bound — before the procedure-update inquiry executes.
  - **Why:** without this update, the procedure-update would adopt only the field-based form; the diff-based alternate would not be available to new-template authors.

### COULD

- **What:** When authoring a Spec-modification finding, use the decision table in §3 to pick the diff-based form for line-level text edits with known line numbers, and field-based for all other edit profiles.
  - **Who:** the author of any Spec-modification finding (under the new template).
  - **Gate:** time-bound — once the procedure-update lands and the new template is active.
  - **Why:** matches edit profile to form; reduces unnecessary verbosity for line-edits; preserves the field-based form for cases it handles better.

- **What:** Consider running periodic contrarian re-test inquiries on high-stakes commitments (every N inquiries that modify cannon disciplines / protocols / templates).
  - **Who:** the user, opportunistically.
  - **Gate:** condition-bound — when a high-stakes spec ships or after a calibration shift.
  - **Why:** systematic Status-Quo-Bias mitigation; meta-evidence validates well-grounded designs.

### DEFERRED

- **What:** Revive Design E (frontmatter-only YAML) or Design F (knowledge graph) if the project's reading-pattern shifts to LLM-only consumption + machine-queryability needs.
  - **Gate:** observable trigger — see Refinement Triggers RT-1 and RT-2 in Open Questions.
  - **Why (if revived):** these designs become substrate-honest at different calibrations; current calibration favors prior, future calibration may not.

## Reasoning

### Why REFINES and not CONFIRMS

The verdict aggregation is 6 CONFIRMS + 1 REFINES. Numerically, this leans CONFIRMS-heavy. But the REFINES on C3 is non-trivial — it adds a new permitted form (diff-based) to the prior's Edit-Specification sub-form. A finding that adds new content to the prior IS a refinement, even if mostly the prior's commitments are confirmed. The relationship label REFINES is honest in both directions: not minimizing the refinement; not exaggerating the change.

### Why REFINES and not CORRECTS/SUPERSEDED

For CORRECTS to apply, a contrarian alternative would have had to beat the prior on a load-bearing dimension — e.g., Design B (convention-by-example) would have to demonstrably improve the 96% concrete-edit-form failure rate over the prior's structural enforcement. The corpus evidence doesn't support this; the 96% rate emerged under convention-style approaches. For SUPERSEDED, a contrarian would have to wholesale replace the prior — e.g., Design F (knowledge graph) becoming the right artifact medium. The substrate-honesty check at current calibration refutes this.

The remaining contrarians (A, D, H) are rejected on internal-consistency / net-complexity grounds — they make the design worse, not better. Designs E and F are substrate-honest-fail at current calibration but deferred as future-phase pivots.

The honest verdict is REFINES with one specific refinement adopted.

### Why empirical refutation of B (Convention-by-Example) is precise, not over-strong

The earlier Innovation phrasing — "corpus's 96% rate IS the convention-by-example outcome" — was over-strong. The Critique phase surfaced this as a real adversarial point. The precise framing:

The corpus's 96% concrete-edit-form failure rate emerged under the canonical state: documented style rules + exemplar findings + author emulation, with rules in documentation-layer-only (no structural enforcement). Pure convention-by-example (exemplars only, no rules) is not directly tested in the corpus. However, replacing the prior's structural enforcement with pure convention-by-example is unlikely to improve compliance because the binding constraint on the 96% rate is author preference for prose, not absence of rules. Structural enforcement is the documented intervention that prior research and the prior's design committed to as the lever.

So the refutation of B is **against B AS A REPLACEMENT for the prior's structural-enforcement mechanism**, not against the principle of exemplar-led emulation. The underlying principle of B (exemplars help) is not wrong; it's insufficient ALONE to address the corpus's failure modes.

### Why empirical refutation of G (ADR-minimalism) is precise, not over-strong

Similarly, the earlier Innovation phrasing — "corpus's 22+ non-canonical sections refutes ADR-style" — was over-strong. The precise framing:

ADR's strict 4-section template (Context / Decision / Status / Consequences) underfits the corpus's content variety (22+ non-canonical sections invented per content-type). However, real-world ADRs are often extended with additional sections (Alternatives Considered, References, etc.). ADR-with-extensions converges structurally toward the prior's per-type variants — they're cousins, not opposites.

So the refutation of G is **against G AS A REPLACEMENT for the prior's typed-variants approach**, not against the principle of minimalism. The underlying principle of G (lightweight; well-known format) is not wrong; it's insufficient ALONE for the corpus's diverse content shapes.

### What was killed and why

| Killed alternative | Why killed |
|---|---|
| Design A (Minimalist canonical-plus-rules) | Drops the sub-form; doesn't address user's F2 complaint (missing exact-line edits). Internal inconsistency between scope and savings. |
| Design B (Convention-by-Example) as REPLACEMENT | Empirically: the canonical's 96% concrete-edit-form failure rate emerged under documentation-only conventions. Pure convention-by-example unlikely to improve. |
| Design D (MD+YAML companion) | Doubles maintenance; drift risk; doesn't address user's named failure classes. |
| Design G (ADR-style) as REPLACEMENT | Corpus 22+ non-canonical sections show variety beyond ADR's 4 sections; strict ADR underfits. |
| Design H (Title-prefix type discrimination) | Adds CONCLUDE parsing complexity (regex on title) without saving frontmatter (other keys still needed). Net: more complexity. |
| Forced SUPERSEDED of the prior | No contrarian survives adversarial test on a load-bearing dimension. Status-Quo-Bias direction 2 (forcing overturning) avoided. |
| Rubber-stamp CONFIRMS without refinement | Design C is a genuine refinement; ignoring it would understate the contrarian re-run's actual contribution. |

### Contradictions reconciled across the pipeline

- Exploration produced 8 designs (broad space); Sensemaking consolidated to 6 CONFIRMS + 1 REFINES (narrowed via empirical evidence). Resolution: breadth-then-test pattern is standard; no contradiction.

- Innovation's empirical-refutation wording was over-strong (B/G); Critique surfaced this and produced wording refinements; this finding adopts the precise framing. Reconciled.

- The user's "controversial" framing creates a verbal pull toward overturning; the evidence supports REFINES; honest verdict honors evidence over verbal framing. Reconciled in §4 Honest framing.

## Open Questions

### Monitoring

- **After the follow-up CONCLUDE-procedure-update lands**, observe how often new-template authors use diff-based vs field-based form across the next 10 Spec-modification findings. If diff-based is heavily preferred (>70% of edits), consider promoting it from "alternate" to "default" for line-level text edits in a future spec revision. If diff-based is rarely chosen (<20%), consider whether the decision table's guidance needs sharpening.

### Refinement Triggers

**RT-1 — Revive Design E (Frontmatter-only YAML).**
- Trigger: observable — >80% of finding-reads are by agent tools (not humans) AND machine-queryability becomes a load-bearing project need (e.g., automated cross-finding analysis required).
- Why if revived: YAML-only maximizes machine-parseability; human-readability cost becomes acceptable when humans aren't primary readers.

**RT-2 — Revive Design F (Knowledge graph).**
- Trigger: observable — project adopts a graph/triple-store backend OR corpus exceeds ~500 findings with cross-finding-query needs becoming load-bearing.
- Why if revived: graph queries enable cross-finding analysis (e.g., extract all CORRECTS relationships; find all findings citing a particular file). Justified once scale + tooling supports it.

**RT-3 — Revive Designs A or G (minimalism).**
- Trigger: observable — corpus shows under-utilization of typed variants (>90% of findings are Decision type) OR author-cognitive-load becomes a documented friction point.
- Why if revived: simplicity wins when variety is observed lower than the typed taxonomy provides.

### Research Frontiers

- **Periodic contrarian re-run pattern.** This inquiry validated the prior via systematic Framer-weighted adversarial test. Worth exploring whether contrarian re-runs should be a SCHEDULED pattern on high-stakes specs (every N inquiries that touch cannon disciplines). Separate inquiry.

- **Empirical test of structural-enforcement-vs-alternative-interventions.** The verdict that "structural enforcement is THE intervention" is supported by absence of contrary evidence. A future inquiry could empirically test by adopting an alternative intervention (e.g., better exemplars, more rules) and measuring compliance rate vs the prior's structural enforcement.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

read this 

devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md 


and i want you to now look it from contravertial angle, and  differnt way 

rethink the same question but in weighted innovation way
```

</details>
