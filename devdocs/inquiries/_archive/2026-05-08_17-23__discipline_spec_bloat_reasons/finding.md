---
status: active
---
# Finding: Discipline-spec apparent-bloat reasons

## Question

For each of the three apparent-bloat patterns identified in the homegrown discipline reference files — (1) reference-loading boilerplate triplication, (2) failure-mode triplication, (3) bolted-on sub-rules inside numbered process steps — what is the load-bearing structural reason that justifies the pattern, and which (if any) are genuinely refactorable without losing that load-bearing function?

**Goal:** produce, per pattern, a verdict that either names the load-bearing reason (making the apparent bloat a defended choice) or identifies a concrete refactor that preserves the load-bearing function while removing the redundancy. The user should be able to decide, per pattern, *"keep as-is and document why"* or *"refactor along this specific path."*

## Finding Summary

- The apparent bloat is a deliberate cost of three principles operating together — the placement convention from `enes/discipline_rule_placement.md` (the "one canonical home per rule" rule), audience-separation operationalized as system-runtime-moment, and execution-hugging as a working assumption that rules placed at the point of firing are more likely to fire under context load.

- **Pattern 1 (reference-loading boilerplate):** load-bearing on the first two placements (Step 0 pre-read in `SKILL.md`; Loading note at top of `references/X.md`). The third placement — the "Reference loading during execution" footer in `SKILL.md` (called *A3* in this finding) — is defended but currently overweight. Compress A3 to a one-liner naming the section: *"On failure-mode recognition or vocabulary lookup mid-execution, consult `references/X.md`."*

- **Pattern 2 (failure-mode triplication):** load-bearing on the canonical body in `references/X.md` and the mid-execution footer in `SKILL.md`. The middle placement — the bottom-of-file Summary table in `references/X.md` (called *B2* in this finding) — has the weakest defense in the inquiry. Replace its failure-modes row with a brief heading-derived list. For references files over 300 lines, also add a TOC at the top of the file.

- **Pattern 3 (bolted-on sub-rules):** correctly placed per the placement convention. Step-level rules belong at the step; the visual accretion is the cost of following the convention strictly. The residual issue is typographic, not structural: there is no visual signal distinguishing the spine of a process step from refinement notes attached to it. Apply an italic `*Refinement note (applies at [Step / Phase / Component]):*` prefix to each bolted-on subsection. Do not relocate.

- **Across patterns:** the principle "audience-separation" is best operationalized as *system runtime moment with distinct context-state and distinct failure prevention*, not as "human role." This is the test that distinguishes legitimate scope-by-audience from loophole abuse of the placement convention.

- A corpus-wide compression-discipline addendum to the placement convention (the convention currently governs *where* rules live, not *how* they're formatted) is deferred until per-piece refactors above land and survive use without complaint.

- Phase-fit caveat: the homegrown codebase is at early calibration. These verdicts are conservative (defend defenses; compress only where the audience is real but the wording is overweight). At maturity — when telemetry exists and miss-rates can be measured — some defenses can be revisited.

## Finding

### Why this matters

The homegrown project ships a set of *thinking disciplines* — each is a pair of files: a `SKILL.md` (the operational protocol invoked via the Skill tool) and a `references/X.md` (the canonical framework the protocol depends on). The corpus has six core discipline pairs (explore, sense-making, decompose, innovate, td-critique, comprehend) plus a boundary discipline (navigation). Reading these specs at speed produces a "this looks bloated" impression. The user asked the question with a strong prior — *"there are reasons to the most bloat looking things"* — and asked the inquiry to surface the reasons. This finding does that, then identifies the genuine compression opportunities the prior leaves room for.

### 1. The three principles that defend the patterns

The defense rests on three principles, each of which the inquiry confirmed by reading the spec corpus directly:

**The placement convention.** Documented in `enes/discipline_rule_placement.md`, the convention says every refinement rule has *one* canonical home, determined by its scope. Operation-level rules live in the operation's component subsection. Step-level rules live in the process-model step. Failure-only rules live in the failure-mode prevention subsection. Non-canonical surfaces use one-line cross-references. The convention's intent is to prevent rule duplication, drift, and multi-surface maintenance.

**Audience-separation.** A redundancy is not duplication if each placement addresses a different audience under different conditions. The inquiry tested this against the strongest counter-reading ("audience-separation is rhetoric for keeping bloat") and concluded that "audience" must be operationalized strictly as *system runtime moment with distinct context-state and distinct failure prevention* — not human role and not vague timing. Under this strict reading, the pattern-1 and pattern-2 placements are defensible: they fire at different runtime moments and prevent different failures.

**Execution-hugging.** A working assumption — held with LOW confidence on the underlying claim but HIGH confidence on conservative-default reasoning — that rules placed at the point where they fire are more likely to be applied by an LLM under context load than rules placed in a sidebar or appendix. The argument is about attention allocation under load, not about absence-from-context (the LLM has the whole file in context regardless). The conservative default is to keep canonical-step placement; refactors of pattern 3 are typographic only.

### 2. Pattern 1 verdict — reference-loading boilerplate triplication

Three placements address three runtime moments:

| ID | Where | Audience (runtime moment) | Failure it prevents |
|---|---|---|---|
| A1 | `SKILL.md` Step 0 "Mandatory pre-read" | Skill-tool invocation moment | LLM skips to Step 1 and executes from memory of similar disciplines |
| A2 | `references/X.md` top-of-file "Loading note" | File-read moment (maintainer opening the references file) | Contributor refactors the references file without realizing every section is load-bearing |
| A3 | `SKILL.md` footer "Reference loading during execution" | Mid-execution recognition moment | LLM has de-prioritized loaded references content as context fills; needs re-anchor |

Each placement prevents a different failure under different conditions. Removing any of them would leave one of the three failures unprotected. The convention is satisfied (these are different rules, not duplicates of one rule) and audience-separation passes the strict-operationalization test.

A1 and A2 are at the right length already. A3 is currently a paragraph that names specific failure modes and references the framework vocabulary; the audience-function is preserved by a one-line section pointer. **The refactor:** replace A3's paragraph with *"On failure-mode recognition or vocabulary lookup mid-execution, consult `references/X.md`."* Apply to the seven `SKILL.md` files that currently have this footer.

### 3. Pattern 2 verdict — failure-mode triplication

Three placements:

| ID | Where | Audience (runtime moment) | Function |
|---|---|---|---|
| B1 | `references/X.md` body "## Failure Modes" | Deep-read audience studying the discipline | Canonical content (each failure mode has signal / recognition / prevention / corrective) |
| B2 | `references/X.md` summary table at file end | Skim audience verifying coverage | Index / scan layer + maintenance backstop (count check) |
| B3 | `SKILL.md` footer parenthetical reminder | Mid-execution recognition (same as A3 above) | Re-anchor at the moment failure recognition fires |

B1 and B3 pass the same strict audience-separation test that defends pattern 1. B2 is the weakest placement in the entire inquiry — its content is mostly heading-name restatement of B1, and its maintenance-backstop function is pragmatic (no automation enforces the count) rather than structural.

**The refactor:** replace the failure-modes row of the bottom-of-file Summary table with a brief heading-derived inline list immediately after the body Failure Modes section (e.g., *"Failure modes: Premature filtering · Recency bias · Action bias · Enumeration without reasoning · Route state omission · Scope fixation"*). Drift is bounded: list names match B1's headings; renaming a heading produces obvious list staleness. Other rows of the Summary table — Components, Process, Coverage — are not addressed by this verdict; they have stronger defenses (Components are discipline-architecture; Processes are step-ordering; Coverage are convergence rules — these are not pure restatement). A separate inquiry can examine those rows if needed.

For references files over 300 lines (navigation, td-critique, innovate, sensemaking, comprehend), additionally add a brief TOC at the file top. The TOC and the heading-derived list are complementary — TOC serves "where am I?" navigation; list serves "did I see all of them?" completion.

### 4. Pattern 3 verdict — bolted-on sub-rules inside numbered process steps

The inquiry audited every bolted-on subsection in the corpus against the placement convention (e.g., sensemaking's "Load-bearing concept test" inside Phase 3; explore's "Type-Aware Probing" inside the Probe component; decompose's "Determination-mechanism piece check" inside Step 7 Self-Evaluate; td-critique's "Project-specific risk dimension check" inside Phase 0 and "Multi-axis prosecution depth check" inside Phase 2; innovate's "Output disposition categories" and "Axis coverage check" inside Phase 3 Test). Every subsection is at its convention-correct canonical home: step-level rules live at the step; component-level rules live at the component.

The "this looks bolted-on" sensation is the visual cost of strict convention compliance, not a sign of misplacement. The convention says where rules live, not how they are formatted; the residual issue is typographic. A 25-line refinement subsection at the same heading level as the spine of a process step blurs the distinction between main process and refinement.

**The refactor:** prefix each bolted-on subsection with *"\\*Refinement note (applies at [Step / Phase / Component]):\\*"* on the first line, then the existing body content. Italicized so it's visually distinct without changing heading level. No relocation — execution-hugging working assumption respected. Apply uniformly across the corpus. For long refinements (over 20 lines), an optional closing marker *"\\*— end refinement note —\\*"* may be added; this is escalation, not the v1 form.

### 5. The cross-pattern observation

All three patterns are instances of one underlying principle at higher abstraction — *use-case-driven placement* — where homegrown values redundancy when each placement has a distinct cognitive use. The principle subsumes both audience-separation (patterns 1 and 2) and execution-hugging (pattern 3). At the verdict level, the patterns remain operationally distinct (different defenses, different refactor candidates), but the unifying observation is real.

This unifying principle could be promoted to a formatting addendum on the placement convention itself (the convention currently governs *where* rules live, not *how* they are formatted; that silence is a real gap). The addendum is **deferred** until the per-piece refactors above have landed in at least one discipline pair and survived 30 days of use without complaint. Premature codification at this stage is the failure mode to avoid.

## Next Actions

### MUST

- **What:** Apply C1.1 — replace the "Reference loading during execution" paragraph in each `SKILL.md` with *"On failure-mode recognition or vocabulary lookup mid-execution, consult `references/X.md`."*
  **Who:** human-driven spec edit (or a future materialization run via `homegrown/protocols/artifact_materialization.md`).
  **Gate:** apply one discipline at a time; verify cross-references stay valid after each edit.
  **Why:** A3 is currently a paragraph; the audience function is preserved by a one-line section pointer because A1 (Step 0 pre-read) ensures the references content is loaded; A3's job is re-anchoring, not re-stating.

- **What:** Apply C2.2 — in each `references/X.md`, replace the failure-modes row of the bottom Summary table with a brief heading-derived inline list after the body Failure Modes section.
  **Who:** human-driven spec edit.
  **Gate:** scope to the failure-modes row only; do not touch Components, Process, or Coverage rows in this pass.
  **Why:** B2's failure-modes content is the weakest placement in the corpus (pure heading restatement; backstop function is pragmatic). The heading-derived list preserves the skim audience with bounded drift risk.

- **What:** Apply C3.4 — prefix each bolted-on subsection in the corpus with `*Refinement note (applies at [Step / Phase / Component]):*` on its first line.
  **Who:** human-driven spec edit.
  **Gate:** apply uniformly to every bolted-on subsection identified in the inquiry's decomposition file. No heading-level change. No relocation.
  **Why:** the placement convention is silent on formatting; the visual accretion at hot-spot steps blurs spine vs. refinement. The italic prefix is the minimum-sufficient signal that preserves canonical-step placement (execution-hugging).

### COULD

- **What:** Apply C2.3 — add a brief TOC at the top of references files exceeding 300 lines (navigation.md, td-critique.md, innovate.md, sensemaking.md, comprehend.md).
  **Who:** human-driven spec edit, complementary to C2.2 in those files.
  **Gate:** files over 300 lines only; shorter files use C2.2 alone.
  **Why:** for long files, the skim audience is real and currently underserved by a bottom-of-file table. TOC at top adds genuine navigation value. For shorter files, this is over-engineering.

### DEFERRED

- **What:** Promote A1 — formalize a compression-discipline addendum to `enes/discipline_rule_placement.md` covering the formatting gap (the convention currently governs placement only).
  **Gate:** after C1.1, C2.2, and C3.4 have each been applied to at least one discipline pair AND have survived 30 days of use without re-edit or complaint.
  **Why if revived:** at that point, accumulated evidence supports treating the silence on formatting as a gap to fill rather than a deliberate omission. Premature codification before per-piece evidence would be making a corpus-wide rule from three case studies.

- **What:** C2.5 — replace B2's failure-modes row with a content-rich trigger table (each row carries trigger conditions per failure mode, distinct from B1's recognition descriptions).
  **Gate:** if a separate effort adopts the regression-symptom schema from `enes/regression/desc.md` (which has fields like `signal`, `baseline`, `deviation`, `specificity`, `severity`) into discipline failure modes as a corpus-wide upgrade.
  **Why if revived:** at that point, B2 would carry distinct fields rather than restated names. The trigger table becomes the natural target form because it adds content not present elsewhere in the spec.

- **What:** C3.1 — escalate refinement-note prefix from italic to bold.
  **Gate:** if a sample reading test (or accumulated user complaint) shows readers miss italic-prefixed refinements at the same rate as un-prefixed ones.
  **Why if revived:** italic alone may be too subtle for long bodies; bold is the next typographic step that preserves all other constraints.

## Reasoning

### Why these three principles defend the patterns

The inquiry generated and tested several alternative readings before settling on the three principles. The strongest counter-reading was that "audience-separation" is rhetoric — that "different audiences" can be granted to almost any redundancy and the principle drains the placement convention's compression force. The counter was rejected on structural grounds: the three placements in pattern 1 (and the three in pattern 2) address three observably distinct runtime moments — skill-load time, file-read time, mid-execution recognition time — with distinct available context and distinct failure prevention. Collapsing them into one rule would lose at least one failure-prevention role. The strict operationalization (audience = runtime moment with distinct context-state and distinct failure) is what makes the principle non-trivial.

Execution-hugging held with LOW confidence on the underlying claim (no telemetry) but HIGH confidence on conservative-default reasoning. The claim — that rules placed at the point of firing are more likely to be applied — is plausible but unverified. Conservative-default reasoning says: place rules where they fire; this costs nothing if LLMs always check sidebars (the rule still fires) but helps if they don't. That's enough to defend canonical-step placement absent contrary evidence.

The placement convention's silence on formatting was held with LOW confidence (could be deliberate scope, could be oversight). Pattern 3's verdict respects the convention as-written and adds typographic improvements only at the formatting layer where the convention is silent — not by re-opening the convention itself.

### Why these refactors over the alternatives

Innovation generated and tested twelve refactor candidates across the three patterns. The four survivors (C1.1, C2.2, C2.3, C3.4) won on multi-mechanism convergence — at least three of the seven innovation mechanisms (lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, extrapolation) pointed independently at each survivor. Single-mechanism survivors were either deferred (C2.5, C3.1) or absorbed (e.g., C1.5, the SEE ALSO line, refined into C1.1's section pointer).

Two candidates were killed during innovation:

**C1.4 (drop A3 entirely)** was killed because A3's audience — the mid-execution recognition moment — is real. Dropping the placement loses the third runtime-moment defense. The seed from this kill: if a future calibration shows mid-execution LLMs robustly re-read references on their own without a footer pointer, A3 could be dropped at maturity.

**C3.5 (invert the spine — make refinements visually prominent and main process visually demoted)** was killed because a reader needs to find the spine to operate the discipline. The seed: maybe specs need three visual layers (spine / refinement / corner-case) with three typographic levels — but that's over-engineering at the current scale.

### Why per-pattern verdicts and not one unified verdict

The three patterns share an underlying principle (use-case-driven placement) at higher abstraction, but they have different *strongest defenses* (audience-separation vs. execution-hugging) and different *refactor candidates* (compression vs. typography). At the spec-edit level — which is what the user needs — the verdicts must be per-pattern. The unifying principle is recorded as a frontier observation worth promoting later, not as a single verdict for the whole inquiry.

### What this finding does NOT claim

- It does not claim the placement convention itself needs editing. Pattern 3 explicitly respects it.
- It does not claim the refactors should be applied corpus-wide as a single sweep. Each refactor is per-discipline-pair, applied incrementally with cross-reference verification.
- It does not claim the apparent bloat is *actually* bloat. The patterns are mostly defended; the refactors target the weakest placements only.
- It does not claim execution-hugging is proven. The claim is held as a working assumption with conservative-default reasoning; refactors honor it without resting on it.

## Open Questions

### Monitoring

- After C1.1 applies to the seven `SKILL.md` files, does the corpus show observable changes in how the LLM responds to mid-execution failure-mode recognition? If output quality degrades, A3 was carrying more than the audience-function model captured.
- After C2.2 applies, does the heading-derived list drift faster or slower than the original B2 table? Drift signal would inform whether the heading-anchor approach generalizes.
- After C3.4 applies, does a sample reading test (or user complaint) suggest readers still confuse spine and refinement in long bodies (over 20 lines)? Triggers escalation to C3.1 (bold) or end-marker addition.

### Blocked

- The compression-discipline addendum (A1) cannot ship until per-piece refactors land and survive 30 days. This is intentional gating to avoid premature codification.
- Refactor of the rest of the bottom Summary table in `references/X.md` (the Components, Process, and Coverage rows) is blocked until a separate inquiry establishes whether those rows have weaker defenses than expected.

### Research Frontiers

- Empirical validation of execution-hugging. Does an LLM running the discipline with refinements demoted to a sidebar produce measurably different output quality than the same LLM with refinements at the canonical step? Would require a test harness that doesn't currently exist.
- Hot-spot refactoring criteria: when one process step accumulates three or more refinement subsections (sensemaking Phase 3 currently has three; td-critique Phase 0 has one and Phase 2 has one; innovate Phase 3 has two), is this a signal that the step itself should be split? Out of scope here; would require a separate inquiry on phase-level refactoring criteria.
- Generalization to other apparent-bloat patterns. The `/MVL` and `/MVL+` runner files are roughly 95% duplicated; the "What X IS / IS NOT" sections appear in every discipline; the "Invalid compact execution patterns" eight-bullet list in `MVL+/SKILL.md` reads as patch-on-patch. Each is a candidate for the same use-case-driven-placement analysis. Would be separate inquiries.

### Refinement Triggers

- If telemetry becomes available (e.g., a cross-session metric of how often each discipline's failure modes are correctly recognized at execution), the LOW-confidence claim on execution-hugging can be tested. Reopen pattern-3 verdict if the test contradicts the conservative default.
- If `enes/discipline_rule_placement.md` is updated independently of this finding, reopen pattern-3 verdict to verify the convention's new form still endorses canonical-step placement for step-level rules.
- If the homegrown calibration state changes (e.g., 30+ inquiries have completed under the current spec corpus and patterns of use are observable), revisit phase-fit conservatism. Some defenses currently held on the conservative default may be relaxable at maturity.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
when you read the discipline skill reference files. What is are top 3 things that
looks messy and bloat or something that could have made more compact or more clean?

[and on follow-up:]

spin actual MVL+, becasue there are reason to the most bloat looking things..
```

</details>
