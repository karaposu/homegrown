# Critique: Structural Fix Design — Comparison-Axis-Enumeration Gap

## Phase 0 — Dimension Construction

### Dimensions with weights

**Critical (1.0):**

| # | Dimension | Source |
|---|---|---|
| D1 | **MC1 wording precision** — trigger phrase bounded; 3 axis categories defensible; failure-mode reference correct | Innovation Q2 |
| D2 | **MC2 wording precision** — past-tense vs forward-looking framing; insertion-point integration | Innovation Q3 |
| D3 | **MC3 wording precision** — sub-aspect probe-question style; placement | Innovation Q4 |
| D4 | **Auto-memory compliance per edit** — no outbound paths | Q6 + spec patterns |
| D5 | **HCR cross-reference accuracy** — quoted spec text + insertion locations correct | 12 HCRs |
| D6 | **Cross-discipline coherence** — defense-in-depth survives strong prosecution | Q5 |
| D7 | **Property-(v) Inversion compliance** — alternative shapes named + 5-tested + override-recorded per Q2/Q3/Q4 | innovate.md 401-410 |
| D8 | **Synthesis Trigger fulfillment** — 8 priors re-tested with cited evidence | Q7 |

**High (0.85):**

| # | Dimension | Source |
|---|---|---|
| D9 | **MC1 branch-experiment necessity final verdict** | 21-00-30 conditional recommendation |
| D10 | **Sequencing recommendation defensibility** | Q5 |
| D11 | **Innovation deferral honesty** | Q5 + 21-00-30 MC4 monitoring |
| D12 | **Inherited Frame Audit 6-component compliance** | innovate.md 479-484 |

**Medium (0.65):**

| # | Dimension | Source |
|---|---|---|
| D13 | **Spec-pattern fidelity per edit** — MC1 inline bold-rule; MC2 sentence-append; MC3 sub-aspect-bullet | Exploration findings |
| D14 | **Layer-3 §9 framing accuracy** — Property (v) fires; narrative rejection; count N=4 | Sensemaking C-D9-C-D10 |

**Low (0.3):**

| # | Dimension | Source |
|---|---|---|
| D15 | **Stylistic consistency** | structural review |

**Project-specific risk dimension check:** D4 (auto-memory) + D7 (Property-(v) Inversion) + D11 (Innovation deferral honoring 21-00-30 monitoring guardrail) + D14 (Layer-3 §9). 4 project-specific risk dimensions included. ✓

15 dimensions: 8 critical + 4 high + 2 medium + 1 low.

---

## Phase 1 — Fitness Landscape

Viable: all 8 critical PASS + at least 3 of 4 high + at least 1 of 2 medium.
Boundary (REFINE): all critical PASS but 1 high FAILS OR 2 medium FAIL.
Dead (KILL): any critical FAILS.

---

## Phase 2 — Adversarial Evaluation

### Q1 (Context + Gap Motivation)
- Prosecution: "git evidence is summary; verify by re-checking explore.md's full history." Defense: 7 commits + explore_old.md verified directly by Bash in prior exchange; no axis-enumeration mechanism in any version.
- D5 HCR-9 (git history) ACCURATE.
- **Verdict: SURVIVE.**

### Q2 (MC1 Exploration spec edit)
- **D1 wording precision prosecution:**
  - Over-constrain edge case: "informal 2-option pros/cons paragraph triggers the rule unnecessarily." Defense: trigger requires "per-option comparison STRUCTURE (pros/cons TABLE; multi-attribute scoring GRID; ranked list with STATED CRITERIA)." Conversational 2-option text doesn't match. ✓ Bounded.
  - Under-constrain edge case: "runner produces 6-option pros/cons table but populates cells without a labeled axis-row." Defense: the wording requires "the axis list IS an artifact-observable output: a labeled row above option-rows OR a named axis-list above the table." If neither is present, the rule wasn't applied; observable defect. ✓ Caught.
  - Subtler under-constrain: "runner enumerates axes including (b) project-architecture invariants but doesn't recognize that installability is one for the specific case." Defense: this is RUNNER-JUDGMENT-DEPENDENT; no spec text fully eliminates. The wording names the category + leaves identification to runner per inquiry. Acceptable limitation; consistent with all spec mechanisms.
- D5 HCR-1 + HCR-10 (Explore §3.1 verbatim + MC1 final wording) verified against direct spec read.
- D13 spec-pattern fidelity: MC1 matches §3.5 "Type-aware probing" inline bold-rule pattern. ✓
- D7 Property-(v) Inversion compliance: REPAIR alternative named + 5-tested + override-recorded with structural reason ("ADD-CONTENT preserves bounded trigger; REPAIR couples two distinct concerns") + contextual reason (citing explore.md's §3.5 + §3.3 additive-rule precedent). 6-component criterion satisfied. ✓
- **Verdict: SURVIVE.**
- **D9 branch-experiment necessity FINAL VERDICT:** the MC1 wording survives strong prosecution above. Edge cases identified are runner-judgment-dependent (not wording-fixable). **Branch experiment NOT REQUIRED.** Direct commit viable. The 21-00-30 "PROBABLY YES" was CAUTION-recommendation; Critique's adversarial test discharges the caution.

### Q3 (MC2 Critique spec edit)
- **D2 wording precision prosecution:**
  - Past-tense framing: the existing exemplar list is "across recent inquiries: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit." MC2 adds a separate forward-looking sentence after the list, preserving tense consistency. ✓
- **D4 auto-memory compliance scrutiny on MC2:**
  - The MC2 wording references "installability boundaries between cognitive_harness/ and repo-level folders." Is "cognitive_harness/" an outbound POINTER or CONCEPTUAL anchor?
  - Auto-memory's literal scope: "outbound pointers to design-history, theory, or other folders — for example, 'design history preserved at <docs|enes>/...' or 'see also <docs|enes>/...'."
  - The memory's examples are TRAVERSAL POINTERS ("preserved at X"; "see also Y"). MC2's reference is "between cognitive_harness/ AND repo-level folders" — describes a BOUNDARY, not a traversal.
  - However: the string "cognitive_harness/" with trailing slash is PATH-LIKE. A stricter reading could object that this looks like an outbound reference to the discipline's own enclosing folder.
  - **PROSECUTION SURFACES A REAL CONCERN.** To be maximally compliant + future-reader-clear, the wording should avoid the path-like form. **REFINE TARGET:** replace "cognitive_harness/ and repo-level folders" with a more conceptually-anchored phrasing.
- D5 HCR-3 + HCR-11 (Critique Phase 0 verbatim + MC2 wording) verified.
- D13 spec-pattern fidelity: sentence-append matches; ✓
- D7 Inversion compliance: REORGANIZE alternative named + 5-tested + override-recorded.
- **Verdict: REFINE — minor wording polish to remove path-like ambiguity.**
- **Refinement target:** replace the parenthetical in MC2's wording.
  - From: "(e.g., 'does this candidate respect installability boundaries between cognitive_harness/ and repo-level folders?')"
  - To: "(e.g., 'does this candidate respect installability boundaries between this discipline's installable harness and repo-level content?')"
  - This removes the path-like string while preserving the conceptual anchor.

### Q4 (MC3 Sensemaking spec edit)
- D3 wording precision: matches existing question-probe style; placement at end of Phase 5 sub-aspect list correct.
- D4 auto-memory compliance: references "project's architectural invariants — installability boundaries, folder-independence commitments, artifact-boundary placement" + "a layer outside the discipline's scope" — all conceptual; no paths.
- D5 HCR-4 + HCR-12 verified.
- D7 Inversion compliance: REPAIR alternative named + 5-tested + override-recorded.
- **Verdict: SURVIVE.**

### Q5 (Cross-discipline coherence + sequencing)
- **D6 coherence prosecution:** "construct a case where MC1+MC2+MC3 all miss." Adversarial scenario: runner enumerates axes (MC1 fires) including project-architecture invariants but the SPECIFIC architectural concern (e.g., a temporal-coupling between two folders during install) isn't a placement/coupling/installability concern in the conventional sense — it's an install-order concern. Sensemaking probes load-bearing concept (MC3 fires) at Phase 5 commit but the temporal-coupling isn't surfaced. Critique applies project-architecture dimension (MC2 fires) when candidate affects placement/coupling/installability — but again, temporal-coupling is an edge case.
  - Defense: this is RUNNER-JUDGMENT-DEPENDENT pattern-matching. The 3 edits name the CATEGORY (project-architecture invariants) but can't enumerate all instance shapes. Per Sensemaking's coherence load-bearing concept test: MEDIUM-HIGH effective — not infallible. The defense-in-depth claim is calibrated honestly to its limitations.
- **D10 sequencing prosecution:** "MC1 deferred while MC2+MC3 commit immediately is asymmetric — why not bundle all 3?" Defense: 21-00-30's MC1 was MEDIUM-RISK; MC2+MC3 LOW-RISK. The asymmetric sequencing was CAUTION-recommendation. Critique's verdict on MC1 (D9 above) UPDATES sequencing: MC1 direct commit now viable. **All 3 can commit immediately.**
- **D11 Innovation deferral honesty:** Q5 acknowledges Innovation's comparison-structure gap is out-of-scope per 21-00-30 MC4 monitoring. Defense: 21-00-30's MC4 explicitly DEFERS cross-discipline-protocol candidate to evidence-accumulation. Honoring this is structurally honest.
- **Verdict: SURVIVE** with sequencing recommendation UPDATED (all 3 direct commit).

### Q6 (Compliance record)
- D4 auto-memory per edit: MC1 ✓; MC2 REFINE pending (per Q3 verdict); MC3 ✓.
- D7 Property-(v) Inversion compliance: verified per Q2/Q3/Q4.
- D12 Inherited Frame Audit 6-component compliance: verified (structural + contextual + not empty + not generic + not single-component + not abuse-vector).
- D14 Layer-3 §9 framing: Property (v) fires + narrative rejection + count N=4 + pattern N=12. Consistent with 03-30 + 21-00-30 lesson.
- **Verdict: SURVIVE** (MC2 wording REFINE flows through here automatically once applied).

### Q7 (Inherited Commitments Re-test)
- D8 Synthesis Trigger fulfillment: 8 priors named + each cross-referenced to specific pieces of the finding. ✓
- **Verdict: SURVIVE.**

---

## Phase 3 — Verdicts Summary

| # | Candidate | Verdict | Refinement target |
|---|---|---|---|
| 1 | Q1 — Context + Gap | SURVIVE | — |
| 2 | Q2 — MC1 Exploration spec edit | SURVIVE | — |
| 3 | Q3 — MC2 Critique spec edit | **REFINE** | Replace "cognitive_harness/ and repo-level folders" with "this discipline's installable harness and repo-level content" to remove path-like ambiguity |
| 4 | Q4 — MC3 Sensemaking spec edit | SURVIVE | — |
| 5 | Q5 — Cross-discipline coherence + sequencing | SURVIVE | Note: sequencing updated — MC1 direct commit now viable post-Critique |
| 6 | Q6 — Compliance record | SURVIVE | MC2 wording REFINE flows through |
| 7 | Q7 — Re-test | SURVIVE | — |

**Totals: 6 SURVIVE clean + 1 REFINE (Q3 MC2 minor wording polish). 0 KILL.**

**Critical update from Critique:** MC1 branch-experiment NOT REQUIRED. Direct commit viable. Sequencing recommendation updated.

---

## Phase 3.5 — Assembly Check

After all 7 candidates evaluated, the 5 emergent properties from Innovation's Assembly check:

1. Defense-in-depth via 3 stages — SURVIVES.
2. Pattern-fidelity per host spec — SURVIVES.
3. Auto-memory compliance per edit — SURVIVES (with MC2 REFINE applied).
4. MC1 branch-experiment conditional — UPDATED: NOT REQUIRED post-Critique.
5. Innovation deferral honest — SURVIVES.

All 5 survive (with #4 explicitly resolved). No new emergent candidate.

---

## Phase 4 — Coverage + Convergence

Coverage: all 15 dimensions tested. Critical dimensions PASS at all candidates (with MC2 REFINE noted for D4 polish).

Convergence: clean SURVIVE exists at 6/7 candidates; 1 minor REFINE with concrete fix. TERMINATE viable after REFINE applied.

---

## Convergence Telemetry

- Dimension coverage: 15 dimensions; project-specific risk SATISFIED.
- Adversarial strength: STRONG (killer objections constructed; MC1 over/under-constrain tested; MC2 path-likeness caught).
- Landscape stability: STABLE (1 REFINE; no critical failures).
- Clean SURVIVE: YES (6/7 clean; 1 minor REFINE).
- Failure modes observed: 0/7.

**Overall: PROCEED to CONCLUDE with REFINE applied (MC2 wording polish).**

---

## Verdict

**PROCEED to CONCLUDE** with the following REFINEs applied during finding compilation:

1. **MC2 wording polish:** in the proposed wording, replace "installability boundaries between cognitive_harness/ and repo-level folders" with "installability boundaries between this discipline's installable harness and repo-level content."

2. **Sequencing update:** the Critique's adversarial test on MC1 wording surfaced runner-judgment-dependent edge cases (not wording-fixable). MC1 branch experiment NOT REQUIRED. **Updated sequencing: all 3 spec edits can commit directly.** MC2+MC3 LOW-RISK additive (immediate); MC1 also direct-commit viable (Critique-approved wording).

Headline for CONCLUDE compilation:
- 3 spec-edit wordings ready for direct application (MC1 + MC2-with-refine + MC3).
- Defense-in-depth across 3 pipeline stages (surface / stabilize / adversarial-test).
- Auto-memory compliance verified per edit.
- MC1 branch-experiment dropped (Critique-discharged).
- Innovation comparison-structure gap deferred to 21-00-30 MC4 monitoring.
- Layer-3 §9 count stays N=4; pattern N=12 cumulative.
