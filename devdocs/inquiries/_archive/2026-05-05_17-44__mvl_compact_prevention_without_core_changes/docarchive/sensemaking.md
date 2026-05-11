# Sensemaking: MVL Compact Prevention Without Core Changes

## User Input

`devdocs/inquiries/2026-05-05_17-44__mvl_compact_prevention_without_core_changes/_branch.md`

Question: How can compact or batched MVL/MVL+ execution be prevented without rewriting the core MVL loop or sub-skill discipline logic, while allowing narrowly scoped edits to relevant peripheral/rules sections of the MVL/MVL+ skill files?

## SV1: Baseline Understanding

Initial interpretation: the fix is probably not another generic reminder. MVL+ already says not to run skills all at once. The likely fix is to make the existing sequence operationally auditable: define what file/state patterns are invalid and what the runner must do when the structural checker is missing.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- Source-of-truth skills are under `homegrown/`, not the installed copies under `.codex`.
- Narrow edits to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` are allowed.
- Core loop rewrites are out of scope.
- Discipline sub-skill rewrites are out of scope.
- The fix must preserve explicit Markdown handoff behavior.
- MVL+ already has explicit anti-batching language.
- MVL classic has sequential protocol but weaker anti-batching emphasis.
- `tools/structural_check.sh` is absent, so automated validation is not currently enforceable.

### Key Insights

- The existing MVL+ prompt is not silent. The failure happened despite direct anti-batching text.
- Prompt text can still be improved if the improvement adds invariants, not more exhortation.
- The problem is not the core loop. The core loop shape is correct.
- The problem is not any one discipline sub-skill. The failure was orchestration.
- `homegrown/protocols/conclude.md` creates a usable lifecycle invariant: root outputs first, archive after finding.
- `_state.md` can carry the transaction ledger without adding a new routine artifact.

### Structural Points

- Runner prompts define orchestration.
- Discipline prompts define discipline reasoning.
- CONCLUDE defines finalization and archival.
- `_state.md` defines persistent execution state.
- Structural checker tooling defines automated validation but is currently missing.

### Foundational Principles

- A process is not enforced if only its desired final artifacts are specified.
- Sequential execution must leave observable intermediate state.
- Missing validation tooling should make the process more explicit, not less.
- Rule edits should name invalid states, not just desired behavior.

### Meaning-Nodes

- Anti-batching prompt
- Operational invariant
- Visible transaction
- State ledger
- CONCLUDE lifecycle
- Prompt parity
- Guardrail fallback

## SV2: Anchor-Informed Understanding

The prevention layer should be the runner rule/peripheral layer, backed by `_state.md` ledger conventions and CONCLUDE lifecycle invariants.

The existing prompts are not "the problem" in the sense of being conceptually wrong. They are incomplete at the enforcement layer: they say what to do, but do not sufficiently name invalid execution states or checker-fallback behavior.

## Phase 2: Perspective Checking

### Technical / Logical Perspective

A generic prompt addition like "do not batch" cannot prevent the observed failure, because MVL+ already says that. What can help is a rule that makes compact execution structurally illegal:

- no multi-discipline output patch;
- no `_state.md` final-complete update before per-discipline commits;
- no discipline output directly to `docarchive/`;
- no `finding.md` before Critique is complete;
- no silent skip when the structural checker is missing.

New anchor: prevention must be phrased as invalid states plus required fallback actions.

### Human / User Perspective

The user values explicitness and durable Markdown artifacts. A hidden wrapper that silently enforces sequence may be useful later, but it does not satisfy the documentation culture by itself. The user needs future readers to see what happened.

New anchor: the visible artifact trail is part of the value, not incidental output.

### Strategic / Long-Term Perspective

If MVL and MVL+ diverge in anti-batching rules, future compact failures may simply move from MVL+ to classic MVL. The rule language should be harmonized across both runners, adjusted for pipeline length.

New anchor: MVL/MVL+ parity matters.

### Risk / Failure Perspective

The risk is false compliance: the inquiry folder looks complete while the process was compact. Stronger prompt rules should target false compliance patterns directly.

New anchor: "complete-looking but invalid" is the failure class.

### Resource / Feasibility Perspective

Narrow edits to two runner skill files are feasible and low blast radius. Editing all discipline sub-skills would be broader and mislocalized. Building a wrapper is stronger mechanically but higher effort.

New anchor: narrow runner-rule edits are the practical first fix; tooling can be deferred or separate.

### Definitional / Consistency Perspective

The MVL/MVL+ runner is defined by the pipeline transition protocol, not by the final presence of discipline-named files. A rules section that makes this explicit does not change the core loop; it clarifies the existing definition.

New anchor: a "transaction invariant" clause is a definition-preserving edit.

## SV3: Multi-Perspective Understanding

The model shifts from "maybe add a prompt" to "add a specific runner invariant."

The existing prompts are not the root cause. They already contain sequential intent. But they are insufficiently defensive against the exact failure mode because they do not say what file/state patterns invalidate a run.

The natural repair is narrow and peripheral:

- add a "Discipline Transaction Invariant" rule to MVL and MVL+;
- add a "Structural Check Fallback" rule;
- add a "CONCLUDE Boundary" rule;
- keep sub-skills unchanged.

## Phase 3: Ambiguity Collapse

### Ambiguity: "Is adding a prompt the fix?"

**Strongest counter-interpretation:**
Yes. The compact failure happened because the prompt did not emphasize sequential execution enough, so adding a stronger reminder should solve it.

**Why the counter-interpretation fails (structural grounds):**
MVL+ already has a strong anti-batching reminder near the top and an explicit sequential transition protocol. The failure happened anyway. More reminder text has the same enforcement weakness unless it names observable invalid states and required state transitions.

**Confidence:** HIGH

**Resolution:**
Adding generic prompt text is not enough. Adding operational invariant rules may be useful.

**What is now fixed?**
The proposed edit must be invariant-based, not exhortation-based.

**What is no longer allowed?**
A fix that only repeats "run sequentially" in stronger wording.

**What now depends on this choice?**
Innovation should generate concrete invariant wording, not motivational prompt language.

**What changed in the conceptual model?**
Prompt edit remains viable, but only as a narrow rule/invariant edit.

### Ambiguity: "Are the existing prompts the problem?"

**Strongest counter-interpretation:**
Yes. Because the failure happened under the existing MVL+ prompt, the prompt itself must be flawed.

**Why the counter-interpretation fails (structural grounds):**
The prompt's core loop and transition protocol are correct. The failure contradicted the prompt rather than following it. The missing part is not the conceptual loop; it is enforcement specificity around invalid artifacts, state commits, and checker absence.

**Confidence:** HIGH

**Resolution:**
The existing prompts are not wrong at the core-loop layer. They are under-specified at the guardrail/invariant layer.

**What is now fixed?**
Core loop rewrite is unnecessary and out of scope.

**What is no longer allowed?**
Treating the entire MVL/MVL+ prompt as defective.

**What now depends on this choice?**
The final recommendation should target peripheral/rules sections only.

**What changed in the conceptual model?**
The problem becomes prompt hardening, not prompt replacement.

### Ambiguity: "Should the fix live in sub-skills?"

**Strongest counter-interpretation:**
Each discipline could be edited to insist on saving its own output, which would make batching less likely.

**Why the counter-interpretation fails (structural grounds):**
The failure was orchestration: the runner skipped executing each discipline as an independent transition. A sub-skill cannot enforce whether the runner called it separately. The runner controls sequence, state, and CONCLUDE timing.

**Confidence:** HIGH

**Resolution:**
Do not edit sub-skills for this failure.

**What is now fixed?**
The fix belongs in MVL/MVL+ runner rules or external runner tooling.

**What is no longer allowed?**
Diffusing the fix across discipline prompts.

**What now depends on this choice?**
Decomposition should keep sub-skills outside the write scope.

**What changed in the conceptual model?**
The failure is localized to orchestration.

### Ambiguity: "Is a wrapper/tool required?"

**Strongest counter-interpretation:**
Only a mechanical wrapper can prevent a model from ignoring prompts, so prompt edits are not worth doing.

**Why the counter-interpretation fails (structural grounds):**
A wrapper would be stronger, but the immediate failure mode can be made much easier to detect and harder to perform by naming file/state invariants. The allowed change surface includes runner rules, and the repo already treats Markdown state as operational memory.

**Confidence:** LOW

**Resolution:**
Start with narrow runner-rule hardening. Treat a wrapper or checker restoration as a stronger later option, not required for the first fix.

**What is now fixed?**
The immediate answer can recommend runner-rule edits without claiming perfect enforcement.

**What is no longer allowed?**
Claiming prompt edits fully mechanically prevent all future model noncompliance.

**What now depends on this choice?**
The final answer should separate "prevents by protocol" from "enforces mechanically."

**What changed in the conceptual model?**
Prevention has tiers: prompt invariants now, tooling later if needed.

## SV4: Clarified Understanding

The existing prompts are partly sufficient and partly under-specified.

They are sufficient about the core loop: MVL is S -> I -> C, MVL+ is E -> S -> D -> I -> C.

They are insufficient about invalid process artifacts: a batched patch, direct-to-archive outputs, a one-shot `_state.md` completion, or silent structural-check skip should be explicitly invalid.

The best immediate fix is not to rewrite the loop or sub-skills. It is to add a small "Discipline Transaction Invariant" and "Structural Check Fallback" rule to both Homegrown MVL runners, with stronger parity in classic MVL.

## Phase 4: Degrees-of-Freedom Reduction

### Fixed Variables

- Source files: `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`.
- Allowed edit type: narrow rules/peripheral hardening.
- Disallowed edit type: core loop rewrite and sub-skill discipline rewrite.
- Required prevention shape: observable state/file invariants.
- Required fallback: explicit handling when `tools/structural_check.sh` is missing.

### Eliminated Options

- Add only another generic "do not batch" prompt.
- Rewrite MVL/MVL+ core loop.
- Edit every sub-skill.
- Rely only on final `finding.md` existence as proof.
- Treat structural checker absence as a reason to skip validation.

### Viable Paths

- Add a discipline transaction invariant to both MVL and MVL+.
- Add invalid-state examples to both rules sections.
- Add structural-check fallback instructions.
- Add CONCLUDE boundary language: no `finding.md` or `docarchive/` movement before all discipline transactions are committed.
- Later, restore `tools/structural_check.sh` or add a runner wrapper.

## SV5: Constrained Understanding

The answer is now constrained:

The existing prompts are not fundamentally the problem; the missing guardrail language is. A narrow edit to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` is appropriate if it adds operational invariants and parity, not if it merely adds more warning text.

The first fix should make compact execution detectable as invalid inside the prompt contract:

- one discipline output per transaction;
- `_state.md` update after each transaction;
- structural check attempted or manual fallback recorded;
- no direct-to-`docarchive/` output during the discipline phase;
- no `finding.md` until CONCLUDE.

## Phase 5: Conceptual Stabilization

The prevention should be a small runner-level contract hardening.

It should preserve the existing core loop, leave discipline sub-skills alone, and add a visible process invariant:

> MVL/MVL+ is not complete because the final files exist. It is complete only if each discipline left a transaction trail in `_state.md` before CONCLUDE.

## SV6: Stabilized Model

The right fix is not "add another prompt" in the generic sense, and it is not "the existing prompts are bad." The right fix is to add narrowly scoped, invariant-based rules to the Homegrown MVL and MVL+ runner skill files.

MVL+ already has anti-batching text, so its edit should clarify invalid states and checker fallback. MVL classic should get parity because it has the same orchestration risk but weaker anti-batching language.

Compared with SV1, this model is more precise: it identifies the exact editable layer, distinguishes warning text from enforceable invariants, and separates immediate prompt hardening from later mechanical tooling.
