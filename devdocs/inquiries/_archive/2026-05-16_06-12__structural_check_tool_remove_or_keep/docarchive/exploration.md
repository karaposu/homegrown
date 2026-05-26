# Exploration — Structural Check Tool Territory

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/_branch.md

Mode: blended. Map references in MVL/MVL+ specs; regression catalog Type 5; Primitive RC definition; a discipline spec; recent _state.md fallback records. Possibility mode: surface options (REMOVE / KEEP-AND-BUILD / MINIMAL / HYBRID / novel).
Entry: signal-first. The user's REMOVE prior is the seed; probe it against actual variability, empirical consistency, neighbor-mechanism overlap, cost-benefit.
```

---

## Territory Overview

**Mode.** Blended.
- *Artifact mode:* the references to `tools/structural_check.sh` are bounded and locatable. Each spec/discipline-reference that mentions or relates to the script is readable directly.
- *Possibility mode:* the option space for "what the structural-check operation should be" is conceptual. Surface obvious candidates first (REMOVE / KEEP-AND-BUILD / MINIMAL / HYBRID) before novel ones (FORMALIZE LLM-self-check / GENERATED CHECK).

**Entry point.** Signal-first. The user's opinionated REMOVE prior is the seed; the exploration probes it against actual evidence rather than accepting it.

**Regions.**

| Region | What it covers | Resolution |
|---|---|---|
| **A. Reference map** | Every mention of `tools/structural_check.sh` in homegrown/ runtime specs and in enes/ design notes | high (grepped + read directly) |
| **B. Empirical record** | What the manual-fallback structural check actually recorded in 30+ prior inquiry `_state.md` history entries | high (sampled directly) |
| **C. What the script WOULD check** | The per-discipline required-output structure as defined in each discipline's reference file | medium-high |
| **D. Neighbor mechanisms** | Boundaries against Type 5 spec-symptoms, Q4c, Primitive RC layer, LLM-self-check fallback | high |
| **E. Option space** | Completeness-first surface of REMOVE / KEEP-AND-BUILD / MINIMAL / HYBRID + novel options | medium |
| **F. Confirmed-absent** | No FAIL events observed in the sampled record; no external precedent for markdown-spec validators in similar frameworks; no quantified maintenance-cost model | high (the absences are confirmed) |

---

## Inventory

### Region A — Reference Map

**In homegrown/ runtime specs (4 references total):**

- *`homegrown/MVL/SKILL.md` line 23* — fallback rule (Workspace Invariant): *"If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`."*
- *`homegrown/MVL/SKILL.md` line 159* — invocation in the Discipline Transition Protocol: `bash tools/structural_check.sh [inquiry_path]/[output_file] [discipline_name]` + "If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm."
- *`homegrown/MVL+/SKILL.md` line 26* — same fallback rule as MVL line 23.
- *`homegrown/MVL+/SKILL.md` line 197* — same invocation as MVL line 159.

**In enes/ design notes (3 references):**

- *`enes/self_improvement_rate.md` line 313* — names the script as the automation target for the sibling Q4c per-edit spec-symptom check.
- *`enes/runtime_environment/folder_based.md` line 160* — design narrative: *"The runner verifies the file exists (and runs a structural check if `tools/structural_check.sh` is available) before advancing to the next discipline."*
- *`enes/loop_desing_ideas/loop_design_2.md` line 127* — design narrative: *"The structural check as a gate. After each discipline saves its output, `/MVL` runs `tools/structural_check.sh` on the file. If any required structural section is missing ... the next discipline doesn't start until the previous one's output passes the structural check."*

**Implications for edit scope if REMOVE is chosen:**
- Strict-scope edits: 4 lines in 2 runtime-spec files (`homegrown/MVL/SKILL.md` + `homegrown/MVL+/SKILL.md`).
- Plus the optional clean-up: 3 lines in enes/ design notes (these are design history, not runtime specs — could keep as historical record with a "deprecated" note, or edit for consistency).
- The runtime spec's design is ALREADY tolerant of the script's absence — the fallback rule (lines 23, 26) says "if unavailable, manually check." So REMOVE is structurally low-risk; the fallback machinery is already documented.

### Region B — Empirical Record

Sampled 30+ `_state.md` history entries from prior inquiries (across 6 distinct inquiry folders: 2026-05-09 ×2, 2026-05-10 ×2, 2026-05-11 ×2). Pattern observed:

- **Every discipline run records a manual structural check.** Format: *"Manual structural check: PASS"* with varying levels of detail.
- **Detail varies.** Some are bare ("Manual structural check: PASS"); others enumerate what was checked ("Manual structural check: PASS (all 6 deliverable sections present)"; "all phases + SV1-SV6 present + saturation indicators"; "all required Sense Versions (SV1-SV6) present + all 5 phases executed + saturation indicators + self-assessment verdict").
- **Zero FAIL records observed in the sample.** Of 30+ structural-check records sampled, all are PASS. No "[FAIL: label1, label2]" or similar.
- **The check IS being performed.** The records are not boilerplate; they often include discipline-specific telemetry ("8 perspectives applied," "all 7 mechanisms × 3 variations," "all 5 phases executed").

**Empirical observations (signals):**

1. *The manual fallback has been running consistently across at least 30+ discipline runs in the project's history.*
2. *The format of the record is reasonably uniform (PASS + optional enumeration of checked sections).*
3. *The zero-FAIL rate is an ambiguous signal.* Possibilities:
   - (a) The LLM faithfully follows discipline specs and produces compliant output every time.
   - (b) The LLM rubber-stamps its own incomplete output (self-reference risk; failure mode #4 from regression catalog's experience symptoms: "no surprise / can't act / déjà vu").
   - (c) The discipline specs are loose enough that any reasonable output passes (loose specs → easy PASS).
   - Without ground truth (an independent check), (a)/(b)/(c) cannot be distinguished from the record alone.

This is a structurally significant absence. **The user's claim "LLM-self-check has been working" is empirically observable only as "LLM-self-check records PASS"** — those aren't the same statement. The user's prior may be partly right (the LLM-self-check is operationally happening) but partly under-tested (we don't know if it's catching anything that wouldn't pass a real check).

### Region C — What the Script WOULD Check

Each discipline's reference file enumerates its required output structure. Reading explore's reference file as a representative:

*`homegrown/explore/references/explore.md` §5.1:* the "Final Deliverable" specifies six required sections: Territory Overview / Inventory / Signal Log / Confidence Map / Frontier State / Gaps and Recommendations. Plus Telemetry (§5.3) and Self-Assessment (§4.5).

Sample for the other disciplines (from prior pipeline reads):
- *sense-making:* SV1 through SV6 (six Sense Versions) + Phases 1-5 each executed + Saturation Indicators + Self-Assessment.
- *decompose:* Coupling Map + Question Tree + Interface Map + Dependency Order + Self-Evaluation.
- *innovate:* Seeds + Mechanisms × Variations (4G+3F minimum) + 5-Test cycle + Assembly Check + Axis Coverage + Telemetry + Self-Assessment.
- *td-critique:* Dimensions+weights + Fitness Landscape + Candidate Verdicts + Coverage Map + Signal + Convergence Telemetry.

**Stability assessment.** The required-section lists are defined in each discipline's reference file. Section names are stable for the duration each spec is in force; changes happen during Baldwin-cycle spec-refinements (a low-frequency event in the project's current state — most refinements I see in this conversation's history are adding refinement notes or sub-rules to EXISTING sections, not adding/removing top-level required sections).

**What the script would check operationally.** Two layers possible:
1. *Coarse:* presence of each required section heading (markdown `## SectionName`). Fast, fragile to heading-rename, but accurate for missing-section detection.
2. *Fine:* presence of section + minimum content depth + required sub-elements (e.g., "Sense Versions section contains SV1 through SV6"). Slower, requires per-discipline rules encoded in the script.

**The fragility cost.** The coarse check requires renaming-tolerant heading detection (case-insensitive substring match, perhaps) to survive spec renames. The fine check requires the script to encode the discipline's deep structure, which IS where "ever-changing" pressure starts to apply.

### Region D — Neighbor Mechanisms (Boundary Work)

**Type 5 spec-symptoms (from `enes/regression/desc.md`):**
- Shorter-than-before (net deletion in line count)
- Missing sections (a section referenced by the spec's Change Log no longer exists)
- Weakened language (MUST → should)
- Removed safeguards (failure modes removed)

*Boundary verdict:* DIFFERENT object of measurement. Type 5 spec-symptoms observe SPEC FILE edits over time (regression in the spec itself, observable via git diff). `tools/structural_check.sh` observes DISCIPLINE OUTPUT files at write time (compliance of THIS RUN's output with the discipline's required structure). The two mechanisms watch different objects at different times:
- Type 5 / Q4c: "did this spec edit remove something load-bearing?" — observed after every spec edit.
- structural_check.sh: "did this discipline run produce all the required output sections?" — observed after every discipline run.
- They are **complementary, not redundant.** A spec that retains all its sections (Type 5 PASS) can still produce a discipline run that omits a required output section (structural_check FAIL).

**Primitive RC layer (from `enes/evolving_quality_assetment_component.md`):**
- *Definition:* "Things that are broken. Format violations, missing sections, removed safeguards, internal contradictions, deleted failure modes ... Signal type: Binary — something is structurally wrong or it isn't. No judgment needed."
- *Source of signal:* "Git diff, text scanning, telemetry field checks, format validation against discipline specs."
- *Current state:* "Not built. The human does this informally (eyeballing spec edits for breakage). No automated structural checks exist."

*Boundary verdict:* `tools/structural_check.sh` is the canonical Primitive RC tool — the named example in the architecture document. Removing it without replacing the layer leaves Primitive RC without an automated arm. The LLM-self-check fallback is doing the work but is *probabilistic in mechanism* even though *binary in result*. Whether that satisfies the "deterministic" criterion of Primitive RC is itself a meaning-level question Sensemaking will address.

**Q4c per-edit spec-symptom check (from the sibling inquiry):**
- Currently Tier 1 today via manual inspection; references "could be automated when `tools/structural_check.sh` ships."
- *Boundary verdict:* Q4c inherits from Type 5 spec-symptoms (about spec edits). It is NOT what `tools/structural_check.sh` would check (output compliance). The sibling inquiry's text gestures at automation overlap but the overlap is the *automation infrastructure* (a shared bash-script approach), not the *measurement target*. They could share implementation primitives without being the same check.

**LLM-self-check fallback (already operational per the spec):**
- Documented in MVL/MVL+ Workspace Invariant lines 23/26.
- Currently produces records in `_state.md` history sections.
- *Boundary verdict:* this is the de-facto Primitive RC arm right now. The question of this inquiry is whether to FORMALIZE it (make it the canonical mechanism) or RETAIN the script as the intended primary.

### Region E — Option Space (Possibility Mode)

**Completeness-first (the obvious candidates):**

- **α REMOVE entirely.** Edit the 4 references in MVL/MVL+ specs to drop the `bash tools/structural_check.sh ...` invocation and the "if unavailable" fallback framing. Replace with explicit LLM-self-check as the canonical procedure. Edit cost: ~4 lines of spec changes. Maintenance cost: zero ongoing.

- **β KEEP-AND-BUILD as referenced.** Actually write `tools/structural_check.sh` per the spec. Implements per-discipline section detection. Probably a bash script reading discipline-name → required-sections lookup, then grepping the output file for each section heading. Edit cost: ~50-150 lines of new bash. Maintenance cost: edits whenever a discipline's required-section list changes (low-frequency per the empirical record, but non-zero).

- **γ KEEP-AND-BUILD MINIMAL.** A thin shell that checks ONLY the stable subset of structural requirements (e.g., "Does the output have a `## Self-Assessment` or `## Self-Evaluation` section?" — every discipline has one of these by name). LLM-self-check handles the discipline-specific deep structure. Edit cost: ~20-30 lines of bash. Maintenance cost: very low (only changes when the universally-required section name changes).

- **δ HYBRID (current spec).** Build `tools/structural_check.sh` per the existing reference; retain the LLM-self-check fallback for when the script is unavailable. Edit cost: ~50-150 lines. Maintenance cost: matches β; the fallback adds no maintenance cost (already documented).

**Novel candidates (after completeness-first):**

- **ε FORMALIZE LLM-self-check as protocol.** Don't build the script. Instead, write `homegrown/protocols/structural_check.md` as an explicit protocol that the runner invokes via Skill (or via a Read of the protocol then in-context execution). This elevates the current fallback to canonical status while giving it a structured procedure spec. Edit cost: ~30-50 lines of new protocol; ~4 lines of spec edits to replace the bash invocation with a protocol load. Maintenance cost: the protocol itself updates when discipline structures evolve.

- **ζ GENERATED CHECK.** A small bash script (or inline runner logic) that auto-extracts required-section names from the discipline's reference file at runtime, then applies the check. No hard-coded per-discipline knowledge in the script; the discipline's own reference file is the source of truth. Edit cost: ~30-60 lines of bash (parsing reference files); zero ongoing maintenance cost because the script auto-adapts to spec changes. Risk: parsing markdown reference files for "required sections" requires a stable convention in the reference files (e.g., a `## Required Output Sections` block), which doesn't currently exist uniformly.

### Region F — Confirmed-absent

- **FAIL events in the empirical record.** Zero observed in the 30+ sample. Either spec compliance is high, or the LLM-self-check is rubber-stamping, or specs are too loose to fail — cannot distinguish from data alone.
- **External precedent.** The Claude Code agent-skills format (the format Homegrown ships in) doesn't ship a structural validator for skill outputs. Similar markdown-spec frameworks (LangChain prompt templates, custom prompt libraries) typically don't ship output validators either; consistency is left to the model. No precedent to lean on.
- **Quantified maintenance-cost model.** The user's "we'd have to constantly edit it" claim is intuitive but not quantified. The reference files show required-section lists that have been stable across many spec refinements in the project's history (most refinement adds sub-rules to existing sections, not new top-level sections). Without quantification, the cost claim is plausible but unproven.
- **Counter-claim quantification (the inverse).** Is the per-invocation LLM-self-check cost (tokens spent reasoning about structural compliance) actually significant? Also not quantified. Both sides of the cost-benefit are currently estimates.
- **Adversarial-test data on LLM-self-check reliability.** No experiment has been run where an intentionally-flawed discipline output was given to an LLM running the self-check, to verify the LLM catches the flaw. Without this, the self-check's discriminating power is unmeasured.

---

## Signal Log

| Signal type | Signal | Disposition | Reasoning |
|---|---|---|---|
| **Density** | Only 4 runtime references in homegrown/ (2 files, 2 each); 3 in enes/ design notes. Tight, locatable, low-edit-cost to remove. | **Probed.** | Tells us the REMOVE option is structurally cheap; doesn't tell us if it's right. |
| **Novelty** | The MVL/MVL+ specs *already document a fallback for the script's absence* (lines 23/26). The system is already designed to operate without it. | **Probed.** | Critical: removing the reference doesn't break the workflow; the fallback IS the current operational form. |
| **Tension** | The zero-FAIL rate in the empirical record is ambiguous — could mean "LLM-self-check works" OR "LLM rubber-stamps." Without ground truth, the user's claim ("LLM-self-check has been working") is empirically under-tested. | **Probed.** | Load-bearing for Sensemaking and Critique. The user's prior may be partly right but partly under-supported. |
| **Tension** | The Primitive RC layer's definition specifies "deterministic, binary, no judgment needed" — the LLM-self-check is probabilistic in mechanism even though binary in result. Whether this satisfies Primitive RC's criterion is a meaning-level question. | **Probed.** | Sensemaking must address this directly. If LLM-self-check fails the Primitive RC criterion, REMOVE without replacement leaves the layer un-instantiated. |
| **Tension** | Removing now loses optionality (can rebuild later if LLM-self-check proves inadequate). Keeping now incurs maintenance cost (build + edit on every discipline-structure change). Both costs are real; the question is which is bigger. | **Surfaced; deferred to Decomposition.** | Optionality vs maintenance is one of the central trade-offs Decomposition will partition. |
| **Absence** | The script doesn't exist on disk; never has. The system has run without it for the entire project history. | **Probed.** | Important context: REMOVE doesn't break anything that currently works; it formalizes the status quo. |
| **Absence** | Q4c's claim that the script's existence would "automate the per-edit spec-symptom check" is misaligned with the script's spec'd purpose (checking discipline OUTPUTS, not spec edits). The Q4c automation overlap is imaginary — at best they share bash-scripting infrastructure, not measurement target. | **Probed.** | A useful clarification: the sibling inquiry's reference to structural_check.sh as Q4c automation was loose; cleaning that up is a follow-up edit regardless of this inquiry's outcome. |
| **Adjacency** | enes/loop_desing_ideas/loop_design_2.md describes the structural check as "a gate" — preventing the next discipline from starting until the previous discipline's output passes. The fallback ("manually check ... record the result in `_state.md`") doesn't preserve the gating semantics; manual checks RECORD, they don't BLOCK. | **Probed.** | Important: REMOVE loses the gating commitment. If gating matters, REMOVE has a real cost. If gating doesn't matter (manual recording is enough), REMOVE has no cost. Sensemaking must address whether the gate is load-bearing. |
| **Adjacency** | The Q4c sibling-inquiry question is now Tier 1 today via manual inspection; the decision here affects whether Q4c becomes Tier 1 automated (KEEP) or stays manual (REMOVE). | **Probed.** | The decision propagates to sibling inquiries' calibration-state. |

---

## Confidence Map

| Region / sub-region | Level | Evidence basis |
|---|---|---|
| **A. Reference map** | **confirmed** | Direct grep across all homegrown/ and enes/ files; 7 references total, fully enumerated with file:line. |
| **B. Empirical record** | **confirmed-with-caveat** | 30+ records sampled across 6 inquiry folders. Pattern is consistent. The zero-FAIL rate is itself observed at high confidence; its INTERPRETATION (compliance vs rubber-stamping) is unknown. |
| **C. What the script would check** | **confirmed (structurally)** | Required-section lists are defined in discipline references; the script's check is straightforward to specify. |
| **C. Stability of required-section lists over time** | **scanned** | Reading conversation history suggests stability is high; refinements add sub-rules more often than top-level sections. Not quantified across the project's full history. |
| **D. Type 5 spec-symptoms** | **confirmed** | Direct quote from `enes/regression/desc.md`. Boundary against output-compliance is clean. |
| **D. Q4c overlap** | **confirmed** | The sibling inquiry's text directly references the script; reading both shows the overlap is loose (different measurement targets). |
| **D. Primitive RC layer** | **confirmed (definition)** | Direct quote from `enes/evolving_quality_assetment_component.md`. The question of whether LLM-self-check satisfies the layer's criterion is a meaning-level question deferred to Sensemaking. |
| **D. LLM-self-check fallback** | **confirmed (in spec); confirmed (operationally)** | Spec documents it; empirical record shows it operating. |
| **E. Option α (REMOVE)** | **confirmed** | The user's prior; structurally cheap to implement. |
| **E. Options β / γ / δ (KEEP variants)** | **confirmed** | Standard build options; differ in scope and maintenance burden. |
| **E. Option ε (FORMALIZE protocol)** | **inferred** | Novel option; would elevate the fallback to canonical via a protocol file. Not standard in current spec design. |
| **E. Option ζ (GENERATED CHECK)** | **inferred** | Novel option; requires a stable convention for required-section enumeration in discipline reference files (doesn't fully exist yet). |
| **F (confirmed-absent regions)** | | |
| — Zero FAIL events in 30+ records | **confirmed-absent** | Sampled directly; no FAIL records found. |
| — External precedent for markdown-spec validators | **confirmed-absent** | The agent-skills format and similar markdown-spec frameworks don't ship validators. |
| — Quantified maintenance-cost model | **confirmed-absent** | The user's claim is intuitive but not quantified. |
| — Adversarial test data on LLM-self-check reliability | **confirmed-absent** | No intentional-flaw experiment has been run. |
| — Cost-side data on per-invocation LLM-self-check tokens | **confirmed-absent** | Not measured; the LLM-self-check is in-context but its token cost has not been isolated. |

---

## Frontier State

**Status: stable.**

Justifications per spec §4.2:

1. *Frontier stability:* the regions are bounded (the references are all 7 enumerated; the empirical record is sampled at sufficient breadth; the option space is enumerated at completeness-first + novel; the boundary against neighbors is mapped).
2. *Declining discovery rate:* further sampling of `_state.md` records would produce the same pattern (PASS records with varying detail); further options would be variants of the 6 already named.
3. *Bounded gaps:* the remaining unknowns are sensemaking-and-decomposition questions (does LLM-self-check satisfy Primitive RC; is gating load-bearing; which option wins on cost-benefit), not exploration gaps.
4. *Jump-scan:* deliberately scanned the enes/loop_desing_ideas/loop_design_2.md design-notes region (different from runtime specs) and surfaced the "gate" framing — a load-bearing adjacency. Surface confirmed; no surprises that would invalidate the region map.

---

## Gaps and Recommendations

### To Sensemaking (next discipline)

- **The dominant cognitive anchor.** Is structural-check best framed as (a) *deterministic Primitive RC tooling* (the script as canonical, LLM fallback acceptable but second-class), (b) *probabilistic-but-binary structural verification* (LLM-self-check IS Primitive-RC-equivalent because outcome is binary even if mechanism is probabilistic), (c) *gating mechanism* (the check exists to BLOCK the next discipline, not just record compliance), or (d) *redundancy with the regression catalog's Type 5* (the symptom catalog already covers most of what the check would catch)? The four framings prioritize different load-bearing claims. Sensemaking must pick the primary.
- **The gate vs record distinction.** The loop_design_2 design notes frame the structural check as "a gate" — preventing the next discipline from starting until compliance is confirmed. The current fallback ("manually check ... record the result in `_state.md`") doesn't preserve gating semantics. Is the gate load-bearing for the project's quality-awareness commitments, or is recording sufficient? This question is structurally important.
- **The empirical record's ambiguity.** Zero FAIL events observed in 30+ records is interpretable as either "LLM-self-check works" or "LLM rubber-stamps." Without ground truth, the user's prior is operating on the favorable interpretation. Sensemaking should test whether the favorable interpretation is structurally defensible or whether the under-supported nature of the claim should temper the REMOVE decision.

### To Decomposition
- **The natural seams of the option space.** Where does the 6-option set partition? Candidate seams: (a) by ACTION (REMOVE vs KEEP-AND-BUILD vs HYBRID); (b) by CANONICAL FORM (script vs LLM-protocol vs generated); (c) by COST PROFILE (zero-build / minimal-build / full-build / build-elsewhere). The right seam depends on the meaning-anchor Sensemaking commits.

### To Innovation
- **Variations within each option.** For REMOVE: should the design notes in enes/ also be cleaned up, or kept as historical record? For KEEP-AND-BUILD: minimal vs full vs generated? For FORMALIZE: what's the protocol's exact procedure? Innovation should produce alternatives within the surviving option(s) so Critique has concrete candidates to evaluate.

### To Critique
- **Frame-regression risk.** The user's REMOVE prior might be premature — under-tested empirically (the zero-FAIL signal is ambiguous) and reducing optionality. Critique must construct the strongest defense of the user's prior AND the strongest counter; the verdict should not just confirm the prior.

### Deferred signals (not for exploration)
- The **exact text of REMOVE edits** if REMOVE wins — out of scope per the Layer Commitment (structural layer deferred to follow-up materialization).
- The **exact text of the LLM-self-check protocol** if FORMALIZE wins — out of scope per the same Layer Commitment.
- **Cost-modeling experiments** to quantify maintenance vs LLM-self-check tokens — out of scope; downstream of operational data.

---

## Telemetry

- **Mode:** blended (artifact + possibility)
- **Entry point:** signal-first (user's REMOVE prior)
- **Cycles run:** 2 (first scan: references + empirical record + neighbors; jump-scan: design notes' "gate" framing + Q4c overlap clarification)
- **Candidates generated (possibility mode):** 6 named options (α REMOVE / β KEEP-AND-BUILD / γ MINIMAL / δ HYBRID / ε FORMALIZE-protocol / ζ GENERATED)
- **Signals detected:** 9 — Probed: 7; Surfaced-with-defer: 1; Probed-then-deferred to downstream: 1
- **Resolution progression evidence:** coarse scan (region structure surfaced) → fine scan (per-reference + per-record detail) → jump-scan into design notes (surfaced "gate" framing as load-bearing adjacency)
- **Frontier state:** stable
- **Discovery rate:** decreasing (last passes refined; no new regions)
- **Convergence criteria status:** frontier-stability ✓; declining-discovery ✓; bounded-gaps ✓
- **Jump-scan performed:** YES (from runtime specs → design notes → surfaced "gate" framing)
- **Failure modes checked:**
  - Premature depth: avoided (coarse before deep).
  - Surface-only scanning: avoided (deep probes on the empirical record + the neighbor mechanisms).
  - False confidence: mitigated by jump-scan.
  - Premature termination: three criteria explicitly checked.
  - Re-exploration: no.
  - Completeness bias in possibility mode: mitigated (4 obvious + 2 novel; novel only after completeness).
  - Open→closed drift: annotations stayed at labeling level; relational meaning deferred.
  - Silent boundary-discovery: N/A; _branch.md enumerated Source Territory.
  - Negative-space silent drop: confirmed-absent regions explicit.
  - Inadequate per-item content depth: D2 default; D3 where adjacency mattered.
- **Per-item depth:** D2 default; D3 where adjacency was load-bearing (Region D, Region A's file:line citations).

---

## Self-Assessment

**Overall: PROCEED.** Regions mapped at confirmed level; 6 candidate options enumerated; empirical record sampled; confirmed-absent regions surfaced (including the ambiguity of the zero-FAIL signal); frontier handed off with typed questions for each downstream discipline.

The most load-bearing handoffs are: (a) the gate-vs-record question, (b) the ambiguity of the empirical record (the zero-FAIL signal's interpretation), and (c) the Primitive RC criterion question (does LLM-self-check satisfy it). Sensemaking should test these against the user's prior rather than accepting the prior at face value.
