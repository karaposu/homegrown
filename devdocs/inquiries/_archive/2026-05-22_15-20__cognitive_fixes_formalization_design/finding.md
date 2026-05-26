---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Cognitive Fixes Formalization — Design Decision

## Question

The user proposed creating a `cognitive_fixes` protocol to house the methodology of decomposing vague LLM instructions into explicit meta-categories with full coverage + a structural fail-safe (the methodology recently applied to MVL+'s `_branch.md` Question-field instruction). The user asked "what do you think" — explicitly requesting an evaluation, not just an implementation plan. The deliverable question: at N=1 application, what level of formalization is appropriate — folder + template + first instance, a full protocol, a runner hook, or do nothing — and with what staging gates / kill conditions / self-reference mitigations?

## Goal

A deliverable the user can act on immediately: honest evaluation; paste-ready artifacts if proceeding (folder + README + template + first instance + operational instructions); promotion gates anchored to external precedent (LOOP_DIAGNOSE Step 5/6 verbatim); kill conditions that prevent zombie infrastructure; explicit premature-formalization risk acknowledgment + reversibility commitment.

## Finding Summary

- **Recommendation: create folder + template + index the MVL+ fix as 01 NOW.** This is the right level of formalization for N=1 evidence — it preserves methodology while remaining reversible. NOT a full protocol (overreach per LOOP_DIAGNOSE Step 5). NOT a runner hook (overreach per Step 6). NOT nothing (methodology would drift in memory).

- **Folder location:** `cognitive_harness/cognitive_fixes/` containing 3 files at creation:
  - `README.md` — purpose, staging gates, kill conditions, index, authorship-ack, reversibility commitment
  - `_template.md` — loose-guide structure (7 suggested sections, not strict schema) for documenting future fixes
  - `01__vague_instruction_decomposition.md` — first instance documenting the MVL+ Question-field fix

- **Staging gates use LOOP_DIAGNOSE Step 5/6 verbatim language** (not paraphrased), encoding external precedent:
  - **Protocol promotion at N≥5** (per "5 to 10 ... show stable internal method" verbatim)
  - **Runner hook at N≥10** (per "at least 10 ... stable trigger language" verbatim)

- **Two concrete kill conditions** prevent zombie infrastructure:
  - **(a) N=5 future inquiries with NO new applicable cases → retire folder**
  - **(b) Cross-fix audit at N=3-5 shows no shared structure → merge into `spec_governance.md` or related protocol; retire folder**
  - Plus supplement: if user's project enters inactivity >90 days, supplement with calendar-bound retire trigger

- **Self-reference structurally encoded in 4 artifact locations:** README's authorship-ack subsection, template's section #6, first-instance file's section #6, and the finding's caveats. Cross-author validation is the structural mitigation; it's not yet applied (the 5-chain MVL+ branch experiment is the empirical-validation partial substitute).

- **Loose-guide template (not strict schema)** at N=1 — the right schema is unknown; forcing one would force-fit future instances. The trigger-condition section is the only LOAD-BEARING required element; other sections are SUGGESTED and may be merged/split/omitted.

- **Reversibility commitment:** the folder is CLEANLY DELETABLE at creation time. No runner specs, protocols, or disciplines reference it. `rm -rf cognitive_harness/cognitive_fixes/` removes it with no upstream/downstream cleanup. Warning encoded: future edits should NOT add incoming dependencies (e.g., spec citations) until N≥5 promotion threshold; sunk-cost-reluctance should NOT prevent deletion when kill condition fires.

- **Three named residuals (per Critique's REFINE outputs)** carried honestly:
  - Pattern-learned-side residual (cross-instance shared structure may not emerge; loose-guide + kill conditions handle this)
  - Future-incoming-dependency creep (warn against; reversibility weakens if violated)
  - Sunk-cost reluctance against deletion (explicitly warn against)

- **The folder is below protocol level**, distinct from the protocol level LOOP_DIAGNOSE Step 5 prohibits. The CONTRARIAN "this folder at N=1 is itself premature formalization" was tested at Innovation's assembly check + Critique VP6 and PARTIALLY survives — the pattern-learned side is residual risk that the loose-guide + kill conditions handle. The pre-structured side (the 7-step methodology is defined before first application) is justified at N=1.

## Finding

### Surround context

The user has applied a methodology multiple times: when an LLM-driven prompt produces inconsistent coverage across runs, decompose the vague concept into named sub-components, redefine the prompt to enumerate them explicitly. The user explicitly named the meta-requirement: "this decomposed version must be meta and have full coverage, otherwise if we make it explicit but miss a component, LLM will skip that missing component."

We just applied this methodology concretely to MVL+'s `_branch.md` Question-field instruction (`devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md`). The user is now asking whether the methodology itself deserves formalization as a recurring pattern — a `cognitive_fixes` container that would house this and future similar fixes.

The challenge is staging discipline. LOOP_DIAGNOSE protocol Step 5 explicitly prohibits promoting one application into a protocol: "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method." The same logic applies here: don't make a protocol from N=1. But there's a level of formalization BELOW protocol — folder + template + indexed instances — that preserves the methodology while remaining reversible. This finding commits to that level + staging gates for future promotion.

### Section 1 — Paste-ready: `cognitive_harness/cognitive_fixes/README.md`

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

The folder is retired (not promoted) if any of these fire:

- **(a) N=5 future inquiries pass with NO new cognitive-fix applicable cases** — the pattern is not recurring; methodology is one-off; folder becomes documentation but not actionable structure. Retire.
- **(b) Cross-fix audit at N=3-5 shows no shared structure** — each fix is bespoke; the methodology is not generic. Merge documentation into `cognitive_harness/protocols/spec_governance.md` (or another related protocol); retire folder.
- **(c) Calendar-bound supplement:** N=5 refers to MVL+/MVL2+ inquiries with multi-part user framing that DON'T add a cognitive_fix. If the project enters long inactivity periods (no new inquiries for >90 days), supplement with a calendar-bound retire trigger.

If none fire, fixes accumulate. At N≥5 stable applications, reconsider Step 5 promotion threshold.

## First-instance authorship acknowledgment

The first instance (`01__vague_instruction_decomposition.md`) was authored by the same agent (Claude) that authored the methodology in the source inquiry. There is mild authorship-bias risk: the template shape and the first instance's structure may anchor future instances to one agent's framing.

**Mitigation:** future cognitive fixes should be cross-author-validated where feasible — reviewed by a different agent session, or grounded in user-explicit pattern observations rather than agent-extracted patterns. The staging gates (LOOP_DIAGNOSE-precedent verbatim quoted above) provide external precedent for promotion decisions rather than relying on author judgment.

## Reversibility commitment

This folder + its contents are CLEANLY DELETABLE at creation time. No downstream dependencies are created by the folder's existence:

- Runner specs (`MVL+/SKILL.md`, `MVL2+/SKILL.md`) do NOT reference this folder
- Other protocols in `cognitive_harness/protocols/` do NOT reference this folder
- Disciplines do NOT reference this folder

If kill condition (a), (b), or (c) fires, the folder can be removed via `rm -rf cognitive_harness/cognitive_fixes/` with no upstream/downstream cleanup needed.

**Two important caveats on reversibility:**

1. **Future-incoming-dependency warning:** If a future edit adds an incoming dependency (e.g., a spec or protocol cites a cognitive_fix), reversibility is reduced. Do NOT add incoming dependencies until N≥5 protocol-promotion threshold is met. Outgoing dependencies (the fix file links to source inquiries) are fine — they don't reduce reversibility.

2. **Sunk-cost reluctance warning:** If a kill condition fires, DELETE the folder. Do not preserve from sunk-cost reluctance. Preserving the folder after kill condition firing creates zombie infrastructure — the reversibility commitment is operationally meaningful only if the deletion actually happens.

If promotion to protocol occurs at N≥5, dependencies will be created at that time (e.g., MVL+ SKILL.md hook); only then does deletion become non-trivial.
```

### Section 2 — Paste-ready: `cognitive_harness/cognitive_fixes/_template.md`

```markdown
# Cognitive Fix Template (loose guide)

**These 7 sections are SUGGESTED, not REQUIRED.** Sections may be merged, split, omitted, or added depending on the specific fix. The trigger-condition section is the only LOAD-BEARING required element — without it, this fix shouldn't be in this folder.

**Deviation is explicitly licensed.** If you're authoring fix #2 or #3 and find the template doesn't fit, deviate. Document the deviation in the fix file's Notes section so future audits can see the variation. At N=3+ across instances, this template will be audited and possibly refactored.

**At N=1, the right schema is unknown** — forcing a strict schema would force-fit future instances to the first one's shape. The loose-guide approach (this template) is intentional.

---

Each fix file should be named `NN__<kind_slug>.md` where NN is the index (01, 02, 03...) and `<kind_slug>` is a snake_case name describing the operation the fix performs (e.g., `vague_instruction_decomposition`).

## Suggested sections

### 1. Trigger condition (LOAD-BEARING; required)

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

## Notes section (optional)

If you deviated from this template's structure, document the deviation here so future audits can see the variation pattern.
```

### Section 3 — Paste-ready: `cognitive_harness/cognitive_fixes/01__vague_instruction_decomposition.md`

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

### Section 4 — Operational instructions to apply the folder

```bash
mkdir -p /Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/
```

Then write three files using the Write tool (content from Sections 1, 2, 3 above):

1. `/Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/README.md` ← content from Section 1
2. `/Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/_template.md` ← content from Section 2
3. `/Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/01__vague_instruction_decomposition.md` ← content from Section 3

Verify with:

```bash
ls -la /Users/ns/Desktop/projects/native/cognitive_harness/cognitive_fixes/
```

Expected output: `README.md`, `_template.md`, `01__vague_instruction_decomposition.md`.

### Section 5 — Caveats and acknowledged residuals

**Premature-formalization risk.** Creating a folder + template at N=1 application is at a LOWER level of formalization than a protocol; LOOP_DIAGNOSE Step 5 guardrail prohibits PROTOCOL promotion from one chain but ALLOWS lower-level documentation. The folder is the appropriate level for N=1 evidence. Named risks + mitigations:

| Risk | Mitigation |
|---|---|
| False-positive future fix proposals (force-fitting non-applicable cases) | Template's trigger-condition section (LOAD-BEARING required) + README's "what does NOT go here" list |
| Over-claiming methodology generality | Loose-guide template + N≥5 protocol-promotion gate |
| Bureaucratic friction | Template's "sections suggested not required" framing |
| Orphaned structure if pattern doesn't recur | Explicit kill conditions (a)(b)(c) |
| Authorship-bias amplification | LOOP_DIAGNOSE Step 5/6 verbatim external anchoring + first-instance-bias-ack in 4 locations |
| Future-incoming-dependency creep | README explicit warning against adding incoming deps until N≥5 |
| Sunk-cost reluctance against deletion | README explicit "if kill condition fires, DELETE" warning |

**CONTRARIAN-RETHINK acknowledgment.** The contrarian frame — "this folder at N=1 IS the premature-formalization failure" — partially survives. The pattern-learned side (cross-instance shared structure may not emerge) is real residual risk at N=1. The loose-guide template + kill conditions + reversibility handle the residual at low cost. The pre-structured side (the 7-step methodology pre-exists; the template structure is defined, not learned from N) is justified at N=1.

**N=1 evidence is thin.** The folder + template + first instance document one application of the methodology. Whether the methodology generalizes beyond instruction-decomposition is unknown. The kill conditions handle "what if it doesn't generalize" without requiring agent judgment — they're concrete N-count or audit-result triggers.

**Self-reference acknowledgment.** Claude authored both the methodology AND the first instance. This is encoded structurally across 4 artifact locations: README authorship subsection, template section #6, first-instance file section #6, this finding's caveats. Cross-author validation is the structural mitigation; it is not yet applied. The 5-chain branch experiment (per MVL+ fix evaluation gate) provides empirical validation as partial substitute.

**Meta-recursion warning applied to this design.** The enumeration of premature-formalization risks above (7 listed) cannot be proved complete. The user's own warning applies — if I missed a risk axis, the LLM (future agent operating this design) may skip it. The reversibility commitment is the structural backstop: even if a risk slipped through, the folder is deletable.

## Next Actions

### MUST

- **What:** Decide whether to apply the operational sequence (Section 4) — create the folder + 3 files.
  - **Who:** The user.
  - **Gate:** Observable — user signals approval to proceed (or rejection).
  - **Why:** This is the user's call; the recommendation is to proceed but the decision belongs to the user.

- **What:** If proceeding, apply the operational sequence (mkdir + Write 3 files + verify).
  - **Who:** The user OR the agent on the user's instruction.
  - **Gate:** Observable — `ls cognitive_harness/cognitive_fixes/` shows the 3 files.
  - **Why:** This realizes the recommended formalization level.

### COULD

- **What:** Cross-author-validate the first instance — open a fresh session with a different agent or a different model, ask them to review `01__vague_instruction_decomposition.md` against the template's required + suggested sections, and flag any anchoring-to-Claude's-framing concerns.
  - **Who:** Future inquiry or follow-up session.
  - **Gate:** Condition-bound — after creation; before any second-instance is authored.
  - **Why:** Structural mitigation against authorship bias.

- **What:** When the next inquiry that triggers a cognitive-fix candidate occurs, document it as `02__<kind>.md` per the template.
  - **Who:** Whoever authors the next applicable fix.
  - **Gate:** Condition-bound — applicable cognitive fix encountered.
  - **Why:** Accumulates evidence toward N≥3-5 cross-fix audit + N≥5 protocol-promotion threshold.

### DEFERRED

- **What:** Promote cognitive_fixes from folder to protocol at `cognitive_harness/protocols/cognitive_fixes.md`.
  - **Gate:** Condition-bound — N≥5 applications + stable internal method demonstrated.
  - **Why if revived:** the methodology has proven generic across cases.

- **What:** Add a runner hook to MVL+/MVL2+ that auto-loads cognitive_fixes protocol on trigger phrases.
  - **Gate:** Condition-bound — N≥10 applications + stable trigger language with no false positives.
  - **Why if revived:** the methodology has proven not just generic but reliably trigger-detectable.

- **What:** Retire the cognitive_fixes folder via `rm -rf cognitive_harness/cognitive_fixes/` (per kill condition).
  - **Gate:** Condition-bound — kill condition (a), (b), or (c) fires.
  - **Why if revived:** prevent zombie infrastructure if pattern doesn't materialize.

## Reasoning

### Why folder+template+index, not a full protocol

LOOP_DIAGNOSE Step 5 verbatim: "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method." Same logic applies to cognitive_fixes: don't promote to a protocol at N=1. But there's a level BELOW protocol — folder + template + indexed instances — that preserves methodology while remaining reversible. That's the right level for current evidence state.

### Why use LOOP_DIAGNOSE Step 5/6 verbatim rather than paraphrase

Authorship-bias mitigation. I (Claude) authored the methodology, the prior MVL+ fix, and this proposal. Anchoring staging gates to MY paraphrase of LOOP_DIAGNOSE's discipline would compound the bias. Using LOOP_DIAGNOSE's verbatim language anchors to external precedent (LOOP_DIAGNOSE itself was authored with user-explicit engagement). The verbatim citation creates a self-documenting anchor for future maintainers.

### Why two kill conditions (plus a calendar supplement)

Without explicit kill conditions, the folder becomes zombie infrastructure if the pattern doesn't recur. (a) is observable from inquiry telemetry (count inquiries without new cognitive_fix). (b) is auditable from accumulated fix files (check for shared structure). (c) is a calendar-bound supplement for low-activity periods where (a)'s N-count would never fire. The triple covers most realistic failure-to-recur scenarios.

### Why loose guide template not strict schema

At N=1 the right schema is unknown. The user's methodology warning applies recursively: if I impose a strict schema with missing fields, future cognitive fixes will force-fit to the schema and lose their distinct characters. Loose guide lets variation accumulate; at N=3+ cross-instance audit reveals the actual shared structure, which then becomes the schema. Stage the formalization in two phases: structure-loose (N=1) → schema-strict (N≥3 after audit).

### Why apply Critique's 5 REFINE outputs vs ignore them

Critique identified 5 specific gaps in Innovation's artifacts: (1) future-incoming-dependency warning; (2) calendar-bound inactivity supplement; (3) sunk-cost-reluctance warning; (4) strengthen loose-guide framing in template; (5) move deviation note from closing to opening of template. Each is a surface-level refinement that strengthens honesty without restructuring. Incorporated all 5 into Sections 1 + 2 of this finding.

## Open Questions

### Monitoring

- **Does the kill condition (a) fire within the project's normal cadence?** Observable: after the next 5 MVL+/MVL2+ inquiries with multi-part framing, check whether any added a new cognitive_fix; if none, kill condition (a) fires.
- **Does cross-fix audit at N=3-5 reveal shared structure?** Observable: after 3-5 cognitive fixes accumulate, audit for shared sections / patterns.
- **Does the calendar-bound supplement (c) fire?** Observable: after 90 days of project inactivity without inquiries.

### Blocked

- Protocol promotion (Step 5 threshold) is blocked on N≥5 stable applications.
- Runner hook (Step 6 threshold) is blocked on N≥10 stable trigger language.
- Cross-author validation requires a different agent session or different model.

### Research Frontiers

- **Generic pattern: at what evidence threshold does folder-level documentation justify promotion to protocol-level?** The "5 to 10" threshold from LOOP_DIAGNOSE is one data point; this finding inherits it but doesn't validate it. Multiple cognitive-fix accumulations + LOOP_DIAGNOSE applications might eventually inform a generalized threshold.
- **Generic pattern: how should self-modifying systems (cognitive harnesses that fix themselves) manage authorship bias across iterations?** This inquiry instantiates one instance of the pattern; a generalized study could examine the structural mitigations across multiple self-modification events.

### Refinement Triggers

- **Re-open the formalization level** if N=5+ applications demonstrate stable shared structure → promote to protocol.
- **Re-open the kill conditions** if they fire prematurely (folder retired before pattern had chance to emerge) → relax thresholds.
- **Re-open the template** at N=3+ for schema refinement (loose-guide → structured-schema if cross-instance pattern is visible).
- **Re-open the directly-applied MVL+ edit** if its 5-chain branch experiment fails (<3/5 catches) → revert via git; analyze why.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay now lets talk about this

and i have this methdology which we used many times,                                                                                 
                                                                                                                                       
  sometimes we can use a sentence/concept in our prompt but this prompt sth doesnt produce same coverage of results each run. and      
  this causes fluctuations in results quality. when this happens my appraoch is to understand the concept in terms of what it          
  consists of and what are components and redefine that part of the prompt with more verbose version of that sentence so that it       
  actually names these sub concepts components,,, this way LLM will see all coverage words and it is less likely to skip one aspect    
  or layer because it is explicit.  but key point is this decomposed version must be meta and have full coverage , otherwise if we     
  make it explicit but miss a component, LLM will skip that missing componenet

i think this should be a generic protocol which we can apply to some of issues we will have in future. maybe we need a cognitive_fixes protocol and this can be one of kind?  what do you think
```

Plus follow-up: "run the full loop"

</details>
