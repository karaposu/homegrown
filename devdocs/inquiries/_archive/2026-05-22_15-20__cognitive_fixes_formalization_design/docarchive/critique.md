# Critique: Cognitive Fixes Formalization — Design Decision

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_15-20__cognitive_fixes_formalization_design/_branch.md`

5-phase critique on Innovation's 5-artifact deliverable.

---

## Phase 0 — Dimensions

| VD | Dimension | Weight |
|---|---|---|
| **VD1** | LOOP_DIAGNOSE Step 5+6 verbatim in P1 (anti-paraphrase per SD13) | **CRITICAL** |
| **VD2** | Kill conditions concrete (auditable, not subjective) | **CRITICAL** |
| **VD3** | Self-reference structurally encoded in artifacts (not just narrative) | **CRITICAL** |
| VD4 | Reversibility actual (no hidden downstream dependencies) | HIGH |
| VD5 | Loose-guide vs strict-schema operationally distinct | HIGH |
| VD6 | CONTRARIAN partial-survival honestly acknowledged | HIGH |
| VD7 | Staging gate distinctness (folder/protocol/hook are distinct levels) | HIGH |
| VD8 | Paste-readiness of all 5 artifacts | HIGH |
| VD9 | Premature-formalization risks named | MEDIUM |
| VD10 | N=1 thin-evidence honest | MEDIUM |

CRITICAL gating: failure on VD1/VD2/VD3 = KILL.

---

## Phase 1 — Landscape

Viable region: PASSES 3 CRITICAL + most HIGH + acceptable MEDIUM.
Dead region: FAILS any CRITICAL.
Boundary: PASSES CRITICAL but soft on HIGH (REFINE).
Unexplored: protocol-level formalization, runner-hook formalization — explicitly deferred to N≥5 / N≥10 thresholds per LOOP_DIAGNOSE precedent.

---

## Phase 2 — Adversarial Evaluation

### VP1 — LOOP_DIAGNOSE verbatim probe

**Check:** does P1 README quote LOOP_DIAGNOSE Step 5+6 verbatim?

**Innovation P1 contains:**
> "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question."

**LOOP_DIAGNOSE verbatim (line 270 of `cognitive_harness/protocols/loop_diagnose.md`):**
> "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question."

✓ Exact match.

**Innovation P1 also contains:**
> "Do not add silent automatic diagnosis-mode inference until at least 10 explicit LOOP_DIAGNOSE runs show stable trigger language with no confusing false positives."

**LOOP_DIAGNOSE verbatim (line 294):**
> "Do not add silent automatic diagnosis-mode inference until at least 10 explicit LOOP_DIAGNOSE runs show stable trigger language with no confusing false positives."

✓ Exact match.

**Verdict: VD1 PASS** — both quotes are verbatim, not paraphrased.

### VP2 — Loose-vs-strict template probe

**Check:** is P2's template operationally a loose guide?

**Innovation P2 structure:**
- 7 numbered sections (Trigger / Affected artifacts / Methodology / Coverage / Evaluation gate / First-instance-bias-ack / Links)
- Each section has a label + open-ended description
- Closing "Notes on this template at N=1" says: "If you're authoring fix #2 or #3 and find the template doesn't fit, deviate — document the deviation in the fix file's Notes section."

**Tension:** the 7-section LIST feels prescriptive; the section CONTENTS are open-ended. An agent reading this might treat the 7 sections as required even when the closing note says deviate.

**Counter-argument:** the explicit deviation license is in the template's body. Agents reading the whole template see both the structure and the deviation invitation.

**Verdict: VD5 PARTIAL** — the structure-vs-content distinction is real but the section list is somewhat prescriptive. The closing deviation note is the load-bearing element.

**REFINE constructive output:** Strengthen template's "deviation is licensed" instruction. Move the deviation note from "closing" position to "opening" position so agents see it before reading the 7 sections. Add explicit text: "These 7 sections are SUGGESTED, not REQUIRED. Sections may be merged, split, omitted, or added depending on the specific fix."

### VP3 — Kill-condition concreteness probe

**Check:** are kill conditions (a) and (b) concrete or subjective?

**Innovation P1 kill conditions:**
- (a) "N=5 future inquiries pass with NO new cognitive-fix applicable cases → retire folder"
- (b) "Cross-fix audit at N=3-5 shows no shared structure → merge documentation into spec_governance.md or another related protocol; retire folder"

**Analysis:**
- (a) is observable: count inquiries since folder creation; check whether any added a new fix; threshold = 5.
- (b) is auditable: read accumulated fix files at N=3-5; check whether shared structure exists across instances.

**Both are concrete triggers, not subjective.**

**Verdict: VD2 PASS** — kill conditions are operationally measurable.

### VP4 — First-instance-bias-ack encoding probe

**Check:** is self-reference acknowledgment structurally encoded?

**Where it appears:**
- P1 README: "First-instance authorship acknowledgment" subsection ✓
- P2 Template: "First-instance-bias acknowledgment" section #6 ✓
- P3 First-instance file: "First-instance-bias acknowledgment" section #6 ✓
- P5 Caveats (in finding): self-reference acknowledgment ✓

4 of 4 artifacts encode the acknowledgment. STRUCTURALLY encoded, not just narrative.

**Verdict: VD3 PASS** — self-reference is encoded across all artifacts; a future maintainer reading any one of them sees the bias-ack without consulting the finding.

### VP5 — Reversibility probe

**Check:** does the folder ACTUALLY have no downstream dependencies?

**Incoming dependencies (what would break if folder deleted):**
- MVL+/SKILL.md does NOT reference `cognitive_harness/cognitive_fixes/` ✓
- MVL2+/SKILL.md does NOT reference ✓
- Other protocols in `cognitive_harness/protocols/` do NOT reference ✓
- Discipline specs do NOT reference ✓

**Outgoing dependencies (what folder references):**
- 01__vague_instruction_decomposition.md references the MVL+ source inquiry's finding + LOOP_DIAGNOSE finding + loop_diagnose.md protocol. These are OUTGOING; deleting the folder doesn't break them.

**Reversibility CLAIM holds.** Folder is deletable with `rm -rf` with no upstream cleanup needed.

**Subtle risk noted:** future edits might create incoming dependencies (e.g., if MVL+/SKILL.md later cites a cognitive_fix). The reversibility claim is true AT FOLDER-CREATION TIME; it's conditional on no future incoming deps being added. README should warn: "Adding incoming dependencies (e.g., spec citations) breaks reversibility; only do so after N≥5 protocol-promotion."

**Verdict: VD4 PASS with note** — actual reversibility holds at creation; future edits could break it; suggest small README addition to warn about this.

**REFINE constructive output:** Add to P1 README's "Reversibility commitment" section: "If a future edit adds an incoming dependency (e.g., a spec or protocol cites a cognitive_fix), reversibility is reduced. Do not add incoming dependencies until N≥5 protocol-promotion threshold is met."

### VP6 — CONTRARIAN partial-survival honesty probe

**Check:** does Innovation honestly acknowledge that "premature-formalization at N=1" CONTRARIAN partially survives?

**Innovation Assembly Check states:**
> "CONTRARIAN PARTIALLY survives — the pattern-learned side is a real residual risk at N=1. But the design has mitigations: loose guide ... kill conditions ... reversibility. The CONTRARIAN doesn't defeat the design; it surfaces the residual the design must honestly carry."

The honest acknowledgment is explicit + names the specific residual (pattern-learned side) + names the mitigations. Not minimized; not over-claimed.

**Verdict: VD6 PASS** — honestly acknowledged.

### VP7 — Staging gate distinctness probe

**Check:** are folder / protocol / hook genuinely distinct levels?

**Distinct elements:**
- **Folder** = `cognitive_harness/cognitive_fixes/` — documentation collection; no operational invocation
- **Protocol** = `cognitive_harness/protocols/cognitive_fixes.md` — operational spec invoked by runner; defines input contract + steps + failure modes (per existing protocol pattern)
- **Hook** = trigger phrase in MVL+/MVL2+ SKILL.md that AUTO-LOADS the protocol; operational integration into runner flow

3 distinct file locations + 3 distinct semantic levels (documentation / invocable spec / auto-loaded spec).

**Verdict: VD7 PASS** — gates are operationally distinct.

---

## Phase 2 — Standard Prosecution Probes

### Prosecution 1: "Kill conditions unlikely to fire — N=5 too generous; folder accumulates stale instances"

**Defense:** N=5 is observable + measurable. Whether it fires depends on inquiry frequency: the user's project has frequent inquiries (this session alone has produced 6+). 5 future inquiries could occur in days. Not too generous in this context.

**Counter survives partially:** N=5 is FREQUENCY-DEPENDENT. If inquiry frequency drops, kill threshold is effectively never. The design assumes continued frequent use.

**REFINE constructive output:** Add to P1 README's kill conditions: "N=5 refers to MVL+/MVL2+ inquiries with multi-part user framing that DON'T add a cognitive_fix; if the user's project goes through long inactivity periods, the kill condition may not fire on time — supplement with a calendar-bound trigger if inactivity exceeds 90 days."

### Prosecution 2: "Loose-guide-not-strict-schema distinction is a fig leaf — agents will treat sections as required regardless"

**Defense:** The template's explicit deviation license is the structural mitigation. Future agents reading the template will see the explicit "deviate when it doesn't fit" instruction.

**Counter survives partially:** Agents (LLMs) do tend toward template-completion bias. Stated "loose" + structured-sections-list may default to template-completion regardless of stated optionality.

**REFINE constructive output (overlaps with VP2's refinement):** Strengthen template's opening line: explicitly state "These 7 sections are SUGGESTED, not REQUIRED. Sections may be merged, split, omitted, or added depending on the specific fix. The trigger-condition section is the only LOAD-BEARING required element — without it, this fix shouldn't be in this folder."

### Prosecution 3: "Documenting methodology in folder makes it harder to abandon"

**Defense:** Reversibility commitment is explicit + technical (`rm -rf` cleanly deletes). No mechanical obstacle to deletion.

**Counter survives partially:** Psychological sunk-cost reluctance is real. Documented folders feel "official" even when technically deletable. Humans may resist deletion despite the kill condition firing.

**REFINE constructive output:** Add to P1 README's reversibility commitment: "If a kill condition fires, DELETE the folder. Do not preserve from sunk-cost reluctance. The folder is documentation of one or a few attempts at a methodology — preserving it after kill condition firing creates zombie infrastructure. The reversibility commitment is operationally meaningful only if the deletion actually happens."

---

## Phase 3 — Per-Candidate Verdicts

| Candidate | Verdict | Notes |
|---|---|---|
| P1 (README) | SURVIVE-with-REFINE | Add (a) future-incoming-dep warning; (b) inactivity-supplement to kill conditions; (c) sunk-cost-reluctance warning |
| P2 (Template) | SURVIVE-with-REFINE | Strengthen opening with explicit "sections suggested not required" + trigger-condition as the only load-bearing required element |
| P3 (First instance) | SURVIVE clean | All sections present + content honest |
| P4 (Operational instructions) | SURVIVE clean | Paste-ready; commands clear |
| P5 (Caveats) | SURVIVE clean | Premature-formalization + reversibility + self-reference all named honestly |

**5 SURVIVE / 0 KILL / 2 REFINE (with 3 distinct constructive outputs).**

---

## Phase 3.5 — Assembly Check

After per-candidate verdicts: artifacts cohere into a rollout package. The 3 REFINE outputs strengthen P1 and P2 without restructuring. Architecture stable.

Emergent value: the design carries 3 named residuals (premature-formalization residual; loose-guide-vs-template-completion residual; sunk-cost-reluctance residual) honestly rather than disguised. Future maintainer reads + sees them.

---

## Phase 4 — Coverage + Convergence

| Failure mode | Status |
|---|---|
| Wrong Dimensions | NOT OBSERVED — 10 dimensions extracted from SDs + LOOP_DIAGNOSE precedent |
| Rubber-Stamping | NOT OBSERVED — 2 REFINE verdicts from VP2/VP5 + 3 REFINEs from prosecutions |
| Nitpicking | NOT OBSERVED — 0 KILLs; REFINEs are targeted |
| Dimension Blindness | NOT OBSERVED — CRITICAL gating on verbatim/concreteness/encoding |
| False Convergence | NOT OBSERVED — clean SURVIVE on 3 of 5 pieces; landscape stable |
| Evaluation Drift | NOT OBSERVED — first pass |
| Self-Reference Collapse | NOT OBSERVED — VP1 verified verbatim against actual artifact text; VP4 verified encoding across 4 locations |

Dimension coverage: 10/10. Adversarial strength: STRONG (7 VP probes + 3 prosecution probes). Landscape stability: STABLE.

---

## Convergence Telemetry

- Dimension coverage: 10/10
- Adversarial strength: STRONG
- Landscape stability: STABLE
- Clean SURVIVE: YES (3 pieces: P3, P4, P5)
- Failure modes observed: NONE

**Overall: PROCEED to CONCLUDE.**

---

## Constructive Outputs for CONCLUDE (5 REFINE items)

1. **P1 README — future-incoming-dependency warning:** Add to "Reversibility commitment" section — "If a future edit adds an incoming dependency (e.g., a spec or protocol cites a cognitive_fix), reversibility is reduced. Do not add incoming dependencies until N≥5 protocol-promotion threshold is met."

2. **P1 README — inactivity-supplement to kill conditions:** Add to "Kill conditions" section — "N=5 refers to MVL+/MVL2+ inquiries with multi-part user framing that DON'T add a cognitive_fix; if the user's project goes through long inactivity periods, the kill condition may not fire on time — supplement with a calendar-bound trigger if inactivity exceeds 90 days."

3. **P1 README — sunk-cost reluctance warning:** Add to "Reversibility commitment" section — "If a kill condition fires, DELETE the folder. Do not preserve from sunk-cost reluctance. Preserving the folder after kill condition firing creates zombie infrastructure."

4. **P2 Template — strengthen loose-guide framing:** Replace opening with — "These 7 sections are SUGGESTED, not REQUIRED. Sections may be merged, split, omitted, or added depending on the specific fix. The trigger-condition section is the only LOAD-BEARING required element — without it, this fix shouldn't be in this folder."

5. **P2 Template — move deviation note to opening:** Move the closing "Notes on this template at N=1" section content to BEFORE the section list so agents see deviation license before encountering the structured sections.

These 5 refinements convert the design from "robust with claimed residuals" to "robust with named residuals + 3 specific anti-zombie / anti-template-completion / anti-incoming-dependency clauses."
