# Innovation: Cognitive Fixes Formalization — Design Decision

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_15-20__cognitive_fixes_formalization_design/_branch.md`

Per-piece Seed → Generate → Test at 5 pieces.

---

## P1 — README.md content

### Seed
SD1 + SD6 + SD7 + SD8 + SD9 + SD10 + SD13(i). README integrates purpose + staging gates (LOOP_DIAGNOSE Step 5/6 verbatim) + kill conditions + index + first-instance-bias-ack + reversibility commitment.

### Generate

Mechanism: **Combination** (purpose + staging + kill + index + bias-ack into one cohesive document) + **Constraint Manipulation** (LOOP_DIAGNOSE verbatim language MUST appear).

Paste-ready content:

```markdown
# Cognitive Fixes

This folder accumulates documented applications of a specific methodology for mitigating recurring LLM failure modes: **decompose vague instructions into named meta-categories with full coverage + add a structural fail-safe that doesn't depend on enumeration completeness**.

Each fix here is one application of the methodology to a specific failure mode. The folder is at a LOWER level of formalization than a protocol — it preserves methodology and accumulates evidence without claiming protocol-level stability.

## What goes here

A fix belongs here when ALL of these hold:

1. **Trigger condition met** — an LLM-driven instruction (in a discipline spec, runner spec, or protocol) produces inconsistent coverage across runs; some runs catch all aspects of user intent, others drop one or more.
2. **Methodology applied** — the 7-step pattern (Identify → Decompose → Coverage check → Structural fail-safe → Meta-recursion residual ack → Branch experiment → Evidence gate) is documented for the specific case.
3. **Branch-experiment evaluation gate proposed** — the fix is staged, not directly applied as a permanent edit (unless the user explicitly overrides per their authority).

## What does NOT go here

- General spec refactors (no specific LLM-coverage-failure trigger)
- Bug fixes unrelated to coverage stability
- Feature additions
- Performance optimizations
- Style/formatting changes

## Index of current fixes

| # | KIND | Source inquiry | Status |
|---|---|---|---|
| 01 | [Vague Instruction Decomposition](./01__vague_instruction_decomposition.md) | `devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md` | Edit applied; branch-experiment pending |

## Staging gates (verbatim from LOOP_DIAGNOSE)

This folder follows the same staging discipline as `cognitive_harness/protocols/loop_diagnose.md`'s Step 5/6 guardrails.

**Step 5 verbatim (for protocol promotion threshold):**

> "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question."

Applied here: do NOT promote cognitive_fixes from folder to standalone protocol at `cognitive_harness/protocols/cognitive_fixes.md` until 5 to 10 cognitive-fix applications show a stable internal method (shared structure across instances) that cannot be explained as ordinary spec-edit work.

**Step 6 verbatim (for runner hook threshold):**

> "Do not add silent automatic diagnosis-mode inference until at least 10 explicit LOOP_DIAGNOSE runs show stable trigger language with no confusing false positives."

Applied here: do NOT add a runner hook to MVL+/MVL2+ that automatically loads a cognitive_fixes protocol until at least 10 explicit cognitive-fix applications show stable trigger language with no confusing false positives.

## Kill conditions

The folder is retired (not promoted) if either:

- **(a) N=5 future inquiries pass with NO new cognitive-fix applicable cases** — the pattern is not recurring; methodology is one-off; folder becomes documentation but not actionable structure. Retire.
- **(b) Cross-fix audit at N=3-5 shows no shared structure** — each fix is bespoke; the methodology is not generic. Merge documentation into `cognitive_harness/protocols/spec_governance.md` (or another related protocol); retire folder.

If neither (a) nor (b) fires, fixes accumulate. At N≥5 stable applications, reconsider Step 5 promotion threshold.

## First-instance authorship acknowledgment

The first instance (`01__vague_instruction_decomposition.md`) was authored by the same agent (Claude) that authored the methodology in the source inquiry. There is mild authorship-bias risk: the template shape and the first instance's structure may anchor future instances to one agent's framing.

**Mitigation:** future cognitive fixes should be cross-author-validated where feasible — reviewed by a different agent session, or grounded in user-explicit pattern observations rather than agent-extracted patterns. The staging gates (LOOP_DIAGNOSE-precedent verbatim quoted above) provide external precedent for promotion decisions rather than relying on author judgment.

## Reversibility commitment

This folder + its contents are CLEANLY DELETABLE. No downstream dependencies are created by the folder's existence:

- Runner specs (`MVL+/SKILL.md`, `MVL2+/SKILL.md`) do NOT reference this folder
- Other protocols in `cognitive_harness/protocols/` do NOT reference this folder
- Disciplines do NOT reference this folder

If kill condition (a) or (b) fires, the folder can be removed via `rm -rf cognitive_harness/cognitive_fixes/` with no upstream/downstream cleanup needed.

If promotion to protocol occurs at N≥5, dependencies will be created at that time (e.g., MVL+ SKILL.md hook); only then does deletion become non-trivial.
```

### Test
- LOOP_DIAGNOSE Step 5+6 verbatim: ✓ (quoted in blockquote with attribution)
- Purpose / what-goes-here / what-doesn't-go-here / index / staging / kill / bias-ack / reversibility: all present
- Paste-ready: ✓
- Mechanism independence: NO — Combination + Constraint Manipulation needed

Disposition: **ACTIONABLE**.

---

## P2 — _template.md content

### Seed
SD12 (loose guide; not strict schema) + SD13(ii) (first-instance-bias-ack section).

### Generate

Mechanism: **Lens Shifting** (methodology → template fields) + **Constraint Manipulation** (loose, not strict).

Paste-ready content:

```markdown
# Cognitive Fix Template (loose guide)

This is a loose guide for documenting a new cognitive fix. It is NOT a strict schema — sections can be adapted to the specific case. At N=1 (when this template was created), the right schema is unknown; the template will refactor at N=3+ if cross-instance structure becomes visible.

Each fix file should be named `NN__<kind_slug>.md` where NN is the index (01, 02, 03...) and `<kind_slug>` is a snake_case name describing the operation the fix performs (e.g., `vague_instruction_decomposition`).

## Template sections

### 1. Trigger condition

What specific LLM-coverage-failure mode does this fix address? When does the methodology apply? Cite the diagnostic source (e.g., a LOOP_DIAGNOSE finding) that identified the failure.

### 2. Affected artifact(s)

Which file(s), instruction(s), or protocol section(s) does this fix modify? Quote the relevant lines verbatim if specific.

### 3. Methodology applied

Walk through the 7-step pattern for this specific case:

1. **Identify** — the vague instruction (verbatim)
2. **Decompose** — into named meta-categories with rationale per category
3. **Coverage check** — verify the known failure case is caught by at least one named category
4. **Structural fail-safe** — what trigger fires; what verification at trigger-fire; emphasizes STRUCTURE not CONTENT
5. **Meta-recursion residual** — what the enumeration + fail-safe still don't catch; named honestly
6. **Branch experiment** — proposed parallel-spec setup
7. **Evidence gate** — what threshold passes / what action fails

### 4. Coverage analysis

Table form:
- Cases CAUGHT (each case + which mechanism catches it)
- Cases NOT necessarily caught (honest residuals)

### 5. Evaluation gate

Setup + N=? chains + pass/fail thresholds + revert condition + telemetry per chain.

### 6. First-instance-bias acknowledgment

If this fix is being authored by the same agent that authored the methodology or other prior instances, name the bias explicitly. Note any cross-author validation that's been done or that should be done.

### 7. Links

- Source inquiry (the finding that produced this fix)
- Related fixes (other entries in this folder, if applicable)
- LOOP_DIAGNOSE finding (if applicable; many cognitive fixes emerge from LOOP_DIAGNOSE outputs)

## Notes on this template at N=1

This template is provisional. The right structure for cognitive-fix documentation will emerge across multiple applications. If you're authoring fix #2 or #3 and find the template doesn't fit, deviate — document the deviation in the fix file's Notes section. At N=3+, the template will be audited and possibly refactored.

The loose-guide approach (vs strict schema) is intentional: at N=1 the right schema is unknown; forcing a schema would force-fit future instances to the first one's shape.
```

### Test
- 7 sections (within 4-6 SD target range — slightly above but each is light)
- Loose guide tone ✓
- First-instance-bias-ack section ✓
- Trigger-condition section enables non-applicable-case filtering
- Paste-ready ✓

Disposition: **ACTIONABLE**.

---

## P3 — 01__vague_instruction_decomposition.md content

### Seed
SD4 (path) + HCR1 (follows P2's template structure) + content from MVL+ Question-field finding.

### Generate

Mechanism: **Combination** (template structure × actual MVL+ fix content) + **Domain Transfer** (case-study format).

Paste-ready content:

```markdown
# 01 — Vague Instruction Decomposition

A cognitive fix applied to the MVL+ runner's `_branch.md` Question and Goal field instructions. First instance of the `cognitive_fixes` folder pattern.

## 1. Trigger condition

LLM-driven instruction produces inconsistent coverage across runs: vague single-prompt instructions like `[the question, stated clearly in one sentence]` and `[what would a good answer look like? what would the user be able to DO with the answer?]` allow agent compression of multi-part user inputs into one summary, dropping load-bearing clauses.

**Diagnostic source:** LOOP_DIAGNOSE finding at `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`, Hypothesis H1 ("_branch.md transcription failure"). The observed failure: user's phrase "accumulation of other disciplines and finding" — joined to a prior clause by "and" — was dropped during transcription; only the first clause survived.

## 2. Affected artifact(s)

- `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW" — lines 82-85 (Question + Goal field instructions in the _branch.md template); also new Step 3.5 inserted before original Step 4
- `cognitive_harness/MVL2+/SKILL.md` Step 3 of "If NEW" — same field instructions, +2 line offset

Original vague instructions (verbatim, pre-fix):

```
## Question
[the question, stated clearly in one sentence]
## Goal
[what would a good answer look like? what would the user be able to DO with the answer?]
```

## 3. Methodology applied

1. **Identify:** the two lines above; "stated clearly in one sentence" creates compression pressure with no enumerated coverage check.

2. **Decompose:** 5 meta-categories for Question (Subject / Action / Level / Observation Targets / Deliverable Shape) acting as a CHECK not required sub-fields; 4 sub-prompts for Goal (Criterion / Use Case / Desired Outcome / What Would Fail).

3. **Coverage check:** the H1 failure (dropped conjunction-joined observation target) is caught by the **Observation Targets** meta-category, which uses LOOP_DIAGNOSE MC2's verbatim trigger language: "If the user's input contains clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND' (or the logical extensions 'in addition to' / 'as well as' / 'plus'), PRESERVE ALL clauses as separate observation-target items — do not compress into one clause."

4. **Structural fail-safe:** new Step 3.5 after _branch.md is written. **Structural trigger** scans raw user input for conjunctions (operates on STRUCTURE not CONTENT). **Semantic verification** at trigger-fire checks if each clause's content appears in Question or Goal; if missing, expand before proceeding to Exploration. Plus a new `## Source Input` section in _branch.md preserving raw user input verbatim — enables downstream-discipline audit at any stage.

5. **Meta-recursion residual:** the 5-meta-category enumeration cannot be proved complete. Implicit multi-aspect framings WITHOUT explicit conjunctions can slip through both the meta-categories AND the structural fail-safe. The fail-safe operates on STRUCTURAL TRIGGERS, not full semantic understanding. FS4 (user-interactive verification — "does this Question capture everything you meant?") would close this residual but adds runner-interaction overhead and is currently deferred.

6. **Branch experiment:** create parallel `MVL+/SKILL.md` variant with the proposed Step 3 + Step 3.5. Run 5 NEW MVL+ inquiries with multi-part user framing through both versions.

7. **Evidence gate:** **≥3 of 5 chains** where Step 3.5 catches a drop the current spec would have missed → promote to permanent edit. <3 of 5 → revert and diagnose.

## 4. Coverage analysis

**Cases caught:**

| Failure case | Caught by | How |
|---|---|---|
| H1 (dropped conjunction-joined observation target) | Triple redundancy: Question Observation Targets bullet + Step 3.5 fail-safe + Source Input section | Three different timings (write-time / post-write audit / downstream-discipline-read) |
| Loop-vs-discipline-level conflation | Question Level bullet | Explicit "preserve user's level distinction" instruction |
| Dropped negative constraint joined by conjunction | Step 3.5 fail-safe | "and" trigger fires; semantic verify catches missing negation |
| Multi-sentence framing with each sentence introducing new aspect | Step 3.5 fail-safe | "multi-sentence framings" in extension list |
| Dropped deliverable shape | Question Deliverable Shape bullet | Explicit category |

**Cases NOT necessarily caught:**

| Failure case | Why not caught |
|---|---|
| Implicit multi-aspect framing without explicit conjunctions | Step 3.5 only triggers on explicit conjunctions; no conjunction = no trigger |
| Aspect axis not in the 5 meta-categories | Enumeration is finite; new axes may emerge in future inquiries |
| Future-maintainer re-paraphrases MC2 trigger language | Citation creates anchor but doesn't prevent edit drift |

## 5. Evaluation gate

**Setup:** parallel `cognitive_harness/MVL+/SKILL.md` variant containing the proposed Step 3 + Step 3.5. Current spec unchanged.

**Run:** 5 NEW MVL+ inquiries with multi-part user framing (raw input contains conjunctions, multi-clause structures, or multi-sentence framings) through both spec versions.

**Pass threshold:** ≥3 of 5 chains where audited version catches a drop the current spec would have missed → promote to permanent edit.

**Fail threshold:** <3 of 5 → revert; analyze: was the fail-safe trigger too narrow? did meta-categories miss an axis? was input not conjunction-marked?

**Telemetry per chain:** raw input + audit-flag-fired + would-current-version-have-dropped + agent's audit decision and rationale.

**Status as of fix authoring:** Branch experiment NOT yet executed. The edit was applied DIRECTLY to MVL+/MVL2+ SKILL.md per user override of the LOOP_DIAGNOSE Step 5 guardrail; user retains revert option via git. The branch experiment retrospectively validates (or refutes) the directly-applied edit.

## 6. First-instance-bias acknowledgment

This fix was authored by Claude. The methodology was also authored by Claude in the source inquiry. There is mild authorship-bias risk: the framing of the 5 meta-categories, the fail-safe structure, and the residual acknowledgment all reflect one agent's framing.

**Mitigations applied:**

- The Observation Targets bullet uses LOOP_DIAGNOSE MC2's verbatim trigger language (external pattern anchor; not paraphrased)
- The staging gates per parent README quote LOOP_DIAGNOSE Step 5/6 verbatim (external precedent anchor)
- The 5-chain branch experiment is the empirical validation gate

**Mitigations NOT applied:**

- Cross-author validation (no second-agent review of the fix design)
- Multi-session validation (the fix design and the edit happened in one session)

If the branch experiment passes its ≥3/5 gate, the fix's promotion to permanent edit has empirical support beyond authorship; if it fails, the authorship-bias risk becomes more salient and revisit is warranted.

## 7. Links

- **Source inquiry (the fix's design):** `devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md`
- **Diagnostic source (the failure mode):** `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md` (Hypothesis H1)
- **LOOP_DIAGNOSE protocol:** `cognitive_harness/protocols/loop_diagnose.md` (Step 5/6 guardrails)
- **Applied to:** `cognitive_harness/MVL+/SKILL.md` Step 3 + new Step 3.5; same edit at `cognitive_harness/MVL2+/SKILL.md`
```

### Test
- Follows P2 template structure ✓ (sections 1-7)
- Trigger condition cites diagnostic source ✓
- Affected artifacts named with verbatim ✓
- 7-step methodology walk-through ✓
- Coverage analysis with caught + NOT-caught ✓
- Evaluation gate with ≥3/5 ✓
- First-instance-bias-ack ✓
- Links ✓
- Paste-ready ✓

Disposition: **ACTIONABLE**.

---

## P4 — Operational instructions

### Seed
SD11 (create now). User executes (or has agent execute) commands to create folder + files.

### Generate

Mechanism: **Combination** (commands + sequence + verification).

Paste-ready instructions:

```markdown
## Operational sequence — apply cognitive_fixes folder to disk

```bash
mkdir -p /Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/
```

Then write three files:

1. `/Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/README.md` — content from P1 above
2. `/Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/_template.md` — content from P2 above
3. `/Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/01__vague_instruction_decomposition.md` — content from P3 above

Verify with:

```bash
ls -la /Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/
```

Expected output: `README.md`, `_template.md`, `01__vague_instruction_decomposition.md` (plus `.` and `..` directory entries).
```

### Test
- mkdir command ✓
- 3 Write targets listed with paths and content references ✓
- Verification command ✓
- Expected output stated ✓

Disposition: **ACTIONABLE**.

---

## P5 — Caveats / risk acknowledgment

### Seed
SD14 (reversibility) + premature-formalization risks (R7 from exploration) + self-reference (SD13).

### Generate

Mechanism: **Lens Shifting** (risks as deliberate-design-choices with mitigations) + **Absence Recognition** (named the kill condition that fills the "doesn't recur" gap).

Paste-ready caveats text:

```markdown
## Caveats and acknowledged residuals

**Premature-formalization risk.** Creating a folder + template at N=1 application is at a LOWER level of formalization than a protocol; LOOP_DIAGNOSE Step 5 guardrail prohibits PROTOCOL promotion from one chain but ALLOWS lower-level documentation. The folder is the appropriate level for N=1 evidence. Named risks + mitigations:

| Risk | Mitigation |
|---|---|
| False-positive future fix proposals (force-fitting non-applicable cases) | Template's trigger-condition section + README's "what does NOT go here" list |
| Over-claiming methodology generality | Loose-guide template (not strict schema) + N≥5 protocol-promotion gate |
| Bureaucratic friction | Template's loose structure (sections can be adapted) |
| Orphaned structure if pattern doesn't recur | Explicit kill conditions (a) N=5-no-new-cases and (b) cross-fix-audit-no-shared-structure |
| Authorship-bias amplification | LOOP_DIAGNOSE Step 5/6 verbatim external anchoring + first-instance-bias-ack subsection |

**Reversibility commitment.** The folder is CLEANLY DELETABLE. No runner specs, protocols, or disciplines reference it. If kill condition fires, `rm -rf cognitive_harness/cognitive_fixes/` removes it with no upstream/downstream cleanup needed.

**Self-reference acknowledgment.** Claude authored both the methodology AND the first instance. This is encoded structurally in the artifacts:
- README's first-instance authorship acknowledgment subsection
- Template's first-instance-bias acknowledgment section (#6)
- First-instance file's section 6 explicitly states mitigations applied + mitigations NOT applied

Cross-author validation is the structural mitigation. It is not yet applied; the 5-chain branch experiment (per MVL+ fix evaluation gate) provides empirical validation as a partial substitute.

**N=1 evidence is thin.** The folder + template + first instance document one application of the methodology. Whether the methodology generalizes beyond instruction-decomposition is unknown. The kill conditions handle "what if it doesn't generalize" without requiring agent judgment — they're concrete N-count or audit-result triggers.

**Meta-recursion warning (the user's own warning applied to this design).** This design's enumeration of premature-formalization risks (5 listed) cannot be proved complete. Some risk axis I haven't named may emerge. The reversibility commitment is the structural backstop — even if I missed a risk, the folder is deletable.
```

### Test
- Premature-formalization risks named + mitigations ✓
- Reversibility commitment explicit ✓
- Self-reference encoded in 3 artifact locations ✓
- N=1 thin-evidence honest acknowledgment ✓
- Meta-recursion warning applied to my own design ✓

Disposition: **ACTIONABLE**.

---

## Assembly Check

The 4 artifacts (README + template + first instance + ops instructions) + caveats form a coherent rollout package. Trace:

1. A future maintainer opens `cognitive_harness/cognitive_fixes/README.md` — sees purpose, what-goes-here, what-doesn't, index, staging gates, kill conditions, authorship-ack, reversibility commitment.
2. To add a new fix, maintainer reads `_template.md` — sees loose-guide sections + naming convention + first-instance-bias-ack reminder.
3. To see an example, maintainer reads `01__vague_instruction_decomposition.md` — sees the template applied to a real case.
4. The package is self-contained: a maintainer with no prior context can understand purpose, contribute new fixes, and decide promotion/retirement based on staging gates and kill conditions.

**Verdict:** assembly is coherent.

### CONTRARIAN-RETHINK at assembly

**Counter:** "Creating this folder at N=1 IS itself the premature-formalization failure the design warns against."

**Test honestly:**

1. **LOOP_DIAGNOSE Step 5 prohibits PROTOCOL promotion from one chain.** Folder+template is BELOW protocol level. ✓ Distinct level of formalization.

2. **LOOP_DIAGNOSE itself was created as a protocol from one diagnostic chain — and it lives as a protocol.** Why? Because LOOP_DIAGNOSE's content (input contract + diagnostic framing) was PRE-STRUCTURED before first application; it pre-specifies what a diagnostic inquiry should do, not a learned cross-instance pattern. The protocol promotion was for structure-definition, not pattern-extraction.

3. **The cognitive_fixes folder is partially pre-structured (the 7-step methodology) and partially pattern-learned (cross-instance shared structure will emerge over applications).** The pre-structured side is fine at N=1; the pattern-learned side is the premature-formalization risk.

4. **The loose-guide template + kill conditions handle the pattern-learned residual.** If cross-instance structure doesn't emerge by N=3-5, kill condition (b) fires. If no new applicable cases emerge in 5 future inquiries, kill condition (a) fires. The risk is bounded and reversible.

**Verdict:** CONTRARIAN PARTIALLY survives — the pattern-learned side is a real residual risk at N=1. But the design has mitigations:
- Loose guide (not strict schema) doesn't force-fit future cases
- Kill conditions (a) + (b) handle "if it doesn't generalize"
- Reversibility means the cost of being wrong is low

The CONTRARIAN doesn't defeat the design; it surfaces the residual the design must honestly carry. The honest framing: "this folder at N=1 is the right level of formalization given the reversibility + kill conditions; it would be premature ONLY if (a) we were creating a protocol or (b) we had no kill conditions or (c) the structure had downstream dependencies. None of those hold."

**Refinement:** P5 caveats should explicitly state this CONTRARIAN test and its partial-survival, so a future reader understands the design carries this residual.

(Note: P5 already includes "Meta-recursion warning" capturing similar acknowledgment. Verify.)

### Mechanism Coverage (Telemetry)

- Generators (4/4): Combination (per piece) + Absence Recognition (kill condition fills gap) + Domain Transfer (case-study format from existing protocols' style) + Extrapolation (N=1 → N=3/N=5/N=10 staging projection)
- Framers (3/3): Lens Shifting (methodology → folder structure) + Constraint Manipulation (LOOP_DIAGNOSE verbatim; ≥3/5; loose vs strict) + Inversion (CONTRARIAN-RETHINK)
- Convergence: YES — multiple mechanisms converge on the same design (folder+template at right level)
- Survivors tested: 5 pieces all PASS 5-test cycle
- Failure modes observed: NONE

**Overall: PROCEED to Critique.**

---

## Self-Assessment Verdict

**PROCEED to Critique.**

5 paste-ready artifacts + assembly check + honest CONTRARIAN-RETHINK partial-survival. Critique should probe:
- LOOP_DIAGNOSE Step 5/6 verbatim usage (anti-paraphrase fidelity)
- Template loose-guide vs strict-schema distinction (operationally clear?)
- Kill conditions are concrete (not subjective)
- First-instance-bias-ack is structurally encoded (not just narrative)
- CONTRARIAN partial-survival is honest
- Reversibility commitment matches actual reversibility (no hidden dependencies)
