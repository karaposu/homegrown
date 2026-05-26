---
status: active
continues_from: devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md
---
# Finding: MVL+ Input-Rephrase as Primary Intervention Layer

## Question

**Question.** The prior 14-00 inquiry diagnosed a NEW failure-mode family — convergence-recognition failure — where surface-different candidates are treated as structurally separate when they are actually instances of the same underlying operation. That inquiry installed a passive writing-discipline reminder at `enes/runtime_environment/inquiry_framing_discipline.md` as its Layer 1 intervention (composition-time help for the human composing a `_branch.md`). The user pushed back: **should the primary intervention live INSIDE /MVL+'s input-rephrase step — the moment the runner converts the user's raw input into the structured `_branch.md` fields — rather than as a passive writing reminder?** And if yes, what structured-but-lightweight rephrase logic would make the runner LOYAL to what is fuzzy and what is not fuzzy in the user's input, so downstream disciplines can handle the question with accuracy?

**Goal.** A clear verdict on whether structured input-rephrase logic at /MVL+'s runner level is (a) a Layer 1 REPLACEMENT for the writing-discipline reminder; (b) a CO-PRIMARY Layer 1 alongside the reminder; (c) a different layer entirely; or (d) not viable. If viable, sketch what the rephrase preserves, how it operates, where it lives, what it does NOT do, and how it interacts with the prior 14-00 finding's layered intervention.

The user's verbatim framing: *"maybe the real solution is not editing sensemaking innovation etc but how MVL handles input query and rephrases it? maybe we should look into rephrase logic and give it more coverage or carefullness by making rephrase logic more structured? not so much computing but just enough that it is loyal to what is fuzzy and what is not fuzzy so later disciplines could handle the query with accuracy?"*

---

## Finding Summary

- **Verdict: VIABLE and APPROPRIATE — ship now at runner-layer; co-exist with the writing-discipline reminder.** The user's hypothesis is structurally sound. /MVL+'s runner-layer input-handling step is the right location for active pre-bias surfacing, alongside the prior 14-00 finding's passive writing-discipline reminder at `enes/runtime_environment/inquiry_framing_discipline.md`. The two interventions operate at different temporal moments — the writing reminder at composition time (helps the human compose better input before invoking /MVL+); the runner-rephrase at processing time (handles whatever input arrives, regardless of whether the writing reminder was consulted). Defense-in-depth.

- **The runner-layer change is INCREMENTAL, not architectural.** /MVL+'s `_branch.md` template is already structured (Question + Goal + Scope Check with two sub-checks: scope-coverage + specific-vs-pattern). This finding adds one more Scope Check sub-check (Question-Premise Pre-Bias) plus a Source Input section for verbatim user input retention. The change pattern follows the existing precedent (the specific-vs-pattern sub-check was added the same way).

- **Step 5 (the project's ≥3-instances threshold gating speculative discipline-spec edits) does NOT apply to this change.** Step 5's literal scope is discipline-spec edits and failure-mode coinage. Runner-spec incremental edits — extending an existing template with an additional sub-check at the same tier — are outside that literal scope. The reversibility precedent (the 14-00 finding's writing-discipline reminder bypassed Step 5 at N=1 with the same structural argument) applies equivalently here.

- **The intervention stays within a tier ceiling: PRESERVE + CLASSIFY + SURFACE.** The runner-rephrase only preserves user input (semantic + pragmatic + verbatim), classifies the question shape (a binary check: relationship-between-candidates? yes/no), and surfaces detected pre-bias direction + the inverse framing for the user to adjudicate. It does NOT extract cognitive anchors (Sensemaking's job in Phase 1). It does NOT generate candidates (Innovation's job). It does NOT evaluate (Critique's job). Anything beyond preserve + classify + surface belongs to a discipline, not the runner. (Terminology open for user validation — alternative phrasings noted under Open Questions.)

- **"Loyal to fuzzy and non-fuzzy" is operationalized as three concrete preservation mechanisms.** (1) Semantic preservation: preserve the user's distinctive word choices verbatim by default; the runner has four heuristics for identifying cases where preservation is especially load-bearing (term used twice or more; project-local jargon; quoted; emphasized) — but the default is "preserve when in doubt," and the four heuristics are NOT a strict filter. (2) Pragmatic preservation: mark hedges as hedges and unstated variables as unstated — don't sharpen "I think" to commitment or fill in unspecified qualifiers. (3) Verbatim Source Input retention: preserve the user's raw input in a Source Input section in `_branch.md`, parallel to CONCLUDE's existing pattern for correction-chain inquiries.

- **The binary classifier uses EXPOSURE-not-detection — surface both framings, let the user decide.** When the classifier identifies a relationship-between-candidates question shape (triggering examples: "is X different from Y?", "what's the overlap between A and B?", "is C a specialization of D?"), the runner surfaces the framing's pre-bias direction AND states the inverse framing in one sentence. It then presents BOTH framings to the user. The runner does not override the user's framing; it makes the framing's pre-bias visible. The user retains the decision.

- **The change applies to /MVL+, /MVL classic, and BRANCH_INQUIRY — all three runners.** Cross-runner consistency is the assembly's emergent property: a user invoking any of the three on a relationship-between-candidates question gets the same surfacing behavior. The drafted text for /MVL+ SKILL.md is the primary; /MVL classic SKILL.md applies the same text with a pipeline-label adjustment (classic uses S→I→C, not E→S→D→I→C); BRANCH_INQUIRY cross-references /MVL+ SKILL.md to avoid duplication while preserving the same behavior at branch-creation time.

- **Before applying P2 + P3, the user (or applying AI) must verify two file structures.** /MVL classic SKILL.md and `homegrown/protocols/branch_inquiry.md` were not directly read during this inquiry's Innovation phase — the drafted parallels presume structural parallels that should be verified. A small pre-application verification checklist is included under Next Actions / MUST.

---

## Finding

The /MVL+ extended cognitive loop and its classic sibling /MVL are the project's two main runners — Claude Code skills loaded at invocation time from `/Users/ns/.claude/skills/MVL+/SKILL.md` and `/Users/ns/.claude/skills/MVL/SKILL.md` respectively. When a user invokes one of them with a raw question, the runner's first job is to convert that raw input into a structured `_branch.md` file that the downstream cognitive disciplines (Exploration, Sensemaking, Decomposition, Innovation, Critique) operate on. That conversion step — the input rephrase — is what this inquiry investigates.

The prior 14-00 inquiry (`devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md`) diagnosed convergence-recognition failure: a failure mode where surface-different candidates being adjudicated for their relationships are treated as structurally separate when they are actually instances of the same underlying operation. The 14-00 finding designed a layered intervention: Layer 1 was a writing-discipline reminder (installed at `enes/runtime_environment/inquiry_framing_discipline.md`) for humans composing a `_branch.md`; Layer 2 was deferred discipline-spec refinement notes for Sensemaking and Innovation, gated by Step 5's ≥3-instances threshold.

The user pushed back on Layer 1's placement: a passive writing-discipline reminder depends on human adoption. The user proposed instead that the primary intervention should live INSIDE /MVL+'s input-rephrase step itself, where it actively fires on every inquiry without depending on human adoption. The user also explicitly asked the rephrase to be LOYAL to what is fuzzy and what is not fuzzy in the user's input — to preserve ambiguity where the input is ambiguous, and preserve specificity where the input is specific, so downstream disciplines see the user's actual mental model rather than a smoothed-out paraphrase.

This finding adjudicates the user's proposal: yes, it is viable; it is appropriate to ship now at runner-layer; it co-exists with the writing-discipline reminder rather than replacing it.

### 1. Why the runner-layer is the right location

There are three plausible layers where pre-bias detection could live:

- **(1A) Composition layer** — the writing-discipline reminder helps a human compose better input BEFORE invoking the runner. The 14-00 finding placed Layer 1 here.

- **(1B) Processing layer** — the runner-rephrase processes whatever input arrives AFTER invocation. This finding proposes Layer 1B here.

- **(2) Discipline layer** — Sensemaking and Innovation get refinement notes that catch pre-bias during their own analysis. The 14-00 finding DEFERRED Layer 2 to ≥3-instance revival.

The three layers operate at temporally distinct moments. Layer 1A depends on the human reading and applying the reminder; if they don't, the inquiry proceeds without pre-bias surfacing. Layer 1B always runs (the runner reads its own SKILL.md as canon at every invocation), so it does not have the adoption gap. Layer 2 catches pre-bias even later — after disciplines have already committed to a candidate frame; the upstream layers are higher-leverage.

The runner-layer intervention is the highest-leverage available without depending on human adoption AND without introducing discipline-layer cognition. It is the natural place for an active pre-bias surfacing mechanism.

### 2. Why Step 5 does not apply

Step 5 of the project's `homegrown/protocols/loop_diagnose.md` says: "≥3 instances of a NEW failure-mode family before behavior-changing discipline-spec edits." Its purpose is to prevent speculative discipline-layer additions at N=1 evidence. The 14-00 finding's Layer 2 (discipline-spec refinement notes for Sensemaking and Innovation) is gated by Step 5 because it falls within that literal scope.

Runner-spec edits are structurally distinct from discipline-spec edits. The runner is a transcription layer (preserve + classify + surface); the discipline is a cognition layer (anchor extraction; candidate generation; evaluation). Step 5's purpose — preventing speculative discipline-layer cognition additions — does not extend to incremental edits to the runner's input-handling template at the same tier as existing sub-checks.

The strongest precedent is the 14-00 finding itself: the writing-discipline reminder shipped at N=1 with the same structural argument (it's not a discipline-spec edit; it's a writing-layer reminder; the writing layer doesn't change AI runtime behavior at the discipline level). The reversibility precedent applies equivalently to the runner-layer change: a single SKILL.md edit can be reverted in seconds; backward compatibility is full (existing inquiries' `_branch.md` files are unaffected).

### 3. The tier ceiling — preserve + classify + surface

The runner-layer change must NOT cross into discipline cognition. The tier ceiling — preserve + classify + surface — bounds what the runner-rephrase is allowed to do.

- **Preserve** — three sub-operations: semantic (preserve the user's distinctive word choices verbatim by default); pragmatic (mark hedges as hedges and unstated variables as unstated); verbatim (retain the user's raw input in a Source Input section).

- **Classify** — one operation: binary check on the question's shape. Does the Question have the shape of a relationship-between-candidates question? Yes → fire the pre-bias sub-check. No → skip.

- **Surface** — two sub-operations: identify the framing's pre-bias direction (DISTINCTION / UNITY / TYPED-RELATIONSHIP / PARTITION / OTHER); state the inverse one-sentence framing.

The runner does NOT extract anchors (that's Sensemaking's job). The runner does NOT generate candidates (that's Innovation's job). The runner does NOT evaluate the user's framing (that's Critique's job). The runner makes the framing's pre-bias VISIBLE and lets the user adjudicate.

The terminology "preserve + classify + surface" was coined during Sensemaking; the user is invited to confirm or replace the phrasing (alternatives noted under Open Questions).

### 4. Operationalizing "loyal to fuzzy and non-fuzzy"

The user's explicit framing — "loyal to what is fuzzy and what is not fuzzy" — operationalizes as three preservation mechanisms.

**Semantic preservation.** When the user uses a specific term that carries semantic weight (a named concept, a project-local term, a quoted phrase, a domain term), preserve it verbatim in the rephrased Question. The runner should NOT paraphrase to a generic synonym. The default behavior is "preserve when in doubt." Four heuristics identify cases where preservation is ESPECIALLY load-bearing: (a) the user uses the term twice or more; (b) the term matches project-local jargon (a doc in `homegrown/`, `enes/`, or `devdocs/`); (c) the term is quoted by the user; (d) the term is emphasized (capitalized, italicized, bolded). These are heuristics for extra-careful preservation, NOT a strict filter — the common case (term used once, unquoted, unemphasized, not jargon, but still load-bearing) is covered by the preserve-by-default rule.

**Pragmatic preservation.** Hedges ("I think," "maybe," "sort of," "perhaps," "it seems like") get carried into the rephrased Question — not sharpened to commitments. Unstated variables — where the user did not specify what would count as "good," "done," or another qualifier — get surfaced in Scope Check as "[X] is not specified by the user — flag for clarification," rather than filled in by the runner.

**Verbatim Source Input retention.** The user's raw input is preserved in a Source Input section in `_branch.md`. The pattern parallels CONCLUDE's existing Source Input section for correction-chain inquiries. Downstream readers and disciplines can verify the rephrase against the original; if the rephrase loses something important, the verbatim source is recoverable.

### 5. The binary classifier — exposure, not detection

The pre-bias sub-check fires only when the Question matches a relationship-between-candidates question shape. The classifier is a coarse pattern match, not a deep parse.

Triggering shapes include: "Is X different from Y?", "What's the overlap / intersection / relationship between A and B?", "Is C a specialization / subset / generalization of D?", "What's the boundary between A and B?", "Are X, Y, Z all instances of one thing?". Non-triggering shapes include: single-subject ("What is X?", "How does X work?"), action ("How should we do X?", "What's the best way to X?"), evaluation ("Does X meet criterion Y?"), and diagnostic ("Why did X fail?").

When the classifier fires, the runner surfaces — not decides. The runner identifies the framing's pre-bias direction from the literal phrasing (DISTINCTION / UNITY / TYPED-RELATIONSHIP / PARTITION / OTHER), states the inverse one-sentence framing, and presents both to the user. The user retains the decision to commit to the original framing or widen.

This exposure-not-detection mode emerged during Innovation's Inversion mechanism (system-level): instead of pre-bias DETECTION with override (binary "is this pre-biased? yes/no"), pre-bias EXPOSURE makes both framings visible and lets the user decide. This is more loyal to the user's framing intent and avoids the runner overriding choices the user made deliberately.

### 6. Coordination with the writing-discipline reminder

The runner-layer rephrase and the writing-discipline reminder COEXIST at adjacent but temporally distinct moments.

The writing-discipline reminder at `enes/runtime_environment/inquiry_framing_discipline.md` operates at composition time — when a human is drafting input to send to /MVL+. It helps the human surface pre-bias before invocation. Adoption-contingent.

The runner-rephrase operates at processing time — after /MVL+ receives input. It handles whatever input arrives, regardless of whether the writing reminder was consulted. Always-runs.

Neither replaces the other. The writing reminder helps the composer; the runner-rephrase protects the inquiry. Defense-in-depth at adjacent layers.

### 7. Cross-runner consistency

The change applies to all three runners: /MVL+ (extended pipeline, primary), /MVL classic (3-discipline pipeline, parallel), and BRANCH_INQUIRY (child-inquiry creation, parallel). The /MVL+ edit is the primary deliverable; /MVL classic applies the same text with a pipeline-label adjustment; BRANCH_INQUIRY cross-references /MVL+ SKILL.md to avoid duplication.

The emergent property is cross-runner consistency: a user invoking /MVL+, /MVL classic, or BRANCH_INQUIRY on a relationship-between-candidates question gets the same surfacing behavior. The intervention doesn't drift between runners.

### 8. Pre-application verification

The drafted texts for /MVL classic and BRANCH_INQUIRY (under Next Actions / MUST) presume structural parallels in `/Users/ns/.claude/skills/MVL/SKILL.md` and `homegrown/protocols/branch_inquiry.md` that the Innovation phase did not directly verify. Before applying P2 + P3, the user (or applying AI) must verify the file structures — see the pre-application verification checklist under Next Actions / MUST.

---

## Next Actions

### MUST

- **What:** Apply the /MVL+ SKILL.md edit. The exact text is in the Reasoning section below ("P2 — /MVL+ SKILL.md edit text").
  - **Who:** User-applied (or AI-applied with explicit user request).
  - **Gate:** After applying the pre-application verification checklist below.
  - **Why:** Installs the runner-layer Question-Premise Pre-Bias sub-check + Source Input section + tier ceiling guidance. This is the primary intervention; ships now.

- **What:** Pre-application verification checklist (gate for the P2 and P3 edits).
  - **Who:** Whoever applies the edits (user or AI).
  - **Gate:** Before any of the SKILL.md or BRANCH_INQUIRY edits are applied.
  - **Why:** The drafted parallels for /MVL classic and BRANCH_INQUIRY presume structural parallels that were not directly verified during Innovation. The checklist closes the gap.
  - **Checklist:**
    1. Read `/Users/ns/.claude/skills/MVL/SKILL.md`. Confirm it has an input-handling step structurally parallel to /MVL+'s Step 3 (the `_branch.md` template definition). If yes → apply P3's /MVL classic adaptation. If no → flag the structural divergence and revise the adaptation before applying.
    2. Read `/Users/ns/Desktop/projects/native/homegrown/protocols/branch_inquiry.md`. Confirm the step that writes the child `_branch.md`. If the step name "Step 4 — Compute branch path and write child files" does not match the actual file, locate the correct step and adapt the cross-reference accordingly.
    3. Verify that `/Users/ns/.claude/skills/MVL+/SKILL.md` and the project's `homegrown/protocols/branch_inquiry.md` are both reachable from each maintainer's typical working directory; if not, document the absolute paths in the cross-reference text.

- **What:** Apply the parallel /MVL classic SKILL.md edit and the BRANCH_INQUIRY edit. Texts are in the Reasoning section below ("P3 — Parallel edits").
  - **Who:** User-applied or AI-applied.
  - **Gate:** After the pre-application verification checklist confirms the structural parallels.
  - **Why:** Achieves cross-runner consistency. Without P3, /MVL classic and BRANCH_INQUIRY inquiries would not get the pre-bias surfacing behavior.

### COULD

- **What:** Validate the tier-ceiling terminology "preserve + classify + surface." User picks the preferred phrasing or accepts the default.
  - **Who:** User.
  - **Gate:** At the user's convenience; not blocking application of the primary edit.
  - **Why:** The phrase was loop-coined during Sensemaking; the underlying structural concept (runner stays out of discipline cognition) is firm, but the label benefits from user validation. Alternatives: "transcribe + tag + flag"; "capture + classify + signal"; "receive + label + expose."

- **What:** Run a focused inquiry to enumerate other question shapes' pre-bias profiles and decide whether each warrants its own runner-level sub-check.
  - **Who:** User-initiated inquiry.
  - **Gate:** When the user wants to expand the rephrase pattern beyond relationship-between-candidates questions.
  - **Why:** Each question shape (comparison, evaluation, design, diagnostic, existence) has its own pre-bias profile. Today's intervention covers only relationship-between-candidates; broader coverage would address more pre-bias surfaces. Out of scope here; flagged.

### DEFERRED

- **What:** The 14-00 finding's Layer 2 discipline-spec refinement notes for Sensemaking and Innovation. These are NOT promoted by this finding; they remain DEFERRED until ≥3 instances of convergence-recognition failure.
  - **Gate:** ≥3 confirmed instances across distinct inquiries (current count from the 14-00 finding: 1 confirmed + 1 possible pending the TEM-Sensemaking-Comprehending disambiguation in 14-00's MC3).
  - **Why (if revived):** Adds candidate-set-level abstraction-unity testing to Sensemaking's perspective set and Innovation's mechanism vocabulary. Defense-in-depth at the discipline layer beyond the runner-layer protection installed by this finding.

---

## Reasoning

### 9. The 4 pieces (refined; what gets applied)

This finding's deliverable was decomposed into four pieces, each with refinements applied per Critique's verdict.

#### P1 — Conceptual design (FOUNDATION; reasoning behind the implementation)

The runner-layer rephrase logic operates at the "preserve + classify + surface" tier:

- **Preserve** (three sub-operations): semantic preservation (preserve user's distinctive word choices verbatim by default — when in doubt, preserve; the four heuristics in section 4 identify cases of especially load-bearing preservation, not a strict filter); pragmatic preservation (carry hedges and unstated variables into the rephrase; flag unspecified-by-user variables in Scope Check); verbatim retention (Source Input section in `_branch.md`).
- **Classify** (one operation): binary check on the question's shape — does it match relationship-between-candidates? Trigger set + non-trigger set listed in section 5.
- **Surface** (two sub-operations): identify pre-bias direction from literal phrasing (DISTINCTION / UNITY / TYPED-RELATIONSHIP / PARTITION / OTHER); state inverse one-sentence framing. Both framings are presented to the user; the runner does not override.

The runner does NOT extract anchors (Sensemaking), generate candidates (Innovation), or evaluate (Critique). The tier ceiling enforces the boundary.

Coordination with the writing-discipline reminder: COEXIST at temporally adjacent but distinct moments (composition time vs processing time). Both layers operate; neither replaces the other.

#### P2 — /MVL+ SKILL.md edit text (PRIMARY ACTIONABLE)

**File:** `/Users/ns/.claude/skills/MVL+/SKILL.md`.

**Insertion point:** the "### If NEW (input is a question or description):" block — specifically Step 3 (the `_branch.md` template definition). The edit (a) extends the Scope Check field with a 3rd sub-check (Question-Premise Pre-Bias check); (b) adds a Source Input field after Scope Check; (c) adds loyalty-rule guidance and tier-ceiling guidance below the template.

**Exact text to insert** (replacing the current Step 3 `_branch.md` template + the paragraph after it; lines in **bold/new** are additions; remaining lines are existing or lightly edited):

```markdown
3. For ROOT NEW only, write `[inquiry_path]/_branch.md`:

   ```markdown
   # Branch: [name]
   ## Question
   [the question, stated clearly in one or two sentences]
   ## Goal
   [what would a good answer look like? what would the user be able to DO with the answer?]
   ## Scope Check
   [compare the question's scope to the goal's requirements. Does the question, if answered perfectly, cover everything the goal asks for? If YES: "Question covers goal." If NO: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."

   Specific-vs-pattern check: if the Question or Goal points at specific examples (e.g., "the 10 observed failures from inquiry X", "these 7 chains", "these specific instances"), explicitly state whether the inquiry should address JUST THOSE EXAMPLES or the BROADER PATTERN those examples illustrate. Default: address the broader pattern unless the user has explicitly scoped to the specific examples. If both readings are plausible, present both to the user before proceeding (per the existing scope-widening flow above).

   Question-Premise Pre-Bias check: if the Question has the shape of a relationship-between-candidates question — e.g., "is X different from Y?", "what's the overlap between A and B?", "is C a specialization of D?", "what's the relationship between X and Y?", "are X, Y, Z all instances of one thing?" — surface the framing's pre-bias direction and the inverse framing. State: (a) the framing's pre-bias toward DISTINCTION / UNITY / TYPED-RELATIONSHIP / PARTITION / OTHER; (b) the inverse one-sentence framing; (c) whether the inquiry should test both framings as a structural-grounds check. Default: present both framings; let the user decide if they want to commit to the original or widen. Skip this sub-check if the Question does NOT match the relationship-between-candidates shape (single-subject "what is X?", action "how do we do X?", evaluation "does X meet Y?", and diagnostic "why did X fail?" have different pre-bias profiles and are not the target of this sub-check). For the parallel writing-time reminder at composition time, see `enes/runtime_environment/inquiry_framing_discipline.md`.]
   ## Source Input
   [the user's verbatim input that triggered this inquiry, preserved as-is so downstream readers can verify the rephrase against the original. Wrap in a fenced code block to preserve formatting and hedges. If the input was very long or contains sensitive material, omit with reason: "Source Input omitted: [reason]".]
   ```
   If the Scope Check flags a gap (scope-coverage, specific-vs-pattern, or Question-Premise Pre-Bias), present the relevant alternative to the user before proceeding. The user decides whether to widen, commit to the original, or revise.

**Loyalty rules applied throughout the rephrase** ("loyal to fuzzy and non-fuzzy"):

- **Semantic preservation (default: preserve when in doubt).** Preserve the user's distinctive word choices verbatim in the rephrased Question. Four heuristics identify cases of especially load-bearing preservation: (a) the user uses the term twice or more; (b) the term matches project-local jargon (matches a doc in `homegrown/`, `enes/`, or `devdocs/`); (c) the user quoted the term; (d) the user emphasized the term (capitalized, italicized, bolded). These heuristics are NOT a strict filter — the default is preserve-when-in-doubt; the heuristics identify when preservation is most load-bearing.

- **Pragmatic preservation.** Carry the user's hedges and unstated variables into the rephrase; do not collapse them to commitments.
  - Hedges ("I think," "maybe," "sort of," "perhaps," "it seems like") → preserve in the Question's phrasing.
  - Unstated variables (the user did not specify what would count as "good," "done," "fixed," or another qualifier) → surface in Scope Check as "[X] is not specified by the user — flag for clarification" rather than filling in.

**Runner tier ceiling — preserve + classify + surface.** This rephrase logic operates at the LOOP-BUILDER (runner) layer. It does NOT extract cognitive anchors (Sensemaking's job in Phase 1 — Cognitive Anchor Extraction). It does NOT generate candidates (Innovation's job). It does NOT evaluate (Critique's job). The rephrase only PRESERVES user input (semantic + pragmatic + verbatim), CLASSIFIES question shape (binary trigger for the Pre-Bias sub-check), and SURFACES pre-bias direction + inverse framing for the user to adjudicate. Anything beyond preserve + classify + surface belongs to a discipline, not the runner.

**Step-5 conformance note.** This is a runner-spec incremental edit, not a discipline-spec edit. Step 5's literal scope (gate on discipline-spec edits and failure-mode coinage at ≥3-instances threshold) does not apply. Reversibility precedent: the writing-discipline reminder at `enes/runtime_environment/inquiry_framing_discipline.md` shipped at N=1 with the same structural argument. See `devdocs/inquiries/2026-05-11_17-00__mvl_input_rephrase_as_primary_intervention/finding.md` for the full reasoning.
```

#### P3 — Parallel adaptations for /MVL classic and BRANCH_INQUIRY (SECONDARY ACTIONABLE)

**File 1:** `/Users/ns/.claude/skills/MVL/SKILL.md` (classic /MVL runner).

**Adaptation:** apply the same edit text as P2 above to /MVL classic's parallel input-handling step. The text is the same except the pipeline reference adjusts from "E → S → D → I → C (always)" to "S → I → C" wherever it appears in surrounding context. The pre-bias sub-check itself is identical — it does not depend on which pipeline runs after the `_branch.md` is written.

**Insertion point in /MVL SKILL.md:** the same structural location as /MVL+'s Step 3 (the `_branch.md` template definition). VERIFY before applying via the pre-application verification checklist above.

**File 2:** `/Users/ns/Desktop/projects/native/homegrown/protocols/branch_inquiry.md` (BRANCH_INQUIRY protocol).

**Adaptation:** in the step that writes the child `_branch.md`, insert a cross-reference to /MVL+ SKILL.md's Question-Premise Pre-Bias sub-check, loyalty rules, and Source Input retention. Two BRANCH_INQUIRY-specific adjustments:

1. **Source Input field for branches** is the user's BRANCH-CREATION invocation block (the `branch_from:` + `branch_source:` + `question:` block + any optional context), preserved verbatim — not the parent's user input.

2. **Pre-bias check applies to the CHILD QUESTION**, not the parent question. The check fires on the child question's shape independently.

**Drafted text for BRANCH_INQUIRY:**

```markdown
When writing the child `_branch.md`, apply the same Question-Premise Pre-Bias check, loyalty rules (semantic preservation, pragmatic preservation), and Source Input retention as `/MVL+` SKILL.md Step 3 — see `/Users/ns/.claude/skills/MVL+/SKILL.md`. The child question's pre-bias may differ from the parent's; the check fires on the child question's shape independently. Source Input for a branch inquiry is the branch-creation invocation block (`branch_from:` + `branch_source:` + `question:` + any optional context), preserved verbatim. The same runner tier ceiling applies — preserve + classify + surface; no discipline cognition at the runner layer.
```

**Insertion point in branch_inquiry.md:** the step that writes the child `_branch.md` (presumed to be near Step 4 — VERIFY via the pre-application verification checklist above).

#### P4 — Open items + Research Frontier

- **Open item — Tier ceiling terminology.** "Preserve + classify + surface" was loop-coined in Sensemaking. The structural concept (runner stays out of discipline cognition) is firm; the LABEL is open for user validation. Alternatives: "transcribe + tag + flag"; "capture + classify + signal"; "receive + label + expose." Default: keep "preserve + classify + surface" since "preserve" directly maps to the user's "loyalty" framing.

- **Open item — Pre-bias check result visibility.** RESOLVED: the result lives in both (a) the `_branch.md` Scope Check (canonical, persisted, readable by future sessions and other AIs); (b) /MVL+'s brief presentation print after inquiry creation (informational, ephemeral). Both surfaces apply.

- **Research Frontier 1 — Autonomy-ladder scaling.** At higher autonomy levels in the project's end-goal architecture (multi-head loops + merging loops, per project memory), the AI runner increasingly generates inquiries without a human composition step. At those levels, the runner-rephrase IS the framer. The intervention installed by this finding scales without retroactive change; it does not need to be re-architected when autonomy increases. Forward-positioned, not advocacy.

- **Research Frontier 2 — Other question shapes' pre-bias profiles.** This finding covers relationship-between-candidates questions specifically. Other shapes (comparison, evaluation, design, diagnostic, existence) each have their own pre-bias profiles. A focused future inquiry could enumerate them and decide whether each warrants its own runner-level sub-check. Out of scope here.

- **Research Frontier 3 — TEM-Sensemaking-Comprehending disambiguation (carried forward from 14-00 MC3).** The 14-00 finding's MC3 — disambiguate whether the TEM (Typed Enumeration Mapping) operation overlaps with Sensemaking's Comprehending operation — is still pending. This finding does NOT substitute for that disambiguation; the count toward 14-00's MC2 revival trigger (≥3 instances of convergence-recognition failure) is unchanged.

### 10. KILLs and SURVIVEs from critique

Critique tested the 4-piece Innovation deliverable against 11 dimensions (D1 tier-ceiling fidelity; D2 Step-5-outside-scope soundness; D3 binary classifier specificity; D4 loyalty operationalization; D5 coordination with writing reminder; D6 cross-runner consistency; D7 self-reference rigor; D8 user-perspective fit; D9 reversibility-precedent argument; D10 frontier appropriateness; D11 spec-gap probe).

- **P1 (conceptual design) — REFINE.** Direction: re-state semantic-preservation rule as preserve-by-default with the 4 criteria as heuristics for especially-load-bearing cases (not strict filter). **APPLIED** to P1 above.

- **P2 (/MVL+ SKILL.md edit) — REFINE.** Three directions: (a) apply P1's semantic-preservation refinement; (b) add COEXIST policy citation to SKILL.md text (one-line reference to `enes/runtime_environment/inquiry_framing_discipline.md`); (c) optionally surface "loyalty to fuzzy and non-fuzzy" language in the SKILL.md edit's preamble. **APPLIED** to P2 above — including the COEXIST citation in the Question-Premise Pre-Bias check text and the loyalty-rules preamble.

- **P3 (parallel adaptations) — REFINE.** Three directions: (a) verify /MVL SKILL.md structural parallel before applying; (b) verify branch_inquiry.md step name before applying; (c) include full file paths in cross-references. **APPLIED** as the pre-application verification checklist under Next Actions / MUST.

- **P4 (open items + Research Frontier) — REFINE-MINOR.** Direction: sharpen RF1 framing from value-advocacy ("compounds") to descriptive ("scales without retroactive change"). **APPLIED** to P4's RF1 above.

- **Emergent assembly candidate — Pre-application verification checklist.** Surfaced by Critique's Phase 3.5 assembly check. **APPLIED** as the explicit MUST item under Next Actions.

### 11. Self-reference handling

This inquiry used /MVL+ to investigate /MVL+'s own input-rephrase step. Self-reference acuity was high.

External anchoring used: the 14-00 finding cited as the predecessor inquiry; the existing /MVL+ SKILL.md template cited directly as the artifact being extended; CONCLUDE's existing Source Input pattern cited as the precedent for verbatim retention; the user's literal phrase "loyal to what is fuzzy and what is not fuzzy" quoted and operationalized into three preservation mechanisms.

Counter-anchoring: Exploration explicitly included the null option (C13 — do nothing; keep writing reminder as-is) on the candidate map. Sensemaking explicitly tested Step-5-applies-to-runner-layer as the strongest counter to the user's hypothesis (resolved at HIGH confidence on structural grounds). Innovation's Inversion mechanism produced the system-level refinement (surfacing-not-detection) that constrains the runner from overriding user framings.

No friction-free passing. The inquiry's framing pre-bias toward the user's hypothesis was named in the `_branch.md` Scope Check; the inverse direction (writing reminder is the right shape, runner-layer is wrong) was held in view during Sensemaking and only released after Ambiguity 1's HIGH-confidence resolution.

Self-reference held.

---

## Open Questions

### Monitoring

- After P2 is applied, does the next /MVL+ inquiry on a relationship-between-candidates question correctly surface both framings in `_branch.md` Scope Check?
- After P3 is applied, do /MVL classic and BRANCH_INQUIRY inquiries on relationship-between-candidates questions get the same surfacing behavior as /MVL+?

### Blocked

- The 14-00 finding's Layer 2 (discipline-spec refinement notes for Sensemaking and Innovation) remains blocked on ≥3 instances of convergence-recognition failure. The current finding does NOT advance the count; runner-layer interventions are a different family.

### Research Frontiers

- **Other question shapes' pre-bias profiles.** Comparison, evaluation, design, diagnostic, existence — each has its own pre-bias profile. Could each warrant a runner-level sub-check? Focused future inquiry needed.

- **Autonomy-ladder scaling.** At higher autonomy levels in the project's end-goal architecture, the runner-rephrase becomes the framer. The intervention installed here scales without retroactive change. Observation only.

- **TEM-Sensemaking-Comprehending disambiguation (carried forward).** From 14-00 MC3. Not advanced by this finding.

### Refinement Triggers

- **If the next /MVL+ relationship-between-candidates inquiry does NOT trigger the pre-bias sub-check** (the binary classifier missed the shape), tighten the classifier spec with the missed example added to the trigger set.
- **If users complain that the pre-bias surfacing is too noisy** (firing on questions that aren't relationship-between-candidates), tighten the non-trigger set or add an explicit override mechanism ("user can suppress the sub-check with an explicit `--no-pre-bias` flag or equivalent in their `_branch.md`").
- **If "preserve + classify + surface" terminology proves confusing in practice**, swap to one of the alternative phrasings (transcribe + tag + flag; capture + classify + signal; receive + label + expose).

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+
u said
Layer 1 — inquiry-framing time (loop-builder layer, ACTIONABLE now). Question pre-bias originates at _branch.md writing time. A writing-discipline reminder at this layer catches the failure at its origin, before any discipline runs. The reminder is loop-builder-layer (a human reads it when writing a _branch.md), not discipline-layer — so the Step-5 ≥3-threshold does not apply. It ships now.


so maybe the real solution is not editing sensemaking innovation etc but how MVL handles input query and rephrases it?

maybe we should look into rephrase logic and give it more coverage or carefullness by making rephrase logic more structured?

not so much computing but just enough that it is loyal to what is fuzzy and what is not fuzzy so later disciplines could handle the query with accuracy?
```

</details>
