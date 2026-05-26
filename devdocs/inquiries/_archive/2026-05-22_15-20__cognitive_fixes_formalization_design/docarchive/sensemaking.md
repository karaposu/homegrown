# Sensemaking: Cognitive Fixes Formalization — Design Decision

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_15-20__cognitive_fixes_formalization_design/_branch.md`

---

## SV1 — Baseline Understanding

Take exploration's 7 frontier questions + LOOP_DIAGNOSE Step 5/6 verbatim precedent and commit decisions on structural shape, naming, staging, kill condition, create-now-vs-wait, self-reference mitigation, and template-shape (strict-vs-loose).

The deep risk: formalizing at any level from N=1 might enable false-positive future "fixes" (forcing non-applicable cases into the frame). Mitigation: stage gates anchored to external precedent; explicit kill condition; loose guide not strict schema at N=1.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — Stage at right level per LOOP_DIAGNOSE Step 5/6 verbatim precedent
- **C2** — Kill condition explicit (anti-zombie infrastructure)
- **C3** — Self-reference mitigation (I authored first instance)
- **C4** — Paste-ready artifacts (folder structure + template + first-instance entry)
- **C5** — Reversibility — folder+template must be deletable cleanly if pattern doesn't recur

### Key Insights

- **KI1** — Folder+template at N=1 is the right level: methodology-preserving + reversible + low-cost (~30 min) + doesn't claim protocol-level stability
- **KI2** — User's proposed name `cognitive_fixes` wins on breadth; can absorb future non-instruction-decomposition fixes
- **KI3** — First instance KIND-name = `vague_instruction_decomposition` (operation-named, not mechanism-named)
- **KI4** — Create NOW (don't wait for MVL+ branch experiment validation) — captures methodology while fresh; reversibility caps risk
- **KI5** — Kill condition needs a CONCRETE trigger, not subjective judgment
- **KI6** — Loose-guide template at N=1; refactor to strict schema only at N=3+ when cross-instance structure becomes visible
- **KI7** — LOOP_DIAGNOSE Step 5/6 verbatim language must anchor the staging gates (external precedent, not my judgment)
- **KI8** — Folder+template formalization at N=1 is at a LOWER level than what LOOP_DIAGNOSE Step 5 prohibits (which is protocol promotion); the precedent allows lower-level formalization at N=1

### Structural Points

- **SP1** — Folder structure: `cognitive_harness/cognitive_fixes/` containing `_template.md` + `README.md` + `01__vague_instruction_decomposition.md`
- **SP2** — Staging gates: N=1 folder/template; N≥3 audit + maybe refine template; N≥5 consider protocol promotion; N≥10 consider runner hook
- **SP3** — Kill condition: N=5 future inquiries WITH NO new applicable cases → retire folder; OR cross-fix audit at N=3-5 shows no shared structure → merge into another protocol
- **SP4** — Self-reference mitigation: LOOP_DIAGNOSE Step 5/6 verbatim language quoted in README + first-instance-bias acknowledgment in template
- **SP5** — Template format: loose guide (4-6 sections; no strict schema) at N=1

### Foundational Principles

- **FP1** — External precedent anchoring (LOOP_DIAGNOSE) over agent judgment for staging gates
- **FP2** — Reversibility is acceptable substitute for evidence when cost is low
- **FP3** — Honest kill condition prevents zombie infrastructure
- **FP4** — User's naming choice respected unless structurally problematic

### Meaning-Nodes

- **MN1** — "Cognitive fix" = a documented application of the user's decompose-vague-instructions-with-coverage methodology to a specific recurring LLM failure mode
- **MN2** — "Folder of fixes" = accumulation point for documented fixes; not a protocol; not authoritative
- **MN3** — "Staging gate" = N-count-based threshold for promoting formalization level (folder → protocol → hook)
- **MN4** — "Kill condition" = explicit retire-trigger that prevents zombie infrastructure if pattern doesn't recur

---

## Phase 2 — Perspective Checking

### Technical / Logical

Folder+template+index is the minimum formalization that preserves methodology while remaining reversible. Anything lighter loses methodology; anything heavier overreaches. Anchor: shape (b) at N=1.

### Strategic / Long-term

If the pattern recurs (N=3-5+), the folder evolves into a real corpus and template into a schema. If the pattern doesn't recur, the folder + first-instance + template document the methodology even orphaned. Both paths produce value; no path destroys value.

### Risk / Failure

- **R-RISK-1** — Folder becomes a "place to dump anything we want to call a fix" — over-broad usage. **Mitigation:** template includes trigger condition; only fixes meeting trigger are indexed.
- **R-RISK-2** — Methodology I authored gets reified before validation. **Mitigation:** kill condition + LOOP_DIAGNOSE-precedent staging + first-instance-bias-ack in template.
- **R-RISK-3** — Template adds bureaucratic overhead. **Mitigation:** loose guide not strict schema at N=1; ~5 min per future fix not ~30.
- **R-RISK-4** — Cross-fix audit at N=3-5 reveals no shared structure. **Mitigation:** kill condition includes this trigger.

### Resource / Feasibility

- Folder + template + index: ~30 min one-time
- Per-future-fix: ~5-10 min consultation + ~10-15 min documentation
- Reversibility: 100% (folder deletable; no downstream dependencies created until protocol promotion)

### Definitional / Frame-exit Completeness

**Gating fires** on multi-value terms: "formalization," "staging," "cognitive fix," "kill condition."

**Existence Enumeration:**
- "Formalization": referents = folder / template / protocol / runner-hook / standalone-discipline. Inquiry frame: folder+template (lightest above pure-memory).
- "Staging": referents = N-count / time-based / event-based / mixed. Frame: N-count anchored to LOOP_DIAGNOSE precedent.
- "Cognitive fix": referents = a methodology application / a documented case / a recurring pattern / a protocol-level rule. Frame at N=1: documented case applying the methodology to one situation; pattern only emerges across cases.
- "Kill condition": referents = retire-folder / merge-into-protocol / fold-into-discipline / leave-as-archive / no-explicit-kill. Frame: retire-folder if N=5 no new cases; merge-into-related-protocol if cross-fix audit shows no shared structure.

**Role Assessment:** All referents in-scope; no re-location needed.

**Verdict Rigor:** counter on "create now" vs "wait for MVL+ branch experiment":
- Counter: waiting respects LOOP_DIAGNOSE Step 5 spirit (don't formalize from unvalidated chain)
- Why counter doesn't dominate: LOOP_DIAGNOSE Step 5 prohibits PROTOCOL promotion from N=1, not folder+template. Folder+template is at a lower level of formalization than protocol; it's the "monitoring question" equivalent of MC1 in the LOOP_DIAGNOSE finding — preserve evidence without committing.

### Phase / Calibration-State

Current state: N=1 application. Methodology is hypothetical-stable. Branch experiment of the MVL+ fix is pending (not yet validated). The cognitive_fixes formalization should NOT commit to anything contingent on the branch experiment's validation; it should be reversible.

### New anchors

- **KI9** — Branch experiment of MVL+ fix is independent of cognitive_fixes folder existence; the folder documents the methodology regardless of whether MVL+ fix passes its gate
- **KI10** — First-instance-bias-ack in the template is the structural mitigation against my authorship; template should explicitly say "first instance was Claude-authored; future instances should be cross-author-validated where possible"

---

## SV3 — Multi-Perspective Understanding

The decision factors:
1. **Shape** — folder+template+index (b) at N=1
2. **Name** — `cognitive_fixes` (user-proposed) + first instance KIND `vague_instruction_decomposition`
3. **Staging** — N=1 folder; N≥3 audit; N≥5 protocol; N≥10 hook (mirroring LOOP_DIAGNOSE Step 5/6 verbatim language)
4. **Kill condition** — N=5-no-new-cases OR cross-fix-audit-shows-no-shared-structure
5. **Timing** — NOW (not wait for branch experiment); reversibility caps risk
6. **Self-reference** — LOOP_DIAGNOSE-precedent + first-instance-bias-ack in template
7. **Template shape** — loose guide (4-6 sections) at N=1; refactor at N=3+

---

## Phase 3 — Ambiguity Collapse

### A1: Shape — folder+template OR something lighter/heavier?

**Counter:** A markdown one-pager somewhere in devdocs/ would suffice; folder is over-engineering.

**Why counter fails:** one-pager has no slot for future instances; methodology drifts when fix #2 happens. Folder creates a place for accumulation. Cost is low (~30 min); benefit is the accumulation slot.

**Confidence:** HIGH.

**Resolution:** folder+template+index at `cognitive_harness/cognitive_fixes/`.

### A2: Naming — `cognitive_fixes` OR alternative?

**Counter:** `coverage_enforcement` is more precise.

**Why counter fails:** Narrower; would not house non-coverage fixes if future patterns emerge. User explicitly proposed `cognitive_fixes`; breadth is appropriate at N=1 (we don't yet know what kinds will accumulate).

**Confidence:** HIGH.

**Resolution:** Folder = `cognitive_fixes/`. First instance KIND = `vague_instruction_decomposition`.

### A3: Staging gates — what specific N counts?

**Counter:** Don't quote N counts at all; "when stable" is sufficient.

**Why counter fails:** "When stable" is subjective and invites drift. LOOP_DIAGNOSE Step 5 uses "5 to 10" verbatim; Step 6 uses "at least 10" verbatim. Anchoring to verbatim quotes uses external precedent.

**Confidence:** HIGH.

**Resolution:** Quote LOOP_DIAGNOSE Step 5 verbatim ("5 to 10 ... show stable internal method") for protocol promotion threshold. Quote Step 6 verbatim ("at least 10 ... stable trigger language") for hook promotion. Don't invent new numbers.

### A4: Kill condition — what trigger?

**Counter:** Kill conditions are typically subjective ("when not useful"); concrete triggers over-specify.

**Why counter fails:** subjective kill conditions never fire; zombie infrastructure accumulates. Concrete triggers force the decision.

**Confidence:** HIGH.

**Resolution:** Two concrete kill triggers:
- (a) N=5 future inquiries pass without adding a cognitive_fix → retire folder
- (b) Cross-fix audit at N=3-5 shows no shared structure (each fix is bespoke) → merge documentation into `spec_governance.md` or another existing protocol; retire folder

### A5: Create now or wait for branch experiment?

**Counter:** Wait for MVL+ branch experiment — if it fails, the methodology might not be worth formalizing.

**Why counter fails:** Branch experiment validates whether the SPECIFIC MVL+ fix passes; doesn't directly validate the METHODOLOGY (which has 7 generic steps applicable beyond instruction-decomposition). Folder+template captures the methodology; it's reversible. If MVL+ branch experiment fails AND no future fixes emerge in 5 inquiries, kill condition fires and folder retires. Reversibility caps risk.

**Confidence:** MEDIUM-HIGH (waiting has structural argument but reversibility wins).

**Resolution:** Create NOW. Folder documents methodology + first instance. Kill condition handles "what if MVL+ fails + no future fixes."

### A6: Strict schema OR loose guide template?

**Counter:** Strict schema enables cross-instance comparison earlier.

**Why counter fails:** At N=1 the right schema is unknown; strict schema force-fits future instances to current example's shape. Loose guide preserves variation; cross-instance structure emerges at N=3+ and informs schema refinement.

**Confidence:** HIGH.

**Resolution:** Loose guide template (4-6 sections; no strict required fields) at N=1. Refactor to schema only when cross-instance pattern is visible.

### A7: Self-reference mitigation specifics

**Counter:** Self-reference vigilance handled by exploration already; no further action needed.

**Why counter fails:** Mitigation must be encoded in the artifact (template + README), not just exploration narrative. Encoding ensures future maintainers see the bias-acknowledgment without consulting exploration.md.

**Confidence:** HIGH.

**Resolution:** Two encoded mitigations:
- (a) Quote LOOP_DIAGNOSE Step 5/6 verbatim in README + staging-gate section
- (b) Add "first-instance-bias acknowledgment" subsection to template indicating Claude authored the first instance and future instances should be cross-author-validated where feasible

### Load-bearing concept tests

**LBT1 — "Cognitive fix" distinguishable from "ordinary methodology change"?**

- Counter: any spec change could be re-labeled a "cognitive fix."
- Why counter doesn't dominate: cognitive fix has SPECIFIC TRIGGER (recurring LLM coverage-failure across runs) + SPECIFIC STRUCTURE (decompose + structural fail-safe). Spec changes for other reasons (new feature, refactoring, deprecation, dependency update) don't follow the trigger+structure pattern. Template's trigger-condition field filters non-applicable cases.
- **PASS.** Concept distinguishable via trigger + structure.

**LBT2 — "Staging gate" measurable?**

- Counter: N=5 is arbitrary; "stable internal method" is judgment.
- Why counter doesn't dominate: N counts are OBSERVABLE (apply or don't apply per future inquiries). "Stable" is judgment but anchored to OBSERVABLE auditable thing ("shared structure across instances" — can be audited by reading the instances). LOOP_DIAGNOSE precedent uses the same judgment-anchored language; we inherit the precedent.
- **PASS.** Operationally measurable via N counts + auditable shared-structure check.

---

## SV4 — Clarified Understanding

The 7 ambiguities resolve. The design is committed:

| Decision | Value |
|---|---|
| Shape | Folder + template + index at `cognitive_harness/cognitive_fixes/` |
| Folder name | `cognitive_fixes` (user-proposed) |
| First instance KIND | `vague_instruction_decomposition` |
| Staging gates | LOOP_DIAGNOSE Step 5/6 verbatim: N≥5 for protocol promotion; N≥10 for hook |
| Kill condition | (a) N=5 future inquiries no new cases → retire; (b) cross-fix audit at N=3-5 shows no shared structure → merge + retire |
| Timing | Create NOW; reversibility caps risk |
| Self-reference | LOOP_DIAGNOSE quotes in README + first-instance-bias-ack in template |
| Template shape | Loose guide at N=1; refactor to schema at N=3+ |

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

| # | Parameter | Value |
|---|---|---|
| F1 | Folder path | `cognitive_harness/cognitive_fixes/` |
| F2 | First instance path | `cognitive_harness/cognitive_fixes/01__vague_instruction_decomposition.md` |
| F3 | Template path | `cognitive_harness/cognitive_fixes/_template.md` |
| F4 | Index/README path | `cognitive_harness/cognitive_fixes/README.md` |
| F5 | Staging — protocol promotion threshold | N≥5 (LOOP_DIAGNOSE Step 5 verbatim "5 to 10") |
| F6 | Staging — hook promotion threshold | N≥10 (LOOP_DIAGNOSE Step 6 verbatim "at least 10") |
| F7 | Kill condition (a) | N=5 future inquiries no new cases → retire |
| F8 | Kill condition (b) | Cross-fix audit at N=3-5 shows no shared structure → merge + retire |
| F9 | Timing | Create NOW |
| F10 | Template shape | Loose guide (4-6 sections; no strict required fields) |
| F11 | Self-reference encoding | LOOP_DIAGNOSE quotes in README + first-instance-bias-ack in template |
| F12 | Reversibility | Folder must be cleanly deletable (no downstream dependencies until protocol promotion) |
| F13 | User-proposed name preserved | YES (`cognitive_fixes`) |

### Eliminated

- Aggressive (full protocol now from N=1) — overreach per LOOP_DIAGNOSE Step 5
- Lazy (do nothing) — methodology drift risk
- Minimal (flat file) — eventual refactor needed; just do folder now
- Strict schema at N=1 — force-fits future instances
- Naming alternatives (`coverage_enforcement` etc.) — too narrow
- Subjective kill condition — never fires; zombie risk
- Waiting indefinitely for branch experiment — reversibility makes wait unnecessary

---

## SV5 — Constrained Understanding

Decomposition + Innovation will produce:
- The `_template.md` text (loose guide, 4-6 sections)
- The `README.md` text (purpose + staging + kill condition + LOOP_DIAGNOSE quotes + first-instance-bias-ack)
- The `01__vague_instruction_decomposition.md` text (the MVL+ fix indexed as first instance, following the template)
- The promotion-gate specification (separate or in README)
- The caveats acknowledgment

Critique will probe whether the artifacts honor LOOP_DIAGNOSE precedent + reversibility + self-reference mitigation + premature-formalization risks.

---

## Phase 5 — Conceptual Stabilization

### Integrated model

`cognitive_harness/cognitive_fixes/` is a folder of documented LLM-failure-mode fixes. Each fix has a KIND (the operation it performs) and follows a loose-guide template. The folder is at a LOWER level of formalization than a protocol — it preserves methodology + accumulates evidence without claiming protocol-level stability. Staging gates (anchored verbatim to LOOP_DIAGNOSE Step 5/6) define when the folder promotes to a protocol (N≥5) or runner hook (N≥10). Kill conditions prevent zombie infrastructure if the pattern doesn't recur.

The first instance (`01__vague_instruction_decomposition.md`) documents the methodology applied to MVL+ Question-field instruction. Future instances accumulate as `02__*.md`, `03__*.md`, etc.

Self-reference mitigation (Claude authored both methodology and first instance) handled via two encoded artifacts: LOOP_DIAGNOSE verbatim quotes in README (external precedent anchoring) + first-instance-bias-ack in template (explicit warning).

### Accommodation trigger check

No model-misfit signal. Settles cleanly.

---

## SV6 — Stabilized Model

### Committed Structural Decisions (SDs)

| SD | Decision |
|---|---|
| **SD1** | Shape = folder+template+index (b) at `cognitive_harness/cognitive_fixes/` |
| **SD2** | Folder name = `cognitive_fixes` (user-proposed) |
| **SD3** | First instance KIND name = `vague_instruction_decomposition` |
| **SD4** | First instance path = `cognitive_harness/cognitive_fixes/01__vague_instruction_decomposition.md` |
| **SD5** | Template path = `cognitive_harness/cognitive_fixes/_template.md` |
| **SD6** | Index/README path = `cognitive_harness/cognitive_fixes/README.md` |
| **SD7** | Staging — protocol promotion at N≥5 (LOOP_DIAGNOSE Step 5 verbatim quote) |
| **SD8** | Staging — runner hook promotion at N≥10 (LOOP_DIAGNOSE Step 6 verbatim quote) |
| **SD9** | Kill condition (a) = N=5 future inquiries with NO new applicable cases → retire folder |
| **SD10** | Kill condition (b) = cross-fix audit at N=3-5 shows no shared structure → merge into `spec_governance.md` or another protocol; retire folder |
| **SD11** | Timing = create NOW (reversibility caps risk) |
| **SD12** | Template shape = loose guide (4-6 sections; no strict required fields) at N=1; refactor at N=3+ if cross-instance structure emerges |
| **SD13** | Self-reference mitigation = (i) LOOP_DIAGNOSE Step 5/6 verbatim quotes in README; (ii) first-instance-bias-ack subsection in template explicitly noting Claude authored first instance and future fixes should be cross-author-validated where feasible |
| **SD14** | Reversibility = folder must be cleanly deletable; no downstream dependencies until N≥5 protocol-promotion |

### How SV6 differs from SV1

SV1 framed the question as "should we formalize?" SV6 commits 14 SDs that operationalize "formalize at the right level (folder+template, NOT protocol) with explicit staging + kill condition + self-reference mitigation."

---

## Saturation Indicators

| Indicator | Status |
|---|---|
| Perspective saturation | YES — 5 perspectives; Frame-exit Completeness fired on 4 multi-value terms |
| Ambiguity resolution | 7/7 + 2 LBTs PASS |
| SV delta | SV1 (territory) → SV6 (14 SDs); clear progression |
| Anchor diversity | All 5 anchor types present |

---

## Failure-mode check

| Failure mode | Status |
|---|---|
| Status Quo Bias | NOT OBSERVED — chose to create new structure rather than preserve none |
| Premature Stabilization | NOT OBSERVED — 7 ambiguities each tested with strongest counter |
| Anchor Dominance | NOT OBSERVED |
| Perspective Blindness | NOT OBSERVED — Frame-exit Completeness FIRED + resolved on 4 terms |
| Clean Resolution Trap | NOT OBSERVED — all counters tested structurally |
| Self-Reference Blindness | NOT OBSERVED — SD13 explicitly encodes mitigation into artifacts |

---

## Self-Assessment Verdict

**PROCEED to Decomposition with 14 committed Structural Decisions (SD1-SD14).**
