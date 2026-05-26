# Innovation — Structural Check Tool Path Elaborations + Meta-Decision

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/_branch.md

Input: decomposition.md (5 pieces P1-P5) + sensemaking.md (4 commitments + 4 paths) + exploration.md (substrate map).

Job: generate concrete operational details per path (P1-P4) + meta-decision synthesis (P5). Apply mechanisms where relevant; aim for full coverage across the inquiry. 5-test cycle + 2 user bars. Assembly check for hybrids. End purpose: give Critique concrete candidates to evaluate against the 4 commitments.
```

---

## Phase 1 — Seeds

Per piece:
- **S-P1 (Path A REMOVE+gate):** the user's REMOVE prior + Sensemaking's added gate-preservation / mechanism-honesty / reliability-acknowledgment requirements. The seed is the user's preference made operationally explicit.
- **S-P2 (Path B BUILD MINIMAL):** the universal-section pattern (every discipline has a standardized verdict line + a User Input record). The seed is "what's the smallest deterministic check that's still useful?"
- **S-P3 (Path C FORMALIZE protocol):** the project's existing protocol pattern (`conclude.md`, `branch_inquiry.md`). The seed is "elevate the fallback into a first-class protocol."
- **S-P4 (Path D HYBRID with adversarial-test):** the empirical-record ambiguity from exploration. The seed is "validate before formalizing."
- **S-P5 (Meta-decision):** the 4 commitments × 4 paths comparison space.

### Intuition / Direction

- **Context:** Sensemaking SV6 committed 4 paths + 4 structural commitments. Decomposition committed per-path pieces + meta-decision. The empirical record's ambiguity is the central epistemic gap.
- **Valuation:** HIGH-VALUE candidates are CONCRETE (Critique can act on them without re-deliberation) and HONEST (they address the commitments rather than papering over them). LOW-VALUE candidates are vague or fail commitments quietly.
- **Motivation:** give Critique enough concrete material that the winning path can be picked on commitment-satisfaction, not on framing-level handwaving.

---

## Phase 2 — Generate

### P1 — Path A: REMOVE with explicit gate-preservation

**Mechanisms applied:** Combination (combining REMOVE with explicit gate-preservation + substrate-honest naming + reliability caveat), Constraint Manipulation (constraint: spec text must accurately name mechanism).

#### P1 elaboration — the 4 spec edits + LLM-self-check procedure + reliability caveat

**Edit 1: `homegrown/MVL/SKILL.md` line 23** (Workspace Invariant fallback rule)

*Before:*
> 6. If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`.

*After:*
> 6. Run the structural check on the saved output (procedure in Step 4 below). The check is performed by the LLM session against the discipline's required output structure; outcome is recorded in `_state.md`. On `[FAIL]`, fix the missing sections in the output and re-save before continuing.

**Edit 2: `homegrown/MVL/SKILL.md` line 159** (Discipline Transition Protocol step 4)

*Before:*
> 4. **Run structural check** on the saved output:
>    ```
>    bash tools/structural_check.sh [inquiry_path]/[output_file] [discipline_name]
>    ```
>    Discipline-to-name mapping: `exploration.md → exploration`, `sensemaking.md → sensemaking`, ...
>    If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm. Include the results in the next checkpoint display.

*After:*
> 4. **Run structural check** on the saved output:
>    Read the discipline's reference file (`homegrown/<discipline>/references/<discipline>.md`) or the discipline's `SKILL.md` to identify its required output structure (typically listed under "Final Deliverable" or "Output"). Verify each required structural element is present in the saved output. Record the result in `_state.md` as `Structural check: [PASS] (<N>/<M> sections present)` or `Structural check: [FAIL: <missing-element-1>, <missing-element-2>, ...]`.
>    If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm. Include the results in the next checkpoint display.
>    *Mechanism note:* this structural verification is performed by the LLM session; its mechanism is probabilistic in execution but binary in outcome (a section is present or it isn't). The verification has not been adversarially validated; treat the check as preventing obvious structural omissions, not as a robust regression guard.

**Edit 3: `homegrown/MVL+/SKILL.md` line 26** — same change as Edit 1, applied to MVL+ fallback rule.

**Edit 4: `homegrown/MVL+/SKILL.md` line 197** — same change as Edit 2, applied to MVL+ Discipline Transition Protocol step 4.

**enes/ design-note disposition:**
- `enes/self_improvement_rate.md` line 313: the reference to `tools/structural_check.sh` for Q4c automation needs a one-line note added: *"(Note: as of [date], `tools/structural_check.sh` is not a planned artifact; Q4c automation is deferred or addressed via the protocol at MVL+/SKILL.md.)"*. Or edited to remove the reference if Q4c is being re-specified. **Decision:** add one-line note; preserves the inquiry's historical record while pointing to current state.
- `enes/runtime_environment/folder_based.md` line 160: rewrite from *"The runner verifies the file exists (and runs a structural check if `tools/structural_check.sh` is available)..."* to *"The runner verifies the file exists and runs the structural check (per MVL/MVL+ SKILL.md procedure)..."*. Minor edit.
- `enes/loop_desing_ideas/loop_design_2.md` line 127: this file is design-history/notebook material — it discusses an idea explored at design time. **Decision:** keep as historical record with no edit; it's a notebook, not a runtime spec.

**Reliability caveat (the "Mechanism note" in Edit 2):** explicitly acknowledges the probabilistic mechanism and the unvalidated reliability. Satisfies commitment 3.

**Commitment satisfaction (Path A):**
- C1 gate preservation: PASS — Edit 1's "On `[FAIL]`, fix the missing sections in the output and re-save before continuing" is explicit fix-and-re-save.
- C2 mechanism honesty: PASS — "Mechanism note" accurately names the mechanism as probabilistic.
- C3 reliability acknowledgment: PARTIAL — caveat states unvalidated state but doesn't itself validate; promotes the question to future inquiry.
- C4 autonomy-trajectory: PARTIAL — L0 acceptable; the caveat language gestures at "robust regression guard" being a higher bar but doesn't commit to L4+ readiness.

**5-test cycle:**
- Novelty: MEDIUM. The REMOVE option was named by the user; the elaboration adds the operational specifics (the 4 spec edits, the procedure, the caveat language, the enes/ disposition).
- Scrutiny survival: HIGH. Directly addresses each of the 4 commitments with concrete text.
- Fertility: MEDIUM. Opens the follow-up question of whether and when reliability validation should be pursued.
- Actionability: HIGH. The 4 edits' before/after text is concrete; modest effort to apply.
- Mechanism independence: HIGH. The elaboration is multi-mechanism (Combination + Constraint Manipulation + implicit Inversion of fallback-to-primary).
- *Proximate:* YES. *Consistent:* YES.

**Disposition:** **ACTIONABLE.**

---

### P2 — Path B: KEEP-AND-BUILD MINIMAL

**Mechanisms applied:** Combination (combining the universal verdict-line pattern with per-discipline minimal sentinels), Absence Recognition (the missing universal section check is the seed for what to detect).

#### P2 elaboration — the script + integration

**Stable universal signals across all 5 disciplines:**
- Every discipline output contains a standardized verdict line: `**Overall: PROCEED**`, `**Overall: FLAG**`, or `**Overall: RE-RUN**` (per `homegrown/protocols/resume.md`'s line-pattern matching).
- Every discipline output begins with a `## User Input` record (per each discipline's SKILL.md step 5/6/4).
- Plus discipline-specific top-level sections.

**Script source code (`tools/structural_check.sh`):**

```bash
#!/usr/bin/env bash
# tools/structural_check.sh — minimal Primitive RC for discipline outputs.
# Usage: bash tools/structural_check.sh <output_file> <discipline_name>
# Output: prints "[PASS]" or "[FAIL: <reasons>]". Exit code 0 on PASS, 1 on FAIL.

set -euo pipefail

OUTPUT_FILE="${1:?usage: $0 <output_file> <discipline_name>}"
DISCIPLINE="${2:?usage: $0 <output_file> <discipline_name>}"

FAILS=()

if [[ ! -f "$OUTPUT_FILE" ]]; then
  echo "[FAIL: file_missing]"; exit 1
fi

# Universal check 1: non-trivially sized (>1KB; spec requires substantive output)
[[ $(wc -c < "$OUTPUT_FILE") -lt 1024 ]] && FAILS+=("output_too_small")

# Universal check 2: standardized verdict line is present
grep -qE '\*\*Overall: (PROCEED|FLAG|RE-RUN)\*\*' "$OUTPUT_FILE" \
  || FAILS+=("no_overall_verdict")

# Universal check 3: user-input record present (## User Input)
grep -qE '^## User Input' "$OUTPUT_FILE" || FAILS+=("no_user_input_record")

# Per-discipline check: top-level required section sentinel(s)
case "$DISCIPLINE" in
  exploration)
    grep -qE '^## Territory Overview' "$OUTPUT_FILE" || FAILS+=("no_territory_overview")
    grep -qE '^## (Confidence Map|Frontier State|Gaps and Recommendations)' "$OUTPUT_FILE" \
      || FAILS+=("no_convergence_section")
    ;;
  sensemaking)
    grep -qE '^## (SV6|Final Sense Version)' "$OUTPUT_FILE" || FAILS+=("no_sv6")
    grep -qE '^## (Phase 1|Phase 5)' "$OUTPUT_FILE" || FAILS+=("no_phase_structure")
    ;;
  decomposition)
    grep -qE '^## (Step 1|Coupling)' "$OUTPUT_FILE" || FAILS+=("no_coupling_topology")
    grep -qE '^## (Step 7|Self-Eval|Self-Assessment)' "$OUTPUT_FILE" || FAILS+=("no_selfeval")
    ;;
  innovation)
    grep -qE '^## (Phase 2|Generate)' "$OUTPUT_FILE" || FAILS+=("no_generation_phase")
    grep -qE '^## (Phase 3\.5|Assembly)' "$OUTPUT_FILE" || FAILS+=("no_assembly_check")
    ;;
  critique)
    grep -qE '^## (Phase 0|Dimension)' "$OUTPUT_FILE" || FAILS+=("no_dimensions")
    grep -qE '^## (Phase 3|Verdict|Candidate Verdict)' "$OUTPUT_FILE" || FAILS+=("no_verdicts")
    ;;
  *)
    FAILS+=("unknown_discipline:$DISCIPLINE")
    ;;
esac

if [[ ${#FAILS[@]} -eq 0 ]]; then
  echo "[PASS]"; exit 0
else
  echo "[FAIL: ${FAILS[*]}]"; exit 1
fi
```

**Line count:** ~50 lines including comments + blanks. Within the ~20-50 range Decomposition specified.

**Integration:** the existing MVL/MVL+ spec at lines 159/197 invokes this directly — no spec edit needed for Path B. The script needs to be ADDED to the repo at `tools/structural_check.sh`. The runner's existing `If any [FAIL] lines appear, fix the missing sections in the output and re-save` text already specifies the gate behavior.

**Maintenance cost:** the script needs editing when:
- A discipline's top-level required sections change (rare; refinements add sub-rules more often).
- A new discipline ships (rare; adds a new `case` branch).
- The "Overall:" verdict line format changes (very rare; tied to the `resume.md` protocol's line-pattern matching).

**Commitment satisfaction (Path B):**
- C1 gate preservation: PASS — script's `[FAIL]` output triggers existing runner spec's fix-and-re-save behavior.
- C2 mechanism honesty: PASS — script is deterministic; spec already accurately names it as automated structural check.
- C3 reliability acknowledgment: PASS — deterministic mechanism eliminates the rubber-stamping risk for the universal-and-per-discipline sentinels the script checks. (Deep-structure verification beyond the script's scope still requires LLM judgment.)
- C4 autonomy-trajectory: PASS — script scales to L4+ multi-head (deterministic; low per-invocation cost; same script for all heads).

**5-test cycle:**
- Novelty: MEDIUM. The script's universal-verdict-line + user-input-record + per-discipline sentinel pattern is non-obvious; uses the existing `resume.md` line-pattern as anchor.
- Scrutiny survival: HIGH. PASSes all 4 commitments.
- Fertility: HIGH. The universal-section pattern is reusable: it surfaces a stable structural invariant the project already maintains.
- Actionability: HIGH. Script provided in full; ready to copy into `tools/structural_check.sh`.
- Mechanism independence: HIGH. Combination + Absence Recognition.
- *Proximate:* YES. *Consistent:* YES (deterministic by design).

**Disposition:** **ACTIONABLE.**

---

### P3 — Path C: FORMALIZE LLM-self-check as protocol

**Mechanisms applied:** Domain Transfer (transfer the protocol-loading pattern from `conclude.md` and `branch_inquiry.md`), Constraint Manipulation (constraint: protocol must explicitly state substrate-honest mechanism).

#### P3 elaboration — the protocol file + runner integration

**File: `homegrown/protocols/structural_check.md` (~60 lines)**

```markdown
> **Loading note.** This file is loaded by `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` at the post-discipline structural-check step. It is intended to be read in full before the structural check is performed. Every section below — procedure, gate behavior, failure modes, substrate honesty — is referenced by the runner. Do not summarize or partial-load.

---

# STRUCTURAL_CHECK — The Discipline-Output Structural Verification Protocol

STRUCTURAL_CHECK is the operational protocol the loop runner invokes after each discipline saves its output. It verifies that the saved output contains the required structural elements specified in the discipline's reference file. It does NOT evaluate output quality — it verifies structural compliance only.

This protocol formalizes the LLM-performed structural-check operation that was previously documented as the fallback in MVL/MVL+ SKILL.md.

---

## Step 1 — Identify required sections

Read the discipline's reference file at `homegrown/<discipline>/references/<discipline>.md` (or its `SKILL.md` if no reference file exists). Locate the canonical output-structure specification — typically a "Final Deliverable" or "Output" section that enumerates required structural elements.

For each of the 5 cognitive-act disciplines plus the standalone discipline outputs:
- `exploration` — `homegrown/explore/references/explore.md` §5.1 lists 6 required sections + Telemetry + Self-Assessment.
- `sensemaking` — required: SV1-SV6, all 5 phases, saturation indicators, self-assessment.
- `decomposition` — required: coupling map, question tree, interface map, dependency order, self-evaluation.
- `innovation` — required: seeds, mechanisms × variations, 5-test cycle, assembly check, axis coverage, telemetry, self-assessment.
- `critique` — required: dimensions+weights, fitness landscape, candidate verdicts, coverage map, signal, convergence telemetry.

---

## Step 2 — Verify presence in saved output

For each required structural element, verify it is present in the saved output. Verification has two parts:
1. **Heading match** — a markdown section heading (case-insensitive substring) corresponding to the element exists in the output.
2. **Content presence** — the section is non-empty (at least one paragraph or non-heading line follows the heading before the next heading).

Both must hold for the element to count as present.

---

## Step 3 — Record outcome

Write to `_state.md` in the inquiry's history section:

If all required elements are present:
```
Structural check: [PASS] (<count>/<total> sections present)
```

If any required elements are missing:
```
Structural check: [FAIL: <missing-element-1>, <missing-element-2>, ...]
```

---

## Step 4 — Gate behavior

If `[PASS]`: proceed to the next discipline.

If `[FAIL]`: the LLM session fixes the missing sections in the saved output (edits the output file to add the missing structural elements) and re-saves. Then re-run Steps 1-3 to confirm `[PASS]`. **The next discipline does not begin until the structural check passes.**

This fix-and-re-save behavior IS the gating commitment. Recording without fix-and-re-save is operationally weaker than the protocol's design.

---

## Failure modes

- **Rubber-stamping.** The LLM session marks `[PASS]` without genuine verification. Mitigation: Step 2 explicitly requires heading-match + content-presence verification; the LLM cannot pass without identifying both. If the LLM session is uncertain, the protocol recommends `[FAIL: uncertain]` over false `[PASS]`.
- **Missing reference file.** If the discipline's reference file cannot be located, HALT and tell the user: "Cannot locate reference file for discipline X. Structural check cannot proceed; specify the required-section list manually."
- **Reference-file ambiguity.** If the reference file's required-section list is not explicit, fall back in order: (a) the `SKILL.md` file's required-section list, (b) universal sentinels (the standardized "Overall:" verdict line, the `## User Input` record), (c) HALT and ask the user.

---

## Substrate honesty

This protocol is performed by the LLM session, NOT by an automated script. The mechanism is probabilistic in execution but binary in outcome — a section is present or it isn't.

The protocol's reliability (how often it catches intentional flaws) has not been adversarially validated. Treat the check as preventing obvious structural omissions, not as a robust regression guard. Adversarial-test validation is a deferred Next Action.
```

**Runner integration: the 4 spec edits at MVL/MVL+ lines 23/26/159/197.** Path C's edits are SIMPLER than Path A's because the procedure lives in the protocol file:

**Edit 1: `homegrown/MVL/SKILL.md` line 23** (Workspace Invariant fallback rule)

*After (Path C):*
> 6. Run the structural check on the saved output (load `homegrown/protocols/structural_check.md` and execute its procedure). Record the result in `_state.md`. On `[FAIL]`, fix the missing sections in the output and re-save before continuing.

**Edit 2: `homegrown/MVL/SKILL.md` line 159** (Discipline Transition Protocol step 4)

*After (Path C):*
> 4. **Run structural check** on the saved output:
>    Load `homegrown/protocols/structural_check.md` in full and execute the STRUCTURAL_CHECK protocol on the saved output file. The protocol verifies the discipline's required structural elements are present; records the outcome in `_state.md`; and specifies the gate behavior (fix-and-re-save on FAIL).

**Edit 3: MVL+ line 26** — same change as Edit 1.
**Edit 4: MVL+ line 197** — same change as Edit 2.

**Commitment satisfaction (Path C):**
- C1 gate preservation: PASS — protocol's Step 4 explicitly specifies fix-and-re-save before next discipline.
- C2 mechanism honesty: PASS — protocol's Substrate Honesty section explicitly names probabilistic mechanism + binary outcome.
- C3 reliability acknowledgment: PARTIAL — protocol's Failure Modes section names rubber-stamping risk; Substrate Honesty section names unvalidated state; but no validation built into the protocol itself.
- C4 autonomy-trajectory: PARTIAL — protocol is callable at any level; per-invocation context cost at L4+ multi-head is unaddressed.

**5-test cycle:**
- Novelty: MEDIUM-HIGH. The project doesn't currently have a structural_check protocol; the protocol-formalism of an LLM-performed operation is non-trivial.
- Scrutiny survival: HIGH. PASSes commitments 1 and 2 cleanly; PARTIAL on 3 and 4 (same as Path A).
- Fertility: HIGH. The protocol pattern is reusable for OTHER LLM-performed operations the project might formalize.
- Actionability: HIGH. Protocol text + 4 spec edits provided.
- Mechanism independence: HIGH. Domain Transfer (from existing protocol pattern) + Constraint Manipulation + implicit Inversion (fallback elevated to canonical).
- *Proximate:* YES. *Consistent:* YES (the protocol's Step 2 specification reduces reviewer drift compared to ad-hoc LLM-self-check).

**Disposition:** **ACTIONABLE.**

---

### P4 — Path D: HYBRID with adversarial-test maturity gate

**Mechanisms applied:** Domain Transfer (the adversarial-test concept transferred from software-test engineering / experimental science), Extrapolation (the test's outcome determines the future spec state).

#### P4 elaboration — the adversarial-test experiment + decision-trigger + interim spec state

**Adversarial-test experiment design ("intentional-flaw catch-rate test"):**

**Step 1: Construct N=12 intentionally-flawed discipline outputs.** Take 12 clean, passing discipline outputs from the project's existing inquiry history (e.g., the outputs in the just-completed self-improvement-rate inquiry's docarchive/). For each, apply ONE intentional flaw from the following 4 categories (3 per category for balanced coverage):

| Flaw category | Example modification |
|---|---|
| **Missing section** | Delete an entire required section (e.g., remove `## Self-Assessment`). |
| **Section-but-empty** | Keep the heading; delete all content under it. |
| **Renamed section** | Change a required section's heading (e.g., `## Self-Assessment` → `## My Verdict`). |
| **Removed safeguard text** | Delete the "Overall: PROCEED" verdict line; keep everything else. |

Record each flawed output's flaw-category + flaw-location.

**Step 2: Run the LLM-self-check on each flawed output.** In a fresh LLM session (no carry-over context from this inquiry), invoke the current MVL+ Discipline Transition Protocol step 4 procedure (or the Path C protocol if it's been built) against each flawed output.

**Step 3: Score each result.**
- TRUE-POSITIVE: LLM-self-check reports `[FAIL]` and names the actual flaw.
- FALSE-NEGATIVE: LLM-self-check reports `[PASS]` (missed the flaw — rubber-stamping or under-checking).
- TRUE-POSITIVE-WRONG-CAUSE: LLM-self-check reports `[FAIL]` but cites a different cause than the actual flaw (catching is good but for wrong reasons; partial credit).

**Step 4: Compute catch-rate.** Catch-rate = (TRUE-POSITIVE + 0.5 × TRUE-POSITIVE-WRONG-CAUSE) / N.

**Maturity-gate criteria:**
| Catch-rate | Decision |
|---|---|
| ≥0.85 (≥10.2/12) | **VALIDATED.** Promote LLM-self-check to canonical via Path A (REMOVE with gate-preservation) or Path C (FORMALIZE protocol). The user picks A vs C based on protocol-vs-spec-edit preference. |
| 0.65 – 0.85 | **MIXED.** Implement Path B's minimal script for stable universal sections (catches what LLM-self-check misses); keep LLM-self-check for discipline-specific deep structure. This is a Path B+C hybrid in practice. |
| <0.65 | **NOT VALIDATED.** Fall back to Path B (build the full minimal script per P2's elaboration). LLM-self-check is too unreliable to canonical. |

**Decision-trigger logic:** the adversarial-test experiment is itself a small materialization run. The user commits to running the test as a Next Action. The test's catch-rate determines which subsequent path is implemented.

**Interim spec state (before the test runs):** NO CHANGES to MVL/MVL+ runtime specs. The current dual-mode design (script-primary-with-LLM-fallback) is preserved. The fallback is operationally what's been running for the project's history; preserving the spec text is consistent with that.

**Commitment satisfaction (Path D):**
- C1 gate preservation: PASS — current spec's fix-and-re-save behavior is unchanged; gate is preserved in the interim.
- C2 mechanism honesty: PARTIAL — current spec's dual-mode is honest about both modes existing, but commits to a script that hasn't been built. The spec text is operationally correct (the fallback is documented and works) but aspirationally incomplete.
- C3 reliability acknowledgment: PASS — the adversarial-test IS the reliability acknowledgment, operationalized as an experiment. This is the path that takes the empirical ambiguity most seriously.
- C4 autonomy-trajectory: PASS — defers the canonical-form decision until validated; validation requirement intrinsically accounts for trajectory.

**5-test cycle:**
- Novelty: HIGH. The adversarial-test design is novel; no precedent in the project's own self-validation history.
- Scrutiny survival: HIGH. Directly addresses commitments 3 and 4 with operationalized evidence.
- Fertility: HIGH. The adversarial-test pattern is reusable for OTHER unvalidated mechanisms in the project (Predictive RC's `/intuit`; meaningful-traversal substrate's placeholder signals; the Retrospective RC outcome-tracking when it ships).
- Actionability: MEDIUM. Test design is provided; execution requires user commitment + ~hours of effort.
- Mechanism independence: HIGH. Domain Transfer + Extrapolation + implicit Inversion (validate before adopt).
- *Proximate:* YES (the test is buildable today). *Consistent:* YES (each flawed output is scored against the same flaw-truth).

**Disposition:** **ACTIONABLE.**

---

### P5 — Meta-decision synthesis

**Mechanisms applied:** Lens Shifting (re-view the option space from the commitment-tableau perspective), Absence Recognition (surface hybrids the individual paths suggest), Combination (combine paths into emergent hybrids).

#### The 4×4 comparison tableau

| | C1: Gate preservation | C2: Mechanism honesty | C3: Reliability acknowledgment | C4: Autonomy-trajectory |
|---|---|---|---|---|
| **Path A REMOVE+gate** | ✅ PASS — explicit fix-and-re-save in new spec text | ✅ PASS — "Mechanism note" accurately names probabilistic mechanism | ⚠️ PARTIAL — caveat states unvalidated state but doesn't validate | ⚠️ PARTIAL — L0 acceptable; L4+ uncertain |
| **Path B BUILD MINIMAL** | ✅ PASS — script `[FAIL]` triggers runner's existing fix-and-re-save | ✅ PASS — script is deterministic; spec already correct | ✅ PASS — deterministic mechanism eliminates rubber-stamping risk for what the script checks | ✅ PASS — scales to L4+ multi-head |
| **Path C FORMALIZE protocol** | ✅ PASS — protocol's Step 4 specifies fix-and-re-save | ✅ PASS — protocol's Substrate Honesty section is explicit | ⚠️ PARTIAL — protocol names rubber-stamping risk but doesn't validate | ⚠️ PARTIAL — protocol callable at any level; L4+ cost question remains |
| **Path D HYBRID with test** | ✅ PASS — current spec's gate is preserved in interim | ⚠️ PARTIAL — interim dual-mode is honest but commits to unbuilt script | ✅ PASS — adversarial-test IS the reliability acknowledgment, operationalized | ✅ PASS — defers decision until validated |

#### Dominance analysis

**Path B is the only path that PASSes all 4 commitments cleanly.** This is structurally significant: Path B is not pareto-dominated, but Path A, Path C, and Path D each have at least one PARTIAL.

Note however: Path B's PASS on C3 (reliability acknowledgment) is SCOPE-LIMITED — the script's deterministic mechanism only covers what the script checks (universal sentinels + per-discipline minimal sections). Deep-structure compliance still requires LLM judgment, which inherits Path A/C's reliability question.

Path A, Path C, Path D each fail on a different commitment:
- Path A: PARTIAL on C3+C4 (reliability and trajectory). Most cheap; weakest on rigor.
- Path C: PARTIAL on C3+C4 (same as Path A, but with stronger mechanism honesty via protocol).
- Path D: PARTIAL on C2 (interim dual-mode commits to an unbuilt script). Most rigorous; defers the decision.

#### Trade-offs (surfaced by the tableau)

- **Cost vs rigor.** Path A is cheapest (4 spec edits, ~minutes). Path B requires the script build (~30-60 minutes). Path C requires a new protocol file (~hours). Path D requires the test experiment (~hours) + a follow-up decision. Higher rigor → higher upfront cost.
- **Visible vs invisible failure.** Path A's risk is invisible (LLM rubber-stamps; failures accumulate silently). Path B's risk is visible (script needs edits on discipline-spec changes). Path C's risk is invisible (same as A but with protocol). Path D's risk is visible (test outcome will tell).
- **Optionality preservation.** Path A reduces optionality (removes the script reference; rebuilding later requires re-specing). Path B uses optionality (builds the script). Path C uses optionality differently (formalizes a new protocol). Path D preserves optionality (decision deferred).
- **User-prior alignment.** Path A maps directly to the user's REMOVE prior. Path D defers the question the user already has an opinion on (might feel like delay). Path B and Path C don't match the user's prior.

#### Emergent hybrids (Phase 3.5 Assembly Check)

**Hybrid B+C: "Minimal script + formalized protocol for deep structure."**
- Build the Path B script for stable universal sentinels (the script's deterministic check).
- ALSO write the Path C protocol for discipline-specific deep-structure verification (the protocol-driven LLM-self-check fills in what the script's coarse check misses).
- The runner invokes both: script first; if PASS, run the protocol for deep checks.

This hybrid PASSes ALL 4 COMMITMENTS with stronger reliability than either alone:
- C1 PASS (both mechanisms gate).
- C2 PASS (script is deterministic; protocol is substrate-honest about its probabilistic mechanism).
- C3 PASS (script handles the rubber-stamping-prone universal checks deterministically; protocol's failure-mode handling addresses deep-structure rubber-stamping).
- C4 PASS (script scales; protocol scales to a degree at L4+).

**Hybrid A+D: "REMOVE now + adversarial-test as future-revival condition."**
- Implement Path A (REMOVE the script reference; canonical LLM-self-check).
- Commit Path D's adversarial-test as a Next Action with a revival trigger: if catch-rate proves <0.85 when the test fires, revert to Path B or B+C.
- This is the user's REMOVE prior with the reliability question deferred but COMMITTED to.

PASSes commitments same as Path A in the interim, with C3 upgraded to PASS-WHEN-TESTED.

**Hybrid A + B-light: "REMOVE the script reference; add a 5-line bash helper."**
- Edit the spec per Path A (remove the script invocation; canonical LLM-self-check).
- ALSO ship a 5-line bash helper that just checks "Overall: verdict line present" — the simplest possible universal Primitive RC check.
- The helper is invoked by the LLM-self-check procedure (the LLM session calls the helper as part of its check).

PASSes commitments same as Path A but with C3 partially upgraded (the verdict-line check is deterministic).

#### Critique handoff packet

**Dimensions Critique should construct in Phase 0:**
- D1 (CRITICAL): traceability to the primary anchor (does the path actually verify discipline-output structural compliance?). All 4 paths PASS.
- D2 (HIGH): commitment-1 gate preservation.
- D3 (HIGH): commitment-2 mechanism honesty.
- D4 (HIGH): commitment-3 reliability acknowledgment.
- D5 (HIGH): commitment-4 autonomy-trajectory.
- D6 (MEDIUM-HIGH): cost profile (upfront + ongoing).
- D7 (MEDIUM): user-prior alignment (project-specific risk: does the decision feel responsive to the user's stated REMOVE preference?).
- D8 (MEDIUM): optionality preservation.

**Most load-bearing adversarial-test scenarios for Critique to apply:**
- For Path A: under prosecution, does the "Mechanism note" actually prevent a future reader from interpreting LLM-self-check as Primitive RC? Test: would a fresh reader six months from now treat the LLM-self-check as automated?
- For Path B: under prosecution, does the script's universal-sentinel set have enough coverage to catch real regressions, or does it create false confidence by passing trivially? Test: would the script have caught any of the 30+ historical PASS records' potential rubber-stamping events?
- For Path C: under prosecution, does the protocol's Failure Modes section actually prevent rubber-stamping operationally, or is it document-window-dressing? Test: would an LLM session running the protocol actually self-flag uncertainty?
- For Path D: under prosecution, would the user actually commit to running the test? If the test is committed-but-never-run, Path D collapses into Status Quo (script reference retained but unbuilt).

**Convergence question:** does a clean SURVIVE exist among the 4 paths + 3 hybrids? Path B PASSes all commitments and is a clean candidate. Hybrid B+C PASSes more stringently. Critique's job is to pick between these viable candidates given the project's broader cost-rigor balance.

---

## Phase 3 — Test (cycle summary)

| Candidate | Disposition |
|---|---|
| P1 Path A elaboration | ACTIONABLE (PARTIAL on C3+C4) |
| P2 Path B elaboration | ACTIONABLE (PASS all 4 commitments) |
| P3 Path C elaboration | ACTIONABLE (PARTIAL on C3+C4) |
| P4 Path D elaboration | ACTIONABLE (PARTIAL on C2) |
| P5 Meta-decision | ACTIONABLE (synthesis complete) |
| Hybrid B+C | EMERGENT ACTIONABLE — PASS all 4 commitments more stringently than any single path |
| Hybrid A+D | EMERGENT ACTIONABLE — user's prior with reliability deferred-but-committed |
| Hybrid A + B-light | EMERGENT ACTIONABLE — minimal script-augmented REMOVE |

All survive testing. 8 candidates total (5 base + 3 hybrids).

---

## Phase 3.5 — Assembly Check

Three emergent hybrids surfaced (described above):
1. **B+C** — minimal script + formalized protocol.
2. **A+D** — REMOVE with adversarial-test revival trigger.
3. **A + B-light** — REMOVE with 5-line universal bash helper.

These are non-trivial combinations that none of the individual paths produce alone. They expand Critique's contraction space from 4 candidates to 7 (4 paths + 3 hybrids).

---

## Phase 3.6 — Axis Coverage Check

Per-commitment coverage:
- C1 gate preservation: all 8 candidates address it. ✓
- C2 mechanism honesty: all 8 candidates address it. ✓
- C3 reliability acknowledgment: 5 PASS (Path B, Hybrid B+C, Path D, Hybrid A+D, Hybrid A + B-light partial); 3 PARTIAL (Path A, Path C, Path D's C2). ✓
- C4 autonomy-trajectory: 4 PASS, 4 PARTIAL. ✓

Per-path coverage: all 4 viable paths from sensemaking elaborated. ✓

Hybrid coverage: 3 emergent hybrids; the major combinations are present.

User-prior coverage: Path A and Hybrids A+D and A + B-light directly honor the user's REMOVE prior. ✓

---

## Phase 4 — Mechanism Coverage (Telemetry)

- **Generators applied:** 4/4
  - Combination: P1 (REMOVE + gate-preservation + caveat), P2 (universal-verdict + per-discipline sentinels), P5 (hybrid combinations).
  - Absence Recognition: P2 (universal section pattern as the seed), P5 (surfacing hybrids).
  - Domain Transfer: P3 (protocol pattern from conclude.md / branch_inquiry.md), P4 (adversarial-test from software-test engineering).
  - Extrapolation: P4 (test outcome determines future spec state).
- **Framers applied:** 3/3
  - Lens Shifting: P5 (re-view from commitment-tableau perspective).
  - Constraint Manipulation: P1 (constraint: spec text must accurately name mechanism), P3 (constraint: protocol must explicitly state substrate-honesty).
  - Inversion: P1 (fallback elevated to canonical), P3 (same), P4 (validate before adopt).
- **Convergence:** YES. Multiple mechanisms converge on Path B + Hybrid B+C as commitment-satisfying candidates. The Hybrid B+C is supported by Combination (P5's hybrid construction) + Absence Recognition (P2's seed) + Domain Transfer (P3's protocol pattern).
- **Survivors tested:** 8/8 — all candidates passed the 5-test cycle + 2 user bars.
- **Failure modes observed:**
  - Premature evaluation: NO.
  - Single-mechanism trap: NO.
  - Early frame lock: NO (alternative hybrids surfaced).
  - Innovation without grounding: NO.
  - Mechanism exhaustion: NO.
  - Survival bias: PARTIAL-MITIGATED. Path D's adversarial-test is uncomfortable (requires user commitment to an experiment); preserved with full status.

**Overall: PROCEED** (full mechanism coverage + 8 surviving candidates + emergent hybrids surfaced + axis coverage adequate).

---

## Handoff to Critique

**The 8 candidates** (with full elaboration in Phase 2 above):

| # | Candidate | Commitment satisfaction |
|---|---|---|
| 1 | Path A REMOVE+gate | PASS / PASS / PARTIAL / PARTIAL |
| 2 | Path B BUILD MINIMAL | PASS / PASS / PASS / PASS |
| 3 | Path C FORMALIZE protocol | PASS / PASS / PARTIAL / PARTIAL |
| 4 | Path D HYBRID with adversarial-test | PASS / PARTIAL / PASS / PASS |
| 5 | Hybrid B+C | PASS / PASS / PASS / PASS (stronger than B alone) |
| 6 | Hybrid A+D | PASS / PASS / PASS-WHEN-TESTED / PASS-WHEN-TESTED |
| 7 | Hybrid A + B-light | PASS / PASS / PARTIAL-UPGRADED / PARTIAL |
| 8 | Meta-decision synthesis (P5) | (synthesis; not itself a path) |

**Critique's contraction task:**
- Apply the 8 dimensions from the handoff packet (4 commitments + cost + user-prior + optionality + meta-decision integrity).
- Prosecute each candidate per the load-bearing adversarial-test scenarios listed in P5.
- Verdict per candidate (SURVIVE / REFINE / KILL).
- Assembly check on survivors.
- Convergence: most likely candidates are Path B (cheapest clean PASS), Hybrid B+C (strongest reliability), or Hybrid A+D (honors user prior + commits to reliability question).
- Signal: TERMINATE with ranked survivors OR ITERATE if the contraction reveals a missing dimension.
